import { SyllableMatrixCell, WordItem, WordMatrixAnalysis } from '../types';
import { EPRS_PHONICS_RULES } from './phonicsRules';
import { explainSyllabification } from './syllableRulesEngine';

/**
 * 清理 IPA 外部斜線與括號內次要發音（例如 "/ə/ (/ən/)" 取主要發音 "/ə/"）
 */
export function cleanPrimaryIpa(ipa: string): string {
  if (!ipa) return '';
  // 取第一組主要發音
  const primaryMatch = ipa.match(/\/([^\/]+)\//);
  if (primaryMatch) {
    return primaryMatch[1].trim();
  }
  return ipa.replace(/^\/|\/$/g, '').trim();
}

/**
 * 提取主重音音節索引 (0-based)
 * 以 IPA 內的重音符號 ˈ 為最權威基準
 */
export function findPrimaryStressIndex(ipa: string, syllableCount: number, syllables?: string[]): number {
  if (!ipa || syllableCount <= 1) return 0;
  const cleaned = cleanPrimaryIpa(ipa);

  // 1. 若 IPA 內有 '.' 或空白切分
  const dotParts = cleaned.split(/[.\s]+/);
  if (dotParts.length === syllableCount) {
    for (let i = 0; i < dotParts.length; i++) {
      if (dotParts[i].includes('ˈ')) {
        return i;
      }
    }
  }

  // 2. 若 IPA 包含 'ˈ' 但無 '.' 分隔，或分割數不等於音節數
  if (cleaned.includes('ˈ')) {
    const stressPos = cleaned.indexOf('ˈ');
    if (stressPos === 0) {
      return 0; // 重音在首個音節
    }
    
    // 計算重音符號前出現了幾次母音核
    const beforeStress = cleaned.slice(0, stressPos);
    const vowelMatches = beforeStress.match(/[æɛeɪiʌəʊuɒɑɔ]|eɪ|aɪ|ɔɪ|aʊ|oʊ|iː|uː|ɑː|ɔː|ɝː|ɜː|ɚ/g);
    const vowelCountBefore = vowelMatches ? vowelMatches.length : 0;
    
    if (vowelCountBefore > 0 && vowelCountBefore < syllableCount) {
      return vowelCountBefore;
    }

    // 雙音節詞若 'ˈ' 不在開頭，必然在第 2 個音節 (index 1)
    if (syllableCount === 2) {
      return 1;
    }
  }

  // 3. 多音節若無 'ˈ' 標記：檢查首音節是否為弱母音 /ə/
  if (cleaned.startsWith('ə') && syllableCount > 1) {
    return 1; // 如 about, above 等重音在第二音節
  }

  // 預設為 0
  return 0;
}

/**
 * 將完整 IPA 音標精確切分對應到各音節
 */
export function splitIpaSegments(ipa: string, syllables: string[]): string[] {
  const count = syllables.length;
  if (!ipa || count === 0) return Array(count).fill('');
  
  const cleaned = cleanPrimaryIpa(ipa);

  // 1. 若有 '.' 或空白切分且數量一致
  const dotParts = cleaned.split(/[.\s]+/).filter(Boolean);
  if (dotParts.length === count) {
    return dotParts.map(s => `/${s.trim()}/`);
  }

  // 2. 單音節詞
  if (count === 1) {
    return [`/${cleaned}/`];
  }

  // 3. 雙音節智慧對齊
  if (count === 2) {
    const stressIdx = cleaned.indexOf('ˈ');
    if (stressIdx > 0) {
      const part1 = cleaned.slice(0, stressIdx);
      const part2 = cleaned.slice(stressIdx);
      return [`/${part1}/`, `/${part2}/`];
    } else if (stressIdx === 0) {
      // 重音在第一個音節，例如 able /ˈeɪ.bəl/ 或 happy /ˈhæp.i/
      // 依常見字尾成音節 (ble, ple, tle) 或字尾母音分割
      const lastSyl = syllables[1].toLowerCase();
      if (/[bcdfghjklmnpqrstvwxyz]le$/.test(lastSyl) || lastSyl.endsWith('y') || lastSyl.endsWith('er')) {
        // 分割出後段
        const matchEnd = cleaned.match(/([bcdfghjklmnpqrstvwxyz]?[əl|n̩|i|ɪ|ɚ|ər]+)$/);
        if (matchEnd) {
          const splitPoint = cleaned.length - matchEnd[1].length;
          return [`/${cleaned.slice(0, splitPoint)}/`, `/${cleaned.slice(splitPoint)}/`];
        }
      }
    }
  }

  // 4. 多音節均勻切分或退回完整音標展示
  if (dotParts.length > 0) {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(dotParts[i] ? `/${dotParts[i]}/` : (i === 0 ? `/${cleaned}/` : ''));
    }
    return result;
  }

  return syllables.map((_, i) => (i === 0 ? `/${cleaned}/` : ''));
}

