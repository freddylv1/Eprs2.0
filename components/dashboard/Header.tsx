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
  Type
} from 'lucide-react';
import { audioManager } from '../../lib/audioManager';

interface HeaderProps {
  onOpenRules: (ruleId?: string) => void;
  onOpenQuickPractice: () => void;
  onOpenQuiz: () => void;
  onOpenExport: () => void;
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
  onOpenExport,
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Brand & Status */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-600 text-white shadow-sm shadow-indigo-500/20 shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                EPRS 自然發音音節矩陣
              </h1>
              <span className="hidden sm:inline-flex items-center rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                v2.0 增強版
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {currentBatchTitle} • 共 {totalWordsInView} 個單字
            </p>
          </div>
        </div>

        {/* Right: Controls & Actions */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-end">
          {/* Font Size Selector (A- / A / A+) */}
          <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50/80 px-2 py-1 dark:border-slate-800 dark:bg-slate-800/60">
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

          {/* Speech Rate Selector */}
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

          {/* Filter Bar Toggle */}
          <button
            onClick={onToggleToolbar}
            className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition ${
              isToolbarVisible
                ? 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
            }`}
            title="顯示/隱藏篩選工具列"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{isToolbarVisible ? '隱藏篩選' : '篩選工具'}</span>
          </button>

          {/* Fullscreen / Focus Mode Toggle Button */}
          <button
            onClick={onToggleFocusMode}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition ${
              isFocusMode
                ? 'border-indigo-500 bg-indigo-600 text-white shadow-xs'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
            }`}
            title="開啟全視窗純淨單字模式（隱藏所有統計與非必要工具）"
          >
            {isFocusMode ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5 text-indigo-500" />}
            <span className="hidden md:inline">{isFocusMode ? '退出全視窗' : '全視窗顯示'}</span>
          </button>

          {/* Quick Practice Mode */}
          <button
            onClick={onOpenQuickPractice}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:from-amber-600 hover:to-orange-700 transition"
            title="開啟手機自適應 5 階段快速練習模式"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>快速練習</span>
          </button>

          {/* Quiz Mode Button */}
          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
            title="開啟拼讀測驗"
          >
            <Layers className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">拼讀測驗</span>
            <span className="sm:hidden">測驗</span>
          </button>

          {/* 18 Rules Button */}
          <button
            onClick={() => onOpenRules()}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700/80 transition"
            title="查閱 18 大自然發音法則手冊"
          >
            <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
            <span className="hidden lg:inline">18 大法則</span>
          </button>

          {/* Export Button */}
          <button
            onClick={onOpenExport}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition"
            title="導出單字數據"
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
