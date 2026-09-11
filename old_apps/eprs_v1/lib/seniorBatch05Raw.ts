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

export const seniorBatch05Raw: SeniorWordRecord[] = [
  {
    "id": 401,
    "word": "hit",
    "pos": "v./n.",
    "chinese": "打擊",
    "syllable": [
      "hit"
    ],
    "ipa": "/hɪt/",
    "derivations": [
      {
        "syllable": "單音節［hit］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 t 封閉音節，單一母音 i 常規發短母音 /hɪt/"
      }
    ]
  },
  {
    "id": 402,
    "word": "hobby",
    "pos": "n.",
    "chinese": "嗜好",
    "syllable": [
      "hob",
      "by"
    ],
    "ipa": "/ˈhɑː.bi/",
    "derivations": [
      {
        "syllable": "第 1 音節［hob］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 bb 切分，重音節母音 o 常規發短母音 /ˈhɑːb/"
      },
      {
        "syllable": "第 2 音節［by］",
        "rule": "開音節規則 (R002) → 字尾 y 半母音",
        "status": "【適用】",
        "reason": "字尾 y 處非重音節，常規發長母音 /bi/"
      }
    ]
  },
  {
    "id": 403,
    "word": "hold",
    "pos": "v./n.",
    "chinese": "拿著",
    "syllable": [
      "hold"
    ],
    "ipa": "/hoʊld/",
    "derivations": [
      {
        "syllable": "單音節［hold］",
        "rule": "閉音節規則 (R001) → 特例長母音 -old (R010/R002)",
        "status": "【不適用 (例外轉移)】",
        "reason": "-old 組合打破一般閉音節規則，歷史長音化使母音 o 發長雙母音 /hoʊld/ (R010)"
      }
    ]
  },
  {
    "id": 404,
    "word": "holiday",
    "pos": "n.",
    "chinese": "假日",
    "syllable": [
      "hol",
      "i",
      "day"
    ],
    "ipa": "/ˈhɑː.lə.deɪ/",
    "derivations": [
      {
        "syllable": "第 1 音節［hol］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 l 封閉重音節，母音 o 常規發短母音 /ˈhɑːl/"
      },
      {
        "syllable": "第 2 音節［i］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀單一母音 i 弱化發輕母音 /ə/"
      },
      {
        "syllable": "第 3 音節［day］",
        "rule": "母音組合 ay (R004)",
        "status": "【適用】",
        "reason": "ay 字母組合處字尾固定發長雙母音 /deɪ/"
      }
    ]
  },
  {
    "id": 405,
    "word": "home",
    "pos": "n./adv./v./adj.",
    "chinese": "家",
    "syllable": [
      "home"
    ],
    "ipa": "/hoʊm/",
    "derivations": [
      {
        "syllable": "單音節［home］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "o_e 結構中字尾 e 靜音，母音 o 常規發長雙母音 /hoʊm/"
      }
    ]
  },
  {
    "id": 406,
    "word": "homework",
    "pos": "n.",
    "chinese": "家庭作業",
    "syllable": [
      "home",
      "work"
    ],
    "ipa": "/ˈhoʊm.wɝːk/",
    "derivations": [
      {
        "syllable": "第 1 音節［home］",
        "rule": "複合字 (Compound) + 魔術 e (R003)",
        "status": "【適用】",
        "reason": "o_e 結構字尾 e 靜音，母音 o 發長音 /ˈhoʊm/"
      },
      {
        "syllable": "第 2 音節［work］",
        "rule": "複合字 (Compound) + R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "w 後之 or 特殊受捲舌音同化發 /wɝːk/"
      }
    ]
  },
  {
    "id": 407,
    "word": "honest",
    "pos": "adj.",
    "chinese": "誠實的",
    "syllable": [
      "hon",
      "est"
    ],
    "ipa": "/ˈɑː.nɪst/",
    "derivations": [
      {
        "syllable": "第 1 音節［hon］",
        "rule": "靜音 h (R006) + 閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "字首 h 靜音不發音，子音 n 封閉音節，母音 o 發短母音 /ˈɑːn/"
      },
      {
        "syllable": "第 2 音節［est］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀 -est 尾音弱化發短音 /ɪst/"
      }
    ]
  },
  {
    "id": 408,
    "word": "honey",
    "pos": "n.",
    "chinese": "蜂蜜",
    "syllable": [
      "hon",
      "ey"
    ],
    "ipa": "/ˈhʌn.i/",
    "derivations": [
      {
        "syllable": "第 1 音節［hon］",
        "rule": "閉音節短母音 (R001) → 特例母音轉移 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "重音節母音 o 特殊轉移發短促中舌母音 /ˈhʌn/ 而非 /ɑː/ (R010)"
      },
      {
        "syllable": "第 2 音節［ey］",
        "rule": "母音組合 ey (R004)",
        "status": "【適用】",
        "reason": "字尾 -ey 處非重音節常規發短長母音 /i/"
      }
    ]
  },
  {
    "id": 409,
    "word": "hope",
    "pos": "v./n.",
    "chinese": "希望",
    "syllable": [
      "hope"
    ],
    "ipa": "/hoʊp/",
    "derivations": [
      {
        "syllable": "單音節［hope］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "o_e 結構中字尾 e 靜音，母音 o 常規發字母長音 /hoʊp/"
      }
    ]
  },
  {
    "id": 410,
    "word": "horse",
    "pos": "n.",
    "chinese": "馬",
    "syllable": [
      "horse"
    ],
    "ipa": "/hɔːrs/",
    "derivations": [
      {
        "syllable": "單音節［horse］",
        "rule": "R 控制母音 or (R005) + 尾音 se (R006)",
        "status": "【適用】",
        "reason": "or 受捲舌音控制發 /ɔːr/，字尾 se 發清音 /s/，全字發 /hɔːrs/"
      }
    ]
  },
  {
    "id": 411,
    "word": "hospital",
    "pos": "n.",
    "chinese": "醫院",
    "syllable": [
      "hos",
      "pi",
      "tal"
    ],
    "ipa": "/ˈhɑː.spɪ.t̬əl/",
    "derivations": [
      {
        "syllable": "第 1 音節［hos］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 s 封閉重音節，母音 o 常規發短母音 /ˈhɑːs/"
      },
      {
        "syllable": "第 2 音節［pi］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 i 弱化發輕短音 /pɪ/"
      },
      {
        "syllable": "第 3 音節［tal］",
        "rule": "成音節字尾 (R009) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "-tal 處字尾弱化發成音節邊音 /t̬əl/"
      }
    ]
  },
  {
    "id": 412,
    "word": "hot",
    "pos": "adj.",
    "chinese": "熱的",
    "syllable": [
      "hot"
    ],
    "ipa": "/hɑːt/",
    "derivations": [
      {
        "syllable": "單音節［hot］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "單一子音 t 封閉，母音 o 常規發短母音 /hɑːt/"
      }
    ]
  },
  {
    "id": 413,
    "word": "hotel",
    "pos": "n.",
    "chinese": "旅社",
    "syllable": [
      "ho",
      "tel"
    ],
    "ipa": "/hoʊˈtɛl/",
    "derivations": [
      {
        "syllable": "第 1 音節［ho］",
        "rule": "開音節非重讀弱化 (R002/R008)",
        "status": "【適用】",
        "reason": "母音 o 處於非重讀開音節，發次重長音 /hoʊ/"
      },
      {
        "syllable": "第 2 音節［tel］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "重音落在第二音節，子音 l 封閉，母音 e 常規發短母音 /ˈtɛl/"
      }
    ]
  },
  {
    "id": 414,
    "word": "hour",
    "pos": "n.",
    "chinese": "小時",
    "syllable": [
      "hour"
    ],
    "ipa": "/ˈaʊ.ɚ/",
    "derivations": [
      {
        "syllable": "單音節［hour］",
        "rule": "靜音 h (R006) + 母音組合 ou (R004) + R 控制 (R005)",
        "status": "【適用】",
        "reason": "字首 h 靜音，ou 發雙母音 /aʊ/，結尾 r 捲舌帶出三合音雙音拍 /ˈaʊ.ɚ/"
      }
    ]
  },
  {
    "id": 415,
    "word": "house",
    "pos": "n./v.",
    "chinese": "房屋",
    "syllable": [
      "house"
    ],
    "ipa": "/haʊs/",
    "derivations": [
      {
        "syllable": "單音節［house］",
        "rule": "母音組合 ou (R004) + 尾音 se (R006)",
        "status": "【適用】",
        "reason": "ou 常規發雙母音 /aʊ/，字尾 se 發清子音 /s/，全字發 /haʊs/"
      }
    ]
  },
  {
    "id": 416,
    "word": "housewife",
    "pos": "n.",
    "chinese": "家庭主婦",
    "syllable": [
      "house",
      "wife"
    ],
    "ipa": "/ˈhaʊs.waɪf/",
    "derivations": [
      {
        "syllable": "第 1 音節［house］",
        "rule": "複合字 (Compound) + 母音組合 ou (R004)",
        "status": "【適用】",
        "reason": "ou 發雙母音 /ˈhaʊs/"
      },
      {
        "syllable": "第 2 音節［wife］",
        "rule": "複合字 (Compound) + 魔術 e (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 常規發長音 /waɪf/"
      }
    ]
  },
  {
    "id": 417,
    "word": "how",
    "pos": "adv.",
    "chinese": "如何",
    "syllable": [
      "how"
    ],
    "ipa": "/haʊ/",
    "derivations": [
      {
        "syllable": "單音節［how］",
        "rule": "母音組合 ow (R004)",
        "status": "【適用】",
        "reason": "ow 字母組合在此處常規發雙母音 /haʊ/"
      }
    ]
  },
  {
    "id": 418,
    "word": "however",
    "pos": "adv.",
    "chinese": "然而",
    "syllable": [
      "how",
      "ev",
      "er"
    ],
    "ipa": "/haʊˈɛv.ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［how］",
        "rule": "複合開音節 ow (R004)",
        "status": "【適用】",
        "reason": "ow 次重音發雙母音 /haʊ/"
      },
      {
        "syllable": "第 2 音節［ev］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "主重音節，母音 e 常規發短母音 /ˈɛv/"
      },
      {
        "syllable": "第 3 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀 -er 弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 419,
    "word": "hundred",
    "pos": "n./adj.",
    "chinese": "百",
    "syllable": [
      "hun",
      "dred"
    ],
    "ipa": "/ˈhʌn.drəd/",
    "derivations": [
      {
        "syllable": "第 1 音節［hun］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 n 封閉重音節，母音 u 常規發短母音 /ˈhʌn/"
      },
      {
        "syllable": "第 2 音節［dred］",
        "rule": "雙子音開頭閉音節 (R001) + 弱化 (R008)",
        "status": "【適用】",
        "reason": "子音群 dr 開頭，非重讀音節母音 e 弱化發 /drəd/"
      }
    ]
  },
  {
    "id": 420,
    "word": "hungry",
    "pos": "adj.",
    "chinese": "飢餓的",
    "syllable": [
      "hun",
      "gry"
    ],
    "ipa": "/ˈhʌŋ.ɡri/",
    "derivations": [
      {
        "syllable": "第 1 音節［hun］",
        "rule": "複合鼻音 ng (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "母音 u 在 g 前同化為軟顎鼻音，發 /ˈhʌŋ/"
      },
      {
        "syllable": "第 2 音節［gry］",
        "rule": "硬音 g (R007) + 字尾 y 半母音 (R002)",
        "status": "【適用】",
        "reason": "g 發濁塞音 /ɡ/，字尾 y 處非重讀音節發長母音 /ɡri/"
      }
    ]
  },
  {
    "id": 421,
    "word": "hurt",
    "pos": "v./n.",
    "chinese": "受傷,疼痛",
    "syllable": [
      "hurt"
    ],
    "ipa": "/hɝːt/",
    "derivations": [
      {
        "syllable": "單音節［hurt］",
        "rule": "R 控制母音 ur (R005)",
        "status": "【適用】",
        "reason": "ur 組合受捲舌音控制，常規發重讀捲舌長母音 /hɝːt/"
      }
    ]
  },
  {
    "id": 422,
    "word": "husband",
    "pos": "n.",
    "chinese": "丈夫",
    "syllable": [
      "hus",
      "band"
    ],
    "ipa": "/ˈhʌz.bənd/",
    "derivations": [
      {
        "syllable": "第 1 音節［hus］",
        "rule": "閉音節規則 (R001) + 濁音 s (R007)",
        "status": "【適用】",
        "reason": "重音節母音 u 發短母音 /ˈhʌ/，介於兩母音間的 s 濁化為 /z/"
      },
      {
        "syllable": "第 2 音節［band］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀 -and 尾音弱化，母音 a 發輕母音 /bənd/"
      }
    ]
  },
  {
    "id": 423,
    "word": "I (me, my, mine, myself)",
    "pos": "pron.",
    "chinese": "我",
    "syllable": [
      "I"
    ],
    "ipa": "/aɪ/",
    "derivations": [
      {
        "syllable": "單音節［I］",
        "rule": "單字母開音節 (R002)",
        "status": "【適用】",
        "reason": "大寫單字母 I 為獨立開音節，字母本音發長雙母音 /aɪ/"
      }
    ]
  },
  {
    "id": 424,
    "word": "ice",
    "pos": "n.",
    "chinese": "冰",
    "syllable": [
      "ice"
    ],
    "ipa": "/aɪs/",
    "derivations": [
      {
        "syllable": "單音節［ice］",
        "rule": "魔術 e (R003) + 軟音 c (R007)",
        "status": "【適用】",
        "reason": "字尾 e 靜音使母音 i 發字母本音 /aɪ/，c 在 e 前發軟音 /s/，全字發 /aɪs/"
      }
    ]
  },
  {
    "id": 425,
    "word": "idea",
    "pos": "n.",
    "chinese": "主意",
    "syllable": [
      "i",
      "de",
      "a"
    ],
    "ipa": "/aɪˈdiː.ə/",
    "derivations": [
      {
        "syllable": "第 1 音節［i］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "單一母音 i 處開音節，發字母長音 /aɪ/"
      },
      {
        "syllable": "第 2 音節［de］",
        "rule": "主重音開音節 (R002)",
        "status": "【適用】",
        "reason": "母音 e 結尾承擔主重音，發長母音 /ˈdiː/"
      },
      {
        "syllable": "第 3 音節［a］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "字尾母音 a 處非重讀音節弱化發輕母音 /ə/"
      }
    ]
  },
  {
    "id": 426,
    "word": "if",
    "pos": "conj.",
    "chinese": "如果",
    "syllable": [
      "if"
    ],
    "ipa": "/ɪf/",
    "derivations": [
      {
        "syllable": "單音節［if］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 f 封閉音節，單一母音 i 常規發短母音 /ɪf/"
      }
    ]
  },
  {
    "id": 427,
    "word": "important",
    "pos": "adj.",
    "chinese": "重要的",
    "syllable": [
      "im",
      "por",
      "tant"
    ],
    "ipa": "/ɪmˈpɔːr.tənt/",
    "derivations": [
      {
        "syllable": "第 1 音節［im］",
        "rule": "閉音節前綴 (R001/R008)",
        "status": "【適用】",
        "reason": "前綴 im- 處非重音節，母音 i 發短音 /ɪm/"
      },
      {
        "syllable": "第 2 音節［por］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "承擔主重音，or 組合發長捲舌母音 /ˈpɔːr/"
      },
      {
        "syllable": "第 3 音節［tant］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-ant 後綴非重讀弱化，母音 a 發輕母音 /tənt/"
      }
    ]
  },
  {
    "id": 428,
    "word": "in",
    "pos": "prep./adv./adj.",
    "chinese": "在…裡面",
    "syllable": [
      "in"
    ],
    "ipa": "/ɪn/",
    "derivations": [
      {
        "syllable": "單音節［in］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 n 封閉音節，單一母音 i 常規發短母音 /ɪn/"
      }
    ]
  },
  {
    "id": 429,
    "word": "inch",
    "pos": "n.",
    "chinese": "英吋",
    "syllable": [
      "inch"
    ],
    "ipa": "/ɪntʃ/",
    "derivations": [
      {
        "syllable": "單音節［inch］",
        "rule": "閉音節規則 (R001) + 複合子音 ch (R006)",
        "status": "【適用】",
        "reason": "鼻音 n 與 ch 封閉音節，母音 i 常規發短母音 /ɪ/，ch 發清塞擦音 /tʃ/，全字發 /ɪntʃ/"
      }
    ]
  },
  {
    "id": 430,
    "word": "insect",
    "pos": "n.",
    "chinese": "昆蟲",
    "syllable": [
      "in",
      "sect"
    ],
    "ipa": "/ˈɪn.sɛkt/",
    "derivations": [
      {
        "syllable": "第 1 音節［in］",
        "rule": "前綴閉音節 (R001)",
        "status": "【適用】",
        "reason": "重音節母音 i 在子音 n 封閉下發短母音 /ˈɪn/"
      },
      {
        "syllable": "第 2 音節［sect］",
        "rule": "複合子音群閉音節 (R001)",
        "status": "【適用】",
        "reason": "尾音 ct 封閉，母音 e 發短母音 /sɛkt/"
      }
    ]
  },
  {
    "id": 431,
    "word": "inside",
    "pos": "prep./adv./n./adj.",
    "chinese": "在…內部",
    "syllable": [
      "in",
      "side"
    ],
    "ipa": "/ɪnˈsaɪd/",
    "derivations": [
      {
        "syllable": "第 1 音節［in］",
        "rule": "前綴閉音節 (R001)",
        "status": "【適用】",
        "reason": "前綴 in- 處次重音，母音 i 發短母音 /ɪn/"
      },
      {
        "syllable": "第 2 音節［side］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 承擔主重音發長音 /ˈsaɪd/"
      }
    ]
  },
  {
    "id": 432,
    "word": "interest",
    "pos": "n./v.",
    "chinese": "使…感興趣",
    "syllable": [
      "in",
      "ter",
      "est"
    ],
    "ipa": "/ˈɪn.trɪst/",
    "derivations": [
      {
        "syllable": "第 1 音節［in］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 n 封閉承擔主重音，母音 i 發短母音 /ˈɪn/"
      },
      {
        "syllable": "第 2 音節［ter］",
        "rule": "音節內弱化脫落 (Syncopation)",
        "status": "【適用 (部分轉移)】",
        "reason": "口語中非重讀 -ter- 常弱化並併入尾音節發音"
      },
      {
        "syllable": "第 3 音節［est］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-est 弱化發輕短音 /trɪst/，全字念 /ˈɪn.trɪst/"
      }
    ]
  },
  {
    "id": 433,
    "word": "interested",
    "pos": "adj.",
    "chinese": "感興趣的",
    "syllable": [
      "in",
      "ter",
      "est",
      "ed"
    ],
    "ipa": "/ˈɪn.trɪ.stɪd/",
    "derivations": [
      {
        "syllable": "第 1 音節［in］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 n 封閉主重音節，母音 i 發短母音 /ˈɪn/"
      },
      {
        "syllable": "第 2 音節［ter］",
        "rule": "中音弱化 (Syncopation)",
        "status": "【適用 (部分轉移)】",
        "reason": "非重讀音節弱化，常併入第三音節發音"
      },
      {
        "syllable": "第 3 音節［est］",
        "rule": "非重讀音節 (R008)",
        "status": "【適用】",
        "reason": "子音群 st 組合發 /trɪst/"
      },
      {
        "syllable": "第 4 音節［ed］",
        "rule": "過去分詞 -ed 發音規則 (R006)",
        "status": "【適用】",
        "reason": "在清齒齦爆破音 t 之後，-ed 規則增音發成音節 /ɪd/"
      }
    ]
  },
  {
    "id": 434,
    "word": "interesting",
    "pos": "adj.",
    "chinese": "有趣的",
    "syllable": [
      "in",
      "ter",
      "est",
      "ing"
    ],
    "ipa": "/ˈɪn.trɪ.stɪŋ/",
    "derivations": [
      {
        "syllable": "第 1 音節［in］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "主重音節，子音 n 封閉母音 i 發短音 /ˈɪn/"
      },
      {
        "syllable": "第 2 音節［ter］",
        "rule": "弱化脫落 (Syncopation)",
        "status": "【適用 (部分轉移)】",
        "reason": "非重讀弱化常併入後方音節"
      },
      {
        "syllable": "第 3 音節［est］",
        "rule": "非重讀音節 (R008)",
        "status": "【適用】",
        "reason": "弱化發 /trɪst/"
      },
      {
        "syllable": "第 4 音節［ing］",
        "rule": "複合鼻音 -ing (R006)",
        "status": "【適用】",
        "reason": "ng 發軟顎鼻音，後綴發輕音 /ɪŋ/"
      }
    ]
  },
  {
    "id": 435,
    "word": "interview",
    "pos": "n./v.",
    "chinese": "訪問,面試",
    "syllable": [
      "in",
      "ter",
      "view"
    ],
    "ipa": "/ˈɪn.t̬ɚ.vjuː/",
    "derivations": [
      {
        "syllable": "第 1 音節［in］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 n 封閉主重音節，母音 i 發短音 /ˈɪn/"
      },
      {
        "syllable": "第 2 音節［ter］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "-er 處非重讀弱化發輕捲舌母音 /t̬ɚ/"
      },
      {
        "syllable": "第 3 音節［view］",
        "rule": "母音組合 iew (R004)",
        "status": "【適用】",
        "reason": "iew 組合發雙母音 /vjuː/"
      }
    ]
  },
  {
    "id": 436,
    "word": "into",
    "pos": "prep.",
    "chinese": "到…之內",
    "syllable": [
      "in",
      "to"
    ],
    "ipa": "/ˈɪn.tuː/",
    "derivations": [
      {
        "syllable": "第 1 音節［in］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "重音節母音 i 在 n 封閉下發短母音 /ˈɪn/"
      },
      {
        "syllable": "第 2 音節［to］",
        "rule": "母音組合 / 開音節特例 (R010)",
        "status": "【適用】",
        "reason": "介系詞 to 在重讀時常規發長圓唇音 /tuː/"
      }
    ]
  },
  {
    "id": 437,
    "word": "invite",
    "pos": "v.",
    "chinese": "邀請",
    "syllable": [
      "in",
      "vite"
    ],
    "ipa": "/ɪnˈvaɪt/",
    "derivations": [
      {
        "syllable": "第 1 音節［in］",
        "rule": "前綴閉音節 (R001/R008)",
        "status": "【適用】",
        "reason": "前綴 in- 處非重音節，母音 i 發短音 /ɪn/"
      },
      {
        "syllable": "第 2 音節［vite］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 承擔主重音發字母長音 /ˈvaɪt/"
      }
    ]
  },
  {
    "id": 438,
    "word": "island",
    "pos": "n.",
    "chinese": "島嶼",
    "syllable": [
      "is",
      "land"
    ],
    "ipa": "/ˈaɪ.lənd/",
    "derivations": [
      {
        "syllable": "第 1 音節［is］",
        "rule": "靜音 s (R006/R010) + 開音節規則 (R002)",
        "status": "【不適用 (例外轉移)】",
        "reason": "s 歷史靜音不發音，使前面字母 i 成為開音節，發字母長音 /ˈaɪ/ (R010)"
      },
      {
        "syllable": "第 2 音節［land］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-and 處非重讀音節弱化，母音 a 發輕母音 /lənd/"
      }
    ]
  },
  {
    "id": 439,
    "word": "it (its, itself)",
    "pos": "pron.",
    "chinese": "它",
    "syllable": [
      "it"
    ],
    "ipa": "/ɪt/",
    "derivations": [
      {
        "syllable": "單音節［it］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 t 封閉音節，單一母音 i 常規發短母音 /ɪt/"
      }
    ]
  },
  {
    "id": 440,
    "word": "item",
    "pos": "n.",
    "chinese": "項目, 品項",
    "syllable": [
      "i",
      "tem"
    ],
    "ipa": "/ˈaɪ.təm/",
    "derivations": [
      {
        "syllable": "第 1 音節［i］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "單一母音 i 處於開音節並承擔主重音，發字母本音 /ˈaɪ/"
      },
      {
        "syllable": "第 2 音節［tem］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 e 弱化發輕母音 /təm/"
      }
    ]
  },
  {
    "id": 441,
    "word": "jacket",
    "pos": "n.",
    "chinese": "夾克",
    "syllable": [
      "jack",
      "et"
    ],
    "ipa": "/ˈdʒæk.ɪt/",
    "derivations": [
      {
        "syllable": "第 1 音節［jack］",
        "rule": "閉音節 (R001) + 雙子音 ck (R006)",
        "status": "【適用】",
        "reason": "j 發 /dʒ/，ck 雙字母封閉音節，母音 a 常規發短母音 /ˈdʒæk/"
      },
      {
        "syllable": "第 2 音節［et］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-et 尾音處非重讀音節，母音 e 弱化發短音 /ɪt/"
      }
    ]
  },
  {
    "id": 442,
    "word": "jeans",
    "pos": "n.",
    "chinese": "牛仔褲",
    "syllable": [
      "jeans"
    ],
    "ipa": "/dʒiːnz/",
    "derivations": [
      {
        "syllable": "單音節［jeans］",
        "rule": "母音組合 ea (R004) + 尾音 s 濁化 (R006)",
        "status": "【適用】",
        "reason": "ea 組合常規發長母音 /iː/，名詞複數 -s 在濁鼻音 n 後濁化為 /z/，全字發 /dʒiːnz/"
      }
    ]
  },
  {
    "id": 443,
    "word": "job",
    "pos": "n.",
    "chinese": "工作",
    "syllable": [
      "job"
    ],
    "ipa": "/dʒɑːb/",
    "derivations": [
      {
        "syllable": "單音節［job］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "j 發 /dʒ/，子音 b 封閉音節，母音 o 常規發短母音 /dʒɑːb/"
      }
    ]
  },
  {
    "id": 444,
    "word": "join",
    "pos": "v./n.",
    "chinese": "加入",
    "syllable": [
      "join"
    ],
    "ipa": "/dʒɔɪn/",
    "derivations": [
      {
        "syllable": "單音節［join］",
        "rule": "母音組合 oi (R004)",
        "status": "【適用】",
        "reason": "oi 字母組合常規發雙母音 /ɔɪ/，結合尾音 n 發 /dʒɔɪn/"
      }
    ]
  },
  {
    "id": 445,
    "word": "joke",
    "pos": "n./v.",
    "chinese": "笑話; 開玩笑",
    "syllable": [
      "joke"
    ],
    "ipa": "/dʒoʊk/",
    "derivations": [
      {
        "syllable": "單音節［joke］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "o_e 結構中字尾 e 靜音，母音 o 常規發長雙母音 /dʒoʊk/"
      }
    ]
  },
  {
    "id": 446,
    "word": "joy",
    "pos": "n.",
    "chinese": "歡樂",
    "syllable": [
      "joy"
    ],
    "ipa": "/dʒɔɪ/",
    "derivations": [
      {
        "syllable": "單音節［joy］",
        "rule": "母音組合 oy (R004)",
        "status": "【適用】",
        "reason": "oy 字母組合常規發雙母音 /ɔɪ/，字首 j 發 /dʒ/，全字發 /dʒɔɪ/"
      }
    ]
  },
  {
    "id": 447,
    "word": "juice",
    "pos": "n.",
    "chinese": "果汁",
    "syllable": [
      "juice"
    ],
    "ipa": "/dʒuːs/",
    "derivations": [
      {
        "syllable": "單音節［juice］",
        "rule": "母音組合 ui (R004) + 軟音 c (R007)",
        "status": "【適用】",
        "reason": "ui 組合發長母音 /uː/，c 在 e 前發軟音 /s/，字尾 e 靜音，全字發 /dʒuːs/"
      }
    ]
  },
  {
    "id": 448,
    "word": "jump",
    "pos": "v./n.",
    "chinese": "跳躍",
    "syllable": [
      "jump"
    ],
    "ipa": "/dʒʌmp/",
    "derivations": [
      {
        "syllable": "單音節［jump］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音群 mp 封閉音節，母音 u 常規發短母音 /dʒʌmp/"
      }
    ]
  },
  {
    "id": 449,
    "word": "just",
    "pos": "adv./adj.",
    "chinese": "只是,剛才",
    "syllable": [
      "just"
    ],
    "ipa": "/dʒʌst/",
    "derivations": [
      {
        "syllable": "單音節［just］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音群 st 封閉音節，母音 u 常規發短母音 /dʒʌst/"
      }
    ]
  },
  {
    "id": 450,
    "word": "keep",
    "pos": "v./n.",
    "chinese": "保持",
    "syllable": [
      "keep"
    ],
    "ipa": "/kiːp/",
    "derivations": [
      {
        "syllable": "單音節［keep］",
        "rule": "母音組合 ee (R004)",
        "status": "【適用】",
        "reason": "ee 雙母音常規發固定長母音 /iː/，全字發 /kiːp/"
      }
    ]
  },
  {
    "id": 451,
    "word": "key",
    "pos": "adj./n./v.",
    "chinese": "鑰匙",
    "syllable": [
      "key"
    ],
    "ipa": "/kiː/",
    "derivations": [
      {
        "syllable": "單音節［key］",
        "rule": "母音組合 ey (R004) → 特例長母音 (R010)",
        "status": "【適用 (部分轉移)】",
        "reason": "ey 字母組合在此處特例發長母音 /kiː/ (R010)"
      }
    ]
  },
  {
    "id": 452,
    "word": "kick",
    "pos": "v./n.",
    "chinese": "踢",
    "syllable": [
      "kick"
    ],
    "ipa": "/kɪk/",
    "derivations": [
      {
        "syllable": "單音節［kick］",
        "rule": "閉音節 (R001) + 雙子音 ck (R006)",
        "status": "【適用】",
        "reason": "ck 複合字母發單音 /k/，子音封閉音節使母音 i 常規發短母音 /kɪk/"
      }
    ]
  },
  {
    "id": 453,
    "word": "kid",
    "pos": "n./v.",
    "chinese": "小孩",
    "syllable": [
      "kid"
    ],
    "ipa": "/kɪd/",
    "derivations": [
      {
        "syllable": "單音節［kid］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 d 封閉音節，單一母音 i 常規發短母音 /kɪd/"
      }
    ]
  },
  {
    "id": 454,
    "word": "kill",
    "pos": "v./n.",
    "chinese": "殺",
    "syllable": [
      "kill"
    ],
    "ipa": "/kɪl/",
    "derivations": [
      {
        "syllable": "單音節［kill］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 ll 封閉音節，母音 i 常規發短母音 /kɪl/"
      }
    ]
  },
  {
    "id": 455,
    "word": "kind",
    "pos": "adj./n.",
    "chinese": "種類",
    "syllable": [
      "kind"
    ],
    "ipa": "/kaɪnd/",
    "derivations": [
      {
        "syllable": "單音節［kind］",
        "rule": "閉音節規則 (R001) → 特例長母音 -ind (R010/R002)",
        "status": "【不適用 (例外轉移)】",
        "reason": "-ind 組合打破一般閉音節規則，歷史長音化使母音 i 發長雙母音 /kaɪnd/ (R010)"
      }
    ]
  },
  {
    "id": 456,
    "word": "king",
    "pos": "n.",
    "chinese": "國王",
    "syllable": [
      "king"
    ],
    "ipa": "/kɪŋ/",
    "derivations": [
      {
        "syllable": "單音節［king］",
        "rule": "複合鼻音 ng (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "ng 字母組合發軟顎鼻音 /ŋ/，母音 i 常規發短母音 /kɪŋ/"
      }
    ]
  },
  {
    "id": 457,
    "word": "kiss",
    "pos": "n./v.",
    "chinese": "吻",
    "syllable": [
      "kiss"
    ],
    "ipa": "/kɪs/",
    "derivations": [
      {
        "syllable": "單音節［kiss］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 ss 封閉音節，單一母音 i 常規發短母音 /kɪs/"
      }
    ]
  },
  {
    "id": 458,
    "word": "kitchen",
    "pos": "n.",
    "chinese": "廚房",
    "syllable": [
      "kitch",
      "en"
    ],
    "ipa": "/ˈkɪtʃ.ən/",
    "derivations": [
      {
        "syllable": "第 1 音節［kitch］",
        "rule": "複合子音 tch (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "tch 組合發清塞擦音 /tʃ/，封閉重音節使母音 i 發短母音 /ˈkɪtʃ/"
      },
      {
        "syllable": "第 2 音節［en］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-en 處非重讀音節，弱化發輕短音 /ən/"
      }
    ]
  },
  {
    "id": 459,
    "word": "kite",
    "pos": "n.",
    "chinese": "風箏",
    "syllable": [
      "kite"
    ],
    "ipa": "/kaɪt/",
    "derivations": [
      {
        "syllable": "單音節［kite］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 常規發字母長音 /kaɪt/"
      }
    ]
  },
  {
    "id": 460,
    "word": "knee",
    "pos": "n./v.",
    "chinese": "膝蓋",
    "syllable": [
      "knee"
    ],
    "ipa": "/niː/",
    "derivations": [
      {
        "syllable": "單音節［knee］",
        "rule": "靜音 kn- (R006) + 母音組合 ee (R004)",
        "status": "【適用】",
        "reason": "字首 kn- 中 k 靜音發 /n/，雙母音 ee 常規發長母音 /iː/，全字發 /niː/"
      }
    ]
  },
  {
    "id": 461,
    "word": "knife",
    "pos": "n./v.",
    "chinese": "刀子",
    "syllable": [
      "knife"
    ],
    "ipa": "/naɪf/",
    "derivations": [
      {
        "syllable": "單音節［knife］",
        "rule": "靜音 kn- (R006) + 魔術 e (R003)",
        "status": "【適用】",
        "reason": "字首 k 靜音，i_e 結構字尾 e 靜音促使前面母音 i 發長雙母音 /naɪf/"
      }
    ]
  },
  {
    "id": 462,
    "word": "knock",
    "pos": "v./n.",
    "chinese": "敲",
    "syllable": [
      "knock"
    ],
    "ipa": "/nɑːk/",
    "derivations": [
      {
        "syllable": "單音節［knock］",
        "rule": "靜音 kn- (R006) + 雙子音 ck 閉音節 (R001)",
        "status": "【適用】",
        "reason": "字首 k 靜音，ck 封閉音節，單一母音 o 常規發短母音 /nɑːk/"
      }
    ]
  },
  {
    "id": 463,
    "word": "know",
    "pos": "v.",
    "chinese": "知道",
    "syllable": [
      "know"
    ],
    "ipa": "/noʊ/",
    "derivations": [
      {
        "syllable": "單音節［know］",
        "rule": "靜音 kn- (R006) + 母音組合 ow (R004)",
        "status": "【適用】",
        "reason": "字首 k 靜音發 /n/，ow 字母組合常規發長雙母音 /oʊ/，全字發 /noʊ/"
      }
    ]
  },
  {
    "id": 464,
    "word": "knowledge",
    "pos": "n.",
    "chinese": "知識",
    "syllable": [
      "knowl",
      "edge"
    ],
    "ipa": "/ˈnɑː.lɪdʒ/",
    "derivations": [
      {
        "syllable": "第 1 音節［knowl］",
        "rule": "靜音 kn- (R006) + ow 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "k 靜音，ow 字母在此處受歷史演變轉化為短母音 /ˈnɑːl/ (R010)"
      },
      {
        "syllable": "第 2 音節［edge］",
        "rule": "複合子音 -dge (R006) + 弱化 (R008)",
        "status": "【適用】",
        "reason": "-dge 組合發濁塞擦音 /dʒ/，非重讀母音 e 弱化發 /ɪdʒ/"
      }
    ]
  },
  {
    "id": 465,
    "word": "lake",
    "pos": "n.",
    "chinese": "湖",
    "syllable": [
      "lake"
    ],
    "ipa": "/leɪk/",
    "derivations": [
      {
        "syllable": "單音節［lake］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "a_e 結構字尾 e 靜音，母音 a 常規發長雙母音 /leɪk/"
      }
    ]
  },
  {
    "id": 466,
    "word": "lamp",
    "pos": "n.",
    "chinese": "燈",
    "syllable": [
      "lamp"
    ],
    "ipa": "/læmp/",
    "derivations": [
      {
        "syllable": "單音節［lamp］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音群 mp 封閉音節，單一母音 a 常規發短母音 /læmp/"
      }
    ]
  },
  {
    "id": 467,
    "word": "land",
    "pos": "n./v.",
    "chinese": "土地",
    "syllable": [
      "land"
    ],
    "ipa": "/lænd/",
    "derivations": [
      {
        "syllable": "單音節［land］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音群 nd 封閉音節，單一母音 a 常規發短母音 /lænd/"
      }
    ]
  },
  {
    "id": 468,
    "word": "language",
    "pos": "n.",
    "chinese": "語言",
    "syllable": [
      "lan",
      "guage"
    ],
    "ipa": "/ˈlæŋ.ɡwɪdʒ/",
    "derivations": [
      {
        "syllable": "第 1 音節［lan］",
        "rule": "閉音節 (R001) + 複合鼻音 (R006)",
        "status": "【適用】",
        "reason": "母音 a 在軟顎音前鼻音化，發短母音 /ˈlæŋ/"
      },
      {
        "syllable": "第 2 音節［guage］",
        "rule": "軟音 g (R007) + 弱化 (R008)",
        "status": "【適用】",
        "reason": "u 發半母音 /w/，字尾 g 在 e 前發軟音 /dʒ/，非重讀母音 a 弱化發 /ɡwɪdʒ/"
      }
    ]
  },
  {
    "id": 469,
    "word": "large",
    "pos": "adj.",
    "chinese": "大的",
    "syllable": [
      "large"
    ],
    "ipa": "/lɑːrdʒ/",
    "derivations": [
      {
        "syllable": "單音節［large］",
        "rule": "R 控制母音 ar (R005) + 軟音 g (R007)",
        "status": "【適用】",
        "reason": "ar 受捲舌音控制發 /ɑːr/，g 在 e 前發軟音 /dʒ/，字尾 e 靜音，全字發 /lɑːrdʒ/"
      }
    ]
  },
  {
    "id": 470,
    "word": "last",
    "pos": "n./v./adv./adj.",
    "chinese": "最後的",
    "syllable": [
      "last"
    ],
    "ipa": "/læst/",
    "derivations": [
      {
        "syllable": "單音節［last］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音群 st 封閉音節，單一母音 a 常規發短母音 /læst/"
      }
    ]
  },
  {
    "id": 471,
    "word": "late",
    "pos": "adj./adv.",
    "chinese": "晚的",
    "syllable": [
      "late"
    ],
    "ipa": "/leɪt/",
    "derivations": [
      {
        "syllable": "單音節［late］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "a_e 結構字尾 e 靜音，母音 a 常規發長雙母音 /leɪt/"
      }
    ]
  },
  {
    "id": 472,
    "word": "later",
    "pos": "adv.",
    "chinese": "稍後",
    "syllable": [
      "lat",
      "er"
    ],
    "ipa": "/ˈleɪ.t̬ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［lat］",
        "rule": "開音節規則 (R002/R003)",
        "status": "【適用】",
        "reason": "由 late 衍生，母音 a 承擔主重音發長雙母音 /ˈleɪ/"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "t 夾在兩母音間產生閃音 (Flap-t)，-er 弱化發輕捲舌音 /t̬ɚ/"
      }
    ]
  },
  {
    "id": 473,
    "word": "laugh",
    "pos": "v./n.",
    "chinese": "笑",
    "syllable": [
      "laugh"
    ],
    "ipa": "/læf/",
    "derivations": [
      {
        "syllable": "單音節［laugh］",
        "rule": "母音組合 augh (R004) → 特例短母音 + gh 轉 /f/ (R010/R006)",
        "status": "【不適用 (例外轉移)】",
        "reason": "augh 字母組合打破常規，母音轉化為短母音 /æ/，gh 轉發擦音 /f/，全字發 /læf/ (R010)"
      }
    ]
  },
  {
    "id": 474,
    "word": "lawyer",
    "pos": "n.",
    "chinese": "律師",
    "syllable": [
      "law",
      "yer"
    ],
    "ipa": "/ˈlɑː.jɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［law］",
        "rule": "母音組合 aw (R004)",
        "status": "【適用】",
        "reason": "aw 字母組合常規發長圓唇母音 /ˈlɑː/"
      },
      {
        "syllable": "第 2 音節［yer］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "y 作為滑音 /j/，-er 處非重讀弱化發輕捲舌音 /jɚ/"
      }
    ]
  },
  {
    "id": 475,
    "word": "lazy",
    "pos": "adj.",
    "chinese": "懶惰的",
    "syllable": [
      "la",
      "zy"
    ],
    "ipa": "/ˈleɪ.zi/",
    "derivations": [
      {
        "syllable": "第 1 音節［la］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "母音 a 結尾承擔主重音，常規發長雙母音 /ˈleɪ/"
      },
      {
        "syllable": "第 2 音節［zy］",
        "rule": "字尾 y 半母音 (R002)",
        "status": "【適用】",
        "reason": "字尾 y 處非重讀音節，常規發長母音 /zi/"
      }
    ]
  },
  {
    "id": 476,
    "word": "lead",
    "pos": "v./n.",
    "chinese": "引導",
    "syllable": [
      "lead"
    ],
    "ipa": "/liːd/",
    "derivations": [
      {
        "syllable": "單音節［lead］",
        "rule": "母音組合 ea (R004)",
        "status": "【適用】",
        "reason": "ea 字母組合常規發長母音 /iː/，結合尾音 d 發 /liːd/"
      }
    ]
  },
  {
    "id": 477,
    "word": "leader",
    "pos": "n.",
    "chinese": "領導者",
    "syllable": [
      "lead",
      "er"
    ],
    "ipa": "/ˈliː.dɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［lead］",
        "rule": "母音組合 ea (R004)",
        "status": "【適用】",
        "reason": "ea 組合在重音節常規發長母音 /ˈliːd/"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "-er 後綴處非重讀音節，弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 478,
    "word": "learn",
    "pos": "v.",
    "chinese": "學習",
    "syllable": [
      "learn"
    ],
    "ipa": "/lɝːn/",
    "derivations": [
      {
        "syllable": "單音節［learn］",
        "rule": "母音組合 ear + R 控制 (R005) → 特例 /ɝː/ (R010)",
        "status": "【適用 (部分轉移)】",
        "reason": "ear 在子音 n 前轉化為中央捲舌長母音 /lɝːn/ (R010)"
      }
    ]
  },
  {
    "id": 479,
    "word": "least",
    "pos": "adv./pron./adj.",
    "chinese": "最少〈的〉",
    "syllable": [
      "least"
    ],
    "ipa": "/liːst/",
    "derivations": [
      {
        "syllable": "單音節［least］",
        "rule": "母音組合 ea (R004) + 雙子音 st (R006)",
        "status": "【適用】",
        "reason": "ea 字母組合常規發長母音 /iː/，結合子音群 st 發 /liːst/"
      }
    ]
  },
  {
    "id": 480,
    "word": "leave",
    "pos": "v./n.",
    "chinese": "離開",
    "syllable": [
      "leave"
    ],
    "ipa": "/liːv/",
    "derivations": [
      {
        "syllable": "單音節［leave］",
        "rule": "母音組合 ea (R004) + 尾音 ve (R006)",
        "status": "【適用】",
        "reason": "ea 組合發長母音 /iː/，字尾 ve 發濁擦音 /v/，全字發 /liːv/"
      }
    ]
  },
  {
    "id": 481,
    "word": "left",
    "pos": "adj./n./adv.",
    "chinese": "左邊",
    "syllable": [
      "left"
    ],
    "ipa": "/lɛft/",
    "derivations": [
      {
        "syllable": "單音節［left］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音群 ft 封閉音節，單一母音 e 常規發短母音 /lɛft/"
      }
    ]
  },
  {
    "id": 482,
    "word": "leg",
    "pos": "n.",
    "chinese": "腿",
    "syllable": [
      "leg"
    ],
    "ipa": "/lɛɡ/",
    "derivations": [
      {
        "syllable": "單音節［leg］",
        "rule": "閉音節規則 (R001) + 硬音 g (R007)",
        "status": "【適用】",
        "reason": "g 在字尾發濁塞音 /ɡ/，封閉音節使母音 e 常規發短母音 /lɛɡ/"
      }
    ]
  },
  {
    "id": 483,
    "word": "lemon",
    "pos": "n.",
    "chinese": "檸檬",
    "syllable": [
      "lem",
      "on"
    ],
    "ipa": "/ˈlɛm.ən/",
    "derivations": [
      {
        "syllable": "第 1 音節［lem］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 m 封閉主重音節，單一母音 e 常規發短母音 /ˈlɛm/"
      },
      {
        "syllable": "第 2 音節［on］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-on 處非重讀音節，母音 o 弱化發輕母音 /ən/"
      }
    ]
  },
  {
    "id": 484,
    "word": "less",
    "pos": "pron./adv./adj./prep.",
    "chinese": "較少的",
    "syllable": [
      "less"
    ],
    "ipa": "/lɛs/",
    "derivations": [
      {
        "syllable": "單音節［less］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 ss 封閉音節，單一母音 e 常規發短母音 /lɛs/"
      }
    ]
  },
  {
    "id": 485,
    "word": "lesson",
    "pos": "n.",
    "chinese": "課",
    "syllable": [
      "les",
      "son"
    ],
    "ipa": "/ˈlɛs.ən/",
    "derivations": [
      {
        "syllable": "第 1 音節［les］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 ss 切分，重音節母音 e 常規發短母音 /ˈlɛs/"
      },
      {
        "syllable": "第 2 音節［son］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-on 尾音處非重讀音節，母音 o 弱化發輕母音 /ən/"
      }
    ]
  },
  {
    "id": 486,
    "word": "let",
    "pos": "v.",
    "chinese": "讓",
    "syllable": [
      "let"
    ],
    "ipa": "/lɛt/",
    "derivations": [
      {
        "syllable": "單音節［let］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 t 封閉音節，單一母音 e 常規發短母音 /lɛt/"
      }
    ]
  },
  {
    "id": 487,
    "word": "letter",
    "pos": "n.",
    "chinese": "信",
    "syllable": [
      "let",
      "ter"
    ],
    "ipa": "/ˈlɛt.ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［let］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 tt 切分，重音節母音 e 常規發短母音 /ˈlɛt/"
      },
      {
        "syllable": "第 2 音節［ter］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "-er 處非重讀弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 488,
    "word": "level",
    "pos": "n./adj.",
    "chinese": "水平, 等級; 平坦的",
    "syllable": [
      "lev",
      "el"
    ],
    "ipa": "/ˈlɛv.əl/",
    "derivations": [
      {
        "syllable": "第 1 音節［lev］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 v 封閉主重音節，單一母音 e 常規發短母音 /ˈlɛv/"
      },
      {
        "syllable": "第 2 音節［el］",
        "rule": "非重讀弱化 (R008) / 成音節 (R009)",
        "status": "【適用】",
        "reason": "-el 尾音處非重讀音節，母音弱化發成音節邊音 /əl/"
      }
    ]
  },
  {
    "id": 489,
    "word": "library",
    "pos": "n.",
    "chinese": "圖書館",
    "syllable": [
      "li",
      "brary"
    ],
    "ipa": "/ˈlaɪ.brɛr.i/",
    "derivations": [
      {
        "syllable": "第 1 音節［li］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "單一母音 i 結尾承擔主重音，常規發長雙母音 /ˈlaɪ/"
      },
      {
        "syllable": "第 2 音節［brary］",
        "rule": "雙母音縮合弱化 (R008) + 字尾 y (R002)",
        "status": "【適用】",
        "reason": "-brary 音節弱化發 /brɛr.i/，字尾 y 發長音 /i/"
      }
    ]
  },
  {
    "id": 490,
    "word": "lie",
    "pos": "v./n.",
    "chinese": "說謊",
    "syllable": [
      "lie"
    ],
    "ipa": "/laɪ/",
    "derivations": [
      {
        "syllable": "單音節［lie］",
        "rule": "母音組合 ie (R004)",
        "status": "【適用】",
        "reason": "ie 雙母音在字尾常規發長雙母音 /laɪ/"
      }
    ]
  },
  {
    "id": 491,
    "word": "life",
    "pos": "n.",
    "chinese": "生活",
    "syllable": [
      "life"
    ],
    "ipa": "/laɪf/",
    "derivations": [
      {
        "syllable": "單音節［life］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 常規發字母長音 /laɪf/"
      }
    ]
  },
  {
    "id": 492,
    "word": "light",
    "pos": "n./adj./v./adv.",
    "chinese": "燈光,輕的",
    "syllable": [
      "light"
    ],
    "ipa": "/laɪt/",
    "derivations": [
      {
        "syllable": "單音節［light］",
        "rule": "母音組合 igh (R004) + 靜音 gh (R006)",
        "status": "【適用】",
        "reason": "igh 特殊組合中 gh 靜音，母音 i 發長雙母音 /laɪt/"
      }
    ]
  },
  {
    "id": 493,
    "word": "like",
    "pos": "prep./v./n.",
    "chinese": "喜歡",
    "syllable": [
      "like"
    ],
    "ipa": "/laɪk/",
    "derivations": [
      {
        "syllable": "單音節［like］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 常規發長音 /laɪk/"
      }
    ]
  },
  {
    "id": 494,
    "word": "line",
    "pos": "n./v.",
    "chinese": "隊伍,線條",
    "syllable": [
      "line"
    ],
    "ipa": "/laɪn/",
    "derivations": [
      {
        "syllable": "單音節［line］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 常規發長音 /laɪn/"
      }
    ]
  },
  {
    "id": 495,
    "word": "lion",
    "pos": "n.",
    "chinese": "獅子",
    "syllable": [
      "li",
      "on"
    ],
    "ipa": "/ˈlaɪ.ən/",
    "derivations": [
      {
        "syllable": "第 1 音節［li］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "母音 i 處開音節承擔主重音，發長雙母音 /ˈlaɪ/"
      },
      {
        "syllable": "第 2 音節［on］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "-on 處非重讀音節，母音 o 弱化發輕母音 /ən/"
      }
    ]
  },
  {
    "id": 496,
    "word": "lip",
    "pos": "n.",
    "chinese": "嘴唇",
    "syllable": [
      "lip"
    ],
    "ipa": "/lɪp/",
    "derivations": [
      {
        "syllable": "單音節［lip］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 p 封閉音節，單一母音 i 常規發短母音 /lɪp/"
      }
    ]
  },
  {
    "id": 497,
    "word": "list",
    "pos": "n./v.",
    "chinese": "表,名單",
    "syllable": [
      "list"
    ],
    "ipa": "/lɪst/",
    "derivations": [
      {
        "syllable": "單音節［list］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "子音群 st 封閉音節，單一母音 i 常規發短母音 /lɪst/"
      }
    ]
  },
  {
    "id": 498,
    "word": "listen",
    "pos": "v.",
    "chinese": "聽",
    "syllable": [
      "lis",
      "ten"
    ],
    "ipa": "/ˈlɪs.ən/",
    "derivations": [
      {
        "syllable": "第 1 音節［lis］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "重音節母音 i 在子音 s 封閉下發短母音 /ˈlɪs/"
      },
      {
        "syllable": "第 2 音節［ten］",
        "rule": "靜音 t (R006/R010) + 成音節 (R009)",
        "status": "【不適用 (例外轉移)】",
        "reason": "-sten 組合中子音 t 歷史靜音不發音，-en 弱化為成音節鼻音 /ən/ (R010)"
      }
    ]
  },
  {
    "id": 499,
    "word": "little",
    "pos": "adj./adv./n.",
    "chinese": "小的",
    "syllable": [
      "lit",
      "tle"
    ],
    "ipa": "/ˈlɪt.əl/",
    "derivations": [
      {
        "syllable": "第 1 音節［lit］",
        "rule": "雙子音閉音節 (R001)",
        "status": "【適用】",
        "reason": "雙子音 tt 切分，重音節母音 i 常規發短母音 /ˈlɪt/"
      },
      {
        "syllable": "第 2 音節［tle］",
        "rule": "成音節字尾 -le (R009)",
        "status": "【適用】",
        "reason": "子音 + le 形成成音節，字尾 e 靜音，舌尖抵住齒齦發成音節邊音 /əl/"
      }
    ]
  },
  {
    "id": 500,
    "word": "live",
    "pos": "v./adj.",
    "chinese": "住,活的,實況",
    "syllable": [
      "live"
    ],
    "ipa": "/lɪv/",
    "derivations": [
      {
        "syllable": "單音節［live］",
        "rule": "魔術 e 規則 (R003) → 動詞短音特例 (R010) / 形容詞長音 (R003)",
        "status": "【不適用 (例外轉移)】",
        "reason": "作動詞時為特例短母音 /lɪv/ (打破魔術 e)；作形容詞/副詞時則適用魔術 e 發長雙母音 /laɪv/"
      }
    ]
  }
];
