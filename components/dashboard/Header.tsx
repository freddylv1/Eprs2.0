'use client';

import React, { useState } from 'react';
import { FontSizePreference } from '../../lib/types';
import {
  BookOpen,
  Sparkles,
  Volume2,
  Download,
  Layers,
  Zap,
  Maximize2,
  Minimize2,
  SlidersHorizontal,
  Type,
  Headphones,
  Music
} from 'lucide-react';
import { audioManager } from '../../lib/audioManager';

interface HeaderProps {
  onOpenRules: (ruleId?: string) => void;
  onOpenQuickPractice: () => void;
  onOpenQuiz: () => void;
  onOpenDictation: () => void;
  onOpenSongLearning: () => void;
  onOpenAudioDiagnostic: () => void;
  onToggleToolbar: () => void;
  isToolbarVisible: boolean;
  onToggleFocusMode: () => void;
  isFocusMode: boolean;
  totalWordsInView: number;
  currentBatchTitle: string;
  fontSize: FontSizePreference;
  onFontSizeChange: (size: FontSizePreference) => void;
}

export function Header({
  onOpenRules,
  onOpenQuickPractice,
  onOpenQuiz,
  onOpenDictation,
  onOpenSongLearning,
  onOpenAudioDiagnostic,
  onToggleToolbar,
  isToolbarVisible,
  onToggleFocusMode,
  isFocusMode,
  totalWordsInView,
  currentBatchTitle,
  fontSize,
  onFontSizeChange
}: HeaderProps) {
  const [speechRate, setSpeechRate] = useState<number>(0.85);

  const handleRateChange = (rate: number) => {
    setSpeechRate(rate);
    audioManager.setRate(rate);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95 shadow-xs">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-3 py-2.5 sm:px-6 sm:py-3">
        {/* Top Row: Brand & System Tools */}
        <div className="flex items-center justify-between gap-2">
          {/* Left: Brand & Status (Mobile Optimized) */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-600 text-white shadow-sm shadow-indigo-500/20 shrink-0">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white truncate">
                  EPRS 自然發音音節矩陣
                </h1>
                <span className="hidden sm:inline-flex items-center rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                  v2.0
                </span>
              </div>
              <p className="hidden sm:block text-xs text-slate-500 dark:text-slate-400">
                {currentBatchTitle} • 共 {totalWordsInView} 個單字
              </p>
            </div>
          </div>

          {/* Right: Essential Tools & Settings */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Font Size Selector (Hidden on small mobile to reduce clutter) */}
            <div className="hidden sm:flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50/80 px-2 py-1 dark:border-slate-800 dark:bg-slate-800/60">
              <Type className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 mr-1">字級:</span>
              <button
                onClick={() => onFontSizeChange('small')}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold transition ${
                  fontSize === 'small'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
                }`}
                title="小字體"
              >
                小
              </button>
              <button
                onClick={() => onFontSizeChange('medium')}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold transition ${
                  fontSize === 'medium'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
                }`}
                title="標準字體"
              >
                標準
              </button>
              <button
                onClick={() => onFontSizeChange('large')}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold transition ${
                  fontSize === 'large'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
                }`}
                title="放大字體"
              >
                放大
              </button>
              <button
                onClick={() => onFontSizeChange('xlarge')}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold transition ${
                  fontSize === 'xlarge'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
                }`}
                title="特大字體"
              >
                特大
              </button>
            </div>

            {/* Speech Rate Selector (XL screen only) */}
            <div className="hidden xl:flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50/80 px-2 py-1 dark:border-slate-800 dark:bg-slate-800/60">
              <Volume2 className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">語速:</span>
              <button
                onClick={() => handleRateChange(0.7)}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold transition ${
                  speechRate === 0.7
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
                }`}
              >
                0.7x
              </button>
              <button
                onClick={() => handleRateChange(0.85)}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold transition ${
                  speechRate === 0.85
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
                }`}
              >
                0.85x
              </button>
              <button
                onClick={() => handleRateChange(1.0)}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold transition ${
                  speechRate === 1.0
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
                }`}
              >
                1.0x
              </button>
            </div>

            {/* Audio Diagnostic Button */}
            <button
              id="btn-header-audio-diagnostic"
              onClick={onOpenAudioDiagnostic}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition shadow-2xs"
              title="聲音設定與測試"
            >
              <Volume2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span className="hidden sm:inline">聲音</span>
            </button>

            {/* Filter Bar Toggle */}
            <button
              onClick={onToggleToolbar}
              className={`inline-flex items-center gap-1 rounded-lg border p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-medium transition ${
                isToolbarVisible
                  ? 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
              }`}
              title="顯示/隱藏篩選工具列"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">{isToolbarVisible ? '隱藏篩選' : '篩選'}</span>
            </button>

            {/* Fullscreen Focus Mode Toggle Button */}
            <button
              onClick={onToggleFocusMode}
              className={`inline-flex items-center gap-1 rounded-lg border p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-semibold transition ${
                isFocusMode
                  ? 'border-indigo-500 bg-indigo-600 text-white shadow-2xs'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
              }`}
              title="全視窗顯示"
            >
              {isFocusMode ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4 text-indigo-500" />}
              <span className="hidden md:inline">{isFocusMode ? '退出全視窗' : '全視窗'}</span>
            </button>
          </div>
        </div>

        {/* Feature Action Nav (Scrollable horizontal on mobile, clean flex on desktop) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {/* Song Learning Mode Button */}
          <button
            id="btn-header-song-learning"
            onClick={onOpenSongLearning}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-600 to-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:opacity-90 transition cursor-pointer shrink-0"
            title="英文歌學習專區"
          >
            <Music className="h-3.5 w-3.5" />
            <span>英文歌學習</span>
          </button>

          {/* Quick Practice Mode */}
          <button
            onClick={onOpenQuickPractice}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:from-amber-600 hover:to-orange-700 transition cursor-pointer shrink-0"
            title="手機自適應快速練習模式"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>快速練習</span>
          </button>

          {/* Dictation Mode Button */}
          <button
            id="btn-header-dictation"
            onClick={onOpenDictation}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:from-violet-500 hover:to-indigo-500 transition cursor-pointer shrink-0"
            title="聽寫模式"
          >
            <Headphones className="h-3.5 w-3.5" />
            <span>聽寫模式</span>
          </button>

          {/* Quiz Mode Button */}
          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-indigo-500 dark:bg-indigo-500 transition cursor-pointer shrink-0"
            title="拼讀測驗"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>拼讀測驗</span>
          </button>

          {/* 18 Rules Button */}
          <button
            onClick={() => onOpenRules()}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition shrink-0"
            title="18 大自然發音法則手冊"
          >
            <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
            <span>18 大法則</span>
          </button>
        </div>
      </div>
    </header>
  );
}
