import fs from 'fs';
import path from 'path';
import { SENIOR_BATCH_01_DATA } from '../lib/seniorBatch01Raw';
import { BatchWord, DerivationItem } from '../lib/batch01Data';

// 提取母音核心 (Vowel Nucleus) 並精準標記多重位置
function getWordVowelCores(word: string, syllables: string[]): string[] {
  const wLower = word.toLowerCase().replace(/[^a-z]/g, '');
  const coresWithPos: string[] = [];
  let searchPos = 0;
  
  syllables.forEach((s) => {
    const sLower = s.toLowerCase().replace(/[^a-z]/g, '');
    if (!sLower) return;
    const sylStart = wLower.indexOf(sLower, searchPos);
    const actualStart = sylStart !== -1 ? sylStart : searchPos;
    searchPos = actualStart + sLower.length;
    
    // 優先匹配雙母音組合與 R 控制母音，再匹配單母音
    const matches = sLower.match(/ea|ee|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei|ui|ew|ey|oa|er|ir|ur|ar|or|a|e|i|o|u|y/g);
    if (matches && matches.length > 0) {
      matches.forEach(m => {
        const mIdxInSyl = sLower.indexOf(m);
        const globalIdx = actualStart + (mIdxInSyl !== -1 ? mIdxInSyl : 0);
        const totalOccurrences = (wLower.match(new RegExp(m, 'g')) || []).length;
        if (totalOccurrences > 1) {
          if (m.length === 1) {
            coresWithPos.push(`${m}(${globalIdx + 1})`);
          } else {
            coresWithPos.push(`${m}(${globalIdx + 1}-${globalIdx + m.length})`);
          }
        } else {
          coresWithPos.push(m);
        }
      });
    }
  });
  return coresWithPos;
}

// 辨識不可拆組合 (子音叢 Blend / 複合子音 Digraph / 字母組合)
function findIndivisibleUnits(word: string): string[] {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  const blends = ['gr', 'br', 'cr', 'dr', 'fr', 'pr', 'tr', 'cl', 'bl', 'fl', 'gl', 'pl', 'sl', 'st', 'sp', 'sk', 'sm', 'sn', 'sw', 'str', 'spr', 'scr'];
  const digraphs = ['sh', 'ch', 'th', 'ph', 'ck', 'ng', 'nk', 'dge', 'tch', 'qu', 'wh'];
  const suffixes = ['tion', 'sion', 'ment', 'ance', 'ence', 'able', 'ible'];

  const found: string[] = [];
  suffixes.forEach(s => {
    if (w.endsWith(s)) found.push(`[${s}] 後綴字尾組合`);
  });
  digraphs.forEach(d => {
    if (w.includes(d)) found.push(`[${d}] 複合子音 (Consonant Digraph)`);
  });
  blends.forEach(b => {
    if (w.includes(b)) found.push(`[${b}] 子音叢 (Consonant Blend)`);
  });

  return Array.from(new Set(found));
}

function formatSegmentTag(segment: string, fullWord: string, sIdx: number): string {
  return segment;
}

