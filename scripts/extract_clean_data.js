const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const PUBLIC_DATA_DIR = path.join(__dirname, '../public/data');
const BATCHES_DIR = path.join(PUBLIC_DATA_DIR, 'batches');

if (!fs.existsSync(BATCHES_DIR)) {
  fs.mkdirSync(BATCHES_DIR, { recursive: true });
}

console.log('>>> Step 1: Processing MOE 1200 Source...');

const moe1200Raw = yaml.parse(
  fs.readFileSync(
    path.join(__dirname, '../old_apps/eprs_v1/Source/MOE_1200_Source_list.yaml'),
    'utf-8'
  )
);

console.log(`Loaded ${moe1200Raw.words.length} words from MOE 1200.`);

// Rule inference heuristic for clean fallback
function inferRulesFromWord(word, ipa, syllables) {
  const rules = new Set();
  const lowerWord = word.toLowerCase().trim();
  const cleanIpa = (ipa || '').toLowerCase();

  // R003: Magic E
  if (/[aeiou][bcdfghjklmnpqrstvwxyz]e\b/i.test(lowerWord)) {
    rules.add('R003');
  }
  // R004: Vowel teams (ee, ea, ai, ay, oa, oi, oy, ou, oo)
  if (/ee|ea|ai|ay|oa|oi|oy|ou|oo/i.test(lowerWord)) {
    rules.add('R004');
  }
  // R005: R-controlled
  if (/ar|er|ir|or|ur/i.test(lowerWord) || /ɑːr|ɔːr|ɝː|ɚ/.test(cleanIpa)) {
    rules.add('R005');
  }
  // R006: Consonant Digraphs (sh, ch, th, ph, wh, ng, ck)
  if (/sh|ch|th|ph|wh|ng|ck/i.test(lowerWord)) {
    rules.add('R006');
  }
  // R007: Soft c/g
  if (/c[eiy]|g[eiy]/i.test(lowerWord)) {
    rules.add('R007');
  }
  // R008: Schwa
  if (/ə|ɪ/.test(cleanIpa) && syllables.length > 1) {
    rules.add('R008');
  }
  // R009: Syllabic consonant (-ble, -ple, -tle, -dle, -cle)
  if (/[bcdfghjklmnpqrstvwxyz]le\b/i.test(lowerWord)) {
    rules.add('R009');
  }
  // R011: Y as vowel / word family
  if (/[bcdfghjklmnpqrstvwxyz]y\b/i.test(lowerWord) || /alk|old|ind\b/i.test(lowerWord)) {
    rules.add('R011');
  }
  // R012: Affixes (-tion, -sion, re-, de-, dis-)
  if (/tion|sion|ment|ful|able\b|^re|^de|^dis|^ex/i.test(lowerWord)) {
    rules.add('R012');
  }
  // R013: Flap T
  if (/t̬/.test(cleanIpa)) {
    rules.add('R013');
  }
  // R015: Prefix a-
  if (/^a[bcdfghjklmnpqrstvwxyz]/i.test(lowerWord) && syllables.length > 1 && syllables[0] === 'a') {
    rules.add('R015');
  }
  // R016: Silent consonants (wr, kn, mb)
  if (/^wr|^kn|mb\b/i.test(lowerWord)) {
    rules.add('R016');
  }

  // Default fallback if no other rules
  if (rules.size === 0) {
    if (syllables.length === 1 && /[^aeiou][aeiou][^aeiou]$/i.test(lowerWord)) {
      rules.add('R001');
    } else {
      rules.add('R002');
    }
  }

  return Array.from(rules);
}

// Split MOE 1200 into 12 batches of 100 words
const moeManifestBatches = [];
const BATCH_SIZE = 100;
const totalMoeBatches = Math.ceil(moe1200Raw.words.length / BATCH_SIZE);

for (let b = 0; b < totalMoeBatches; b++) {
  const batchNum = b + 1;
  const batchNumStr = batchNum < 10 ? `0${batchNum}` : `${batchNum}`;
  const batchId = `moe-batch-${batchNumStr}`;
  const startIdx = b * BATCH_SIZE;
  const endIdx = Math.min(startIdx + BATCH_SIZE, moe1200Raw.words.length);
  const rawSlice = moe1200Raw.words.slice(startIdx, endIdx);

  const words = rawSlice.map((item, idx) => {
    const rawSyllables = Array.isArray(item.syllable)
      ? item.syllable.filter(Boolean)
      : (item.word || '').split('-');

    const ruleCodes = inferRulesFromWord(item.word, item.ipa, rawSyllables);

    return {
      id: item.id || startIdx + idx + 1,
      word: (item.word || '').trim(),
      chinese: (item.chinese || '').trim(),
      pos: item.pos || '',
      syllables: rawSyllables,
      ipa: (item.ipa || '').trim(),
      ruleCodes,
      level: 'MOE 1200',
      batchId
    };
  });

  const batchFileName = `${batchId}.json`;
  fs.writeFileSync(
    path.join(BATCHES_DIR, batchFileName),
    JSON.stringify(
      {
        batchId,
        title: `教育部基礎 1200 單字 - 第 ${batchNum} 批次`,
        category: 'moe1200',
        range: `${startIdx + 1} ~ ${endIdx}`,
        totalWords: words.length,
        words
      },
      null,
      2
    )
  );

  moeManifestBatches.push({
    batchId,
    title: `MOE 1200 - 批次 ${batchNumStr}`,
    category: 'moe1200',
    range: `${startIdx + 1} ~ ${endIdx}`,
    wordCount: words.length,
    fileName: batchFileName
  });
}

