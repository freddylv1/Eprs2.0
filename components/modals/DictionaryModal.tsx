'use client';

import React from 'react';
import { WordItem } from '../../lib/types';
import { getPhonicsRule } from '../../lib/engine/phonicsRules';
import { getRuleColorBadge } from '../../lib/engine/phonicsEngine';
import { audioManager } from '../../lib/audioManager';
import { X, Volume2, ExternalLink, BookOpen, Copy, Check, Sparkles, Grid } from 'lucide-react';

interface DictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  wordItem: WordItem | null;
  onOpenWordMatrix: (word: WordItem) => void;
  onOpenRuleDetail: (ruleId: string) => void;
}

export function DictionaryModal({
  isOpen,
  onClose,
  wordItem,
  onOpenWordMatrix,
  onOpenRuleDetail
}: DictionaryModalProps) {
  const [copied, setCopied] = React.useState(false);

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

  const cleanWord = wordItem.word.replace(/\(.*?\)/g, '').trim();
  const cambridgeUrl = `https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/${encodeURIComponent(cleanWord)}`;
  const merriamWebsterUrl = `https://www.merriam-webster.com/dictionary/${encodeURIComponent(cleanWord)}`;
  const yahooUrl = `https://tw.dictionary.search.yahoo.com/search?p=${encodeURIComponent(cleanWord)}`;

  const handlePlay = () => {
    audioManager.speakWord(wordItem.word);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(wordItem.word);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                單字字彙解析與權威字典
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                點擊可查看詳細定義與前往外部權威辭典
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

        {/* Word Profile Body */}
        <div className="my-5 space-y-4">
          {/* Main Word + Audio */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {wordItem.word}
                  </h3>
                  {wordItem.pos && (
                    <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      {wordItem.pos}
                    </span>
                  )}
                  {wordItem.level && (
                    <span className="rounded-md bg-slate-200 px-1.5 py-0.2 text-[10px] font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {wordItem.level}
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-2 font-mono text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  <span>{wordItem.ipa}</span>
                  <span>•</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">
                    音節: [{(wordItem.syllables || [wordItem.word]).join(' · ')}]
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePlay}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs hover:bg-indigo-500 transition"
                  title="朗讀發音"
                >
                  <Volume2 className="h-5 w-5" />
                </button>
                <button
                  onClick={handleCopy}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  title="複製單字"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Chinese Definition */}
            <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-400">中文釋義：</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100 ml-1">
                {wordItem.chinese}
              </span>
            </div>
          </div>

          {/* Phonics Rules summary */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-800/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                <span>適用自然發音法則</span>
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenWordMatrix(wordItem);
                }}
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                <Grid className="h-3 w-3" />
                <span>檢視音節矩陣</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {wordItem.ruleCodes.map((ruleId) => {
                const badge = getRuleColorBadge(ruleId);
                const r = getPhonicsRule(ruleId);
                return (
                  <button
                    key={ruleId}
                    onClick={() => {
                      onClose();
                      onOpenRuleDetail(ruleId);
                    }}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition hover:scale-105 ${badge.bg} ${badge.text} ${badge.border}`}
                  >
                    {ruleId} - {r?.name || ''}
                  </button>
                );
              })}
            </div>
          </div>

          {/* External Dictionary Links */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              前往權威辭典查詢：
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a
                href={cambridgeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-2.5 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition"
              >
                <span>劍橋辭典</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              </a>

              <a
                href={merriamWebsterUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-2.5 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition"
              >
                <span>韋氏辭典</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              </a>

              <a
                href={yahooUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-2.5 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition"
              >
                <span>Yahoo 字典</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
