'use client';

import React, { useState, useMemo } from 'react';
import { WordItem, BatchData, FontSizePreference } from '../../lib/types';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import { X, Download, FileSpreadsheet, FileJson, Printer, Check, Music, Loader2, Sparkles, Layers, Volume2 } from 'lucide-react';
import { generateUnitAudio, triggerBlobDownload, Mp3ExportMode, Mp3ExportProgress } from '../../lib/mp3Exporter';
import JSZip from 'jszip';

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

  // MP3 匯出相關狀態
  const [exportMp3Mode, setExportMp3Mode] = useState<Mp3ExportMode>('4step');
  const [activeDownloadingIndex, setActiveDownloadingIndex] = useState<number | 'ALL' | null>(null);
  const [mp3Progress, setMp3Progress] = useState<Mp3ExportProgress | null>(null);

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

  const exportWords = useMemo(() => {
    if (!batchData) return [];
    return filteredWords.length > 0 ? filteredWords : batchData.words;
  }, [batchData, filteredWords]);

  // 將匯出單字均分為 5 個單元 (每個單元約 20 個單字)
  const mp3Units = useMemo(() => {
    if (!exportWords || exportWords.length === 0) return [];
    const unitSize = Math.ceil(exportWords.length / 5);
    const units: { index: number; title: string; words: WordItem[] }[] = [];
    for (let i = 0; i < 5; i++) {
      const uWords = exportWords.slice(i * unitSize, (i + 1) * unitSize);
      if (uWords.length > 0) {
        units.push({
          index: i + 1,
          title: `單元 ${i + 1} (${uWords.length} 字)`,
          words: uWords
        });
      }
    }
    return units;
  }, [exportWords]);

  // 下載單一單元 MP3
  const handleDownloadSingleUnitMp3 = async (unitIndex: number, words: WordItem[]) => {
    if (activeDownloadingIndex !== null || !batchData) return;
    setActiveDownloadingIndex(unitIndex);
    try {
      const modeLabel = exportMp3Mode === '4step' ? '4步拼讀版' : '快速複習版';
      const blob = await generateUnitAudio(words, exportMp3Mode, (p) => {
        setMp3Progress(p);
      });
      const filename = `${batchData.title}_單元${unitIndex}_${modeLabel}.mp3`;
      triggerBlobDownload(blob, filename);
    } catch (err) {
      console.error('Download unit MP3 failed:', err);
      alert(`下載單元 MP3 發生錯誤: ${err instanceof Error ? err.message : '請重試'}`);
    } finally {
      setActiveDownloadingIndex(null);
      setMp3Progress(null);
    }
  };

  // 一鍵打包下載整批 5 個單元 MP3 (使用 JSZip 壓縮為 ZIP 檔，避免瀏覽器攔截多檔下載)
  const handleDownloadAllUnitsMp3 = async () => {
    if (activeDownloadingIndex !== null || mp3Units.length === 0 || !batchData) return;
    setActiveDownloadingIndex('ALL');
    try {
      const modeLabel = exportMp3Mode === '4step' ? '4步拼讀版' : '快速複習版';
      const zip = new JSZip();

      for (let i = 0; i < mp3Units.length; i++) {
        const u = mp3Units[i];
        const blob = await generateUnitAudio(u.words, exportMp3Mode, (p) => {
          setMp3Progress({
            ...p,
            currentWord: `[單元 ${u.index}/5] ${p.currentWord || '合成中...'}`
          });
        });
        const filename = `${batchData.title}_單元${u.index}_${modeLabel}.mp3`;
        zip.file(filename, blob);
      }

      setMp3Progress({
        status: 'generating',
        currentWordIndex: 5,
        totalWords: 5,
        percent: 99,
        currentWord: '正在將 5 個單元 MP3 打包壓縮為 ZIP 檔...'
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipFilename = `${batchData.title}_全部5個單元MP3包_${modeLabel}.zip`;
      triggerBlobDownload(zipBlob, zipFilename);
    } catch (err) {
      console.error('Download all units MP3 failed:', err);
      alert(`打包下載 5 個單元 MP3 發生錯誤: ${err instanceof Error ? err.message : '請重新嘗試'}`);
    } finally {
      setActiveDownloadingIndex(null);
      setMp3Progress(null);
    }
  };

  if (!isOpen || !batchData) return null;

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

          {/* MP3 Audio Export Section (每批分 5 個單元) */}
          <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/40 p-3.5 sm:p-4 dark:border-indigo-900/60 dark:bg-indigo-950/20 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-2xs">
                  <Music className="h-4 w-4" />
                </div>
                <div>
                  <div className={`${typo.body} font-bold text-slate-900 dark:text-white`}>
                    單字練習 MP3 音訊檔下載 (全套 5 單元)
                  </div>
                  <div className={`${typo.subtext} text-slate-500 dark:text-slate-400`}>
                    支援通勤、運動離線聽讀
                  </div>
                </div>
              </div>
            </div>

            {/* 下載設定選單 */}
            <div className="rounded-xl border border-indigo-200/60 bg-white p-2.5 dark:border-indigo-900/40 dark:bg-slate-800 space-y-1.5">
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                下載模式選單：
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setExportMp3Mode('4step')}
                  className={`flex items-center justify-between rounded-lg p-2 text-left text-xs transition cursor-pointer border ${
                    exportMp3Mode === '4step'
                      ? 'border-indigo-500 bg-indigo-50/80 text-indigo-900 dark:bg-indigo-950/80 dark:text-indigo-200 font-bold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-1 font-bold">
                      <span>🌟 四步拼讀版</span>
                      <span className="text-[10px] rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-1 font-normal">預設推薦</span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">英文 → 中文 → 英文 → 音節</div>
                  </div>
                  {exportMp3Mode === '4step' && <Check className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />}
                </button>

                <button
                  type="button"
                  onClick={() => setExportMp3Mode('3step')}
                  className={`flex items-center justify-between rounded-lg p-2 text-left text-xs transition cursor-pointer border ${
                    exportMp3Mode === '3step'
                      ? 'border-indigo-500 bg-indigo-50/80 text-indigo-900 dark:bg-indigo-950/80 dark:text-indigo-200 font-bold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300'
                  }`}
                >
                  <div>
                    <div className="font-bold">⚡ 快速複習版</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">英文 → 中文 → 英文</div>
                  </div>
                  {exportMp3Mode === '3step' && <Check className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />}
                </button>
              </div>
            </div>

            {/* 一鍵打包下載全部按鈕 */}
            <button
              onClick={handleDownloadAllUnitsMp3}
              disabled={activeDownloadingIndex !== null}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white p-3 font-bold text-sm shadow-sm transition cursor-pointer disabled:opacity-50"
            >
              {activeDownloadingIndex === 'ALL' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>
                    打包合成中 ({mp3Progress?.percent || 0}%) • {mp3Progress?.currentWord || ''}
                  </span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>一鍵打包下載整批 5 個單元 MP3 ({exportMp3Mode === '4step' ? '4步拼讀版' : '快速複習版'})</span>
                </>
              )}
            </button>

            {/* 各單元個別下載清單 */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-0.5">
                整批單元 MP3 下載清單：
              </div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-0.5">
                {mp3Units.map((unit) => {
                  const isThisDownloading = activeDownloadingIndex === unit.index;
                  return (
                    <div
                      key={unit.index}
                      className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-800/80"
                    >
                      <div className="flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {unit.title}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDownloadSingleUnitMp3(unit.index, unit.words)}
                        disabled={activeDownloadingIndex !== null}
                        className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 dark:hover:bg-indigo-900 transition cursor-pointer disabled:opacity-50"
                      >
                        {isThisDownloading ? (
                          <>
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>{mp3Progress ? `${mp3Progress.percent}%` : '合成中'}</span>
                          </>
                        ) : (
                          <>
                            <Download className="h-3 w-3" />
                            <span>下載 MP3</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
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