/**
 * 依音節字元與實際 IPA 發音，動態推導單一音節的適用自然發音規則
 * （一切規則分析以正確音標驗證）
 */
export function analyzeSyllableRules(
  syllable: string,
  ipaSegment: string,
  isPrimaryStress: boolean,
  isLastSyllable: boolean,
  totalSyllables: number
): { rules: string[]; breakdown: { letter: string; sound: string; ruleId?: string }[] } {
  const syl = syllable.toLowerCase().trim();
  const rules = new Set<string>();
  const breakdown: { letter: string; sound: string; ruleId?: string }[] = [];

  const rawIpa = ipaSegment.replace(/^\/|\/$/g, '').trim();
  const cleanIpa = rawIpa.replace(/[\/ˈˌ.]/g, '');

  // 1. 弱化音節驗證 (R008 / R012 / R015)
  // 音標為弱母音 /ə/ 或弱讀 /ɪ/、/i/ 且非重音
  const hasSchwaOrWeak = cleanIpa.includes('ə') || (cleanIpa.includes('ɪ') && !isPrimaryStress) || (cleanIpa === 'i' && !isPrimaryStress);
  if (!isPrimaryStress && hasSchwaOrWeak) {
    if (syl === 'a' && totalSyllables > 1) {
      rules.add('R008');
      rules.add('R015');
    } else if (/^(re|de|dis|ex|ac|ad|ap|at|con|com|pre|pro|in|im|un)$/.test(syl)) {
      rules.add('R012'); // 前綴弱讀
      rules.add('R008');
    } else {
      rules.add('R008'); // 中央弱母音
    }
  }

  // 2. 成音節驗證 (R009)
  // 字尾 -le, -el, -al, -en, -on 或音標為 /əl/, /l̩/, /ən/, /n̩/
  if (isLastSyllable && (/[bcdfghjklmnpqrstvwxyz]le$/.test(syl) || /əl|l̩|ən|n̩/.test(cleanIpa))) {
    rules.add('R009');
  }

  // 3. 美式閃音 T/D 驗證 (R013)
  if (cleanIpa.includes('t̬') || (!isPrimaryStress && /t|tt/.test(syl) && /t̬|d/.test(cleanIpa))) {
    rules.add('R013');
  }

  // 4. 靜音子音驗證 (R016)
  if (/^kn/.test(syl) && !cleanIpa.includes('k')) rules.add('R016');
  if (/^wr/.test(syl) && !cleanIpa.includes('w')) rules.add('R016');
  if (/mb$/.test(syl) && !cleanIpa.includes('b')) rules.add('R016');
  if (/^ps/.test(syl) && !cleanIpa.includes('p')) rules.add('R016');
  if (/^gn/.test(syl) && !cleanIpa.includes('g')) rules.add('R016');

  // 5. 軟顎鼻音同化驗證 (R017)
  if ((syl.includes('nk') || syl.includes('ng')) && cleanIpa.includes('ŋ')) {
    rules.add('R017');
  }

  // 6. 複合子音驗證 (R006)
  if (
    (/sh/.test(syl) && cleanIpa.includes('ʃ')) ||
    (/ch|tch/.test(syl) && cleanIpa.includes('tʃ')) ||
    (/th/.test(syl) && (cleanIpa.includes('θ') || cleanIpa.includes('ð'))) ||
    (/ph/.test(syl) && cleanIpa.includes('f')) ||
    (/wh/.test(syl) && cleanIpa.includes('w')) ||
    (/ng/.test(syl) && cleanIpa.includes('ŋ')) ||
    (/ck/.test(syl) && cleanIpa.includes('k'))
  ) {
    rules.add('R006');
  }

  // 7. 軟音 c / g 驗證 (R007)
  if (
    (/c[eiy]/.test(syl) && cleanIpa.includes('s')) ||
    (/g[eiy]/.test(syl) && cleanIpa.includes('dʒ'))
  ) {
    rules.add('R007');
  }

  // 8. R 控制母音驗證 (R005)
  if (
    /ɑːr|ɔːr|ɝː|ɜːr|ɚ|ɛr|ɪr|ʊr/.test(cleanIpa) ||
    (/ar|er|ir|or|ur|air|ear|eer|oor|our/.test(syl) && cleanIpa.includes('r'))
  ) {
    rules.add('R005');
  }

  // 9. 魔術 e 驗證 (R003)
  // 母音結構 [aeiou] + [子音] + e，且音標為長母音 /eɪ/, /iː/, /aɪ/, /oʊ/, /juː/, /uː/
  const hasLongVowelIpa = /eɪ|iː|aɪ|oʊ|juː|uː/.test(cleanIpa);
  if (/[aeiou][bcdfghjklmnpqrstvwxyz]+e$/.test(syl) && hasLongVowelIpa) {
    rules.add('R003');
  }

  // 10. 雙母音/母音組合驗證 (R004)
  if (
    /ee|ea|ai|ay|oa|ow|oi|oy|ou|oo|au|aw|ei|ey|ie|ui/.test(syl) &&
    (/eɪ|iː|aɪ|oʊ|aʊ|ɔɪ|uː|ʊ|ɔː/.test(cleanIpa) || cleanIpa.length > 0)
  ) {
    rules.add('R004');
  }

  // 11. 半母音 Y 驗證 (R011)
  if (/y$/.test(syl) && (/aɪ|i|ɪ/.test(cleanIpa) || isLastSyllable)) {
    rules.add('R011');
  }

  // 12. 詞綴變化驗證 (R015)
  if (/^(un|re|dis|mis|in|im|non|pre)/.test(syl) || /(ed|ing|ly|ness|ment|ful|less|able|ible|tion|sion|s|es)$/.test(syl)) {
    rules.add('R015');
  }

  // 13. 開音節 (R002) vs 閉音節 (R001) 音標嚴格判定
  if (rules.size === 0 || (!rules.has('R008') && !rules.has('R003') && !rules.has('R004') && !rules.has('R005'))) {
    // 嚴格音標比對：發長母音且以母音字母結尾 -> R002
    if (hasLongVowelIpa && /[aeiou]$/.test(syl)) {
      rules.add('R002'); // 開音節長母音
    } 
    // 音標為短母音 /æ/, /ɛ/, /e/, /ɪ/, /ɑː/, /ɒ/, /ɑ/, /ʌ/, /ʊ/ -> R001
    else if (/æ|ɛ|ɪ|ɑː|ɒ|ʌ|ʊ/.test(cleanIpa) || /[aeiou][bcdfghjklmnpqrstvwxyz]+$/.test(syl)) {
      rules.add('R001'); // 閉音節短母音
    } 
    // 若音節母音結尾且在重音 -> R002
    else if (/[aeiou]$/.test(syl) && isPrimaryStress) {
      rules.add('R002');
    } 
    // 其他常規情況
    else if (/[aeiou]$/.test(syl)) {
      rules.add('R002');
    } else {
      rules.add('R001');
    }
  }

  // 建立音素結構
  breakdown.push({
    letter: syllable,
    sound: ipaSegment || cleanIpa,
    ruleId: Array.from(rules)[0]
  });

  return {
    rules: Array.from(rules),
    breakdown
  };
}

