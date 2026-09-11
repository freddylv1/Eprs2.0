/**
 * EPRS Stress Engine (v1.6.1)
 * Calculates primary stress index based on Pattern + Suffix + Word Class (pos) + Syllable Structure.
 */

export interface StressAnalysisResult {
  primary_stress_index: number;
  secondary_stress_indexes: number[];
  unstressed_reductions: number[];
  stress_type: 'Monosyllabic' | 'Polysyllabic';
  reasoning: string;
}

const WEAK_PREFIXES = [
  'ad', 'ap', 'as', 'at', 'al', 'be', 'col', 'com', 'con', 'de', 'dis',
  'ex', 'in', 'im', 'pre', 'pro', 're', 'sub', 'un'
];

/**
 * Determines the primary stress index for a word based on Suffix, Pattern, and Word Class.
 */
export function determinePrimaryStress(
  word: string,
  syllables: string[],
  pos: string = 'n.'
): StressAnalysisResult {
  const cleanWord = word.toLowerCase().trim();
  const sylCount = syllables.length;

  if (sylCount <= 1) {
    return {
      primary_stress_index: 0,
      secondary_stress_indexes: [],
      unstressed_reductions: [],
      stress_type: 'Monosyllabic',
      reasoning: '單音節單字重音預設於第 1 音節',
    };
  }

  const lastSyl = syllables[sylCount - 1].toLowerCase();
  const firstSyl = syllables[0].toLowerCase();
  const isWeakPrefixFirst = WEAK_PREFIXES.includes(firstSyl);

  // 1. Suffix -ance / -ence
  if (cleanWord.endsWith('ance') || cleanWord.endsWith('ence')) {
    if (['distance', 'balance', 'substance', 'instance'].includes(cleanWord)) {
      return {
        primary_stress_index: 0,
        secondary_stress_indexes: [],
        unstressed_reductions: [1],
        stress_type: 'Polysyllabic',
        reasoning: `-ance 字尾雙音節名詞，重音落在第 1 音節 [${syllables[0]}]`,
      };
    }

    if (sylCount === 2) {
      // 2 syllables: ad-vance vs bal-ance, dis-tance
      if (isWeakPrefixFirst) {
        return {
          primary_stress_index: 1,
          secondary_stress_indexes: [],
          unstressed_reductions: [0],
          stress_type: 'Polysyllabic',
          reasoning: `-ance 字尾雙音節單字，前綴 ${firstSyl}- 弱化，重音落在第 2 音節 [${syllables[1]}]`,
        };
      }
      return {
        primary_stress_index: 0,
        secondary_stress_indexes: [],
        unstressed_reductions: [1],
        stress_type: 'Polysyllabic',
        reasoning: `-ance 字尾雙音節名詞/形容詞，重音落在第 1 音節 [${syllables[0]}]`,
      };
    }

    // 3+ syllables ending in -ance / -ence
    // Check if penultimate syllable or prefix carries primary stress
    // Examples:
    // al-li-ance [al, li, ance] -> index 1
    // ap-pli-ance [ap, pli, ance] -> index 1
    // as-sist-ance [as, sist, ance] -> index 1
    // at-tend-ance [at, tend, ance] -> index 1
    // com-pli-ance [com, pli, ance] -> index 1
    // de-fi-ance [de, fiance] -> index 1
    // e-leg-ance [e, leg, ance] -> index 0 (antepenultimate, 1st syllable root e-)
    // am-bul-ance [am, bul, ance] -> index 0 (1st syllable root am-)
    if (isWeakPrefixFirst || cleanWord === 'defiance' || cleanWord === 'alliance') {
      return {
        primary_stress_index: 1,
        secondary_stress_indexes: [],
        unstressed_reductions: [0, 2],
        stress_type: 'Polysyllabic',
        reasoning: `-ance 字尾多音節單字 (含弱化前綴 ${firstSyl}-)，重音落在第 2 音節 [${syllables[1]}]`,
      };
    }

    return {
      primary_stress_index: 0,
      secondary_stress_indexes: [],
      unstressed_reductions: [1, 2],
      stress_type: 'Polysyllabic',
      reasoning: `-ance 字尾三音節單字，首音節為字根重音，重音落在第 1 音節 [${syllables[0]}]`,
    };
  }

  // 2. Suffix -ate / -ciate / -iate
  if (cleanWord.endsWith('ate') || cleanWord.endsWith('ciate') || cleanWord.endsWith('iate')) {
    if (sylCount >= 3) {
      // Examples: as-so-ciate [as, so, ciate] -> index 1; ap-pre-ciate [ap, pre, ciate] -> index 1
      const targetIndex = isWeakPrefixFirst ? 1 : Math.max(0, sylCount - 3);
      return {
        primary_stress_index: targetIndex,
        secondary_stress_indexes: [],
        unstressed_reductions: [0, sylCount - 1],
        stress_type: 'Polysyllabic',
        reasoning: `-ciate/-iate 結尾動詞，重音落在倒數第三音節 (第 ${targetIndex + 1} 音節 [${syllables[targetIndex]}])`,
      };
    }
  }

  // 3. Weak prefix default rule for 2 or 3 syllable verbs/nouns (col-lapse, con-vince, be-lieve, ad-vance)
  if (isWeakPrefixFirst) {
    return {
      primary_stress_index: 1,
      secondary_stress_indexes: [],
      unstressed_reductions: [0],
      stress_type: 'Polysyllabic',
      reasoning: `前綴 ${firstSyl}- 弱化規則，重音落在第 2 音節 [${syllables[1]}]`,
    };
  }

  // Default fallback for polysyllabic words
  return {
    primary_stress_index: 0,
    secondary_stress_indexes: [],
    unstressed_reductions: sylCount > 1 ? [1] : [],
    stress_type: 'Polysyllabic',
    reasoning: `多音節單字預設重音落在第 1 音節 [${syllables[0]}]`,
  };
}
