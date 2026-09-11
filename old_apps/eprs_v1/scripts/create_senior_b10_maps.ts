import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';

// Generate Batch 10 Derivations Map
const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
const b10Source = seniorL1.words.filter((w: any) => w.id >= 901 && w.id <= 1000);

const mapAll = new Map<string, BatchWord>();
allBatchData.forEach(w => {
  const bare = w.word.toLowerCase().replace(/\(.*?\)/g, '').replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int|art)\..*$/i, '').trim();
  mapAll.set(bare, w);
  mapAll.set(w.word.toLowerCase().trim(), w);
});

// Custom additions for 6 words not in MOE 1200
const SPECIAL_BATCH10_DERIVATIONS: Record<number, { syllable: string[]; ipa: string; chinese: string; pos: string; derivations: DerivationItem[] }> = {
  901: {
    syllable: ['toi', 'let'],
    ipa: '/ˈtɔɪ.lɪt/',
    chinese: '洗手間, 廁所, 馬桶',
    pos: 'n.',
    derivations: [
      {
        syllable: '第 1 音節［toi］',
        rule: '母音組合 oi (R004)',
        status: '【適用】',
        reason: '母音組合 oi 常規發雙母音 /ɔɪ/'
      },
      {
        syllable: '第 2 音節［let］',
        rule: '閉音節 (R001) / 非重讀弱化 (R008)',
        status: '【適用】',
        reason: '閉音節子音 t 封閉，非重音音節發短母音 /ɪ/'
      }
    ]
  },
  906: {
    syllable: ['tool'],
    ipa: '/tuːl/',
    chinese: '工具, 器具',
    pos: 'n.',
    derivations: [
      {
        syllable: '單音節［tool］',
        rule: '母音組合 oo (R004)',
        status: '【適用】',
        reason: '字母組合 oo 常規發長母音 /uː/'
      }
    ]
  },
  909: {
    syllable: ['top', 'ic'],
    ipa: '/ˈtɑː.pɪk/',
    chinese: '話題, 主題, 題目',
    pos: 'n.',
    derivations: [
      {
        syllable: '第 1 音節［top］',
        rule: '閉音節 (R001)',
        status: '【適用】',
        reason: '單一母音 o 在重讀閉音節發美式常規短母音 /ɑː/'
      },
      {
        syllable: '第 2 音節［ic］',
        rule: '閉音節 (R001) / -ic 字尾 (R008)',
        status: '【適用】',
        reason: '非重讀閉音節發短母音 /ɪ/，字尾 c 發硬音 /k/'
      }
    ]
  },
  941: {
    syllable: ['vis', 'i', 'tor'],
    ipa: '/ˈvɪz.ə.t̬ɚ/',
    chinese: '訪客, 參觀者',
    pos: 'n.',
    derivations: [
      {
        syllable: '第 1 音節［vis］',
        rule: '閉音節 (R001) + 母音間 s 發 /z/ (R006)',
        status: '【適用】',
        reason: '重音閉音節母音 i 發短母音 /ɪ/，子音 s 夾在母音間發濁音 /z/'
      },
      {
        syllable: '第 2 音節［i］',
        rule: '非重讀母音弱化 (R008)',
        status: '【適用】',
        reason: '非重音單音節弱化為輕母音 Schwa /ə/'
      },
      {
        syllable: '第 3 音節［tor］',
        rule: 'R 控制母音 (R005) + 非重讀 (R008)',
        status: '【適用】',
        reason: '字尾 -or 於非重讀音節常規弱化發捲舌音 /ɚ/'
      }
    ]
  },
  968: {
    syllable: ['while'],
    ipa: '/waɪl/',
    chinese: '當...的時候; 一段時間',
    pos: 'conj./n./v.',
    derivations: [
      {
        syllable: '單音節［while］',
        rule: '複合子音 wh- (R006) + 魔術 e (R003)',
        status: '【適用】',
        reason: 'wh- 發子音 /w/，魔術 e 結構促使主要母音 i 發長母音 /aɪ/，字尾 e 靜音'
      }
    ]
  },
  973: {
    syllable: ['wide'],
    ipa: '/waɪd/',
    chinese: '寬廣的, 寬闊的',
    pos: 'adj./adv.',
    derivations: [
      {
        syllable: '單音節［wide］',
        rule: '魔術 e (R003)',
        status: '【適用】',
        reason: '魔術 e 結構使單母音 i 發長雙母音 /aɪ/，字尾 e 保持靜音'
      }
    ]
  }
};

const batch10DerivationsMap: Record<number, DerivationItem[]> = {};

b10Source.forEach((w: any) => {
  if (SPECIAL_BATCH10_DERIVATIONS[w.id]) {
    batch10DerivationsMap[w.id] = SPECIAL_BATCH10_DERIVATIONS[w.id].derivations;
    return;
  }

  let cleanWord = w.word.replace(/\s+(?:n|v|adj|adv|prep|conj|pron|aux|int|art)\..*$/i, '').trim();
  if (!w.pos && w.word.includes(' ')) {
    cleanWord = w.word.split(' ')[0].trim();
  }
  let lookupKey = cleanWord.toLowerCase().replace(/\(.*?\)/g, '').trim();
  if (lookupKey.includes('/')) lookupKey = lookupKey.split('/')[0].trim();

  const m = mapAll.get(lookupKey) || mapAll.get(cleanWord.toLowerCase().trim());
  if (m && m.steps?.derivations && m.steps.derivations.length > 0) {
    batch10DerivationsMap[w.id] = m.steps.derivations;
  } else {
    // Fallback derivation
    batch10DerivationsMap[w.id] = [
      {
        syllable: `單詞［${cleanWord}］`,
        rule: '自然發音常規音節規則 (R001-R008)',
        status: '【適用】',
        reason: '依母音字母結構及音節重音音變規則推導'
      }
    ];
  }
});

const content = `import { DerivationItem } from '../lib/batch01Data';

export const SPECIAL_BATCH10_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; pos?: string; derivations?: DerivationItem[] }> = ${JSON.stringify(SPECIAL_BATCH10_DERIVATIONS, null, 2)};

export const batch10DerivationsMap: Record<number, DerivationItem[]> = ${JSON.stringify(batch10DerivationsMap, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'batch10_derivations_map.ts'), content, 'utf8');
console.log('[PASS] Generated scripts/batch10_derivations_map.ts');