/**
 * 取得音節拆解與自然發音推導說明 (Syllable Derivation Explanation)
 */
export function getSyllableDerivationExplanation(
  sylText: string,
  stressType: 'primary' | 'secondary' | 'unstressed',
  matchedRules: string[],
  wordItem: WordItem,
  sylIndex: number
): string {
  // 1. 若資料庫有指定 derivation reason，優先採用
  if (wordItem.derivations && wordItem.derivations.length > 0) {
    const directMatch = wordItem.derivations.find(
      d => d.syllable?.toLowerCase() === sylText.toLowerCase() ||
           d.syllable === String(sylIndex + 1)
    );
    if (directMatch?.reason) {
      return directMatch.reason;
    }
    if (directMatch?.ruleName) {
      return directMatch.ruleName;
    }
  }

  // 2. 根據主要法則與重音類型進行精準繁中說明
  const primaryRule = matchedRules[0];
  const stressPrefix = stressType === 'primary' ? '主重音' : stressType === 'secondary' ? '次重音' : '非重音';

  switch (primaryRule) {
    case 'R001':
      return `${stressPrefix} • 閉音節短母音 (子音結尾封閉氣流，母音發短音)`;
    case 'R002':
      return `${stressPrefix} • 開音節長母音 (母音字母結尾，發字母本名長音)`;
    case 'R003':
      return `${stressPrefix} • 魔術 e 規則 (字尾 e 靜音使主要母音發長音)`;
    case 'R004':
      return `${stressPrefix} • 雙母音/母音組合 (兩母音並列發專屬長音/雙母音)`;
    case 'R005':
      return `${stressPrefix} • R 控制母音 (母音後接 r 產生捲舌或特色元音)`;
    case 'R006':
      return `${stressPrefix} • 複合子音 (特定子音字母組合發單一音素)`;
    case 'R007':
      return `${stressPrefix} • 軟音化 (c/g 後接 e/i/y 轉發軟音 /s/, /dʒ/)`;
    case 'R008':
      return `非重音弱化音節 • 發中央弱母音 /ə/ 或弱讀 /ɪ/`;
    case 'R009':
      return `成音節 • -le / -el 子音與舌側音自成音節發音`;
    case 'R010':
      return `${stressPrefix} • 特殊高頻例外音`;
    case 'R011':
      return `${stressPrefix} • 字尾半母音 y (單音節發 /aɪ/，多音節字尾發 /i/)`;
    case 'R012':
      return `前綴弱讀音節 • 常見詞綴輕讀弱化為 /ə/ 或 /ɪ/`;
    case 'R013':
      return `美式閃音 T/D • 母音夾擊下轉為閃音 [t̬]`;
    case 'R014':
      return `複合字重音 • 首詞承擔主重音`;
    case 'R015':
      return `詞綴變化規則 • 維持字根原始發音與衍生變化`;
    case 'R016':
      return `${stressPrefix} • 靜音子音字母 (特定子音字母組合不發音)`;
    case 'R017':
      return `${stressPrefix} • 軟顎鼻音同化 (n 在 k/g 前同化發 /ŋ/)`;
    case 'R018':
      return `${stressPrefix} • 外來語音變 (字源特定拼讀)`;
    default:
      if (stressType === 'primary') {
        return '主重音音節 • 依標準字形規律拼讀';
      }
      if (stressType === 'secondary') {
        return '次重音音節 • 依字形規律拼讀';
      }
      return '非重音音節 • 輕讀弱化';
  }
}

