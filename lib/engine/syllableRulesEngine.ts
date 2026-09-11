export interface SyllabificationRuleExplanation {
  ruleCode: string;
  ruleName: string;
  description: string;
  breakdownPrinciple: string;
  examplePattern: string;
}

/**
 * 英語音節劃分簡潔原則
 */
export const SYLLABLE_DIVISION_RULES: Record<string, { name: string; tag: string; tip: string }> = {
  'V-CV': {
    name: 'VCV 前切 (開音節)',
    tag: 'V / CV',
    tip: '單子音歸後節，前母音多發長音或弱化（如 ba·by, ho·tel）'
  },
  'VC-V': {
    name: 'VCV 後切 (閉音節)',
    tag: 'VC / V',
    tip: '重音短母音牽引子音收尾形成閉音節（如 rob·in, lem·on）'
  },
  'V-CCV': {
    name: '雙子音分切 (VCCV)',
    tag: 'VC / CV',
    tip: '相鄰雙子音中間切半，各歸前後（如 hap·py, nap·kin）'
  },
  'CLE': {
    name: '字尾 -le 成音節',
    tag: '[子音]+le',
    tip: '字尾 -le 帶前面子音自成獨立音節發 /əl/（如 a·ble, can·dle）'
  },
  'PREFIX_SUFFIX': {
    name: '詞綴切分',
    tag: '前後綴',
    tip: '依構詞語意邊界獨立切分（如 un-, re-, -ful, -tion）'
  },
  'COMPOUND': {
    name: '複合詞邊界',
    tag: '單字結合',
    tip: '在原本獨立單字結合點處切分（如 sun·light）'
  },
  'V-V': {
    name: '雙母音分開 (V/V)',
    tag: 'V / V',
    tip: '相鄰母音各自發音時從中間切開（如 di·et, ra·di·o）'
  },
  'MAGIC_E': {
    name: '魔術 e 凝聚',
    tag: 'V-C-e',
    tip: '字尾 e 不發音且不增加音節，促使前母音發長音（如 cake, time）'
  }
};

/**
 * 分析為何單字拆成 n 個音節（專門優化為手機好讀的極簡版）
 */
export function explainSyllabification(word: string, syllables: string[]): {
  count: number;
  reason: string;
  detectedRules: { ruleKey: string; title: string; explanation: string }[];
} {
  const count = syllables.length;
  const lower = word.toLowerCase().trim();
  const detectedRules: { ruleKey: string; title: string; explanation: string }[] = [];

  if (count <= 1) {
    let singleReason = `含 1 個發音母音核，故為「單音節詞」。`;
    if (/[aeiou][bcdfghjklmnpqrstvwxyz]e$/i.test(lower)) {
      singleReason = `含 1 個主要母音核；字尾「魔術 e」不發音不增節。`;
      detectedRules.push({
        ruleKey: 'MAGIC_E',
        title: '魔術 e 不增節',
        explanation: '字尾不發音 e 僅促使前母音發長音，與主母音合為一節。'
      });
    }
    return { count: 1, reason: singleReason, detectedRules };
  }

  // 多音節分析
  // 1. 檢查字尾 -le (CLE)
  if (/[bcdfghjklmnpqrstvwxyz]le$/i.test(lower) && syllables[syllables.length - 1].toLowerCase().endsWith('le')) {
    const lastSyl = syllables[syllables.length - 1];
    detectedRules.push({
      ruleKey: 'CLE',
      title: `字尾成音節 [${lastSyl}]`,
      explanation: `「子音 + -le」自成一個獨立音節（發成音子音 /əl/）。`
    });
  }

  // 2. 檢查常見雙子音切分 (VCCV)
  let hasDoubleConsonant = false;
  for (let i = 0; i < syllables.length - 1; i++) {
    const s1 = syllables[i].toLowerCase();
    const s2 = syllables[i + 1].toLowerCase();
    const endChar = s1[s1.length - 1];
    const startChar = s2[0];
    
    if (endChar === startChar && /[bcdfghjklmnpqrstvwxyz]/.test(endChar)) {
      hasDoubleConsonant = true;
      break;
    }
  }

  if (hasDoubleConsonant) {
    detectedRules.push({
      ruleKey: 'V-CCV',
      title: '雙子音切半 (VCCV)',
      explanation: '在重疊或相鄰雙子音中間切開，分別劃歸前後音節。'
    });
  }

  // 3. 檢查常見詞綴 (Prefix / Suffix)
  const commonPrefixes = ['un', 're', 'in', 'im', 'dis', 'en', 'em', 'pre', 'pro', 'sub', 'ex'];
  const commonSuffixes = ['tion', 'sion', 'ment', 'ful', 'less', 'ness', 'able', 'ible', 'ing', 'ed', 'ly', 'er', 'est', 'y'];

  for (const prefix of commonPrefixes) {
    if (syllables[0].toLowerCase() === prefix && lower.startsWith(prefix)) {
      detectedRules.push({
        ruleKey: 'PREFIX_SUFFIX',
        title: `前綴切分 [${prefix}-]`,
        explanation: `字首「${prefix}-」具備獨立構詞意涵，獨立為首個音節。`
      });
      break;
    }
  }

  for (const suffix of commonSuffixes) {
    if (syllables[syllables.length - 1].toLowerCase() === suffix && lower.endsWith(suffix)) {
      detectedRules.push({
        ruleKey: 'PREFIX_SUFFIX',
        title: `後綴切分 [-${suffix}]`,
        explanation: `字尾「-${suffix}」為常見構詞後綴，獨立成節。`
      });
      break;
    }
  }

  // 4. 若為一般 VCV 開音節
  if (detectedRules.length === 0) {
    detectedRules.push({
      ruleKey: 'V-CV',
      title: '母音核劃分 (VCV)',
      explanation: '依發音母音核停頓與子音附著關係切分。'
    });
  }

  const mainReason = `共 ${count} 個發音母音核 ➔ 拆為 [ ${syllables.join(' · ')} ]`;

  return {
    count,
    reason: mainReason,
    detectedRules
  };
}
