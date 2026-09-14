'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    );
  });
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('pwa-install-dismissed') === 'true';
  });
  const [isInAppBrowser, setIsInAppBrowser] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const ua = navigator.userAgent || '';
    return /Line|FBAN|FBAV|Instagram|MicroMessenger/i.test(ua);
  });
  const [isIOS, setIsIOS] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const ua = navigator.userAgent || '';
    return /iPhone|iPad|iPod/i.test(ua);
  });
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      sessionStorage.removeItem('pwa-install-dismissed');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSModal(true);
    } else {
      alert('請點擊瀏覽器右上角選單 (⋮)，然後選擇「安裝應用程式」或「加到主畫面」即可安裝成 App！');
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('pwa-install-dismissed', 'true');
  };

  if (isInstalled || isDismissed) return null;

  return (
    <>
      {/* Smart In-App Browser (LINE / FB) Guidance Warning */}
      {isInAppBrowser && (
        <div className="bg-amber-500 text-white px-4 py-2.5 text-xs font-semibold flex items-center justify-between shadow-xs sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 shrink-0 animate-pulse" />
            <span>
              檢測到您正在使用社群 App 內建瀏覽器。若要將本系統安裝為手機 App，請點擊右上角「<strong>⋮</strong>」或「<strong>…</strong>」，選擇「<strong>在瀏覽器中開啟</strong> (Chrome/Safari)」。
            </span>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 text-white/80 hover:text-white cursor-pointer ml-2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Modern Compact Install Prompt Banner */}
      {!isInAppBrowser && (deferredPrompt || isIOS) && (
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white px-3 py-2 text-xs shadow-md border-b border-indigo-400/30 flex items-center justify-between gap-2 z-40 sticky top-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white shrink-0">
              <Download className="h-4 w-4" />
            </div>
            <div className="truncate">
              <span className="font-bold">安裝 EPRS 英語 App</span>
              <span className="hidden sm:inline text-indigo-100 ml-1.5">
                • 支援獨立全螢幕運行、離線練習單字與音節發音
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallClick}
              className="rounded-lg bg-white px-3 py-1 font-bold text-indigo-700 shadow-2xs hover:bg-indigo-50 active:scale-95 transition cursor-pointer text-xs inline-flex items-center gap-1"
            >
              <span>立即安裝</span>
            </button>
            <button
              onClick={handleDismiss}
              className="p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
              title="稍後再說"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* iOS Safari Instruction Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl dark:bg-slate-900 dark:border dark:border-slate-800 text-center">
            <button
              onClick={() => setShowIOSModal(false)}
              className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 mb-3">
              <Smartphone className="h-6 w-6" />
            </div>

            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
              在 iPhone / iPad 上安裝
            </h3>
            <div className="text-left text-xs space-y-2 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-850 p-3.5 rounded-xl border border-slate-200 dark:border-slate-750">
              <div className="flex items-start gap-2">
                <span className="font-bold text-indigo-600">1.</span>
                <span>點擊 Safari 瀏覽器底部的「<strong>分享</strong>」圖示（帶箭頭的方塊）。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-indigo-600">2.</span>
                <span>向下滾動並選擇「<strong>加入主畫面</strong> (Add to Home Screen)」。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-indigo-600">3.</span>
                <span>點擊右上角的「<strong>新增</strong>」即刻完成安裝！</span>
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="mt-4 w-full rounded-xl bg-indigo-600 py-2 text-xs font-bold text-white shadow-xs hover:bg-indigo-500 transition cursor-pointer"
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  );
}
