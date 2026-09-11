import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { buildWordDerivation } from './batch1_derivations_map';

const sourcePath = path.join(process.cwd(), 'Source', 'MOE_1200_Source_list.yaml');
const sourceData: any = yaml.load(fs.readFileSync(sourcePath, 'utf8'));
const words = sourceData.words;

export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】';
  reason: string;
}

export interface BatchWord {
  id: number;
  word: string;
  chinese: string;
  syllable: string[];
  syllableText: string;
  syllableDetail: {
    header: string;
    vowelCore: string;
    structureRule: string;
    indivisibleRule: string;
  };
  ipa: string;
  batch: number;
  isException?: boolean;
  exceptionCategory?: string;
  exceptionReason?: string;
  steps: {
    syllableStep: string;
    patternStep: string;
    ruleStep: string[];
    ipaStep: string;
    derivations?: DerivationItem[];
  };
}

// 提取母音核心 (Vowel Nucleus)
function extractVowelCores(syl: string): string[] {
  const matches = syl.toLowerCase().match(/ea|ee|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei|ui|er|ir|ur|ar|or|a|e|i|o|u|y/g);
  return matches ? Array.from(new Set(matches)) : [];
}

// 辨識不可拆組合 (子音叢 Blend / 複合子音 Digraph)
function findIndivisibleUnits(word: string): string[] {
  const w = word.toLowerCase();
  const blends = ['gr', 'br', 'cr', 'dr', 'fr', 'pr', 'tr', 'cl', 'bl', 'fl', 'gl', 'pl', 'sl', 'st', 'sp', 'sk', 'sm', 'sn', 'sw', 'str', 'spr', 'scr'];
  const digraphs = ['sh', 'ch', 'th', 'ph', 'ck', 'ng', 'nk', 'dge', 'tch'];

  const found: string[] = [];
  digraphs.forEach(d => {
    if (d === 'ng' && (w.includes('engineer') || w.includes('ingredient'))) return;
    if (w.includes(d)) found.push(`[${d}] 複合子音`);
  });
  blends.forEach(b => {
    if (w.includes(b)) found.push(`[${b}] 子音叢 (Consonant Blend)`);
  });

  return Array.from(new Set(found));
}

function countOccurrences(str: string, target: string): number {
  if (!target) return 0;
  let count = 0;
  let pos = 0;
  while ((pos = str.indexOf(target, pos)) !== -1) {
    count++;
    pos += 1;
  }
  return count;
}

function formatSegmentTag(segment: string, fullWord: string): string {
  const wLower = fullWord.toLowerCase();
  const sLower = segment.toLowerCase();
  
  // 當 segment 沒有重複（出現次數 <= 1）或是整字，無需標記位置
  if (countOccurrences(wLower, sLower) <= 1) {
    return segment;
  }

  const idx = wLower.indexOf(sLower);
  if (idx === -1) return segment;
  if (segment.length === 1) {
    return `${segment}(${idx + 1})`;
  }
  return `${segment}(${idx + 1}-${idx + segment.length})`;
}

