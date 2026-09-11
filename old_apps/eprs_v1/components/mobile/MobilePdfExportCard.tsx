'use client';

import React from 'react';
import { FileText, Printer, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface MobilePdfExportCardProps {
  totalWords?: number;
}

export function MobilePdfExportCard({ totalWords = 1200 }: MobilePdfExportCardProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-indigo-950/40 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 p-4 space-y-3 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-950 dark:text-indigo-200 font-bold text-sm sm:text-base">
          <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>EPRS 發音推導報告匯出 (v1.5)</span>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">
          {totalWords} 字完成
        </span>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
        提供教育部國中 1200 單字與高中核心詞彙之完整音節結構、自然發音規則切分與標準音標推導獨立報表。
      </p>

      <div className="grid grid-cols-2 gap-2 pt-1">
        <Link
          href="/report/1"
          className="flex items-center justify-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all shadow-xs"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>開啟第 1 批報表</span>
        </Link>
        <Link
          href="/report/senior-b11"
          className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>高中 Batch 11</span>
        </Link>
      </div>
    </div>
  );
}
