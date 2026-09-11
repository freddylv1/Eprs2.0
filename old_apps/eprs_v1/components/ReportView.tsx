'use client';

import React, { useMemo, useState, useEffect } from 'react';
import type { BatchWord } from '@/lib/batch01Data';
import RuleDetailModal from '@/components/RuleDetailModal';
import QuickPracticeModal from '@/components/QuickPracticeModal';
import VersionControlModal from '@/components/VersionControlModal';
import { extractRuleCodes } from '@/lib/phonicsRules';
import { audioManager, AudioStatus } from '@/lib/audioManager';
import { 
  Volume2, 
  Printer, 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Search, 
  BookOpen, 
  Zap, 
  GitBranch,
  HardDrive
} from 'lucide-react';
import Link from 'next/link';

function cleanSyllableSub(text?: string): string {
  if (!text) return '';
  return text.replace(/^[0-9]+\.\s*(?:母音核心|結構切分|不可拆組合|不可拆複合子音母音組合)：\s*/, '').trim();
}

export interface ReportViewProps {
  initialWords: BatchWord[];
  rawBatch: string;
  isSenior: boolean;
  seniorBatchNum: number;
  batchNum: number;
  totalWordsCount?: number;
}

export default function ReportView({
  initialWords,
  rawBatch,
  isSenior,
  seniorBatchNum,
  batchNum,
  totalWordsCount = 1200,
}: ReportViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [audioStatus, setAudioStatus] = useState<AudioStatus>(audioManager.getStatus());
  const [activeRuleModalCode, setActiveRuleModalCode] = useState<string | null>(null);
  const [fontScale, setFontScale] = useState<number>(1.15);
  const [showFontToolbar, setShowFontToolbar] = useState<boolean>(false);
  const [showEntireToolbar, setShowEntireToolbar] = useState<boolean>(true);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState<boolean>(false);
  const [isVersionModalOpen, setIsVersionModalOpen] = useState<boolean>(false);
  const [practiceUnit, setPracticeUnit] = useState<number>(1);

  const words = initialWords;

  useEffect(() => {
    return audioManager.subscribe(setAudioStatus);
  }, []);

  const handleOpenRuleModal = (ruleText: string) => {
    const codes = extractRuleCodes(ruleText);
    if (codes.length > 0) {
      setActiveRuleModalCode(codes[0]);
    } else {
      if (ruleText.includes('閉音節')) setActiveRuleModalCode('R001');
      else if (ruleText.includes('開音節')) setActiveRuleModalCode('R002');
      else if (ruleText.includes('魔術 e') || ruleText.includes('Magic-e')) setActiveRuleModalCode('R003');
      else if (ruleText.includes('母音組合') || ruleText.includes('雙母音')) setActiveRuleModalCode('R004');
      else if (ruleText.includes('R 控制') || ruleText.includes('R-Controlled')) setActiveRuleModalCode('R005');
      else if (ruleText.includes('複合子音') || ruleText.includes('Digraph')) setActiveRuleModalCode('R006');
      else if (ruleText.includes('子音叢') || ruleText.includes('Blend')) setActiveRuleModalCode('R007');
      else if (ruleText.includes('非重讀') || ruleText.includes('弱化') || ruleText.includes('Schwa')) setActiveRuleModalCode('R008');
      else if (ruleText.includes('軟硬 C') || ruleText.includes('軟硬 G')) setActiveRuleModalCode('R009');
      else if (ruleText.includes('特例') || ruleText.includes('例外')) setActiveRuleModalCode('R010');
      else setActiveRuleModalCode('R001');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedScale = localStorage.getItem('eprs_font_scale');
        if (savedScale) {
          const val = parseFloat(savedScale);
          if (!isNaN(val) && val >= 1.0 && val <= 3.0) {
            setFontScale(val);
          }
        }
        const savedToolbar = localStorage.getItem('eprs_entire_toolbar_hidden');
        if (savedToolbar !== null) {
          setShowEntireToolbar(savedToolbar !== 'true');
        }
      } catch {}
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleFontScaleChange = (scale: number) => {
    setFontScale(scale);
    try {
      localStorage.setItem('eprs_font_scale', String(scale));
    } catch {}
  };

  const filteredWords = useMemo(() => {
    if (!searchTerm.trim()) return words;
    const term = searchTerm.toLowerCase();
    return words.filter(w => 
      w.word.toLowerCase().includes(term) ||
      w.chinese.includes(term) ||
      w.ipa.includes(term) ||
      w.id.toString() === term ||
      w.steps.ruleStep.some(r => r.includes(term))
    );
  }, [words, searchTerm]);

  const handlePlayWord = (word: string) => {
    audioManager.play(word);
  };

  const startId = isSenior 
    ? (seniorBatchNum - 1) * 100 + 1
    : (batchNum === 0 ? 1 : (batchNum - 1) * 100 + 1);
  const endId = isSenior
    ? (seniorBatchNum - 1) * 100 + words.length
    : (batchNum === 0 ? totalWordsCount : Math.min(batchNum * 100, totalWordsCount));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans print:bg-white print:p-0">
      <style jsx global>{`
        :root {
          --font-ipa: "Charis SIL", "Doulos SIL", "Lucida Sans Unicode", "DejaVu Sans", "Segoe UI", "Arial Unicode MS", "Noto Sans", monospace, sans-serif;
        }
        .ipa-font {
          font-family: var(--font-ipa);
          letter-spacing: 0.02em;
        }
        @page {
          size: A4 landscape;
          margin: 5mm 6mm 6mm 6mm;
        }
        @media print {
          *, *::before, *::after {
            box-shadow: none !important;
            text-shadow: none !important;
          }
          html, body {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #0f172a !important;
            font-size: 8.5pt !important;
            line-height: 1.25 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          .overflow-x-auto {
            overflow: visible !important;
          }
          table {
            width: 100% !important;
            min-width: 100% !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
            font-size: 8pt !important;
            border: 1px solid #94a3b8 !important;
          }
          thead {
            display: table-header-group !important;
          }
          tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          th {
            background-color: #f1f5f9 !important;
            color: #1e293b !important;
            font-size: 8pt !important;
            padding: 3.5px 4px !important;
            border: 1px solid #cbd5e1 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          td {
            padding: 3.5px 4px !important;
            font-size: 8pt !important;
            line-height: 1.22 !important;
            border: 1px solid #cbd5e1 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
          }
          tr:nth-child(even) {
            background-color: #f8fafc !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .col-print-id { width: 3.8% !important; }
          .col-print-word { width: 11.2% !important; }
          .col-print-zh { width: 8.5% !important; }
          .col-print-syl { width: 27.5% !important; }
          .col-print-ipa { width: 10% !important; }
          .col-print-step { width: 39% !important; }
        }
      `}</style>

      {/* Floating button when entire toolbar is hidden */}
      {!showEntireToolbar && (
        <button
          type="button"
          onClick={() => {
            setShowEntireToolbar(true);
            try { localStorage.setItem('eprs_entire_toolbar_hidden', 'false'); } catch {}
          }}
          className="fixed top-3 right-4 z-50 bg-white text-slate-800 border border-slate-300 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer print:hidden"
          title="展開頂部工具列"
        >
          ⚙️ 展開工具列
        </button>
      )}

      {/* Top Navigation Bar */}
      {showEntireToolbar && (
      <header className="bg-white text-slate-800 border-b border-slate-200 print:hidden sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回主頁
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  GOLD
                </span>
                <button
                  onClick={() => setIsVersionModalOpen(true)}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200 flex items-center gap-1 cursor-pointer transition-colors"
                  title="點擊查看雙軌版本控制中心 (Data Spec & UI Spec)"
                >
                  <GitBranch className="w-2.5 h-2.5 text-blue-600" />
                  {isSenior ? (seniorBatchNum >= 12 ? 'v1.6.0-rc2' : (seniorBatchNum >= 11 ? 'v1.6.0-rc1' : `v1.5.${String(seniorBatchNum).padStart(2, '0')}`)) : (batchNum === 0 ? 'v1.4.ALL' : `v1.4.${String(batchNum).padStart(2, '0')}`)}
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  {isSenior 
                    ? `高中${seniorBatchNum >= 12 ? '第二級' : '第一級'} Batch ${String(seniorBatchNum).padStart(2, '0')} (${startId}~${endId})`
                    : (batchNum === 0 ? '國中全 1200' : `國中 B${batchNum} (${startId}~${endId})`)}
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                {isSenior 
                  ? `高中單字${seniorBatchNum >= 12 ? '第二級' : '第一級'} Batch ${String(seniorBatchNum).padStart(2, '0')} 發音推導報表`
                  : 'EPRS 發音推導獨立報表'}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* 字級調整控制項 */}
            {!showFontToolbar ? (
              <button
                type="button"
                onClick={() => setShowFontToolbar(true)}
                className="flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                title="點擊展開字級縮放工具列"
              >
                <span>字級:</span>
                <span className="text-blue-700 font-mono font-bold">{Math.round(fontScale * 100)}%</span>
              </button>
            ) : (
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 gap-2 flex-wrap" title="調整表格字級大小 (1.0x ~ 3.0x)">
                <span className="text-slate-700 text-xs font-bold">字級:</span>
                <div className="flex items-center gap-1.5">
                  <input
                    type="range"
                    min="1.0"
                    max="3.0"
                    step="0.05"
                    value={fontScale}
                    onChange={(e) => handleFontScaleChange(parseFloat(e.target.value))}
                    className="w-16 accent-blue-600 cursor-pointer"
                    title="滑動調整 1.0x ~ 3.0x"
                  />
                  <span className="text-blue-700 text-xs font-mono font-bold min-w-[36px] text-center">
                    {Math.round(fontScale * 100)}%
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1.0, 1.25, 1.5, 2.0].map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => handleFontScaleChange(scale)}
                      className={`px-1.5 py-0.5 text-xs font-bold rounded transition-colors ${
                        Math.abs(fontScale - scale) < 0.04
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                      title={`${scale}x (${Math.round(scale * 100)}%)`}
                    >
                      {scale}x
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setShowFontToolbar(false)}
                  className="text-slate-400 hover:text-slate-700 border border-slate-300 rounded px-1.5 py-0.5 text-[11px] font-bold transition-colors cursor-pointer"
                  title="隱藏此工具列"
                >
                  ✕
                </button>
              </div>
            )}

            <Link
              href="/offline"
              className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
              title="開啟 100% 獨立離線網站專區"
            >
              <HardDrive className="w-3.5 h-3.5 text-amber-600" />
              離線網站
            </Link>

            <button
              onClick={() => {
                setPracticeUnit(1);
                setIsPracticeModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
              title="進入快速練習模式 (每 20 單字一單元，支援空白鍵漸進發音推導)"
            >
              <Zap className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
              練習模式
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              列印
            </button>
            <button
              type="button"
              onClick={() => {
                setShowEntireToolbar(false);
                try { localStorage.setItem('eprs_entire_toolbar_hidden', 'true'); } catch {}
              }}
              className="inline-flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs px-2 py-1.5 rounded-lg transition-colors cursor-pointer"
              title="隱藏工具列以全螢幕檢視"
            >
              ▲ 隱藏
            </button>
          </div>
        </div>

        {/* Filter & Batch Switch Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜尋單字 / 中文 / 規則..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 text-slate-800 text-xs rounded-md pl-8 pr-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400"
              />
            </div>
            <span className="text-slate-500 shrink-0 text-xs">
              <b>{filteredWords.length}</b> / {words.length} 字
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-slate-500 flex items-center gap-1 shrink-0 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              批次：
            </span>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((sb) => (
              <Link
                key={sb}
                href={`/report/senior-${sb}`}
                className={`px-2 py-1 rounded text-xs font-bold transition-colors ${isSenior && seniorBatchNum === sb ? 'bg-emerald-600 text-white shadow-2xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'}`}
                title={`高中 Batch ${String(sb).padStart(2, '0')}`}
              >
                高中 B{String(sb).padStart(2, '0')}
              </Link>
            ))}
            <span className="text-slate-300">|</span>
            <Link
              href="/report/all"
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${!isSenior && batchNum === 0 ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'}`}
            >
              國中全
            </Link>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(b => (
              <Link
                key={b}
                href={`/report/${b}`}
                className={`px-1.5 py-1 rounded text-xs font-semibold transition-colors ${!isSenior && batchNum === b ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
              >
                B{b}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Practice Unit Selection Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-amber-800 font-bold flex items-center gap-1 shrink-0">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              單元：
            </span>
            {Array.from({ length: Math.ceil(words.length / 20) }).map((_, idx) => {
              const uNum = idx + 1;
              const startIdx = idx * 20 + 1;
              const endIdx = Math.min((idx + 1) * 20, words.length);
              return (
                <button
                  key={uNum}
                  type="button"
                  onClick={() => {
                    setPracticeUnit(uNum);
                    setIsPracticeModalOpen(true);
                  }}
                  className="bg-white hover:bg-amber-100 hover:text-amber-900 text-slate-700 border border-slate-200 px-2 py-0.5 rounded text-xs font-medium transition-all cursor-pointer shadow-2xs"
                  title={`單元 ${uNum} (${startIdx}~${endIdx})`}
                >
                  U{uNum} ({startIdx}~{endIdx})
                </button>
              );
            })}
          </div>
          <span className="text-slate-400 text-[11px] hidden sm:inline">
            💡 提示：點擊單元進入練習模式，按空白鍵依序推導
          </span>
        </div>
      </header>
      )}

      {/* Main Table Content */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table 
              className="w-full text-left border-collapse transition-all"
              style={{ 
                fontSize: `calc(13.5px * ${fontScale})`, 
                lineHeight: 1.5,
                minWidth: `calc(880px * ${Math.max(1, fontScale * 0.85)})` 
              }}
            >
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th className="py-2.5 px-3 col-print-id text-center font-bold" style={{ width: `calc(48px * ${Math.max(1, fontScale * 0.85)})`, fontSize: `calc(12.5px * ${fontScale})` }}>序號</th>
                  <th className="py-2.5 px-3 col-print-word font-bold" style={{ width: `calc(140px * ${Math.max(1, fontScale * 0.85)})`, fontSize: `calc(13px * ${fontScale})` }}>單字 / 音標</th>
                  <th className="py-2.5 px-3 col-print-zh font-bold" style={{ width: `calc(90px * ${Math.max(1, fontScale * 0.85)})`, fontSize: `calc(13px * ${fontScale})` }}>中文</th>
                  <th className="py-2.5 px-3 col-print-syl font-bold" style={{ width: `calc(320px * ${Math.max(1, fontScale * 0.85)})`, fontSize: `calc(13px * ${fontScale})` }}>音節分割</th>
                  <th className="py-2.5 px-3 col-print-step font-bold" style={{ fontSize: `calc(13px * ${fontScale})` }}>規則判斷</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredWords.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 px-4 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <BookOpen className="w-8 h-8 text-slate-400" />
                        <p className="font-semibold text-slate-700">查無符合條件之單字資料</p>
                        <p className="text-xs text-slate-400">請嘗試清除搜尋關鍵字，或切換至其他批次目錄</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredWords.map((item, idx) => {
                  const cleanWord = item.word.replace(/\(.*?\)/g, '').replace(/[^a-zA-Z\s'-]/g, '').trim();
                  const isPlaying = audioStatus.word === item.word;

                  return (
                    <tr 
                      key={item.id}
                      className={`hover:bg-slate-50 transition-colors ${idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}
                    >
                      <td 
                        className="py-2.5 px-3 col-print-id text-center text-slate-500 font-semibold align-top"
                        style={{ fontSize: `calc(13px * ${fontScale})` }}
                      >
                        {item.id}
                      </td>
                      <td className="py-2.5 px-3 col-print-word align-top">
                        <div className="flex items-center justify-between gap-1">
                          <button
                            onClick={() => handlePlayWord(item.word)}
                            disabled={audioStatus.state !== 'idle'}
                            className={`font-extrabold text-slate-900 hover:text-indigo-600 transition-colors text-left flex items-center gap-1 cursor-pointer ${
                              audioStatus.state !== 'idle' ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                            style={{ fontSize: `calc(15.5px * ${fontScale})`, lineHeight: 1.3 }}
                            title={isPlaying ? audioStatus.message : (audioStatus.state !== 'idle' ? '發音中請稍候...' : '點擊播放發音')}
                          >
                            {item.word}
                          </button>
                          <div className="flex items-center gap-1 print:hidden shrink-0">
                            <button
                              onClick={() => handlePlayWord(item.word)}
                              disabled={audioStatus.state !== 'idle'}
                              className={`rounded transition-colors flex items-center justify-center cursor-pointer ${
                                isPlaying 
                                  ? 'bg-amber-100 text-amber-800 animate-pulse' 
                                  : audioStatus.state !== 'idle'
                                    ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                              }`}
                              style={{
                                width: `calc(22px * ${fontScale})`,
                                height: `calc(22px * ${fontScale})`,
                                padding: `calc(2px * ${fontScale})`,
                              }}
                              title={isPlaying ? audioStatus.message : (audioStatus.state !== 'idle' ? '發音中請稍候...' : '播放發音')}
                            >
                              <Volume2 style={{ width: `calc(13px * ${fontScale})`, height: `calc(13px * ${fontScale})` }} className={isPlaying ? 'animate-bounce text-amber-600' : ''} />
                            </button>
                            <a
                              href={`https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/${encodeURIComponent(cleanWord.toLowerCase())}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-blue-600 flex items-center justify-center p-0.5"
                              style={{
                                width: `calc(20px * ${fontScale})`,
                                height: `calc(20px * ${fontScale})`,
                              }}
                              title="劍橋字典真人發音"
                            >
                              <BookOpen style={{ width: `calc(13px * ${fontScale})`, height: `calc(13px * ${fontScale})` }} />
                            </a>
                          </div>
                        </div>

                        {/* 發音中提示 */}
                        {isPlaying && (
                          <div className="mt-1">
                            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 border border-amber-300 font-bold px-1.5 py-0.5 rounded text-[11px] animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                              {audioStatus.message}
                            </span>
                          </div>
                        )}

                        {/* 音標直接放在單字正下方 */}
                        <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                          <button
                            type="button"
                            onClick={() => handlePlayWord(item.word)}
                            disabled={audioStatus.state !== 'idle'}
                            className={`ipa-font font-mono font-extrabold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 rounded inline-flex items-center gap-1 transition-colors cursor-pointer ${
                              audioStatus.state !== 'idle' ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                            style={{ 
                              fontSize: `calc(13.5px * ${fontScale})`,
                              padding: `calc(1.5px * ${fontScale}) calc(6px * ${fontScale})`,
                              lineHeight: 1.3,
                            }}
                            title={isPlaying ? audioStatus.message : (audioStatus.state !== 'idle' ? '發音中請稍候...' : '點擊聆聽發音')}
                          >
                            <Volume2 style={{ width: `calc(12px * ${fontScale})`, height: `calc(12px * ${fontScale})` }} className="text-emerald-600 shrink-0 print:hidden" />
                            <span>{item.ipa}</span>
                          </button>
                        </div>
                      </td>
                      <td 
                        className="py-2.5 px-3 col-print-zh align-top font-semibold text-slate-700"
                        style={{ fontSize: `calc(14px * ${fontScale})`, lineHeight: 1.45 }}
                      >
                        {item.chinese}
                      </td>
                      <td className="py-2.5 px-3 col-print-syl align-top">
                        <div 
                          className="font-extrabold text-blue-900 mb-1"
                          style={{ fontSize: `calc(15px * ${fontScale})`, lineHeight: 1.35 }}
                        >
                          {item.syllableDetail?.header || item.syllableText}
                        </div>
                        {item.syllableDetail?.vowelCore && (
                          <div 
                            className="text-slate-600 leading-snug mb-0.5"
                            style={{ fontSize: `calc(12.5px * ${fontScale})` }}
                          >
                            <span className="font-bold text-slate-800">母音核心：</span>
                            {cleanSyllableSub(item.syllableDetail.vowelCore)}
                          </div>
                        )}
                        {item.syllableDetail?.structureRule && (
                          <div 
                            className="text-slate-600 leading-snug mb-0.5"
                            style={{ fontSize: `calc(12.5px * ${fontScale})` }}
                          >
                            <span className="font-bold text-slate-800">切分結構：</span>
                            {cleanSyllableSub(item.syllableDetail.structureRule)}
                          </div>
                        )}
                        {item.syllableDetail?.indivisibleRule && (
                          <div 
                            className="text-slate-600 leading-snug"
                            style={{ fontSize: `calc(12.5px * ${fontScale})` }}
                          >
                            <span className="font-bold text-slate-800">組合備註：</span>
                            {cleanSyllableSub(item.syllableDetail.indivisibleRule)}
                          </div>
                        )}
                      </td>
                      <td className="py-2.5 px-3 col-print-step align-top">
                        <div 
                          className="space-y-1.5"
                          style={{ fontSize: `calc(12.5px * ${fontScale})` }}
                        >
                          {item.steps.derivations && item.steps.derivations.length > 0 ? (
                            item.steps.derivations.map((d, dIdx) => (
                              <div
                                key={dIdx}
                                className={`rounded border leading-relaxed ${
                                  d.status.includes('不適用')
                                    ? 'bg-amber-50/70 border-amber-200 border-l-4 border-l-red-500'
                                    : 'bg-slate-50 border-slate-200 border-l-4 border-l-sky-500'
                                }`}
                                style={{
                                  padding: `calc(5px * ${fontScale}) calc(8px * ${fontScale})`,
                                  marginBottom: `calc(4px * ${fontScale})`,
                                }}
                              >
                                <div 
                                  className="flex flex-wrap items-center gap-1.5 mb-1"
                                  style={{ gap: `calc(5px * ${fontScale})` }}
                                >
                                  <span 
                                    className="font-extrabold text-blue-900"
                                    style={{ fontSize: `calc(13.5px * ${fontScale})` }}
                                  >
                                    {d.syllable}
                                  </span>
                                  {/* 點擊彈出規則說明 */}
                                  <button
                                    type="button"
                                    onClick={() => handleOpenRuleModal(d.rule)}
                                    className="rounded font-bold text-indigo-700 hover:text-indigo-950 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 inline-flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                                    style={{
                                      fontSize: `calc(11.5px * ${fontScale})`,
                                      padding: `calc(1.5px * ${fontScale}) calc(6px * ${fontScale})`,
                                    }}
                                    title="點擊查看此規則完整定義與示範"
                                  >
                                    <span>{d.rule}</span>
                                  </button>
                                  <span 
                                    className={`rounded font-extrabold ${
                                      d.status.includes('不適用') ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                    }`}
                                    style={{
                                      fontSize: `calc(11.5px * ${fontScale})`,
                                      padding: `calc(1.5px * ${fontScale}) calc(6px * ${fontScale})`,
                                    }}
                                  >
                                    {d.status}
                                  </span>
                                </div>
                                <div 
                                  className="text-slate-700 leading-snug"
                                  style={{ fontSize: `calc(12.5px * ${fontScale})` }}
                                >
                                  <span className="font-bold text-slate-600">判斷原因：</span>
                                  {d.reason}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div 
                              className="rounded border border-slate-200 border-l-4 border-l-sky-500 bg-slate-50"
                              style={{
                                padding: `calc(5px * ${fontScale}) calc(8px * ${fontScale})`,
                              }}
                            >
                              <div 
                                className="flex items-center gap-1.5 mb-1"
                                style={{ gap: `calc(5px * ${fontScale})` }}
                              >
                                <span 
                                  className="font-extrabold text-blue-900"
                                  style={{ fontSize: `calc(13.5px * ${fontScale})` }}
                                >
                                  {item.syllableText || item.word}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleOpenRuleModal(item.steps.ruleStep?.[0] || '')}
                                  className="bg-sky-100 text-sky-800 hover:bg-sky-200 rounded font-bold inline-flex items-center gap-1 cursor-pointer transition-colors"
                                  style={{
                                    fontSize: `calc(11.5px * ${fontScale})`,
                                    padding: `calc(1.5px * ${fontScale}) calc(6px * ${fontScale})`,
                                  }}
                                  title="點擊查看此規則完整定義與示範"
                                >
                                  <span>{item.steps.ruleStep?.[0] || '自然發音常規規則'}</span>
                                </button>
                                <span 
                                  className="bg-emerald-100 text-emerald-800 rounded font-extrabold"
                                  style={{
                                    fontSize: `calc(11.5px * ${fontScale})`,
                                    padding: `calc(1.5px * ${fontScale}) calc(6px * ${fontScale})`,
                                  }}
                                >
                                  【適用】
                                </span>
                              </div>
                              <div 
                                className="text-slate-700 leading-snug mt-1"
                                style={{ fontSize: `calc(12.5px * ${fontScale})` }}
                              >
                                <span className="font-bold text-slate-600">判斷原因：</span>
                                {item.steps.ipaStep || '常規自然發音規則推導'}
                              </div>
                            </div>
                          )}
                          <div 
                            className="text-emerald-800 font-extrabold pt-0.5 flex items-center gap-1"
                            style={{ fontSize: `calc(13px * ${fontScale})` }}
                          >
                            <span>→ 結論推導：</span>音節合成產出標準音標{' '}
                            <span 
                              className="font-mono bg-emerald-100 text-emerald-900 rounded border border-emerald-300 ipa-font"
                              style={{
                                fontSize: `calc(13.5px * ${fontScale})`,
                                padding: `calc(1.5px * ${fontScale}) calc(6px * ${fontScale})`,
                              }}
                            >
                              {item.ipa}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Phonics Rule Detail Modal */}
      <RuleDetailModal
        ruleCode={activeRuleModalCode}
        onClose={() => setActiveRuleModalCode(null)}
        onSpeak={handlePlayWord}
      />

      {/* Dual-Track Version Control Center Modal */}
      <VersionControlModal
        isOpen={isVersionModalOpen}
        onClose={() => setIsVersionModalOpen(false)}
        currentBatchNum={seniorBatchNum}
        isSenior={isSenior}
      />

      {/* Quick Practice Modal */}
      <QuickPracticeModal
        isOpen={isPracticeModalOpen}
        onClose={() => setIsPracticeModalOpen(false)}
        words={words}
        batchTitle={isSenior ? `高中${seniorBatchNum >= 12 ? '第二級' : '第一級'} Batch ${String(seniorBatchNum).padStart(2, '0')}` : `國中 1200 單字 Batch ${String(batchNum).padStart(2, '0')}`}
        initialUnit={practiceUnit}
        onOpenRuleModal={handleOpenRuleModal}
      />

      {/* Floating Audio Status Alert */}
      {audioStatus.state !== 'idle' && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900/90 backdrop-blur-xs text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2.5 text-xs font-semibold animate-fade-in print:hidden">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span>{audioStatus.message}：<strong className="text-amber-300 font-serif tracking-wide">{audioStatus.word}</strong></span>
        </div>
      )}
    </div>
  );
}