function processWord(w: any): BatchWord {
  const syllables: string[] = w.syllable || [w.word];
  const word: string = w.word;
  const ipa: string = w.ipa;
  const batch = Math.ceil(w.id / 100);

  // 1. 母音核心與音節頭標題
  const allCores: string[] = [];
  syllables.forEach(s => {
    const cores = extractVowelCores(s);
    if (cores.length > 0) {
      cores.forEach(c => {
        allCores.push(formatSegmentTag(c, word));
      });
    }
  });
  const uniqueCoresStr = allCores.map(c => `[${c}]`).join(', ');

  const header = syllables.length === 1 
    ? `單音節字 [${syllables[0]}]`
    : `${syllables.length} 音節 [${syllables.join(' · ')}]`;

  const vowelCoreText = `1. 母音核心：${uniqueCoresStr}（共 ${syllables.length} 個）`;

  const indivisibles = findIndivisibleUnits(word);
  const indivisibleRule = indivisibles.length > 0
    ? `2. 不可拆組合：${indivisibles.slice(0, 2).join('，')} 保持完整`
    : '2. 不可拆組合：無';

  let structureRule = '';
  if (syllables.length === 1) {
    structureRule = '3. 結構切分：單音節結構，不需切分';
  } else {
    // 檢查音節分界點是 2 個相連子音 (VCCV) 還是 1 個子音/前綴 (VCV)
    let hasVccv = false;
    for (let i = 0; i < syllables.length - 1; i++) {
      const s1 = syllables[i];
      const s2 = syllables[i + 1];
      if (/[b-df-hj-np-tv-z]$/i.test(s1) && /^[b-df-hj-np-tv-z]/i.test(s2)) {
        hasVccv = true;
        break;
      }
    }
    if (hasVccv) {
      structureRule = "3. 結構切分：VCCV 相連子音中間拆開";
    } else {
      structureRule = "3. 結構切分：VCV 優先劃歸後續音節";
    }
  }

  const syllableStep = `${vowelCoreText}\n${indivisibleRule}\n${structureRule}\n4. 切分結果：${header}`;

  // 3. 發音型態
  const patternItems: string[] = [];
  syllables.forEach((s) => {
    const sl = s.toLowerCase();
    const tag = formatSegmentTag(s, word);
    if (sl.endsWith('e') && sl.length > 2 && !sl.endsWith('ee') && !sl.endsWith('le')) {
      patternItems.push(`[${tag}] 魔術 e 型態`);
    } else if (/ee|ea|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei|ew|ey|oa|ui|[aeiou]{2}/i.test(sl)) {
      patternItems.push(`[${tag}] 母音組合型態`);
    } else if (/[aeiou]r/i.test(sl)) {
      patternItems.push(`[${tag}] R 控制母音型態`);
    } else if (sl.endsWith('ble') || sl.endsWith('tle') || sl.endsWith('ple') || sl.endsWith('dle') || sl.endsWith('gle')) {
      patternItems.push(`[${tag}] 成音節字尾型態`);
    } else if (/^[aeiou]$/i.test(sl) || /^[b-df-hj-np-tv-z]+[aeiouy]$/i.test(sl)) {
      patternItems.push(`[${tag}] 開音節型態`);
    } else {
      patternItems.push(`[${tag}] 閉音節型態`);
    }
  });
  const patternStep = patternItems.join('，');

  // 4. 精準判定各音節發音規則說明 (對照工具表 R001~R017) 與音標推導
  const rules: string[] = [];
  const wLower = word.toLowerCase();

  // 重音判定：依據標準 IPA 中的重音符號 ˈ 精準定位音節
  let primaryStressIdx = 0;
  if (syllables.length > 1 && ipa) {
    const cleanIpa = ipa.replace(/^\//, '').replace(/\/$/, '');
    const stressPos = cleanIpa.indexOf('ˈ');
    if (stressPos === -1 || stressPos === 0) {
      primaryStressIdx = 0;
    } else {
      const before = cleanIpa.substring(0, stressPos);
      const parts = before.split(/[\.ˌ]/).filter(p => p.length > 0);
      primaryStressIdx = Math.min(parts.length, syllables.length - 1);
    }
  }

  // 複合名詞判定 (R015)
  const compoundNouns = [
    'cowboy', 'chopsticks', 'classroom', 'bedroom', 'football', 'breakfast', 'birthday', 'homework', 'notebook', 'pancake', 'postcard', 'railway', 'raincoat', 'seafood', 'snowball', 'snowman', 'sunlight', 'sunglasses', 'teammate', 'textbook', 'weekend', 'bathroom', 'doorbell', 'downstairs', 'upstairs', 'headache', 'toothache', 'popcorn', 'rainbow', 'skateboard', 'airport', 'airplane', 'armchair', 'baseball', 'basketball', 'daylight', 'earthquake', 'firefighter', 'fireman', 'flashlight', 'grandfather', 'grandmother', 'grandpa', 'grandma', 'grasshopper', 'hamburger', 'handbag', 'handkerchief', 'highway', 'housewife', 'mailbox', 'motorcycle', 'newspaper', 'playground', 'policeman', 'railroad', 'rowboat', 'sailboat', 'salesman', 'sandals', 'sandwich', 'seaweed', 'seesaw', 'shoelace', 'shoemaker', 'sidewalk', 'sightseeing', 'spaceship', 'strawberry', 'subway', 'suitcase', 'sunflower', 'sunset', 'supermarket', 'tablecloth', 'teapot', 'toothbrush', 'toothpaste', 'volleyball', 'waterfall', 'watermelon', 'wheelchair', 'whiteboard', 'windsurfing',
    'dining room', 'department store', 'dodge ball', 'elementary school', 'junior high school', 'senior high school', 'roller skate', 'roller skating', 'ice cream', 'post office', 'bus stop', 'tape recorder', 'living room', 'french fries'
  ];
  const isCompound = compoundNouns.includes(wLower);
  if (isCompound) {
    rules.push('複合名詞重音在前 (R015)：主重音落在第 1 部分，各音節各自保留完整母音');
  }

  // 特殊例外判定 (R010 / 靜音子音 / 不規則母音)
  let isException = false;
  let exceptionCategory = '';
  let exceptionReason = '';

  // 類別 1: 魔術 e 特殊例外 (R010)
  if (['have', 'give', 'live'].includes(wLower)) {
    isException = true;
    exceptionCategory = '魔術 e 發短音例外 (R010)';
    exceptionReason = `字尾有靜音 e，但主要母音發短音 ${ipa}（歷史留存字）`;
    rules.push(`特殊例外 (R010)：［${word}］字尾 e 靜音但母音發短音`);
  } else if (['some', 'come', 'done', 'love', 'glove', 'above', 'become'].includes(wLower)) {
    isException = true;
    exceptionCategory = '魔術 e / -ove 發 /ʌ/ 例外 (R010)';
    exceptionReason = `字尾有靜音 e，但母音不發長音而發短音 /ʌ/`;
    rules.push(`特殊例外 (R010)：［${word}］字尾 e 靜音但母音發短音 /ʌ/`);
  } else if (['move', 'prove', 'lose'].includes(wLower)) {
    isException = true;
    exceptionCategory = '魔術 e 發 /uː/ 例外 (R010)';
    exceptionReason = `字尾有靜音 e，母音發 /uː/ 音`;
    rules.push(`特殊例外 (R010)：［${word}］母音發 /uː/`);
  } 
  // 類別 2: 不規則母音組合
  else if (['said', 'says', 'again', 'against'].includes(wLower)) {
    isException = true;
    exceptionCategory = '母音組合發短音例外 (R010)';
    exceptionReason = `雙母音組合 ai 不發長音 /eɪ/，改發短音 /ɛ/`;
    rules.push(`特殊例外 (R010)：［${word}］ai 組合特例發短音 /ɛ/`);
  } else if (['break', 'great', 'steak'].includes(wLower)) {
    isException = true;
    exceptionCategory = 'ea 組合發長音 /eɪ/ 例外 (R010)';
    exceptionReason = `ea 母音組合通常發 /iː/，此處特例發 /eɪ/`;
    rules.push(`特殊例外 (R010)：［${word}］ea 發雙母音 /eɪ/`);
  } else if (['bread', 'head', 'ahead', 'dead', 'heavy', 'ready', 'health', 'weather', 'instead', 'sweater', 'already', 'friend', 'friendly'].includes(wLower)) {
    isException = true;
    exceptionCategory = '母音組合發短音 /ɛ/ 例外 (R010)';
    exceptionReason = `母音組合 (ea/ie) 通常發 /iː/，此處特例發短音 /ɛ/`;
    rules.push(`特殊例外 (R010)：［${word}］母音組合特例發短母音 /ɛ/`);
  } else if (['bear', 'pear', 'wear'].includes(wLower)) {
    isException = true;
    exceptionCategory = 'ear 組合發 /er/ 例外 (R010)';
    exceptionReason = `ear 通常發 /ɪr/，此處特例發捲舌音 /ɛr/`;
    rules.push(`特殊例外 (R010)：［${word}］ear 發捲舌音 /ɛr/`);
  } else if (['broad', 'abroad'].includes(wLower)) {
    isException = true;
    exceptionCategory = 'oa 組合發 /ɔː/ 例外 (R010)';
    exceptionReason = `oa 通常發長音 /oʊ/，此處特例發 /ɔː/`;
    rules.push(`特殊例外 (R010)：［${word}］oa 組合特例發長音 /ɔː/`);
  } else if (['shoe', 'cough', 'tough', 'rough', 'laugh', 'enough', 'key', 'aunt'].includes(wLower)) {
    isException = true;
    exceptionCategory = '不規則母音/拼字組合 (R010)';
    exceptionReason = `母音組合發音不遵循常規拼讀規則`;
    rules.push(`特殊例外 (R010)：［${word}］母音組合特例發音`);
  }
  // 類別 3: 靜音子音 (R016 Silent Letters)
  else if (/^kn/i.test(wLower)) {
    isException = true;
    exceptionCategory = '靜音子音 (kn- 字首 k 靜音)';
    exceptionReason = `kn- 開頭單字，字首 k 不發音`;
    rules.push(`靜音子音 (R016)：［kn-］字首 k 靜音發 /n/`);
  } else if (/^wr/i.test(wLower)) {
    isException = true;
    exceptionCategory = '靜音子音 (wr- 字首 w 靜音)';
    exceptionReason = `wr- 開頭單字，字首 w 不發音`;
    rules.push(`靜音子音 (R016)：［wr-］字首 w 靜音發 /r/`);
  } else if (/mb$/i.test(wLower)) {
    isException = true;
    exceptionCategory = '靜音子音 (-mb 字尾 b 靜音)';
    exceptionReason = `-mb 結尾單字，字尾 b 不發音`;
    rules.push(`靜音子音 (R016)：［-mb］字尾 b 靜音`);
  } else if (['listen', 'castle', 'often', 'answer', 'sword', 'island', 'debt', 'doubt', 'ghost', 'hour', 'honest', 'half', 'calf', 'walk', 'talk', 'chalk', 'could', 'would', 'should', 'autumn', 'foreign', 'foreigner', 'eight', 'eighteen', 'eighteenth', 'eighth', 'eighty'].includes(wLower)) {
    isException = true;
    exceptionCategory = '靜音子音 (不發音字母)';
    exceptionReason = `單字中含有特殊不發音子音字母`;
    rules.push(`靜音子音 (R016)：［${word}］含不發音子音字母`);
  }
  // 類別 4: 母音 o / ou 發 /ʌ/ / 特殊短音 /ʊ/ (R010)
  else if (['color', 'son', 'ton', 'won', 'front', 'monkey', 'donkey', 'honey', 'money', 'mother', 'brother', 'other', 'another', 'comfort', 'company', 'cover', 'discover', 'wonder', 'onion', 'among', 'month', 'dozen', 'from', 'any', 'anyone', 'anything', 'many'].includes(wLower)) {
    isException = true;
    exceptionCategory = '母音特例短音 (R010)';
    rules.push(`特殊母音短音 (R010)：［${word}］母音發特例短音`);
  } else if (['full', 'pull', 'bull', 'push', 'bush', 'put', 'foot'].includes(wLower)) {
    rules.push(`特殊母音短音 (R010)：［${word}］發特例短母音 /ʊ/`);
  } else if (['floor', 'door', 'poor'].includes(wLower)) {
    rules.push(`特殊母音例外 (R010)：［${word}］發特例捲舌母音 /ɔːr/`);
  } else if (['country', 'cousin', 'touch', 'young', 'double', 'trouble', 'couple', 'enough', 'rough', 'tough'].includes(wLower)) {
    rules.push(`特殊母音短音 (R010)：［ou］母音組合 ou 發短母音 /ʌ/`);
  }
  // 類別 5: 高頻特殊不規則音
  else if (['one', 'two', 'do', 'does', 'are', 'were', 'there', 'where', 'who', 'whose', 'whom', 'eye', 'busy', 'business', 'woman', 'women', 'of', 'was', 'what', 'want', 'wash', 'watch', 'water', 'father', 'English', 'engineer'].includes(wLower)) {
    isException = true;
    exceptionCategory = '高頻特殊不規則單字 (R010)';
    exceptionReason = `屬於高頻習慣發音單字，不遵循單一自然發音規則`;
    rules.push(`特殊例外 (R010)：［${word}］高頻習慣發音`);
  }

  // 判定各音節所對應的規則
  syllables.forEach((syl, sIdx) => {
    const sylL = syl.toLowerCase();
    const sTag = formatSegmentTag(syl, word);
    const isStressed = (sIdx === primaryStressIdx) || syllables.length === 1;

    // 前綴弱化 (R012) - 僅適用於非重讀第 1 音節
    if (sIdx === 0 && !isStressed && syllables.length > 1 && ['a', 'an', 'be', 'de', 're', 'ex', 'in', 'im', 'pro', 'sub', 'ad', 'ap', 'as', 'at', 'al', 'dis', 'un'].includes(sylL)) {
      rules.push(`前綴弱化 (R012)：［${sTag}］非重讀前綴母音弱化發 /ə/ 或 /ɪ/`);
    }
    // 成音節字尾 (R009)
    else if (sylL.endsWith('ble') || sylL.endsWith('tle') || sylL.endsWith('ple') || sylL.endsWith('dle') || sylL.endsWith('gle')) {
      rules.push(`成音節字尾 (R009)：［${sTag}］成音節發 /l̩/ 或 /əl/`);
    }
    // 非重讀音節母音弱化 (R008)
    else if (!isStressed && !isCompound) {
      if (/[aeiou]r$/i.test(sylL)) {
        rules.push(`R 控制母音弱化 (R005/R008)：［${sTag}］非重音節弱化發輕捲舌母音 /ɚ/`);
      } else {
        rules.push(`非重音母音弱化 (R008)：［${sTag}］非重音母音弱化發輕母音 /ə/ 或 /ɪ/`);
      }
    }
    // 重讀音節或單音節主規則
    else {
      if (wLower === 'age') {
        rules.push(`魔術 e (R003)：［age］字尾 e 靜音使母音 a 發長音 /eɪ/`);
        rules.push(`軟音 g (R007)：［g］在 e 前發軟音 /dʒ/`);
      } else if (/[aeiou]{1,2}r/i.test(sylL) && !wLower.includes('ear') && !wLower.includes('bear')) {
        rules.push(`R 控制母音 (R005)：［${sTag}］母音接 r 形成捲舌音`);
      } else if (/.[aeiouy].*e$/i.test(sylL) && !sylL.endsWith('ee') && !sylL.endsWith('le') && !['have', 'give', 'live', 'some', 'come', 'done', 'love', 'above', 'become'].includes(wLower)) {
        rules.push(`魔術 e (R003)：［${sTag}］字尾 e 靜音使主要母音發長音`);
      } else if (/ee|ea|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei/i.test(sylL) && !isException) {
        rules.push(`母音組合 (R004)：［${sTag}］發固定長母音或雙母音`);
      } else if (/all$/i.test(sylL) || ['fall', 'ball', 'call', 'hall', 'mall', 'small', 'tall', 'wall', 'all', 'almost', 'also', 'always'].includes(wLower)) {
        rules.push(`特殊母音字族 (R011)：［${sTag}］-all 組合發 /ɔːl/`);
      } else if (/old$/i.test(sylL) || /ind$/i.test(sylL) || /ild$/i.test(sylL) || /ight$/i.test(sylL) || ['most', 'post', 'host', 'ghost'].includes(sylL)) {
        rules.push(`特殊母音字族 (R011)：［${sTag}］相連子音前母音拉長發長音`);
      } else if (/^[b-df-hj-np-tv-z]*[aeiouy]$/i.test(sylL)) {
        rules.push(`開音節 (R002)：［${sTag}］母音結尾發長母音`);
      } else if (!isException) {
        rules.push(`閉音節 (R001)：［${sTag}］子音封閉發短母音`);
      }
    }
  });

  // 軟硬子音 (R007)
  if (wLower !== 'age' && /c[eiy]/i.test(wLower)) {
    rules.push('軟音 c (R007)：［c］在 e, i, y 前發軟音 /s/');
  } else if (/[^s]c[aou]/i.test(wLower) || /^c[aou]/i.test(wLower) || /c$/i.test(wLower)) {
    rules.push('硬音 c (R007)：［c］發硬音 /k/');
  }
  if (wLower !== 'age' && /g[eiy]/i.test(wLower) && !['finger', 'forget', 'get', 'gift', 'give', 'girl', 'tiger', 'begin', 'together', 'eager', 'target', 'anger', 'hungry', 'ugly', 'geese', 'gear'].some(k => wLower.includes(k))) {
    rules.push('軟音 g (R007)：［g］在 e, i, y 前發軟音 /dʒ/');
  }

  // 複合子音 (R006)
  const digraphMatch = word.match(/sh|ch|th|ph|ck|ng|nk/i);
  if (digraphMatch && !(digraphMatch[0].toLowerCase() === 'ng' && (wLower.includes('engineer') || wLower.includes('ingredient')))) {
    const tag = formatSegmentTag(digraphMatch[0], word);
    rules.push(`複合子音 (R006)：［${tag}］保持完整發單一子音`);
  }

  const uniqueRules = Array.from(new Set(rules));

  // 5. 音標推導 (Syllable-by-syllable Phonetic Derivation Chain)
  let ipaStep = '';
  if (syllables.length === 1) {
    if (wLower === 'age') {
      ipaStep = `單音節［age］：魔術 e (R003) a 發長母音 /eɪ/ + 軟音 g (R007) 發 /dʒ/，字尾 e 靜音 ➔ 推導音標：/eɪdʒ/`;
    } else if (wLower === 'air') {
      ipaStep = `單音節［air］：R 控制母音 (R005) air 發捲舌音 /ɛr/ ➔ 推導音標：/ɛr/`;
    } else if (wLower === 'all') {
      ipaStep = `單音節［all］：特殊母音字族 (R011) -all 組合發 /ɔːl/ ➔ 推導音標：/ɔːl/`;
    } else if (wLower === 'and') {
      ipaStep = `單音節［and］：閉音節 (R001) a 發短母音 /æ/ + 子音 nd /nd/ ➔ 推導音標：/ænd/`;
    } else if (wLower === 'ant') {
      ipaStep = `單音節［ant］：閉音節 (R001) a 發短母音 /æ/ + 子音 nt /nt/ ➔ 推導音標：/ænt/`;
    } else if (wLower === 'arm') {
      ipaStep = `單音節［arm］：R 控制母音 (R005) ar 發捲舌音 /ɑːr/ + m /m/ ➔ 推導音標：/ɑːrm/`;
    } else if (wLower === 'art') {
      ipaStep = `單音節［art］：R 控制母音 (R005) ar 發捲舌音 /ɑːr/ + t /t/ ➔ 推導音標：/ɑːrt/`;
    } else if (wLower === 'as') {
      ipaStep = `單音節［as］：閉音節 (R001) a 發短母音 /æ/ + s 發濁音 /z/ ➔ 推導音標：/æz/`;
    } else if (wLower === 'ask') {
      ipaStep = `單音節［ask］：閉音節 (R001) a 發短母音 /æ/ + 子音叢 sk /sk/ ➔ 推導音標：/æsk/`;
    } else if (wLower === 'at') {
      ipaStep = `單音節［at］：閉音節 (R001) a 發短母音 /æ/ + t /t/ ➔ 推導音標：/æt/`;
    } else if (wLower === 'aunt') {
      ipaStep = `單音節［aunt］：特殊例外 (R010) au 特例發短音 /æ/ + nt /nt/ ➔ 推導音標：/ænt/`;
    } else if (wLower === 'bear') {
      ipaStep = `單音節［bear］：特殊例外 (R010) ear 特例發捲舌音 /ɛr/ + b /b/ ➔ 推導音標：/bɛr/`;
    } else if (wLower === 'bread') {
      ipaStep = `單音節［bread］：特殊例外 (R010) ea 特例發短母音 /ɛ/ + d /d/ ➔ 推導音標：/brɛd/`;
    } else if (wLower === 'break') {
      ipaStep = `單音節［break］：特殊例外 (R010) ea 特例發長母音 /eɪ/ + k /k/ ➔ 推導音標：/breɪk/`;
    } else if (wLower === 'build') {
      ipaStep = `單音節［build］：特殊例外 (R010) ui 特例發短母音 /ɪ/ + ld /ld/ ➔ 推導音標：/bɪld/`;
    } else if (wLower === 'buy') {
      ipaStep = `單音節［buy］：特殊例外 (R010) uy 特例發雙母音 /baɪ/ ➔ 推導音標：/baɪ/`;
    } else if (wLower === 'by') {
      ipaStep = `單音節［by］：開音節 (R002) y 發字母長音 /aɪ/ ➔ 推導音標：/baɪ/`;
    } else if (wLower === 'chalk') {
      ipaStep = `單音節［chalk］：特殊母音字族 (R011) + 靜音子音 (R016) al 發 /ɔː/，l 靜音 ➔ 推導音標：/tʃɔːk/`;
    } else if (wLower === 'climb') {
      ipaStep = `單音節［climb］：特殊母音字族 (R011) + 靜音子音 (R016) i 發長音 /aɪ/，字尾 b 靜音 ➔ 推導音標：/klaɪm/`;
    } else if (wLower === 'comb') {
      ipaStep = `單音節［comb］：特殊母音字族 (R011) + 靜音子音 (R016) o 發長母音 /oʊ/，字尾 b 靜音 ➔ 推導音標：/koʊm/`;
    } else if (wLower === 'clothes') {
      ipaStep = `單音節［clothes］：魔術 e (R003) o 發長音 /oʊ/ + 複合子音 th (R006) 濁音 /ð/ + s 濁化 /z/ ➔ 推導音標：/kloʊðz/`;
    } else if (wLower === 'come') {
      ipaStep = `單音節［come］：特殊例外 (R010) 字尾 e 靜音但 o 特例發短母音 /ʌ/ ➔ 推導音標：/kʌm/`;
    } else if (wLower === 'cost') {
      ipaStep = `單音節［cost］：閉音節 (R001) o 在 st 前發短母音 /ɔːst/ ➔ 推導音標：/kɔːst/`;
    } else if (wLower === 'couch') {
      ipaStep = `單音節［couch］：母音組合 ou (R004) 發 /aʊ/ + 複合子音 ch (R006) 發 /tʃ/ ➔ 推導音標：/kaʊtʃ/`;
    } else if (wLower === 'count') {
      ipaStep = `單音節［count］：母音組合 ou (R004) 發 /aʊ/ + nt /nt/ ➔ 推導音標：/kaʊnt/`;
    } else if (wLower === 'course') {
      ipaStep = `單音節［course］：母音組合 + R 控制 (R004/R005) our 發 /kɔːrs/，字尾 e 靜音 ➔ 推導音標：/kɔːrs/`;
    } else if (wLower === 'dance') {
      ipaStep = `單音節［dance］：軟音 c (R007) ce 發 /s/，閉音節 a 發 /dæns/ ➔ 推導音標：/dæns/`;
    } else if (wLower === 'dead') {
      ipaStep = `單音節［dead］：特殊例外 (R010) ea 特例發短母音 /ɛ/ + d /d/ ➔ 推導音標：/dɛd/`;
    } else if (wLower === 'do') {
      ipaStep = `單音節［do］：特殊例外 (R010) 開音節 o 發長母音 /duː/ ➔ 推導音標：/duː/`;
    } else if (wLower === 'doll') {
      ipaStep = `單音節［doll］：閉音節 (R001) o 在 ll 前發短母音 /dɑːl/ ➔ 推導音標：/dɑːl/`;
    } else if (wLower === 'door') {
      ipaStep = `單音節［door］：母音組合 + R 控制特殊例外 (R004/R005/R010) oor 特例發 /dɔːr/ ➔ 推導音標：/dɔːr/`;
    } else if (wLower === 'draw') {
      ipaStep = `單音節［draw］：母音組合 aw (R004) 發長音 /drɔː/ ➔ 推導音標：/drɔː/`;
    } else if (wLower === 'drink') {
      ipaStep = `單音節［drink］：閉音節 (R001) + 複合子音 nk (R006) 發 /drɪŋk/ ➔ 推導音標：/drɪŋk/`;
    } else if (wLower === 'duck') {
      ipaStep = `單音節［duck］：閉音節 (R001) + 複合子音 ck (R006) 發 /dʌk/ ➔ 推導音標：/dʌk/`;
    } else if (wLower === 'each') {
      ipaStep = `單音節［each］：母音組合 ea (R004) 發長音 /iː/ + 複合子音 ch (R006) 發 /tʃ/ ➔ 推導音標：/iːtʃ/`;
    } else if (wLower === 'earth') {
      ipaStep = `單音節［earth］：特殊 R 控制例外 (R005/R010) ear 發 /ɝː/ + 複合子音 th (R006) 發 /θ/ ➔ 推導音標：/ɝːθ/`;
    } else if (wLower === 'eight') {
      ipaStep = `單音節［eight］：靜音子音 (R016) eigh 發長母音 /eɪ/，gh 靜音 + t /t/ ➔ 推導音標：/eɪt/`;
    } else if (wLower === 'eighth') {
      ipaStep = `單音節［eighth］：靜音子音 (R016) + 複合子音 th (R006) eigh 發 /eɪt/ + th 發 /θ/ ➔ 推導音標：/eɪtθ/`;
    } else if (wLower === 'else') {
      ipaStep = `單音節［else］：閉音節 (R001) e 發短母音 /ɛls/，字尾 e 靜音 ➔ 推導音標：/ɛls/`;
    } else if (wLower === 'eye') {
      ipaStep = `單音節［eye］：特殊例外 (R010) eye 特例發雙母音 /aɪ/ ➔ 推導音標：/aɪ/`;
    } else if (wLower === 'face') {
      ipaStep = `單音節［face］：軟音 c (R007) + 魔術 e (R003) a 發長音 /feɪs/ ➔ 推導音標：/feɪs/`;
    } else if (wLower === 'few') {
      ipaStep = `單音節［few］：母音組合 ew (R004) 發 /fjuː/ ➔ 推導音標：/fjuː/`;
    } else if (wLower === 'fifth') {
      ipaStep = `單音節［fifth］：閉音節 (R001) + 複合子音 th (R006) 發 /fɪfθ/ ➔ 推導音標：/fɪfθ/`;
    } else if (wLower === 'fight') {
      ipaStep = `單音節［fight］：特殊母音字族 (R011) + 靜音子音 (R016) igh 發長母音 /aɪ/，gh 靜音 ➔ 推導音標：/faɪt/`;
    } else if (wLower === 'fire') {
      ipaStep = `單音節［fire］：魔術 e + R 控制 (R003/R005) i 發雙母音捲舌音 /ˈfaɪ.ɚ/ ➔ 推導音標：/ˈfaɪ.ɚ/`;
    } else if (wLower === 'first') {
      ipaStep = `單音節［first］：R 控制母音 ir (R005) 發捲舌長母音 /fɝːst/ ➔ 推導音標：/fɝːst/`;
    } else if (wLower === 'floor') {
      ipaStep = `單音節［floor］：母音組合 + R 控制特殊例外 (R004/R005/R010) oor 特例發 /flɔːr/ ➔ 推導音標：/flɔːr/`;
    } else if (wLower === 'foot') {
      ipaStep = `單音節［foot］：特殊例外 (R010) oo 特例發短母音 /fʊt/ ➔ 推導音標：/fʊt/`;
    } else if (wLower === 'four') {
      ipaStep = `單音節［four］：母音組合 + R 控制 (R004/R005) our 發 /fɔːr/ ➔ 推導音標：/fɔːr/`;
    } else if (wLower === 'fourth') {
      ipaStep = `單音節［fourth］：母音組合 our (R004/R005) + 複合子音 th (R006) 發 /fɔːrθ/ ➔ 推導音標：/fɔːrθ/`;
    } else if (wLower === 'friend') {
      ipaStep = `單音節［friend］：特殊例外 (R010) ie 特例發短母音 /frɛnd/ ➔ 推導音標：/frɛnd/`;
    } else if (wLower === 'from') {
      ipaStep = `單音節［from］：特殊例外 (R010) 常用詞 o 發短母音 /frʌm/ ➔ 推導音標：/frʌm/`;
    } else if (wLower === 'front') {
      ipaStep = `單音節［front］：特殊例外 (R010) o 在 nt 前特例發短母音 /frʌnt/ ➔ 推導音標：/frʌnt/`;
    } else if (wLower === 'fruit') {
      ipaStep = `單音節［fruit］：母音組合 ui (R004) 發長母音 /fruːt/ ➔ 推導音標：/fruːt/`;
    } else if (wLower === 'full') {
      ipaStep = `單音節［full］：特殊母音短音 (R010) u 在 ll 前特例發短母音 /fʊl/ ➔ 推導音標：/fʊl/`;
    } else if (wLower === 'both') {
      ipaStep = `單音節［both］：特殊母音字族 (R011) o 在 th 前發長母音 /oʊ/ + th (R006) ➔ 推導音標：/boʊθ/`;
    } else if (/ind$/i.test(wLower) || /ild$/i.test(wLower) || /old$/i.test(wLower) || /ight$/i.test(wLower) || ['most', 'post', 'host', 'ghost'].includes(wLower)) {
      ipaStep = `單音節［${word}］：特殊母音字族 (R011) 相連子音前母音拉長發長音 ➔ 推導音標：${ipa}`;
    } else if (/.[aeiouy].*e$/i.test(wLower) && !wLower.endsWith('ee') && !wLower.endsWith('le')) {
      ipaStep = `單音節［${word}］：魔術 e (R003) 字尾 e 靜音使母音發長音 ➔ 推導音標：${ipa}`;
    } else if (/[aeiou]{2}/i.test(wLower) || /[aeiou][wy]/i.test(wLower)) {
      ipaStep = `單音節［${word}］：母音組合 (R004) 發固定長母音/雙母音 ➔ 推導音標：${ipa}`;
    } else if (/[aeiou]r/i.test(wLower)) {
      ipaStep = `單音節［${word}］：R 控制母音 (R005) 發捲舌音 ➔ 推導音標：${ipa}`;
    } else if (/^[b-df-hj-np-tv-z]*[aeiou]$/i.test(wLower)) {
      ipaStep = `單音節［${word}］：開音節 (R002) 母音結尾發字母長音 ➔ 推導音標：${ipa}`;
    } else {
      ipaStep = `單音節［${word}］：閉音節 (R001) 子音封閉母音發短音 ➔ 推導音標：${ipa}`;
    }
  } else {
    // 多音節詞：特別精緻特例詞
    if (wLower === 'breakfast') {
      ipaStep = `第 1 音節［break］：特殊例外 (R010) ea 特例發短母音 /brɛk/；第 2 音節［fast］：非重讀弱化 (R008) 發輕母音 /fəst/。音節合成推導 ➔ 標準音標 /ˈbrɛk.fəst/`;
    } else if (wLower === 'busy') {
      ipaStep = `第 1 音節［bus］：特殊例外 (R010) u 特例發短母音 /ɪ/，s 發濁音 /z/；第 2 音節［y］：字尾非重讀 (R008) 發 /i/。音節合成推導 ➔ 標準音標 /ˈbɪz.i/`;
    } else if (wLower === 'business') {
      ipaStep = `第 1 音節［busi］：特殊例外 (R010) u 特例發短母音 /ɪ/，i 靜音；第 2 音節［ness］：非重讀弱化 (R008) 發輕母音 /nɪs/。音節合成推導 ➔ 標準音標 /ˈbɪz.nɪs/`;
    } else if (wLower === 'businessman') {
      ipaStep = `第 1 音節［busi］：特殊例外 (R010) 發 /bɪz/；第 2 音節［ness］：非重讀弱化 (R008) 發 /nɪs/；第 3 音節［man］：複合詞次重音 (R015) 發 /mæn/。音節合成推導 ➔ 標準音標 /ˈbɪz.nɪs.mæn/`;
    } else if (wLower === 'castle') {
      ipaStep = `第 1 音節［cas］：閉音節 (R001) a 發短母音 /kæs/；第 2 音節［tle］：成音節字尾 (R009) + 靜音子音 (R016) t 靜音發 /əl/。音節合成推導 ➔ 標準音標 /ˈkæs.əl/`;
    } else if (wLower === 'celebrate') {
      ipaStep = `第 1 音節［cel］：軟音 c (R007) + 閉音節 (R001) 發 /sɛl/；第 2 音節［e］：非重讀弱化 (R008) 發 /ə/；第 3 音節［brate］：魔術 e (R003) a 發長母音 /breɪt/。音節合成推導 ➔ 標準音標 /ˈsɛl.ə.breɪt/`;
    } else if (wLower === 'centimeter') {
      ipaStep = `第 1 音節［cen］：軟音 c (R007) + 閉音節 (R001) 發 /sɛn/；第 2 音節［ti］：弱化 (R008) 發 /tə/；第 3 音節［me］：開音節 (R002) 發 /miː/；第 4 音節［ter］：非重讀 R 控制 (R005/R008) 發 /t̬ɚ/。音節合成推導 ➔ 標準音標 /ˈsɛn.tə.miː.t̬ɚ/`;
    } else if (wLower === 'christmas') {
      ipaStep = `第 1 音節［Christ］：特殊例外 (R010, R016) Ch 發 /k/，t 靜音，i 發短母音 /krɪs/；第 2 音節［mas］：非重讀弱化 (R008) 發 /məs/。音節合成推導 ➔ 標準音標 /ˈkrɪs.məs/`;
    } else if (wLower === 'chocolate') {
      ipaStep = `第 1 音節［choc］：複合子音 (R006) ch + 閉音節 (R001) o 發短音 /tʃɑːk/；第 2 音節［o］：弱化省略；第 3 音節［late］：非重讀弱化 (R008) 發 /lət/。音節合成推導 ➔ 標準音標 /ˈtʃɑːk.lət/`;
    } else if (wLower === 'comfortable') {
      ipaStep = `第 1 音節［com］：特殊例外 (R010) o 發 /kʌm/；第 2 音節［fort］：非重讀 R 控制 (R005/R008) 弱化發 /fɚ/；第 3 音節［a］：非重讀弱化 (R008) 發 /t̬ə/；第 4 音節［ble］：成音節字尾 (R009) 發 /bəl/。音節合成推導 ➔ 標準音標 /ˈkʌm.fɚ.t̬ə.bəl/`;
    } else if (wLower === 'country') {
      ipaStep = `第 1 音節［coun］：特殊母音短音 (R010) ou 特例發短母音 /kʌn/；第 2 音節［try］：字尾非重讀 (R008) 發 /tri/。音節合成推導 ➔ 標準音標 /ˈkʌn.tri/`;
    } else if (wLower === 'cousin') {
      ipaStep = `第 1 音節［cous］：特殊母音短音 (R010) ou 特例發短母音 /kʌ/，s 濁化 /z/；第 2 音節［in］：非重讀弱化 (R008) 發 /ən/。音節合成推導 ➔ 標準音標 /ˈkʌz.ən/`;
    } else if (wLower === 'cover') {
      ipaStep = `第 1 音節［cov］：特殊母音短音 (R010) o 特例發短母音 /kʌv/；第 2 音節［er］：非重讀 R 控制 (R005/R008) 發 /ɚ/。音節合成推導 ➔ 標準音標 /ˈkʌv.ɚ/`;
    } else if (wLower === 'cowboy') {
      ipaStep = `第 1 音節［cow］：母音組合 ow (R004) 發 /kaʊ/；第 2 音節［boy］：母音組合 oy (R004) 發 /bɔɪ/。複合名詞重音在前 (R015) ➔ 標準音標 /ˈkaʊ.bɔɪ/`;
    } else if (wLower === 'dangerous') {
      ipaStep = `第 1 音節［dan］：特殊母音字族 (R011) a 在 nger 前發長音 /deɪn/；第 2 音節［ger］：軟音 g (R007) + 非重讀 R 控制 (R005/R008) 發 /dʒɚ/；第 3 音節［ous］：後綴弱化 (R008, R012) 發 /əs/。音節合成推導 ➔ 標準音標 /ˈdeɪn.dʒɚ.əs/`;
    } else if (wLower === 'daughter') {
      ipaStep = `第 1 音節［daugh］：靜音子音 (R016) augh 發 /dɔː/，gh 靜音；第 2 音節［ter］：非重讀 R 控制 (R005/R008) 發 /t̬ɚ/。音節合成推導 ➔ 標準音標 /ˈdɔː.t̬ɚ/`;
    } else if (wLower === 'december') {
      ipaStep = `第 1 音節［De］：前綴弱化 (R008/R012) 發 /dɪ/；第 2 音節［cem］：軟音 c (R007) + 重讀閉音節 (R001) 發 /sɛm/；第 3 音節［ber］：非重讀 R 控制 (R005/R008) 發 /bɚ/。音節合成推導 ➔ 標準音標 /dɪˈsɛm.bɚ/`;
    } else if (wLower === 'decide') {
      ipaStep = `第 1 音節［de］：前綴弱化 (R008/R012) 發 /dɪ/；第 2 音節［cide］：軟音 c (R007) + 魔術 e (R003) i 發長音 /saɪd/。音節合成推導 ➔ 標準音標 /dɪˈsaɪd/`;
    } else if (wLower === 'delicious') {
      ipaStep = `第 1 音節［de］：非重讀弱化 (R008) 發 /dɪ/；第 2 音節［li］：閉音節 (R001) 發 /lɪ/；第 3 音節［cious］：複合子音 ci (R006) 發 /ʃ/ + 後綴弱化 (R008) 發 /əs/。音節合成推導 ➔ 標準音標 /dɪˈlɪʃ.əs/`;
    } else if (wLower === 'dentist') {
      ipaStep = `第 1 音節［den］：閉音節 (R001) 發 /dɛn/；第 2 音節［tist］：閉音節 (R001) 發 /tɪst/。音節合成推導 ➔ 標準音標 /ˈdɛn.tɪst/`;
    } else if (wLower === 'department store') {
      ipaStep = `複合詞 (R015)，［de · part · ment］：[de] 弱化 /dɪ/；[part] R 控制 (R005) /pɑːrt/；[ment] 後綴弱化 (R008/R012) /mənt/ + ［store］：魔術 e + R 控制 (R003/R005) /stɔːr/。音節合成推導 ➔ 標準音標 /dɪˈpɑːrt.mənt stɔːr/`;
    } else if (wLower === 'dictionary') {
      ipaStep = `第 1 音節［dic］：閉音節 (R001) 發 /dɪk/；第 2 音節［tion］：複合子音 ti (R006) 發 /ʃ/ + 弱化 /ə/；第 3 音節［ar］：次重讀 R 控制 (R005) 發 /nɛr/；第 4 音節［y］：字尾非重讀 (R008) 發 /i/。音節合成推導 ➔ 標準音標 /ˈdɪk.ʃə.nɛr.i/`;
    } else if (wLower === 'different') {
      ipaStep = `第 1 音節［dif］：閉音節 (R001) 發 /dɪf/；第 2 音節［fer］：非重讀 R 控制 (R005/R008) 發 /ɚ/；第 3 音節［ent］：後綴弱化 (R008, R012) 發 /ənt/。音節合成推導 ➔ 標準音標 /ˈdɪf.ɚ.ənt/`;
    } else if (wLower === 'difficult') {
      ipaStep = `第 1 音節［dif］：閉音節 (R001) 發 /dɪf/；第 2 音節［fi］：非重讀弱化 (R008) 發 /ə/；第 3 音節［cult］：硬音 c (R007) + 閉音節弱化 (R008) 發 /kəlt/。音節合成推導 ➔ 標準音標 /ˈdɪf.ə.kəlt/`;
    } else if (wLower === 'dining room') {
      ipaStep = `複合名詞重音在前 (R015)，第 1 部分［din · ing］：開音節發 /daɪ/ + 後綴 (R012) /nɪŋ/；第 2 部分［room］：母音組合 oo (R004) 發 /ruːm/。音節合成推導 ➔ 標準音標 /ˈdaɪ.nɪŋ ruːm/`;
    } else if (wLower === 'doctor') {
      ipaStep = `第 1 音節［doc］：硬音 c (R007) + 閉音節 (R001) 發 /dɑːk/；第 2 音節［tor］：非重讀 R 控制弱化 (R005/R008) or 發 /tɚ/。音節合成推導 ➔ 標準音標 /ˈdɑːk.tɚ/`;
    } else if (wLower === 'dodge ball') {
      ipaStep = `複合名詞重音在前 (R015)，第 1 部分［dodge］：閉音節 + 軟音 g (R007) dge 發 /dɑːdʒ/；第 2 部分［ball］：特殊母音字族 (R011) -all 發 /bɔːl/。音節合成推導 ➔ 標準音標 /ˈdɑːdʒ bɔːl/`;
    } else if (wLower === 'dollar') {
      ipaStep = `第 1 音節［dol］：閉音節 (R001) 發 /dɑː/；第 2 音節［lar］：非重讀 R 控制弱化 (R005/R008) ar 發 /lɚ/。音節合成推導 ➔ 標準音標 /ˈdɑː.lɚ/`;
    } else if (wLower === 'dozen') {
      ipaStep = `第 1 音節［doz］：特殊例外 (R010) o 特例發短母音 /dʌz/；第 2 音節［en］：非重讀弱化 (R008) 發 /ən/。音節合成推導 ➔ 標準音標 /ˈdʌz.ən/`;
    } else if (wLower === 'drawer') {
      ipaStep = `第 1 音節［draw］：母音組合 aw (R004) 發 /drɔː/；第 2 音節［er］：非重讀 R 控制 (R005/R008) 發 /ɚ/。音節合成推導 ➔ 標準音標 /ˈdrɔː.ɚ/`;
    } else if (wLower === 'dumpling') {
      ipaStep = `第 1 音節［dump］：閉音節 (R001) 發 /dʌm/；第 2 音節［ling］：複合子音 ng (R006) + 後綴 (R012) 發 /plɪŋ/。音節合成推導 ➔ 標準音標 /ˈdʌm.plɪŋ/`;
    } else if (wLower === 'during') {
      ipaStep = `第 1 音節［dur］：R 控制母音 ur (R005) 發 /dʊr/；第 2 音節［ing］：後綴 (R012) 發 /ɪŋ/。音節合成推導 ➔ 標準音標 /ˈdʊr.ɪŋ/`;
    } else if (wLower === 'early') {
      ipaStep = `第 1 音節［ear］：特殊 R 控制例外 (R005/R010) ear 發 /ɝː/；第 2 音節［ly］：後綴 (R012) 發 /li/。音節合成推導 ➔ 標準音標 /ˈɝː.li/`;
    } else if (wLower === 'eighteen') {
      ipaStep = `第 1 音節［eigh］：靜音子音 (R016) eigh 發 /eɪ/；第 2 音節［teen］：母音組合 ee (R004) 發長音 /tiːn/。音節合成推導 ➔ 標準音標 /ˌeɪˈtiːn/`;
    } else if (wLower === 'eighty') {
      ipaStep = `第 1 音節［eigh］：靜音子音 (R016) eigh 發 /eɪ/；第 2 音節［ty］：字尾非重讀 (R008) 發 /ti/。音節合成推導 ➔ 標準音標 /ˈeɪ.ti/`;
    } else if (wLower === 'either') {
      ipaStep = `第 1 音節［ei］：母音組合 ei (R004) 發長音 /iː/；第 2 音節［ther］：複合子音 th (R006) 濁音 + 非重讀 R 控制 (R005/R008) 發 /ðɚ/。音節合成推導 ➔ 標準音標 /ˈiː.ðɚ/`;
    } else if (wLower === 'elementary school') {
      ipaStep = `複合名詞 (R015)，［el · e · men · ta · ry］：[el] 閉音節 /ɛl/；[e] 弱化 /ə/；[men] 重讀閉音節 /mɛn/；[ta] 弱化 /tə/；[ry] 字尾 /ri/ + ［school］複合子音 ch 發 /k/ + oo (R004) 發 /skuːl/。音節合成推導 ➔ 標準音標 /ˌɛl.əˈmɛn.tə.ri skuːl/`;
    } else if (wLower === 'elephant') {
      ipaStep = `第 1 音節［el］：閉音節 (R001) 發 /ɛl/；第 2 音節［e］：非重讀弱化 (R008) 發 /ə/；第 3 音節［phant］：複合子音 ph (R006) 發 /f/ + 弱化 (R008) 發 /fənt/。音節合成推導 ➔ 標準音標 /ˈɛl.ə.fənt/`;
    } else if (wLower === 'eleven') {
      ipaStep = `第 1 音節［e］：非重讀前綴弱化 (R008/R012) 發 /ɪ/；第 2 音節［lev］：重讀閉音節 (R001) 發 /lɛv/；第 3 音節［en］：非重讀弱化 (R008) 發 /ən/。音節合成推導 ➔ 標準音標 /ɪˈlɛv.ən/`;
    } else if (wLower === 'eleventh') {
      ipaStep = `第 1 音節［e］：非重讀前綴弱化 (R008/R012) 發 /ɪ/；第 2 音節［lev］：重讀閉音節 (R001) 發 /lɛv/；第 3 音節［enth］：非重讀弱化 (R008) + 複合子音 th (R006) 發 /ənθ/。音節合成推導 ➔ 標準音標 /ɪˈlɛv.ənθ/`;
    } else if (wLower === 'e-mail') {
      ipaStep = `複合詞 (R015)，第 1 部分［e］：字母名開音節發長音 /iː/；第 2 部分［mail］：母音組合 ai (R004) 發 /meɪl/。音節合成推導 ➔ 標準音標 /ˈiː.meɪl/`;
    } else if (wLower === 'engineer') {
      ipaStep = `第 1 音節［en］：閉音節 (R001) 發 /ɛn/；第 2 音節［gi］：軟音 g (R007) + 弱化 (R008) 發 /dʒɪ/；第 3 音節［neer］：主要重音 (R013) + 母音組合 eer (R004/R005) 發 /nɪr/。音節合成推導 ➔ 標準音標 /ˌɛn.dʒɪˈnɪr/`;
    } else if (wLower === 'english') {
      ipaStep = `第 1 音節［Eng］：特殊例外 (R010) E 特例發短母音 /ɪ/ + 複合子音 ng (R006) 發 /ŋɡ/；第 2 音節［lish］：閉音節 (R001) + 複合子音 sh (R006) 發 /lɪʃ/。音節合成推導 ➔ 標準音標 /ˈɪŋ.ɡlɪʃ/`;
    } else if (wLower === 'enjoy') {
      ipaStep = `第 1 音節［en］：前綴弱化 (R008/R012) 發 /ɪn/；第 2 音節［joy］：軟音 j (R007) + 母音組合 oy (R004) 發 /dʒɔɪ/。音節合成推導 ➔ 標準音標 /ɪnˈdʒɔɪ/`;
    } else if (wLower === 'enough') {
      ipaStep = `第 1 音節［e］：非重讀弱化 (R008) 發 /ɪ/；第 2 音節［nough］：特殊例外 (R010) ough 特例發短母音 /nʌf/ (gh 發 /f/)。音節合成推導 ➔ 標準音標 /ɪˈnʌf/`;
    } else if (wLower === 'envelope') {
      ipaStep = `第 1 音節［en］：閉音節 (R001) 發 /ɛn/；第 2 音節［ve］：非重讀弱化 (R008) 發 /və/；第 3 音節［lope］：魔術 e (R003) o 發長音 /loʊp/。音節合成推導 ➔ 標準音標 /ˈɛn.və.loʊp/`;
    } else if (wLower === 'eraser') {
      ipaStep = `第 1 音節［e］：非重讀前綴弱化 (R008) 發 /ɪ/；第 2 音節［ra］：開音節 (R002) a 發長音 /reɪ/；第 3 音節［ser］：非重讀 R 控制 (R005/R008) 發 /sɚ/。音節合成推導 ➔ 標準音標 /ɪˈreɪ.sɚ/`;
    } else if (wLower === 'even') {
      ipaStep = `第 1 音節［e］：開音節 (R002) 發長母音 /iː/；第 2 音節［ven］：非重讀弱化 (R008) 發 /vən/。音節合成推導 ➔ 標準音標 /ˈiː.vən/`;
    } else if (wLower === 'evening') {
      ipaStep = `第 1 音節［eve］：開音節 (R002) 發長音 /iːv/；第 2 音節［ning］：複合子音 ng (R006) + 後綴 (R012) 發 /nɪŋ/。音節合成推導 ➔ 標準音標 /ˈiːv.nɪŋ/`;
    } else if (wLower === 'ever') {
      ipaStep = `第 1 音節［ev］：閉音節 (R001) 發 /ɛv/；第 2 音節［er］：非重讀 R 控制 (R005/R008) 發 /ɚ/。音節合成推導 ➔ 標準音標 /ˈɛv.ɚ/`;
    } else if (wLower === 'every') {
      ipaStep = `第 1 音節［ev］：閉音節 (R001) 發 /ɛv/；第 2 音節［er］：音節弱化脫落；第 3 音節［y］：字尾非重讀 (R008) 發 /ri/。音節合成推導 ➔ 標準音標 /ˈɛv.ri/`;
    } else if (wLower === 'everyone') {
      ipaStep = `複合詞 (R015)，［ev · er · y］發 /ˈɛv.ri/ + ［one］特殊例外發 /wʌn/。音節合成推導 ➔ 標準音標 /ˈɛv.ri.wʌn/`;
    } else if (wLower === 'everything') {
      ipaStep = `複合詞 (R015)，［ev · er · y］發 /ˈɛv.ri/ + ［thing］複合子音 th + ng (R006) 發 /θɪŋ/。音節合成推導 ➔ 標準音標 /ˈɛv.ri.θɪŋ/`;
    } else if (wLower === 'example') {
      ipaStep = `第 1 音節［ex］：非重讀弱化 (R008) x 在母音前濁化發 /ɪɡz/；第 2 音節［am］：重讀閉音節 (R001) 發 /æm/；第 3 音節［ple］：成音節字尾 (R009) 發 /pəl/。音節合成推導 ➔ 標準音標 /ɪɡˈzæm.pəl/`;
    } else if (wLower === 'excellent') {
      ipaStep = `第 1 音節［ex］：閉音節發 /ɛk/；第 2 音節［cel］：軟音 c (R007) + 弱化 (R008) 發 /sə/；第 3 音節［lent］：後綴弱化 (R008, R012) 發 /lənt/。音節合成推導 ➔ 標準音標 /ˈɛk.sə.lənt/`;
    } else if (wLower === 'except') {
      ipaStep = `第 1 音節［ex］：前綴弱化 (R008/R012) 發 /ɪk/；第 2 音節［cept］：軟音 c (R007) + 重讀閉音節 (R001) 發 /sɛpt/。音節合成推導 ➔ 標準音標 /ɪkˈsɛpt/`;
    } else if (wLower === 'excited') {
      ipaStep = `第 1 音節［ex］：前綴弱化 (R008) 發 /ɪk/；第 2 音節［cit］：軟音 c (R007) + 開音節發 /saɪ/；第 3 音節［ed］：後綴弱化 (R008/R012) 發 /t̬ɪd/。音節合成推導 ➔ 標準音標 /ɪkˈsaɪ.t̬ɪd/`;
    } else if (wLower === 'exciting') {
      ipaStep = `第 1 音節［ex］：前綴弱化 (R008) 發 /ɪk/；第 2 音節［cit］：軟音 c (R007) + 開音節發 /saɪ/；第 3 音節［ing］：後綴 (R012) 發 /t̬ɪŋ/。音節合成推導 ➔ 標準音標 /ɪkˈsaɪ.t̬ɪŋ/`;
    } else if (wLower === 'excuse') {
      ipaStep = `第 1 音節［ex］：前綴弱化 (R008) 發 /ɪk/；第 2 音節［cuse］：硬音 c (R007) + 魔術 e (R003) u 發長音 /skjuːz/。音節合成推導 ➔ 標準音標 /ɪkˈskjuːz/`;
    } else if (wLower === 'exercise') {
      ipaStep = `第 1 音節［ex］：閉音節發 /ɛk/；第 2 音節［er］：軟音 c (R007) + 非重讀 R 控制 (R005/R008) 發 /sɚ/；第 3 音節［cise］：軟音 c (R007) + 魔術 e (R003) 發 /saɪz/。音節合成推導 ➔ 標準音標 /ˈɛk.sɚ.saɪz/`;
    } else if (wLower === 'expensive') {
      ipaStep = `第 1 音節［ex］：前綴弱化 (R008) 發 /ɪk/；第 2 音節［pen］：重讀閉音節 (R001) 發 /spɛn/；第 3 音節［sive］：後綴弱化 (R008, R012) 發 /sɪv/。音節合成推導 ➔ 標準音標 /ɪkˈspɛn.sɪv/`;
    } else if (wLower === 'experience') {
      ipaStep = `第 1 音節［ex］：前綴弱化 (R008) 發 /ɪk/；第 2 音節［pe］：重讀 R 控制 (R005) 發 /spɪr/；第 3 音節［ri］：非重讀弱化 (R008) 發 /i/；第 4 音節［ence］：後綴弱化 (R008) 發 /əns/。音節合成推導 ➔ 標準音標 /ɪkˈspɪr.i.əns/`;
    } else if (wLower === 'factory') {
      ipaStep = `第 1 音節［fac］：硬音 c (R007) + 閉音節 (R001) 發 /fæk/；第 2 音節［to］：非重讀 R 控制弱化 (R005/R008) 發 /tɚ/；第 3 音節［ry］：字尾非重讀 (R008) 發 /i/。音節合成推導 ➔ 標準音標 /ˈfæk.tɚ.i/`;
    } else if (wLower === 'family') {
      ipaStep = `第 1 音節［fam］：閉音節 (R001) 發 /fæm/；第 2 音節［i］：非重讀弱化 (R008) 發 /əl/；第 3 音節［ly］：字尾非重讀 (R008) 發 /i/。音節合成推導 ➔ 標準音標 /ˈfæm.əl.i/`;
    } else if (wLower === 'famous') {
      ipaStep = `第 1 音節［fa］：開音節 (R002) 發長母音 /feɪ/；第 2 音節［mous］：後綴弱化 (R008, R012) ous 發 /məs/。音節合成推導 ➔ 標準音標 /ˈfeɪ.məs/`;
    } else if (wLower === 'farmer') {
      ipaStep = `第 1 音節［farm］：R 控制母音 ar (R005) 發 /fɑːrm/；第 2 音節［er］：非重讀 R 控制 (R005/R008) 發 /mɚ/。音節合成推導 ➔ 標準音標 /ˈfɑːr.mɚ/`;
    } else if (wLower === 'father') {
      ipaStep = `第 1 音節［fa］：特殊例外 (R010) a 特例發長短母音 /fɑː/；第 2 音節［ther］：複合子音 th (R006) 濁音 + 非重讀 R 控制 (R005/R008) 發 /ðɚ/。音節合成推導 ➔ 標準音標 /ˈfɑː.ðɚ/`;
    } else if (wLower === 'favorite') {
      ipaStep = `第 1 音節［fa］：開音節 (R002) a 發長音 /feɪ/；第 2 音節［vor］：非重讀 R 控制 (R005/R008) 發 /vɚ/；第 3 音節［ite］：非重讀弱化 (R008) ite 發 /ɪt/。音節合成推導 ➔ 標準音標 /ˈfeɪ.vɚ.ɪt/`;
    } else if (wLower === 'february') {
      ipaStep = `第 1 音節［Feb］：閉音節 (R001) 發 /fɛb/；第 2 音節［ru］：開音節 (R002) u 發長音 /ruː/；第 3 音節［ar］：次重讀 R 控制 (R005) 發 /ɛr/；第 4 音節［y］：字尾非重讀 (R008) 發 /i/。音節合成推導 ➔ 標準音標 /ˈfɛb.ruː.ɛr.i/`;
    } else if (wLower === 'festival') {
      ipaStep = `第 1 音節［fes］：閉音節 (R001) 發 /fɛs/；第 2 音節［ti］：非重讀弱化 (R008) 發 /tə/；第 3 音節［val］：成音節弱化 (R008) 發 /vəl/。音節合成推導 ➔ 標準音標 /ˈfɛs.tə.vəl/`;
    } else if (wLower === 'fever') {
      ipaStep = `第 1 音節［fe］：開音節 (R002) e 發長音 /fiː/；第 2 音節［ver］：非重讀 R 控制 (R005/R008) 發 /vɚ/。音節合成推導 ➔ 標準音標 /ˈfiː.vɚ/`;
    } else if (wLower === 'fifteen') {
      ipaStep = `第 1 音節［fif］：閉音節 (R001) 發 /fɪf/；第 2 音節［teen］：母音組合 ee (R004) 發長音 /tiːn/。音節合成推導 ➔ 標準音標 /ˌfɪfˈtiːn/`;
    } else if (wLower === 'fifteenth') {
      ipaStep = `第 1 音節［fif］：閉音節 (R001) 發 /fɪf/；第 2 音節［teenth］：母音組合 ee (R004) + 複合子音 th (R006) 發 /tiːnθ/。音節合成推導 ➔ 標準音標 /ˌfɪfˈtiːnθ/`;
    } else if (wLower === 'fifty') {
      ipaStep = `第 1 音節［fif］：閉音節 (R001) 發 /fɪf/；第 2 音節［ty］：字尾非重讀 (R008) 發 /ti/。音節合成推導 ➔ 標準音標 /ˈfɪf.ti/`;
    } else if (wLower === 'finally') {
      ipaStep = `第 1 音節［fi］：開音節 (R002) i 發長音 /faɪ/；第 2 音節［nal］：非重讀弱化 (R008) 發 /nəl/；第 3 音節［ly］：後綴 (R012) 發 /i/。音節合成推導 ➔ 標準音標 /ˈfaɪ.nəl.i/`;
    } else if (wLower === 'finger') {
      ipaStep = `第 1 音節［fin］：複合子音 ng (R006) 發 /fɪŋɡ/；第 2 音節［ger］：非重讀 R 控制 (R005/R008) 發 /ɚ/。音節合成推導 ➔ 標準音標 /ˈfɪŋ.ɡɚ/`;
    } else if (wLower === 'finish') {
      ipaStep = `第 1 音節［fin］：閉音節 (R001) 發 /fɪn/；第 2 音節［ish］：複合子音 sh (R006) + 後綴 (R012) 發 /ɪʃ/。音節合成推導 ➔ 標準音標 /ˈfɪn.ɪʃ/`;
    } else if (wLower === 'fisherman') {
      ipaStep = `複合詞 (R015)，［fish］閉音節 + sh (R006) /fɪʃ/；［er］非重讀 R 控制 (R005/R008) /ɚ/；［man］次重音 (R015) /mæn/。音節合成推導 ➔ 標準音標 /ˈfɪʃ.ɚ.mæn/`;
    } else if (wLower === 'flower') {
      ipaStep = `第 1 音節［flow］：母音組合 ow (R004) 發 /flaʊ/；第 2 音節［er］：非重讀 R 控制 (R005/R008) 發 /ɚ/。音節合成推導 ➔ 標準音標 /ˈflaʊ.ɚ/`;
    } else if (wLower === 'follow') {
      ipaStep = `第 1 音節［fol］：閉音節 (R001) 發 /fɑː/；第 2 音節［low］：母音組合 ow (R004) 發雙母音 /loʊ/。音節合成推導 ➔ 標準音標 /ˈfɑː.loʊ/`;
    } else if (wLower === 'foreign') {
      ipaStep = `第 1 音節［for］：R 控制母音 (R005) 發 /fɔːr/；第 2 音節［eign］：靜音子音 (R016) + 弱化 (R008) g 靜音發 /ən/。音節合成推導 ➔ 標準音標 /ˈfɔːr.ən/`;
    } else if (wLower === 'foreigner') {
      ipaStep = `第 1 音節［for］：R 控制母音 (R005) 發 /fɔːr/；第 2 音節［eign］：靜音子音 (R016) g 靜音發 /ə/；第 3 音節［er］：非重讀 R 控制 (R005/R008) 發 /nɚ/。音節合成推導 ➔ 標準音標 /ˈfɔːr.ə.nɚ/`;
    } else if (wLower === 'forget') {
      ipaStep = `第 1 音節［for］：前綴非重讀 R 控制弱化 (R005/R008) 發 /fɚ/；第 2 音節［get］：重讀閉音節 (R001) 發 /ɡɛt/。音節合成推導 ➔ 標準音標 /fɚˈɡɛt/`;
    } else if (wLower === 'forty') {
      ipaStep = `第 1 音節［for］：R 控制母音 (R005) 發 /fɔːr/；第 2 音節［ty］：字尾非重讀 (R008) 發 /ti/。音節合成推導 ➔ 標準音標 /ˈfɔːr.ti/`;
    } else if (wLower === 'fourteen') {
      ipaStep = `第 1 音節［four］：母音組合 our (R004/R005) 發 /fɔːr/；第 2 音節［teen］：母音組合 ee (R004) 發長音 /tiːn/。音節合成推導 ➔ 標準音標 /ˌfɔːrˈtiːn/`;
    } else if (wLower === 'fourteenth') {
      ipaStep = `第 1 音節［four］：母音組合 our (R004/R005) 發 /fɔːr/；第 2 音節［teenth］：母音組合 ee (R004) + 複合子音 th (R006) 發 /tiːnθ/。音節合成推導 ➔ 標準音標 /ˌfɔːrˈtiːnθ/`;
    } else if (wLower === 'french fries') {
      ipaStep = `複合名詞 (R015)，［French］閉音節 + ch (R006) 發 /frɛntʃ/；［fries］母音組合 ie (R004) 發 /fraɪ/ + s 濁化 /z/。音節合成推導 ➔ 標準音標 /ˌfrɛntʃ ˈfraɪz/`;
    } else if (wLower === 'friday') {
      ipaStep = `第 1 音節［Fri］：開音節 (R002) i 發長音 /fraɪ/；第 2 音節［day］：母音組合 ay (R004) 發 /deɪ/。複合名詞重音在前 (R015) ➔ 標準音標 /ˈfraɪ.deɪ/`;
    } else if (wLower === 'friendly') {
      ipaStep = `第 1 音節［friend］：特殊例外 (R010) ie 特例發短母音 /frɛnd/；第 2 音節［ly］：後綴 (R012) 發 /li/。音節合成推導 ➔ 標準音標 /ˈfrɛnd.li/`;
    } else if (wLower === 'frisbee') {
      ipaStep = `第 1 音節［fris］：閉音節 (R001) s 濁化發 /frɪz/；第 2 音節［bee］：母音組合 ee (R004) 發長音 /bi/。音節合成推導 ➔ 標準音標 /ˈfrɪz.bi/`;
    } else if (wLower === 'funny') {
      ipaStep = `第 1 音節［fun］：閉音節 (R001) u 發短音 /fʌn/；第 2 音節［ny］：字尾非重讀 (R008) 發 /i/。音節合成推導 ➔ 標準音標 /ˈfʌn.i/`;
    } else {
      // 多音節詞：音節逐步推導
      const sylDerivations = syllables.map((syl, idx) => {
      const sylL = syl.toLowerCase();
      const isPrimary = (idx === primaryStressIdx);
      const posStr = `第 ${idx + 1} 音節［${syl}］`;

      if (idx === 0 && !isPrimary && ['a', 'an', 'be', 'de', 're', 'ex', 'in', 'im', 'pro', 'sub', 'ad', 'ap', 'as', 'at', 'al', 'dis', 'un'].includes(sylL)) {
        return `${posStr}：前綴弱化 (R012) 弱化發 /${sylL === 'be' ? 'bɪ' : sylL === 're' ? 'rɪ' : sylL === 'de' ? 'dɪ' : 'ə'}/`;
      }
      if (sylL.endsWith('ble') || sylL.endsWith('tle') || sylL.endsWith('ple') || sylL.endsWith('dle') || sylL.endsWith('gle')) {
        return `${posStr}：成音節字尾 (R009) 發 /${sylL.replace(/le$/, 'əl')}/`;
      }
      if (!isPrimary && !isCompound) {
        if (/[aeiou]r$/i.test(sylL)) {
          return `${posStr}：非重讀 R 控制 (R005/R008) 弱化發 /ɚ/`;
        }
        if (sylL === 'y' || sylL.endsWith('y')) {
          return `${posStr}：字尾非重讀 (R008) 發 /i/`;
        }
        return `${posStr}：非重讀弱化 (R008) 發輕母音 /ə/ 或 /ɪ/`;
      }
      if (isCompound && idx === 0) {
        if (/[aeiou]{1,2}r/i.test(sylL)) {
          return `${posStr}：複合名詞主重音 (R015) + R控制母音 (R005) 發捲舌音`;
        }
        if (/.[aeiouy].*e$/i.test(sylL)) {
          return `${posStr}：複合名詞主重音 (R015) + 魔術 e (R003) 發長音`;
        }
        if (/ee|ea|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei/i.test(sylL)) {
          return `${posStr}：複合名詞主重音 (R015) + 母音組合 (R004) 發長音`;
        }
        return `${posStr}：複合名詞主重音 (R015) 保留主母音`;
      }
      if (isException && (wLower.includes('come') || wLower.includes('bove') || wLower.includes('gain') || wLower.includes('head') || wLower.includes('read') || wLower.includes('any') || wLower.includes('said'))) {
        return `${posStr}：特殊例外 (R010) 發特例母音`;
      }
      if (/all$/i.test(sylL) || ['fall', 'ball', 'call', 'hall', 'mall', 'small', 'tall', 'wall', 'all', 'almost', 'also', 'always'].includes(wLower)) {
        return `${posStr}：特殊字族 (R011) -all 發 /ɔːl/`;
      }
      if (/ind$/i.test(sylL) || /ild$/i.test(sylL) || /old$/i.test(sylL) || /ight$/i.test(sylL) || ['most', 'post', 'host', 'ghost'].includes(sylL)) {
        return `${posStr}：特殊母音字族 (R011) 相連子音前發長母音`;
      }
      if (/ee|ea|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei/i.test(sylL)) {
        return `${posStr}：母音組合 (R004) 發長音/雙母音`;
      }
      if (/[aeiou]{1,2}r/i.test(sylL)) {
        return `${posStr}：R 控制母音 (R005) 發捲舌音`;
      }
      if (/.[aeiouy].*e$/i.test(sylL) && !sylL.endsWith('le')) {
        return `${posStr}：魔術 e (R003) 發長母音`;
      }
      if (/^[b-df-hj-np-tv-z]*[aeiouy]$/i.test(sylL)) {
        return `${posStr}：開音節 (R002) 發長母音`;
      }
      return `${posStr}：閉音節 (R001) 發短母音`;
    });

      ipaStep = `${sylDerivations.join('；')}。音節合成推導 ➔ 標準音標 ${ipa}`;
    }
  }

  return {
    id: w.id,
    word: w.word,
    chinese: w.chinese,
    syllable: syllables,
    syllableText: header,
    syllableDetail: {
      header,
      vowelCore: vowelCoreText,
      structureRule,
      indivisibleRule,
    },
    ipa: w.ipa,
    batch,
    isException,
    exceptionCategory: isException ? exceptionCategory : undefined,
    exceptionReason: isException ? exceptionReason : undefined,
    steps: {
      syllableStep,
      patternStep,
      ruleStep: uniqueRules,
      ipaStep,
      derivations: buildWordDerivation(w),
    },
  };
}

const allWordsProcessed: BatchWord[] = words.map(processWord);

const codeContent = `// Auto-generated Batch Words Data
export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】';
  reason: string;
}

export interface BatchWord {
  id: number;
  word: string;
  chinese: string;
  syllable: string[];
  syllableText: string;
  syllableDetail: {
    header: string;
    vowelCore: string;
    structureRule: string;
    indivisibleRule: string;
  };
  ipa: string;
  batch: number;
  isException?: boolean;
  exceptionCategory?: string;
  exceptionReason?: string;
  steps: {
    syllableStep: string;
    patternStep: string;
    ruleStep: string[];
    ipaStep: string;
    derivations?: DerivationItem[];
  };
}

export const allBatchData: BatchWord[] = ${JSON.stringify(allWordsProcessed, null, 2)};
export const batch01Data: BatchWord[] = allBatchData.filter(w => w.batch === 1);
export const batch02Data: BatchWord[] = allBatchData.filter(w => w.batch === 2);
`;

fs.mkdirSync(path.join(process.cwd(), 'lib'), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), 'lib', 'batch01Data.ts'), codeContent, 'utf8');
console.log(`Generated lib/batch01Data.ts with total ${allWordsProcessed.length} words across ${Math.ceil(allWordsProcessed.length / 100)} batches!`);
