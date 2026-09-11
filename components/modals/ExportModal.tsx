'use client';

import React, { useState } from 'react';
import { WordItem, BatchData, FontSizePreference } from '../../lib/types';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import { X, Download, FileSpreadsheet, FileJson, Printer, Check } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  batchData: BatchData | null;
  filteredWords: WordItem[];
  fontSize?: FontSizePreference;
}

export function ExportModal({
  isOpen,
  onClose,
  batchData,
  filteredWords,
  fontSize = 'medium'
}: ExportModalProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const typo = getModalFontSizeClasses(fontSize);

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
      `"${(w.ruleCodes || []).join(',')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${batchData.batchId}_phonics_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
    URL.revokeObjectURL(url);
  };

  // Copy Word List to Clipboard
  const handleCopyTextList = (format: 'plain' | 'tab') => {
    let text = '';
    if (format === 'plain') {
      text = exportWords.map(w => `${w.word}  ${w.ipa}  ${w.chinese}`).join('\n');
    } else {
      text = exportWords.map(w => `${w.word}\t${(w.syllables || []).join('-')}\t${w.ipa}\t${w.chinese}\t${(w.ruleCodes || []).join(', ')}`).join('\n');
    }

    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  // Print friendly view
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
              <Download className="h-5 w-5" />
            </div>
            <div>
              <h2 className={`${typo.title} text-slate-900 dark:text-white`}>
                匯出與備份單字矩陣
              </h2>
              <p className={`${typo.subtext} text-slate-500 dark:text-slate-400`}>
                {batchData.title} • 共 {exportWords.length} 個單字
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Export Options */}
        <div className="my-5 space-y-3">
          {/* CSV Option */}
          <button
            onClick={handleExportCsv}
            className="w-full flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-indigo-700 transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                <FileSpreadsheet className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className={`${typo.body} font-bold text-slate-900 dark:text-white`}>
                  匯出為 CSV 試算表 (Excel / Sheets 相容)
                </div>
                <div className={`${typo.subtext} text-slate-500 dark:text-slate-400`}>
                  包含 UTF-8 BOM，Excel 開啟不亂碼，含完整音節與規則代碼
                </div>
              </div>
            </div>
          </button>

          {/* JSON Option */}
          <button
            onClick={handleExportJson}
            className="w-full flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-indigo-700 transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300">
                <FileJson className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className={`${typo.body} font-bold text-slate-900 dark:text-white`}>
                  匯出為 JSON 結構化資料
                </div>
                <div className={`${typo.subtext} text-slate-500 dark:text-slate-400`}>
                  適合程式開發與二次加工使用
                </div>
              </div>
            </div>
          </button>

          {/* Quick Copy Plain Text */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => handleCopyTextList('plain')}
              className={`flex items-center justify-center gap-2 rounded-xl border border-slate-200 p-3 text-center transition cursor-pointer ${
                copiedFormat === 'plain'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                  : 'bg-white hover:bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300'
              }`}
            >
              {copiedFormat === 'plain' ? <Check className="h-4 w-4" /> : null}
              <span className={`${typo.button} font-semibold`}>
                {copiedFormat === 'plain' ? '已複製純文字清單' : '複製文字清單'}
              </span>
            </button>

            <button
              onClick={() => handleCopyTextList('tab')}
              className={`flex items-center justify-center gap-2 rounded-xl border border-slate-200 p-3 text-center transition cursor-pointer ${
                copiedFormat === 'tab'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                  : 'bg-white hover:bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300'
              }`}
            >
              {copiedFormat === 'tab' ? <Check className="h-4 w-4" /> : null}
              <span className={`${typo.button} font-semibold`}>
                {copiedFormat === 'tab' ? '已複製 Tab 分隔' : '複製 Tab 欄位'}
              </span>
            </button>
          </div>

          {/* Print Option */}
          <button
            onClick={handlePrint}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300 transition cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span className={`${typo.button} font-semibold`}>列印當前畫面 / 另存為 PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
