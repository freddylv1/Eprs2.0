'use client';

import React, { useState, useEffect } from 'react';
import { EPRS_PHONICS_RULES, ALL_RULE_CODES } from '../../lib/engine/phonicsRules';
import { getRuleColorBadge } from '../../lib/engine/phonicsEngine';
import { audioManager } from '../../lib/audioManager';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import { FontSizePreference } from '../../lib/types';
import { X, Volume2, Lightbulb, AlertTriangle, BookOpen, Layers } from 'lucide-react';

interface RuleDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRuleId?: string;
  fontSize?: FontSizePreference;
}

export function RuleDetailModal({
  isOpen,
  onClose,
  initialRuleId,
  fontSize = 'medium'
}: RuleDetailModalProps) {
  const [selectedRuleId, setSelectedRuleId] = useState<string>('R001');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const typo = getModalFontSizeClasses(fontSize);

  // Derive active rule ID: prefer explicitly clicked initialRuleId if provided
  const activeRuleId = (initialRuleId ? initialRuleId.toUpperCase() : selectedRuleId) || 'R001';

  // Keyboard navigation (Escape to close)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentRule = EPRS_PHONICS_RULES[activeRuleId] || EPRS_PHONICS_RULES['R001'];
  const badgeStyle = getRuleColorBadge(currentRule.id);

  const categories = [
    { id: 'all', label: '全部法則' },
    { id: '母音法則', label: '母音法則 (R001-R005, R011)' },
    { id: '子音法則', label: '子音法則 (R006, R007, R016, R017)' },
    { id: '音節與弱化', label: '音節與弱化 (R008, R009, R013)' },
    { id: '詞綴與複合詞', label: '詞綴與複合詞 (R012, R014, R015)' },
    { id: '例外與特殊', label: '例外與特殊 (R010, R018)' }
  ];

  const filteredRuleCodes = ALL_RULE_CODES.filter((code) => {
    if (selectedCategory === 'all') return true;
    return EPRS_PHONICS_RULES[code]?.category === selectedCategory;
  });

  const handlePlay = (word: string) => {
    setPlayingWord(word);
    audioManager.speakWord(word, () => setPlayingWord(null));
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 sm:py-4 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className={`${typo.title} text-slate-900 dark:text-white`}>
                EPRS 18 大自然發音法則詳解庫
              </h2>
              <p className={`${typo.subtext} text-slate-500 dark:text-slate-400`}>
                標準發音公式、音素字母映射、例字朗讀與音變防範指南
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

        {/* Modal Body: Left rule list & Right rule content */}
        <div className="grid flex-1 grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Left Rule Navigation Column */}
          <div className="flex flex-col border-b border-slate-100 dark:border-slate-800 md:border-b-0 md:border-r md:col-span-4 bg-slate-50/40 dark:bg-slate-900/50 p-3 overflow-y-auto max-h-[300px] md:max-h-[calc(90vh-80px)]">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1 mb-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-lg ${typo.badge} font-semibold transition ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  {cat.label.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Rules List */}
            <div className="space-y-1 overflow-y-auto">
              {filteredRuleCodes.map((code) => {
                const r = EPRS_PHONICS_RULES[code];
                const isSelected = r.id === activeRuleId;
                const rBadge = getRuleColorBadge(r.id);

                return (
                  <button
                    key={code}
                    onClick={() => setSelectedRuleId(code)}
                    className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-left ${typo.body} transition border ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/90 text-indigo-950 font-bold dark:border-indigo-500 dark:bg-indigo-950/60 dark:text-indigo-200 shadow-xs'
                        : 'border-transparent bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-100 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`rounded ${typo.tag} font-mono font-bold ${rBadge.bg} ${rBadge.text} border ${rBadge.border}`}>
                        {r.id}
                      </span>
                      <span className="truncate">{r.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Rule Detail Content */}
          <div className="flex-1 md:col-span-8 p-6 overflow-y-auto max-h-[calc(90vh-80px)] space-y-5">
            {/* Rule Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className={`rounded-md border ${typo.badge} font-mono font-bold ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}>
                  {currentRule.id}
                </span>
                <span className={`rounded-md bg-slate-100 ${typo.badge} font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300`}>
                  {currentRule.category}
                </span>
                <span className={`${typo.subtext} text-slate-400 font-medium`}>
                  {currentRule.englishName}
                </span>
              </div>
              <h3 className={`${typo.largeWord} text-slate-900 dark:text-white`}>
                {currentRule.name}
              </h3>
              <p className={`mt-1 ${typo.body} text-slate-600 dark:text-slate-300 leading-relaxed`}>
                {currentRule.summary}
              </p>
            </div>

            {/* Formula Block */}
            <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 to-sky-50/50 p-4 dark:border-indigo-900/60 dark:from-indigo-950/40 dark:to-sky-950/20">
              <div className={`flex items-center gap-2 ${typo.title} text-indigo-900 dark:text-indigo-200 mb-1`}>
                <Lightbulb className="h-4 w-4 text-amber-500" />
                <span>發音演算法則公式</span>
              </div>
              <div className={`${typo.body} font-bold font-mono text-indigo-700 dark:text-indigo-300`}>
                {currentRule.formula}
              </div>
              <div className={`mt-2 ${typo.subtext} text-slate-600 dark:text-slate-300 leading-normal`}>
                {currentRule.description}
              </div>
            </div>

            {/* Phoneme Mapping Table */}
            <div>
              <h4 className={`${typo.title} uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5`}>
                <Layers className="h-4 w-4 text-indigo-500" />
                <span>字母與音素映射表 (Phoneme Mappings)</span>
              </h4>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <table className={`w-full text-left ${typo.tableText}`}>
                  <thead className={`bg-slate-50 dark:bg-slate-800/80 ${typo.subtext} font-semibold text-slate-500 border-b border-slate-200 dark:border-slate-800`}>
                    <tr>
                      <th className="px-3 py-2 w-1/4">字母 / 結構</th>
                      <th className="px-3 py-2 w-1/4 font-mono text-indigo-600 dark:text-indigo-400">標準音標</th>
                      <th className="px-3 py-2 w-1/2">發音特徵與示例</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {currentRule.phonemeMapping.map((map, mIdx) => (
                      <tr key={mIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                        <td className="px-3 py-2 font-bold font-mono text-slate-900 dark:text-white">
                          {map.letters}
                        </td>
                        <td className="px-3 py-2 font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                          {map.ipa}
                        </td>
                        <td className="px-3 py-2 text-slate-600 dark:text-slate-300">
                          {map.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interactive Examples */}
            <div>
              <h4 className={`${typo.title} uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5`}>
                <Volume2 className="h-4 w-4 text-indigo-500" />
                <span>經典範例字彙 (點擊播放)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {currentRule.examples.map((ex, eIdx) => (
                  <div
                    key={eIdx}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-800/40"
                  >
                    <div>
                      <div className={`${typo.body} font-bold text-slate-900 dark:text-white flex items-center gap-2`}>
                        <span>{ex.word}</span>
                        <span className={`font-mono font-normal text-indigo-600 dark:text-indigo-400 ${typo.ipa}`}>
                          {ex.ipa}
                        </span>
                      </div>
                      {ex.note && (
                        <div className={`${typo.subtext} text-slate-500 dark:text-slate-400 mt-0.5`}>
                          {ex.note}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handlePlay(ex.word)}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border transition ${
                        playingWord === ex.word
                          ? 'border-indigo-600 bg-indigo-600 text-white animate-pulse'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                      title="發音"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Exceptions & Pitfalls */}
            {currentRule.exceptionsOrTips && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
                <div className={`flex items-center gap-2 ${typo.title} text-amber-900 dark:text-amber-200 mb-1`}>
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span>【判定防範與避坑要點】</span>
                </div>
                <p className={`${typo.body} text-amber-800 dark:text-amber-300 leading-relaxed`}>
                  {currentRule.exceptionsOrTips}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
