'use client';

import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';
import { ALL_RULE_CODES, EPRS_PHONICS_RULES } from '../../lib/engine/phonicsRules';

interface WordFilterBarProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  selectedRule: string;
  onRuleChange: (val: string) => void;
  selectedSyllableCount: string;
  onSyllableCountChange: (val: string) => void;
  onResetFilters: () => void;
  totalFiltered: number;
  totalInBatch: number;
}

export function WordFilterBar({
  searchTerm,
  onSearchChange,
  selectedRule,
  onRuleChange,
  selectedSyllableCount,
  onSyllableCountChange,
  onResetFilters,
  totalFiltered,
  totalInBatch
}: WordFilterBarProps) {
  const isFiltered = searchTerm !== '' || selectedRule !== '' || selectedSyllableCount !== '';

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="搜尋單字、中文釋義或音標..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2 pl-9 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:bg-slate-800"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Rule Filter */}
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 py-1.5 dark:border-slate-700 dark:bg-slate-800/50">
          <Filter className="h-3.5 w-3.5 text-slate-400" />
          <select
            value={selectedRule}
            onChange={(e) => onRuleChange(e.target.value)}
            className="bg-transparent text-xs font-medium text-slate-700 focus:outline-hidden dark:text-slate-300"
          >
            <option value="">全部發音規則 (All Rules)</option>
            {ALL_RULE_CODES.map((code) => {
              const rule = EPRS_PHONICS_RULES[code];
              return (
                <option key={code} value={code}>
                  {code} - {rule.name}
                </option>
              );
            })}
          </select>
        </div>

        {/* Syllable Count Filter */}
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/50 px-2.5 py-1.5 dark:border-slate-700 dark:bg-slate-800/50">
          <span className="text-xs text-slate-400">音節:</span>
          <select
            value={selectedSyllableCount}
            onChange={(e) => onSyllableCountChange(e.target.value)}
            className="bg-transparent text-xs font-medium text-slate-700 focus:outline-hidden dark:text-slate-300"
          >
            <option value="">全部音節</option>
            <option value="1">1 音節 (單音節)</option>
            <option value="2">2 音節</option>
            <option value="3">3 音節</option>
            <option value="4+">4 音節以上</option>
          </select>
        </div>

        {/* Reset Filter Button */}
        {isFiltered && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-2.5 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-100 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-400 transition"
          >
            <RotateCcw className="h-3 w-3" />
            <span>重置</span>
          </button>
        )}

        {/* Count badge */}
        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 px-1">
          顯示 <span className="font-semibold text-slate-900 dark:text-white">{totalFiltered}</span> / {totalInBatch} 字
        </div>
      </div>
    </div>
  );
}
