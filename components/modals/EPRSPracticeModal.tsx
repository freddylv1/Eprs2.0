'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { WordItem, FontSizePreference } from '../../lib/types';
import { audioManager } from '../../lib/audioManager';
import { getPhonicsRule } from '../../lib/engine/phonicsRules';
import { getRuleColorBadge, generateWordMatrix } from '../../lib/engine/phonicsEngine';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import {
  X,
  Volume2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Zap,
  Grid,
  Layers,
  Play,
  Pause,
  Clock,
  Plus,
  Minus,
  Sliders
} from 'lucide-react';

export interface EPRSPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: WordItem[];
  batchTitle?: string;
  onOpenRuleDetail: (ruleId: string) => void;
  onOpenWordMatrix: (word: WordItem) => void;
  fontSize?: FontSizePreference;
  isOverlaid?: boolean;
}

// 3 階段學習步驟（看單字朗讀 -> 解中文朗讀 -> 音節拆解與標準發音）
export enum PracticeStep {
  WORD_SHOWN = 0,          // 1. 看單字 (單字出現 + 英文朗讀)
  CHINESE_SHOWN = 1,       // 2. 解中文 (中文釋義揭露 + 離線中文朗讀)
  SYLLABLES_AND_AUDIO = 2  // 3. 音節拆解與發音 (音節、音標、法則展開 + 標準發音朗讀)
}

const UNITS_COUNT = 5;

