'use client';

import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, XCircle, HelpCircle, RotateCcw } from 'lucide-react';
import { PracticeOutput } from '@/lib/eprs-query';

interface PracticeCardProps {
  memoryTip?: string;
  practice?: PracticeOutput;
  correctIpa?: string;
  word?: string;
}

export function PracticeCard({
  memoryTip,
  practice,
  correctIpa,
  word,
}: PracticeCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Combine correct IPA and distractors into options
  const targetIpa = correctIpa || '/ˈæp.əl/';
  const distractorsList = practice?.distractors || [];
  const list = Array.from(new Set([targetIpa, ...distractorsList]));
  const offset = (word || 'word').length % Math.max(1, list.length);
  const options = [...list.slice(offset), ...list.slice(0, offset)];

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="space-y-4">
      {/* Memory Tip Card */}
      {memoryTip && (
        <div className="bg-amber-50/80 dark:bg-amber-950/40 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 p-5 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
            <Lightbulb className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <h3 className="text-base font-bold">記憶提示與發音要領</h3>
          </div>
          <p className="text-base text-amber-900 dark:text-amber-200 leading-relaxed font-medium pl-1">
            {memoryTip}
          </p>
        </div>
      )}

      {/* Practice Quiz Card */}
      {practice && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                發音測驗測驗
              </h3>
            </div>
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200">
              等級: {practice.level || 'L1'}
            </span>
          </div>

          <p className="text-base text-slate-700 dark:text-slate-300 font-medium">
            請選出「<span className="font-extrabold text-indigo-600 dark:text-indigo-400">{word}</span>」正確的音標：
          </p>

          <div className="grid grid-cols-1 gap-2.5">
            {options.map((option, idx) => {
              const isCorrect = option === targetIpa;
              const isSelected = selectedOption === option;

              let btnStyle =
                'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-indigo-300 dark:hover:border-indigo-600';

              if (showResult) {
                if (isCorrect) {
                  btnStyle =
                    'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (isSelected) {
                  btnStyle =
                    'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                } else {
                  btnStyle =
                    'bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(option)}
                  disabled={showResult}
                  className={`w-full min-h-[48px] px-4 py-3 rounded-xl border text-base font-mono transition-all flex items-center justify-between active:scale-[0.99] ${btnStyle}`}
                >
                  <span>{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  )}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-sm font-semibold">
                {selectedOption === targetIpa ? (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    🎉 太棒了！回答正確
                  </span>
                ) : (
                  <span className="text-rose-600 dark:text-rose-400">
                    ❌ 答錯了，正確為 {targetIpa}
                  </span>
                )}
              </span>

              <button
                onClick={handleReset}
                className="min-h-[44px] px-3 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重新測驗</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
