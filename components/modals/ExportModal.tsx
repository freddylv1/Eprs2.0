'use client';

import React, { useState } from 'react';
import { WordItem, BatchData } from '../../lib/types';
import { X, Download, FileSpreadsheet, FileJson, Printer, Check } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  batchData: BatchData | null;
  filteredWords: WordItem[];
}

export function ExportModal({
  isOpen,
  onClose,
  batchData,
  filteredWords
}: ExportModalProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // Keyboard navigation (Escape to close)
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !batchData) return null;

  const exportWords = filteredWords.length > 0 ? filteredWords : batchData.words;

  // Export to CSV
  const handleExportCsv = () => {
    const headers = ['ID', 'Word', 'POS', 'Syllables', 'IPA', 'Chinese', 'Rules'];
    const rows = exportWords.map(w => [
      w.id,
      `"${w.word}"`,
      `"${w.pos || ''}"`,
      `"${(w.syllables || []).join('-')}"`,
      `"${w.ipa || ''}"`,
      `"${w.chinese || ''}"`,
      `"${(w.ruleCodes || []).join(';')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${batchData.batchId}_words.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to JSON
  const handleExportJson = () => {
    const jsonStr = JSON.stringify(exportWords, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${batchData.batchId}_words.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Print Window
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Download className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                導出發音與音節數據
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {batchData.title}（共 {exportWords.length} 筆資料）
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Options */}
        <div className="mt-5 space-y-3">
          {/* CSV */}
          <button
            onClick={handleExportCsv}
            className="w-full flex items-center justify-between rounded-2xl border border-slate-200 p-4 text-left hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-700 dark:bg-slate-800/60 transition"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                <FileSpreadsheet className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  導出為 Excel / CSV 格式
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  包含 UTF-8 BOM，相容 Excel / Google 試算表
                </div>
              </div>
            </div>
            <span className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white">
              下載 CSV
            </span>
          </button>

          {/* JSON */}
          <button
            onClick={handleExportJson}
            className="w-full flex items-center justify-between rounded-2xl border border-slate-200 p-4 text-left hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-700 dark:bg-slate-800/60 transition"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
                <FileJson className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  導出為結構化 JSON
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  適合 API 整合、前端二次開發與備份
                </div>
              </div>
            </div>
            <span className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white">
              下載 JSON
            </span>
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="w-full flex items-center justify-between rounded-2xl border border-slate-200 p-4 text-left hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-700 dark:bg-slate-800/60 transition"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-300">
                <Printer className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  列印學習單 / PDF 存檔
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  呼叫瀏覽器預覽列印乾淨單字矩陣表
                </div>
              </div>
            </div>
            <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              列印
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
