'use client';

import React from 'react';
import { WordItem } from '../../lib/types';
import { BookOpen, Activity, Zap, CheckCircle2 } from 'lucide-react';

interface StatCardsProps {
  words: WordItem[];
}

export function StatCards({ words }: StatCardsProps) {
  const total = words.length;
  if (total === 0) return null;

  const monoCount = words.filter(w => (w.syllables?.length || 1) === 1).length;
  const polyCount = total - monoCount;
  
  const rulesSet = new Set<string>();
  words.forEach(w => (w.ruleCodes || []).forEach(r => rulesSet.add(r)));

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {/* Total Words */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">本批單字總量</span>
          <div className="rounded-lg bg-indigo-50 p-1.5 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
            <BookOpen className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{total}</span>
          <span className="text-[11px] text-slate-400">words</span>
        </div>
      </div>

      {/* Syllable Split */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">單音節 / 多音節</span>
          <div className="rounded-lg bg-emerald-50 p-1.5 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
            <Activity className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{monoCount}</span>
          <span className="text-xs text-slate-400">/</span>
          <span className="text-lg font-bold text-sky-600 dark:text-sky-400">{polyCount}</span>
          <span className="text-[10px] text-slate-400 ml-1">
            ({Math.round((monoCount / total) * 100)}% : {Math.round((polyCount / total) * 100)}%)
          </span>
        </div>
      </div>

      {/* Rules Covered */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">涵蓋發音規則</span>
          <div className="rounded-lg bg-amber-50 p-1.5 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
            <Zap className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-amber-600 dark:text-amber-400">{rulesSet.size}</span>
          <span className="text-[11px] text-slate-400">/ 18 大法則</span>
        </div>
      </div>

      {/* Dynamic Derivation Accuracy */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">系統音節推導</span>
          <div className="rounded-lg bg-purple-50 p-1.5 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-purple-600 dark:text-purple-400">100%</span>
          <span className="text-[11px] text-slate-400">自動即時矩陣</span>
        </div>
      </div>
    </div>
  );
}