console.log(`Generated ${moeManifestBatches.length} MOE 1200 JSON batches.`);

// Step 2: Senior High batches
console.log('>>> Step 2: Processing Senior High School Database & Sources...');
const seniorManifestBatches = [];

for (let b = 1; b <= 10; b++) {
  const batchNumStr = b < 10 ? `0${b}` : `${b}`;
  const batchId = `senior-batch-${batchNumStr}`;
  const dbPath = path.join(
    __dirname,
    `../old_apps/eprs_v1/Database/English_Pronunciation_Database_Senior_Batch${batchNumStr}.yaml`
  );
  const srcPath = path.join(
    __dirname,
    `../old_apps/eprs_v1/Source/Senior/Batch${batchNumStr}.yaml`
  );

  let seniorData = null;
  if (fs.existsSync(dbPath)) {
    seniorData = yaml.parse(fs.readFileSync(dbPath, 'utf-8'));
  } else if (fs.existsSync(srcPath)) {
    seniorData = yaml.parse(fs.readFileSync(srcPath, 'utf-8'));
  }

  if (!seniorData || !seniorData.words) {
    console.warn(`Senior batch ${b} not found, skipping.`);
    continue;
  }

  const words = seniorData.words.map((item, idx) => {
    const rawSyllables = Array.isArray(item.syllable)
      ? item.syllable.filter(Boolean)
      : (item.word || '').split('-');

    // Extract rule codes from derivations if available
    let ruleCodes = [];
    let derivations = [];

    if (item.derivations && Array.isArray(item.derivations)) {
      derivations = item.derivations.map((d) => {
        const matches = (d.rule || '').match(/R\d{3}/gi) || [];
        matches.forEach((r) => ruleCodes.push(r.toUpperCase()));
        return {
          syllable: d.syllable || '',
          rule: d.rule || '',
          status: d.status || '【適用】',
          reason: d.reason || ''
        };
      });
    }

    if (ruleCodes.length === 0) {
      ruleCodes = inferRulesFromWord(item.word, item.ipa, rawSyllables);
    } else {
      ruleCodes = Array.from(new Set(ruleCodes));
    }

    return {
      id: item.id || (b - 1) * 100 + idx + 1,
      word: (item.word || '').trim(),
      chinese: (item.chinese || '').trim(),
      pos: item.pos || '',
      syllables: rawSyllables,
      ipa: (item.ipa || '').trim(),
      ruleCodes,
      derivations: derivations.length > 0 ? derivations : undefined,
      level: 'Senior Level 1',
      batchId
    };
  });

  const batchFileName = `${batchId}.json`;
  fs.writeFileSync(
    path.join(BATCHES_DIR, batchFileName),
    JSON.stringify(
      {
        batchId,
        title: `高中參考字彙 第一級 - 第 ${b} 批次`,
        category: 'senior',
        range: seniorData.range || `${(b - 1) * 100 + 1} ~ ${(b - 1) * 100 + words.length}`,
        totalWords: words.length,
        words
      },
      null,
      2
    )
  );

  seniorManifestBatches.push({
    batchId,
    title: `高中 Level 1 - 批次 ${batchNumStr}`,
    category: 'senior',
    range: seniorData.range || `${(b - 1) * 100 + 1} ~ ${(b - 1) * 100 + words.length}`,
    wordCount: words.length,
    fileName: batchFileName
  });
}

console.log(`Generated ${seniorManifestBatches.length} Senior JSON batches.`);

// Step 3: Generate Master Batches Manifest
const manifest = {
  version: '2.0.0',
  updatedAt: new Date().toISOString(),
  categories: [
    {
      id: 'moe1200',
      name: '教育部 1200 基礎單字',
      description: '涵蓋臺灣國中小基礎必背 1200 核心字彙與自然發音音節標註',
      totalBatches: moeManifestBatches.length,
      totalWords: moeManifestBatches.reduce((acc, b) => acc + b.wordCount, 0),
      batches: moeManifestBatches
    },
    {
      id: 'senior',
      name: '高中大考參考詞彙 第一級',
      description: '大考中心高中 4500/7000 字彙第一級，具備音節規則與音變深度推導',
      totalBatches: seniorManifestBatches.length,
      totalWords: seniorManifestBatches.reduce((acc, b) => acc + b.wordCount, 0),
      batches: seniorManifestBatches
    }
  ]
};

fs.writeFileSync(
  path.join(PUBLIC_DATA_DIR, 'batches-manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log('>>> Step 3: batches-manifest.json successfully created!');