export function processSeniorWord(w: any, batch = 1, level = 1, levelName = '第一級'): BatchWord & { pos?: string; level: number; levelName: string } {
  const syllables: string[] = w.syllable || [w.word];
  const word: string = w.word;
  const ipa: string = w.ipa;
  const wLower = word.toLowerCase();

  // 1. 母音核心與音節頭標題
  const cores = getWordVowelCores(word, syllables);
  const uniqueCoresStr = cores.map(c => `[${c}]`).join(', ');

  const header = syllables.length === 1 
    ? `單音節字 [${syllables[0]}]`
    : `${syllables.length} 音節 [${syllables.join(' · ')}]`;

  const vowelCoreText = `1. 母音核心：${uniqueCoresStr}（共 ${syllables.length} 個）`;

  const indivisibles = findIndivisibleUnits(word);
  const indivisibleRule = indivisibles.length > 0
    ? `2. 不可拆組合：${indivisibles.slice(0, 2).join('，')} 保持完整`
    : '2. 不可拆組合：無';

  let structureRule = '';
  if (syllables.length === 1) {
    structureRule = '3. 結構切分：單音節結構，不需切分';
  } else if (syllables[syllables.length - 1].endsWith('ble') || syllables[syllables.length - 1].endsWith('tle') || syllables[syllables.length - 1].endsWith('ple') || syllables[syllables.length - 1].endsWith('dle') || syllables[syllables.length - 1].endsWith('gle')) {
    structureRule = '3. 結構切分：字尾成音節獨立劃歸';
  } else {
    let hasVccv = false;
    for (let i = 0; i < syllables.length - 1; i++) {
      const s1 = syllables[i];
      const s2 = syllables[i + 1];
      if (/[b-df-hj-np-tv-z]$/i.test(s1) && /^[b-df-hj-np-tv-z]/i.test(s2)) {
        hasVccv = true;
        break;
      }
    }
    if (hasVccv) {
      structureRule = '3. 結構切分：VCCV 相連子音中間拆開';
    } else {
      structureRule = '3. 結構切分：VCV 優先劃歸後續音節';
    }
  }

  const syllableStep = `${vowelCoreText}\n${indivisibleRule}\n${structureRule}\n4. 切分結果：${header}`;

  // 2. 發音型態
  const patternItems: string[] = [];
  syllables.forEach((s) => {
    const sl = s.toLowerCase();
    if (sl.endsWith('e') && sl.length > 2 && !sl.endsWith('ee') && !sl.endsWith('le')) {
      patternItems.push(`[${s}] 魔術 e 型態`);
    } else if (/ee|ea|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei|ew|ey|oa|ui|[aeiou]{2}/i.test(sl)) {
      patternItems.push(`[${s}] 母音組合型態`);
    } else if (/[aeiou]r/i.test(sl)) {
      patternItems.push(`[${s}] R 控制母音型態`);
    } else if (sl.endsWith('ble') || sl.endsWith('tle') || sl.endsWith('ple') || sl.endsWith('dle') || sl.endsWith('gle')) {
      patternItems.push(`[${s}] 成音節字尾型態`);
    } else if (/^[aeiou]$/i.test(sl) || /^[b-df-hj-np-tv-z]+[aeiouy]$/i.test(sl)) {
      patternItems.push(`[${s}] 開音節型態`);
    } else {
      patternItems.push(`[${s}] 閉音節型態`);
    }
  });
  const patternStep = patternItems.join('，');

  // 3. 發音規則說明與音標推導
  const rules: string[] = [];
  const derivations: DerivationItem[] = w.derivations || [];
  const isException = derivations.some(d => d.status.includes('不適用'));

  let primaryStressIdx = 0;
  if (syllables.length > 1 && ipa) {
    const cleanIpa = ipa.replace(/^\//, '').replace(/\/$/, '');
    const stressPos = cleanIpa.indexOf('ˈ');
    if (stressPos === -1 || stressPos === 0) {
      primaryStressIdx = 0;
    } else {
      const before = cleanIpa.substring(0, stressPos);
      const parts = before.split(/[\.ˌ]/).filter(p => p.length > 0);
      primaryStressIdx = Math.min(parts.length, syllables.length - 1);
    }
  }

  // 推導規則對映
  syllables.forEach((syl, sIdx) => {
    const sylL = syl.toLowerCase();
    const isStressed = (sIdx === primaryStressIdx) || syllables.length === 1;

    // 前綴弱化 (R012)
    if (sIdx === 0 && !isStressed && syllables.length > 1 && ['a', 'an', 'be', 'de', 're', 'ex', 'in', 'im', 'pro', 'sub', 'ad', 'ap', 'as', 'at', 'al', 'dis', 'un', 'ac'].includes(sylL)) {
      rules.push(`前綴弱化 (R012)：［${syl}］非重讀前綴母音弱化發 /ə/ 或 /ɪ/`);
    } else if (sylL.endsWith('ble') || sylL.endsWith('tle') || sylL.endsWith('ple') || sylL.endsWith('dle') || sylL.endsWith('gle')) {
      rules.push(`成音節字尾 (R009)：［${syl}］成音節發 /l̩/ 或 /əl/`);
    } else if (!isStressed) {
      if (/[aeiou]r$/i.test(sylL)) {
        rules.push(`R 控制母音弱化 (R005/R008)：［${syl}］非重音節弱化發輕捲舌母音 /ɚ/`);
      } else {
        rules.push(`非重音母音弱化 (R008)：［${syl}］非重音母音弱化發輕母音 /ə/ 或 /ɪ/`);
      }
    } else {
      if (/[aeiou]{1,2}r/i.test(sylL) && !wLower.includes('ear') && !wLower.includes('bear')) {
        rules.push(`R 控制母音 (R005)：［${syl}］母音接 r 形成捲舌音`);
      } else if (/.[aeiouy].*e$/i.test(sylL) && !sylL.endsWith('ee') && !sylL.endsWith('le')) {
        rules.push(`魔術 e (R003)：［${syl}］字尾 e 靜音使主要母音發長音`);
      } else if (/ee|ea|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei/i.test(sylL) && !isException) {
        rules.push(`母音組合 (R004)：［${syl}］發固定長母音或雙母音`);
      } else if (/^[b-df-hj-np-tv-z]*[aeiouy]$/i.test(sylL)) {
        rules.push(`開音節 (R002)：［${syl}］母音結尾發長母音`);
      } else {
        rules.push(`閉音節 (R001)：［${syl}］子音封閉發短母音`);
      }
    }
  });

  if (/c[eiy]/i.test(wLower)) {
    rules.push('軟音 c (R007)：［c］在 e, i, y 前發軟音 /s/');
  } else if (/[^s]c[aou]/i.test(wLower) || /^c[aou]/i.test(wLower) || /c$/i.test(wLower)) {
    rules.push('硬音 c (R007)：［c］發硬音 /k/');
  }
  if (/g[eiy]/i.test(wLower) && !['gift', 'get', 'give', 'girl'].some(k => wLower.includes(k))) {
    rules.push('軟音 g (R007)：［g］在 e, i, y 前發軟音 /dʒ/');
  }

  const digraphMatch = word.match(/sh|ch|th|ph|ck|ng|nk/i);
  if (digraphMatch) {
    rules.push(`複合子音 (R006)：［${digraphMatch[0]}］保持完整發單一子音`);
  }

  // 組合音標推導鏈
  let ipaStep = '';
  if (derivations && derivations.length > 0) {
    const dSteps = derivations.map(d => `${d.syllable}：${d.rule}（${d.status}）`);
    ipaStep = `${dSteps.join('；')}。音節合成推導 ➔ 標準音標 ${ipa}`;
  } else {
    ipaStep = `音節自然發音規則推導 ➔ 標準音標 ${ipa}`;
  }

  return {
    id: w.id,
    word: w.word,
    pos: w.pos,
    chinese: w.chinese,
    syllable: syllables,
    syllableText: header,
    syllableDetail: {
      header,
      vowelCore: vowelCoreText,
      structureRule,
      indivisibleRule,
    },
    ipa: w.ipa,
    batch: batch || w.batch || 1,
    level: level || w.level || 1,
    levelName: levelName || w.levelName || '第一級',
    isException,
    exceptionCategory: isException ? (derivations.find(d => d.status.includes('不適用'))?.rule || '例外規則') : undefined,
    exceptionReason: isException ? (derivations.find(d => d.status.includes('不適用'))?.reason || '歷史演變特殊讀音') : undefined,
    steps: {
      syllableStep,
      patternStep,
      ruleStep: Array.from(new Set(rules)),
      ipaStep,
      derivations,
    }
  };
}

export function rebuildBatch01() {
  const allSeniorProcessed = SENIOR_BATCH_01_DATA.map((w) => processSeniorWord(w, 1, 1, '第一級'));

  const tsContent = `// Auto-generated EPRS Senior High Level 1 Batch 01 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord, DerivationItem } from './batch01Data';

export interface SeniorBatchWord extends BatchWord {
  pos?: string;
  level: number;
  levelName: string;
}

export const seniorBatch01Words: SeniorBatchWord[] = ${JSON.stringify(allSeniorProcessed, null, 2)};
`;

  const outputPath = path.join(process.cwd(), 'lib', 'seniorBatch01Data.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log('Successfully wrote fully-featured Senior Batch 01 data to lib/seniorBatch01Data.ts');
}

if (import.meta.main) {
  rebuildBatch01();
}
