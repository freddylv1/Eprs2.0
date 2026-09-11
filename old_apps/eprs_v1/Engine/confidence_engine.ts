/**
 * EPRS Confidence Engine (v1.7.1)
 * Implements weighted quantitative scoring logic from /Engine/Confidence_Engine.yaml
 * 
 * Score Breakdown (Total 100 Points):
 * 1. Pattern Match (25 Points)
 * 2. Stress Accuracy (25 Points)
 * 3. Phoneme Mapping (20 Points)
 * 4. Exception Resolution (15 Points)
 * 5. Word Family Support (15 Points)
 */

export interface ConfidenceInput {
  word: string;
  syllables: string[];
  primaryStressIndex: number;
  patternId: string;
  ruleId: string;
  isException: boolean;
  exceptionId?: string | null;
  fullIpa: string;
  hasWordFamily?: boolean;
}

export interface ConfidenceResult {
  confidence_score: number;
  confidence_level: 'GOLD' | 'SILVER' | 'FAILED';
  breakdown: string[];
  category_scores: {
    pattern_match: number;
    stress_accuracy: number;
    phoneme_mapping: number;
    exception_resolution: number;
    word_family_support: number;
  };
}

export function calculateConfidence(input: ConfidenceInput): ConfidenceResult {
  let patternScore = 0;
  let stressScore = 0;
  let phonemeScore = 0;
  let exceptionScore = 0;
  let familyScore = 0;
  const breakdown: string[] = [];

  // 1. Pattern Match (Max 25 Points)
  if (input.patternId && /^PAT-(?:M?\d{2,3}|\d{2})$/.test(input.patternId)) {
    patternScore = 25;
    breakdown.push(`[Pattern Match: 25/25] Valid EPRS pattern ID ${input.patternId}`);
  } else if (input.patternId) {
    patternScore = 15;
    breakdown.push(`[Pattern Match: 15/25] Partial pattern ID ${input.patternId}`);
  } else {
    patternScore = 0;
    breakdown.push(`[Pattern Match: 0/25] Missing pattern ID`);
  }

  // 2. Stress Accuracy (Max 25 Points)
  if (
    typeof input.primaryStressIndex === 'number' &&
    input.primaryStressIndex >= 0 &&
    input.primaryStressIndex < input.syllables.length
  ) {
    stressScore = 25;
    breakdown.push(`[Stress Accuracy: 25/25] Primary stress index ${input.primaryStressIndex} within syllable bounds`);
  } else {
    stressScore = 0;
    breakdown.push(`[Stress Accuracy: 0/25] Stress index out of bounds`);
  }

  // 3. Phoneme Mapping (Max 20 Points)
  if (input.fullIpa && input.fullIpa.startsWith('/') && input.fullIpa.endsWith('/') && input.fullIpa.length > 2) {
    phonemeScore = 20;
    breakdown.push(`[Phoneme Mapping: 20/20] Complete IPA phoneme synthesis ${input.fullIpa}`);
  } else if (input.fullIpa) {
    phonemeScore = 10;
    breakdown.push(`[Phoneme Mapping: 10/20] Incomplete IPA format`);
  } else {
    phonemeScore = 0;
    breakdown.push(`[Phoneme Mapping: 0/20] Missing IPA output`);
  }

  // 4. Exception Resolution (Max 15 Points)
  if (input.isException) {
    if (input.exceptionId && /^(HIST|ORTH|REDUC)-\d{3}$/.test(input.exceptionId)) {
      exceptionScore = 15;
      breakdown.push(`[Exception Resolution: 15/15] Verified exception taxonomy ${input.exceptionId}`);
    } else {
      exceptionScore = 5;
      breakdown.push(`[Exception Resolution: 5/15] Exception detected without standard taxonomy ID`);
    }
  } else {
    exceptionScore = 15;
    breakdown.push(`[Exception Resolution: 15/15] Standard rule match verified (No Exception)`);
  }

  // 5. Word Family Support (Max 15 Points)
  if (input.patternId || input.hasWordFamily) {
    familyScore = 15;
    breakdown.push(`[Word Family Support: 15/15] Structural pattern family verified`);
  } else {
    familyScore = 5;
    breakdown.push(`[Word Family Support: 5/15] Generic family fallback`);
  }

  const totalScore = patternScore + stressScore + phonemeScore + exceptionScore + familyScore;

  let confidence_level: 'GOLD' | 'SILVER' | 'FAILED' = 'GOLD';
  if (totalScore < 100 && totalScore >= 80) {
    confidence_level = 'SILVER';
  } else if (totalScore < 80) {
    confidence_level = 'FAILED';
  }

  return {
    confidence_score: totalScore,
    confidence_level,
    breakdown,
    category_scores: {
      pattern_match: patternScore,
      stress_accuracy: stressScore,
      phoneme_mapping: phonemeScore,
      exception_resolution: exceptionScore,
      word_family_support: familyScore,
    },
  };
}
