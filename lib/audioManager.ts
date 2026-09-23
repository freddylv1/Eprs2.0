'use client';

import { audioCache } from './audioCache';

export type AudioEngineMode = 'auto' | 'webspeech' | 'audio_stream';

/**
 * 取得可靠的真人英語 MP3 音源網址（高相容性 CDN，支援 iOS Safari 直接播放）
 */
function getOnlineAudioSources(word: string): string[] {
  const clean = encodeURIComponent(word.toLowerCase().trim());
  return [
    // 來源 1: 網易有道美式英語發音 CDN（格式標準 MP3，iOS Safari 相容性極佳，無 CORS 限制）
    `https://dict.youdao.com/dictvoice?audio=${clean}&type=2`,
    // 來源 2: Google 英語語音
    `https://translate.google.com/translate_tts?ie=UTF-8&q=${clean}&tl=en&client=tw-ob`,
    // 來源 3: Dictionary API
    `https://api.dictionaryapi.dev/media/pronunciations/en/${clean}-us.mp3`
  ];
}

class PhonicsAudioManager {
  private synth: SpeechSynthesis | null = null;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private rate: number = 0.85;
  private currentAudioElement: HTMLAudioElement | null = null;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private audioContext: AudioContext | null = null;
  private isUnlocked: boolean = false;
  private engineMode: AudioEngineMode = 'auto';

  // 記憶體快取：儲存已取得的 Blob URL，提供 0 延遲同步播放（不破壞 iOS 使用者手勢）
  private memoryBlobUrls: Map<string, string> = new Map();

  constructor() {
    if (typeof window !== 'undefined') {
      // 讀取已儲存的發音引擎偏好
      try {
        const savedEngine = localStorage.getItem('eprs_audio_engine') as AudioEngineMode | null;
        if (savedEngine && ['auto', 'webspeech', 'audio_stream'].includes(savedEngine)) {
          this.engineMode = savedEngine;
        }
      } catch {}

      if ('speechSynthesis' in window) {
        this.synth = window.speechSynthesis;
        this.initVoices();
      }

      // 自動監聽首次使用者點擊/觸控，立即解鎖 iOS AudioContext 與 Web Speech
      this.initUnlockListeners();
    }
  }

