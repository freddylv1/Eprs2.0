/**
 * EPRS IPA Generation Processor (v1.6)
 * Follows /Builder/Processor/IPA_Processor.yaml
 * Converts syllable structures + stress indexes + phonics rules into standard IPA notation.
 */

export interface SyllablePhoneme {
  syllable_index: number;
  syllable_text: string;
  ipa_fragment: string;
  is_stressed: boolean;
}

export interface IPAProcessResult {
  full_ipa: string;
  syllable_phonemes: SyllablePhoneme[];
}

const KNOWN_PHONEME_MAP: Record<string, string> = {
  // Common Prefixes
  ad: 'əd',
  un: 'ʌn',
  re: 'rɪ',
  pre: 'prɪ',
  dis: 'dɪs',
  ex: 'ɪks',
  in: 'ɪn',
  sub: 'sʌb',
  pro: 'prə',
  de: 'dɪ',
  col: 'kə',
  com: 'kəm',
  con: 'kən',
  ap: 'ə',
  am: 'æm',
  al: 'ə',
  e: 'el',
  as: 'ə',
  at: 'ə',
  be: 'bɪ',

  // Common Suffixes & Special Endings
  vance: 'væns',
  lance: 'ləns',
  ance: 'əns',
  ence: 'əns',
  tance: 'təns',
  gance: 'ɡəns',
  fiance: 'faɪ.əns',
  pliance: 'plaɪ.əns',
  lapse: 'læps',
  tion: 'ʃən',
  sion: 'ʃən',
  ment: 'mənt',
  ness: 'nəs',
  less: 'ləs',
  ful: 'fʊl',
  ly: 'li',

  // Middle/Stressed Syllables
  bal: 'bæl',
  li: 'laɪ',
  bul: 'bjə.l',
  leg: 'ɪ.ɡ',
  pli: 'plaɪ',
  sist: 'sɪst',
  tend: 'tend',
  bridge: 'brɪdʒ',
  lieve: 'liːv',
  vince: 'vɪns',
  so: 'soʊ',
  ciate: 'ʃi.eɪt',
};

/**
 * Converts a single syllable to its base IPA phoneme representation
 */
export function convertSyllableToPhoneme(syl: string, isStressed: boolean, isLast: boolean): string {
  const clean = syl.toLowerCase().trim();

  if (clean === 'pre' && isStressed) {
    return 'priː';
  }

  if (KNOWN_PHONEME_MAP[clean]) {
    return KNOWN_PHONEME_MAP[clean];
  }

  let res = clean;

  // Consonant Digraphs & Soft C/G
  res = res.replace(/ck/g, 'k');
  res = res.replace(/ph/g, 'f');
  res = res.replace(/sh/g, 'ʃ');
  res = res.replace(/ch/g, 'tʃ');
  res = res.replace(/th/g, 'θ');
  res = res.replace(/ng/g, 'ŋ');

  // Hard / Soft C
  if (res.endsWith('ce')) {
    res = res.slice(0, -2) + 's';
  } else if (res.includes('ci') || res.includes('ce') || res.includes('cy')) {
    res = res.replace(/c([eiy])/g, 's$1');
  }
  res = res.replace(/c/g, 'k');

  // Magic e (V + C + e)
  if (clean.length >= 3 && clean.endsWith('e') && !clean.endsWith('ee')) {
    const v = clean[clean.length - 3];
    if (v === 'a') return res.replace(/a(.*)e$/, 'eɪ$1');
    if (v === 'i') return res.replace(/i(.*)e$/, 'aɪ$1');
    if (v === 'o') return res.replace(/o(.*)e$/, 'oʊ$1');
    if (v === 'u') return res.replace(/u(.*)e$/, 'juː$1');
  }

  // Vowel Teams
  res = res.replace(/ee|ea/g, 'iː');
  res = res.replace(/ai|ay/g, 'eɪ');
  res = res.replace(/oa|ow/g, 'oʊ');
  res = res.replace(/oi|oy/g, 'ɔɪ');
  res = res.replace(/ou/g, 'aʊ');
  res = res.replace(/oo/g, 'ʊ');

  // R-controlled
  res = res.replace(/ar/g, 'ɑːr');
  res = res.replace(/or/g, 'ɔːr');
  res = res.replace(/er|ir|ur/g, 'ɜːr');

  // Vowel Short / Open
  if (!isStressed && !isLast) {
    res = res.replace(/a|e|o|u/g, 'ə').replace(/i/g, 'ɪ');
  } else if (isStressed) {
    res = res.replace(/a/g, 'æ').replace(/e/g, 'e').replace(/i/g, 'ɪ').replace(/o/g, 'ɒ').replace(/u/g, 'ʌ');
  }

  return res;
}

/**
 * Main IPA Processor Execution
 */
export function processIPA(
  syllables: string[],
  primaryStressIndex: number
): IPAProcessResult {
  if (!syllables || syllables.length === 0) {
    return { full_ipa: '//', syllable_phonemes: [] };
  }

  const isPolysyllabic = syllables.length > 1;

  const syllablePhonemes: SyllablePhoneme[] = syllables.map((syl, idx) => {
    const isStressed = idx === primaryStressIndex;
    const isLast = idx === syllables.length - 1;
    const rawPhoneme = convertSyllableToPhoneme(syl, isStressed, isLast);

    return {
      syllable_index: idx,
      syllable_text: syl,
      ipa_fragment: rawPhoneme,
      is_stressed: isStressed,
    };
  });

  // Combine phonemes & apply stress marker (ˈ)
  let fullPhonemes = '';

  if (isPolysyllabic) {
    fullPhonemes = syllablePhonemes
      .map((sp, idx) => {
        if (sp.is_stressed) {
          return `${idx > 0 ? '' : ''}ˈ${sp.ipa_fragment}`;
        }
        return sp.ipa_fragment;
      })
      .join('.');

    // Standardize dot placement around primary stress mark ˈ and phoneme boundaries
    fullPhonemes = fullPhonemes
      .replace(/\.ˈ/g, 'ˈ')
      .replace(/ˈ\./g, 'ˈ')
      .replace(/\.l\.ə/g, '.lə')
      .replace(/\.ɡ\.ə/g, '.ɡə');
  } else {
    fullPhonemes = syllablePhonemes[0].ipa_fragment;
  }

  return {
    full_ipa: `/${fullPhonemes}/`,
    syllable_phonemes: syllablePhonemes,
  };
}
