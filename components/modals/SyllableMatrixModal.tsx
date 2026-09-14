'use client';

import React, { useState } from 'react';
import { WordItem, FontSizePreference } from '../../lib/types';
import { generateWordMatrix, getRuleColorBadge } from '../../lib/engine/phonicsEngine';
import { getPhonicsRule } from '../../lib/engine/phonicsRules';
import { audioManager } from '../../lib/audioManager';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import { X, Volume2, PlayCircle, Grid, Split } from 'lucide-react';

interface SyllableMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  wordItem: WordItem | null;
  onOpenRuleDetail: (ruleId: string) => void;
  fontSize?: FontSizePreference;
}

export function SyllableMatrixModal({
  isOpen,
  onClose,
  wordItem,
  onOpenRuleDetail,
  fontSize = 'medium'
}: SyllableMatrixModalProps) {
  const [activePlaybackStep, setActivePlaybackStep] = useState<number | 'full' | null>(null);
  const typo = getModalFontSizeClasses(fontSize);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-0 sm:p-4 overflow-y-auto"
    >
      <div className="relative flex max-h-[92vh] sm:max-h-[90vh] w-full max-w-2xl flex-col rounded-t-3xl sm:rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Header - 精簡手機頂部，支援動態字體 */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-4 py-3 sm:px-5 sm:py-3.5 dark:border-slate-800 dark:bg-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white shrink-0">
              <Grid className="h-4 w-4" />
            </div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <h2 className={`${typo.title} text-slate-900 dark:text-white`}>
                {wordItem.word}
              </h2>
              {wordItem.pos && (
                <span className={`rounded bg-slate-200 ${typo.tag} font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-300`}>
                  {wordItem.pos}
                </span>
              )}
              <span className={`${typo.subtext} text-slate-500 dark:text-slate-400`}>
                {wordItem.chinese} • <span className={`font-mono text-indigo-600 dark:text-indigo-400 font-semibold ${typo.ipa}`}>{wordItem.ipa}</span>
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3.5 sm:p-5 overflow-y-auto space-y-3.5">
          {/* 1. 音訊操作列 (手機好按的大按鈕) */}
          <div className="flex items-center justify-between gap-2 rounded-xl bg-indigo-50/70 p-2.5 dark:bg-indigo-950/40">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePlayFull}
                className={`inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 ${typo.button} font-semibold text-white shadow-2xs hover:bg-indigo-500 transition cursor-pointer ${
                  activePlaybackStep === 'full' ? 'ring-2 ring-indigo-300 animate-pulse' : ''
                }`}
              >
                <Volume2 className="h-4 w-4" />
                <span>全字朗讀</span>
              </button>

              <button
                onClick={handlePacedPlayback}
                className={`inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-white ${typo.button} font-semibold text-indigo-700 shadow-2xs hover:bg-indigo-50 dark:border-indigo-800 dark:bg-slate-800 dark:text-indigo-300 transition cursor-pointer`}
              >
                <PlayCircle className="h-4 w-4 text-indigo-500" />
                <span>音節循序</span>
              </button>
            </div>

            <span className={`${typo.subtext} text-slate-500 dark:text-slate-400 font-medium`}>
              共 <b className="text-indigo-600 dark:text-indigo-400">{matrix.syllableCount}</b> 節 • 重音在第 <b className="text-indigo-600 dark:text-indigo-400">{matrix.primaryStressSyllableIndex + 1}</b> 節
            </span>
          </div>

          {/* 2. 音節切分依據 (簡潔卡片，字型動態放大) */}
          {matrix.divisionExplanation && (
            <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-2.5 sm:p-3 dark:border-sky-900/40 dark:bg-sky-950/30">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className={`flex items-center gap-1.5 ${typo.body} font-bold text-sky-900 dark:text-sky-300`}>
                  <Split className="h-4 w-4 text-sky-600 shrink-0" />
                  <span>音節切分依據</span>
                </div>
                <span className={`${typo.body} font-medium text-sky-700 dark:text-sky-400 font-mono`}>
                  {matrix.divisionExplanation.reason}
                </span>
              </div>

              {matrix.divisionExplanation.detectedRules.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-sky-200/50 dark:border-sky-900/40">
                  {matrix.divisionExplanation.detectedRules.map((r, rIdx) => (
                    <div
                      key={rIdx}
                      className={`inline-flex items-center gap-1.5 rounded-md bg-white/90 ${typo.badge} border border-sky-200/70 dark:bg-slate-900/80 dark:border-sky-800/50 text-slate-700 dark:text-slate-300`}
                    >
                      <span className="font-bold text-sky-700 dark:text-sky-400">{r.title}</span>
                      <span className={`text-slate-500 dark:text-slate-400 ${typo.subtext}`}>{r.explanation}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3. 音節方塊列表 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {matrix.cells.map((cell, idx) => {
              const isStepActive = activePlaybackStep === idx;
              const isPrimary = cell.stressType === 'primary';

              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between rounded-xl border p-3.5 transition ${
                    isStepActive
                      ? 'border-indigo-500 bg-indigo-50 dark:border-indigo-500 dark:bg-indigo-950/60 ring-2 ring-indigo-400'
                      : isPrimary
                      ? 'border-indigo-200 bg-indigo-50/30 dark:border-indigo-900/50 dark:bg-indigo-950/20'
                      : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800/40'
                  }`}
                >
                  {/* 首行: 音節文字 + IPA + 重音標籤 + 朗讀按鈕 */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-2">
                      <span className={`${typo.largeWord} font-mono text-slate-900 dark:text-white`}>
                        {cell.syllableText}
                      </span>
                      {cell.ipaSegment && (
                        <span className={`font-mono font-semibold text-indigo-600 dark:text-indigo-400 ${typo.ipa}`}>
                          {cell.ipaSegment}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <span
                        className={`rounded ${typo.tag} font-bold ${
                          isPrimary
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {isPrimary ? '主重音' : cell.stressType === 'secondary' ? '次重音' : '弱讀'}
                      </span>
                      <button
                        onClick={() => handlePlaySingleSyllable(cell.syllableText, idx)}
                        className="rounded p-1.5 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-700 cursor-pointer"
                        title="朗讀此音節"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* 規則標籤 (點擊查閱) */}
                  <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1 items-center">
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
                          className={`inline-flex items-center gap-1 rounded ${typo.badge} font-semibold transition hover:scale-105 cursor-pointer border ${badge.bg} ${badge.text} ${badge.border}`}
                          title={`${ruleId}: ${r?.name || ''} - 點擊查閱`}
                        >
                          <span className="font-mono font-bold">{ruleId}</span>
                          <span>{cleanName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