/**
 * 完整生成單字的音節與發音矩陣 (Syllable & IPA Matrix)
 */
export function generateWordMatrix(wordItem: WordItem): WordMatrixAnalysis {
  const syllables = (wordItem.syllables && wordItem.syllables.length > 0)
    ? wordItem.syllables
    : [wordItem.word];
    
  const syllableCount = syllables.length;
  const primaryStressIdx = findPrimaryStressIndex(wordItem.ipa, syllableCount, syllables);
  const ipaSegments = splitIpaSegments(wordItem.ipa, syllables);

  const cells: SyllableMatrixCell[] = syllables.map((sylText, idx) => {
    const isPrimary = idx === primaryStressIdx;
    const ipaSeg = ipaSegments[idx] || (idx === 0 ? wordItem.ipa : '');
    const isLast = idx === syllableCount - 1;

    let stressType: 'primary' | 'secondary' | 'unstressed' = 'unstressed';
    if (isPrimary) {
      stressType = 'primary';
    } else if (ipaSeg.includes('ˌ')) {
      stressType = 'secondary';
    }

    const { rules, breakdown } = analyzeSyllableRules(
      sylText,
      ipaSeg,
      isPrimary,
      isLast,
      syllableCount
    );

    const explanation = getSyllableDerivationExplanation(
      sylText,
      stressType,
      rules,
      wordItem,
      idx
    );

    return {
      syllableIndex: idx,
      syllableText: sylText,
      ipaSegment: ipaSeg,
      stressType,
      matchedRules: rules,
      derivationExplanation: explanation,
      phonemeBreakdown: breakdown
    };
  });

  // 匯總全單字涵蓋之規則
  const allRulesSet = new Set<string>(wordItem.ruleCodes || []);
  cells.forEach(c => c.matchedRules.forEach(r => allRulesSet.add(r)));

  // 分析為何拆成 n 個音節與音節劃分法則
  const divisionExplanation = explainSyllabification(wordItem.word, syllables);

  return {
    word: wordItem.word,
    fullIpa: wordItem.ipa,
    syllableCount,
    primaryStressSyllableIndex: primaryStressIdx,
    cells,
    summaryRules: Array.from(allRulesSet),
    divisionExplanation
  };
}

/**
 * 取得規則的顏色標籤主題
 */
export function getRuleColorBadge(ruleId: string): { bg: string; text: string; border: string } {
  const code = (ruleId || '').toUpperCase();
  const rule = EPRS_PHONICS_RULES[code];
  const category = rule?.category || '母音法則';

  switch (category) {
    case '母音法則':
      return { bg: 'bg-amber-50 dark:bg-amber-950/40', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-200 dark:border-amber-800' };
    case '子音法則':
      return { bg: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-800' };
    case '音節與弱化':
      return { bg: 'bg-sky-50 dark:bg-sky-950/40', text: 'text-sky-700 dark:text-sky-300', border: 'border-sky-200 dark:border-sky-800' };
    case '詞綴與複合詞':
      return { bg: 'bg-indigo-50 dark:bg-indigo-950/40', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800' };
    case '例外與特殊':
    default:
      return { bg: 'bg-rose-50 dark:bg-rose-950/40', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-200 dark:border-rose-800' };
  }
}

