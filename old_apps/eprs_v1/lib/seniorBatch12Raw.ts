// EPRS Dataset Version: v1.6.0-rc2 (Batch 12 Candidate) | Generated: 2026-09-08
export interface SeniorWordRecord {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  level?: number;
  levelName?: string;
  derivations: {
    syllable: string;
    rule: string;
    status: string;
    reason: string;
  }[];
}

export const seniorBatch12Raw: SeniorWordRecord[] = [
  {
    "id": 1101,
    "word": "blood",
    "pos": "n.",
    "chinese": "血液, 血統",
    "syllable": [
      "blood"
    ],
    "ipa": "/blʌd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［blood］",
        "rule": "母音組合例外 (R004/R010)",
        "status": "【例外】",
        "reason": "歷史母音推移殘留：oo 不發長音 /uː/，特例發短母音 /ʌ/"
      }
    ]
  },
  {
    "id": 1102,
    "word": "board",
    "pos": "n./v.",
    "chinese": "木板, 董事會; 登機/船",
    "syllable": [
      "board"
    ],
    "ipa": "/bɔːrd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［board］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1103,
    "word": "boil",
    "pos": "n./v.",
    "chinese": "煮沸, 沸騰; 沸點",
    "syllable": [
      "boil"
    ],
    "ipa": "/bɔɪl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［boil］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1104,
    "word": "bone",
    "pos": "n.",
    "chinese": "骨頭, 骨骼",
    "syllable": [
      "bone"
    ],
    "ipa": "/boʊn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bone］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1105,
    "word": "bookstore",
    "pos": "n.",
    "chinese": "書店",
    "syllable": [
      "book",
      "store"
    ],
    "ipa": "/ˈbʊk.stɔːr/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［book］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      },
      {
        "syllable": "第 2 音節［store］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1106,
    "word": "border",
    "pos": "n./v.",
    "chinese": "邊界, 邊緣; 毗鄰",
    "syllable": [
      "bor",
      "der"
    ],
    "ipa": "/ˈbɔːr.dɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bor］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［der］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1107,
    "word": "bother",
    "pos": "v./n.",
    "chinese": "打擾, 煩惱; 麻煩",
    "syllable": [
      "both",
      "er"
    ],
    "ipa": "/ˈbɑː.ðɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［both］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1108,
    "word": "brain",
    "pos": "n.",
    "chinese": "大腦, 智力",
    "syllable": [
      "brain"
    ],
    "ipa": "/breɪn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［brain］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1109,
    "word": "branch",
    "pos": "n./v.",
    "chinese": "樹枝, 分支, 分行",
    "syllable": [
      "branch"
    ],
    "ipa": "/bræntʃ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［branch］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1110,
    "word": "brand",
    "pos": "n.",
    "chinese": "品牌, 商標; 銘刻",
    "syllable": [
      "brand"
    ],
    "ipa": "/brænd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［brand］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1111,
    "word": "brief",
    "pos": "adj./n./v.",
    "chinese": "簡短的; 概要, 簡報",
    "syllable": [
      "brief"
    ],
    "ipa": "/briːf/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［brief］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1112,
    "word": "brilliant",
    "pos": "adj.",
    "chinese": "燦爛的, 傑出的",
    "syllable": [
      "bril",
      "liant"
    ],
    "ipa": "/ˈbrɪl.jənt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bril］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［liant］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1113,
    "word": "broad",
    "pos": "adj.",
    "chinese": "寬廣的, 廣泛的",
    "syllable": [
      "broad"
    ],
    "ipa": "/brɔːd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［broad］",
        "rule": "母音組合例外 (R004/R010)",
        "status": "【例外】",
        "reason": "古英語歷史音變：oa 不發 /oʊ/，特例發開口長音 /ɔː/"
      }
    ]
  },
  {
    "id": 1114,
    "word": "brush",
    "pos": "n./v.",
    "chinese": "刷子, 畫筆; 刷拭",
    "syllable": [
      "brush"
    ],
    "ipa": "/brʌʃ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［brush］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1115,
    "word": "building",
    "pos": "n.",
    "chinese": "建築物, 大樓",
    "syllable": [
      "build",
      "ing"
    ],
    "ipa": "/ˈbɪl.dɪŋ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［build］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      },
      {
        "syllable": "第 2 音節［ing］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［ing］弱化發音"
      }
    ]
  },
  {
    "id": 1116,
    "word": "bun",
    "pos": "n.",
    "chinese": "小圓麵包, 髮髻",
    "syllable": [
      "bun"
    ],
    "ipa": "/bʌn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bun］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1117,
    "word": "burden",
    "pos": "n./v.",
    "chinese": "負擔, 重責; 加負擔於",
    "syllable": [
      "bur",
      "den"
    ],
    "ipa": "/ˈbɝː.dən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bur］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［den］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1118,
    "word": "burn",
    "pos": "v./n.",
    "chinese": "燃燒, 燒傷",
    "syllable": [
      "burn"
    ],
    "ipa": "/bɝːn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［burn］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1119,
    "word": "burst",
    "pos": "n./v.",
    "chinese": "爆裂, 突發; 爆發",
    "syllable": [
      "burst"
    ],
    "ipa": "/bɝːst/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［burst］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1120,
    "word": "businessman",
    "pos": "n.",
    "chinese": "商人, 企業家",
    "syllable": [
      "busi",
      "ness",
      "man"
    ],
    "ipa": "/ˈbɪz.nɪs.mæn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［busi］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ness］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      },
      {
        "syllable": "第 3 音節［man］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1121,
    "word": "cabbage",
    "pos": "n.",
    "chinese": "高麗菜, 甘藍菜",
    "syllable": [
      "cab",
      "bage"
    ],
    "ipa": "/ˈkæb.ɪdʒ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cab］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［bage］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1122,
    "word": "café/cafe",
    "pos": "n.",
    "chinese": "咖啡館, 輕食店",
    "syllable": [
      "ca",
      "fe"
    ],
    "ipa": "/kæfˈeɪ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ca］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "法語借詞首音節發 /kæf/"
      },
      {
        "syllable": "第 2 音節［fe］",
        "rule": "外來借詞 (R010)",
        "status": "【適用】",
        "reason": "法語借詞結尾 é 重讀發長雙母音 /eɪ/"
      }
    ]
  },
  {
    "id": 1123,
    "word": "cage",
    "pos": "n./v.",
    "chinese": "籠子, 鳥籠; 關入籠中",
    "syllable": [
      "cage"
    ],
    "ipa": "/keɪdʒ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cage］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1124,
    "word": "calendar",
    "pos": "n.",
    "chinese": "日曆, 行事曆",
    "syllable": [
      "cal",
      "en",
      "dar"
    ],
    "ipa": "/ˈkæl.ən.dɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cal］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［en］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      },
      {
        "syllable": "第 3 音節［dar］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1125,
    "word": "calm",
    "pos": "v./adj./n",
    "chinese": "平靜的, 鎮靜的; 使平靜",
    "syllable": [
      "calm"
    ],
    "ipa": "/kɑːm/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［calm］",
        "rule": "靜符子音規則 (R009)",
        "status": "【適用】",
        "reason": "字母組合 -alm 中 l 靜音不發音，a 發開口音 /ɑː/"
      }
    ]
  },
  {
    "id": 1126,
    "word": "camel",
    "pos": "n.",
    "chinese": "駱駝",
    "syllable": [
      "cam",
      "el"
    ],
    "ipa": "/ˈkæm.əl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cam］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［el］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1127,
    "word": "cancel",
    "pos": "v.",
    "chinese": "取消, 廢除",
    "syllable": [
      "can",
      "cel"
    ],
    "ipa": "/ˈkæn.səl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［can］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［cel］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1128,
    "word": "cancer",
    "pos": "n.",
    "chinese": "癌症, 巨蟹座",
    "syllable": [
      "can",
      "cer"
    ],
    "ipa": "/ˈkæn.sɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［can］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［cer］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1129,
    "word": "candle",
    "pos": "n.",
    "chinese": "蠟燭",
    "syllable": [
      "can",
      "dle"
    ],
    "ipa": "/ˈkæn.dəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［can］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［dle］",
        "rule": "子音+le 音節規則 (R013)",
        "status": "【適用】",
        "reason": "成音節字尾 ［C+le］ 自帶成音節輔音發 /əl/"
      }
    ]
  },
  {
    "id": 1130,
    "word": "capital",
    "pos": "n./adj.",
    "chinese": "首都, 資金; 主要的, 大寫的",
    "syllable": [
      "cap",
      "i",
      "tal"
    ],
    "ipa": "/ˈkæp.ə.t̬əl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cap］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［i］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［tal］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1131,
    "word": "cartoon",
    "pos": "n./v.",
    "chinese": "卡通, 動畫片; 畫漫畫",
    "syllable": [
      "car",
      "toon"
    ],
    "ipa": "/kɑːrˈtuːn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［car］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      },
      {
        "syllable": "第 2 音節［toon］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1132,
    "word": "cash",
    "pos": "n./v.",
    "chinese": "現金; 兌現",
    "syllable": [
      "cash"
    ],
    "ipa": "/kæʃ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cash］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1133,
    "word": "castle",
    "pos": "n.",
    "chinese": "城堡",
    "syllable": [
      "cas",
      "tle"
    ],
    "ipa": "/ˈkæs.əl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cas］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節 a 發短母音 /æ/"
      },
      {
        "syllable": "第 2 音節［tle］",
        "rule": "靜符子音與成音節 (R009/R013)",
        "status": "【適用】",
        "reason": "歷史簡化：t 靜音不發音，-le 構成成音節 /əl/"
      }
    ]
  },
  {
    "id": 1134,
    "word": "cause",
    "pos": "n./v.",
    "chinese": "原因, 起因; 導致",
    "syllable": [
      "cause"
    ],
    "ipa": "/kɔːz/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cause］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1135,
    "word": "ceiling",
    "pos": "n.",
    "chinese": "天花板, 最高限度",
    "syllable": [
      "ceil",
      "ing"
    ],
    "ipa": "/ˈsiː.lɪŋ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ceil］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      },
      {
        "syllable": "第 2 音節［ing］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［ing］弱化發音"
      }
    ]
  },
  {
    "id": 1136,
    "word": "cell",
    "pos": "n.",
    "chinese": "細胞, 單人牢房, 電池",
    "syllable": [
      "cell"
    ],
    "ipa": "/sel/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cell］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1137,
    "word": "centimeter",
    "pos": "n.",
    "chinese": "公分, 厘米",
    "syllable": [
      "cen",
      "ti",
      "me",
      "ter"
    ],
    "ipa": "/ˈsen.t̬əˌmiː.t̬ɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cen］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ti］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［me］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 4 音節［ter］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1138,
    "word": "central",
    "pos": "adj.",
    "chinese": "中央的, 中心的",
    "syllable": [
      "cen",
      "tral"
    ],
    "ipa": "/ˈsen.trəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cen］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［tral］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1139,
    "word": "century",
    "pos": "n.",
    "chinese": "世紀, 一百年",
    "syllable": [
      "cen",
      "tu",
      "ry"
    ],
    "ipa": "/ˈsen.tʃər.i/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cen］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［tu］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［ry］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1140,
    "word": "cereal",
    "pos": "n.",
    "chinese": "穀物, 麥片",
    "syllable": [
      "ce",
      "re",
      "al"
    ],
    "ipa": "/ˈsɪr.i.əl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ce］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 2 音節［re］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［al］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1141,
    "word": "chain",
    "pos": "n./v.",
    "chinese": "鏈條, 連鎖店; 拴住",
    "syllable": [
      "chain"
    ],
    "ipa": "/tʃeɪn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chain］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1142,
    "word": "chalk",
    "pos": "n./v.",
    "chinese": "粉筆",
    "syllable": [
      "chalk"
    ],
    "ipa": "/tʃɔːk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chalk］",
        "rule": "靜符子音與複合子音 (R009/R006)",
        "status": "【適用】",
        "reason": "ch 發 /tʃ/，-alk 組合中 l 靜音，a 發圓唇長音 /ɔː/"
      }
    ]
  },
  {
    "id": 1143,
    "word": "challenge",
    "pos": "n./v.",
    "chinese": "挑戰; 向...挑戰",
    "syllable": [
      "chal",
      "lenge"
    ],
    "ipa": "/ˈtʃæl.ɪndʒ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chal］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［lenge］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1144,
    "word": "channel",
    "pos": "n./v.",
    "chinese": "頻道, 海峽, 途徑",
    "syllable": [
      "chan",
      "nel"
    ],
    "ipa": "/ˈtʃæn.əl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chan］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［nel］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1145,
    "word": "chapter",
    "pos": "n.",
    "chinese": "章節, 回",
    "syllable": [
      "chap",
      "ter"
    ],
    "ipa": "/ˈtʃæp.tɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chap］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ter］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1146,
    "word": "character",
    "pos": "n.",
    "chinese": "性格, 特色, 角色, 漢字",
    "syllable": [
      "char",
      "ac",
      "ter"
    ],
    "ipa": "/ˈkær.ək.tɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［char］",
        "rule": "複合子音借詞例外 (R006/R010)",
        "status": "【適用】",
        "reason": "希臘借詞：ch 發硬音 /k/，母音發 /ær/"
      },
      {
        "syllable": "第 2 音節［ac］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發 /ək/"
      },
      {
        "syllable": "第 3 音節［ter］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀後綴 er 弱化發輕捲舌音 /tɚ/"
      }
    ]
  },
  {
    "id": 1147,
    "word": "charge",
    "pos": "n./v.",
    "chinese": "收費, 控告, 充電; 費用",
    "syllable": [
      "charge"
    ],
    "ipa": "/tʃɑːrdʒ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［charge］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1148,
    "word": "chart",
    "pos": "n.",
    "chinese": "圖表, 航海圖; 繪製圖表",
    "syllable": [
      "chart"
    ],
    "ipa": "/tʃɑːrt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chart］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1149,
    "word": "chase",
    "pos": "n./v.",
    "chinese": "追逐, 追求; 追趕",
    "syllable": [
      "chase"
    ],
    "ipa": "/tʃeɪs/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chase］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1150,
    "word": "cheat",
    "pos": "v./n.",
    "chinese": "欺騙, 作弊; 騙子",
    "syllable": [
      "cheat"
    ],
    "ipa": "/tʃiːt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cheat］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1151,
    "word": "cheer",
    "pos": "v./n.",
    "chinese": "歡呼, 激勵; 乾杯",
    "syllable": [
      "cheer"
    ],
    "ipa": "/tʃɪr/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cheer］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1152,
    "word": "chemical",
    "pos": "adj./n.",
    "chinese": "化學的; 化學製品",
    "syllable": [
      "chem",
      "i",
      "cal"
    ],
    "ipa": "/ˈkem.ɪ.kəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chem］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［i］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［cal］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1153,
    "word": "chess",
    "pos": "n.",
    "chinese": "西洋棋, 國際象棋",
    "syllable": [
      "chess"
    ],
    "ipa": "/tʃes/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chess］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1154,
    "word": "chief",
    "pos": "adj./n.",
    "chinese": "首領, 長官; 主要的, 首席的",
    "syllable": [
      "chief"
    ],
    "ipa": "/tʃiːf/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chief］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1155,
    "word": "childhood",
    "pos": "n.",
    "chinese": "童年時期",
    "syllable": [
      "child",
      "hood"
    ],
    "ipa": "/ˈtʃaɪld.hʊd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［child］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［hood］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［hood］弱化發音"
      }
    ]
  },
  {
    "id": 1156,
    "word": "childish",
    "pos": "adj.",
    "chinese": "幼稚的, 孩子氣的",
    "syllable": [
      "child",
      "ish"
    ],
    "ipa": "/ˈtʃaɪl.dɪʃ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［child］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ish］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［ish］弱化發音"
      }
    ]
  },
  {
    "id": 1157,
    "word": "china",
    "pos": "n.",
    "chinese": "瓷器 (小寫); 中國 (大寫)",
    "syllable": [
      "chi",
      "na"
    ],
    "ipa": "/ˈtʃaɪ.nə/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chi］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 2 音節［na］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1158,
    "word": "chopstick(s)",
    "pos": "n.",
    "chinese": "筷子",
    "syllable": [
      "chop",
      "stick"
    ],
    "ipa": "/ˈtʃɑːp.stɪk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［chop］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［stick］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1159,
    "word": "claim",
    "pos": "n./v.",
    "chinese": "聲稱, 主張, 索賠",
    "syllable": [
      "claim"
    ],
    "ipa": "/kleɪm/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［claim］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1160,
    "word": "clap",
    "pos": "v./n.",
    "chinese": "拍手, 鼓掌; 掌聲",
    "syllable": [
      "clap"
    ],
    "ipa": "/klæp/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［clap］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1161,
    "word": "classic",
    "pos": "adj./n.",
    "chinese": "經典的, 典範的; 名著",
    "syllable": [
      "clas",
      "sic"
    ],
    "ipa": "/ˈklæs.ɪk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［clas］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［sic］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1162,
    "word": "classical",
    "pos": "adj.",
    "chinese": "古典的, 傳統的",
    "syllable": [
      "clas",
      "si",
      "cal"
    ],
    "ipa": "/ˈklæs.ə.kəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［clas］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［si］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［cal］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1163,
    "word": "classmate",
    "pos": "n.",
    "chinese": "同班同學",
    "syllable": [
      "class",
      "mate"
    ],
    "ipa": "/ˈklæs.meɪt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［class］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［mate］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1164,
    "word": "clever",
    "pos": "adj.",
    "chinese": "聰明的, 機敏的",
    "syllable": [
      "clev",
      "er"
    ],
    "ipa": "/ˈklev.ɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［clev］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1165,
    "word": "click",
    "pos": "v./n.",
    "chinese": "點擊, 發出喀噠聲; 點擊聲",
    "syllable": [
      "click"
    ],
    "ipa": "/klɪk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［click］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1166,
    "word": "climate",
    "pos": "n.",
    "chinese": "氣候, 風氣",
    "syllable": [
      "cli",
      "mate"
    ],
    "ipa": "/ˈklaɪ.mət/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cli］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 2 音節［mate］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1167,
    "word": "cloth",
    "pos": "n.",
    "chinese": "布料, 抹布",
    "syllable": [
      "cloth"
    ],
    "ipa": "/klɔːθ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cloth］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1168,
    "word": "clothing",
    "pos": "n.",
    "chinese": "衣服, 服裝 (總稱)",
    "syllable": [
      "cloth",
      "ing"
    ],
    "ipa": "/ˈkloʊ.ðɪŋ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cloth］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ing］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［ing］弱化發音"
      }
    ]
  },
  {
    "id": 1169,
    "word": "cloudy",
    "pos": "adj.",
    "chinese": "多雲的, 陰天的",
    "syllable": [
      "cloud",
      "y"
    ],
    "ipa": "/ˈklaʊ.di/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cloud］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      },
      {
        "syllable": "第 2 音節［y］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1170,
    "word": "coal",
    "pos": "n.",
    "chinese": "煤炭, 煤塊",
    "syllable": [
      "coal"
    ],
    "ipa": "/koʊl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［coal］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1171,
    "word": "coast",
    "pos": "n.",
    "chinese": "海岸, 沿海地區",
    "syllable": [
      "coast"
    ],
    "ipa": "/koʊst/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［coast］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1172,
    "word": "cockroach/roach",
    "pos": "n.",
    "chinese": "蟑螂",
    "syllable": [
      "cock",
      "roach"
    ],
    "ipa": "/ˈkɑːk.roʊtʃ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cock］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［roach］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1173,
    "word": "cocoa",
    "pos": "n.",
    "chinese": "可可粉, 熱可可飲料",
    "syllable": [
      "co",
      "coa"
    ],
    "ipa": "/ˈkoʊ.koʊ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［co］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節 o 發長雙母音 /oʊ/"
      },
      {
        "syllable": "第 2 音節［coa］",
        "rule": "母音組合例外 (R004/R010)",
        "status": "【例外】",
        "reason": "外來語音變：字尾 oa 簡化發 /koʊ/"
      }
    ]
  },
  {
    "id": 1174,
    "word": "coin",
    "pos": "n./v.",
    "chinese": "硬幣, 錢幣; 創造 (新詞)",
    "syllable": [
      "coin"
    ],
    "ipa": "/kɔɪn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［coin］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1175,
    "word": "cola/Coke",
    "pos": "n.",
    "chinese": "高中核心詞彙",
    "syllable": [
      "cola/Coke"
    ],
    "ipa": "/cola/Coke/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［cola/Coke］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1176,
    "word": "college",
    "pos": "n.",
    "chinese": "大學, 學院",
    "syllable": [
      "col",
      "lege"
    ],
    "ipa": "/ˈkɑː.lɪdʒ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［col］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［lege］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1177,
    "word": "comb",
    "pos": "n./v.",
    "chinese": "梳子; 梳理",
    "syllable": [
      "comb"
    ],
    "ipa": "/koʊm/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［comb］",
        "rule": "靜符子音規則 (R009)",
        "status": "【適用】",
        "reason": "字尾 -mb 組合中 b 保持靜音，o 發字母長音 /oʊ/"
      }
    ]
  },
  {
    "id": 1178,
    "word": "combine",
    "pos": "v.",
    "chinese": "結合, 聯合; 收割機",
    "syllable": [
      "com",
      "bine"
    ],
    "ipa": "/kəmˈbaɪn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［com］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［com］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［bine］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1179,
    "word": "comic(s)",
    "pos": "adj./n.",
    "chinese": "滑稽的; 連環漫畫",
    "syllable": [
      "com",
      "ic"
    ],
    "ipa": "/ˈkɑː.mɪk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［com］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ic］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1180,
    "word": "command",
    "pos": "n./v.",
    "chinese": "命令, 指揮, 掌控",
    "syllable": [
      "com",
      "mand"
    ],
    "ipa": "/kəˈmænd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［com］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［com］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［mand］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1181,
    "word": "commercial",
    "pos": "adj./n.",
    "chinese": "商業的, 營利的; 電視廣告",
    "syllable": [
      "com",
      "mer",
      "cial"
    ],
    "ipa": "/kəˈmɝː.ʃəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［com］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［com］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［mer］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 3 音節［cial］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［cial］弱化發音"
      }
    ]
  },
  {
    "id": 1182,
    "word": "company",
    "pos": "n.",
    "chinese": "公司, 陪伴, 伴侶",
    "syllable": [
      "com",
      "pa",
      "ny"
    ],
    "ipa": "/ˈkʌm.pə.ni/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［com］",
        "rule": "例外音標字 (R010)",
        "status": "【例外】",
        "reason": "歷史音變：重讀 o 不發 /ɑː/，特例發央短音 /ʌ/"
      },
      {
        "syllable": "第 2 音節［pa］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀開音節弱化發輕母音 /pə/"
      },
      {
        "syllable": "第 3 音節［ny］",
        "rule": "開音節字尾 (R002)",
        "status": "【適用】",
        "reason": "非重讀字尾 y 發 /ni/"
      }
    ]
  },
  {
    "id": 1183,
    "word": "compare",
    "pos": "v.",
    "chinese": "比較, 對比, 比擬",
    "syllable": [
      "com",
      "pare"
    ],
    "ipa": "/kəmˈper/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［com］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［com］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［pare］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1184,
    "word": "complete",
    "pos": "adj./v.",
    "chinese": "完整的, 完成的; 完成",
    "syllable": [
      "com",
      "plete"
    ],
    "ipa": "/kəmˈpliːt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［com］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［com］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［plete］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1185,
    "word": "complex",
    "pos": "adj./n.",
    "chinese": "複雜的; 綜合體, 情結",
    "syllable": [
      "com",
      "plex"
    ],
    "ipa": "/ˈkɑːm.pleks/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［com］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［plex］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1186,
    "word": "concern",
    "pos": "n./v.",
    "chinese": "關心, 關切; 涉及, 使擔憂",
    "syllable": [
      "con",
      "cern"
    ],
    "ipa": "/kənˈsɝːn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［cern］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1187,
    "word": "conclude",
    "pos": "v.",
    "chinese": "締結, 斷定, 下結論",
    "syllable": [
      "con",
      "clude"
    ],
    "ipa": "/kənˈkluːd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［clude］",
        "rule": "魔術 E 規則 (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1188,
    "word": "condition",
    "pos": "n./v.",
    "chinese": "條件, 狀況, 疾病; 調理",
    "syllable": [
      "con",
      "di",
      "tion"
    ],
    "ipa": "/kənˈdɪʃ.ən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［di］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 3 音節［tion］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［tion］弱化發音"
      }
    ]
  },
  {
    "id": 1189,
    "word": "confident",
    "pos": "adj.",
    "chinese": "有信心的, 自信的",
    "syllable": [
      "con",
      "fi",
      "dent"
    ],
    "ipa": "/ˈkɑːn.fə.dənt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［fi］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［dent］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1190,
    "word": "conflict",
    "pos": "n./v.",
    "chinese": "衝突, 矛盾; 爭執",
    "syllable": [
      "con",
      "flict"
    ],
    "ipa": "/ˈkɑːn.flɪkt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［flict］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1191,
    "word": "congratulation(s)",
    "pos": "n.",
    "chinese": "祝賀, 恭喜",
    "syllable": [
      "con",
      "grat",
      "u",
      "la",
      "tion"
    ],
    "ipa": "/kənˌɡrætʃ.əˈleɪ.ʃən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［grat］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      },
      {
        "syllable": "第 3 音節［u］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 4 音節［la］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 5 音節［tion］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［tion］弱化發音"
      }
    ]
  },
  {
    "id": 1192,
    "word": "connection",
    "pos": "n.",
    "chinese": "連接, 關係, 人脈",
    "syllable": [
      "con",
      "nec",
      "tion"
    ],
    "ipa": "/kəˈnek.ʃən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［nec］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 3 音節［tion］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［tion］弱化發音"
      }
    ]
  },
  {
    "id": 1193,
    "word": "consider",
    "pos": "v.",
    "chinese": "考慮, 認為, 體諒",
    "syllable": [
      "con",
      "sid",
      "er"
    ],
    "ipa": "/kənˈsɪd.ɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［sid］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 3 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1194,
    "word": "consideration",
    "pos": "n.",
    "chinese": "考慮, 體貼, 報酬",
    "syllable": [
      "con",
      "sid",
      "er",
      "a",
      "tion"
    ],
    "ipa": "/kənˌsɪd.əˈreɪ.ʃən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［sid］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      },
      {
        "syllable": "第 3 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      },
      {
        "syllable": "第 4 音節［a］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 5 音節［tion］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［tion］弱化發音"
      }
    ]
  },
  {
    "id": 1195,
    "word": "contact",
    "pos": "n./v.",
    "chinese": "接觸, 聯繫; 聯絡",
    "syllable": [
      "con",
      "tact"
    ],
    "ipa": "/ˈkɑːn.tækt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［tact］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1196,
    "word": "contain",
    "pos": "v.",
    "chinese": "包含, 容納, 控制",
    "syllable": [
      "con",
      "tain"
    ],
    "ipa": "/kənˈteɪn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［tain］",
        "rule": "母音字母組合 (R004)",
        "status": "【適用】",
        "reason": "相連母音字母組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1197,
    "word": "continue",
    "pos": "v.",
    "chinese": "繼續, 持續, 延伸",
    "syllable": [
      "con",
      "tin",
      "ue"
    ],
    "ipa": "/kənˈtɪn.juː/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［tin］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 3 音節［ue］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1198,
    "word": "contract",
    "pos": "n./v.",
    "chinese": "合約, 契約; 訂契約, 收縮",
    "syllable": [
      "con",
      "tract"
    ],
    "ipa": "/ˈkɑːn.trækt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［tract］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1199,
    "word": "control",
    "pos": "n./v.",
    "chinese": "控制, 支配; 控制權",
    "syllable": [
      "con",
      "trol"
    ],
    "ipa": "/kənˈtroʊl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［trol］",
        "rule": "閉音節短母音 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1200,
    "word": "conversation",
    "pos": "n.",
    "chinese": "對話, 交談",
    "syllable": [
      "con",
      "ver",
      "sa",
      "tion"
    ],
    "ipa": "/ˌkɑːn.vɚˈseɪ.ʃən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［con］",
        "rule": "非重讀前綴弱化 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［con］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［ver］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      },
      {
        "syllable": "第 3 音節［sa］",
        "rule": "開音節長母音 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 4 音節［tion］",
        "rule": "字首字尾與詞構規則 (R011)",
        "status": "【適用】",
        "reason": "非重讀固定後綴［tion］弱化發音"
      }
    ]
  }
];
