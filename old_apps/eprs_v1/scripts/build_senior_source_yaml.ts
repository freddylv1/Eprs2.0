import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { PDFParse } from 'pdf-parse';

interface SourceWord1200 {
  id: number;
  word: string;
  chinese: string;
  syllable: string[];
  ipa: string;
}

export async function generateFullSeniorSourceList() {
  const pdfBuffer = fs.readFileSync(path.join(process.cwd(), 'Source', 'MOE_SENIOR_Source.pdf'));
  const parser: any = new PDFParse(new Uint8Array(pdfBuffer));
  if (typeof parser.load === 'function') {
    await parser.load();
  }
  const res = await parser.getText();

  // Load 1200 list for cross-referencing
  const source1200Path = path.join(process.cwd(), 'Source', 'MOE_1200_Source_list.yaml');
  const source1200Data = yaml.load(fs.readFileSync(source1200Path, 'utf8')) as { words: SourceWord1200[] };
  const map1200 = new Map<string, SourceWord1200>();
  for (const w of source1200Data.words) {
    map1200.set(w.word.toLowerCase().trim(), w);
    const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').trim();
    map1200.set(bare, w);
  }

  const levels: Record<string, { raw: string; word: string; pos: string }[]> = {
    '第一級': [],
    '第二級': [],
    '第三級': [],
    '第四級': [],
    '第五級': [],
    '第六級': []
  };

  let currentLevel: string | null = null;
  let carryOver = '';

  for (let p = 0; p < res.pages.length; p++) {
    const rawLines = (res.pages[p].text as string).split('\n').map((l: string) => l.trim()).filter(Boolean);

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      if (/^高中英文參考詞彙表/.test(line)) continue;
      if (/^依級別排序/.test(line)) continue;
      if (/^-- \d+ of \d+ --/.test(line)) continue;
      if (/^\d+$/.test(line)) continue;

      if (/^第[一二三四五六]級$/.test(line)) {
        currentLevel = line;
        carryOver = '';
        continue;
      }

      if (!currentLevel) continue;

      let entry = carryOver ? carryOver + ' ' + line : line;
      const hasPos = /(?:^|\s)(?:art|n|v|adj|adv|prep|conj|pron|aux|int)\b\.?(?:\s*\/\s*(?:\([a-z]+\.\)|[a-z]+\.?))*$/i.test(entry)
                  || /\/\([a-z]+\.\)$/i.test(entry)
                  || entry.endsWith('.');

      if (hasPos) {
        const match = entry.match(/^(.+?)\s+((?:[a-z]+(?:\.|\/\([a-z]+\.\)|\/[a-z]+\.?))+)$/i);
        if (match) {
          levels[currentLevel].push({ raw: entry, word: match[1].trim(), pos: match[2].trim() });
        } else {
          levels[currentLevel].push({ raw: entry, word: entry, pos: '' });
        }
        carryOver = '';
      } else {
        carryOver = entry;
      }
    }
  }

  console.log('Levels counts:');
  for (const lvl in levels) {
    console.log(`${lvl}: ${levels[lvl].length} words`);
  }

  // Generate complete Senior Level 1 Source list YAML
  const level1Words = levels['第一級'].map((item, idx) => {
    const id = idx + 1;
    const cleanWord = item.word.toLowerCase();
    const matched = map1200.get(cleanWord) || map1200.get(cleanWord.split('/')[0]);

    return {
      id,
      level: 1,
      batch: Math.ceil(id / 100),
      word: item.word,
      pos: item.pos,
      chinese: matched ? matched.chinese : '常用高中字彙',
      syllable: matched ? matched.syllable : [item.word],
      ipa: matched ? matched.ipa : ''
    };
  });

  const outputObj = {
    title: '高中英文參考詞彙表 (教育部/大考中心)',
    total_levels: 6,
    level: 1,
    level_name: '第一級',
    total_words: level1Words.length,
    batches: Math.ceil(level1Words.length / 100),
    words: level1Words
  };

  const outputPath = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  fs.writeFileSync(outputPath, yaml.dump(outputObj, { lineWidth: -1 }), 'utf8');
  console.log(`[PASS] Written Level 1 Source YAML: ${outputPath}`);

  // Summary file for all 6 levels
  const summaryObj = {
    title: '高中英文參考詞彙表 6 級總覽 (教育部/大考中心)',
    source: 'Source/MOE_SENIOR_Source.pdf',
    total_words: Object.values(levels).reduce((sum, list) => sum + list.length, 0),
    level_breakdown: Object.keys(levels).map((lvl, idx) => ({
      level: idx + 1,
      name: lvl,
      count: levels[lvl].length,
      sample_first: levels[lvl][0]?.word,
      sample_last: levels[lvl][levels[lvl].length - 1]?.word
    }))
  };

  const summaryPath = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Overview.yaml');
  fs.writeFileSync(summaryPath, yaml.dump(summaryObj, { lineWidth: -1 }), 'utf8');
  console.log(`[PASS] Written Senior High Summary YAML: ${summaryPath}`);
}

generateFullSeniorSourceList().catch(console.error);