export function EPRSPracticeModal({
  isOpen,
  onClose,
  words,
  batchTitle = '單字學習批次',
  onOpenRuleDetail,
  onOpenWordMatrix,
  fontSize = 'medium',
  isOverlaid = false
}: EPRSPracticeModalProps) {
  // 將批次單字均分為 5 個單元
  const units = useMemo(() => {
    if (!words || words.length === 0) return [];
    const unitSize = Math.ceil(words.length / UNITS_COUNT);
    const result: { unitIndex: number; title: string; words: WordItem[] }[] = [];
    for (let i = 0; i < UNITS_COUNT; i++) {
      const unitWords = words.slice(i * unitSize, (i + 1) * unitSize);
      if (unitWords.length > 0) {
        result.push({
          unitIndex: i + 1,
          title: `單元 ${i + 1} (${unitWords.length} 字)`,
          words: unitWords
        });
      }
    }
    return result;
  }, [words]);

  const [activeUnitIndex, setActiveUnitIndex] = useState<number>(0);
  const currentUnitWords = units[activeUnitIndex]?.words || [];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<PracticeStep>(PracticeStep.WORD_SHOWN);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isPlayingChinese, setIsPlayingChinese] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [stepDelay, setStepDelay] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('eprs_practice_auto_delay');
        if (saved) {
          const val = parseFloat(saved);
          if (!isNaN(val) && val >= 0.3 && val <= 10) return val;
        }
      } catch {}
    }
    return 1.0;
  });
  const [showDelayPicker, setShowDelayPicker] = useState<boolean>(false);

  const typo = getModalFontSizeClasses(fontSize);

  const activeWord = currentUnitWords && currentUnitWords.length > 0 ? currentUnitWords[currentIndex] : null;
  const wordMatrix = activeWord ? generateWordMatrix(activeWord) : null;

  // 儲存延遲時間設定
  const handleUpdateDelay = (newDelay: number) => {
    const clamped = Math.max(0.3, Math.min(10, parseFloat(newDelay.toFixed(1))));
    setStepDelay(clamped);
    try {
      localStorage.setItem('eprs_practice_auto_delay', String(clamped));
    } catch {}
  };

  // 切換單元時重設進度
  const handleSelectUnit = (unitIdx: number) => {
    setActiveUnitIndex(unitIdx);
    setCurrentIndex(0);
    setCurrentStep(PracticeStep.WORD_SHOWN);
  };

  // 播放當前單字英文發音
  const playCurrentWordAudio = useCallback((onFinished?: () => void) => {
    if (!activeWord) {
      onFinished?.();
      return;
    }
    setIsPlayingAudio(true);
    audioManager.speakWord(activeWord.word, () => {
      setIsPlayingAudio(false);
      onFinished?.();
    });
  }, [activeWord]);

  // 播放當前單字中文釋義 (離線語音)
  const playCurrentChineseAudio = useCallback((onFinished?: () => void) => {
    if (!activeWord || !activeWord.chinese) {
      onFinished?.();
      return;
    }
    setIsPlayingChinese(true);
    audioManager.speakChinese(activeWord.chinese, () => {
      setIsPlayingChinese(false);
      onFinished?.();
    });
  }, [activeWord]);

  const handleNextWord = useCallback(() => {
    if (currentIndex < currentUnitWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setCurrentStep(PracticeStep.WORD_SHOWN);
      return true;
    } else if (activeUnitIndex < units.length - 1) {
      // 本單元完成，自動切換至下一單元
      setActiveUnitIndex(prev => prev + 1);
      setCurrentIndex(0);
      setCurrentStep(PracticeStep.WORD_SHOWN);
      return true;
    } else {
      // 全部單元完成
      setIsAutoPlaying(false);
      return false;
    }
  }, [currentIndex, currentUnitWords.length, activeUnitIndex, units.length]);

  const handlePrevWord = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setCurrentStep(PracticeStep.WORD_SHOWN);
    } else if (activeUnitIndex > 0) {
      // 回到上一單元的最後一個字
      const prevUnit = units[activeUnitIndex - 1];
      setActiveUnitIndex(prev => prev - 1);
      setCurrentIndex(prevUnit.words.length - 1);
      setCurrentStep(PracticeStep.WORD_SHOWN);
    }
  }, [currentIndex, activeUnitIndex, units]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setCurrentStep(PracticeStep.WORD_SHOWN);
  };

  // 漸進式手動下一步 (空白鍵 / 下一步按鈕)
  const handleNextStep = useCallback(() => {
    if (!activeWord) return;

    if (currentStep === PracticeStep.WORD_SHOWN) {
      setCurrentStep(PracticeStep.CHINESE_SHOWN);
      playCurrentChineseAudio();
    } else if (currentStep === PracticeStep.CHINESE_SHOWN) {
      setCurrentStep(PracticeStep.SYLLABLES_AND_AUDIO);
      playCurrentWordAudio();
    } else if (currentStep === PracticeStep.SYLLABLES_AND_AUDIO) {
      handleNextWord();
    }
  }, [activeWord, currentStep, handleNextWord, playCurrentChineseAudio, playCurrentWordAudio]);

  // 自動切換 (Auto Play) 核心計時引擎：
  // 1. 看單字 (播放英文發音) -> 讀完 + stepDelay秒 -> 2. 解中文 (離線語音朗讀中文) -> 讀完 + stepDelay秒 -> 3. 音節拆解與發音 (標準發音) -> 讀完 + stepDelay秒 -> 下一個單字
  useEffect(() => {
    if (!isOpen || isOverlaid || !isAutoPlaying || !activeWord) return;

    let stepTimer: NodeJS.Timeout | null = null;
    let audioFallbackTimer: NodeJS.Timeout | null = null;
    const delayMs = Math.round(stepDelay * 1000);

    if (currentStep === PracticeStep.WORD_SHOWN) {
      // 1. 看單字 -> 朗讀單字英文 -> 讀完後等待 delayMs -> 跳到 2. 解中文
      playCurrentWordAudio(() => {
        stepTimer = setTimeout(() => {
          setCurrentStep(PracticeStep.CHINESE_SHOWN);
        }, delayMs);
      });

      // 安全超時 Fallback
      audioFallbackTimer = setTimeout(() => {
        setCurrentStep(PracticeStep.CHINESE_SHOWN);
      }, delayMs + 3500);
    } else if (currentStep === PracticeStep.CHINESE_SHOWN) {
      // 2. 解中文 -> 離線朗讀中文釋義 -> 讀完後等待 delayMs -> 跳到 3. 音節拆解與發音
      playCurrentChineseAudio(() => {
        stepTimer = setTimeout(() => {
          setCurrentStep(PracticeStep.SYLLABLES_AND_AUDIO);
        }, delayMs);
      });

      // 安全超時 Fallback
      audioFallbackTimer = setTimeout(() => {
        setCurrentStep(PracticeStep.SYLLABLES_AND_AUDIO);
      }, delayMs + 3500);
    } else if (currentStep === PracticeStep.SYLLABLES_AND_AUDIO) {
      // 3. 音節拆解與發音 -> 朗讀單字英文 -> 讀完後等待 delayMs -> 跳到下一個字
      playCurrentWordAudio(() => {
        stepTimer = setTimeout(() => {
          handleNextWord();
        }, delayMs);
      });

      // 安全超時 Fallback
      audioFallbackTimer = setTimeout(() => {
        handleNextWord();
      }, delayMs + 3500);
    }

    return () => {
      if (stepTimer) clearTimeout(stepTimer);
      if (audioFallbackTimer) clearTimeout(audioFallbackTimer);
    };
  }, [isOpen, isOverlaid, isAutoPlaying, currentStep, activeWord, stepDelay, playCurrentWordAudio, playCurrentChineseAudio, handleNextWord]);

  // Modal 關閉或被覆蓋時暫停自動播放
  useEffect(() => {
    if (!isOpen || isOverlaid) {
      setIsAutoPlaying(false);
    }
  }, [isOpen, isOverlaid]);

  // Keyboard navigation (當有上層彈窗覆蓋時不攔截鍵盤事件)
  useEffect(() => {
    if (!isOpen || isOverlaid) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleNextStep();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextWord();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevWord();
      } else if (e.key === 'a' || e.key === 'A') {
        // 'A' 鍵切換自動切換
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isOverlaid, handleNextStep, handleNextWord, handlePrevWord, onClose]);

  if (!isOpen || !activeWord) return null;

  const isLastWordInUnit = currentIndex === currentUnitWords.length - 1;
  const isLastUnit = activeUnitIndex === units.length - 1;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative flex max-h-[94vh] w-full max-w-2xl flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 sm:py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className={`${typo.title} text-slate-900 dark:text-white`}>
                  快速練習 • 漸進拼讀卡
                </h2>
                <span className={`rounded-md bg-amber-100 dark:bg-amber-950/60 ${typo.tag} font-bold text-amber-800 dark:text-amber-300`}>
                  單元 {activeUnitIndex + 1} • {currentIndex + 1} / {currentUnitWords.length}
                </span>
              </div>
              <p className={`${typo.subtext} text-slate-500 dark:text-slate-400`}>
                {batchTitle} • 共 5 個單元分批學習
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* 自動切換按鈕 (Header 快速切換) */}
            <button
              onClick={() => setIsAutoPlaying(prev => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                isAutoPlaying
                  ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400/40 animate-pulse'
                  : 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
              }`}
              title="切換自動切換 (快捷鍵: A)"
            >
              {isAutoPlaying ? <Pause className="h-3.5 w-3.5 fill-current" /> : <Play className="h-3.5 w-3.5 fill-current" />}
              <span>{isAutoPlaying ? `自動中 (+${stepDelay.toFixed(1)}s)` : '自動切換'}</span>
            </button>

            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 5-Unit Selector Tabs (每批分 5 個單元) */}
        <div className="flex items-center justify-between gap-1.5 border-b border-slate-200/60 bg-slate-100/70 px-3 py-2 dark:border-slate-800 dark:bg-slate-800/40 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="flex items-center gap-1 px-1 text-xs font-bold text-slate-400">
              <Layers className="h-3.5 w-3.5" />
              <span>單元：</span>
            </div>
            {units.map((unit, idx) => {
              const isActive = idx === activeUnitIndex;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectUnit(idx)}
                  className={`shrink-0 rounded-lg px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-200/60 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700'
                  }`}
                >
                  第 {idx + 1} 單元 ({unit.words.length}字)
                </button>
              );
            })}
          </div>

          {/* 秒數調整面版展開切換按鈕 */}
          <button
            onClick={() => setShowDelayPicker(prev => !prev)}
            className={`shrink-0 inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium transition cursor-pointer ${
              showDelayPicker
                ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200'
                : 'text-slate-500 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
            title="調整每步停留秒數"
          >
            <Clock className="h-3.5 w-3.5 text-amber-600" />
            <span>每步 +{stepDelay.toFixed(1)}秒</span>
            <Sliders className="h-3 w-3 opacity-60" />
          </button>
        </div>

        {/* 秒數調節工具列 (可自訂秒數) */}
        {showDelayPicker && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/70 bg-amber-50/90 px-4 py-2 dark:border-amber-950/60 dark:bg-amber-950/30 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300">
              <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span>自動切換間隔時間（每步停留）：</span>
            </div>
            <div className="flex items-center gap-1.5">
              {/* 快捷預設秒數 */}
              {[0.5, 1.0, 1.5, 2.0, 3.0].map((d) => (
                <button
                  key={d}
                  onClick={() => handleUpdateDelay(d)}
                  className={`rounded-md px-2 py-0.5 text-xs font-semibold transition cursor-pointer ${
                    stepDelay === d
                      ? 'bg-amber-600 text-white shadow-2xs font-bold'
                      : 'bg-white text-slate-700 hover:bg-amber-100 dark:bg-slate-800 dark:text-slate-300 border border-amber-200/80 dark:border-slate-700'
                  }`}
                >
                  +{d}s
                </button>
              ))}

              {/* 微調按鈕 +/- */}
              <div className="flex items-center border border-amber-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 ml-1">
                <button
                  onClick={() => handleUpdateDelay(stepDelay - 0.5)}
                  disabled={stepDelay <= 0.3}
                  className="p-1 text-slate-600 hover:bg-amber-100 dark:text-slate-300 disabled:opacity-30 transition cursor-pointer"
                  title="減少 0.5 秒"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="px-1.5 text-xs font-bold font-mono text-amber-900 dark:text-amber-200">
                  {stepDelay.toFixed(1)}s
                </span>
                <button
                  onClick={() => handleUpdateDelay(stepDelay + 0.5)}
                  disabled={stepDelay >= 10}
                  className="p-1 text-slate-600 hover:bg-amber-100 dark:text-slate-300 disabled:opacity-30 transition cursor-pointer"
                  title="增加 0.5 秒"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3-Step Progress Indicators Bar (1.看單字發音 -> 2.解中文發音 -> 3.音節拆解與發音) */}
        <div className="grid grid-cols-3 gap-1.5 bg-slate-100/90 p-2 dark:bg-slate-800/60 border-b border-slate-200/60 dark:border-slate-800">
          {[
            { step: PracticeStep.WORD_SHOWN, label: '1. 看單字 (英文發音)' },
            { step: PracticeStep.CHINESE_SHOWN, label: '2. 解中文 (離線語音)' },
            { step: PracticeStep.SYLLABLES_AND_AUDIO, label: '3. 音節拆解與發音' }
          ].map((s) => {
            const isDone = currentStep >= s.step;
            const isCurrent = currentStep === s.step;
            return (
              <div
                key={s.step}
                className={`relative flex flex-col items-center justify-center py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold transition overflow-hidden ${
                  isCurrent
                    ? isAutoPlaying
                      ? 'bg-amber-500 text-white shadow-xs font-bold ring-2 ring-amber-300'
                      : 'bg-amber-500 text-white shadow-xs font-bold'
                    : isDone
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                    : 'bg-white/50 text-slate-400 dark:bg-slate-800/40'
                }`}
              >
                <span className="flex items-center gap-1 z-10">
                  <span>{s.label}</span>
                  {isCurrent && isAutoPlaying && (
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                  )}
                </span>
                {isCurrent && isAutoPlaying && (
                  <div
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-white/60 animate-pulse"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Card Body */}
        <div className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-6 text-center flex flex-col justify-center min-h-[300px]">
          {/* Step 1: Word Display & Pronunciation */}
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center gap-2">
              <span className={`${typo.largeWord} font-mono tracking-tight text-slate-900 dark:text-white`}>
                {activeWord.word}
              </span>
              {activeWord.pos && (
                <span className={`rounded-md bg-slate-100 px-2 py-0.5 ${typo.tag} font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300`}>
                  {activeWord.pos}
                </span>
              )}
              {/* 單字發音按鈕 */}
              <button
                onClick={() => playCurrentWordAudio()}
                className={`p-2 rounded-xl text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-slate-800 transition cursor-pointer ${
                  isPlayingAudio ? 'ring-2 ring-amber-400 animate-pulse scale-110 bg-amber-50' : ''
                }`}
                title="朗讀英文單字"
              >
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Step 2: Chinese Definition & Offline Speech */}
          <div className={`transition-all duration-300 ${currentStep >= PracticeStep.CHINESE_SHOWN ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <div className="inline-flex items-center gap-2.5 rounded-2xl bg-amber-50/80 px-5 py-2.5 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-900/60">
              <span className={`${typo.body} font-bold text-amber-900 dark:text-amber-200`}>
                {activeWord.chinese}
              </span>
              <button
                onClick={() => playCurrentChineseAudio()}
                className={`p-1 rounded-lg text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900/50 transition cursor-pointer ${
                  isPlayingChinese ? 'ring-2 ring-amber-400 animate-pulse scale-110 bg-amber-100' : ''
                }`}
                title="朗讀中文釋義 (離線語音)"
              >
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Step 3: Syllable Tiles, Rules & Audio Playback (已合併音節拆解與發音朗讀) */}
          <div className={`transition-all duration-300 ${currentStep >= PracticeStep.SYLLABLES_AND_AUDIO ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-800/40 space-y-3">
              {/* Syllable Segments */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {wordMatrix?.cells.map((cell, cIdx) => {
                  const isPrimary = cell.stressType === 'primary';
                  return (
                    <div
                      key={cIdx}
                      className={`flex flex-col items-center justify-center rounded-xl border px-3.5 py-2 ${
                        isPrimary
                          ? 'border-amber-400 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/60 ring-2 ring-amber-300'
                          : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
                      }`}
                    >
                      <span className={`${typo.title} font-mono text-slate-900 dark:text-white`}>
                        {cell.syllableText}
                      </span>
                      {cell.ipaSegment && (
                        <span className={`${typo.ipa} font-semibold text-amber-600 dark:text-amber-400`}>
                          {cell.ipaSegment}
                        </span>
                      )}
                      <span className={`${typo.tag} font-bold text-slate-500`}>
                        {isPrimary ? '主重音' : cell.stressType === 'secondary' ? '次重音' : '弱讀'}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Matched Rules */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                {activeWord.ruleCodes.map((ruleId) => {
                  const badge = getRuleColorBadge(ruleId);
                  const r = getPhonicsRule(ruleId);
                  return (
                    <button
                      key={ruleId}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        onOpenRuleDetail(ruleId);
                      }}
                      className={`rounded-lg border ${typo.badge} font-semibold transition hover:scale-105 cursor-pointer ${badge.bg} ${badge.text} ${badge.border}`}
                    >
                      {ruleId}: {r?.name?.split(' ')[0] || ''}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Controls: Audio Playback & Matrix Detail */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => playCurrentWordAudio()}
              className={`flex items-center gap-2 rounded-2xl bg-amber-500 ${typo.button} font-bold text-white shadow-md hover:bg-amber-600 transition cursor-pointer ${
                isPlayingAudio ? 'ring-4 ring-amber-300 animate-pulse scale-105' : ''
              }`}
            >
              <Volume2 className="h-5 w-5" />
              <span>
                {currentStep >= PracticeStep.SYLLABLES_AND_AUDIO ? '再次播放發音' : '朗讀標準發音'}
              </span>
            </button>

            <button
              onClick={() => {
                setIsAutoPlaying(false);
                onOpenWordMatrix(activeWord);
              }}
              className={`flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white ${typo.button} font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer`}
              title="查看音節矩陣"
            >
              <Grid className="h-4 w-4 text-indigo-500" />
              <span>矩陣詳解</span>
            </button>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 sm:py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevWord}
              disabled={currentIndex <= 0 && activeUnitIndex <= 0}
              className={`flex items-center gap-1 rounded-xl border border-slate-200 bg-white ${typo.button} font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>上一個</span>
            </button>

            <button
              onClick={handleRestart}
              className={`p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`}
              title="重新練習本單元"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(prev => !prev)}
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition cursor-pointer ${
                isAutoPlaying
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 ring-2 ring-emerald-400/30'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              <span>{isAutoPlaying ? '暫停自動切換' : '啟動自動切換 (A)'}</span>
            </button>

            <button
              onClick={handleNextStep}
              className={`flex items-center gap-2 rounded-xl bg-indigo-600 ${typo.button} font-bold text-white shadow-md hover:bg-indigo-500 transition cursor-pointer`}
            >
              <span>
                {currentStep === PracticeStep.SYLLABLES_AND_AUDIO
                  ? (isLastWordInUnit && isLastUnit ? '完成練習' : isLastWordInUnit ? '前往下一單元' : '下一個單字')
                  : '下一步 (空白鍵)'}
              </span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
