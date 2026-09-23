'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  SongItem,
  SongLine,
  SongWord,
  generateSequentialPracticeSteps,
  SongPracticeStep
} from '../../lib/songData';
import { audioManager } from '../../lib/audioManager';
import { FontSizePreference } from '../../lib/types';
import {
  getSongSettingsByTitle,
  saveSongSettingsByTitle,
  SongProgressState
} from '../../lib/songStorage';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  RotateCcw,
  Volume2,
  Sparkles,
  Layers,
  FileText,
  ListOrdered,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  VolumeX,
  Gauge,
  Repeat,
  FastForward
} from 'lucide-react';

interface SongLyricsPracticeProps {
  song: SongItem;
  fontSize: FontSizePreference;
  onProgressChange?: (progress: SongProgressState) => void;
}

type PracticeFlowMode = 'sequential' | 'words_only' | 'sentences_only';
type PlaybackCycleMode = 'none' | 'single_loop' | 'continuous_all';

export function SongLyricsPractice({ song, fontSize, onProgressChange }: SongLyricsPracticeProps) {
  // 從 localStorage 讀取該首歌儲存的進度狀態 (以 songTitle 為 Key 封裝存儲)
  const [initialProgress] = useState(() => getSongSettingsByTitle(song.title, song.lines.length));

  // 練習模式：
  // 1. sequential: 第1句所有單字 -> 第1句整句 -> 第2句所有單字 -> 第2句整句... (使用者核心需求)
  // 2. words_only: 僅所有句子單字拆解
  // 3. sentences_only: 僅所有句子整句朗讀
  const [flowMode, setFlowMode] = useState<PracticeFlowMode>('sequential');

  // 當前選中的歌詞句子索引 (0 ~ song.lines.length - 1)，初始化取自 localStorage 該曲 progress
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(initialProgress.progress);

  // 在特定句子內當前的練習階段：'words' (所有單字) 或 'sentence' (整句)
  const [currentPhase, setCurrentPhase] = useState<'words' | 'sentence'>('words');

  // 單字逐一朗讀當前高亮的單字索引 (-1 表示無)
  const [activeWordIndex, setActiveWordIndex] = useState<number>(-1);

  // 播放與狀態 (cycleMode 若為 single_loop 則自 localStorage 該曲 loop 恢復)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [cycleMode, setCycleMode] = useState<PlaybackCycleMode>(() =>
    initialProgress.loop ? 'single_loop' : 'none'
  );
  const [speechRate, setSpeechRate] = useState<number>(() => {
    const rate = initialProgress.playbackSpeed || 0.85;
    if (typeof window !== 'undefined') {
      audioManager.setRate(rate);
    }
    return rate;
  });
  const [selectedWord, setSelectedWord] = useState<SongWord | null>(null);

  // 避免計時器與競爭條件的 ref
  const isPlayingRef = useRef<boolean>(false);
  const cycleModeRef = useRef<PlaybackCycleMode>('none');
  const flowModeRef = useRef<PracticeFlowMode>('sequential');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const executePlaySentenceRef = useRef<(lineIdx: number, mode: PlaybackCycleMode) => void>(() => {});
  const executePlayWordsRef = useRef<(lineIdx: number, mode: PlaybackCycleMode) => void>(() => {});
  const onProgressChangeRef = useRef(onProgressChange);
  const isInitialMount = useRef(true);

  useEffect(() => {
    onProgressChangeRef.current = onProgressChange;
  }, [onProgressChange]);

  // 當 currentLineIndex、cycleMode 或 speechRate 變更時，封裝至以 songTitle 為 Key 的物件中存入 localStorage
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const isSingleLoop = cycleMode === 'single_loop';
    const updatedState = {
      progress: currentLineIndex,
      loop: isSingleLoop,
      playbackSpeed: speechRate
    };

    saveSongSettingsByTitle(song.title, updatedState);

    if (onProgressChangeRef.current) {
      onProgressChangeRef.current({
        ...updatedState,
        lineIndex: currentLineIndex,
        isSingleLoop,
        speechRate
      });
    }
  }, [song.title, currentLineIndex, cycleMode, speechRate]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    cycleModeRef.current = cycleMode;
  }, [cycleMode]);

  useEffect(() => {
    flowModeRef.current = flowMode;
  }, [flowMode]);

  // 清除進行中的計時器
  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // 組件卸載時徹底清除計時器與終止播放器執行緒，防止歌曲切換干擾
  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      clearTimer();
      audioManager.stop();
    };
  }, []);

  const currentLine: SongLine = song.lines[currentLineIndex] || song.lines[0];

  // 字級對應樣式
  const fontSizes = {
    small: {
      sentence: 'text-lg sm:text-xl',
      chinese: 'text-sm sm:text-base',
      wordChip: 'text-sm px-2.5 py-1.5',
      ipa: 'text-xs'
    },
    medium: {
      sentence: 'text-xl sm:text-2xl',
      chinese: 'text-base sm:text-lg',
      wordChip: 'text-base px-3 py-2',
      ipa: 'text-xs'
    },
    large: {
      sentence: 'text-2xl sm:text-3xl',
      chinese: 'text-lg sm:text-xl',
      wordChip: 'text-lg px-3.5 py-2.5',
      ipa: 'text-sm'
    },
    xlarge: {
      sentence: 'text-3xl sm:text-4xl',
      chinese: 'text-xl sm:text-2xl',
      wordChip: 'text-xl px-4 py-3',
      ipa: 'text-base'
    }
  }[fontSize];

  // 設定語速
  const handleRateChange = (rate: number) => {
    setSpeechRate(rate);
    audioManager.setRate(rate);
  };

  // 停止播放並徹底重設播放狀態與執行緒
  const stopAudio = useCallback(() => {
    isPlayingRef.current = false;
    clearTimer();
    audioManager.stop();
    setIsPlaying(false);
    setActiveWordIndex(-1);
  }, []);

  // 單獨播放某個單字
  const handlePlayWord = (word: SongWord, index?: number) => {
    stopAudio();
    if (index !== undefined) {
      setActiveWordIndex(index);
    }
    setSelectedWord(word);
    setIsPlaying(true);
    audioManager.speakWord(word.cleanWord, () => {
      setIsPlaying(false);
      if (index !== undefined) {
        setActiveWordIndex(-1);
      }
    });
  };

  // 執行整句歌詞播放
  const executePlaySentence = useCallback((lineIdx: number, mode: PlaybackCycleMode) => {
    const line = song.lines[lineIdx];
    if (!line) {
      setIsPlaying(false);
      return;
    }

    setCurrentLineIndex(lineIdx);
    setCurrentPhase('sentence');
    setIsPlaying(true);
    setActiveWordIndex(-1);

    audioManager.speakSentence(line.english, () => {
      if (!isPlayingRef.current) return;

      const activeMode = cycleModeRef.current;
      const activeFlow = flowModeRef.current;

      if (activeMode === 'single_loop') {
        // 單句循環：若為純句子模式直接重播句子；否則切回本句單字重播
        if (activeFlow === 'sentences_only') {
          timeoutRef.current = setTimeout(() => {
            if (!isPlayingRef.current) return;
            executePlaySentenceRef.current(lineIdx, activeMode);
          }, 900);
        } else {
          setCurrentPhase('words');
          timeoutRef.current = setTimeout(() => {
            if (!isPlayingRef.current) return;
            executePlayWordsRef.current(lineIdx, activeMode);
          }, 800);
        }
      } else if (activeMode === 'continuous_all') {
        // 連續自動播放：推進至下一句
        if (lineIdx < song.lines.length - 1) {
          const nextIdx = lineIdx + 1;
          setCurrentLineIndex(nextIdx);
          if (activeFlow === 'sentences_only') {
            setCurrentPhase('sentence');
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlaySentenceRef.current(nextIdx, activeMode);
            }, 900);
          } else {
            setCurrentPhase('words');
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlayWordsRef.current(nextIdx, activeMode);
            }, 900);
          }
        } else {
          // 已播至全曲最後一句
          setIsPlaying(false);
        }
      } else {
        // 單次播放完畢
        setIsPlaying(false);
      }
    });
  }, [song.lines]);

  // 執行本句單字依序朗讀
  const executePlayWords = useCallback((lineIdx: number, mode: PlaybackCycleMode) => {
    const line = song.lines[lineIdx];
    if (!line || line.words.length === 0) {
      setIsPlaying(false);
      return;
    }

    setCurrentLineIndex(lineIdx);
    setCurrentPhase('words');
    setIsPlaying(true);

    const words = line.words;
    let i = 0;

    const playNextWord = () => {
      if (!isPlayingRef.current && i > 0) return;
      if (i >= words.length) {
        setActiveWordIndex(-1);
        const activeMode = cycleModeRef.current;
        const activeFlow = flowModeRef.current;

        if (activeMode === 'single_loop') {
          if (activeFlow === 'words_only') {
            // 重播本句單字
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlayWordsRef.current(lineIdx, activeMode);
            }, 800);
          } else {
            // 切換至本句整句朗讀
            setCurrentPhase('sentence');
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlaySentenceRef.current(lineIdx, activeMode);
            }, 600);
          }
        } else if (activeMode === 'continuous_all') {
          if (activeFlow === 'words_only') {
            // 推進至下一句單字
            if (lineIdx < song.lines.length - 1) {
              const nextIdx = lineIdx + 1;
              setCurrentLineIndex(nextIdx);
              timeoutRef.current = setTimeout(() => {
                if (!isPlayingRef.current) return;
                executePlayWordsRef.current(nextIdx, activeMode);
              }, 800);
            } else {
              setIsPlaying(false);
            }
          } else {
            // 切換至本句整句朗讀
            setCurrentPhase('sentence');
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlaySentenceRef.current(lineIdx, activeMode);
            }, 600);
          }
        } else {
          setIsPlaying(false);
        }
        return;
      }

      setActiveWordIndex(i);
      const currentWordItem = words[i];
      setSelectedWord(currentWordItem);

      audioManager.speakWord(currentWordItem.cleanWord, () => {
        if (!isPlayingRef.current) return;
        i++;
        timeoutRef.current = setTimeout(playNextWord, 450);
      });
    };

    playNextWord();
  }, [song.lines]);

  useEffect(() => {
    executePlaySentenceRef.current = executePlaySentence;
  }, [executePlaySentence]);

  useEffect(() => {
    executePlayWordsRef.current = executePlayWords;
  }, [executePlayWords]);

  // 統一啟動播放循環流程
  const startPlayCycle = useCallback((mode: PlaybackCycleMode, lineIdx: number, phase: 'words' | 'sentence') => {
    clearTimer();
    audioManager.stop();
    setIsPlaying(true);

    if (phase === 'words' && flowModeRef.current !== 'sentences_only') {
      executePlayWords(lineIdx, mode);
    } else {
      executePlaySentence(lineIdx, mode);
    }
  }, [executePlayWords, executePlaySentence]);

  // 主播放 / 暫停按鈕
  // 1. 若目前正在播放，點擊立即停止一切聲音與排程（安全歸位）
  // 2. 若目前未播放，依當前 cycleMode (單句循環 / 自動連續 / 單次) 從目前句子與階段啟動
  const handlePlayCurrent = () => {
    if (isPlaying) {
      stopAudio();
      return;
    }
    startPlayCycle(cycleMode, currentLineIndex, currentPhase);
  };

  // 切換「單句循環」：與「連續自動」互斥，絕不干擾
  // - 若原本是 single_loop：關閉循環變為 none（若正在播則繼續播完當前句後停止）
  // - 若原本不是 single_loop：設為 single_loop（自動取代連續自動），並立即啟動單句循環練習
  const toggleSingleLoop = () => {
    clearTimer();
    audioManager.stop();
    if (cycleMode === 'single_loop') {
      setCycleMode('none');
      setIsPlaying(false);
    } else {
      setCycleMode('single_loop');
      setIsPlaying(true);
      timeoutRef.current = setTimeout(() => {
        startPlayCycle('single_loop', currentLineIndex, currentPhase);
      }, 60);
    }
  };

  // 切換「連續自動播放」：與「單句循環」互斥，絕不干擾
  // - 若原本是 continuous_all：關閉連續播放變為 none（若正在播則播完當前句後停止）
  // - 若原本不是 continuous_all：設為 continuous_all（自動取代單句循環），並立即由當前句啟動連續練習
  const toggleContinuousAutoPlay = () => {
    clearTimer();
    audioManager.stop();
    if (cycleMode === 'continuous_all') {
      setCycleMode('none');
      setIsPlaying(false);
    } else {
      setCycleMode('continuous_all');
      setIsPlaying(true);
      timeoutRef.current = setTimeout(() => {
        startPlayCycle('continuous_all', currentLineIndex, currentPhase);
      }, 60);
    }
  };

  // 切換至上一項
  const handlePrev = () => {
    stopAudio();
    if (flowMode === 'sequential') {
      if (currentPhase === 'sentence') {
        setCurrentPhase('words');
      } else if (currentLineIndex > 0) {
        setCurrentLineIndex(idx => idx - 1);
        setCurrentPhase('sentence');
      }
    } else if (flowMode === 'words_only') {
      if (currentLineIndex > 0) {
        setCurrentLineIndex(idx => idx - 1);
      }
    } else if (flowMode === 'sentences_only') {
      if (currentLineIndex > 0) {
        setCurrentLineIndex(idx => idx - 1);
      }
    }
  };

  // 切換至下一項
  const handleNext = () => {
    stopAudio();
    if (flowMode === 'sequential') {
      if (currentPhase === 'words') {
        setCurrentPhase('sentence');
      } else if (currentLineIndex < song.lines.length - 1) {
        setCurrentLineIndex(idx => idx + 1);
        setCurrentPhase('words');
      }
    } else if (flowMode === 'words_only') {
      if (currentLineIndex < song.lines.length - 1) {
        setCurrentLineIndex(idx => idx + 1);
      }
    } else if (flowMode === 'sentences_only') {
      if (currentLineIndex < song.lines.length - 1) {
        setCurrentLineIndex(idx => idx + 1);
      }
    }
  };

  // 鍵盤快捷鍵支援
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 避免在輸入框觸發
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        handlePlayCurrent();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        toggleSingleLoop();
      } else if (e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        toggleContinuousAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // 計算當前進度百分比
  const totalSteps = flowMode === 'sequential' ? song.lines.length * 2 : song.lines.length;
  const currentStepNumber =
    flowMode === 'sequential'
      ? currentLineIndex * 2 + (currentPhase === 'words' ? 1 : 2)
      : currentLineIndex + 1;
  const progressPercent = Math.round((currentStepNumber / totalSteps) * 100);

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* 緊湊整合型頂部控制列 (單行整合：選句 + 流程模式 + 播放模式 + 語速) */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-slate-900 px-3 py-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
        {/* 左側：選句下拉選單與進度標記 */}
        <div className="flex items-center gap-2 min-w-0">
          <select
            value={currentLineIndex}
            onChange={(e) => {
              stopAudio();
              setCurrentLineIndex(Number(e.target.value));
            }}
            className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-hidden cursor-pointer max-w-[190px] sm:max-w-xs truncate"
          >
            {song.lines.map((line, idx) => (
              <option key={line.id} value={idx}>
                {line.id}. {line.english}
              </option>
            ))}
          </select>

          <span className="text-[11px] font-mono text-slate-400 shrink-0">
            {currentLineIndex + 1}/{song.lines.length}
          </span>
        </div>

        {/* 中間：流程切換 (全部 / 單字 / 句子) */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl shrink-0">
          <button
            onClick={() => {
              setFlowMode('sequential');
              stopAudio();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
              flowMode === 'sequential'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
            title="單字 ➔ 整句完整練習"
          >
            單字+整句
          </button>
          <button
            onClick={() => {
              setFlowMode('words_only');
              setCurrentPhase('words');
              stopAudio();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
              flowMode === 'words_only'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
            title="僅練習拆解單字"
          >
            僅單字
          </button>
          <button
            onClick={() => {
              setFlowMode('sentences_only');
              setCurrentPhase('sentence');
              stopAudio();
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
              flowMode === 'sentences_only'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
            title="僅練習整句朗讀"
          >
            僅句子
          </button>
        </div>

        {/* 右側：播放行為控制 (單句循環、連續自動、0.7x慢速切換) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* 單句循環 */}
          <button
            onClick={toggleSingleLoop}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
              cycleMode === 'single_loop'
                ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
            title="單句循環：重覆練習此句（快速鍵 L）"
          >
            <Repeat className={`w-3.5 h-3.5 ${cycleMode === 'single_loop' ? 'text-amber-500 animate-spin' : ''}`} />
            <span className="hidden sm:inline">單句循環</span>
          </button>

          {/* 連續自動播放 */}
          <button
            onClick={toggleContinuousAutoPlay}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
              cycleMode === 'continuous_all'
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
            title="自動播放：連續練習至全曲末句（快速鍵 A）"
          >
            <FastForward className={`w-3.5 h-3.5 ${cycleMode === 'continuous_all' ? 'text-indigo-600' : ''}`} />
            <span className="hidden sm:inline">自動播放</span>
          </button>

          {/* 慢速 0.7x 切換鈕（僅調整速度，下一次發音套用） */}
          <button
            onClick={() => handleRateChange(speechRate === 0.7 ? 0.85 : 0.7)}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
              speechRate === 0.7
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
            title={speechRate === 0.7 ? '目前為 0.7x 慢速，點擊切回 0.85x' : '切換為 0.7x 慢速（下一次播放套用）'}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>{speechRate === 0.7 ? '0.7x' : '慢速'}</span>
          </button>

          {/* 主播放 / 暫停鈕 */}
          <button
            onClick={handlePlayCurrent}
            className={`p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              isPlaying
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs'
            }`}
            title={isPlaying ? '停止' : '播放目前內容'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span className="hidden sm:inline">{isPlaying ? '暫停' : '播放'}</span>
          </button>
        </div>
      </div>

      {/* 主展示卡片：依據當前階段顯示「單字群」或「整句」 (純淨舒適視圖) */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-8 flex flex-col justify-between shadow-2xs relative overflow-hidden">
        {/* 階段微型標記 */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">
              #{currentLine.id}
            </span>
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              {currentPhase === 'words' ? '單字拆解' : '整句朗讀'}
            </span>
            {cycleMode === 'single_loop' && (
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                單句循環中
              </span>
            )}
            {cycleMode === 'continuous_all' && (
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                自動播放中
              </span>
            )}
          </div>

          {/* 若處於 sequential 模式，提供微型切換 */}
          {flowMode === 'sequential' && (
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg">
              <button
                onClick={() => {
                  stopAudio();
                  setCurrentPhase('words');
                }}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition cursor-pointer ${
                  currentPhase === 'words'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-2xs font-bold'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                單字
              </button>
              <button
                onClick={() => {
                  stopAudio();
                  setCurrentPhase('sentence');
                }}
                className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition cursor-pointer ${
                  currentPhase === 'sentence'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-2xs font-bold'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                整句
              </button>
            </div>
          )}
        </div>

        {/* 內容核心展示區 */}
        {currentPhase === 'words' ? (
          /* ===== 階段 A：本句所有單字練習 ===== */
          <div className="my-auto py-3 space-y-5">
            {/* 單字卡片網格 */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
              {currentLine.words.map((w, idx) => {
                const isWordActive = activeWordIndex === idx;
                const isSelected = selectedWord?.cleanWord === w.cleanWord;

                return (
                  <button
                    key={`${w.id}-${idx}`}
                    onClick={() => handlePlayWord(w, idx)}
                    className={`group relative flex flex-col items-center justify-center rounded-2xl border transition-all duration-200 cursor-pointer ${fontSizes.wordChip} ${
                      isWordActive
                        ? 'border-indigo-500 bg-indigo-600 text-white ring-4 ring-indigo-500/20 scale-105 shadow-md'
                        : isSelected
                        ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200 shadow-2xs'
                        : 'border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:border-indigo-300 hover:bg-indigo-50/40 dark:hover:bg-slate-700/50 shadow-2xs'
                    }`}
                  >
                    {/* 單字與圖標 */}
                    <div className="flex items-center gap-1 font-bold">
                      <span>{w.word}</span>
                      <Volume2 className={`w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition ${isWordActive ? 'text-white' : 'text-indigo-500'}`} />
                    </div>

                    {/* 音標 */}
                    <div className={`text-[11px] font-mono tracking-tight ${isWordActive ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-400'}`}>
                      {w.ipa}
                    </div>

                    {/* 中文意涵 */}
                    <div className={`text-xs font-medium mt-0.5 truncate max-w-[120px] ${isWordActive ? 'text-indigo-50' : 'text-slate-600 dark:text-slate-300'}`}>
                      {w.chinese}
                    </div>

                    {/* 音節拆解 */}
                    {w.syllables && w.syllables.length > 1 && (
                      <div className={`text-[10px] mt-1 px-1.5 py-0.2 rounded-md ${isWordActive ? 'bg-indigo-700/60 text-indigo-100' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                        {w.syllables.join(' • ')}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* 若有選中單字，顯示極簡釋義列 */}
            {selectedWord && (
              <div className="max-w-md mx-auto bg-slate-50 dark:bg-slate-800/80 rounded-2xl px-4 py-2.5 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 truncate">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {selectedWord.cleanWord}
                  </span>
                  <span className="font-mono text-slate-400">{selectedWord.ipa}</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {selectedWord.chinese}
                  </span>
                </div>

                <button
                  onClick={() => handlePlayWord(selectedWord)}
                  className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer shrink-0"
                  title="重新發音"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ===== 階段 B：整句完整歌詞練習 (純淨大字排版) ===== */
          <div className="my-auto py-4 space-y-5 text-center max-w-2xl mx-auto">
            {/* 英文歌詞 */}
            <h2 className={`font-bold tracking-tight text-slate-900 dark:text-white leading-relaxed ${fontSizes.sentence}`}>
              &ldquo;{currentLine.english}&rdquo;
            </h2>

            {/* 中文翻譯 */}
            <p className={`font-medium text-indigo-600 dark:text-indigo-400 ${fontSizes.chinese}`}>
              {currentLine.chinese}
            </p>

            {/* 本句單字快看 */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5">
              {currentLine.words.map((w, idx) => (
                <button
                  key={`inline-${w.id}-${idx}`}
                  onClick={() => handlePlayWord(w)}
                  className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 text-xs text-slate-600 dark:text-slate-300 transition cursor-pointer"
                  title={`${w.ipa} - ${w.chinese}`}
                >
                  {w.cleanWord}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 底部精簡導航條 */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentLineIndex === 0 && (flowMode !== 'sequential' || currentPhase === 'words')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>上一句</span>
          </button>

          <span className="text-xs text-slate-400">
            {currentStepNumber} / {totalSteps}
          </span>

          <button
            onClick={handleNext}
            disabled={currentLineIndex === song.lines.length - 1 && (flowMode !== 'sequential' || currentPhase === 'sentence')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
          >
            <span>下一句</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
