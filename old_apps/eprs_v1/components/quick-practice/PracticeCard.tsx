'use client';

import React from 'react';
import { 
  Sparkles, 
  Volume2, 
  Scissors, 
  Eye, 
  Layers,
  ChevronRight,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { PracticeWord, PracticeStep } from './types';

interface PracticeCardProps {
  word: PracticeWord;
  currentIndex: number;
  totalWords: number;
  step: PracticeStep;
  onAdvance: () => void;
  onOpenSyllableModal: (syllable?: string) => void;
  onOpenReasoningModal: () => void;
  onPlayWord: () => void;
  isPlayingAudio: boolean;
  audioStage: number; // 0: none, 1: 1st play, 2: 2nd play
}

export default function PracticeCard({
  word,
  currentIndex,
  totalWords,
  step,
  onAdvance,
  onOpenSyllableModal,
  onOpenReasoningModal,
  onPlayWord,
  isPlayingAudio,
  audioStage,
}: PracticeCardProps) {
  const syllables = word.syllable || [word.word];
  const isChineseRevealed = step >= PracticeStep.CHINESE_SHOWN;
  const isSyllablesRevealed = step >= PracticeStep.SYLLABLES_SHOWN;

  return (
    <div
      className="w-full bg-white border-2 border-slate-200 hover:border-blue-300 rounded-2xl p-6 sm:p-8 shadow-sm transition-all text-center flex flex-col justify-between min-h-[380px] sm:min-h-[420px] select-none"
      onClick={() => {
        if (isPlayingAudio) return;
        onAdvance();
      }}
    >
      {/* 第 1 行：頂部序號與狀態資訊 (Top Row: Word ID & Progress) */}
      <div className="w-full flex items-center justify-between text-xs pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full border border-blue-200">
            單元進度：第 {currentIndex + 1} / {totalWords} 字
          </span>
          <span className="bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded-full border border-slate-200">
            ID: #{word.id}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Audio Indicator */}
          {isPlayingAudio ? (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full animate-pulse">
              <Volume2 className="w-3 h-3" />
              <span>發音中...</span>
            </span>
          ) : audioStage > 0 ? (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              <Volume2 className="w-3 h-3" />
              <span>已播放 {audioStage} 次</span>
            </span>
          ) : null}

          <div className="flex items-center gap-1 text-slate-400 font-medium text-[11px]">
            <span className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-emerald-500' : 'bg-slate-300'}`} />
            <span>階段 {step + 1} / 5</span>
          </div>
        </div>
      </div>

      {/* 單字區：第 1 次出現 (Word Area: Primary Display) */}
      <div className="pt-4 pb-2">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight font-serif drop-shadow-2xs">
          {word.word}
        </h2>
      </div>

      {/* 中間保留空間：留出空間，展開音節切割、音標與〔推理〕 (Spacious Middle Section) */}
      <div className="my-auto py-6 flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px]">
        {isSyllablesRevealed ? (
          <div 
            className="flex flex-col items-center space-y-3.5 animate-fade-in w-full"
            onClick={(e) => e.stopPropagation()} // Allow clicking inside controls without triggering advance
          >
            {/* 切割後的音節標籤 (點擊可看切分說明) */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                <Scissors className="w-3 h-3 text-blue-500" />
                <span>音節切割 (點擊各音節看切分說明)：</span>
              </span>

              <div className="flex items-center justify-center gap-2 flex-wrap">
                {syllables.map((syl, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => onOpenSyllableModal(syl)}
                    className="group relative bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 hover:border-blue-400 font-extrabold px-3.5 py-1.5 rounded-xl text-lg sm:text-2xl shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    title={`點擊查看「${syl}」音節切割說明`}
                  >
                    <span>{syl}</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full group-hover:animate-ping" />
                  </button>
                ))}
              </div>
            </div>

            {/* 音標與新增〔推理〕按鈕（音標後重播功能已拿掉） */}
            <div className="flex items-center justify-center gap-2.5 flex-wrap pt-1">
              {word.ipa && (
                <button
                  type="button"
                  onClick={onPlayWord}
                  className="inline-flex items-center gap-1 text-sm sm:text-base text-blue-800 bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 font-mono font-bold px-3 py-1 rounded-full transition-colors cursor-pointer shadow-2xs"
                  title="點擊聽發音"
                >
                  <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>[{word.ipa}]</span>
                </button>
              )}

              {/* 新增〔推理〕點擊可顯示發音推理內容 */}
              <button
                type="button"
                onClick={onOpenReasoningModal}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 hover:border-indigo-300 px-3.5 py-1 rounded-full transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
                title="點擊查看完整發音推導與規則依據"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>〔推理〕</span>
              </button>
            </div>
          </div>
        ) : (
          /* 中間預留留白空間，提示下一步 */
          <div className="flex flex-col items-center justify-center text-slate-300 py-4">
            <div className="w-12 h-1 bg-slate-100 rounded-full mb-2" />
            <span className="text-xs text-slate-400">
              {step === PracticeStep.WORD_SHOWN ? (
                '請先看單字思考發音與詞義，下一步揭曉中文'
              ) : (
                <span className="text-blue-600 font-medium flex items-center gap-1">
                  <Scissors className="w-3.5 h-3.5" />
                  按空白鍵展開音節切割與發音推導
                </span>
              )}
            </span>
          </div>
        )}
      </div>

      {/* 最後一行：中文 (Chinese Meaning at the very bottom line, revealed in Step 2) */}
      <div className="w-full pt-4 border-t border-slate-100 mt-auto min-h-[64px] flex items-center justify-center">
        {isChineseRevealed ? (
          <div className="flex items-center justify-center gap-2.5 animate-fade-in">
            {word.pos && (
              <span className="text-xs sm:text-sm font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                {word.pos}
              </span>
            )}
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-wide">
              {word.chinese}
            </p>
          </div>
        ) : (
          /* 中文未出現時的優雅佔位提示 */
          <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs sm:text-sm bg-slate-50 border border-dashed border-slate-200 rounded-full px-4 py-1.5">
            <Eye className="w-3.5 h-3.5 text-slate-400" />
            <span>最後一行 中文：點擊卡片或按 <kbd className="px-1.5 py-0.2 bg-white border border-slate-300 rounded text-slate-600 font-mono font-bold text-[11px]">空白鍵</kbd> 揭曉</span>
          </div>
        )}
      </div>
    </div>
  );
}
