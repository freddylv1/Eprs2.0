'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { WordItem, FontSizePreference } from '../../lib/types';
import { audioManager } from '../../lib/audioManager';
import { getPhonicsRule } from '../../lib/engine/phonicsRules';
import { getRuleColorBadge, generateWordMatrix } from '../../lib/engine/phonicsEngine';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import {
  X,
  Volume2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Zap,
  Grid
} from 'lucide-react';

export interface EPRSPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: WordItem[];
  batchTitle?: string;
  onOpenRuleDetail: (ruleId: string) => void;
  onOpenWordMatrix: (word: WordItem) => void;
  fontSize?: FontSizePreference;
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
  onOpenWordMatrix,
  fontSize = 'medium'
}: EPRSPracticeModalProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<PracticeStep>(PracticeStep.WORD_SHOWN);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [, setCompletedCount] = useState<number>(0);

  const typo = getModalFontSizeClasses(fontSize);

  const activeWord = words && words.length > 0 ? words[currentIndex] : null;
  const wordMatrix = activeWord ? generateWordMatrix(activeWord) : null;

  // Handle Play Audio
  const playCurrentWordAudio = useCallback((onFinished?: () => void) => {
    if (!activeWord) return;
    setIsPlayingAudio(true);
    audioManager.speakWord(activeWord.word, () => {
      setIsPlayingAudio(false);
      onFinished?.();
    });
  }, [activeWord]);

  const handleNextWord = useCallback(() => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setCurrentStep(PracticeStep.WORD_SHOWN);
      setCompletedCount(prev => Math.max(prev, currentIndex + 1));
    } else {
      setCompletedCount(words.length);
    }
  }, [currentIndex, words.length]);

  const handlePrevWord = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setCurrentStep(PracticeStep.WORD_SHOWN);
    }
  }, [currentIndex]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setCurrentStep(PracticeStep.WORD_SHOWN);
    setCompletedCount(0);
  };

  // Progress to next micro-step in 5-stage learning
  const handleNextStep = useCallback(() => {
    if (!activeWord) return;

    if (currentStep === PracticeStep.WORD_SHOWN) {
      setCurrentStep(PracticeStep.CHINESE_SHOWN);
    } else if (currentStep === PracticeStep.CHINESE_SHOWN) {
      setCurrentStep(PracticeStep.SYLLABLES_SHOWN);
    } else if (currentStep === PracticeStep.SYLLABLES_SHOWN) {
      setCurrentStep(PracticeStep.AUDIO_1_PLAYED);
      playCurrentWordAudio();
    } else if (currentStep === PracticeStep.AUDIO_1_PLAYED) {
      setCurrentStep(PracticeStep.AUDIO_2_PLAYED);
      playCurrentWordAudio();
    } else if (currentStep === PracticeStep.AUDIO_2_PLAYED) {
      handleNextWord();
    }
  }, [activeWord, currentStep, handleNextWord, playCurrentWordAudio]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleNextStep();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextWord();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevWord();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNextStep, handleNextWord, handlePrevWord, onClose]);

  if (!isOpen || !activeWord) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-2xl flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 sm:py-4 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className={`${typo.title} text-slate-900 dark:text-white`}>
                  EPRS 5 階段漸進拼讀記憶卡
                </h2>
                <span className={`rounded-md bg-amber-100 dark:bg-amber-950/60 ${typo.tag} font-bold text-amber-800 dark:text-amber-300`}>
                  {currentIndex + 1} / {words.length}
                </span>
              </div>
              <p className={`${typo.subtext} text-slate-500 dark:text-slate-400`}>
                {batchTitle} • 單字 ➔ 釋義 ➔ 音節矩陣 ➔ 雙重朗讀強化
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

        {/* 5-Step Progress Indicators Bar */}
        <div className="grid grid-cols-5 gap-1 bg-slate-100 p-2 dark:bg-slate-800/60 border-b border-slate-200/60 dark:border-slate-800">
          {[
            { step: PracticeStep.WORD_SHOWN, label: '1.看單字' },
            { step: PracticeStep.CHINESE_SHOWN, label: '2.解中文' },
            { step: PracticeStep.SYLLABLES_SHOWN, label: '3.音節拆解' },
            { step: PracticeStep.AUDIO_1_PLAYED, label: '4.初次發音' },
            { step: PracticeStep.AUDIO_2_PLAYED, label: '5.強化複誦' }
          ].map((s) => {
            const isDone = currentStep >= s.step;
            const isCurrent = currentStep === s.step;
            return (
              <div
                key={s.step}
                className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] sm:text-xs font-semibold transition ${
                  isCurrent
                    ? 'bg-amber-500 text-white shadow-xs font-bold'
                    : isDone
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                    : 'bg-white/50 text-slate-400 dark:bg-slate-800/40'
                }`}
              >
                <span>{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* Card Body */}
        <div className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-6 text-center flex flex-col justify-center min-h-[300px]">
          {/* Step 1: Word Display */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className={`${typo.largeWord} font-mono tracking-tight text-slate-900 dark:text-white`}>
                {activeWord.word}
              </span>
              {activeWord.pos && (
                <span className={`rounded-md bg-slate-100 px-2 py-0.5 ${typo.tag} font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300`}>
                  {activeWord.pos}
                </span>
              )}
            </div>
          </div>

          {/* Step 2: Chinese Definition */}
          <div className={`transition-all duration-300 ${currentStep >= PracticeStep.CHINESE_SHOWN ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <div className="inline-block rounded-2xl bg-amber-50/80 px-6 py-2.5 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-900/60">
              <span className={`${typo.body} font-bold text-amber-900 dark:text-amber-200`}>
                {activeWord.chinese}
              </span>
            </div>
          </div>

          {/* Step 3: Syllable Tiles & Rules */}
          <div className={`transition-all duration-300 ${currentStep >= PracticeStep.SYLLABLES_SHOWN ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-800/40 space-y-3">
              {/* Syllable Segments */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {wordMatrix?.cells.map((cell, cIdx) => {
                  const isPrimary = cell.stressType === 'primary';
                  return (
                    <div
                      key={cIdx}
                      className={`flex flex-col items-center justify-center rounded-xl border px-3.5 py-2 ${
                        isPrimary
                          ? 'border-amber-400 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/60 ring-2 ring-amber-300'
                          : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
                      }`}
                    >
                      <span className={`${typo.title} font-mono text-slate-900 dark:text-white`}>
                        {cell.syllableText}
                      </span>
                      {cell.ipaSegment && (
                        <span className={`${typo.ipa} font-semibold text-amber-600 dark:text-amber-400`}>
                          {cell.ipaSegment}
                        </span>
                      )}
                      <span className={`${typo.tag} font-bold text-slate-500`}>
                        {isPrimary ? '主重音' : cell.stressType === 'secondary' ? '次重音' : '弱讀'}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Matched Rules */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                {activeWord.ruleCodes.map((ruleId) => {
                  const badge = getRuleColorBadge(ruleId);
                  const r = getPhonicsRule(ruleId);
                  return (
                    <button
                      key={ruleId}
                      onClick={() => {
                        onClose();
                        onOpenRuleDetail(ruleId);
                      }}
                      className={`rounded-lg border ${typo.badge} font-semibold transition hover:scale-105 cursor-pointer ${badge.bg} ${badge.text} ${badge.border}`}
                    >
                      {ruleId}: {r?.name?.split(' ')[0] || ''}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 4 & 5: Audio Feedback Indicator */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => playCurrentWordAudio()}
              className={`flex items-center gap-2 rounded-2xl bg-amber-500 ${typo.button} font-bold text-white shadow-md hover:bg-amber-600 transition cursor-pointer ${
                isPlayingAudio ? 'ring-4 ring-amber-300 animate-pulse scale-105' : ''
              }`}
            >
              <Volume2 className="h-5 w-5" />
              <span>
                {currentStep >= PracticeStep.AUDIO_2_PLAYED
                  ? '再次播放發音'
                  : currentStep >= PracticeStep.AUDIO_1_PLAYED
                  ? '播放第 2 次強化發音'
                  : '朗讀標準發音'}
              </span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenWordMatrix(activeWord);
              }}
              className={`flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white ${typo.button} font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer`}
              title="查看音節矩陣"
            >
              <Grid className="h-4 w-4 text-indigo-500" />
              <span>矩陣詳解</span>
            </button>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 sm:py-4 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevWord}
              disabled={currentIndex <= 0}
              className={`flex items-center gap-1 rounded-xl border border-slate-200 bg-white ${typo.button} font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>上一個</span>
            </button>

            <button
              onClick={handleRestart}
              className={`p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`}
              title="重頭開始"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleNextStep}
              className={`flex items-center gap-2 rounded-xl bg-indigo-600 ${typo.button} font-bold text-white shadow-md hover:bg-indigo-500 transition cursor-pointer`}
            >
              <span>{currentStep === PracticeStep.AUDIO_2_PLAYED ? '下一個單字' : '下一步 (空白鍵/Enter)'}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
