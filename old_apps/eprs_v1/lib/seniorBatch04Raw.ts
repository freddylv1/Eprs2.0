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

export const seniorBatch04Raw: SeniorWordRecord[] = [
  {
    "id": 301,
    "word": "feed",
    "pos": "v./n.",
    "chinese": "餵",
    "syllable": [
      "feed"
    ],
    "ipa": "/fiːd/",
    "derivations": [
      {
        "syllable": "單音節［feed］",
        "rule": "母音組合 ee (R004)",
        "status": "【適用】",
        "reason": "雙母音 ee 常規發固定長母音 /iː/，子音 d 結尾發 /fiːd/"
      }
    ]
  },
  {
    "id": 302,
    "word": "feel",
    "pos": "v./n.",
    "chinese": "覺得",
    "syllable": [
      "feel"
    ],
    "ipa": "/fiːl/",
    "derivations": [
      {
        "syllable": "單音節［feel］",
        "rule": "母音組合 ee (R004)",
        "status": "【適用】",
        "reason": "雙母音 ee 常規發長母音 /iː/，結合舌尖齒齦邊音 l 發 /fiːl/"
      }
    ]
  },
  {
    "id": 303,
    "word": "festival",
    "pos": "n.",
    "chinese": "節慶",
    "syllable": [
      "fes",
      "ti",
      "val"
    ],
    "ipa": "/ˈfɛs.tə.vəl/",
    "derivations": [
      {
        "syllable": "第 1 音節［fes］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 s 封閉且為重音節，母音 e 常規發短母音 /ˈfɛs/"
      },
      {
        "syllable": "第 2 音節［ti］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀母音 i 弱化發短音 /tə/"
      },
      {
        "syllable": "第 3 音節［val］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-al 後綴非重讀弱化發輕母音 /vəl/"
      }
    ]
  },
  {
    "id": 304,
    "word": "few",
    "pos": "adj./pron.",
    "chinese": "少數的",
    "syllable": [
      "few"
    ],
    "ipa": "/fjuː/",
    "derivations": [
      {
        "syllable": "單音節［few］",
        "rule": "母音組合 ew (R004)",
        "status": "【適用】",
        "reason": "ew 字母組合常規發雙母音 /juː/，全字發 /fjuː/"
      }
    ]
  },
  {
    "id": 305,
    "word": "fight",
    "pos": "v./n.",
    "chinese": "打架",
    "syllable": [
      "fight"
    ],
    "ipa": "/faɪt/",
    "derivations": [
      {
        "syllable": "單音節［fight］",
        "rule": "母音組合 igh (R004) + 靜音 gh (R006)",
        "status": "【適用】",
        "reason": "igh 特殊組合中 gh 靜音，母音 i 發長雙母音 /faɪt/"
      }
    ]
  },
  {
    "id": 306,
    "word": "file",
    "pos": "n./v.",
    "chinese": "檔案, 銼刀; 歸檔",
    "syllable": [
      "file"
    ],
    "ipa": "/faɪl/",
    "derivations": [
      {
        "syllable": "單音節［file］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾 e 靜音促使前面母音 i 發長音 /aɪ/，結合尾音 l 發 /faɪl/"
      }
    ]
  },
  {
    "id": 307,
    "word": "fill",
    "pos": "v./n.",
    "chinese": "裝滿",
    "syllable": [
      "fill"
    ],
    "ipa": "/fɪl/",
    "derivations": [
      {
        "syllable": "單音節［fill］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 ll 封閉音節，單一母音 i 常規發短母音 /fɪl/"
      }
    ]
  },
  {
    "id": 308,
    "word": "finally",
    "pos": "adv.",
    "chinese": "最後",
    "syllable": [
      "fi",
      "nal",
      "ly"
    ],
    "ipa": "/ˈfaɪ.nəl.i/",
    "derivations": [
      {
        "syllable": "第 1 音節［fi］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "母音 i 結尾受主重音，常規發長雙母音 /ˈfaɪ/"
      },
      {
        "syllable": "第 2 音節［nal］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-al 後綴處於非重讀音節，母音弱化發 /nəl/"
      },
      {
        "syllable": "第 3 音節［ly］",
        "rule": "開音節規則 (R002) → 字尾 y 半母音",
        "status": "【適用】",
        "reason": "副詞後綴 -ly 處非重讀音節，y 常規發長母音 /li/"
      }
    ]
  },
  {
    "id": 309,
    "word": "find",
    "pos": "v./n.",
    "chinese": "找到",
    "syllable": [
      "find"
    ],
    "ipa": "/faɪnd/",
    "derivations": [
      {
        "syllable": "單音節［find］",
        "rule": "閉音節規則 (R001) → 特例長母音 -ind (R010/R002)",
        "status": "【不適用 (例外轉移)】",
        "reason": "-ind 組合打破一般閉音節規則，母音 i 歷史長音化發長雙母音 /faɪnd/ (R010)"
      }
    ]
  },
  {
    "id": 310,
    "word": "fine",
    "pos": "adj./adv./v./n.",
    "chinese": "很好的",
    "syllable": [
      "fine"
    ],
    "ipa": "/faɪn/",
    "derivations": [
      {
        "syllable": "單音節［fine］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構中字尾 e 靜音，母音 i 發字母長音 /faɪn/"
      }
    ]
  },
  {
    "id": 311,
    "word": "finger",
    "pos": "n./v.",
    "chinese": "手指",
    "syllable": [
      "fin",
      "ger"
    ],
    "ipa": "/ˈfɪŋ.ɡɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［fin］",
        "rule": "閉音節規則 (R001) + 複合鼻音 ng (R006)",
        "status": "【適用】",
        "reason": "重音節母音 i 在 g 前鼻音化，發 /ˈfɪŋ/"
      },
      {
        "syllable": "第 2 音節［ger］",
        "rule": "硬音 g (R007) + R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "g 發濁塞音 /ɡ/，-er 處非重讀音節弱化發輕捲舌母音 /ɡɚ/"
      }
    ]
  },
  {
    "id": 312,
    "word": "finish",
    "pos": "v./n.",
    "chinese": "完成",
    "syllable": [
      "fin",
      "ish"
    ],
    "ipa": "/ˈfɪn.ɪʃ/",
    "derivations": [
      {
        "syllable": "第 1 音節［fin］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 n 封閉且為重音節，母音 i 常規發短母音 /ˈfɪn/"
      },
      {
        "syllable": "第 2 音節［ish］",
        "rule": "非重讀弱化 (R008) + 複合子音 sh (R006)",
        "status": "【適用】",
        "reason": "-ish 後綴非重讀發 /ɪʃ/，sh 保持完整發摩擦音 /ʃ/"
      }
    ]
  },
  {
    "id": 313,
    "word": "fire",
    "pos": "n./v.",
    "chinese": "火焰,開火",
    "syllable": [
      "fire"
    ],
    "ipa": "/ˈfaɪ.ɚ/",
    "derivations": [
      {
        "syllable": "單音節［fire］",
        "rule": "魔術 e (R003) + R 控制長音 (R005)",
        "status": "【適用】",
        "reason": "i_e 促使母音 i 發長雙母音 /aɪ/，字尾 r 使雙母音展開為 /ˈfaɪ.ɚ/"
      }
    ]
  },
  {
    "id": 314,
    "word": "first",
    "pos": "n./adv./adj.",
    "chinese": "第一(的)",
    "syllable": [
      "first"
    ],
    "ipa": "/fɝːst/",
    "derivations": [
      {
        "syllable": "單音節［first］",
        "rule": "R 控制母音 ir (R005)",
        "status": "【適用】",
        "reason": "ir 組合受 r 控制常規發捲舌長母音 /ɝː/，結合尾音 -st 發 /fɝːst/"
      }
    ]
  },
  {
    "id": 315,
    "word": "fish",
    "pos": "n./v.",
    "chinese": "魚",
    "syllable": [
      "fish"
    ],
    "ipa": "/fɪʃ/",
    "derivations": [
      {
        "syllable": "單音節［fish］",
        "rule": "閉音節規則 (R001) + 複合子音 sh (R006)",
        "status": "【適用】",
        "reason": "母音 i 於閉音節發短母音 /ɪ/，sh 保持完整發單一音 /ʃ/"
      }
    ]
  },
  {
    "id": 316,
    "word": "floor",
    "pos": "n./v.",
    "chinese": "地板",
    "syllable": [
      "floor"
    ],
    "ipa": "/flɔːr/",
    "derivations": [
      {
        "syllable": "單音節［floor］",
        "rule": "子音叢 fl (R006) + 母音組合 oor (R004/R005)",
        "status": "【適用】",
        "reason": "子音叢 fl- 開頭，oor 受 r 牽引常規發長捲舌母音 /ɔːr/，全字發 /flɔːr/"
      }
    ]
  },
  {
    "id": 317,
    "word": "flower",
    "pos": "n./v.",
    "chinese": "花朵",
    "syllable": [
      "flow",
      "er"
    ],
    "ipa": "/ˈflaʊ.ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［flow］",
        "rule": "子音叢 fl (R006) + 母音組合 ow (R004)",
        "status": "【適用】",
        "reason": "子音叢 fl- 開頭，ow 雙母音於重音節常規發雙母音 /ˈflaʊ/"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "-er 後綴非重讀弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 318,
    "word": "fly",
    "pos": "v./n.",
    "chinese": "飛",
    "syllable": [
      "fly"
    ],
    "ipa": "/flaɪ/",
    "derivations": [
      {
        "syllable": "單音節［fly］",
        "rule": "子音叢 fl (R006) + 開音節 y 半母音 (R002)",
        "status": "【適用】",
        "reason": "fl- 子音叢開頭，單音節字尾 y 作母音結尾發長雙母音 /flaɪ/"
      }
    ]
  },
  {
    "id": 319,
    "word": "follow",
    "pos": "v.",
    "chinese": "遵循,跟隨",
    "syllable": [
      "fol",
      "low"
    ],
    "ipa": "/ˈfɑː.loʊ/",
    "derivations": [
      {
        "syllable": "第 1 音節［fol］",
        "rule": "雙子音中間切分 (VCCV) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "ll 子音中間切分，重音節母音 o 於閉音節常規發短母音 /ˈfɑːl/"
      },
      {
        "syllable": "第 2 音節［low］",
        "rule": "母音組合 ow (R004) → 非重讀長雙母音",
        "status": "【適用】",
        "reason": "字尾 -ow 處非重音節常規發長雙母音 /loʊ/"
      }
    ]
  },
  {
    "id": 320,
    "word": "food",
    "pos": "n.",
    "chinese": "食物",
    "syllable": [
      "food"
    ],
    "ipa": "/fuːd/",
    "derivations": [
      {
        "syllable": "單音節［food］",
        "rule": "母音組合 oo (R004)",
        "status": "【適用】",
        "reason": "oo 雙母音常規發長母音 /uː/，子音 d 結尾發 /fuːd/"
      }
    ]
  },
  {
    "id": 321,
    "word": "fool",
    "pos": "n./v.",
    "chinese": "傻瓜; 愚弄",
    "syllable": [
      "fool"
    ],
    "ipa": "/fuːl/",
    "derivations": [
      {
        "syllable": "單音節［fool］",
        "rule": "母音組合 oo (R004)",
        "status": "【適用】",
        "reason": "oo 雙母音常規發長母音 /uː/，舌尖齒齦音 l 結尾發 /fuːl/"
      }
    ]
  },
  {
    "id": 322,
    "word": "foot",
    "pos": "n./v.",
    "chinese": "腳",
    "syllable": [
      "foot"
    ],
    "ipa": "/fʊt/",
    "derivations": [
      {
        "syllable": "單音節［foot］",
        "rule": "母音組合 oo (R004) → 短音特例 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "oo 於 -t 前常規縮短發短母音 /fʊt/ (R010)"
      }
    ]
  },
  {
    "id": 323,
    "word": "for",
    "pos": "prep./conj.",
    "chinese": "為了",
    "syllable": [
      "for"
    ],
    "ipa": "/fɔːr/",
    "derivations": [
      {
        "syllable": "單音節［for］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "or 組合受 r 控制常規發長捲舌母音 /fɔːr/"
      }
    ]
  },
  {
    "id": 324,
    "word": "foreign",
    "pos": "adj.",
    "chinese": "外國的",
    "syllable": [
      "for",
      "eign"
    ],
    "ipa": "/ˈfɔːr.ən/",
    "derivations": [
      {
        "syllable": "第 1 音節［for］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "重音節 or 常規發捲舌母音 /ˈfɔːr/"
      },
      {
        "syllable": "第 2 音節［eign］",
        "rule": "特殊靜音 g (R006) + 弱化 (R008)",
        "status": "【適用】",
        "reason": "-eign 後綴中 g 靜音，母音非重讀弱化發 /ən/"
      }
    ]
  },
  {
    "id": 325,
    "word": "foreigner",
    "pos": "n.",
    "chinese": "外國人",
    "syllable": [
      "for",
      "eign",
      "er"
    ],
    "ipa": "/ˈfɔːr.ə.nɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［for］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "重音節 or 常規發捲舌母音 /ˈfɔːr/"
      },
      {
        "syllable": "第 2 音節［eign］",
        "rule": "特殊靜音 g (R006) + 弱化 (R008)",
        "status": "【適用】",
        "reason": "-eign 中 g 靜音，非重讀發 /ə/"
      },
      {
        "syllable": "第 3 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "-er 人稱名詞後綴非重讀弱化發 /nɚ/"
      }
    ]
  },
  {
    "id": 326,
    "word": "forget",
    "pos": "v.",
    "chinese": "忘記",
    "syllable": [
      "for",
      "get"
    ],
    "ipa": "/fɚˈɡɛt/",
    "derivations": [
      {
        "syllable": "第 1 音節［for］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "前綴 for- 處於非重讀音節，母音弱化發輕捲舌音 /fɚ/"
      },
      {
        "syllable": "第 2 音節［get］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 t 封閉且受主重音，母音 e 常規發短母音 /ˈɡɛt/"
      }
    ]
  },
  {
    "id": 327,
    "word": "fork",
    "pos": "n.",
    "chinese": "叉子",
    "syllable": [
      "fork"
    ],
    "ipa": "/fɔːrk/",
    "derivations": [
      {
        "syllable": "單音節［fork］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "or 組合受 r 控制常規發長捲舌母音 /ɔːr/，結合尾音 k 發 /fɔːrk/"
      }
    ]
  },
  {
    "id": 328,
    "word": "free",
    "pos": "adj./v./adv.",
    "chinese": "空閒的,免費",
    "syllable": [
      "free"
    ],
    "ipa": "/friː/",
    "derivations": [
      {
        "syllable": "單音節［free］",
        "rule": "子音叢 fr (R006) + 母音組合 ee (R004)",
        "status": "【適用】",
        "reason": "子音叢 fr- 開頭，雙母音 ee 常規發長母音 /friː/"
      }
    ]
  },
  {
    "id": 329,
    "word": "fresh",
    "pos": "adj.",
    "chinese": "新鮮的",
    "syllable": [
      "fresh"
    ],
    "ipa": "/frɛʃ/",
    "derivations": [
      {
        "syllable": "單音節［fresh］",
        "rule": "子音叢 fr (R006) + 閉音節 (R001) + 複合子音 sh (R006)",
        "status": "【適用】",
        "reason": "fr- 開頭，母音 e 於閉音節發短音 /frɛ/，sh 發單一摩擦音 /ʃ/"
      }
    ]
  },
  {
    "id": 330,
    "word": "friend",
    "pos": "n.",
    "chinese": "朋友",
    "syllable": [
      "friend"
    ],
    "ipa": "/frɛnd/",
    "derivations": [
      {
        "syllable": "單音節［friend］",
        "rule": "母音組合規則 (R004) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "ie 雙母音常規發長音 /iː/，此處特例發短母音 /frɛnd/ (R010)"
      }
    ]
  },
  {
    "id": 331,
    "word": "friendly",
    "pos": "adj.",
    "chinese": "友善的",
    "syllable": [
      "friend",
      "ly"
    ],
    "ipa": "/ˈfrɛnd.li/",
    "derivations": [
      {
        "syllable": "第 1 音節［friend］",
        "rule": "母音組合規則 (R004) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "friend 詞根特例發短母音 /ˈfrɛnd/ (R010)"
      },
      {
        "syllable": "第 2 音節［ly］",
        "rule": "開音節規則 (R002) → 字尾 y 半母音",
        "status": "【適用】",
        "reason": "-ly 後綴非重讀常規發長母音 /li/"
      }
    ]
  },
  {
    "id": 332,
    "word": "frog",
    "pos": "n.",
    "chinese": "青蛙",
    "syllable": [
      "frog"
    ],
    "ipa": "/frɑːɡ/",
    "derivations": [
      {
        "syllable": "單音節［frog］",
        "rule": "子音叢 fr (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "fr- 開頭，子音 g 封閉音節，單一母音 o 常規發短母音 /frɑːɡ/"
      }
    ]
  },
  {
    "id": 333,
    "word": "from",
    "pos": "prep.",
    "chinese": "從",
    "syllable": [
      "from"
    ],
    "ipa": "/frʌm/",
    "derivations": [
      {
        "syllable": "單音節［from］",
        "rule": "子音叢 fr (R006) + 閉音節規則 (R001) → 弱化短母音 (R010)",
        "status": "【適用 (部分轉移)】",
        "reason": "fr- 開頭，介系詞日常口語母音常規弱化發 /frʌm/ 或 /frəm/"
      }
    ]
  },
  {
    "id": 334,
    "word": "front",
    "pos": "adj./n.",
    "chinese": "前面",
    "syllable": [
      "front"
    ],
    "ipa": "/frʌnt/",
    "derivations": [
      {
        "syllable": "單音節［front］",
        "rule": "子音叢 fr (R006) + 閉音節規則 (R001) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "閉音節字母 o 常規發 /ɑː/，此處受鼻音叢 nt 影響特例發短母音 /frʌnt/ (R010)"
      }
    ]
  },
  {
    "id": 335,
    "word": "fruit",
    "pos": "n.",
    "chinese": "水果",
    "syllable": [
      "fruit"
    ],
    "ipa": "/fruːt/",
    "derivations": [
      {
        "syllable": "單音節［fruit］",
        "rule": "子音叢 fr (R006) + 母音組合 ui (R004)",
        "status": "【適用】",
        "reason": "fr- 開頭，ui 雙母音常規發長母音 /uː/，結合尾音 t 發 /fruːt/"
      }
    ]
  },
  {
    "id": 336,
    "word": "full",
    "pos": "adj.",
    "chinese": "滿的",
    "syllable": [
      "full"
    ],
    "ipa": "/fʊl/",
    "derivations": [
      {
        "syllable": "單音節［full］",
        "rule": "雙子音閉音節 (R001) → 特例短圓唇音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "閉音節 u 常規發 /ʌ/，在 -ll 前特例發後高短圓唇音 /fʊl/ (R010)"
      }
    ]
  },
  {
    "id": 337,
    "word": "fun",
    "pos": "n.",
    "chinese": "樂趣",
    "syllable": [
      "fun"
    ],
    "ipa": "/fʌn/",
    "derivations": [
      {
        "syllable": "單音節［fun］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 n 封閉音節，單一母音 u 常規發短母音 /fʌn/"
      }
    ]
  },
  {
    "id": 338,
    "word": "funny",
    "pos": "adj.",
    "chinese": "好笑的",
    "syllable": [
      "fun",
      "ny"
    ],
    "ipa": "/ˈfʌn.i/",
    "derivations": [
      {
        "syllable": "第 1 音節［fun］",
        "rule": "雙子音中間切分 (VCCV) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "nn 雙子音切分，重音節母音 u 常規發短母音 /ˈfʌn/"
      },
      {
        "syllable": "第 2 音節［ny］",
        "rule": "開音節規則 (R002) → 字尾 y 半母音",
        "status": "【適用】",
        "reason": "多音節字尾 y 非重讀時常規發長母音 /ni/"
      }
    ]
  },
  {
    "id": 339,
    "word": "future",
    "pos": "n./adj.",
    "chinese": "未來",
    "syllable": [
      "fu",
      "ture"
    ],
    "ipa": "/ˈfjuː.tʃɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［fu］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "母音 u 結尾受主重音，常規發長雙母音 /ˈfjuː/"
      },
      {
        "syllable": "第 2 音節［ture］",
        "rule": "成音節字尾 (R009) + 顎化音變 (R008)",
        "status": "【適用】",
        "reason": "-ture 後綴受 r 影響弱化發塞擦音 /tʃɚ/"
      }
    ]
  },
  {
    "id": 340,
    "word": "game",
    "pos": "n.",
    "chinese": "比賽,遊戲",
    "syllable": [
      "game"
    ],
    "ipa": "/ɡeɪm/",
    "derivations": [
      {
        "syllable": "單音節［game］",
        "rule": "魔術 e 規則 (R003) + 硬音 g (R007)",
        "status": "【適用】",
        "reason": "g 在 a 前發硬音 /ɡ/，a_e 促使母音 a 發字母長音 /ɡeɪm/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 341,
    "word": "garden",
    "pos": "n./v.",
    "chinese": "花園",
    "syllable": [
      "gar",
      "den"
    ],
    "ipa": "/ˈɡɑːr.dən/",
    "derivations": [
      {
        "syllable": "第 1 音節［gar］",
        "rule": "硬音 g (R007) + R 控制母音 ar (R005)",
        "status": "【適用】",
        "reason": "g 在 a 前發硬音 /ɡ/，重音節 ar 常規發長捲舌母音 /ˈɡɑːr/"
      },
      {
        "syllable": "第 2 音節［den］",
        "rule": "成音節/非重讀弱化 (R008/R009)",
        "status": "【適用】",
        "reason": "-den 後綴非重讀弱化，發成音節鼻音 /dən/"
      }
    ]
  },
  {
    "id": 342,
    "word": "gate",
    "pos": "n.",
    "chinese": "大門",
    "syllable": [
      "gate"
    ],
    "ipa": "/ɡeɪt/",
    "derivations": [
      {
        "syllable": "單音節［gate］",
        "rule": "魔術 e 規則 (R003) + 硬音 g (R007)",
        "status": "【適用】",
        "reason": "g 在 a 前發硬音 /ɡ/，a_e 促使母音 a 發字母長音 /ɡeɪt/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 343,
    "word": "get",
    "pos": "v.",
    "chinese": "得到",
    "syllable": [
      "get"
    ],
    "ipa": "/ɡɛt/",
    "derivations": [
      {
        "syllable": "單音節［get］",
        "rule": "閉音節 (R001) → 硬音 g 特例 (R010/R007)",
        "status": "【不適用 (例外轉移)】",
        "reason": "g 在 e 前原則發軟音 /dʒ/，此處為日耳曼語源特例保留硬音 /ɡɛt/ (R010)"
      }
    ]
  },
  {
    "id": 344,
    "word": "ghost",
    "pos": "n.",
    "chinese": "鬼",
    "syllable": [
      "ghost"
    ],
    "ipa": "/ɡoʊst/",
    "derivations": [
      {
        "syllable": "單音節［ghost］",
        "rule": "複合子音 gh (R006) + -ost 特例長母音 (R010/R002)",
        "status": "【不適用 (例外轉移)】",
        "reason": "gh 字母組合中 h 靜音發硬音 /ɡ/；-ost 組合中母音 o 特例發長雙母音 /ɡoʊst/ (R010)"
      }
    ]
  },
  {
    "id": 345,
    "word": "giant",
    "pos": "adj./n.",
    "chinese": "巨大的,巨人",
    "syllable": [
      "gi",
      "ant"
    ],
    "ipa": "/ˈdʒaɪ.ənt/",
    "derivations": [
      {
        "syllable": "第 1 音節［gi］",
        "rule": "軟音 g (R007) + 開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "g 在 i 前常規發軟音 /dʒ/，開音節母音 i 受主重音發長雙母音 /ˈdʒaɪ/"
      },
      {
        "syllable": "第 2 音節［ant］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-ant 後綴處於非重讀音節，母音弱化發 /ənt/"
      }
    ]
  },
  {
    "id": 346,
    "word": "gift",
    "pos": "n.",
    "chinese": "禮物",
    "syllable": [
      "gift"
    ],
    "ipa": "/ɡɪft/",
    "derivations": [
      {
        "syllable": "單音節［gift］",
        "rule": "閉音節 (R001) → 硬音 g 特例 (R010/R007)",
        "status": "【不適用 (例外轉移)】",
        "reason": "g 在 i 前原則發軟音 /dʒ/，此處特例發硬音 /ɡɪft/ (R010)"
      }
    ]
  },
  {
    "id": 347,
    "word": "girl",
    "pos": "n.",
    "chinese": "女孩",
    "syllable": [
      "girl"
    ],
    "ipa": "/ɡɝːl/",
    "derivations": [
      {
        "syllable": "單音節［girl］",
        "rule": "R 控制母音 ir (R005) → 硬音 g 特例 (R010/R007)",
        "status": "【不適用 (例外轉移)】",
        "reason": "g 在 i 前特例發硬音 /ɡ/ (R010)；ir 受 r 控制常規發長捲舌母音 /ɝːl/"
      }
    ]
  },
  {
    "id": 348,
    "word": "give",
    "pos": "v.",
    "chinese": "給予",
    "syllable": [
      "give"
    ],
    "ipa": "/ɡɪv/",
    "derivations": [
      {
        "syllable": "單音節［give］",
        "rule": "魔術 e 規則 (R003) → 硬音 g 與短母音特例 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "g 在 i 前特例發硬音 /ɡ/；字尾 e 未使 i 發長音，特例發短音 /ɡɪv/ (R010)"
      }
    ]
  },
  {
    "id": 349,
    "word": "glad",
    "pos": "adj.",
    "chinese": "高興的",
    "syllable": [
      "glad"
    ],
    "ipa": "/ɡlæd/",
    "derivations": [
      {
        "syllable": "單音節［glad］",
        "rule": "子音叢 gl (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音叢 gl- 開頭，子音 d 封閉音節，單一母音 a 常規發短母音 /ɡlæd/"
      }
    ]
  },
  {
    "id": 350,
    "word": "glass",
    "pos": "n.",
    "chinese": "玻璃,玻璃杯",
    "syllable": [
      "glass"
    ],
    "ipa": "/ɡlæs/",
    "derivations": [
      {
        "syllable": "單音節［glass］",
        "rule": "子音叢 gl (R006) + 雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "gl- 開頭，雙子音 ss 封閉音節，母音 a 常規發短母音 /ɡlæs/"
      }
    ]
  },
  {
    "id": 351,
    "word": "glasses",
    "pos": "n.",
    "chinese": "眼鏡",
    "syllable": [
      "glass",
      "es"
    ],
    "ipa": "/ˈɡlæs.ɪz/",
    "derivations": [
      {
        "syllable": "第 1 音節［glass］",
        "rule": "子音叢 gl (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "重音節母音 a 常規發短母音 /ˈɡlæs/"
      },
      {
        "syllable": "第 2 音節［es］",
        "rule": "名詞複數弱化後綴 (R008)",
        "status": "【適用】",
        "reason": "名詞以 s 結尾加 -es，發成音節弱化音 /ɪz/"
      }
    ]
  },
  {
    "id": 352,
    "word": "glove(s)",
    "pos": "n.",
    "chinese": "手套",
    "syllable": [
      "glove"
    ],
    "ipa": "/ɡlʌv/",
    "derivations": [
      {
        "syllable": "單音節［glove］",
        "rule": "魔術 e 規則 (R003) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "o_e 常規發長音 /oʊ/，此處受尾音 v 影響特例發短母音 /ɡlʌv/ (R010)"
      }
    ]
  },
  {
    "id": 353,
    "word": "go",
    "pos": "v./n.",
    "chinese": "去",
    "syllable": [
      "go"
    ],
    "ipa": "/ɡoʊ/",
    "derivations": [
      {
        "syllable": "單音節［go］",
        "rule": "開音節規則 (R002) + 硬音 g (R007)",
        "status": "【適用】",
        "reason": "g 在 o 前發硬音 /ɡ/，單一母音 o 於字尾開音節常規發字母長音 /ɡoʊ/"
      }
    ]
  },
  {
    "id": 354,
    "word": "god/goddess",
    "pos": "n.",
    "chinese": "神, 上帝; 女神",
    "syllable": [
      "god"
    ],
    "ipa": "/ɡɑːd/",
    "derivations": [
      {
        "syllable": "單音節［god］",
        "rule": "閉音節規則 (R001) + 硬音 g (R007)",
        "status": "【適用】",
        "reason": "g 在 o 前發硬音 /ɡ/，子音 d 封閉音節，單一母音 o 常規發短母音 /ɡɑːd/"
      }
    ]
  },
  {
    "id": 355,
    "word": "good",
    "pos": "adj./adv./n.",
    "chinese": "好的",
    "syllable": [
      "good"
    ],
    "ipa": "/ɡʊd/",
    "derivations": [
      {
        "syllable": "單音節［good］",
        "rule": "母音組合 oo (R004) → 短音特例 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "oo 在 d 前歷史演變為短母音 /ɡʊd/ (R010)"
      }
    ]
  },
  {
    "id": 356,
    "word": "goodbye",
    "pos": "n.",
    "chinese": "再見",
    "syllable": [
      "good",
      "bye"
    ],
    "ipa": "/ˌɡʊdˈbaɪ/",
    "derivations": [
      {
        "syllable": "第 1 音節［good］",
        "rule": "母音組合規則 (R004) → 短音特例 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "複合詞次重音 good 特例發短母音 /ˌɡʊd/ (R010)"
      },
      {
        "syllable": "第 2 音節［bye］",
        "rule": "開音節規則 (R002) → 特例長雙母音",
        "status": "【適用】",
        "reason": "字尾 -ye 受主重音發長雙母音 /ˈbaɪ/"
      }
    ]
  },
  {
    "id": 357,
    "word": "grade",
    "pos": "n./v.",
    "chinese": "成績,年級",
    "syllable": [
      "grade"
    ],
    "ipa": "/ɡreɪd/",
    "derivations": [
      {
        "syllable": "單音節［grade］",
        "rule": "子音叢 gr (R006) + 魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "gr- 開頭，a_e 促使母音 a 發字母長音 /ɡreɪd/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 358,
    "word": "grandfather",
    "pos": "n.",
    "chinese": "祖父",
    "syllable": [
      "grand",
      "fa",
      "ther"
    ],
    "ipa": "/ˈɡræn.fɑː.ðɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［grand］",
        "rule": "子音叢 gr (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音叢 nd 封閉且為重音節，母音 a 常規發短母音 /ˈɡræn/"
      },
      {
        "syllable": "第 2 音節［fa］",
        "rule": "開音節規則 (R002) → 特例後低母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "開音節 a 常規發長音 /eɪ/，father 詞根特例發後低母音 /fɑː/ (R010)"
      },
      {
        "syllable": "第 3 音節［ther］",
        "rule": "複合子音 th (R006) + R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "th 發濁咬舌音 /ð/，-er 弱化發輕捲舌母音 /ðɚ/"
      }
    ]
  },
  {
    "id": 359,
    "word": "grandmother",
    "pos": "n.",
    "chinese": "祖母",
    "syllable": [
      "grand",
      "moth",
      "er"
    ],
    "ipa": "/ˈɡræn.mʌð.ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［grand］",
        "rule": "子音叢 gr (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音叢 nd 封閉且為重音節，母音 a 常規發短母音 /ˈɡræn/"
      },
      {
        "syllable": "第 2 音節［moth］",
        "rule": "閉音節規則 (R001) → 特例短母音 (R010) + 複合子音 th (R006)",
        "status": "【不適用 (例外轉移)】",
        "reason": "mother 詞根之母音 o 特例發短母音 /mʌð/ (R010)，th 發濁咬舌音 /ð/"
      },
      {
        "syllable": "第 3 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "-er 後綴非重讀弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 360,
    "word": "grass",
    "pos": "n.",
    "chinese": "草",
    "syllable": [
      "grass"
    ],
    "ipa": "/ɡræs/",
    "derivations": [
      {
        "syllable": "單音節［grass］",
        "rule": "子音叢 gr (R006) + 雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "gr- 開頭，雙子音 ss 封閉音節，母音 a 常規發短母音 /ɡræs/"
      }
    ]
  },
  {
    "id": 361,
    "word": "gray",
    "pos": "adj./n./v.",
    "chinese": "灰色的",
    "syllable": [
      "gray"
    ],
    "ipa": "/ɡreɪ/",
    "derivations": [
      {
        "syllable": "單音節［gray］",
        "rule": "子音叢 gr (R006) + 母音組合 ay (R004)",
        "status": "【適用】",
        "reason": "gr- 開頭，字尾 ay 組合常規發長母音 /ɡreɪ/"
      }
    ]
  },
  {
    "id": 362,
    "word": "great",
    "pos": "adj./n.",
    "chinese": "很棒的",
    "syllable": [
      "great"
    ],
    "ipa": "/ɡreɪt/",
    "derivations": [
      {
        "syllable": "單音節［great］",
        "rule": "子音叢 gr (R006) + 母音組合規則 (R004) → 特例長雙母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "ea 組合常規發長母音 /iː/，此處特例發長雙母音 /ɡreɪt/ (R010)"
      }
    ]
  },
  {
    "id": 363,
    "word": "green",
    "pos": "adj./n./v.",
    "chinese": "綠色(的)",
    "syllable": [
      "green"
    ],
    "ipa": "/ɡriːn/",
    "derivations": [
      {
        "syllable": "單音節［green］",
        "rule": "子音叢 gr (R006) + 母音組合 ee (R004)",
        "status": "【適用】",
        "reason": "gr- 開頭，雙母音 ee 常規發長母音 /iː/，子音 n 結尾發 /ɡriːn/"
      }
    ]
  },
  {
    "id": 364,
    "word": "ground",
    "pos": "n./v.",
    "chinese": "地面",
    "syllable": [
      "ground"
    ],
    "ipa": "/ɡraʊnd/",
    "derivations": [
      {
        "syllable": "單音節［ground］",
        "rule": "子音叢 gr (R006) + 母音組合 ou (R004)",
        "status": "【適用】",
        "reason": "gr- 開頭，ou 雙母音常規發長雙母音 /aʊ/，結合 -nd 發 /ɡraʊnd/"
      }
    ]
  },
  {
    "id": 365,
    "word": "group",
    "pos": "n./v.",
    "chinese": "團體",
    "syllable": [
      "group"
    ],
    "ipa": "/ɡruːp/",
    "derivations": [
      {
        "syllable": "單音節［group］",
        "rule": "子音叢 gr (R006) + 母音組合 ou (R004) → 特例長母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "法語借詞 ou 常規發雙母音 /aʊ/，此處特例發長圓唇音 /ɡruːp/ (R010)"
      }
    ]
  },
  {
    "id": 366,
    "word": "grow",
    "pos": "v.",
    "chinese": "種植",
    "syllable": [
      "grow"
    ],
    "ipa": "/ɡroʊ/",
    "derivations": [
      {
        "syllable": "單音節［grow］",
        "rule": "子音叢 gr (R006) + 母音組合 ow (R004)",
        "status": "【適用】",
        "reason": "gr- 開頭，ow 字母組合常規發長雙母音 /ɡroʊ/"
      }
    ]
  },
  {
    "id": 367,
    "word": "guess",
    "pos": "v./n.",
    "chinese": "猜想",
    "syllable": [
      "guess"
    ],
    "ipa": "/ɡɛs/",
    "derivations": [
      {
        "syllable": "單音節［guess］",
        "rule": "子音叢 gu (R006) + 雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "gu- 組合中 u 靜音維持 g 硬音 /ɡ/，母音 e 於閉音節常規發短母音 /ɡɛs/"
      }
    ]
  },
  {
    "id": 368,
    "word": "guitar",
    "pos": "n.",
    "chinese": "吉他",
    "syllable": [
      "gui",
      "tar"
    ],
    "ipa": "/ɡɪˈtɑːr/",
    "derivations": [
      {
        "syllable": "第 1 音節［gui］",
        "rule": "子音叢 gu (R006) + 非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "gu- 中 u 靜音維持硬音 /ɡ/，非重讀母音 i 發短音 /ɡɪ/"
      },
      {
        "syllable": "第 2 音節［tar］",
        "rule": "R 控制母音 ar (R005)",
        "status": "【適用】",
        "reason": "重音節 ar 受主重音常規發長捲舌母音 /ˈtɑːr/"
      }
    ]
  },
  {
    "id": 369,
    "word": "guy",
    "pos": "n.",
    "chinese": "傢伙",
    "syllable": [
      "guy"
    ],
    "ipa": "/ɡaɪ/",
    "derivations": [
      {
        "syllable": "單音節［guy］",
        "rule": "硬音 g (R007) + 特殊母音組合 uy (R004)",
        "status": "【適用】",
        "reason": "uy 組合發長雙母音 /aɪ/，結合硬音 g 發 /ɡaɪ/"
      }
    ]
  },
  {
    "id": 370,
    "word": "habit",
    "pos": "n.",
    "chinese": "習慣",
    "syllable": [
      "hab",
      "it"
    ],
    "ipa": "/ˈhæb.ɪt/",
    "derivations": [
      {
        "syllable": "第 1 音節［hab］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 b 封閉且為重音節，母音 a 常規發短母音 /ˈhæb/"
      },
      {
        "syllable": "第 2 音節［it］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀閉音節，母音 i 弱化發短音 /ɪt/"
      }
    ]
  },
  {
    "id": 371,
    "word": "hair",
    "pos": "n.",
    "chinese": "頭法",
    "syllable": [
      "hair"
    ],
    "ipa": "/hɛr/",
    "derivations": [
      {
        "syllable": "單音節［hair］",
        "rule": "母音組合 air + R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "air 組合受 r 牽引常規發捲舌雙母音 /hɛr/"
      }
    ]
  },
  {
    "id": 372,
    "word": "half",
    "pos": "n./adv./adj.",
    "chinese": "一半",
    "syllable": [
      "half"
    ],
    "ipa": "/hæf/",
    "derivations": [
      {
        "syllable": "單音節［half］",
        "rule": "閉音節規則 (R001) → 靜音 l 特例 (R010/R006)",
        "status": "【不適用 (例外轉移)】",
        "reason": "-alf 結構中字母 l 靜音 (Silent L)，母音 a 發短母音 /hæf/ (R010)"
      }
    ]
  },
  {
    "id": 373,
    "word": "ham",
    "pos": "n.",
    "chinese": "火腿",
    "syllable": [
      "ham"
    ],
    "ipa": "/hæm/",
    "derivations": [
      {
        "syllable": "單音節［ham］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "鼻音 m 封閉音節，單一母音 a 常規發短母音 /hæm/"
      }
    ]
  },
  {
    "id": 374,
    "word": "hand",
    "pos": "n./v.",
    "chinese": "手",
    "syllable": [
      "hand"
    ],
    "ipa": "/hænd/",
    "derivations": [
      {
        "syllable": "單音節［hand］",
        "rule": "子音叢 nd (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音叢 nd 封閉音節，單一母音 a 常規發短母音 /hænd/"
      }
    ]
  },
  {
    "id": 375,
    "word": "hang",
    "pos": "v.",
    "chinese": "懸掛",
    "syllable": [
      "hang"
    ],
    "ipa": "/hæŋ/",
    "derivations": [
      {
        "syllable": "單音節［hang］",
        "rule": "閉音節規則 (R001) + 複合子音 ng (R006)",
        "status": "【適用】",
        "reason": "ng 鼻音保持完整，單一母音 a 發鼻音化短母音 /hæŋ/"
      }
    ]
  },
  {
    "id": 376,
    "word": "happen",
    "pos": "v.",
    "chinese": "發生",
    "syllable": [
      "hap",
      "pen"
    ],
    "ipa": "/ˈhæp.ən/",
    "derivations": [
      {
        "syllable": "第 1 音節［hap］",
        "rule": "雙子音中間切分 (VCCV) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "pp 雙子音切分，重音節母音 a 常規發短母音 /ˈhæp/"
      },
      {
        "syllable": "第 2 音節［pen］",
        "rule": "成音節/非重讀弱化 (R008/R009)",
        "status": "【適用】",
        "reason": "-pen 後綴非重讀弱化發輕母音 /ən/"
      }
    ]
  },
  {
    "id": 377,
    "word": "happy",
    "pos": "adj.",
    "chinese": "快樂的",
    "syllable": [
      "hap",
      "py"
    ],
    "ipa": "/ˈhæp.i/",
    "derivations": [
      {
        "syllable": "第 1 音節［hap］",
        "rule": "雙子音中間切分 (VCCV) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "pp 雙子音切分，重音節母音 a 常規發短母音 /ˈhæp/"
      },
      {
        "syllable": "第 2 音節［py］",
        "rule": "開音節規則 (R002) → 字尾 y 半母音",
        "status": "【適用】",
        "reason": "多音節字尾 y 非重讀時常規發長母音 /i/"
      }
    ]
  },
  {
    "id": 378,
    "word": "hard",
    "pos": "adj./adv.",
    "chinese": "困難的,硬的",
    "syllable": [
      "hard"
    ],
    "ipa": "/hɑːrd/",
    "derivations": [
      {
        "syllable": "單音節［hard］",
        "rule": "R 控制母音 ar (R005)",
        "status": "【適用】",
        "reason": "ar 組合受 r 控制常規發長捲舌母音 /ɑːrd/，全字發 /hɑːrd/"
      }
    ]
  },
  {
    "id": 379,
    "word": "hat",
    "pos": "n.",
    "chinese": "帽子",
    "syllable": [
      "hat"
    ],
    "ipa": "/hæt/",
    "derivations": [
      {
        "syllable": "單音節［hat］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 t 封閉音節，單一母音 a 常規發短母音 /hæt/"
      }
    ]
  },
  {
    "id": 380,
    "word": "hate",
    "pos": "v./n.",
    "chinese": "討厭",
    "syllable": [
      "hate"
    ],
    "ipa": "/heɪt/",
    "derivations": [
      {
        "syllable": "單音節［hate］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "a_e 促使前面母音 a 發字母長音 /heɪt/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 381,
    "word": "have",
    "pos": "aux./v.",
    "chinese": "有",
    "syllable": [
      "have"
    ],
    "ipa": "/hæv/",
    "derivations": [
      {
        "syllable": "單音節［have］",
        "rule": "魔術 e 規則 (R003) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "字尾 e 避免英語字尾為 v，母音 a 未發長音，特例發短母音 /hæv/ (R010)"
      }
    ]
  },
  {
    "id": 382,
    "word": "he (him, his, himself)",
    "pos": "pron.",
    "chinese": "他",
    "syllable": [
      "he"
    ],
    "ipa": "/hiː/",
    "derivations": [
      {
        "syllable": "單音節［he］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "單音節單一母音 e 結尾，常規發長母音 /hiː/"
      }
    ]
  },
  {
    "id": 383,
    "word": "head",
    "pos": "n./v.",
    "chinese": "頭",
    "syllable": [
      "head"
    ],
    "ipa": "/hɛd/",
    "derivations": [
      {
        "syllable": "單音節［head］",
        "rule": "母音組合規則 (R004) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "ea 組合常規發長音 /iː/，此處受歷史語音演變特例發短母音 /hɛd/ (R010)"
      }
    ]
  },
  {
    "id": 384,
    "word": "headache",
    "pos": "n.",
    "chinese": "頭痛",
    "syllable": [
      "head",
      "ache"
    ],
    "ipa": "/ˈhɛd.eɪk/",
    "derivations": [
      {
        "syllable": "第 1 音節［head］",
        "rule": "母音組合規則 (R004) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "head 詞素特例發短母音 /ˈhɛd/ (R010)"
      },
      {
        "syllable": "第 2 音節［ache］",
        "rule": "魔術 e (R003) + 複合子音 ch 發硬音 (R006/R010)",
        "status": "【適用 (部分轉移)】",
        "reason": "a_e 發長音 /eɪ/，ch 受希臘語源影響特例發硬音 /k/，產出 /ˈhɛd.eɪk/"
      }
    ]
  },
  {
    "id": 385,
    "word": "health",
    "pos": "n.",
    "chinese": "健康",
    "syllable": [
      "health"
    ],
    "ipa": "/hɛlθ/",
    "derivations": [
      {
        "syllable": "單音節［health］",
        "rule": "母音組合規則 (R004) → 特例短母音 (R010) + 複合子音 th (R006)",
        "status": "【不適用 (例外轉移)】",
        "reason": "ea 特例發短母音 /hɛl/ (R010)；字尾 th 發清咬舌音 /θ/ (R006)"
      }
    ]
  },
  {
    "id": 386,
    "word": "healthy",
    "pos": "adj.",
    "chinese": "健康的",
    "syllable": [
      "health",
      "y"
    ],
    "ipa": "/ˈhɛl.θi/",
    "derivations": [
      {
        "syllable": "第 1 音節［health］",
        "rule": "母音組合規則 (R004) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "health 詞根特例發短母音 /ˈhɛlθ/ (R010)"
      },
      {
        "syllable": "第 2 音節［y］",
        "rule": "開音節規則 (R002) → 字尾 y 半母音",
        "status": "【適用】",
        "reason": "形容詞後綴 -y 非重讀常規發長母音 /i/"
      }
    ]
  },
  {
    "id": 387,
    "word": "hear",
    "pos": "v.",
    "chinese": "聽",
    "syllable": [
      "hear"
    ],
    "ipa": "/hɪr/",
    "derivations": [
      {
        "syllable": "單音節［hear］",
        "rule": "母音組合 ear + R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "ear 組合受 r 牽引常規發捲舌音 /hɪr/"
      }
    ]
  },
  {
    "id": 388,
    "word": "heart",
    "pos": "n.",
    "chinese": "心",
    "syllable": [
      "heart"
    ],
    "ipa": "/hɑːrt/",
    "derivations": [
      {
        "syllable": "單音節［heart］",
        "rule": "母音組合規則 (R004) → 特例捲舌母音 (R010/R005)",
        "status": "【不適用 (例外轉移)】",
        "reason": "ear 常規發 /ɪr/ 或 /ɝː/，此處受中古英語演變特例發後低捲舌音 /hɑːrt/ (R010)"
      }
    ]
  },
  {
    "id": 389,
    "word": "heat",
    "pos": "n./v.",
    "chinese": "熱度,加熱",
    "syllable": [
      "heat"
    ],
    "ipa": "/hiːt/",
    "derivations": [
      {
        "syllable": "單音節［heat］",
        "rule": "母音組合 ea (R004)",
        "status": "【適用】",
        "reason": "ea 雙母音組合常規發長母音 /iː/，子音 t 結尾發 /hiːt/"
      }
    ]
  },
  {
    "id": 390,
    "word": "heavy",
    "pos": "adj.",
    "chinese": "重的",
    "syllable": [
      "heav",
      "y"
    ],
    "ipa": "/ˈhɛv.i/",
    "derivations": [
      {
        "syllable": "第 1 音節［heav］",
        "rule": "母音組合規則 (R004) → 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "ea 組合常規發長音 /iː/，此處受後續子音 v 影響特例發短母音 /ˈhɛv/ (R010)"
      },
      {
        "syllable": "第 2 音節［y］",
        "rule": "開音節規則 (R002) → 字尾 y 半母音",
        "status": "【適用】",
        "reason": "字尾 y 處非重讀音節常規發長母音 /i/"
      }
    ]
  },
  {
    "id": 391,
    "word": "height",
    "pos": "n.",
    "chinese": "高度, 身高",
    "syllable": [
      "height"
    ],
    "ipa": "/haɪt/",
    "derivations": [
      {
        "syllable": "單音節［height］",
        "rule": "母音組合規則 (R004) → 特例長雙母音 (R010) + 靜音 gh (R006)",
        "status": "【不適用 (例外轉移)】",
        "reason": "eigh 組合常規發 /eɪ/ (如 weight)，此處特例發長雙母音 /haɪt/，gh 靜音 (R010)"
      }
    ]
  },
  {
    "id": 392,
    "word": "hello",
    "pos": "n.",
    "chinese": "喂",
    "syllable": [
      "hel",
      "lo"
    ],
    "ipa": "/həˈloʊ/",
    "derivations": [
      {
        "syllable": "第 1 音節［hel］",
        "rule": "前綴非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 e 弱化發輕母音 /hə/"
      },
      {
        "syllable": "第 2 音節［lo］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "重音節母音 o 結尾，常規發長雙母音 /ˈloʊ/"
      }
    ]
  },
  {
    "id": 393,
    "word": "help",
    "pos": "v./n.",
    "chinese": "幫忙",
    "syllable": [
      "help"
    ],
    "ipa": "/hɛlp/",
    "derivations": [
      {
        "syllable": "單音節［help］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音叢 lp 封閉音節，單一母音 e 常規發短母音 /hɛlp/"
      }
    ]
  },
  {
    "id": 394,
    "word": "helpful",
    "pos": "adj.",
    "chinese": "有幫助的",
    "syllable": [
      "help",
      "ful"
    ],
    "ipa": "/ˈhɛlp.fəl/",
    "derivations": [
      {
        "syllable": "第 1 音節［help］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音叢 lp 封閉且為重音節，母音 e 常規發短母音 /ˈhɛlp/"
      },
      {
        "syllable": "第 2 音節［ful］",
        "rule": "形容詞後綴弱化 (R008)",
        "status": "【適用】",
        "reason": "-ful 後綴非重讀弱化發輕母音 /fəl/"
      }
    ]
  },
  {
    "id": 395,
    "word": "hen",
    "pos": "n.",
    "chinese": "母雞",
    "syllable": [
      "hen"
    ],
    "ipa": "/hɛn/",
    "derivations": [
      {
        "syllable": "單音節［hen］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 n 封閉音節，單一母音 e 常規發短母音 /hɛn/"
      }
    ]
  },
  {
    "id": 396,
    "word": "here",
    "pos": "adv./n.",
    "chinese": "這裡",
    "syllable": [
      "here"
    ],
    "ipa": "/hɪr/",
    "derivations": [
      {
        "syllable": "單音節［here］",
        "rule": "魔術 e (R003) + R 控制 (R005)",
        "status": "【適用】",
        "reason": "e_e 結合 r 發長捲舌音 /hɪr/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 397,
    "word": "hide",
    "pos": "v.",
    "chinese": "隱藏",
    "syllable": [
      "hide"
    ],
    "ipa": "/haɪd/",
    "derivations": [
      {
        "syllable": "單音節［hide］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 促使母音 i 發字母長音 /haɪd/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 398,
    "word": "high",
    "pos": "adj./adv./n.",
    "chinese": "高的",
    "syllable": [
      "high"
    ],
    "ipa": "/haɪ/",
    "derivations": [
      {
        "syllable": "單音節［high］",
        "rule": "母音組合 igh (R004) + 靜音 gh (R006)",
        "status": "【適用】",
        "reason": "igh 組合中 gh 靜音，母音 i 發長雙母音 /haɪ/"
      }
    ]
  },
  {
    "id": 399,
    "word": "hill",
    "pos": "n.",
    "chinese": "小山",
    "syllable": [
      "hill"
    ],
    "ipa": "/hɪl/",
    "derivations": [
      {
        "syllable": "單音節［hill］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 ll 封閉音節，單一母音 i 常規發短母音 /hɪl/"
      }
    ]
  },
  {
    "id": 400,
    "word": "history",
    "pos": "n.",
    "chinese": "歷史",
    "syllable": [
      "his",
      "to",
      "ry"
    ],
    "ipa": "/ˈhɪs.t̬ɚ.i/",
    "derivations": [
      {
        "syllable": "第 1 音節［his］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 s 封閉且為重音節，母音 i 常規發短母音 /ˈhɪs/"
      },
      {
        "syllable": "第 2 音節［to］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀母音 o 弱化，受美式 t 濁化發輕捲舌音 /t̬ɚ/"
      },
      {
        "syllable": "第 3 音節［ry］",
        "rule": "開音節規則 (R002) → 字尾 y 半母音",
        "status": "【適用】",
        "reason": "多音節字尾 y 非重讀時常規發長母音 /ri/"
      }
    ]
  }
];
