import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

// 7 Non-1200 additions with full phonics derivations & rules
const SPECIAL_BATCH02_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; derivations: DerivationItem[] }> = {
  'brave': {
    chinese: '勇敢的',
    syllable: ['brave'],
    ipa: '/breɪv/',
    derivations: [
      { syllable: '第 1 音節［brave］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '子音叢 br 起首，字尾不發音 e 使母音 a 發長母音 /ˈbreɪv/' }
    ]
  },
  'button': {
    chinese: '鈕扣;按鈕;扣上',
    syllable: ['but', 'ton'],
    ipa: '/ˈbʌt.ən/',
    derivations: [
      { syllable: '第 1 音節［but］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '重讀子音 t 封閉，母音 u 發短母音 /ˈbʌt/' },
      { syllable: '第 2 音節［ton］', rule: '成音節/非重讀弱化 (R008/R009)', status: '【適用】', reason: '非重讀 -ton 字尾，母音 o 弱化發輕音 /ən/ 或鼻音成音節 [n̩]' }
    ]
  },
  'carrot': {
    chinese: '胡蘿蔔',
    syllable: ['car', 'rot'],
    ipa: '/ˈkær.ət/',
    derivations: [
      { syllable: '第 1 音節［car］', rule: '重讀閉音節 (R001)', status: '【適用】', reason: '硬音 c 發 /k/，雙寫 r 拆分閉音節，母音 a 發短母音 /ˈkær/' },
      { syllable: '第 2 音節［rot］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀閉音節，母音 o 弱化發輕母音 /ət/' }
    ]
  },
  'cellphone': {
    chinese: '手機',
    syllable: ['cell', 'phone'],
    ipa: '/ˈsɛl.foʊn/',
    derivations: [
      { syllable: '第 1 音節［cell］', rule: '軟音 c 規則 (R007) + 閉音節 (R001)', status: '【適用】', reason: '字母 c 在 e 前發軟音 /s/，雙寫 l 封閉發短母音 /ˈsɛl/' },
      { syllable: '第 2 音節［phone］', rule: '複合子音 ph (R006) + 魔術 e (R003)', status: '【適用】', reason: 'ph 發 /f/，字尾 e 靜音使母音 o 發長母音 /foʊn/' }
    ]
  },
  'certain': {
    chinese: '確定的;某些',
    syllable: ['cer', 'tain'],
    ipa: '/ˈsɝː.tən/',
    derivations: [
      { syllable: '第 1 音節［cer］', rule: '軟音 c 規則 (R007) + R 控制母音 (R005)', status: '【適用】', reason: 'c 在 e 前發軟音 /s/，er 組合在重音節發捲舌母音 /ˈsɝː/' },
      { syllable: '第 2 音節［tain］', rule: '母音組合規則 (R004) → 弱化規則 (R008)', status: '【不適用 (例外轉移)】', reason: '-tain 常規發 /teɪn/，此處非重讀弱化為鼻音成音節 /ˈsɝː.tən/ (R008)' }
    ]
  },
  'choice': {
    chinese: '選擇;精選的',
    syllable: ['choice'],
    ipa: '/tʃɔɪs/',
    derivations: [
      { syllable: '第 1 音節［choice］', rule: '複合子音 ch (R006) + 雙母音 oi (R004) + 軟音 c (R007)', status: '【適用】', reason: 'ch 發 /tʃ/，oi 組合發雙母音 /ɔɪ/，字尾 ce 發軟音 /s/' }
    ]
  },
  'cloud': {
    chinese: '雲',
    syllable: ['cloud'],
    ipa: '/klaʊd/',
    derivations: [
      { syllable: '第 1 音節［cloud］', rule: '子音叢 cl + 母音組合 ou 規則 (R004)', status: '【適用】', reason: '子音叢 cl 起首，ou 母音組合常規發雙母音 /aʊ/，全字發 /klaʊd/' }
    ]
  }
};

export function buildSeniorBatch02() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b2Source = seniorL1.words.filter((w: any) => w.id >= 101 && w.id <= 200);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    mapAll.set(bare, w);
  });

  const rawWords: SeniorRawInput[] = [];

  b2Source.forEach((w: any) => {
    let cleanWord = w.word.replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\..*$/i, '').trim();
    let pos = w.pos;
    if (!pos && w.word.includes(' ')) {
      const parts = w.word.split(' ');
      cleanWord = parts[0];
      pos = parts.slice(1).join(' ');
    }

    const key = cleanWord.toLowerCase();
    if (SPECIAL_BATCH02_WORDS[key]) {
      const sp = SPECIAL_BATCH02_WORDS[key];
      rawWords.push({
        id: w.id,
        word: cleanWord,
        pos: pos || 'n.',
        chinese: sp.chinese,
        syllable: sp.syllable,
        ipa: sp.ipa,
        derivations: sp.derivations
      });
    } else {
      const m = mapAll.get(key);
      if (!m) {
        throw new Error(`Word ${cleanWord} (id: ${w.id}) not found in mapAll or SPECIAL_BATCH02_WORDS`);
      }
      rawWords.push({
        id: w.id,
        word: cleanWord,
        pos: pos || (m as any).pos || 'n.',
        chinese: m.chinese,
        syllable: m.syllable,
        ipa: m.ipa,
        derivations: m.steps?.derivations || []
      });
    }
  });

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 02`);

  // 1. Write lib/seniorBatch02Raw.ts
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

// Complete 100-word dataset for Senior High Level 1 - Batch 02 (Words 101 to 200)
export const SENIOR_BATCH_02_DATA: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch02Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch02Raw.ts');

  // 2. Process words with 4-step syllable details & phonics engine
  const processedWords = rawWords.map(w => {
    const res = processSeniorWord(w);
    res.batch = 2;
    return res;
  });

  // 3. Write lib/seniorBatch02Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 02 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch02Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch02Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch02Data.ts');

  // 4. Write Source/Senior/Batch02.yaml
  const sourceYaml = {
    batch: 2,
    batch_name: "Senior_Level1_Batch_02",
    level: 1,
    level_name: "第一級",
    range: "101 ~ 200",
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
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch02.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch02.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch02.yaml
  const databaseYaml = {
    batch: 2,
    batch_name: "Senior_Level1_Batch_02",
    level: 1,
    level_name: "第一級",
    range: "101 ~ 200",
    version: "1.7.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.7 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260903_002",
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
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch02.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch02.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(2, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch02_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch02();
