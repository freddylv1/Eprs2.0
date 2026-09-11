'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HardDrive,
  ExternalLink,
  FileText,
  BookOpen,
  Home,
  Smartphone,
  CheckCircle2,
  RefreshCw,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function OfflineHubPage() {
  const [activeTab, setActiveTab] = useState<'iframe-spa' | 'reports-list' | 'guide'>('iframe-spa');
  const [iframeKey, setIframeKey] = useState<number>(1);

  const seniorBatches = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const start = (num - 1) * 100 + 1;
    const end = num * 100;
    const pad = String(num).padStart(2, '0');
    return {
      num,
      pad,
      range: `${String(start).padStart(4, '0')} ~ ${String(end).padStart(4, '0')}`,
      title: `高中 ${num >= 12 ? '第二級' : '第一級'} Batch ${pad}`,
      route: `/report/senior-${pad}`
    };
  });

  const moeBatches = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const start = (num - 1) * 100 + 1;
    const end = num * 100;
    const pad = String(num).padStart(2, '0');
    return {
      num,
      pad,
      range: `${String(start).padStart(4, '0')} ~ ${String(end).padStart(4, '0')}`,
      title: `國中 1200 Batch ${pad}`,
      route: `/report/${num}`
    };
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black shadow-sm">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">
                  EPRS 離線靜態系統專區
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  100% 離線可用 · 零依賴
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  純靜態預製
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                教育部國中 1200 與高中 1200 詞彙 · 單一真實來源推導報表、13 大規則庫與雙引擎發音
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Home className="w-4 h-4 text-slate-500" />
              回首頁
            </Link>

            <Link
              href="/index1200"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors"
            >
              <Smartphone className="w-4 h-4 text-indigo-600" />
              手機版入口
            </Link>

            <a
              href="/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 shadow-xs transition-colors"
              title="在新分頁直接開啟 /index.html 純靜態檔案"
            >
              <ExternalLink className="w-4 h-4" />
              新分頁開啟離線版 ↗
            </a>
          </div>
        </div>

        {/* View Switcher Sub-bar */}
        <div className="bg-slate-100/80 border-t border-slate-200 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 py-1.5">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('iframe-spa')}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'iframe-spa'
                    ? 'bg-white text-emerald-700 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                內嵌 100% 離線系統 (index.html)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('reports-list')}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'reports-list'
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <FileText className="w-4 h-4 text-blue-600" />
                批次推導報表 (單一真實來源)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('guide')}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'guide'
                    ? 'bg-white text-indigo-700 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                完全離線使用說明
              </button>
            </div>

            {activeTab === 'iframe-spa' && (
              <button
                type="button"
                onClick={() => setIframeKey(k => k + 1)}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-md shadow-2xs"
                title="重新整理內嵌離線網頁"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                重載預覽
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        {/* Tab 1: Embedded SPA */}
        {activeTab === 'iframe-spa' && (
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden flex flex-col h-[calc(100vh-140px)]">
            <div className="bg-slate-800 text-white px-4 py-2 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                目前顯示：public/index.html (100% 離線純靜態版 · 含單元五步快速練習)
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 underline font-semibold flex items-center gap-1"
                >
                  新視窗最大化開啟 ↗
                </a>
              </div>
            </div>
            <iframe
              key={`spa-${iframeKey}`}
              src="/index.html"
              title="EPRS 離線完整單頁版"
              className="w-full flex-1 border-0 bg-white"
            />
          </div>
        )}

        {/* Tab 2: Dynamic Reports List */}
        {activeTab === 'reports-list' && (
          <div className="space-y-8">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  批次自然發音推導報表 (單一真實來源)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  每份報表均由統一資料庫動態推導，支援美式發音、音節切分、13 大規則彈窗、字級縮放與 A4 橫向列印。
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/report/all"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                >
                  國中 1200 全覽報表 ➔
                </Link>
                <Link
                  href="/report/senior-12"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-2xs transition-colors"
                >
                  高中最新 Batch 12 報表 ➔
                </Link>
              </div>
            </div>

            {/* High School Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  🎓 高中英文參考詞彙表 (Senior High English Batches 01 ~ 12)
                </h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  共 1,200 字
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {seniorBatches.map((b) => (
                  <Link
                    key={`senior-${b.num}`}
                    href={b.route}
                    className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all bg-white flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700">
                          {b.title}
                        </span>
                        <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700">
                          100 字
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-mono mb-3">
                        單字範圍：{b.range}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-emerald-600 pt-2 border-t border-slate-100">
                      <span>開啟推導報表</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* MOE 1200 Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  📘 教育部國中 1200 詞彙表 (MOE 1200 Batches 01 ~ 12)
                </h3>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  共 1,200 字
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {moeBatches.map((b) => (
                  <Link
                    key={`moe-${b.num}`}
                    href={b.route}
                    className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all bg-white flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-extrabold text-sm text-slate-900 group-hover:text-blue-700">
                          {b.title}
                        </span>
                        <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700">
                          100 字
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-mono mb-3">
                        單字範圍：{b.range}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-blue-600 pt-2 border-t border-slate-100">
                      <span>開啟推導報表</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Offline Guide */}
        {activeTab === 'guide' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                EPRS 100% 離線靜態系統使用手冊
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                本系統設計為零伺服器、零外部連線、100% 本機可執行的英文發音知識推導架構。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  1. 單一離線總入口 (`/index.html`)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  提供完整的單頁推導介面，可自由切換高中 12 批次與國中 12 批次、即時字級縮放、篩選 13 大發音規則，並內建完整的單元五步快速發音練習。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  2. 雙引擎發音容錯 (Dual Audio Engine)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  優先以標準美式發音串流發聲；若處於無網路或沙盒受阻環境，系統自動切換至瀏覽器內建 Web Speech API，並配備 1 秒鎖定防狂點機制。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  3. 單一真實來源動態報表 (`/report/[batch]`)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  所有批次報表均統一自單一規則與資料來源渲染，杜絕多版本資料不一致或排版脫節的維護問題。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  4. A4 橫向標準化列印
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  按下 Ctrl+P 或列印按鈕，系統自動隱藏導航控制列，套用 8.5pt~9pt 緊湊字級與表格防斷行保護，完美輸出標準學習講義。
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
