export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch8DerivationsMap: Record<number, DerivationItem[]> = {
  "701": [
    {
      "syllable": "第 1 音節［read］",
      "rule": "母音組合 ea (R004) → 特例短母音 (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "字母組合 ea 常規發長音 /iː/，此處特例發短母音 /ˈrɛd/"
    },
    {
      "syllable": "第 2 音節［y］",
      "rule": "字尾 y 半母音 (R002/R008)",
      "status": "【適用】",
      "reason": "字尾 y 處非重讀音節常規弱化發長母音 /i/"
    }
  ],
  "702": [
    {
      "syllable": "單音節［real］",
      "rule": "母音組合 ea (R004)",
      "status": "【適用】",
      "reason": "母音組合 ea 常規發長母音 /iː/，字尾 l 帶舌根軟顎化音，全字發 /riːl/"
    }
  ],
  "703": [
    {
      "syllable": "第 1 音節［real］",
      "rule": "母音組合 ea (R004)",
      "status": "【適用】",
      "reason": "母音組合 ea 於重讀音節發長音 /ˈriː/，其後滑向央母音 /ə/"
    },
    {
      "syllable": "第 2 音節［ly］",
      "rule": "字尾 y 半母音 (R002/R008)",
      "status": "【適用】",
      "reason": "副詞字尾 -ly 處非重讀音節常規發 /li/"
    }
  ],
  "704": [
    {
      "syllable": "第 1 音節［rea］",
      "rule": "母音組合 ea (R004)",
      "status": "【適用】",
      "reason": "重讀母音組合 ea 常規發長母音 /ˈriː/"
    },
    {
      "syllable": "第 2 音節［son］",
      "rule": "非重音弱化 (R008) + 成音節 (R009)",
      "status": "【適用】",
      "reason": "非重讀音節母音 o 弱化，s 處於母音間濁化為 /z/，與鼻音 n 結合成音節發 /zən/"
    }
  ],
  "705": [
    {
      "syllable": "單音節［red］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被子音 d 封閉，常規發短母音 /rɛd/"
    }
  ],
  "706": [
    {
      "syllable": "第 1 音節［rel］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被子音 l 封閉，重讀音節常規發短母音 /ˈrɛl/"
    },
    {
      "syllable": "第 2 音節［a］",
      "rule": "非重音弱化 (R008)",
      "status": "【適用】",
      "reason": "非重讀單一母音 a 弱化發央母音 /ə/"
    },
    {
      "syllable": "第 3 音節［tive］",
      "rule": "後綴弱化 (R008) → 魔術 e 不適用 (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "形容詞後綴 -ive 處非重音節，未發魔術 e 長音，弱化發短音 /tɪv/"
    }
  ],
  "707": [
    {
      "syllable": "第 1 音節［re］",
      "rule": "前綴弱化規則 (R012/R008)",
      "status": "【適用】",
      "reason": "非重讀前綴 re- 弱化發短音 /rɪ/"
    },
    {
      "syllable": "第 2 音節［mem］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被鼻音 m 封閉，重讀音節常規發短母音 /ˈmɛm/"
    },
    {
      "syllable": "第 3 音節［ber］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /bɚ/"
    }
  ],
  "708": [
    {
      "syllable": "第 1 音節［re］",
      "rule": "前綴弱化規則 (R012/R008)",
      "status": "【適用】",
      "reason": "非重讀前綴 re- 弱化發短音 /rɪ/"
    },
    {
      "syllable": "第 2 音節［peat］",
      "rule": "母音組合 ea (R004)",
      "status": "【適用】",
      "reason": "重讀音節母音組合 ea 常規發長母音 /ˈpiːt/"
    }
  ],
  "709": [
    {
      "syllable": "第 1 音節［re］",
      "rule": "前綴弱化規則 (R012/R008)",
      "status": "【適用】",
      "reason": "非重讀前綴 re- 弱化發短音 /rɪ/"
    },
    {
      "syllable": "第 2 音節［port］",
      "rule": "R 控制母音 or (R005)",
      "status": "【適用】",
      "reason": "主要重讀音節 or 字母組合常規發長捲舌母音 /ˈpɔːrt/"
    }
  ],
  "710": [
    {
      "syllable": "第 1 音節［re］",
      "rule": "前綴弱化規則 (R012/R008)",
      "status": "【適用】",
      "reason": "非重讀前綴 re- 弱化發短音 /rɪ/"
    },
    {
      "syllable": "第 2 音節［port］",
      "rule": "R 控制母音 or (R005)",
      "status": "【適用】",
      "reason": "重讀音節 or 字母組合常規發長捲舌母音 /ˈpɔːr/"
    },
    {
      "syllable": "第 3 音節［er］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "後綴 -er 處非重讀音節常規發捲舌音 /t̬ɚ/，t 濁化為閃音"
    }
  ],
  "711": [
    {
      "syllable": "單音節［rest］",
      "rule": "閉音節規則 (R001) + 子音叢 st (R006)",
      "status": "【適用】",
      "reason": "子音叢 st 封閉音節，單一母音 e 常規發短母音 /rɛst/"
    }
  ],
  "712": [
    {
      "syllable": "第 1 音節［res］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被子音 s 封閉，重讀音節常規發短母音 /ˈrɛs/"
    },
    {
      "syllable": "第 2 音節［tau］",
      "rule": "非重音弱化 (R008)",
      "status": "【適用】",
      "reason": "非重讀母音組合 au 弱化發央母音 /tə/"
    },
    {
      "syllable": "第 3 音節［rant］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "子音 nt 封閉次重音節，母音 a 發短母音 /rɑːnt/"
    }
  ],
  "713": [
    {
      "syllable": "單音節［rice］",
      "rule": "魔術 e 規則 (R003) + 軟音 c (R007)",
      "status": "【適用】",
      "reason": "i_e 結構字尾 e 靜音促使 i 發長雙母音 /aɪ/，c 在 e 前軟音化為 /s/，全字發 /raɪs/"
    }
  ],
  "714": [
    {
      "syllable": "單音節［rich］",
      "rule": "閉音節規則 (R001) + 複合子音 ch (R006)",
      "status": "【適用】",
      "reason": "複合子音 ch 封閉音節，單一母音 i 常規發短母音 /rɪ/，ch 發清塞擦音 /tʃ/，全字發 /rɪtʃ/"
    }
  ],
  "715": [
    {
      "syllable": "單音節［ride］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "i_e 結構字尾 e 靜音促使母音 i 常規發字母本名長雙母音 /raɪd/"
    }
  ],
  "716": [
    {
      "syllable": "單音節［right］",
      "rule": "母音組合 igh (R004) + 靜音 gh (R010)",
      "status": "【適用】",
      "reason": "字母組合 igh 常規發長雙母音 /aɪ/，gh 歷史演變保持靜音，全字發 /raɪt/"
    }
  ],
  "717": [
    {
      "syllable": "單音節［ring］",
      "rule": "閉音節規則 (R001) + 複合子音 ng (R006)",
      "status": "【適用】",
      "reason": "軟顎鼻音 ng 封閉音節，單一母音 i 常規發短母音 /rɪŋ/"
    }
  ],
  "718": [
    {
      "syllable": "單音節［rise］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "i_e 結構字尾 e 靜音使母音 i 發長音 /aɪ/，中間子音 s 濁化為 /z/，全字發 /raɪz/"
    }
  ],
  "719": [
    {
      "syllable": "第 1 音節［riv］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 i 被子音 v 封閉，重讀音節常規發短母音 /ˈrɪv/"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /ɚ/"
    }
  ],
  "720": [
    {
      "syllable": "單音節［road］",
      "rule": "母音組合 oa (R004)",
      "status": "【適用】",
      "reason": "oa 字母組合常規發字母本名長雙母音 /oʊ/，子音 d 封閉發 /roʊd/"
    }
  ],
  "721": [
    {
      "syllable": "第 1 音節［ro］",
      "rule": "開音節規則 (R002)",
      "status": "【適用】",
      "reason": "重讀開音節結尾無子音封閉，單一母音 o 常規發長雙母音 /ˈroʊ/"
    },
    {
      "syllable": "第 2 音節［bot］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "次重讀閉音節單一母音 o 被子音 t 封閉發短母音 /bɑːt/"
    }
  ],
  "722": [
    {
      "syllable": "單音節［rock］",
      "rule": "閉音節規則 (R001) + 複合子音 ck (R006)",
      "status": "【適用】",
      "reason": "複合子音 ck 封閉音節，單一母音 o 常規發短母音 /rɑːk/"
    }
  ],
  "723": [
    {
      "syllable": "單音節［roll］",
      "rule": "-oll 特例長母音字族 (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "單一母音 o 在 -ll 前依古英語長化特例常規發長雙母音 /roʊl/，而非短母音"
    }
  ],
  "724": [
    {
      "syllable": "單音節［room］",
      "rule": "雙母音組合 oo (R004)",
      "status": "【適用】",
      "reason": "字母組合 oo 常規發長圓唇母音 /uː/，鼻子音 m 封閉發 /ruːm/"
    }
  ],
  "725": [
    {
      "syllable": "單音節［root］",
      "rule": "雙母音組合 oo (R004)",
      "status": "【適用】",
      "reason": "字母組合 oo 常規發長圓唇母音 /uː/，子音 t 封閉發 /ruːt/"
    }
  ],
  "726": [
    {
      "syllable": "單音節［rope］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "o_e 結構字尾 e 靜音促使母音 o 常規發長雙母音 /roʊp/"
    }
  ],
  "727": [
    {
      "syllable": "單音節［rose］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "o_e 結構字尾 e 靜音使 o 發長雙母音 /roʊ/，中間 s 濁化為 /z/，發 /roʊz/"
    }
  ],
  "728": [
    {
      "syllable": "單音節［round］",
      "rule": "雙母音組合 ou (R004)",
      "status": "【適用】",
      "reason": "字母組合 ou 常規發雙母音 /aʊ/，子音 nd 封閉發 /raʊnd/"
    }
  ],
  "729": [
    {
      "syllable": "單音節［row］",
      "rule": "母音組合 ow (R004)",
      "status": "【適用】",
      "reason": "ow 字母組合於詞尾常規發長雙母音 /roʊ/"
    }
  ],
  "730": [
    {
      "syllable": "單音節［rule］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "u_e 結構字尾 e 靜音，母音 u 在流音 r 後常規發長母音 /ruːl/"
    }
  ],
  "731": [
    {
      "syllable": "第 1 音節［rul］",
      "rule": "開音節規則 (R002)",
      "status": "【適用】",
      "reason": "重讀開音節母音 u 在 r 後常規發長母音 /ˈruː/"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "後綴 -er 處非重讀音節常規發弱化捲舌音 /lɚ/"
    }
  ],
  "732": [
    {
      "syllable": "單音節［run］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 u 被鼻子音 n 封閉，常規發短母音 /rʌn/"
    }
  ],
  "733": [
    {
      "syllable": "單音節［sad］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 a 被子音 d 封閉，常規發短蝴蝶母音 /sæd/"
    }
  ],
  "734": [
    {
      "syllable": "單音節［safe］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /seɪf/"
    }
  ],
  "735": [
    {
      "syllable": "第 1 音節［sal］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 a 被子音 l 封閉，重讀音節常規發短母音 /ˈsæl/"
    },
    {
      "syllable": "第 2 音節［ad］",
      "rule": "非重音弱化 (R008)",
      "status": "【適用】",
      "reason": "非重讀音節單一母音 a 弱化發央母音 /əd/"
    }
  ],
  "736": [
    {
      "syllable": "單音節［sale］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /seɪl/"
    }
  ],
  "737": [
    {
      "syllable": "單音節［salt］",
      "rule": "流音 l 牽引母音音變 (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "母音 a 在 -lt 前受舌側流音 l 牽引圓唇化，特例發長母音 /sɑːlt/ 或 /sɔːlt/"
    }
  ],
  "738": [
    {
      "syllable": "單音節［same］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /seɪm/"
    }
  ],
  "739": [
    {
      "syllable": "單音節［save］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /seɪv/"
    }
  ],
  "740": [
    {
      "syllable": "單音節［say］",
      "rule": "母音組合 ay (R004)",
      "status": "【適用】",
      "reason": "ay 字母組合於詞尾常規發長雙母音 /seɪ/"
    }
  ],
  "741": [
    {
      "syllable": "單音節［school］",
      "rule": "希臘字根 ch 發硬音 (R010) + 雙母音 oo (R004)",
      "status": "【不適用 (例外轉移)】",
      "reason": "複合子音 ch 承襲希臘字源特例發硬音 /k/，oo 常規發長母音 /uː/，全字發 /skuːl/"
    }
  ],
  "742": [
    {
      "syllable": "第 1 音節［sci］",
      "rule": "開音節規則 (R002) + 軟音 c (R007)",
      "status": "【適用】",
      "reason": "c 在 i 前軟音化與 s 融合發單一 /s/，開音節 i 發長雙母音 /ˈsaɪ/"
    },
    {
      "syllable": "第 2 音節［ence］",
      "rule": "非重音弱化 (R008) + 軟音 c (R007)",
      "status": "【適用】",
      "reason": "非重讀後綴 -ence 母音弱化發 /əns/，c 在 e 前軟音化為 /s/"
    }
  ],
  "743": [
    {
      "syllable": "單音節［sea］",
      "rule": "母音組合 ea (R004)",
      "status": "【適用】",
      "reason": "母音組合 ea 於詞尾常規發長母音 /siː/"
    }
  ],
  "744": [
    {
      "syllable": "第 1 音節［sea］",
      "rule": "母音組合 ea (R004)",
      "status": "【適用】",
      "reason": "母音組合 ea 於重讀音節常規發長母音 /ˈsiː/"
    },
    {
      "syllable": "第 2 音節［son］",
      "rule": "非重音弱化 (R008) + 成音節 (R009)",
      "status": "【適用】",
      "reason": "非重讀音節母音 o 弱化，s 濁化發 /z/，與鼻音 n 結合成音節發 /zən/"
    }
  ],
  "745": [
    {
      "syllable": "單音節［seat］",
      "rule": "母音組合 ea (R004)",
      "status": "【適用】",
      "reason": "母音組合 ea 常規發長母音 /iː/，子音 t 封閉發 /siːt/"
    }
  ],
  "746": [
    {
      "syllable": "第 1 音節［sec］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被子音 c 封閉，重讀音節常規發短母音 /ˈsɛk/"
    },
    {
      "syllable": "第 2 音節［ond］",
      "rule": "非重音弱化 (R008)",
      "status": "【適用】",
      "reason": "非重讀音節單一母音 o 弱化發央母音 /ənd/"
    }
  ],
  "747": [
    {
      "syllable": "第 1 音節［sec］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被子音 c 封閉，重讀音節常規發短母音 /ˈsɛk/"
    },
    {
      "syllable": "第 2 音節［re］",
      "rule": "非重音弱化 (R008)",
      "status": "【適用】",
      "reason": "非重讀音節母音 e 弱化發央母音 /rə/"
    },
    {
      "syllable": "第 3 音節［tar］",
      "rule": "次重讀 R 控制母音 (R005)",
      "status": "【適用】",
      "reason": "次重讀音節 ar 受美式發音影響發次重音捲舌音 /tɛr/"
    },
    {
      "syllable": "第 4 音節［y］",
      "rule": "字尾 y 半母音 (R002/R008)",
      "status": "【適用】",
      "reason": "字尾 y 處非重讀音節常規發長母音 /i/"
    }
  ],
  "748": [
    {
      "syllable": "單音節［see］",
      "rule": "母音組合 ee (R004)",
      "status": "【適用】",
      "reason": "ee 字母組合常規發長母音 /siː/"
    }
  ],
  "749": [
    {
      "syllable": "單音節［seed］",
      "rule": "母音組合 ee (R004)",
      "status": "【適用】",
      "reason": "ee 字母組合常規發長母音 /iː/，子音 d 封閉發 /siːd/"
    }
  ],
  "750": [
    {
      "syllable": "單音節［sell］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "雙子音 ll 封閉音節，單一母音 e 常規發短母音 /sɛl/"
    }
  ],
  "751": [
    {
      "syllable": "單音節［send］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "子音叢 nd 封閉音節，單一母音 e 常規發短母音 /sɛnd/"
    }
  ],
  "752": [
    {
      "syllable": "第 1 音節［sen］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被鼻子音 n 封閉，重讀音節常規發短母音 /ˈsɛn/"
    },
    {
      "syllable": "第 2 音節［tence］",
      "rule": "非重音弱化 (R008) + 軟音 c (R007)",
      "status": "【適用】",
      "reason": "非重讀後綴 -ence 母音弱化發 /təns/，c 在 e 前軟音化發 /s/"
    }
  ],
  "753": [
    {
      "syllable": "第 1 音節［se］",
      "rule": "開音節規則 (R002) → R 音牽引 (R005)",
      "status": "【適用】",
      "reason": "重讀母音 e 在 r 前牽引發長音滑音 /ˈsɪr/"
    },
    {
      "syllable": "第 2 音節［ri］",
      "rule": "非重讀開音節 (R002/R008)",
      "status": "【適用】",
      "reason": "非重讀音節單一母音 i 發短長母音 /i/"
    },
    {
      "syllable": "第 3 音節［ous］",
      "rule": "非重音弱化 (R008)",
      "status": "【適用】",
      "reason": "後綴 -ous 處非重音節，母音組合弱化發央母音 /əs/"
    }
  ],
  "754": [
    {
      "syllable": "第 1 音節［ser］",
      "rule": "R 控制母音 er (R005)",
      "status": "【適用】",
      "reason": "er 字母組合於重讀音節常規發捲舌母音 /ˈsɜːr/"
    },
    {
      "syllable": "第 2 音節［vice］",
      "rule": "魔術 e 弱化 (R008) + 軟音 c (R007)",
      "status": "【不適用 (例外轉移)】",
      "reason": "處非重音節，i_e 未發長母音弱化發短音 /vɪs/，c 在 e 前軟音化為 /s/"
    }
  ],
  "755": [
    {
      "syllable": "單音節［set］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被子音 t 封閉，常規發短母音 /sɛt/"
    }
  ],
  "756": [
    {
      "syllable": "第 1 音節［sev］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 e 被子音 v 封閉，重讀音節常規發短母音 /ˈsɛv/"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "非重讀音節 -er 常規發弱化捲舌音 /ɚ/"
    },
    {
      "syllable": "第 3 音節［al］",
      "rule": "非重音弱化 (R008) + 成音節 (R009)",
      "status": "【適用】",
      "reason": "字尾 -al 弱化發成音節音 /əl/"
    }
  ],
  "757": [
    {
      "syllable": "單音節［shake］",
      "rule": "複合子音 sh (R006) + 魔術 e (R003)",
      "status": "【適用】",
      "reason": "複合子音 sh 發清擦音 /ʃ/，a_e 結構字尾 e 靜音使 a 發長雙母音 /ʃeɪk/"
    }
  ],
  "758": [
    {
      "syllable": "單音節［shall］",
      "rule": "複合子音 sh (R006) + 閉音節 (R001)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，雙子音 ll 封閉音節使 a 發短蝴蝶母音 /ʃæl/"
    }
  ],
  "759": [
    {
      "syllable": "單音節［shape］",
      "rule": "複合子音 sh (R006) + 魔術 e (R003)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，a_e 結構字尾 e 靜音促使 a 發長雙母音 /ʃeɪp/"
    }
  ],
  "760": [
    {
      "syllable": "單音節［share］",
      "rule": "複合子音 sh (R006) + R 控制魔術 e (R005)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，are 結構受 r 捲舌控制常規發 /ʃɛr/"
    }
  ],
  "761": [
    {
      "syllable": "單音節［sharp］",
      "rule": "複合子音 sh (R006) + R 控制母音 ar (R005)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，ar 組合受捲舌控制常規發後開母音 /ʃɑːrp/"
    }
  ],
  "762": [
    {
      "syllable": "單音節［she］",
      "rule": "複合子音 sh (R006) + 開音節 (R002)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，單一母音 e 結尾無子音封閉，常規發長母音 /ʃiː/"
    }
  ],
  "763": [
    {
      "syllable": "單音節［sheep］",
      "rule": "複合子音 sh (R006) + 母音組合 ee (R004)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，ee 組合常規發長母音 /iː/，子音 p 封閉發 /ʃiːp/"
    }
  ],
  "764": [
    {
      "syllable": "單音節［ship］",
      "rule": "複合子音 sh (R006) + 閉音節 (R001)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，子音 p 封閉單一母音 i 常規發短母音 /ʃɪp/"
    }
  ],
  "765": [
    {
      "syllable": "單音節［shirt］",
      "rule": "複合子音 sh (R006) + R 控制母音 ir (R005)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，ir 組合受捲舌控制常規發捲舌長母音 /ʃɝːt/"
    }
  ],
  "766": [
    {
      "syllable": "單音節［shoe(s)］",
      "rule": "複合子音 sh (R006) + 特例母音轉移 (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "複合子音 sh 發 /ʃ/，oe 組合未發常規 /oʊ/，受古英語歷史音變特例發長圓唇音 /ʃuː/"
    }
  ],
  "767": [
    {
      "syllable": "單音節［shop］",
      "rule": "複合子音 sh (R006) + 閉音節 (R001)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，子音 p 封閉單一母音 o 常規發短母音 /ʃɑːp/"
    }
  ],
  "768": [
    {
      "syllable": "單音節［short］",
      "rule": "複合子音 sh (R006) + R 控制母音 or (R005)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，or 組合受捲舌控制常規發後圓唇長母音 /ʃɔːrt/"
    }
  ],
  "769": [
    {
      "syllable": "單音節［shorts］",
      "rule": "複合子音 sh (R006) + R 控制母音 or (R005)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，or 組合常規發長母音 /ʃɔːrt/，尾音 s 發清音 /s/"
    }
  ],
  "770": [
    {
      "syllable": "第 1 音節［shoul］",
      "rule": "複合子音 sh (R006) + ou 特例音變 (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "複合子音 sh 發 /ʃ/，ou 字母組合在此特例發長雙母音 /ˈʃoʊl/ 而非 /aʊ/"
    },
    {
      "syllable": "第 2 音節［der］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /dɚ/"
    }
  ],
  "771": [
    {
      "syllable": "單音節［shout］",
      "rule": "複合子音 sh (R006) + 雙母音組合 ou (R004)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，ou 字母組合常規發雙母音 /aʊ/，子音 t 封閉發 /ʃaʊt/"
    }
  ],
  "772": [
    {
      "syllable": "單音節［show］",
      "rule": "複合子音 sh (R006) + 母音組合 ow (R004)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，ow 字母組合於詞尾常規發長雙母音 /ʃoʊ/"
    }
  ],
  "773": [
    {
      "syllable": "第 1 音節［show］",
      "rule": "複合子音 sh (R006) + 雙母音組合 ow (R004)",
      "status": "【適用】",
      "reason": "複合子音 sh 發 /ʃ/，ow 組合常規發雙母音 /ˈʃaʊ/"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /ɚ/"
    }
  ],
  "774": [
    {
      "syllable": "單音節［sick］",
      "rule": "閉音節規則 (R001) + 複合子音 ck (R006)",
      "status": "【適用】",
      "reason": "複合子音 ck 封閉音節，單一母音 i 常規發短母音 /sɪk/"
    }
  ],
  "775": [
    {
      "syllable": "單音節［side］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "i_e 結構字尾 e 靜音促使母音 i 常規發長雙母音 /saɪd/"
    }
  ],
  "776": [
    {
      "syllable": "單音節［sight］",
      "rule": "母音組合 igh (R004) + 靜音 gh (R010)",
      "status": "【適用】",
      "reason": "字母組合 igh 常規發長雙母音 /aɪ/，gh 保持靜音，全字發 /saɪt/"
    }
  ],
  "777": [
    {
      "syllable": "單音節［sign］",
      "rule": "-ign 字族長母音 (R004) + 靜音 g (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "字尾 -ign 結構中 g 靜音，促使單一母音 i 特例發長雙母音 /saɪn/"
    }
  ],
  "778": [
    {
      "syllable": "第 1 音節［sim］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 i 被鼻音 m 封閉，重讀音節常規發短母音 /ˈsɪm/"
    },
    {
      "syllable": "第 2 音節［ple］",
      "rule": "成音節字尾規則 (R009)",
      "status": "【適用】",
      "reason": "子音 + le 於詞尾構成成音節，不發音 e 弱化發 /pəl/"
    }
  ],
  "779": [
    {
      "syllable": "單音節［since］",
      "rule": "魔術 e 弱化短音 (R010) + 軟音 c (R007)",
      "status": "【不適用 (例外轉移)】",
      "reason": "i_e 結構未發長音，特例發短母音 /sɪn/，c 在 e 前軟音化發 /s/，字尾 e 靜音"
    }
  ],
  "780": [
    {
      "syllable": "單音節［sing］",
      "rule": "閉音節規則 (R001) + 複合子音 ng (R006)",
      "status": "【適用】",
      "reason": "軟顎鼻音 ng 封閉音節，單一母音 i 常規發短母音 /sɪŋ/"
    }
  ],
  "781": [
    {
      "syllable": "第 1 音節［sing］",
      "rule": "閉音節規則 (R001) + 複合子音 ng (R006)",
      "status": "【適用】",
      "reason": "軟顎鼻音 ng 封閉重讀音節，單一母音 i 常規發短母音 /ˈsɪŋ/"
    },
    {
      "syllable": "第 2 音節［er］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "後綴 -er 處非重讀音節常規發弱化捲舌音 /ɚ/"
    }
  ],
  "782": [
    {
      "syllable": "單音節［sir］",
      "rule": "R 控制母音 ir (R005)",
      "status": "【適用】",
      "reason": "ir 字母組合受捲舌控制常規發長捲舌母音 /sɝː/"
    }
  ],
  "783": [
    {
      "syllable": "第 1 音節［sis］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 i 被子音 s 封閉，重讀音節常規發短母音 /ˈsɪs/"
    },
    {
      "syllable": "第 2 音節［ter］",
      "rule": "R 控制母音 er (R005/R008)",
      "status": "【適用】",
      "reason": "字尾 -er 處非重讀音節常規發弱化捲舌音 /tɚ/"
    }
  ],
  "784": [
    {
      "syllable": "單音節［sit］",
      "rule": "閉音節規則 (R001)",
      "status": "【適用】",
      "reason": "單一母音 i 被子音 t 封閉，常規發短母音 /sɪt/"
    }
  ],
  "785": [
    {
      "syllable": "單音節［size］",
      "rule": "魔術 e 規則 (R003)",
      "status": "【適用】",
      "reason": "i_e 結構字尾 e 靜音促使母音 i 常規發長雙母音 /saɪz/"
    }
  ],
  "786": [
    {
      "syllable": "單音節［skirt］",
      "rule": "子音叢 sk (R006) + R 控制母音 ir (R005)",
      "status": "【適用】",
      "reason": "子音叢 sk 發 /sk/，ir 字母組合受捲舌控制常規發長捲舌母音 /skɝːt/"
    }
  ],
  "787": [
    {
      "syllable": "單音節［sky］",
      "rule": "子音叢 sk (R006) + 開音節 y (R002)",
      "status": "【適用】",
      "reason": "子音叢 sk 發 /sk/，單音節詞尾 y 充任開音節母音常規發長雙母音 /skaɪ/"
    }
  ],
  "788": [
    {
      "syllable": "單音節［sleep］",
      "rule": "子音叢 sl (R006) + 母音組合 ee (R004)",
      "status": "【適用】",
      "reason": "子音叢 sl 發 /sl/，ee 組合常規發長母音 /iː/，子音 p 封閉發 /sliːp/"
    }
  ],
  "789": [
    {
      "syllable": "單音節［slim］",
      "rule": "子音叢 sl (R006) + 閉音節 (R001)",
      "status": "【適用】",
      "reason": "子音叢 sl 發 /sl/，子音 m 封閉單一母音 i 常規發短母音 /slɪm/"
    }
  ],
  "790": [
    {
      "syllable": "單音節［slow］",
      "rule": "子音叢 sl (R006) + 母音組合 ow (R004)",
      "status": "【適用】",
      "reason": "子音叢 sl 發 /sl/，ow 字母組合於詞尾常規發長雙母音 /sloʊ/"
    }
  ],
  "791": [
    {
      "syllable": "單音節［small］",
      "rule": "子音叢 sm (R006) + 特例音變 (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "子音叢 sm 發 /sm/，單一母音 a 在 -ll 前特例受流音圓唇化發後長母音 /smɑːl/"
    }
  ],
  "792": [
    {
      "syllable": "單音節［smart］",
      "rule": "子音叢 sm (R006) + R 控制母音 ar (R005)",
      "status": "【適用】",
      "reason": "子音叢 sm 發 /sm/，ar 組合受捲舌控制常規發後開母音 /smɑːrt/"
    }
  ],
  "793": [
    {
      "syllable": "單音節［smell］",
      "rule": "子音叢 sm (R006) + 閉音節 (R001)",
      "status": "【適用】",
      "reason": "子音叢 sm 發 /sm/，雙子音 ll 封閉音節使單一母音 e 常規發短母音 /smɛl/"
    }
  ],
  "794": [
    {
      "syllable": "單音節［smile］",
      "rule": "子音叢 sm (R006) + 魔術 e (R003)",
      "status": "【適用】",
      "reason": "子音叢 sm 發 /sm/，i_e 結構字尾 e 靜音促使母音 i 常規發長雙母音 /smaɪl/"
    }
  ],
  "795": [
    {
      "syllable": "單音節［smoke］",
      "rule": "子音叢 sm (R006) + 魔術 e (R003)",
      "status": "【適用】",
      "reason": "子音叢 sm 發 /sm/，o_e 結構字尾 e 靜音促使母音 o 常規發長雙母音 /smoʊk/"
    }
  ],
  "796": [
    {
      "syllable": "單音節［snake］",
      "rule": "子音叢 sn (R006) + 魔術 e (R003)",
      "status": "【適用】",
      "reason": "子音叢 sn 發 /sn/，a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /sneɪk/"
    }
  ],
  "797": [
    {
      "syllable": "單音節［snow］",
      "rule": "子音叢 sn (R006) + 母音組合 ow (R004)",
      "status": "【適用】",
      "reason": "子音叢 sn 發 /sn/，ow 字母組合於詞尾常規發長雙母音 /snoʊ/"
    }
  ],
  "798": [
    {
      "syllable": "單音節［so］",
      "rule": "開音節規則 (R002)",
      "status": "【適用】",
      "reason": "單音節結尾無子音封閉，單一母音 o 常規發字母本名長雙母音 /soʊ/"
    }
  ],
  "799": [
    {
      "syllable": "第 1 音節［so］",
      "rule": "開音節規則 (R002)",
      "status": "【適用】",
      "reason": "重讀開音節單一母音 o 結尾無子音封閉，常規發長雙母音 /ˈsoʊ/"
    },
    {
      "syllable": "第 2 音節［fa］",
      "rule": "非重音弱化 (R008)",
      "status": "【適用】",
      "reason": "非重讀音節單一母音 a 弱化發央母音 /fə/"
    }
  ],
  "800": [
    {
      "syllable": "第 1 音節［sol］",
      "rule": "-ol 特例長音化 (R010)",
      "status": "【不適用 (例外轉移)】",
      "reason": "單一母音 o 在 l 前受古英語演變特例發長雙母音 /ˈsoʊl/"
    },
    {
      "syllable": "第 2 音節［dier］",
      "rule": "顎化音變 (R010) + R 控制母音 (R005)",
      "status": "【不適用 (例外轉移)】",
      "reason": "子音 d 在 ie 前顎化與 r 結合發塞擦捲舌音 /dʒɚ/"
    }
  ]
};
