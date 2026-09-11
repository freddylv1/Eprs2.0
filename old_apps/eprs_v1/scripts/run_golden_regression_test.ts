import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { processEPRSWorkflow } from '../Builder/workflow_processor';
import { VocabularySource } from '../lib/eprs-import';

interface GoldenYaml {
  version: string;
  description: string;
  golden_words: string[];
}

const goldenPath = path.join(process.cwd(), 'Validation', 'Golden_Test_Set.yaml');
const goldenContent = fs.readFileSync(goldenPath, 'utf8');
const goldenData = yaml.load(goldenContent) as GoldenYaml;

const wordDetailsMap: Record<string, { pos: string; chinese: string }> = {
  have: { pos: 'v.', chinese: '有' },
  advance: { pos: 'v.', chinese: '前進；推進' },
  balance: { pos: 'n.', chinese: '平衡' },
  alliance: { pos: 'n.', chinese: '結盟；同盟' },
  collapse: { pos: 'v.', chinese: '倒塌；崩潰' },
  defiance: { pos: 'n.', chinese: '違抗；挑釁' },
  distance: { pos: 'n.', chinese: '距離' },
  elegance: { pos: 'n.', chinese: '優雅；高雅' },
  ambulance: { pos: 'n.', chinese: '救護車' },
  appliance: { pos: 'n.', chinese: '家電；器具' },
  assistance: { pos: 'n.', chinese: '協助；幫助' },
  attendance: { pos: 'n.', chinese: '出席；出席率' },
  compliance: { pos: 'n.', chinese: '合規；順從' },
  give: { pos: 'v.', chinese: '給予' },
  live: { pos: 'v.', chinese: '居住；生活' },
  bridge: { pos: 'n.', chinese: '橋樑' },
  believe: { pos: 'v.', chinese: '相信' },
  convince: { pos: 'v.', chinese: '說服' },
  associate: { pos: 'v.', chinese: '聯想；關聯' },
  appreciate: { pos: 'v.', chinese: '欣賞；感謝' },
};

console.log(`=======================================================`);
console.log(` EPRS v1.7 Offline Pronunciation Engine - Regression Test`);
console.log(` Golden Word Set: ${goldenData.golden_words.length} Words`);
console.log(` Chain: Word -> Syllable -> Stress -> Pattern -> Rule -> Exception -> Phoneme -> IPA -> Validation`);
console.log(`=======================================================\n`);

let passedCount = 0;
const results: Array<{ word: string; status: string; ipa: string; confidence: number; pipeline: string }> = [];

goldenData.golden_words.forEach((w, idx) => {
  const detail = wordDetailsMap[w] || { pos: 'n.', chinese: '常見單字' };
  const src: VocabularySource = {
    index: idx + 1,
    word: w,
    pos: detail.pos,
    chinese: detail.chinese,
  };

  const res = processEPRSWorkflow(src, idx + 1);
  const rec = res.record;

  if (res.validation_level === 'GOLD') {
    passedCount++;
  }

  results.push({
    word: w,
    status: res.validation_level,
    ipa: rec.ipa,
    confidence: rec.confidence,
    pipeline: 'Word->Syllable->Stress->Pattern->Rule->Exception->Phoneme->IPA->Validation',
  });

  console.log(`[${idx + 1}] ${rec.word} (${rec.pos})`);
  console.log(`    Syllables: [${rec.syllable.join(' - ')}]`);
  console.log(`    Stress Index: ${rec.stress.primary_stress_syllable_index}`);
  console.log(`    IPA: ${rec.ipa}`);
  console.log(`    Confidence: ${rec.confidence}`);
  console.log(`    Validation: ${res.validation_level}`);
  console.log(`    Memory Tip: [${rec.memory_tip.type}] ${rec.memory_tip.content}`);
  console.log(`    Related Words: ${JSON.stringify(rec.memory_tip.related_words)}`);
  console.log('');
});

console.log(`-------------------------------------------------------`);
console.log(` Golden Regression Summary: ${passedCount}/${goldenData.golden_words.length} Passed GOLD Status!`);
console.log(` Success Rate: ${(passedCount / goldenData.golden_words.length) * 100}%`);
console.log(`-------------------------------------------------------\n`);

if (passedCount < goldenData.golden_words.length) {
  process.exit(1);
}
