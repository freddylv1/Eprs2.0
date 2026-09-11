// EPRS Dataset Version: v1.6.0-rc1 (Batch 11 Candidate) | Generated: 2026-09-08
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

export const seniorBatch11Raw: SeniorWordRecord[] = [
  {
    "id": 1001,
    "word": "zero",
    "pos": "n.",
    "chinese": "零",
    "syllable": [
      "ze",
      "ro"
    ],
    "ipa": "/ˈzɪr.oʊ/",
    "level": 1,
    "levelName": "第一級",
    "derivations": [
      {
        "syllable": "第 1 音節［ze］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 2 音節［ro］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1002,
    "word": "zoo",
    "pos": "n.",
    "chinese": "動物園",
    "syllable": [
      "zoo"
    ],
    "ipa": "/zuː/",
    "level": 1,
    "levelName": "第一級",
    "derivations": [
      {
        "syllable": "第 1 音節［zoo］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1003,
    "word": "absence",
    "pos": "n.",
    "chinese": "缺席, 缺少",
    "syllable": [
      "ab",
      "sence"
    ],
    "ipa": "/ˈæb.səns/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ab］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［sence］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1004,
    "word": "absent",
    "pos": "adj./v.",
    "chinese": "缺席的; 缺席",
    "syllable": [
      "ab",
      "sent"
    ],
    "ipa": "/ˈæb.sənt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ab］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［sent］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1005,
    "word": "accept",
    "pos": "v.",
    "chinese": "接受, 認可",
    "syllable": [
      "ac",
      "cept"
    ],
    "ipa": "/əkˈsept/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ac］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ac］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［cept］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1006,
    "word": "accident",
    "pos": "n.",
    "chinese": "意外, 事故",
    "syllable": [
      "ac",
      "ci",
      "dent"
    ],
    "ipa": "/ˈæk.sə.dənt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ac］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ci］",
        "rule": "開音節 (R002)",
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
    "id": 1007,
    "word": "account",
    "pos": "n./v.",
    "chinese": "帳戶; 說明, 視為",
    "syllable": [
      "ac",
      "count"
    ],
    "ipa": "/əˈkaʊnt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ac］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ac］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［count］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1008,
    "word": "active",
    "pos": "adj.",
    "chinese": "活躍的, 積極的",
    "syllable": [
      "ac",
      "tive"
    ],
    "ipa": "/ˈæk.tɪv/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ac］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［tive］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1009,
    "word": "activity",
    "pos": "n.",
    "chinese": "活動",
    "syllable": [
      "ac",
      "tiv",
      "i",
      "ty"
    ],
    "ipa": "/ækˈtɪv.ə.t̬i/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ac］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ac］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［tiv］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 3 音節［i］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 4 音節［ty］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1010,
    "word": "actual",
    "pos": "adj.",
    "chinese": "實際的, 真實的",
    "syllable": [
      "ac",
      "tu",
      "al"
    ],
    "ipa": "/ˈæk.tʃu.əl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ac］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［tu］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［al］",
        "rule": "前綴與後綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀衍生後綴［al］弱化發音"
      }
    ]
  },
  {
    "id": 1011,
    "word": "addition",
    "pos": "n.",
    "chinese": "增加, 加法",
    "syllable": [
      "ad",
      "di",
      "tion"
    ],
    "ipa": "/əˈdɪʃ.ən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ad］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ad］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［di］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 3 音節［tion］",
        "rule": "前綴與後綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀衍生後綴［tion］弱化發音"
      }
    ]
  },
  {
    "id": 1012,
    "word": "address",
    "pos": "v./n.",
    "chinese": "地址; 致詞, 處理",
    "syllable": [
      "ad",
      "dress"
    ],
    "ipa": "/ˈæd.res/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ad］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［dress］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1013,
    "word": "admit",
    "pos": "v.",
    "chinese": "承認, 准許進入",
    "syllable": [
      "ad",
      "mit"
    ],
    "ipa": "/ədˈmɪt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ad］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ad］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［mit］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1014,
    "word": "adult",
    "pos": "n./adj.",
    "chinese": "成年人; 成年的",
    "syllable": [
      "a",
      "dult"
    ],
    "ipa": "/ˈæd.ʌlt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 2 音節［dult］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1015,
    "word": "advance",
    "pos": "n./v.",
    "chinese": "前進, 晉升; 預先",
    "syllable": [
      "ad",
      "vance"
    ],
    "ipa": "/ədˈvæns/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ad］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ad］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［vance］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1016,
    "word": "advice",
    "pos": "n.",
    "chinese": "勸告, 忠告, 建議",
    "syllable": [
      "ad",
      "vice"
    ],
    "ipa": "/ədˈvaɪs/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ad］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ad］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［vice］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1017,
    "word": "affair",
    "pos": "n.",
    "chinese": "事件, 事務",
    "syllable": [
      "af",
      "fair"
    ],
    "ipa": "/əˈfer/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［af］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［af］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［fair］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1018,
    "word": "affect",
    "pos": "v.",
    "chinese": "影響, 感動",
    "syllable": [
      "af",
      "fect"
    ],
    "ipa": "/əˈfekt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［af］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［af］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［fect］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1019,
    "word": "against",
    "pos": "prep.",
    "chinese": "反對, 依靠, 防備",
    "syllable": [
      "a",
      "gainst"
    ],
    "ipa": "/əˈɡenst/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［gainst］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1020,
    "word": "ahead",
    "pos": "adv.",
    "chinese": "在前面, 事先",
    "syllable": [
      "a",
      "head"
    ],
    "ipa": "/əˈhed/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［head］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1021,
    "word": "aid",
    "pos": "n./v.",
    "chinese": "幫助, 援助",
    "syllable": [
      "aid"
    ],
    "ipa": "/eɪd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［aid］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1022,
    "word": "aim",
    "pos": "n./v.",
    "chinese": "目標; 瞄準, 致力",
    "syllable": [
      "aim"
    ],
    "ipa": "/eɪm/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［aim］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1023,
    "word": "aircraft",
    "pos": "n.",
    "chinese": "航空器, 飛機",
    "syllable": [
      "air",
      "craft"
    ],
    "ipa": "/ˈer.kræft/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［air］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［craft］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1024,
    "word": "alarm",
    "pos": "n./v.",
    "chinese": "警報; 使驚慌",
    "syllable": [
      "a",
      "larm"
    ],
    "ipa": "/əˈlɑːrm/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［larm］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1025,
    "word": "album",
    "pos": "n.",
    "chinese": "相簿, 音樂專輯",
    "syllable": [
      "al",
      "bum"
    ],
    "ipa": "/ˈæl.bəm/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［al］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［bum］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1026,
    "word": "alike",
    "pos": "adv./adj.",
    "chinese": "相似地; 相似的",
    "syllable": [
      "a",
      "like"
    ],
    "ipa": "/əˈlaɪk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［like］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1027,
    "word": "alive",
    "pos": "adj.",
    "chinese": "活著的, 有生氣的",
    "syllable": [
      "a",
      "live"
    ],
    "ipa": "/əˈlaɪv/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［live］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1028,
    "word": "alone",
    "pos": "adv./adj.",
    "chinese": "獨自的; 單獨地",
    "syllable": [
      "a",
      "lone"
    ],
    "ipa": "/əˈloʊn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［lone］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1029,
    "word": "aloud",
    "pos": "adv.",
    "chinese": "大聲地",
    "syllable": [
      "a",
      "loud"
    ],
    "ipa": "/əˈlaʊd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［loud］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1030,
    "word": "altogether",
    "pos": "adv.",
    "chinese": "完全, 總共",
    "syllable": [
      "al",
      "to",
      "geth",
      "er"
    ],
    "ipa": "/ˌɔːl.təˈɡeð.ɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［al］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［al］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［to］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［geth］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 4 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1031,
    "word": "among",
    "pos": "prep.",
    "chinese": "在...之中",
    "syllable": [
      "a",
      "mong"
    ],
    "ipa": "/əˈmʌŋ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［mong］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1032,
    "word": "amount",
    "pos": "n./v.",
    "chinese": "數量; 總計達",
    "syllable": [
      "a",
      "mount"
    ],
    "ipa": "/əˈmaʊnt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［mount］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1033,
    "word": "ancient",
    "pos": "adj.",
    "chinese": "古代的, 古老的",
    "syllable": [
      "an",
      "cient"
    ],
    "ipa": "/ˈeɪn.ʃənt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［an］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［cient］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1034,
    "word": "anger",
    "pos": "n.",
    "chinese": "憤怒, 生氣",
    "syllable": [
      "an",
      "ger"
    ],
    "ipa": "/ˈæŋ.ɡɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［an］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ger］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1035,
    "word": "angle",
    "pos": "n.",
    "chinese": "角度, 角落",
    "syllable": [
      "an",
      "gle"
    ],
    "ipa": "/ˈæŋ.ɡəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［an］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［gle］",
        "rule": "成音節字尾 (R009)",
        "status": "【適用】",
        "reason": "成音節字尾發 /əl/ 或 /l̩/"
      }
    ]
  },
  {
    "id": 1036,
    "word": "ankle",
    "pos": "n.",
    "chinese": "腳踝",
    "syllable": [
      "an",
      "kle"
    ],
    "ipa": "/ˈæŋ.kəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［an］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［kle］",
        "rule": "成音節字尾 (R009)",
        "status": "【適用】",
        "reason": "成音節字尾發 /əl/ 或 /l̩/"
      }
    ]
  },
  {
    "id": 1037,
    "word": "anytime",
    "pos": "adv.",
    "chinese": "在任何時候",
    "syllable": [
      "an",
      "y",
      "time"
    ],
    "ipa": "/ˈen.i.taɪm/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［an］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［y］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［time］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1038,
    "word": "anyway",
    "pos": "adv.",
    "chinese": "無論如何, 反正",
    "syllable": [
      "an",
      "y",
      "way"
    ],
    "ipa": "/ˈen.i.weɪ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［an］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［y］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［way］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1039,
    "word": "anywhere/anyplace",
    "pos": "adv.",
    "chinese": "在任何地方",
    "syllable": [
      "an",
      "y",
      "where"
    ],
    "ipa": "/ˈen.i.wer/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［an］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［y］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［where］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1040,
    "word": "ape",
    "pos": "n.",
    "chinese": "大猩猩, 猿",
    "syllable": [
      "ape"
    ],
    "ipa": "/eɪp/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ape］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1041,
    "word": "appearance",
    "pos": "n.",
    "chinese": "外表, 出現",
    "syllable": [
      "ap",
      "pear",
      "ance"
    ],
    "ipa": "/əˈpɪr.əns/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ap］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ap］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［pear］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 3 音節［ance］",
        "rule": "前綴與後綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀衍生後綴［ance］弱化發音"
      }
    ]
  },
  {
    "id": 1042,
    "word": "appetite",
    "pos": "n.",
    "chinese": "食慾, 胃口",
    "syllable": [
      "ap",
      "pe",
      "tite"
    ],
    "ipa": "/ˈæp.ə.taɪt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ap］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［pe］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［tite］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1043,
    "word": "apply",
    "pos": "v.",
    "chinese": "申請, 應用",
    "syllable": [
      "ap",
      "ply"
    ],
    "ipa": "/əˈplaɪ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ap］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ap］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［ply］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      }
    ]
  },
  {
    "id": 1044,
    "word": "appreciate",
    "pos": "v.",
    "chinese": "欣賞, 感激, 升值",
    "syllable": [
      "ap",
      "pre",
      "ci",
      "ate"
    ],
    "ipa": "/əˈpriː.ʃi.eɪt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ap］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ap］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［pre］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      },
      {
        "syllable": "第 3 音節［ci］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 4 音節［ate］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1045,
    "word": "approach",
    "pos": "n./v.",
    "chinese": "接近, 方法; 走近",
    "syllable": [
      "ap",
      "proach"
    ],
    "ipa": "/əˈproʊtʃ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ap］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［ap］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［proach］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1046,
    "word": "argue(argument)",
    "pos": "v. /(n.)",
    "chinese": "爭論, 主張 (爭論 n.)",
    "syllable": [
      "ar",
      "gue"
    ],
    "ipa": "/ˈɑːrɡ.juː/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ar］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［gue］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1047,
    "word": "army",
    "pos": "n.",
    "chinese": "軍隊, 陸軍",
    "syllable": [
      "ar",
      "my"
    ],
    "ipa": "/ˈɑːr.mi/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ar］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［my］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1048,
    "word": "arrange(ment)",
    "pos": "v./(n.)",
    "chinese": "安排, 整理 (安排 n.)",
    "syllable": [
      "ar",
      "range"
    ],
    "ipa": "/əˈreɪndʒ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ar］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［ar］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［range］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1049,
    "word": "arrival",
    "pos": "n.",
    "chinese": "到達, 抵達者",
    "syllable": [
      "ar",
      "riv",
      "al"
    ],
    "ipa": "/əˈraɪ.vəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ar］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［ar］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［riv］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 3 音節［al］",
        "rule": "前綴與後綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀衍生後綴［al］弱化發音"
      }
    ]
  },
  {
    "id": 1050,
    "word": "arrow",
    "pos": "n.",
    "chinese": "箭, 箭頭符號",
    "syllable": [
      "ar",
      "row"
    ],
    "ipa": "/ˈer.oʊ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ar］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［row］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1051,
    "word": "article",
    "pos": "n.",
    "chinese": "文章, 條款, 物件",
    "syllable": [
      "ar",
      "ti",
      "cle"
    ],
    "ipa": "/ˈɑːr.t̬ɪ.kəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ar］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［ti］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［cle］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1052,
    "word": "artist",
    "pos": "n.",
    "chinese": "藝術家, 畫家",
    "syllable": [
      "art",
      "ist"
    ],
    "ipa": "/ˈɑːr.tɪst/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［art］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［ist］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1053,
    "word": "asleep",
    "pos": "adj.",
    "chinese": "睡著的",
    "syllable": [
      "a",
      "sleep"
    ],
    "ipa": "/əˈsliːp/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［sleep］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1054,
    "word": "attempt",
    "pos": "n./v.",
    "chinese": "企圖, 嘗試",
    "syllable": [
      "at",
      "tempt"
    ],
    "ipa": "/əˈtempt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［at］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［at］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［tempt］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1055,
    "word": "attend",
    "pos": "v.",
    "chinese": "出席, 參加, 照料",
    "syllable": [
      "at",
      "tend"
    ],
    "ipa": "/əˈtend/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［at］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［at］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［tend］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1056,
    "word": "attention",
    "pos": "n.",
    "chinese": "注意, 專心, 關照",
    "syllable": [
      "at",
      "ten",
      "tion"
    ],
    "ipa": "/əˈten.ʃən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［at］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀同化前綴［at］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）"
      },
      {
        "syllable": "第 2 音節［ten］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 3 音節［tion］",
        "rule": "前綴與後綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀衍生後綴［tion］弱化發音"
      }
    ]
  },
  {
    "id": 1057,
    "word": "author",
    "pos": "n./v.",
    "chinese": "作者, 作家; 寫作",
    "syllable": [
      "au",
      "thor"
    ],
    "ipa": "/ˈɔː.θɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［au］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      },
      {
        "syllable": "第 2 音節［thor］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1058,
    "word": "available",
    "pos": "adj.",
    "chinese": "可用的, 有空的",
    "syllable": [
      "a",
      "vail",
      "a",
      "ble"
    ],
    "ipa": "/əˈveɪ.lə.bəl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［vail］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      },
      {
        "syllable": "第 3 音節［a］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 4 音節［ble］",
        "rule": "成音節字尾 (R009)",
        "status": "【適用】",
        "reason": "成音節字尾發 /əl/ 或 /l̩/"
      }
    ]
  },
  {
    "id": 1059,
    "word": "average",
    "pos": "adj./n./v.",
    "chinese": "平均的; 平均數; 平均達到",
    "syllable": [
      "av",
      "er",
      "age"
    ],
    "ipa": "/ˈæv.ɚ.ɪdʒ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［av］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      },
      {
        "syllable": "第 3 音節［age］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1060,
    "word": "avoid",
    "pos": "v.",
    "chinese": "避免, 躲避",
    "syllable": [
      "a",
      "void"
    ],
    "ipa": "/əˈvɔɪd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［a］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［a］母音弱化發輕母音 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［void］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1061,
    "word": "backpack",
    "pos": "n./v.",
    "chinese": "後背包; 背包旅行",
    "syllable": [
      "back",
      "pack"
    ],
    "ipa": "/ˈbæk.pæk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［back］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［pack］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1062,
    "word": "backward",
    "pos": "adj.",
    "chinese": "向後的, 落後的",
    "syllable": [
      "back",
      "ward"
    ],
    "ipa": "/ˈbæk.wɚd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［back］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ward］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1063,
    "word": "backward/backwards",
    "pos": "adv.",
    "chinese": "向後地, 倒退地",
    "syllable": [
      "back",
      "ward"
    ],
    "ipa": "/ˈbæk.wɚd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［back］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ward］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1064,
    "word": "badminton",
    "pos": "n.",
    "chinese": "羽毛球",
    "syllable": [
      "bad",
      "min",
      "ton"
    ],
    "ipa": "/ˈbæd.mɪn.tən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bad］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［min］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      },
      {
        "syllable": "第 3 音節［ton］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1065,
    "word": "bake",
    "pos": "v.",
    "chinese": "烘烤, 烤麵包",
    "syllable": [
      "bake"
    ],
    "ipa": "/beɪk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bake］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1066,
    "word": "bakery",
    "pos": "n.",
    "chinese": "麵包店",
    "syllable": [
      "bak",
      "er",
      "y"
    ],
    "ipa": "/ˈbeɪ.kɚ.i/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bak］",
        "rule": "魔術 e 衍生 (R003)",
        "status": "【適用】",
        "reason": "衍生自 bake 保持長母音 /beɪ/"
      },
      {
        "syllable": "第 2 音節［er］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      },
      {
        "syllable": "第 3 音節［y］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1067,
    "word": "balance",
    "pos": "n./v.",
    "chinese": "平衡, 餘額; 使平衡",
    "syllable": [
      "bal",
      "ance"
    ],
    "ipa": "/ˈbæl.əns/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bal］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ance］",
        "rule": "前綴與後綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀衍生後綴［ance］弱化發音"
      }
    ]
  },
  {
    "id": 1068,
    "word": "balcony",
    "pos": "n.",
    "chinese": "陽台, 包廂",
    "syllable": [
      "bal",
      "co",
      "ny"
    ],
    "ipa": "/ˈbæl.kə.ni/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bal］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［co］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［ny］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1069,
    "word": "balloon",
    "pos": "n.",
    "chinese": "氣球",
    "syllable": [
      "bal",
      "loon"
    ],
    "ipa": "/bəˈluːn/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bal］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      },
      {
        "syllable": "第 2 音節［loon］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1070,
    "word": "bar",
    "pos": "n./v.",
    "chinese": "酒吧, 棒狀物; 阻擋",
    "syllable": [
      "bar"
    ],
    "ipa": "/bɑːr/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bar］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1071,
    "word": "barbecue",
    "pos": "n./v.",
    "chinese": "戶外烤肉",
    "syllable": [
      "bar",
      "be",
      "cue"
    ],
    "ipa": "/ˈbɑːr.bə.kjuː/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bar］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［be］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      },
      {
        "syllable": "第 3 音節［cue］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1072,
    "word": "barber",
    "pos": "n.",
    "chinese": "理髮師",
    "syllable": [
      "bar",
      "ber"
    ],
    "ipa": "/ˈbɑːr.bɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bar］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      },
      {
        "syllable": "第 2 音節［ber］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1073,
    "word": "bark",
    "pos": "n./v.",
    "chinese": "吠叫; 樹皮",
    "syllable": [
      "bark"
    ],
    "ipa": "/bɑːrk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bark］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1074,
    "word": "base",
    "pos": "n./v.",
    "chinese": "基礎, 基地; 以...為基礎",
    "syllable": [
      "base"
    ],
    "ipa": "/beɪs/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［base］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1075,
    "word": "basic",
    "pos": "adj.",
    "chinese": "基本的, 基礎的",
    "syllable": [
      "ba",
      "sic"
    ],
    "ipa": "/ˈbeɪ.sɪk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ba］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
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
    "id": 1076,
    "word": "basics",
    "pos": "n.",
    "chinese": "基礎, 基本原理",
    "syllable": [
      "ba",
      "sics"
    ],
    "ipa": "/ˈbeɪ.sɪks/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ba］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 2 音節［sics］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1077,
    "word": "basis",
    "pos": "n.",
    "chinese": "基礎, 根據",
    "syllable": [
      "ba",
      "sis"
    ],
    "ipa": "/ˈbeɪ.sɪs/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［ba］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 2 音節［sis］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1078,
    "word": "bathe",
    "pos": "v.",
    "chinese": "洗澡, 沐浴",
    "syllable": [
      "bathe"
    ],
    "ipa": "/beɪð/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bathe］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1079,
    "word": "battle",
    "pos": "n./v.",
    "chinese": "戰役, 奮鬥; 搏鬥",
    "syllable": [
      "bat",
      "tle"
    ],
    "ipa": "/ˈbæt̬.əl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bat］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［tle］",
        "rule": "成音節字尾 (R009)",
        "status": "【適用】",
        "reason": "成音節字尾發 /əl/ 或 /l̩/"
      }
    ]
  },
  {
    "id": 1080,
    "word": "beard",
    "pos": "n.",
    "chinese": "下巴鬍鬚",
    "syllable": [
      "beard"
    ],
    "ipa": "/bɪrd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［beard］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1081,
    "word": "beat",
    "pos": "v./n.",
    "chinese": "敲擊, 打敗; 節拍",
    "syllable": [
      "beat"
    ],
    "ipa": "/biːt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［beat］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1082,
    "word": "beauty",
    "pos": "n.",
    "chinese": "美麗, 美人",
    "syllable": [
      "beau",
      "ty"
    ],
    "ipa": "/ˈbjuː.t̬i/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［beau］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      },
      {
        "syllable": "第 2 音節［ty］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "字尾母音結尾發長母音或弱化音"
      }
    ]
  },
  {
    "id": 1083,
    "word": "beer",
    "pos": "n.",
    "chinese": "啤酒",
    "syllable": [
      "beer"
    ],
    "ipa": "/bɪr/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［beer］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1084,
    "word": "beg",
    "pos": "v.",
    "chinese": "乞求, 懇求",
    "syllable": [
      "beg"
    ],
    "ipa": "/beɡ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［beg］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1085,
    "word": "beginner",
    "pos": "n.",
    "chinese": "初學者, 新手",
    "syllable": [
      "be",
      "gin",
      "ner"
    ],
    "ipa": "/bɪˈɡɪn.ɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［be］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［be］母音弱化發 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［gin］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 3 音節［ner］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1086,
    "word": "behave",
    "pos": "v.",
    "chinese": "表現, 舉止得體",
    "syllable": [
      "be",
      "have"
    ],
    "ipa": "/bɪˈheɪv/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［be］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［be］母音弱化發 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［have］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1087,
    "word": "being",
    "pos": "n.",
    "chinese": "存在, 生物",
    "syllable": [
      "be",
      "ing"
    ],
    "ipa": "/ˈbiː.ɪŋ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［be］",
        "rule": "開音節 (R002)",
        "status": "【適用】",
        "reason": "重讀開音節母音結尾發長母音"
      },
      {
        "syllable": "第 2 音節［ing］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  },
  {
    "id": 1088,
    "word": "belief",
    "pos": "n.",
    "chinese": "信仰, 信念",
    "syllable": [
      "be",
      "lief"
    ],
    "ipa": "/bɪˈliːf/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［be］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［be］母音弱化發 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［lief］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1089,
    "word": "bend",
    "pos": "v./n.",
    "chinese": "彎曲, 屈服; 拐彎處",
    "syllable": [
      "bend"
    ],
    "ipa": "/bend/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bend］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1090,
    "word": "better",
    "pos": "adj./adv./n./v.",
    "chinese": "較好的; 改善",
    "syllable": [
      "bet",
      "ter"
    ],
    "ipa": "/ˈbet̬.ɚ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bet］",
        "rule": "閉音節 (R001)",
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
    "id": 1091,
    "word": "beyond",
    "pos": "prep./adv.",
    "chinese": "超越, 超過; 在更遠處",
    "syllable": [
      "be",
      "yond"
    ],
    "ipa": "/biˈjɑːnd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［be］",
        "rule": "前綴弱化規則 (R012)",
        "status": "【適用】",
        "reason": "非重讀前綴［be］母音弱化發 /ə/ 或 /ɪ/"
      },
      {
        "syllable": "第 2 音節［yond］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1092,
    "word": "bill",
    "pos": "n./v.",
    "chinese": "帳單, 鈔票; 開立帳單",
    "syllable": [
      "bill"
    ],
    "ipa": "/bɪl/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bill］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1093,
    "word": "billion",
    "pos": "n.",
    "chinese": "十億",
    "syllable": [
      "bil",
      "lion"
    ],
    "ipa": "/ˈbɪl.jən/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bil］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［lion］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1094,
    "word": "birth",
    "pos": "n.",
    "chinese": "出生, 誕生",
    "syllable": [
      "birth"
    ],
    "ipa": "/bɝːθ/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［birth］",
        "rule": "R 控制母音 (R005)",
        "status": "【適用】",
        "reason": "母音接 r 形成捲舌母音"
      }
    ]
  },
  {
    "id": 1095,
    "word": "biscuit",
    "pos": "n.",
    "chinese": "餅乾",
    "syllable": [
      "bis",
      "cuit"
    ],
    "ipa": "/ˈbɪs.kɪt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bis］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［cuit］",
        "rule": "母音組合 (R004)",
        "status": "【適用】",
        "reason": "母音組合發固定長母音或雙母音"
      }
    ]
  },
  {
    "id": 1096,
    "word": "bit",
    "pos": "n.",
    "chinese": "小塊, 一點點",
    "syllable": [
      "bit"
    ],
    "ipa": "/bɪt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［bit］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1097,
    "word": "blackboard",
    "pos": "n.",
    "chinese": "黑板",
    "syllable": [
      "black",
      "board"
    ],
    "ipa": "/ˈblæk.bɔːrd/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［black］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［board］",
        "rule": "R 控制母音弱化 (R005/R008)",
        "status": "【適用】",
        "reason": "非重讀音節弱化發輕捲舌母音 /ɚ/"
      }
    ]
  },
  {
    "id": 1098,
    "word": "blame",
    "pos": "v./n.",
    "chinese": "責怪, 歸咎; 責任",
    "syllable": [
      "blame"
    ],
    "ipa": "/bleɪm/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［blame］",
        "rule": "魔術 e (R003)",
        "status": "【適用】",
        "reason": "字尾不發音 e 使主要母音發長母音"
      }
    ]
  },
  {
    "id": 1099,
    "word": "blank",
    "pos": "adj./n.",
    "chinese": "空白的; 空格",
    "syllable": [
      "blank"
    ],
    "ipa": "/blæŋk/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［blank］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      }
    ]
  },
  {
    "id": 1100,
    "word": "blanket",
    "pos": "n./v.",
    "chinese": "毛毯, 毯子; 覆蓋",
    "syllable": [
      "blan",
      "ket"
    ],
    "ipa": "/ˈblæŋ.kɪt/",
    "level": 2,
    "levelName": "第二級",
    "derivations": [
      {
        "syllable": "第 1 音節［blan］",
        "rule": "閉音節 (R001)",
        "status": "【適用】",
        "reason": "重讀閉音節子音封閉發短母音"
      },
      {
        "syllable": "第 2 音節［ket］",
        "rule": "非重音母音弱化 (R008)",
        "status": "【適用】",
        "reason": "非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）"
      }
    ]
  }
];
