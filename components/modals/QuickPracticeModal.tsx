'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { WordItem, FontSizePreference } from '../../lib/types';
import { EPRS_PHONICS_RULES, ALL_RULE_CODES } from '../../lib/engine/phonicsRules';
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
  AlertTriangle,
  Play,
  Headphones,
  BookOpen,
  Hash,
  Sliders,
  Sparkles
} from 'lucide-react';

interface QuickPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: WordItem[];
  fontSize?: FontSizePreference;
}

// 專注在精準且穩定的拼讀與聽音測驗模式
export type PracticeMode = 'listen_word' | 'rule_identify' | 'syllable_count';

export const QUESTION_COUNT_OPTIONS = [10, 20, 25, 50, 100] as const;
export type QuestionCountType = (typeof QUESTION_COUNT_OPTIONS)[number];

interface PracticeOption {
  value: string;
  label: string;
  chineseHint?: string;
}

interface PracticeQuestion {
  word: WordItem;
  options: PracticeOption[];
  correctAnswer: string;
}

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

function buildQuestions(words: WordItem[], mode: PracticeMode, targetCount: number = 20): PracticeQuestion[] {
  if (!words || words.length === 0) return [];

  // 若題數超過單字量，隨機重複循環填充
  let wordPool: WordItem[] = [];
  while (wordPool.length < targetCount) {
    wordPool.push(...shuffleArray(words));
  }
  wordPool = wordPool.slice(0, targetCount);

  const questions: PracticeQuestion[] = [];

  for (let i = 0; i < wordPool.length; i++) {
    const current = wordPool[i];

    if (mode === 'listen_word') {
      const wrongWordItems = shuffleArray(
        words.filter(w => w.id !== current.id)
      ).slice(0, 3);

      const allItems = shuffleArray([current, ...wrongWordItems]);
      const options: PracticeOption[] = allItems.map(item => ({
        value: item.word,
        label: item.word,
        chineseHint: item.chinese
      }));

      questions.push({
        word: current,
        options,
        correctAnswer: current.word
      });
    } else if (mode === 'rule_identify') {
      const correctRule = current.ruleCodes[0] || 'R001';
      const wrongRules = shuffleArray(
        ALL_RULE_CODES.filter(r => !current.ruleCodes.includes(r))
      ).slice(0, 3);

      const allRuleCodes = shuffleArray([correctRule, ...wrongRules]);
      const options: PracticeOption[] = allRuleCodes.map(code => {
        const r = EPRS_PHONICS_RULES[code];
        return {
          value: code,
          label: r ? `${r.id} - ${r.name}` : code,
          chineseHint: r?.summary
        };
      });

      questions.push({
        word: current,
        options,
        correctAnswer: correctRule
      });
    } else if (mode === 'syllable_count') {
      const actualCount = (current.syllables || [current.word]).length;
      const countSet = new Set<number>([actualCount]);
      const possibleCounts = [1, 2, 3, 4, 5];

      for (const c of shuffleArray(possibleCounts)) {
        if (countSet.size >= 4) break;
        countSet.add(c);
      }

      const options: PracticeOption[] = shuffleArray(Array.from(countSet)).map(cnt => ({
        value: String(cnt),
        label: `${cnt} 個音節`
      }));

      questions.push({
        word: current,
        options,
        correctAnswer: String(actualCount)
      });
    }
  }

  return questions;
}

