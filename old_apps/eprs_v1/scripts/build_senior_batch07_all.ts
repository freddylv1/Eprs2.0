import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';
import { batch7DerivationsMap } from './batch7_derivations_map';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

// Special non-MOE1200 or custom additions in Batch 07 with full phonics derivations & rules
const SPECIAL_BATCH07_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; pos?: string; derivations?: DerivationItem[] }> = {
  'online': {
    chinese: '在線的, 聯網的; 於網路上',
    syllable: ['on', 'line'],
    ipa: '/ˈɑːn.laɪn/',
    pos: 'adj./adv.'
  },
  'photograph': {
    chinese: '照片; 攝影',
    syllable: ['pho', 'to', 'graph'],
    ipa: '/ˈfoʊ.t̬ə.ɡræf/',
    pos: 'n./v.'
  },
  'photo': {
    chinese: '照片',
    syllable: ['pho', 'to'],
    ipa: '/ˈfoʊ.t̬oʊ/',
    pos: 'n.'
  },
  'pm': {
    chinese: '下午, 午後 (post meridiem)',
    syllable: ['p.', 'm.'],
    ipa: '/ˌpiːˈɛm/',
    pos: 'adv.'
  },
  'p.m.': {
    chinese: '下午, 午後 (post meridiem)',
    syllable: ['p.', 'm.'],
    ipa: '/ˌpiːˈɛm/',
    pos: 'adv.'
  },
  'potato': {
    chinese: '馬鈴薯',
    syllable: ['po', 'ta', 'to'],
    ipa: '/pəˈteɪ.t̬oʊ/',
    pos: 'n.'
  },
  'power': {
    chinese: '力量, 電力; 給…提供動力',
    syllable: ['pow', 'er'],
    ipa: '/ˈpaʊ.ɚ/',
    pos: 'n./v.'
  },
  'probably': {
    chinese: '很可能, 大概',
    syllable: ['prob', 'a', 'bly'],
    ipa: '/ˈprɑː.bə.bli/',
    pos: 'adv.'
  },
  'reach': {
    chinese: '抵達, 伸手及到; 伸展距離',
    syllable: ['reach'],
    ipa: '/riːtʃ/',
    pos: 'v./n.'
  }
};

export function buildSeniorBatch07() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b7Source = seniorL1.words.filter((w: any) => w.id >= 601 && w.id <= 700);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    mapAll.set(bare, w);
    mapAll.set(w.word.toLowerCase().trim(), w);
  });

  const rawWords: SeniorRawInput[] = [];

  b7Source.forEach((w: any) => {
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

    const derivations = batch7DerivationsMap[w.id] || (SPECIAL_BATCH07_WORDS[lookupKey]?.derivations) || [];

    if (SPECIAL_BATCH07_WORDS[lookupKey]) {
      const sp = SPECIAL_BATCH07_WORDS[lookupKey];
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
      const m = mapAll.get(lookupKey);
      if (!m) {
        throw new Error(`Word ${cleanWord} (key: ${lookupKey}, id: ${w.id}) not found in mapAll or SPECIAL_BATCH07_WORDS`);
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

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 07`);

  // 1. Write lib/seniorBatch07Raw.ts
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

export const seniorBatch07Raw: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch07Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch07Raw.ts');

  // 2. Process words via processSeniorWord
  const processedWords = rawWords.map((raw) => {
    return processSeniorWord(raw, 7, 1, '第一級');
  });

  // 3. Write lib/seniorBatch07Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 07 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch07Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch07Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch07Data.ts');

  // 4. Write Source/Senior/Batch07.yaml
  const sourceYaml = {
    batch: 7,
    batch_name: "Senior_Level1_Batch_07",
    level: 1,
    level_name: "第一級",
    range: "601 ~ 700",
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
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch07.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch07.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch07.yaml
  const databaseYaml = {
    batch: 7,
    batch_name: "Senior_Level1_Batch_07",
    level: 1,
    level_name: "第一級",
    range: "601 ~ 700",
    version: "1.7.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.7 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260905_007",
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
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch07.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch07.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(7, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch07_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch07();
