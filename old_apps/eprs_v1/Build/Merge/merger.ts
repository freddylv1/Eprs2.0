import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { validateBatchYaml } from '../Validation/validator';

export function mergeAllBatches(
  batchDir: string,
  outputPath: string
): { success: boolean; totalWords: number; error?: string } {
  const batchFolders = fs
    .readdirSync(batchDir)
    .filter((name) => name.startsWith('Batch_') && fs.statSync(path.join(batchDir, name)).isDirectory())
    .sort();

  if (batchFolders.length !== 24) {
    return {
      success: false,
      totalWords: 0,
      error: `Expected 24 batch folders, but found ${batchFolders.length}`,
    };
  }

  const allMergedWords: any[] = [];

  // Metadata indexes copied from standard schema
  const ruleIndex = {
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
  };

  const patternIndex = {
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
  };

  const familyIndex = {
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
  };

  const learningIndex = {
    'STAGE-01': { name: '基礎短母音' },
    'STAGE-02': { name: '長母音與 R 控制音' },
    'STAGE-03': { name: '雙母音與複合字音' },
    'STAGE-04': { name: '多音節母音弱化與字尾' },
    'STAGE-05': { name: '特殊例外' },
  };

  let globalIndex = 0;

  for (const folder of batchFolders) {
    const yamlPath = path.join(batchDir, folder, 'Generated.yaml');

    // Run Validation
    const valResult = validateBatchYaml(yamlPath, folder);
    if (valResult.status !== 'PASSED') {
      return {
        success: false,
        totalWords: 0,
        error: `Validation failed for batch ${folder}. Failed words count: ${valResult.failed_words}`,
      };
    }

    const doc: any = yaml.load(fs.readFileSync(yamlPath, 'utf8'));
    for (const wordObj of doc.words) {
      const mergedItem = {
        ...wordObj,
        index: globalIndex++,
      };
      allMergedWords.push(mergedItem);
    }
  }

  const outputDoc = {
    version: '2.0',
    total_batches: batchFolders.length,
    total_words: allMergedWords.length,
    schema_name: 'EPRS Word Schema v2.0 Reasoning Engine',
    Rule_Index: ruleIndex,
    Pattern_Index: patternIndex,
    Family_Index: familyIndex,
    Learning_Index: learningIndex,
    words: allMergedWords,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, yaml.dump(outputDoc, { lineWidth: -1 }), 'utf8');

  return {
    success: true,
    totalWords: allMergedWords.length,
  };
}
