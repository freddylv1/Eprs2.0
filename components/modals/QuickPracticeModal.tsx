'use client';

import React, { useState } from 'react';
import { WordItem, FontSizePreference } from '../../lib/types';
import { EPRS_PHONICS_RULES, ALL_RULE_CODES } from '../../lib/engine/phonicsRules';
import { audioManager } from '../../lib/audioManager';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import { X, Volume2, CheckCircle2, XCircle, RotateCcw, Award, Flame } from 'lucide-react';

interface QuickPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: WordItem[];
  fontSize?: FontSizePreference;
}

type PracticeMode = 'listen_word' | 'rule_identify' | 'syllable_count';

interface PracticeQuestion {
  word: WordItem;
  options: string[];
  correctAnswer: string;
}

/**
 * Fisher-Yates 隨機洗牌演算法
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function buildQuestions(wordList: WordItem[], mode: PracticeMode): PracticeQuestion[] {
  if (!wordList || wordList.length === 0) return [];

  // 隨機抽選題目
  const shuffledList = shuffleArray(wordList);
  const sample = shuffledList.slice(0, Math.min(20, shuffledList.length));

  return sample.map((item) => {
    if (mode === 'listen_word') {
      // 隨機選取 3 個干擾項，並隨機打亂 4 個選項的位置
      const otherWords = wordList.filter(w => w.word !== item.word);
      const randomDistractors = shuffleArray(otherWords).slice(0, 3).map(w => w.word);
      const options = shuffleArray([item.word, ...randomDistractors]);
      return {
        word: item,
        options,
        correctAnswer: item.word
      };
    }

    if (mode === 'rule_identify') {
      const correctRule = item.ruleCodes[0] || 'R001';
      const otherRules = ALL_RULE_CODES.filter(r => r !== correctRule);
      const randomDistractors = shuffleArray(otherRules).slice(0, 3);
      const options = shuffleArray([correctRule, ...randomDistractors]);
      return {
        word: item,
        options,
        correctAnswer: correctRule
      };
    }

    // syllable_count (音節數測驗)
    const countNum = item.syllables?.length || 1;
    const countStr = countNum.toString();
    const set = new Set<string>([countStr]);
    const candidates = ['1', '2', '3', '4', '5'].filter(c => c !== countStr);
    const shuffledCandidates = shuffleArray(candidates);
    for (const c of shuffledCandidates) {
      if (set.size < 4) {
        set.add(c);
      }
    }
    const options = shuffleArray(Array.from(set));
    return {
      word: item,
      options,
      correctAnswer: countStr
    };
  });
}

export function QuickPracticeModal({
  isOpen,
  onClose,
  words,
  fontSize = 'medium'
}: QuickPracticeModalProps) {
  const [mode, setMode] = useState<PracticeMode>('listen_word');
  const [questions, setQuestions] = useState<PracticeQuestion[]>(() => buildQuestions(words, 'listen_word'));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [history, setHistory] = useState<{ word: string; correct: boolean }[]>([]);

  const typo = getModalFontSizeClasses(fontSize);

  // 當切換模式或打開時重新生題
  const handleSwitchMode = (newMode: PracticeMode) => {
    setMode(newMode);
    const newQuestions = buildQuestions(words, newMode);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setHistory([]);
  };

  const currentQ = questions[currentIndex];

  // 播放當前單字發音
  const handlePlayCurrent = React.useCallback(() => {
    if (currentQ?.word) {
      audioManager.speakWord(currentQ.word.word);
    }
  }, [currentQ]);

  const handleSelectOption = React.useCallback((option: string) => {
    if (isAnswered || !currentQ) return;

    setSelectedOption(option);
    setIsAnswered(true);

    let isCorrect = false;
    if (mode === 'listen_word') {
      isCorrect = option === currentQ.correctAnswer;
    } else if (mode === 'rule_identify') {
      // 只要選到單字所適用的任一規則都算對，或等於標準答案
      isCorrect = (currentQ.word.ruleCodes || []).includes(option) || option === currentQ.correctAnswer;
    } else if (mode === 'syllable_count') {
      isCorrect = option === currentQ.correctAnswer;
    }

    if (isCorrect) {
      setScore(s => s + 10 + streak * 2);
      setStreak(st => st + 1);
      setHistory(h => [...h, { word: currentQ.word.word, correct: true }]);
    } else {
      setStreak(0);
      setHistory(h => [...h, { word: currentQ.word.word, correct: false }]);
    }
  }, [currentQ, isAnswered, mode, streak]);

  const handleNext = React.useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // 測驗結束畫面
      setCurrentIndex(questions.length);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = () => {
    handleSwitchMode(mode);
  };

  // 進到聽音辨字題目時自動播放第一次發音
  React.useEffect(() => {
    if (isOpen && mode === 'listen_word' && currentQ && !isAnswered) {
      const timer = setTimeout(() => {
        handlePlayCurrent();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, mode, currentIndex, currentQ, isAnswered, handlePlayCurrent]);

  // 鍵盤支援
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' && mode === 'listen_word') {
        e.preventDefault();
        handlePlayCurrent();
      } else if (e.key === 'Enter' && isAnswered) {
        e.preventDefault();
        handleNext();
      } else if (!isAnswered && ['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        if (currentQ && currentQ.options[idx]) {
          handleSelectOption(currentQ.options[idx]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isAnswered, currentQ, mode, handlePlayCurrent, handleNext, handleSelectOption, onClose]);

  if (!isOpen) return null;

  if (!questions || questions.length === 0) {
    return (
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4"
      >
        <div className="rounded-3xl bg-white p-6 dark:bg-slate-900 text-center">
          <p className={`${typo.body} text-slate-500`}>當前批次無可用單字</p>
          <button onClick={onClose} className={`mt-4 rounded-xl bg-indigo-600 ${typo.button} text-white cursor-pointer`}>
            關閉
          </button>
        </div>
      </div>
    );
  }

  const isCompleted = currentIndex >= questions.length;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-2 sm:p-6 overflow-y-auto"
    >
      <div className="relative flex h-[92vh] sm:h-auto max-h-[92vh] w-full max-w-2xl flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3 sm:px-6 sm:py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
              <Award className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <h2 className={`${typo.title} text-slate-900 dark:text-white`}>
                自然發音拼讀測驗
              </h2>
              <div className={`flex items-center gap-1.5 sm:gap-2 ${typo.subtext} text-slate-500 dark:text-slate-400`}>
                <span>第 {Math.min(currentIndex + 1, questions.length)} / {questions.length} 題</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 text-amber-600 dark:text-amber-400 font-semibold">
                  <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> 連續: {streak}
                </span>
                <span>•</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">得分: {score}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mode Selector */}
        {!isCompleted && (
          <div className="shrink-0 flex border-b border-slate-100 bg-slate-50/40 px-3 py-2 sm:px-6 sm:py-2.5 dark:border-slate-800 dark:bg-slate-800/30 gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleSwitchMode('listen_word')}
              className={`shrink-0 rounded-lg ${typo.badge} font-semibold transition cursor-pointer ${
                mode === 'listen_word'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              聽音辨字
            </button>
            <button
              onClick={() => handleSwitchMode('rule_identify')}
              className={`shrink-0 rounded-lg ${typo.badge} font-semibold transition cursor-pointer ${
                mode === 'rule_identify'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              法則判斷
            </button>
            <button
              onClick={() => handleSwitchMode('syllable_count')}
              className={`shrink-0 rounded-lg ${typo.badge} font-semibold transition cursor-pointer ${
                mode === 'syllable_count'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              音節計數
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {isCompleted ? (
            /* Result Screen */
            <div className="py-6 text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h3 className={`${typo.largeWord} text-slate-900 dark:text-white`}>
                  測驗完成！本次總得分: {score}
                </h3>
                <p className={`${typo.subtext} text-slate-500 dark:text-slate-400 mt-1`}>
                  完成 {questions.length} 題，正確率 {Math.round((history.filter(h => h.correct).length / questions.length) * 100)}%
                </p>
              </div>

              {/* Score breakdown pills */}
              <div className="flex justify-center gap-3">
                <div className={`rounded-xl border border-emerald-200 bg-emerald-50 ${typo.badge} font-bold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950 dark:text-emerald-300`}>
                  答對: {history.filter(h => h.correct).length} 題
                </div>
                <div className={`rounded-xl border border-rose-200 bg-rose-50 ${typo.badge} font-bold text-rose-700 dark:border-rose-900/60 dark:bg-rose-950 dark:text-rose-300`}>
                  需複習: {history.filter(h => !h.correct).length} 題
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className={`inline-flex items-center gap-2 rounded-xl bg-indigo-600 ${typo.button} font-semibold text-white hover:bg-indigo-500 shadow-xs cursor-pointer`}
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>再練一次</span>
                </button>
                <button
                  onClick={onClose}
                  className={`rounded-xl border border-slate-200 ${typo.button} font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 cursor-pointer`}
                >
                  結束並返回
                </button>
              </div>
            </div>
          ) : (
            /* Active Question Screen */
            <div className="space-y-4 sm:space-y-5">
              {/* Question Banner */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 text-center dark:border-slate-800 dark:bg-slate-800/40">
                {mode === 'listen_word' && (
                  <div>
                    <span className={`${typo.subtext} font-medium text-slate-400 uppercase tracking-wider`}>
                      聽發音並選出對應英文單字
                    </span>
                    <div className="mt-2.5 flex items-center justify-center gap-3">
                      <button
                        onClick={handlePlayCurrent}
                        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md hover:bg-indigo-500 hover:scale-105 transition cursor-pointer"
                        title="再次播放單字發音"
                      >
                        <Volume2 className="h-6 w-6 sm:h-7 sm:w-7" />
                      </button>
                    </div>
                    <p className={`mt-2.5 ${typo.body} text-slate-600 dark:text-slate-300 font-medium`}>
                      中文提示: {currentQ.word.chinese}
                    </p>
                  </div>
                )}

                {mode === 'rule_identify' && (
                  <div>
                    <span className={`${typo.subtext} font-medium text-slate-400 uppercase tracking-wider`}>
                      請判斷此單字最符合的自然發音法則
                    </span>
                    <div className={`mt-1.5 ${typo.largeWord} font-mono text-slate-900 dark:text-white`}>
                      {currentQ.word.word}
                    </div>
                    <div className={`mt-1 flex items-center justify-center gap-2 font-mono text-indigo-600 dark:text-indigo-400 ${typo.ipa}`}>
                      <span>{currentQ.word.ipa}</span>
                      <span>•</span>
                      <span>{currentQ.word.chinese}</span>
                    </div>
                  </div>
                )}

                {mode === 'syllable_count' && (
                  <div>
                    <span className={`${typo.subtext} font-medium text-slate-400 uppercase tracking-wider`}>
                      請判斷此單字包含幾個音節？
                    </span>
                    <div className={`mt-1.5 ${typo.largeWord} font-mono text-slate-900 dark:text-white`}>
                      {currentQ.word.word}
                    </div>
                    <div className={`mt-1 font-mono text-indigo-600 dark:text-indigo-400 ${typo.ipa}`}>
                      {currentQ.word.ipa}
                    </div>
                  </div>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle =
                    'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-indigo-700';

                  if (isAnswered) {
                    let isThisCorrect = false;
                    if (mode === 'listen_word') isThisCorrect = opt === currentQ.correctAnswer;
                    else if (mode === 'rule_identify') isThisCorrect = (currentQ.word.ruleCodes || []).includes(opt) || opt === currentQ.correctAnswer;
                    else if (mode === 'syllable_count') isThisCorrect = opt === currentQ.correctAnswer;

                    if (isThisCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200 font-bold shadow-xs';
                    } else if (opt === selectedOption) {
                      btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200';
                    } else {
                      btnStyle = 'opacity-40 border-slate-200 bg-slate-50 dark:bg-slate-800';
                    }
                  }

                  let displayText = opt;
                  if (mode === 'rule_identify') {
                    const r = EPRS_PHONICS_RULES[opt];
                    displayText = `${opt} - ${r?.name || ''}`;
                  } else if (mode === 'syllable_count') {
                    displayText = `${opt} 個音節`;
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt)}
                      disabled={isAnswered}
                      className={`flex items-center justify-between rounded-xl sm:rounded-2xl border p-3.5 sm:p-4 text-left ${typo.body} font-semibold transition cursor-pointer ${btnStyle}`}
                    >
                      <span className="leading-snug">{displayText}</span>
                      {isAnswered && (
                        <span className="shrink-0 ml-2">
                          {((mode === 'listen_word' && opt === currentQ.correctAnswer) ||
                          (mode === 'rule_identify' && ((currentQ.word.ruleCodes || []).includes(opt) || opt === currentQ.correctAnswer)) ||
                          (mode === 'syllable_count' && opt === currentQ.correctAnswer)) ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                          ) : opt === selectedOption ? (
                            <XCircle className="h-5 w-5 text-rose-600" />
                          ) : null}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation & Next Button: Sticky Bottom on Mobile to prevent being obscured */}
              {isAnswered && (
                <div className="sticky bottom-0 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-3 sm:p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-indigo-100 dark:border-indigo-950 shadow-lg z-20 transition flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="w-full sm:w-auto text-left">
                    <div className={`${typo.title} text-indigo-950 dark:text-indigo-200`}>
                      正確答案：{currentQ.word.word} <span className={`font-mono text-indigo-600 dark:text-indigo-400 ${typo.ipa}`}>({currentQ.word.ipa})</span>
                    </div>
                    <div className={`${typo.subtext} text-slate-600 dark:text-slate-300 mt-0.5`}>
                      音節拆解: [{(currentQ.word.syllables || [currentQ.word.word]).join(' - ')}] • 適用法則:{' '}
                      {currentQ.word.ruleCodes.join(', ')}
                    </div>
                  </div>
                  <button
                    onClick={handleNext}
                    className={`w-full sm:w-auto shrink-0 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 ${typo.button} font-bold text-white shadow-md transition cursor-pointer text-center flex items-center justify-center gap-1.5`}
                  >
                    <span>下一題</span>
                    <span>➔</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
