'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { SongItem, SongLine, ALL_SONGS, getFormattedSongTitle } from '../../lib/songData';
import { audioManager } from '../../lib/audioManager';
import { FontSizePreference } from '../../lib/types';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Volume2,
  ArrowRight,
  Trophy,
  Sparkles,
  Music,
  Check,
  Zap,
  Play
} from 'lucide-react';

interface SongQuizPracticeProps {
  song: SongItem;
  fontSize: FontSizePreference;
}

interface QuizQuestion {
  line: SongLine;
  songTitle: string;
  tokens: { id: string; word: string }[];
}

interface UserQuestionResult {
  question: QuizQuestion;
  userSentence: string;
  correctSentence: string;
  isCorrect: boolean;
}

export function SongQuizPractice({ song, fontSize }: SongQuizPracticeProps) {
  // 題數選擇: 5, 10, 20
  const [questionCountOption, setQuestionCountOption] = useState<number>(5);
  // 出題範圍: 'current' (當前歌曲) | 'all' (所有歌曲)
  const [scope, setScope] = useState<'current' | 'all'>('current');

  // 測驗狀態
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 當前題目作答狀態
  const [availableWords, setAvailableWords] = useState<{ id: string; word: string }[]>([]);
  const [selectedWords, setSelectedWords] = useState<{ id: string; word: string }[]>([]);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState<boolean>(false);

  // 測驗結果紀錄
  const [results, setResults] = useState<UserQuestionResult[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  // 乾淨規範化字串比對 (忽略大小寫與兩端點標點)
  const normalizeSentence = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()"'?]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // 生成單句的詞彙 Token List
  const tokenizeSentence = (sentence: string) => {
    // 依空格拆解單字
    const rawWords = sentence.trim().split(/\s+/);
    return rawWords.map((w, idx) => ({
      id: `tok-${idx}-${w}-${Math.random().toString(36).substring(2, 7)}`,
      word: w
    }));
  };

  // Fisher-Yates 洗牌演算法
  const shuffleArray = <T,>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // 載入指定題目狀態
  const loadQuestionState = useCallback((q: QuizQuestion) => {
    setSelectedWords([]);
    setIsConfirmed(false);
    setIsCurrentCorrect(false);

    // 打亂題目中的單字順序作為選項池
    const shuffledTokens = shuffleArray(q.tokens);
    setAvailableWords(shuffledTokens);
  }, []);

  // 初始化並開始測驗
  const handleStartQuiz = useCallback(() => {
    audioManager.stop();

    // 1. 蒐集可用歌詞句源
    let poolLines: { line: SongLine; songTitle: string }[] = [];
    if (scope === 'current') {
      poolLines = song.lines.map(line => ({ line, songTitle: song.title }));
    } else {
      ALL_SONGS.forEach(s => {
        s.lines.forEach(line => {
          poolLines.push({ line, songTitle: s.title });
        });
      });
    }

    // 2. 隨機洗牌並選取指定題數
    const shuffledPool = shuffleArray(poolLines);
    const selectedCount = Math.min(questionCountOption, shuffledPool.length);
    const chosenLines = shuffledPool.slice(0, selectedCount);

    const generatedQuestions: QuizQuestion[] = chosenLines.map(item => {
      const tokens = tokenizeSentence(item.line.english);
      return {
        line: item.line,
        songTitle: item.songTitle,
        tokens
      };
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setResults([]);
    setIsQuizFinished(false);
    setIsQuizActive(true);

    // 載入第一題選項
    if (generatedQuestions.length > 0) {
      loadQuestionState(generatedQuestions[0]);
    }
  }, [song, scope, questionCountOption, loadQuestionState]);

  // 點選選項池中的單字 -> 移至作答區
  const handleSelectWord = (wordObj: { id: string; word: string }) => {
    if (isConfirmed) return;

    // 朗讀單字音標/發音
    const cleanW = wordObj.word.replace(/[^a-zA-Z']/g, '');
    if (cleanW) {
      audioManager.speakWord(cleanW);
    }

    setAvailableWords(prev => prev.filter(w => w.id !== wordObj.id));
    setSelectedWords(prev => [...prev, wordObj]);
  };

  // 點選作答區中的單字 -> 移回選項池
  const handleDeselectWord = (wordObj: { id: string; word: string }) => {
    if (isConfirmed) return;

    setSelectedWords(prev => prev.filter(w => w.id !== wordObj.id));
    setAvailableWords(prev => [...prev, wordObj]);
  };

  // 清空重新作答
  const handleResetCurrentAnswer = () => {
    if (isConfirmed || questions.length === 0) return;
    const currentQ = questions[currentIndex];
    setSelectedWords([]);
    setAvailableWords(shuffleArray(currentQ.tokens));
  };

  // 確認送出答案
  const handleConfirmAnswer = () => {
    if (selectedWords.length === 0 || isConfirmed) return;

    const currentQ = questions[currentIndex];
    const userBuiltSentence = selectedWords.map(w => w.word).join(' ');
    const correctSentence = currentQ.line.english;

    const correct = normalizeSentence(userBuiltSentence) === normalizeSentence(correctSentence);

    setIsConfirmed(true);
    setIsCurrentCorrect(correct);

    // 紀錄測驗結果
    const newResult: UserQuestionResult = {
      question: currentQ,
      userSentence: userBuiltSentence,
      correctSentence: correctSentence,
      isCorrect: correct
    };

    setResults(prev => [...prev, newResult]);

    // 若回答正確，自動朗讀英文句子
    if (correct) {
      audioManager.speakSentence(correctSentence);
    }
  };

  // 下一題 / 完成測驗
  const handleNextQuestion = () => {
    audioManager.stop();

    if (currentIndex + 1 < questions.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      loadQuestionState(questions[nextIdx]);
    } else {
      setIsQuizFinished(true);
    }
  };

  // 當前題目物件
  const currentQuestion = questions[currentIndex];

  // 字級樣式對應
  const fontSizes = {
    small: {
      chinese: 'text-base sm:text-lg',
      wordChip: 'text-xs px-2.5 py-1.5',
      userBox: 'min-h-[50px] p-2 sm:p-3'
    },
    medium: {
      chinese: 'text-lg sm:text-xl',
      wordChip: 'text-sm sm:text-base px-3 py-2',
      userBox: 'min-h-[60px] p-3 sm:p-4'
    },
    large: {
      chinese: 'text-xl sm:text-2xl',
      wordChip: 'text-base sm:text-lg px-3.5 py-2.5',
      userBox: 'min-h-[70px] p-3 sm:p-4'
    },
    xlarge: {
      chinese: 'text-2xl sm:text-3xl',
      wordChip: 'text-lg sm:text-xl px-4 py-3',
      userBox: 'min-h-[80px] p-4 sm:p-5'
    }
  }[fontSize];

  // 尚未開始測驗的設定頁面
  if (!isQuizActive) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-2xs h-full flex flex-col justify-between max-w-3xl mx-auto w-full">
        <div className="space-y-6 text-center">
          {/* 圖示與標題 */}
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900 shadow-2xs">
            <Trophy className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              英文歌詞聽力與重組測驗
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto">
              根據顯示的中文歌詞翻譯，依序點選下方英文單字組合成正確句型！
            </p>
          </div>

          {/* 測驗參數設定選項 */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-700/80 space-y-5 text-left max-w-lg mx-auto">
            {/* 1. 出題範圍 */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Music className="w-4 h-4 text-indigo-500" />
                出題歌曲範圍:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setScope('current')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition text-left cursor-pointer flex items-center justify-between ${
                    scope === 'current'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">當前歌曲 ({getFormattedSongTitle(song)})</span>
                  {scope === 'current' && <Check className="w-4 h-4 text-indigo-600 shrink-0" />}
                </button>

                <button
                  type="button"
                  onClick={() => setScope('all')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition text-left cursor-pointer flex items-center justify-between ${
                    scope === 'all'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <span>全庫歌曲綜合測驗</span>
                  {scope === 'all' && <Check className="w-4 h-4 text-indigo-600 shrink-0" />}
                </button>
              </div>
            </div>

            {/* 2. 測驗題數 */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-indigo-500" />
                選擇測驗題數:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[5, 10, 20].map(count => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setQuestionCountOption(count)}
                    className={`p-3 rounded-xl border text-sm font-bold transition text-center cursor-pointer ${
                      questionCountOption === count
                        ? 'border-indigo-500 bg-indigo-600 text-white shadow-md ring-2 ring-indigo-500/20'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {count} 題
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 開始測驗按鈕 */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
          <button
            onClick={handleStartQuiz}
            className="w-full max-w-lg py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>開始歌詞測驗 ({questionCountOption}題)</span>
          </button>
        </div>
      </div>
    );
  }

  // 測驗結束結算頁面
  if (isQuizFinished) {
    const totalCount = results.length;
    const correctCount = results.filter(r => r.isCorrect).length;
    const scorePercentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-8 shadow-2xs h-full flex flex-col justify-between max-w-4xl mx-auto w-full overflow-y-auto">
        <div className="space-y-6">
          {/* 結算頭部卡片 */}
          <div className="text-center space-y-3 bg-gradient-to-b from-indigo-50/80 to-white dark:from-indigo-950/40 dark:to-slate-900 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-900">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-600 text-white shadow-md">
              <Trophy className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              測驗完成！分數：{scorePercentage} 分
            </h2>

            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              答對 {correctCount} / {totalCount} 題 ({scorePercentage >= 80 ? '表現優異！🎉' : scorePercentage >= 60 ? '持續進步！💪' : '再多練習幾遍吧！✨'})
            </p>
          </div>

          {/* 答題明細對照表 */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>題目作答明細</span>
              <span className="text-xs text-slate-400 font-normal">可點擊按鈕聆聽正確發音</span>
            </h3>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {results.map((res, idx) => (
                <div
                  key={`result-${idx}`}
                  className={`p-4 rounded-2xl border transition ${
                    res.isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20'
                      : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5 min-w-0">
                      {res.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      )}

                      <div className="space-y-1 min-w-0">
                        <div className="text-xs text-slate-400 font-medium">
                          第 {idx + 1} 題 · {res.question.songTitle}
                        </div>
                        <div className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                          {res.question.line.chinese}
                        </div>

                        {!res.isCorrect && (
                          <div className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                            你的作答: <span className="line-through">{res.userSentence || '(未作答)'}</span>
                          </div>
                        )}

                        <div className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                          正確答案: {res.correctSentence}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => audioManager.speakSentence(res.correctSentence)}
                      className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 hover:text-indigo-600 dark:text-slate-300 transition cursor-pointer shrink-0"
                      title="聆聽英文發音"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部再測驗一次 / 重新設定 */}
        <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={() => setIsQuizActive(false)}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition cursor-pointer"
          >
            調整測驗設定
          </button>

          <button
            onClick={handleStartQuiz}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md transition cursor-pointer flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>再測驗一次 ({questionCountOption}題)</span>
          </button>
        </div>
      </div>
    );
  }

  // 測驗進行中介面
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 shadow-2xs h-full flex flex-col justify-between max-w-4xl mx-auto w-full">
      {/* 頂部進度與歌曲資訊列 */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 font-bold">
              第 {currentIndex + 1} / {questions.length} 題
            </span>
            <span className="truncate max-w-[180px] sm:max-w-xs text-slate-500">
              {currentQuestion.songTitle}
            </span>
          </div>

          <button
            onClick={() => setIsQuizActive(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold transition cursor-pointer"
          >
            退出測驗
          </button>
        </div>

        {/* 進度條 */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 核心題目卡片 */}
      <div className="my-auto py-4 space-y-6">
        {/* 中文題目 Prompt */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
            <span>請依序點選單字組成下述句意:</span>
          </div>

          <h2 className={`font-extrabold text-slate-900 dark:text-white leading-relaxed ${fontSizes.chinese}`}>
            &ldquo;{currentQuestion.line.chinese}&rdquo;
          </h2>
        </div>

        {/* 1. 作答區 (User Built Sentence Box) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span>你的作答區:</span>
            {selectedWords.length > 0 && !isConfirmed && (
              <button
                onClick={handleResetCurrentAnswer}
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 text-[11px] font-bold cursor-pointer"
              >
                重填 (清除單字)
              </button>
            )}
          </div>

          <div
            className={`w-full rounded-2xl border-2 transition-all flex flex-wrap items-center justify-center gap-2 ${fontSizes.userBox} ${
              isConfirmed
                ? isCurrentCorrect
                  ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30'
                  : 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/30'
                : selectedWords.length > 0
                ? 'border-indigo-400 dark:border-indigo-600 bg-slate-50/50 dark:bg-slate-800/40'
                : 'border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20'
            }`}
          >
            {selectedWords.length === 0 ? (
              <span className="text-xs sm:text-sm text-slate-400 font-medium select-none">
                點擊下方單字按鈕依序拼湊句子...
              </span>
            ) : (
              selectedWords.map((wordObj) => (
                <button
                  key={wordObj.id}
                  onClick={() => handleDeselectWord(wordObj)}
                  disabled={isConfirmed}
                  className={`rounded-xl font-bold transition shadow-2xs cursor-pointer ${fontSizes.wordChip} ${
                    isConfirmed
                      ? isCurrentCorrect
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105'
                  }`}
                  title={isConfirmed ? '' : '點擊移除此單字'}
                >
                  {wordObj.word}
                </button>
              ))
            )}
          </div>
        </div>

        {/* 2. 待選單字池 (Available Options Pool) */}
        {!isConfirmed && (
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
              單字庫備選 (點擊選擇):
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 min-h-[60px] p-2 bg-slate-50/60 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800">
              {availableWords.map((wordObj) => (
                <button
                  key={wordObj.id}
                  onClick={() => handleSelectWord(wordObj)}
                  className={`rounded-xl font-bold border transition cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:scale-105 shadow-2xs ${fontSizes.wordChip} bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100`}
                >
                  {wordObj.word}
                </button>
              ))}
              {availableWords.length === 0 && (
                <span className="text-xs text-slate-400 italic">已選完所有單字</span>
              )}
            </div>
          </div>
        )}

        {/* 3. 驗證結果與正確答案提示區 */}
        {isConfirmed && (
          <div
            className={`p-4 rounded-2xl border animate-in fade-in slide-in-from-bottom-2 duration-200 space-y-2.5 ${
              isCurrentCorrect
                ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/60'
                : 'border-rose-300 dark:border-rose-800 bg-rose-50/80 dark:bg-rose-950/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isCurrentCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-extrabold text-emerald-800 dark:text-emerald-200 text-sm sm:text-base">
                      回答正確！太棒了！🎉
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    <span className="font-extrabold text-rose-800 dark:text-rose-200 text-sm sm:text-base">
                      答錯了，請對照正確答案：
                    </span>
                  </>
                )}
              </div>

              <button
                onClick={() => audioManager.speakSentence(currentQuestion.line.english)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition cursor-pointer shadow-2xs"
              >
                <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
                <span>聆聽完整句子</span>
              </button>
            </div>

            <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white pl-7">
              正確句型: &ldquo;{currentQuestion.line.english}&rdquo;
            </div>
          </div>
        )}
      </div>

      {/* 底部按鈕導航列 (確認 / 下一題) */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={handleResetCurrentAnswer}
          disabled={isConfirmed || selectedWords.length === 0}
          className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
        >
          重填
        </button>

        {!isConfirmed ? (
          <button
            onClick={handleConfirmAnswer}
            disabled={selectedWords.length === 0}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:pointer-events-none text-white text-xs sm:text-sm font-bold shadow-md transition cursor-pointer flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>確認答案</span>
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md transition cursor-pointer flex items-center gap-1.5"
          >
            <span>{currentIndex + 1 < questions.length ? '下一題' : '查看測驗結果'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
