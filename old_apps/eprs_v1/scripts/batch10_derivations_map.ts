import { DerivationItem } from '../lib/batch01Data';

export const SPECIAL_BATCH10_WORDS: Record<string, { chinese: string; syllable: string[]; ipa: string; pos?: string; derivations?: DerivationItem[] }> = {
  "901": {
    "syllable": [
      "toi",
      "let"
    ],
    "ipa": "/ˈtɔɪ.lɪt/",
    "chinese": "洗手間, 廁所, 馬桶",
    "pos": "n.",
    "derivations": [
      {
        "syllable": "第 1 音節［toi］",
        "rule": "母音組合 oi (R004)",
        "status": "【適用】",
        "reason": "母音組合 oi 常規發雙母音 /ɔɪ/"
      },
      {
        "syllable": "第 2 音節［let］",
        "rule": "閉音節 (R001) / 非重讀弱化 (R008)",
        "status": "【適用】",
        "reason": "閉音節子音 t 封閉，非重音音節發短母音 /ɪ/"
      }
    ]
  },
  "906": {
    "syllable": [
      "tool"
    ],
    "ipa": "/tuːl/",
    "chinese": "工具, 器具",
    "pos": "n.",
    "derivations": [
      {
        "syllable": "單音節［tool］",
        "rule": "母音組合 oo (R004)",
        "status": "【適用】",
        "reason": "字母組合 oo 常規發長母音 /uː/"
      }
    ]
  },
  "909": {
    "syllable": [
      "top",
      "ic"
    ],
    "ipa": "/ˈtɑː.pɪk/",
    "chinese": "話題, 主題, 題目",
    "pos": "n.",
    "derivations": [
      {
        "syllable": "第 1 音節［top］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "單一母音 o 在重讀閉音節發美式常規短母音 /ɑː/"
      },
      {
        "syllable": "第 2 音節［ic］",
        "rule": "閉音節 (R001) / -ic 字尾 (R008)",
        "status": "【適用】",
        "reason": "非重讀閉音節發短母音 /ɪ/，字尾 c 發硬音 /k/"
      }
    ]
  },
  "941": {
    "syllable": [
      "vis",
      "i",
      "tor"
    ],
    "ipa": "/ˈvɪz.ə.t̬ɚ/",
    "chinese": "訪客, 參觀者",
    "pos": "n.",
    "derivations": [
      {
        "syllable": "第 1 音節［vis］",
        "rule": "閉音節 (R001) + 母音間 s 發 /z/ (R006)",
        "status": "【適用】",
        "reason": "重音閉音節母音 i 發短母音 /ɪ/，子音 s 夾在母音間發濁音 /z/"
      },
      {
        "syllable": "第 2 音節［i］",
        "rule": "非重讀母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重音單音節弱化為輕母音 Schwa /ə/"
      },
      {
        "syllable": "第 3 音節［tor］",
        "rule": "R 控制母音 (R005) + 非重讀 (R008)",
        "status": "【適用】",
        "reason": "字尾 -or 於非重讀音節常規弱化發捲舌音 /ɚ/"
      }
    ]
  },
  "968": {
    "syllable": [
      "while"
    ],
    "ipa": "/waɪl/",
    "chinese": "當...的時候; 一段時間",
    "pos": "conj./n./v.",
    "derivations": [
      {
        "syllable": "單音節［while］",
        "rule": "複合子音 wh- (R006) + 魔術 e (R003)",
        "status": "【適用】",
        "reason": "wh- 發子音 /w/，魔術 e 結構促使主要母音 i 發長母音 /aɪ/，字尾 e 靜音"
      }
    ]
  },
  "973": {
    "syllable": [
      "wide"
    ],
    "ipa": "/waɪd/",
    "chinese": "寬廣的, 寬闊的",
    "pos": "adj./adv.",
    "derivations": [
      {
        "syllable": "單音節［wide］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "魔術 e 結構使單母音 i 發長雙母音 /aɪ/，字尾 e 保持靜音"
      }
    ]
  }
};

