'use client';

class PhonicsAudioManager {
  private synth: SpeechSynthesis | null = null;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private rate: number = 0.85;
  private isInitialized: boolean = false;

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
      // Prefer standard US English voices
      const usVoice = voices.find(
        v => v.lang.startsWith('en-US') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('David'))
      ) || voices.find(v => v.lang.startsWith('en'));
      
      if (usVoice) {
        this.selectedVoice = usVoice;
      }
      this.isInitialized = true;
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
   * 朗讀完整單字
   */
  public speakWord(word: string, onEnd?: () => void): boolean {
    if (!this.synth) return false;
    this.synth.cancel();

    const cleanText = word.replace(/\(.*?\)/g, '').replace(/[\/\.]/g, ' ').trim();
    if (!cleanText) return false;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = this.rate;
    utterance.pitch = 1.0;
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
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
    if (!this.synth) {
      onComplete?.();
      return;
    }
    this.synth.cancel();

    const cleanSyllables = syllables.map(s => s.trim()).filter(Boolean);
    if (cleanSyllables.length <= 1) {
      onStepChange?.('full');
      this.speakWord(fullWord, onComplete);
      return;
    }

    for (let i = 0; i < cleanSyllables.length; i++) {
      onStepChange?.(i);
      await new Promise<void>(resolve => {
        const sylUtterance = new SpeechSynthesisUtterance(cleanSyllables[i]);
        sylUtterance.lang = 'en-US';
        sylUtterance.rate = Math.max(0.6, this.rate * 0.85);
        if (this.selectedVoice) sylUtterance.voice = this.selectedVoice;
        sylUtterance.onend = () => setTimeout(resolve, 250);
        sylUtterance.onerror = () => resolve();
        this.synth?.speak(sylUtterance);
      });
    }

    // 最後朗讀完整單字
    onStepChange?.('full');
    await new Promise<void>(resolve => {
      const fullUtterance = new SpeechSynthesisUtterance(fullWord);
      fullUtterance.lang = 'en-US';
      fullUtterance.rate = this.rate;
      if (this.selectedVoice) fullUtterance.voice = this.selectedVoice;
      fullUtterance.onend = () => resolve();
      fullUtterance.onerror = () => resolve();
      this.synth?.speak(fullUtterance);
    });

    onComplete?.();
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const audioManager = new PhonicsAudioManager();
