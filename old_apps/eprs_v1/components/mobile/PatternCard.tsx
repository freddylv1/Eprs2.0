'use client';

import React from 'react';
import { Network, ArrowRight } from 'lucide-react';
import { PatternMappingOutput } from '@/lib/eprs-query';

interface PatternCardProps {
  data?: PatternMappingOutput;
  onPatternClick?: (patternId: string) => void;
}

export function PatternCard({ data, onPatternClick }: PatternCardProps) {
  if (!data) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Phonics Pattern
            </h3>
            <span className="text-base font-bold text-slate-900 dark:text-white">
              {data.pattern_id}
            </span>
          </div>
        </div>

        {data.pattern_id && onPatternClick && (
          <button
            onClick={() => onPatternClick(data.pattern_id)}
            className="min-h-[44px] px-3 text-xs font-medium text-amber-700 dark:text-amber-300 hover:underline flex items-center gap-1"
          >
            <span>同模式單字</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3.5 border border-slate-100 dark:border-slate-800 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            規則模式
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-white">
            {data.pattern_name || '拼讀音標模式'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            對應字母 / 音標
          </span>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200 text-sm font-semibold">
              {data.spelling}
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 text-sm font-mono font-bold">
              {data.phoneme}
            </span>
          </div>
        </div>
      </div>

      {/* If there are multiple syllable breakdown patterns */}
      {data.all_patterns && data.all_patterns.length > 1 && (
        <div className="pt-1 space-y-1.5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            音節組成分解：
          </p>
          <div className="grid grid-cols-1 gap-1.5">
            {data.all_patterns.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-slate-100/80 dark:bg-slate-700/50"
              >
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  第 {item.syllable_index + 1} 音節 [{item.syllable}]
                </span>
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                  {item.pattern_id} ({item.ipa})
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
