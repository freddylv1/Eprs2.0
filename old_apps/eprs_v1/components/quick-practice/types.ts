import { BatchWord } from '@/lib/batch01Data';

export type PracticeWord = BatchWord & { pos?: string };

export enum PracticeStep {
  WORD_SHOWN = 0,       // 第 1 階段：出現單字，中文未出現
  CHINESE_SHOWN = 1,    // 第 2 階段：最後一行中文出現（單字與中文分兩次出現）
  SYLLABLES_SHOWN = 2,  // 第 3 階段：中間展開音節切割、音標與〔推理〕
  AUDIO_1_PLAYED = 3,   // 第 4 階段：第 1 次發音完成
  AUDIO_2_PLAYED = 4,   // 第 5 階段：第 2 次發音完成
}

export interface AudioPlayResult {
  success: boolean;
  method: 'audio_cdn' | 'speech_synthesis' | 'error' | 'unsupported';
  error?: string;
}
