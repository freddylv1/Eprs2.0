import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const sourcePath = path.join(process.cwd(), 'Source', 'MOE_1200_Source_list.yaml');
const sourceData: any = yaml.load(fs.readFileSync(sourcePath, 'utf8'));
const words = sourceData.words.slice(0, 100);

function formatSteps(w: any): string {
  const syllables: string[] = w.syllable;
  const word: string = w.word;
  const ipa: string = w.ipa;

  const steps: string[] = [];

  // Step 1: 音節分割與結構
  if (syllables.length === 1) {
    steps.push(`**1. 音節分割**：單音節字 [${syllables[0]}]`);
  } else {
    steps.push(`**1. 音節分割**：${syllables.length} 音節 [${syllables.join(' · ')}]`);
  }

  // Step 2: 發音型態
  const patterns: string[] = [];
  syllables.forEach((s) => {
    const sl = s.toLowerCase();
    if (sl.endsWith('e') && sl.length > 2 && !sl.endsWith('ee') && !sl.endsWith('le')) {
      patterns.push(`[${s}] 魔術 e 結構`);
    } else if (/[aeiou]{2}/.test(sl)) {
      patterns.push(`[${s}] 母音組合型態`);
    } else if (/[aeiou][r]/.test(sl)) {
      patterns.push(`[${s}] R 控制母音型態`);
    } else if (/^[aeiou]$/.test(sl) || /^[b-df-hj-np-tv-z]+[aeiou]$/.test(sl)) {
      patterns.push(`[${s}] 開音節型態`);
    } else if (sl.endsWith('ble') || sl.endsWith('tle') || sl.endsWith('ple')) {
      patterns.push(`[${s}] 成音節字尾型態`);
    } else {
      patterns.push(`[${s}] 閉音節型態`);
    }
  });
  steps.push(`**2. 發音型態**：${patterns.join('，')}`);

  // Step 3: 發音規則（以中文詳細說明）
  const rules: string[] = [];

  if (syllables.length > 1) {
    rules.push(`• **非重音母音弱化規則 (R008)**：多音節字之非重音節母音通常弱化為輕母音 /ə/ 或 /ɪ/。`);
  }

  if (word === 'have') {
    rules.push(`• **特殊例外規則 (R010)**：字尾為 e 但母音發短音 /æ/（不符合 Magic e 通則）。`);
  } else if (syllables.some(s => /.[aeiou].*e$/i.test(s) && !s.endsWith('ee') && !s.endsWith('le'))) {
    rules.push(`• **魔術 e 規則 (R003)**：字尾不發音 e 使前方主要母音發長音，字尾 e 保持靜音。`);
  }

  if (/[aeiou]{2}/i.test(word)) {
    rules.push(`• **母音組合規則 (R004)**：雙母音組合（如 ai, ea, ee, oo, ou, ow）發固定長音或雙母音。`);
  }

  if (/[aeiou]r/i.test(word)) {
    rules.push(`• **R 控制母音規則 (R005)**：母音接 r 形成捲舌組合，發 /ɝ/, /ɚ/, /ɑːr/, /ɔːr/ 或 /er/。`);
  }

  if (/sh|ch|th|ph|ck/i.test(word)) {
    rules.push(`• **複合子音規則 (R006)**：固定子音組合（如 sh, ch, th, ph, ck）合成單一特殊子音。`);
  }

  if (syllables.some(s => /^[b-df-hj-np-tv-z]*[aeiou]$/i.test(s))) {
    rules.push(`• **開音節規則 (R002)**：音節以母音結尾且無子音封閉，母音發長母音。`);
  }

  if (syllables.some(s => /^[b-df-hj-np-tv-z]*[aeiou][b-df-hj-np-tv-z]+$/i.test(s))) {
    rules.push(`• **閉音節規則 (R001)**：母音被一個或多個子音封閉，母音發短母音。`);
  }

  const uniqueRules = Array.from(new Set(rules));
  steps.push(`**3. 規則對映與推導**：<br>${uniqueRules.join('<br>')}`);

  // Step 4: IPA 推導
  steps.push(`**4. 音標推導**：組合產生美式標準音標 ${ipa}`);

  return steps.join('<br>');
}

let md = '| 序號 | 單字 | 中文 | 音節分割 | 音標 | 判斷步驟 |\n';
md += '| :---: | :--- | :--- | :--- | :--- | :--- |\n';

words.forEach((w: any) => {
  const syl = w.syllable.join(' · ');
  const steps = formatSteps(w);
  md += `| ${w.id} | **${w.word}** | ${w.chinese} | ${syl} | \`${w.ipa}\` | ${steps} |\n`;
});

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'output_table.md'), md, 'utf8');
console.log('Done writing scripts/output_table.md');
