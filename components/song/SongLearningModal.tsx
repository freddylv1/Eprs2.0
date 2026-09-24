'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { ALL_SONGS, SongItem, getFormattedSongTitle, getShortArtistName } from '../../lib/songData';
import { SongLyricsPractice } from './SongLyricsPractice';
import { SongVocabPractice } from './SongVocabPractice';
import { audioManager } from '../../lib/audioManager';
import { FontSizePreference } from '../../lib/types';
import {
  getSongSettingsByTitle,
  getLastSelectedSongId,
  saveLastSelectedSongId,
  SongProgressState
} from '../../lib/songStorage';
import {
  X,
  Volume2,
  BookOpen,
  ListOrdered,
  FileText,
  Maximize2,
  Minimize2,
  ChevronDown,
  Search,
  PanelLeft,
  PanelLeftClose,
  Check
} from 'lucide-react';

interface SongLearningModalProps {
  isOpen: boolean;
  onClose: () => void;
  fontSize: FontSizePreference;
}

type MainTab = 'lyrics_practice' | 'vocab_practice' | 'full_lyrics';

export function SongLearningModal({ isOpen, onClose, fontSize }: SongLearningModalProps) {
  // 從 localStorage 恢復上次學習的歌曲 ID
  const [selectedSongId, setSelectedSongId] = useState<string>(() =>
    getLastSelectedSongId(ALL_SONGS[0].id)
  );
  const [mainTab, setMainTab] = useState<MainTab>('lyrics_practice');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [playingLineId, setPlayingLineId] = useState<number | null>(null);

  // 側邊欄展開狀態 (預設關閉以讓中央播放區域最大化且最專注)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentSong: SongItem =
    ALL_SONGS.find(s => s.id === selectedSongId) || ALL_SONGS[0];

  // 當前選取歌曲的進度概覽（以 songTitle 為 Key 封裝在 localStorage 中）
  const [songProgressState, setSongProgressState] = useState<SongProgressState>(() =>
    getSongSettingsByTitle(currentSong.title, currentSong.lines.length)
  );

  // 切換選取的歌曲：徹底終止先前播放器執行緒、聲音與單句播放，並載入以 songTitle 為 Key 的專屬配置
  const handleSelectSong = (songId: string) => {
    // 1. 徹底終止先前的音訊播放器執行緒與重設單句播放高亮
    audioManager.stop();
    setPlayingLineId(null);

    // 2. 獲取切換目標歌曲
    const targetSong = ALL_SONGS.find(s => s.id === songId) || ALL_SONGS[0];

    // 3. 讀取以 targetSong.title 為 Key 的獨立配置 (progress, loop, playbackSpeed)
    const targetSettings = getSongSettingsByTitle(targetSong.title, targetSong.lines.length);

    // 4. 將音訊引擎語速立即設為該歌曲專屬設定，避免互相干擾
    audioManager.setRate(targetSettings.playbackSpeed);

    // 5. 更新狀態與持久化上次選歌 ID
    setSelectedSongId(targetSong.id);
    saveLastSelectedSongId(targetSong.id);
    setSongProgressState(targetSettings);
  };

  // 穩定處理練習進度回呼，僅在值真正改變時更新 state，防範無限重新渲染迴圈
  const handleProgressChange = useCallback((progress: SongProgressState) => {
    setSongProgressState(prev => {
      const p = progress.progress ?? progress.lineIndex;
      const l = progress.loop ?? progress.isSingleLoop;
      const s = progress.playbackSpeed ?? progress.speechRate;

      if (
        prev.progress === p &&
        prev.loop === l &&
        prev.playbackSpeed === s
      ) {
        return prev;
      }
      return {
        ...prev,
        progress: p,
        loop: l,
        playbackSpeed: s,
        lineIndex: p,
        isSingleLoop: l,
        speechRate: s
      };
    });
  }, []);

  // 關閉 Modal 時徹底停止聲音
  const handleCloseModal = () => {
    audioManager.stop();
    setPlayingLineId(null);
    onClose();
  };

  // 播放單句歌詞 (切換前先徹底終止先前音訊)
  const handlePlaySingleLine = (englishText: string, lineId: number) => {
    audioManager.stop();
    setPlayingLineId(lineId);
    audioManager.speakSentence(englishText, () => {
      setPlayingLineId(null);
    });
  };

  // 依搜尋詞過濾側邊欄曲目
  const filteredSongs = useMemo(() => {
    if (!searchQuery.trim()) return ALL_SONGS;
    const q = searchQuery.toLowerCase();
    return ALL_SONGS.filter(
      s => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-2 sm:p-4 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className={`flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 shadow-2xl transition-all duration-200 ${
          isFullScreen
            ? 'w-full h-full rounded-none'
            : 'w-full max-w-5xl h-[92vh] max-h-[900px] rounded-3xl border border-slate-200/90 dark:border-slate-800'
        } overflow-hidden`}
      >
        {/* 極簡頂部工具列：將選歌、分頁切換與控制項整合為單一純淨列 */}
        <header className="flex items-center justify-between px-3 sm:px-5 py-2.5 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shrink-0 gap-3">
          {/* 左側：側邊欄切換鈕 + 精簡下拉式選歌清單 */}
          <div className="flex items-center gap-2 min-w-0">
            {/* 側邊欄曲目按鈕 */}
            <button
              onClick={() => setIsSidebarOpen(open => !open)}
              className={`p-1.5 rounded-xl border transition cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
                isSidebarOpen
                  ? 'border-indigo-300 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title={isSidebarOpen ? '收合曲目側邊欄' : '展開曲目側邊欄'}
            >
              {isSidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
              <span className="hidden md:inline">曲目 ({ALL_SONGS.length})</span>
            </button>

            {/* 下拉式選歌清單 (直覺、免開彈窗、佔版面最小) */}
            <div className="relative flex items-center">
              <select
                value={selectedSongId}
                onChange={(e) => handleSelectSong(e.target.value)}
                className="appearance-none bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200/70 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 rounded-xl pl-3 pr-7 py-1.5 focus:outline-hidden cursor-pointer max-w-[200px] sm:max-w-[280px] truncate transition"
                title="快速切換歌曲"
              >
                {ALL_SONGS.map(s => (
                  <option key={s.id} value={s.id}>
                    {getFormattedSongTitle(s)}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 pointer-events-none absolute right-2" />
            </div>
          </div>

          {/* 中間：極簡練習功能切換 (歌詞練習 / 單字庫 / 雙語全詞) */}
          <nav className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl shrink-0">
            <button
              onClick={() => {
                audioManager.stop();
                setPlayingLineId(null);
                setMainTab('lyrics_practice');
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                mainTab === 'lyrics_practice'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>歌詞練習</span>
            </button>

            <button
              onClick={() => {
                audioManager.stop();
                setPlayingLineId(null);
                setMainTab('vocab_practice');
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                mainTab === 'vocab_practice'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>單字庫</span>
            </button>

            <button
              onClick={() => {
                audioManager.stop();
                setPlayingLineId(null);
                setMainTab('full_lyrics');
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                mainTab === 'full_lyrics'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">雙語全詞</span>
              <span className="sm:hidden">全詞</span>
            </button>
          </nav>

          {/* 右側：精簡進度文字 + 全螢幕 / 關閉按鈕 */}
          <div className="flex items-center gap-1.5 shrink-0">
            {songProgressState && (
              <span className="text-xs text-slate-400 hidden lg:inline mr-1">
                第 {songProgressState.progress + 1}/{currentSong.totalLines} 句
                {songProgressState.playbackSpeed ? ` · ${songProgressState.playbackSpeed}x` : ''}
              </span>
            )}

            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title={isFullScreen ? '還原視窗' : '全螢幕顯示'}
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handleCloseModal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="關閉專區"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* 主體區塊：側邊欄 + 中央核心學習播放區 */}
        <div className="flex flex-1 overflow-hidden relative">
          {/* 精簡曲目側邊欄 (支援快速切換與搜尋，可隨時收折) */}
          {isSidebarOpen && (
            <aside className="w-60 sm:w-64 border-r border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/70 flex flex-col shrink-0 overflow-hidden animate-in slide-in-from-left-2 duration-150">
              {/* 搜尋列 */}
              <div className="p-2.5 border-b border-slate-200/60 dark:border-slate-800/60">
                <div className="relative flex items-center">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜尋歌曲..."
                    className="w-full text-xs pl-8 pr-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:border-indigo-500 text-slate-800 dark:text-slate-200 placeholder-slate-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* 歌曲列表 */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredSongs.map(s => {
                  const isSelected = s.id === selectedSongId;
                  const saved = getSongSettingsByTitle(s.title, s.lines.length);

                  return (
                    <button
                      key={s.id}
                      onClick={() => handleSelectSong(s.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-2xs font-semibold ring-1 ring-slate-200/80 dark:ring-slate-700'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="text-xs truncate font-medium">
                          {getFormattedSongTitle(s)}
                        </div>
                        <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                          {s.totalLines} 句歌詞
                        </div>
                      </div>

                      {isSelected ? (
                        <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      ) : saved.progress > 0 ? (
                        <span className="text-[10px] text-slate-400 font-mono shrink-0">
                          {saved.progress + 1}句
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </aside>
          )}

          {/* 中央核心播放與學習區域：佔據畫面正中心 */}
          <main className="flex-1 flex flex-col overflow-y-auto p-3 sm:p-5 lg:p-6 bg-slate-50/50 dark:bg-slate-950/50">
            <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center">
              {mainTab === 'lyrics_practice' && (
                <SongLyricsPractice
                  key={currentSong.id}
                  song={currentSong}
                  fontSize={fontSize}
                  onProgressChange={handleProgressChange}
                />
              )}

              {mainTab === 'vocab_practice' && (
                <SongVocabPractice key={currentSong.id} song={currentSong} fontSize={fontSize} />
              )}

              {mainTab === 'full_lyrics' && (
                /* 中英雙語全歌詞清單 (極簡舒適無干擾模式) */
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 shadow-2xs h-full flex flex-col">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800 shrink-0">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {currentSong.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {currentSong.artist} · 共 {currentSong.totalLines} 句歌詞
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/80 pr-1">
                    {currentSong.lines.map((line) => {
                      const isCurrentPlaying = playingLineId === line.id;

                      return (
                        <div
                          key={`line-overview-${line.id}`}
                          className="py-3 px-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition flex items-center justify-between gap-4 group"
                        >
                          <div className="flex items-start gap-3">
                            <span className="w-6 text-center text-xs font-mono font-bold text-slate-400 shrink-0 mt-0.5">
                              {line.id}
                            </span>
                            <div className="space-y-0.5">
                              <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                                {line.english}
                              </div>
                              <div className="text-xs text-indigo-600 dark:text-indigo-400">
                                {line.chinese}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => handlePlaySingleLine(line.english, line.id)}
                              className={`p-2 rounded-xl transition cursor-pointer ${
                                isCurrentPlaying
                                  ? 'bg-rose-500 text-white animate-pulse'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white'
                              }`}
                              title="聆聽整句發音"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
