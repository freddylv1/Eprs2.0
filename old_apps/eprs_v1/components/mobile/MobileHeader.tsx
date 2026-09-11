'use client';

import React from 'react';
import { Volume2, Search, SlidersHorizontal, BookOpen } from 'lucide-react';

interface MobileHeaderProps {
  title?: string;
  subtitle?: string;
  activeTab?: string;
  onSearchClick?: () => void;
  onRawJsonToggle?: () => void;
  isRawJsonMode?: boolean;
}

export function MobileHeader({
  title = 'EPRS',
  subtitle = 'English Pronunciation Rule System',
  activeTab,
  onSearchClick,
  onRawJsonToggle,
  isRawJsonMode = false,
}: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3">
      <div className="flex items-center justify-between min-h-[44px]">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            E
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-none">
                {title}
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                v1.5
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onSearchClick && (
            <button
              onClick={onSearchClick}
              aria-label="開啟搜尋"
              className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95"
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          {onRawJsonToggle && (
            <button
              onClick={onRawJsonToggle}
              title={isRawJsonMode ? '切換為 Student UI' : '檢視 API JSON'}
              className={`px-2.5 h-9 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1 ${
                isRawJsonMode
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-semibold'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              {isRawJsonMode ? 'UI Mode' : 'JSON'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
