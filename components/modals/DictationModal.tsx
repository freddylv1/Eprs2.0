'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { WordItem, FontSizePreference } from '../../lib/types';
import { audioManager } from '../../lib/audioManager';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import {
  X,
  Volume2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Flame,
  ChevronRight,
  Eye,
  EyeOff,
  Headphones,
  Pencil,
  Sparkles,
  Sliders,
  Play,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  Check,
  Music
} from 'lucide-react';

interface DictationModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: WordItem[];
  batchTitle?: string;
  fontSize?: FontSizePreference;
}

export const DICTATION_COUNT_OPTIONS = [10, 20, 30, 50, 100] as const;
export type DictationCountType = (typeof DICTATION_COUNT_OPTIONS)[number];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function buildDictationPool(sourceWords: WordItem[], targetCount: number = 20): WordItem[] {
  if (!sourceWords || sourceWords.length === 0) return [];
  let pool: WordItem[] = [];
  while (pool.length < targetCount) {
    pool.push(...shuffleArray(sourceWords));
  }
  return pool.slice(0, targetCount);
}

// 播放柔和的答對 / 提示音效（透過 Web Audio API，離線原生且輕量）
function playFeedbackTone(type: 'success' | 'show_answer') {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === 'success') {
      // 清脆雙和弦琶音
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else {
      // 溫和提示音
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(349.23, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch {
    // 忽略音效錯誤
  }
}

export function DictationModal({
  isOpen,
  onClose,
  words,
  batchTitle = '當前批次',
  fontSize = 'medium'
}: DictationModalProps) {
  const fontClasses = getModalFontSizeClasses(fontSize);

  // 設定選項
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [autoSpeakOnLoad, setAutoSpeakOnLoad] = useState<boolean>(true);
  const [autoAdvanceOnCorrect, setAutoAdvanceOnCorrect] = useState<boolean>(true);
  const [showChineseHintDefault, setShowChineseHintDefault] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // 測驗題庫與題目狀態
  const [questions, setQuestions] = useState<WordItem[]>(() =>
    buildDictationPool(words, questionCount)
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // 當前題目作答判定
  const [hasRevealedAnswer, setHasRevealedAnswer] = useState<boolean>(false);
  const [hasCompletedCurrent, setHasCompletedCurrent] = useState<boolean>(false);
  const [showCurrentChinese, setShowCurrentChinese] = useState<boolean>(false);

  // 統計與計分
  const [correctList, setCorrectList] = useState<WordItem[]>([]);
  const [wrongOrRevealedList, setWrongOrRevealedList] = useState<WordItem[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);

  // 倒數自動跳題定時器
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 初始化題庫
  const initQuestions = useCallback(
    (customWords?: WordItem[], customCount?: number) => {
      const sourceWords = customWords && customWords.length > 0 ? customWords : words;
      if (!sourceWords || sourceWords.length === 0) return;

      const targetCount = customCount || questionCount;
      const pool = buildDictationPool(sourceWords, targetCount);

      setQuestions(pool);
      setCurrentIndex(0);
      setUserInput('');
      setHasRevealedAnswer(false);
      setHasCompletedCurrent(false);
      setShowCurrentChinese(showChineseHintDefault);
      setCorrectList([]);
      setWrongOrRevealedList([]);
      setIsFinished(false);
      setStreak(0);
    },
    [words, questionCount, showChineseHintDefault]
  );

  // 清理定時器
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, []);

  const currentWord = questions[currentIndex] || null;

  // 播放單字發音
  const playWordAudio = useCallback(
    (wordToSpeak?: string) => {
      const target = wordToSpeak || currentWord?.word;
      if (!target) return;
      setIsSpeaking(true);
      audioManager.setRate(speechRate);
      audioManager.speakWord(target, () => {
        setIsSpeaking(false);
      });
    },
    [currentWord, speechRate]
  );

  // 慢速逐音節發音
  const playSyllablesAudio = useCallback(() => {
    if (!currentWord) return;
    setIsSpeaking(true);
    audioManager.setRate(speechRate);
    audioManager.speakSyllablesSequentially(
      currentWord.syllables || [currentWord.word],
      currentWord.word,
      undefined,
      () => {
        setIsSpeaking(false);
      }
    );
  }, [currentWord, speechRate]);

  // 即時比對拼寫目標
  const targetClean = useMemo(() => {
    if (!currentWord) return '';
    return currentWord.word.trim().toLowerCase();
  }, [currentWord]);

  const userClean = useMemo(() => {
    return userInput.trim().toLowerCase();
  }, [userInput]);

  // 比對狀態計算
  const isMatchExact = targetClean.length > 0 && userClean === targetClean;
  const isPrefixMatch = targetClean.startsWith(userClean);
  const hasMismatch = userClean.length > 0 && !isPrefixMatch;

  // 前往下一題
  const handleNextQuestion = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setUserInput('');
      setHasRevealedAnswer(false);
      setHasCompletedCurrent(false);
      setShowCurrentChinese(showChineseHintDefault);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, questions.length, showChineseHintDefault]);

  // 當使用者輸入字母時觸發即時比對
  const handleInputChange = (val: string) => {
    if (hasCompletedCurrent) return;
    setUserInput(val);

    const valClean = val.trim().toLowerCase();
    if (targetClean.length > 0 && valClean === targetClean) {
      setHasCompletedCurrent(true);
      playFeedbackTone('success');

      if (!hasRevealedAnswer && currentWord) {
        setCorrectList(prev => [...prev, currentWord]);
        setStreak(prev => prev + 1);
      }

      if (autoAdvanceOnCorrect) {
        if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = setTimeout(() => {
          handleNextQuestion();
        }, 1200);
      }
    }
  };

  // 切換到新題目時自動發音與聚焦輸入框
  useEffect(() => {
    if (!isOpen || isFinished || !currentWord) return;

    // 延遲以確保 DOM 渲染與手勢解鎖
    const timer = setTimeout(() => {
      if (autoSpeakOnLoad) {
        playWordAudio(currentWord.word);
      }
      inputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timer);
  }, [currentIndex, isOpen, isFinished, currentWord, autoSpeakOnLoad, playWordAudio]);

  // 偷看答案 / 揭曉答案
  const handleRevealAnswer = () => {
    if (!currentWord || hasRevealedAnswer) return;
    setHasRevealedAnswer(true);
    setStreak(0);
    playFeedbackTone('show_answer');
    setWrongOrRevealedList(prev => {
      if (prev.some(w => w.id === currentWord.id)) return prev;
      return [...prev, currentWord];
    });
    setShowCurrentChinese(true);
    playWordAudio(currentWord.word);
    inputRef.current?.focus();
  };

  // 鍵盤快捷鍵支援
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (hasCompletedCurrent) {
        handleNextQuestion();
      } else if (hasRevealedAnswer && userClean === targetClean) {
        handleNextQuestion();
      }
    }
  };

  // 重測錯題
  const handleReviewWrongWords = () => {
    if (wrongOrRevealedList.length === 0) return;
    initQuestions(wrongOrRevealedList, wrongOrRevealedList.length);
  };

  if (!isOpen) return null;

  const totalQuestions = questions.length;
  const progressPercent = totalQuestions > 0 ? Math.round(((currentIndex + (hasCompletedCurrent ? 1 : 0)) / totalQuestions) * 100) : 0;
  const accuracyRate = totalQuestions > 0 ? Math.round((correctList.length / (currentIndex + (hasCompletedCurrent ? 1 : 0) || 1)) * 100) : 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative flex flex-col w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 max-h-[92vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-850">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-xs">
              <Headphones className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`${fontClasses.title} text-slate-900 dark:text-white flex items-center gap-1.5`}>
                  <span>聽寫拼字練習</span>
                  <span className="inline-flex items-center rounded-md bg-violet-100 px-2 py-0.5 text-[11px] font-semibold text-violet-700 dark:bg-violet-950/60 dark:text-violet-300">
                    即時比對
                  </span>
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {batchTitle} • 聆聽發音，在輸入框中拼出正確單字
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Settings Toggle */}
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`rounded-lg p-2 text-slate-500 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:bg-slate-800 transition cursor-pointer ${
                isSettingsOpen ? 'bg-slate-200 dark:bg-slate-800 text-indigo-600' : ''
              }`}
              title="聽寫模式設定"
            >
              <Sliders className="h-4 w-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-200/70 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Collapsible Settings Panel */}
        {isSettingsOpen && (
          <div className="border-b border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-850/80 animate-in slide-in-from-top-2 duration-150 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Question count */}
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  練習題數：
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {DICTATION_COUNT_OPTIONS.map(count => (
                    <button
                      key={count}
                      onClick={() => {
                        setQuestionCount(count);
                        initQuestions(undefined, count);
                      }}
                      className={`rounded-lg px-2.5 py-1 font-semibold transition cursor-pointer ${
                        questionCount === count
                          ? 'bg-violet-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {count} 題
                    </button>
                  ))}
                </div>
              </div>

              {/* Speech rate */}
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  發音速度：
                </label>
                <div className="flex gap-1.5">
                  {[0.7, 0.85, 1.0].map(r => (
                    <button
                      key={r}
                      onClick={() => {
                        setSpeechRate(r);
                        audioManager.setRate(r);
                      }}
                      className={`rounded-lg px-3 py-1 font-semibold transition cursor-pointer ${
                        speechRate === r
                          ? 'bg-violet-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {r === 0.7 ? '0.7x 慢速' : r === 0.85 ? '0.85x 標準' : '1.0x 正常'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300 font-medium">
                  <input
                    type="checkbox"
                    checked={autoSpeakOnLoad}
                    onChange={e => setAutoSpeakOnLoad(e.target.checked)}
                    className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500"
                  />
                  <span>換題時自動播放發音</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300 font-medium">
                  <input
                    type="checkbox"
                    checked={autoAdvanceOnCorrect}
                    onChange={e => setAutoAdvanceOnCorrect(e.target.checked)}
                    className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500"
                  />
                  <span>拼對後自動跳下一題 (1.2 秒)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300 font-medium">
                  <input
                    type="checkbox"
                    checked={showChineseHintDefault}
                    onChange={e => {
                      setShowChineseHintDefault(e.target.checked);
                      setShowCurrentChinese(e.target.checked);
                    }}
                    className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500"
                  />
                  <span>預設顯示中文提示</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Modal Main Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {!isFinished && currentWord ? (
            <div className="space-y-5">
              {/* Progress & Stats Bar */}
              <div className="flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-white">
                    第 {currentIndex + 1} 題 / 共 {totalQuestions} 題
                  </span>
                  {streak >= 3 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
                      <Flame className="h-3 w-3 fill-amber-500 text-amber-500" />
                      連對 {streak} 題！
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  <span>
                    正確：<strong className="text-emerald-600 font-bold">{correctList.length}</strong>
                  </span>
                  <span>
                    待加強：<strong className="text-rose-600 font-bold">{wrongOrRevealedList.length}</strong>
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Audio & Hint Card */}
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 text-center dark:border-slate-800 dark:bg-slate-850/50">
                <div className="flex flex-col items-center justify-center gap-3">
                  {/* Speaker Button with ripple ring */}
                  <div className="relative">
                    <button
                      onClick={() => playWordAudio()}
                      className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 hover:scale-105 active:scale-95 transition cursor-pointer ${
                        isSpeaking ? 'ring-4 ring-violet-300 dark:ring-violet-700 animate-pulse' : ''
                      }`}
                      title="重聽單字發音"
                    >
                      <Volume2 className="h-9 w-9" />
                    </button>
                    {isSpeaking && (
                      <span className="absolute inset-0 rounded-2xl bg-violet-400/40 animate-ping" />
                    )}
                  </div>

                  {/* Audio Controls row */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => playWordAudio()}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition cursor-pointer"
                    >
                      <Play className="h-3.5 w-3.5 fill-violet-600 text-violet-600" />
                      <span>播放完整發音</span>
                    </button>

                    <button
                      onClick={playSyllablesAudio}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition cursor-pointer"
                      title="放慢速度，依音節分段朗讀"
                    >
                      <Music className="h-3.5 w-3.5 text-indigo-500" />
                      <span>音節慢速拼讀</span>
                    </button>
                  </div>

                  {/* Hints and word metadata preview */}
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
                    <span className="rounded-md bg-slate-200/80 px-2 py-0.5 font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                      {currentWord.word.length} 個字母
                    </span>
                    <span className="rounded-md bg-slate-200/80 px-2 py-0.5 font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                      {currentWord.syllables?.length || 1} 個音節
                    </span>

                    {/* Toggle Chinese Hint Button */}
                    <button
                      onClick={() => setShowCurrentChinese(!showCurrentChinese)}
                      className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-semibold cursor-pointer ml-1"
                    >
                      {showCurrentChinese ? (
                        <>
                          <EyeOff className="h-3.5 w-3.5" />
                          <span>隱藏中文</span>
                        </>
                      ) : (
                        <>
                          <Eye className="h-3.5 w-3.5" />
                          <span>提示中文釋義</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Chinese Meaning (if toggled on or completed) */}
                  {(showCurrentChinese || hasCompletedCurrent || hasRevealedAnswer) && (
                    <div className="mt-1 inline-flex items-center gap-2 rounded-xl bg-indigo-50/80 px-3.5 py-1.5 text-xs font-semibold text-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-200 border border-indigo-100 dark:border-indigo-900/60 animate-in fade-in duration-200">
                      <span className="text-[11px] font-normal text-indigo-500">[{currentWord.pos}]</span>
                      <span>{currentWord.chinese}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive Spelling Input Area */}
              <div className="space-y-3">
                <div className="relative">
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="dictation-input"
                      className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                    >
                      <Pencil className="h-3.5 w-3.5 text-violet-600" />
                      <span>請輸入你聽到的英語單字：</span>
                    </label>

                    {/* Status Badge */}
                    <div>
                      {isMatchExact ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 animate-in zoom-in-90">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          拼寫完全正確！
                        </span>
                      ) : hasMismatch ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-bold text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 animate-in shake">
                          <XCircle className="h-3.5 w-3.5 text-rose-600" />
                          拼寫有誤（請檢查）
                        </span>
                      ) : userClean.length > 0 ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-950/70 dark:text-amber-300">
                          輸入中... ({userClean.length} / {targetClean.length})
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400">
                          可直接鍵入，按 Enter 提交
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Input Box */}
                  <div className="relative flex items-center">
                    <input
                      id="dictation-input"
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={e => handleInputChange(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={hasCompletedCurrent}
                      placeholder="在此鍵入單字英文字母 (例如: accomplish)..."
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      className={`w-full rounded-xl border-2 px-4 py-3 text-lg sm:text-xl font-bold tracking-wider transition outline-none ${
                        isMatchExact
                          ? 'border-emerald-500 bg-emerald-50/50 text-emerald-900 dark:border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-100'
                          : hasMismatch
                          ? 'border-rose-400 bg-rose-50/30 text-rose-900 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:border-rose-800 dark:bg-rose-950/20 dark:text-rose-200'
                          : 'border-slate-300 bg-white text-slate-900 focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white'
                      }`}
                    />

                    {userInput && !hasCompletedCurrent && (
                      <button
                        onClick={() => {
                          handleInputChange('');
                          inputRef.current?.focus();
                        }}
                        className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                        title="清除輸入"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Letter Slots Comparison Visualization */}
                <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 py-1">
                  {targetClean.split('').map((char, idx) => {
                    const typedChar = userClean[idx];
                    const isTyped = typedChar !== undefined;
                    const isCharCorrect = isTyped && typedChar === char;
                    const isCharWrong = isTyped && typedChar !== char;

                    return (
                      <div
                        key={idx}
                        className={`flex h-9 w-8 sm:h-10 sm:w-9 items-center justify-center rounded-lg font-mono text-sm sm:text-base font-bold border transition-all ${
                          hasRevealedAnswer || hasCompletedCurrent
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300'
                            : isCharCorrect
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300 shadow-2xs'
                            : isCharWrong
                            ? 'border-rose-500 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950/50 dark:text-rose-300'
                            : 'border-slate-200 bg-slate-100/80 text-slate-400 dark:border-slate-700 dark:bg-slate-800'
                        }`}
                      >
                        {hasRevealedAnswer || hasCompletedCurrent ? char : isTyped ? typedChar : '_'}
                      </div>
                    );
                  })}
                </div>

                {/* Answer Reveal Card (if revealed or completed) */}
                {(hasCompletedCurrent || hasRevealedAnswer) && (
                  <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/30 animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                            {currentWord.word}
                          </span>
                          <span className="font-mono text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-100/80 dark:bg-indigo-900/60 px-2 py-0.5 rounded-md font-semibold">
                            {currentWord.ipa}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-slate-600 dark:text-slate-300">
                            音節拆解：
                            <strong className="font-mono text-indigo-600 dark:text-indigo-400">
                              {(currentWord.syllables || []).join(' · ')}
                            </strong>
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {currentWord.pos} {currentWord.chinese}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-500 transition cursor-pointer self-stretch sm:self-auto justify-center"
                      >
                        <span>下一題</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : isFinished ? (
            /* Result Summary Screen */
            <div className="py-6 text-center space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20 animate-in zoom-in">
                <Award className="h-8 w-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  聽寫練習完成！
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {batchTitle} • 本輪聽寫總評
                </p>
              </div>

              {/* Stats Summary Grid */}
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/60">
                  <div className="text-[11px] text-slate-500">完成題數</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{totalQuestions}</div>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/30">
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400">自主拼對</div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{correctList.length}</div>
                </div>

                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3 dark:border-indigo-900/40 dark:bg-indigo-950/30">
                  <div className="text-[11px] text-indigo-600 dark:text-indigo-400">正確率</div>
                  <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    {Math.round((correctList.length / totalQuestions) * 100)}%
                  </div>
                </div>
              </div>

              {/* Word Breakdown list if any wrong */}
              {wrongOrRevealedList.length > 0 && (
                <div className="text-left max-w-lg mx-auto rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-850">
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center justify-between">
                    <span>建議加強複習之單字 ({wrongOrRevealedList.length})：</span>
                    <button
                      onClick={handleReviewWrongWords}
                      className="text-xs text-violet-600 hover:text-violet-700 dark:text-violet-400 font-semibold cursor-pointer inline-flex items-center gap-1"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>針對錯題再次聽寫</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
                    {wrongOrRevealedList.map(item => (
                      <div
                        key={item.id}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs dark:border-slate-700 dark:bg-slate-800"
                      >
                        <button
                          onClick={() => audioManager.speakWord(item.word)}
                          className="text-slate-400 hover:text-indigo-600 transition"
                          title="聽發音"
                        >
                          <Volume2 className="h-3 w-3" />
                        </button>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.word}</span>
                        <span className="text-[11px] text-slate-400">{item.chinese}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => initQuestions()}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-violet-500 transition cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>再練一輪 (重新隨機)</span>
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition cursor-pointer"
                >
                  <span>結束返回</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* Modal Bottom Footer / Action Bar */}
        {!isFinished && currentWord && (
          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/90 px-4 py-3 dark:border-slate-800 dark:bg-slate-850">
            <div className="flex items-center gap-2">
              <button
                onClick={handleRevealAnswer}
                disabled={hasCompletedCurrent || hasRevealedAnswer}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-2xs hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
                title="拼不出來時可查看答案"
              >
                <HelpCircle className="h-3.5 w-3.5 text-amber-500" />
                <span>看答案</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition cursor-pointer"
              >
                <span>{hasCompletedCurrent ? '下一題' : '跳過此題'}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
