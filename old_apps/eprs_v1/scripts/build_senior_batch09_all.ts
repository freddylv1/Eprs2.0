import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';
import { batch9DerivationsMap } from './batch9_derivations_map';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

// Special non-MOE1200 or custom additions in Batch 09 with full phonics derivations & rules
const SPECIAL_BATCH09_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; pos?: string; derivations?: DerivationItem[] }> = {
  'stair': {
    chinese: '樓梯, 梯級',
    syllable: ['stair'],
    ipa: '/stɛr/',
    pos: 'n.',
    derivations: batch9DerivationsMap['stair']
  },
  'string': {
    chinese: '細繩, 線, 弦; 串起, 線裝',
    syllable: ['string'],
    ipa: '/strɪŋ/',
    pos: 'n.',
    derivations: batch9DerivationsMap['string']
  },
  'through': {
    chinese: '穿過, 通過; 直達的, 穿透',
    syllable: ['through'],
    ipa: '/θruː/',
    pos: 'prep./adv.',
    derivations: batch9DerivationsMap['through']
  },
  'tip': {
    chinese: '頂端, 尖端; 小費, 提示, 秘訣; 給小費, 傾斜',
    syllable: ['tip'],
    ipa: '/tɪp/',
    pos: 'n./v.',
    derivations: batch9DerivationsMap['tip']
  }
};

export function buildSeniorBatch09() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b9Source = seniorL1.words.filter((w: any) => w.id >= 801 && w.id <= 900);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int|art)\..*$/i, '').trim();
    mapAll.set(bare, w);
    mapAll.set(w.word.toLowerCase().trim(), w);
  });

  // Alias mappings
  if (mapAll.has('taxi')) {
    mapAll.set('taxicab/taxi/cab', mapAll.get('taxi')!);
  }
  if (mapAll.has('telephone')) {
    mapAll.set('telephone/phone', mapAll.get('telephone')!);
  }
  if (mapAll.has('television')) {
    mapAll.set('television/tv', mapAll.get('television')!);
  }
  if (mapAll.has('stairs')) {
    mapAll.set('stair', mapAll.get('stairs')!);
  }

  const rawWords: SeniorRawInput[] = [];

  b9Source.forEach((w: any) => {
    let cleanWord = w.word.replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int|art)\..*$/i, '').trim();
    let pos = w.pos;
    if (!pos && w.word.includes(' ')) {
      const parts = w.word.split(' ');
      cleanWord = parts[0];
      pos = parts.slice(1).join(' ');
    }

    let lookupKey = cleanWord.toLowerCase().replace(/\(.*?\)/g, '').trim();
    if (lookupKey === 'someone/somebody') {
      lookupKey = 'someone/somebody';
    }

    const derivations = batch9DerivationsMap[w.id] || (SPECIAL_BATCH09_WORDS[lookupKey]?.derivations) || [];

    if (SPECIAL_BATCH09_WORDS[lookupKey]) {
      const sp = SPECIAL_BATCH09_WORDS[lookupKey];
      rawWords.push({
        id: w.id,
        word: cleanWord,
        pos: pos || sp.pos || 'n.',
        chinese: sp.chinese,
        syllable: sp.syllable,
        ipa: sp.ipa,
        derivations: derivations.length > 0 ? derivations : (sp.derivations || [])
      });
    } else {
      const m = mapAll.get(lookupKey) || mapAll.get(cleanWord.toLowerCase().trim());
      if (!m) {
        throw new Error(`Word ${cleanWord} (key: ${lookupKey}, id: ${w.id}) not found in mapAll or SPECIAL_BATCH09_WORDS`);
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

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 09`);

  // 1. Write lib/seniorBatch09Raw.ts
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

export const seniorBatch09Raw: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch09Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch09Raw.ts');

  // 2. Process words via processSeniorWord
  const processedWords = rawWords.map((raw) => {
    return processSeniorWord(raw, 9, 1, '第一級');
  });

  // 3. Write lib/seniorBatch09Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 09 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch09Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch09Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch09Data.ts');

  // 4. Write Source/Senior/Batch09.yaml
  const sourceYaml = {
    batch: 9,
    batch_name: "Senior_Level1_Batch_09",
    level: 1,
    level_name: "第一級",
    range: "801 ~ 900",
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
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch09.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch09.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch09.yaml
  const databaseYaml = {
    batch: 9,
    batch_name: "Senior_Level1_Batch_09",
    level: 1,
    level_name: "第一級",
    range: "801 ~ 900",
    version: "1.8.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.8 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260905_009",
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
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch09.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch09.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(9, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch09_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch09();
