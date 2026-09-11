'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { WordItem } from '../../lib/types';
import { audioManager } from '../../lib/audioManager';
import { getPhonicsRule } from '../../lib/engine/phonicsRules';
import { getRuleColorBadge, generateWordMatrix } from '../../lib/engine/phonicsEngine';
import {
  X,
  Volume2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  Zap,
  BookOpen,
  CheckCircle2,
  Grid
} from 'lucide-react';

export interface EPRSPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: WordItem[];
  batchTitle?: string;
  onOpenRuleDetail: (ruleId: string) => void;
  onOpenWordMatrix: (word: WordItem) => void;
}

export enum PracticeStep {
  WORD_SHOWN = 0,      // 單字出現，中文與音標留白
  CHINESE_SHOWN = 1,   // 中文釋義揭露
  SYLLABLES_SHOWN = 2, // 音節拆解、IPA音標、發音法則展開
  AUDIO_1_PLAYED = 3,  // 第 1 次發音播放
  AUDIO_2_PLAYED = 4   // 第 2 次發音播放完成，準備下一字
}

export function EPRSPracticeModal({
  isOpen,
  onClose,
  words,
  batchTitle = '單字學習批次',
  onOpenRuleDetail,
  onOpenWordMatrix
}: EPRSPracticeModalProps) {
  const WORDS_PER_UNIT = 20;
  const totalUnits = Math.max(1, Math.ceil(words.length / WORDS_PER_UNIT));
  const [selectedUnit, setSelectedUnit] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [step, setStep] = useState<PracticeStep>(PracticeStep.WORD_SHOWN);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioStage, setAudioStage] = useState<number>(0);

  // Unit Words
  const unitWords = React.useMemo(() => {
    if (!words || words.length === 0) return [];
    const start = (selectedUnit - 1) * WORDS_PER_UNIT;
    return words.slice(start, start + WORDS_PER_UNIT);
  }, [words, selectedUnit]);

  const currentWord: WordItem | undefined = unitWords[currentIndex] || unitWords[0];

  const resetToWord = useCallback((index: number) => {
    setCurrentIndex(index);
    setStep(PracticeStep.WORD_SHOWN);
    setAudioStage(0);
    setIsPlayingAudio(false);
  }, []);

  const handleSelectUnit = (unit: number) => {
    setSelectedUnit(unit);
    resetToWord(0);
  };

  const triggerAudio = useCallback((stageNumber: number) => {
    if (!currentWord) return;
    setIsPlayingAudio(true);
    audioManager.speakWord(currentWord.word, () => {
      setIsPlayingAudio(false);
      setAudioStage(stageNumber);
    });
  }, [currentWord]);

  // Advance to next phase
  const handleAdvance = useCallback(() => {
    if (isPlayingAudio || !currentWord) return;

    if (step === PracticeStep.WORD_SHOWN) {
      setStep(PracticeStep.CHINESE_SHOWN);
    } else if (step === PracticeStep.CHINESE_SHOWN) {
      setStep(PracticeStep.SYLLABLES_SHOWN);
    } else if (step === PracticeStep.SYLLABLES_SHOWN) {
      setStep(PracticeStep.AUDIO_1_PLAYED);
      triggerAudio(1);
    } else if (step === PracticeStep.AUDIO_1_PLAYED) {
      setStep(PracticeStep.AUDIO_2_PLAYED);
      triggerAudio(2);
    } else if (step === PracticeStep.AUDIO_2_PLAYED) {
      // Move to next word in unit
      if (currentIndex < unitWords.length - 1) {
        resetToWord(currentIndex + 1);
      } else {
        // Completed unit
        if (selectedUnit < totalUnits) {
          setSelectedUnit(u => u + 1);
          resetToWord(0);
        } else {
          // Restart unit
          resetToWord(0);
        }
      }
    }
  }, [step, isPlayingAudio, currentWord, triggerAudio, currentIndex, unitWords.length, selectedUnit, totalUnits, resetToWord]);

  // Keyboard navigation (Space / ArrowRight to advance, ArrowLeft to go back)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        handleAdvance();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
          resetToWord(currentIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleAdvance, currentIndex, resetToWord, onClose]);

  if (!isOpen) return null;

  if (!currentWord || unitWords.length === 0) {
    return (
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4"
      >
        <div className="rounded-3xl bg-white p-6 dark:bg-slate-900 text-center">
          <p className="text-sm text-slate-500">當前批次無可用單字資料</p>
          <button onClick={onClose} className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-xs text-white cursor-pointer">
            關閉
          </button>
        </div>
      </div>
    );
  }

  const syllables = currentWord.syllables?.length > 0 ? currentWord.syllables : [currentWord.word];
  const matrix = generateWordMatrix(currentWord);

  const isChineseRevealed = step >= PracticeStep.CHINESE_SHOWN;
  const isSyllablesRevealed = step >= PracticeStep.SYLLABLES_SHOWN;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-2xl flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 sm:py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>EPRS 快速練習模式</span>
                <span className="text-[10px] font-medium text-slate-400">
                  ({batchTitle})
                </span>
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Unit Tabs Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/40 px-4 py-2 sm:px-6 dark:border-slate-800 dark:bg-slate-800/30 overflow-x-auto gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400 font-medium">單元:</span>
            {Array.from({ length: totalUnits }, (_, i) => i + 1).map((u) => (
              <button
                key={u}
                onClick={() => handleSelectUnit(u)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                  selectedUnit === u
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                }`}
              >
                第 {u} 單元
              </button>
            ))}
          </div>

          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 shrink-0">
            {currentIndex + 1} / {unitWords.length} 字
          </div>
        </div>

        {/* Practice Card Body (Click anywhere to advance) */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
          <div
            onClick={handleAdvance}
            className="w-full rounded-2xl border-2 border-indigo-100 bg-gradient-to-b from-white to-slate-50/60 p-6 sm:p-8 shadow-xs dark:border-indigo-950 dark:from-slate-900 dark:to-slate-900/80 flex flex-col justify-between min-h-[360px] sm:min-h-[380px] cursor-pointer hover:border-indigo-300 transition select-none"
          >
            {/* Stage Progress Pills */}
            <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  ID: #{currentWord.id}
                </span>
                {currentWord.pos && (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {currentWord.pos}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                {isPlayingAudio ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full animate-pulse">
                    <Volume2 className="h-3 w-3" />
                    <span>朗讀中...</span>
                  </span>
                ) : audioStage > 0 ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <Volume2 className="h-3 w-3" />
                    <span>已播放 {audioStage} 次</span>
                  </span>
                ) : null}

                <div className="flex items-center gap-1 text-slate-400 font-medium text-[11px]">
                  <span className={`h-2 w-2 rounded-full ${step >= PracticeStep.WORD_SHOWN ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                  <span className={`h-2 w-2 rounded-full ${step >= PracticeStep.CHINESE_SHOWN ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                  <span className={`h-2 w-2 rounded-full ${step >= PracticeStep.SYLLABLES_SHOWN ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                  <span className={`h-2 w-2 rounded-full ${step >= PracticeStep.AUDIO_1_PLAYED ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                  <span className={`h-2 w-2 rounded-full ${step >= PracticeStep.AUDIO_2_PLAYED ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                  <span className="ml-1">階段 {step + 1} / 5</span>
                </div>
              </div>
            </div>

            {/* Word Primary Display */}
            <div className="py-4 text-center">
              <h3 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {currentWord.word}
              </h3>
            </div>

            {/* Middle Section: Syllable Chunks, IPA, Rules (Revealed at Step 2) */}
            <div className="min-h-[120px] flex flex-col items-center justify-center text-center">
              {isSyllablesRevealed ? (
                <div className="space-y-3 animate-fade-in w-full">
                  {/* Syllables Tiles */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {syllables.map((syl, sIdx) => {
                      const isPrimary = sIdx === matrix.primaryStressSyllableIndex;
                      return (
                        <span
                          key={sIdx}
                          className={`rounded-lg border px-3 py-1 font-mono text-sm font-bold shadow-xs ${
                            isPrimary
                              ? 'border-indigo-300 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                              : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                          }`}
                        >
                          {syl}
                        </span>
                      );
                    })}
                  </div>

                  {/* IPA Transcription */}
                  <div className="font-mono text-base font-bold text-indigo-600 dark:text-indigo-400">
                    {currentWord.ipa}
                  </div>

                  {/* Rules Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    {currentWord.ruleCodes.map((rId) => {
                      const badge = getRuleColorBadge(rId);
                      const rule = getPhonicsRule(rId);
                      return (
                        <button
                          key={rId}
                          onClick={() => onOpenRuleDetail(rId)}
                          className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold transition hover:scale-105 ${badge.bg} ${badge.text} ${badge.border}`}
                          title="查看規則詳解"
                        >
                          {rId} {rule?.name?.split(' ')[0] || ''}
                        </button>
                      );
                    })}

                    <button
                      onClick={() => onOpenWordMatrix(currentWord)}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      <Grid className="h-3 w-3" />
                      <span>音節矩陣</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-300 dark:text-slate-700 italic">
                  ［ 點擊卡片逐步展開音節拆解、IPA 音標與發音推導 ］
                </div>
              )}
            </div>

            {/* Bottom: Chinese Meaning (Revealed at Step 1) */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-center min-h-[56px] flex items-center justify-center">
              {isChineseRevealed ? (
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-indigo-950 dark:text-indigo-100 animate-fade-in tracking-wide">
                  {currentWord.chinese}
                </div>
              ) : (
                <span className="text-sm font-medium text-slate-300 dark:text-slate-700">
                  ［ 點擊展開中文釋義 ］
                </span>
              )}
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (currentIndex > 0) resetToWord(currentIndex - 1);
              }}
              disabled={currentIndex <= 0}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 transition"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>上一個單字</span>
            </button>

            <button
              onClick={handleAdvance}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 shadow-md shadow-indigo-500/20 transition"
            >
              <span>
                {step === PracticeStep.WORD_SHOWN
                  ? '展開中文 (1/5)'
                  : step === PracticeStep.CHINESE_SHOWN
                  ? '展開音節與音標 (2/5)'
                  : step === PracticeStep.SYLLABLES_SHOWN
                  ? '播放發音 1 (3/5)'
                  : step === PracticeStep.AUDIO_1_PLAYED
                  ? '播放發音 2 (4/5)'
                  : '下一個單字 ➔'}
              </span>
              <ChevronRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => resetToWord(currentIndex)}
              className="rounded-xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              title="重新練習本字"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
