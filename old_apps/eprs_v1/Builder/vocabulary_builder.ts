import { resolveException } from './exception_resolver';
import { VocabularySource } from '../lib/eprs-import';
import { processIPA } from './ipa_processor';
import { generateMemoryTip, MemoryTip } from './memory_processor';
import { determinePrimaryStress, StressAnalysisResult } from './stress_processor';

export interface SyllableIpaEntry {
  syllable_index: number;
  syllable_text: string;
  syllable: string;
  ipa: string;
  stress: 'primary' | 'secondary' | 'unstressed';
  pattern_id: string;
  rule_id: string;
}

export interface PatternMappingEntry {
  syllable_index: number;
  syllable: string;
  pattern_id: string;
  pattern: string;
  condition: string;
  rule_id: string;
  ipa: string;
}

export interface EPRSWordRecord {
  index: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  syllable_ipa: SyllableIpaEntry[];
  stress: {
    primary_stress_syllable_index: number;
    secondary_stress_syllable_indexes: number[];
    unstressed_reductions: number[];
  };
  pattern_mapping: PatternMappingEntry[];
  rule_mapping: string[];
  family_mapping: {
    pattern_family: { id: string; name: string };
    sound_family: { primary_sound: string; reduced_sound: string | null };
    stress_family: { primary_stress_index: number; type: string };
    reduction_family: { type: string; count: number };
    suffix_family: { suffix: string; rule: string } | null;
    word_family: string | null;
    learning_family: { id: string; stage: string };
  };
  exception_check: {
    is_exception: boolean;
    exception_id: string | null;
    exception_type?: string | null;
    reason?: string | null;
    pattern?: string | null;
    actual_sound?: string | null;
    note: string | null;
  };
  memory_tip: MemoryTip;
  reasoning: {
    syllable_reasoning: string;
    pattern_reasoning: string;
    rule_reasoning: string;
    ipa_conclusion: string;
  };
  confidence: number;
  reasoning_summary: string;
}

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'y']);

/**
 * Rule-based Syllabification Engine
 */
export function syllabifyWord(word: string): string[] {
  const clean = word.toLowerCase().trim();
  if (clean.length <= 3) return [clean];

  // Common Prefixes
  const prefixes = ['advance', 'ad', 'un', 're', 'pre', 'dis', 'ex', 'in', 'im', 'sub', 'pro', 'de', 'en'];
  for (const p of prefixes) {
    if (clean.length > p.length + 2 && clean.startsWith(p)) {
      const remainder = clean.slice(p.length);
      return [p, ...syllabifyWord(remainder)];
    }
  }

  // Common Suffixes
  const suffixes = ['tion', 'sion', 'ment', 'ness', 'less', 'ful', 'able', 'ible', 'ing', 'ed', 'er', 'est', 'ance', 'ence', 'ly', 'ple', 'tle', 'dle', 'ble', 'kle'];
  for (const s of suffixes) {
    if (clean.length > s.length + 2 && clean.endsWith(s)) {
      const stem = clean.slice(0, clean.length - s.length);
      return [...syllabifyWord(stem), s];
    }
  }

  // Simple VCV / VCCV splitting heuristic
  const vowelsIndices: number[] = [];
  for (let i = 0; i < clean.length; i++) {
    if (VOWELS.has(clean[i])) {
      if (i === clean.length - 1 && clean[i] === 'e' && vowelsIndices.length > 0) continue;
      vowelsIndices.push(i);
    }
  }

  if (vowelsIndices.length <= 1) {
    return [clean];
  }

  const syllables: string[] = [];
  let lastCut = 0;

  for (let k = 0; k < vowelsIndices.length - 1; k++) {
    const v1 = vowelsIndices[k];
    const v2 = vowelsIndices[k + 1];
    const distance = v2 - v1;

    if (distance === 2) {
      const cut = v1 + 1;
      syllables.push(clean.slice(lastCut, cut));
      lastCut = cut;
    } else if (distance >= 3) {
      const cut = v1 + 2;
      syllables.push(clean.slice(lastCut, cut));
      lastCut = cut;
    }
  }

  if (lastCut < clean.length) {
    syllables.push(clean.slice(lastCut));
  }

  return syllables.filter(Boolean);
}

