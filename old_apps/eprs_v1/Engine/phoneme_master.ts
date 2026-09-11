/**
 * EPRS Phoneme Master TypeScript Engine (v1.7)
 * Implements Phoneme mapping from /Knowledge/Phoneme_Master.yaml
 */

export interface PhonemeMapping {
  syllable: string;
  phoneme_fragment: string;
  type: 'Short Vowel' | 'Long Vowel' | 'R-Controlled' | 'Reduced Schwa' | 'Consonant Digraph' | 'Special Reduction';
}

export function extractPhonemesForSyllable(syl: string, isStressed: boolean, isLast: boolean): PhonemeMapping {
  const clean = syl.toLowerCase().trim();

  if (clean.endsWith('ance') || clean.endsWith('ence')) {
    return {
      syllable: syl,
      phoneme_fragment: 'əns',
      type: 'Special Reduction',
    };
  }

  if (clean === 'ciate') {
    return {
      syllable: syl,
      phoneme_fragment: 'ʃi.eɪt',
      type: 'Special Reduction',
    };
  }

  if (clean === 'have') return { syllable: syl, phoneme_fragment: 'hæv', type: 'Short Vowel' };
  if (clean === 'give') return { syllable: syl, phoneme_fragment: 'ɡɪv', type: 'Short Vowel' };
  if (clean === 'live') return { syllable: syl, phoneme_fragment: 'lɪv', type: 'Short Vowel' };
  if (clean === 'bridge') return { syllable: syl, phoneme_fragment: 'brɪdʒ', type: 'Consonant Digraph' };

  if (clean === 'pre' && isStressed) {
    return { syllable: syl, phoneme_fragment: 'priː', type: 'Long Vowel' };
  }

  if (!isStressed) {
    if (clean === 'ad' || clean === 'al' || clean === 'ap' || clean === 'as' || clean === 'at') {
      return { syllable: syl, phoneme_fragment: 'ə', type: 'Reduced Schwa' };
    }
    if (clean === 'col' || clean === 'com' || clean === 'con') {
      return { syllable: syl, phoneme_fragment: 'kə', type: 'Reduced Schwa' };
    }
    if (clean === 'de' || clean === 're' || clean === 'be') {
      return { syllable: syl, phoneme_fragment: 'dɪ', type: 'Reduced Schwa' };
    }
  }

  return {
    syllable: syl,
    phoneme_fragment: clean,
    type: isStressed ? 'Long Vowel' : 'Reduced Schwa',
  };
}
