'use client';

import { audioCache } from './audioCache';

/**
 * 取得可靠的真人英語 MP3 音源網址（Free Dictionary API / Google TTS / Wiktionary）
 */
function getOnlineAudioSources(word: string): string[] {
  const clean = encodeURIComponent(word.toLowerCase().trim());
  return [
    // 來源 1: Google 高音質英語發音
    `https://translate.google.com/translate_tts?ie=UTF-8&q=${clean}&tl=en&client=tw-ob`,
    // 來源 2: 韋氏/詞典發音音源代理
    `https://api.dictionaryapi.dev/media/pronunciations/en/${clean}-us.mp3`
  ];
}

class PhonicsAudioManager {
  private synth: SpeechSynthesis | null = null;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private rate: number = 0.85;
  private currentAudioElement: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const load = () => {
      const voices = this.synth?.getVoices() || [];
      const usVoice = voices.find(
        v => v.lang.startsWith('en-US') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('David') || v.name.includes('Jenny'))
      ) || voices.find(v => v.lang.startsWith('en'));
      
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

  /**
   * 停止當前任何正在播放的聲音（真人音檔或合成語音）
   */
  public stop() {
    if (this.currentAudioElement) {
      this.currentAudioElement.pause();
      this.currentAudioElement.currentTime = 0;
      this.currentAudioElement = null;
    }
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * 在背景非同步下載並快取真人音檔至 IndexedDB（不阻礙當下發音）
   */
  private fetchAndCacheInBackground(cleanText: string) {
    if (typeof navigator === 'undefined' || !navigator.onLine) return;

    // 非同步進行，完全不阻塞主流程
    (async () => {
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
              break;
            }
          }
        } catch {
          // 網路受阻，靜默忽略
        }
      }
    })();
  }

  /**
   * 朗讀完整單字（零等待策略）：
   * 1. 若 IndexedDB 已有真人音檔 ➔ 立即播放真人音檔。
   * 2. 若 IndexedDB 尚無音檔 ➔ 立即用 Web Speech 0秒發音（絕不等待），同時在背景悄悄下載真人音檔存入 IndexedDB 累積。
   */
  public async speakWord(word: string, onEnd?: () => void): Promise<boolean> {
    this.stop();

    const cleanText = word.replace(/\(.*?\)/g, '').replace(/[\/\.]/g, ' ').trim();
    if (!cleanText) return false;

    // 1. 檢查 IndexedDB 是否已有真人音檔
    try {
      const cachedBlob = await audioCache.getAudioBlob(cleanText);
      if (cachedBlob) {
        const audioUrl = URL.createObjectURL(cachedBlob);
        const audio = new Audio(audioUrl);
        this.currentAudioElement = audio;
        audio.playbackRate = this.rate;
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
          this.currentAudioElement = null;
          onEnd?.();
        };
        audio.onerror = () => {
          URL.revokeObjectURL(audioUrl);
          this.currentAudioElement = null;
          this.fallbackWebSpeech(cleanText, onEnd);
        };
        await audio.play();
        return true;
      }
    } catch {
      // IndexedDB 讀取失敗時平滑降級
    }

    // 2. 本地尚無真人音檔：立即 0 秒播放本機合成語音（零等待），同時觸發背景累積音庫
    this.fallbackWebSpeech(cleanText, onEnd);
    this.fetchAndCacheInBackground(cleanText);
    return true;
  }

  /**
   * 兜底 Web Speech 語音引擎（0秒立即出聲）
   */
  private fallbackWebSpeech(text: string, onEnd?: () => void): boolean {
    if (!this.synth) {
      onEnd?.();
      return false;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = this.rate;
    utterance.pitch = 1.0;
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    if (onEnd) {
      utterance.onend = () => onEnd();
      utterance.onerror = () => onEnd();
    }

    this.synth.speak(utterance);
    return true;
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
    this.stop();

    const cleanSyllables = syllables.map(s => s.trim()).filter(Boolean);
    if (cleanSyllables.length <= 1) {
      onStepChange?.('full');
      await this.speakWord(fullWord, onComplete);
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
        sylUtterance.onend = () => setTimeout(resolve, 250);
        sylUtterance.onerror = () => resolve();
        this.synth.speak(sylUtterance);
      });
    }

    // 最後朗讀完整單字
    onStepChange?.('full');
    await this.speakWord(fullWord, onComplete);
  }
}

export const audioManager = new PhonicsAudioManager();
