'use client';

import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { SongItem, SongWord } from '../../lib/songData';
import { audioManager } from '../../lib/audioManager';
import { FontSizePreference } from '../../lib/types';
import {
  Volume2,
  RotateCw,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  Headphones,
  Check,
  X,
  RefreshCw,
  Trophy,
  Filter
} from 'lucide-react';

interface SongVocabPracticeProps {
  song: SongItem;
  fontSize: FontSizePreference;
}

type VocabTab = 'flashcard' | 'spelling' | 'quiz' | 'list';

export function SongVocabPractice({ song, fontSize }: SongVocabPracticeProps) {
  const [activeTab, setActiveTab] = useState<VocabTab>('flashcard');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const isMountedRef = useRef<boolean>(true);

  // 組件卸載時清除語音執行緒
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      audioManager.stop();
    };
  }, []);

  // 聽寫拼字狀態
  const [spellingInput, setSpellingInput] = useState<string>('');
  const [spellingResult, setSpellingResult] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [showSpellingHint, setShowSpellingHint] = useState<boolean>(false);

  // 測驗狀態
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizAnsweredCount, setQuizAnsweredCount] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState<boolean>(false);

  // 依難度等級篩選單字
  const filteredWords = useMemo(() => {
    if (selectedLevel === 'all') return song.vocabulary;
    return song.vocabulary.filter(w => w.level === selectedLevel);
  }, [song.vocabulary, selectedLevel]);

  const currentWord: SongWord = filteredWords[currentIndex] || filteredWords[0] || song.vocabulary[0];

  // 重設單字交互狀態
  const resetWordState = () => {
    setIsFlipped(false);
    setSpellingInput('');
    setSpellingResult('idle');
    setShowSpellingHint(false);
    setSelectedOption(null);
    setIsQuizAnswered(false);
  };

  // 播放單字語音
  const playWordAudio = useCallback((wordText?: string, slow: boolean = false) => {
    const textToPlay = wordText || currentWord.cleanWord;
    setIsPlayingAudio(true);
    if (slow) {
      const prevRate = audioManager.getRate();
      audioManager.setRate(0.7);
      audioManager.speakWord(textToPlay, () => {
        audioManager.setRate(prevRate);
        if (isMountedRef.current) {
          setIsPlayingAudio(false);
        }
      });
    } else {
      audioManager.speakWord(textToPlay, () => {
        if (isMountedRef.current) {
          setIsPlayingAudio(false);
        }
      });
    }
  }, [currentWord.cleanWord]);

  // 自動在進入卡片或拼字時播放發音
  useEffect(() => {
    if (activeTab === 'flashcard' || activeTab === 'spelling') {
      const timer = setTimeout(() => {
        playWordAudio(currentWord.cleanWord);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, activeTab, currentWord.cleanWord, playWordAudio]);

  // 切換上一字 / 下一字
  const handlePrev = () => {
    if (currentIndex > 0) {
      resetWordState();
      setCurrentIndex(i => i - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredWords.length - 1) {
      resetWordState();
      setCurrentIndex(i => i + 1);
    }
  };

  // 隨機重排
  const handleShuffle = () => {
    const rand = Math.floor(Math.random() * filteredWords.length);
    resetWordState();
    setCurrentIndex(rand);
  };

  // 檢查聽音拼字
  const handleCheckSpelling = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!spellingInput.trim()) return;

    const userClean = spellingInput.trim().toLowerCase().replace(/[^a-z']/g, '');
    const targetClean = currentWord.cleanWord.toLowerCase().replace(/[^a-z']/g, '');

    if (userClean === targetClean) {
      setSpellingResult('correct');
      // 答對播放慶祝並短暫延遲後前往下一字
      setTimeout(() => {
        handleNext();
      }, 1200);
    } else {
      setSpellingResult('incorrect');
    }
  };

  // 產生 4 個測驗選項（1 正確，3 依字詞代碼確定性擾動之選項，保持純函式規範）
  const quizOptions = useMemo(() => {
    if (!currentWord) return [];
    const correct = currentWord.chinese;
    const others = song.vocabulary
      .filter(w => w.chinese !== correct)
      .map(w => w.chinese);
    
    const seed = currentWord.cleanWord.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const sortedOthers = [...others].sort((a, b) => {
      const hA = (a.length * 31 + seed) % 19;
      const hB = (b.length * 31 + seed) % 19;
      return hA - hB;
    });

    const selected3 = sortedOthers.slice(0, 3);
    const insertPos = seed % 4;
    const result = [...selected3];
    result.splice(insertPos, 0, correct);
    return result;
  }, [currentWord, song.vocabulary]);

  // 選擇測驗選項
  const handleSelectQuizOption = (option: string) => {
    if (isQuizAnswered) return;
    setSelectedOption(option);
    setIsQuizAnswered(true);
    setQuizAnsweredCount(c => c + 1);

    if (option === currentWord.chinese) {
      setQuizScore(s => s + 1);
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };

  // 字級樣式
  const fontSizes = {
    small: { title: 'text-2xl sm:text-3xl', sub: 'text-sm', ipa: 'text-xs sm:text-sm' },
    medium: { title: 'text-3xl sm:text-4xl', sub: 'text-base', ipa: 'text-sm sm:text-base' },
    large: { title: 'text-4xl sm:text-5xl', sub: 'text-lg', ipa: 'text-base sm:text-lg' },
    xlarge: { title: 'text-5xl sm:text-6xl', sub: 'text-xl', ipa: 'text-lg sm:text-xl' }
  }[fontSize];

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* 頂部功能模式分頁鈕與難度篩選 (緊湊精簡) */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
        {/* 模式切換 */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl">
          <button
            onClick={() => setActiveTab('flashcard')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1 cursor-pointer ${
              activeTab === 'flashcard'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>單字卡</span>
          </button>

          <button
            onClick={() => setActiveTab('spelling')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1 cursor-pointer ${
              activeTab === 'spelling'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>聽音拼字</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1 cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>四選一測驗</span>
          </button>

          <button
            onClick={() => setActiveTab('list')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1 cursor-pointer ${
              activeTab === 'list'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>詞表 ({song.vocabulary.length})</span>
          </button>
        </div>

        {/* 難度篩選 */}
        <div className="flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={selectedLevel}
            onChange={(e) => {
              setSelectedLevel(e.target.value);
              setCurrentIndex(0);
              resetWordState();
            }}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 rounded-lg px-2.5 py-1 focus:outline-hidden cursor-pointer"
          >
            <option value="all">全部 ({song.vocabulary.length})</option>
            <option value="歌曲核心">核心字彙</option>
            <option value="高中精選">高中精選</option>
            <option value="國中基礎">國中基礎</option>
          </select>
        </div>
      </div>

      {/* 練習主視窗 */}
      {activeTab === 'flashcard' && (
        /* ===== 模式 1: 單字翻卡卡片 ===== */
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 flex flex-col justify-between shadow-xs">
          {/* 頂部資訊 */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              第 {currentIndex + 1} / {filteredWords.length} 個單字
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShuffle}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-600 dark:text-slate-300 transition"
                title="隨機跳選"
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>
              {currentWord.level && (
                <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-medium">
                  {currentWord.level}
                </span>
              )}
            </div>
          </div>

          {/* 卡片本體（支援點擊翻面） */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="my-auto py-10 px-6 rounded-3xl border-2 border-dashed border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-b from-indigo-50/30 to-white dark:from-slate-900 dark:to-slate-800/40 cursor-pointer text-center space-y-4 hover:border-indigo-400 transition"
          >
            {!isFlipped ? (
              /* 正面：英文、音標、音節 */
              <div className="space-y-4">
                <h2 className={`font-extrabold text-slate-900 dark:text-white tracking-tight ${fontSizes.title}`}>
                  {currentWord.cleanWord}
                </h2>

                <div className={`font-mono text-indigo-600 dark:text-indigo-400 ${fontSizes.ipa}`}>
                  {currentWord.ipa}
                </div>

                {/* 音節拆解 */}
                {currentWord.syllables && currentWord.syllables.length > 1 && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 shadow-2xs">
                    <span>音節拆解:</span>
                    <span className="text-indigo-600 dark:text-indigo-400">
                      {currentWord.syllables.join(' • ')}
                    </span>
                  </div>
                )}

                <div className="text-xs text-slate-400 pt-2 flex items-center justify-center gap-1">
                  <RotateCw className="w-3 h-3" />
                  <span>點擊卡片查看中文釋義與歌詞例句</span>
                </div>
              </div>
            ) : (
              /* 背面：中文意義、詞性、例句 */
              <div className="space-y-4">
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                  {currentWord.pos || '單字'}
                </div>

                <h3 className={`font-extrabold text-indigo-600 dark:text-indigo-400 ${fontSizes.title}`}>
                  {currentWord.chinese}
                </h3>

                <div className="text-xs text-slate-500 max-w-md mx-auto pt-2">
                  Taylor Swift 《Love Story》 歌詞出現單字
                </div>

                <div className="text-xs text-slate-400 pt-1 flex items-center justify-center gap-1">
                  <RotateCw className="w-3 h-3" />
                  <span>點擊翻回正面</span>
                </div>
              </div>
            )}
          </div>

          {/* 聲音播放按鈕與前後切換 */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold disabled:opacity-30 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>上一字</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playWordAudio(currentWord.cleanWord);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>標準發音</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playWordAudio(currentWord.cleanWord, true);
                }}
                className="inline-flex items-center gap-1 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 font-bold text-xs transition cursor-pointer"
                title="慢速 0.7x 朗讀"
              >
                <span>慢速 0.7x</span>
              </button>
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === filteredWords.length - 1}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold disabled:opacity-30 transition cursor-pointer"
            >
              <span>下一字</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {activeTab === 'spelling' && (
        /* ===== 模式 2: 聽音拼字挑戰 ===== */
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              聽音拼字 • 第 {currentIndex + 1} / {filteredWords.length} 題
            </span>
            <span className="px-2 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 font-medium">
              中文提示：{currentWord.chinese}
            </span>
          </div>

          <div className="my-auto max-w-lg mx-auto w-full text-center space-y-6">
            {/* 播放按鈕 */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => playWordAudio(currentWord.cleanWord)}
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer"
                title="點擊重聽單字發音"
              >
                <Volume2 className="w-8 h-8" />
              </button>
              <span className="text-xs text-slate-400">點擊聆聽英文單字</span>
            </div>

            {/* 提示選項 */}
            {showSpellingHint && (
              <div className="p-3 bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-900 rounded-xl text-xs space-y-1">
                <div>音標：<span className="font-mono font-bold text-violet-700 dark:text-violet-300">{currentWord.ipa}</span></div>
                {currentWord.syllables && (
                  <div>音節：<span className="font-bold text-violet-700 dark:text-violet-300">{currentWord.syllables.join(' • ')}</span></div>
                )}
                <div>字長：{currentWord.cleanWord.length} 個字母</div>
              </div>
            )}

            {/* 拼字輸入表單 */}
            <form onSubmit={handleCheckSpelling} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={spellingInput}
                  onChange={(e) => {
                    setSpellingInput(e.target.value);
                    setSpellingResult('idle');
                  }}
                  autoFocus
                  placeholder="請在此輸入聽到的單字..."
                  className={`w-full text-center text-xl font-bold py-3.5 px-4 rounded-2xl border-2 transition focus:outline-hidden ${
                    spellingResult === 'correct'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-4 ring-emerald-500/20'
                      : spellingResult === 'incorrect'
                      ? 'border-rose-500 bg-rose-50 text-rose-900 ring-4 ring-rose-500/20'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-violet-500'
                  }`}
                />

                {/* 判定圖標 */}
                {spellingResult === 'correct' && (
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-600" />
                )}
                {spellingResult === 'incorrect' && (
                  <X className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-rose-600" />
                )}
              </div>

              {/* 答案回饋 */}
              {spellingResult === 'incorrect' && (
                <div className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                  再試一次！正確答案是：<span className="font-mono text-sm underline">{currentWord.cleanWord}</span>
                </div>
              )}
              {spellingResult === 'correct' && (
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  🎉 答對了！拼字完全正確！
                </div>
              )}

              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-xs transition cursor-pointer"
                >
                  確認答案
                </button>

                <button
                  type="button"
                  onClick={() => setShowSpellingHint(v => !v)}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold transition"
                >
                  {showSpellingHint ? '隱藏提示' : '顯示提示'}
                </button>
              </div>
            </form>
          </div>

          {/* 底部切換 */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-30"
            >
              上一題
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === filteredWords.length - 1}
              className="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold disabled:opacity-30"
            >
              下一題
            </button>
          </div>
        </div>
      )}

      {activeTab === 'quiz' && (
        /* ===== 模式 3: 四選一快答測驗 ===== */
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              單字快答測驗 • 第 {currentIndex + 1} / {filteredWords.length} 題
            </span>
            <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300">
              <span>得分: {quizScore} / {quizAnsweredCount}</span>
            </div>
          </div>

          <div className="my-auto max-w-xl mx-auto w-full space-y-6 text-center">
            {/* 題目單字 */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  {currentWord.cleanWord}
                </h2>
                <button
                  onClick={() => playWordAudio(currentWord.cleanWord)}
                  className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 hover:bg-amber-200 cursor-pointer"
                  title="朗讀單字"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
              <div className="font-mono text-sm text-slate-400">{currentWord.ipa}</div>
              <p className="text-xs text-slate-500">請選出該單字的正確中文釋義：</p>
            </div>

            {/* 4 個選項 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quizOptions.map((opt, i) => {
                const isCorrect = opt === currentWord.chinese;
                const isUserChoice = selectedOption === opt;

                let optStyle =
                  'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-amber-400 hover:bg-amber-50/40';

                if (isQuizAnswered) {
                  if (isCorrect) {
                    optStyle = 'border-emerald-500 bg-emerald-500 text-white font-bold shadow-md';
                  } else if (isUserChoice && !isCorrect) {
                    optStyle = 'border-rose-500 bg-rose-500 text-white font-bold shadow-md';
                  } else {
                    optStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                  }
                }

                return (
                  <button
                    key={`${opt}-${i}`}
                    disabled={isQuizAnswered}
                    onClick={() => handleSelectQuizOption(opt)}
                    className={`p-4 rounded-2xl border text-sm font-semibold transition text-left flex items-center justify-between cursor-pointer ${optStyle}`}
                  >
                    <span>{opt}</span>
                    {isQuizAnswered && isCorrect && <Check className="w-4 h-4 text-white" />}
                    {isQuizAnswered && isUserChoice && !isCorrect && <X className="w-4 h-4 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-30"
            >
              上一題
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === filteredWords.length - 1}
              className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold disabled:opacity-30"
            >
              下一題
            </button>
          </div>
        </div>
      )}

      {activeTab === 'list' && (
        /* ===== 模式 4: 歌曲全詞表一覽清單 ===== */
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 overflow-y-auto max-h-[550px] shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
              Taylor Swift 《Love Story》 精選字彙全表 ({song.vocabulary.length} 字)
            </h3>
            <span className="text-xs text-slate-400">點擊發音圖示直接聆聽</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredWords.map((item, idx) => (
              <div
                key={`all-word-${item.cleanWord}-${idx}`}
                className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition flex items-center justify-between gap-2"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {item.cleanWord}
                    </span>
                    <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                      {item.ipa}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    {item.chinese}
                  </div>
                  {item.syllables && item.syllables.length > 1 && (
                    <div className="text-[10px] text-slate-400">
                      {item.syllables.join(' • ')}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => playWordAudio(item.cleanWord)}
                  className="p-2 rounded-xl bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white shadow-2xs transition shrink-0 cursor-pointer"
                  title="聆聽發音"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
