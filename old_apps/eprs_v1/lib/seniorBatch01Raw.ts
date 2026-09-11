export interface SeniorWordRecord {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  derivations: {
    syllable: string;
    rule: string;
    status: string;
    reason: string;
  }[];
}

// Complete 100-word dataset for Senior High Level 1 - Batch 01 (Words 1 to 100)
export const SENIOR_BATCH_01_DATA: SeniorWordRecord[] = [
  {
    id: 1,
    word: 'a/an',
    pos: 'art.',
    chinese: '一(個)',
    syllable: ['a', 'an'],
    ipa: '/ə/ (/ən/)',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '開音節規則 (R002) → 句中弱化 (R008)', status: '【適用】', reason: '單一母音字母 a 於句中非重讀時弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［an］', rule: '閉音節規則 (R001) → 句中弱化 (R008)', status: '【適用】', reason: '子音封閉音節，句中非重讀時母音 a 弱化發 /ən/' }
    ]
  },
  {
    id: 2,
    word: 'ability',
    pos: 'n.',
    chinese: '能力,專長',
    syllable: ['a', 'bil', 'i', 'ty'],
    ipa: '/əˈbɪl.ə.t̬i/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴非重讀弱化 (R012)', status: '【適用】', reason: '非重讀起始開音節，字母 a 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［bil］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 l 封閉且為主要重音節，短母音 i 發 /ˈbɪl/' },
      { syllable: '第 3 音節［i］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '非重讀中間開音節，母音 i 弱化發 /ə/ 或 /ɪ/' },
      { syllable: '第 4 音節［ty］', rule: '字尾 y 弱化規則 (R008/R009)', status: '【適用】', reason: '-ty 名詞後綴非重讀，字母 y 常規發長母音轉弱之 /ti/ (美音閃音化為 [t̬i])' }
    ]
  },
  {
    id: 3,
    word: 'able',
    pos: 'adj.',
    chinese: '能夠…的,有能力的',
    syllable: ['a', 'ble'],
    ipa: '/ˈeɪ.bəl/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音結尾且為重音節，字母 a 常規發字母長母音 /ˈeɪ/' },
      { syllable: '第 2 音節［ble］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，不發音 e 弱化發 /bəl/' }
    ]
  },
  {
    id: 4,
    word: 'about',
    pos: 'prep./adv.',
    chinese: '關於,大約',
    syllable: ['a', 'bout'],
    ipa: '/əˈbaʊt/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［bout］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ou 雙母音字母組合於重音節常規發雙母音 /ˈbaʊt/' }
    ]
  },
  {
    id: 5,
    word: 'above',
    pos: 'prep./adv./adj.',
    chinese: '在…上方,高於',
    syllable: ['a', 'bove'],
    ipa: '/əˈbʌv/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［bove］', rule: '魔術 e 規則 (R003)', status: '【不適用 (例外轉移)】', reason: '字尾雖符合 v_e 結構，但受歷史演變影響母音不發長音 /oʊ/，特例發短母音 /ˈbʌv/ (R010)' }
    ]
  },
  {
    id: 6,
    word: 'abroad',
    pos: 'adv.',
    chinese: '在國外,出國',
    syllable: ['a', 'broad'],
    ipa: '/əˈbrɔːd/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［broad］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'oa 組合常規發長音 /oʊ/ (如 road)，此處特例發長母音 /ˈbrɔːd/ (R010)' }
    ]
  },
  {
    id: 7,
    word: 'across',
    pos: 'prep./adv.',
    chinese: '橫越,在…對面',
    syllable: ['a', 'cross'],
    ipa: '/əˈkrɔːs/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，母音弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［cross］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 ss 封閉且為重音節，母音 o 常規發短母音 /ˈkrɔːs/' }
    ]
  },
  {
    id: 8,
    word: 'act',
    pos: 'n./v.',
    chinese: '行動,扮演,法案',
    syllable: ['act'],
    ipa: '/ækt/',
    derivations: [
      { syllable: '單音節［act］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '複合子音 -ct 封閉音節，首位母音 a 常規發短母音 /æ/' }
    ]
  },
  {
    id: 9,
    word: 'action',
    pos: 'n.',
    chinese: '動作,行動',
    syllable: ['ac', 'tion'],
    ipa: '/ˈæk.ʃən/',
    derivations: [
      { syllable: '第 1 音節［ac］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 c 封閉且為重音節，字母 a 常規發短母音 /ˈæk/' },
      { syllable: '第 2 音節［tion］', rule: '特殊名詞字尾規則 (R009/R011)', status: '【適用】', reason: '-tion 名詞字尾非重讀，顎音化發為 /ʃən/' }
    ]
  },
  {
    id: 10,
    word: 'actor/actress',
    pos: 'n.',
    chinese: '男演員/女演員',
    syllable: ['ac', 'tor', 'ac', 'tress'],
    ipa: '/ˈæk.tɚ/ /ˈæk.trəs/',
    derivations: [
      { syllable: '第 1 音節［ac］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 c 封閉且為重音節，字母 a 常規發短母音 /ˈæk/' },
      { syllable: '第 2 音節［tor］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: '-or 非重讀職業字尾弱化發捲舌輕母音 /tɚ/' },
      { syllable: '第 3 音節［tress］', rule: '後綴弱化規則 (R008)', status: '【適用】', reason: '-ess 女性名詞後綴非重讀，弱化發 /trəs/' }
    ]
  },
  {
    id: 11,
    word: 'add',
    pos: 'v.',
    chinese: '添加,增加',
    syllable: ['add'],
    ipa: '/æd/',
    derivations: [
      { syllable: '單音節［add］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 dd 封閉單音節，字母 a 常規發短母音 /æ/' }
    ]
  },
  {
    id: 12,
    word: 'afraid',
    pos: 'adj.',
    chinese: '害怕的,擔心的',
    syllable: ['a', 'fraid'],
    ipa: '/əˈfreɪd/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，字母 a 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［fraid］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ai 雙母音字母組合於重音節常規發字母長母音 /ˈfreɪd/' }
    ]
  },
  {
    id: 13,
    word: 'after',
    pos: 'prep./conj./adv.',
    chinese: '在…之後',
    syllable: ['af', 'ter'],
    ipa: '/ˈæf.tɚ/',
    derivations: [
      { syllable: '第 1 音節［af］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 f 封閉且為重音節，字母 a 常規發短母音 /ˈæf/' },
      { syllable: '第 2 音節［ter］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'er 組合於非重讀音節弱化發捲舌輕母音 /tɚ/' }
    ]
  },
  {
    id: 14,
    word: 'afternoon',
    pos: 'n.',
    chinese: '下午,午後',
    syllable: ['af', 'ter', 'noon'],
    ipa: '/ˌæf.tɚˈnuːn/',
    derivations: [
      { syllable: '第 1 音節［af］', rule: '次重讀閉音節 (R001)', status: '【適用】', reason: '複合詞次重讀音節，子音 f 封閉，字母 a 發 /ˌæf/' },
      { syllable: '第 2 音節［ter］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'er 組合非重讀弱化發 /tɚ/' },
      { syllable: '第 3 音節［noon］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'oo 組合於重音節常規發長母音 /ˈnuːn/' }
    ]
  },
  {
    id: 15,
    word: 'again',
    pos: 'adv.',
    chinese: '再一次,又',
    syllable: ['a', 'gain'],
    ipa: '/əˈɡɛn/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，字母 a 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［gain］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ai 組合常規發長音 /eɪ/，此處特例發短母音 /ˈɡɛn/ (R010)' }
    ]
  },
  {
    id: 16,
    word: 'age',
    pos: 'n./v.',
    chinese: '年齡,老化',
    syllable: ['age'],
    ipa: '/eɪdʒ/',
    derivations: [
      { syllable: '單音節［age］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '字尾不發音 e 促使前母音 a 發字母長音 /eɪ/，且 g 軟音化發 /dʒ/' }
    ]
  },
  {
    id: 17,
    word: 'ago',
    pos: 'adv.',
    chinese: '以前',
    syllable: ['a', 'go'],
    ipa: '/əˈɡoʊ/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 開音節弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［go］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 o 結尾且為重音節，常規發字母長母音 /ˈɡoʊ/' }
    ]
  },
  {
    id: 18,
    word: 'agree(ment)',
    pos: 'v./(n.)',
    chinese: '同意,協定',
    syllable: ['a', 'gree', 'ment'],
    ipa: '/əˈɡriː/ (/əˈɡriː.mənt/)',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴，字母 a 弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［gree］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ee 雙母音組合於重音節常規發長母音 /ˈɡriː/' },
      { syllable: '第 3 音節［ment］', rule: '後綴弱化規則 (R008)', status: '【適用】', reason: '-ment 後綴非重讀，母音 e 弱化發 /mənt/' }
    ]
  },
  {
    id: 19,
    word: 'air',
    pos: 'n.',
    chinese: '空氣,空中',
    syllable: ['air'],
    ipa: '/ɛr/',
    derivations: [
      { syllable: '單音節［air］', rule: 'R 控制母音/特殊組合 (R005/R016)', status: '【適用】', reason: 'air 特殊拼字組合常規發 /ɛr/' }
    ]
  },
  {
    id: 20,
    word: 'airplane/plane',
    pos: 'n.',
    chinese: '飛機',
    syllable: ['air', 'plane'],
    ipa: '/ˈɛr.pleɪn/',
    derivations: [
      { syllable: '第 1 音節［air］', rule: 'R 控制母音組合 (R005)', status: '【適用】', reason: 'air 組合於主重音節常規發 /ˈɛr/' },
      { syllable: '第 2 音節［plane］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構促使母音 a 發字母長音 /pleɪn/' }
    ]
  },
  {
    id: 21,
    word: 'airport',
    pos: 'n.',
    chinese: '機場,航空站',
    syllable: ['air', 'port'],
    ipa: '/ˈɛr.pɔːrt/',
    derivations: [
      { syllable: '第 1 音節［air］', rule: '特殊組合規則 (R016)', status: '【適用】', reason: 'air 組合於首音節發主要重音 /ˈɛr/' },
      { syllable: '第 2 音節［port］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'or 組合於次重讀音節常規發 /pɔːrt/' }
    ]
  },
  {
    id: 22,
    word: 'all',
    pos: 'adj./adv./pron./n.',
    chinese: '全部的,所有',
    syllable: ['all'],
    ipa: '/ɔːl/',
    derivations: [
      { syllable: '單音節［all］', rule: '特殊組合規則 (R006/R010)', status: '【適用】', reason: 'all 特殊子音組合，字母 a 受雙子音 ll 牽引舌位後縮發長母音 /ɔːl/' }
    ]
  },
  {
    id: 23,
    word: 'allow',
    pos: 'v.',
    chinese: '允許,准許',
    syllable: ['al', 'low'],
    ipa: '/əˈlaʊ/',
    derivations: [
      { syllable: '第 1 音節［al］', rule: '前綴非重讀弱化 (R012)', status: '【適用】', reason: '非重讀前綴音節弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［low］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ow 組合於字尾重音節常規發雙母音 /ˈlaʊ/' }
    ]
  },
  {
    id: 24,
    word: 'almost',
    pos: 'adv.',
    chinese: '幾乎,差不多',
    syllable: ['al', 'most'],
    ipa: '/ˈɔːl.moʊst/',
    derivations: [
      { syllable: '第 1 音節［al］', rule: '特殊組合規則 (R006)', status: '【適用】', reason: 'al- 前綴於重音節常規發 /ˈɔːl/' },
      { syllable: '第 2 音節［most］', rule: '特殊閉音節/母音長音 (R010)', status: '【適用】', reason: '-ost 組合中母音 o 常規受後方輔音群牽引發長雙母音 /moʊst/' }
    ]
  },
  {
    id: 25,
    word: 'along',
    pos: 'prep./adv.',
    chinese: '沿著,順著',
    syllable: ['a', 'long'],
    ipa: '/əˈlɑːŋ/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［long］', rule: '鼻音子音組合 (R006)', status: '【適用】', reason: 'ng 鼻音組合封閉且為重音節，母音 o 發長短母音 /ˈlɑːŋ/' }
    ]
  },
  {
    id: 26,
    word: 'already',
    pos: 'adv.',
    chinese: '已經',
    syllable: ['al', 'read', 'y'],
    ipa: '/ɔːlˈrɛd.i/',
    derivations: [
      { syllable: '第 1 音節［al］', rule: '特殊組合規則 (R006)', status: '【適用】', reason: 'al 組合於次重讀音節發 /ɔːl/' },
      { syllable: '第 2 音節［read］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ea 常規發長母音 /iː/，此處特例發短母音 /ˈrɛd/ (R010)' },
      { syllable: '第 3 音節［y］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '字尾非重讀 y 發弱化長母音 /i/' }
    ]
  },
  {
    id: 27,
    word: 'also',
    pos: 'adv.',
    chinese: '也,同樣地',
    syllable: ['al', 'so'],
    ipa: '/ˈɔːl.soʊ/',
    derivations: [
      { syllable: '第 1 音節［al］', rule: '特殊組合規則 (R006)', status: '【適用】', reason: 'al- 組合於主重音節發長音 /ˈɔːl/' },
      { syllable: '第 2 音節［so］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音 o 結尾開音節，發字母長母音 /soʊ/' }
    ]
  },
  {
    id: 28,
    word: 'although',
    pos: 'conj.',
    chinese: '雖然,儘管',
    syllable: ['al', 'though'],
    ipa: '/ɔːlˈðoʊ/',
    derivations: [
      { syllable: '第 1 音節［al］', rule: '次重讀組合規則 (R006)', status: '【適用】', reason: 'al- 組合次重讀發 /ɔːl/' },
      { syllable: '第 2 音節［though］', rule: '特殊不發音規則 (R007)', status: '【適用】', reason: 'th 發濁音 /ð/，ough 組合於此處發長雙母音 /ˈðoʊ/，gh 完全不發音' }
    ]
  },
  {
    id: 29,
    word: 'always',
    pos: 'adv.',
    chinese: '總是,一直',
    syllable: ['al', 'ways'],
    ipa: '/ˈɔːl.weɪz/',
    derivations: [
      { syllable: '第 1 音節［al］', rule: '特殊組合規則 (R006)', status: '【適用】', reason: 'al- 於重音節發長音 /ˈɔːl/' },
      { syllable: '第 2 音節［ways］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ay 雙母音組合發長母音 /weɪ/，字尾 s 濁化發 /z/' }
    ]
  },
  {
    id: 30,
    word: 'am/a.m.',
    pos: 'adv.',
    chinese: '是/上午',
    syllable: ['am', 'a', 'm'],
    ipa: '/æm/ /ˌeɪˈɛm/',
    derivations: [
      { syllable: '單音節［am］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 m 封閉音節，字母 a 常規發短母音 /æm/' },
      { syllable: '縮寫音［a.m.］', rule: '字母讀音規則', status: '【適用】', reason: '縮寫詞各自朗讀字母名稱 /ˌeɪˈɛm/' }
    ]
  },
  {
    id: 31,
    word: 'and',
    pos: 'conj.',
    chinese: '和,而且',
    syllable: ['and'],
    ipa: '/ænd/',
    derivations: [
      { syllable: '單音節［and］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'nd 雙子音封閉單音節，字母 a 常規發短母音 /ænd/' }
    ]
  },
  {
    id: 32,
    word: 'angry',
    pos: 'adj.',
    chinese: '生氣的,憤怒的',
    syllable: ['an', 'gry'],
    ipa: '/ˈæŋ.ɡri/',
    derivations: [
      { syllable: '第 1 音節［an］', rule: '鼻音同化規則 (R006)', status: '【適用】', reason: '字母 n 受後方軟顎音 g 牽引同化發軟顎鼻音 /ˈæŋ/' },
      { syllable: '第 2 音節［gry］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '字尾非重讀 y 發弱化長母音 /ɡri/' }
    ]
  },
  {
    id: 33,
    word: 'animal',
    pos: 'n.',
    chinese: '動物',
    syllable: ['an', 'i', 'mal'],
    ipa: '/ˈæn.ə.məl/',
    derivations: [
      { syllable: '第 1 音節［an］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為重音節，字母 a 常規發短母音 /ˈæn/' },
      { syllable: '第 2 音節［i］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '中間弱讀開音節，母音 i 弱化發輕母音 /ə/' },
      { syllable: '第 3 音節［mal］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '字尾 -al 音節非重讀，母音 a 弱化發成音節 /məl/' }
    ]
  },
  {
    id: 34,
    word: 'another',
    pos: 'adj./pron.',
    chinese: '另一個,再一個',
    syllable: ['an', 'oth', 'er'],
    ipa: '/əˈnʌð.ɚ/',
    derivations: [
      { syllable: '第 1 音節［an］', rule: '前綴非重讀弱化 (R012)', status: '【適用】', reason: '非重讀音節弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［oth］', rule: '短母音轉移規則 (R010)', status: '【適用】', reason: 'o 於此字受歷史音變發短母音 /ˈnʌ/，th 發濁子音 /ð/' },
      { syllable: '第 3 音節［er］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: '-er 字尾非重讀弱化發捲舌輕母音 /ɚ/' }
    ]
  },
  {
    id: 35,
    word: 'answer',
    pos: 'n./v.',
    chinese: '回答,答案',
    syllable: ['an', 'swer'],
    ipa: '/ˈæn.sɚ/',
    derivations: [
      { syllable: '第 1 音節［an］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為重音節，母音 a 常規發短母音 /ˈæn/' },
      { syllable: '第 2 音節［swer］', rule: '不發音規則 (R007) + R 控制母音 (R005)', status: '【適用】', reason: '字母 w 在 s 後不發音，-er 組合發捲舌輕母音 /sɚ/' }
    ]
  },
  {
    id: 36,
    word: 'ant',
    pos: 'n.',
    chinese: '螞蟻',
    syllable: ['ant'],
    ipa: '/ænt/',
    derivations: [
      { syllable: '單音節［ant］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'nt 雙子音封閉單音節，字母 a 常規發短母音 /ænt/' }
    ]
  },
  {
    id: 37,
    word: 'any',
    pos: 'pron./adj./adv.',
    chinese: '任何的,若干',
    syllable: ['an', 'y'],
    ipa: '/ˈɛn.i/',
    derivations: [
      { syllable: '第 1 音節［an］', rule: '閉音節規則 (R001)', status: '【不適用 (特例短母音)】', reason: '字母 a 於此高頻字特例發短母音 /ˈɛn/ (R010)' },
      { syllable: '第 2 音節［y］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '字尾非重讀 y 發弱化長母音 /i/' }
    ]
  },
  {
    id: 38,
    word: 'anybody/anyone',
    pos: 'pron.',
    chinese: '任何人',
    syllable: ['an', 'y', 'bod', 'y'],
    ipa: '/ˈɛn.iˌbɑː.di/',
    derivations: [
      { syllable: '第 1 音節［an］', rule: '特例短母音規則 (R010)', status: '【適用】', reason: '母音 a 特例發短母音 /ˈɛn/' },
      { syllable: '第 2 音節［y］', rule: '字尾弱化規則 (R008)', status: '【適用】', reason: '弱讀開音節字母 y 發 /i/' },
      { syllable: '第 3 音節［bod］', rule: '次重讀閉音節 (R001)', status: '【適用】', reason: '子音 d 封閉次重讀音節，母音 o 發短母音 /ˌbɑː/' },
      { syllable: '第 4 音節［y］', rule: '字尾 y 規則 (R008)', status: '【適用】', reason: '字尾非重讀 y 發 /di/' }
    ]
  },
  {
    id: 39,
    word: 'anything',
    pos: 'pron.',
    chinese: '任何事,任何東西',
    syllable: ['an', 'y', 'thing'],
    ipa: '/ˈɛn.i.θɪŋ/',
    derivations: [
      { syllable: '第 1 音節［an］', rule: '特例短母音規則 (R010)', status: '【適用】', reason: '母音 a 特例發短母音 /ˈɛn/' },
      { syllable: '第 2 音節［y］', rule: '弱化開音節 (R008)', status: '【適用】', reason: '字母 y 發輕母音 /i/' },
      { syllable: '第 3 音節［thing］', rule: '雙子音叢 (R006)', status: '【適用】', reason: 'th 發清齒擦音 /θ/，ng 封閉音節使母音 i 發短母音 /θɪŋ/' }
    ]
  },
  {
    id: 40,
    word: 'apartment',
    pos: 'n.',
    chinese: '公寓住宅',
    syllable: ['a', 'part', 'ment'],
    ipa: '/əˈpɑːrt.mənt/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴非重讀弱化 (R012)', status: '【適用】', reason: '非重讀起始音節弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［part］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於主重音節常規發長母音 /ˈpɑːrt/' },
      { syllable: '第 3 音節［ment］', rule: '後綴弱化規則 (R008)', status: '【適用】', reason: '-ment 後綴非重讀弱化發 /mənt/' }
    ]
  },
  {
    id: 41,
    word: 'appear',
    pos: 'v.',
    chinese: '出現,顯現',
    syllable: ['ap', 'pear'],
    ipa: '/əˈpɪr/',
    derivations: [
      { syllable: '第 1 音節［ap］', rule: '前綴非重讀弱化 (R012)', status: '【適用】', reason: '非重讀前綴音節弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［pear］', rule: 'R 控制雙母音規則 (R005)', status: '【適用】', reason: 'ear 組合於主重音節常規發 /ˈpɪr/' }
    ]
  },
  {
    id: 42,
    word: 'apple',
    pos: 'n.',
    chinese: '蘋果',
    syllable: ['ap', 'ple'],
    ipa: '/ˈæp.əl/',
    derivations: [
      { syllable: '第 1 音節［ap］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 pp 前字封閉且為重音節，字母 a 常規發短母音 /ˈæp/' },
      { syllable: '第 2 音節［ple］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，不發音 e 弱化發 /əl/' }
    ]
  },
  {
    id: 43,
    word: 'area',
    pos: 'n.',
    chinese: '區域,面積,範圍',
    syllable: ['ar', 'e', 'a'],
    ipa: '/ˈɛr.i.ə/',
    derivations: [
      { syllable: '第 1 音節［ar］', rule: 'R 控制母音變異 (R005)', status: '【適用】', reason: 'ar 於重音節接續母音時發 /ˈɛr/' },
      { syllable: '第 2 音節［e］', rule: '開音節弱化 (R008)', status: '【適用】', reason: '弱讀開音節字母 e 發 /i/' },
      { syllable: '第 3 音節［a］', rule: '字尾弱化 (R008)', status: '【適用】', reason: '字尾單一字母 a 弱化發輕母音 /ə/' }
    ]
  },
  {
    id: 44,
    word: 'arm',
    pos: 'n./v.',
    chinese: '手臂,武器,武裝',
    syllable: ['arm'],
    ipa: '/ɑːrm/',
    derivations: [
      { syllable: '單音節［arm］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於單音節常規發捲舌長母音 /ɑːrm/' }
    ]
  },
  {
    id: 45,
    word: 'around',
    pos: 'prep./adv.',
    chinese: '在…四周,大約',
    syllable: ['a', 'round'],
    ipa: '/əˈraʊnd/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［round］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ou 雙母音組合於重音節常規發雙母音 /ˈraʊnd/' }
    ]
  },
  {
    id: 46,
    word: 'arrive',
    pos: 'v.',
    chinese: '到達,抵達',
    syllable: ['ar', 'rive'],
    ipa: '/əˈraɪv/',
    derivations: [
      { syllable: '第 1 音節［ar］', rule: '前綴非重讀弱化 (R012)', status: '【適用】', reason: '非重讀起始音節弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［rive］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構促使母音 i 發字母長音 /ˈraɪv/' }
    ]
  },
  {
    id: 47,
    word: 'art',
    pos: 'n.',
    chinese: '藝術,美術',
    syllable: ['art'],
    ipa: '/ɑːrt/',
    derivations: [
      { syllable: '單音節［art］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合受子音 t 封閉，常規發長母音 /ɑːrt/' }
    ]
  },
  {
    id: 48,
    word: 'as',
    pos: 'conj./adv./prep.',
    chinese: '如同,當…之時',
    syllable: ['as'],
    ipa: '/æz/',
    derivations: [
      { syllable: '單音節［as］', rule: '閉音節規則 (R001) + 子音濁化', status: '【適用】', reason: '字母 a 發短母音 /æ/，字尾子音 s 於常態語音中濁化發 /z/' }
    ]
  },
  {
    id: 49,
    word: 'ask',
    pos: 'v.',
    chinese: '詢問,要求',
    syllable: ['ask'],
    ipa: '/æsk/',
    derivations: [
      { syllable: '單音節［ask］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'sk 雙子音叢封閉單音節，字母 a 常規發美音短母音 /æsk/' }
    ]
  },
  {
    id: 50,
    word: 'at',
    pos: 'prep.',
    chinese: '在…地點/時間',
    syllable: ['at'],
    ipa: '/æt/',
    derivations: [
      { syllable: '單音節［at］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 t 封閉單音節，字母 a 常規發短母音 /æt/' }
    ]
  },
  {
    id: 51,
    word: 'attack',
    pos: 'n./v.',
    chinese: '攻擊,襲擊',
    syllable: ['at', 'tack'],
    ipa: '/əˈtæk/',
    derivations: [
      { syllable: '第 1 音節［at］', rule: '前綴非重讀弱化 (R012)', status: '【適用】', reason: '非重讀前綴音節弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［tack］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '複合子音 -ck 封閉重音節，字母 a 常規發短母音 /ˈtæk/' }
    ]
  },
  {
    id: 52,
    word: 'aunt',
    pos: 'n.',
    chinese: '伯母,嬸嬸,姑姑,阿姨',
    syllable: ['aunt'],
    ipa: '/ænt/',
    derivations: [
      { syllable: '單音節［aunt］', rule: '母音組合規則 (R004)', status: '【不適用 (美音短音轉移)】', reason: 'au 組合常規發 /ɔː/，此處在美式英語中同化發短母音 /ænt/ (R010)' }
    ]
  },
  {
    id: 53,
    word: 'away',
    pos: 'adv.',
    chinese: '離開,遠離',
    syllable: ['a', 'way'],
    ipa: '/əˈweɪ/',
    derivations: [
      { syllable: '第 1 音節［a］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 a- 前綴弱化發輕母音 /ə/' },
      { syllable: '第 2 音節［way］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ay 雙母音組合於重音節常規發字母長母音 /ˈweɪ/' }
    ]
  },
  {
    id: 54,
    word: 'baby',
    pos: 'n.',
    chinese: '嬰兒,寶貝',
    syllable: ['ba', 'by'],
    ipa: '/ˈbeɪ.bi/',
    derivations: [
      { syllable: '第 1 音節［ba］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重音開音節以單一母音結尾，字母 a 常規發字母長音 /ˈbeɪ/' },
      { syllable: '第 2 音節［by］', rule: '字尾 y 弱化規則 (R008)', status: '【適用】', reason: '字尾非重讀 y 發長音轉弱之 /bi/' }
    ]
  },
  {
    id: 55,
    word: 'back',
    pos: 'adv./n./v./adj.',
    chinese: '後面,背部,返回',
    syllable: ['back'],
    ipa: '/bæk/',
    derivations: [
      { syllable: '單音節［back］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '複合子音 -ck 封閉音節，前母音 a 常規發短母音 /bæk/' }
    ]
  },
  {
    id: 56,
    word: 'bad',
    pos: 'adj.',
    chinese: '壞的,糟糕的',
    syllable: ['bad'],
    ipa: '/bæd/',
    derivations: [
      { syllable: '單音節［bad］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 d 封閉音節，字母 a 常規發短母音 /bæd/' }
    ]
  },
  {
    id: 57,
    word: 'bag',
    pos: 'n.',
    chinese: '袋子,皮包',
    syllable: ['bag'],
    ipa: '/bæɡ/',
    derivations: [
      { syllable: '單音節［bag］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 g 封閉音節，字母 a 常規發短母音 /bæɡ/' }
    ]
  },
  {
    id: 58,
    word: 'ball',
    pos: 'n./v.',
    chinese: '球,舞會',
    syllable: ['ball'],
    ipa: '/bɔːl/',
    derivations: [
      { syllable: '單音節［ball］', rule: '特殊組合規則 (R006)', status: '【適用】', reason: '-all 特殊組合，字母 a 受雙子音 ll 影響舌位後縮發 /bɔːl/' }
    ]
  },
  {
    id: 59,
    word: 'banana',
    pos: 'n.',
    chinese: '香蕉',
    syllable: ['ba', 'nan', 'a'],
    ipa: '/bəˈnæn.ə/',
    derivations: [
      { syllable: '第 1 音節［ba］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀起始開音節，母音 a 弱化發輕母音 /bə/' },
      { syllable: '第 2 音節［nan］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 n 封閉且為主要重音節，字母 a 常規發短母音 /ˈnæn/' },
      { syllable: '第 3 音節［a］', rule: '字尾弱化 (R008)', status: '【適用】', reason: '字尾單一母音 a 弱化發輕母音 /ə/' }
    ]
  },
  {
    id: 60,
    word: 'band',
    pos: 'n.',
    chinese: '樂團,樂隊,帶子',
    syllable: ['band'],
    ipa: '/bænd/',
    derivations: [
      { syllable: '單音節［band］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'nd 雙子音封閉單音節，字母 a 常規發短母音 /bænd/' }
    ]
  },
  {
    id: 61,
    word: 'bank',
    pos: 'n./v.',
    chinese: '銀行,河岸',
    syllable: ['bank'],
    ipa: '/bæŋk/',
    derivations: [
      { syllable: '單音節［bank］', rule: '鼻音同化組合 (R006)', status: '【適用】', reason: 'nk 組合使字母 n 同化為軟顎鼻音，母音 a 發短母音 /bæŋk/' }
    ]
  },
  {
    id: 62,
    word: 'baseball',
    pos: 'n.',
    chinese: '棒球',
    syllable: ['base', 'ball'],
    ipa: '/ˈbeɪs.bɔːl/',
    derivations: [
      { syllable: '第 1 音節［base］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構促使母音 a 發字母長音 /ˈbeɪs/' },
      { syllable: '第 2 音節［ball］', rule: '特殊組合規則 (R006)', status: '【適用】', reason: '-all 組合次重讀發 /bɔːl/' }
    ]
  },
  {
    id: 63,
    word: 'basket',
    pos: 'n.',
    chinese: '籃子,簍子',
    syllable: ['bas', 'ket'],
    ipa: '/ˈbæs.kɪt/',
    derivations: [
      { syllable: '第 1 音節［bas］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉重音節，字母 a 發短母音 /ˈbæs/' },
      { syllable: '第 2 音節［ket］', rule: '後綴弱化規則 (R008)', status: '【適用】', reason: '-et 弱讀後綴發短母音 /kɪt/' }
    ]
  },
  {
    id: 64,
    word: 'basketball',
    pos: 'n.',
    chinese: '籃球',
    syllable: ['bas', 'ket', 'ball'],
    ipa: '/ˈbæs.kɪt.bɔːl/',
    derivations: [
      { syllable: '第 1 音節［bas］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉主要重音節，母音 a 發 /ˈbæs/' },
      { syllable: '第 2 音節［ket］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '中間非重讀閉音節弱化發 /kɪt/' },
      { syllable: '第 3 音節［ball］', rule: '特殊組合規則 (R006)', status: '【適用】', reason: '-all 組合次重讀發 /bɔːl/' }
    ]
  },
  {
    id: 65,
    word: 'bat',
    pos: 'n./v.',
    chinese: '球棒,蝙蝠',
    syllable: ['bat'],
    ipa: '/bæt/',
    derivations: [
      { syllable: '單音節［bat］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 t 封閉單音節，字母 a 常規發短母音 /bæt/' }
    ]
  },
  {
    id: 66,
    word: 'bath',
    pos: 'n.',
    chinese: '泡澡,沐浴',
    syllable: ['bath'],
    ipa: '/bæθ/',
    derivations: [
      { syllable: '單音節［bath］', rule: '閉音節規則 (R001) + 子音組合', status: '【適用】', reason: 'th 清齒擦音封閉音節，字母 a 常規發美式短母音 /bæθ/' }
    ]
  },
  {
    id: 67,
    word: 'bathroom',
    pos: 'n.',
    chinese: '浴室,洗手間',
    syllable: ['bath', 'room'],
    ipa: '/ˈbæθ.ruːm/',
    derivations: [
      { syllable: '第 1 音節［bath］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'th 封閉主重音節，字母 a 發短母音 /ˈbæθ/' },
      { syllable: '第 2 音節［room］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'oo 組合次重讀發長母音 /ruːm/' }
    ]
  },
  {
    id: 68,
    word: 'be',
    pos: 'v./aux.',
    chinese: '是,在,存在',
    syllable: ['be'],
    ipa: '/biː/',
    derivations: [
      { syllable: '單音節［be］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 e 結尾開音節，常規發字母長母音 /biː/' }
    ]
  },
  {
    id: 69,
    word: 'beach',
    pos: 'n./v.',
    chinese: '海灘,沙灘',
    syllable: ['beach'],
    ipa: '/biːtʃ/',
    derivations: [
      { syllable: '單音節［beach］', rule: '母音組合規則 (R004) + 子音組合 (R006)', status: '【適用】', reason: 'ea 組合常規發長母音 /iː/，ch 發塞擦音 /tʃ/' }
    ]
  },
  {
    id: 70,
    word: 'bean',
    pos: 'n.',
    chinese: '豆子,豆類',
    syllable: ['bean'],
    ipa: '/biːn/',
    derivations: [
      { syllable: '單音節［bean］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ea 雙母音字母組合常規發長母音 /biːn/' }
    ]
  },
  {
    id: 71,
    word: 'bear',
    pos: 'v./n.',
    chinese: '承受,熊',
    syllable: ['bear'],
    ipa: '/bɛr/',
    derivations: [
      { syllable: '單音節［bear］', rule: 'R 控制母音變異 (R005)', status: '【不適用 (特例發音)】', reason: 'ear 組合常規發 /ɪr/ (如 hear)，此處特例發捲舌音 /bɛr/ (R010)' }
    ]
  },
  {
    id: 72,
    word: 'beautiful',
    pos: 'adj.',
    chinese: '美麗的,優美的',
    syllable: ['beau', 'ti', 'ful'],
    ipa: '/ˈbjuː.t̬ə.fəl/',
    derivations: [
      { syllable: '第 1 音節［beau］', rule: '法語外來拼字特例 (R010)', status: '【不適用 (外來借詞)】', reason: 'eau 組合源自法語借詞，特例發長雙母音 /ˈbjuː/' },
      { syllable: '第 2 音節［ti］', rule: '弱化開音節 (R008)', status: '【適用】', reason: '非重讀音節母音 i 弱化，子音 t 閃音化發 [t̬ə]' },
      { syllable: '第 3 音節［ful］', rule: '後綴弱化規則 (R008)', status: '【適用】', reason: '-ful 形容詞後綴非重讀弱化發 /fəl/' }
    ]
  },
  {
    id: 73,
    word: 'because',
    pos: 'conj.',
    chinese: '因為',
    syllable: ['be', 'cause'],
    ipa: '/bɪˈkɑːz/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴，母音 e 弱化發 /bɪ/' },
      { syllable: '第 2 音節［cause］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'au 組合於重音節常規發長母音 /ˈkɑːz/，字尾 s 濁化發 /z/' }
    ]
  },
  {
    id: 74,
    word: 'become',
    pos: 'v.',
    chinese: '變成,成為',
    syllable: ['be', 'come'],
    ipa: '/bɪˈkʌm/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［come］', rule: '魔術 e 規則 (R003)', status: '【不適用 (特例短母音)】', reason: 'o_e 結構常規發長音 /oʊ/，此處特例發短母音 /ˈkʌm/ (R010)' }
    ]
  },
  {
    id: 75,
    word: 'bed',
    pos: 'n.',
    chinese: '床舖',
    syllable: ['bed'],
    ipa: '/bɛd/',
    derivations: [
      { syllable: '單音節［bed］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 d 封閉單音節，字母 e 常規發短母音 /bɛd/' }
    ]
  },
  {
    id: 76,
    word: 'bedroom',
    pos: 'n.',
    chinese: '臥室,睡房',
    syllable: ['bed', 'room'],
    ipa: '/ˈbɛd.ruːm/',
    derivations: [
      { syllable: '第 1 音節［bed］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉重音節，母音 e 發短母音 /ˈbɛd/' },
      { syllable: '第 2 音節［room］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'oo 組合次重讀發長母音 /ruːm/' }
    ]
  },
  {
    id: 77,
    word: 'bee',
    pos: 'n.',
    chinese: '蜜蜂',
    syllable: ['bee'],
    ipa: '/biː/',
    derivations: [
      { syllable: '單音節［bee］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ee 雙母音字母組合常規發長母音 /biː/' }
    ]
  },
  {
    id: 78,
    word: 'beef',
    pos: 'n.',
    chinese: '牛肉',
    syllable: ['beef'],
    ipa: '/biːf/',
    derivations: [
      { syllable: '單音節［beef］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ee 雙母音組合封閉於 f 前，常規發長母音 /biːf/' }
    ]
  },
  {
    id: 79,
    word: 'before',
    pos: 'prep./conj./adv.',
    chinese: '在…之前',
    syllable: ['be', 'fore'],
    ipa: '/bɪˈfɔːr/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［fore］', rule: 'R 控制母音組合 (R005)', status: '【適用】', reason: 'ore 結構於重音節常規發長母音 /ˈfɔːr/' }
    ]
  },
  {
    id: 80,
    word: 'begin',
    pos: 'v.',
    chinese: '開始,著手',
    syllable: ['be', 'gin'],
    ipa: '/bɪˈɡɪn/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［gin］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉重音節，字母 i 常規發短母音 /ˈɡɪn/ (g 保留硬音)' }
    ]
  },
  {
    id: 81,
    word: 'behind',
    pos: 'prep./adv.',
    chinese: '在…後面',
    syllable: ['be', 'hind'],
    ipa: '/bɪˈhaɪnd/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［hind］', rule: '特殊閉音節母音長音 (R010)', status: '【適用】', reason: '-ind 特殊輔音叢封閉音節，母音 i 常規發字母長音 /ˈhaɪnd/' }
    ]
  },
  {
    id: 82,
    word: 'believe',
    pos: 'v.',
    chinese: '相信,信任',
    syllable: ['be', 'lieve'],
    ipa: '/bɪˈliːv/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［lieve］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ie 雙母音組合於重音節常規發長母音 /ˈliːv/' }
    ]
  },
  {
    id: 83,
    word: 'bell',
    pos: 'n.',
    chinese: '鈴,鐘',
    syllable: ['bell'],
    ipa: '/bɛl/',
    derivations: [
      { syllable: '單音節［bell］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 ll 封閉單音節，字母 e 常規發短母音 /bɛl/' }
    ]
  },
  {
    id: 84,
    word: 'belong',
    pos: 'v.',
    chinese: '屬於,歸屬',
    syllable: ['be', 'long'],
    ipa: '/bɪˈlɑːŋ/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［long］', rule: '鼻音子音組合 (R006)', status: '【適用】', reason: 'ng 鼻音組合封閉且為重音節，母音 o 發長短母音 /ˈlɑːŋ/' }
    ]
  },
  {
    id: 85,
    word: 'below',
    pos: 'adv./prep.',
    chinese: '在…下方,在底下',
    syllable: ['be', 'low'],
    ipa: '/bɪˈloʊ/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［low］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ow 組合於此詞常規發長雙母音 /ˈloʊ/' }
    ]
  },
  {
    id: 86,
    word: 'belt',
    pos: 'n./v.',
    chinese: '腰帶,皮帶',
    syllable: ['belt'],
    ipa: '/bɛlt/',
    derivations: [
      { syllable: '單音節［belt］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'lt 雙子音封閉單音節，字母 e 常規發短母音 /bɛlt/' }
    ]
  },
  {
    id: 87,
    word: 'bench',
    pos: 'n.',
    chinese: '長椅,長凳',
    syllable: ['bench'],
    ipa: '/bɛntʃ/',
    derivations: [
      { syllable: '單音節［bench］', rule: '閉音節規則 (R001) + 子音組合', status: '【適用】', reason: 'nch 複合子音封閉單音節，字母 e 常規發短母音 /bɛntʃ/' }
    ]
  },
  {
    id: 88,
    word: 'beside',
    pos: 'prep.',
    chinese: '在…旁邊',
    syllable: ['be', 'side'],
    ipa: '/bɪˈsaɪd/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［side］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構促使前母音 i 發字母長音 /ˈsaɪd/' }
    ]
  },
  {
    id: 89,
    word: 'best',
    pos: 'adj./adv./v./n.',
    chinese: '最好的,最佳的',
    syllable: ['best'],
    ipa: '/bɛst/',
    derivations: [
      { syllable: '單音節［best］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'st 雙子音封閉單音節，字母 e 常規發短母音 /bɛst/' }
    ]
  },
  {
    id: 90,
    word: 'between',
    pos: 'prep./adv.',
    chinese: '在…兩者之間',
    syllable: ['be', 'tween'],
    ipa: '/bɪˈtwiːn/',
    derivations: [
      { syllable: '第 1 音節［be］', rule: '前綴弱化規則 (R012)', status: '【適用】', reason: '非重讀 be- 前綴弱化發 /bɪ/' },
      { syllable: '第 2 音節［tween］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ee 雙母音字母組合於重音節常規發長母音 /ˈtwiːn/' }
    ]
  },
  {
    id: 91,
    word: 'bicycle/bike',
    pos: 'n.',
    chinese: '腳踏車,自行車',
    syllable: ['bi', 'cy', 'cle'],
    ipa: '/ˈbaɪ.sə.kəl/',
    derivations: [
      { syllable: '第 1 音節［bi］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節字母 i 常規發字母長音 /ˈbaɪ/' },
      { syllable: '第 2 音節［cy］', rule: '弱化開音節 (R008)', status: '【適用】', reason: '字母 c 遇 y 軟化發 /s/，母音 y 弱化發輕母音 /sə/' },
      { syllable: '第 3 音節［cle］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 構成成音節發 /kəl/' }
    ]
  },
  {
    id: 92,
    word: 'big',
    pos: 'adj.',
    chinese: '大的,巨大的',
    syllable: ['big'],
    ipa: '/bɪɡ/',
    derivations: [
      { syllable: '單音節［big］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 g 封閉音節，字母 i 常規發短母音 /bɪɡ/' }
    ]
  },
  {
    id: 93,
    word: 'bird',
    pos: 'n.',
    chinese: '鳥,禽類',
    syllable: ['bird'],
    ipa: '/bɝːd/',
    derivations: [
      { syllable: '單音節［bird］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ir 組合於單音節常規發捲舌長母音 /bɝːd/' }
    ]
  },
  {
    id: 94,
    word: 'bite',
    pos: 'n./v.',
    chinese: '咬,啃',
    syllable: ['bite'],
    ipa: '/baɪt/',
    derivations: [
      { syllable: '單音節［bite］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構促使母音 i 發字母長音 /baɪt/' }
    ]
  },
  {
    id: 95,
    word: 'black',
    pos: 'adj./n.',
    chinese: '黑色的',
    syllable: ['black'],
    ipa: '/blæk/',
    derivations: [
      { syllable: '單音節［black］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'bl- 子音叢起首，-ck 封閉音節，字母 a 常規發短母音 /blæk/' }
    ]
  },
  {
    id: 96,
    word: 'blind',
    pos: 'adj./v.',
    chinese: '瞎的,盲目的',
    syllable: ['blind'],
    ipa: '/blaɪnd/',
    derivations: [
      { syllable: '單音節［blind］', rule: '特殊閉音節母音長音 (R010)', status: '【適用】', reason: '-ind 特殊子音叢結構促使母音 i 常規發字母長音 /blaɪnd/' }
    ]
  },
  {
    id: 97,
    word: 'block',
    pos: 'n./v.',
    chinese: '街區,積木,阻擋',
    syllable: ['block'],
    ipa: '/blɑːk/',
    derivations: [
      { syllable: '單音節［block］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '-ck 封閉單音節，母音 o 常規發短母音 /blɑːk/' }
    ]
  },
  {
    id: 98,
    word: 'blow',
    pos: 'v.',
    chinese: '吹,吹動,颳起',
    syllable: ['blow'],
    ipa: '/bloʊ/',
    derivations: [
      { syllable: '單音節［blow］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ow 雙字母組合於此處發長雙母音 /bloʊ/' }
    ]
  },
  {
    id: 99,
    word: 'blue',
    pos: 'adj./n.',
    chinese: '藍色的,憂鬱的',
    syllable: ['blue'],
    ipa: '/bluː/',
    derivations: [
      { syllable: '單音節［blue］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'ue 字母組合常規發長母音 /bluː/' }
    ]
  },
  {
    id: 100,
    word: 'boat',
    pos: 'n.',
    chinese: '小船,小艇',
    syllable: ['boat'],
    ipa: '/boʊt/',
    derivations: [
      { syllable: '單音節［boat］', rule: '母音組合規則 (R004)', status: '【適用】', reason: 'oa 雙母音字母組合於單音節常規發字母長音 /boʊt/' }
    ]
  }
];
