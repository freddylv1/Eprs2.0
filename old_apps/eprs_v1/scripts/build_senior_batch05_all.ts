import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';
import { batch5DerivationsMap } from './batch5_derivations_map';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

// Special non-MOE1200 or custom additions in Batch 05 with full phonics derivations & rules
const SPECIAL_BATCH05_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; derivations: DerivationItem[] }> = {
  'inch': {
    chinese: '英吋',
    syllable: ['inch'],
    ipa: '/ɪntʃ/',
    derivations: [
      { syllable: '單音節［inch］', rule: '閉音節規則 (R001) + 複合子音 ch (R006)', status: '【適用】', reason: '鼻音 n 與 ch 封閉音節，母音 i 常規發短母音 /ɪ/，ch 發清塞擦音 /tʃ/，全字發 /ɪntʃ/' }
    ]
  },
  'item': {
    chinese: '項目, 品項',
    syllable: ['i', 'tem'],
    ipa: '/ˈaɪ.təm/',
    derivations: [
      { syllable: '第 1 音節［i］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 i 處於開音節並承擔主重音，發字母本音 /ˈaɪ/' },
      { syllable: '第 2 音節［tem］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發輕母音 /təm/' }
    ]
  },
  'joke': {
    chinese: '笑話; 開玩笑',
    syllable: ['joke'],
    ipa: '/dʒoʊk/',
    derivations: [
      { syllable: '單音節［joke］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 結構中字尾 e 靜音，母音 o 常規發長雙母音 /dʒoʊk/' }
    ]
  },
  'level': {
    chinese: '水平, 等級; 平坦的',
    syllable: ['lev', 'el'],
    ipa: '/ˈlɛv.əl/',
    derivations: [
      { syllable: '第 1 音節［lev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 v 封閉主重音節，單一母音 e 常規發短母音 /ˈlɛv/' },
      { syllable: '第 2 音節［el］', rule: '非重讀弱化 (R008) / 成音節 (R009)', status: '【適用】', reason: '-el 尾音處非重讀音節，母音弱化發成音節邊音 /əl/' }
    ]
  }
};

export function buildSeniorBatch05() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b5Source = seniorL1.words.filter((w: any) => w.id >= 401 && w.id <= 500);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    mapAll.set(bare, w);
    mapAll.set(w.word.toLowerCase().trim(), w);
  });

  const rawWords: SeniorRawInput[] = [];

  b5Source.forEach((w: any) => {
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

    const derivations = batch5DerivationsMap[w.id] || (SPECIAL_BATCH05_WORDS[lookupKey]?.derivations) || [];

    if (SPECIAL_BATCH05_WORDS[lookupKey]) {
      const sp = SPECIAL_BATCH05_WORDS[lookupKey];
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
        throw new Error(`Word ${cleanWord} (key: ${lookupKey}, id: ${w.id}) not found in mapAll or SPECIAL_BATCH05_WORDS`);
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

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 05`);

  // 1. Write lib/seniorBatch05Raw.ts
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

export const seniorBatch05Raw: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch05Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch05Raw.ts');

  // 2. Process words via processSeniorWord
  const processedWords = rawWords.map((raw) => {
    return processSeniorWord(raw, 5, 1, '第一級');
  });

  // 3. Write lib/seniorBatch05Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 05 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch05Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch05Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch05Data.ts');

  // 4. Write Source/Senior/Batch05.yaml
  const sourceYaml = {
    batch: 5,
    batch_name: "Senior_Level1_Batch_05",
    level: 1,
    level_name: "第一級",
    range: "401 ~ 500",
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
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch05.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch05.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch05.yaml
  const databaseYaml = {
    batch: 5,
    batch_name: "Senior_Level1_Batch_05",
    level: 1,
    level_name: "第一級",
    range: "401 ~ 500",
    version: "1.7.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.7 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260904_005",
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
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch05.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch05.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(5, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch05_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch05();
