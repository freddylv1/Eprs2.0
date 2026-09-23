'use client';

import { useSyncExternalStore, useEffect, useCallback } from 'react';

// Tiny blank 1x1 MP4 video (base64) for fallback wake lock in browsers without WakeLock API
const BLANK_VIDEO_B64 =
  'data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAADpmcmVlAAAAEG1kYXQAAAAAAAAAAAYAAAABAAABAG1vb3YAAABsbXZoAAAAAAAAAAAAAAAAAAAAAAABAAAAVAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAaJ0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAAVAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA==';

class ScreenWakeLockService {
  private sentinel: WakeLockSentinel | null = null;
  private videoFallback: HTMLVideoElement | null = null;
  private isRequested: boolean = false;
  private isActive: boolean = false;
  private lastError: string | null = null;
  private listeners: Set<() => void> = new Set();
  private hasInitListeners: boolean = false;

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (e) {
        console.error('[WakeLock] Listener error:', e);
      }
    });
  }

  public subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    if (!this.hasInitListeners && typeof document !== 'undefined') {
      this.hasInitListeners = true;
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }
    return () => {
      this.listeners.delete(listener);
    };
  };

  public getSnapshot = () => {
    return this.isActive;
  };

  public getErrorSnapshot = () => {
    return this.lastError;
  };

  private handleVisibilityChange = () => {
    if (document.visibilityState === 'visible' && this.isRequested) {
      this.request();
    }
  };

  public async request(): Promise<boolean> {
    this.isRequested = true;
    this.lastError = null;

    // 1. 優先使用原生 W3C Screen Wake Lock API
    if (typeof window !== 'undefined' && 'wakeLock' in navigator && navigator.wakeLock) {
      try {
        if (this.sentinel && !this.sentinel.released) {
          if (!this.isActive) {
            this.isActive = true;
            this.notify();
          }
          return true;
        }

        const sentinel = await navigator.wakeLock.request('screen');
        this.sentinel = sentinel;

        sentinel.addEventListener('release', () => {
          if (this.sentinel === sentinel) {
            this.sentinel = null;
            this.isActive = false;
            this.notify();
          }
        });

        this.isActive = true;
        this.notify();
        return true;
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn('[WakeLock] Native API request failed:', msg);
        this.lastError = msg;
      }
    }

    // 2. 備用方案 (Video Loop Fallback - 適用於未支援 WakeLock API 之舊環境)
    if (typeof document !== 'undefined') {
      try {
        if (!this.videoFallback) {
          const video = document.createElement('video');
          video.setAttribute('playsinline', '');
          video.setAttribute('muted', '');
          video.setAttribute('loop', '');
          video.muted = true;
          video.loop = true;
          video.style.position = 'fixed';
          video.style.top = '-9999px';
          video.style.left = '-9999px';
          video.style.width = '1px';
          video.style.height = '1px';
          video.style.opacity = '0';
          video.style.pointerEvents = 'none';
          video.src = BLANK_VIDEO_B64;
          document.body.appendChild(video);
          this.videoFallback = video;
        }

        const playPromise = this.videoFallback.play();
        if (playPromise) {
          await playPromise;
        }
        this.isActive = true;
        this.notify();
        return true;
      } catch (videoErr: unknown) {
        console.warn('[WakeLock] Video fallback failed:', videoErr);
      }
    }

    this.isActive = false;
    this.notify();
    return false;
  }

  public async release(): Promise<void> {
    this.isRequested = false;

    if (this.sentinel) {
      try {
        await this.sentinel.release();
      } catch (err) {
        console.warn('[WakeLock] Release error:', err);
      } finally {
        this.sentinel = null;
      }
    }

    if (this.videoFallback) {
      try {
        this.videoFallback.pause();
        this.videoFallback.removeAttribute('src');
        this.videoFallback.load();
        this.videoFallback.remove();
      } catch {}
      this.videoFallback = null;
    }

    if (this.isActive) {
      this.isActive = false;
      this.notify();
    }
  }

  public isSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'wakeLock' in navigator && typeof navigator.wakeLock?.request === 'function';
  }
}

export const screenWakeLockService = new ScreenWakeLockService();

export interface UseScreenWakeLockReturn {
  isSupported: boolean;
  isActive: boolean;
  error: string | null;
  requestLock: () => Promise<boolean>;
  releaseLock: () => Promise<void>;
}

/**
 * 螢幕喚醒鎖定 Hook (Screen Wake Lock Hook)
 * 當快速練習自動播放進行時，保持螢幕常亮，防止裝置因逾時關閉螢幕或進入低耗電休眠。
 */
export function useScreenWakeLock(enabled: boolean = false): UseScreenWakeLockReturn {
  const isActive = useSyncExternalStore(
    screenWakeLockService.subscribe,
    screenWakeLockService.getSnapshot,
    () => false
  );

  const error = useSyncExternalStore(
    screenWakeLockService.subscribe,
    screenWakeLockService.getErrorSnapshot,
    () => null
  );

  const isSupported = screenWakeLockService.isSupported();

  useEffect(() => {
    if (enabled) {
      screenWakeLockService.request();
      return () => {
        screenWakeLockService.release();
      };
    } else {
      screenWakeLockService.release();
    }
  }, [enabled]);

  const requestLock = useCallback(() => screenWakeLockService.request(), []);
  const releaseLock = useCallback(() => screenWakeLockService.release(), []);

  return {
    isSupported,
    isActive,
    error,
    requestLock,
    releaseLock,
  };
}