  /**
   * 解鎖 iOS / iPadOS Safari 音訊權限
   * 現代 WebKit 規定音訊上下文必須在真實使用者手勢（touch/click）的同步呼叫堆疊中啟動
   */
  public unlockAudio() {
    if (this.isUnlocked || typeof window === 'undefined') return;

    try {
      // 1. 解鎖 Web Audio API
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        if (!this.audioContext) {
          this.audioContext = new AudioCtx();
        }
        if (this.audioContext.state === 'suspended') {
          this.audioContext.resume();
        }
        // 播放 0.01 秒極短靜音緩衝
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        gain.gain.value = 0.001; // 近乎無聲
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        osc.start(0);
        osc.stop(this.audioContext.currentTime + 0.01);
      }

      // 2. 解鎖 Web Speech API
      if (this.synth) {
        this.synth.resume();
        const dummyUtterance = new SpeechSynthesisUtterance('');
        dummyUtterance.volume = 0;
        this.synth.speak(dummyUtterance);
      }

      this.isUnlocked = true;
    } catch {
      // 靜默忽略解鎖例外
    }
  }

  private initUnlockListeners() {
    if (typeof window === 'undefined') return;

    const handleFirstInteraction = () => {
      this.unlockAudio();
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('touchend', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('touchstart', handleFirstInteraction, { passive: true, once: true });
    window.addEventListener('touchend', handleFirstInteraction, { passive: true, once: true });
    window.addEventListener('click', handleFirstInteraction, { passive: true, once: true });
  }

  private initVoices() {
    if (!this.synth) return;
    const load = () => {
      const voices = this.synth?.getVoices() || [];
      // 優先尋找美式英語或 iOS 內建的高音質聲音（如 Samantha / Karen / Alex / Daniel）
      const usVoice =
        voices.find(
          v =>
            v.lang.startsWith('en-US') &&
            (v.name.includes('Samantha') ||
              v.name.includes('Karen') ||
              v.name.includes('Natural') ||
              v.name.includes('Google') ||
              v.name.includes('Siri') ||
              v.name.includes('Daniel') ||
              v.name.includes('Alex'))
        ) ||
        voices.find(v => v.lang.startsWith('en-US')) ||
        voices.find(v => v.lang.startsWith('en'));

      if (usVoice) {
        this.selectedVoice = usVoice;
      }
    };

    load();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = load;
    }
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.5, Math.min(1.5, newRate));
  }

  public getRate(): number {
    return this.rate;
  }

  public setEngineMode(mode: AudioEngineMode) {
    this.engineMode = mode;
    try {
      localStorage.setItem('eprs_audio_engine', mode);
    } catch {}
  }

  public getEngineMode(): AudioEngineMode {
    return this.engineMode;
  }

  /**
   * 停止當前任何正在播放的聲音，徹底清除回呼與執行緒防範競態
   */
  public stop() {
    if (this.currentAudioElement) {
      this.currentAudioElement.onended = null;
      this.currentAudioElement.onerror = null;
      this.currentAudioElement.pause();
      this.currentAudioElement.currentTime = 0;
      this.currentAudioElement = null;
    }
    if (this.activeUtterance) {
      this.activeUtterance.onend = null;
      this.activeUtterance.onerror = null;
      this.activeUtterance = null;
    }
    if (typeof window !== 'undefined' && (window as unknown as { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance) {
      const globalUtterance = (window as unknown as { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance;
      if (globalUtterance) {
        globalUtterance.onend = null;
        globalUtterance.onerror = null;
      }
      (window as unknown as { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
    }
    if (this.synth) {
      if (this.synth.speaking || this.synth.pending) {
        this.synth.cancel();
      }
    }
  }

  /**
   * 背景抓取並快取音檔至 IndexedDB & 記憶體
   */
  private fetchAndCacheInBackground(cleanText: string) {
    if (typeof navigator === 'undefined' || !navigator.onLine) return;
    if (this.memoryBlobUrls.has(cleanText)) return;

    (async () => {
      // 先看 IndexedDB 是否有
      const existing = await audioCache.getAudioBlob(cleanText);
      if (existing) {
        this.memoryBlobUrls.set(cleanText, URL.createObjectURL(existing));
        return;
      }

      // 若無，背景下載
      const urls = getOnlineAudioSources(cleanText);
      for (const url of urls) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 4000);
          const response = await fetch(url, { signal: controller.signal });
          clearTimeout(timeoutId);

          if (response.ok) {
            const blob = await response.blob();
            if (blob.size > 500) {
              await audioCache.saveAudioBlob(cleanText, blob);
              this.memoryBlobUrls.set(cleanText, URL.createObjectURL(blob));
              break;
            }
          }
        } catch {
          // 網路失敗靜默略過
        }
      }
    })();
  }

  /**
   * 核心播放邏輯：
   * 關鍵修正：絕不在使用者手勢事件中插入 await 操作，以保證 iOS Safari 的使用者手勢權限不失效！
   */
  public speakWord(word: string, onEnd?: () => void): boolean {
    this.unlockAudio();
    this.stop();

    const cleanText = word.replace(/\(.*?\)/g, '').replace(/[\/\.]/g, ' ').trim();
    if (!cleanText) {
      onEnd?.();
      return false;
    }

    // 檢查是否記憶體內已備妥 Blob URL
    const inMemoryUrl = this.memoryBlobUrls.get(cleanText);
    if (inMemoryUrl) {
      return this.playAudioUrl(inMemoryUrl, onEnd, () => {
        this.fallbackWebSpeech(cleanText, onEnd);
      });
    }

    // 若設定偏好為線上音訊串流，或在 iOS 遇到 WebSpeech 無法發音時直接使用音訊串流
    if (this.engineMode === 'audio_stream') {
      const urls = getOnlineAudioSources(cleanText);
      return this.playAudioWithFallbackList(urls, 0, onEnd, () => {
        this.fallbackWebSpeech(cleanText, onEnd);
      });
    }

    // 預設 (auto 或 webspeech)：
    // 同步立即呼叫 Web Speech（0 秒延遲、100% 保持在 iOS 手勢上下文）
    const speechOk = this.fallbackWebSpeech(cleanText, onEnd);

    // 背景觸發快取累積，未來點擊即可直接走高音質音檔
    this.fetchAndCacheInBackground(cleanText);

    if (!speechOk) {
      // 若 Web Speech 完全不可用，立即切換為線上音訊串流
      const urls = getOnlineAudioSources(cleanText);
      return this.playAudioWithFallbackList(urls, 0, onEnd);
    }

    return true;
  }

  /**
   * 播放完整英語句子（如歌詞整句），直接使用 Web Speech 語音合成引擎
   */
  public speakSentence(sentence: string, onEnd?: () => void): boolean {
    this.unlockAudio();
    this.stop();

    const cleanText = sentence.replace(/["“”]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!cleanText) {
      onEnd?.();
      return false;
    }

    return this.fallbackWebSpeech(cleanText, onEnd);
  }

  /**
   * 同步建立並播放 HTMLAudioElement
   */
  private playAudioUrl(url: string, onEnd?: () => void, onErrorFallback?: () => void): boolean {
    try {
      const audio = new Audio(url);
      this.currentAudioElement = audio;
      audio.playbackRate = this.rate;

      let hasFinished = false;
      const finish = () => {
        if (!hasFinished) {
          hasFinished = true;
          this.currentAudioElement = null;
          onEnd?.();
        }
      };

      audio.onended = finish;
      audio.onerror = () => {
        if (!hasFinished) {
          hasFinished = true;
          this.currentAudioElement = null;
          if (onErrorFallback) {
            onErrorFallback();
          } else {
            onEnd?.();
          }
        }
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('[EPRS Audio] Direct play rejected, trying fallback:', err);
          if (onErrorFallback) {
            onErrorFallback();
          } else {
            finish();
          }
        });
      }
      return true;
    } catch (e) {
      console.warn('[EPRS Audio] Audio element exception:', e);
      onErrorFallback?.();
      return false;
    }
  }

  /**
   * 依序嘗試多組線上音源
   */
  private playAudioWithFallbackList(
    urls: string[],
    index: number,
    onEnd?: () => void,
    onAllFailed?: () => void
  ): boolean {
    if (index >= urls.length) {
      if (onAllFailed) onAllFailed();
      else onEnd?.();
      return false;
    }

    return this.playAudioUrl(urls[index], onEnd, () => {
      this.playAudioWithFallbackList(urls, index + 1, onEnd, onAllFailed);
    });
  }

  /**
   * Web Speech 語音合成（含 iOS Safari 防 GC 與防卡住特殊防禦）
   */
  private fallbackWebSpeech(text: string, onEnd?: () => void): boolean {
    if (!this.synth || typeof window === 'undefined') {
      onEnd?.();
      return false;
    }

    try {
      // 若 Safari 處於 paused 狀態，必須先 resume
      if (this.synth.paused) {
        this.synth.resume();
      }

      // 如果尚未選定聲音，重新撈取一次（處理 iOS 初次載入延遲問題）
      if (!this.selectedVoice) {
        this.initVoices();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = this.rate;
      utterance.pitch = 1.0;
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }

      let ended = false;
      const handleEnd = () => {
        if (!ended) {
          ended = true;
          this.activeUtterance = null;
          (window as unknown as { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
          onEnd?.();
        }
      };

      utterance.onend = handleEnd;
      utterance.onerror = (e) => {
        console.warn('[EPRS Audio] SpeechSynthesis error:', e);
        handleEnd();
      };

      // 核心防禦：Safari 會在播放途中回收未被強引用的 utterance 實例
      this.activeUtterance = utterance;
      (window as unknown as { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = utterance;

      this.synth.speak(utterance);

      // 安全超時（避免 Safari onend 未觸發造成 UI 永久卡在播放中）
      const timeoutSec = Math.max(2500, text.length * 400);
      setTimeout(() => {
        if (!ended && this.activeUtterance === utterance) {
          handleEnd();
        }
      }, timeoutSec);

      return true;
    } catch (e) {
      console.warn('[EPRS Audio] SpeechSynthesis exception:', e);
      onEnd?.();
      return false;
    }
  }

  /**
   * 離線中文語音合成 (Web Speech API zh-TW / zh-CN)
   */
  public speakChinese(text: string, onEnd?: () => void): boolean {
    this.unlockAudio();
    this.stop();

    const cleanText = text
      .replace(/[\(\)（）\[\]【】\/;；,，。]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText || typeof window === 'undefined') {
      onEnd?.();
      return false;
    }

    if (!this.synth) {
      if ('speechSynthesis' in window) {
        this.synth = window.speechSynthesis;
      } else {
        onEnd?.();
        return false;
      }
    }

    try {
      if (this.synth.paused) {
        this.synth.resume();
      }

      const voices = this.synth.getVoices() || [];
      // 優先尋找繁體中文 (zh-TW)，其次香港 (zh-HK) 或其他中文 (zh)
      const zhVoice =
        voices.find(v => v.lang === 'zh-TW' || v.lang === 'zh_TW' || v.lang.startsWith('zh-TW')) ||
        voices.find(v => v.lang.includes('zh-TW') || v.lang.includes('zh_TW')) ||
        voices.find(v => v.lang.includes('zh-HK') || v.lang.includes('zh_HK')) ||
        voices.find(v => v.lang.startsWith('zh')) ||
        voices.find(v => v.lang.includes('cmn'));

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = zhVoice ? zhVoice.lang : 'zh-TW';
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      if (zhVoice) {
        utterance.voice = zhVoice;
      }

      let ended = false;
      const handleEnd = () => {
        if (!ended) {
          ended = true;
          this.activeUtterance = null;
          (window as unknown as { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
          onEnd?.();
        }
      };

      utterance.onend = handleEnd;
      utterance.onerror = (e) => {
        console.warn('[EPRS Audio] speakChinese error:', e);
        handleEnd();
      };

      this.activeUtterance = utterance;
      (window as unknown as { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = utterance;

      this.synth.speak(utterance);

      // 安全超時保護
      const timeoutSec = Math.max(2000, cleanText.length * 450);
      setTimeout(() => {
        if (!ended && this.activeUtterance === utterance) {
          handleEnd();
        }
      }, timeoutSec);

      return true;
    } catch (e) {
      console.warn('[EPRS Audio] speakChinese exception:', e);
      onEnd?.();
      return false;
    }
  }

  /**
   * 依序朗讀各音節，最後朗讀完整單字（拼讀節奏輔助）
   */
  public async speakSyllablesSequentially(
    syllables: string[],
    fullWord: string,
    onStepChange?: (syllableIndex: number | 'full') => void,
    onComplete?: () => void
  ): Promise<void> {
    this.unlockAudio();
    this.stop();

    const cleanSyllables = syllables.map(s => s.trim()).filter(Boolean);
    if (cleanSyllables.length <= 1) {
      onStepChange?.('full');
      this.speakWord(fullWord, onComplete);
      return;
    }

    for (let i = 0; i < cleanSyllables.length; i++) {
      onStepChange?.(i);
      await new Promise<void>(resolve => {
        if (!this.synth) {
          setTimeout(resolve, 300);
          return;
        }

        const sylUtterance = new SpeechSynthesisUtterance(cleanSyllables[i]);
        sylUtterance.lang = 'en-US';
        sylUtterance.rate = Math.max(0.6, this.rate * 0.85);
        if (this.selectedVoice) sylUtterance.voice = this.selectedVoice;

        let resolved = false;
        const finish = () => {
          if (!resolved) {
            resolved = true;
            setTimeout(resolve, 200);
          }
        };

        sylUtterance.onend = finish;
        sylUtterance.onerror = finish;

        this.activeUtterance = sylUtterance;
        (window as unknown as { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = sylUtterance;

        this.synth.speak(sylUtterance);

        // 超時保護
        setTimeout(finish, 1500);
      });
    }

    // 最後朗讀完整單字
    onStepChange?.('full');
    this.speakWord(fullWord, onComplete);
  }

  /**
   * 測試發音（專為使用者診斷與解鎖設計）
   */
  public testSpeech(text: string = 'Welcome to EPRS Phonics', onEnd?: () => void) {
    this.speakWord(text, onEnd);
  }
}

export const audioManager = new PhonicsAudioManager();
