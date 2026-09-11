window.EPRS_CURRENT_BATCH = {
  batchNum: 1,
  level: "第一級",
  range: "0001~0100",
  title: "高中第一級 Batch 01 (0001~0100)",
  version: "v1.5.01",
  words: [
  {
    "id": 1,
    "word": "a/an",
    "pos": "art.",
    "chinese": "一(個)",
    "syllable": [
      "a",
      "an"
    ],
    "syllableText": "2 音節 [a · an]",
    "syllableDetail": {
      "header": "2 音節 [a · an]",
      "vowelCore": "1. 母音核心：[a(1)], [a(2)]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ə/ (/ən/)",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [a(2)]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · an]",
      "patternStep": "[a] 開音節型態，[an] 閉音節型態",
      "ruleStep": [
        "開音節 (R002)：［a］母音結尾發長母音",
        "非重音母音弱化 (R008)：［an］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［a］：開音節規則 (R002) → 句中弱化 (R008)（【適用】）；第 2 音節［an］：閉音節規則 (R001) → 句中弱化 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ə/ (/ən/)",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "開音節規則 (R002) → 句中弱化 (R008)",
          "status": "【適用】",
          "reason": "單一母音字母 a 於句中非重讀時弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［an］",
          "rule": "閉音節規則 (R001) → 句中弱化 (R008)",
          "status": "【適用】",
          "reason": "子音封閉音節，句中非重讀時母音 a 弱化發 /ən/"
        }
      ]
    }
  },
  {
    "id": 2,
    "word": "ability",
    "pos": "n.",
    "chinese": "能力,專長",
    "syllable": [
      "a",
      "bil",
      "i",
      "ty"
    ],
    "syllableText": "4 音節 [a · bil · i · ty]",
    "syllableDetail": {
      "header": "4 音節 [a · bil · i · ty]",
      "vowelCore": "1. 母音核心：[a], [i(3)], [i(5)], [y]（共 4 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈbɪl.ə.t̬i/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [i(3)], [i(5)], [y]（共 4 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：4 音節 [a · bil · i · ty]",
      "patternStep": "[a] 開音節型態，[bil] 閉音節型態，[i] 開音節型態，[ty] 開音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［bil］子音封閉發短母音",
        "非重音母音弱化 (R008)：［i］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［ty］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［a］：前綴非重讀弱化 (R012)（【適用】）；第 2 音節［bil］：閉音節規則 (R001)（【適用】）；第 3 音節［i］：非重讀弱化規則 (R008)（【適用】）；第 4 音節［ty］：字尾 y 弱化規則 (R008/R009)（【適用】）。音節合成推導 ➔ 標準音標 /əˈbɪl.ə.t̬i/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴非重讀弱化 (R012)",
          "status": "【適用】",
          "reason": "非重讀起始開音節，字母 a 弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［bil］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 l 封閉且為主要重音節，短母音 i 發 /ˈbɪl/"
        },
        {
          "syllable": "第 3 音節［i］",
          "rule": "非重讀弱化規則 (R008)",
          "status": "【適用】",
          "reason": "非重讀中間開音節，母音 i 弱化發 /ə/ 或 /ɪ/"
        },
        {
          "syllable": "第 4 音節［ty］",
          "rule": "字尾 y 弱化規則 (R008/R009)",
          "status": "【適用】",
          "reason": "-ty 名詞後綴非重讀，字母 y 常規發長母音轉弱之 /ti/ (美音閃音化為 [t̬i])"
        }
      ]
    }
  },
  {
    "id": 3,
    "word": "able",
    "pos": "adj.",
    "chinese": "能夠…的,有能力的",
    "syllable": [
      "a",
      "ble"
    ],
    "syllableText": "2 音節 [a · ble]",
    "syllableDetail": {
      "header": "2 音節 [a · ble]",
      "vowelCore": "1. 母音核心：[a], [e]（共 2 個）",
      "structureRule": "3. 結構切分：字尾成音節獨立劃歸",
      "indivisibleRule": "2. 不可拆組合：[able] 後綴字尾組合，[bl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈeɪ.bəl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [e]（共 2 個）\n2. 不可拆組合：[able] 後綴字尾組合，[bl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：字尾成音節獨立劃歸\n4. 切分結果：2 音節 [a · ble]",
      "patternStep": "[a] 開音節型態，[ble] 成音節字尾型態",
      "ruleStep": [
        "開音節 (R002)：［a］母音結尾發長母音",
        "成音節字尾 (R009)：［ble］成音節發 /l̩/ 或 /əl/"
      ],
      "ipaStep": "第 1 音節［a］：開音節規則 (R002)（【適用】）；第 2 音節［ble］：成音節字尾規則 (R009)（【適用】）。音節合成推導 ➔ 標準音標 /ˈeɪ.bəl/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "開音節規則 (R002)",
          "status": "【適用】",
          "reason": "單一母音結尾且為重音節，字母 a 常規發字母長母音 /ˈeɪ/"
        },
        {
          "syllable": "第 2 音節［ble］",
          "rule": "成音節字尾規則 (R009)",
          "status": "【適用】",
          "reason": "子音 + le 於字尾構成成音節，不發音 e 弱化發 /bəl/"
        }
      ]
    }
  },
  {
    "id": 4,
    "word": "about",
    "pos": "prep./adv.",
    "chinese": "關於,大約",
    "syllable": [
      "a",
      "bout"
    ],
    "syllableText": "2 音節 [a · bout]",
    "syllableDetail": {
      "header": "2 音節 [a · bout]",
      "vowelCore": "1. 母音核心：[a], [ou]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈbaʊt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [ou]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · bout]",
      "patternStep": "[a] 開音節型態，[bout] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［bout］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［bout］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /əˈbaʊt/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴，母音弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［bout］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ou 雙母音字母組合於重音節常規發雙母音 /ˈbaʊt/"
        }
      ]
    }
  },
  {
    "id": 5,
    "word": "above",
    "pos": "prep./adv./adj.",
    "chinese": "在…上方,高於",
    "syllable": [
      "a",
      "bove"
    ],
    "syllableText": "2 音節 [a · bove]",
    "syllableDetail": {
      "header": "2 音節 [a · bove]",
      "vowelCore": "1. 母音核心：[a], [o], [e]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈbʌv/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "魔術 e 規則 (R003)",
    "exceptionReason": "字尾雖符合 v_e 結構，但受歷史演變影響母音不發長音 /oʊ/，特例發短母音 /ˈbʌv/ (R010)",
    "steps": {
      "syllableStep": "1. 母音核心：[a], [o], [e]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · bove]",
      "patternStep": "[a] 開音節型態，[bove] 魔術 e 型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "魔術 e (R003)：［bove］字尾 e 靜音使主要母音發長音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［bove］：魔術 e 規則 (R003)（【不適用 (例外轉移)】）。音節合成推導 ➔ 標準音標 /əˈbʌv/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴，母音弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［bove］",
          "rule": "魔術 e 規則 (R003)",
          "status": "【不適用 (例外轉移)】",
          "reason": "字尾雖符合 v_e 結構，但受歷史演變影響母音不發長音 /oʊ/，特例發短母音 /ˈbʌv/ (R010)"
        }
      ]
    }
  },
  {
    "id": 6,
    "word": "abroad",
    "pos": "adv.",
    "chinese": "在國外,出國",
    "syllable": [
      "a",
      "broad"
    ],
    "syllableText": "2 音節 [a · broad]",
    "syllableDetail": {
      "header": "2 音節 [a · broad]",
      "vowelCore": "1. 母音核心：[a(1)], [oa]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：[br] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/əˈbrɔːd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "母音組合規則 (R004)",
    "exceptionReason": "oa 組合常規發長音 /oʊ/ (如 road)，此處特例發長母音 /ˈbrɔːd/ (R010)",
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [oa]（共 2 個）\n2. 不可拆組合：[br] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · broad]",
      "patternStep": "[a] 開音節型態，[broad] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［broad］子音封閉發短母音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［broad］：母音組合規則 (R004)（【不適用 (例外轉移)】）。音節合成推導 ➔ 標準音標 /əˈbrɔːd/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴，母音弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［broad］",
          "rule": "母音組合規則 (R004)",
          "status": "【不適用 (例外轉移)】",
          "reason": "oa 組合常規發長音 /oʊ/ (如 road)，此處特例發長母音 /ˈbrɔːd/ (R010)"
        }
      ]
    }
  },
  {
    "id": 7,
    "word": "across",
    "pos": "prep./adv.",
    "chinese": "橫越,在…對面",
    "syllable": [
      "a",
      "cross"
    ],
    "syllableText": "2 音節 [a · cross]",
    "syllableDetail": {
      "header": "2 音節 [a · cross]",
      "vowelCore": "1. 母音核心：[a], [o]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：[cr] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/əˈkrɔːs/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [o]（共 2 個）\n2. 不可拆組合：[cr] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · cross]",
      "patternStep": "[a] 開音節型態，[cross] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［cross］子音封閉發短母音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［cross］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /əˈkrɔːs/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴，母音弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［cross］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "雙子音 ss 封閉且為重音節，母音 o 常規發短母音 /ˈkrɔːs/"
        }
      ]
    }
  },
  {
    "id": 8,
    "word": "act",
    "pos": "n./v.",
    "chinese": "行動,扮演,法案",
    "syllable": [
      "act"
    ],
    "syllableText": "單音節字 [act]",
    "syllableDetail": {
      "header": "單音節字 [act]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ækt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [act]",
      "patternStep": "[act] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［act］子音封閉發短母音"
      ],
      "ipaStep": "單音節［act］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /ækt/",
      "derivations": [
        {
          "syllable": "單音節［act］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "複合子音 -ct 封閉音節，首位母音 a 常規發短母音 /æ/"
        }
      ]
    }
  },
  {
    "id": 9,
    "word": "action",
    "pos": "n.",
    "chinese": "動作,行動",
    "syllable": [
      "ac",
      "tion"
    ],
    "syllableText": "2 音節 [ac · tion]",
    "syllableDetail": {
      "header": "2 音節 [ac · tion]",
      "vowelCore": "1. 母音核心：[a], [i], [o]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[tion] 後綴字尾組合 保持完整"
    },
    "ipa": "/ˈæk.ʃən/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [i], [o]（共 2 個）\n2. 不可拆組合：[tion] 後綴字尾組合 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [ac · tion]",
      "patternStep": "[ac] 閉音節型態，[tion] 母音組合型態",
      "ruleStep": [
        "閉音節 (R001)：［ac］子音封閉發短母音",
        "非重音母音弱化 (R008)：［tion］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［ac］：閉音節規則 (R001)（【適用】）；第 2 音節［tion］：特殊名詞字尾規則 (R009/R011)（【適用】）。音節合成推導 ➔ 標準音標 /ˈæk.ʃən/",
      "derivations": [
        {
          "syllable": "第 1 音節［ac］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 c 封閉且為重音節，字母 a 常規發短母音 /ˈæk/"
        },
        {
          "syllable": "第 2 音節［tion］",
          "rule": "特殊名詞字尾規則 (R009/R011)",
          "status": "【適用】",
          "reason": "-tion 名詞字尾非重讀，顎音化發為 /ʃən/"
        }
      ]
    }
  },
  {
    "id": 10,
    "word": "actor/actress",
    "pos": "n.",
    "chinese": "男演員/女演員",
    "syllable": [
      "ac",
      "tor",
      "ac",
      "tress"
    ],
    "syllableText": "4 音節 [ac · tor · ac · tress]",
    "syllableDetail": {
      "header": "4 音節 [ac · tor · ac · tress]",
      "vowelCore": "1. 母音核心：[a(1)], [or], [a(6)], [e]（共 4 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[tr] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈæk.tɚ/ /ˈæk.trəs/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [or], [a(6)], [e]（共 4 個）\n2. 不可拆組合：[tr] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：4 音節 [ac · tor · ac · tress]",
      "patternStep": "[ac] 閉音節型態，[tor] R 控制母音型態，[ac] 閉音節型態，[tress] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［ac］子音封閉發短母音",
        "R 控制母音弱化 (R005/R008)：［tor］非重音節弱化發輕捲舌母音 /ɚ/",
        "非重音母音弱化 (R008)：［ac］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［tress］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［ac］：閉音節規則 (R001)（【適用】）；第 2 音節［tor］：R 控制母音規則 (R005)（【適用】）；第 3 音節［tress］：後綴弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈæk.tɚ/ /ˈæk.trəs/",
      "derivations": [
        {
          "syllable": "第 1 音節［ac］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 c 封閉且為重音節，字母 a 常規發短母音 /ˈæk/"
        },
        {
          "syllable": "第 2 音節［tor］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "-or 非重讀職業字尾弱化發捲舌輕母音 /tɚ/"
        },
        {
          "syllable": "第 3 音節［tress］",
          "rule": "後綴弱化規則 (R008)",
          "status": "【適用】",
          "reason": "-ess 女性名詞後綴非重讀，弱化發 /trəs/"
        }
      ]
    }
  },
  {
    "id": 11,
    "word": "add",
    "pos": "v.",
    "chinese": "添加,增加",
    "syllable": [
      "add"
    ],
    "syllableText": "單音節字 [add]",
    "syllableDetail": {
      "header": "單音節字 [add]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/æd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [add]",
      "patternStep": "[add] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［add］子音封閉發短母音"
      ],
      "ipaStep": "單音節［add］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /æd/",
      "derivations": [
        {
          "syllable": "單音節［add］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "雙子音 dd 封閉單音節，字母 a 常規發短母音 /æ/"
        }
      ]
    }
  },
  {
    "id": 12,
    "word": "afraid",
    "pos": "adj.",
    "chinese": "害怕的,擔心的",
    "syllable": [
      "a",
      "fraid"
    ],
    "syllableText": "2 音節 [a · fraid]",
    "syllableDetail": {
      "header": "2 音節 [a · fraid]",
      "vowelCore": "1. 母音核心：[a(1)], [ai]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：[fr] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/əˈfreɪd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [ai]（共 2 個）\n2. 不可拆組合：[fr] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · fraid]",
      "patternStep": "[a] 開音節型態，[fraid] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［fraid］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［fraid］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /əˈfreɪd/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴，字母 a 弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［fraid］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ai 雙母音字母組合於重音節常規發字母長母音 /ˈfreɪd/"
        }
      ]
    }
  },
  {
    "id": 13,
    "word": "after",
    "pos": "prep./conj./adv.",
    "chinese": "在…之後",
    "syllable": [
      "af",
      "ter"
    ],
    "syllableText": "2 音節 [af · ter]",
    "syllableDetail": {
      "header": "2 音節 [af · ter]",
      "vowelCore": "1. 母音核心：[a], [er]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈæf.tɚ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [er]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [af · ter]",
      "patternStep": "[af] 閉音節型態，[ter] R 控制母音型態",
      "ruleStep": [
        "閉音節 (R001)：［af］子音封閉發短母音",
        "R 控制母音弱化 (R005/R008)：［ter］非重音節弱化發輕捲舌母音 /ɚ/"
      ],
      "ipaStep": "第 1 音節［af］：閉音節規則 (R001)（【適用】）；第 2 音節［ter］：R 控制母音規則 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /ˈæf.tɚ/",
      "derivations": [
        {
          "syllable": "第 1 音節［af］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 f 封閉且為重音節，字母 a 常規發短母音 /ˈæf/"
        },
        {
          "syllable": "第 2 音節［ter］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "er 組合於非重讀音節弱化發捲舌輕母音 /tɚ/"
        }
      ]
    }
  },
  {
    "id": 14,
    "word": "afternoon",
    "pos": "n.",
    "chinese": "下午,午後",
    "syllable": [
      "af",
      "ter",
      "noon"
    ],
    "syllableText": "3 音節 [af · ter · noon]",
    "syllableDetail": {
      "header": "3 音節 [af · ter · noon]",
      "vowelCore": "1. 母音核心：[a], [er], [oo]（共 3 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˌæf.tɚˈnuːn/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [er], [oo]（共 3 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：3 音節 [af · ter · noon]",
      "patternStep": "[af] 閉音節型態，[ter] R 控制母音型態，[noon] 母音組合型態",
      "ruleStep": [
        "非重音母音弱化 (R008)：［af］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "R 控制母音弱化 (R005/R008)：［ter］非重音節弱化發輕捲舌母音 /ɚ/",
        "母音組合 (R004)：［noon］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［af］：次重讀閉音節 (R001)（【適用】）；第 2 音節［ter］：R 控制母音規則 (R005)（【適用】）；第 3 音節［noon］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /ˌæf.tɚˈnuːn/",
      "derivations": [
        {
          "syllable": "第 1 音節［af］",
          "rule": "次重讀閉音節 (R001)",
          "status": "【適用】",
          "reason": "複合詞次重讀音節，子音 f 封閉，字母 a 發 /ˌæf/"
        },
        {
          "syllable": "第 2 音節［ter］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "er 組合非重讀弱化發 /tɚ/"
        },
        {
          "syllable": "第 3 音節［noon］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "oo 組合於重音節常規發長母音 /ˈnuːn/"
        }
      ]
    }
  },
  {
    "id": 15,
    "word": "again",
    "pos": "adv.",
    "chinese": "再一次,又",
    "syllable": [
      "a",
      "gain"
    ],
    "syllableText": "2 音節 [a · gain]",
    "syllableDetail": {
      "header": "2 音節 [a · gain]",
      "vowelCore": "1. 母音核心：[a(1)], [ai]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈɡɛn/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "母音組合規則 (R004)",
    "exceptionReason": "ai 組合常規發長音 /eɪ/，此處特例發短母音 /ˈɡɛn/ (R010)",
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [ai]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · gain]",
      "patternStep": "[a] 開音節型態，[gain] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［gain］子音封閉發短母音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［gain］：母音組合規則 (R004)（【不適用 (例外轉移)】）。音節合成推導 ➔ 標準音標 /əˈɡɛn/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴，字母 a 弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［gain］",
          "rule": "母音組合規則 (R004)",
          "status": "【不適用 (例外轉移)】",
          "reason": "ai 組合常規發長音 /eɪ/，此處特例發短母音 /ˈɡɛn/ (R010)"
        }
      ]
    }
  },
  {
    "id": 16,
    "word": "age",
    "pos": "n./v.",
    "chinese": "年齡,老化",
    "syllable": [
      "age"
    ],
    "syllableText": "單音節字 [age]",
    "syllableDetail": {
      "header": "單音節字 [age]",
      "vowelCore": "1. 母音核心：[a], [e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/eɪdʒ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [e]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [age]",
      "patternStep": "[age] 魔術 e 型態",
      "ruleStep": [
        "閉音節 (R001)：［age］子音封閉發短母音",
        "軟音 g (R007)：［g］在 e, i, y 前發軟音 /dʒ/"
      ],
      "ipaStep": "單音節［age］：魔術 e 規則 (R003)（【適用】）。音節合成推導 ➔ 標準音標 /eɪdʒ/",
      "derivations": [
        {
          "syllable": "單音節［age］",
          "rule": "魔術 e 規則 (R003)",
          "status": "【適用】",
          "reason": "字尾不發音 e 促使前母音 a 發字母長音 /eɪ/，且 g 軟音化發 /dʒ/"
        }
      ]
    }
  },
  {
    "id": 17,
    "word": "ago",
    "pos": "adv.",
    "chinese": "以前",
    "syllable": [
      "a",
      "go"
    ],
    "syllableText": "2 音節 [a · go]",
    "syllableDetail": {
      "header": "2 音節 [a · go]",
      "vowelCore": "1. 母音核心：[a], [o]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈɡoʊ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [o]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · go]",
      "patternStep": "[a] 開音節型態，[go] 開音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "開音節 (R002)：［go］母音結尾發長母音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［go］：開音節規則 (R002)（【適用】）。音節合成推導 ➔ 標準音標 /əˈɡoʊ/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 開音節弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［go］",
          "rule": "開音節規則 (R002)",
          "status": "【適用】",
          "reason": "單一母音 o 結尾且為重音節，常規發字母長母音 /ˈɡoʊ/"
        }
      ]
    }
  },
  {
    "id": 18,
    "word": "agree(ment)",
    "pos": "v./(n.)",
    "chinese": "同意,協定",
    "syllable": [
      "a",
      "gree",
      "ment"
    ],
    "syllableText": "3 音節 [a · gree · ment]",
    "syllableDetail": {
      "header": "3 音節 [a · gree · ment]",
      "vowelCore": "1. 母音核心：[a], [ee], [e(7)]（共 3 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：[ment] 後綴字尾組合，[gr] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/əˈɡriː/ (/əˈɡriː.mənt/)",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [ee], [e(7)]（共 3 個）\n2. 不可拆組合：[ment] 後綴字尾組合，[gr] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：3 音節 [a · gree · ment]",
      "patternStep": "[a] 開音節型態，[gree] 母音組合型態，[ment] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［gree］發固定長母音或雙母音",
        "非重音母音弱化 (R008)：［ment］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［gree］：母音組合規則 (R004)（【適用】）；第 3 音節［ment］：後綴弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /əˈɡriː/ (/əˈɡriː.mənt/)",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴，字母 a 弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［gree］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ee 雙母音組合於重音節常規發長母音 /ˈɡriː/"
        },
        {
          "syllable": "第 3 音節［ment］",
          "rule": "後綴弱化規則 (R008)",
          "status": "【適用】",
          "reason": "-ment 後綴非重讀，母音 e 弱化發 /mənt/"
        }
      ]
    }
  },
  {
    "id": 19,
    "word": "air",
    "pos": "n.",
    "chinese": "空氣,空中",
    "syllable": [
      "air"
    ],
    "syllableText": "單音節字 [air]",
    "syllableDetail": {
      "header": "單音節字 [air]",
      "vowelCore": "1. 母音核心：[ai]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ɛr/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ai]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [air]",
      "patternStep": "[air] 母音組合型態",
      "ruleStep": [
        "R 控制母音 (R005)：［air］母音接 r 形成捲舌音"
      ],
      "ipaStep": "單音節［air］：R 控制母音/特殊組合 (R005/R016)（【適用】）。音節合成推導 ➔ 標準音標 /ɛr/",
      "derivations": [
        {
          "syllable": "單音節［air］",
          "rule": "R 控制母音/特殊組合 (R005/R016)",
          "status": "【適用】",
          "reason": "air 特殊拼字組合常規發 /ɛr/"
        }
      ]
    }
  },
  {
    "id": 20,
    "word": "airplane/plane",
    "pos": "n.",
    "chinese": "飛機",
    "syllable": [
      "air",
      "plane"
    ],
    "syllableText": "2 音節 [air · plane]",
    "syllableDetail": {
      "header": "2 音節 [air · plane]",
      "vowelCore": "1. 母音核心：[ai], [a(6)], [e(8)]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[pl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈɛr.pleɪn/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ai], [a(6)], [e(8)]（共 2 個）\n2. 不可拆組合：[pl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [air · plane]",
      "patternStep": "[air] 母音組合型態，[plane] 魔術 e 型態",
      "ruleStep": [
        "R 控制母音 (R005)：［air］母音接 r 形成捲舌音",
        "非重音母音弱化 (R008)：［plane］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［air］：R 控制母音組合 (R005)（【適用】）；第 2 音節［plane］：魔術 e 規則 (R003)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɛr.pleɪn/",
      "derivations": [
        {
          "syllable": "第 1 音節［air］",
          "rule": "R 控制母音組合 (R005)",
          "status": "【適用】",
          "reason": "air 組合於主重音節常規發 /ˈɛr/"
        },
        {
          "syllable": "第 2 音節［plane］",
          "rule": "魔術 e 規則 (R003)",
          "status": "【適用】",
          "reason": "a_e 結構促使母音 a 發字母長音 /pleɪn/"
        }
      ]
    }
  },
  {
    "id": 21,
    "word": "airport",
    "pos": "n.",
    "chinese": "機場,航空站",
    "syllable": [
      "air",
      "port"
    ],
    "syllableText": "2 音節 [air · port]",
    "syllableDetail": {
      "header": "2 音節 [air · port]",
      "vowelCore": "1. 母音核心：[ai], [or]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈɛr.pɔːrt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ai], [or]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [air · port]",
      "patternStep": "[air] 母音組合型態，[port] R 控制母音型態",
      "ruleStep": [
        "R 控制母音 (R005)：［air］母音接 r 形成捲舌音",
        "非重音母音弱化 (R008)：［port］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［air］：特殊組合規則 (R016)（【適用】）；第 2 音節［port］：R 控制母音規則 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɛr.pɔːrt/",
      "derivations": [
        {
          "syllable": "第 1 音節［air］",
          "rule": "特殊組合規則 (R016)",
          "status": "【適用】",
          "reason": "air 組合於首音節發主要重音 /ˈɛr/"
        },
        {
          "syllable": "第 2 音節［port］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "or 組合於次重讀音節常規發 /pɔːrt/"
        }
      ]
    }
  },
  {
    "id": 22,
    "word": "all",
    "pos": "adj./adv./pron./n.",
    "chinese": "全部的,所有",
    "syllable": [
      "all"
    ],
    "syllableText": "單音節字 [all]",
    "syllableDetail": {
      "header": "單音節字 [all]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ɔːl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [all]",
      "patternStep": "[all] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［all］子音封閉發短母音"
      ],
      "ipaStep": "單音節［all］：特殊組合規則 (R006/R010)（【適用】）。音節合成推導 ➔ 標準音標 /ɔːl/",
      "derivations": [
        {
          "syllable": "單音節［all］",
          "rule": "特殊組合規則 (R006/R010)",
          "status": "【適用】",
          "reason": "all 特殊子音組合，字母 a 受雙子音 ll 牽引舌位後縮發長母音 /ɔːl/"
        }
      ]
    }
  },
  {
    "id": 23,
    "word": "allow",
    "pos": "v.",
    "chinese": "允許,准許",
    "syllable": [
      "al",
      "low"
    ],
    "syllableText": "2 音節 [al · low]",
    "syllableDetail": {
      "header": "2 音節 [al · low]",
      "vowelCore": "1. 母音核心：[a], [ow]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈlaʊ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [ow]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [al · low]",
      "patternStep": "[al] 閉音節型態，[low] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［al］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［low］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［al］：前綴非重讀弱化 (R012)（【適用】）；第 2 音節［low］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /əˈlaʊ/",
      "derivations": [
        {
          "syllable": "第 1 音節［al］",
          "rule": "前綴非重讀弱化 (R012)",
          "status": "【適用】",
          "reason": "非重讀前綴音節弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［low］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ow 組合於字尾重音節常規發雙母音 /ˈlaʊ/"
        }
      ]
    }
  },
  {
    "id": 24,
    "word": "almost",
    "pos": "adv.",
    "chinese": "幾乎,差不多",
    "syllable": [
      "al",
      "most"
    ],
    "syllableText": "2 音節 [al · most]",
    "syllableDetail": {
      "header": "2 音節 [al · most]",
      "vowelCore": "1. 母音核心：[a], [o]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[st] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈɔːl.moʊst/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [o]（共 2 個）\n2. 不可拆組合：[st] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [al · most]",
      "patternStep": "[al] 閉音節型態，[most] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［al］子音封閉發短母音",
        "非重音母音弱化 (R008)：［most］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［al］：特殊組合規則 (R006)（【適用】）；第 2 音節［most］：特殊閉音節/母音長音 (R010)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɔːl.moʊst/",
      "derivations": [
        {
          "syllable": "第 1 音節［al］",
          "rule": "特殊組合規則 (R006)",
          "status": "【適用】",
          "reason": "al- 前綴於重音節常規發 /ˈɔːl/"
        },
        {
          "syllable": "第 2 音節［most］",
          "rule": "特殊閉音節/母音長音 (R010)",
          "status": "【適用】",
          "reason": "-ost 組合中母音 o 常規受後方輔音群牽引發長雙母音 /moʊst/"
        }
      ]
    }
  },
  {
    "id": 25,
    "word": "along",
    "pos": "prep./adv.",
    "chinese": "沿著,順著",
    "syllable": [
      "a",
      "long"
    ],
    "syllableText": "2 音節 [a · long]",
    "syllableDetail": {
      "header": "2 音節 [a · long]",
      "vowelCore": "1. 母音核心：[a], [o]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：[ng] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/əˈlɑːŋ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [o]（共 2 個）\n2. 不可拆組合：[ng] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · long]",
      "patternStep": "[a] 開音節型態，[long] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［long］子音封閉發短母音",
        "複合子音 (R006)：［ng］保持完整發單一子音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［long］：鼻音子音組合 (R006)（【適用】）。音節合成推導 ➔ 標準音標 /əˈlɑːŋ/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［long］",
          "rule": "鼻音子音組合 (R006)",
          "status": "【適用】",
          "reason": "ng 鼻音組合封閉且為重音節，母音 o 發長短母音 /ˈlɑːŋ/"
        }
      ]
    }
  },
  {
    "id": 26,
    "word": "already",
    "pos": "adv.",
    "chinese": "已經",
    "syllable": [
      "al",
      "read",
      "y"
    ],
    "syllableText": "3 音節 [al · read · y]",
    "syllableDetail": {
      "header": "3 音節 [al · read · y]",
      "vowelCore": "1. 母音核心：[a(1)], [ea], [y]（共 3 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ɔːlˈrɛd.i/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "母音組合規則 (R004)",
    "exceptionReason": "ea 常規發長母音 /iː/，此處特例發短母音 /ˈrɛd/ (R010)",
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [ea], [y]（共 3 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：3 音節 [al · read · y]",
      "patternStep": "[al] 閉音節型態，[read] 母音組合型態，[y] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［al］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［read］子音封閉發短母音",
        "非重音母音弱化 (R008)：［y］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［al］：特殊組合規則 (R006)（【適用】）；第 2 音節［read］：母音組合規則 (R004)（【不適用 (例外轉移)】）；第 3 音節［y］：字尾 y 弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ɔːlˈrɛd.i/",
      "derivations": [
        {
          "syllable": "第 1 音節［al］",
          "rule": "特殊組合規則 (R006)",
          "status": "【適用】",
          "reason": "al 組合於次重讀音節發 /ɔːl/"
        },
        {
          "syllable": "第 2 音節［read］",
          "rule": "母音組合規則 (R004)",
          "status": "【不適用 (例外轉移)】",
          "reason": "ea 常規發長母音 /iː/，此處特例發短母音 /ˈrɛd/ (R010)"
        },
        {
          "syllable": "第 3 音節［y］",
          "rule": "字尾 y 弱化規則 (R008)",
          "status": "【適用】",
          "reason": "字尾非重讀 y 發弱化長母音 /i/"
        }
      ]
    }
  },
  {
    "id": 27,
    "word": "also",
    "pos": "adv.",
    "chinese": "也,同樣地",
    "syllable": [
      "al",
      "so"
    ],
    "syllableText": "2 音節 [al · so]",
    "syllableDetail": {
      "header": "2 音節 [al · so]",
      "vowelCore": "1. 母音核心：[a], [o]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈɔːl.soʊ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [o]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [al · so]",
      "patternStep": "[al] 閉音節型態，[so] 開音節型態",
      "ruleStep": [
        "閉音節 (R001)：［al］子音封閉發短母音",
        "非重音母音弱化 (R008)：［so］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［al］：特殊組合規則 (R006)（【適用】）；第 2 音節［so］：開音節規則 (R002)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɔːl.soʊ/",
      "derivations": [
        {
          "syllable": "第 1 音節［al］",
          "rule": "特殊組合規則 (R006)",
          "status": "【適用】",
          "reason": "al- 組合於主重音節發長音 /ˈɔːl/"
        },
        {
          "syllable": "第 2 音節［so］",
          "rule": "開音節規則 (R002)",
          "status": "【適用】",
          "reason": "母音 o 結尾開音節，發字母長母音 /soʊ/"
        }
      ]
    }
  },
  {
    "id": 28,
    "word": "although",
    "pos": "conj.",
    "chinese": "雖然,儘管",
    "syllable": [
      "al",
      "though"
    ],
    "syllableText": "2 音節 [al · though]",
    "syllableDetail": {
      "header": "2 音節 [al · though]",
      "vowelCore": "1. 母音核心：[a], [ou]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[th] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/ɔːlˈðoʊ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [ou]（共 2 個）\n2. 不可拆組合：[th] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [al · though]",
      "patternStep": "[al] 閉音節型態，[though] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［al］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［though］發固定長母音或雙母音",
        "複合子音 (R006)：［th］保持完整發單一子音"
      ],
      "ipaStep": "第 1 音節［al］：次重讀組合規則 (R006)（【適用】）；第 2 音節［though］：特殊不發音規則 (R007)（【適用】）。音節合成推導 ➔ 標準音標 /ɔːlˈðoʊ/",
      "derivations": [
        {
          "syllable": "第 1 音節［al］",
          "rule": "次重讀組合規則 (R006)",
          "status": "【適用】",
          "reason": "al- 組合次重讀發 /ɔːl/"
        },
        {
          "syllable": "第 2 音節［though］",
          "rule": "特殊不發音規則 (R007)",
          "status": "【適用】",
          "reason": "th 發濁音 /ð/，ough 組合於此處發長雙母音 /ˈðoʊ/，gh 完全不發音"
        }
      ]
    }
  },
  {
    "id": 29,
    "word": "always",
    "pos": "adv.",
    "chinese": "總是,一直",
    "syllable": [
      "al",
      "ways"
    ],
    "syllableText": "2 音節 [al · ways]",
    "syllableDetail": {
      "header": "2 音節 [al · ways]",
      "vowelCore": "1. 母音核心：[a(1)], [ay]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈɔːl.weɪz/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [ay]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [al · ways]",
      "patternStep": "[al] 閉音節型態，[ways] 母音組合型態",
      "ruleStep": [
        "閉音節 (R001)：［al］子音封閉發短母音",
        "非重音母音弱化 (R008)：［ways］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［al］：特殊組合規則 (R006)（【適用】）；第 2 音節［ways］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɔːl.weɪz/",
      "derivations": [
        {
          "syllable": "第 1 音節［al］",
          "rule": "特殊組合規則 (R006)",
          "status": "【適用】",
          "reason": "al- 於重音節發長音 /ˈɔːl/"
        },
        {
          "syllable": "第 2 音節［ways］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ay 雙母音組合發長母音 /weɪ/，字尾 s 濁化發 /z/"
        }
      ]
    }
  },
  {
    "id": 30,
    "word": "am/a.m.",
    "pos": "adv.",
    "chinese": "是/上午",
    "syllable": [
      "am",
      "a",
      "m"
    ],
    "syllableText": "3 音節 [am · a · m]",
    "syllableDetail": {
      "header": "3 音節 [am · a · m]",
      "vowelCore": "1. 母音核心：[a(1)], [a(3)]（共 3 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/æm/ /ˌeɪˈɛm/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [a(3)]（共 3 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：3 音節 [am · a · m]",
      "patternStep": "[am] 閉音節型態，[a] 開音節型態，[m] 閉音節型態",
      "ruleStep": [
        "非重音母音弱化 (R008)：［am］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［a］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［m］子音封閉發短母音"
      ],
      "ipaStep": "單音節［am］：閉音節規則 (R001)（【適用】）；縮寫音［a.m.］：字母讀音規則（【適用】）。音節合成推導 ➔ 標準音標 /æm/ /ˌeɪˈɛm/",
      "derivations": [
        {
          "syllable": "單音節［am］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 m 封閉音節，字母 a 常規發短母音 /æm/"
        },
        {
          "syllable": "縮寫音［a.m.］",
          "rule": "字母讀音規則",
          "status": "【適用】",
          "reason": "縮寫詞各自朗讀字母名稱 /ˌeɪˈɛm/"
        }
      ]
    }
  },
  {
    "id": 31,
    "word": "and",
    "pos": "conj.",
    "chinese": "和,而且",
    "syllable": [
      "and"
    ],
    "syllableText": "單音節字 [and]",
    "syllableDetail": {
      "header": "單音節字 [and]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ænd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [and]",
      "patternStep": "[and] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［and］子音封閉發短母音"
      ],
      "ipaStep": "單音節［and］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /ænd/",
      "derivations": [
        {
          "syllable": "單音節［and］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "nd 雙子音封閉單音節，字母 a 常規發短母音 /ænd/"
        }
      ]
    }
  },
  {
    "id": 32,
    "word": "angry",
    "pos": "adj.",
    "chinese": "生氣的,憤怒的",
    "syllable": [
      "an",
      "gry"
    ],
    "syllableText": "2 音節 [an · gry]",
    "syllableDetail": {
      "header": "2 音節 [an · gry]",
      "vowelCore": "1. 母音核心：[a], [y]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[ng] 複合子音 (Consonant Digraph)，[gr] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈæŋ.ɡri/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [y]（共 2 個）\n2. 不可拆組合：[ng] 複合子音 (Consonant Digraph)，[gr] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [an · gry]",
      "patternStep": "[an] 閉音節型態，[gry] 開音節型態",
      "ruleStep": [
        "閉音節 (R001)：［an］子音封閉發短母音",
        "非重音母音弱化 (R008)：［gry］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "複合子音 (R006)：［ng］保持完整發單一子音"
      ],
      "ipaStep": "第 1 音節［an］：鼻音同化規則 (R006)（【適用】）；第 2 音節［gry］：字尾 y 弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈæŋ.ɡri/",
      "derivations": [
        {
          "syllable": "第 1 音節［an］",
          "rule": "鼻音同化規則 (R006)",
          "status": "【適用】",
          "reason": "字母 n 受後方軟顎音 g 牽引同化發軟顎鼻音 /ˈæŋ/"
        },
        {
          "syllable": "第 2 音節［gry］",
          "rule": "字尾 y 弱化規則 (R008)",
          "status": "【適用】",
          "reason": "字尾非重讀 y 發弱化長母音 /ɡri/"
        }
      ]
    }
  },
  {
    "id": 33,
    "word": "animal",
    "pos": "n.",
    "chinese": "動物",
    "syllable": [
      "an",
      "i",
      "mal"
    ],
    "syllableText": "3 音節 [an · i · mal]",
    "syllableDetail": {
      "header": "3 音節 [an · i · mal]",
      "vowelCore": "1. 母音核心：[a(1)], [i], [a(5)]（共 3 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈæn.ə.məl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [i], [a(5)]（共 3 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：3 音節 [an · i · mal]",
      "patternStep": "[an] 閉音節型態，[i] 開音節型態，[mal] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［an］子音封閉發短母音",
        "非重音母音弱化 (R008)：［i］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［mal］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［an］：閉音節規則 (R001)（【適用】）；第 2 音節［i］：非重讀弱化 (R008)（【適用】）；第 3 音節［mal］：非重讀弱化 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈæn.ə.məl/",
      "derivations": [
        {
          "syllable": "第 1 音節［an］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 n 封閉且為重音節，字母 a 常規發短母音 /ˈæn/"
        },
        {
          "syllable": "第 2 音節［i］",
          "rule": "非重讀弱化 (R008)",
          "status": "【適用】",
          "reason": "中間弱讀開音節，母音 i 弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 3 音節［mal］",
          "rule": "非重讀弱化 (R008)",
          "status": "【適用】",
          "reason": "字尾 -al 音節非重讀，母音 a 弱化發成音節 /məl/"
        }
      ]
    }
  },
  {
    "id": 34,
    "word": "another",
    "pos": "adj./pron.",
    "chinese": "另一個,再一個",
    "syllable": [
      "an",
      "oth",
      "er"
    ],
    "syllableText": "3 音節 [an · oth · er]",
    "syllableDetail": {
      "header": "3 音節 [an · oth · er]",
      "vowelCore": "1. 母音核心：[a], [o], [er]（共 3 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：[th] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/əˈnʌð.ɚ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [o], [er]（共 3 個）\n2. 不可拆組合：[th] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：3 音節 [an · oth · er]",
      "patternStep": "[an] 閉音節型態，[oth] 閉音節型態，[er] R 控制母音型態",
      "ruleStep": [
        "前綴弱化 (R012)：［an］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［oth］子音封閉發短母音",
        "R 控制母音弱化 (R005/R008)：［er］非重音節弱化發輕捲舌母音 /ɚ/",
        "複合子音 (R006)：［th］保持完整發單一子音"
      ],
      "ipaStep": "第 1 音節［an］：前綴非重讀弱化 (R012)（【適用】）；第 2 音節［oth］：短母音轉移規則 (R010)（【適用】）；第 3 音節［er］：R 控制母音規則 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /əˈnʌð.ɚ/",
      "derivations": [
        {
          "syllable": "第 1 音節［an］",
          "rule": "前綴非重讀弱化 (R012)",
          "status": "【適用】",
          "reason": "非重讀音節弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［oth］",
          "rule": "短母音轉移規則 (R010)",
          "status": "【適用】",
          "reason": "o 於此字受歷史音變發短母音 /ˈnʌ/，th 發濁子音 /ð/"
        },
        {
          "syllable": "第 3 音節［er］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "-er 字尾非重讀弱化發捲舌輕母音 /ɚ/"
        }
      ]
    }
  },
  {
    "id": 35,
    "word": "answer",
    "pos": "n./v.",
    "chinese": "回答,答案",
    "syllable": [
      "an",
      "swer"
    ],
    "syllableText": "2 音節 [an · swer]",
    "syllableDetail": {
      "header": "2 音節 [an · swer]",
      "vowelCore": "1. 母音核心：[a], [er]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[sw] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈæn.sɚ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [er]（共 2 個）\n2. 不可拆組合：[sw] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [an · swer]",
      "patternStep": "[an] 閉音節型態，[swer] R 控制母音型態",
      "ruleStep": [
        "閉音節 (R001)：［an］子音封閉發短母音",
        "R 控制母音弱化 (R005/R008)：［swer］非重音節弱化發輕捲舌母音 /ɚ/"
      ],
      "ipaStep": "第 1 音節［an］：閉音節規則 (R001)（【適用】）；第 2 音節［swer］：不發音規則 (R007) + R 控制母音 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /ˈæn.sɚ/",
      "derivations": [
        {
          "syllable": "第 1 音節［an］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 n 封閉且為重音節，母音 a 常規發短母音 /ˈæn/"
        },
        {
          "syllable": "第 2 音節［swer］",
          "rule": "不發音規則 (R007) + R 控制母音 (R005)",
          "status": "【適用】",
          "reason": "字母 w 在 s 後不發音，-er 組合發捲舌輕母音 /sɚ/"
        }
      ]
    }
  },
  {
    "id": 36,
    "word": "ant",
    "pos": "n.",
    "chinese": "螞蟻",
    "syllable": [
      "ant"
    ],
    "syllableText": "單音節字 [ant]",
    "syllableDetail": {
      "header": "單音節字 [ant]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ænt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [ant]",
      "patternStep": "[ant] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［ant］子音封閉發短母音"
      ],
      "ipaStep": "單音節［ant］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /ænt/",
      "derivations": [
        {
          "syllable": "單音節［ant］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "nt 雙子音封閉單音節，字母 a 常規發短母音 /ænt/"
        }
      ]
    }
  },
  {
    "id": 37,
    "word": "any",
    "pos": "pron./adj./adv.",
    "chinese": "任何的,若干",
    "syllable": [
      "an",
      "y"
    ],
    "syllableText": "2 音節 [an · y]",
    "syllableDetail": {
      "header": "2 音節 [an · y]",
      "vowelCore": "1. 母音核心：[a], [y]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈɛn.i/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "閉音節規則 (R001)",
    "exceptionReason": "字母 a 於此高頻字特例發短母音 /ˈɛn/ (R010)",
    "steps": {
      "syllableStep": "1. 母音核心：[a], [y]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [an · y]",
      "patternStep": "[an] 閉音節型態，[y] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［an］子音封閉發短母音",
        "非重音母音弱化 (R008)：［y］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［an］：閉音節規則 (R001)（【不適用 (特例短母音)】）；第 2 音節［y］：字尾 y 弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɛn.i/",
      "derivations": [
        {
          "syllable": "第 1 音節［an］",
          "rule": "閉音節規則 (R001)",
          "status": "【不適用 (特例短母音)】",
          "reason": "字母 a 於此高頻字特例發短母音 /ˈɛn/ (R010)"
        },
        {
          "syllable": "第 2 音節［y］",
          "rule": "字尾 y 弱化規則 (R008)",
          "status": "【適用】",
          "reason": "字尾非重讀 y 發弱化長母音 /i/"
        }
      ]
    }
  },
  {
    "id": 38,
    "word": "anybody/anyone",
    "pos": "pron.",
    "chinese": "任何人",
    "syllable": [
      "an",
      "y",
      "bod",
      "y"
    ],
    "syllableText": "4 音節 [an · y · bod · y]",
    "syllableDetail": {
      "header": "4 音節 [an · y · bod · y]",
      "vowelCore": "1. 母音核心：[a(1)], [y(3)], [o(5)], [y(7)]（共 4 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈɛn.iˌbɑː.di/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [y(3)], [o(5)], [y(7)]（共 4 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：4 音節 [an · y · bod · y]",
      "patternStep": "[an] 閉音節型態，[y] 閉音節型態，[bod] 閉音節型態，[y] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［an］子音封閉發短母音",
        "非重音母音弱化 (R008)：［y］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［bod］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［an］：特例短母音規則 (R010)（【適用】）；第 2 音節［y］：字尾弱化規則 (R008)（【適用】）；第 3 音節［bod］：次重讀閉音節 (R001)（【適用】）；第 4 音節［y］：字尾 y 規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɛn.iˌbɑː.di/",
      "derivations": [
        {
          "syllable": "第 1 音節［an］",
          "rule": "特例短母音規則 (R010)",
          "status": "【適用】",
          "reason": "母音 a 特例發短母音 /ˈɛn/"
        },
        {
          "syllable": "第 2 音節［y］",
          "rule": "字尾弱化規則 (R008)",
          "status": "【適用】",
          "reason": "弱讀開音節字母 y 發 /i/"
        },
        {
          "syllable": "第 3 音節［bod］",
          "rule": "次重讀閉音節 (R001)",
          "status": "【適用】",
          "reason": "子音 d 封閉次重讀音節，母音 o 發短母音 /ˌbɑː/"
        },
        {
          "syllable": "第 4 音節［y］",
          "rule": "字尾 y 規則 (R008)",
          "status": "【適用】",
          "reason": "字尾非重讀 y 發 /di/"
        }
      ]
    }
  },
  {
    "id": 39,
    "word": "anything",
    "pos": "pron.",
    "chinese": "任何事,任何東西",
    "syllable": [
      "an",
      "y",
      "thing"
    ],
    "syllableText": "3 音節 [an · y · thing]",
    "syllableDetail": {
      "header": "3 音節 [an · y · thing]",
      "vowelCore": "1. 母音核心：[a], [y], [i]（共 3 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[th] 複合子音 (Consonant Digraph)，[ng] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/ˈɛn.i.θɪŋ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [y], [i]（共 3 個）\n2. 不可拆組合：[th] 複合子音 (Consonant Digraph)，[ng] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：3 音節 [an · y · thing]",
      "patternStep": "[an] 閉音節型態，[y] 閉音節型態，[thing] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［an］子音封閉發短母音",
        "非重音母音弱化 (R008)：［y］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［thing］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "複合子音 (R006)：［th］保持完整發單一子音"
      ],
      "ipaStep": "第 1 音節［an］：特例短母音規則 (R010)（【適用】）；第 2 音節［y］：弱化開音節 (R008)（【適用】）；第 3 音節［thing］：雙子音叢 (R006)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɛn.i.θɪŋ/",
      "derivations": [
        {
          "syllable": "第 1 音節［an］",
          "rule": "特例短母音規則 (R010)",
          "status": "【適用】",
          "reason": "母音 a 特例發短母音 /ˈɛn/"
        },
        {
          "syllable": "第 2 音節［y］",
          "rule": "弱化開音節 (R008)",
          "status": "【適用】",
          "reason": "字母 y 發輕母音 /i/"
        },
        {
          "syllable": "第 3 音節［thing］",
          "rule": "雙子音叢 (R006)",
          "status": "【適用】",
          "reason": "th 發清齒擦音 /θ/，ng 封閉音節使母音 i 發短母音 /θɪŋ/"
        }
      ]
    }
  },
  {
    "id": 40,
    "word": "apartment",
    "pos": "n.",
    "chinese": "公寓住宅",
    "syllable": [
      "a",
      "part",
      "ment"
    ],
    "syllableText": "3 音節 [a · part · ment]",
    "syllableDetail": {
      "header": "3 音節 [a · part · ment]",
      "vowelCore": "1. 母音核心：[a(1)], [ar], [e]（共 3 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[ment] 後綴字尾組合 保持完整"
    },
    "ipa": "/əˈpɑːrt.mənt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [ar], [e]（共 3 個）\n2. 不可拆組合：[ment] 後綴字尾組合 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：3 音節 [a · part · ment]",
      "patternStep": "[a] 開音節型態，[part] R 控制母音型態，[ment] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "R 控制母音 (R005)：［part］母音接 r 形成捲舌音",
        "非重音母音弱化 (R008)：［ment］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［a］：前綴非重讀弱化 (R012)（【適用】）；第 2 音節［part］：R 控制母音規則 (R005)（【適用】）；第 3 音節［ment］：後綴弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /əˈpɑːrt.mənt/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴非重讀弱化 (R012)",
          "status": "【適用】",
          "reason": "非重讀起始音節弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［part］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "ar 組合於主重音節常規發長母音 /ˈpɑːrt/"
        },
        {
          "syllable": "第 3 音節［ment］",
          "rule": "後綴弱化規則 (R008)",
          "status": "【適用】",
          "reason": "-ment 後綴非重讀弱化發 /mənt/"
        }
      ]
    }
  },
  {
    "id": 41,
    "word": "appear",
    "pos": "v.",
    "chinese": "出現,顯現",
    "syllable": [
      "ap",
      "pear"
    ],
    "syllableText": "2 音節 [ap · pear]",
    "syllableDetail": {
      "header": "2 音節 [ap · pear]",
      "vowelCore": "1. 母音核心：[a(1)], [ea]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈpɪr/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [ea]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [ap · pear]",
      "patternStep": "[ap] 閉音節型態，[pear] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［ap］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［pear］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［ap］：前綴非重讀弱化 (R012)（【適用】）；第 2 音節［pear］：R 控制雙母音規則 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /əˈpɪr/",
      "derivations": [
        {
          "syllable": "第 1 音節［ap］",
          "rule": "前綴非重讀弱化 (R012)",
          "status": "【適用】",
          "reason": "非重讀前綴音節弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［pear］",
          "rule": "R 控制雙母音規則 (R005)",
          "status": "【適用】",
          "reason": "ear 組合於主重音節常規發 /ˈpɪr/"
        }
      ]
    }
  },
  {
    "id": 42,
    "word": "apple",
    "pos": "n.",
    "chinese": "蘋果",
    "syllable": [
      "ap",
      "ple"
    ],
    "syllableText": "2 音節 [ap · ple]",
    "syllableDetail": {
      "header": "2 音節 [ap · ple]",
      "vowelCore": "1. 母音核心：[a], [e]（共 2 個）",
      "structureRule": "3. 結構切分：字尾成音節獨立劃歸",
      "indivisibleRule": "2. 不可拆組合：[pl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈæp.əl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [e]（共 2 個）\n2. 不可拆組合：[pl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：字尾成音節獨立劃歸\n4. 切分結果：2 音節 [ap · ple]",
      "patternStep": "[ap] 閉音節型態，[ple] 成音節字尾型態",
      "ruleStep": [
        "閉音節 (R001)：［ap］子音封閉發短母音",
        "成音節字尾 (R009)：［ple］成音節發 /l̩/ 或 /əl/"
      ],
      "ipaStep": "第 1 音節［ap］：閉音節規則 (R001)（【適用】）；第 2 音節［ple］：成音節字尾規則 (R009)（【適用】）。音節合成推導 ➔ 標準音標 /ˈæp.əl/",
      "derivations": [
        {
          "syllable": "第 1 音節［ap］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "雙子音 pp 前字封閉且為重音節，字母 a 常規發短母音 /ˈæp/"
        },
        {
          "syllable": "第 2 音節［ple］",
          "rule": "成音節字尾規則 (R009)",
          "status": "【適用】",
          "reason": "子音 + le 於字尾構成成音節，不發音 e 弱化發 /əl/"
        }
      ]
    }
  },
  {
    "id": 43,
    "word": "area",
    "pos": "n.",
    "chinese": "區域,面積,範圍",
    "syllable": [
      "ar",
      "e",
      "a"
    ],
    "syllableText": "3 音節 [ar · e · a]",
    "syllableDetail": {
      "header": "3 音節 [ar · e · a]",
      "vowelCore": "1. 母音核心：[ar], [e], [a(4)]（共 3 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈɛr.i.ə/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ar], [e], [a(4)]（共 3 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：3 音節 [ar · e · a]",
      "patternStep": "[ar] R 控制母音型態，[e] 開音節型態，[a] 開音節型態",
      "ruleStep": [
        "R 控制母音 (R005)：［ar］母音接 r 形成捲舌音",
        "非重音母音弱化 (R008)：［e］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［a］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［ar］：R 控制母音變異 (R005)（【適用】）；第 2 音節［e］：開音節弱化 (R008)（【適用】）；第 3 音節［a］：字尾弱化 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈɛr.i.ə/",
      "derivations": [
        {
          "syllable": "第 1 音節［ar］",
          "rule": "R 控制母音變異 (R005)",
          "status": "【適用】",
          "reason": "ar 於重音節接續母音時發 /ˈɛr/"
        },
        {
          "syllable": "第 2 音節［e］",
          "rule": "開音節弱化 (R008)",
          "status": "【適用】",
          "reason": "弱讀開音節字母 e 發 /i/"
        },
        {
          "syllable": "第 3 音節［a］",
          "rule": "字尾弱化 (R008)",
          "status": "【適用】",
          "reason": "字尾單一字母 a 弱化發輕母音 /ə/"
        }
      ]
    }
  },
  {
    "id": 44,
    "word": "arm",
    "pos": "n./v.",
    "chinese": "手臂,武器,武裝",
    "syllable": [
      "arm"
    ],
    "syllableText": "單音節字 [arm]",
    "syllableDetail": {
      "header": "單音節字 [arm]",
      "vowelCore": "1. 母音核心：[ar]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ɑːrm/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ar]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [arm]",
      "patternStep": "[arm] R 控制母音型態",
      "ruleStep": [
        "R 控制母音 (R005)：［arm］母音接 r 形成捲舌音"
      ],
      "ipaStep": "單音節［arm］：R 控制母音規則 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /ɑːrm/",
      "derivations": [
        {
          "syllable": "單音節［arm］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "ar 組合於單音節常規發捲舌長母音 /ɑːrm/"
        }
      ]
    }
  },
  {
    "id": 45,
    "word": "around",
    "pos": "prep./adv.",
    "chinese": "在…四周,大約",
    "syllable": [
      "a",
      "round"
    ],
    "syllableText": "2 音節 [a · round]",
    "syllableDetail": {
      "header": "2 音節 [a · round]",
      "vowelCore": "1. 母音核心：[a], [ou]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈraʊnd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [ou]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · round]",
      "patternStep": "[a] 開音節型態，[round] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［round］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［round］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /əˈraʊnd/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［round］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ou 雙母音組合於重音節常規發雙母音 /ˈraʊnd/"
        }
      ]
    }
  },
  {
    "id": 46,
    "word": "arrive",
    "pos": "v.",
    "chinese": "到達,抵達",
    "syllable": [
      "ar",
      "rive"
    ],
    "syllableText": "2 音節 [ar · rive]",
    "syllableDetail": {
      "header": "2 音節 [ar · rive]",
      "vowelCore": "1. 母音核心：[ar], [i], [e]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈraɪv/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ar], [i], [e]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [ar · rive]",
      "patternStep": "[ar] R 控制母音型態，[rive] 魔術 e 型態",
      "ruleStep": [
        "R 控制母音弱化 (R005/R008)：［ar］非重音節弱化發輕捲舌母音 /ɚ/",
        "魔術 e (R003)：［rive］字尾 e 靜音使主要母音發長音"
      ],
      "ipaStep": "第 1 音節［ar］：前綴非重讀弱化 (R012)（【適用】）；第 2 音節［rive］：魔術 e 規則 (R003)（【適用】）。音節合成推導 ➔ 標準音標 /əˈraɪv/",
      "derivations": [
        {
          "syllable": "第 1 音節［ar］",
          "rule": "前綴非重讀弱化 (R012)",
          "status": "【適用】",
          "reason": "非重讀起始音節弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［rive］",
          "rule": "魔術 e 規則 (R003)",
          "status": "【適用】",
          "reason": "i_e 結構促使母音 i 發字母長音 /ˈraɪv/"
        }
      ]
    }
  },
  {
    "id": 47,
    "word": "art",
    "pos": "n.",
    "chinese": "藝術,美術",
    "syllable": [
      "art"
    ],
    "syllableText": "單音節字 [art]",
    "syllableDetail": {
      "header": "單音節字 [art]",
      "vowelCore": "1. 母音核心：[ar]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ɑːrt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ar]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [art]",
      "patternStep": "[art] R 控制母音型態",
      "ruleStep": [
        "R 控制母音 (R005)：［art］母音接 r 形成捲舌音"
      ],
      "ipaStep": "單音節［art］：R 控制母音規則 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /ɑːrt/",
      "derivations": [
        {
          "syllable": "單音節［art］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "ar 組合受子音 t 封閉，常規發長母音 /ɑːrt/"
        }
      ]
    }
  },
  {
    "id": 48,
    "word": "as",
    "pos": "conj./adv./prep.",
    "chinese": "如同,當…之時",
    "syllable": [
      "as"
    ],
    "syllableText": "單音節字 [as]",
    "syllableDetail": {
      "header": "單音節字 [as]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/æz/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [as]",
      "patternStep": "[as] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［as］子音封閉發短母音"
      ],
      "ipaStep": "單音節［as］：閉音節規則 (R001) + 子音濁化（【適用】）。音節合成推導 ➔ 標準音標 /æz/",
      "derivations": [
        {
          "syllable": "單音節［as］",
          "rule": "閉音節規則 (R001) + 子音濁化",
          "status": "【適用】",
          "reason": "字母 a 發短母音 /æ/，字尾子音 s 於常態語音中濁化發 /z/"
        }
      ]
    }
  },
  {
    "id": 49,
    "word": "ask",
    "pos": "v.",
    "chinese": "詢問,要求",
    "syllable": [
      "ask"
    ],
    "syllableText": "單音節字 [ask]",
    "syllableDetail": {
      "header": "單音節字 [ask]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[sk] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/æsk/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：[sk] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [ask]",
      "patternStep": "[ask] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［ask］子音封閉發短母音"
      ],
      "ipaStep": "單音節［ask］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /æsk/",
      "derivations": [
        {
          "syllable": "單音節［ask］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "sk 雙子音叢封閉單音節，字母 a 常規發美音短母音 /æsk/"
        }
      ]
    }
  },
  {
    "id": 50,
    "word": "at",
    "pos": "prep.",
    "chinese": "在…地點/時間",
    "syllable": [
      "at"
    ],
    "syllableText": "單音節字 [at]",
    "syllableDetail": {
      "header": "單音節字 [at]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/æt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [at]",
      "patternStep": "[at] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［at］子音封閉發短母音"
      ],
      "ipaStep": "單音節［at］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /æt/",
      "derivations": [
        {
          "syllable": "單音節［at］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 t 封閉單音節，字母 a 常規發短母音 /æt/"
        }
      ]
    }
  },
  {
    "id": 51,
    "word": "attack",
    "pos": "n./v.",
    "chinese": "攻擊,襲擊",
    "syllable": [
      "at",
      "tack"
    ],
    "syllableText": "2 音節 [at · tack]",
    "syllableDetail": {
      "header": "2 音節 [at · tack]",
      "vowelCore": "1. 母音核心：[a(1)], [a(4)]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[ck] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/əˈtæk/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [a(4)]（共 2 個）\n2. 不可拆組合：[ck] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [at · tack]",
      "patternStep": "[at] 閉音節型態，[tack] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［at］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［tack］子音封閉發短母音",
        "複合子音 (R006)：［ck］保持完整發單一子音"
      ],
      "ipaStep": "第 1 音節［at］：前綴非重讀弱化 (R012)（【適用】）；第 2 音節［tack］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /əˈtæk/",
      "derivations": [
        {
          "syllable": "第 1 音節［at］",
          "rule": "前綴非重讀弱化 (R012)",
          "status": "【適用】",
          "reason": "非重讀前綴音節弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［tack］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "複合子音 -ck 封閉重音節，字母 a 常規發短母音 /ˈtæk/"
        }
      ]
    }
  },
  {
    "id": 52,
    "word": "aunt",
    "pos": "n.",
    "chinese": "伯母,嬸嬸,姑姑,阿姨",
    "syllable": [
      "aunt"
    ],
    "syllableText": "單音節字 [aunt]",
    "syllableDetail": {
      "header": "單音節字 [aunt]",
      "vowelCore": "1. 母音核心：[au]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ænt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "母音組合規則 (R004)",
    "exceptionReason": "au 組合常規發 /ɔː/，此處在美式英語中同化發短母音 /ænt/ (R010)",
    "steps": {
      "syllableStep": "1. 母音核心：[au]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [aunt]",
      "patternStep": "[aunt] 母音組合型態",
      "ruleStep": [
        "閉音節 (R001)：［aunt］子音封閉發短母音"
      ],
      "ipaStep": "單音節［aunt］：母音組合規則 (R004)（【不適用 (美音短音轉移)】）。音節合成推導 ➔ 標準音標 /ænt/",
      "derivations": [
        {
          "syllable": "單音節［aunt］",
          "rule": "母音組合規則 (R004)",
          "status": "【不適用 (美音短音轉移)】",
          "reason": "au 組合常規發 /ɔː/，此處在美式英語中同化發短母音 /ænt/ (R010)"
        }
      ]
    }
  },
  {
    "id": 53,
    "word": "away",
    "pos": "adv.",
    "chinese": "離開,遠離",
    "syllable": [
      "a",
      "way"
    ],
    "syllableText": "2 音節 [a · way]",
    "syllableDetail": {
      "header": "2 音節 [a · way]",
      "vowelCore": "1. 母音核心：[a(1)], [ay]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/əˈweɪ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(1)], [ay]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [a · way]",
      "patternStep": "[a] 開音節型態，[way] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［a］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［way］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［a］：前綴弱化規則 (R012)（【適用】）；第 2 音節［way］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /əˈweɪ/",
      "derivations": [
        {
          "syllable": "第 1 音節［a］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 a- 前綴弱化發輕母音 /ə/"
        },
        {
          "syllable": "第 2 音節［way］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ay 雙母音組合於重音節常規發字母長母音 /ˈweɪ/"
        }
      ]
    }
  },
  {
    "id": 54,
    "word": "baby",
    "pos": "n.",
    "chinese": "嬰兒,寶貝",
    "syllable": [
      "ba",
      "by"
    ],
    "syllableText": "2 音節 [ba · by]",
    "syllableDetail": {
      "header": "2 音節 [ba · by]",
      "vowelCore": "1. 母音核心：[a], [y]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈbeɪ.bi/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [y]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [ba · by]",
      "patternStep": "[ba] 開音節型態，[by] 開音節型態",
      "ruleStep": [
        "開音節 (R002)：［ba］母音結尾發長母音",
        "非重音母音弱化 (R008)：［by］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［ba］：開音節規則 (R002)（【適用】）；第 2 音節［by］：字尾 y 弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈbeɪ.bi/",
      "derivations": [
        {
          "syllable": "第 1 音節［ba］",
          "rule": "開音節規則 (R002)",
          "status": "【適用】",
          "reason": "重音開音節以單一母音結尾，字母 a 常規發字母長音 /ˈbeɪ/"
        },
        {
          "syllable": "第 2 音節［by］",
          "rule": "字尾 y 弱化規則 (R008)",
          "status": "【適用】",
          "reason": "字尾非重讀 y 發長音轉弱之 /bi/"
        }
      ]
    }
  },
  {
    "id": 55,
    "word": "back",
    "pos": "adv./n./v./adj.",
    "chinese": "後面,背部,返回",
    "syllable": [
      "back"
    ],
    "syllableText": "單音節字 [back]",
    "syllableDetail": {
      "header": "單音節字 [back]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[ck] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/bæk/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：[ck] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [back]",
      "patternStep": "[back] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［back］子音封閉發短母音",
        "複合子音 (R006)：［ck］保持完整發單一子音"
      ],
      "ipaStep": "單音節［back］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bæk/",
      "derivations": [
        {
          "syllable": "單音節［back］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "複合子音 -ck 封閉音節，前母音 a 常規發短母音 /bæk/"
        }
      ]
    }
  },
  {
    "id": 56,
    "word": "bad",
    "pos": "adj.",
    "chinese": "壞的,糟糕的",
    "syllable": [
      "bad"
    ],
    "syllableText": "單音節字 [bad]",
    "syllableDetail": {
      "header": "單音節字 [bad]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bæd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bad]",
      "patternStep": "[bad] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bad］子音封閉發短母音"
      ],
      "ipaStep": "單音節［bad］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bæd/",
      "derivations": [
        {
          "syllable": "單音節［bad］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 d 封閉音節，字母 a 常規發短母音 /bæd/"
        }
      ]
    }
  },
  {
    "id": 57,
    "word": "bag",
    "pos": "n.",
    "chinese": "袋子,皮包",
    "syllable": [
      "bag"
    ],
    "syllableText": "單音節字 [bag]",
    "syllableDetail": {
      "header": "單音節字 [bag]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bæɡ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bag]",
      "patternStep": "[bag] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bag］子音封閉發短母音"
      ],
      "ipaStep": "單音節［bag］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bæɡ/",
      "derivations": [
        {
          "syllable": "單音節［bag］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 g 封閉音節，字母 a 常規發短母音 /bæɡ/"
        }
      ]
    }
  },
  {
    "id": 58,
    "word": "ball",
    "pos": "n./v.",
    "chinese": "球,舞會",
    "syllable": [
      "ball"
    ],
    "syllableText": "單音節字 [ball]",
    "syllableDetail": {
      "header": "單音節字 [ball]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɔːl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [ball]",
      "patternStep": "[ball] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［ball］子音封閉發短母音"
      ],
      "ipaStep": "單音節［ball］：特殊組合規則 (R006)（【適用】）。音節合成推導 ➔ 標準音標 /bɔːl/",
      "derivations": [
        {
          "syllable": "單音節［ball］",
          "rule": "特殊組合規則 (R006)",
          "status": "【適用】",
          "reason": "-all 特殊組合，字母 a 受雙子音 ll 影響舌位後縮發 /bɔːl/"
        }
      ]
    }
  },
  {
    "id": 59,
    "word": "banana",
    "pos": "n.",
    "chinese": "香蕉",
    "syllable": [
      "ba",
      "nan",
      "a"
    ],
    "syllableText": "3 音節 [ba · nan · a]",
    "syllableDetail": {
      "header": "3 音節 [ba · nan · a]",
      "vowelCore": "1. 母音核心：[a(2)], [a(4)], [a(6)]（共 3 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bəˈnæn.ə/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(2)], [a(4)], [a(6)]（共 3 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：3 音節 [ba · nan · a]",
      "patternStep": "[ba] 開音節型態，[nan] 閉音節型態，[a] 開音節型態",
      "ruleStep": [
        "非重音母音弱化 (R008)：［ba］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［nan］子音封閉發短母音",
        "非重音母音弱化 (R008)：［a］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［ba］：非重讀弱化 (R008)（【適用】）；第 2 音節［nan］：閉音節規則 (R001)（【適用】）；第 3 音節［a］：字尾弱化 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /bəˈnæn.ə/",
      "derivations": [
        {
          "syllable": "第 1 音節［ba］",
          "rule": "非重讀弱化 (R008)",
          "status": "【適用】",
          "reason": "非重讀起始開音節，母音 a 弱化發輕母音 /bə/"
        },
        {
          "syllable": "第 2 音節［nan］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 n 封閉且為主要重音節，字母 a 常規發短母音 /ˈnæn/"
        },
        {
          "syllable": "第 3 音節［a］",
          "rule": "字尾弱化 (R008)",
          "status": "【適用】",
          "reason": "字尾單一母音 a 弱化發輕母音 /ə/"
        }
      ]
    }
  },
  {
    "id": 60,
    "word": "band",
    "pos": "n.",
    "chinese": "樂團,樂隊,帶子",
    "syllable": [
      "band"
    ],
    "syllableText": "單音節字 [band]",
    "syllableDetail": {
      "header": "單音節字 [band]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bænd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [band]",
      "patternStep": "[band] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［band］子音封閉發短母音"
      ],
      "ipaStep": "單音節［band］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bænd/",
      "derivations": [
        {
          "syllable": "單音節［band］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "nd 雙子音封閉單音節，字母 a 常規發短母音 /bænd/"
        }
      ]
    }
  },
  {
    "id": 61,
    "word": "bank",
    "pos": "n./v.",
    "chinese": "銀行,河岸",
    "syllable": [
      "bank"
    ],
    "syllableText": "單音節字 [bank]",
    "syllableDetail": {
      "header": "單音節字 [bank]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[nk] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/bæŋk/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：[nk] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bank]",
      "patternStep": "[bank] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bank］子音封閉發短母音",
        "複合子音 (R006)：［nk］保持完整發單一子音"
      ],
      "ipaStep": "單音節［bank］：鼻音同化組合 (R006)（【適用】）。音節合成推導 ➔ 標準音標 /bæŋk/",
      "derivations": [
        {
          "syllable": "單音節［bank］",
          "rule": "鼻音同化組合 (R006)",
          "status": "【適用】",
          "reason": "nk 組合使字母 n 同化為軟顎鼻音，母音 a 發短母音 /bæŋk/"
        }
      ]
    }
  },
  {
    "id": 62,
    "word": "baseball",
    "pos": "n.",
    "chinese": "棒球",
    "syllable": [
      "base",
      "ball"
    ],
    "syllableText": "2 音節 [base · ball]",
    "syllableDetail": {
      "header": "2 音節 [base · ball]",
      "vowelCore": "1. 母音核心：[a(2)], [e], [a(6)]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈbeɪs.bɔːl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(2)], [e], [a(6)]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [base · ball]",
      "patternStep": "[base] 魔術 e 型態，[ball] 閉音節型態",
      "ruleStep": [
        "魔術 e (R003)：［base］字尾 e 靜音使主要母音發長音",
        "非重音母音弱化 (R008)：［ball］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［base］：魔術 e 規則 (R003)（【適用】）；第 2 音節［ball］：特殊組合規則 (R006)（【適用】）。音節合成推導 ➔ 標準音標 /ˈbeɪs.bɔːl/",
      "derivations": [
        {
          "syllable": "第 1 音節［base］",
          "rule": "魔術 e 規則 (R003)",
          "status": "【適用】",
          "reason": "a_e 結構促使母音 a 發字母長音 /ˈbeɪs/"
        },
        {
          "syllable": "第 2 音節［ball］",
          "rule": "特殊組合規則 (R006)",
          "status": "【適用】",
          "reason": "-all 組合次重讀發 /bɔːl/"
        }
      ]
    }
  },
  {
    "id": 63,
    "word": "basket",
    "pos": "n.",
    "chinese": "籃子,簍子",
    "syllable": [
      "bas",
      "ket"
    ],
    "syllableText": "2 音節 [bas · ket]",
    "syllableDetail": {
      "header": "2 音節 [bas · ket]",
      "vowelCore": "1. 母音核心：[a], [e]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[sk] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈbæs.kɪt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [e]（共 2 個）\n2. 不可拆組合：[sk] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [bas · ket]",
      "patternStep": "[bas] 閉音節型態，[ket] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bas］子音封閉發短母音",
        "非重音母音弱化 (R008)：［ket］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［bas］：閉音節規則 (R001)（【適用】）；第 2 音節［ket］：後綴弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈbæs.kɪt/",
      "derivations": [
        {
          "syllable": "第 1 音節［bas］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 s 封閉重音節，字母 a 發短母音 /ˈbæs/"
        },
        {
          "syllable": "第 2 音節［ket］",
          "rule": "後綴弱化規則 (R008)",
          "status": "【適用】",
          "reason": "-et 弱讀後綴發短母音 /kɪt/"
        }
      ]
    }
  },
  {
    "id": 64,
    "word": "basketball",
    "pos": "n.",
    "chinese": "籃球",
    "syllable": [
      "bas",
      "ket",
      "ball"
    ],
    "syllableText": "3 音節 [bas · ket · ball]",
    "syllableDetail": {
      "header": "3 音節 [bas · ket · ball]",
      "vowelCore": "1. 母音核心：[a(2)], [e], [a(8)]（共 3 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[sk] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈbæs.kɪt.bɔːl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a(2)], [e], [a(8)]（共 3 個）\n2. 不可拆組合：[sk] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：3 音節 [bas · ket · ball]",
      "patternStep": "[bas] 閉音節型態，[ket] 閉音節型態，[ball] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bas］子音封閉發短母音",
        "非重音母音弱化 (R008)：［ket］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［ball］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［bas］：閉音節規則 (R001)（【適用】）；第 2 音節［ket］：非重讀弱化 (R008)（【適用】）；第 3 音節［ball］：特殊組合規則 (R006)（【適用】）。音節合成推導 ➔ 標準音標 /ˈbæs.kɪt.bɔːl/",
      "derivations": [
        {
          "syllable": "第 1 音節［bas］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 s 封閉主要重音節，母音 a 發 /ˈbæs/"
        },
        {
          "syllable": "第 2 音節［ket］",
          "rule": "非重讀弱化 (R008)",
          "status": "【適用】",
          "reason": "中間非重讀閉音節弱化發 /kɪt/"
        },
        {
          "syllable": "第 3 音節［ball］",
          "rule": "特殊組合規則 (R006)",
          "status": "【適用】",
          "reason": "-all 組合次重讀發 /bɔːl/"
        }
      ]
    }
  },
  {
    "id": 65,
    "word": "bat",
    "pos": "n./v.",
    "chinese": "球棒,蝙蝠",
    "syllable": [
      "bat"
    ],
    "syllableText": "單音節字 [bat]",
    "syllableDetail": {
      "header": "單音節字 [bat]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bæt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bat]",
      "patternStep": "[bat] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bat］子音封閉發短母音"
      ],
      "ipaStep": "單音節［bat］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bæt/",
      "derivations": [
        {
          "syllable": "單音節［bat］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 t 封閉單音節，字母 a 常規發短母音 /bæt/"
        }
      ]
    }
  },
  {
    "id": 66,
    "word": "bath",
    "pos": "n.",
    "chinese": "泡澡,沐浴",
    "syllable": [
      "bath"
    ],
    "syllableText": "單音節字 [bath]",
    "syllableDetail": {
      "header": "單音節字 [bath]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[th] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/bæθ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：[th] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bath]",
      "patternStep": "[bath] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bath］子音封閉發短母音",
        "複合子音 (R006)：［th］保持完整發單一子音"
      ],
      "ipaStep": "單音節［bath］：閉音節規則 (R001) + 子音組合（【適用】）。音節合成推導 ➔ 標準音標 /bæθ/",
      "derivations": [
        {
          "syllable": "單音節［bath］",
          "rule": "閉音節規則 (R001) + 子音組合",
          "status": "【適用】",
          "reason": "th 清齒擦音封閉音節，字母 a 常規發美式短母音 /bæθ/"
        }
      ]
    }
  },
  {
    "id": 67,
    "word": "bathroom",
    "pos": "n.",
    "chinese": "浴室,洗手間",
    "syllable": [
      "bath",
      "room"
    ],
    "syllableText": "2 音節 [bath · room]",
    "syllableDetail": {
      "header": "2 音節 [bath · room]",
      "vowelCore": "1. 母音核心：[a], [oo]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[th] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/ˈbæθ.ruːm/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a], [oo]（共 2 個）\n2. 不可拆組合：[th] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [bath · room]",
      "patternStep": "[bath] 閉音節型態，[room] 母音組合型態",
      "ruleStep": [
        "閉音節 (R001)：［bath］子音封閉發短母音",
        "非重音母音弱化 (R008)：［room］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "複合子音 (R006)：［th］保持完整發單一子音"
      ],
      "ipaStep": "第 1 音節［bath］：閉音節規則 (R001)（【適用】）；第 2 音節［room］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /ˈbæθ.ruːm/",
      "derivations": [
        {
          "syllable": "第 1 音節［bath］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "th 封閉主重音節，字母 a 發短母音 /ˈbæθ/"
        },
        {
          "syllable": "第 2 音節［room］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "oo 組合次重讀發長母音 /ruːm/"
        }
      ]
    }
  },
  {
    "id": 68,
    "word": "be",
    "pos": "v./aux.",
    "chinese": "是,在,存在",
    "syllable": [
      "be"
    ],
    "syllableText": "單音節字 [be]",
    "syllableDetail": {
      "header": "單音節字 [be]",
      "vowelCore": "1. 母音核心：[e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/biː/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [be]",
      "patternStep": "[be] 開音節型態",
      "ruleStep": [
        "開音節 (R002)：［be］母音結尾發長母音"
      ],
      "ipaStep": "單音節［be］：開音節規則 (R002)（【適用】）。音節合成推導 ➔ 標準音標 /biː/",
      "derivations": [
        {
          "syllable": "單音節［be］",
          "rule": "開音節規則 (R002)",
          "status": "【適用】",
          "reason": "單一母音 e 結尾開音節，常規發字母長母音 /biː/"
        }
      ]
    }
  },
  {
    "id": 69,
    "word": "beach",
    "pos": "n./v.",
    "chinese": "海灘,沙灘",
    "syllable": [
      "beach"
    ],
    "syllableText": "單音節字 [beach]",
    "syllableDetail": {
      "header": "單音節字 [beach]",
      "vowelCore": "1. 母音核心：[ea]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[ch] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/biːtʃ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ea]（共 1 個）\n2. 不可拆組合：[ch] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [beach]",
      "patternStep": "[beach] 母音組合型態",
      "ruleStep": [
        "母音組合 (R004)：［beach］發固定長母音或雙母音",
        "複合子音 (R006)：［ch］保持完整發單一子音"
      ],
      "ipaStep": "單音節［beach］：母音組合規則 (R004) + 子音組合 (R006)（【適用】）。音節合成推導 ➔ 標準音標 /biːtʃ/",
      "derivations": [
        {
          "syllable": "單音節［beach］",
          "rule": "母音組合規則 (R004) + 子音組合 (R006)",
          "status": "【適用】",
          "reason": "ea 組合常規發長母音 /iː/，ch 發塞擦音 /tʃ/"
        }
      ]
    }
  },
  {
    "id": 70,
    "word": "bean",
    "pos": "n.",
    "chinese": "豆子,豆類",
    "syllable": [
      "bean"
    ],
    "syllableText": "單音節字 [bean]",
    "syllableDetail": {
      "header": "單音節字 [bean]",
      "vowelCore": "1. 母音核心：[ea]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/biːn/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ea]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bean]",
      "patternStep": "[bean] 母音組合型態",
      "ruleStep": [
        "母音組合 (R004)：［bean］發固定長母音或雙母音"
      ],
      "ipaStep": "單音節［bean］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /biːn/",
      "derivations": [
        {
          "syllable": "單音節［bean］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ea 雙母音字母組合常規發長母音 /biːn/"
        }
      ]
    }
  },
  {
    "id": 71,
    "word": "bear",
    "pos": "v./n.",
    "chinese": "承受,熊",
    "syllable": [
      "bear"
    ],
    "syllableText": "單音節字 [bear]",
    "syllableDetail": {
      "header": "單音節字 [bear]",
      "vowelCore": "1. 母音核心：[ea]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɛr/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "R 控制母音變異 (R005)",
    "exceptionReason": "ear 組合常規發 /ɪr/ (如 hear)，此處特例發捲舌音 /bɛr/ (R010)",
    "steps": {
      "syllableStep": "1. 母音核心：[ea]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bear]",
      "patternStep": "[bear] 母音組合型態",
      "ruleStep": [
        "閉音節 (R001)：［bear］子音封閉發短母音"
      ],
      "ipaStep": "單音節［bear］：R 控制母音變異 (R005)（【不適用 (特例發音)】）。音節合成推導 ➔ 標準音標 /bɛr/",
      "derivations": [
        {
          "syllable": "單音節［bear］",
          "rule": "R 控制母音變異 (R005)",
          "status": "【不適用 (特例發音)】",
          "reason": "ear 組合常規發 /ɪr/ (如 hear)，此處特例發捲舌音 /bɛr/ (R010)"
        }
      ]
    }
  },
  {
    "id": 72,
    "word": "beautiful",
    "pos": "adj.",
    "chinese": "美麗的,優美的",
    "syllable": [
      "beau",
      "ti",
      "ful"
    ],
    "syllableText": "3 音節 [beau · ti · ful]",
    "syllableDetail": {
      "header": "3 音節 [beau · ti · ful]",
      "vowelCore": "1. 母音核心：[ea], [u(4)], [i], [u(8)]（共 3 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/ˈbjuː.t̬ə.fəl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "法語外來拼字特例 (R010)",
    "exceptionReason": "eau 組合源自法語借詞，特例發長雙母音 /ˈbjuː/",
    "steps": {
      "syllableStep": "1. 母音核心：[ea], [u(4)], [i], [u(8)]（共 3 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：3 音節 [beau · ti · ful]",
      "patternStep": "[beau] 母音組合型態，[ti] 開音節型態，[ful] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［beau］子音封閉發短母音",
        "非重音母音弱化 (R008)：［ti］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［ful］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［beau］：法語外來拼字特例 (R010)（【不適用 (外來借詞)】）；第 2 音節［ti］：弱化開音節 (R008)（【適用】）；第 3 音節［ful］：後綴弱化規則 (R008)（【適用】）。音節合成推導 ➔ 標準音標 /ˈbjuː.t̬ə.fəl/",
      "derivations": [
        {
          "syllable": "第 1 音節［beau］",
          "rule": "法語外來拼字特例 (R010)",
          "status": "【不適用 (外來借詞)】",
          "reason": "eau 組合源自法語借詞，特例發長雙母音 /ˈbjuː/"
        },
        {
          "syllable": "第 2 音節［ti］",
          "rule": "弱化開音節 (R008)",
          "status": "【適用】",
          "reason": "非重讀音節母音 i 弱化，子音 t 閃音化發 [t̬ə]"
        },
        {
          "syllable": "第 3 音節［ful］",
          "rule": "後綴弱化規則 (R008)",
          "status": "【適用】",
          "reason": "-ful 形容詞後綴非重讀弱化發 /fəl/"
        }
      ]
    }
  },
  {
    "id": 73,
    "word": "because",
    "pos": "conj.",
    "chinese": "因為",
    "syllable": [
      "be",
      "cause"
    ],
    "syllableText": "2 音節 [be · cause]",
    "syllableDetail": {
      "header": "2 音節 [be · cause]",
      "vowelCore": "1. 母音核心：[e(2)], [au], [e(7)]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈkɑːz/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e(2)], [au], [e(7)]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · cause]",
      "patternStep": "[be] 開音節型態，[cause] 魔術 e 型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "魔術 e (R003)：［cause］字尾 e 靜音使主要母音發長音",
        "硬音 c (R007)：［c］發硬音 /k/"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［cause］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈkɑːz/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴，母音 e 弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［cause］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "au 組合於重音節常規發長母音 /ˈkɑːz/，字尾 s 濁化發 /z/"
        }
      ]
    }
  },
  {
    "id": 74,
    "word": "become",
    "pos": "v.",
    "chinese": "變成,成為",
    "syllable": [
      "be",
      "come"
    ],
    "syllableText": "2 音節 [be · come]",
    "syllableDetail": {
      "header": "2 音節 [be · come]",
      "vowelCore": "1. 母音核心：[e(2)], [o], [e(6)]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈkʌm/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": true,
    "exceptionCategory": "魔術 e 規則 (R003)",
    "exceptionReason": "o_e 結構常規發長音 /oʊ/，此處特例發短母音 /ˈkʌm/ (R010)",
    "steps": {
      "syllableStep": "1. 母音核心：[e(2)], [o], [e(6)]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · come]",
      "patternStep": "[be] 開音節型態，[come] 魔術 e 型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "魔術 e (R003)：［come］字尾 e 靜音使主要母音發長音",
        "硬音 c (R007)：［c］發硬音 /k/"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［come］：魔術 e 規則 (R003)（【不適用 (特例短母音)】）。音節合成推導 ➔ 標準音標 /bɪˈkʌm/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［come］",
          "rule": "魔術 e 規則 (R003)",
          "status": "【不適用 (特例短母音)】",
          "reason": "o_e 結構常規發長音 /oʊ/，此處特例發短母音 /ˈkʌm/ (R010)"
        }
      ]
    }
  },
  {
    "id": 75,
    "word": "bed",
    "pos": "n.",
    "chinese": "床舖",
    "syllable": [
      "bed"
    ],
    "syllableText": "單音節字 [bed]",
    "syllableDetail": {
      "header": "單音節字 [bed]",
      "vowelCore": "1. 母音核心：[e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɛd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bed]",
      "patternStep": "[bed] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bed］子音封閉發短母音"
      ],
      "ipaStep": "單音節［bed］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bɛd/",
      "derivations": [
        {
          "syllable": "單音節［bed］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 d 封閉單音節，字母 e 常規發短母音 /bɛd/"
        }
      ]
    }
  },
  {
    "id": 76,
    "word": "bedroom",
    "pos": "n.",
    "chinese": "臥室,睡房",
    "syllable": [
      "bed",
      "room"
    ],
    "syllableText": "2 音節 [bed · room]",
    "syllableDetail": {
      "header": "2 音節 [bed · room]",
      "vowelCore": "1. 母音核心：[e], [oo]（共 2 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[dr] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈbɛd.ruːm/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e], [oo]（共 2 個）\n2. 不可拆組合：[dr] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：2 音節 [bed · room]",
      "patternStep": "[bed] 閉音節型態，[room] 母音組合型態",
      "ruleStep": [
        "閉音節 (R001)：［bed］子音封閉發短母音",
        "非重音母音弱化 (R008)：［room］非重音母音弱化發輕母音 /ə/ 或 /ɪ/"
      ],
      "ipaStep": "第 1 音節［bed］：閉音節規則 (R001)（【適用】）；第 2 音節［room］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /ˈbɛd.ruːm/",
      "derivations": [
        {
          "syllable": "第 1 音節［bed］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 d 封閉重音節，母音 e 發短母音 /ˈbɛd/"
        },
        {
          "syllable": "第 2 音節［room］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "oo 組合次重讀發長母音 /ruːm/"
        }
      ]
    }
  },
  {
    "id": 77,
    "word": "bee",
    "pos": "n.",
    "chinese": "蜜蜂",
    "syllable": [
      "bee"
    ],
    "syllableText": "單音節字 [bee]",
    "syllableDetail": {
      "header": "單音節字 [bee]",
      "vowelCore": "1. 母音核心：[ee]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/biː/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ee]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bee]",
      "patternStep": "[bee] 母音組合型態",
      "ruleStep": [
        "母音組合 (R004)：［bee］發固定長母音或雙母音"
      ],
      "ipaStep": "單音節［bee］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /biː/",
      "derivations": [
        {
          "syllable": "單音節［bee］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ee 雙母音字母組合常規發長母音 /biː/"
        }
      ]
    }
  },
  {
    "id": 78,
    "word": "beef",
    "pos": "n.",
    "chinese": "牛肉",
    "syllable": [
      "beef"
    ],
    "syllableText": "單音節字 [beef]",
    "syllableDetail": {
      "header": "單音節字 [beef]",
      "vowelCore": "1. 母音核心：[ee]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/biːf/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ee]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [beef]",
      "patternStep": "[beef] 母音組合型態",
      "ruleStep": [
        "母音組合 (R004)：［beef］發固定長母音或雙母音"
      ],
      "ipaStep": "單音節［beef］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /biːf/",
      "derivations": [
        {
          "syllable": "單音節［beef］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ee 雙母音組合封閉於 f 前，常規發長母音 /biːf/"
        }
      ]
    }
  },
  {
    "id": 79,
    "word": "before",
    "pos": "prep./conj./adv.",
    "chinese": "在…之前",
    "syllable": [
      "be",
      "fore"
    ],
    "syllableText": "2 音節 [be · fore]",
    "syllableDetail": {
      "header": "2 音節 [be · fore]",
      "vowelCore": "1. 母音核心：[e(2)], [or], [e(6)]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈfɔːr/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e(2)], [or], [e(6)]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · fore]",
      "patternStep": "[be] 開音節型態，[fore] 魔術 e 型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "R 控制母音 (R005)：［fore］母音接 r 形成捲舌音"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［fore］：R 控制母音組合 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈfɔːr/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［fore］",
          "rule": "R 控制母音組合 (R005)",
          "status": "【適用】",
          "reason": "ore 結構於重音節常規發長母音 /ˈfɔːr/"
        }
      ]
    }
  },
  {
    "id": 80,
    "word": "begin",
    "pos": "v.",
    "chinese": "開始,著手",
    "syllable": [
      "be",
      "gin"
    ],
    "syllableText": "2 音節 [be · gin]",
    "syllableDetail": {
      "header": "2 音節 [be · gin]",
      "vowelCore": "1. 母音核心：[e], [i]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈɡɪn/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e], [i]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · gin]",
      "patternStep": "[be] 開音節型態，[gin] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［gin］子音封閉發短母音",
        "軟音 g (R007)：［g］在 e, i, y 前發軟音 /dʒ/"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［gin］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈɡɪn/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［gin］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "子音 n 封閉重音節，字母 i 常規發短母音 /ˈɡɪn/ (g 保留硬音)"
        }
      ]
    }
  },
  {
    "id": 81,
    "word": "behind",
    "pos": "prep./adv.",
    "chinese": "在…後面",
    "syllable": [
      "be",
      "hind"
    ],
    "syllableText": "2 音節 [be · hind]",
    "syllableDetail": {
      "header": "2 音節 [be · hind]",
      "vowelCore": "1. 母音核心：[e], [i]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈhaɪnd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e], [i]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · hind]",
      "patternStep": "[be] 開音節型態，[hind] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［hind］子音封閉發短母音"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［hind］：特殊閉音節母音長音 (R010)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈhaɪnd/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［hind］",
          "rule": "特殊閉音節母音長音 (R010)",
          "status": "【適用】",
          "reason": "-ind 特殊輔音叢封閉音節，母音 i 常規發字母長音 /ˈhaɪnd/"
        }
      ]
    }
  },
  {
    "id": 82,
    "word": "believe",
    "pos": "v.",
    "chinese": "相信,信任",
    "syllable": [
      "be",
      "lieve"
    ],
    "syllableText": "2 音節 [be · lieve]",
    "syllableDetail": {
      "header": "2 音節 [be · lieve]",
      "vowelCore": "1. 母音核心：[e(2)], [ie], [e(5)]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈliːv/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e(2)], [ie], [e(5)]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · lieve]",
      "patternStep": "[be] 開音節型態，[lieve] 魔術 e 型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "魔術 e (R003)：［lieve］字尾 e 靜音使主要母音發長音"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［lieve］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈliːv/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［lieve］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ie 雙母音組合於重音節常規發長母音 /ˈliːv/"
        }
      ]
    }
  },
  {
    "id": 83,
    "word": "bell",
    "pos": "n.",
    "chinese": "鈴,鐘",
    "syllable": [
      "bell"
    ],
    "syllableText": "單音節字 [bell]",
    "syllableDetail": {
      "header": "單音節字 [bell]",
      "vowelCore": "1. 母音核心：[e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɛl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bell]",
      "patternStep": "[bell] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bell］子音封閉發短母音"
      ],
      "ipaStep": "單音節［bell］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bɛl/",
      "derivations": [
        {
          "syllable": "單音節［bell］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "雙子音 ll 封閉單音節，字母 e 常規發短母音 /bɛl/"
        }
      ]
    }
  },
  {
    "id": 84,
    "word": "belong",
    "pos": "v.",
    "chinese": "屬於,歸屬",
    "syllable": [
      "be",
      "long"
    ],
    "syllableText": "2 音節 [be · long]",
    "syllableDetail": {
      "header": "2 音節 [be · long]",
      "vowelCore": "1. 母音核心：[e], [o]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：[ng] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/bɪˈlɑːŋ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e], [o]（共 2 個）\n2. 不可拆組合：[ng] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · long]",
      "patternStep": "[be] 開音節型態，[long] 閉音節型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "閉音節 (R001)：［long］子音封閉發短母音",
        "複合子音 (R006)：［ng］保持完整發單一子音"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［long］：鼻音子音組合 (R006)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈlɑːŋ/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［long］",
          "rule": "鼻音子音組合 (R006)",
          "status": "【適用】",
          "reason": "ng 鼻音組合封閉且為重音節，母音 o 發長短母音 /ˈlɑːŋ/"
        }
      ]
    }
  },
  {
    "id": 85,
    "word": "below",
    "pos": "adv./prep.",
    "chinese": "在…下方,在底下",
    "syllable": [
      "be",
      "low"
    ],
    "syllableText": "2 音節 [be · low]",
    "syllableDetail": {
      "header": "2 音節 [be · low]",
      "vowelCore": "1. 母音核心：[e], [ow]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈloʊ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e], [ow]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · low]",
      "patternStep": "[be] 開音節型態，[low] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［low］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［low］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈloʊ/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［low］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ow 組合於此詞常規發長雙母音 /ˈloʊ/"
        }
      ]
    }
  },
  {
    "id": 86,
    "word": "belt",
    "pos": "n./v.",
    "chinese": "腰帶,皮帶",
    "syllable": [
      "belt"
    ],
    "syllableText": "單音節字 [belt]",
    "syllableDetail": {
      "header": "單音節字 [belt]",
      "vowelCore": "1. 母音核心：[e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɛlt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [belt]",
      "patternStep": "[belt] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［belt］子音封閉發短母音"
      ],
      "ipaStep": "單音節［belt］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bɛlt/",
      "derivations": [
        {
          "syllable": "單音節［belt］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "lt 雙子音封閉單音節，字母 e 常規發短母音 /bɛlt/"
        }
      ]
    }
  },
  {
    "id": 87,
    "word": "bench",
    "pos": "n.",
    "chinese": "長椅,長凳",
    "syllable": [
      "bench"
    ],
    "syllableText": "單音節字 [bench]",
    "syllableDetail": {
      "header": "單音節字 [bench]",
      "vowelCore": "1. 母音核心：[e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[ch] 複合子音 (Consonant Digraph) 保持完整"
    },
    "ipa": "/bɛntʃ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e]（共 1 個）\n2. 不可拆組合：[ch] 複合子音 (Consonant Digraph) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bench]",
      "patternStep": "[bench] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［bench］子音封閉發短母音",
        "複合子音 (R006)：［ch］保持完整發單一子音"
      ],
      "ipaStep": "單音節［bench］：閉音節規則 (R001) + 子音組合（【適用】）。音節合成推導 ➔ 標準音標 /bɛntʃ/",
      "derivations": [
        {
          "syllable": "單音節［bench］",
          "rule": "閉音節規則 (R001) + 子音組合",
          "status": "【適用】",
          "reason": "nch 複合子音封閉單音節，字母 e 常規發短母音 /bɛntʃ/"
        }
      ]
    }
  },
  {
    "id": 88,
    "word": "beside",
    "pos": "prep.",
    "chinese": "在…旁邊",
    "syllable": [
      "be",
      "side"
    ],
    "syllableText": "2 音節 [be · side]",
    "syllableDetail": {
      "header": "2 音節 [be · side]",
      "vowelCore": "1. 母音核心：[e(2)], [i], [e(6)]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈsaɪd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e(2)], [i], [e(6)]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · side]",
      "patternStep": "[be] 開音節型態，[side] 魔術 e 型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "魔術 e (R003)：［side］字尾 e 靜音使主要母音發長音"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［side］：魔術 e 規則 (R003)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈsaɪd/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［side］",
          "rule": "魔術 e 規則 (R003)",
          "status": "【適用】",
          "reason": "i_e 結構促使前母音 i 發字母長音 /ˈsaɪd/"
        }
      ]
    }
  },
  {
    "id": 89,
    "word": "best",
    "pos": "adj./adv./v./n.",
    "chinese": "最好的,最佳的",
    "syllable": [
      "best"
    ],
    "syllableText": "單音節字 [best]",
    "syllableDetail": {
      "header": "單音節字 [best]",
      "vowelCore": "1. 母音核心：[e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[st] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/bɛst/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e]（共 1 個）\n2. 不可拆組合：[st] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [best]",
      "patternStep": "[best] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［best］子音封閉發短母音"
      ],
      "ipaStep": "單音節［best］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bɛst/",
      "derivations": [
        {
          "syllable": "單音節［best］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "st 雙子音封閉單音節，字母 e 常規發短母音 /bɛst/"
        }
      ]
    }
  },
  {
    "id": 90,
    "word": "between",
    "pos": "prep./adv.",
    "chinese": "在…兩者之間",
    "syllable": [
      "be",
      "tween"
    ],
    "syllableText": "2 音節 [be · tween]",
    "syllableDetail": {
      "header": "2 音節 [be · tween]",
      "vowelCore": "1. 母音核心：[e(2)], [ee]（共 2 個）",
      "structureRule": "3. 結構切分：VCV 優先劃歸後續音節",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪˈtwiːn/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[e(2)], [ee]（共 2 個）\n2. 不可拆組合：無\n3. 結構切分：VCV 優先劃歸後續音節\n4. 切分結果：2 音節 [be · tween]",
      "patternStep": "[be] 開音節型態，[tween] 母音組合型態",
      "ruleStep": [
        "前綴弱化 (R012)：［be］非重讀前綴母音弱化發 /ə/ 或 /ɪ/",
        "母音組合 (R004)：［tween］發固定長母音或雙母音"
      ],
      "ipaStep": "第 1 音節［be］：前綴弱化規則 (R012)（【適用】）；第 2 音節［tween］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /bɪˈtwiːn/",
      "derivations": [
        {
          "syllable": "第 1 音節［be］",
          "rule": "前綴弱化規則 (R012)",
          "status": "【適用】",
          "reason": "非重讀 be- 前綴弱化發 /bɪ/"
        },
        {
          "syllable": "第 2 音節［tween］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ee 雙母音字母組合於重音節常規發長母音 /ˈtwiːn/"
        }
      ]
    }
  },
  {
    "id": 91,
    "word": "bicycle/bike",
    "pos": "n.",
    "chinese": "腳踏車,自行車",
    "syllable": [
      "bi",
      "cy",
      "cle"
    ],
    "syllableText": "3 音節 [bi · cy · cle]",
    "syllableDetail": {
      "header": "3 音節 [bi · cy · cle]",
      "vowelCore": "1. 母音核心：[i(2)], [y], [e(7)]（共 3 個）",
      "structureRule": "3. 結構切分：VCCV 相連子音中間拆開",
      "indivisibleRule": "2. 不可拆組合：[cl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/ˈbaɪ.sə.kəl/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[i(2)], [y], [e(7)]（共 3 個）\n2. 不可拆組合：[cl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：VCCV 相連子音中間拆開\n4. 切分結果：3 音節 [bi · cy · cle]",
      "patternStep": "[bi] 開音節型態，[cy] 開音節型態，[cle] 開音節型態",
      "ruleStep": [
        "開音節 (R002)：［bi］母音結尾發長母音",
        "非重音母音弱化 (R008)：［cy］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "非重音母音弱化 (R008)：［cle］非重音母音弱化發輕母音 /ə/ 或 /ɪ/",
        "軟音 c (R007)：［c］在 e, i, y 前發軟音 /s/"
      ],
      "ipaStep": "第 1 音節［bi］：開音節規則 (R002)（【適用】）；第 2 音節［cy］：弱化開音節 (R008)（【適用】）；第 3 音節［cle］：成音節字尾規則 (R009)（【適用】）。音節合成推導 ➔ 標準音標 /ˈbaɪ.sə.kəl/",
      "derivations": [
        {
          "syllable": "第 1 音節［bi］",
          "rule": "開音節規則 (R002)",
          "status": "【適用】",
          "reason": "重讀開音節字母 i 常規發字母長音 /ˈbaɪ/"
        },
        {
          "syllable": "第 2 音節［cy］",
          "rule": "弱化開音節 (R008)",
          "status": "【適用】",
          "reason": "字母 c 遇 y 軟化發 /s/，母音 y 弱化發輕母音 /sə/"
        },
        {
          "syllable": "第 3 音節［cle］",
          "rule": "成音節字尾規則 (R009)",
          "status": "【適用】",
          "reason": "子音 + le 構成成音節發 /kəl/"
        }
      ]
    }
  },
  {
    "id": 92,
    "word": "big",
    "pos": "adj.",
    "chinese": "大的,巨大的",
    "syllable": [
      "big"
    ],
    "syllableText": "單音節字 [big]",
    "syllableDetail": {
      "header": "單音節字 [big]",
      "vowelCore": "1. 母音核心：[i]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɪɡ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[i]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [big]",
      "patternStep": "[big] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［big］子音封閉發短母音"
      ],
      "ipaStep": "單音節［big］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /bɪɡ/",
      "derivations": [
        {
          "syllable": "單音節［big］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "單一子音 g 封閉音節，字母 i 常規發短母音 /bɪɡ/"
        }
      ]
    }
  },
  {
    "id": 93,
    "word": "bird",
    "pos": "n.",
    "chinese": "鳥,禽類",
    "syllable": [
      "bird"
    ],
    "syllableText": "單音節字 [bird]",
    "syllableDetail": {
      "header": "單音節字 [bird]",
      "vowelCore": "1. 母音核心：[ir]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/bɝːd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ir]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bird]",
      "patternStep": "[bird] R 控制母音型態",
      "ruleStep": [
        "R 控制母音 (R005)：［bird］母音接 r 形成捲舌音"
      ],
      "ipaStep": "單音節［bird］：R 控制母音規則 (R005)（【適用】）。音節合成推導 ➔ 標準音標 /bɝːd/",
      "derivations": [
        {
          "syllable": "單音節［bird］",
          "rule": "R 控制母音規則 (R005)",
          "status": "【適用】",
          "reason": "ir 組合於單音節常規發捲舌長母音 /bɝːd/"
        }
      ]
    }
  },
  {
    "id": 94,
    "word": "bite",
    "pos": "n./v.",
    "chinese": "咬,啃",
    "syllable": [
      "bite"
    ],
    "syllableText": "單音節字 [bite]",
    "syllableDetail": {
      "header": "單音節字 [bite]",
      "vowelCore": "1. 母音核心：[i], [e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/baɪt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[i], [e]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [bite]",
      "patternStep": "[bite] 魔術 e 型態",
      "ruleStep": [
        "魔術 e (R003)：［bite］字尾 e 靜音使主要母音發長音"
      ],
      "ipaStep": "單音節［bite］：魔術 e 規則 (R003)（【適用】）。音節合成推導 ➔ 標準音標 /baɪt/",
      "derivations": [
        {
          "syllable": "單音節［bite］",
          "rule": "魔術 e 規則 (R003)",
          "status": "【適用】",
          "reason": "i_e 結構促使母音 i 發字母長音 /baɪt/"
        }
      ]
    }
  },
  {
    "id": 95,
    "word": "black",
    "pos": "adj./n.",
    "chinese": "黑色的",
    "syllable": [
      "black"
    ],
    "syllableText": "單音節字 [black]",
    "syllableDetail": {
      "header": "單音節字 [black]",
      "vowelCore": "1. 母音核心：[a]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[ck] 複合子音 (Consonant Digraph)，[bl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/blæk/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[a]（共 1 個）\n2. 不可拆組合：[ck] 複合子音 (Consonant Digraph)，[bl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [black]",
      "patternStep": "[black] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［black］子音封閉發短母音",
        "複合子音 (R006)：［ck］保持完整發單一子音"
      ],
      "ipaStep": "單音節［black］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /blæk/",
      "derivations": [
        {
          "syllable": "單音節［black］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "bl- 子音叢起首，-ck 封閉音節，字母 a 常規發短母音 /blæk/"
        }
      ]
    }
  },
  {
    "id": 96,
    "word": "blind",
    "pos": "adj./v.",
    "chinese": "瞎的,盲目的",
    "syllable": [
      "blind"
    ],
    "syllableText": "單音節字 [blind]",
    "syllableDetail": {
      "header": "單音節字 [blind]",
      "vowelCore": "1. 母音核心：[i]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[bl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/blaɪnd/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[i]（共 1 個）\n2. 不可拆組合：[bl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [blind]",
      "patternStep": "[blind] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［blind］子音封閉發短母音"
      ],
      "ipaStep": "單音節［blind］：特殊閉音節母音長音 (R010)（【適用】）。音節合成推導 ➔ 標準音標 /blaɪnd/",
      "derivations": [
        {
          "syllable": "單音節［blind］",
          "rule": "特殊閉音節母音長音 (R010)",
          "status": "【適用】",
          "reason": "-ind 特殊子音叢結構促使母音 i 常規發字母長音 /blaɪnd/"
        }
      ]
    }
  },
  {
    "id": 97,
    "word": "block",
    "pos": "n./v.",
    "chinese": "街區,積木,阻擋",
    "syllable": [
      "block"
    ],
    "syllableText": "單音節字 [block]",
    "syllableDetail": {
      "header": "單音節字 [block]",
      "vowelCore": "1. 母音核心：[o]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[ck] 複合子音 (Consonant Digraph)，[bl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/blɑːk/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[o]（共 1 個）\n2. 不可拆組合：[ck] 複合子音 (Consonant Digraph)，[bl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [block]",
      "patternStep": "[block] 閉音節型態",
      "ruleStep": [
        "閉音節 (R001)：［block］子音封閉發短母音",
        "複合子音 (R006)：［ck］保持完整發單一子音"
      ],
      "ipaStep": "單音節［block］：閉音節規則 (R001)（【適用】）。音節合成推導 ➔ 標準音標 /blɑːk/",
      "derivations": [
        {
          "syllable": "單音節［block］",
          "rule": "閉音節規則 (R001)",
          "status": "【適用】",
          "reason": "-ck 封閉單音節，母音 o 常規發短母音 /blɑːk/"
        }
      ]
    }
  },
  {
    "id": 98,
    "word": "blow",
    "pos": "v.",
    "chinese": "吹,吹動,颳起",
    "syllable": [
      "blow"
    ],
    "syllableText": "單音節字 [blow]",
    "syllableDetail": {
      "header": "單音節字 [blow]",
      "vowelCore": "1. 母音核心：[ow]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[bl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/bloʊ/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[ow]（共 1 個）\n2. 不可拆組合：[bl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [blow]",
      "patternStep": "[blow] 母音組合型態",
      "ruleStep": [
        "母音組合 (R004)：［blow］發固定長母音或雙母音"
      ],
      "ipaStep": "單音節［blow］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /bloʊ/",
      "derivations": [
        {
          "syllable": "單音節［blow］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ow 雙字母組合於此處發長雙母音 /bloʊ/"
        }
      ]
    }
  },
  {
    "id": 99,
    "word": "blue",
    "pos": "adj./n.",
    "chinese": "藍色的,憂鬱的",
    "syllable": [
      "blue"
    ],
    "syllableText": "單音節字 [blue]",
    "syllableDetail": {
      "header": "單音節字 [blue]",
      "vowelCore": "1. 母音核心：[u], [e]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：[bl] 子音叢 (Consonant Blend) 保持完整"
    },
    "ipa": "/bluː/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[u], [e]（共 1 個）\n2. 不可拆組合：[bl] 子音叢 (Consonant Blend) 保持完整\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [blue]",
      "patternStep": "[blue] 魔術 e 型態",
      "ruleStep": [
        "魔術 e (R003)：［blue］字尾 e 靜音使主要母音發長音"
      ],
      "ipaStep": "單音節［blue］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /bluː/",
      "derivations": [
        {
          "syllable": "單音節［blue］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "ue 字母組合常規發長母音 /bluː/"
        }
      ]
    }
  },
  {
    "id": 100,
    "word": "boat",
    "pos": "n.",
    "chinese": "小船,小艇",
    "syllable": [
      "boat"
    ],
    "syllableText": "單音節字 [boat]",
    "syllableDetail": {
      "header": "單音節字 [boat]",
      "vowelCore": "1. 母音核心：[oa]（共 1 個）",
      "structureRule": "3. 結構切分：單音節結構，不需切分",
      "indivisibleRule": "2. 不可拆組合：無"
    },
    "ipa": "/boʊt/",
    "batch": 1,
    "level": 1,
    "levelName": "第一級",
    "isException": false,
    "steps": {
      "syllableStep": "1. 母音核心：[oa]（共 1 個）\n2. 不可拆組合：無\n3. 結構切分：單音節結構，不需切分\n4. 切分結果：單音節字 [boat]",
      "patternStep": "[boat] 母音組合型態",
      "ruleStep": [
        "閉音節 (R001)：［boat］子音封閉發短母音"
      ],
      "ipaStep": "單音節［boat］：母音組合規則 (R004)（【適用】）。音節合成推導 ➔ 標準音標 /boʊt/",
      "derivations": [
        {
          "syllable": "單音節［boat］",
          "rule": "母音組合規則 (R004)",
          "status": "【適用】",
          "reason": "oa 雙母音字母組合於單音節常規發字母長音 /boʊt/"
        }
      ]
    }
  }
]
};