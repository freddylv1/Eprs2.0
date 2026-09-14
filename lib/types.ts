export interface RuleExample {
  word: string;
  ipa: string;
  note?: string;
}

export interface PhonicsRule {
  id: string;
  name: string;
  englishName: string;
  category: '母音法則' | '子音法則' | '音節與弱化' | '詞綴與複合詞' | '例外與特殊';
  summary: string;
  formula: string;
  description: string;
  phonemeMapping: { letters: string; ipa: string; desc: string }[];
  examples: RuleExample[];
  exceptionsOrTips?: string;
}

export interface SyllableDerivation {
  syllable: string;
  ipa?: string;
  rule?: string;
  ruleId?: string;
  ruleName?: string;
  status?: string;
  reason?: string;
}

export interface WordItem {
  id: number | string;
  word: string;
  chinese: string;
  pos?: string;
  syllables: string[];
  ipa: string;
  primaryStressIndex?: number;
  ruleCodes: string[];
  derivations?: SyllableDerivation[];
  isException?: boolean;
  exceptionNote?: string;
  level?: string;
  batchId?: string;
}

export interface BatchInfo {
  batchId: string;
  title: string;
  category: string;
  range: string;
  wordCount: number;
  fileName: string;
}

export interface BatchCategory {
  id: string;
  name: string;
  description: string;
  totalBatches: number;
  totalWords: number;
  batches: BatchInfo[];
}

export interface BatchesManifest {
  version: string;
  updatedAt: string;
  categories: BatchCategory[];
}

export interface BatchData {
  batchId: string;
  title: string;
  category: string;
  range: string;
  totalWords: number;
  words: WordItem[];
}

export type FontSizePreference = 'small' | 'medium' | 'large' | 'xlarge';

export interface SyllableMatrixCell {
  syllableIndex: number;
  syllableText: string;
  ipaSegment: string;
  stressType: 'primary' | 'secondary' | 'unstressed';
  matchedRules: string[];
  derivationExplanation?: string;
  phonemeBreakdown: { letter: string; sound: string; ruleId?: string }[];
}

export interface WordMatrixAnalysis {
  word: string;
  fullIpa: string;
  syllableCount: number;
  primaryStressSyllableIndex: number;
  cells: SyllableMatrixCell[];
  summaryRules: string[];
  divisionExplanation?: {
    count: number;
    reason: string;
    detectedRules: { ruleKey: string; title: string; explanation: string }[];
  };
}
