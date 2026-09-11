'use client';

import React, { useState, useEffect } from 'react';
import { PhonicsRule, EPRS_PHONICS_RULES, getPhonicsRule } from '../lib/phonicsRules';
import { Volume2, X, BookOpen, ExternalLink, Search, Sparkles, CheckCircle, Info } from 'lucide-react';

interface RuleDetailModalProps {
  ruleCode: string | null;
  onClose: () => void;
  onSpeak?: (word: string) => void;
}

export default function RuleDetailModal({ ruleCode, onClose, onSpeak }: RuleDetailModalProps) {
  const [userSelectedCode, setUserSelectedCode] = useState<string | null>(null);
  const [prevRuleCode, setPrevRuleCode] = useState<string | null>(ruleCode);
  const [searchFilter, setSearchFilter] = useState('');

  if (ruleCode !== prevRuleCode) {
    setPrevRuleCode(ruleCode);
    setUserSelectedCode(null);
  }

  const selectedCode = (userSelectedCode || ruleCode || 'R001').toUpperCase();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!ruleCode) return null;

  const currentRule: PhonicsRule = getPhonicsRule(selectedCode) || EPRS_PHONICS_RULES['R001'];
  const allRules = Object.values(EPRS_PHONICS_RULES);

  const filteredRules = allRules.filter(r => 
    r.id.toLowerCase().includes(searchFilter.toLowerCase()) ||
    r.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    r.englishName.toLowerCase().includes(searchFilter.toLowerCase()) ||
    r.summary.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handlePlay = (word: string) => {
    if (onSpeak) {
      onSpeak(word);
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const clean = word.replace(/\(.*?\)/g, '').trim().split('/')[0];
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = 'en-US';
      u.rate = 0.88;
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="bg-indigo-600/30 border border-indigo-400/40 p-1.5 rounded-lg text-indigo-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-black text-amber-400 text-lg sm:text-xl">
                  {currentRule.id}
                </span>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  {currentRule.name}
                </h3>
                <span className="text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-2 py-0.5 rounded-full">
                  {currentRule.category}
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5 font-mono">
                {currentRule.englishName}
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg p-1.5 transition-colors cursor-pointer"
            aria-label="關閉彈窗"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Rule Selector Bar */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-thin">
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            快速切換規則：
          </span>
          <div className="flex items-center gap-1">
            {allRules.map(r => {
              const isSelected = r.id === currentRule.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setUserSelectedCode(r.id)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded-md whitespace-nowrap transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-indigo-600 text-white shadow-xs scale-105' 
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-300'
                  }`}
                  title={`${r.id}: ${r.name}`}
                >
                  {r.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-slate-800">
          {/* Summary & Formula Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 bg-indigo-50/70 border border-indigo-200 rounded-xl p-3.5">
              <span className="text-xs font-bold text-indigo-900 flex items-center gap-1 mb-1">
                <Info className="w-3.5 h-3.5" />
                規則核心定義與判定條件
              </span>
              <p className="text-sm text-slate-800 font-medium leading-relaxed">
                {currentRule.summary}
              </p>
            </div>
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 flex flex-col justify-center">
              <span className="text-xs font-bold text-amber-900 mb-1">推導結構公式</span>
              <div className="font-mono text-xs sm:text-sm font-bold text-amber-950 bg-white/80 border border-amber-300/80 rounded-lg p-2 text-center">
                {currentRule.formula}
              </div>
            </div>
          </div>

          {/* Detailed Linguistic Description */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>📖</span> 發音學原理與機轉說明
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {currentRule.description}
            </p>
          </div>

          {/* Phoneme & Letter Mapping Table */}
          {currentRule.phonemeMapping && currentRule.phonemeMapping.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
              <div className="bg-slate-800 text-white px-3.5 py-2 text-xs font-bold flex items-center justify-between">
                <span>字母 / 字母組合 ➔ 美式 IPA 音標對映表</span>
                <span className="text-slate-300 font-normal text-[11px]">標準音標發音</span>
              </div>
              <div className="divide-y divide-slate-100">
                {currentRule.phonemeMapping.map((mapItem, idx) => (
                  <div key={idx} className="px-3.5 py-2.5 flex items-center justify-between text-xs sm:text-sm hover:bg-slate-50/80 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        {mapItem.letters}
                      </span>
                      <span className="text-slate-400">➔</span>
                      <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {mapItem.ipa}
                      </span>
                    </div>
                    <span className="text-slate-600 text-xs text-right">
                      {mapItem.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Classic Examples with Audio Click */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>🎯</span> 經典代表單字示範 (點擊發音)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {currentRule.examples.map((ex, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-indigo-300 rounded-xl p-3 flex items-start justify-between shadow-2xs hover:shadow-xs transition-all group"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-slate-900 text-base">
                        {ex.word}
                      </span>
                      <span className="font-mono text-xs text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {ex.ipa}
                      </span>
                    </div>
                    {ex.note && (
                      <p className="text-xs text-slate-500 mt-1 leading-normal">
                        {ex.note}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handlePlay(ex.word)}
                    className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-indigo-50 text-slate-500 group-hover:text-indigo-600 transition-colors cursor-pointer shrink-0 ml-2"
                    title={`播放 ${ex.word} 發音`}
                    aria-label={`聆聽 ${ex.word}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Exceptions or Tips */}
          {currentRule.exceptionsOrTips && (
            <div className="bg-amber-50/60 border border-amber-200/90 rounded-xl p-3 text-xs text-amber-950 flex items-start gap-2">
              <span className="text-sm">⚠️</span>
              <div>
                <span className="font-bold text-amber-900">重點備註與特例指引：</span>
                <span className="ml-1 text-slate-700">{currentRule.exceptionsOrTips}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            EPRS 自然發音知識庫 · 17 大通用規則 (R001 ~ R018)
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            完成並關閉 (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
