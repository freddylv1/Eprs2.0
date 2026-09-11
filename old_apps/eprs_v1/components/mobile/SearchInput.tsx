'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  onClear?: () => void;
  onSubmit?: () => void;
}

export function SearchInput({
  value,
  onChange,
  placeholder = '搜尋單字、Rule (如 R008) 或 Pattern...',
  onClear,
  onSubmit,
}: SearchInputProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
        <Search className="w-5 h-5" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && onSubmit) {
            onSubmit();
          }
        }}
        placeholder={placeholder}
        className="w-full min-h-[48px] pl-11 pr-10 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
      />

      {value && (
        <button
          onClick={() => {
            onChange('');
            if (onClear) onClear();
          }}
          aria-label="清除搜尋"
          className="absolute inset-y-0 right-2 flex items-center px-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 min-h-[44px]"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