export const batch10DerivationsMap: Record<number, DerivationItem[]> = {
  "901": [
    {
      "syllable": "第 1 音節［toi］",
      "rule": "母音組合 oi (R004)",
      "status": "【適用】",
      "reason": "母音組合 oi 常規發雙母音 /ɔɪ/"
    },
    {
      "syllable": "第 2 音節［let］",
      "rule": "閉音節 (R001) / 非重讀弱化 (R008)",
      "status": "【適用】",
      "reason": "閉音節子音 t 封閉，非重音音節發短母音 /ɪ/"
    }
  ],
  "902": [
    {
      "syllable": "第 1 音節［to］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［ma］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［to］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "903": [
    {
      "syllable": "第 1 音節［to］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［mor］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［row］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "904": [
    {
      "syllable": "第 1 音節［to］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［night］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "905": [
    {
      "syllable": "單音節［too］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "906": [
    {
      "syllable": "單音節［tool］",
      "rule": "母音組合 oo (R004)",
      "status": "【適用】",
      "reason": "字母組合 oo 常規發長母音 /uː/"
    }
  ],
  "907": [
    {
      "syllable": "單音節［tooth］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "908": [
    {
      "syllable": "單音節［top］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "909": [
    {
      "syllable": "第 1 音節［top］",
      "rule": "閉音節 (R001)",
      "status": "【適用】",
      "reason": "單一母音 o 在重讀閉音節發美式常規短母音 /ɑː/"
    },
    {
      "syllable": "第 2 音節［ic］",
      "rule": "閉音節 (R001) / -ic 字尾 (R008)",
      "status": "【適用】",
      "reason": "非重讀閉音節發短母音 /ɪ/，字尾 c 發硬音 /k/"
    }
  ],
  "910": [
    {
      "syllable": "第 1 音節［to］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［tal］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "911": [
    {
      "syllable": "單音節［touch］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "912": [
    {
      "syllable": "第 1 音節［tow］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［el］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "913": [
    {
      "syllable": "單音節［town］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "914": [
    {
      "syllable": "單音節［toy］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "915": [
    {
      "syllable": "第 1 音節［traf］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［fic］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "916": [
    {
      "syllable": "單音節［train］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "917": [
    {
      "syllable": "單音節［treat］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "918": [
    {
      "syllable": "單音節［tree］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "919": [
    {
      "syllable": "單音節［trip］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "920": [
    {
      "syllable": "第 1 音節［trou］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［ble］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "921": [
    {
      "syllable": "單音節［truck］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "922": [
    {
      "syllable": "單音節［try］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "923": [
    {
      "syllable": "第 1 音節［T］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［shirt］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "924": [
    {
      "syllable": "單音節［turn］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "925": [
    {
      "syllable": "單音節［twice］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "926": [
    {
      "syllable": "單音節［type］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "927": [
    {
      "syllable": "第 1 音節［un］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［cle］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "928": [
    {
      "syllable": "第 1 音節［un］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［der］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "929": [
    {
      "syllable": "第 1 音節［un］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［der］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［stand］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "930": [
    {
      "syllable": "第 1 音節［u］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［ni］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［form］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "931": [
    {
      "syllable": "第 1 音節［un］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［til］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "932": [
    {
      "syllable": "單音節［up］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "933": [
    {
      "syllable": "單音節［use］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "934": [
    {
      "syllable": "第 1 音節［use］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［ful］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "935": [
    {
      "syllable": "第 1 音節［u］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［su］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［al］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 4 音節［ly］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "936": [
    {
      "syllable": "第 1 音節［veg］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［e］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［ta］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 4 音節［ble］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "937": [
    {
      "syllable": "第 1 音節［ver］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［y］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "938": [
    {
      "syllable": "第 1 音節［vid］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［e］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［o］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "939": [
    {
      "syllable": "第 1 音節［vi］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［o］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［lin］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "940": [
    {
      "syllable": "第 1 音節［vis］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［it］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "941": [
    {
      "syllable": "第 1 音節［vis］",
      "rule": "閉音節 (R001) + 母音間 s 發 /z/ (R006)",
      "status": "【適用】",
      "reason": "重音閉音節母音 i 發短母音 /ɪ/，子音 s 夾在母音間發濁音 /z/"
    },
    {
      "syllable": "第 2 音節［i］",
      "rule": "非重讀母音弱化 (R008)",
      "status": "【適用】",
      "reason": "非重音單音節弱化為輕母音 Schwa /ə/"
    },
    {
      "syllable": "第 3 音節［tor］",
      "rule": "R 控制母音 (R005) + 非重讀 (R008)",
      "status": "【適用】",
      "reason": "字尾 -or 於非重讀音節常規弱化發捲舌音 /ɚ/"
    }
  ],
  "942": [
    {
      "syllable": "單音節［voice］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "943": [
    {
      "syllable": "單音節［wait］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "944": [
    {
      "syllable": "單音節［wake］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "945": [
    {
      "syllable": "單音節［walk］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "946": [
    {
      "syllable": "單音節［wall］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "947": [
    {
      "syllable": "單音節［want］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "948": [
    {
      "syllable": "單音節［warm］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "949": [
    {
      "syllable": "單音節［watch］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "950": [
    {
      "syllable": "第 1 音節［wa］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［ter］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "951": [
    {
      "syllable": "單音節［wave］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "952": [
    {
      "syllable": "單音節［way］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "953": [
    {
      "syllable": "單音節［we］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "954": [
    {
      "syllable": "單音節［weak］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "955": [
    {
      "syllable": "單音節［wear］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "956": [
    {
      "syllable": "第 1 音節［weath］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "957": [
    {
      "syllable": "單音節［week］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "958": [
    {
      "syllable": "第 1 音節［week］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［end］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "959": [
    {
      "syllable": "第 1 音節［wel］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［come］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "960": [
    {
      "syllable": "單音節［well］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "961": [
    {
      "syllable": "單音節［west］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "962": [
    {
      "syllable": "單音節［wet］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "963": [
    {
      "syllable": "單音節［what］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "964": [
    {
      "syllable": "單音節［when］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "965": [
    {
      "syllable": "單音節［where］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "966": [
    {
      "syllable": "第 1 音節［wheth］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "967": [
    {
      "syllable": "單音節［which］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "968": [
    {
      "syllable": "單音節［while］",
      "rule": "複合子音 wh- (R006) + 魔術 e (R003)",
      "status": "【適用】",
      "reason": "wh- 發子音 /w/，魔術 e 結構促使主要母音 i 發長母音 /aɪ/，字尾 e 靜音"
    }
  ],
  "969": [
    {
      "syllable": "單音節［white］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "970": [
    {
      "syllable": "單音節［who］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "971": [
    {
      "syllable": "單音節［whose］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "972": [
    {
      "syllable": "單音節［why］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "973": [
    {
      "syllable": "單音節［wide］",
      "rule": "魔術 e (R003)",
      "status": "【適用】",
      "reason": "魔術 e 結構使單母音 i 發長雙母音 /aɪ/，字尾 e 保持靜音"
    }
  ],
  "974": [
    {
      "syllable": "單音節［wife］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "975": [
    {
      "syllable": "單音節［will］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "976": [
    {
      "syllable": "單音節［win］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "977": [
    {
      "syllable": "單音節［wind］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "978": [
    {
      "syllable": "第 1 音節［win］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［dow］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "979": [
    {
      "syllable": "單音節［wise］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "980": [
    {
      "syllable": "單音節［wish］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "981": [
    {
      "syllable": "單音節［with］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "982": [
    {
      "syllable": "第 1 音節［with］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［out］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "983": [
    {
      "syllable": "第 1 音節［wom］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［an］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "984": [
    {
      "syllable": "第 1 音節［won］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［der］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［ful］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "985": [
    {
      "syllable": "單音節［word］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "986": [
    {
      "syllable": "單音節［work］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "987": [
    {
      "syllable": "第 1 音節［work］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "988": [
    {
      "syllable": "單音節［world］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "989": [
    {
      "syllable": "第 1 音節［wor］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［ry］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "990": [
    {
      "syllable": "單音節［write］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "991": [
    {
      "syllable": "第 1 音節［writ］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "992": [
    {
      "syllable": "單音節［wrong］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "993": [
    {
      "syllable": "單音節［yard］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "994": [
    {
      "syllable": "單音節［year］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "995": [
    {
      "syllable": "第 1 音節［yel］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［low］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "996": [
    {
      "syllable": "單音節［yes］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "997": [
    {
      "syllable": "第 1 音節［yes］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 2 音節［ter］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    },
    {
      "syllable": "第 3 音節［day］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "998": [
    {
      "syllable": "單音節［yet］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "999": [
    {
      "syllable": "單音節［you］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ],
  "1000": [
    {
      "syllable": "單音節［young］",
      "rule": "自然發音常規規則",
      "status": "【適用】",
      "reason": "依自然發音結構常規推導發音"
    }
  ]
};
