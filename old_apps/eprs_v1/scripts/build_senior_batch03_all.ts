import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';
import { batch3DerivationsMap } from './batch3_derivations_map';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

// 8 Non-1200 additions in Batch 03 with full phonics derivations & rules
const SPECIAL_BATCH03_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; derivations: DerivationItem[] }> = {
  'deal': {
    chinese: '交易;處理;給予',
    syllable: ['deal'],
    ipa: '/diːl/',
    derivations: [
      { syllable: '單音節［deal］', rule: '母音組合規則 (R004)', status: '【適用】', reason: '相連雙母音 ea 常規發長母音 /iː/，子音 d 起首 l 結尾，全字發 /diːl/' }
    ]
  },
  'death': {
    chinese: '死亡',
    syllable: ['death'],
    ipa: '/dɛθ/',
    derivations: [
      { syllable: '單音節［death］', rule: '母音組合規則 (R004) → 特例短音 (R010) + 複合子音 th (R006)', status: '【不適用 (例外特例)】', reason: 'ea 常規發長音 /iː/，此處為歷史留存特例發短母音 /ɛ/ (R010)；字尾 th 發清咬舌音 /θ/ (R006)，全字發 /dɛθ/' }
    ]
  },
  'deep': {
    chinese: '深的;深深地',
    syllable: ['deep'],
    ipa: '/diːp/',
    derivations: [
      { syllable: '單音節［deep］', rule: '母音組合規則 (R004)', status: '【適用】', reason: '雙母音 ee 常規發固定長母音 /iː/，子音 d 起首 p 結尾，全字發 /diːp/' }
    ]
  },
  'define': {
    chinese: '定義;詳細說明',
    syllable: ['de', 'fine'],
    ipa: '/dɪˈfaɪn/',
    derivations: [
      { syllable: '第 1 音節［de］', rule: '開音節規則 (R002) → 前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'de- 前綴處於非重讀音節，母音 e 弱化發高弱母音 /dɪ/' },
      { syllable: '第 2 音節［fine］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '重讀音節符合「母音 i + 單子音 n + e」，字尾 e 靜音使母音 i 發字母本音長音 /ˈfaɪn/' }
    ]
  },
  'email': {
    chinese: '電子郵件;寄電子郵件',
    syllable: ['e', 'mail'],
    ipa: '/ˈiː.meɪl/',
    derivations: [
      { syllable: '第 1 音節［e］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一字母 e 獨立成開音節且受主重音，發長母音 /ˈiː/' },
      { syllable: '第 2 音節［mail］', rule: '母音組合規則 (R004)', status: '【適用】', reason: '雙母音 ai 常規發長母音 /eɪ/，加子音 m 與 l 合成 /meɪl/' }
    ]
  },
  'error': {
    chinese: '錯誤;失誤',
    syllable: ['er', 'ror'],
    ipa: '/ˈɛr.ɚ/',
    derivations: [
      { syllable: '第 1 音節［er］', rule: '重讀閉音節 (R001)', status: '【適用】', reason: '雙寫 r 拆分閉音節且受重音，母音 e 發短母音 /ˈɛr/' },
      { syllable: '第 2 音節［ror］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -or 字尾，母音弱化發輕捲舌母音 /ɚ/（音標合成 /ˈɛr.ɚ/）' }
    ]
  },
  'expect': {
    chinese: '期待;預期',
    syllable: ['ex', 'pect'],
    ipa: '/ɪkˈspɛkt/',
    derivations: [
      { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴非重讀弱化，x 與後方 p 連綴發 /ɪk/' },
      { syllable: '第 2 音節［pect］', rule: '重讀閉音節規則 (R001)', status: '【適用】', reason: '子音叢 ct 封閉音節且受主重音，母音 e 發短母音 /ˈspɛkt/' }
    ]
  },
  'explain': {
    chinese: '解釋;說明',
    syllable: ['ex', 'plain'],
    ipa: '/ɪkˈspleɪn/',
    derivations: [
      { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴處於非重讀音節，發弱化音 /ɪk/' },
      { syllable: '第 2 音節［plain］', rule: '子音叢 pl + 母音組合 ai 規則 (R004)', status: '【適用】', reason: '雙母音 ai 常規發長母音 /eɪ/，結合子音叢 pl 與尾音 n 發 /ˈspleɪn/' }
    ]
  }
};

export function buildSeniorBatch03() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b3Source = seniorL1.words.filter((w: any) => w.id >= 201 && w.id <= 300);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    mapAll.set(bare, w);
    mapAll.set(w.word.toLowerCase().trim(), w);
  });

  const rawWords: SeniorRawInput[] = [];

  b3Source.forEach((w: any) => {
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

    if (SPECIAL_BATCH03_WORDS[lookupKey]) {
      const sp = SPECIAL_BATCH03_WORDS[lookupKey];
      rawWords.push({
        id: w.id,
        word: cleanWord,
        pos: pos || 'n.',
        chinese: sp.chinese,
        syllable: sp.syllable,
        ipa: sp.ipa,
        derivations: batch3DerivationsMap[w.id] || sp.derivations
      });
    } else {
      const m = mapAll.get(lookupKey);
      if (!m) {
        throw new Error(`Word ${cleanWord} (key: ${lookupKey}, id: ${w.id}) not found in mapAll or SPECIAL_BATCH03_WORDS`);
      }
      rawWords.push({
        id: w.id,
        word: cleanWord,
        pos: pos || (m as any).pos || 'n.',
        chinese: m.chinese,
        syllable: m.syllable,
        ipa: m.ipa,
        derivations: batch3DerivationsMap[w.id] || m.steps?.derivations || []
      });
    }
  });

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 03`);

  // 1. Write lib/seniorBatch03Raw.ts
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

// Complete 100-word dataset for Senior High Level 1 - Batch 03 (Words 201 to 300)
export const SENIOR_BATCH_03_DATA: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch03Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch03Raw.ts');

  // 2. Process words with 4-step syllable details & phonics engine
  const processedWords = rawWords.map(w => {
    const res = processSeniorWord(w);
    res.batch = 3;
    return res;
  });

  // 3. Write lib/seniorBatch03Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 03 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch03Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch03Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch03Data.ts');

  // 4. Write Source/Senior/Batch03.yaml
  const sourceYaml = {
    batch: 3,
    batch_name: "Senior_Level1_Batch_03",
    level: 1,
    level_name: "第一級",
    range: "201 ~ 300",
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
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch03.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch03.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch03.yaml
  const databaseYaml = {
    batch: 3,
    batch_name: "Senior_Level1_Batch_03",
    level: 1,
    level_name: "第一級",
    range: "201 ~ 300",
    version: "1.7.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.7 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260903_003",
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
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch03.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch03.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(3, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch03_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch03();
