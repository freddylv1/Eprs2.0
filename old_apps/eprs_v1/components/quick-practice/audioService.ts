import { AudioPlayResult } from './types';
import { audioManager } from '@/lib/audioManager';

/**
 * 模組化音訊播放器服務 (Audio Playback Service)
 * 整合統一音訊管理器：支援可配置發音前延遲（預設 0.5 秒），發音中禁止再次發音與下一步
 */
export class PracticeAudioService {
  public static sanitizeWord(word: string): string {
    return word
      .replace(/\(.*?\)/g, '')
      .replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '')
      .replace(/[^a-zA-Z\s'-]/g, '')
      .trim();
  }

  public static stop(): void {
    audioManager.stop();
  }

  public static isBusy(): boolean {
    return audioManager.isBusy();
  }

  public static setDelayMs(ms: number): void {
    audioManager.setDelayMs(ms);
  }

  public static async play(word: string, delayMs?: number): Promise<AudioPlayResult> {
    const cleanWord = this.sanitizeWord(word);
    if (!cleanWord) {
      return { success: false, method: 'unsupported' };
    }

    const success = await audioManager.play(cleanWord, delayMs);
    return {
      success,
      method: success ? 'speech_synthesis' : 'error'
    };
  }
}
