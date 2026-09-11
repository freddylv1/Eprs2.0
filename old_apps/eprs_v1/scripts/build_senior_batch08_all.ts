import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';
import { batch8DerivationsMap } from './batch8_derivations_map';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

// Special non-MOE1200 or custom additions in Batch 08 with full phonics derivations & rules
const SPECIAL_BATCH08_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; pos?: string; derivations?: DerivationItem[] }> = {
  'reason': {
    chinese: '理由, 原因; 推理, 論理',
    syllable: ['rea', 'son'],
    ipa: '/ˈriː.zən/',
    pos: 'n./v.',
    derivations: batch8DerivationsMap['reason']
  },
  'relative': {
    chinese: '親戚; 相對的, 相關的',
    syllable: ['rel', 'a', 'tive'],
    ipa: '/ˈrel.ə.tɪv/',
    pos: 'adj./n.',
    derivations: batch8DerivationsMap['relative']
  },
  'report': {
    chinese: '報告, 報導; 記述, 報到',
    syllable: ['re', 'port'],
    ipa: '/rɪˈpɔːrt/',
    pos: 'n./v.',
    derivations: batch8DerivationsMap['report']
  },
  'rise': {
    chinese: '上升, 升起, 增長',
    syllable: ['rise'],
    ipa: '/raɪz/',
    pos: 'n./v.',
    derivations: batch8DerivationsMap['rise']
  },
  'root': {
    chinese: '根, 根源; 生根, 扎根',
    syllable: ['root'],
    ipa: '/ruːt/',
    pos: 'n.',
    derivations: batch8DerivationsMap['root']
  },
  'service': {
    chinese: '服務, 業務; 服役, 檢修',
    syllable: ['ser', 'vice'],
    ipa: '/ˈsɜːr.vɪs/',
    pos: 'n.',
    derivations: batch8DerivationsMap['service']
  },
  'set': {
    chinese: '放置, 設定; 一套, 一組',
    syllable: ['set'],
    ipa: '/set/',
    pos: 'v./n.',
    derivations: batch8DerivationsMap['set']
  },
  'sharp': {
    chinese: '鋒利的, 敏銳的; 急劇地, 準時地',
    syllable: ['sharp'],
    ipa: '/ʃɑːrp/',
    pos: 'adj./adv.',
    derivations: batch8DerivationsMap['sharp']
  },
  'shower': {
    chinese: '淋浴, 陣雨; 傾注, 洗淋浴',
    syllable: ['show', 'er'],
    ipa: '/ˈʃaʊ.ər/',
    pos: 'n./v.',
    derivations: batch8DerivationsMap['shower']
  }
};

export function buildSeniorBatch08() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b8Source = seniorL1.words.filter((w: any) => w.id >= 701 && w.id <= 800);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    mapAll.set(bare, w);
    mapAll.set(w.word.toLowerCase().trim(), w);
  });
  // Extra mapping for shoe(s)
  if (mapAll.has('shoe(s)')) {
    mapAll.set('shoe', mapAll.get('shoe(s)')!);
  }

  const rawWords: SeniorRawInput[] = [];

  b8Source.forEach((w: any) => {
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

    const derivations = batch8DerivationsMap[w.id] || (SPECIAL_BATCH08_WORDS[lookupKey]?.derivations) || [];

    if (SPECIAL_BATCH08_WORDS[lookupKey]) {
      const sp = SPECIAL_BATCH08_WORDS[lookupKey];
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
        throw new Error(`Word ${cleanWord} (key: ${lookupKey}, id: ${w.id}) not found in mapAll or SPECIAL_BATCH08_WORDS`);
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

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 08`);

  // 1. Write lib/seniorBatch08Raw.ts
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

export const seniorBatch08Raw: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch08Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch08Raw.ts');

  // 2. Process words via processSeniorWord
  const processedWords = rawWords.map((raw) => {
    return processSeniorWord(raw, 8, 1, '第一級');
  });

  // 3. Write lib/seniorBatch08Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 08 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch08Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch08Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch08Data.ts');

  // 4. Write Source/Senior/Batch08.yaml
  const sourceYaml = {
    batch: 8,
    batch_name: "Senior_Level1_Batch_08",
    level: 1,
    level_name: "第一級",
    range: "701 ~ 800",
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
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch08.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch08.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch08.yaml
  const databaseYaml = {
    batch: 8,
    batch_name: "Senior_Level1_Batch_08",
    level: 1,
    level_name: "第一級",
    range: "701 ~ 800",
    version: "1.8.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.8 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260905_008",
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
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch08.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch08.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(8, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch08_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch08();