export function QuickPracticeModal({
  isOpen,
  onClose,
  words,
  fontSize = 'medium'
}: QuickPracticeModalProps) {
  // 測驗專用字體大小設定：預設即為最大字體 (xlarge)，在 pad、手機上保證最大辨識度
  const [quizFontSize, setQuizFontSize] = useState<FontSizePreference>(() => {
    return fontSize === 'small' || fontSize === 'medium' ? 'xlarge' : fontSize;
  });

  const [mode, setMode] = useState<PracticeMode>('listen_word');
  const [selectedCount, setSelectedCount] = useState<QuestionCountType>(20);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [history, setHistory] = useState<{ word: string; correct: boolean }[]>([]);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);

  const typo = getModalFontSizeClasses(quizFontSize);

  // 依比例計算得分：滿分 100 分制
  const correctCount = history.filter(h => h.correct).length;
  const totalQuestions = questions.length || selectedCount;
  const currentProportionalScore = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const pointsPerQuestion = totalQuestions > 0 ? (100 / totalQuestions) : 0;

  // 初始化或重新開始測驗
  const handleStartQuiz = useCallback((customMode?: PracticeMode, customCount?: QuestionCountType) => {
    const targetMode = customMode || mode;
    const targetCount = customCount || selectedCount;
    const newQuestions = buildQuestions(words, targetMode, targetCount);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setStreak(0);
    setHistory([]);
    setIsStarted(true);
    setShowExitConfirm(false);
  }, [mode, selectedCount, words]);

  // 安全關閉機制：若進行中且已有作答紀錄，跳出防誤觸確認
  const handleRequestClose = useCallback(() => {
    if (!isStarted || currentIndex >= questions.length || (currentIndex === 0 && !isAnswered && history.length === 0)) {
      setIsStarted(false);
      onClose();
    } else {
      setShowExitConfirm(true);
    }
  }, [isStarted, currentIndex, questions.length, isAnswered, history.length, onClose]);

  // 切換模式時重新生題並重新開始
  const handleSwitchMode = (newMode: PracticeMode) => {
    if (newMode === mode && isStarted) return;
    setMode(newMode);
    handleStartQuiz(newMode, selectedCount);
  };

  const currentQ = questions[currentIndex];

  // 播放單字發音
  const handlePlayCurrent = useCallback(() => {
    if (currentQ?.word) {
      audioManager.speakWord(currentQ.word.word);
    }
  }, [currentQ]);

  // 進入題目時自動播放聲音（聽音辨字模式）
  useEffect(() => {
    if (isOpen && isStarted && currentQ && mode === 'listen_word' && !isAnswered) {
      const timer = setTimeout(() => {
        handlePlayCurrent();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isStarted, currentQ, mode, isAnswered, handlePlayCurrent]);

  // 作答處理
  const handleSelectOption = useCallback((opt: string) => {
    if (isAnswered || !currentQ) return;

    setSelectedOption(opt);
    setIsAnswered(true);

    let isCorrect = false;
    if (mode === 'listen_word') {
      isCorrect = opt === currentQ.correctAnswer;
    } else if (mode === 'rule_identify') {
      isCorrect = (currentQ.word.ruleCodes || []).includes(opt) || opt === currentQ.correctAnswer;
    } else if (mode === 'syllable_count') {
      isCorrect = opt === currentQ.correctAnswer;
    }

    if (isCorrect) {
      setStreak(st => st + 1);
      setHistory(h => [...h, { word: currentQ.word.word, correct: true }]);
    } else {
      setStreak(0);
      setHistory(h => [...h, { word: currentQ.word.word, correct: false }]);
    }

    // 作答後朗讀一次單字
    setTimeout(() => {
      audioManager.speakWord(currentQ.word.word);
    }, 200);
  }, [isAnswered, currentQ, mode]);

  // 下一題
  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setCurrentIndex(questions.length);
    }
  }, [currentIndex, questions.length]);

  // 重新設定並返回設定頁面
  const handleResetToSetup = () => {
    setIsStarted(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setStreak(0);
    setHistory([]);
    setShowExitConfirm(false);
  };

  // 鍵盤快速鍵支援
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showExitConfirm) {
          setShowExitConfirm(false);
        } else {
          handleRequestClose();
        }
        return;
      }

      if (showExitConfirm) return;

      if (!isStarted) {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleStartQuiz();
        }
        return;
      }

      if (e.key === ' ' || e.key === 'Enter') {
        if (isAnswered) {
          e.preventDefault();
          handleNext();
        } else {
          e.preventDefault();
          handlePlayCurrent();
        }
        return;
      }

      if (!isAnswered && currentQ && ['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (currentQ.options[idx]) {
          handleSelectOption(currentQ.options[idx].value);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isStarted, isAnswered, currentQ, showExitConfirm, handlePlayCurrent, handleNext, handleSelectOption, handleRequestClose, handleStartQuiz]);

  if (!isOpen) return null;

  if (!words || words.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
        <div className="rounded-3xl bg-white p-6 dark:bg-slate-900 text-center">
          <p className={`${typo.body} text-slate-500`}>當前批次無可用單字</p>
          <button onClick={onClose} className={`mt-4 rounded-xl bg-indigo-600 ${typo.button} text-white cursor-pointer`}>
            關閉
          </button>
        </div>
      </div>
    );
  }

  const isCompleted = isStarted && currentIndex >= questions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-1.5 sm:p-4 md:p-6 overflow-y-auto">
      <div className="relative flex h-[100dvh] sm:h-[85vh] md:h-[88vh] max-h-[100dvh] sm:max-h-[92vh] w-full max-w-2xl md:max-w-3xl lg:max-w-4xl flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Header - 手機平板自適應防遮擋 */}
        <div className="shrink-0 border-b border-slate-100 bg-slate-50/80 px-3 py-2.5 sm:px-6 sm:py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-indigo-600 text-white shadow-xs shrink-0">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm sm:text-lg md:text-xl font-black text-slate-900 dark:text-white flex items-center gap-1.5 truncate">
                  <span>自然發音互動測驗</span>
                  {isStarted && !isCompleted && (
                    <span className="hidden md:inline-flex items-center rounded-lg bg-indigo-100 px-2 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
                      {mode === 'listen_word' ? '聽音辨字' : mode === 'rule_identify' ? '法則辨識' : '音節計數'} • {totalQuestions} 題
                    </span>
                  )}
                </h2>
                {!isStarted && (
                  <p className="hidden sm:block text-xs text-slate-500 dark:text-slate-400 truncate">
                    自選題數 • 滿分 100 分依比例計分 • 支援 Pad/手機大字體
                  </p>
                )}
              </div>
            </div>

            {/* 右側工具操作按鈕區 */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              {/* 手機單鍵切換字體 */}
              <button
                type="button"
                onClick={() => setQuizFontSize(prev => prev === 'xlarge' ? 'large' : 'xlarge')}
                className="sm:hidden px-2 py-1 rounded-lg text-xs font-black bg-slate-200/80 dark:bg-slate-700/80 text-indigo-600 dark:text-indigo-400 border border-slate-300/60 dark:border-slate-600 cursor-pointer min-h-[34px]"
                title="切換字體大小"
              >
                {quizFontSize === 'xlarge' ? '特大字' : '大字'}
              </button>

              {/* 平板/桌機字體切換鈕 */}
              <div className="hidden sm:flex items-center gap-0.5 bg-slate-200/70 dark:bg-slate-700/60 rounded-xl p-0.5">
                <button
                  type="button"
                  onClick={() => setQuizFontSize('large')}
                  className={`px-2 py-1 rounded-lg text-xs sm:text-sm font-bold transition cursor-pointer ${
                    quizFontSize === 'large'
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="大字體"
                >
                  大
                </button>
                <button
                  type="button"
                  onClick={() => setQuizFontSize('xlarge')}
                  className={`px-2 py-1 rounded-lg text-xs sm:text-sm font-black transition cursor-pointer ${
                    quizFontSize === 'xlarge'
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="最大字體"
                >
                  最大
                </button>
              </div>

              {isStarted && !isCompleted && (
                <button
                  onClick={handleResetToSetup}
                  className="rounded-lg p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800 transition cursor-pointer min-h-[34px] min-w-[34px] flex items-center justify-center"
                  title="重新設定測驗模式與題數"
                >
                  <Sliders className="h-4 w-4" />
                  <span className="hidden md:inline ml-1">重設</span>
                </button>
              )}

              <button
                onClick={handleRequestClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition cursor-pointer min-h-[34px] min-w-[34px] flex items-center justify-center"
                title="離開測驗"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 測驗進行中的即時統計數據列：獨立於按鈕區，杜絕任何遮擋重疊 */}
          {isStarted && !isCompleted && (
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 mt-2 pt-2 border-t border-slate-200/70 dark:border-slate-700/60">
              <span className="font-extrabold text-slate-900 dark:text-white bg-slate-200/60 dark:bg-slate-700/60 px-2 py-0.5 rounded-md">
                第 {Math.min(currentIndex + 1, questions.length)} / {questions.length} 題
              </span>
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-black">
                <Flame className="h-3.5 w-3.5 fill-current" /> 連續: {streak}
              </span>
              <span className="font-black text-indigo-600 dark:text-indigo-400">
                得分: {currentProportionalScore} / 100
              </span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-3 py-3 sm:px-6 sm:py-5 md:px-8 md:py-6 pb-6">
          {!isStarted ? (
            /* 進入測驗前的設定面板 (Setup Screen) */
            <div className="space-y-6 sm:space-y-8 py-2 animate-in fade-in duration-200">
              {/* 模式選擇 */}
              <div className="space-y-3">
                <label className="text-base sm:text-lg md:text-xl font-black text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>1. 選擇測驗模式</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('listen_word')}
                    className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition cursor-pointer min-h-[96px] ${
                      mode === 'listen_word'
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 dark:border-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-200 ring-2 ring-indigo-500/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-black text-base sm:text-lg md:text-xl">
                      <Headphones className="h-5 w-5 text-indigo-600 shrink-0" />
                      <span>聽音辨字</span>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      聆聽單字真人語音，選出正確單字與中文
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('rule_identify')}
                    className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition cursor-pointer min-h-[96px] ${
                      mode === 'rule_identify'
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 dark:border-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-200 ring-2 ring-indigo-500/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-black text-base sm:text-lg md:text-xl">
                      <BookOpen className="h-5 w-5 text-indigo-600 shrink-0" />
                      <span>法則辨識</span>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      觀察單字音標結構，識別符合的自然發音法則
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('syllable_count')}
                    className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition cursor-pointer min-h-[96px] ${
                      mode === 'syllable_count'
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 dark:border-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-200 ring-2 ring-indigo-500/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-black text-base sm:text-lg md:text-xl">
                      <Hash className="h-5 w-5 text-indigo-600 shrink-0" />
                      <span>音節計數</span>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      拆解單字母音核心，判斷正確音節數量
                    </p>
                  </button>
                </div>
              </div>

              {/* 題數選擇 (10, 20, 25, 50, 100) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-base sm:text-lg md:text-xl font-black text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <Sliders className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    <span>2. 選擇測驗題數</span>
                  </label>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-indigo-600 dark:text-indigo-400">
                    每題 {pointsPerQuestion % 1 === 0 ? pointsPerQuestion : pointsPerQuestion.toFixed(1)} 分（滿分 100 分）
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {QUESTION_COUNT_OPTIONS.map((count) => {
                    const isSelected = selectedCount === count;
                    const pts = 100 / count;
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setSelectedCount(count)}
                        className={`flex flex-col items-center justify-center py-3.5 sm:py-5 px-1 rounded-2xl border transition cursor-pointer min-h-[56px] ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-600 text-white font-black shadow-md ring-2 ring-indigo-500/30'
                            : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 hover:border-slate-300 text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:bg-slate-800 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-xl sm:text-2xl md:text-3xl font-black">{count}</span>
                        <span className={`text-xs sm:text-sm font-semibold mt-0.5 ${isSelected ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-500'}`}>
                          {pts % 1 === 0 ? `${pts}分/題` : `${pts.toFixed(1)}分`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 計分規則與提示卡 */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 sm:p-5 dark:border-indigo-950/60 dark:bg-indigo-950/30 space-y-2">
                <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-black text-indigo-900 dark:text-indigo-300">
                  <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>得分計算規則說明</span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-indigo-900/90 dark:text-indigo-200/90 leading-relaxed font-medium">
                  本系統採<strong>滿分 100 分等比例制</strong>：答對題數 ÷ 總題數 ({selectedCount} 題) × 100。<br className="hidden sm:inline" />
                  支援鍵盤快速鍵：數字鍵 <kbd className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 font-mono text-xs sm:text-sm border shadow-2xs">1~4</kbd> 作答、<kbd className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 font-mono text-xs sm:text-sm border shadow-2xs">空白鍵</kbd> 重播發音 / 下一題。
                </p>
              </div>

              {/* 開始測驗按鈕 */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleStartQuiz()}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-4.5 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl font-black text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.99] transition cursor-pointer min-h-[64px]"
                >
                  <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-current" />
                  <span>開始測驗 ({selectedCount} 題)</span>
                </button>
              </div>
            </div>
          ) : isCompleted ? (
            /* Result Screen */
            <div className="space-y-6 sm:space-y-8 py-6 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="mx-auto flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 shadow-inner">
                <Award className="h-12 w-12 sm:h-16 sm:w-16" />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">測驗完成！</h3>
                <p className="text-base sm:text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400">
                  恭喜完成 {questions.length} 題單字練習，總得分：
                  <strong className="text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl md:text-5xl ml-2 font-mono font-black">
                    {currentProportionalScore}
                  </strong>
                  <span className="text-slate-400 text-base sm:text-lg ml-1">/ 100 分</span>
                </p>
              </div>

              {/* Stats & History */}
              <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-left dark:border-slate-800 dark:bg-slate-800/40 space-y-3.5">
                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
                  <span>單字作答紀錄 ({correctCount} / {questions.length} 題正確)</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono text-base sm:text-lg font-black">
                    正確率: {currentProportionalScore}%
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 max-h-52 overflow-y-auto pr-1">
                  {history.map((h, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs sm:text-sm md:text-base font-bold ${
                        h.correct
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                      }`}
                    >
                      {h.correct ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                      {h.word}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-3.5 pt-2">
                <button
                  onClick={() => handleStartQuiz(mode, selectedCount)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 sm:px-8 py-4 text-base sm:text-lg md:text-xl font-black text-white shadow-lg hover:bg-indigo-500 active:scale-95 transition cursor-pointer min-h-[56px]"
                >
                  <RotateCcw className="h-5 w-5" />
                  <span>再來一次 ({selectedCount} 題)</span>
                </button>
                <button
                  onClick={handleResetToSetup}
                  className="inline-flex items-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50/70 px-6 sm:px-8 py-4 text-base sm:text-lg md:text-xl font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 transition cursor-pointer min-h-[56px]"
                >
                  <Sliders className="h-5 w-5" />
                  <span>變更題數 / 模式</span>
                </button>
                <button
                  onClick={onClose}
                  className="rounded-2xl border border-slate-200 px-6 sm:px-8 py-4 text-base sm:text-lg md:text-xl font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 transition cursor-pointer min-h-[56px]"
                >
                  結束並返回
                </button>
              </div>
            </div>
          ) : (
            /* Question Layout */
            <div className="space-y-3 sm:space-y-5">
              {/* Question Card - 手機緊湊、平板桌機大氣 */}
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50/80 p-3 sm:p-6 md:p-8 text-center dark:border-slate-800 dark:bg-slate-800/50 space-y-1.5 sm:space-y-3 shadow-2xs">
                <span className="text-xs sm:text-base md:text-lg font-bold text-slate-500 dark:text-slate-400 tracking-normal">
                  {mode === 'listen_word'
                    ? '請仔細聆聽發音，選出正確的單字與中文'
                    : mode === 'rule_identify'
                    ? '請觀察單字，選出它所符合的自然發音法則'
                    : '請分析單字結構，選出正確的音節數量'}
                </span>

                {mode === 'listen_word' ? (
                  <div className="py-1.5 sm:py-3">
                    <button
                      onClick={handlePlayCurrent}
                      className="inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-indigo-600 px-6 py-2.5 sm:px-10 sm:py-4 text-white shadow-md hover:bg-indigo-500 active:scale-95 transition cursor-pointer min-h-[48px] sm:min-h-[60px]"
                    >
                      <Volume2 className="h-5 w-5 sm:h-8 sm:w-8 animate-pulse shrink-0" />
                      <span className="text-base sm:text-2xl md:text-3xl font-black">點擊播放發音</span>
                    </button>
                    <p className="mt-1.5 text-[11px] sm:text-sm font-semibold text-slate-400 dark:text-slate-500">
                      可按空白鍵隨時重聽發音
                    </p>
                  </div>
                ) : (
                  <div className="py-1.5 sm:py-3 space-y-1 sm:space-y-2">
                    <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-mono tracking-tight text-slate-900 dark:text-white select-all">
                      {currentQ.word.word}
                    </div>
                    <div className="flex items-center justify-center gap-2 font-mono text-indigo-600 dark:text-indigo-400 text-sm sm:text-xl md:text-2xl font-bold">
                      <span>{currentQ.word.ipa}</span>
                      <span>•</span>
                      <span>{currentQ.word.chinese}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Options Grid - 緊湊高辨識度排版，確保手機上 4 個選項全數清晰可見不被遮切 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5 md:gap-5">
                {currentQ.options.map((optObj, idx) => {
                  const optVal = optObj.value;
                  let btnStyle = 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50 text-slate-800 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-indigo-700';

                  if (isAnswered) {
                    const isCorrect = (mode === 'listen_word' && optVal === currentQ.correctAnswer) ||
                      (mode === 'rule_identify' && ((currentQ.word.ruleCodes || []).includes(optVal) || optVal === currentQ.correctAnswer)) ||
                      (mode === 'syllable_count' && optVal === currentQ.correctAnswer);

                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold dark:border-emerald-500/80 dark:bg-emerald-950/60 dark:text-emerald-200 shadow-sm ring-2 ring-emerald-400/50';
                    } else if (optVal === selectedOption) {
                      btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 dark:border-rose-500/80 dark:bg-rose-950/60 dark:text-rose-200 ring-2 ring-rose-400/50';
                    } else {
                      btnStyle = 'opacity-35 border-slate-200 bg-slate-50 text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(optVal)}
                      disabled={isAnswered}
                      className={`flex items-center justify-between rounded-xl sm:rounded-2xl border px-3.5 py-2.5 sm:px-5 sm:py-4 md:py-5 text-left transition cursor-pointer min-h-[52px] sm:min-h-[72px] shadow-2xs ${btnStyle}`}
                    >
                      <div className="flex-1 min-w-0 pr-2 sm:pr-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="shrink-0 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-slate-100 text-xs sm:text-base md:text-lg font-black text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                            {idx + 1}
                          </span>
                          <span className={`${mode === 'rule_identify' ? 'text-sm sm:text-lg md:text-xl font-bold' : 'text-lg sm:text-2xl md:text-3xl font-black'} leading-snug truncate`}>
                            {optObj.label}
                          </span>
                        </div>
                        {optObj.chineseHint && (
                          <div className={`pl-8 sm:pl-11 text-xs sm:text-base md:text-lg font-bold mt-0.5 ${isAnswered ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'} truncate`}>
                            {optObj.chineseHint}
                          </div>
                        )}
                      </div>
                      {isAnswered && (
                        <span className="shrink-0 ml-1">
                          {((mode === 'listen_word' && optVal === currentQ.correctAnswer) ||
                          (mode === 'rule_identify' && ((currentQ.word.ruleCodes || []).includes(optVal) || optVal === currentQ.correctAnswer)) ||
                          (mode === 'syllable_count' && optVal === currentQ.correctAnswer)) ? (
                            <CheckCircle2 className="h-5 w-5 sm:h-7 sm:w-7 text-emerald-600" />
                          ) : optVal === selectedOption ? (
                            <XCircle className="h-5 w-5 sm:h-7 sm:w-7 text-rose-600" />
                          ) : null}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Answer Explanation & Next Question Sticky Bottom Footer - 電腦端、Pad 端與手機端均固定於彈窗最底端，絕不被遮擋 */}
        {isStarted && !isCompleted && isAnswered && currentQ && (
          <div className="shrink-0 border-t border-indigo-200 dark:border-indigo-900/80 bg-indigo-50/95 dark:bg-indigo-950/95 p-3.5 sm:p-4 md:p-5 shadow-2xl backdrop-blur-md z-20 animate-in slide-in-from-bottom-2 duration-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-full">
              <div className="w-full sm:w-auto text-left space-y-1 min-w-0">
                <div className="text-indigo-950 dark:text-indigo-200 flex flex-wrap items-center gap-1.5 sm:gap-3">
                  <span className="text-base sm:text-xl md:text-2xl font-black">
                    正確單字：<strong>{currentQ.word.word}</strong>
                  </span>
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 text-sm sm:text-lg md:text-xl font-bold">
                    ({currentQ.word.ipa})
                  </span>
                  <span className="inline-flex items-center rounded-lg bg-indigo-100 dark:bg-indigo-900/80 px-2.5 py-0.5 text-xs sm:text-base font-black text-indigo-800 dark:text-indigo-200">
                    {currentQ.word.chinese}
                  </span>
                </div>
                <div className="text-[11px] sm:text-sm font-semibold text-slate-600 dark:text-slate-300 truncate">
                  音節: [{(currentQ.word.syllables || [currentQ.word.word]).join(' - ')}] • 法則:{' '}
                  {currentQ.word.ruleCodes.join(', ')}
                </div>
              </div>
              <button
                onClick={handleNext}
                className="w-full sm:w-auto shrink-0 rounded-xl sm:rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 py-3 px-6 sm:py-3.5 sm:px-8 text-base sm:text-xl font-black text-white shadow-md transition cursor-pointer text-center flex items-center justify-center gap-1.5 min-h-[48px]"
              >
                <span>下一題 (空白鍵)</span>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 防誤觸離開確認彈窗 */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">確定要退出測驗嗎？</h4>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                目前正在進行第 {currentIndex + 1} / {questions.length} 題（目前得分 {currentProportionalScore} 分），若現在退出本次測驗進度將會重置。
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 rounded-xl bg-indigo-600 py-2.5 text-sm font-bold text-white hover:bg-indigo-500 active:scale-95 transition shadow-sm cursor-pointer"
              >
                繼續測驗
              </button>
              <button
                onClick={() => {
                  setShowExitConfirm(false);
                  setIsStarted(false);
                  onClose();
                }}
                className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                確定退出
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
