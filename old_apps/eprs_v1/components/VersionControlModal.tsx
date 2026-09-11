'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, GitBranch, Database, Layout, Sparkles, Layers, BookOpen, Clock, Tag } from 'lucide-react';
import { EPRS_VERSION_CONFIG, BatchVersionRecord } from '@/lib/versionConfig';

interface VersionControlModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBatchNum?: number;
  isSenior?: boolean;
}

export default function VersionControlModal({
  isOpen,
  onClose,
  currentBatchNum = 12,
  isSenior = true,
}: VersionControlModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'matrix' | 'changelog' | 'governance'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">EPRS 雙軌版本控制與規格中心</h2>
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full border border-blue-200">
                  Dual-Track Versioning
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                資料生成規則 (Data Spec) 與 UI 顯示規範 (UI Spec) 集中版本管理
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="關閉視窗"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-6 bg-white gap-2 text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 py-3 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            版本總覽 (Overview)
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center gap-2 py-3 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'matrix'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Database className="w-4 h-4" />
            批次版本矩陣 (Batch Matrix)
          </button>
          <button
            onClick={() => setActiveTab('changelog')}
            className={`flex items-center gap-2 py-3 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'changelog'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Clock className="w-4 h-4" />
            版本演進紀錄 (Changelog)
          </button>
          <button
            onClick={() => setActiveTab('governance')}
            className={`flex items-center gap-2 py-3 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'governance'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            治理規範 (Governance)
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Version Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Data Generation Rule Spec */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                          <Database className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-slate-800 text-sm">資料生成規則版本 (Data Spec)</span>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 font-mono font-bold text-xs px-2.5 py-1 rounded-md border border-emerald-200">
                        {EPRS_VERSION_CONFIG.DATA_SPEC_VERSION}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      控制自然發音十三大規則判定、音節切分公式、重讀弱化優先順序 (R012 前綴優先) 與歷史音變例外判定標準。
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1.5 list-disc pl-4">
                      <li>核心規則庫：十三大 Phonics 規則體系 ({EPRS_VERSION_CONFIG.PHONICS_RULES_VERSION})</li>
                      <li>推導引擎：Phonics Reasoning Engine ({EPRS_VERSION_CONFIG.ENGINE_VERSION})</li>
                      <li>資料庫模式：SeniorBatchWord / BatchWord 標準介面</li>
                    </ul>
                  </div>
                </div>

                {/* 2. UI Display Spec */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                          <Layout className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-slate-800 text-sm">UI 顯示規則版本 (UI Spec)</span>
                      </div>
                      <span className="bg-indigo-50 text-indigo-700 font-mono font-bold text-xs px-2.5 py-1 rounded-md border border-indigo-200">
                        {EPRS_VERSION_CONFIG.UI_SPEC_VERSION}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      控制儀表板呈現、獨立發音推導報表、動態字級縮放 (100%~300%)、A4 橫向列印樣式與音訊防手震互斥規範。
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1.5 list-disc pl-4">
                      <li>音訊引擎：AudioManager 單例 (1秒防狂點鎖定, 0.85 語速)</li>
                      <li>練習導航：每 20 字一單元結構化卡片與五步發音引導</li>
                      <li>列印佈局：A4 橫向無跑版列印樣式 (@media print)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Current Context Status */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-900 space-y-1">
                  <div className="font-bold text-sm text-blue-950">
                    目前檢視狀態：{isSenior ? `高中詞彙 Batch ${String(currentBatchNum).padStart(2, '0')}` : `國中 1200 全套`}
                  </div>
                  <div>
                    當前批次適配規範：<strong>Data Spec {currentBatchNum >= 11 ? 'v1.6.0' : 'v1.5.0'}</strong> ｜ <strong>UI Spec {EPRS_VERSION_CONFIG.UI_SPEC_VERSION}</strong>
                  </div>
                  <div className="text-blue-700">
                    已凍結之舊批次保持既有核定版本，新批次規則變更遵循「變更隔離與確認套用原則」，防止引發回退。
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'matrix' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 flex items-center justify-between">
                <span>各批次發音推導資料與 UI 顯示適配版本清單：</span>
                <span className="font-semibold text-slate-700">共 {EPRS_VERSION_CONFIG.BATCH_VERSIONS.length} 批次紀錄</span>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                      <tr>
                        <th className="py-2.5 px-3">批次 ID</th>
                        <th className="py-2.5 px-3">級別與範圍</th>
                        <th className="py-2.5 px-3">推導引擎版本</th>
                        <th className="py-2.5 px-3">資料集版本</th>
                        <th className="py-2.5 px-3">UI 規範版本</th>
                        <th className="py-2.5 px-3">審核狀態</th>
                        <th className="py-2.5 px-3">核定日期</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {EPRS_VERSION_CONFIG.BATCH_VERSIONS.map((b: BatchVersionRecord) => (
                        <tr key={b.batchId} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-mono font-bold text-slate-900">{b.batchId}</td>
                          <td className="py-2.5 px-3 text-slate-700">{b.levelName} ({b.range})</td>
                          <td className="py-2.5 px-3 font-mono text-emerald-700 font-semibold">{b.engineVersion}</td>
                          <td className="py-2.5 px-3 font-mono text-blue-700 font-semibold">{b.datasetVersion}</td>
                          <td className="py-2.5 px-3 font-mono text-indigo-700 font-semibold">{b.uiSpecVersion}</td>
                          <td className="py-2.5 px-3">
                            {b.status === 'GOLD' ? (
                              <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px] border border-amber-300">
                                GOLD
                              </span>
                            ) : (
                              <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded text-[10px] border border-blue-300">
                                CANDIDATE
                              </span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 text-slate-500 font-mono">{b.verifiedDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="space-y-4">
              {EPRS_VERSION_CONFIG.CHANGELOG.map((log, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-slate-900">{log.version}</span>
                      <span className="text-xs text-slate-400">|</span>
                      <span className="text-xs font-semibold text-slate-700">{log.title}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{log.releaseDate}</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                    {log.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  EPRS 版本控制治理三大原則
                </h4>
                <div className="space-y-2.5 text-slate-600">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="text-slate-900">1. 每一次產出必帶版本號 (Mandatory Versioning)</strong>
                    <p className="mt-0.5 text-slate-500">
                      所有記憶體模組、UI 標籤、匯出 Excel/CSV/HTML 均必須附帶標準版本標籤（如 Engine v1.6.0、Data Spec v1.6.0、UI Spec v1.3.0）。
                    </p>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="text-slate-900">2. 變更需求隔離原則 (Isolation of Completed Batches)</strong>
                    <p className="mt-0.5 text-slate-500">
                      當推導邏輯或規則分類變更時，嚴格禁止立即回溯覆寫已完成之舊批次，避免引發連鎖回退。
                    </p>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="text-slate-900">3. 確認套用關卡與版本推進 (Confirmation Gate)</strong>
                    <p className="mt-0.5 text-slate-500">
                      新規則僅在當前測試批次標註為 Release Candidate 驗證，經使用者明確下達確認指令後，始可統一升級舊批次並推進新批次。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2 font-mono">
            <span>{EPRS_VERSION_CONFIG.FULL_SYSTEM_VERSION}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 font-medium transition-colors"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
}
