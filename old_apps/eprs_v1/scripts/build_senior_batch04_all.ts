import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';
import { batch4DerivationsMap } from './batch4_derivations_map';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

// Special non-MOE1200 or custom additions in Batch 04 with full phonics derivations & rules
const SPECIAL_BATCH04_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; derivations: DerivationItem[] }> = {
  'file': {
    chinese: '檔案, 銼刀; 歸檔',
    syllable: ['file'],
    ipa: '/faɪl/',
    derivations: [
      { syllable: '單音節［file］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '字尾 e 靜音促使前面母音 i 發長音 /aɪ/，結合尾音 l 發 /faɪl/' }
    ]
  },
  'fool': {
    chinese: '傻瓜; 愚弄',
    syllable: ['fool'],
    ipa: '/fuːl/',
    derivations: [
      { syllable: '單音節［fool］', rule: '母音組合 oo (R004)', status: '【適用】', reason: 'oo 雙母音常規發長母音 /uː/，舌尖齒齦音 l 結尾發 /fuːl/' }
    ]
  },
  'god': {
    chinese: '神, 上帝; 女神',
    syllable: ['god'],
    ipa: '/ɡɑːd/',
    derivations: [
      { syllable: '單音節［god］', rule: '閉音節規則 (R001) + 硬音 g (R007)', status: '【適用】', reason: 'g 在 o 前發硬音 /ɡ/，子音 d 封閉音節，單一母音 o 常規發短母音 /ɡɑːd/' }
    ]
  },
  'height': {
    chinese: '高度, 身高',
    syllable: ['height'],
    ipa: '/haɪt/',
    derivations: [
      { syllable: '單音節［height］', rule: '母音組合規則 (R004) → 特例長雙母音 (R010) + 靜音 gh (R006)', status: '【不適用 (例外轉移)】', reason: 'eigh 組合常規發 /eɪ/ (如 weight)，此處特例發長雙母音 /haɪt/，gh 靜音 (R010)' }
    ]
  }
};

export function buildSeniorBatch04() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b4Source = seniorL1.words.filter((w: any) => w.id >= 301 && w.id <= 400);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    mapAll.set(bare, w);
    mapAll.set(w.word.toLowerCase().trim(), w);
  });

  const rawWords: SeniorRawInput[] = [];

  b4Source.forEach((w: any) => {
    let cleanWord = w.word.replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    let pos = w.pos;
    if (!pos && w.word.includes(' ')) {
      const parts = w.word.split(' ');
      cleanWord = parts[0];
      pos = parts.slice(1).join(' ');
    }

    let lookupKey = cleanWord.toLowerCase().replace(/\(.*?\)/g, '').trim();
    if (lookupKey.includes('/')) {
      lookupKey = lookupKey.split('/')[0].trim();
    }

    const derivations = batch4DerivationsMap[w.id] || (SPECIAL_BATCH04_WORDS[lookupKey]?.derivations) || [];

    if (SPECIAL_BATCH04_WORDS[lookupKey]) {
      const sp = SPECIAL_BATCH04_WORDS[lookupKey];
      rawWords.push({
        id: w.id,
        word: cleanWord,
        pos: pos || 'n.',
        chinese: sp.chinese,
        syllable: sp.syllable,
        ipa: sp.ipa,
        derivations: derivations.length > 0 ? derivations : sp.derivations
      });
    } else {
      const m = mapAll.get(lookupKey);
      if (!m) {
        throw new Error(`Word ${cleanWord} (key: ${lookupKey}, id: ${w.id}) not found in mapAll or SPECIAL_BATCH04_WORDS`);
      }
      rawWords.push({
        id: w.id,
        word: cleanWord,
        pos: pos || (m as any).pos || 'n.',
        chinese: m.chinese,
        syllable: m.syllable,
        ipa: m.ipa,
        derivations: derivations.length > 0 ? derivations : (m.steps?.derivations || [])
      });
    }
  });

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 04`);

  // 1. Write lib/seniorBatch04Raw.ts
  const rawTsContent = `export interface SeniorWordRecord {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: {
    syllable: string;
    rule: string;
    status: string;
    reason: string;
  }[];
}

export const seniorBatch04Raw: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch04Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch04Raw.ts');

  // 2. Process words via processSeniorWord
  const processedWords = rawWords.map((raw) => {
    return processSeniorWord(raw, 4, 1, '第一級');
  });

  // 3. Write lib/seniorBatch04Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 04 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch04Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch04Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch04Data.ts');

  // 4. Write Source/Senior/Batch04.yaml
  const sourceYaml = {
    batch: 4,
    batch_name: "Senior_Level1_Batch_04",
    level: 1,
    level_name: "第一級",
    range: "301 ~ 400",
    total_words: 100,
    words: rawWords.map(w => ({
      id: w.id,
      word: w.word,
      pos: w.pos,
      chinese: w.chinese,
      syllable: w.syllable,
      ipa: w.ipa
    }))
  };
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch04.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch04.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch04.yaml
  const databaseYaml = {
    batch: 4,
    batch_name: "Senior_Level1_Batch_04",
    level: 1,
    level_name: "第一級",
    range: "301 ~ 400",
    version: "1.7.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.7 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260904_004",
    words: rawWords.map(w => ({
      id: w.id,
      word: w.word,
      pos: w.pos,
      chinese: w.chinese,
      syllable: w.syllable,
      ipa: w.ipa,
      derivations: w.derivations
    }))
  };
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch04.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch04.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(4, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch04_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch04();
