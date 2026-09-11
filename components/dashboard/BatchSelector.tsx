'use client';

import React from 'react';
import { BatchesManifest, BatchInfo } from '../../lib/types';
import { BookMarked, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

interface BatchSelectorProps {
  manifest: BatchesManifest | null;
  currentBatchId: string;
  onSelectBatch: (batchId: string) => void;
  isLoading: boolean;
}

export function BatchSelector({
  manifest,
  currentBatchId,
  onSelectBatch,
  isLoading
}: BatchSelectorProps) {
  if (!manifest) return null;

  // Active category determination
  const currentCategory = currentBatchId.startsWith('senior') ? 'senior' : 'moe1200';
  const moeCategory = manifest.categories.find(c => c.id === 'moe1200');
  const seniorCategory = manifest.categories.find(c => c.id === 'senior');

  const activeCategoryData = currentCategory === 'moe1200' ? moeCategory : seniorCategory;
  const currentBatchList = activeCategoryData?.batches || [];
  const currentBatchIndex = currentBatchList.findIndex(b => b.batchId === currentBatchId);

  const handlePrevBatch = () => {
    if (currentBatchIndex > 0) {
      onSelectBatch(currentBatchList[currentBatchIndex - 1].batchId);
    }
  };

  const handleNextBatch = () => {
    if (currentBatchIndex < currentBatchList.length - 1) {
      onSelectBatch(currentBatchList[currentBatchIndex + 1].batchId);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (currentCategory !== 'moe1200' && moeCategory?.batches[0]) {
                onSelectBatch(moeCategory.batches[0].batchId);
              }
            }}
            className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              currentCategory === 'moe1200'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <BookMarked className="h-4 w-4" />
            <span>教育部 1200 基礎單字</span>
            <span
              className={`rounded-md px-1.5 py-0.2 text-[10px] ${
                currentCategory === 'moe1200'
                  ? 'bg-indigo-700/80 text-white'
                  : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
              }`}
            >
              12 批次
            </span>
          </button>

          <button
            onClick={() => {
              if (currentCategory !== 'senior' && seniorCategory?.batches[0]) {
                onSelectBatch(seniorCategory.batches[0].batchId);
              }
            }}
            className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
              currentCategory === 'senior'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>高中參考字彙 第一級</span>
            <span
              className={`rounded-md px-1.5 py-0.2 text-[10px] ${
                currentCategory === 'senior'
                  ? 'bg-indigo-700/80 text-white'
                  : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
              }`}
            >
              10 批次
            </span>
          </button>
        </div>

        {/* Prev / Next Shortcuts */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handlePrevBatch}
            disabled={currentBatchIndex <= 0 || isLoading}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span>上一批</span>
          </button>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 px-1">
            {currentBatchIndex + 1} / {currentBatchList.length}
          </span>
          <button
            onClick={handleNextBatch}
            disabled={currentBatchIndex >= currentBatchList.length - 1 || isLoading}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition"
          >
            <span>下一批</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Batches Grid */}
      <div className="mt-3 flex flex-wrap gap-2">
        {currentBatchList.map((batch) => {
          const isSelected = batch.batchId === currentBatchId;
          return (
            <button
              key={batch.batchId}
              onClick={() => onSelectBatch(batch.batchId)}
              disabled={isLoading}
              className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-left text-xs transition border ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/90 text-indigo-950 font-semibold ring-2 ring-indigo-500/20 dark:border-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-200'
                  : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:bg-slate-100/80 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-md text-[11px] font-bold ${
                  isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                }`}
              >
                {batch.batchId.slice(-2)}
              </span>
              <div>
                <div className="leading-tight">{batch.title.split('-')[1]?.trim() || batch.title}</div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">
                  {batch.range} ({batch.wordCount}字)
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
