'use client';

import React, { useState } from 'react';
import { WordItem } from '../../lib/types';
import { generateWordMatrix, getRuleColorBadge } from '../../lib/engine/phonicsEngine';
import { getPhonicsRule } from '../../lib/engine/phonicsRules';
import { audioManager } from '../../lib/audioManager';
import { X, Volume2, Sparkles, PlayCircle, Grid, HelpCircle } from 'lucide-react';

interface SyllableMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  wordItem: WordItem | null;
  onOpenRuleDetail: (ruleId: string) => void;
}

export function SyllableMatrixModal({
  isOpen,
  onClose,
  wordItem,
  onOpenRuleDetail
}: SyllableMatrixModalProps) {
  const [activePlaybackStep, setActivePlaybackStep] = useState<number | 'full' | null>(null);

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

  if (!isOpen || !wordItem) return null;

  const matrix = generateWordMatrix(wordItem);

  const handlePlayFull = () => {
    setActivePlaybackStep('full');
    audioManager.speakWord(wordItem.word, () => setActivePlaybackStep(null));
  };

  const handlePacedPlayback = () => {
    const syllables = wordItem.syllables?.length > 0 ? wordItem.syllables : [wordItem.word];
    audioManager.speakSyllablesSequentially(
      syllables,
      wordItem.word,
      (step) => setActivePlaybackStep(step),
      () => setActivePlaybackStep(null)
    );
  };

  const handlePlaySingleSyllable = (syl: string, idx: number) => {
    setActivePlaybackStep(idx);
    audioManager.speakWord(syl, () => setActivePlaybackStep(null));
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 sm:py-4 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
              <Grid className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  【{wordItem.word}】音節與自然發音推導矩陣
                </h2>
                {wordItem.pos && (
                  <span className="rounded-md bg-slate-200 px-1.5 py-0.2 text-[10px] font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                    {wordItem.pos}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                中文釋義: {wordItem.chinese} • 完整 IPA: {wordItem.ipa}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Audio Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 dark:border-indigo-950 dark:bg-indigo-950/30">
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={handlePlayFull}
                className={`inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 transition cursor-pointer ${
                  activePlaybackStep === 'full' ? 'ring-2 ring-indigo-300 animate-pulse' : ''
                }`}
              >
                <Volume2 className="h-4 w-4" />
                <span>朗讀全詞 (Full Word)</span>
              </button>

              <button
                onClick={handlePacedPlayback}
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-3.5 py-2 text-xs font-semibold text-indigo-700 shadow-xs hover:bg-indigo-50 dark:border-indigo-800 dark:bg-slate-800 dark:text-indigo-300 transition cursor-pointer"
              >
                <PlayCircle className="h-4 w-4 text-indigo-500" />
                <span>音節循序拼讀 (Paced Playback)</span>
              </button>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400">
              共 <span className="font-bold text-indigo-600 dark:text-indigo-400">{matrix.syllableCount}</span> 個音節 • 主重音落在第{' '}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{matrix.primaryStressSyllableIndex + 1}</span> 音節
            </div>
          </div>

          {/* Matrix Syllable Tiles */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
              <span>音節拆解與規則映射矩陣</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {matrix.cells.map((cell, idx) => {
                const isStepActive = activePlaybackStep === idx;
                const isPrimary = cell.stressType === 'primary';

                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col justify-between rounded-2xl border p-4 transition ${
                      isStepActive
                        ? 'border-indigo-500 bg-indigo-50 dark:border-indigo-500 dark:bg-indigo-950/60 ring-2 ring-indigo-400'
                        : isPrimary
                        ? 'border-indigo-200 bg-indigo-50/40 dark:border-indigo-900/60 dark:bg-indigo-950/20'
                        : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800/40'
                    }`}
                  >
                    {/* Top Row: Index & Stress Tag */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{idx + 1}
                      </span>
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                          isPrimary
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {isPrimary ? '主重音節' : cell.stressType === 'secondary' ? '次重音' : '非重讀'}
                      </span>
                    </div>

                    {/* Syllable */}
                    <div className="my-2">
                      <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white flex items-center justify-between">
                        <span>{cell.syllableText}</span>
                        <button
                          onClick={() => handlePlaySingleSyllable(cell.syllableText, idx)}
                          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-700 cursor-pointer"
                          title="單獨發音此音節"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Syllable Explanation */}
                    {cell.derivationExplanation && (
                      <div className="text-xs text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-900/60 rounded-lg p-2 border border-slate-100 dark:border-slate-800 mb-2 font-normal">
                        {cell.derivationExplanation}
                      </div>
                    )}

                    {/* Matched Rules Badges */}
                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-xs text-slate-400 dark:text-slate-400 mb-1.5 font-medium">適用自然發音法則:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {cell.matchedRules.map((ruleId) => {
                          const badge = getRuleColorBadge(ruleId);
                          const r = getPhonicsRule(ruleId);
                          const rawName = r?.name || '';
                          const cleanName = rawName.split(' ')[0].replace(/\/.*/, '') || rawName;
                          return (
                            <button
                              key={ruleId}
                              onClick={() => {
                                onClose();
                                onOpenRuleDetail(ruleId);
                              }}
                              className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold transition hover:scale-105 cursor-pointer shadow-2xs ${badge.bg} ${badge.text} ${badge.border}`}
                              title={`${ruleId}: ${r?.name || ''} - 點擊查閱法則詳解`}
                            >
                              <span className="font-mono font-bold">{ruleId}</span>
                              <span className="font-medium">{cleanName}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Derivation Reasoning Timeline if present */}
          {wordItem.derivations && wordItem.derivations.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-800/40">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4 text-indigo-500" />
                <span>發音邏輯與語音弱化推導歷程</span>
              </h4>
              <div className="space-y-2">
                {wordItem.derivations.map((d, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 rounded-xl bg-white p-3 border border-slate-200/80 dark:bg-slate-900 dark:border-slate-800 text-xs"
                  >
                    <span className="font-bold font-mono text-indigo-600 dark:text-indigo-400 min-w-[120px]">
                      {d.syllable}
                    </span>
                    <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 w-fit">
                      {d.rule}
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 flex-1">
                      {d.reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
