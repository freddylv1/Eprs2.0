'use client';

import React, { useEffect } from 'react';
import { X, Scissors, Sparkles, Volume2, BookOpen } from 'lucide-react';
import { PracticeWord } from './types';
import { PracticeAudioService } from './audioService';

interface SyllableExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  word: PracticeWord | null;
  activeSyllable?: string;
  onPlayAudio?: (word: string) => void;
}

export default function SyllableExplainerModal({
  isOpen,
  onClose,
  word,
  activeSyllable,
  onPlayAudio,
}: SyllableExplainerModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !word) return null;

  const syllables = word.syllable || [word.word];
  const detail = word.syllableDetail;

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPlayAudio) {
      onPlayAudio(word.word);
    } else {
      PracticeAudioService.play(word.word);
    }
  };

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">
              <Scissors className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-100">
                自然發音音節切割詳解
              </h3>
              <p className="text-xs text-slate-400">
                EPRS Syllable Segmentation Breakdown
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="關閉 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word and Syllables Summary */}
        <div className="bg-slate-50 border-b border-slate-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-black text-slate-900 font-serif">
                  {word.word}
                </span>
                {word.pos && (
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded">
                    {word.pos}
                  </span>
                )}
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  [{word.ipa}]
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-600">{word.chinese}</p>
            </div>

            <button
              type="button"
              onClick={handlePlay}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-xs cursor-pointer"
              title="播放發音"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Syllable Chips inside modal */}
          <div className="mt-3 flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-slate-500 mr-1">切分音節：</span>
            {syllables.map((s, idx) => {
              const isSelected = activeSyllable && s.toLowerCase() === activeSyllable.toLowerCase();
              return (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg text-sm sm:text-base font-extrabold border shadow-2xs transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-700 ring-2 ring-blue-300'
                      : 'bg-white text-blue-900 border-blue-200'
                  }`}
                >
                  {s}
                </span>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation Content */}
        <div className="p-5 overflow-y-auto max-h-[60vh] space-y-3.5 text-xs sm:text-sm">
          {/* Overview Header */}
          <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-3">
            <div className="font-extrabold text-blue-900 flex items-center gap-1.5 mb-1 text-sm sm:text-base">
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>{detail?.header || word.syllableText || '音節切割概述'}</span>
            </div>
            {word.steps?.syllableStep && (
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
                {word.steps.syllableStep}
              </p>
            )}
          </div>

          {/* Rule Cards */}
          <div className="space-y-2.5">
            {/* 1. 母音核心 */}
            {detail?.vowelCore && (
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>母音核心判定 (Vowel Core)</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed pl-3.5">
                  {detail.vowelCore.replace(/^\d+\.\s*母音核心[：:]\s*/, '')}
                </p>
              </div>
            )}

            {/* 2. 結構切分 */}
            {detail?.structureRule && (
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>結構切分原則 (Structure Rule)</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed pl-3.5">
                  {detail.structureRule.replace(/^\d+\.\s*結構切分[：:]\s*/, '')}
                </p>
              </div>
            )}

            {/* 3. 不可拆組合 / 備註 */}
            {detail?.indivisibleRule && (
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span>組合備註與約束 (Constraints)</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed pl-3.5">
                  {detail.indivisibleRule.replace(/^\d+\.\s*不可拆組合[：:]\s*/, '')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            按鍵提示：點擊任何音節標籤即可隨時開啟詳解
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            關閉 (Close)
          </button>
        </div>
      </div>
    </div>
  );
}