/**
 * Phonetic & Pattern Analyzer for single syllable / word
 */
export function analyzeSyllablePattern(syl: string, isLast = false, isStressed = true): {
  pattern_id: string;
  pattern_name: string;
  rule_id: string;
  rule_name: string;
  stage_id: string;
  stage_name: string;
  ipa_fragment: string;
  condition: string;
} {
  const s = syl.toLowerCase().trim();

  // 1. PAT-M402 ANCE Ending Family (-ance, -ence)
  if (s.endsWith('ance') || s.endsWith('ence')) {
    return {
      pattern_id: 'PAT-M402',
      pattern_name: 'ANCE Ending Family',
      rule_id: 'R018',
      rule_name: '-ance / -ence Special Suffix Reduction',
      stage_id: 'STAGE-04',
      stage_name: '多音節母音弱化與字尾',
      ipa_fragment: 'əns',
      condition: `ANCE 字尾弱化發音結構 (${s})`,
    };
  }

  // 2. Prefix Combination
  if (['ad', 'un', 're', 'pre', 'dis', 'ex', 'in', 'sub', 'pro', 'ap', 'as', 'at', 'al', 'be', 'col', 'com', 'con'].includes(s) && !isLast) {
    return {
      pattern_id: 'PAT-12',
      pattern_name: 'Prefix Combination',
      rule_id: 'R017',
      rule_name: 'Prefix Reduction',
      stage_id: 'STAGE-04',
      stage_name: '多音節母音弱化與字尾',
      ipa_fragment: s === 'ad' ? 'əd' : s === 're' || s === 'be' ? 'rɪ' : s === 'un' ? 'ʌn' : 'ə',
      condition: `字首前綴弱化音節 ${s}`,
    };
  }

  // 3. Air / Rhyming
  if (s.includes('air') || s.includes('are') || s.includes('ear') || s.includes('ere')) {
    return {
      pattern_id: 'PAT-13',
      pattern_name: 'Air / Rhyming Combination',
      rule_id: 'R016',
      rule_name: 'Air Family',
      stage_id: 'STAGE-03',
      stage_name: '雙母音與複合字音',
      ipa_fragment: 'eər',
      condition: `包含 Air Family 發音結構 ${s}`,
    };
  }

  // 4. Palatalization / Complex (-iate, -cial, -tion)
  if (s.endsWith('tion') || s.endsWith('sion') || s.endsWith('ciate') || s.endsWith('tial')) {
    return {
      pattern_id: 'PAT-11',
      pattern_name: 'Palatalization / Complex Combination',
      rule_id: 'R011',
      rule_name: '-iate / -ciate Palatalization',
      stage_id: 'STAGE-04',
      stage_name: '多音節母音弱化與字尾',
      ipa_fragment: s.endsWith('tion') ? 'ʃən' : 'ʃəl',
      condition: `腭音化發音結構 ${s}`,
    };
  }

  // 5. Magic e (V+C+e)
  if (s.length >= 3 && s.endsWith('e') && VOWELS.has(s[s.length - 3]) && !VOWELS.has(s[s.length - 2])) {
    const mainVowel = s[s.length - 3];
    let vowelIpa = 'eɪ';
    if (mainVowel === 'i') vowelIpa = 'aɪ';
    if (mainVowel === 'o') vowelIpa = 'oʊ';
    if (mainVowel === 'u') vowelIpa = 'juː';
    if (mainVowel === 'a') vowelIpa = 'eɪ';

    return {
      pattern_id: 'PAT-01',
      pattern_name: 'Magic e',
      rule_id: 'R003',
      rule_name: 'Magic e',
      stage_id: 'STAGE-02',
      stage_name: '長母音與 R 控制音',
      ipa_fragment: vowelIpa,
      condition: `Magic e 結構 (${mainVowel}_e) 發長母音 /${vowelIpa}/`,
    };
  }

  // 6. Silent Letter (kn, wr, gn, mb, igh, bt)
  if (s.includes('kn') || s.includes('wr') || s.includes('gn') || s.includes('mb') || s.includes('igh') || s.includes('bt')) {
    return {
      pattern_id: 'PAT-07',
      pattern_name: 'Silent Letter',
      rule_id: 'R007',
      rule_name: 'Silent Letter',
      stage_id: 'STAGE-03',
      stage_name: '雙母音與複合字音',
      ipa_fragment: s.includes('igh') ? 'aɪt' : 'n',
      condition: `包含不發音字母組合 ${s}`,
    };
  }

  // 7. R-Controlled Vowel (ar, er, ir, or, ur)
  if (s.includes('ar') || s.includes('er') || s.includes('ir') || s.includes('or') || s.includes('ur')) {
    let rIpa = 'ɜːr';
    if (s.includes('ar')) rIpa = 'ɑːr';
    if (s.includes('or')) rIpa = 'ɔːr';
    if (s.includes('er') || s.includes('ir') || s.includes('ur')) rIpa = 'ɜːr';

    return {
      pattern_id: 'PAT-05',
      pattern_name: 'R-Controlled Vowel',
      rule_id: 'R005',
      rule_name: 'R Controlled Vowel',
      stage_id: 'STAGE-02',
      stage_name: '長母音與 R 控制音',
      ipa_fragment: rIpa,
      condition: `R 控制母音結構 (${s}) 發 /${rIpa}/`,
    };
  }

  // 8. Vowel Team (ee, ea, ai, ay, oa, oi, oy, ou, ow, oo, au, aw)
  if (s.includes('ee') || s.includes('ea') || s.includes('ai') || s.includes('ay') || s.includes('oa') || s.includes('oi') || s.includes('oy') || s.includes('ou') || s.includes('ow') || s.includes('oo') || s.includes('au') || s.includes('aw')) {
    let vtIpa = 'iː';
    if (s.includes('ai') || s.includes('ay')) vtIpa = 'eɪ';
    if (s.includes('oa') || s.includes('ow')) vtIpa = 'oʊ';
    if (s.includes('oi') || s.includes('oy')) vtIpa = 'ɔɪ';
    if (s.includes('ou')) vtIpa = 'aʊ';
    if (s.includes('oo')) vtIpa = 'ʊ';

    return {
      pattern_id: 'PAT-04',
      pattern_name: 'Vowel Team',
      rule_id: 'R004',
      rule_name: 'Vowel Digraph',
      stage_id: 'STAGE-02',
      stage_name: '長母音與 R 控制音',
      ipa_fragment: vtIpa,
      condition: `複合母音組合 (${s}) 發 /${vtIpa}/`,
    };
  }

  // 9. Consonant Digraph (sh, ch, th, ph, wh, ck, ng)
  if (s.includes('sh') || s.includes('ch') || s.includes('th') || s.includes('ph') || s.includes('wh') || s.includes('ck') || s.includes('ng')) {
    return {
      pattern_id: 'PAT-06',
      pattern_name: 'Consonant Digraph',
      rule_id: 'R006',
      rule_name: 'Consonant Pattern',
      stage_id: 'STAGE-01',
      stage_name: '基礎短母音',
      ipa_fragment: 'ʃ',
      condition: `複合子音結構 (${s})`,
    };
  }

  // 10. Unstressed Reduction
  if (!isStressed) {
    return {
      pattern_id: 'PAT-08',
      pattern_name: 'Unstressed Reduction',
      rule_id: 'R008',
      rule_name: 'Unstressed Reduction',
      stage_id: 'STAGE-04',
      stage_name: '多音節母音弱化與字尾',
      ipa_fragment: 'ən',
      condition: `非重音音節母音弱化為 Schwa /ə/`,
    };
  }

  // 11. Open Syllable vs Closed Syllable
  const lastChar = s[s.length - 1];
  if (VOWELS.has(lastChar)) {
    let openIpa = 'oʊ';
    if (lastChar === 'a') openIpa = 'eɪ';
    if (lastChar === 'e') openIpa = 'iː';
    if (lastChar === 'i') openIpa = 'aɪ';
    if (lastChar === 'u') openIpa = 'juː';

    return {
      pattern_id: 'PAT-03',
      pattern_name: 'Open Syllable',
      rule_id: 'R002',
      rule_name: 'Open Syllable',
      stage_id: 'STAGE-02',
      stage_name: '長母音與 R 控制音',
      ipa_fragment: openIpa,
      condition: `開放音節字尾母音 ${lastChar} 發長母音 /${openIpa}/`,
    };
  }

  // Default: Closed Syllable (Short Vowel)
  let shortIpa = 'æ';
  if (s.includes('e')) shortIpa = 'e';
  if (s.includes('i')) shortIpa = 'ɪ';
  if (s.includes('o')) shortIpa = 'ɒ';
  if (s.includes('u')) shortIpa = 'ʌ';

  return {
    pattern_id: 'PAT-02',
    pattern_name: 'Closed Syllable',
    rule_id: 'R001',
    rule_name: 'Closed Syllable',
    stage_id: 'STAGE-01',
    stage_name: '基礎短母音',
    ipa_fragment: shortIpa,
    condition: `閉音節結構發短母音 /${shortIpa}/`,
  };
}

