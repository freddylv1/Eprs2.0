import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';
import { batch10DerivationsMap, SPECIAL_BATCH10_WORDS } from './batch10_derivations_map';

interface SeniorRawInput {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: DerivationItem[];
}

export function buildSeniorBatch10() {
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const b10Source = seniorL1.words.filter((w: any) => w.id >= 901 && w.id <= 1000);

  const mapAll = new Map<string, BatchWord>();
  allBatchData.forEach(w => {
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int|art)\..*$/i, '').trim();
    mapAll.set(bare, w);
    mapAll.set(w.word.toLowerCase().trim(), w);
  });

  const rawWords: SeniorRawInput[] = [];

  b10Source.forEach((w: any) => {
    let cleanWord = w.word.replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int|art)\..*$/i, '').trim();
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

    const derivations = batch10DerivationsMap[w.id] || [];

    if (SPECIAL_BATCH10_WORDS[w.id]) {
      const sp = SPECIAL_BATCH10_WORDS[w.id];
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
        throw new Error(`Word ${cleanWord} (key: ${lookupKey}, id: ${w.id}) not found in mapAll or SPECIAL_BATCH10_WORDS`);
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

  console.log(`Prepared ${rawWords.length} raw words for Senior Batch 10`);

  // 1. Write lib/seniorBatch10Raw.ts
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

export const seniorBatch10Raw: SeniorWordRecord[] = ${JSON.stringify(rawWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch10Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch10Raw.ts');

  // 2. Process words via processSeniorWord
  const processedWords = rawWords.map((raw) => {
    return processSeniorWord(raw, 10, 1, '第一級');
  });

  // 3. Write lib/seniorBatch10Data.ts
  const dataTsContent = `// Auto-generated EPRS Senior High Level 1 Batch 10 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch10Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch10Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] Written lib/seniorBatch10Data.ts');

  // 4. Write Source/Senior/Batch10.yaml
  const sourceYaml = {
    batch: 10,
    batch_name: "Senior_Level1_Batch_10",
    level: 1,
    level_name: "第一級",
    range: "901 ~ 1000",
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
  fs.writeFileSync(path.join(process.cwd(), 'Source', 'Senior', 'Batch10.yaml'), yaml.dump(sourceYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Source/Senior/Batch10.yaml');

  // 5. Write Database/English_Pronunciation_Database_Senior_Batch10.yaml
  const databaseYaml = {
    batch: 10,
    batch_name: "Senior_Level1_Batch_10",
    level: 1,
    level_name: "第一級",
    range: "901 ~ 1000",
    version: "1.8.0",
    total_words_in_batch: 100,
    schema_name: "EPRS Senior High Word Schema v1.8 Offline Engine",
    snapshot_id: "BUILD_SENIOR_20260905_010",
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
  fs.writeFileSync(path.join(process.cwd(), 'Database', 'English_Pronunciation_Database_Senior_Batch10.yaml'), yaml.dump(databaseYaml, { lineWidth: -1 }), 'utf8');
  console.log('[PASS] Written Database/English_Pronunciation_Database_Senior_Batch10.yaml');

  // 6. Generate standalone HTML report in public/
  const htmlContent = generateSeniorBatchHtmlString(10, processedWords);
  const htmlPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch10_Report.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`[PASS] Written standalone HTML report: ${htmlPath}`);
}

buildSeniorBatch10();
