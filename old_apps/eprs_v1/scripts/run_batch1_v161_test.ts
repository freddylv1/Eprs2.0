import { processEPRSWorkflow } from '../Builder/workflow_processor';
import { VocabularySource } from '../lib/eprs-import';

const test20: VocabularySource[] = [
  { index: 1, word: 'have', pos: 'v.', chinese: '有' },
  { index: 2, word: 'advance', pos: 'v.', chinese: '前進；推進' },
  { index: 3, word: 'balance', pos: 'n.', chinese: '平衡' },
  { index: 4, word: 'alliance', pos: 'n.', chinese: '結盟；同盟' },
  { index: 5, word: 'collapse', pos: 'v.', chinese: '倒塌；崩潰' },
  { index: 6, word: 'defiance', pos: 'n.', chinese: '違抗；挑釁' },
  { index: 7, word: 'distance', pos: 'n.', chinese: '距離' },
  { index: 8, word: 'elegance', pos: 'n.', chinese: '優雅；高雅' },
  { index: 9, word: 'ambulance', pos: 'n.', chinese: '救護車' },
  { index: 10, word: 'appliance', pos: 'n.', chinese: '家電；器具' },
  { index: 11, word: 'assistance', pos: 'n.', chinese: '協助；幫助' },
  { index: 12, word: 'attendance', pos: 'n.', chinese: '出席；出席率' },
  { index: 13, word: 'compliance', pos: 'n.', chinese: '合規；順從' },
  { index: 14, word: 'give', pos: 'v.', chinese: '給予' },
  { index: 15, word: 'live', pos: 'v.', chinese: '居住；生活' },
  { index: 16, word: 'bridge', pos: 'n.', chinese: '橋樑' },
  { index: 17, word: 'believe', pos: 'v.', chinese: '相信' },
  { index: 18, word: 'convince', pos: 'v.', chinese: '說服' },
  { index: 19, word: 'associate', pos: 'v.', chinese: '聯想；關聯' },
  { index: 20, word: 'appreciate', pos: 'v.', chinese: '欣賞；感謝' },
];

console.log('--- EPRS Builder v1.6.1 Batch 01 (First 20 Words) Test ---\n');

let goldCount = 0;
test20.forEach((src, idx) => {
  const result = processEPRSWorkflow(src, idx + 1);
  const rec = result.record;
  if (result.validation_level === 'GOLD') goldCount++;

  console.log(`[${rec.index}] ${rec.word} (${rec.pos})`);
  console.log(`  - Syllable: [${rec.syllable.join(' / ')}]`);
  console.log(`  - Primary Stress Index: ${rec.stress.primary_stress_syllable_index}`);
  console.log(`  - IPA: ${rec.ipa}`);
  console.log(`  - Pattern: ${rec.family_mapping.pattern_family.name} (${rec.pattern_mapping[0]?.pattern_id})`);
  console.log(`  - Exception Check: ${rec.exception_check.is_exception ? `${rec.exception_check.exception_id} (${rec.exception_check.exception_type})` : 'PASS (No Exception)'}`);
  console.log(`  - Memory Tip Type: ${rec.memory_tip.type}`);
  console.log(`  - Memory Tip Content: ${rec.memory_tip.content}`);
  console.log(`  - Memory Tip Related: ${JSON.stringify(rec.memory_tip.related_words)}`);
  console.log(`  - Validation: ${result.validation_level}`);
  console.log('');
});

console.log(`Summary: ${goldCount}/${test20.length} Passed GOLD Validation Level!`);