/**
 * Offline Vocabulary Builder Core Engine (v1.6.1)
 */
export function buildEPRSWordRecord(src: VocabularySource, globalIndex: number): EPRSWordRecord {
  const word = String(src.word || '').trim();
  const pos = String(src.pos || 'n.').trim();
  const chinese = String(src.chinese || '').trim();

  // 1. Check Exception Resolver
  const excResult = resolveException(word);

  if (excResult.is_exception && excResult.exception_entry) {
    const exc = excResult.exception_entry;
    const sylList = exc.syllable;
    const memoryTip = generateMemoryTip(word, exc.pattern_name, exc.ipa, excResult, sylList);

    return {
      index: globalIndex,
      word: exc.word,
      pos: pos || 'n.',
      chinese: chinese || '常見單字',
      syllable: sylList,
      ipa: exc.ipa,
      syllable_ipa: [
        {
          syllable_index: 0,
          syllable_text: exc.word,
          syllable: exc.word,
          ipa: exc.ipa,
          stress: 'primary',
          pattern_id: exc.pattern_id,
          rule_id: exc.rule_id,
        },
      ],
      stress: {
        primary_stress_syllable_index: 0,
        secondary_stress_syllable_indexes: [],
        unstressed_reductions: [],
      },
      pattern_mapping: [
        {
          syllable_index: 0,
          syllable: exc.word,
          pattern_id: exc.pattern_id,
          pattern: exc.pattern_name,
          condition: exc.condition,
          rule_id: exc.rule_id,
          ipa: exc.ipa,
        },
      ],
      rule_mapping: [exc.rule_id],
      family_mapping: {
        pattern_family: {
          id: `PAT-FAM-${exc.pattern_id.replace('PAT-', '')}`,
          name: `${exc.pattern_name} Family`,
        },
        sound_family: {
          primary_sound: exc.primary_sound,
          reduced_sound: null,
        },
        stress_family: {
          primary_stress_index: 0,
          type: 'Monosyllabic',
        },
        reduction_family: {
          type: 'None',
          count: 0,
        },
        suffix_family: null,
        word_family: null,
        learning_family: {
          id: exc.stage_id,
          stage: exc.stage_name,
        },
      },
      exception_check: {
        is_exception: true,
        exception_id: exc.exception_id,
        exception_type: exc.exception_type,
        reason: exc.reason,
        pattern: exc.pattern,
        actual_sound: exc.actual_sound,
        note: exc.note,
      },
      memory_tip: memoryTip,
      reasoning: {
        syllable_reasoning: `音節拆解 [${sylList.join('-')}] 對應 ${exc.pattern_id} (${exc.pattern_name})`,
        pattern_reasoning: `全字構造包含 ${exc.pattern_id} (${exc.pattern_name})`,
        rule_reasoning: `全字套用 ${exc.rule_id} 不規則例外規則 (${exc.note})`,
        ipa_conclusion: `最終標準發音對應 IPA ${exc.ipa}`,
      },
      confidence: 100,
      reasoning_summary: `${exc.word} 音節拆解 [${sylList.join('/')}] 重音 0 Rule ${exc.rule_id} Pattern ${exc.pattern_id} IPA ${exc.ipa}`,
    };
  }

  // 2. Standard Rule-Based Build
  const sylList = syllabifyWord(word);
  const stressAnalysis = determinePrimaryStress(word, sylList, pos);
  const primaryStressIndex = stressAnalysis.primary_stress_index;

  const ipaResult = processIPA(sylList, primaryStressIndex);
  const fullIpa = ipaResult.full_ipa;

  const syllableIpas: SyllableIpaEntry[] = [];
  const patternMappings: PatternMappingEntry[] = [];
  const ruleMappingsSet = new Set<string>();

  let mainPatternId = 'PAT-02';
  let mainPatternName = 'Closed Syllable';
  let mainRuleId = 'R001';
  let mainStageId = 'STAGE-01';
  let mainStageName = '基礎短母音';

  sylList.forEach((syl, idx) => {
    const isStressed = idx === primaryStressIndex;
    const isLast = idx === sylList.length - 1;

    const analysis = analyzeSyllablePattern(syl, isLast, isStressed);
    const spFragment = ipaResult.syllable_phonemes[idx]?.ipa_fragment || analysis.ipa_fragment;

    ruleMappingsSet.add(analysis.rule_id);

    if (idx === primaryStressIndex) {
      mainPatternId = analysis.pattern_id;
      mainPatternName = analysis.pattern_name;
      mainRuleId = analysis.rule_id;
      mainStageId = analysis.stage_id;
      mainStageName = analysis.stage_name;
    }

    syllableIpas.push({
      syllable_index: idx,
      syllable_text: syl,
      syllable: syl,
      ipa: `/${spFragment}/`,
      stress: isStressed ? 'primary' : 'unstressed',
      pattern_id: analysis.pattern_id,
      rule_id: analysis.rule_id,
    });

    patternMappings.push({
      syllable_index: idx,
      syllable: syl,
      pattern_id: analysis.pattern_id,
      pattern: analysis.pattern_name,
      condition: analysis.condition,
      rule_id: analysis.rule_id,
      ipa: `/${spFragment}/`,
    });
  });

  const ruleMappings = Array.from(ruleMappingsSet);
  const patNum = mainPatternId.replace('PAT-', '');
  const memoryTip = generateMemoryTip(word, mainPatternName, fullIpa, excResult, sylList);

  return {
    index: globalIndex,
    word,
    pos: pos || 'n.',
    chinese: chinese || '基礎單字',
    syllable: sylList,
    ipa: fullIpa,
    syllable_ipa: syllableIpas,
    stress: {
      primary_stress_syllable_index: primaryStressIndex,
      secondary_stress_syllable_indexes: stressAnalysis.secondary_stress_indexes,
      unstressed_reductions: stressAnalysis.unstressed_reductions,
    },
    pattern_mapping: patternMappings,
    rule_mapping: ruleMappings,
    family_mapping: {
      pattern_family: {
        id: `PAT-FAM-${patNum}`,
        name: `${mainPatternName} Family`,
      },
      sound_family: {
        primary_sound: fullIpa,
        reduced_sound: sylList.length > 1 ? '/ə/' : null,
      },
      stress_family: {
        primary_stress_index: primaryStressIndex,
        type: stressAnalysis.stress_type,
      },
      reduction_family: {
        type: sylList.length > 1 ? 'Schwa Reduction' : 'None',
        count: stressAnalysis.unstressed_reductions.length,
      },
      suffix_family: null,
      word_family: null,
      learning_family: {
        id: mainStageId,
        stage: mainStageName,
      },
    },
    exception_check: {
      is_exception: false,
      exception_id: null,
      note: null,
    },
    memory_tip: memoryTip,
    reasoning: {
      syllable_reasoning: `[Stress_Engine v1.6.1] 音節拆解 [${sylList.join('-')}]，${stressAnalysis.reasoning}`,
      pattern_reasoning: `全字主要拼讀構造為 ${mainPatternId} (${mainPatternName})`,
      rule_reasoning: `發音符合 Rule ${mainRuleId} 音律對應規則`,
      ipa_conclusion: `自然發音規則推導完成，IPA 出音為 ${fullIpa}`,
    },
    confidence: 100,
    reasoning_summary: `${word} 音節拆解 [${sylList.join('/')}] 重音 ${primaryStressIndex} Rule ${mainRuleId} Pattern ${mainPatternId} IPA ${fullIpa}`,
  };
}
