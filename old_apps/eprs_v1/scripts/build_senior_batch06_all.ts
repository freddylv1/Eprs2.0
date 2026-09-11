import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';
import { batch6DerivationsMap } from './batch6_derivations_map';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

// Special non-MOE1200 or custom additions in Batch 06 with full phonics derivations & rules
const SPECIAL_BATCH06_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; pos?: string; derivations?: DerivationItem[] }> = {
  'lot': {
    chinese: '許多; 籤; 地皮',
    syllable: ['lot'],
    ipa: '/lɑːt/',
    pos: 'n.'
  },
  'main': {
    chinese: '主要的; 主要部分, 幹線',
    syllable: ['main'],
    ipa: '/meɪn/',
    pos: 'adj./n.'
  },
  'mathematics': {
    chinese: '數學',
    syllable: ['math', 'e', 'mat', 'ics'],
    ipa: '/ˌmæθ.əˈmæt.ɪks/',
    pos: 'n.'
  },
  'media': {
    chinese: '媒體, 大眾傳播工具',
    syllable: ['me', 'di', 'a'],
    ipa: '/ˈmiː.di.ə/',
    pos: 'n.'
  },
  'member': {
    chinese: '會員, 成員',
    syllable: ['mem', 'ber'],
    ipa: '/ˈmɛm.bər/',
    pos: 'n.'
  },
  'middle': {
    chinese: '中間的, 中央的; 中間',
    syllable: ['mid', 'dle'],
    ipa: '/ˈmɪd.əl/',
    pos: 'adj./n.'
  },
  'mine': {
    chinese: '我的(所有格代名詞); 礦坑, 地雷',
    syllable: ['mine'],
    ipa: '/maɪn/',
    pos: 'pron./n./v.'
  },
  'nature': {
    chinese: '自然, 本性',
    syllable: ['na', 'ture'],
    ipa: '/ˈneɪ.tʃər/',
    pos: 'n.'
  },
  'net': {
    chinese: '網, 網狀物; 淨賺',
    syllable: ['net'],
    ipa: '/nɛt/',
    pos: 'n./v.'
  },
  'newspaper': {
    chinese: '報紙',
    syllable: ['news', 'pa', 'per'],
    ipa: '/ˈnuːzˌpeɪ.pər/',
    pos: 'n.'
  },
  'noisy': {
    chinese: '嘈雜的, 喧鬧的',
    syllable: ['nois', 'y'],
    ipa: '/ˈnɔɪ.zi/',
    pos: 'adj.'
  },
  'o.k.': {
    chinese: '可以的, 好的; 許可',
    syllable: ['o', 'kay'],
    ipa: '/oʊˈkeɪ/',
    pos: 'adj./adv./n./v.'
  },
  'o’clock': {
    chinese: '……點鐘',
    syllable: ["o'", 'clock'],
    ipa: '/əˈklɑːk/',
    pos: 'adv.'
  },
  "o'clock": {
    chinese: '……點鐘',
    syllable: ["o'", 'clock'],
    ipa: '/əˈklɑːk/',
    pos: 'adv.'
  }
};

export function buildSeniorBatch06() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b6Source = seniorL1.words.filter((w: any) => w.id >= 501 && w.id <= 600);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    mapAll.set(bare, w);
    mapAll.set(w.word.toLowerCase().trim(), w);
  });

  const rawWords: SeniorRawInput[] = [];

  b6Source.forEach((w: any) => {
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

    const derivations = batch6DerivationsMap[w.id] || (SPECIAL_BATCH06_WORDS[lookupKey]?.derivations) || [];

    if (SPECIAL_BATCH06_WORDS[lookupKey]) {
      const sp = SPECIAL_BATCH06_WORDS[lookupKey];
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
        throw new Error(`Word ${cleanWord} (key: ${lookupKey}, id: ${w.id}) not found in mapAll or SPECIAL_BATCH06_WORDS`);
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

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 06`);

  // 1. Write lib/seniorBatch06Raw.ts
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

export const seniorBatch06Raw: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch06Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch06Raw.ts');

  // 2. Process words via processSeniorWord
  const processedWords = rawWords.map((raw) => {
    return processSeniorWord(raw, 6, 1, '第一級');
  });

  // 3. Write lib/seniorBatch06Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 06 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch06Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch06Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch06Data.ts');

  // 4. Write Source/Senior/Batch06.yaml
  const sourceYaml = {
    batch: 6,
    batch_name: "Senior_Level1_Batch_06",
    level: 1,
    level_name: "第一級",
    range: "501 ~ 600",
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
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch06.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch06.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch06.yaml
  const databaseYaml = {
    batch: 6,
    batch_name: "Senior_Level1_Batch_06",
    level: 1,
    level_name: "第一級",
    range: "501 ~ 600",
    version: "1.7.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.7 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260904_006",
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
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch06.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch06.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(6, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch06_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch06();
