'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  SongItem,
  SongLine,
  SongWord,
  getFormattedSongTitle,
  getShortArtistName
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
  Repeat,
  FastForward,
  ChevronRight,
  ChevronLeft,
  Volume2,
  Gauge,
  Settings2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface SongLyricsPracticeProps {
  song: SongItem;
  fontSize: FontSizePreference;
  onProgressChange?: (progress: SongProgressState) => void;
  onOpenVocabAutoplay?: () => void;
}

type PracticeFlowMode = 'sequential' | 'words_only' | 'sentences_only';
type PlaybackCycleMode = 'none' | 'single_loop' | 'continuous_all';

export function SongLyricsPractice({ song, fontSize, onProgressChange, onOpenVocabAutoplay }: SongLyricsPracticeProps) {
  // 從 localStorage 讀取該首歌儲存的進度狀態 (以 songTitle 為 Key 封裝存儲)
  const [initialProgress] = useState(() => getSongSettingsByTitle(song.title, song.lines.length));

  // 練習模式：
  // 1. sequential: 第1句單字 -> 第1句整句 -> 第2句單字 -> 第2句整句...
  // 2. words_only: 僅單字拆解
  // 3. sentences_only: 僅整句朗讀
  const [flowMode, setFlowMode] = useState<PracticeFlowMode>('sequential');

  // 當前選中的歌詞句子索引 (0 ~ song.lines.length - 1)
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(initialProgress.progress);

  // 在特定句子內當前的練習階段：'words' 或 'sentence'
  const [currentPhase, setCurrentPhase] = useState<'words' | 'sentence'>('words');

  // 單字逐一朗讀當前高亮單字索引
  const [activeWordIndex, setActiveWordIndex] = useState<number>(-1);

  // 播放與模式狀態
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [cycleMode, setCycleMode] = useState<PlaybackCycleMode>(() =>
    initialProgress.loop ? 'single_loop' : 'none'
  );

  // 預設速度 (0.75x) 與使用者自訂調整 (需求 1)
  const [speechRate, setSpeechRate] = useState<number>(() => {
    const rate = initialProgress.playbackSpeed || 0.75;
    if (typeof window !== 'undefined') {
      audioManager.setRate(rate);
    }
    return rate;
  });

  // 自動換下一句停頓秒數 (預設 2.5s) 與使用者自訂調整 (需求 2)
  const [sentenceInterval, setSentenceInterval] = useState<number>(() => initialProgress.sentenceInterval || 2.5);

  // 所有設定預設隱藏收合 (需求 3)
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // 歌詞練習時，可勾選併同朗讀中文
  const [isReadChineseEnabled, setIsReadChineseEnabled] = useState<boolean>(false);

  const [selectedWord, setSelectedWord] = useState<SongWord | null>(null);

  // 避免計時器與競爭條件 refs
  const isPlayingRef = useRef<boolean>(false);
  const cycleModeRef = useRef<PlaybackCycleMode>('none');
  const flowModeRef = useRef<PracticeFlowMode>('sequential');
  const sentenceIntervalRef = useRef<number>(2.5);
  const isReadChineseEnabledRef = useRef<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const executePlaySentenceRef = useRef<(lineIdx: number, mode: PlaybackCycleMode) => void>(() => {});
  const executePlayWordsRef = useRef<(lineIdx: number, mode: PlaybackCycleMode) => void>(() => {});
  const onProgressChangeRef = useRef(onProgressChange);
  const isInitialMount = useRef(true);

  useEffect(() => {
    isReadChineseEnabledRef.current = isReadChineseEnabled;
  }, [isReadChineseEnabled]);

  useEffect(() => {
    onProgressChangeRef.current = onProgressChange;
  }, [onProgressChange]);

  useEffect(() => {
    sentenceIntervalRef.current = sentenceInterval;
  }, [sentenceInterval]);

  // 狀態變更時更新 localStorage (以 songTitle 為 Key)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const isSingleLoop = cycleMode === 'single_loop';
    const updatedState = {
      progress: currentLineIndex,
      loop: isSingleLoop,
      playbackSpeed: speechRate,
      sentenceInterval: sentenceInterval
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
  }, [song.title, currentLineIndex, cycleMode, speechRate, sentenceInterval]);

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

  // 設定語速 (需求 1)
  const handleRateChange = (rate: number) => {
    setSpeechRate(rate);
    audioManager.setRate(rate);
  };

  // 停止播放並徹底重設播放狀態與執行緒 (需求 4)
  const stopAudio = useCallback(() => {
    isPlayingRef.current = false;
    clearTimer();
    audioManager.stop();
    setIsPlaying(false);
    setActiveWordIndex(-1);
  }, []);

  // 單獨播放某個單字 (需求 4)
  const handlePlayWord = (word: SongWord, index?: number) => {
    stopAudio();
    if (index !== undefined) {
      setActiveWordIndex(index);
    }
    setSelectedWord(word);
    setIsPlaying(true);

    audioManager.speakWord(word.cleanWord, () => {
      if (isReadChineseEnabledRef.current && word.chinese) {
        timeoutRef.current = setTimeout(() => {
          audioManager.speakChinese(word.chinese, () => {
            setIsPlaying(false);
            if (index !== undefined) {
              setActiveWordIndex(-1);
            }
          });
        }, 150);
      } else {
        setIsPlaying(false);
        if (index !== undefined) {
          setActiveWordIndex(-1);
        }
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

    const onSentenceFinished = () => {
      if (!isPlayingRef.current) return;

      const activeMode = cycleModeRef.current;
      const activeFlow = flowModeRef.current;
      const transitionDelayMs = Math.round((sentenceIntervalRef.current || 2.5) * 1000);

      if (activeMode === 'single_loop') {
        if (activeFlow === 'sentences_only') {
          timeoutRef.current = setTimeout(() => {
            if (!isPlayingRef.current) return;
            executePlaySentenceRef.current(lineIdx, activeMode);
          }, transitionDelayMs);
        } else {
          setCurrentPhase('words');
          timeoutRef.current = setTimeout(() => {
            if (!isPlayingRef.current) return;
            executePlayWordsRef.current(lineIdx, activeMode);
          }, transitionDelayMs);
        }
      } else if (activeMode === 'continuous_all') {
        if (lineIdx < song.lines.length - 1) {
          const nextIdx = lineIdx + 1;
          setCurrentLineIndex(nextIdx);
          if (activeFlow === 'sentences_only') {
            setCurrentPhase('sentence');
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlaySentenceRef.current(nextIdx, activeMode);
            }, transitionDelayMs);
          } else {
            setCurrentPhase('words');
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlayWordsRef.current(nextIdx, activeMode);
            }, transitionDelayMs);
          }
        } else {
          setIsPlaying(false);
        }
      } else {
        setIsPlaying(false);
      }
    };

    // 1. 朗讀英文句子
    audioManager.speakSentence(line.english, () => {
      if (!isPlayingRef.current) return;

      // 2. 若勾選併同朗讀中文，則朗讀中文翻譯
      if (isReadChineseEnabledRef.current && line.chinese) {
        timeoutRef.current = setTimeout(() => {
          if (!isPlayingRef.current) return;
          audioManager.speakChinese(line.chinese, () => {
            onSentenceFinished();
          });
        }, 200);
      } else {
        onSentenceFinished();
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
        const transitionDelayMs = Math.round((sentenceIntervalRef.current || 2.5) * 1000);

        if (activeMode === 'single_loop') {
          if (activeFlow === 'words_only') {
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlayWordsRef.current(lineIdx, activeMode);
            }, transitionDelayMs);
          } else {
            setCurrentPhase('sentence');
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlaySentenceRef.current(lineIdx, activeMode);
            }, transitionDelayMs);
          }
        } else if (activeMode === 'continuous_all') {
          if (activeFlow === 'words_only') {
            if (lineIdx < song.lines.length - 1) {
              const nextIdx = lineIdx + 1;
              setCurrentLineIndex(nextIdx);
              timeoutRef.current = setTimeout(() => {
                if (!isPlayingRef.current) return;
                executePlayWordsRef.current(nextIdx, activeMode);
              }, transitionDelayMs);
            } else {
              setIsPlaying(false);
            }
          } else {
            setCurrentPhase('sentence');
            timeoutRef.current = setTimeout(() => {
              if (!isPlayingRef.current) return;
              executePlaySentenceRef.current(lineIdx, activeMode);
            }, transitionDelayMs);
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

        const advanceNextWord = () => {
          if (!isPlayingRef.current) return;
          i++;
          timeoutRef.current = setTimeout(playNextWord, 450);
        };

        if (isReadChineseEnabledRef.current && currentWordItem.chinese) {
          timeoutRef.current = setTimeout(() => {
            if (!isPlayingRef.current) return;
            audioManager.speakChinese(currentWordItem.chinese, () => {
              advanceNextWord();
            });
          }, 150);
        } else {
          advanceNextWord();
        }
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

  // 統一啟動播放循環流程 (需求 4: 單擊即發動，不需重複雙擊)
  const startPlayCycle = useCallback((mode: PlaybackCycleMode, lineIdx: number, phase: 'words' | 'sentence') => {
    stopAudio();
    setIsPlaying(true);

    if (phase === 'words' && flowModeRef.current !== 'sentences_only') {
      executePlayWords(lineIdx, mode);
    } else {
      executePlaySentence(lineIdx, mode);
    }
  }, [stopAudio, executePlayWords, executePlaySentence]);

  // 主播放 / 暫停按鈕
  const handlePlayCurrent = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startPlayCycle(cycleMode, currentLineIndex, currentPhase);
    }
  };

  // 切換「單句循環」
  const toggleSingleLoop = () => {
    stopAudio();
    if (cycleMode === 'single_loop') {
      setCycleMode('none');
    } else {
      setCycleMode('single_loop');
      startPlayCycle('single_loop', currentLineIndex, currentPhase);
    }
  };

  // 切換「連續自動播放」
  const toggleContinuousAutoPlay = () => {
    stopAudio();
    if (cycleMode === 'continuous_all') {
      setCycleMode('none');
    } else {
      setCycleMode('continuous_all');
      startPlayCycle('continuous_all', currentLineIndex, currentPhase);
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

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* 頂部整合型播放與控制區域 */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xs overflow-hidden">
        {/* 主要常駐列 (選句 + 播放/暫停 + 循環切換 + 隱藏設定按鈕) */}
        <div className="p-3 flex flex-wrap items-center justify-between gap-2">
          {/* 左側：句數選單與歌名 */}
          <div className="flex items-center gap-2 min-w-0">
            <select
              value={currentLineIndex}
              onChange={(e) => {
                stopAudio();
                setCurrentLineIndex(Number(e.target.value));
              }}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-hidden cursor-pointer max-w-[200px] sm:max-w-xs truncate"
            >
              {song.lines.map((line, idx) => (
                <option key={line.id} value={idx}>
                  {line.id}. {line.english}
                </option>
              ))}
            </select>

            <span className="text-xs font-mono text-slate-400 shrink-0">
              {currentLineIndex + 1}/{song.lines.length}
            </span>
          </div>

          {/* 右側：播放控制 & 展開設定按鈕 */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* 單句循環 */}
            <button
              onClick={toggleSingleLoop}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
                cycleMode === 'single_loop'
                  ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="單句循環"
            >
              <Repeat className={`w-3.5 h-3.5 ${cycleMode === 'single_loop' ? 'text-amber-500 animate-spin' : ''}`} />
              <span className="hidden sm:inline">單句循環</span>
            </button>

            {/* 自動播放 */}
            <button
              onClick={toggleContinuousAutoPlay}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
                cycleMode === 'continuous_all'
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="自動播放全曲"
            >
              <FastForward className={`w-3.5 h-3.5 ${cycleMode === 'continuous_all' ? 'text-indigo-600' : ''}`} />
              <span className="hidden sm:inline">自動播放</span>
            </button>

            {/* 一起朗讀中文勾選開關 */}
            <button
              onClick={() => setIsReadChineseEnabled(v => !v)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1.5 cursor-pointer ${
                isReadChineseEnabled
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold shadow-2xs'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="播放英文時併同朗讀中文翻譯"
            >
              <Volume2 className={`w-3.5 h-3.5 ${isReadChineseEnabled ? 'text-emerald-600 dark:text-emerald-400' : ''}`} />
              <span>朗讀中文</span>
              <input
                type="checkbox"
                checked={isReadChineseEnabled}
                onChange={() => {}}
                className="w-3.5 h-3.5 rounded accent-emerald-600 pointer-events-none"
              />
            </button>

            {/* 主播放 / 暫停鈕 */}
            <button
              onClick={handlePlayCurrent}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                isPlaying
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlaying ? '暫停' : '播放'}</span>
            </button>

            {/* 隱藏/展開設定麵包按鈕 (需求 3: 預設隱藏收合) */}
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1 cursor-pointer ${
                isSettingsOpen
                  ? 'bg-slate-100 dark:bg-slate-800 border-indigo-400 text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
              title="練習與播放設置"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">設定</span>
              {isSettingsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* 預設隱藏收合的設定選單 (需求 3) */}
        {isSettingsOpen && (
          <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            {/* 1. 朗讀速度設定 (需求 1: 預設慢速，可自訂) */}
            <div className="space-y-1.5">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-indigo-500" />
                朗讀速度 (預設 0.75x):
              </span>
              <div className="flex items-center gap-1 flex-wrap">
                {[0.5, 0.6, 0.7, 0.75, 0.85, 1.0].map(rate => (
                  <button
                    key={rate}
                    onClick={() => handleRateChange(rate)}
                    className={`px-2 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                      speechRate === rate
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            {/* 2. 自動換下一句停頓時間 (需求 2: 預設久一點，套用整體) */}
            <div className="space-y-1.5">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <FastForward className="w-3.5 h-3.5 text-indigo-500" />
                換句停頓時間 (預設 2.5s):
              </span>
              <div className="flex items-center gap-1 flex-wrap">
                {[1.0, 1.5, 2.0, 2.5, 3.0, 4.0].map(sec => (
                  <button
                    key={sec}
                    onClick={() => setSentenceInterval(sec)}
                    className={`px-2 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                      sentenceInterval === sec
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {sec}s
                  </button>
                ))}
              </div>
            </div>

            {/* 3. 併同朗讀中文 */}
            <div className="space-y-1.5">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-emerald-500" />
                併同朗讀中文:
              </span>
              <label className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                <input
                  type="checkbox"
                  checked={isReadChineseEnabled}
                  onChange={(e) => setIsReadChineseEnabled(e.target.checked)}
                  className="w-4 h-4 rounded accent-emerald-600 cursor-pointer"
                />
                <span>播放完英文後一起朗讀中文</span>
              </label>
            </div>

            {/* 4. 練習流程模式切換 (需求 4) */}
            <div className="space-y-1.5">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                練習流程模式:
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    stopAudio();
                    setCycleMode('none');
                    setFlowMode('sequential');
                  }}
                  className={`px-2.5 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                    flowMode === 'sequential'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  單字+整句
                </button>
                <button
                  onClick={() => {
                    stopAudio();
                    setCycleMode('none');
                    setFlowMode('words_only');
                    setCurrentPhase('words');
                  }}
                  className={`px-2.5 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                    flowMode === 'words_only'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  僅單字
                </button>
                <button
                  onClick={() => {
                    stopAudio();
                    setCycleMode('none');
                    setFlowMode('sentences_only');
                    setCurrentPhase('sentence');
                  }}
                  className={`px-2.5 py-1 rounded-lg font-bold text-xs transition cursor-pointer ${
                    flowMode === 'sentences_only'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  僅句子
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 主展示卡片：單字拆解 / 整句朗讀 (純淨大字排版) */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-8 flex flex-col justify-between shadow-2xs relative overflow-hidden">
        {/* 頂部階段資訊列 */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">
              #{currentLine.id}
            </span>
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              {currentPhase === 'words' ? '單字拆解朗讀' : '整句完整朗讀'}
            </span>
            {cycleMode === 'single_loop' && (
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                單句循環中
              </span>
            )}
            {cycleMode === 'continuous_all' && (
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                自動播放中 ({sentenceInterval}s 停頓)
              </span>
            )}
          </div>

          {/* Sequential 模式下提供快速微調切換 */}
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
                    <div className="flex items-center gap-1 font-bold">
                      <span>{w.word}</span>
                      <Volume2 className={`w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition ${isWordActive ? 'text-white' : 'text-indigo-500'}`} />
                    </div>

                    <div className={`text-[11px] font-mono tracking-tight ${isWordActive ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-400'}`}>
                      {w.ipa}
                    </div>

                    <div className={`text-xs font-medium mt-0.5 truncate max-w-[120px] ${isWordActive ? 'text-indigo-50' : 'text-slate-600 dark:text-slate-300'}`}>
                      {w.chinese}
                    </div>

                    {w.syllables && w.syllables.length > 1 && (
                      <div className={`text-[10px] mt-1 px-1.5 py-0.2 rounded-md ${isWordActive ? 'bg-indigo-700/60 text-indigo-100' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                        {w.syllables.join(' • ')}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* 若有選中單字，顯示微型釋義列 */}
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
          /* ===== 階段 B：整句完整歌詞練習 ===== */
          <div className="my-auto py-4 space-y-5 text-center max-w-2xl mx-auto">
            <h2 className={`font-bold tracking-tight text-slate-900 dark:text-white leading-relaxed ${fontSizes.sentence}`}>
              &ldquo;{currentLine.english}&rdquo;
            </h2>

            <p className={`font-medium text-indigo-600 dark:text-indigo-400 ${fontSizes.chinese}`}>
              {currentLine.chinese}
            </p>

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
