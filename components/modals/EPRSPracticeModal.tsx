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
  Sliders,
  Sun
} from 'lucide-react';
import { useScreenWakeLock } from '../../lib/useScreenWakeLock';

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
  const [keepAwakeOnAutoPlay, setKeepAwakeOnAutoPlay] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('eprs_practice_wake_lock');
        if (saved !== null) return saved === 'true';
      } catch {}
    }
    return true; // 預設快速練習自動播放時保持螢幕常亮，不進入低電量休眠
  });

  // 當快速練習自動播放中且啟用了常亮設定時，啟用 Screen Wake Lock 保持螢幕常亮
  const shouldKeepScreenAwake = isOpen && !isOverlaid && isAutoPlaying && keepAwakeOnAutoPlay;
  const { isActive: isScreenAwake } = useScreenWakeLock(shouldKeepScreenAwake);

  const handleToggleKeepAwake = () => {
    setKeepAwakeOnAutoPlay(prev => {
      const nextVal = !prev;
      try {
        localStorage.setItem('eprs_practice_wake_lock', String(nextVal));
      } catch {}
      return nextVal;
    });
  };

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

  // 依單字長度、螢幕斷點及字體偏好最大化單字字體（適用 Pad 與手機）
  const wordFontClass = useMemo(() => {
    const len = activeWord?.word?.length || 0;
    if (len <= 4) {
      if (fontSize === 'xlarge') return 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl';
      if (fontSize === 'large') return 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl';
      if (fontSize === 'small') return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
      return 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl';
    } else if (len <= 7) {
      if (fontSize === 'xlarge') return 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl';
      if (fontSize === 'large') return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
      if (fontSize === 'small') return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
      return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
    } else if (len <= 10) {
      if (fontSize === 'xlarge') return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
      if (fontSize === 'large') return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
      if (fontSize === 'small') return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
      return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
    } else {
      if (fontSize === 'xlarge') return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
      if (fontSize === 'large') return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
      return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
    }
  }, [activeWord?.word?.length, fontSize]);

  // 依音節數量、螢幕斷點及字體偏好最大化音節拆解字體（適用 Pad 與手機）
  const syllableFontClass = useMemo(() => {
    const count = wordMatrix?.cells?.length || 1;
    if (count <= 2) {
      if (fontSize === 'xlarge') return 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl';
      if (fontSize === 'large') return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
      if (fontSize === 'small') return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
      return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
    } else if (count <= 3) {
      if (fontSize === 'xlarge') return 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
      if (fontSize === 'large') return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
      if (fontSize === 'small') return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
      return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
    } else {
      if (fontSize === 'xlarge') return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';
      if (fontSize === 'large') return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
      return 'text-lg sm:text-2xl md:text-3xl lg:text-4xl';
    }
  }, [wordMatrix?.cells?.length, fontSize]);

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

    const initTimer = setTimeout(() => {
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
    }, 50);

    return () => {
      clearTimeout(initTimer);
      if (stepTimer) clearTimeout(stepTimer);
      if (audioFallbackTimer) clearTimeout(audioFallbackTimer);
    };
  }, [isOpen, isOverlaid, isAutoPlaying, currentStep, activeWord, stepDelay, playCurrentWordAudio, playCurrentChineseAudio, handleNextWord]);

  // Modal 關閉或被覆蓋時暫停自動播放
  useEffect(() => {
    if (!isOpen || isOverlaid) {
      const t = setTimeout(() => setIsAutoPlaying(false), 0);
      return () => clearTimeout(t);
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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-1 sm:p-4 md:p-6 overflow-y-auto"
    >
      <div className="relative flex h-[100dvh] sm:h-auto max-h-[100dvh] sm:max-h-[92vh] w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Modal Header */}
        <div className="shrink-0 flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3 py-2 sm:px-6 sm:py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h2 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white truncate">
                  快速練習 • 漸進拼讀卡
                </h2>
                <span className="rounded-md bg-amber-100 dark:bg-amber-950/60 px-1.5 py-0.2 sm:px-2 sm:py-0.5 text-[11px] sm:text-xs md:text-sm font-bold text-amber-800 dark:text-amber-300 whitespace-nowrap">
                  單元 {activeUnitIndex + 1} • {currentIndex + 1}/{currentUnitWords.length}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
                {batchTitle} • 共 5 個單元分批學習
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* 螢幕常亮保持標籤 (自動播放時保持螢幕常亮，防止裝置低耗電休眠或螢幕關閉) */}
            {isAutoPlaying && (
              <button
                type="button"
                onClick={handleToggleKeepAwake}
                className={`inline-flex items-center gap-1 rounded-xl px-2 py-1 sm:px-2.5 sm:py-1.5 text-xs font-bold transition cursor-pointer min-h-[34px] sm:min-h-[40px] border ${
                  isScreenAwake
                    ? 'bg-amber-100/90 text-amber-900 border-amber-300 dark:bg-amber-950/70 dark:text-amber-200 dark:border-amber-700 shadow-2xs'
                    : 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                }`}
                title={
                  isScreenAwake
                    ? '螢幕常亮防護中：自動播放時保持螢幕常亮，不會因低電源或閒置關閉螢幕（點擊可切換）'
                    : '螢幕常亮已停用（點擊開啟自動播放常亮防休眠）'
                }
              >
                <Sun className={`h-3.5 w-3.5 ${isScreenAwake ? 'text-amber-600 dark:text-amber-400 animate-pulse fill-amber-400/40' : 'text-slate-400'}`} />
                <span className="hidden xs:inline">
                  {isScreenAwake ? '保持常亮' : '常亮關閉'}
                </span>
              </button>
            )}

            {/* 自動切換按鈕 (Header 快速切換) */}
            <button
              onClick={() => setIsAutoPlaying(prev => !prev)}
              className={`inline-flex items-center gap-1 rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 text-xs font-bold transition cursor-pointer min-h-[34px] sm:min-h-[40px] ${
                isAutoPlaying
                  ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400/40 animate-pulse'
                  : 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
              }`}
              title="切換自動切換 (快捷鍵: A)"
            >
              {isAutoPlaying ? <Pause className="h-3.5 w-3.5 fill-current" /> : <Play className="h-3.5 w-3.5 fill-current" />}
              <span className="hidden xs:inline sm:inline">
                {isAutoPlaying ? `自動中 (+${stepDelay.toFixed(1)}s)` : '自動切換'}
              </span>
              <span className="xs:hidden sm:hidden">
                {isAutoPlaying ? `${stepDelay.toFixed(1)}s` : '自動'}
              </span>
            </button>

            <button
              onClick={onClose}
              className="rounded-xl p-1.5 sm:p-2 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition cursor-pointer min-h-[34px] min-w-[34px] sm:min-h-[40px] sm:min-w-[40px] flex items-center justify-center"
              title="關閉"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 5-Unit Selector Tabs (每批分 5 個單元) */}
        <div className="shrink-0 flex items-center justify-between gap-1.5 border-b border-slate-200/60 bg-slate-100/70 px-2.5 py-1.5 sm:px-3 sm:py-2 dark:border-slate-800 dark:bg-slate-800/40 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="flex items-center gap-1 px-1 text-xs font-bold text-slate-400">
              <Layers className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">單元：</span>
            </div>
            {units.map((unit, idx) => {
              const isActive = idx === activeUnitIndex;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectUnit(idx)}
                  className={`shrink-0 rounded-lg px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm font-semibold transition cursor-pointer min-h-[32px] sm:min-h-[36px] flex items-center ${
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
            className={`shrink-0 inline-flex items-center gap-1 rounded-lg px-2 py-0.5 sm:py-1 text-xs sm:text-sm font-medium transition cursor-pointer min-h-[32px] sm:min-h-[36px] ${
              showDelayPicker
                ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200'
                : 'text-slate-500 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
            title="調整每步停留秒數"
          >
            <Clock className="h-3.5 w-3.5 text-amber-600" />
            <span>+{stepDelay.toFixed(1)}s</span>
            <Sliders className="h-3 w-3 opacity-60" />
          </button>
        </div>

        {/* 秒數調節工具列 (可自訂秒數) */}
        {showDelayPicker && (
          <div className="shrink-0 flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/70 bg-amber-50/90 px-3 py-1.5 sm:px-4 sm:py-2 dark:border-amber-950/60 dark:bg-amber-950/30 animate-in fade-in slide-in-from-top-1 duration-150">
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

              {/* 螢幕常亮防護開關 */}
              <button
                type="button"
                onClick={handleToggleKeepAwake}
                className={`ml-1.5 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold transition cursor-pointer border ${
                  keepAwakeOnAutoPlay
                    ? 'bg-amber-600 text-white border-amber-700 font-bold shadow-2xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border-amber-200 dark:border-slate-700'
                }`}
                title="自動播放時保持螢幕常亮，不熄滅不進入低電量休眠"
              >
                <Sun className={`h-3.5 w-3.5 ${keepAwakeOnAutoPlay ? 'fill-amber-200' : ''}`} />
                <span>螢幕常亮防護：{keepAwakeOnAutoPlay ? '開啟' : '關閉'}</span>
              </button>
            </div>
          </div>
        )}

        {/* 3-Step Progress Indicators Bar (1.看單字發音 -> 2.解中文發音 -> 3.音節拆解與發音) */}
        <div className="shrink-0 grid grid-cols-3 gap-1 sm:gap-1.5 bg-slate-100/90 p-1.5 sm:p-2 dark:bg-slate-800/60 border-b border-slate-200/60 dark:border-slate-800">
          {[
            { step: PracticeStep.WORD_SHOWN, label: '1. 看單字 (英文發音)', shortLabel: '1. 英文發音' },
            { step: PracticeStep.CHINESE_SHOWN, label: '2. 解中文 (離線語音)', shortLabel: '2. 中文釋義' },
            { step: PracticeStep.SYLLABLES_AND_AUDIO, label: '3. 音節拆解與發音', shortLabel: '3. 音節拆解' }
          ].map((s) => {
            const isDone = currentStep >= s.step;
            const isCurrent = currentStep === s.step;
            return (
              <div
                key={s.step}
                className={`relative flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 rounded-lg text-xs sm:text-sm font-bold transition overflow-hidden ${
                  isCurrent
                    ? isAutoPlaying
                      ? 'bg-amber-500 text-white shadow-xs font-extrabold ring-2 ring-amber-300'
                      : 'bg-amber-500 text-white shadow-xs font-extrabold'
                    : isDone
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                    : 'bg-white/50 text-slate-400 dark:bg-slate-800/40'
                }`}
              >
                <span className="flex items-center gap-1 z-10 text-center whitespace-nowrap">
                  <span className="hidden sm:inline">{s.label}</span>
                  <span className="sm:hidden">{s.shortLabel}</span>
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

        {/* Card Body - 採用 justify-start 確保頂部單字永遠 100% 可見，杜絕 sm:justify-center 造成內容往上超出視區被裁切的問題 */}
        <div className="flex-1 px-3 py-2.5 sm:px-6 sm:py-6 md:px-10 md:py-8 overflow-y-auto space-y-2.5 sm:space-y-6 md:space-y-8 text-center flex flex-col justify-start items-center pb-8 sm:pb-12">
          {/* Step 1: Word Display & Pronunciation (最大化單字字體) */}
          <div className="space-y-1 sm:space-y-2 w-full pt-1 sm:pt-0">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-4 flex-wrap max-w-full">
              <span className={`${wordFontClass} font-black font-mono tracking-tight text-slate-900 dark:text-white select-all drop-shadow-xs break-all sm:break-normal`}>
                {activeWord.word}
              </span>
              {activeWord.pos && (
                <span className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm md:text-base font-bold text-slate-700 dark:text-slate-300 shrink-0">
                  {activeWord.pos}
                </span>
              )}
              {/* 單字發音按鈕 */}
              <button
                onClick={() => playCurrentWordAudio()}
                className={`p-1.5 sm:p-3.5 rounded-xl sm:rounded-2xl text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-slate-800 transition cursor-pointer min-h-[38px] min-w-[38px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center shrink-0 ${
                  isPlayingAudio ? 'ring-4 ring-amber-400 animate-pulse scale-110 bg-amber-50 dark:bg-slate-800' : ''
                }`}
                title="朗讀英文單字"
              >
                <Volume2 className="h-5 w-5 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </button>
            </div>
          </div>

          {/* Step 2: Chinese Definition & Offline Speech (清晰大字中文釋義) */}
          <div className={`w-full transition-all duration-300 ${currentStep >= PracticeStep.CHINESE_SHOWN ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <div className="inline-flex items-center gap-2 sm:gap-4 rounded-xl sm:rounded-2xl bg-amber-50/90 px-4 py-1.5 sm:px-8 sm:py-3.5 border-2 border-amber-200/80 shadow-xs dark:bg-amber-950/40 dark:border-amber-900/60 max-w-full">
              <span className="text-lg sm:text-2xl md:text-3xl font-black text-amber-900 dark:text-amber-100 tracking-wide">
                {activeWord.chinese}
              </span>
              <button
                onClick={() => playCurrentChineseAudio()}
                className={`p-1 sm:p-2 rounded-lg sm:rounded-xl text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900/50 transition cursor-pointer min-h-[36px] min-w-[36px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center shrink-0 ${
                  isPlayingChinese ? 'ring-4 ring-amber-400 animate-pulse scale-110 bg-amber-100 dark:bg-amber-900' : ''
                }`}
                title="朗讀中文釋義 (離線語音)"
              >
                <Volume2 className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>

          {/* Step 3: Syllable Tiles, Rules & Audio Playback (音節拆解最大化字體顯示) */}
          <div className={`w-full transition-all duration-300 ${currentStep >= PracticeStep.SYLLABLES_AND_AUDIO ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="rounded-xl sm:rounded-3xl border-2 border-slate-200/80 bg-slate-50/80 p-2.5 sm:p-6 md:p-8 dark:border-slate-800 dark:bg-slate-800/50 space-y-2.5 sm:space-y-6 shadow-2xs">
              {/* Syllable Segments (音節拆解單元卡 - 最大化字體與重音標記) */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 md:gap-6 py-0.5">
                {wordMatrix?.cells.map((cell, cIdx) => {
                  const isPrimary = cell.stressType === 'primary';
                  const isSecondary = cell.stressType === 'secondary';
                  return (
                    <div
                      key={cIdx}
                      className={`flex flex-col items-center justify-center rounded-xl sm:rounded-3xl border-2 px-2.5 py-1.5 sm:px-6 sm:py-4 md:px-8 md:py-6 min-w-[64px] sm:min-w-[104px] md:min-w-[136px] transition-transform hover:scale-105 ${
                        isPrimary
                          ? 'border-amber-400 bg-amber-50/95 dark:border-amber-500 dark:bg-amber-950/80 shadow-md ring-2 sm:ring-4 ring-amber-300/40'
                          : isSecondary
                          ? 'border-indigo-300 bg-indigo-50/70 dark:border-indigo-800 dark:bg-indigo-950/40 shadow-xs'
                          : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 shadow-xs'
                      }`}
                    >
                      {/* 音節字母拆解 - 最大化字體 */}
                      <span className={`${syllableFontClass} font-black font-mono tracking-tight text-slate-900 dark:text-white`}>
                        {cell.syllableText}
                      </span>
                      {/* 對應音標 - 放大清晰 */}
                      {cell.ipaSegment && (
                        <span className="text-xs sm:text-lg md:text-2xl font-bold font-mono text-amber-600 dark:text-amber-400 mt-0.5 sm:mt-1">
                          {cell.ipaSegment}
                        </span>
                      )}
                      {/* 重音標記標籤 */}
                      <span
                        className={`text-[9px] sm:text-xs md:text-sm font-extrabold px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded mt-1 ${
                          isPrimary
                            ? 'bg-amber-500 text-white shadow-xs'
                            : isSecondary
                            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300'
                            : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {isPrimary ? '主重音' : isSecondary ? '次重音' : '弱讀'}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Matched Rules */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-slate-200/80 dark:border-slate-700/60">
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
                      className={`rounded-lg sm:rounded-xl border px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-sm font-bold transition hover:scale-105 cursor-pointer ${badge.bg} ${badge.text} ${badge.border} shadow-2xs`}
                    >
                      {ruleId}: {r?.name?.split(' ')[0] || ''}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Controls: Audio Playback & Matrix Detail */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap pt-0.5">
            <button
              onClick={() => playCurrentWordAudio()}
              className={`flex items-center gap-1.5 rounded-xl sm:rounded-2xl bg-amber-500 px-3.5 py-2 sm:px-7 sm:py-3.5 text-xs sm:text-base font-bold text-white shadow-md hover:bg-amber-600 transition cursor-pointer min-h-[38px] sm:min-h-[44px] ${
                isPlayingAudio ? 'ring-4 ring-amber-300 animate-pulse scale-105' : ''
              }`}
            >
              <Volume2 className="h-4 w-4 sm:h-6 sm:w-6" />
              <span>
                {currentStep >= PracticeStep.SYLLABLES_AND_AUDIO ? '再次播放發音' : '朗讀標準發音'}
              </span>
            </button>

            <button
              onClick={() => {
                setIsAutoPlaying(false);
                onOpenWordMatrix(activeWord);
              }}
              className="flex items-center gap-1.5 rounded-xl sm:rounded-2xl border border-slate-200 bg-white px-3.5 py-2 sm:px-6 sm:py-3.5 text-xs sm:text-base font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer min-h-[38px] sm:min-h-[44px]"
              title="查看音節矩陣"
            >
              <Grid className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
              <span>矩陣詳解</span>
            </button>
          </div>
        </div>

        {/* Modal Footer Controls - 加上足夠的底部安全間距 pb-4 sm:pb-3.5 防止手機底欄遮擋 */}
        <div className="shrink-0 flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-3 py-2.5 pb-4 sm:pb-3.5 sm:px-6 sm:py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrevWord}
              disabled={currentIndex <= 0 && activeUnitIndex <= 0}
              className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer min-h-[38px] sm:min-h-[44px]"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>上一個</span>
            </button>

            <button
              onClick={handleRestart}
              className="p-1.5 sm:p-2.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer min-h-[38px] min-w-[38px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center"
              title="重新練習本單元"
            >
              <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setIsAutoPlaying(prev => !prev)}
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs sm:text-sm font-bold transition cursor-pointer min-h-[44px] ${
                isAutoPlaying
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 ring-2 ring-emerald-400/30'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isAutoPlaying ? '暫停自動切換' : '啟動自動切換 (A)'}</span>
              {isAutoPlaying && isScreenAwake && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-100/90 dark:bg-amber-950/80 px-1.5 py-0.5 rounded-md ml-1 border border-amber-300/60 dark:border-amber-700/60 animate-pulse">
                  <Sun className="h-3 w-3 fill-amber-400" />
                  <span>常亮防護</span>
                </span>
              )}
            </button>

            <button
              onClick={handleNextStep}
              className="flex items-center gap-1 sm:gap-2 rounded-xl bg-indigo-600 px-3 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-base font-bold text-white shadow-md hover:bg-indigo-500 transition cursor-pointer min-h-[38px] sm:min-h-[44px]"
            >
              <span>
                {currentStep === PracticeStep.SYLLABLES_AND_AUDIO
                  ? (isLastWordInUnit && isLastUnit ? '完成練習' : isLastWordInUnit ? '下一單元' : '下一個單字')
                  : '下一步 (空白鍵)'}
              </span>
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
