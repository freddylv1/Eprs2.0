'use client';

import React, { useState } from 'react';
import { FontSizePreference } from '../../lib/types';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';
import { audioManager, AudioEngineMode } from '../../lib/audioManager';
import {
  Volume2,
  X,
  Play,
  CheckCircle2,
  AlertTriangle,
  BellOff,
  Sliders,
  Headphones,
  Smartphone,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface AudioDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  fontSize: FontSizePreference;
}

export function AudioDiagnosticModal({
  isOpen,
  onClose,
  fontSize
}: AudioDiagnosticModalProps) {
  const [isPlayingTest, setIsPlayingTest] = useState<boolean>(false);
  const [engineMode, setEngineMode] = useState<AudioEngineMode>(() => audioManager.getEngineMode());
  const [speechRate, setSpeechRate] = useState<number>(() => audioManager.getRate());
  const [testResult, setTestResult] = useState<'idle' | 'success' | 'troubleshoot'>('idle');

  const fontClasses = getModalFontSizeClasses(fontSize);

  if (!isOpen) return null;

  const handleTestPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingTest(true);
    audioManager.unlockAudio();
    audioManager.testSpeech('Welcome to EPRS Phonics!', () => {
      setIsPlayingTest(false);
    });
  };

  const handleEngineChange = (mode: AudioEngineMode) => {
    setEngineMode(mode);
    audioManager.setEngineMode(mode);
    // 自動播放簡短測試
    audioManager.testSpeech('Phonics', () => {});
  };

  const handleRateChange = (rate: number) => {
    setSpeechRate(rate);
    audioManager.setRate(rate);
  };

  return (
    <div
      id="audio-diagnostic-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="audio-diagnostic-modal-content"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
              <Volume2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className={`${fontClasses.title} text-slate-900 dark:text-white flex items-center gap-2`}>
                聲音設定與 iPad 無聲排查指南
              </h2>
              <p className={`${fontClasses.subtext} text-slate-500 dark:text-slate-400`}>
                測試發音通道、切換發音引擎及解決 Apple iOS/iPadOS 靜音問題
              </p>
            </div>
          </div>
          <button
            id="close-audio-diagnostic-modal-btn"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
            title="關閉"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Section 1: Quick Audio Test */}
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 dark:border-indigo-900/40 dark:bg-indigo-950/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  步驟 1：一鍵解鎖並測試發音
                </h3>
                <p className={`${fontClasses.subtext} text-slate-600 dark:text-slate-300 mt-1`}>
                  點擊按鈕將即時啟用 iOS 音訊通道並朗讀測試語音：「Welcome to EPRS Phonics!」
                </p>
              </div>

              <button
                id="btn-play-test-sound"
                onClick={handleTestPlay}
                disabled={isPlayingTest}
                className={`shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-bold shadow-md transition ${
                  isPlayingTest
                    ? 'bg-amber-500 text-white animate-pulse'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
                }`}
              >
                {isPlayingTest ? (
                  <>
                    <Volume2 className="h-4 w-4 animate-bounce" />
                    <span>正在播放中...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-current" />
                    <span>點擊測試發音</span>
                  </>
                )}
              </button>
            </div>

            {/* Test result feedback prompt */}
            <div className="mt-4 pt-3 border-t border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                聽得到聲音嗎？
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTestResult('success')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                    testResult === 'success'
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  聽得到，很正常！
                </button>
                <button
                  onClick={() => setTestResult('troubleshoot')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition ${
                    testResult === 'troubleshoot'
                      ? 'bg-rose-600 border-rose-600 text-white'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                  }`}
                >
                  <AlertTriangle className="h-3.5 w-3.5" />
                  聽不到聲音
                </button>
              </div>
            </div>

            {testResult === 'success' && (
              <div className="mt-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-3 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>您的設備發音通道已成功啟動！單字列表與矩陣練習中的所有發音按鈕皆可正常播放。</span>
              </div>
            )}
          </div>

          {/* Section 2: Engine Mode Selection */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                  <Sliders className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  步驟 2：切換發音引擎（iPad 推薦「高清晰真人音源」）
                </h3>
                <p className={`${fontClasses.subtext} text-slate-500 dark:text-slate-400 mt-0.5`}>
                  若系統合成語音在某些瀏覽器無聲，切換為「高清晰真人音源」可保證 100% 相容。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <button
                onClick={() => handleEngineChange('audio_stream')}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  engineMode === 'audio_stream'
                    ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 ring-2 ring-indigo-600/30'
                    : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 bg-white dark:bg-slate-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">高清晰真人音源</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      iPad 推薦
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    直接播放美式真人發音 MP3，聲音響亮，不受 iOS 語音合成 Bug 影響。
                  </p>
                </div>
              </button>

              <button
                onClick={() => handleEngineChange('auto')}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  engineMode === 'auto'
                    ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 ring-2 ring-indigo-600/30'
                    : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 bg-white dark:bg-slate-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">自動最佳模式</span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      預設
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    優先使用本地快取，無快取時以系統合成發音即時朗讀並背景累積。
                  </p>
                </div>
              </button>

              <button
                onClick={() => handleEngineChange('webspeech')}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  engineMode === 'webspeech'
                    ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 ring-2 ring-indigo-600/30'
                    : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 bg-white dark:bg-slate-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">系統語音合成</span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      可調速
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    使用 Apple Siri / 系統 TTS 引擎，支援自由調節慢速 (0.7x) 或標準速。
                  </p>
                </div>
              </button>
            </div>

            {/* Speech Rate Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                發音速度設定：
              </span>
              <div className="flex items-center gap-1.5">
                {[0.7, 0.85, 1.0].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => handleRateChange(rate)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                      speechRate === rate
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: iPad Troubleshooting Checklist */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-rose-500" />
              iPad / iPhone 依然沒有聲音？請依序檢查以下 4 點：
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Item 1: Control Center Silent Mode */}
              <div className="rounded-xl border border-rose-200/80 bg-rose-50/50 dark:border-rose-900/40 dark:bg-rose-950/20 p-3.5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400 shrink-0">
                  <BellOff className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    1. 檢查控制中心「靜音模式」
                    <span className="text-[10px] text-rose-600 dark:text-rose-400 font-bold">最常見原因</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    在 iPad 螢幕<strong>右上角向下滑出「控制中心」</strong>，確認<strong>「鈴鐺圖示」沒有亮紅色劃線</strong>。
                    <br />
                    <em>注意：iPad 即使開啟靜音模式，看 YouTube 依然有聲音，但所有網頁語音都會被強制靜音！</em>
                  </p>
                </div>
              </div>

              {/* Item 2: Physical Volume */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-850 p-3.5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 shrink-0">
                  <Volume2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    2. 調高機身側邊音量
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    按壓 iPad 側邊的「音量增大鍵」或在控制中心將音量拉桿推至 50% 以上，避免多媒體音量處於零。
                  </p>
                </div>
              </div>

              {/* Item 3: Bluetooth output */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-850 p-3.5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-400 shrink-0">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    3. 檢查藍牙耳機連線
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    確認 iPad 是否正連線到放在包包裡的 AirPods 或藍牙音箱，導致聲音從耳機輸出而聽不到喇叭聲。
                  </p>
                </div>
              </div>

              {/* Item 4: Safari Permissions */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-850 p-3.5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 shrink-0">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    4. 點擊螢幕手勢觸發
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Apple iOS 限制網頁不可未經點擊自動播放聲音。請務必在畫面上手動點擊喇叭按鈕即可開始播放。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-10 flex items-center justify-between border-t border-slate-200 bg-slate-50/95 px-6 py-3.5 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            設定已自動儲存至本機
          </span>
          <button
            id="audio-modal-confirm-btn"
            onClick={onClose}
            className="rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-500 transition"
          >
            完成設定
          </button>
        </div>
      </div>
    </div>
  );
}
