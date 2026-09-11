import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import * as XLSX from 'xlsx';
import { parseCSVToVocabulary, VocabularySource } from '../lib/eprs-import';
import { EPRSWordRecord } from './vocabulary_builder';
import { processEPRSWorkflow } from './workflow_processor';

export interface DatabaseBuildResult {
  version: string;
  total_words: number;
  schema_name: string;
  workflow_version: string;
  validation_level: string;
  yamlContent: string;
  words: EPRSWordRecord[];
}

export const RULE_INDEX_V1_5 = {
  R001: { name: 'Closed Syllable' },
  R002: { name: 'Open Syllable' },
  R003: { name: 'Magic e' },
  R004: { name: 'Vowel Digraph' },
  R005: { name: 'R Controlled Vowel' },
  R006: { name: 'Consonant Pattern' },
  R007: { name: 'Silent Letter' },
  R008: { name: 'Unstressed Reduction' },
  R009: { name: 'Ending Pronunciation' },
  R010: { name: 'Exception Rule' },
  R011: { name: '-iate / -ciate Palatalization' },
  R012: { name: 'Stress Pattern & Vowel Shift' },
  R013: { name: 'Schwa Deletion' },
  R014: { name: 'Stress Dependent Vowel Team' },
  R015: { name: 'Silent Letter Family' },
  R016: { name: 'Air Family' },
  R017: { name: 'Prefix Reduction' },
  R018: { name: '-ance / -ence Special Suffix Reduction' },
};

export const PATTERN_INDEX_V1_5 = {
  'PAT-01': { name: 'Magic e' },
  'PAT-02': { name: 'Closed Syllable' },
  'PAT-03': { name: 'Open Syllable' },
  'PAT-04': { name: 'Vowel Team' },
  'PAT-05': { name: 'R-Controlled Vowel' },
  'PAT-06': { name: 'Consonant Digraph' },
  'PAT-07': { name: 'Silent Letter' },
  'PAT-08': { name: 'Unstressed Reduction' },
  'PAT-09': { name: 'Special Ending' },
  'PAT-10': { name: 'Irregular / Exception' },
  'PAT-11': { name: 'Palatalization / Complex Combination' },
  'PAT-12': { name: 'Prefix Combination' },
  'PAT-13': { name: 'Air / Rhyming Combination' },
  'PAT-M402': { name: 'ANCE Ending Family' },
};

export const FAMILY_INDEX_V1_5 = {
  'PAT-FAM-01': { name: 'Magic e Family' },
  'PAT-FAM-02': { name: 'Closed Syllable Family' },
  'PAT-FAM-03': { name: 'Open Syllable Family' },
  'PAT-FAM-04': { name: 'Vowel Team Family' },
  'PAT-FAM-05': { name: 'R-Controlled Family' },
  'PAT-FAM-06': { name: 'Consonant Digraph Family' },
  'PAT-FAM-07': { name: 'Silent Letter Family' },
  'PAT-FAM-08': { name: 'Unstressed Reduction Family' },
  'PAT-FAM-09': { name: 'Special Ending Family' },
  'PAT-FAM-10': { name: 'Irregular / Exception Family' },
  'PAT-FAM-11': { name: 'Palatalization Combination Family' },
  'PAT-FAM-12': { name: 'Prefix Reduction Family' },
  'PAT-FAM-13': { name: 'Air Rhyming Family' },
  'PAT-FAM-M402': { name: 'ANCE Ending Family' },
};

export const LEARNING_INDEX_V1_5 = {
  'STAGE-01': { name: '基礎短母音' },
  'STAGE-02': { name: '長母音與 R 控制音' },
  'STAGE-03': { name: '雙母音與複合字音' },
  'STAGE-04': { name: '多音節母音弱化與字尾' },
  'STAGE-05': { name: '特殊例外' },
};

/**
 * Parses XLSX buffer into VocabularySource array
 */
export function parseXLSXToVocabulary(buffer: Buffer): VocabularySource[] {
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) return [];

  const worksheet = workbook.Sheets[sheetName];
  const rawData: any[] = XLSX.utils.sheet_to_json(worksheet);

  return rawData.map((row, idx) => {
    const word = row.word || row.Word || row.VOCABULARY || row.vocabulary || Object.values(row)[0] || '';
    const pos = row.pos || row.POS || row.Part_Of_Speech || row.part_of_speech || Object.values(row)[1] || 'n.';
    const chinese = row.chinese || row.Chinese || row.MEANING || row.meaning || row.translation || Object.values(row)[2] || '';
    const index = row.index || row.Index || idx + 1;

    return {
      index: typeof index === 'number' ? index : idx + 1,
      word: String(word).trim(),
      pos: String(pos).trim(),
      chinese: String(chinese).trim(),
    };
  }).filter((item) => Boolean(item.word));
}

/**
 * Generates full EPRS v1.6 compliant English_Pronunciation_Database.yaml via 10-step Workflow
 */
export function generateDatabaseFromVocabulary(
  sources: VocabularySource[]
): DatabaseBuildResult {
  const workflowResults = sources.map((src, idx) => {
    return processEPRSWorkflow(src, idx);
  });

  const words: EPRSWordRecord[] = workflowResults.map((res) => res.record);

  const doc = {
    version: '1.6.1',
    schema_name: 'EPRS Builder Workflow v1.6.1',
    purpose: '建立離線發音資料生產流程',
    principles: [
      'Rule First',
      'Pattern Driven',
      'Exception Last',
      'Validation Before Database',
    ],
    validation_level: 'GOLD',
    total_words: words.length,
    Rule_Index: RULE_INDEX_V1_5,
    Pattern_Index: PATTERN_INDEX_V1_5,
    Family_Index: FAMILY_INDEX_V1_5,
    Learning_Index: LEARNING_INDEX_V1_5,
    words,
  };

  const yamlContent = yaml.dump(doc, { lineWidth: -1 });

  return {
    version: '1.6',
    total_words: words.length,
    schema_name: 'EPRS Builder Workflow',
    workflow_version: '1.6',
    validation_level: 'GOLD',
    yamlContent,
    words,
  };
}

/**
 * Convenience runner that imports CSV/XLSX text or buffer and outputs complete YAML
 */
export function buildDatabaseFromInput(
  input: { csvText?: string; xlsxBuffer?: Buffer; rawItems?: VocabularySource[] },
  saveOutputPath?: string
): DatabaseBuildResult {
  let sources: VocabularySource[] = [];

  if (input.rawItems && input.rawItems.length > 0) {
    sources = input.rawItems;
  } else if (input.xlsxBuffer) {
    sources = parseXLSXToVocabulary(input.xlsxBuffer);
  } else if (input.csvText) {
    sources = parseCSVToVocabulary(input.csvText);
  }

  const result = generateDatabaseFromVocabulary(sources);

  if (saveOutputPath) {
    fs.mkdirSync(path.dirname(saveOutputPath), { recursive: true });
    fs.writeFileSync(saveOutputPath, result.yamlContent, 'utf8');
  }

  return result;
}
