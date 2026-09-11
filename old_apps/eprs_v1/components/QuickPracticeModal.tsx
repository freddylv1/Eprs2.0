'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { 
  X, 
  Volume2, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  CheckCircle, 
  Sparkles,
  Layers,
  Zap,
  ChevronRight,
  Headphones,
  Eye,
  Scissors
} from 'lucide-react';
import { BatchWord } from '@/lib/batch01Data';
import { PracticeWord, PracticeStep } from './quick-practice/types';
import { PracticeAudioService } from './quick-practice/audioService';
import PracticeCard from './quick-practice/PracticeCard';
import SyllableExplainerModal from './quick-practice/SyllableExplainerModal';
import PronunciationReasoningModal from './quick-practice/PronunciationReasoningModal';

export interface QuickPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: (BatchWord & { pos?: string })[];
  batchTitle?: string;
  initialUnit?: number; // 1-based, default 1
  onOpenRuleModal?: (ruleCode: string) => void;
}

export default function QuickPracticeModal({
  isOpen,
  onClose,
  words,
  batchTitle = '單字學習批次',
  initialUnit = 1,
  onOpenRuleModal,
}: QuickPracticeModalProps) {
  const WORDS_PER_UNIT = 20;
  const totalUnits = Math.max(1, Math.ceil(words.length / WORDS_PER_UNIT));
  const [selectedUnit, setSelectedUnit] = useState<number>(initialUnit);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // 0 to 19 within unit
  
  // 5-Stage Practice Machine:
  // Step 0 (WORD_SHOWN): 單字出現，中文未出現，中間保留留白
  // Step 1 (CHINESE_SHOWN): 最後一行中文出現（單字與中文分兩次出現）
  // Step 2 (SYLLABLES_SHOWN): 中間展開音節切割、音標、〔推理〕
  // Step 3 (AUDIO_1_PLAYED): 第 1 次發音完成
  // Step 4 (AUDIO_2_PLAYED): 第 2 次發音完成
  const [step, setStep] = useState<PracticeStep>(PracticeStep.WORD_SHOWN);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioStage, setAudioStage] = useState<number>(0); // 0, 1, 2
  const [isUnitFinished, setIsUnitFinished] = useState<boolean>(false);

  // Sub-modals state
  const [activeSyllable, setActiveSyllable] = useState<string | null>(null);
  const [isSyllableModalOpen, setIsSyllableModalOpen] = useState<boolean>(false);
  const [isReasoningModalOpen, setIsReasoningModalOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Sync initialUnit if prop changes
  const [prevInitialUnit, setPrevInitialUnit] = useState(initialUnit);
  if (initialUnit !== prevInitialUnit) {
    setPrevInitialUnit(initialUnit);
    if (initialUnit >= 1 && initialUnit <= totalUnits) {
      setSelectedUnit(initialUnit);
      setCurrentIndex(0);
      setStep(PracticeStep.WORD_SHOWN);
      setAudioStage(0);
      setIsPlayingAudio(false);
      setIsUnitFinished(false);
    }
  }

  // Calculate current unit words
  const unitWords = useMemo(() => {
    const start = (selectedUnit - 1) * WORDS_PER_UNIT;
    return words.slice(start, start + WORDS_PER_UNIT);
  }, [words, selectedUnit]);

  // Current active word
  const currentWord: PracticeWord | undefined = unitWords[currentIndex] || unitWords[0];

  // Reset steps when changing word or unit
  const resetToWord = useCallback((index: number) => {
    PracticeAudioService.stop();
    setCurrentIndex(index);
    setStep(PracticeStep.WORD_SHOWN);
    setAudioStage(0);
    setIsPlayingAudio(false);
    setIsUnitFinished(false);
    setIsSyllableModalOpen(false);
    setIsReasoningModalOpen(false);
  }, []);

  const handleSelectUnit = useCallback((unit: number) => {
    setSelectedUnit(unit);
    resetToWord(0);
  }, [resetToWord]);

  // Play audio safely
  const triggerAudio = useCallback(async (stageNumber: number) => {
    if (!currentWord) return;
    setIsPlayingAudio(true);
    try {
      await PracticeAudioService.play(currentWord.word);
    } finally {
      setIsPlayingAudio(false);
      setAudioStage(stageNumber);
    }
  }, [currentWord]);

  // Primary action: Advance to the next phase
  const handleAdvance = useCallback(async () => {
    // If sub-modal is open or audio is playing/preparing, strictly forbid advancing!
    if (isSyllableModalOpen || isReasoningModalOpen || isPlayingAudio || PracticeAudioService.isBusy()) {
      return;
    }

    if (isUnitFinished) {
      if (selectedUnit < totalUnits) {
        handleSelectUnit(selectedUnit + 1);
      } else {
        onClose();
      }
      return;
    }

    if (!currentWord) return;

    // Step 0 -> Step 1: 揭曉中文（單字與中文分兩次出現）
    if (step === PracticeStep.WORD_SHOWN) {
      setStep(PracticeStep.CHINESE_SHOWN);
      return;
    }

    // Step 1 -> Step 2: 中間展開音節切割、音標、〔推理〕
    if (step === PracticeStep.CHINESE_SHOWN) {
      setStep(PracticeStep.SYLLABLES_SHOWN);
      return;
    }

    // Step 2 -> Step 3: 第 1 次發音
    if (step === PracticeStep.SYLLABLES_SHOWN) {
      setStep(PracticeStep.AUDIO_1_PLAYED);
      await triggerAudio(1);
      return;
    }

    // Step 3 -> Step 4: 第 2 次發音
    if (step === PracticeStep.AUDIO_1_PLAYED) {
      setStep(PracticeStep.AUDIO_2_PLAYED);
      await triggerAudio(2);
      return;
    }

    // Step 4 -> 下一個字 或 完成單元
    if (step === PracticeStep.AUDIO_2_PLAYED) {
      if (currentIndex < unitWords.length - 1) {
        resetToWord(currentIndex + 1);
      } else {
        setIsUnitFinished(true);
      }
    }
  }, [
    isSyllableModalOpen,
    isReasoningModalOpen,
    isUnitFinished,
    currentWord,
    step,
    selectedUnit,
    totalUnits,
    handleSelectUnit,
    onClose,
    triggerAudio,
    currentIndex,
    unitWords.length,
    resetToWord,
    isPlayingAudio,
  ]);

  // Sub-modal Openers
  const handleOpenSyllableModal = (syllable?: string) => {
    setActiveSyllable(syllable || null);
    setIsSyllableModalOpen(true);
  };

  const handleOpenReasoningModal = () => {
    setIsReasoningModalOpen(true);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // If a sub-modal is open, Escape will be caught by it
      if (isSyllableModalOpen || isReasoningModalOpen) {
        return;
      }

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleAdvance();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < unitWords.length - 1) {
          resetToWord(currentIndex + 1);
        }
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
          resetToWord(currentIndex - 1);
        }
      } else if (e.code === 'Escape') {
        e.preventDefault();
        PracticeAudioService.stop();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isOpen,
    isSyllableModalOpen,
    isReasoningModalOpen,
    handleAdvance,
    currentIndex,
    unitWords.length,
    resetToWord,
    onClose,
  ]);

  // Focus container on open
  useEffect(() => {
    if (isOpen) {
      containerRef.current?.focus();
    } else {
      PracticeAudioService.stop();
    }
  }, [isOpen]);

  if (!isOpen || !currentWord) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        ref={containerRef}
        tabIndex={0}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <span className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-base text-slate-100 tracking-tight">快速練習模式</h3>
                <span className="text-xs bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded-full">
                  每 20 單字為一單元
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {batchTitle} · 單元 {selectedUnit} / {totalUnits}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              PracticeAudioService.stop();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="關閉 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Selector Bar (每20單字為一單元) */}
        <div className="bg-slate-100/90 px-4 py-2 border-b border-slate-200 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-1.5 flex-nowrap">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap mr-1 flex items-center">
              <Layers className="w-3.5 h-3.5 mr-1 text-slate-400" /> 單元切換:
            </span>
            {Array.from({ length: totalUnits }).map((_, idx) => {
              const uNum = idx + 1;
              const isCurr = uNum === selectedUnit;
              const startNum = idx * WORDS_PER_UNIT + 1;
              const endNum = Math.min((idx + 1) * WORDS_PER_UNIT, words.length);
              return (
                <button
                  key={uNum}
                  type="button"
                  onClick={() => handleSelectUnit(uNum)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isCurr 
                      ? 'bg-blue-700 text-white shadow-xs font-bold' 
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  單元 {uNum} ({startNum}-{endNum})
                </button>
              );
            })}
          </div>

          {/* Progress badge */}
          <div className="text-xs font-semibold text-slate-600 pl-3 whitespace-nowrap">
            進度: <span className="text-blue-700 font-bold">{currentIndex + 1}</span> / {unitWords.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + (isUnitFinished ? 1 : step / 5)) / unitWords.length) * 100}%` }}
          />
        </div>

        {/* Practice Content Area */}
        {!isUnitFinished ? (
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-50/50">
            {/* The Modular Practice Card */}
            <PracticeCard
              word={currentWord}
              currentIndex={currentIndex}
              totalWords={unitWords.length}
              step={step}
              onAdvance={handleAdvance}
              onOpenSyllableModal={handleOpenSyllableModal}
              onOpenReasoningModal={handleOpenReasoningModal}
              onPlayWord={() => triggerAudio(audioStage || 1)}
              isPlayingAudio={isPlayingAudio}
              audioStage={audioStage}
            />

            {/* Instruction and Keyboard Hints */}
            <div className="mt-4 w-full flex items-center justify-between text-xs sm:text-sm px-1">
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 flex items-center">
                  <Headphones className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  點擊音節看切分說明 · 點擊〔推理〕看發音演算法
                </span>
              </div>

              <div className="text-slate-500 font-medium hidden sm:block">
                推進按鍵: <kbd className="px-1.5 py-0.5 bg-slate-200 rounded text-slate-700 font-mono font-bold">空白鍵 Space</kbd> 或 <kbd className="px-1.5 py-0.5 bg-slate-200 rounded text-slate-700 font-mono font-bold">Enter</kbd>
              </div>
            </div>
          </div>
        ) : (
          /* Unit Finished Celebration Screen */
          <div className="p-8 flex flex-col items-center justify-center text-center min-h-[380px] bg-gradient-to-b from-white to-blue-50/50">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-xs border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-1">
              單元 {selectedUnit} 練習完成！
            </h3>
            <p className="text-sm text-slate-600 max-w-md mb-6">
              恭喜您完成本單元 20 個單字的音節切割與發音推導練習！
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg mb-6 max-h-40 overflow-y-auto p-2 bg-white rounded-xl border border-slate-200">
              {unitWords.map((w, idx) => (
                <div 
                  key={w.id || idx}
                  className="p-1.5 bg-slate-50 rounded border border-slate-200 text-left text-xs"
                >
                  <div className="font-bold text-slate-800 truncate">{w.word}</div>
                  <div className="text-slate-500 text-[11px] truncate">{w.chinese}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => resetToWord(0)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-all flex items-center shadow-xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 mr-1.5" /> 重新練習本單元
              </button>

              {selectedUnit < totalUnits ? (
                <button
                  type="button"
                  onClick={() => handleSelectUnit(selectedUnit + 1)}
                  className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-all shadow-xs flex items-center cursor-pointer"
                >
                  進入下一單元 ({selectedUnit + 1}) <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm transition-all shadow-xs cursor-pointer"
                >
                  完成並結束練習
                </button>
              )}
            </div>
          </div>
        )}

        {/* Bottom Interactive Control Footer */}
        <div className="bg-slate-50 px-5 py-4 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => currentIndex > 0 && resetToWord(currentIndex - 1)}
              disabled={currentIndex === 0 || isUnitFinished}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> 上一個字
            </button>

            <button
              type="button"
              onClick={() => triggerAudio(audioStage || 1)}
              disabled={isUnitFinished || isPlayingAudio || PracticeAudioService.isBusy()}
              className="px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center shadow-xs cursor-pointer"
              title="單獨播放發音"
            >
              <Volume2 className="w-3.5 h-3.5 mr-1" /> {isPlayingAudio ? '發音中...' : '重播發音'}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {/* Primary Step Execution Button */}
            {!isUnitFinished ? (
              <button
                type="button"
                onClick={handleAdvance}
                disabled={isPlayingAudio || PracticeAudioService.isBusy()}
                className="px-5 sm:px-6 py-2.5 bg-blue-700 hover:bg-blue-800 disabled:bg-slate-400 disabled:cursor-not-allowed active:scale-98 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>
                  {isPlayingAudio ? (
                    '⏳ 發音中請稍候...'
                  ) : (
                    <>
                      {step === PracticeStep.WORD_SHOWN && '👁️ 揭曉中文 (空白鍵)'}
                      {step === PracticeStep.CHINESE_SHOWN && '✂️ 展開音節與推理 (空白鍵)'}
                      {step === PracticeStep.SYLLABLES_SHOWN && '🔊 第一次發音 (空白鍵)'}
                      {step === PracticeStep.AUDIO_1_PLAYED && '🔊 第二次發音 (空白鍵)'}
                      {step === PracticeStep.AUDIO_2_PLAYED && '進入下一個字 ➔ (空白鍵)'}
                    </>
                  )}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl text-sm shadow-xs transition-all cursor-pointer"
              >
                結束練習
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Syllable Explainer Sub-Modal */}
      <SyllableExplainerModal
        isOpen={isSyllableModalOpen}
        onClose={() => setIsSyllableModalOpen(false)}
        word={currentWord}
        activeSyllable={activeSyllable || undefined}
        onPlayAudio={() => triggerAudio(audioStage || 1)}
      />

      {/* Pronunciation Reasoning Sub-Modal */}
      <PronunciationReasoningModal
        isOpen={isReasoningModalOpen}
        onClose={() => setIsReasoningModalOpen(false)}
        word={currentWord}
        onOpenRuleModal={(code) => {
          setIsReasoningModalOpen(false);
          if (onOpenRuleModal) {
            onOpenRuleModal(code);
          }
        }}
        onPlayAudio={() => triggerAudio(audioStage || 1)}
      />
    </div>
  );
}
