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

export const seniorBatch07Raw: SeniorWordRecord[] = [
  {
    "id": 601,
    "word": "office",
    "pos": "n.",
    "chinese": "辦公室",
    "syllable": [
      "of",
      "fice"
    ],
    "ipa": "/ˈɑː.fɪs/",
    "derivations": [
      {
        "syllable": "第 1 音節［of］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 f 封閉重讀音節，單一母音 o 常規發短母音 /ˈɑːf/"
      },
      {
        "syllable": "第 2 音節［fice］",
        "rule": "魔術 e 規則 (R003) → 非重音弱化 (R008) + 軟音 c (R007)",
        "status": "【不適用 (例外轉移)】",
        "reason": "處非重音節，i_e 未發長母音轉移弱化發短音 /ɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音發 /fɪs/"
      }
    ]
  },
  {
    "id": 602,
    "word": "officer",
    "pos": "n.",
    "chinese": "官員",
    "syllable": [
      "of",
      "fi",
      "cer"
    ],
    "ipa": "/ˈɑː.fə.sɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［of］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 f 封閉重讀音節，單一母音 o 常規發短母音 /ˈɑːf/"
      },
      {
        "syllable": "第 2 音節［fi］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節單一母音 i 弱化發央母音 /fə/"
      },
      {
        "syllable": "第 3 音節［cer］",
        "rule": "軟音 c (R007) + R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "c 在 e 前軟音化為 /s/，-er 於詞尾常規發弱化捲舌音 /sɚ/"
      }
    ]
  },
  {
    "id": 603,
    "word": "often",
    "pos": "adv.",
    "chinese": "時常",
    "syllable": [
      "of",
      "ten"
    ],
    "ipa": "/ˈɑː.fən/",
    "derivations": [
      {
        "syllable": "第 1 音節［of］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "單一母音 o 被子音 f 封閉常規發短母音 /ˈɑːf/"
      },
      {
        "syllable": "第 2 音節［ten］",
        "rule": "靜音子音 t (R010) + 成音節弱化 (R009)",
        "status": "【不適用 (例外轉移)】",
        "reason": "現代美式發音中 t 靜音，en 弱化發成音節鼻音 /fən/ (亦有念出 t 之變體)"
      }
    ]
  },
  {
    "id": 604,
    "word": "oil",
    "pos": "n./v.",
    "chinese": "油",
    "syllable": [
      "oil"
    ],
    "ipa": "/ɔɪl/",
    "derivations": [
      {
        "syllable": "單音節［oil］",
        "rule": "雙母音組合 oi (R004)",
        "status": "【適用】",
        "reason": "字母組合 oi 常規發雙母音 /ɔɪ/，尾音 l 帶出舌根軟顎化音，全字發 /ɔɪl/"
      }
    ]
  },
  {
    "id": 605,
    "word": "old",
    "pos": "adj.",
    "chinese": "老的",
    "syllable": [
      "old"
    ],
    "ipa": "/oʊld/",
    "derivations": [
      {
        "syllable": "單音節［old］",
        "rule": "-old 特例長母音字族 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "單一母音 o 在 -ld 前依古英語長化特例常規發長雙母音 /oʊld/，而非短母音 (R010)"
      }
    ]
  },
  {
    "id": 606,
    "word": "on",
    "pos": "prep./adv.",
    "chinese": "在…上面",
    "syllable": [
      "on"
    ],
    "ipa": "/ɑːn/",
    "derivations": [
      {
        "syllable": "單音節［on］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "鼻子音 n 封閉音節，單一母音 o 常規發短母音 /ɑːn/"
      }
    ]
  },
  {
    "id": 607,
    "word": "once",
    "pos": "adv./conj./n.",
    "chinese": "一次",
    "syllable": [
      "once"
    ],
    "ipa": "/wʌns/",
    "derivations": [
      {
        "syllable": "單音節［once］",
        "rule": "歷史音變特例 (R010) + 軟音 c (R007)",
        "status": "【不適用 (例外轉移)】",
        "reason": "字首 o 歷史演變帶出唇軟顎半母音發 /wʌ/，c 在 e 前軟音化為 /s/，字尾 e 靜音，全字發 /wʌns/"
      }
    ]
  },
  {
    "id": 608,
    "word": "online",
    "pos": "adj.",
    "chinese": "在線的, 聯網的; 於網路上",
    "syllable": [
      "on",
      "line"
    ],
    "ipa": "/ˈɑːn.laɪn/",
    "derivations": [
      {
        "syllable": "第 1 音節［on］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "單一母音 o 被鼻子音 n 封閉，常規發短母音 /ˈɑːn/"
      },
      {
        "syllable": "第 2 音節［line］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音促使母音 i 常規發字母本名長雙母音 /laɪn/"
      }
    ]
  },
  {
    "id": 609,
    "word": "only",
    "pos": "adv./adj./conj.",
    "chinese": "只有",
    "syllable": [
      "on",
      "ly"
    ],
    "ipa": "/ˈoʊn.li/",
    "derivations": [
      {
        "syllable": "第 1 音節［on］",
        "rule": "-on 特例長音轉移 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "源自 one 字根演變，o 特例發長雙母音 /ˈoʊn/，未發短母音 (R010)"
      },
      {
        "syllable": "第 2 音節［ly］",
        "rule": "字尾 y 半母音 (R002/R008)",
        "status": "【適用】",
        "reason": "字尾 -ly 處非重讀音節常規發長母音 /li/"
      }
    ]
  },
  {
    "id": 610,
    "word": "open",
    "pos": "adj./v.",
    "chinese": "打開,開放",
    "syllable": [
      "o",
      "pen"
    ],
    "ipa": "/ˈoʊ.pən/",
    "derivations": [
      {
        "syllable": "第 1 音節［o］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節結尾無子音封閉，單一母音 o 常規發長雙母音 /ˈoʊ/"
      },
      {
        "syllable": "第 2 音節［pen］",
        "rule": "非重讀弱化 / 成音節 (R008/R009)",
        "status": "【適用】",
        "reason": "非重讀音節母音 e 弱化，鼻音 n 形成成音節發 /pən/"
      }
    ]
  },
  {
    "id": 611,
    "word": "or",
    "pos": "conj.",
    "chinese": "或",
    "syllable": [
      "or"
    ],
    "ipa": "/ɔːr/",
    "derivations": [
      {
        "syllable": "單音節［or］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "or 組合於單音節常規發後圓唇長母音 /ɔːr/"
      }
    ]
  },
  {
    "id": 612,
    "word": "orange",
    "pos": "adj./n.",
    "chinese": "柳橙",
    "syllable": [
      "or",
      "ange"
    ],
    "ipa": "/ˈɔːr.ɪndʒ/",
    "derivations": [
      {
        "syllable": "第 1 音節［or］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "or 字母組合於重音節常規發 /ˈɔːr/"
      },
      {
        "syllable": "第 2 音節［ange］",
        "rule": "軟音 g (R007) + 非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "g 在 e 前軟音化發濁塞擦音 /dʒ/，a 弱化發短音 /ɪndʒ/"
      }
    ]
  },
  {
    "id": 613,
    "word": "order",
    "pos": "n./v.",
    "chinese": "點餐,秩序",
    "syllable": [
      "or",
      "der"
    ],
    "ipa": "/ˈɔːr.dɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［or］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "or 組合於重讀音節常規發長母音 /ˈɔːr/"
      },
      {
        "syllable": "第 2 音節［der］",
        "rule": "R 控制母音 er (R005) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /dɚ/"
      }
    ]
  },
  {
    "id": 614,
    "word": "other",
    "pos": "adj./pron.",
    "chinese": "其他的",
    "syllable": [
      "oth",
      "er"
    ],
    "ipa": "/ˈʌð.ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［oth］",
        "rule": "複合子音 th (R006) + 特例短母音 (R010)",
        "status": "【適用 (部分轉移)】",
        "reason": "th 濁化發 /ð/，母音 o 受歷史音變影響發短中舌母音 /ˈʌð/"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音 er (R005) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "字尾 -er 處非重讀音節常規發捲舌音 /ɚ/"
      }
    ]
  },
  {
    "id": 615,
    "word": "out",
    "pos": "adv./prep./adj./n./v.",
    "chinese": "在外",
    "syllable": [
      "out"
    ],
    "ipa": "/aʊt/",
    "derivations": [
      {
        "syllable": "單音節［out］",
        "rule": "雙母音組合 ou (R004)",
        "status": "【適用】",
        "reason": "雙母音 ou 常規發 /aʊ/，尾音 t 封閉，全字發 /aʊt/"
      }
    ]
  },
  {
    "id": 616,
    "word": "outside",
    "pos": "prep./adv./adj./n.",
    "chinese": "在…外部",
    "syllable": [
      "out",
      "side"
    ],
    "ipa": "/ˌaʊtˈsaɪd/",
    "derivations": [
      {
        "syllable": "第 1 音節［out］",
        "rule": "雙母音組合 ou (R004)",
        "status": "【適用】",
        "reason": "ou 字母組合常規發雙母音 /aʊt/"
      },
      {
        "syllable": "第 2 音節［side］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 常規發字母本名長雙母音 /ˈsaɪd/"
      }
    ]
  },
  {
    "id": 617,
    "word": "over",
    "pos": "prep./adv.",
    "chinese": "結束",
    "syllable": [
      "o",
      "ver"
    ],
    "ipa": "/ˈoʊ.vɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［o］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音 o 結尾無子音封閉，常規發長雙母音 /ˈoʊ/"
      },
      {
        "syllable": "第 2 音節［ver］",
        "rule": "R 控制母音 er (R005) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /vɚ/"
      }
    ]
  },
  {
    "id": 618,
    "word": "own",
    "pos": "adj./pron./v.",
    "chinese": "自己的",
    "syllable": [
      "own"
    ],
    "ipa": "/oʊn/",
    "derivations": [
      {
        "syllable": "單音節［own］",
        "rule": "母音組合 ow (R004)",
        "status": "【適用】",
        "reason": "ow 字母組合常規發長雙母音 /oʊ/，鼻子音 n 封閉全字發 /oʊn/"
      }
    ]
  },
  {
    "id": 619,
    "word": "pack",
    "pos": "n./v.",
    "chinese": "包",
    "syllable": [
      "pack"
    ],
    "ipa": "/pæk/",
    "derivations": [
      {
        "syllable": "單音節［pack］",
        "rule": "閉音節規則 (R001) + 複合子音 ck (R006)",
        "status": "【適用】",
        "reason": "複合子音 ck 封閉音節，單一母音 a 常規發短母音 /pæk/"
      }
    ]
  },
  {
    "id": 620,
    "word": "package",
    "pos": "n.",
    "chinese": "包裹",
    "syllable": [
      "pack",
      "age"
    ],
    "ipa": "/ˈpæk.ɪdʒ/",
    "derivations": [
      {
        "syllable": "第 1 音節［pack］",
        "rule": "閉音節規則 (R001) + 複合子音 ck (R006)",
        "status": "【適用】",
        "reason": "ck 封閉重讀音節，母音 a 常規發短母音 /ˈpæk/"
      },
      {
        "syllable": "第 2 音節［age］",
        "rule": "名詞字尾弱化 (R008) + 軟音 g (R007)",
        "status": "【適用】",
        "reason": "名詞後綴 -age 處非重音節 a 弱化發 /ɪ/，g 在 e 前軟音化為 /dʒ/，發 /ɪdʒ/"
      }
    ]
  },
  {
    "id": 621,
    "word": "page",
    "pos": "n.",
    "chinese": "頁",
    "syllable": [
      "page"
    ],
    "ipa": "/peɪdʒ/",
    "derivations": [
      {
        "syllable": "單音節［page］",
        "rule": "魔術 e 規則 (R003) + 軟音 g (R007)",
        "status": "【適用】",
        "reason": "a_e 結構字尾 e 靜音促使 a 發長雙母音 /peɪ/，g 在 e 前軟化為 /dʒ/"
      }
    ]
  },
  {
    "id": 622,
    "word": "paint",
    "pos": "n./v.",
    "chinese": "繪畫",
    "syllable": [
      "paint"
    ],
    "ipa": "/peɪnt/",
    "derivations": [
      {
        "syllable": "單音節［paint］",
        "rule": "雙母音組合 ai (R004)",
        "status": "【適用】",
        "reason": "ai 字母組合常規發長雙母音 /eɪ/，子音叢 nt 封閉發 /peɪnt/"
      }
    ]
  },
  {
    "id": 623,
    "word": "pair",
    "pos": "n.",
    "chinese": "一雙",
    "syllable": [
      "pair"
    ],
    "ipa": "/pɛr/",
    "derivations": [
      {
        "syllable": "單音節［pair］",
        "rule": "雙母音 air 組合 (R005)",
        "status": "【適用】",
        "reason": "air 字母組合於單音節常規發捲舌雙母音 /pɛr/"
      }
    ]
  },
  {
    "id": 624,
    "word": "pants",
    "pos": "n.",
    "chinese": "長褲",
    "syllable": [
      "pants"
    ],
    "ipa": "/pænts/",
    "derivations": [
      {
        "syllable": "單音節［pants］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音叢 nts 封閉音節，單一母音 a 常規發短母音 /pænts/"
      }
    ]
  },
  {
    "id": 625,
    "word": "paper",
    "pos": "n./v.",
    "chinese": "紙",
    "syllable": [
      "pa",
      "per"
    ],
    "ipa": "/ˈpeɪ.pɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［pa］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節單一母音 a 結尾無子音封閉，常規發長雙母音 /ˈpeɪ/"
      },
      {
        "syllable": "第 2 音節［per］",
        "rule": "R 控制母音 er (R005) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /pɚ/"
      }
    ]
  },
  {
    "id": 626,
    "word": "parent(s)",
    "pos": "n.",
    "chinese": "父(母)親",
    "syllable": [
      "par",
      "ent(s)"
    ],
    "ipa": "/ˈpɛr.ənt(s)/",
    "derivations": [
      {
        "syllable": "第 1 音節［par］",
        "rule": "R 控制母音 ar (R005)",
        "status": "【適用】",
        "reason": "ar 在母音前常規發捲舌音 /ˈpɛr/"
      },
      {
        "syllable": "第 2 音節［ent(s)］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 e 弱化發央母音 /ənt(s)/"
      }
    ]
  },
  {
    "id": 627,
    "word": "park",
    "pos": "n./v.",
    "chinese": "公園",
    "syllable": [
      "park"
    ],
    "ipa": "/pɑːrk/",
    "derivations": [
      {
        "syllable": "單音節［park］",
        "rule": "R 控制母音 ar (R005)",
        "status": "【適用】",
        "reason": "ar 組合受 r 控制常規發長開後母音 /ɑːr/，子音 k 封閉發 /pɑːrk/"
      }
    ]
  },
  {
    "id": 628,
    "word": "part",
    "pos": "n./v.",
    "chinese": "部分",
    "syllable": [
      "part"
    ],
    "ipa": "/pɑːrt/",
    "derivations": [
      {
        "syllable": "單音節［part］",
        "rule": "R 控制母音 ar (R005)",
        "status": "【適用】",
        "reason": "ar 組合常規發捲舌長母音 /ɑːr/，子音 t 封閉發 /pɑːrt/"
      }
    ]
  },
  {
    "id": 629,
    "word": "party",
    "pos": "n./v.",
    "chinese": "派對",
    "syllable": [
      "par",
      "ty"
    ],
    "ipa": "/ˈpɑːr.ti/",
    "derivations": [
      {
        "syllable": "第 1 音節［par］",
        "rule": "R 控制母音 ar (R005)",
        "status": "【適用】",
        "reason": "ar 字母組合於重音節常規發捲舌長母音 /ˈpɑːr/"
      },
      {
        "syllable": "第 2 音節［ty］",
        "rule": "字尾 y 半母音 (R002/R008)",
        "status": "【適用】",
        "reason": "字尾 y 處非重讀音節常規發長短交界的長母音 /ti/"
      }
    ]
  },
  {
    "id": 630,
    "word": "pass",
    "pos": "v./n.",
    "chinese": "通過",
    "syllable": [
      "pass"
    ],
    "ipa": "/pæs/",
    "derivations": [
      {
        "syllable": "單音節［pass］",
        "rule": "閉音節規則 (R001) + 雙寫 ss (R006)",
        "status": "【適用】",
        "reason": "雙寫子音 ss 封閉音節發單一音 /s/，單一母音 a 常規發短母音 /pæs/"
      }
    ]
  },
  {
    "id": 631,
    "word": "past",
    "pos": "adj./n./prep./adv.",
    "chinese": "經過",
    "syllable": [
      "past"
    ],
    "ipa": "/pæst/",
    "derivations": [
      {
        "syllable": "單音節［past］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音叢 st 封閉音節，單一母音 a 常規發短母音 /pæst/"
      }
    ]
  },
  {
    "id": 632,
    "word": "pay(ment)",
    "pos": "v./(n.)",
    "chinese": "付錢",
    "syllable": [
      "pay"
    ],
    "ipa": "/peɪ/",
    "derivations": [
      {
        "syllable": "單音節［pay］",
        "rule": "母音組合 ay (R004)",
        "status": "【適用】",
        "reason": "ay 字母組合於字尾常規發長雙母音 /peɪ/"
      }
    ]
  },
  {
    "id": 633,
    "word": "pen",
    "pos": "n./v.",
    "chinese": "筆",
    "syllable": [
      "pen"
    ],
    "ipa": "/pɛn/",
    "derivations": [
      {
        "syllable": "單音節［pen］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "鼻子音 n 封閉音節，單一母音 e 常規發短母音 /pɛn/"
      }
    ]
  },
  {
    "id": 634,
    "word": "pencil",
    "pos": "n.",
    "chinese": "鉛筆",
    "syllable": [
      "pen",
      "cil"
    ],
    "ipa": "/ˈpɛn.səl/",
    "derivations": [
      {
        "syllable": "第 1 音節［pen］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "鼻子音 n 封閉重讀音節，單一母音 e 常規發短母音 /ˈpɛn/"
      },
      {
        "syllable": "第 2 音節［cil］",
        "rule": "軟音 c (R007) + 非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "c 在 i 前軟音化發 /s/，il 弱化發成音節性質的 /səl/"
      }
    ]
  },
  {
    "id": 635,
    "word": "people",
    "pos": "n./v.",
    "chinese": "人們,人民",
    "syllable": [
      "peo",
      "ple"
    ],
    "ipa": "/ˈpiː.pəl/",
    "derivations": [
      {
        "syllable": "第 1 音節［peo］",
        "rule": "歷史拼寫特例 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "eo 字母組合受古法語音變影響特例發長母音 /ˈpiː/ (R010)"
      },
      {
        "syllable": "第 2 音節［ple］",
        "rule": "成音節字尾 -le (R009)",
        "status": "【適用】",
        "reason": "子音 + le 結構於詞尾常規形成成音節發 /pəl/"
      }
    ]
  },
  {
    "id": 636,
    "word": "perhaps",
    "pos": "adv.",
    "chinese": "或許",
    "syllable": [
      "per",
      "haps"
    ],
    "ipa": "/pɚˈhæps/",
    "derivations": [
      {
        "syllable": "第 1 音節［per］",
        "rule": "R 控制母音 er (R005) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀前綴音節 per- 常規弱化發捲舌音 /pɚ/"
      },
      {
        "syllable": "第 2 音節［haps］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音叢 ps 封閉重讀音節，單一母音 a 常規發短母音 /ˈhæps/"
      }
    ]
  },
  {
    "id": 637,
    "word": "person",
    "pos": "n.",
    "chinese": "人",
    "syllable": [
      "per",
      "son"
    ],
    "ipa": "/ˈpɝː.sən/",
    "derivations": [
      {
        "syllable": "第 1 音節［per］",
        "rule": "R 控制母音 er (R005)",
        "status": "【適用】",
        "reason": "er 字母組合處重讀音節，常規發捲舌長母音 /ˈpɝː/"
      },
      {
        "syllable": "第 2 音節［son］",
        "rule": "非重讀弱化 / 成音節 (R008/R009)",
        "status": "【適用】",
        "reason": "非重讀音節單一母音 o 弱化，鼻音 n 結合發成音節 /sən/"
      }
    ]
  },
  {
    "id": 638,
    "word": "pet",
    "pos": "n./v.",
    "chinese": "寵物",
    "syllable": [
      "pet"
    ],
    "ipa": "/pɛt/",
    "derivations": [
      {
        "syllable": "單音節［pet］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 t 封閉音節，單一母音 e 常規發短母音 /pɛt/"
      }
    ]
  },
  {
    "id": 639,
    "word": "photograph/photo",
    "pos": "n./v.",
    "chinese": "照片; 攝影",
    "syllable": [
      "pho",
      "to",
      "graph"
    ],
    "ipa": "/ˈfoʊ.t̬ə.ɡræf/",
    "derivations": [
      {
        "syllable": "第 1 音節［pho］",
        "rule": "複合子音 ph (R006) + 開音節 (R002)",
        "status": "【適用】",
        "reason": "ph 發清擦音 /f/，開音節結尾 o 常規發長雙母音 /ˈfoʊ/"
      },
      {
        "syllable": "第 2 音節［to］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "夾在中間之非重讀開音節 o 弱化，發 /t̬ə/"
      },
      {
        "syllable": "第 3 音節［graph］",
        "rule": "閉音節 (R001) + 複合子音 ph (R006)",
        "status": "【適用】",
        "reason": "ph 發 /f/ 封閉音節，母音 a 常規發短母音 /ɡræf/"
      }
    ]
  },
  {
    "id": 640,
    "word": "piano",
    "pos": "n.",
    "chinese": "鋼琴",
    "syllable": [
      "pi",
      "an",
      "o"
    ],
    "ipa": "/piˈæn.oʊ/",
    "derivations": [
      {
        "syllable": "第 1 音節［pi］",
        "rule": "開音節規則 (R002) → 非重讀 (R008)",
        "status": "【適用】",
        "reason": "非重讀開音節單一母音 i 常規發短長母音 /pi/"
      },
      {
        "syllable": "第 2 音節［an］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "鼻子音 n 封閉重讀音節，單一母音 a 常規發短母音 /ˈæn/"
      },
      {
        "syllable": "第 3 音節［o］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "詞尾開音節 o 常規發長雙母音 /oʊ/"
      }
    ]
  },
  {
    "id": 641,
    "word": "pick",
    "pos": "v./n.",
    "chinese": "撿拾",
    "syllable": [
      "pick"
    ],
    "ipa": "/pɪk/",
    "derivations": [
      {
        "syllable": "單音節［pick］",
        "rule": "閉音節規則 (R001) + 複合子音 ck (R006)",
        "status": "【適用】",
        "reason": "複合子音 ck 封閉音節，單一母音 i 常規發短母音 /pɪk/"
      }
    ]
  },
  {
    "id": 642,
    "word": "picnic",
    "pos": "n./v.",
    "chinese": "野餐",
    "syllable": [
      "pic",
      "nic"
    ],
    "ipa": "/ˈpɪk.nɪk/",
    "derivations": [
      {
        "syllable": "第 1 音節［pic］",
        "rule": "閉音節規則 (R001) + 硬音 c (R007)",
        "status": "【適用】",
        "reason": "c 在音節尾發硬音 /k/ 封閉重讀音節，母音 i 發短母音 /ˈpɪk/"
      },
      {
        "syllable": "第 2 音節［nic］",
        "rule": "閉音節規則 (R001) + 硬音 c (R007)",
        "status": "【適用】",
        "reason": "c 在字尾發硬音 /k/ 封閉音節，單一母音 i 常規發短母音 /nɪk/"
      }
    ]
  },
  {
    "id": 643,
    "word": "picture",
    "pos": "n./v.",
    "chinese": "圖片,照片",
    "syllable": [
      "pic",
      "ture"
    ],
    "ipa": "/ˈpɪk.tʃɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［pic］",
        "rule": "閉音節規則 (R001) + 硬音 c (R007)",
        "status": "【適用】",
        "reason": "c 發硬音 /k/ 封閉重讀音節，母音 i 發短母音 /ˈpɪk/"
      },
      {
        "syllable": "第 2 音節［ture］",
        "rule": "字尾 -ture 顎化規則 (R006/R008)",
        "status": "【適用】",
        "reason": "後綴 -ture 中 t 與後方母音同化發清塞擦音 /tʃ/，ure 發捲舌音 /ɚ/"
      }
    ]
  },
  {
    "id": 644,
    "word": "pie",
    "pos": "n.",
    "chinese": "派",
    "syllable": [
      "pie"
    ],
    "ipa": "/paɪ/",
    "derivations": [
      {
        "syllable": "單音節［pie］",
        "rule": "母音組合 ie (R004)",
        "status": "【適用】",
        "reason": "ie 字母組合於單音節詞尾常規發長雙母音 /paɪ/"
      }
    ]
  },
  {
    "id": 645,
    "word": "piece",
    "pos": "n./v.",
    "chinese": "片",
    "syllable": [
      "piece"
    ],
    "ipa": "/piːs/",
    "derivations": [
      {
        "syllable": "單音節［piece］",
        "rule": "母音組合 ie (R004) + 軟音 c (R007)",
        "status": "【適用】",
        "reason": "ie 組合發長母音 /iː/，c 在 e 前軟音化為 /s/，字尾 e 靜音發 /piːs/"
      }
    ]
  },
  {
    "id": 646,
    "word": "pig",
    "pos": "n./v.",
    "chinese": "豬",
    "syllable": [
      "pig"
    ],
    "ipa": "/pɪɡ/",
    "derivations": [
      {
        "syllable": "單音節［pig］",
        "rule": "閉音節規則 (R001) + 硬音 g (R007)",
        "status": "【適用】",
        "reason": "子音 g 在詞尾發硬音 /ɡ/ 封閉音節，單一母音 i 常規發短母音 /pɪɡ/"
      }
    ]
  },
  {
    "id": 647,
    "word": "pin",
    "pos": "n./v.",
    "chinese": "大頭針",
    "syllable": [
      "pin"
    ],
    "ipa": "/pɪn/",
    "derivations": [
      {
        "syllable": "單音節［pin］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "鼻子音 n 封閉音節，單一母音 i 常規發短母音 /pɪn/"
      }
    ]
  },
  {
    "id": 648,
    "word": "pink",
    "pos": "adj./n.",
    "chinese": "粉紅色(的)",
    "syllable": [
      "pink"
    ],
    "ipa": "/pɪŋk/",
    "derivations": [
      {
        "syllable": "單音節［pink］",
        "rule": "閉音節規則 (R001) + 軟顎鼻音 nk (R006)",
        "status": "【適用】",
        "reason": "nk 字母組合常規發軟顎鼻音 /ŋk/，母音 i 常規發短母音 /pɪŋk/"
      }
    ]
  },
  {
    "id": 649,
    "word": "pipe",
    "pos": "n./v.",
    "chinese": "管",
    "syllable": [
      "pipe"
    ],
    "ipa": "/paɪp/",
    "derivations": [
      {
        "syllable": "單音節［pipe］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音，母音 i 常規發字母本名長雙母音 /paɪp/"
      }
    ]
  },
  {
    "id": 650,
    "word": "place",
    "pos": "n./v.",
    "chinese": "地方",
    "syllable": [
      "place"
    ],
    "ipa": "/pleɪs/",
    "derivations": [
      {
        "syllable": "單音節［place］",
        "rule": "魔術 e 規則 (R003) + 軟音 c (R007)",
        "status": "【適用】",
        "reason": "a_e 結構促使 a 發長雙母音 /pleɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 651,
    "word": "plan",
    "pos": "n./v.",
    "chinese": "計畫",
    "syllable": [
      "plan"
    ],
    "ipa": "/plæn/",
    "derivations": [
      {
        "syllable": "單音節［plan］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音叢 pl 開頭，單一母音 a 被 n 封閉常規發短母音 /plæn/"
      }
    ]
  },
  {
    "id": 652,
    "word": "planet",
    "pos": "n.",
    "chinese": "行星",
    "syllable": [
      "plan",
      "et"
    ],
    "ipa": "/ˈplæn.ɪt/",
    "derivations": [
      {
        "syllable": "第 1 音節［plan］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "鼻子音 n 封閉重讀音節，單一母音 a 常規發短母音 /ˈplæn/"
      },
      {
        "syllable": "第 2 音節［et］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 e 弱化發短音 /ɪt/"
      }
    ]
  },
  {
    "id": 653,
    "word": "plant",
    "pos": "n./v.",
    "chinese": "植物",
    "syllable": [
      "plant"
    ],
    "ipa": "/plænt/",
    "derivations": [
      {
        "syllable": "單音節［plant］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音叢 nt 封閉音節，單一母音 a 常規發短母音 /plænt/"
      }
    ]
  },
  {
    "id": 654,
    "word": "plate",
    "pos": "n.",
    "chinese": "盤子",
    "syllable": [
      "plate"
    ],
    "ipa": "/pleɪt/",
    "derivations": [
      {
        "syllable": "單音節［plate］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "a_e 結構字尾 e 靜音促使母音 a 發字母本名長雙母音 /pleɪt/"
      }
    ]
  },
  {
    "id": 655,
    "word": "play",
    "pos": "v./n.",
    "chinese": "玩",
    "syllable": [
      "play"
    ],
    "ipa": "/pleɪ/",
    "derivations": [
      {
        "syllable": "單音節［play］",
        "rule": "母音組合 ay (R004)",
        "status": "【適用】",
        "reason": "ay 字母組合於詞尾常規發長雙母音 /pleɪ/"
      }
    ]
  },
  {
    "id": 656,
    "word": "player",
    "pos": "n.",
    "chinese": "球員,玩家",
    "syllable": [
      "play",
      "er"
    ],
    "ipa": "/ˈpleɪ.ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［play］",
        "rule": "母音組合 ay (R004)",
        "status": "【適用】",
        "reason": "ay 字母組合常規發長雙母音 /ˈpleɪ/"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音 er (R005) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "後綴 -er 處非重讀音節常規發捲舌音 /ɚ/"
      }
    ]
  },
  {
    "id": 657,
    "word": "please",
    "pos": "v.",
    "chinese": "請",
    "syllable": [
      "please"
    ],
    "ipa": "/pliːz/",
    "derivations": [
      {
        "syllable": "單音節［please］",
        "rule": "雙母音組合 ea (R004)",
        "status": "【適用】",
        "reason": "ea 字母組合常規發長母音 /iː/，尾音 s 濁化為 /z/，字尾 e 靜音，全字發 /pliːz/"
      }
    ]
  },
  {
    "id": 658,
    "word": "pleasure",
    "pos": "n.",
    "chinese": "樂趣,使高興",
    "syllable": [
      "pleas",
      "ure"
    ],
    "ipa": "/ˈplɛʒ.ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［pleas］",
        "rule": "雙母音組合 ea 特例 (R010) + s 濁擦化 (R006)",
        "status": "【不適用 (例外轉移)】",
        "reason": "ea 組合受歷史音變影響未發長音轉移發短母音 /ˈplɛ/，s 顎化濁擦發 /ʒ/"
      },
      {
        "syllable": "第 2 音節［ure］",
        "rule": "字尾弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀字尾 -ure 常規弱化發捲舌音 /ɚ/"
      }
    ]
  },
  {
    "id": 659,
    "word": "pm/p.m.",
    "pos": "adv.",
    "chinese": "下午, 午後 (post meridiem)",
    "syllable": [
      "p.",
      "m."
    ],
    "ipa": "/ˌpiːˈɛm/",
    "derivations": [
      {
        "syllable": "第 1 音節［p.］",
        "rule": "字母本名音規則 (R018)",
        "status": "【適用】",
        "reason": "英文首字母縮寫字 P 唸其字母本名音 /piː/"
      },
      {
        "syllable": "第 2 音節［m.］",
        "rule": "字母本名音規則 (R018)",
        "status": "【適用】",
        "reason": "英文首字母縮寫字 M 唸其字母本名音 /ˈɛm/，重音落於第二字母"
      }
    ]
  },
  {
    "id": 660,
    "word": "pocket",
    "pos": "n./v.",
    "chinese": "口袋",
    "syllable": [
      "pock",
      "et"
    ],
    "ipa": "/ˈpɑː.kɪt/",
    "derivations": [
      {
        "syllable": "第 1 音節［pock］",
        "rule": "閉音節規則 (R001) + 複合子音 ck (R006)",
        "status": "【適用】",
        "reason": "ck 封閉重讀音節，單一母音 o 常規發短母音 /ˈpɑːk/"
      },
      {
        "syllable": "第 2 音節［et］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 e 弱化發短音 /ɪt/"
      }
    ]
  },
  {
    "id": 661,
    "word": "point",
    "pos": "n./v.",
    "chinese": "指著,得分",
    "syllable": [
      "point"
    ],
    "ipa": "/pɔɪnt/",
    "derivations": [
      {
        "syllable": "單音節［point］",
        "rule": "雙母音組合 oi (R004)",
        "status": "【適用】",
        "reason": "oi 字母組合常規發雙母音 /ɔɪ/，子音叢 nt 封閉發 /pɔɪnt/"
      }
    ]
  },
  {
    "id": 662,
    "word": "police",
    "pos": "n./v.",
    "chinese": "警察",
    "syllable": [
      "po",
      "lice"
    ],
    "ipa": "/pəˈliːs/",
    "derivations": [
      {
        "syllable": "第 1 音節［po］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "首音節非重讀，單一母音 o 弱化為央母音 /pə/"
      },
      {
        "syllable": "第 2 音節［lice］",
        "rule": "法語外來詞特例 (R010) + 軟音 c (R007)",
        "status": "【不適用 (例外轉移)】",
        "reason": "源自法語借詞，i_e 未發 /aɪ/ 而發長母音 /ˈliː/，c 在 e 前發 /s/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 663,
    "word": "polite",
    "pos": "adj.",
    "chinese": "有禮貌的",
    "syllable": [
      "po",
      "lite"
    ],
    "ipa": "/pəˈlaɪt/",
    "derivations": [
      {
        "syllable": "第 1 音節［po］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "首音節非重讀，單一母音 o 弱化為央母音 /pə/"
      },
      {
        "syllable": "第 2 音節［lite］",
        "rule": "魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "i_e 結構字尾 e 靜音促使母音 i 常規發字母本名長雙母音 /ˈlaɪt/"
      }
    ]
  },
  {
    "id": 664,
    "word": "pond",
    "pos": "n.",
    "chinese": "池塘",
    "syllable": [
      "pond"
    ],
    "ipa": "/pɑːnd/",
    "derivations": [
      {
        "syllable": "單音節［pond］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音叢 nd 封閉音節，單一母音 o 常規發短母音 /pɑːnd/"
      }
    ]
  },
  {
    "id": 665,
    "word": "pool",
    "pos": "n./v.",
    "chinese": "游泳池",
    "syllable": [
      "pool"
    ],
    "ipa": "/puːl/",
    "derivations": [
      {
        "syllable": "單音節［pool］",
        "rule": "雙母音組合 oo (R004)",
        "status": "【適用】",
        "reason": "oo 字母組合於一般位置常規發後高長母音 /uː/，尾音 l 封閉發 /puːl/"
      }
    ]
  },
  {
    "id": 666,
    "word": "poor",
    "pos": "adj.",
    "chinese": "貧困的,可憐的",
    "syllable": [
      "poor"
    ],
    "ipa": "/pʊr/",
    "derivations": [
      {
        "syllable": "單音節［poor］",
        "rule": "雙母音組合 oor 特例 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "oo 在 r 前受影響未發 /uː/ 轉移發短母音 /ʊr/ (美式亦有發 /pɔːr/ 之口音變體)"
      }
    ]
  },
  {
    "id": 667,
    "word": "popcorn",
    "pos": "n.",
    "chinese": "爆米花",
    "syllable": [
      "pop",
      "corn"
    ],
    "ipa": "/ˈpɑːp.kɔːrn/",
    "derivations": [
      {
        "syllable": "第 1 音節［pop］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 p 封閉重讀音節，單一母音 o 常規發短母音 /ˈpɑːp/"
      },
      {
        "syllable": "第 2 音節［corn］",
        "rule": "R 控制母音 or (R005)",
        "status": "【適用】",
        "reason": "or 組合常規發長母音 /kɔːrn/，形成複合詞重音結構"
      }
    ]
  },
  {
    "id": 668,
    "word": "popular",
    "pos": "adj.",
    "chinese": "受歡迎的",
    "syllable": [
      "pop",
      "u",
      "lar"
    ],
    "ipa": "/ˈpɑː.pjə.lɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［pop］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 p 封閉重讀音節，單一母音 o 常規發短母音 /ˈpɑːp/"
      },
      {
        "syllable": "第 2 音節［u］",
        "rule": "半母音過渡 (R008/R011)",
        "status": "【適用】",
        "reason": "次重讀音節 u 帶出硬顎半母音過渡發 /jə/"
      },
      {
        "syllable": "第 3 音節［lar］",
        "rule": "非重讀 R 控制母音 (R005/R008)",
        "status": "【適用】",
        "reason": "字尾 -ar 處非重讀音節常規弱化發捲舌音 /lɚ/"
      }
    ]
  },
  {
    "id": 669,
    "word": "possible",
    "pos": "adj.",
    "chinese": "可能的",
    "syllable": [
      "pos",
      "si",
      "ble"
    ],
    "ipa": "/ˈpɑː.sə.bəl/",
    "derivations": [
      {
        "syllable": "第 1 音節［pos］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 s 封閉重讀音節，單一母音 o 常規發短母音 /ˈpɑːs/"
      },
      {
        "syllable": "第 2 音節［si］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 i 弱化發央母音 /sə/"
      },
      {
        "syllable": "第 3 音節［ble］",
        "rule": "成音節字尾 -le (R009)",
        "status": "【適用】",
        "reason": "子音 + le 結構於詞尾常規形成成音節發 /bəl/"
      }
    ]
  },
  {
    "id": 670,
    "word": "pot",
    "pos": "n./v.",
    "chinese": "罐,壺,鍋子",
    "syllable": [
      "pot"
    ],
    "ipa": "/pɑːt/",
    "derivations": [
      {
        "syllable": "單音節［pot］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 t 封閉音節，單一母音 o 常規發短母音 /pɑːt/"
      }
    ]
  },
  {
    "id": 671,
    "word": "potato",
    "pos": "n.",
    "chinese": "馬鈴薯",
    "syllable": [
      "po",
      "ta",
      "to"
    ],
    "ipa": "/pəˈteɪ.t̬oʊ/",
    "derivations": [
      {
        "syllable": "第 1 音節［po］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "首音節非重讀，單一母音 o 弱化發央母音 /pə/"
      },
      {
        "syllable": "第 2 音節［ta］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節結尾無子音封閉，母音 a 常規發長雙母音 /ˈteɪ/"
      },
      {
        "syllable": "第 3 音節［to］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "詞尾開音節 o 常規發長雙母音 /t̬oʊ/"
      }
    ]
  },
  {
    "id": 672,
    "word": "power",
    "pos": "n./v.",
    "chinese": "力量, 電力; 給…提供動力",
    "syllable": [
      "pow",
      "er"
    ],
    "ipa": "/ˈpaʊ.ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［pow］",
        "rule": "雙母音組合 ow (R004)",
        "status": "【適用】",
        "reason": "ow 字母組合常規發雙母音 /ˈpaʊ/"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音 er (R005) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /ɚ/"
      }
    ]
  },
  {
    "id": 673,
    "word": "practice",
    "pos": "n./v.",
    "chinese": "練習",
    "syllable": [
      "prac",
      "tice"
    ],
    "ipa": "/ˈpræk.tɪs/",
    "derivations": [
      {
        "syllable": "第 1 音節［prac］",
        "rule": "閉音節規則 (R001) + 硬音 c (R007)",
        "status": "【適用】",
        "reason": "c 在音節尾發硬音 /k/ 封閉重讀音節，母音 a 發短母音 /ˈpræk/"
      },
      {
        "syllable": "第 2 音節［tice］",
        "rule": "字尾弱化 (R008) + 軟音 c (R007)",
        "status": "【適用】",
        "reason": "非重讀後綴 -ice 弱化發 /ɪs/，c 在 e 前軟音化為 /s/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 674,
    "word": "prepare",
    "pos": "v.",
    "chinese": "準備",
    "syllable": [
      "pre",
      "pare"
    ],
    "ipa": "/prɪˈpɛr/",
    "derivations": [
      {
        "syllable": "第 1 音節［pre］",
        "rule": "前綴非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀前綴 pre- 常規弱化發短音 /prɪ/"
      },
      {
        "syllable": "第 2 音節［pare］",
        "rule": "魔術 e 結構 / R 控制母音 (R003/R005)",
        "status": "【適用】",
        "reason": "a_e 在 r 前受影響常規發捲舌雙母音 /ˈpɛr/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 675,
    "word": "present",
    "pos": "adj./n./v.",
    "chinese": "禮物",
    "syllable": [
      "pres",
      "ent"
    ],
    "ipa": "/ˈprɛz.ənt/",
    "derivations": [
      {
        "syllable": "第 1 音節［pres］",
        "rule": "閉音節規則 (R001) + s 濁化 (R006)",
        "status": "【適用】",
        "reason": "子音 s 在兩母音之間濁化發 /z/ 封閉重音節，母音 e 發短母音 /ˈprɛz/"
      },
      {
        "syllable": "第 2 音節［ent］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節單一母音 e 弱化發央母音 /ənt/"
      }
    ]
  },
  {
    "id": 676,
    "word": "pretty",
    "pos": "adv./adj.",
    "chinese": "漂亮的,非常",
    "syllable": [
      "pret",
      "ty"
    ],
    "ipa": "/ˈprɪt.i/",
    "derivations": [
      {
        "syllable": "第 1 音節［pret］",
        "rule": "閉音節特例轉移 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "母音 e 受歷史古音影響未發 /ɛ/ 轉移發短母音 /ˈprɪt/ (R010)"
      },
      {
        "syllable": "第 2 音節［ty］",
        "rule": "字尾 y 半母音 (R002/R008)",
        "status": "【適用】",
        "reason": "字尾 y 處非重讀音節常規發長短交界的長母音 /i/"
      }
    ]
  },
  {
    "id": 677,
    "word": "price",
    "pos": "n./v.",
    "chinese": "價格",
    "syllable": [
      "price"
    ],
    "ipa": "/praɪs/",
    "derivations": [
      {
        "syllable": "單音節［price］",
        "rule": "魔術 e 規則 (R003) + 軟音 c (R007)",
        "status": "【適用】",
        "reason": "i_e 結構促使母音 i 發長雙母音 /praɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音"
      }
    ]
  },
  {
    "id": 678,
    "word": "probably",
    "pos": "adv.",
    "chinese": "很可能, 大概",
    "syllable": [
      "prob",
      "a",
      "bly"
    ],
    "ipa": "/ˈprɑː.bə.bli/",
    "derivations": [
      {
        "syllable": "第 1 音節［prob］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 b 封閉重讀音節，單一母音 o 常規發短母音 /ˈprɑːb/"
      },
      {
        "syllable": "第 2 音節［a］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "夾在中間之單一母音 a 弱化發央母音 /ə/"
      },
      {
        "syllable": "第 3 音節［bly］",
        "rule": "字尾 y 半母音 (R002/R008)",
        "status": "【適用】",
        "reason": "副詞字尾 -bly 處非重讀音節常規發 /bli/"
      }
    ]
  },
  {
    "id": 679,
    "word": "problem",
    "pos": "n.",
    "chinese": "問題",
    "syllable": [
      "prob",
      "lem"
    ],
    "ipa": "/ˈprɑː.bləm/",
    "derivations": [
      {
        "syllable": "第 1 音節［prob］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 b 封閉重讀音節，單一母音 o 常規發短母音 /ˈprɑːb/"
      },
      {
        "syllable": "第 2 音節［lem］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 e 弱化發央母音 /ləm/"
      }
    ]
  },
  {
    "id": 680,
    "word": "program",
    "pos": "n./v.",
    "chinese": "節目",
    "syllable": [
      "pro",
      "gram"
    ],
    "ipa": "/ˈproʊ.ɡræm/",
    "derivations": [
      {
        "syllable": "第 1 音節［pro］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節結尾無子音封閉，單一母音 o 常規發長雙母音 /ˈproʊ/"
      },
      {
        "syllable": "第 2 音節［gram］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "鼻子音 m 封閉音節，母音 a 常規發短母音 /ɡræm/"
      }
    ]
  },
  {
    "id": 681,
    "word": "proud",
    "pos": "adj.",
    "chinese": "驕傲的",
    "syllable": [
      "proud"
    ],
    "ipa": "/praʊd/",
    "derivations": [
      {
        "syllable": "單音節［proud］",
        "rule": "雙母音組合 ou (R004)",
        "status": "【適用】",
        "reason": "ou 字母組合常規發雙母音 /aʊ/，尾音 d 封閉發 /praʊd/"
      }
    ]
  },
  {
    "id": 682,
    "word": "public",
    "pos": "adj./n.",
    "chinese": "公立的,公眾的",
    "syllable": [
      "pub",
      "lic"
    ],
    "ipa": "/ˈpʌb.lɪk/",
    "derivations": [
      {
        "syllable": "第 1 音節［pub］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 b 封閉重讀音節，單一母音 u 常規發短母音 /ˈpʌb/"
      },
      {
        "syllable": "第 2 音節［lic］",
        "rule": "閉音節規則 (R001) + 硬音 c (R007)",
        "status": "【適用】",
        "reason": "c 在詞尾發硬音 /k/ 封閉音節，單一母音 i 常規發短母音 /lɪk/"
      }
    ]
  },
  {
    "id": 683,
    "word": "pull",
    "pos": "v./n.",
    "chinese": "拉",
    "syllable": [
      "pull"
    ],
    "ipa": "/pʊl/",
    "derivations": [
      {
        "syllable": "單音節［pull］",
        "rule": "雙寫 ll 前特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "母音 u 在 -ll 前受影響未發短音 /ʌ/ 轉移發圓唇短母音 /pʊl/ (R010)"
      }
    ]
  },
  {
    "id": 684,
    "word": "push",
    "pos": "v./n.",
    "chinese": "推",
    "syllable": [
      "push"
    ],
    "ipa": "/pʊʃ/",
    "derivations": [
      {
        "syllable": "單音節［push］",
        "rule": "複合子音 sh (R006) + 特例短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "母音 u 在 -sh 前未發短音 /ʌ/ 轉移發圓唇短母音 /pʊʃ/ (R010)"
      }
    ]
  },
  {
    "id": 685,
    "word": "put",
    "pos": "v.",
    "chinese": "放",
    "syllable": [
      "put"
    ],
    "ipa": "/pʊt/",
    "derivations": [
      {
        "syllable": "單音節［put］",
        "rule": "閉音節特例圓唇短母音 (R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "單一母音 u 在此詞中未發 /ʌ/ 轉移發圓唇短母音 /pʊt/ (R010)"
      }
    ]
  },
  {
    "id": 686,
    "word": "quarter",
    "pos": "n.",
    "chinese": "15 分鐘,1/4",
    "syllable": [
      "quar",
      "ter"
    ],
    "ipa": "/ˈkwɔːr.t̬ɚ/",
    "derivations": [
      {
        "syllable": "第 1 音節［quar］",
        "rule": "複合子音 qu (R006) + ar 受 w 圓唇化 (R005/R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "qu 發 /kw/，其後 ar 受唇軟顎音 /w/ 牽引圓唇化為 /ˈkwɔːr/"
      },
      {
        "syllable": "第 2 音節［ter］",
        "rule": "R 控制母音 er (R005) / 弱化 (R008)",
        "status": "【適用】",
        "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /t̬ɚ/"
      }
    ]
  },
  {
    "id": 687,
    "word": "queen",
    "pos": "n.",
    "chinese": "皇后",
    "syllable": [
      "queen"
    ],
    "ipa": "/kwiːn/",
    "derivations": [
      {
        "syllable": "單音節［queen］",
        "rule": "複合子音 qu (R006) + 雙母音 ee (R004)",
        "status": "【適用】",
        "reason": "qu 發 /kw/，ee 字母組合常規發長母音 /iː/，全字發 /kwiːn/"
      }
    ]
  },
  {
    "id": 688,
    "word": "question",
    "pos": "n./v.",
    "chinese": "問題",
    "syllable": [
      "ques",
      "tion"
    ],
    "ipa": "/ˈkwɛs.tʃən/",
    "derivations": [
      {
        "syllable": "第 1 音節［ques］",
        "rule": "複合子音 qu (R006) + 閉音節 (R001)",
        "status": "【適用】",
        "reason": "qu 發 /kw/，子音 s 封閉重讀音節，母音 e 常規發短母音 /ˈkwɛs/"
      },
      {
        "syllable": "第 2 音節［tion］",
        "rule": "後綴 -tion 在 s 後同化顎化 (R006/R010)",
        "status": "【不適用 (例外轉移)】",
        "reason": "後綴 -tion 接在 s 後受同化不發 /ʃən/ 改發清塞擦音 /tʃən/"
      }
    ]
  },
  {
    "id": 689,
    "word": "quick",
    "pos": "adj./adv.",
    "chinese": "迅速的",
    "syllable": [
      "quick"
    ],
    "ipa": "/kwɪk/",
    "derivations": [
      {
        "syllable": "單音節［quick］",
        "rule": "複合子音 qu (R006) + 閉音節 (R001) + ck (R006)",
        "status": "【適用】",
        "reason": "qu 發 /kw/，ck 封閉音節，單一母音 i 常規發短母音 /kwɪk/"
      }
    ]
  },
  {
    "id": 690,
    "word": "quiet",
    "pos": "adj./n./v.",
    "chinese": "安靜的",
    "syllable": [
      "qui",
      "et"
    ],
    "ipa": "/ˈkwaɪ.ət/",
    "derivations": [
      {
        "syllable": "第 1 音節［qui］",
        "rule": "複合子音 qu (R006) + 開音節 (R002)",
        "status": "【適用】",
        "reason": "qu 發 /kw/，重讀開音節 i 常規發字母本名長雙母音 /ˈkwaɪ/"
      },
      {
        "syllable": "第 2 音節［et］",
        "rule": "非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音 e 弱化發央母音 /ət/"
      }
    ]
  },
  {
    "id": 691,
    "word": "quite",
    "pos": "adv.",
    "chinese": "相當",
    "syllable": [
      "quite"
    ],
    "ipa": "/kwaɪt/",
    "derivations": [
      {
        "syllable": "單音節［quite］",
        "rule": "複合子音 qu (R006) + 魔術 e 規則 (R003)",
        "status": "【適用】",
        "reason": "qu 發 /kw/，i_e 結構字尾 e 靜音促使母音 i 發長雙母音 /kwaɪt/"
      }
    ]
  },
  {
    "id": 692,
    "word": "rabbit",
    "pos": "n.",
    "chinese": "兔子",
    "syllable": [
      "rab",
      "bit"
    ],
    "ipa": "/ˈræb.ɪt/",
    "derivations": [
      {
        "syllable": "第 1 音節［rab］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 b 封閉重讀音節，單一母音 a 常規發短母音 /ˈræb/"
      },
      {
        "syllable": "第 2 音節［bit］",
        "rule": "閉音節規則 (R001)",
        "status": "【適用】",
        "reason": "子音 t 封閉音節，單一母音 i 常規發短母音 /ɪt/"
      }
    ]
  },
  {
    "id": 693,
    "word": "race",
    "pos": "n./v.",
    "chinese": "賽跑",
    "syllable": [
      "race"
    ],
    "ipa": "/reɪs/",
    "derivations": [
      {
        "syllable": "單音節［race］",
        "rule": "魔術 e 規則 (R003) + 軟音 c (R007)",
        "status": "【適用】",
        "reason": "a_e 結構促使 a 發長雙母音 /reɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音發 /reɪs/"
      }
    ]
  },
  {
    "id": 694,
    "word": "radio",
    "pos": "n./v.",
    "chinese": "收音機",
    "syllable": [
      "ra",
      "di",
      "o"
    ],
    "ipa": "/ˈreɪ.di.oʊ/",
    "derivations": [
      {
        "syllable": "第 1 音節［ra］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音 a 結尾無子音封閉，常規發長雙母音 /ˈreɪ/"
      },
      {
        "syllable": "第 2 音節［di］",
        "rule": "非重讀開音節 (R002/R008)",
        "status": "【適用】",
        "reason": "非重讀開音節單一母音 i 常規發短長母音 /di/"
      },
      {
        "syllable": "第 3 音節［o］",
        "rule": "開音節規則 (R002)",
        "status": "【適用】",
        "reason": "詞尾開音節 o 常規發長雙母音 /oʊ/"
      }
    ]
  },
  {
    "id": 695,
    "word": "rain",
    "pos": "n./v.",
    "chinese": "下雨",
    "syllable": [
      "rain"
    ],
    "ipa": "/reɪn/",
    "derivations": [
      {
        "syllable": "單音節［rain］",
        "rule": "雙母音組合 ai (R004)",
        "status": "【適用】",
        "reason": "ai 字母組合常規發長雙母音 /eɪ/，鼻子音 n 封閉發 /reɪn/"
      }
    ]
  },
  {
    "id": 696,
    "word": "rainbow",
    "pos": "n.",
    "chinese": "彩虹",
    "syllable": [
      "rain",
      "bow"
    ],
    "ipa": "/ˈreɪn.boʊ/",
    "derivations": [
      {
        "syllable": "第 1 音節［rain］",
        "rule": "雙母音組合 ai (R004)",
        "status": "【適用】",
        "reason": "ai 字母組合於重音節常規發長雙母音 /ˈreɪn/"
      },
      {
        "syllable": "第 2 音節［bow］",
        "rule": "母音組合 ow (R004)",
        "status": "【適用】",
        "reason": "ow 字母組合於詞尾常規發長雙母音 /boʊ/"
      }
    ]
  },
  {
    "id": 697,
    "word": "rainy",
    "pos": "adj.",
    "chinese": "下雨的",
    "syllable": [
      "rain",
      "y"
    ],
    "ipa": "/ˈreɪ.ni/",
    "derivations": [
      {
        "syllable": "第 1 音節［rain］",
        "rule": "雙母音組合 ai (R004)",
        "status": "【適用】",
        "reason": "ai 字母組合常規發長雙母音 /ˈreɪ/"
      },
      {
        "syllable": "第 2 音節［y］",
        "rule": "字尾 y 半母音 (R002/R008)",
        "status": "【適用】",
        "reason": "字尾 y 處非重讀音節常規發長短交界的長母音 /ni/"
      }
    ]
  },
  {
    "id": 698,
    "word": "raise",
    "pos": "v./n.",
    "chinese": "舉起,養育",
    "syllable": [
      "raise"
    ],
    "ipa": "/reɪz/",
    "derivations": [
      {
        "syllable": "單音節［raise］",
        "rule": "雙母音組合 ai (R004) + s 濁化 (R006)",
        "status": "【適用】",
        "reason": "ai 組合發長雙母音 /reɪ/，s 濁化發 /z/，字尾 e 靜音發 /reɪz/"
      }
    ]
  },
  {
    "id": 699,
    "word": "reach",
    "pos": "v./n.",
    "chinese": "抵達, 伸手及到; 伸展距離",
    "syllable": [
      "reach"
    ],
    "ipa": "/riːtʃ/",
    "derivations": [
      {
        "syllable": "單音節［reach］",
        "rule": "雙母音組合 ea (R004) + 複合子音 ch (R006)",
        "status": "【適用】",
        "reason": "ea 字母組合常規發長母音 /iː/，複合子音 ch 發清塞擦音 /tʃ/，全字發 /riːtʃ/"
      }
    ]
  },
  {
    "id": 700,
    "word": "read",
    "pos": "v.",
    "chinese": "讀",
    "syllable": [
      "read"
    ],
    "ipa": "/riːd/",
    "derivations": [
      {
        "syllable": "單音節［read］",
        "rule": "雙母音組合 ea (R004)",
        "status": "【適用】",
        "reason": "ea 字母組合於現在式常規發長母音 /iː/，子音 d 封閉發 /riːd/ (過去式與過去分詞則轉移發短母音 /rɛd/)"
      }
    ]
  }
];
