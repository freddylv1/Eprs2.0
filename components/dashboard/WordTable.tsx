'use client';

import React, { useState } from 'react';
import { WordItem, FontSizePreference } from '../../lib/types';
import { Volume2, Grid, Copy, Check, BookOpen } from 'lucide-react';
import { audioManager } from '../../lib/audioManager';
import { getPhonicsRule } from '../../lib/engine/phonicsRules';
import { getRuleColorBadge, generateWordMatrix } from '../../lib/engine/phonicsEngine';

interface WordTableProps {
  words: WordItem[];
  fontSize: FontSizePreference;
  onOpenWordMatrix: (word: WordItem) => void;
  onOpenRuleDetail: (ruleId: string) => void;
  onOpenDictionary: (word: WordItem) => void;
}

export function WordTable({
  words,
  fontSize,
  onOpenWordMatrix,
  onOpenRuleDetail,
  onOpenDictionary
}: WordTableProps) {
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [copiedWord, setCopiedWord] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);

  const totalPages = Math.ceil(words.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const currentWords = words.slice(startIndex, startIndex + pageSize);

  const handlePlayWord = (e: React.MouseEvent, wordText: string) => {
    e.stopPropagation();
    setPlayingWord(wordText);
    audioManager.speakWord(wordText, () => setPlayingWord(null));
  };

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(text);
      setCopiedWord(text);
      setTimeout(() => setCopiedWord(null), 1500);
    }
  };

  const handleWordClick = (item: WordItem) => {
    onOpenDictionary(item);
  };

  // Dynamic Typography Styles based on fontSize with distinct scaling across all fields
  const wordTypography = {
    small: {
      word: 'text-sm font-bold',
      chinese: 'text-xs text-slate-500 dark:text-slate-400',
      pos: 'text-[10px]',
      syllable: 'text-xs px-1.5 py-0.5',
      ipa: 'text-xs px-2 py-0.5',
      cellPadding: 'py-2.5 px-3',
      derivationTitle: 'text-xs font-bold',
      derivationReason: 'text-[11px] leading-snug',
      ruleBadge: 'text-xs px-2 py-0.5',
      stressBadge: 'text-[10px] px-1 py-0.2'
    },
    medium: {
      word: 'text-base font-bold',
      chinese: 'text-sm text-slate-600 dark:text-slate-300 font-medium',
      pos: 'text-xs',
      syllable: 'text-sm px-2 py-0.5',
      ipa: 'text-sm px-2.5 py-1',
      cellPadding: 'py-3.5 px-4',
      derivationTitle: 'text-sm font-bold',
      derivationReason: 'text-xs leading-normal',
      ruleBadge: 'text-xs sm:text-sm px-2.5 py-1',
      stressBadge: 'text-xs px-1.5 py-0.5'
    },
    large: {
      word: 'text-xl font-bold',
      chinese: 'text-base text-slate-700 dark:text-slate-200 font-semibold',
      pos: 'text-xs font-semibold',
      syllable: 'text-base px-2.5 py-1 font-bold',
      ipa: 'text-base px-3 py-1 font-bold',
      cellPadding: 'py-5 px-4',
      derivationTitle: 'text-base font-bold',
      derivationReason: 'text-sm leading-normal font-medium',
      ruleBadge: 'text-sm sm:text-base px-3 py-1 font-semibold',
      stressBadge: 'text-xs px-2 py-0.5 font-semibold'
    },
    xlarge: {
      word: 'text-3xl font-black',
      chinese: 'text-xl text-slate-800 dark:text-slate-100 font-bold',
      pos: 'text-sm font-bold',
      syllable: 'text-lg px-3.5 py-1.5 font-extrabold',
      ipa: 'text-lg px-3.5 py-1.5 font-extrabold',
      cellPadding: 'py-6 px-5',
      derivationTitle: 'text-lg font-extrabold',
      derivationReason: 'text-base leading-relaxed font-semibold',
      ruleBadge: 'text-base sm:text-lg px-3.5 py-1.5 font-bold',
      stressBadge: 'text-xs px-2.5 py-1 font-bold'
    }
  }[fontSize];

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
      {/* Table Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/30">
        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 flex-wrap">
          <span>單字與自然發音音節推導解析清單</span>
          <span className="text-[11px] font-normal text-slate-400">
            （點擊單字查字典 • 點擊音標發音 • 點擊法則標籤跳出法則詳解）
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-400">每頁顯示:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 cursor-pointer"
          >
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
          <thead className="border-b border-slate-100 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400">
            <tr>
              <th className="px-3 py-3 w-12 text-center">#</th>
              <th className="px-4 py-3 min-w-[180px] max-w-[240px]">單字與釋義 (Word & Meaning)</th>
              <th className="px-4 py-3 min-w-[200px] max-w-[260px]">音節拆解與 IPA (Syllables & IPA)</th>
              <th className="px-4 py-3 min-w-[420px]">自然發音音節推導與規則鏈路 (Phonics Derivations & Matrix)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {currentWords.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-12 text-center text-slate-400">
                  查無符合篩選條件的單字
                </td>
              </tr>
            ) : (
              currentWords.map((item, idx) => {
                const globalIndex = startIndex + idx + 1;
                const syllables = item.syllables?.length > 0 ? item.syllables : [item.word];
                const matrix = generateWordMatrix(item);

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition"
                  >
                    {/* 1. Index */}
                    <td className={`${wordTypography.cellPadding} text-center text-slate-400 font-mono text-[11px]`}>
                      {globalIndex}
                    </td>

                    {/* 2. Word + Chinese Meaning Underneath */}
                    <td className={wordTypography.cellPadding}>
                      <div className="flex flex-col gap-1">
                        {/* Top: Word, POS, Copy, Dictionary trigger */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <button
                            onClick={() => handleWordClick(item)}
                            className={`group inline-flex items-center gap-1.5 ${wordTypography.word} text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition text-left cursor-pointer`}
                            title="點擊開啟單字解析與權威辭典查詢"
                          >
                            <span>{item.word}</span>
                            <BookOpen className="h-3.5 w-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition" />
                          </button>

                          {item.pos && (
                            <span className="rounded-md bg-slate-100 px-1.5 py-0.2 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                              {item.pos}
                            </span>
                          )}

                          <button
                            onClick={(e) => handleCopy(e, item.word)}
                            className="text-slate-300 hover:text-slate-500 dark:hover:text-slate-300 transition"
                            title="複製單字"
                          >
                            {copiedWord === item.word ? (
                              <Check className="h-3 w-3 text-emerald-500" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>

                        {/* Bottom: Chinese Meaning */}
                        <div className={`${wordTypography.chinese} text-slate-600 dark:text-slate-300 font-medium`}>
                          {item.chinese || '-'}
                        </div>
                      </div>
                    </td>

                    {/* 3. Syllables + IPA Underneath (Clicking Syllable or Rule button opens Syllables Derivation Matrix Modal) */}
                    <td className={wordTypography.cellPadding}>
                      <div className="flex flex-col gap-1.5">
                        {/* Top: Syllable Chunks + Pop-up Trigger Button to Syllables Derivation Rules */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {syllables.map((syl, sIdx) => {
                            const isPrimary = sIdx === matrix.primaryStressSyllableIndex;
                            return (
                              <button
                                key={sIdx}
                                onClick={() => onOpenWordMatrix(item)}
                                className={`rounded-md border px-2 py-0.5 font-mono ${wordTypography.syllable} font-medium transition hover:scale-105 cursor-pointer ${
                                  isPrimary
                                    ? 'border-indigo-200 bg-indigo-50/90 font-bold text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300'
                                    : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                                }`}
                                title="點擊檢視音節拆解與規則說明"
                              >
                                {syl}
                              </button>
                            );
                          })}

                          {/* Direct Trigger Button for Syllable Breakdown Rules (Icon Only) */}
                          <button
                            onClick={() => onOpenWordMatrix(item)}
                            className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-indigo-200/90 bg-indigo-50/90 text-indigo-700 hover:bg-indigo-100 hover:scale-105 dark:border-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 dark:hover:bg-indigo-900 transition cursor-pointer shadow-2xs shrink-0"
                            title="查看音節拆解與自然發音推導矩陣"
                          >
                            <Grid className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        {/* Bottom: IPA Transcription (Clicking triggers audio playback) */}
                        <button
                          onClick={(e) => handlePlayWord(e, item.word)}
                          className={`group inline-flex items-center gap-1.5 rounded-lg px-2 py-1 w-fit font-mono ${wordTypography.ipa} font-semibold transition cursor-pointer border ${
                            playingWord === item.word
                              ? 'border-indigo-500 bg-indigo-500 text-white animate-pulse'
                              : 'border-indigo-100 bg-indigo-50/70 text-indigo-700 hover:border-indigo-300 hover:bg-indigo-100/80 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-900/60'
                          }`}
                          title="點擊音標朗讀發音"
                        >
                          <Volume2 className="h-3.5 w-3.5 shrink-0" />
                          <span>{item.ipa || '-'}</span>
                        </button>
                      </div>
                    </td>

                    {/* 4. Directly Display Syllable Phonics Derivations & Rule Chain (Requested) */}
                    <td className={wordTypography.cellPadding}>
                      <div className="flex items-start justify-between gap-3">
                        {/* Syllable-by-syllable derivation cards/tiles rendered directly */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                          {matrix.cells.map((cell, cIdx) => (
                            <div
                              key={cIdx}
                              className={`rounded-xl border p-2 flex flex-col justify-between transition ${
                                cell.stressType === 'primary'
                                  ? 'border-indigo-200 bg-indigo-50/50 dark:border-indigo-900/60 dark:bg-indigo-950/30'
                                  : 'border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-800/30'
                              }`}
                            >
                              {/* Syllable Title & Stress Badge */}
                              <div className="flex items-center justify-between gap-1 pb-1 mb-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                                <div className="flex items-center gap-1">
                                  <span className="text-[10px] text-slate-400 font-mono">#{cIdx + 1}</span>
                                  <span className={`font-mono font-bold text-slate-900 dark:text-white ${wordTypography.derivationTitle}`}>
                                    {cell.syllableText}
                                  </span>
                                </div>
                                <span
                                  className={`rounded-sm font-bold ${wordTypography.stressBadge} ${
                                    cell.stressType === 'primary'
                                      ? 'bg-indigo-600 text-white shadow-2xs'
                                      : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                                  }`}
                                >
                                  {cell.stressType === 'primary' ? '主重音' : cell.stressType === 'secondary' ? '次重音' : '非重音'}
                                </span>
                              </div>

                              {/* Syllable Derivation Explanation (Requested by User) */}
                              {cell.derivationExplanation && (
                                <div className={`${wordTypography.derivationReason} text-slate-600 dark:text-slate-300 font-normal mb-2 bg-white/70 dark:bg-slate-900/50 rounded-md p-1.5 border border-slate-200/50 dark:border-slate-800/60`}>
                                  {cell.derivationExplanation}
                                </div>
                              )}

                              {/* Matched Rules: Clickable directly to open RuleDetailModal with clearly readable Chinese labels */}
                              <div className="flex flex-wrap gap-1.5 mt-auto">
                                {cell.matchedRules && cell.matchedRules.length > 0 ? (
                                  cell.matchedRules.map((rCode) => {
                                    const badge = getRuleColorBadge(rCode);
                                    const rule = getPhonicsRule(rCode);
                                    const rawName = rule?.name || '';
                                    const cleanName = rawName.split(' ')[0].replace(/\/.*/, '') || rawName;
                                    return (
                                      <button
                                        key={rCode}
                                        onClick={() => onOpenRuleDetail(rCode)}
                                        className={`inline-flex items-center gap-1 rounded-md border font-semibold transition hover:scale-105 shadow-2xs ${badge.bg} ${badge.text} ${badge.border} ${wordTypography.ruleBadge} cursor-pointer`}
                                        title={`${rCode} ${rule?.name || ''} - 點擊查看發音法則詳解`}
                                      >
                                        <span className="font-mono font-bold">{rCode}</span>
                                        <span className="font-medium">
                                          {cleanName}
                                        </span>
                                      </button>
                                    );
                                  })
                                ) : (
                                  <span className="text-xs text-slate-400 italic">基礎自然拼讀</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Derivation reasoning hint if available */}
                        {item.derivations && item.derivations.length > 0 && (
                          <div className="shrink-0">
                            <span className="text-[10px] text-indigo-500/80 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/50 dark:border-indigo-900/50 rounded-md px-1.5 py-0.5" title={item.derivations.map(d => `${d.syllable}: ${d.reason}`).join(' | ')}>
                              特殊音變
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/30">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            第 <span className="font-semibold">{currentPage}</span> 頁，共{' '}
            <span className="font-semibold">{totalPages}</span> 頁（本批次共 {words.length} 字）
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              上一頁
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let p = i + 1;
                if (totalPages > 5 && currentPage > 3) {
                  p = currentPage - 2 + i;
                  if (p > totalPages) p = totalPages - 4 + i;
                }
                return (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`h-7 w-7 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      currentPage === p
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              下一頁
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
