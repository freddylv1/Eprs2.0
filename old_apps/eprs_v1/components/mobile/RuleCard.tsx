'use client';

import React from 'react';
import { BookMarked, ArrowRight, ShieldCheck } from 'lucide-react';
import { RuleMappingOutput } from '@/lib/eprs-query';

interface RuleCardProps {
  data?: RuleMappingOutput;
  onRuleClick?: (ruleId: string) => void;
}

export function RuleCard({ data, onRuleClick }: RuleCardProps) {
  if (!data) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <BookMarked className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              EPRS Pronunciation Rule
            </h3>
            <span className="text-base font-bold text-slate-900 dark:text-white">
              {data.rule_id}
            </span>
          </div>
        </div>

        {data.rule_id && onRuleClick && (
          <button
            onClick={() => onRuleClick(data.rule_id)}
            className="min-h-[44px] px-3 text-xs font-medium text-emerald-700 dark:text-emerald-300 hover:underline flex items-center gap-1"
          >
            <span>符合本規則單字</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3.5 border border-slate-100 dark:border-slate-800">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-base font-bold text-slate-900 dark:text-white leading-snug">
              {data.rule_name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              標準英語發音規則體系（Rule Master ID: {data.rule_id}）
            </p>
          </div>
        </div>
      </div>

      {/* Applied Rules if multiple */}
      {data.applied_rules && data.applied_rules.length > 1 && (
        <div className="pt-1 space-y-1.5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            包含發音子規則：
          </p>
          <div className="space-y-1">
            {data.applied_rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-slate-100/80 dark:bg-slate-700/50"
              >
                <span className="font-bold text-emerald-700 dark:text-emerald-300">
                  {rule.rule_id}
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {rule.rule_name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
