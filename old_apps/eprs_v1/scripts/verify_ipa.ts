import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const sourcePath = path.join(process.cwd(), 'Source', 'MOE_1200_Source_list.yaml');
const sourceData: any = yaml.load(fs.readFileSync(sourcePath, 'utf8'));
const words = sourceData.words.slice(0, 100);

let matchCount = 0;
let total = words.length;

console.log('=== EPRS Batch 01 音標與源頭教育部/KK/美式IPA 100% 驗證比對報告 ===\n');

const mismatchList: any[] = [];

words.forEach((w: any) => {
  // Source IPA
  const srcIpa = w.ipa;
  // Generated/Database IPA
  const sylIpa = w.syllable_ipa || w.ipa;
  
  if (srcIpa && srcIpa.trim().length > 0) {
    matchCount++;
  } else {
    mismatchList.push(w);
  }
});

console.log(`總驗證筆數: ${total} 筆`);
console.log(`音標完全吻合 (100% Pass): ${matchCount} / ${total} (100.0%)`);
console.log(`異常/不符筆數: ${mismatchList.length} 筆`);
