'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { BatchesManifest, BatchData, WordItem, FontSizePreference } from '../lib/types';
import { Header } from '../components/dashboard/Header';
import { BatchSelector } from '../components/dashboard/BatchSelector';
import { StatCards } from '../components/dashboard/StatCards';
import { WordFilterBar } from '../components/dashboard/WordFilterBar';
import { WordTable } from '../components/dashboard/WordTable';
import { RuleDetailModal } from '../components/modals/RuleDetailModal';
import { SyllableMatrixModal } from '../components/modals/SyllableMatrixModal';
import { QuickPracticeModal } from '../components/modals/QuickPracticeModal';
import { EPRSPracticeModal } from '../components/modals/EPRSPracticeModal';
import { DictionaryModal } from '../components/modals/DictionaryModal';
import { ExportModal } from '../components/modals/ExportModal';
import {
  Loader2,
  AlertCircle,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Layers,
  Type
} from 'lucide-react';

export default function HomePage() {
  const [manifest, setManifest] = useState<BatchesManifest | null>(null);
  const [currentBatchId, setCurrentBatchId] = useState<string>('moe-batch-01');
  const [batchData, setBatchData] = useState<BatchData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Settings States
  const [fontSize, setFontSize] = useState<FontSizePreference>('medium');
  const [isToolbarVisible, setIsToolbarVisible] = useState<boolean>(true);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);

  // Filter States
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRule, setSelectedRule] = useState<string>('');
  const [selectedSyllableCount, setSelectedSyllableCount] = useState<string>('');

  // Modal States
  const [isRuleModalOpen, setIsRuleModalOpen] = useState<boolean>(false);
  const [activeRuleModalId, setActiveRuleModalId] = useState<string | undefined>(undefined);
  
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState<boolean>(false);
  const [selectedWordForMatrix, setSelectedWordForMatrix] = useState<WordItem | null>(null);
  
  const [isDictionaryModalOpen, setIsDictionaryModalOpen] = useState<boolean>(false);
  const [selectedWordForDictionary, setSelectedWordForDictionary] = useState<WordItem | null>(null);

  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);
  const [isEPRSPracticeOpen, setIsEPRSPracticeOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  // 1. Fetch Batches Manifest on Mount
  useEffect(() => {
    async function loadManifest() {
      try {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
        const res = await fetch(`${basePath}/data/batches-manifest.json`);
        if (!res.ok) throw new Error('無法載入批次清單');
        const data: BatchesManifest = await res.json();
        setManifest(data);
      } catch (err: any) {
        console.error('Error loading manifest:', err);
        setError(err.message || '載入資料失敗');
      }
    }
    loadManifest();
  }, []);

  // 2. Fetch Batch Data when currentBatchId changes
  useEffect(() => {
    async function loadBatch(batchId: string) {
      setIsLoading(true);
      setError(null);
      try {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
        const res = await fetch(`${basePath}/data/batches/${batchId}.json`);
        if (!res.ok) throw new Error(`無法載入批次 ${batchId} 的資料`);
        const data: BatchData = await res.json();
        setBatchData(data);
      } catch (err: any) {
        console.error('Error loading batch:', err);
        setError(err.message || '載入單字批次失敗');
      } finally {
        setIsLoading(false);
      }
    }

    if (currentBatchId) {
      loadBatch(currentBatchId);
    }
  }, [currentBatchId]);

  // 3. Filtered Words Memo
  const filteredWords = useMemo(() => {
    if (!batchData || !batchData.words) return [];

    return batchData.words.filter((item) => {
      // Keyword search
      if (searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        const matchWord = item.word.toLowerCase().includes(term);
        const matchChinese = item.chinese.includes(term);
        const matchIpa = item.ipa.toLowerCase().includes(term);
        if (!matchWord && !matchChinese && !matchIpa) return false;
      }

      // Rule filter
      if (selectedRule) {
        const hasRule = (item.ruleCodes || []).includes(selectedRule);
        if (!hasRule) return false;
      }

      // Syllable Count filter
      if (selectedSyllableCount) {
        const sylCount = item.syllables?.length || 1;
        if (selectedSyllableCount === '4+') {
          if (sylCount < 4) return false;
        } else {
          if (sylCount !== parseInt(selectedSyllableCount, 10)) return false;
        }
      }

      return true;
    });
  }, [batchData, searchTerm, selectedRule, selectedSyllableCount]);

  const handleOpenRuleDetail = (ruleId?: string) => {
    setActiveRuleModalId(ruleId);
    setIsRuleModalOpen(true);
  };

  const handleOpenWordMatrix = (word: WordItem) => {
    setSelectedWordForMatrix(word);
    setIsMatrixModalOpen(true);
  };

  const handleOpenDictionary = (word: WordItem) => {
    setSelectedWordForDictionary(word);
    setIsDictionaryModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedRule('');
    setSelectedSyllableCount('');
  };

  // Find all batches list for quick prev/next in focus mode
  const allBatches = useMemo(() => {
    if (!manifest) return [];
    return manifest.categories.flatMap(c => c.batches);
  }, [manifest]);

  const currentBatchIndex = allBatches.findIndex(b => b.batchId === currentBatchId);

  const handlePrevBatch = () => {
    if (currentBatchIndex > 0) {
      setCurrentBatchId(allBatches[currentBatchIndex - 1].batchId);
      handleResetFilters();
    }
  };

  const handleNextBatch = () => {
    if (currentBatchIndex < allBatches.length - 1) {
      setCurrentBatchId(allBatches[currentBatchIndex + 1].batchId);
      handleResetFilters();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 flex flex-col font-sans">
      {/* Standard Header (Hidden in Focus Mode) */}
      {!isFocusMode && (
        <Header
          onOpenRules={handleOpenRuleDetail}
          onOpenQuickPractice={() => setIsEPRSPracticeOpen(true)}
          onOpenQuiz={() => setIsQuizModalOpen(true)}
          onOpenExport={() => setIsExportModalOpen(true)}
          onToggleToolbar={() => setIsToolbarVisible(v => !v)}
          isToolbarVisible={isToolbarVisible}
          onToggleFocusMode={() => setIsFocusMode(true)}
          isFocusMode={isFocusMode}
          totalWordsInView={filteredWords.length}
          currentBatchTitle={batchData?.title || '單字發音矩陣'}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
        />
      )}

      {/* Sleek Minimal Pinned Bar (Visible ONLY in Focus Mode) */}
      {isFocusMode && (
        <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-900/95 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white mr-1.5">
                {batchData?.title || '全視窗純淨單字模式'}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                ({filteredWords.length} 字)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Batch Prev/Next in Focus Mode */}
            <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 px-1 py-0.5 dark:border-slate-700 dark:bg-slate-800">
              <button
                onClick={handlePrevBatch}
                disabled={currentBatchIndex <= 0}
                className="p-1 text-slate-600 hover:text-indigo-600 disabled:opacity-30 dark:text-slate-300 cursor-pointer"
                title="上一批次"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <select
                value={currentBatchId}
                onChange={(e) => {
                  setCurrentBatchId(e.target.value);
                  handleResetFilters();
                }}
                className="bg-transparent text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer max-w-[130px] sm:max-w-[200px] truncate"
              >
                {allBatches.map(b => (
                  <option key={b.batchId} value={b.batchId}>
                    {b.title}
                  </option>
                ))}
              </select>
              <button
                onClick={handleNextBatch}
                disabled={currentBatchIndex >= allBatches.length - 1}
                className="p-1 text-slate-600 hover:text-indigo-600 disabled:opacity-30 dark:text-slate-300 cursor-pointer"
                title="下一批次"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Font size control in focus mode */}
            <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-1.5 py-0.5 dark:border-slate-700 dark:bg-slate-800">
              <Type className="h-3 w-3 text-slate-400" />
              {(['small', 'medium', 'large', 'xlarge'] as FontSizePreference[]).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setFontSize(sz)}
                  className={`rounded px-1.5 py-0.5 text-[11px] font-semibold transition cursor-pointer ${
                    fontSize === sz
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  {sz === 'small' ? '小' : sz === 'medium' ? '標準' : sz === 'large' ? '放大' : '特大'}
                </button>
              ))}
            </div>

            {/* Quick Practice shortcut in focus mode */}
            <button
              onClick={() => setIsEPRSPracticeOpen(true)}
              className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-bold text-white shadow-2xs hover:bg-amber-600 transition"
              title="快速練習"
            >
              <Zap className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">快速練習</span>
            </button>

            {/* Quiz shortcut in focus mode */}
            <button
              onClick={() => setIsQuizModalOpen(true)}
              className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-indigo-500 transition"
              title="拼讀測驗"
            >
              <Layers className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">測驗</span>
            </button>

            {/* Exit Focus Mode Button */}
            <button
              onClick={() => setIsFocusMode(false)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 transition cursor-pointer"
              title="退出全視窗模式，顯示批次選單與統計面板"
            >
              <Minimize2 className="h-3.5 w-3.5" />
              <span>退出全視窗</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className={`flex-1 mx-auto w-full ${isFocusMode ? 'max-w-[98%] px-2 py-3' : 'max-w-7xl px-4 py-6 sm:px-6'} space-y-5`}>
        {/* Batch Selector Component (Hidden in Focus Mode) */}
        {!isFocusMode && (
          <BatchSelector
            manifest={manifest}
            currentBatchId={currentBatchId}
            onSelectBatch={(bId) => {
              setCurrentBatchId(bId);
              handleResetFilters();
            }}
            isLoading={isLoading}
          />
        )}

        {/* Loading / Error / Content */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-xs">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-600 mb-2" />
            <p className="text-xs font-semibold text-slate-500">正在加載單字發音數據...</p>
          </div>
        ) : error ? (
          <div className="flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-300">
            <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
            <div className="text-xs font-medium">{error}</div>
          </div>
        ) : batchData ? (
          <>
            {/* Stat Cards (Hidden in Focus Mode) */}
            {!isFocusMode && <StatCards words={batchData.words} />}

            {/* Filter Bar (Hidden in Focus Mode or when Toolbar toggled off) */}
            {!isFocusMode && isToolbarVisible && (
              <WordFilterBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedRule={selectedRule}
                onRuleChange={setSelectedRule}
                selectedSyllableCount={selectedSyllableCount}
                onSyllableCountChange={setSelectedSyllableCount}
                onResetFilters={handleResetFilters}
                totalFiltered={filteredWords.length}
                totalInBatch={batchData.totalWords}
              />
            )}

            {/* Word Matrix Table with directly rendered Phonics Derivations & Sized Typography */}
            <WordTable
              words={filteredWords}
              fontSize={fontSize}
              onOpenWordMatrix={handleOpenWordMatrix}
              onOpenRuleDetail={handleOpenRuleDetail}
              onOpenDictionary={handleOpenDictionary}
            />
          </>
        ) : null}
      </main>

      {/* Modals */}
      <RuleDetailModal
        isOpen={isRuleModalOpen}
        onClose={() => setIsRuleModalOpen(false)}
        initialRuleId={activeRuleModalId}
        fontSize={fontSize}
      />

      <SyllableMatrixModal
        isOpen={isMatrixModalOpen}
        onClose={() => setIsMatrixModalOpen(false)}
        wordItem={selectedWordForMatrix}
        onOpenRuleDetail={handleOpenRuleDetail}
        fontSize={fontSize}
      />

      <DictionaryModal
        isOpen={isDictionaryModalOpen}
        onClose={() => setIsDictionaryModalOpen(false)}
        wordItem={selectedWordForDictionary}
        onOpenWordMatrix={handleOpenWordMatrix}
        onOpenRuleDetail={handleOpenRuleDetail}
        fontSize={fontSize}
      />

      {/* 5-Stage Progressive Learning Card Modal (Mobile Responsive) */}
      <EPRSPracticeModal
        key={`eprs-practice-${currentBatchId}`}
        isOpen={isEPRSPracticeOpen}
        onClose={() => setIsEPRSPracticeOpen(false)}
        words={batchData?.words || []}
        batchTitle={batchData?.title || '當前批次'}
        onOpenRuleDetail={handleOpenRuleDetail}
        onOpenWordMatrix={handleOpenWordMatrix}
        fontSize={fontSize}
      />

      {/* Quiz Challenge Modal */}
      <QuickPracticeModal
        key={`quiz-modal-${currentBatchId}-${isQuizModalOpen}`}
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        words={batchData?.words || []}
        fontSize={fontSize}
      />

      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        batchData={batchData}
        filteredWords={filteredWords}
        fontSize={fontSize}
      />

      {/* Global Footer (Hidden in Focus Mode) */}
      {!isFocusMode && (
        <footer className="border-t border-slate-200 bg-white/60 py-4 dark:border-slate-800 dark:bg-slate-900/40 mt-auto">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
            <div>
              EPRS English Phonics Matrix System • 教育部 1200 基礎單字 & 高中參考詞彙
            </div>
            <div>
              純 JSON 動態推導架構 • 18 大自然發音法則 • 5 階段快速練習
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
