import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { DerivationItem } from '../lib/batch01Data';
import { batch2DerivationsMap } from './batch2_derivations_map';
import { batch3DerivationsMap } from './batch3_derivations_map';
import { batch4DerivationsMap } from './batch4_derivations_map';
import { batch5DerivationsMap } from './batch5_derivations_map';
import { batch6DerivationsMap } from './batch6_derivations_map';

// Generate crystal-clear, non-redundant derivations (音節 + 規則 + 適用與否 + 判斷原因) for words 1-100
export function buildWordDerivation(w: any): DerivationItem[] {
  const word = w.word.toLowerCase();
  const id = w.id;
  const syls = w.syllable || [w.word];

  // Specific exceptions and high-frequency patterns for words 1 to 100
  const customMap: Record<number, DerivationItem[]> = {
    1: [
      { syllable: '第 1 音節［a］', rule: '開音節規則 (R002) → 句中弱化 (R008)', status: '【適用】', reason: '單一母音字母 a 於句中非重讀時弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［an］', rule: '閉音節規則 (R001) → 句中弱化 (R008)', status: '【適用】', reason: '子音封閉音節，句中非重讀時母音 a 弱化發 /ən/' }
    ],
    2: [
      { syllable: '第 1 音節［a］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀不定冠詞母音 a 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［few］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ew 雙母音字母組合於重音節常規發長母音 /fjuː/' }
    ],
    3: [
      { syllable: '第 1 音節［a］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀不定冠詞母音 a 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［lit］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 t 封閉且為重音節，母音 i 常規發短母音 /ˈlɪt/' },
      { syllable: '第 3 音節［tle］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，不發音 e 弱化發 /əl/' }
    ],
    4: [
      { syllable: '第 1 音節［a］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀不定冠詞母音 a 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［lot］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉且為重音節，母音 o 常規發短母音 /lɑːt/' }
    ],
    5: [
      { syllable: '第 1 音節［a］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音結尾且為重音節，字母 a 常規發字母長母音 /ˈeɪ/' },
      { syllable: '第 2 音節［ble］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，發 /bəl/' }
    ],
    6: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［bout］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ou 雙母音字母組合於重音節常規發雙母音 /baʊt/' }
    ],
    7: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［bove］', rule: '魔術 e 規則 (R003)', status: '【不適用 (例外轉移)】', reason: '字尾雖符合 v_e 結構，但受歷史演變影響母音不發長音 /oʊ/，特例發短母音 /ʌ/ (R010)' }
    ],
    8: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［broad］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'oa 組合常規發長音 /oʊ/ (如 road)，此處特例發長母音 /ɔː/ (R010)' }
    ],
    9: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［cross］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 cr- 開頭且以雙子音 ss 封閉，母音 o 發短母音 /krɔːs/' }
    ],
    10: [
      { syllable: '第 1 音節［ac］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 c 封閉且為重音節，母音 a 常規發短母音 /ˈæk/' },
      { syllable: '第 2 音節［tress］', rule: '後綴弱化規則 (R008/R012)', status: '【適用】', reason: '-ess 女性後綴非重讀，母音 e 弱化發 /trəs/' }
    ],
    11: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［fraid］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ai 雙母音字母組合於重音節常規發字母長母音 /freɪd/' }
    ],
    12: [
      { syllable: '第 1 音節［af］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 f 封閉且為重音節，母音 a 常規發短母音 /ˈæf/' },
      { syllable: '第 2 音節［ter］', rule: '非重讀 R 控制弱化 (R005/R008)', status: '【適用】', reason: '-er 字尾非重讀，發捲舌輕母音 /tɚ/' }
    ],
    13: [
      { syllable: '第 1 音節［af］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '次重讀閉音節，母音 a 常規發短母音 /ˌæf/' },
      { syllable: '第 2 音節［ter］', rule: '非重讀 R 控制弱化 (R005/R008)', status: '【適用】', reason: '-er 字尾非重讀，發捲舌輕母音 /tɚ/' },
      { syllable: '第 3 音節［noon］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'oo 雙母音組合於主重音節常規發長母音 /ˈnuːn/' }
    ],
    14: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［gain］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ai 組合常規發長音 /eɪ/，美式習慣發音特例發短母音 /ɡɛn/ (R010)' }
    ],
    15: [
      { syllable: '單音節［age］', rule: '魔術 e 規則 (R003) + 軟音 g (R007)', status: '【適用】', reason: 'a_e 使母音 a 發長母音 /eɪ/；g 接 e 發軟音 /dʒ/，字尾 e 不發音' }
    ],
    16: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［go］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音結尾且為重音節，母音字母 o 發長母音 /ɡoʊ/' }
    ],
    17: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［gree］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ee 雙母音字母組合於重音節常規發長母音 /ɡriː/' }
    ],
    18: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［head］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ea 組合常規發長音 /iː/，此處特例發短母音 /hɛd/ (R010)' }
    ],
    19: [
      { syllable: '單音節［air］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'air 字母組合於單音節中常規發捲舌音 /ɛr/' }
    ],
    20: [
      { syllable: '第 1 音節［air］', rule: 'R 控制母音 (R005) + 複合名詞重音 (R015)', status: '【適用】', reason: '複合名詞主重音在前音節，air 發捲舌音 /ˈɛr/' },
      { syllable: '第 2 音節［plane］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構促使母音 a 發字母長母音 /pleɪn/' }
    ],
    21: [
      { syllable: '第 1 音節［air］', rule: 'R 控制母音 (R005) + 複合名詞重音 (R015)', status: '【適用】', reason: '複合名詞主重音在前音節，air 發捲舌音 /ˈɛr/' },
      { syllable: '第 2 音節［port］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'or 字母組合常規發捲舌長母音 /pɔːrt/' }
    ],
    22: [
      { syllable: '單音節［all］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-all 字族受雙子音 ll 牽引，母音 a 常規發圓唇音 /ɔːl/' }
    ],
    23: [
      { syllable: '第 1 音節［al］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: 'al- 前綴中母音 a 發圓唇長音 /ˈɔːl/' },
      { syllable: '第 2 音節［most］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-ost 字族中母音 o 常規發雙母音 /moʊst/' }
    ],
    24: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［long］', rule: '複合子音 ng (R006) + 閉音節 (R001)', status: '【適用】', reason: 'ng 鼻音組合封閉，母音 o 發短母音 /lɔːŋ/' }
    ],
    25: [
      { syllable: '第 1 音節［al］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: 'al- 前綴發圓唇長音 /ɔːl/' },
      { syllable: '第 2 音節［read］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ea 組合常規發長音 /iː/，此處特例發短母音 /rɛd/ (R010)' },
      { syllable: '第 3 音節［y］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '多音節非重讀字尾 y 常規發長母音 /i/' }
    ],
    26: [
      { syllable: '第 1 音節［al］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: 'al- 前綴中母音 a 發圓唇長音 /ˈɔːl/' },
      { syllable: '第 2 音節［so］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音結尾音節，母音字母 o 發長母音 /soʊ/' }
    ],
    27: [
      { syllable: '第 1 音節［al］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: 'al- 前綴中母音 a 發圓唇長音 /ˈɔːl/' },
      { syllable: '第 2 音節［ways］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ay 母音組合常規發長母音 /weɪz/' }
    ],
    28: [
      { syllable: '第 1 音節［a］', rule: '字母縮寫讀音規則 (R013)', status: '【適用】', reason: '縮寫首字母讀出原本字母長母音 /ˌeɪ/' },
      { syllable: '第 2 音節［m］', rule: '字母縮寫讀音規則 (R013)', status: '【適用】', reason: '縮寫末字母讀出原本字母名音 /ˈɛm/' }
    ],
    29: [
      { syllable: '第 1 音節［A］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀首音節，母音 A 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［mer］', rule: 'R 控制母音 (R005)', status: '【適用】', reason: '重音節中 er 受牽引發短母音 /ˈmɛr/' },
      { syllable: '第 3 音節［i］', rule: '非重讀母音弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 i 發輕音 /ɪ/' },
      { syllable: '第 4 音節［ca］', rule: '非重讀弱化 (R008) + 硬音 c (R007)', status: '【適用】', reason: 'c 在 a 前發硬音 /k/，字尾 a 弱化發 /kə/' }
    ],
    30: [
      { syllable: '第 1 音節［A］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀首音節，母音 A 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［mer］', rule: 'R 控制母音 (R005)', status: '【適用】', reason: '重音節中 er 受牽引發短母音 /ˈmɛr/' },
      { syllable: '第 3 音節［i］', rule: '非重讀母音弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 i 發輕音 /ɪ/' },
      { syllable: '第 4 音節［can］', rule: '後綴弱化規則 (R008/R012)', status: '【適用】', reason: '-an 後綴非重讀弱化發 /kən/' }
    ],
    31: [
      { syllable: '單音節［and］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -nd 封閉音節，單一母音字母 a 發短母音 /ænd/' }
    ],
    32: [
      { syllable: '第 1 音節［an］', rule: '複合子音 ng (R006) + 閉音節 (R001)', status: '【適用】', reason: 'ng 鼻音組合，母音 a 發短母音 /ˈæŋɡ/' },
      { syllable: '第 2 音節［gry］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '多音節字尾字母 y 於非重讀音節發長母音 /ri/' }
    ],
    33: [
      { syllable: '第 1 音節［an］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為重音節，母音 a 發短母音 /ˈæn/' },
      { syllable: '第 2 音節［i］', rule: '非重讀母音弱化 (R008)', status: '【適用】', reason: '非重讀單音節母音 i 弱化發輕母音 /ə/' },
      { syllable: '第 3 音節［mal］', rule: '成音節弱化規則 (R008/R009)', status: '【適用】', reason: '-al 字尾弱化發成音節 /məl/' }
    ],
    34: [
      { syllable: '第 1 音節［an］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'an- 前綴非重讀弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［oth］', rule: '複合子音 th (R006) + 母音特例 (R010)', status: '【不適用 (例外轉移)】', reason: 'th 前母音 o 受歷史演變影響，不發 /ɑː/ 改發短央母音 /ˈnʌð/ (R010)' },
      { syllable: '第 3 音節［er］', rule: '非重讀 R 控制弱化 (R005/R008)', status: '【適用】', reason: '-er 字尾非重讀發捲舌輕母音 /ɚ/' }
    ],
    35: [
      { syllable: '第 1 音節［an］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音封閉且為重音節，母音 a 發短母音 /ˈæn/' },
      { syllable: '第 2 音節［swer］', rule: '靜音子音規則 (R016) + R弱化 (R005)', status: '【不適用 (例外轉移)】', reason: '子音字母 w 於歷史演變中靜音不發音，僅發 /sɚ/' }
    ],
    36: [
      { syllable: '單音節［ant］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -nt 封閉音節，母音字母 a 發短母音 /ænt/' }
    ],
    37: [
      { syllable: '第 1 音節［an］', rule: '閉音節規則 (R001)', status: '【不適用 (例外轉移)】', reason: '閉音節 a 常規應發 /æ/ (如 can)，此處高頻特例發短母音 /ˈɛn/ (R010)' },
      { syllable: '第 2 音節［y］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '多音節字尾 y 非重讀常規發長母音 /i/' }
    ],
    38: [
      { syllable: '第 1 音節［an］', rule: '閉音節規則 (R001)', status: '【不適用 (例外轉移)】', reason: '閉音節 a 常規應發 /æ/，此處高頻特例發短母音 /ˈɛn/ (R010)' },
      { syllable: '第 2 音節［y］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '非重讀字尾 y 發長母音 /i/' },
      { syllable: '第 3 音節［one］', rule: '複合詞次重音 (R015) + 特例發音 (R010)', status: '【不適用 (例外轉移)】', reason: 'one 屬於歷史高頻特例發音，首音加 /w/ 發 /wʌn/' }
    ],
    39: [
      { syllable: '第 1 音節［an］', rule: '閉音節規則 (R001)', status: '【不適用 (例外轉移)】', reason: '閉音節 a 常規應發 /æ/，此處高頻特例發短母音 /ˈɛn/ (R010)' },
      { syllable: '第 2 音節［y］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '非重讀字尾 y 發長母音 /i/' },
      { syllable: '第 3 音節［thing］', rule: '複合子音 th + ng (R006) + 閉音節 (R001)', status: '【適用】', reason: 'th 清音 + ng 鼻音封閉，母音 i 發短音 /θɪŋ/' }
    ],
    40: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［part］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於重音節常規發捲舌長母音 /ˈpɑːrt/' },
      { syllable: '第 3 音節［ment］', rule: '後綴弱化規則 (R008/R012)', status: '【適用】', reason: '-ment 後綴非重讀，母音 e 弱化發 /mənt/' }
    ],
    41: [
      { syllable: '第 1 音節［ap］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'ap- 非重讀前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［pear］', rule: '母音組合 ear (R004/R005)', status: '【適用】', reason: 'ear 組合於重音節常規發長母音 /pɪr/' }
    ],
    42: [
      { syllable: '第 1 音節［ap］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 p 封閉且為重音節，母音字母 a 發短母音 /ˈæp/' },
      { syllable: '第 2 音節［ple］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，發 /əl/' }
    ],
    43: [
      { syllable: '第 1 音節［A］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音結尾且為重音節，母音字母 A 發字母長母音 /ˈeɪ/' },
      { syllable: '第 2 音節［pril］', rule: '非重讀成音節弱化 (R008/R009)', status: '【適用】', reason: '-il 非重讀弱化發成音節 /prəl/' }
    ],
    44: [
      { syllable: '單音節［arm］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 字母組合常規發捲舌長母音 /ɑːrm/' }
    ],
    45: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［round］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ou 雙母音組合於重音節常規發雙母音 /raʊnd/' }
    ],
    46: [
      { syllable: '第 1 音節［ar］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'ar- 非重讀前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［rive］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構促使母音 i 發長母音 /raɪv/，字尾 e 不發音' }
    ],
    47: [
      { syllable: '單音節［art］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 字母組合常規發捲舌長母音 /ɑːrt/' }
    ],
    48: [
      { syllable: '單音節［as］', rule: '閉音節 (R001) + s 濁化 (R014)', status: '【適用】', reason: '單一母音 a 發短母音 /æ/，字尾 s 於母音後常規濁化發 /z/' }
    ],
    49: [
      { syllable: '單音節［ask］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -sk 封閉音節，母音字母 a 常規發短母音 /æsk/' }
    ],
    50: [
      { syllable: '單音節［at］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，母音字母 a 常規發短母音 /æt/' }
    ],
    51: [
      { syllable: '第 1 音節［Au］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'au 雙母音組合於重音節常規發圓唇長母音 /ˈɔː/' },
      { syllable: '第 2 音節［gust］', rule: '非重讀弱化 (R008) + 硬音 g (R007)', status: '【適用】', reason: 'g 在 u 前發硬音 /ɡ/，非重讀母音 u 弱化發 /ɡəst/' }
    ],
    52: [
      { syllable: '單音節［aunt］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'au 組合常規發 /ɔː/ (如 August)，此處美式習慣特例發短母音 /ænt/ (R010)' }
    ],
    53: [
      { syllable: '第 1 音節［au］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'au 雙母音組合於重音節常規發圓唇長母音 /ˈɔː/' },
      { syllable: '第 2 音節［tumn］', rule: '靜音子音規則 (R016) + 弱化 (R008)', status: '【不適用 (例外轉移)】', reason: '字尾 -mn 組合中子音 n 靜音不發音，非重讀母音 u 弱化發 /təm/' }
    ],
    54: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［way］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ay 雙母音組合於重音節常規發長母音 /weɪ/' }
    ],
    55: [
      { syllable: '第 1 音節［ba］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音結尾且為重音節，母音字母 a 發長母音 /ˈbeɪ/' },
      { syllable: '第 2 音節［by］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '多音節非重讀字尾 y 常規發長母音 /bi/' }
    ],
    56: [
      { syllable: '單音節［back］', rule: '閉音節規則 (R001) + ck 組合 (R006)', status: '【適用】', reason: 'ck 複合子音封閉音節，母音 a 常規發短母音 /bæk/' }
    ],
    57: [
      { syllable: '單音節［bad］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉音節，母音字母 a 常規發短母音 /bæd/' }
    ],
    58: [
      { syllable: '第 1 音節［bad］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '重音節子音封閉，母音 a 發短母音 /ˈbæd/' },
      { syllable: '第 2 音節［min］', rule: '非重讀閉音節弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 i 發短音 /mɪn/' },
      { syllable: '第 3 音節［ton］', rule: '後綴非重讀弱化 (R008)', status: '【適用】', reason: '-on 字尾非重讀母音 o 弱化發輕母音 /tən/' }
    ],
    59: [
      { syllable: '單音節［bag］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '硬音 g 封閉音節，母音字母 a 常規發短母音 /bæɡ/' }
    ],
    60: [
      { syllable: '單音節［bake］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構促使母音 a 發字母長母音 /beɪk/，字尾 e 不發音' }
    ],
    61: [
      { syllable: '第 1 音節［bak］', rule: '開音節規則 (R002)', status: '【適用】', reason: '源自 bake 字根，母音 a 發長母音 /ˈbeɪ/' },
      { syllable: '第 2 音節［er］', rule: '非重讀 R 控制弱化 (R005/R008)', status: '【適用】', reason: '-er 施事者後綴非重讀，發捲舌輕音 /kɚ/' },
      { syllable: '第 3 音節［y］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '名詞後綴字尾 y 常規發長母音 /i/' }
    ],
    62: [
      { syllable: '第 1 音節［bal］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 l 封閉且為重音節，母音 a 發短母音 /ˈbæl/' },
      { syllable: '第 2 音節［co］', rule: '非重讀母音弱化 (R008) + 硬音 c (R007)', status: '【適用】', reason: 'c 在 o 前發硬音 /k/，母音 o 弱化發 /kə/' },
      { syllable: '第 3 音節［ny］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '字尾非重讀 y 發長母音 /ni/' }
    ],
    63: [
      { syllable: '單音節［ball］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-all 字族受雙子音 ll 牽引，母音 a 常規發圓唇音 /bɔːl/' }
    ],
    64: [
      { syllable: '第 1 音節［ba］', rule: '非重讀母音弱化 (R008)', status: '【適用】', reason: '首音節非重讀，母音 a 弱化發輕母音 /bə/' },
      { syllable: '第 2 音節［nan］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為主重音節，母音 a 常規發短母音 /ˈnæn/' },
      { syllable: '第 3 音節［a］', rule: '字尾母音弱化 (R008)', status: '【適用】', reason: '字尾非重讀單一母音 a 弱化發輕母音 /ə/' }
    ],
    65: [
      { syllable: '單音節［band］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -nd 封閉音節，母音 a 常規發短母音 /bænd/' }
    ],
    66: [
      { syllable: '單音節［bank］', rule: '複合鼻音 nk (R006) + 閉音節 (R001)', status: '【適用】', reason: 'nk 鼻音組合封閉，母音 a 發短母音 /bæŋk/' }
    ],
    67: [
      { syllable: '第 1 音節［bar］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於主重音節發捲舌長母音 /ˈbɑːr/' },
      { syllable: '第 2 音節［be］', rule: '非重讀母音弱化 (R008)', status: '【適用】', reason: '中間非重讀音節母音 e 弱化發 /bə/' },
      { syllable: '第 3 音節［cue］', rule: '母音組合 ue (R004) + 硬音 c (R007)', status: '【適用】', reason: 'c 在 u 前發硬音 /k/，ue 組合發長母音 /kjuː/' }
    ],
    68: [
      { syllable: '第 1 音節［base］', rule: '魔術 e 規則 (R003) + 複合名詞重音 (R015)', status: '【適用】', reason: '複合名詞主重音在前，a_e 促使 a 發長音 /ˈbeɪs/' },
      { syllable: '第 2 音節［ball］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-all 字族次重音保留發圓唇長音 /bɔːl/' }
    ],
    69: [
      { syllable: '第 1 音節［bas］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉且為重音節，母音 a 發短母音 /ˈbæs/' },
      { syllable: '第 2 音節［ket］', rule: '非重讀後綴弱化 (R008)', status: '【適用】', reason: '-et 後綴非重讀，母音 e 弱化發 /kət/' }
    ],
    70: [
      { syllable: '第 1 音節［bas］', rule: '閉音節規則 (R001) + 複合名詞重音 (R015)', status: '【適用】', reason: '複合名詞主重音在前，母音 a 發短音 /ˈbæs/' },
      { syllable: '第 2 音節［ket］', rule: '非重讀後綴弱化 (R008)', status: '【適用】', reason: '-et 非重讀母音弱化發 /kət/' },
      { syllable: '第 3 音節［ball］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-all 次重讀音節保留圓唇長音 /bɔːl/' }
    ],
    71: [
      { syllable: '單音節［bat］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音字母 a 常規發短母音 /bæt/' }
    ],
    72: [
      { syllable: '單音節［bath］', rule: '複合子音 th (R006) + 閉音節 (R001)', status: '【適用】', reason: 'th 清音複合子音封閉，美式發音母音 a 常規發短母音 /bæθ/' }
    ],
    73: [
      { syllable: '第 1 音節［bath］', rule: '複合子音 th (R006) + 複合詞重音 (R015)', status: '【適用】', reason: '複合名詞主重音在前音節，母音 a 發短音 /ˈbæθ/' },
      { syllable: '第 2 音節［room］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'oo 雙母音字母組合於重音節常規發長母音 /ruːm/' }
    ],
    74: [
      { syllable: '單音節［be］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音字母 e 結尾單音節，常規發字母長母音 /biː/' }
    ],
    75: [
      { syllable: '單音節［beach］', rule: '母音組合 ea (R004) + 複合子音 ch (R006)', status: '【適用】', reason: 'ea 組合常規發長母音 /iː/，ch 複合子音發清塞擦音 /tʃ/' }
    ],
    76: [
      { syllable: '單音節［bean］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ea 雙母音字母組合常規發長母音 /biːn/' }
    ],
    77: [
      { syllable: '單音節［bear］', rule: '母音組合 ear (R004/R005)', status: '【不適用 (例外轉移)】', reason: 'ear 組合常規多發 /ɪr/ (如 hear)，此字為特例捲舌發音 /bɛr/ (R010)' }
    ],
    78: [
      { syllable: '第 1 音節［beau］', rule: '法語外來語特例拼寫 (R010)', status: '【不適用 (例外轉移)】', reason: 'beau 歷史源於法語，此處特例發長母音 /ˈbjuː/' },
      { syllable: '第 2 音節［ti］', rule: '非重讀弱化 (R008) + 彈舌音 (R014)', status: '【適用】', reason: '母音間 t 濁化成彈舌音，母音弱化發 /t̬ə/' },
      { syllable: '第 3 音節［ful］', rule: '形容詞後綴弱化 (R008/R012)', status: '【適用】', reason: '-ful 後綴非重讀弱化發成音節 /fəl/' }
    ],
    79: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［cause］', rule: '母音組合 au (R004) + s 濁化 (R014)', status: '【適用】', reason: 'au 組合發圓唇音 /ˈkɔː/，字尾 s 在母音後濁化發 /z/' }
    ],
    80: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［come］', rule: '魔術 e 規則 (R003)', status: '【不適用 (例外轉移)】', reason: '字尾雖為 o_e，受歷史發音留存影響，母音 o 特例發短央母音 /ˈkʌm/ (R010)' }
    ],
    81: [
      { syllable: '單音節［bed］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉音節，單一母音字母 e 常規發短母音 /bɛd/' }
    ],
    82: [
      { syllable: '第 1 音節［bed］', rule: '閉音節 (R001) + 複合名詞重音 (R015)', status: '【適用】', reason: '複合名詞主重音在前，母音 e 發短母音 /ˈbɛd/' },
      { syllable: '第 2 音節［room］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'oo 組合常規發長母音 /ruːm/' }
    ],
    83: [
      { syllable: '單音節［bee］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ee 雙母音組合結尾，常規發長母音 /biː/' }
    ],
    84: [
      { syllable: '單音節［beef］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ee 雙母音組合常規發長母音 /biːf/' }
    ],
    85: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［fore］', rule: 'R 控制母音 (R005) + 魔術 e (R003)', status: '【適用】', reason: 'o_e 結合 r，常規發捲舌長母音 /ˈfɔːr/' }
    ],
    86: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［gin］', rule: '硬音 g (R007) + 閉音節 (R001)', status: '【不適用 (例外轉移)】', reason: 'g 在 i 前常規多發軟音 /dʒ/，此字為日耳曼語源特例保留硬音 /ˈɡɪn/ (R010)' }
    ],
    87: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［hind］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-ind 字族受相連子音影響，母音 i 常規發雙母音 /ˈhaɪnd/' }
    ],
    88: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［lieve］', rule: '母音組合 ie (R004)', status: '【適用】', reason: 'ie 組合於重音節常規發長母音 /ˈliːv/，字尾 e 不發音' }
    ],
    89: [
      { syllable: '單音節［bell］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 ll 封閉音節，單一母音字母 e 常規發短母音 /bɛl/' }
    ],
    90: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［long］', rule: '複合子音 ng (R006) + 閉音節 (R001)', status: '【適用】', reason: 'ng 鼻音組合封閉，母音 o 發短母音 /ˈlɔːŋ/' }
    ],
    91: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［low］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 組合於字尾重音節常規發雙母音 /ˈloʊ/' }
    ],
    92: [
      { syllable: '單音節［belt］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -lt 封閉音節，單一母音字母 e 常規發短母音 /bɛlt/' }
    ],
    93: [
      { syllable: '單音節［bench］', rule: '閉音節 (R001) + 複合子音 ch (R006)', status: '【適用】', reason: 'ch 清塞擦音封閉音節，單一母音字母 e 常規發短母音 /bɛntʃ/' }
    ],
    94: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［side］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構促使母音 i 發字母長母音 /ˈsaɪd/，字尾 e 不發音' }
    ],
    95: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: 'be- 前綴非重讀，母音弱化發短音 /bɪ/' },
      { syllable: '第 2 音節［tween］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ee 雙母音字母組合於重音節常規發長母音 /ˈtwiːn/' }
    ],
    96: [
      { syllable: '單音節［bike］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構促使母音 i 發字母長母音 /baɪk/，字尾 e 不發音' }
    ],
    97: [
      { syllable: '單音節［big］', rule: '閉音節 (R001) + 硬音 g (R007)', status: '【適用】', reason: '子音 g 封閉音節，單一母音字母 i 常規發短母音 /bɪɡ/' }
    ],
    98: [
      { syllable: '單音節［bird］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ir 組合於重音節受 r 牽引，常規發捲舌長母音 /bɝːd/' }
    ],
    99: [
      { syllable: '第 1 音節［birth］', rule: 'R 控制母音 (R005) + 複合名詞重音 (R015)', status: '【適用】', reason: '複合名詞主重音在前，ir 發捲舌長音 /ˈbɝːθ/' },
      { syllable: '第 2 音節［day］', rule: '母音組合 ay (R004)', status: '【適用】', reason: 'ay 雙母音組合常規發長母音 /deɪ/' }
    ],
    100: [
      { syllable: '單音節［bite］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構促使母音 i 發字母長母音 /baɪt/，字尾 e 不發音' }
    ]
  };

  if (customMap[id]) {
    return customMap[id];
  }

  if (batch2DerivationsMap[id]) {
    return batch2DerivationsMap[id];
  }

  if (batch3DerivationsMap[id]) {
    return batch3DerivationsMap[id];
  }

  if (batch4DerivationsMap[id]) {
    return batch4DerivationsMap[id];
  }

  if (batch5DerivationsMap[id]) {
    return batch5DerivationsMap[id];
  }

  if (batch6DerivationsMap[id]) {
    return batch6DerivationsMap[id];
  }

  // Fallback for any other words
  return syls.map((syl: string, idx: number) => ({
    syllable: syls.length === 1 ? `單音節［${syl}］` : `第 ${idx + 1} 音節［${syl}］`,
    rule: '自然發音常規規則',
    status: '【適用】' as const,
    reason: `依自然發音結構常規推導發音`
  }));
}
