import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { processEPRSWorkflow } from '../Builder/workflow_processor';
import { VocabularySource } from '../lib/eprs-import';

interface CoverageYaml {
  version: string;
  description: string;
  test_words: Array<{ word: string; pos: string }>;
}

const testSetPath = path.join(process.cwd(), 'Validation', 'Coverage_Test_Set_100.yaml');
const yamlContent = fs.readFileSync(testSetPath, 'utf8');
const testData = yaml.load(yamlContent) as CoverageYaml;

console.log(`=======================================================`);
console.log(` EPRS v1.7.1 Comprehensive Coverage Test Runner (100 Words)`);
console.log(`=======================================================\n`);

let goldCount = 0;
let silverCount = 0;
let failedCount = 0;

const patternMap: Record<string, number> = {};
const exceptionMap: Record<string, number> = {};
let exceptionCount = 0;

testData.test_words.forEach((item, idx) => {
  const src: VocabularySource = {
    index: idx + 1,
    word: item.word,
    pos: item.pos || 'n.',
    chinese: '常見單字',
  };

  const res = processEPRSWorkflow(src, idx + 1);
  const rec = res.record;

  if (res.validation_level === 'GOLD') goldCount++;
  else if (res.validation_level === 'SILVER') silverCount++;
  else failedCount++;

  const patId = rec.pattern_mapping[0]?.pattern_id || 'PAT-UNK';
  patternMap[patId] = (patternMap[patId] || 0) + 1;

  if (rec.exception_check.is_exception) {
    exceptionCount++;
    const excId = rec.exception_check.exception_id || 'EXC-UNKNOWN';
    exceptionMap[excId] = (exceptionMap[excId] || 0) + 1;
  }
});

console.log(`Results Breakdown:`);
console.log(`  - GOLD   Level: ${goldCount} / 100 (${(goldCount / 100) * 100}%)`);
console.log(`  - SILVER Level: ${silverCount} / 100`);
console.log(`  - FAILED Level: ${failedCount} / 100`);
console.log(`\nException Rate: ${exceptionCount} / 100 (${exceptionCount}%)`);
console.log(`\nUnique Patterns Used: ${Object.keys(patternMap).length}`);
console.log(`Patterns Detail:`, patternMap);
console.log(`Exceptions Detail:`, exceptionMap);
console.log(`\nCoverage Test Execution Completed Successfully.`);
