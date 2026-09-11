'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, Layers, ExternalLink } from 'lucide-react';

export interface WordCardData {
  word: string;
  ipa?: string;
  syllable?: string;
  stress?: string;
  pos?: string;
  chinese?: string;
  reasoning?: any;
}

interface WordCardProps {
  data: WordCardData;
  onSelectPattern?: (patternId: string) => void;
  onSelectRule?: (ruleId: string) => void;
}

export function WordCard({ data, onSelectPattern, onSelectRule }: WordCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const speakWord = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('您的瀏覽器不支援語音合成播放');
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(data.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.85; // Slightly slower for clear pronunciation learning

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } catch {
      setIsPlaying(false);
    }
  };

  // Format syllable dots: "ap-ple" -> "ap · ple"
  const formattedSyllable = data.syllable
    ? data.syllable.split('-').join(' · ')
    : data.word;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm space-y-4">
      {/* Top badges row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {data.pos && (
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
              {data.pos}
            </span>
          )}
          {data.chinese && (
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              {data.chinese}
            </span>
          )}
        </div>

        {data.stress && (
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {data.stress}
          </span>
        )}
      </div>

      {/* Main Word Display Section */}
      <div className="text-center py-2 space-y-2">
        {/* English Word - 28px minimum */}
        <h2 className="text-[28px] sm:text-[32px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
          {data.word}
        </h2>

        {/* IPA Pronunciation - 24px minimum */}
        <div className="text-[24px] sm:text-[26px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide">
          {data.ipa || `/${data.word}/`}
        </div>

        {/* Syllable Breakdown */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-base font-semibold">
          <Layers className="w-4 h-4 text-slate-400" />
          <span>{formattedSyllable}</span>
        </div>
      </div>

      {/* Audio Pronunciation Button - Touch target >= 44px */}
      <div className="flex gap-2">
        <button
          onClick={speakWord}
          disabled={isPlaying}
          aria-label={`播放 ${data.word} 發音`}
          className="flex-1 min-h-[48px] px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold text-base flex items-center justify-center gap-2.5 shadow-sm transition-all active:scale-[0.99] disabled:opacity-75 cursor-pointer"
        >
          <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-bounce' : ''}`} />
          <span>{isPlaying ? '播放中...' : '聆聽標準發音'}</span>
        </button>

        <a
          href={`https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(data.word.toLowerCase().replace(/\(.*?\)/g, '').trim())}`}
          target="_blank"
          rel="noopener noreferrer"
          title="劍橋字典真人發音"
          className="min-h-[48px] px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-200 font-medium text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer border border-slate-200 dark:border-slate-600"
        >
          <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>真人字典</span>
        </a>
      </div>
    </div>
  );
}
