export type ExceptionType =
  | 'Historical Exception'
  | 'Orthographic Exception'
  | 'Stress Exception'
  | 'Pronunciation Reduction'
  | 'Borrowed Word Exception';

export interface ExceptionEntry {
  word: string;
  ipa: string;
  syllable: string[];
  pattern_id: string;
  pattern_name: string;
  rule_id: string;
  exception_id: string;
  exception_type: ExceptionType;
  reason: string;
  pattern: string;
  actual_sound: string;
  note: string;
  condition: string;
  primary_sound: string;
  stage_id: string;
  stage_name: string;
  memory_tip: {
    type: string;
    content: string;
    related_words: string[];
  };
}

export const EXCEPTION_DATABASE: Record<string, ExceptionEntry> = {
  "have": {
    "word": "have",
    "ipa": "/hæv/",
    "syllable": [
      "have"
    ],
    "pattern_id": "PAT-01",
    "pattern_name": "Magic e",
    "rule_id": "R010",
    "exception_id": "HIST-001",
    "exception_type": "Historical Exception",
    "reason": "Old English spelling retained",
    "pattern": "a_e",
    "actual_sound": "/æ/",
    "note": "a_e 例外發短母音 /æ/",
    "condition": "Magic e 結構，但為歷史保留不規則發音例外（未發長母音 /eɪ/，而是發短母音 /æ/）",
    "primary_sound": "/æ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "have 像 have a cat，a 發短音 /æ/",
      "related_words": [
        "give",
        "live"
      ]
    }
  },
  "give": {
    "word": "give",
    "ipa": "/ɡɪv/",
    "syllable": [
      "give"
    ],
    "pattern_id": "PAT-01",
    "pattern_name": "Magic e",
    "rule_id": "R010",
    "exception_id": "HIST-002",
    "exception_type": "Historical Exception",
    "reason": "Old English spelling retained",
    "pattern": "i_e",
    "actual_sound": "/ɪ/",
    "note": "i_e 例外發短母音 /ɪ/",
    "condition": "Magic e 結構，但為歷史保留不規則發音例外（未發長母音 /aɪ/，而是發短母音 /ɪ/）",
    "primary_sound": "/ɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "give me a hand，i 發短音 /ɪ/",
      "related_words": [
        "have",
        "live"
      ]
    }
  },
  "live": {
    "word": "live",
    "ipa": "/lɪv/",
    "syllable": [
      "live"
    ],
    "pattern_id": "PAT-01",
    "pattern_name": "Magic e",
    "rule_id": "R010",
    "exception_id": "HIST-003",
    "exception_type": "Historical Exception",
    "reason": "Old English spelling retained",
    "pattern": "i_e",
    "actual_sound": "/ɪ/",
    "note": "i_e 例外發短母音 /ɪ/",
    "condition": "Magic e 結構，但為歷史保留不規則發音例外（未發長母音 /aɪ/，而是發短母音 /ɪ/）",
    "primary_sound": "/ɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "live in a city，動詞時 i 發短音 /ɪ/",
      "related_words": [
        "have",
        "give"
      ]
    }
  },
  "come": {
    "word": "come",
    "ipa": "/kʌm/",
    "syllable": [
      "come"
    ],
    "pattern_id": "PAT-01",
    "pattern_name": "Magic e",
    "rule_id": "R010",
    "exception_id": "HIST-004",
    "exception_type": "Historical Exception",
    "reason": "Old English spelling retained",
    "pattern": "o_e",
    "actual_sound": "/ʌ/",
    "note": "o_e 例外發短母音 /ʌ/",
    "condition": "Magic e 結構，但未發長母音 /oʊ/，而是發 /ʌ/",
    "primary_sound": "/ʌ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "come here, o 發短音 /ʌ/",
      "related_words": [
        "some",
        "done"
      ]
    }
  },
  "some": {
    "word": "some",
    "ipa": "/sʌm/",
    "syllable": [
      "some"
    ],
    "pattern_id": "PAT-01",
    "pattern_name": "Magic e",
    "rule_id": "R010",
    "exception_id": "HIST-005",
    "exception_type": "Historical Exception",
    "reason": "Old English spelling retained",
    "pattern": "o_e",
    "actual_sound": "/ʌ/",
    "note": "o_e 例外發短母音 /ʌ/",
    "condition": "Magic e 結構，但未發長母音 /oʊ/，而是發 /ʌ/",
    "primary_sound": "/ʌ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "some apples, o 發短音 /ʌ/",
      "related_words": [
        "come",
        "done"
      ]
    }
  },
  "done": {
    "word": "done",
    "ipa": "/dʌn/",
    "syllable": [
      "done"
    ],
    "pattern_id": "PAT-01",
    "pattern_name": "Magic e",
    "rule_id": "R010",
    "exception_id": "HIST-006",
    "exception_type": "Historical Exception",
    "reason": "Old English spelling retained",
    "pattern": "o_e",
    "actual_sound": "/ʌ/",
    "note": "o_e 例外發短母音 /ʌ/",
    "condition": "Magic e 結構，但未發長母音 /oʊ/，而是發 /ʌ/",
    "primary_sound": "/ʌ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "well done, o 發短音 /ʌ/",
      "related_words": [
        "come",
        "some"
      ]
    }
  },
  "one": {
    "word": "one",
    "ipa": "/wʌn/",
    "syllable": [
      "one"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-001",
    "exception_type": "Orthographic Exception",
    "reason": "Irregular vowel and consonant mapping",
    "pattern": "o_e",
    "actual_sound": "/wʌn/",
    "note": "o_e 結構發子音 /w/ + /ʌn/",
    "condition": "完全不規則字母與發音對應",
    "primary_sound": "/wʌn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "one 發音同 won (/wʌn/)，首字帶子音 /w/",
      "related_words": [
        "once",
        "two"
      ]
    }
  },
  "said": {
    "word": "said",
    "ipa": "/sed/",
    "syllable": [
      "said"
    ],
    "pattern_id": "PAT-04",
    "pattern_name": "Vowel Team",
    "rule_id": "R010",
    "exception_id": "REDUC-001",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction in frequent verb forms",
    "pattern": "ai",
    "actual_sound": "/e/",
    "note": "ai 組合例外發短母音 /e/",
    "condition": "ai 組合通常發長母音 /eɪ/，此處為不規則例外發 /e/",
    "primary_sound": "/e/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "he said /sed/, ai 發短母音 /e/",
      "related_words": [
        "says",
        "again"
      ]
    }
  },
  "says": {
    "word": "says",
    "ipa": "/sez/",
    "syllable": [
      "says"
    ],
    "pattern_id": "PAT-04",
    "pattern_name": "Vowel Team",
    "rule_id": "R010",
    "exception_id": "REDUC-002",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction in frequent verb forms",
    "pattern": "ay",
    "actual_sound": "/e/",
    "note": "ay 組合例外發短母音 /e/",
    "condition": "ay 組合通常發長母音 /eɪ/，此處為不規則例外發 /e/",
    "primary_sound": "/e/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "she says /sez/, ay 發短母音 /e/",
      "related_words": [
        "said",
        "again"
      ]
    }
  },
  "were": {
    "word": "were",
    "ipa": "/wɜːr/",
    "syllable": [
      "were"
    ],
    "pattern_id": "PAT-05",
    "pattern_name": "R-Controlled Vowel",
    "rule_id": "R010",
    "exception_id": "HIST-007",
    "exception_type": "Historical Exception",
    "reason": "Old English verb retention",
    "pattern": "ere",
    "actual_sound": "/ɜːr/",
    "note": "er 例外發 /ɜːr/",
    "condition": "R 控制音與 Magic e 混合結構",
    "primary_sound": "/ɜːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "we were /wɜːr/, 發 R 控制捲舌音",
      "related_words": [
        "are",
        "her"
      ]
    }
  },
  "are": {
    "word": "are",
    "ipa": "/ɑːr/",
    "syllable": [
      "are"
    ],
    "pattern_id": "PAT-05",
    "pattern_name": "R-Controlled Vowel",
    "rule_id": "R010",
    "exception_id": "HIST-008",
    "exception_type": "Historical Exception",
    "reason": "Old English verb retention",
    "pattern": "are",
    "actual_sound": "/ɑːr/",
    "note": "ar 例外發 /ɑːr/",
    "condition": "Magic e 結構但字母 e 不發音且未改變 a 發音",
    "primary_sound": "/ɑːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "you are /ɑːr/, a 發開口長母音 /ɑːr/",
      "related_words": [
        "were",
        "car"
      ]
    }
  },
  "do": {
    "word": "do",
    "ipa": "/duː/",
    "syllable": [
      "do"
    ],
    "pattern_id": "PAT-03",
    "pattern_name": "Open Syllable",
    "rule_id": "R010",
    "exception_id": "ORTH-002",
    "exception_type": "Orthographic Exception",
    "reason": "Vowel shift in primary verb",
    "pattern": "open_o",
    "actual_sound": "/uː/",
    "note": "開放音節 o 例外發 /uː/",
    "condition": "單音節開放音節未發長母音 /oʊ/，而是發 /uː/",
    "primary_sound": "/uː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "do it /duː/, o 發長烏音 /uː/",
      "related_words": [
        "to",
        "who",
        "two"
      ]
    }
  },
  "to": {
    "word": "to",
    "ipa": "/tuː/",
    "syllable": [
      "to"
    ],
    "pattern_id": "PAT-03",
    "pattern_name": "Open Syllable",
    "rule_id": "R010",
    "exception_id": "ORTH-003",
    "exception_type": "Orthographic Exception",
    "reason": "Vowel shift in primary preposition",
    "pattern": "open_o",
    "actual_sound": "/uː/",
    "note": "開放音節 o 例外發 /uː/",
    "condition": "單音節開放音節未發長母音 /oʊ/，而是發 /uː/",
    "primary_sound": "/uː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "go to /tuː/, o 發長烏音 /uː/",
      "related_words": [
        "do",
        "who",
        "two"
      ]
    }
  },
  "two": {
    "word": "two",
    "ipa": "/tuː/",
    "syllable": [
      "two"
    ],
    "pattern_id": "PAT-07",
    "pattern_name": "Silent Letter",
    "rule_id": "R010",
    "exception_id": "ORTH-004",
    "exception_type": "Orthographic Exception",
    "reason": "Silent consonant retention",
    "pattern": "tw",
    "actual_sound": "/uː/",
    "note": "w 靜音，o 發 /uː/",
    "condition": "不規則靜音字字母 w 不發音",
    "primary_sound": "/uː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "two /tuː/ 靜音 w，發音同 to/too",
      "related_words": [
        "to",
        "do",
        "who"
      ]
    }
  },
  "who": {
    "word": "who",
    "ipa": "/huː/",
    "syllable": [
      "who"
    ],
    "pattern_id": "PAT-07",
    "pattern_name": "Silent Letter",
    "rule_id": "R010",
    "exception_id": "ORTH-005",
    "exception_type": "Orthographic Exception",
    "reason": "Silent consonant retention in wh- group",
    "pattern": "who",
    "actual_sound": "/huː/",
    "note": "w 靜音，wh 發 /h/",
    "condition": "wh 後接字母 o 時，w 不發音，h 發 /h/",
    "primary_sound": "/huː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "who /huː/ 發 /h/ + /uː/",
      "related_words": [
        "whom",
        "whose",
        "two"
      ]
    }
  },
  "a": {
    "word": "a",
    "ipa": "/ə/",
    "syllable": [
      "a",
      "an"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-021",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "a",
    "actual_sound": "/ə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "a 發音為 /ə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "a"
      ]
    }
  },
  "a few": {
    "word": "a few",
    "ipa": "/ə fjuː/",
    "syllable": [
      "a",
      "few"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-022",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "a few",
    "actual_sound": "/ə fjuː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ə fjuː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ə fjuː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "a few 發音為 /ə fjuː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "a few"
      ]
    }
  },
  "a little": {
    "word": "a little",
    "ipa": "/ə ˈlɪt.əl/",
    "syllable": [
      "a",
      "lit",
      "tle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-023",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "a little",
    "actual_sound": "/ə ˈlɪt.əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ə ˈlɪt.əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ə ˈlɪt.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "a little 發音為 /ə ˈlɪt.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "a little"
      ]
    }
  },
  "a lot": {
    "word": "a lot",
    "ipa": "/ə lɑːt/",
    "syllable": [
      "a",
      "lot"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-024",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "a lot",
    "actual_sound": "/ə lɑːt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ə lɑːt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ə lɑːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "a lot 發音為 /ə lɑːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "a lot"
      ]
    }
  },
  "able": {
    "word": "able",
    "ipa": "/ˈeɪ.bəl/",
    "syllable": [
      "a",
      "ble"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-025",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "able",
    "actual_sound": "/ˈeɪ.bəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈeɪ.bəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈeɪ.bəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "able 發音為 /ˈeɪ.bəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "able"
      ]
    }
  },
  "about": {
    "word": "about",
    "ipa": "/əˈbaʊt/",
    "syllable": [
      "a",
      "bout"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-026",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "about",
    "actual_sound": "/əˈbaʊt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈbaʊt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈbaʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "about 發音為 /əˈbaʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "about"
      ]
    }
  },
  "above": {
    "word": "above",
    "ipa": "/əˈbʌv/",
    "syllable": [
      "a",
      "bove"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-027",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "above",
    "actual_sound": "/əˈbʌv/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈbʌv/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈbʌv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "above 發音為 /əˈbʌv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "above"
      ]
    }
  },
  "abroad": {
    "word": "abroad",
    "ipa": "/əˈbrɔːd/",
    "syllable": [
      "a",
      "broad"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-028",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "abroad",
    "actual_sound": "/əˈbrɔːd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈbrɔːd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈbrɔːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "abroad 發音為 /əˈbrɔːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "abroad"
      ]
    }
  },
  "across": {
    "word": "across",
    "ipa": "/əˈkrɔːs/",
    "syllable": [
      "a",
      "cross"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-029",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "across",
    "actual_sound": "/əˈkrɔːs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈkrɔːs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈkrɔːs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "across 發音為 /əˈkrɔːs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "across"
      ]
    }
  },
  "actress": {
    "word": "actress",
    "ipa": "/ˈæk.trəs/",
    "syllable": [
      "ac",
      "tress"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-030",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "actress",
    "actual_sound": "/ˈæk.trəs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈæk.trəs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈæk.trəs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "actress 發音為 /ˈæk.trəs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "actress"
      ]
    }
  },
  "afraid": {
    "word": "afraid",
    "ipa": "/əˈfreɪd/",
    "syllable": [
      "a",
      "fraid"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-031",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "afraid",
    "actual_sound": "/əˈfreɪd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈfreɪd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈfreɪd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "afraid 發音為 /əˈfreɪd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "afraid"
      ]
    }
  },
  "after": {
    "word": "after",
    "ipa": "/ˈæf.tɚ/",
    "syllable": [
      "af",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-032",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "after",
    "actual_sound": "/ˈæf.tɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈæf.tɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈæf.tɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "after 發音為 /ˈæf.tɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "after"
      ]
    }
  },
  "afternoon": {
    "word": "afternoon",
    "ipa": "/ˌæf.tɚˈnuːn/",
    "syllable": [
      "af",
      "ter",
      "noon"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-033",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "afternoon",
    "actual_sound": "/ˌæf.tɚˈnuːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌæf.tɚˈnuːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌæf.tɚˈnuːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "afternoon 發音為 /ˌæf.tɚˈnuːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "afternoon"
      ]
    }
  },
  "again": {
    "word": "again",
    "ipa": "/əˈɡɛn/",
    "syllable": [
      "a",
      "gain"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-034",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "again",
    "actual_sound": "/əˈɡɛn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈɡɛn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈɡɛn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "again 發音為 /əˈɡɛn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "again"
      ]
    }
  },
  "age": {
    "word": "age",
    "ipa": "/eɪdʒ/",
    "syllable": [
      "age"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-035",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "age",
    "actual_sound": "/eɪdʒ/",
    "note": "自然發音推導例外，美式標準音標為 /eɪdʒ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/eɪdʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "age 發音為 /eɪdʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "age"
      ]
    }
  },
  "ago": {
    "word": "ago",
    "ipa": "/əˈɡoʊ/",
    "syllable": [
      "a",
      "go"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-036",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ago",
    "actual_sound": "/əˈɡoʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈɡoʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈɡoʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ago 發音為 /əˈɡoʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ago"
      ]
    }
  },
  "agree": {
    "word": "agree",
    "ipa": "/əˈɡriː/",
    "syllable": [
      "a",
      "gree"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-037",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "agree",
    "actual_sound": "/əˈɡriː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈɡriː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈɡriː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "agree 發音為 /əˈɡriː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "agree"
      ]
    }
  },
  "ahead": {
    "word": "ahead",
    "ipa": "/əˈhɛd/",
    "syllable": [
      "a",
      "head"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-038",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ahead",
    "actual_sound": "/əˈhɛd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈhɛd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈhɛd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ahead 發音為 /əˈhɛd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ahead"
      ]
    }
  },
  "air": {
    "word": "air",
    "ipa": "/ɛr/",
    "syllable": [
      "air"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-039",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "air",
    "actual_sound": "/ɛr/",
    "note": "自然發音推導例外，美式標準音標為 /ɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "air 發音為 /ɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "air"
      ]
    }
  },
  "airplane": {
    "word": "airplane",
    "ipa": "/ˈɛr.pleɪn/",
    "syllable": [
      "air",
      "plane"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-040",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "airplane",
    "actual_sound": "/ˈɛr.pleɪn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛr.pleɪn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛr.pleɪn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "airplane 發音為 /ˈɛr.pleɪn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "airplane"
      ]
    }
  },
  "airport": {
    "word": "airport",
    "ipa": "/ˈɛr.pɔːrt/",
    "syllable": [
      "air",
      "port"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-041",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "airport",
    "actual_sound": "/ˈɛr.pɔːrt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛr.pɔːrt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛr.pɔːrt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "airport 發音為 /ˈɛr.pɔːrt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "airport"
      ]
    }
  },
  "all": {
    "word": "all",
    "ipa": "/ɔːl/",
    "syllable": [
      "all"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-042",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "all",
    "actual_sound": "/ɔːl/",
    "note": "自然發音推導例外，美式標準音標為 /ɔːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɔːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "all 發音為 /ɔːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "all"
      ]
    }
  },
  "almost": {
    "word": "almost",
    "ipa": "/ˈɔːl.moʊst/",
    "syllable": [
      "al",
      "most"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-043",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "almost",
    "actual_sound": "/ˈɔːl.moʊst/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɔːl.moʊst/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɔːl.moʊst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "almost 發音為 /ˈɔːl.moʊst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "almost"
      ]
    }
  },
  "along": {
    "word": "along",
    "ipa": "/əˈlɔːŋ/",
    "syllable": [
      "a",
      "long"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-044",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "along",
    "actual_sound": "/əˈlɔːŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈlɔːŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈlɔːŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "along 發音為 /əˈlɔːŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "along"
      ]
    }
  },
  "already": {
    "word": "already",
    "ipa": "/ɔːlˈrɛd.i/",
    "syllable": [
      "al",
      "read",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-045",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "already",
    "actual_sound": "/ɔːlˈrɛd.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɔːlˈrɛd.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɔːlˈrɛd.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "already 發音為 /ɔːlˈrɛd.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "already"
      ]
    }
  },
  "also": {
    "word": "also",
    "ipa": "/ˈɔːl.soʊ/",
    "syllable": [
      "al",
      "so"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-046",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "also",
    "actual_sound": "/ˈɔːl.soʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɔːl.soʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɔːl.soʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "also 發音為 /ˈɔːl.soʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "also"
      ]
    }
  },
  "always": {
    "word": "always",
    "ipa": "/ˈɔːl.weɪz/",
    "syllable": [
      "al",
      "ways"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-047",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "always",
    "actual_sound": "/ˈɔːl.weɪz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɔːl.weɪz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɔːl.weɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "always 發音為 /ˈɔːl.weɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "always"
      ]
    }
  },
  "a.m.": {
    "word": "a.m.",
    "ipa": "/ˌeɪˈɛm/",
    "syllable": [
      "a",
      "m"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-048",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "a.m.",
    "actual_sound": "/ˌeɪˈɛm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌeɪˈɛm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌeɪˈɛm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "a.m. 發音為 /ˌeɪˈɛm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "a.m."
      ]
    }
  },
  "america": {
    "word": "America",
    "ipa": "/əˈmɛr.ɪ.kə/",
    "syllable": [
      "A",
      "mer",
      "i",
      "ca"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-049",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "America",
    "actual_sound": "/əˈmɛr.ɪ.kə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈmɛr.ɪ.kə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈmɛr.ɪ.kə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "America 發音為 /əˈmɛr.ɪ.kə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "America"
      ]
    }
  },
  "american": {
    "word": "American",
    "ipa": "/əˈmɛr.ɪ.kən/",
    "syllable": [
      "A",
      "mer",
      "i",
      "can"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-050",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "American",
    "actual_sound": "/əˈmɛr.ɪ.kən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈmɛr.ɪ.kən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈmɛr.ɪ.kən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "American 發音為 /əˈmɛr.ɪ.kən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "American"
      ]
    }
  },
  "angry": {
    "word": "angry",
    "ipa": "/ˈæŋ.ɡri/",
    "syllable": [
      "an",
      "gry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-051",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "angry",
    "actual_sound": "/ˈæŋ.ɡri/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈæŋ.ɡri/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈæŋ.ɡri/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "angry 發音為 /ˈæŋ.ɡri/，對應 EPRS R010 特殊例外",
      "related_words": [
        "angry"
      ]
    }
  },
  "animal": {
    "word": "animal",
    "ipa": "/ˈæn.ə.məl/",
    "syllable": [
      "an",
      "i",
      "mal"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-052",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "animal",
    "actual_sound": "/ˈæn.ə.məl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈæn.ə.məl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈæn.ə.məl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "animal 發音為 /ˈæn.ə.məl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "animal"
      ]
    }
  },
  "another": {
    "word": "another",
    "ipa": "/əˈnʌð.ɚ/",
    "syllable": [
      "an",
      "oth",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-053",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "another",
    "actual_sound": "/əˈnʌð.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈnʌð.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈnʌð.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "another 發音為 /əˈnʌð.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "another"
      ]
    }
  },
  "answer": {
    "word": "answer",
    "ipa": "/ˈæn.sɚ/",
    "syllable": [
      "an",
      "swer"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-054",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "answer",
    "actual_sound": "/ˈæn.sɚ/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /ˈæn.sɚ/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/ˈæn.sɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "answer 發音為 /ˈæn.sɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "answer"
      ]
    }
  },
  "any": {
    "word": "any",
    "ipa": "/ˈɛn.i/",
    "syllable": [
      "an",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-055",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "any",
    "actual_sound": "/ˈɛn.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛn.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛn.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "any 發音為 /ˈɛn.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "any"
      ]
    }
  },
  "anyone": {
    "word": "anyone",
    "ipa": "/ˈɛn.i.wʌn/",
    "syllable": [
      "an",
      "y",
      "one"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-056",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "anyone",
    "actual_sound": "/ˈɛn.i.wʌn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛn.i.wʌn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛn.i.wʌn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "anyone 發音為 /ˈɛn.i.wʌn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "anyone"
      ]
    }
  },
  "anything": {
    "word": "anything",
    "ipa": "/ˈɛn.i.θɪŋ/",
    "syllable": [
      "an",
      "y",
      "thing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-057",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "anything",
    "actual_sound": "/ˈɛn.i.θɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛn.i.θɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛn.i.θɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "anything 發音為 /ˈɛn.i.θɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "anything"
      ]
    }
  },
  "apartment": {
    "word": "apartment",
    "ipa": "/əˈpɑːrt.mənt/",
    "syllable": [
      "a",
      "part",
      "ment"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-058",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "apartment",
    "actual_sound": "/əˈpɑːrt.mənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈpɑːrt.mənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈpɑːrt.mənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "apartment 發音為 /əˈpɑːrt.mənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "apartment"
      ]
    }
  },
  "appear": {
    "word": "appear",
    "ipa": "/əˈpɪr/",
    "syllable": [
      "ap",
      "pear"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-059",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "appear",
    "actual_sound": "/əˈpɪr/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈpɪr/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈpɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "appear 發音為 /əˈpɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "appear"
      ]
    }
  },
  "apple": {
    "word": "apple",
    "ipa": "/ˈæp.əl/",
    "syllable": [
      "ap",
      "ple"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-060",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "apple",
    "actual_sound": "/ˈæp.əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈæp.əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈæp.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "apple 發音為 /ˈæp.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "apple"
      ]
    }
  },
  "april": {
    "word": "April",
    "ipa": "/ˈeɪ.prəl/",
    "syllable": [
      "A",
      "pril"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-061",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "April",
    "actual_sound": "/ˈeɪ.prəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈeɪ.prəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈeɪ.prəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "April 發音為 /ˈeɪ.prəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "April"
      ]
    }
  },
  "around": {
    "word": "around",
    "ipa": "/əˈraʊnd/",
    "syllable": [
      "a",
      "round"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-062",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "around",
    "actual_sound": "/əˈraʊnd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈraʊnd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈraʊnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "around 發音為 /əˈraʊnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "around"
      ]
    }
  },
  "arrive": {
    "word": "arrive",
    "ipa": "/əˈraɪv/",
    "syllable": [
      "ar",
      "rive"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-063",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "arrive",
    "actual_sound": "/əˈraɪv/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈraɪv/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈraɪv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "arrive 發音為 /əˈraɪv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "arrive"
      ]
    }
  },
  "as": {
    "word": "as",
    "ipa": "/æz/",
    "syllable": [
      "as"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-064",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "as",
    "actual_sound": "/æz/",
    "note": "自然發音推導例外，美式標準音標為 /æz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/æz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "as 發音為 /æz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "as"
      ]
    }
  },
  "at": {
    "word": "at",
    "ipa": "/æt/",
    "syllable": [
      "at"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-065",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "at",
    "actual_sound": "/æt/",
    "note": "自然發音推導例外，美式標準音標為 /æt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/æt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "at 發音為 /æt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "at"
      ]
    }
  },
  "august": {
    "word": "August",
    "ipa": "/ˈɔː.ɡəst/",
    "syllable": [
      "Au",
      "gust"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-066",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "August",
    "actual_sound": "/ˈɔː.ɡəst/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɔː.ɡəst/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɔː.ɡəst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "August 發音為 /ˈɔː.ɡəst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "August"
      ]
    }
  },
  "aunt": {
    "word": "aunt",
    "ipa": "/ænt/",
    "syllable": [
      "aunt"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-067",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "aunt",
    "actual_sound": "/ænt/",
    "note": "自然發音推導例外，美式標準音標為 /ænt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ænt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "aunt 發音為 /ænt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "aunt"
      ]
    }
  },
  "autumn": {
    "word": "autumn",
    "ipa": "/ˈɔː.təm/",
    "syllable": [
      "au",
      "tumn"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-068",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "autumn",
    "actual_sound": "/ˈɔː.təm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɔː.təm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɔː.təm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "autumn 發音為 /ˈɔː.təm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "autumn"
      ]
    }
  },
  "away": {
    "word": "away",
    "ipa": "/əˈweɪ/",
    "syllable": [
      "a",
      "way"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-069",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "away",
    "actual_sound": "/əˈweɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈweɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈweɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "away 發音為 /əˈweɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "away"
      ]
    }
  },
  "baby": {
    "word": "baby",
    "ipa": "/ˈbeɪ.bi/",
    "syllable": [
      "ba",
      "by"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-070",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "baby",
    "actual_sound": "/ˈbeɪ.bi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbeɪ.bi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbeɪ.bi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "baby 發音為 /ˈbeɪ.bi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "baby"
      ]
    }
  },
  "badminton": {
    "word": "badminton",
    "ipa": "/ˈbæd.mɪn.tən/",
    "syllable": [
      "bad",
      "min",
      "ton"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-071",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "badminton",
    "actual_sound": "/ˈbæd.mɪn.tən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbæd.mɪn.tən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbæd.mɪn.tən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "badminton 發音為 /ˈbæd.mɪn.tən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "badminton"
      ]
    }
  },
  "bag": {
    "word": "bag",
    "ipa": "/bæɡ/",
    "syllable": [
      "bag"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-072",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bag",
    "actual_sound": "/bæɡ/",
    "note": "自然發音推導例外，美式標準音標為 /bæɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bæɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bag 發音為 /bæɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bag"
      ]
    }
  },
  "bakery": {
    "word": "bakery",
    "ipa": "/ˈbeɪ.kɚ.i/",
    "syllable": [
      "bak",
      "er",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-073",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "bakery",
    "actual_sound": "/ˈbeɪ.kɚ.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbeɪ.kɚ.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbeɪ.kɚ.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "bakery 發音為 /ˈbeɪ.kɚ.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bakery"
      ]
    }
  },
  "balcony": {
    "word": "balcony",
    "ipa": "/ˈbæl.kə.ni/",
    "syllable": [
      "bal",
      "co",
      "ny"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-074",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "balcony",
    "actual_sound": "/ˈbæl.kə.ni/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbæl.kə.ni/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbæl.kə.ni/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "balcony 發音為 /ˈbæl.kə.ni/，對應 EPRS R010 特殊例外",
      "related_words": [
        "balcony"
      ]
    }
  },
  "ball": {
    "word": "ball",
    "ipa": "/bɔːl/",
    "syllable": [
      "ball"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-075",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "ball",
    "actual_sound": "/bɔːl/",
    "note": "自然發音推導例外，美式標準音標為 /bɔːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɔːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "ball 發音為 /bɔːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ball"
      ]
    }
  },
  "banana": {
    "word": "banana",
    "ipa": "/bəˈnæn.ə/",
    "syllable": [
      "ba",
      "nan",
      "a"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-076",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "banana",
    "actual_sound": "/bəˈnæn.ə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bəˈnæn.ə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bəˈnæn.ə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "banana 發音為 /bəˈnæn.ə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "banana"
      ]
    }
  },
  "bank": {
    "word": "bank",
    "ipa": "/bæŋk/",
    "syllable": [
      "bank"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-077",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bank",
    "actual_sound": "/bæŋk/",
    "note": "自然發音推導例外，美式標準音標為 /bæŋk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bæŋk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bank 發音為 /bæŋk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bank"
      ]
    }
  },
  "barbecue": {
    "word": "barbecue",
    "ipa": "/ˈbɑːr.bə.kjuː/",
    "syllable": [
      "bar",
      "be",
      "cue"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-078",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "barbecue",
    "actual_sound": "/ˈbɑːr.bə.kjuː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɑːr.bə.kjuː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɑːr.bə.kjuː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "barbecue 發音為 /ˈbɑːr.bə.kjuː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "barbecue"
      ]
    }
  },
  "baseball": {
    "word": "baseball",
    "ipa": "/ˈbeɪs.bɔːl/",
    "syllable": [
      "base",
      "ball"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-079",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "baseball",
    "actual_sound": "/ˈbeɪs.bɔːl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbeɪs.bɔːl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbeɪs.bɔːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "baseball 發音為 /ˈbeɪs.bɔːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "baseball"
      ]
    }
  },
  "basket": {
    "word": "basket",
    "ipa": "/ˈbæs.kət/",
    "syllable": [
      "bas",
      "ket"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-080",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "basket",
    "actual_sound": "/ˈbæs.kət/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbæs.kət/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbæs.kət/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "basket 發音為 /ˈbæs.kət/，對應 EPRS R010 特殊例外",
      "related_words": [
        "basket"
      ]
    }
  },
  "basketball": {
    "word": "basketball",
    "ipa": "/ˈbæs.kət.bɔːl/",
    "syllable": [
      "bas",
      "ket",
      "ball"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-081",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "basketball",
    "actual_sound": "/ˈbæs.kət.bɔːl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbæs.kət.bɔːl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbæs.kət.bɔːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "basketball 發音為 /ˈbæs.kət.bɔːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "basketball"
      ]
    }
  },
  "bathroom": {
    "word": "bathroom",
    "ipa": "/ˈbæθ.ruːm/",
    "syllable": [
      "bath",
      "room"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-082",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "bathroom",
    "actual_sound": "/ˈbæθ.ruːm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbæθ.ruːm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbæθ.ruːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "bathroom 發音為 /ˈbæθ.ruːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bathroom"
      ]
    }
  },
  "be": {
    "word": "be",
    "ipa": "/biː/",
    "syllable": [
      "be"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-083",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "be",
    "actual_sound": "/biː/",
    "note": "自然發音推導例外，美式標準音標為 /biː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/biː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "be 發音為 /biː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "be"
      ]
    }
  },
  "beach": {
    "word": "beach",
    "ipa": "/biːtʃ/",
    "syllable": [
      "beach"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-084",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "beach",
    "actual_sound": "/biːtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /biːtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/biːtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "beach 發音為 /biːtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "beach"
      ]
    }
  },
  "bean": {
    "word": "bean",
    "ipa": "/biːn/",
    "syllable": [
      "bean"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-085",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bean",
    "actual_sound": "/biːn/",
    "note": "自然發音推導例外，美式標準音標為 /biːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/biːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bean 發音為 /biːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bean"
      ]
    }
  },
  "bear": {
    "word": "bear",
    "ipa": "/bɛr/",
    "syllable": [
      "bear"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-086",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bear",
    "actual_sound": "/bɛr/",
    "note": "自然發音推導例外，美式標準音標為 /bɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bear 發音為 /bɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bear"
      ]
    }
  },
  "beautiful": {
    "word": "beautiful",
    "ipa": "/ˈbjuː.t̬ə.fəl/",
    "syllable": [
      "beau",
      "ti",
      "ful"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-087",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "beautiful",
    "actual_sound": "/ˈbjuː.t̬ə.fəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbjuː.t̬ə.fəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbjuː.t̬ə.fəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "beautiful 發音為 /ˈbjuː.t̬ə.fəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "beautiful"
      ]
    }
  },
  "because": {
    "word": "because",
    "ipa": "/bɪˈkɔːz/",
    "syllable": [
      "be",
      "cause"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-088",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "because",
    "actual_sound": "/bɪˈkɔːz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bɪˈkɔːz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bɪˈkɔːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "because 發音為 /bɪˈkɔːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "because"
      ]
    }
  },
  "become": {
    "word": "become",
    "ipa": "/bɪˈkʌm/",
    "syllable": [
      "be",
      "come"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-089",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "become",
    "actual_sound": "/bɪˈkʌm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bɪˈkʌm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bɪˈkʌm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "become 發音為 /bɪˈkʌm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "become"
      ]
    }
  },
  "bed": {
    "word": "bed",
    "ipa": "/bɛd/",
    "syllable": [
      "bed"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-090",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bed",
    "actual_sound": "/bɛd/",
    "note": "自然發音推導例外，美式標準音標為 /bɛd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɛd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bed 發音為 /bɛd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bed"
      ]
    }
  },
  "bedroom": {
    "word": "bedroom",
    "ipa": "/ˈbɛd.ruːm/",
    "syllable": [
      "bed",
      "room"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-091",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "bedroom",
    "actual_sound": "/ˈbɛd.ruːm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɛd.ruːm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɛd.ruːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "bedroom 發音為 /ˈbɛd.ruːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bedroom"
      ]
    }
  },
  "bee": {
    "word": "bee",
    "ipa": "/biː/",
    "syllable": [
      "bee"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-092",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bee",
    "actual_sound": "/biː/",
    "note": "自然發音推導例外，美式標準音標為 /biː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/biː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bee 發音為 /biː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bee"
      ]
    }
  },
  "beef": {
    "word": "beef",
    "ipa": "/biːf/",
    "syllable": [
      "beef"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-093",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "beef",
    "actual_sound": "/biːf/",
    "note": "自然發音推導例外，美式標準音標為 /biːf/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/biːf/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "beef 發音為 /biːf/，對應 EPRS R010 特殊例外",
      "related_words": [
        "beef"
      ]
    }
  },
  "before": {
    "word": "before",
    "ipa": "/bɪˈfɔːr/",
    "syllable": [
      "be",
      "fore"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-094",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "before",
    "actual_sound": "/bɪˈfɔːr/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bɪˈfɔːr/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bɪˈfɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "before 發音為 /bɪˈfɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "before"
      ]
    }
  },
  "begin": {
    "word": "begin",
    "ipa": "/bɪˈɡɪn/",
    "syllable": [
      "be",
      "gin"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-095",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "begin",
    "actual_sound": "/bɪˈɡɪn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bɪˈɡɪn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bɪˈɡɪn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "begin 發音為 /bɪˈɡɪn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "begin"
      ]
    }
  },
  "behind": {
    "word": "behind",
    "ipa": "/bɪˈhaɪnd/",
    "syllable": [
      "be",
      "hind"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-096",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "behind",
    "actual_sound": "/bɪˈhaɪnd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bɪˈhaɪnd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bɪˈhaɪnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "behind 發音為 /bɪˈhaɪnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "behind"
      ]
    }
  },
  "bell": {
    "word": "bell",
    "ipa": "/bɛl/",
    "syllable": [
      "bell"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-097",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bell",
    "actual_sound": "/bɛl/",
    "note": "自然發音推導例外，美式標準音標為 /bɛl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɛl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bell 發音為 /bɛl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bell"
      ]
    }
  },
  "belong": {
    "word": "belong",
    "ipa": "/bɪˈlɔːŋ/",
    "syllable": [
      "be",
      "long"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-098",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "belong",
    "actual_sound": "/bɪˈlɔːŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bɪˈlɔːŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bɪˈlɔːŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "belong 發音為 /bɪˈlɔːŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "belong"
      ]
    }
  },
  "below": {
    "word": "below",
    "ipa": "/bɪˈloʊ/",
    "syllable": [
      "be",
      "low"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-099",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "below",
    "actual_sound": "/bɪˈloʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bɪˈloʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bɪˈloʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "below 發音為 /bɪˈloʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "below"
      ]
    }
  },
  "belt": {
    "word": "belt",
    "ipa": "/bɛlt/",
    "syllable": [
      "belt"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-100",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "belt",
    "actual_sound": "/bɛlt/",
    "note": "自然發音推導例外，美式標準音標為 /bɛlt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɛlt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "belt 發音為 /bɛlt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "belt"
      ]
    }
  },
  "bench": {
    "word": "bench",
    "ipa": "/bɛntʃ/",
    "syllable": [
      "bench"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-101",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bench",
    "actual_sound": "/bɛntʃ/",
    "note": "自然發音推導例外，美式標準音標為 /bɛntʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɛntʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bench 發音為 /bɛntʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bench"
      ]
    }
  },
  "between": {
    "word": "between",
    "ipa": "/bɪˈtwiːn/",
    "syllable": [
      "be",
      "tween"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-102",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "between",
    "actual_sound": "/bɪˈtwiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /bɪˈtwiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/bɪˈtwiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "between 發音為 /bɪˈtwiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "between"
      ]
    }
  },
  "big": {
    "word": "big",
    "ipa": "/bɪɡ/",
    "syllable": [
      "big"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-103",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "big",
    "actual_sound": "/bɪɡ/",
    "note": "自然發音推導例外，美式標準音標為 /bɪɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɪɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "big 發音為 /bɪɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "big"
      ]
    }
  },
  "bird": {
    "word": "bird",
    "ipa": "/bɝːd/",
    "syllable": [
      "bird"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-104",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bird",
    "actual_sound": "/bɝːd/",
    "note": "自然發音推導例外，美式標準音標為 /bɝːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɝːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bird 發音為 /bɝːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bird"
      ]
    }
  },
  "birthday": {
    "word": "birthday",
    "ipa": "/ˈbɝːθ.deɪ/",
    "syllable": [
      "birth",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-105",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "birthday",
    "actual_sound": "/ˈbɝːθ.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɝːθ.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɝːθ.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "birthday 發音為 /ˈbɝːθ.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "birthday"
      ]
    }
  },
  "blackboard": {
    "word": "blackboard",
    "ipa": "/ˈblæk.bɔːrd/",
    "syllable": [
      "black",
      "board"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-106",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "blackboard",
    "actual_sound": "/ˈblæk.bɔːrd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈblæk.bɔːrd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈblæk.bɔːrd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "blackboard 發音為 /ˈblæk.bɔːrd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "blackboard"
      ]
    }
  },
  "blanket": {
    "word": "blanket",
    "ipa": "/ˈblæŋ.kɪt/",
    "syllable": [
      "blan",
      "ket"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-107",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "blanket",
    "actual_sound": "/ˈblæŋ.kɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈblæŋ.kɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈblæŋ.kɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "blanket 發音為 /ˈblæŋ.kɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "blanket"
      ]
    }
  },
  "blind": {
    "word": "blind",
    "ipa": "/blaɪnd/",
    "syllable": [
      "blind"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-108",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "blind",
    "actual_sound": "/blaɪnd/",
    "note": "自然發音推導例外，美式標準音標為 /blaɪnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/blaɪnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "blind 發音為 /blaɪnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "blind"
      ]
    }
  },
  "block": {
    "word": "block",
    "ipa": "/blɑːk/",
    "syllable": [
      "block"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-109",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "block",
    "actual_sound": "/blɑːk/",
    "note": "自然發音推導例外，美式標準音標為 /blɑːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/blɑːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "block 發音為 /blɑːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "block"
      ]
    }
  },
  "blow": {
    "word": "blow",
    "ipa": "/bloʊ/",
    "syllable": [
      "blow"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-110",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "blow",
    "actual_sound": "/bloʊ/",
    "note": "自然發音推導例外，美式標準音標為 /bloʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bloʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "blow 發音為 /bloʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "blow"
      ]
    }
  },
  "blue": {
    "word": "blue",
    "ipa": "/bluː/",
    "syllable": [
      "blue"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-111",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "blue",
    "actual_sound": "/bluː/",
    "note": "自然發音推導例外，美式標準音標為 /bluː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bluː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "blue 發音為 /bluː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "blue"
      ]
    }
  },
  "boat": {
    "word": "boat",
    "ipa": "/boʊt/",
    "syllable": [
      "boat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-112",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "boat",
    "actual_sound": "/boʊt/",
    "note": "自然發音推導例外，美式標準音標為 /boʊt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/boʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "boat 發音為 /boʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "boat"
      ]
    }
  },
  "body": {
    "word": "body",
    "ipa": "/ˈbɑː.di/",
    "syllable": [
      "bod",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-113",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "body",
    "actual_sound": "/ˈbɑː.di/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɑː.di/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɑː.di/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "body 發音為 /ˈbɑː.di/，對應 EPRS R010 特殊例外",
      "related_words": [
        "body"
      ]
    }
  },
  "bookstore": {
    "word": "bookstore",
    "ipa": "/ˈbʊk.stɔːr/",
    "syllable": [
      "book",
      "store"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-114",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "bookstore",
    "actual_sound": "/ˈbʊk.stɔːr/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbʊk.stɔːr/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbʊk.stɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "bookstore 發音為 /ˈbʊk.stɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bookstore"
      ]
    }
  },
  "bored": {
    "word": "bored",
    "ipa": "/bɔːrd/",
    "syllable": [
      "bored"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-115",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bored",
    "actual_sound": "/bɔːrd/",
    "note": "自然發音推導例外，美式標準音標為 /bɔːrd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɔːrd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bored 發音為 /bɔːrd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bored"
      ]
    }
  },
  "boring": {
    "word": "boring",
    "ipa": "/ˈbɔː.rɪŋ/",
    "syllable": [
      "bor",
      "ing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-116",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "boring",
    "actual_sound": "/ˈbɔː.rɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɔː.rɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɔː.rɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "boring 發音為 /ˈbɔː.rɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "boring"
      ]
    }
  },
  "borrow": {
    "word": "borrow",
    "ipa": "/ˈbɑːr.oʊ/",
    "syllable": [
      "bor",
      "row"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-117",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "borrow",
    "actual_sound": "/ˈbɑːr.oʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɑːr.oʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɑːr.oʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "borrow 發音為 /ˈbɑːr.oʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "borrow"
      ]
    }
  },
  "boss": {
    "word": "boss",
    "ipa": "/bɔːs/",
    "syllable": [
      "boss"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-118",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "boss",
    "actual_sound": "/bɔːs/",
    "note": "自然發音推導例外，美式標準音標為 /bɔːs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɔːs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "boss 發音為 /bɔːs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "boss"
      ]
    }
  },
  "both": {
    "word": "both",
    "ipa": "/boʊθ/",
    "syllable": [
      "both"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-119",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "both",
    "actual_sound": "/boʊθ/",
    "note": "自然發音推導例外，美式標準音標為 /boʊθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/boʊθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "both 發音為 /boʊθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "both"
      ]
    }
  },
  "bottle": {
    "word": "bottle",
    "ipa": "/ˈbɑː.t̬əl/",
    "syllable": [
      "bot",
      "tle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-120",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "bottle",
    "actual_sound": "/ˈbɑː.t̬əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɑː.t̬əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɑː.t̬əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "bottle 發音為 /ˈbɑː.t̬əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bottle"
      ]
    }
  },
  "bottom": {
    "word": "bottom",
    "ipa": "/ˈbɑː.t̬əm/",
    "syllable": [
      "bot",
      "tom"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-121",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "bottom",
    "actual_sound": "/ˈbɑː.t̬əm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɑː.t̬əm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɑː.t̬əm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "bottom 發音為 /ˈbɑː.t̬əm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bottom"
      ]
    }
  },
  "bow": {
    "word": "bow",
    "ipa": "/baʊ/",
    "syllable": [
      "bow"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-122",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bow",
    "actual_sound": "/baʊ/",
    "note": "自然發音推導例外，美式標準音標為 /baʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/baʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bow 發音為 /baʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bow"
      ]
    }
  },
  "bowl": {
    "word": "bowl",
    "ipa": "/boʊl/",
    "syllable": [
      "bowl"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-123",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bowl",
    "actual_sound": "/boʊl/",
    "note": "自然發音推導例外，美式標準音標為 /boʊl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/boʊl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bowl 發音為 /boʊl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bowl"
      ]
    }
  },
  "box": {
    "word": "box",
    "ipa": "/bɑːks/",
    "syllable": [
      "box"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-124",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "box",
    "actual_sound": "/bɑːks/",
    "note": "自然發音推導例外，美式標準音標為 /bɑːks/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɑːks/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "box 發音為 /bɑːks/，對應 EPRS R010 特殊例外",
      "related_words": [
        "box"
      ]
    }
  },
  "bread": {
    "word": "bread",
    "ipa": "/brɛd/",
    "syllable": [
      "bread"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-125",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bread",
    "actual_sound": "/brɛd/",
    "note": "自然發音推導例外，美式標準音標為 /brɛd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/brɛd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bread 發音為 /brɛd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bread"
      ]
    }
  },
  "break": {
    "word": "break",
    "ipa": "/breɪk/",
    "syllable": [
      "break"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-126",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "break",
    "actual_sound": "/breɪk/",
    "note": "自然發音推導例外，美式標準音標為 /breɪk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/breɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "break 發音為 /breɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "break"
      ]
    }
  },
  "breakfast": {
    "word": "breakfast",
    "ipa": "/ˈbrɛk.fəst/",
    "syllable": [
      "break",
      "fast"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-127",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "breakfast",
    "actual_sound": "/ˈbrɛk.fəst/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbrɛk.fəst/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbrɛk.fəst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "breakfast 發音為 /ˈbrɛk.fəst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "breakfast"
      ]
    }
  },
  "bright": {
    "word": "bright",
    "ipa": "/braɪt/",
    "syllable": [
      "bright"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-128",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bright",
    "actual_sound": "/braɪt/",
    "note": "自然發音推導例外，美式標準音標為 /braɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/braɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bright 發音為 /braɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bright"
      ]
    }
  },
  "brother": {
    "word": "brother",
    "ipa": "/ˈbrʌð.ɚ/",
    "syllable": [
      "broth",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-129",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "brother",
    "actual_sound": "/ˈbrʌð.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbrʌð.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbrʌð.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "brother 發音為 /ˈbrʌð.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "brother"
      ]
    }
  },
  "brown": {
    "word": "brown",
    "ipa": "/braʊn/",
    "syllable": [
      "brown"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-130",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "brown",
    "actual_sound": "/braʊn/",
    "note": "自然發音推導例外，美式標準音標為 /braʊn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/braʊn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "brown 發音為 /braʊn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "brown"
      ]
    }
  },
  "bug": {
    "word": "bug",
    "ipa": "/bʌɡ/",
    "syllable": [
      "bug"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-131",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "bug",
    "actual_sound": "/bʌɡ/",
    "note": "自然發音推導例外，美式標準音標為 /bʌɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bʌɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "bug 發音為 /bʌɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "bug"
      ]
    }
  },
  "build": {
    "word": "build",
    "ipa": "/bɪld/",
    "syllable": [
      "build"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-132",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "build",
    "actual_sound": "/bɪld/",
    "note": "自然發音推導例外，美式標準音標為 /bɪld/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɪld/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "build 發音為 /bɪld/，對應 EPRS R010 特殊例外",
      "related_words": [
        "build"
      ]
    }
  },
  "burn": {
    "word": "burn",
    "ipa": "/bɝːn/",
    "syllable": [
      "burn"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-133",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "burn",
    "actual_sound": "/bɝːn/",
    "note": "自然發音推導例外，美式標準音標為 /bɝːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/bɝːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "burn 發音為 /bɝːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "burn"
      ]
    }
  },
  "business": {
    "word": "business",
    "ipa": "/ˈbɪz.nɪs/",
    "syllable": [
      "busi",
      "ness"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-134",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "business",
    "actual_sound": "/ˈbɪz.nɪs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɪz.nɪs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɪz.nɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "business 發音為 /ˈbɪz.nɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "business"
      ]
    }
  },
  "businessman": {
    "word": "businessman",
    "ipa": "/ˈbɪz.nɪs.mæn/",
    "syllable": [
      "busi",
      "ness",
      "man"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-135",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "businessman",
    "actual_sound": "/ˈbɪz.nɪs.mæn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɪz.nɪs.mæn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɪz.nɪs.mæn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "businessman 發音為 /ˈbɪz.nɪs.mæn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "businessman"
      ]
    }
  },
  "busy": {
    "word": "busy",
    "ipa": "/ˈbɪz.i/",
    "syllable": [
      "bus",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-136",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "busy",
    "actual_sound": "/ˈbɪz.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbɪz.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbɪz.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "busy 發音為 /ˈbɪz.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "busy"
      ]
    }
  },
  "butter": {
    "word": "butter",
    "ipa": "/ˈbʌt.ɚ/",
    "syllable": [
      "but",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-137",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "butter",
    "actual_sound": "/ˈbʌt.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbʌt.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbʌt.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "butter 發音為 /ˈbʌt.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "butter"
      ]
    }
  },
  "butterfly": {
    "word": "butterfly",
    "ipa": "/ˈbʌt.ɚ.flaɪ/",
    "syllable": [
      "but",
      "ter",
      "fly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-138",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "butterfly",
    "actual_sound": "/ˈbʌt.ɚ.flaɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈbʌt.ɚ.flaɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈbʌt.ɚ.flaɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "butterfly 發音為 /ˈbʌt.ɚ.flaɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "butterfly"
      ]
    }
  },
  "buy": {
    "word": "buy",
    "ipa": "/baɪ/",
    "syllable": [
      "buy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-139",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "buy",
    "actual_sound": "/baɪ/",
    "note": "自然發音推導例外，美式標準音標為 /baɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/baɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "buy 發音為 /baɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "buy"
      ]
    }
  },
  "by": {
    "word": "by",
    "ipa": "/baɪ/",
    "syllable": [
      "by"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-140",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "by",
    "actual_sound": "/baɪ/",
    "note": "自然發音推導例外，美式標準音標為 /baɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/baɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "by 發音為 /baɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "by"
      ]
    }
  },
  "cage": {
    "word": "cage",
    "ipa": "/keɪdʒ/",
    "syllable": [
      "cage"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-141",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cage",
    "actual_sound": "/keɪdʒ/",
    "note": "自然發音推導例外，美式標準音標為 /keɪdʒ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/keɪdʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cage 發音為 /keɪdʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cage"
      ]
    }
  },
  "call": {
    "word": "call",
    "ipa": "/kɔːl/",
    "syllable": [
      "call"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-142",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "call",
    "actual_sound": "/kɔːl/",
    "note": "自然發音推導例外，美式標準音標為 /kɔːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kɔːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "call 發音為 /kɔːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "call"
      ]
    }
  },
  "camera": {
    "word": "camera",
    "ipa": "/ˈkæm.rə/",
    "syllable": [
      "cam",
      "er",
      "a"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-143",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "camera",
    "actual_sound": "/ˈkæm.rə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkæm.rə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkæm.rə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "camera 發音為 /ˈkæm.rə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "camera"
      ]
    }
  },
  "candle": {
    "word": "candle",
    "ipa": "/ˈkæn.dəl/",
    "syllable": [
      "can",
      "dle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-144",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "candle",
    "actual_sound": "/ˈkæn.dəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkæn.dəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkæn.dəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "candle 發音為 /ˈkæn.dəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "candle"
      ]
    }
  },
  "candy": {
    "word": "candy",
    "ipa": "/ˈkæn.di/",
    "syllable": [
      "can",
      "dy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-145",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "candy",
    "actual_sound": "/ˈkæn.di/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkæn.di/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkæn.di/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "candy 發音為 /ˈkæn.di/，對應 EPRS R010 特殊例外",
      "related_words": [
        "candy"
      ]
    }
  },
  "care": {
    "word": "care",
    "ipa": "/kɛr/",
    "syllable": [
      "care"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-146",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "care",
    "actual_sound": "/kɛr/",
    "note": "自然發音推導例外，美式標準音標為 /kɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "care 發音為 /kɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "care"
      ]
    }
  },
  "careful": {
    "word": "careful",
    "ipa": "/ˈkɛr.fəl/",
    "syllable": [
      "care",
      "ful"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-147",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "careful",
    "actual_sound": "/ˈkɛr.fəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkɛr.fəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkɛr.fəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "careful 發音為 /ˈkɛr.fəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "careful"
      ]
    }
  },
  "carry": {
    "word": "carry",
    "ipa": "/ˈkær.i/",
    "syllable": [
      "car",
      "ry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-148",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "carry",
    "actual_sound": "/ˈkær.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkær.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkær.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "carry 發音為 /ˈkær.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "carry"
      ]
    }
  },
  "castle": {
    "word": "castle",
    "ipa": "/ˈkæs.əl/",
    "syllable": [
      "cas",
      "tle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-149",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "castle",
    "actual_sound": "/ˈkæs.əl/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /ˈkæs.əl/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/ˈkæs.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "castle 發音為 /ˈkæs.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "castle"
      ]
    }
  },
  "catch": {
    "word": "catch",
    "ipa": "/kætʃ/",
    "syllable": [
      "catch"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-150",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "catch",
    "actual_sound": "/kætʃ/",
    "note": "自然發音推導例外，美式標準音標為 /kætʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kætʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "catch 發音為 /kætʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "catch"
      ]
    }
  },
  "celebrate": {
    "word": "celebrate",
    "ipa": "/ˈsɛl.ə.breɪt/",
    "syllable": [
      "cel",
      "e",
      "brate"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-151",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "celebrate",
    "actual_sound": "/ˈsɛl.ə.breɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛl.ə.breɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛl.ə.breɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "celebrate 發音為 /ˈsɛl.ə.breɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "celebrate"
      ]
    }
  },
  "cell phone": {
    "word": "cell phone",
    "ipa": "/ˈsɛl.foʊn/",
    "syllable": [
      "cell",
      "phone"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-152",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "cell phone",
    "actual_sound": "/ˈsɛl.foʊn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛl.foʊn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛl.foʊn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "cell phone 發音為 /ˈsɛl.foʊn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cell phone"
      ]
    }
  },
  "cent": {
    "word": "cent",
    "ipa": "/sɛnt/",
    "syllable": [
      "cent"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-153",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cent",
    "actual_sound": "/sɛnt/",
    "note": "自然發音推導例外，美式標準音標為 /sɛnt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɛnt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cent 發音為 /sɛnt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cent"
      ]
    }
  },
  "center": {
    "word": "center",
    "ipa": "/ˈsɛn.tɚ/",
    "syllable": [
      "cen",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-154",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "center",
    "actual_sound": "/ˈsɛn.tɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛn.tɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛn.tɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "center 發音為 /ˈsɛn.tɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "center"
      ]
    }
  },
  "centimeter": {
    "word": "centimeter",
    "ipa": "/ˈsɛn.tə.miː.t̬ɚ/",
    "syllable": [
      "cen",
      "ti",
      "me",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-155",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "centimeter",
    "actual_sound": "/ˈsɛn.tə.miː.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛn.tə.miː.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛn.tə.miː.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "centimeter 發音為 /ˈsɛn.tə.miː.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "centimeter"
      ]
    }
  },
  "chair": {
    "word": "chair",
    "ipa": "/tʃɛr/",
    "syllable": [
      "chair"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-156",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "chair",
    "actual_sound": "/tʃɛr/",
    "note": "自然發音推導例外，美式標準音標為 /tʃɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "chair 發音為 /tʃɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "chair"
      ]
    }
  },
  "chalk": {
    "word": "chalk",
    "ipa": "/tʃɔːk/",
    "syllable": [
      "chalk"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-157",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "chalk",
    "actual_sound": "/tʃɔːk/",
    "note": "自然發音推導例外，美式標準音標為 /tʃɔːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃɔːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "chalk 發音為 /tʃɔːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "chalk"
      ]
    }
  },
  "change": {
    "word": "change",
    "ipa": "/tʃeɪndʒ/",
    "syllable": [
      "change"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-158",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "change",
    "actual_sound": "/tʃeɪndʒ/",
    "note": "自然發音推導例外，美式標準音標為 /tʃeɪndʒ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃeɪndʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "change 發音為 /tʃeɪndʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "change"
      ]
    }
  },
  "cheap": {
    "word": "cheap",
    "ipa": "/tʃiːp/",
    "syllable": [
      "cheap"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-159",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cheap",
    "actual_sound": "/tʃiːp/",
    "note": "自然發音推導例外，美式標準音標為 /tʃiːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃiːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cheap 發音為 /tʃiːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cheap"
      ]
    }
  },
  "cheat": {
    "word": "cheat",
    "ipa": "/tʃiːt/",
    "syllable": [
      "cheat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-160",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cheat",
    "actual_sound": "/tʃiːt/",
    "note": "自然發音推導例外，美式標準音標為 /tʃiːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃiːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cheat 發音為 /tʃiːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cheat"
      ]
    }
  },
  "check": {
    "word": "check",
    "ipa": "/tʃɛk/",
    "syllable": [
      "check"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-161",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "check",
    "actual_sound": "/tʃɛk/",
    "note": "自然發音推導例外，美式標準音標為 /tʃɛk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃɛk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "check 發音為 /tʃɛk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "check"
      ]
    }
  },
  "cheer": {
    "word": "cheer",
    "ipa": "/tʃɪr/",
    "syllable": [
      "cheer"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-162",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cheer",
    "actual_sound": "/tʃɪr/",
    "note": "自然發音推導例外，美式標準音標為 /tʃɪr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cheer 發音為 /tʃɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cheer"
      ]
    }
  },
  "cheese": {
    "word": "cheese",
    "ipa": "/tʃiːz/",
    "syllable": [
      "cheese"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-163",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cheese",
    "actual_sound": "/tʃiːz/",
    "note": "自然發音推導例外，美式標準音標為 /tʃiːz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃiːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cheese 發音為 /tʃiːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cheese"
      ]
    }
  },
  "chess": {
    "word": "chess",
    "ipa": "/tʃɛs/",
    "syllable": [
      "chess"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-164",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "chess",
    "actual_sound": "/tʃɛs/",
    "note": "自然發音推導例外，美式標準音標為 /tʃɛs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃɛs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "chess 發音為 /tʃɛs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "chess"
      ]
    }
  },
  "chicken": {
    "word": "chicken",
    "ipa": "/ˈtʃɪk.ɪn/",
    "syllable": [
      "chick",
      "en"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-165",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "chicken",
    "actual_sound": "/ˈtʃɪk.ɪn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtʃɪk.ɪn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtʃɪk.ɪn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "chicken 發音為 /ˈtʃɪk.ɪn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "chicken"
      ]
    }
  },
  "child": {
    "word": "child",
    "ipa": "/tʃaɪld/",
    "syllable": [
      "child"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-166",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "child",
    "actual_sound": "/tʃaɪld/",
    "note": "自然發音推導例外，美式標準音標為 /tʃaɪld/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃaɪld/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "child 發音為 /tʃaɪld/，對應 EPRS R010 特殊例外",
      "related_words": [
        "child"
      ]
    }
  },
  "china": {
    "word": "China",
    "ipa": "/ˈtʃaɪ.nə/",
    "syllable": [
      "Chi",
      "na"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-167",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "China",
    "actual_sound": "/ˈtʃaɪ.nə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtʃaɪ.nə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtʃaɪ.nə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "China 發音為 /ˈtʃaɪ.nə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "China"
      ]
    }
  },
  "chinese": {
    "word": "Chinese",
    "ipa": "/ˌtʃaɪˈniːz/",
    "syllable": [
      "Chi",
      "nese"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-168",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Chinese",
    "actual_sound": "/ˌtʃaɪˈniːz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌtʃaɪˈniːz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌtʃaɪˈniːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Chinese 發音為 /ˌtʃaɪˈniːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Chinese"
      ]
    }
  },
  "chocolate": {
    "word": "chocolate",
    "ipa": "/ˈtʃɑːk.lət/",
    "syllable": [
      "choc",
      "o",
      "late"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-169",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "chocolate",
    "actual_sound": "/ˈtʃɑːk.lət/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtʃɑːk.lət/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtʃɑːk.lət/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "chocolate 發音為 /ˈtʃɑːk.lət/，對應 EPRS R010 特殊例外",
      "related_words": [
        "chocolate"
      ]
    }
  },
  "choose": {
    "word": "choose",
    "ipa": "/tʃuːz/",
    "syllable": [
      "choose"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-170",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "choose",
    "actual_sound": "/tʃuːz/",
    "note": "自然發音推導例外，美式標準音標為 /tʃuːz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃuːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "choose 發音為 /tʃuːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "choose"
      ]
    }
  },
  "chopsticks": {
    "word": "chopsticks",
    "ipa": "/ˈtʃɑːp.stɪks/",
    "syllable": [
      "chop",
      "sticks"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-171",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "chopsticks",
    "actual_sound": "/ˈtʃɑːp.stɪks/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtʃɑːp.stɪks/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtʃɑːp.stɪks/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "chopsticks 發音為 /ˈtʃɑːp.stɪks/，對應 EPRS R010 特殊例外",
      "related_words": [
        "chopsticks"
      ]
    }
  },
  "christmas": {
    "word": "Christmas",
    "ipa": "/ˈkrɪs.məs/",
    "syllable": [
      "Christ",
      "mas"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-172",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Christmas",
    "actual_sound": "/ˈkrɪs.məs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkrɪs.məs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkrɪs.məs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Christmas 發音為 /ˈkrɪs.məs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Christmas"
      ]
    }
  },
  "church": {
    "word": "church",
    "ipa": "/tʃɝːtʃ/",
    "syllable": [
      "church"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-173",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "church",
    "actual_sound": "/tʃɝːtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /tʃɝːtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʃɝːtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "church 發音為 /tʃɝːtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "church"
      ]
    }
  },
  "circle": {
    "word": "circle",
    "ipa": "/ˈsɝː.kəl/",
    "syllable": [
      "cir",
      "cle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-174",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "circle",
    "actual_sound": "/ˈsɝː.kəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɝː.kəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɝː.kəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "circle 發音為 /ˈsɝː.kəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "circle"
      ]
    }
  },
  "city": {
    "word": "city",
    "ipa": "/ˈsɪt.i/",
    "syllable": [
      "cit",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-175",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "city",
    "actual_sound": "/ˈsɪt.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɪt.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɪt.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "city 發音為 /ˈsɪt.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "city"
      ]
    }
  },
  "class": {
    "word": "class",
    "ipa": "/klæs/",
    "syllable": [
      "class"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-176",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "class",
    "actual_sound": "/klæs/",
    "note": "自然發音推導例外，美式標準音標為 /klæs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/klæs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "class 發音為 /klæs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "class"
      ]
    }
  },
  "classmate": {
    "word": "classmate",
    "ipa": "/ˈklæs.meɪt/",
    "syllable": [
      "class",
      "mate"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-177",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "classmate",
    "actual_sound": "/ˈklæs.meɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈklæs.meɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈklæs.meɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "classmate 發音為 /ˈklæs.meɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "classmate"
      ]
    }
  },
  "classroom": {
    "word": "classroom",
    "ipa": "/ˈklæs.ruːm/",
    "syllable": [
      "class",
      "room"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-178",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "classroom",
    "actual_sound": "/ˈklæs.ruːm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈklæs.ruːm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈklæs.ruːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "classroom 發音為 /ˈklæs.ruːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "classroom"
      ]
    }
  },
  "clean": {
    "word": "clean",
    "ipa": "/kliːn/",
    "syllable": [
      "clean"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-179",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "clean",
    "actual_sound": "/kliːn/",
    "note": "自然發音推導例外，美式標準音標為 /kliːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kliːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "clean 發音為 /kliːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "clean"
      ]
    }
  },
  "clear": {
    "word": "clear",
    "ipa": "/klɪr/",
    "syllable": [
      "clear"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-180",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "clear",
    "actual_sound": "/klɪr/",
    "note": "自然發音推導例外，美式標準音標為 /klɪr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/klɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "clear 發音為 /klɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "clear"
      ]
    }
  },
  "clerk": {
    "word": "clerk",
    "ipa": "/klɝːk/",
    "syllable": [
      "clerk"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-181",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "clerk",
    "actual_sound": "/klɝːk/",
    "note": "自然發音推導例外，美式標準音標為 /klɝːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/klɝːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "clerk 發音為 /klɝːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "clerk"
      ]
    }
  },
  "climb": {
    "word": "climb",
    "ipa": "/klaɪm/",
    "syllable": [
      "climb"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-182",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "climb",
    "actual_sound": "/klaɪm/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /klaɪm/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/klaɪm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "climb 發音為 /klaɪm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "climb"
      ]
    }
  },
  "clock": {
    "word": "clock",
    "ipa": "/klɑːk/",
    "syllable": [
      "clock"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-183",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "clock",
    "actual_sound": "/klɑːk/",
    "note": "自然發音推導例外，美式標準音標為 /klɑːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/klɑːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "clock 發音為 /klɑːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "clock"
      ]
    }
  },
  "close": {
    "word": "close",
    "ipa": "/kloʊz/",
    "syllable": [
      "close"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-184",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "close",
    "actual_sound": "/kloʊz/",
    "note": "自然發音推導例外，美式標準音標為 /kloʊz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kloʊz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "close 發音為 /kloʊz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "close"
      ]
    }
  },
  "clothes": {
    "word": "clothes",
    "ipa": "/kloʊðz/",
    "syllable": [
      "clothes"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-185",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "clothes",
    "actual_sound": "/kloʊðz/",
    "note": "自然發音推導例外，美式標準音標為 /kloʊðz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kloʊðz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "clothes 發音為 /kloʊðz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "clothes"
      ]
    }
  },
  "cloudy": {
    "word": "cloudy",
    "ipa": "/ˈklaʊ.di/",
    "syllable": [
      "cloud",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-186",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "cloudy",
    "actual_sound": "/ˈklaʊ.di/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈklaʊ.di/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈklaʊ.di/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "cloudy 發音為 /ˈklaʊ.di/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cloudy"
      ]
    }
  },
  "coat": {
    "word": "coat",
    "ipa": "/koʊt/",
    "syllable": [
      "coat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-187",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "coat",
    "actual_sound": "/koʊt/",
    "note": "自然發音推導例外，美式標準音標為 /koʊt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/koʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "coat 發音為 /koʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "coat"
      ]
    }
  },
  "coffee": {
    "word": "coffee",
    "ipa": "/ˈkɑː.fi/",
    "syllable": [
      "cof",
      "fee"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-188",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "coffee",
    "actual_sound": "/ˈkɑː.fi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkɑː.fi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkɑː.fi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "coffee 發音為 /ˈkɑː.fi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "coffee"
      ]
    }
  },
  "cold": {
    "word": "cold",
    "ipa": "/koʊld/",
    "syllable": [
      "cold"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-189",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cold",
    "actual_sound": "/koʊld/",
    "note": "自然發音推導例外，美式標準音標為 /koʊld/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/koʊld/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cold 發音為 /koʊld/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cold"
      ]
    }
  },
  "collect": {
    "word": "collect",
    "ipa": "/kəˈlɛkt/",
    "syllable": [
      "col",
      "lect"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-190",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "collect",
    "actual_sound": "/kəˈlɛkt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /kəˈlɛkt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/kəˈlɛkt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "collect 發音為 /kəˈlɛkt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "collect"
      ]
    }
  },
  "color": {
    "word": "color",
    "ipa": "/ˈkʌl.ɚ/",
    "syllable": [
      "col",
      "or"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-191",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "color",
    "actual_sound": "/ˈkʌl.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkʌl.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkʌl.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "color 發音為 /ˈkʌl.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "color"
      ]
    }
  },
  "comb": {
    "word": "comb",
    "ipa": "/koʊm/",
    "syllable": [
      "comb"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-192",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "comb",
    "actual_sound": "/koʊm/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /koʊm/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/koʊm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "comb 發音為 /koʊm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "comb"
      ]
    }
  },
  "comfortable": {
    "word": "comfortable",
    "ipa": "/ˈkʌm.fɚ.t̬ə.bəl/",
    "syllable": [
      "com",
      "fort",
      "a",
      "ble"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-193",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "comfortable",
    "actual_sound": "/ˈkʌm.fɚ.t̬ə.bəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkʌm.fɚ.t̬ə.bəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkʌm.fɚ.t̬ə.bəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "comfortable 發音為 /ˈkʌm.fɚ.t̬ə.bəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "comfortable"
      ]
    }
  },
  "comic": {
    "word": "comic",
    "ipa": "/ˈkɑː.mɪk/",
    "syllable": [
      "com",
      "ic"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-194",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "comic",
    "actual_sound": "/ˈkɑː.mɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkɑː.mɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkɑː.mɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "comic 發音為 /ˈkɑː.mɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "comic"
      ]
    }
  },
  "common": {
    "word": "common",
    "ipa": "/ˈkɑː.mən/",
    "syllable": [
      "com",
      "mon"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-195",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "common",
    "actual_sound": "/ˈkɑː.mən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkɑː.mən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkɑː.mən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "common 發音為 /ˈkɑː.mən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "common"
      ]
    }
  },
  "computer": {
    "word": "computer",
    "ipa": "/kəmˈpjuː.t̬ɚ/",
    "syllable": [
      "com",
      "put",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-196",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "computer",
    "actual_sound": "/kəmˈpjuː.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /kəmˈpjuː.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/kəmˈpjuː.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "computer 發音為 /kəmˈpjuː.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "computer"
      ]
    }
  },
  "convenient": {
    "word": "convenient",
    "ipa": "/kənˈviː.njənt/",
    "syllable": [
      "con",
      "ven",
      "ient"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-197",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "convenient",
    "actual_sound": "/kənˈviː.njənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /kənˈviː.njənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/kənˈviː.njənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "convenient 發音為 /kənˈviː.njənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "convenient"
      ]
    }
  },
  "cookie": {
    "word": "cookie",
    "ipa": "/ˈkʊk.i/",
    "syllable": [
      "cook",
      "ie"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-198",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "cookie",
    "actual_sound": "/ˈkʊk.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkʊk.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkʊk.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "cookie 發音為 /ˈkʊk.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cookie"
      ]
    }
  },
  "cool": {
    "word": "cool",
    "ipa": "/kuːl/",
    "syllable": [
      "cool"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-199",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cool",
    "actual_sound": "/kuːl/",
    "note": "自然發音推導例外，美式標準音標為 /kuːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kuːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cool 發音為 /kuːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cool"
      ]
    }
  },
  "copy": {
    "word": "copy",
    "ipa": "/ˈkɑː.pi/",
    "syllable": [
      "cop",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-200",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "copy",
    "actual_sound": "/ˈkɑː.pi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkɑː.pi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkɑː.pi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "copy 發音為 /ˈkɑː.pi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "copy"
      ]
    }
  },
  "corner": {
    "word": "corner",
    "ipa": "/ˈkɔːr.nɚ/",
    "syllable": [
      "cor",
      "ner"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-201",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "corner",
    "actual_sound": "/ˈkɔːr.nɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkɔːr.nɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkɔːr.nɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "corner 發音為 /ˈkɔːr.nɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "corner"
      ]
    }
  },
  "correct": {
    "word": "correct",
    "ipa": "/kəˈrɛkt/",
    "syllable": [
      "cor",
      "rect"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-202",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "correct",
    "actual_sound": "/kəˈrɛkt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /kəˈrɛkt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/kəˈrɛkt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "correct 發音為 /kəˈrɛkt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "correct"
      ]
    }
  },
  "cost": {
    "word": "cost",
    "ipa": "/kɔːst/",
    "syllable": [
      "cost"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-203",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cost",
    "actual_sound": "/kɔːst/",
    "note": "自然發音推導例外，美式標準音標為 /kɔːst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kɔːst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cost 發音為 /kɔːst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cost"
      ]
    }
  },
  "couch": {
    "word": "couch",
    "ipa": "/kaʊtʃ/",
    "syllable": [
      "couch"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-204",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "couch",
    "actual_sound": "/kaʊtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /kaʊtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kaʊtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "couch 發音為 /kaʊtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "couch"
      ]
    }
  },
  "count": {
    "word": "count",
    "ipa": "/kaʊnt/",
    "syllable": [
      "count"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-205",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "count",
    "actual_sound": "/kaʊnt/",
    "note": "自然發音推導例外，美式標準音標為 /kaʊnt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kaʊnt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "count 發音為 /kaʊnt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "count"
      ]
    }
  },
  "country": {
    "word": "country",
    "ipa": "/ˈkʌn.tri/",
    "syllable": [
      "coun",
      "try"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-206",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "country",
    "actual_sound": "/ˈkʌn.tri/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkʌn.tri/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkʌn.tri/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "country 發音為 /ˈkʌn.tri/，對應 EPRS R010 特殊例外",
      "related_words": [
        "country"
      ]
    }
  },
  "course": {
    "word": "course",
    "ipa": "/kɔːrs/",
    "syllable": [
      "course"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-207",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "course",
    "actual_sound": "/kɔːrs/",
    "note": "自然發音推導例外，美式標準音標為 /kɔːrs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kɔːrs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "course 發音為 /kɔːrs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "course"
      ]
    }
  },
  "cousin": {
    "word": "cousin",
    "ipa": "/ˈkʌz.ən/",
    "syllable": [
      "cous",
      "in"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-208",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "cousin",
    "actual_sound": "/ˈkʌz.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkʌz.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkʌz.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "cousin 發音為 /ˈkʌz.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cousin"
      ]
    }
  },
  "cover": {
    "word": "cover",
    "ipa": "/ˈkʌv.ɚ/",
    "syllable": [
      "cov",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-209",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "cover",
    "actual_sound": "/ˈkʌv.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkʌv.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkʌv.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "cover 發音為 /ˈkʌv.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cover"
      ]
    }
  },
  "cow": {
    "word": "cow",
    "ipa": "/kaʊ/",
    "syllable": [
      "cow"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-210",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cow",
    "actual_sound": "/kaʊ/",
    "note": "自然發音推導例外，美式標準音標為 /kaʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kaʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cow 發音為 /kaʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cow"
      ]
    }
  },
  "cowboy": {
    "word": "cowboy",
    "ipa": "/ˈkaʊ.bɔɪ/",
    "syllable": [
      "cow",
      "boy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-211",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "cowboy",
    "actual_sound": "/ˈkaʊ.bɔɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkaʊ.bɔɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkaʊ.bɔɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "cowboy 發音為 /ˈkaʊ.bɔɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cowboy"
      ]
    }
  },
  "crazy": {
    "word": "crazy",
    "ipa": "/ˈkreɪ.zi/",
    "syllable": [
      "cra",
      "zy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-212",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "crazy",
    "actual_sound": "/ˈkreɪ.zi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkreɪ.zi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkreɪ.zi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "crazy 發音為 /ˈkreɪ.zi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "crazy"
      ]
    }
  },
  "cross": {
    "word": "cross",
    "ipa": "/krɔːs/",
    "syllable": [
      "cross"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-213",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cross",
    "actual_sound": "/krɔːs/",
    "note": "自然發音推導例外，美式標準音標為 /krɔːs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/krɔːs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cross 發音為 /krɔːs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cross"
      ]
    }
  },
  "cry": {
    "word": "cry",
    "ipa": "/kraɪ/",
    "syllable": [
      "cry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-214",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "cry",
    "actual_sound": "/kraɪ/",
    "note": "自然發音推導例外，美式標準音標為 /kraɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kraɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "cry 發音為 /kraɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "cry"
      ]
    }
  },
  "dangerous": {
    "word": "dangerous",
    "ipa": "/ˈdeɪn.dʒɚ.əs/",
    "syllable": [
      "dan",
      "ger",
      "ous"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-215",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dangerous",
    "actual_sound": "/ˈdeɪn.dʒɚ.əs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdeɪn.dʒɚ.əs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdeɪn.dʒɚ.əs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dangerous 發音為 /ˈdeɪn.dʒɚ.əs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dangerous"
      ]
    }
  },
  "daughter": {
    "word": "daughter",
    "ipa": "/ˈdɔː.t̬ɚ/",
    "syllable": [
      "daugh",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-216",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "daughter",
    "actual_sound": "/ˈdɔː.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɔː.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɔː.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "daughter 發音為 /ˈdɔː.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "daughter"
      ]
    }
  },
  "dead": {
    "word": "dead",
    "ipa": "/dɛd/",
    "syllable": [
      "dead"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-217",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "dead",
    "actual_sound": "/dɛd/",
    "note": "自然發音推導例外，美式標準音標為 /dɛd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dɛd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "dead 發音為 /dɛd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dead"
      ]
    }
  },
  "dear": {
    "word": "dear",
    "ipa": "/dɪr/",
    "syllable": [
      "dear"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-218",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "dear",
    "actual_sound": "/dɪr/",
    "note": "自然發音推導例外，美式標準音標為 /dɪr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "dear 發音為 /dɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dear"
      ]
    }
  },
  "december": {
    "word": "December",
    "ipa": "/dɪˈsɛm.bɚ/",
    "syllable": [
      "De",
      "cem",
      "ber"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-219",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "December",
    "actual_sound": "/dɪˈsɛm.bɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /dɪˈsɛm.bɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/dɪˈsɛm.bɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "December 發音為 /dɪˈsɛm.bɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "December"
      ]
    }
  },
  "delicious": {
    "word": "delicious",
    "ipa": "/dɪˈlɪʃ.əs/",
    "syllable": [
      "de",
      "li",
      "cious"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-220",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "delicious",
    "actual_sound": "/dɪˈlɪʃ.əs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /dɪˈlɪʃ.əs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/dɪˈlɪʃ.əs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "delicious 發音為 /dɪˈlɪʃ.əs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "delicious"
      ]
    }
  },
  "dentist": {
    "word": "dentist",
    "ipa": "/ˈdɛn.tɪst/",
    "syllable": [
      "den",
      "tist"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-221",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dentist",
    "actual_sound": "/ˈdɛn.tɪst/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɛn.tɪst/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɛn.tɪst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dentist 發音為 /ˈdɛn.tɪst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dentist"
      ]
    }
  },
  "department store": {
    "word": "department store",
    "ipa": "/dɪˈpɑːrt.mənt stɔːr/",
    "syllable": [
      "de",
      "part",
      "ment",
      "store"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-222",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "department store",
    "actual_sound": "/dɪˈpɑːrt.mənt stɔːr/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /dɪˈpɑːrt.mənt stɔːr/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/dɪˈpɑːrt.mənt stɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "department store 發音為 /dɪˈpɑːrt.mənt stɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "department store"
      ]
    }
  },
  "desk": {
    "word": "desk",
    "ipa": "/dɛsk/",
    "syllable": [
      "desk"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-223",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "desk",
    "actual_sound": "/dɛsk/",
    "note": "自然發音推導例外，美式標準音標為 /dɛsk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dɛsk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "desk 發音為 /dɛsk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "desk"
      ]
    }
  },
  "dictionary": {
    "word": "dictionary",
    "ipa": "/ˈdɪk.ʃə.nɛr.i/",
    "syllable": [
      "dic",
      "tion",
      "ar",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-224",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dictionary",
    "actual_sound": "/ˈdɪk.ʃə.nɛr.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɪk.ʃə.nɛr.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɪk.ʃə.nɛr.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dictionary 發音為 /ˈdɪk.ʃə.nɛr.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dictionary"
      ]
    }
  },
  "die": {
    "word": "die",
    "ipa": "/daɪ/",
    "syllable": [
      "die"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-225",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "die",
    "actual_sound": "/daɪ/",
    "note": "自然發音推導例外，美式標準音標為 /daɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/daɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "die 發音為 /daɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "die"
      ]
    }
  },
  "different": {
    "word": "different",
    "ipa": "/ˈdɪf.ɚ.ənt/",
    "syllable": [
      "dif",
      "fer",
      "ent"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-226",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "different",
    "actual_sound": "/ˈdɪf.ɚ.ənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɪf.ɚ.ənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɪf.ɚ.ənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "different 發音為 /ˈdɪf.ɚ.ənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "different"
      ]
    }
  },
  "difficult": {
    "word": "difficult",
    "ipa": "/ˈdɪf.ə.kəlt/",
    "syllable": [
      "dif",
      "fi",
      "cult"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-227",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "difficult",
    "actual_sound": "/ˈdɪf.ə.kəlt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɪf.ə.kəlt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɪf.ə.kəlt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "difficult 發音為 /ˈdɪf.ə.kəlt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "difficult"
      ]
    }
  },
  "dig": {
    "word": "dig",
    "ipa": "/dɪɡ/",
    "syllable": [
      "dig"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-228",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "dig",
    "actual_sound": "/dɪɡ/",
    "note": "自然發音推導例外，美式標準音標為 /dɪɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dɪɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "dig 發音為 /dɪɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dig"
      ]
    }
  },
  "dining room": {
    "word": "dining room",
    "ipa": "/ˈdaɪ.nɪŋ ruːm/",
    "syllable": [
      "din",
      "ing",
      "room"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-229",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dining room",
    "actual_sound": "/ˈdaɪ.nɪŋ ruːm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdaɪ.nɪŋ ruːm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdaɪ.nɪŋ ruːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dining room 發音為 /ˈdaɪ.nɪŋ ruːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dining room"
      ]
    }
  },
  "dinner": {
    "word": "dinner",
    "ipa": "/ˈdɪn.ɚ/",
    "syllable": [
      "din",
      "ner"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-230",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dinner",
    "actual_sound": "/ˈdɪn.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɪn.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɪn.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dinner 發音為 /ˈdɪn.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dinner"
      ]
    }
  },
  "dirty": {
    "word": "dirty",
    "ipa": "/ˈdɝː.ti/",
    "syllable": [
      "dirt",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-231",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dirty",
    "actual_sound": "/ˈdɝː.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɝː.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɝː.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dirty 發音為 /ˈdɝː.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dirty"
      ]
    }
  },
  "doctor": {
    "word": "doctor",
    "ipa": "/ˈdɑːk.tɚ/",
    "syllable": [
      "doc",
      "tor"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-232",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "doctor",
    "actual_sound": "/ˈdɑːk.tɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɑːk.tɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɑːk.tɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "doctor 發音為 /ˈdɑːk.tɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "doctor"
      ]
    }
  },
  "dodge ball": {
    "word": "dodge ball",
    "ipa": "/ˈdɑːdʒ bɔːl/",
    "syllable": [
      "dodge",
      "ball"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-233",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dodge ball",
    "actual_sound": "/ˈdɑːdʒ bɔːl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɑːdʒ bɔːl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɑːdʒ bɔːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dodge ball 發音為 /ˈdɑːdʒ bɔːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dodge ball"
      ]
    }
  },
  "dog": {
    "word": "dog",
    "ipa": "/dɔːɡ/",
    "syllable": [
      "dog"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-234",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "dog",
    "actual_sound": "/dɔːɡ/",
    "note": "自然發音推導例外，美式標準音標為 /dɔːɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dɔːɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "dog 發音為 /dɔːɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dog"
      ]
    }
  },
  "doll": {
    "word": "doll",
    "ipa": "/dɑːl/",
    "syllable": [
      "doll"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-235",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "doll",
    "actual_sound": "/dɑːl/",
    "note": "自然發音推導例外，美式標準音標為 /dɑːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dɑːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "doll 發音為 /dɑːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "doll"
      ]
    }
  },
  "dollar": {
    "word": "dollar",
    "ipa": "/ˈdɑː.lɚ/",
    "syllable": [
      "dol",
      "lar"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-236",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dollar",
    "actual_sound": "/ˈdɑː.lɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdɑː.lɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdɑː.lɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dollar 發音為 /ˈdɑː.lɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dollar"
      ]
    }
  },
  "door": {
    "word": "door",
    "ipa": "/dɔːr/",
    "syllable": [
      "door"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-237",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "door",
    "actual_sound": "/dɔːr/",
    "note": "自然發音推導例外，美式標準音標為 /dɔːr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "door 發音為 /dɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "door"
      ]
    }
  },
  "dot": {
    "word": "dot",
    "ipa": "/dɑːt/",
    "syllable": [
      "dot"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-238",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "dot",
    "actual_sound": "/dɑːt/",
    "note": "自然發音推導例外，美式標準音標為 /dɑːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dɑːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "dot 發音為 /dɑːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dot"
      ]
    }
  },
  "down": {
    "word": "down",
    "ipa": "/daʊn/",
    "syllable": [
      "down"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-239",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "down",
    "actual_sound": "/daʊn/",
    "note": "自然發音推導例外，美式標準音標為 /daʊn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/daʊn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "down 發音為 /daʊn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "down"
      ]
    }
  },
  "dozen": {
    "word": "dozen",
    "ipa": "/ˈdʌz.ən/",
    "syllable": [
      "doz",
      "en"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-240",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dozen",
    "actual_sound": "/ˈdʌz.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdʌz.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdʌz.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dozen 發音為 /ˈdʌz.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dozen"
      ]
    }
  },
  "dragon": {
    "word": "dragon",
    "ipa": "/ˈdræɡ.ən/",
    "syllable": [
      "drag",
      "on"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-241",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dragon",
    "actual_sound": "/ˈdræɡ.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdræɡ.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdræɡ.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dragon 發音為 /ˈdræɡ.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dragon"
      ]
    }
  },
  "draw": {
    "word": "draw",
    "ipa": "/drɔː/",
    "syllable": [
      "draw"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-242",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "draw",
    "actual_sound": "/drɔː/",
    "note": "自然發音推導例外，美式標準音標為 /drɔː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/drɔː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "draw 發音為 /drɔː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "draw"
      ]
    }
  },
  "drawer": {
    "word": "drawer",
    "ipa": "/ˈdrɔː.ɚ/",
    "syllable": [
      "draw",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-243",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "drawer",
    "actual_sound": "/ˈdrɔː.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdrɔː.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdrɔː.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "drawer 發音為 /ˈdrɔː.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "drawer"
      ]
    }
  },
  "dream": {
    "word": "dream",
    "ipa": "/driːm/",
    "syllable": [
      "dream"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-244",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "dream",
    "actual_sound": "/driːm/",
    "note": "自然發音推導例外，美式標準音標為 /driːm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/driːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "dream 發音為 /driːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dream"
      ]
    }
  },
  "dress": {
    "word": "dress",
    "ipa": "/drɛs/",
    "syllable": [
      "dress"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-245",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "dress",
    "actual_sound": "/drɛs/",
    "note": "自然發音推導例外，美式標準音標為 /drɛs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/drɛs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "dress 發音為 /drɛs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dress"
      ]
    }
  },
  "drink": {
    "word": "drink",
    "ipa": "/drɪŋk/",
    "syllable": [
      "drink"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-246",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "drink",
    "actual_sound": "/drɪŋk/",
    "note": "自然發音推導例外，美式標準音標為 /drɪŋk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/drɪŋk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "drink 發音為 /drɪŋk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "drink"
      ]
    }
  },
  "driver": {
    "word": "driver",
    "ipa": "/ˈdraɪ.vɚ/",
    "syllable": [
      "driv",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-247",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "driver",
    "actual_sound": "/ˈdraɪ.vɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdraɪ.vɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdraɪ.vɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "driver 發音為 /ˈdraɪ.vɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "driver"
      ]
    }
  },
  "drop": {
    "word": "drop",
    "ipa": "/drɑːp/",
    "syllable": [
      "drop"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-248",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "drop",
    "actual_sound": "/drɑːp/",
    "note": "自然發音推導例外，美式標準音標為 /drɑːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/drɑːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "drop 發音為 /drɑːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "drop"
      ]
    }
  },
  "dry": {
    "word": "dry",
    "ipa": "/draɪ/",
    "syllable": [
      "dry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-249",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "dry",
    "actual_sound": "/draɪ/",
    "note": "自然發音推導例外，美式標準音標為 /draɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/draɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "dry 發音為 /draɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dry"
      ]
    }
  },
  "dumpling": {
    "word": "dumpling",
    "ipa": "/ˈdʌm.plɪŋ/",
    "syllable": [
      "dump",
      "ling"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-250",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "dumpling",
    "actual_sound": "/ˈdʌm.plɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdʌm.plɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdʌm.plɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "dumpling 發音為 /ˈdʌm.plɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "dumpling"
      ]
    }
  },
  "during": {
    "word": "during",
    "ipa": "/ˈdʊr.ɪŋ/",
    "syllable": [
      "dur",
      "ing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-251",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "during",
    "actual_sound": "/ˈdʊr.ɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdʊr.ɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdʊr.ɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "during 發音為 /ˈdʊr.ɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "during"
      ]
    }
  },
  "each": {
    "word": "each",
    "ipa": "/iːtʃ/",
    "syllable": [
      "each"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-252",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "each",
    "actual_sound": "/iːtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /iːtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/iːtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "each 發音為 /iːtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "each"
      ]
    }
  },
  "ear": {
    "word": "ear",
    "ipa": "/ɪr/",
    "syllable": [
      "ear"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-253",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "ear",
    "actual_sound": "/ɪr/",
    "note": "自然發音推導例外，美式標準音標為 /ɪr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "ear 發音為 /ɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ear"
      ]
    }
  },
  "early": {
    "word": "early",
    "ipa": "/ˈɝː.li/",
    "syllable": [
      "ear",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-254",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "early",
    "actual_sound": "/ˈɝː.li/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɝː.li/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɝː.li/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "early 發音為 /ˈɝː.li/，對應 EPRS R010 特殊例外",
      "related_words": [
        "early"
      ]
    }
  },
  "earth": {
    "word": "earth",
    "ipa": "/ɝːθ/",
    "syllable": [
      "earth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-255",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "earth",
    "actual_sound": "/ɝːθ/",
    "note": "自然發音推導例外，美式標準音標為 /ɝːθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɝːθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "earth 發音為 /ɝːθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "earth"
      ]
    }
  },
  "east": {
    "word": "east",
    "ipa": "/iːst/",
    "syllable": [
      "east"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-256",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "east",
    "actual_sound": "/iːst/",
    "note": "自然發音推導例外，美式標準音標為 /iːst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/iːst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "east 發音為 /iːst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "east"
      ]
    }
  },
  "easter": {
    "word": "Easter",
    "ipa": "/ˈiː.stɚ/",
    "syllable": [
      "Eas",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-257",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Easter",
    "actual_sound": "/ˈiː.stɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈiː.stɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈiː.stɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Easter 發音為 /ˈiː.stɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Easter"
      ]
    }
  },
  "easy": {
    "word": "easy",
    "ipa": "/ˈiː.zi/",
    "syllable": [
      "eas",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-258",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "easy",
    "actual_sound": "/ˈiː.zi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈiː.zi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈiː.zi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "easy 發音為 /ˈiː.zi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "easy"
      ]
    }
  },
  "eat": {
    "word": "eat",
    "ipa": "/iːt/",
    "syllable": [
      "eat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-259",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "eat",
    "actual_sound": "/iːt/",
    "note": "自然發音推導例外，美式標準音標為 /iːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/iːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "eat 發音為 /iːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eat"
      ]
    }
  },
  "egg": {
    "word": "egg",
    "ipa": "/ɛɡ/",
    "syllable": [
      "egg"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-260",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "egg",
    "actual_sound": "/ɛɡ/",
    "note": "自然發音推導例外，美式標準音標為 /ɛɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɛɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "egg 發音為 /ɛɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "egg"
      ]
    }
  },
  "eight": {
    "word": "eight",
    "ipa": "/eɪt/",
    "syllable": [
      "eight"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-261",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "eight",
    "actual_sound": "/eɪt/",
    "note": "自然發音推導例外，美式標準音標為 /eɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/eɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "eight 發音為 /eɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eight"
      ]
    }
  },
  "eighteen": {
    "word": "eighteen",
    "ipa": "/ˌeɪˈtiːn/",
    "syllable": [
      "eigh",
      "teen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-262",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "eighteen",
    "actual_sound": "/ˌeɪˈtiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌeɪˈtiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌeɪˈtiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "eighteen 發音為 /ˌeɪˈtiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eighteen"
      ]
    }
  },
  "eighth": {
    "word": "eighth",
    "ipa": "/eɪtθ/",
    "syllable": [
      "eighth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-263",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "eighth",
    "actual_sound": "/eɪtθ/",
    "note": "自然發音推導例外，美式標準音標為 /eɪtθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/eɪtθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "eighth 發音為 /eɪtθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eighth"
      ]
    }
  },
  "eighty": {
    "word": "eighty",
    "ipa": "/ˈeɪ.ti/",
    "syllable": [
      "eigh",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-264",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "eighty",
    "actual_sound": "/ˈeɪ.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈeɪ.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈeɪ.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "eighty 發音為 /ˈeɪ.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eighty"
      ]
    }
  },
  "either": {
    "word": "either",
    "ipa": "/ˈiː.ðɚ/",
    "syllable": [
      "ei",
      "ther"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-265",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "either",
    "actual_sound": "/ˈiː.ðɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈiː.ðɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈiː.ðɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "either 發音為 /ˈiː.ðɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "either"
      ]
    }
  },
  "elementary school": {
    "word": "elementary school",
    "ipa": "/ˌɛl.əˈmɛn.tə.ri skuːl/",
    "syllable": [
      "el",
      "e",
      "men",
      "ta",
      "ry",
      "school"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-266",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "elementary school",
    "actual_sound": "/ˌɛl.əˈmɛn.tə.ri skuːl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌɛl.əˈmɛn.tə.ri skuːl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌɛl.əˈmɛn.tə.ri skuːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "elementary school 發音為 /ˌɛl.əˈmɛn.tə.ri skuːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "elementary school"
      ]
    }
  },
  "elephant": {
    "word": "elephant",
    "ipa": "/ˈɛl.ə.fənt/",
    "syllable": [
      "el",
      "e",
      "phant"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-267",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "elephant",
    "actual_sound": "/ˈɛl.ə.fənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛl.ə.fənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛl.ə.fənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "elephant 發音為 /ˈɛl.ə.fənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "elephant"
      ]
    }
  },
  "eleven": {
    "word": "eleven",
    "ipa": "/ɪˈlɛv.ən/",
    "syllable": [
      "el",
      "ev",
      "en"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-268",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "eleven",
    "actual_sound": "/ɪˈlɛv.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪˈlɛv.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪˈlɛv.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "eleven 發音為 /ɪˈlɛv.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eleven"
      ]
    }
  },
  "eleventh": {
    "word": "eleventh",
    "ipa": "/ɪˈlɛv.ənθ/",
    "syllable": [
      "el",
      "ev",
      "enth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-269",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "eleventh",
    "actual_sound": "/ɪˈlɛv.ənθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪˈlɛv.ənθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪˈlɛv.ənθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "eleventh 發音為 /ɪˈlɛv.ənθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eleventh"
      ]
    }
  },
  "else": {
    "word": "else",
    "ipa": "/ɛls/",
    "syllable": [
      "else"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-270",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "else",
    "actual_sound": "/ɛls/",
    "note": "自然發音推導例外，美式標準音標為 /ɛls/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɛls/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "else 發音為 /ɛls/，對應 EPRS R010 特殊例外",
      "related_words": [
        "else"
      ]
    }
  },
  "e-mail": {
    "word": "e-mail",
    "ipa": "/ˈiː.meɪl/",
    "syllable": [
      "e",
      "mail"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-271",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "e-mail",
    "actual_sound": "/ˈiː.meɪl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈiː.meɪl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈiː.meɪl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "e-mail 發音為 /ˈiː.meɪl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "e-mail"
      ]
    }
  },
  "end": {
    "word": "end",
    "ipa": "/ɛnd/",
    "syllable": [
      "end"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-272",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "end",
    "actual_sound": "/ɛnd/",
    "note": "自然發音推導例外，美式標準音標為 /ɛnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɛnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "end 發音為 /ɛnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "end"
      ]
    }
  },
  "engineer": {
    "word": "engineer",
    "ipa": "/ˌɛn.dʒɪˈnɪr/",
    "syllable": [
      "en",
      "gi",
      "neer"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-273",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "engineer",
    "actual_sound": "/ˌɛn.dʒɪˈnɪr/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌɛn.dʒɪˈnɪr/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌɛn.dʒɪˈnɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "engineer 發音為 /ˌɛn.dʒɪˈnɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "engineer"
      ]
    }
  },
  "english": {
    "word": "English",
    "ipa": "/ˈɪŋ.ɡlɪʃ/",
    "syllable": [
      "Eng",
      "lish"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-274",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "English",
    "actual_sound": "/ˈɪŋ.ɡlɪʃ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɪŋ.ɡlɪʃ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɪŋ.ɡlɪʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "English 發音為 /ˈɪŋ.ɡlɪʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "English"
      ]
    }
  },
  "enjoy": {
    "word": "enjoy",
    "ipa": "/ɪnˈdʒɔɪ/",
    "syllable": [
      "en",
      "joy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-275",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "enjoy",
    "actual_sound": "/ɪnˈdʒɔɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪnˈdʒɔɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪnˈdʒɔɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "enjoy 發音為 /ɪnˈdʒɔɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "enjoy"
      ]
    }
  },
  "enough": {
    "word": "enough",
    "ipa": "/ɪˈnʌf/",
    "syllable": [
      "e",
      "nough"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-276",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "enough",
    "actual_sound": "/ɪˈnʌf/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪˈnʌf/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪˈnʌf/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "enough 發音為 /ɪˈnʌf/，對應 EPRS R010 特殊例外",
      "related_words": [
        "enough"
      ]
    }
  },
  "enter": {
    "word": "enter",
    "ipa": "/ˈɛn.t̬ɚ/",
    "syllable": [
      "en",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-277",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "enter",
    "actual_sound": "/ˈɛn.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛn.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛn.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "enter 發音為 /ˈɛn.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "enter"
      ]
    }
  },
  "envelope": {
    "word": "envelope",
    "ipa": "/ˈɛn.və.loʊp/",
    "syllable": [
      "en",
      "ve",
      "lope"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-278",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "envelope",
    "actual_sound": "/ˈɛn.və.loʊp/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛn.və.loʊp/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛn.və.loʊp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "envelope 發音為 /ˈɛn.və.loʊp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "envelope"
      ]
    }
  },
  "eraser": {
    "word": "eraser",
    "ipa": "/ɪˈreɪ.sɚ/",
    "syllable": [
      "e",
      "ras",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-279",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "eraser",
    "actual_sound": "/ɪˈreɪ.sɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪˈreɪ.sɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪˈreɪ.sɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "eraser 發音為 /ɪˈreɪ.sɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eraser"
      ]
    }
  },
  "eve": {
    "word": "eve",
    "ipa": "/iːv/",
    "syllable": [
      "eve"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-280",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "eve",
    "actual_sound": "/iːv/",
    "note": "自然發音推導例外，美式標準音標為 /iːv/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/iːv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "eve 發音為 /iːv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eve"
      ]
    }
  },
  "even": {
    "word": "even",
    "ipa": "/ˈiː.vən/",
    "syllable": [
      "e",
      "ven"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-281",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "even",
    "actual_sound": "/ˈiː.vən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈiː.vən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈiː.vən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "even 發音為 /ˈiː.vən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "even"
      ]
    }
  },
  "evening": {
    "word": "evening",
    "ipa": "/ˈiːv.nɪŋ/",
    "syllable": [
      "eve",
      "ning"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-282",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "evening",
    "actual_sound": "/ˈiːv.nɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈiːv.nɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈiːv.nɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "evening 發音為 /ˈiːv.nɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "evening"
      ]
    }
  },
  "ever": {
    "word": "ever",
    "ipa": "/ˈɛv.ɚ/",
    "syllable": [
      "ev",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-283",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ever",
    "actual_sound": "/ˈɛv.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛv.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛv.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ever 發音為 /ˈɛv.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ever"
      ]
    }
  },
  "every": {
    "word": "every",
    "ipa": "/ˈɛv.ri/",
    "syllable": [
      "ev",
      "er",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-284",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "every",
    "actual_sound": "/ˈɛv.ri/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛv.ri/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛv.ri/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "every 發音為 /ˈɛv.ri/，對應 EPRS R010 特殊例外",
      "related_words": [
        "every"
      ]
    }
  },
  "everyone": {
    "word": "everyone",
    "ipa": "/ˈɛv.ri.wʌn/",
    "syllable": [
      "ev",
      "er",
      "y",
      "one"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-285",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "everyone",
    "actual_sound": "/ˈɛv.ri.wʌn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛv.ri.wʌn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛv.ri.wʌn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "everyone 發音為 /ˈɛv.ri.wʌn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "everyone"
      ]
    }
  },
  "everything": {
    "word": "everything",
    "ipa": "/ˈɛv.ri.θɪŋ/",
    "syllable": [
      "ev",
      "er",
      "y",
      "thing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-286",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "everything",
    "actual_sound": "/ˈɛv.ri.θɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛv.ri.θɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛv.ri.θɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "everything 發音為 /ˈɛv.ri.θɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "everything"
      ]
    }
  },
  "example": {
    "word": "example",
    "ipa": "/ɪɡˈzæm.pəl/",
    "syllable": [
      "ex",
      "am",
      "ple"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-287",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "example",
    "actual_sound": "/ɪɡˈzæm.pəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪɡˈzæm.pəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪɡˈzæm.pəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "example 發音為 /ɪɡˈzæm.pəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "example"
      ]
    }
  },
  "excellent": {
    "word": "excellent",
    "ipa": "/ˈɛk.sə.lənt/",
    "syllable": [
      "ex",
      "cel",
      "lent"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-288",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "excellent",
    "actual_sound": "/ˈɛk.sə.lənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛk.sə.lənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛk.sə.lənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "excellent 發音為 /ˈɛk.sə.lənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "excellent"
      ]
    }
  },
  "except": {
    "word": "except",
    "ipa": "/ɪkˈsɛpt/",
    "syllable": [
      "ex",
      "cept"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-289",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "except",
    "actual_sound": "/ɪkˈsɛpt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪkˈsɛpt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪkˈsɛpt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "except 發音為 /ɪkˈsɛpt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "except"
      ]
    }
  },
  "excited": {
    "word": "excited",
    "ipa": "/ɪkˈsaɪ.t̬ɪd/",
    "syllable": [
      "ex",
      "cit",
      "ed"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-290",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "excited",
    "actual_sound": "/ɪkˈsaɪ.t̬ɪd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪkˈsaɪ.t̬ɪd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪkˈsaɪ.t̬ɪd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "excited 發音為 /ɪkˈsaɪ.t̬ɪd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "excited"
      ]
    }
  },
  "exciting": {
    "word": "exciting",
    "ipa": "/ɪkˈsaɪ.t̬ɪŋ/",
    "syllable": [
      "ex",
      "cit",
      "ing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-291",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "exciting",
    "actual_sound": "/ɪkˈsaɪ.t̬ɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪkˈsaɪ.t̬ɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪkˈsaɪ.t̬ɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "exciting 發音為 /ɪkˈsaɪ.t̬ɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "exciting"
      ]
    }
  },
  "excuse": {
    "word": "excuse",
    "ipa": "/ɪkˈskjuːz/",
    "syllable": [
      "ex",
      "cuse"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-292",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "excuse",
    "actual_sound": "/ɪkˈskjuːz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪkˈskjuːz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪkˈskjuːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "excuse 發音為 /ɪkˈskjuːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "excuse"
      ]
    }
  },
  "exercise": {
    "word": "exercise",
    "ipa": "/ˈɛk.sɚ.saɪz/",
    "syllable": [
      "ex",
      "er",
      "cise"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-293",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "exercise",
    "actual_sound": "/ˈɛk.sɚ.saɪz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɛk.sɚ.saɪz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɛk.sɚ.saɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "exercise 發音為 /ˈɛk.sɚ.saɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "exercise"
      ]
    }
  },
  "expensive": {
    "word": "expensive",
    "ipa": "/ɪkˈspɛn.sɪv/",
    "syllable": [
      "ex",
      "pen",
      "sive"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-294",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "expensive",
    "actual_sound": "/ɪkˈspɛn.sɪv/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪkˈspɛn.sɪv/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪkˈspɛn.sɪv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "expensive 發音為 /ɪkˈspɛn.sɪv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "expensive"
      ]
    }
  },
  "experience": {
    "word": "experience",
    "ipa": "/ɪkˈspɪr.i.əns/",
    "syllable": [
      "ex",
      "pe",
      "ri",
      "ence"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-295",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "experience",
    "actual_sound": "/ɪkˈspɪr.i.əns/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪkˈspɪr.i.əns/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪkˈspɪr.i.əns/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "experience 發音為 /ɪkˈspɪr.i.əns/，對應 EPRS R010 特殊例外",
      "related_words": [
        "experience"
      ]
    }
  },
  "eye": {
    "word": "eye",
    "ipa": "/aɪ/",
    "syllable": [
      "eye"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-296",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "eye",
    "actual_sound": "/aɪ/",
    "note": "自然發音推導例外，美式標準音標為 /aɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/aɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "eye 發音為 /aɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "eye"
      ]
    }
  },
  "face": {
    "word": "face",
    "ipa": "/feɪs/",
    "syllable": [
      "face"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-297",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "face",
    "actual_sound": "/feɪs/",
    "note": "自然發音推導例外，美式標準音標為 /feɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/feɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "face 發音為 /feɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "face"
      ]
    }
  },
  "factory": {
    "word": "factory",
    "ipa": "/ˈfæk.tɚ.i/",
    "syllable": [
      "fac",
      "to",
      "ry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-298",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "factory",
    "actual_sound": "/ˈfæk.tɚ.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfæk.tɚ.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfæk.tɚ.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "factory 發音為 /ˈfæk.tɚ.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "factory"
      ]
    }
  },
  "fall": {
    "word": "fall",
    "ipa": "/fɔːl/",
    "syllable": [
      "fall"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-299",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fall",
    "actual_sound": "/fɔːl/",
    "note": "自然發音推導例外，美式標準音標為 /fɔːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fɔːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fall 發音為 /fɔːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fall"
      ]
    }
  },
  "family": {
    "word": "family",
    "ipa": "/ˈfæm.əl.i/",
    "syllable": [
      "fam",
      "i",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-300",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "family",
    "actual_sound": "/ˈfæm.əl.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfæm.əl.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfæm.əl.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "family 發音為 /ˈfæm.əl.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "family"
      ]
    }
  },
  "famous": {
    "word": "famous",
    "ipa": "/ˈfeɪ.məs/",
    "syllable": [
      "fa",
      "mous"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-301",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "famous",
    "actual_sound": "/ˈfeɪ.məs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfeɪ.məs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfeɪ.məs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "famous 發音為 /ˈfeɪ.məs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "famous"
      ]
    }
  },
  "farmer": {
    "word": "farmer",
    "ipa": "/ˈfɑːr.mɚ/",
    "syllable": [
      "farm",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-302",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "farmer",
    "actual_sound": "/ˈfɑːr.mɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɑːr.mɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɑːr.mɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "farmer 發音為 /ˈfɑːr.mɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "farmer"
      ]
    }
  },
  "father": {
    "word": "father",
    "ipa": "/ˈfɑː.ðɚ/",
    "syllable": [
      "fa",
      "ther"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-303",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "father",
    "actual_sound": "/ˈfɑː.ðɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɑː.ðɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɑː.ðɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "father 發音為 /ˈfɑː.ðɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "father"
      ]
    }
  },
  "favorite": {
    "word": "favorite",
    "ipa": "/ˈfeɪ.vɚ.ɪt/",
    "syllable": [
      "fa",
      "vor",
      "ite"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-304",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "favorite",
    "actual_sound": "/ˈfeɪ.vɚ.ɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfeɪ.vɚ.ɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfeɪ.vɚ.ɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "favorite 發音為 /ˈfeɪ.vɚ.ɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "favorite"
      ]
    }
  },
  "february": {
    "word": "February",
    "ipa": "/ˈfɛb.ruː.ɛr.i/",
    "syllable": [
      "Feb",
      "ru",
      "ar",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-305",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "February",
    "actual_sound": "/ˈfɛb.ruː.ɛr.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɛb.ruː.ɛr.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɛb.ruː.ɛr.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "February 發音為 /ˈfɛb.ruː.ɛr.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "February"
      ]
    }
  },
  "feed": {
    "word": "feed",
    "ipa": "/fiːd/",
    "syllable": [
      "feed"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-306",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "feed",
    "actual_sound": "/fiːd/",
    "note": "自然發音推導例外，美式標準音標為 /fiːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fiːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "feed 發音為 /fiːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "feed"
      ]
    }
  },
  "feel": {
    "word": "feel",
    "ipa": "/fiːl/",
    "syllable": [
      "feel"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-307",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "feel",
    "actual_sound": "/fiːl/",
    "note": "自然發音推導例外，美式標準音標為 /fiːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fiːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "feel 發音為 /fiːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "feel"
      ]
    }
  },
  "festival": {
    "word": "festival",
    "ipa": "/ˈfɛs.tə.vəl/",
    "syllable": [
      "fes",
      "ti",
      "val"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-308",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "festival",
    "actual_sound": "/ˈfɛs.tə.vəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɛs.tə.vəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɛs.tə.vəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "festival 發音為 /ˈfɛs.tə.vəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "festival"
      ]
    }
  },
  "fever": {
    "word": "fever",
    "ipa": "/ˈfiː.vɚ/",
    "syllable": [
      "fe",
      "ver"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-309",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "fever",
    "actual_sound": "/ˈfiː.vɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfiː.vɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfiː.vɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "fever 發音為 /ˈfiː.vɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fever"
      ]
    }
  },
  "few": {
    "word": "few",
    "ipa": "/fjuː/",
    "syllable": [
      "few"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-310",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "few",
    "actual_sound": "/fjuː/",
    "note": "自然發音推導例外，美式標準音標為 /fjuː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fjuː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "few 發音為 /fjuː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "few"
      ]
    }
  },
  "fifteen": {
    "word": "fifteen",
    "ipa": "/ˌfɪfˈtiːn/",
    "syllable": [
      "fif",
      "teen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-311",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "fifteen",
    "actual_sound": "/ˌfɪfˈtiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌfɪfˈtiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌfɪfˈtiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "fifteen 發音為 /ˌfɪfˈtiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fifteen"
      ]
    }
  },
  "fifteenth": {
    "word": "fifteenth",
    "ipa": "/ˌfɪfˈtiːnθ/",
    "syllable": [
      "fif",
      "teenth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-312",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "fifteenth",
    "actual_sound": "/ˌfɪfˈtiːnθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌfɪfˈtiːnθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌfɪfˈtiːnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "fifteenth 發音為 /ˌfɪfˈtiːnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fifteenth"
      ]
    }
  },
  "fifty": {
    "word": "fifty",
    "ipa": "/ˈfɪf.ti/",
    "syllable": [
      "fif",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-313",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "fifty",
    "actual_sound": "/ˈfɪf.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɪf.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɪf.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "fifty 發音為 /ˈfɪf.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fifty"
      ]
    }
  },
  "fight": {
    "word": "fight",
    "ipa": "/faɪt/",
    "syllable": [
      "fight"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-314",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fight",
    "actual_sound": "/faɪt/",
    "note": "自然發音推導例外，美式標準音標為 /faɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/faɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fight 發音為 /faɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fight"
      ]
    }
  },
  "fill": {
    "word": "fill",
    "ipa": "/fɪl/",
    "syllable": [
      "fill"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-315",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fill",
    "actual_sound": "/fɪl/",
    "note": "自然發音推導例外，美式標準音標為 /fɪl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fɪl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fill 發音為 /fɪl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fill"
      ]
    }
  },
  "finally": {
    "word": "finally",
    "ipa": "/ˈfaɪ.nəl.i/",
    "syllable": [
      "fi",
      "nal",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-316",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "finally",
    "actual_sound": "/ˈfaɪ.nəl.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfaɪ.nəl.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfaɪ.nəl.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "finally 發音為 /ˈfaɪ.nəl.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "finally"
      ]
    }
  },
  "find": {
    "word": "find",
    "ipa": "/faɪnd/",
    "syllable": [
      "find"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-317",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "find",
    "actual_sound": "/faɪnd/",
    "note": "自然發音推導例外，美式標準音標為 /faɪnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/faɪnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "find 發音為 /faɪnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "find"
      ]
    }
  },
  "finger": {
    "word": "finger",
    "ipa": "/ˈfɪŋ.ɡɚ/",
    "syllable": [
      "fin",
      "ger"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-318",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "finger",
    "actual_sound": "/ˈfɪŋ.ɡɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɪŋ.ɡɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɪŋ.ɡɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "finger 發音為 /ˈfɪŋ.ɡɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "finger"
      ]
    }
  },
  "finish": {
    "word": "finish",
    "ipa": "/ˈfɪn.ɪʃ/",
    "syllable": [
      "fin",
      "ish"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-319",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "finish",
    "actual_sound": "/ˈfɪn.ɪʃ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɪn.ɪʃ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɪn.ɪʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "finish 發音為 /ˈfɪn.ɪʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "finish"
      ]
    }
  },
  "fire": {
    "word": "fire",
    "ipa": "/ˈfaɪ.ɚ/",
    "syllable": [
      "fire"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-320",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fire",
    "actual_sound": "/ˈfaɪ.ɚ/",
    "note": "自然發音推導例外，美式標準音標為 /ˈfaɪ.ɚ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ˈfaɪ.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fire 發音為 /ˈfaɪ.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fire"
      ]
    }
  },
  "first": {
    "word": "first",
    "ipa": "/fɝːst/",
    "syllable": [
      "first"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-321",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "first",
    "actual_sound": "/fɝːst/",
    "note": "自然發音推導例外，美式標準音標為 /fɝːst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fɝːst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "first 發音為 /fɝːst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "first"
      ]
    }
  },
  "fisherman": {
    "word": "fisherman",
    "ipa": "/ˈfɪʃ.ɚ.mæn/",
    "syllable": [
      "fish",
      "er",
      "man"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-322",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "fisherman",
    "actual_sound": "/ˈfɪʃ.ɚ.mæn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɪʃ.ɚ.mæn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɪʃ.ɚ.mæn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "fisherman 發音為 /ˈfɪʃ.ɚ.mæn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fisherman"
      ]
    }
  },
  "fix": {
    "word": "fix",
    "ipa": "/fɪks/",
    "syllable": [
      "fix"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-323",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fix",
    "actual_sound": "/fɪks/",
    "note": "自然發音推導例外，美式標準音標為 /fɪks/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fɪks/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fix 發音為 /fɪks/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fix"
      ]
    }
  },
  "floor": {
    "word": "floor",
    "ipa": "/flɔːr/",
    "syllable": [
      "floor"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-324",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "floor",
    "actual_sound": "/flɔːr/",
    "note": "自然發音推導例外，美式標準音標為 /flɔːr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/flɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "floor 發音為 /flɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "floor"
      ]
    }
  },
  "flower": {
    "word": "flower",
    "ipa": "/ˈflaʊ.ɚ/",
    "syllable": [
      "flow",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-325",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "flower",
    "actual_sound": "/ˈflaʊ.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈflaʊ.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈflaʊ.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "flower 發音為 /ˈflaʊ.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "flower"
      ]
    }
  },
  "flute": {
    "word": "flute",
    "ipa": "/fluːt/",
    "syllable": [
      "flute"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-326",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "flute",
    "actual_sound": "/fluːt/",
    "note": "自然發音推導例外，美式標準音標為 /fluːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fluːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "flute 發音為 /fluːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "flute"
      ]
    }
  },
  "fly": {
    "word": "fly",
    "ipa": "/flaɪ/",
    "syllable": [
      "fly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-327",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fly",
    "actual_sound": "/flaɪ/",
    "note": "自然發音推導例外，美式標準音標為 /flaɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/flaɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fly 發音為 /flaɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fly"
      ]
    }
  },
  "follow": {
    "word": "follow",
    "ipa": "/ˈfɑː.loʊ/",
    "syllable": [
      "fol",
      "low"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-328",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "follow",
    "actual_sound": "/ˈfɑː.loʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɑː.loʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɑː.loʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "follow 發音為 /ˈfɑː.loʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "follow"
      ]
    }
  },
  "food": {
    "word": "food",
    "ipa": "/fuːd/",
    "syllable": [
      "food"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-329",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "food",
    "actual_sound": "/fuːd/",
    "note": "自然發音推導例外，美式標準音標為 /fuːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fuːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "food 發音為 /fuːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "food"
      ]
    }
  },
  "foreign": {
    "word": "foreign",
    "ipa": "/ˈfɔːr.ən/",
    "syllable": [
      "for",
      "eign"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-330",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "foreign",
    "actual_sound": "/ˈfɔːr.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɔːr.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɔːr.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "foreign 發音為 /ˈfɔːr.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "foreign"
      ]
    }
  },
  "foreigner": {
    "word": "foreigner",
    "ipa": "/ˈfɔːr.ə.nɚ/",
    "syllable": [
      "for",
      "eign",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-331",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "foreigner",
    "actual_sound": "/ˈfɔːr.ə.nɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɔːr.ə.nɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɔːr.ə.nɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "foreigner 發音為 /ˈfɔːr.ə.nɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "foreigner"
      ]
    }
  },
  "forget": {
    "word": "forget",
    "ipa": "/fɚˈɡɛt/",
    "syllable": [
      "for",
      "get"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-332",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "forget",
    "actual_sound": "/fɚˈɡɛt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /fɚˈɡɛt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/fɚˈɡɛt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "forget 發音為 /fɚˈɡɛt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "forget"
      ]
    }
  },
  "forty": {
    "word": "forty",
    "ipa": "/ˈfɔːr.ti/",
    "syllable": [
      "for",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-333",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "forty",
    "actual_sound": "/ˈfɔːr.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfɔːr.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfɔːr.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "forty 發音為 /ˈfɔːr.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "forty"
      ]
    }
  },
  "four": {
    "word": "four",
    "ipa": "/fɔːr/",
    "syllable": [
      "four"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-334",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "four",
    "actual_sound": "/fɔːr/",
    "note": "自然發音推導例外，美式標準音標為 /fɔːr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "four 發音為 /fɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "four"
      ]
    }
  },
  "fourteen": {
    "word": "fourteen",
    "ipa": "/ˌfɔːrˈtiːn/",
    "syllable": [
      "four",
      "teen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-335",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "fourteen",
    "actual_sound": "/ˌfɔːrˈtiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌfɔːrˈtiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌfɔːrˈtiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "fourteen 發音為 /ˌfɔːrˈtiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fourteen"
      ]
    }
  },
  "fourteenth": {
    "word": "fourteenth",
    "ipa": "/ˌfɔːrˈtiːnθ/",
    "syllable": [
      "four",
      "teenth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-336",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "fourteenth",
    "actual_sound": "/ˌfɔːrˈtiːnθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌfɔːrˈtiːnθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌfɔːrˈtiːnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "fourteenth 發音為 /ˌfɔːrˈtiːnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fourteenth"
      ]
    }
  },
  "fourth": {
    "word": "fourth",
    "ipa": "/fɔːrθ/",
    "syllable": [
      "fourth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-337",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fourth",
    "actual_sound": "/fɔːrθ/",
    "note": "自然發音推導例外，美式標準音標為 /fɔːrθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fɔːrθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fourth 發音為 /fɔːrθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fourth"
      ]
    }
  },
  "fox": {
    "word": "fox",
    "ipa": "/fɑːks/",
    "syllable": [
      "fox"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-338",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fox",
    "actual_sound": "/fɑːks/",
    "note": "自然發音推導例外，美式標準音標為 /fɑːks/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fɑːks/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fox 發音為 /fɑːks/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fox"
      ]
    }
  },
  "free": {
    "word": "free",
    "ipa": "/friː/",
    "syllable": [
      "free"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-339",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "free",
    "actual_sound": "/friː/",
    "note": "自然發音推導例外，美式標準音標為 /friː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/friː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "free 發音為 /friː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "free"
      ]
    }
  },
  "french fries": {
    "word": "French fries",
    "ipa": "/ˌfrɛntʃ ˈfraɪz/",
    "syllable": [
      "French",
      "fries"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-340",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "French fries",
    "actual_sound": "/ˌfrɛntʃ ˈfraɪz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌfrɛntʃ ˈfraɪz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌfrɛntʃ ˈfraɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "French fries 發音為 /ˌfrɛntʃ ˈfraɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "French fries"
      ]
    }
  },
  "fresh": {
    "word": "fresh",
    "ipa": "/frɛʃ/",
    "syllable": [
      "fresh"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-341",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fresh",
    "actual_sound": "/frɛʃ/",
    "note": "自然發音推導例外，美式標準音標為 /frɛʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/frɛʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fresh 發音為 /frɛʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fresh"
      ]
    }
  },
  "friday": {
    "word": "Friday",
    "ipa": "/ˈfraɪ.deɪ/",
    "syllable": [
      "Fri",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-342",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Friday",
    "actual_sound": "/ˈfraɪ.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfraɪ.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfraɪ.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Friday 發音為 /ˈfraɪ.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Friday"
      ]
    }
  },
  "friend": {
    "word": "friend",
    "ipa": "/frɛnd/",
    "syllable": [
      "friend"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-343",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "friend",
    "actual_sound": "/frɛnd/",
    "note": "自然發音推導例外，美式標準音標為 /frɛnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/frɛnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "friend 發音為 /frɛnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "friend"
      ]
    }
  },
  "friendly": {
    "word": "friendly",
    "ipa": "/ˈfrɛnd.li/",
    "syllable": [
      "friend",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-344",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "friendly",
    "actual_sound": "/ˈfrɛnd.li/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfrɛnd.li/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfrɛnd.li/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "friendly 發音為 /ˈfrɛnd.li/，對應 EPRS R010 特殊例外",
      "related_words": [
        "friendly"
      ]
    }
  },
  "frisbee": {
    "word": "frisbee",
    "ipa": "/ˈfrɪz.bi/",
    "syllable": [
      "fris",
      "bee"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-345",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "frisbee",
    "actual_sound": "/ˈfrɪz.bi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfrɪz.bi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfrɪz.bi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "frisbee 發音為 /ˈfrɪz.bi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "frisbee"
      ]
    }
  },
  "frog": {
    "word": "frog",
    "ipa": "/frɑːɡ/",
    "syllable": [
      "frog"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-346",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "frog",
    "actual_sound": "/frɑːɡ/",
    "note": "自然發音推導例外，美式標準音標為 /frɑːɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/frɑːɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "frog 發音為 /frɑːɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "frog"
      ]
    }
  },
  "from": {
    "word": "from",
    "ipa": "/frʌm/",
    "syllable": [
      "from"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-347",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "from",
    "actual_sound": "/frʌm/",
    "note": "自然發音推導例外，美式標準音標為 /frʌm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/frʌm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "from 發音為 /frʌm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "from"
      ]
    }
  },
  "front": {
    "word": "front",
    "ipa": "/frʌnt/",
    "syllable": [
      "front"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-348",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "front",
    "actual_sound": "/frʌnt/",
    "note": "自然發音推導例外，美式標準音標為 /frʌnt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/frʌnt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "front 發音為 /frʌnt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "front"
      ]
    }
  },
  "fruit": {
    "word": "fruit",
    "ipa": "/fruːt/",
    "syllable": [
      "fruit"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-349",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fruit",
    "actual_sound": "/fruːt/",
    "note": "自然發音推導例外，美式標準音標為 /fruːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fruːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fruit 發音為 /fruːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fruit"
      ]
    }
  },
  "fry": {
    "word": "fry",
    "ipa": "/fraɪ/",
    "syllable": [
      "fry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-350",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "fry",
    "actual_sound": "/fraɪ/",
    "note": "自然發音推導例外，美式標準音標為 /fraɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fraɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "fry 發音為 /fraɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "fry"
      ]
    }
  },
  "full": {
    "word": "full",
    "ipa": "/fʊl/",
    "syllable": [
      "full"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-351",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "full",
    "actual_sound": "/fʊl/",
    "note": "自然發音推導例外，美式標準音標為 /fʊl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/fʊl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "full 發音為 /fʊl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "full"
      ]
    }
  },
  "funny": {
    "word": "funny",
    "ipa": "/ˈfʌn.i/",
    "syllable": [
      "fun",
      "ny"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-352",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "funny",
    "actual_sound": "/ˈfʌn.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfʌn.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfʌn.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "funny 發音為 /ˈfʌn.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "funny"
      ]
    }
  },
  "future": {
    "word": "future",
    "ipa": "/ˈfjuː.tʃɚ/",
    "syllable": [
      "fu",
      "ture"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-353",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "future",
    "actual_sound": "/ˈfjuː.tʃɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfjuː.tʃɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfjuː.tʃɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "future 發音為 /ˈfjuː.tʃɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "future"
      ]
    }
  },
  "game": {
    "word": "game",
    "ipa": "/ɡeɪm/",
    "syllable": [
      "game"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-354",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "game",
    "actual_sound": "/ɡeɪm/",
    "note": "自然發音推導例外，美式標準音標為 /ɡeɪm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡeɪm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "game 發音為 /ɡeɪm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "game"
      ]
    }
  },
  "garbage": {
    "word": "garbage",
    "ipa": "/ˈɡɑːr.bɪdʒ/",
    "syllable": [
      "gar",
      "bage"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-355",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "garbage",
    "actual_sound": "/ˈɡɑːr.bɪdʒ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɡɑːr.bɪdʒ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɡɑːr.bɪdʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "garbage 發音為 /ˈɡɑːr.bɪdʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "garbage"
      ]
    }
  },
  "garden": {
    "word": "garden",
    "ipa": "/ˈɡɑːr.dən/",
    "syllable": [
      "gar",
      "den"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-356",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "garden",
    "actual_sound": "/ˈɡɑːr.dən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɡɑːr.dən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɡɑːr.dən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "garden 發音為 /ˈɡɑːr.dən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "garden"
      ]
    }
  },
  "gas": {
    "word": "gas",
    "ipa": "/ɡæs/",
    "syllable": [
      "gas"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-357",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "gas",
    "actual_sound": "/ɡæs/",
    "note": "自然發音推導例外，美式標準音標為 /ɡæs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡæs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "gas 發音為 /ɡæs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "gas"
      ]
    }
  },
  "gate": {
    "word": "gate",
    "ipa": "/ɡeɪt/",
    "syllable": [
      "gate"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-358",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "gate",
    "actual_sound": "/ɡeɪt/",
    "note": "自然發音推導例外，美式標準音標為 /ɡeɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡeɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "gate 發音為 /ɡeɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "gate"
      ]
    }
  },
  "get": {
    "word": "get",
    "ipa": "/ɡɛt/",
    "syllable": [
      "get"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-359",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "get",
    "actual_sound": "/ɡɛt/",
    "note": "自然發音推導例外，美式標準音標為 /ɡɛt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡɛt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "get 發音為 /ɡɛt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "get"
      ]
    }
  },
  "ghost": {
    "word": "ghost",
    "ipa": "/ɡoʊst/",
    "syllable": [
      "ghost"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-360",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "ghost",
    "actual_sound": "/ɡoʊst/",
    "note": "自然發音推導例外，美式標準音標為 /ɡoʊst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡoʊst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "ghost 發音為 /ɡoʊst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ghost"
      ]
    }
  },
  "giant": {
    "word": "giant",
    "ipa": "/ˈdʒaɪ.ənt/",
    "syllable": [
      "gi",
      "ant"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-361",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "giant",
    "actual_sound": "/ˈdʒaɪ.ənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdʒaɪ.ənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdʒaɪ.ənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "giant 發音為 /ˈdʒaɪ.ənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "giant"
      ]
    }
  },
  "gift": {
    "word": "gift",
    "ipa": "/ɡɪft/",
    "syllable": [
      "gift"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-362",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "gift",
    "actual_sound": "/ɡɪft/",
    "note": "自然發音推導例外，美式標準音標為 /ɡɪft/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡɪft/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "gift 發音為 /ɡɪft/，對應 EPRS R010 特殊例外",
      "related_words": [
        "gift"
      ]
    }
  },
  "girl": {
    "word": "girl",
    "ipa": "/ɡɝːl/",
    "syllable": [
      "girl"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-363",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "girl",
    "actual_sound": "/ɡɝːl/",
    "note": "自然發音推導例外，美式標準音標為 /ɡɝːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡɝːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "girl 發音為 /ɡɝːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "girl"
      ]
    }
  },
  "glad": {
    "word": "glad",
    "ipa": "/ɡlæd/",
    "syllable": [
      "glad"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-364",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "glad",
    "actual_sound": "/ɡlæd/",
    "note": "自然發音推導例外，美式標準音標為 /ɡlæd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡlæd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "glad 發音為 /ɡlæd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "glad"
      ]
    }
  },
  "glass": {
    "word": "glass",
    "ipa": "/ɡlæs/",
    "syllable": [
      "glass"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-365",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "glass",
    "actual_sound": "/ɡlæs/",
    "note": "自然發音推導例外，美式標準音標為 /ɡlæs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡlæs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "glass 發音為 /ɡlæs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "glass"
      ]
    }
  },
  "glasses": {
    "word": "glasses",
    "ipa": "/ˈɡlæs.ɪz/",
    "syllable": [
      "glass",
      "es"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-366",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "glasses",
    "actual_sound": "/ˈɡlæs.ɪz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɡlæs.ɪz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɡlæs.ɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "glasses 發音為 /ˈɡlæs.ɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "glasses"
      ]
    }
  },
  "glove": {
    "word": "glove",
    "ipa": "/ɡlʌv/",
    "syllable": [
      "glove"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-367",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "glove",
    "actual_sound": "/ɡlʌv/",
    "note": "自然發音推導例外，美式標準音標為 /ɡlʌv/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡlʌv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "glove 發音為 /ɡlʌv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "glove"
      ]
    }
  },
  "glue": {
    "word": "glue",
    "ipa": "/ɡluː/",
    "syllable": [
      "glue"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-368",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "glue",
    "actual_sound": "/ɡluː/",
    "note": "自然發音推導例外，美式標準音標為 /ɡluː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡluː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "glue 發音為 /ɡluː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "glue"
      ]
    }
  },
  "go": {
    "word": "go",
    "ipa": "/ɡoʊ/",
    "syllable": [
      "go"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-369",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "go",
    "actual_sound": "/ɡoʊ/",
    "note": "自然發音推導例外，美式標準音標為 /ɡoʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡoʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "go 發音為 /ɡoʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "go"
      ]
    }
  },
  "goat": {
    "word": "goat",
    "ipa": "/ɡoʊt/",
    "syllable": [
      "goat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-370",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "goat",
    "actual_sound": "/ɡoʊt/",
    "note": "自然發音推導例外，美式標準音標為 /ɡoʊt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡoʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "goat 發音為 /ɡoʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "goat"
      ]
    }
  },
  "good": {
    "word": "good",
    "ipa": "/ɡʊd/",
    "syllable": [
      "good"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-371",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "good",
    "actual_sound": "/ɡʊd/",
    "note": "自然發音推導例外，美式標準音標為 /ɡʊd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡʊd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "good 發音為 /ɡʊd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "good"
      ]
    }
  },
  "goodbye": {
    "word": "goodbye",
    "ipa": "/ˌɡʊdˈbaɪ/",
    "syllable": [
      "good",
      "bye"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-372",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "goodbye",
    "actual_sound": "/ˌɡʊdˈbaɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌɡʊdˈbaɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌɡʊdˈbaɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "goodbye 發音為 /ˌɡʊdˈbaɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "goodbye"
      ]
    }
  },
  "goose": {
    "word": "goose",
    "ipa": "/ɡuːs/",
    "syllable": [
      "goose"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-373",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "goose",
    "actual_sound": "/ɡuːs/",
    "note": "自然發音推導例外，美式標準音標為 /ɡuːs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡuːs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "goose 發音為 /ɡuːs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "goose"
      ]
    }
  },
  "grade": {
    "word": "grade",
    "ipa": "/ɡreɪd/",
    "syllable": [
      "grade"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-374",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "grade",
    "actual_sound": "/ɡreɪd/",
    "note": "自然發音推導例外，美式標準音標為 /ɡreɪd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡreɪd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "grade 發音為 /ɡreɪd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "grade"
      ]
    }
  },
  "gram": {
    "word": "gram",
    "ipa": "/ɡræm/",
    "syllable": [
      "gram"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-375",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "gram",
    "actual_sound": "/ɡræm/",
    "note": "自然發音推導例外，美式標準音標為 /ɡræm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡræm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "gram 發音為 /ɡræm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "gram"
      ]
    }
  },
  "grandfather": {
    "word": "grandfather",
    "ipa": "/ˈɡræn.fɑː.ðɚ/",
    "syllable": [
      "grand",
      "fa",
      "ther"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-376",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "grandfather",
    "actual_sound": "/ˈɡræn.fɑː.ðɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɡræn.fɑː.ðɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɡræn.fɑː.ðɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "grandfather 發音為 /ˈɡræn.fɑː.ðɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "grandfather"
      ]
    }
  },
  "grandmother": {
    "word": "grandmother",
    "ipa": "/ˈɡræn.mʌð.ɚ/",
    "syllable": [
      "grand",
      "moth",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-377",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "grandmother",
    "actual_sound": "/ˈɡræn.mʌð.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɡræn.mʌð.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɡræn.mʌð.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "grandmother 發音為 /ˈɡræn.mʌð.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "grandmother"
      ]
    }
  },
  "grape": {
    "word": "grape",
    "ipa": "/ɡreɪp/",
    "syllable": [
      "grape"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-378",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "grape",
    "actual_sound": "/ɡreɪp/",
    "note": "自然發音推導例外，美式標準音標為 /ɡreɪp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡreɪp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "grape 發音為 /ɡreɪp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "grape"
      ]
    }
  },
  "grass": {
    "word": "grass",
    "ipa": "/ɡræs/",
    "syllable": [
      "grass"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-379",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "grass",
    "actual_sound": "/ɡræs/",
    "note": "自然發音推導例外，美式標準音標為 /ɡræs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡræs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "grass 發音為 /ɡræs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "grass"
      ]
    }
  },
  "gray": {
    "word": "gray",
    "ipa": "/ɡreɪ/",
    "syllable": [
      "gray"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-380",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "gray",
    "actual_sound": "/ɡreɪ/",
    "note": "自然發音推導例外，美式標準音標為 /ɡreɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡreɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "gray 發音為 /ɡreɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "gray"
      ]
    }
  },
  "great": {
    "word": "great",
    "ipa": "/ɡreɪt/",
    "syllable": [
      "great"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-381",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "great",
    "actual_sound": "/ɡreɪt/",
    "note": "自然發音推導例外，美式標準音標為 /ɡreɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡreɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "great 發音為 /ɡreɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "great"
      ]
    }
  },
  "green": {
    "word": "green",
    "ipa": "/ɡriːn/",
    "syllable": [
      "green"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-382",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "green",
    "actual_sound": "/ɡriːn/",
    "note": "自然發音推導例外，美式標準音標為 /ɡriːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡriːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "green 發音為 /ɡriːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "green"
      ]
    }
  },
  "ground": {
    "word": "ground",
    "ipa": "/ɡraʊnd/",
    "syllable": [
      "ground"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-383",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "ground",
    "actual_sound": "/ɡraʊnd/",
    "note": "自然發音推導例外，美式標準音標為 /ɡraʊnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡraʊnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "ground 發音為 /ɡraʊnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ground"
      ]
    }
  },
  "group": {
    "word": "group",
    "ipa": "/ɡruːp/",
    "syllable": [
      "group"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-384",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "group",
    "actual_sound": "/ɡruːp/",
    "note": "自然發音推導例外，美式標準音標為 /ɡruːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡruːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "group 發音為 /ɡruːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "group"
      ]
    }
  },
  "grow": {
    "word": "grow",
    "ipa": "/ɡroʊ/",
    "syllable": [
      "grow"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-385",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "grow",
    "actual_sound": "/ɡroʊ/",
    "note": "自然發音推導例外，美式標準音標為 /ɡroʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡroʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "grow 發音為 /ɡroʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "grow"
      ]
    }
  },
  "guava": {
    "word": "guava",
    "ipa": "/ˈɡwɑː.və/",
    "syllable": [
      "gua",
      "va"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-386",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "guava",
    "actual_sound": "/ˈɡwɑː.və/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɡwɑː.və/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɡwɑː.və/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "guava 發音為 /ˈɡwɑː.və/，對應 EPRS R010 特殊例外",
      "related_words": [
        "guava"
      ]
    }
  },
  "guess": {
    "word": "guess",
    "ipa": "/ɡɛs/",
    "syllable": [
      "guess"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-387",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "guess",
    "actual_sound": "/ɡɛs/",
    "note": "自然發音推導例外，美式標準音標為 /ɡɛs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡɛs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "guess 發音為 /ɡɛs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "guess"
      ]
    }
  },
  "guitar": {
    "word": "guitar",
    "ipa": "/ɡɪˈtɑːr/",
    "syllable": [
      "gui",
      "tar"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-388",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "guitar",
    "actual_sound": "/ɡɪˈtɑːr/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɡɪˈtɑːr/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɡɪˈtɑːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "guitar 發音為 /ɡɪˈtɑːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "guitar"
      ]
    }
  },
  "guy": {
    "word": "guy",
    "ipa": "/ɡaɪ/",
    "syllable": [
      "guy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-389",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "guy",
    "actual_sound": "/ɡaɪ/",
    "note": "自然發音推導例外，美式標準音標為 /ɡaɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɡaɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "guy 發音為 /ɡaɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "guy"
      ]
    }
  },
  "gym": {
    "word": "gym",
    "ipa": "/dʒɪm/",
    "syllable": [
      "gym"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-390",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "gym",
    "actual_sound": "/dʒɪm/",
    "note": "自然發音推導例外，美式標準音標為 /dʒɪm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒɪm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "gym 發音為 /dʒɪm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "gym"
      ]
    }
  },
  "habit": {
    "word": "habit",
    "ipa": "/ˈhæb.ɪt/",
    "syllable": [
      "hab",
      "it"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-391",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "habit",
    "actual_sound": "/ˈhæb.ɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhæb.ɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhæb.ɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "habit 發音為 /ˈhæb.ɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "habit"
      ]
    }
  },
  "hair": {
    "word": "hair",
    "ipa": "/hɛr/",
    "syllable": [
      "hair"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-392",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hair",
    "actual_sound": "/hɛr/",
    "note": "自然發音推導例外，美式標準音標為 /hɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hair 發音為 /hɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hair"
      ]
    }
  },
  "half": {
    "word": "half",
    "ipa": "/hæf/",
    "syllable": [
      "half"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-393",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "half",
    "actual_sound": "/hæf/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /hæf/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/hæf/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "half 發音為 /hæf/，對應 EPRS R010 特殊例外",
      "related_words": [
        "half"
      ]
    }
  },
  "halloween": {
    "word": "Halloween",
    "ipa": "/ˌhæl.oʊˈiːn/",
    "syllable": [
      "Hal",
      "low",
      "een"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-394",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Halloween",
    "actual_sound": "/ˌhæl.oʊˈiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌhæl.oʊˈiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌhæl.oʊˈiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Halloween 發音為 /ˌhæl.oʊˈiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Halloween"
      ]
    }
  },
  "hamburger": {
    "word": "hamburger",
    "ipa": "/ˈhæm.bɝː.ɡɚ/",
    "syllable": [
      "ham",
      "bur",
      "ger"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-395",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hamburger",
    "actual_sound": "/ˈhæm.bɝː.ɡɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhæm.bɝː.ɡɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhæm.bɝː.ɡɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hamburger 發音為 /ˈhæm.bɝː.ɡɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hamburger"
      ]
    }
  },
  "handsome": {
    "word": "handsome",
    "ipa": "/ˈhæn.səm/",
    "syllable": [
      "hand",
      "some"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-396",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "handsome",
    "actual_sound": "/ˈhæn.səm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhæn.səm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhæn.səm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "handsome 發音為 /ˈhæn.səm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "handsome"
      ]
    }
  },
  "happen": {
    "word": "happen",
    "ipa": "/ˈhæp.ən/",
    "syllable": [
      "hap",
      "pen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-397",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "happen",
    "actual_sound": "/ˈhæp.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhæp.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhæp.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "happen 發音為 /ˈhæp.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "happen"
      ]
    }
  },
  "happy": {
    "word": "happy",
    "ipa": "/ˈhæp.i/",
    "syllable": [
      "hap",
      "py"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-398",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "happy",
    "actual_sound": "/ˈhæp.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhæp.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhæp.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "happy 發音為 /ˈhæp.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "happy"
      ]
    }
  },
  "hard-working": {
    "word": "hard-working",
    "ipa": "/ˌhɑːrdˈwɝː.kɪŋ/",
    "syllable": [
      "hard",
      "work",
      "ing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-399",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hard-working",
    "actual_sound": "/ˌhɑːrdˈwɝː.kɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌhɑːrdˈwɝː.kɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌhɑːrdˈwɝː.kɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hard-working 發音為 /ˌhɑːrdˈwɝː.kɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hard-working"
      ]
    }
  },
  "he": {
    "word": "he",
    "ipa": "/hiː/",
    "syllable": [
      "he"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-400",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "he",
    "actual_sound": "/hiː/",
    "note": "自然發音推導例外，美式標準音標為 /hiː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hiː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "he 發音為 /hiː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "he"
      ]
    }
  },
  "head": {
    "word": "head",
    "ipa": "/hɛd/",
    "syllable": [
      "head"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-401",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "head",
    "actual_sound": "/hɛd/",
    "note": "自然發音推導例外，美式標準音標為 /hɛd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɛd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "head 發音為 /hɛd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "head"
      ]
    }
  },
  "headache": {
    "word": "headache",
    "ipa": "/ˈhɛd.eɪk/",
    "syllable": [
      "head",
      "ache"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-402",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "headache",
    "actual_sound": "/ˈhɛd.eɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɛd.eɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɛd.eɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "headache 發音為 /ˈhɛd.eɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "headache"
      ]
    }
  },
  "health": {
    "word": "health",
    "ipa": "/hɛlθ/",
    "syllable": [
      "health"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-403",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "health",
    "actual_sound": "/hɛlθ/",
    "note": "自然發音推導例外，美式標準音標為 /hɛlθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɛlθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "health 發音為 /hɛlθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "health"
      ]
    }
  },
  "healthy": {
    "word": "healthy",
    "ipa": "/ˈhɛl.θi/",
    "syllable": [
      "health",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-404",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "healthy",
    "actual_sound": "/ˈhɛl.θi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɛl.θi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɛl.θi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "healthy 發音為 /ˈhɛl.θi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "healthy"
      ]
    }
  },
  "hear": {
    "word": "hear",
    "ipa": "/hɪr/",
    "syllable": [
      "hear"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-405",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hear",
    "actual_sound": "/hɪr/",
    "note": "自然發音推導例外，美式標準音標為 /hɪr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hear 發音為 /hɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hear"
      ]
    }
  },
  "heart": {
    "word": "heart",
    "ipa": "/hɑːrt/",
    "syllable": [
      "heart"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-406",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "heart",
    "actual_sound": "/hɑːrt/",
    "note": "自然發音推導例外，美式標準音標為 /hɑːrt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɑːrt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "heart 發音為 /hɑːrt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "heart"
      ]
    }
  },
  "heat": {
    "word": "heat",
    "ipa": "/hiːt/",
    "syllable": [
      "heat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-407",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "heat",
    "actual_sound": "/hiːt/",
    "note": "自然發音推導例外，美式標準音標為 /hiːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hiːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "heat 發音為 /hiːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "heat"
      ]
    }
  },
  "heavy": {
    "word": "heavy",
    "ipa": "/ˈhɛv.i/",
    "syllable": [
      "heav",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-408",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "heavy",
    "actual_sound": "/ˈhɛv.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɛv.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɛv.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "heavy 發音為 /ˈhɛv.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "heavy"
      ]
    }
  },
  "hello": {
    "word": "hello",
    "ipa": "/həˈloʊ/",
    "syllable": [
      "hel",
      "lo"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-409",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hello",
    "actual_sound": "/həˈloʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /həˈloʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/həˈloʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hello 發音為 /həˈloʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hello"
      ]
    }
  },
  "help": {
    "word": "help",
    "ipa": "/hɛlp/",
    "syllable": [
      "help"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-410",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "help",
    "actual_sound": "/hɛlp/",
    "note": "自然發音推導例外，美式標準音標為 /hɛlp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɛlp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "help 發音為 /hɛlp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "help"
      ]
    }
  },
  "helpful": {
    "word": "helpful",
    "ipa": "/ˈhɛlp.fəl/",
    "syllable": [
      "help",
      "ful"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-411",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "helpful",
    "actual_sound": "/ˈhɛlp.fəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɛlp.fəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɛlp.fəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "helpful 發音為 /ˈhɛlp.fəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "helpful"
      ]
    }
  },
  "hen": {
    "word": "hen",
    "ipa": "/hɛn/",
    "syllable": [
      "hen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-412",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hen",
    "actual_sound": "/hɛn/",
    "note": "自然發音推導例外，美式標準音標為 /hɛn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɛn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hen 發音為 /hɛn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hen"
      ]
    }
  },
  "here": {
    "word": "here",
    "ipa": "/hɪr/",
    "syllable": [
      "here"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-413",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "here",
    "actual_sound": "/hɪr/",
    "note": "自然發音推導例外，美式標準音標為 /hɪr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "here 發音為 /hɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "here"
      ]
    }
  },
  "hey": {
    "word": "hey",
    "ipa": "/heɪ/",
    "syllable": [
      "hey"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-414",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hey",
    "actual_sound": "/heɪ/",
    "note": "自然發音推導例外，美式標準音標為 /heɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/heɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hey 發音為 /heɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hey"
      ]
    }
  },
  "hi": {
    "word": "hi",
    "ipa": "/haɪ/",
    "syllable": [
      "hi"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-415",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hi",
    "actual_sound": "/haɪ/",
    "note": "自然發音推導例外，美式標準音標為 /haɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/haɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hi 發音為 /haɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hi"
      ]
    }
  },
  "high": {
    "word": "high",
    "ipa": "/haɪ/",
    "syllable": [
      "high"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-416",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "high",
    "actual_sound": "/haɪ/",
    "note": "自然發音推導例外，美式標準音標為 /haɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/haɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "high 發音為 /haɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "high"
      ]
    }
  },
  "hill": {
    "word": "hill",
    "ipa": "/hɪl/",
    "syllable": [
      "hill"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-417",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hill",
    "actual_sound": "/hɪl/",
    "note": "自然發音推導例外，美式標準音標為 /hɪl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɪl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hill 發音為 /hɪl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hill"
      ]
    }
  },
  "hippo": {
    "word": "hippo",
    "ipa": "/ˈhɪp.oʊ/",
    "syllable": [
      "hip",
      "po"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-418",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hippo",
    "actual_sound": "/ˈhɪp.oʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɪp.oʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɪp.oʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hippo 發音為 /ˈhɪp.oʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hippo"
      ]
    }
  },
  "history": {
    "word": "history",
    "ipa": "/ˈhɪs.t̬ɚ.i/",
    "syllable": [
      "his",
      "to",
      "ry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-419",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "history",
    "actual_sound": "/ˈhɪs.t̬ɚ.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɪs.t̬ɚ.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɪs.t̬ɚ.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "history 發音為 /ˈhɪs.t̬ɚ.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "history"
      ]
    }
  },
  "hobby": {
    "word": "hobby",
    "ipa": "/ˈhɑː.bi/",
    "syllable": [
      "hob",
      "by"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-420",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hobby",
    "actual_sound": "/ˈhɑː.bi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɑː.bi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɑː.bi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hobby 發音為 /ˈhɑː.bi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hobby"
      ]
    }
  },
  "hold": {
    "word": "hold",
    "ipa": "/hoʊld/",
    "syllable": [
      "hold"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-421",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hold",
    "actual_sound": "/hoʊld/",
    "note": "自然發音推導例外，美式標準音標為 /hoʊld/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hoʊld/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hold 發音為 /hoʊld/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hold"
      ]
    }
  },
  "holiday": {
    "word": "holiday",
    "ipa": "/ˈhɑː.lə.deɪ/",
    "syllable": [
      "hol",
      "i",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-422",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "holiday",
    "actual_sound": "/ˈhɑː.lə.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɑː.lə.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɑː.lə.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "holiday 發音為 /ˈhɑː.lə.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "holiday"
      ]
    }
  },
  "homework": {
    "word": "homework",
    "ipa": "/ˈhoʊm.wɝːk/",
    "syllable": [
      "home",
      "work"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-423",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "homework",
    "actual_sound": "/ˈhoʊm.wɝːk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhoʊm.wɝːk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhoʊm.wɝːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "homework 發音為 /ˈhoʊm.wɝːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "homework"
      ]
    }
  },
  "honest": {
    "word": "honest",
    "ipa": "/ˈɑː.nɪst/",
    "syllable": [
      "hon",
      "est"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-424",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "honest",
    "actual_sound": "/ˈɑː.nɪst/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɑː.nɪst/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɑː.nɪst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "honest 發音為 /ˈɑː.nɪst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "honest"
      ]
    }
  },
  "honey": {
    "word": "honey",
    "ipa": "/ˈhʌn.i/",
    "syllable": [
      "hon",
      "ey"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-425",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "honey",
    "actual_sound": "/ˈhʌn.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhʌn.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhʌn.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "honey 發音為 /ˈhʌn.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "honey"
      ]
    }
  },
  "hop": {
    "word": "hop",
    "ipa": "/hɑːp/",
    "syllable": [
      "hop"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-426",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hop",
    "actual_sound": "/hɑːp/",
    "note": "自然發音推導例外，美式標準音標為 /hɑːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɑːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hop 發音為 /hɑːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hop"
      ]
    }
  },
  "horse": {
    "word": "horse",
    "ipa": "/hɔːrs/",
    "syllable": [
      "horse"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-427",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "horse",
    "actual_sound": "/hɔːrs/",
    "note": "自然發音推導例外，美式標準音標為 /hɔːrs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɔːrs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "horse 發音為 /hɔːrs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "horse"
      ]
    }
  },
  "hospital": {
    "word": "hospital",
    "ipa": "/ˈhɑː.spɪ.t̬əl/",
    "syllable": [
      "hos",
      "pi",
      "tal"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-428",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hospital",
    "actual_sound": "/ˈhɑː.spɪ.t̬əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɑː.spɪ.t̬əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɑː.spɪ.t̬əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hospital 發音為 /ˈhɑː.spɪ.t̬əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hospital"
      ]
    }
  },
  "hot": {
    "word": "hot",
    "ipa": "/hɑːt/",
    "syllable": [
      "hot"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-429",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hot",
    "actual_sound": "/hɑːt/",
    "note": "自然發音推導例外，美式標準音標為 /hɑːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɑːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hot 發音為 /hɑːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hot"
      ]
    }
  },
  "hot dog": {
    "word": "hot dog",
    "ipa": "/ˌhɑːt ˈdɑːɡ/",
    "syllable": [
      "hot",
      "dog"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-430",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hot dog",
    "actual_sound": "/ˌhɑːt ˈdɑːɡ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌhɑːt ˈdɑːɡ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌhɑːt ˈdɑːɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hot dog 發音為 /ˌhɑːt ˈdɑːɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hot dog"
      ]
    }
  },
  "hotel": {
    "word": "hotel",
    "ipa": "/hoʊˈtɛl/",
    "syllable": [
      "ho",
      "tel"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-431",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hotel",
    "actual_sound": "/hoʊˈtɛl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /hoʊˈtɛl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/hoʊˈtɛl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hotel 發音為 /hoʊˈtɛl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hotel"
      ]
    }
  },
  "hour": {
    "word": "hour",
    "ipa": "/ˈaʊ.ɚ/",
    "syllable": [
      "hour"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-432",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hour",
    "actual_sound": "/ˈaʊ.ɚ/",
    "note": "自然發音推導例外，美式標準音標為 /ˈaʊ.ɚ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ˈaʊ.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hour 發音為 /ˈaʊ.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hour"
      ]
    }
  },
  "house": {
    "word": "house",
    "ipa": "/haʊs/",
    "syllable": [
      "house"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-433",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "house",
    "actual_sound": "/haʊs/",
    "note": "自然發音推導例外，美式標準音標為 /haʊs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/haʊs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "house 發音為 /haʊs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "house"
      ]
    }
  },
  "housewife": {
    "word": "housewife",
    "ipa": "/ˈhaʊs.waɪf/",
    "syllable": [
      "house",
      "wife"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-434",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "housewife",
    "actual_sound": "/ˈhaʊs.waɪf/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhaʊs.waɪf/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhaʊs.waɪf/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "housewife 發音為 /ˈhaʊs.waɪf/，對應 EPRS R010 特殊例外",
      "related_words": [
        "housewife"
      ]
    }
  },
  "how": {
    "word": "how",
    "ipa": "/haʊ/",
    "syllable": [
      "how"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-435",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "how",
    "actual_sound": "/haʊ/",
    "note": "自然發音推導例外，美式標準音標為 /haʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/haʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "how 發音為 /haʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "how"
      ]
    }
  },
  "however": {
    "word": "however",
    "ipa": "/haʊˈɛv.ɚ/",
    "syllable": [
      "how",
      "ev",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-436",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "however",
    "actual_sound": "/haʊˈɛv.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /haʊˈɛv.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/haʊˈɛv.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "however 發音為 /haʊˈɛv.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "however"
      ]
    }
  },
  "hundred": {
    "word": "hundred",
    "ipa": "/ˈhʌn.drəd/",
    "syllable": [
      "hun",
      "dred"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-437",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hundred",
    "actual_sound": "/ˈhʌn.drəd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhʌn.drəd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhʌn.drəd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hundred 發音為 /ˈhʌn.drəd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hundred"
      ]
    }
  },
  "hungry": {
    "word": "hungry",
    "ipa": "/ˈhʌŋ.ɡri/",
    "syllable": [
      "hun",
      "gry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-438",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hungry",
    "actual_sound": "/ˈhʌŋ.ɡri/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhʌŋ.ɡri/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhʌŋ.ɡri/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hungry 發音為 /ˈhʌŋ.ɡri/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hungry"
      ]
    }
  },
  "hurry": {
    "word": "hurry",
    "ipa": "/ˈhɝː.i/",
    "syllable": [
      "hur",
      "ry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-439",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "hurry",
    "actual_sound": "/ˈhɝː.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhɝː.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhɝː.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "hurry 發音為 /ˈhɝː.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hurry"
      ]
    }
  },
  "hurt": {
    "word": "hurt",
    "ipa": "/hɝːt/",
    "syllable": [
      "hurt"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-440",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "hurt",
    "actual_sound": "/hɝːt/",
    "note": "自然發音推導例外，美式標準音標為 /hɝːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/hɝːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "hurt 發音為 /hɝːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "hurt"
      ]
    }
  },
  "husband": {
    "word": "husband",
    "ipa": "/ˈhʌz.bənd/",
    "syllable": [
      "hus",
      "band"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-441",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "husband",
    "actual_sound": "/ˈhʌz.bənd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈhʌz.bənd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈhʌz.bənd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "husband 發音為 /ˈhʌz.bənd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "husband"
      ]
    }
  },
  "i": {
    "word": "I",
    "ipa": "/aɪ/",
    "syllable": [
      "I"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-442",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "I",
    "actual_sound": "/aɪ/",
    "note": "自然發音推導例外，美式標準音標為 /aɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/aɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "I 發音為 /aɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "I"
      ]
    }
  },
  "ice": {
    "word": "ice",
    "ipa": "/aɪs/",
    "syllable": [
      "ice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-443",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "ice",
    "actual_sound": "/aɪs/",
    "note": "自然發音推導例外，美式標準音標為 /aɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/aɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "ice 發音為 /aɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ice"
      ]
    }
  },
  "ice cream": {
    "word": "ice cream",
    "ipa": "/ˌaɪs ˈkriːm/",
    "syllable": [
      "ice",
      "cream"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-444",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ice cream",
    "actual_sound": "/ˌaɪs ˈkriːm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌaɪs ˈkriːm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌaɪs ˈkriːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ice cream 發音為 /ˌaɪs ˈkriːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ice cream"
      ]
    }
  },
  "idea": {
    "word": "idea",
    "ipa": "/aɪˈdiː.ə/",
    "syllable": [
      "i",
      "de",
      "a"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-445",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "idea",
    "actual_sound": "/aɪˈdiː.ə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /aɪˈdiː.ə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/aɪˈdiː.ə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "idea 發音為 /aɪˈdiː.ə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "idea"
      ]
    }
  },
  "important": {
    "word": "important",
    "ipa": "/ɪmˈpɔːr.tənt/",
    "syllable": [
      "im",
      "por",
      "tant"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-446",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "important",
    "actual_sound": "/ɪmˈpɔːr.tənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɪmˈpɔːr.tənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɪmˈpɔːr.tənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "important 發音為 /ɪmˈpɔːr.tənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "important"
      ]
    }
  },
  "insect": {
    "word": "insect",
    "ipa": "/ˈɪn.sɛkt/",
    "syllable": [
      "in",
      "sect"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-447",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "insect",
    "actual_sound": "/ˈɪn.sɛkt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɪn.sɛkt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɪn.sɛkt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "insect 發音為 /ˈɪn.sɛkt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "insect"
      ]
    }
  },
  "interest": {
    "word": "interest",
    "ipa": "/ˈɪn.trɪst/",
    "syllable": [
      "in",
      "ter",
      "est"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-448",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "interest",
    "actual_sound": "/ˈɪn.trɪst/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɪn.trɪst/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɪn.trɪst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "interest 發音為 /ˈɪn.trɪst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "interest"
      ]
    }
  },
  "interested": {
    "word": "interested",
    "ipa": "/ˈɪn.trɪ.stɪd/",
    "syllable": [
      "in",
      "ter",
      "est",
      "ed"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-449",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "interested",
    "actual_sound": "/ˈɪn.trɪ.stɪd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɪn.trɪ.stɪd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɪn.trɪ.stɪd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "interested 發音為 /ˈɪn.trɪ.stɪd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "interested"
      ]
    }
  },
  "interesting": {
    "word": "interesting",
    "ipa": "/ˈɪn.trɪ.stɪŋ/",
    "syllable": [
      "in",
      "ter",
      "est",
      "ing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-450",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "interesting",
    "actual_sound": "/ˈɪn.trɪ.stɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɪn.trɪ.stɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɪn.trɪ.stɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "interesting 發音為 /ˈɪn.trɪ.stɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "interesting"
      ]
    }
  },
  "interview": {
    "word": "interview",
    "ipa": "/ˈɪn.t̬ɚ.vjuː/",
    "syllable": [
      "in",
      "ter",
      "view"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-451",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "interview",
    "actual_sound": "/ˈɪn.t̬ɚ.vjuː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɪn.t̬ɚ.vjuː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɪn.t̬ɚ.vjuː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "interview 發音為 /ˈɪn.t̬ɚ.vjuː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "interview"
      ]
    }
  },
  "internet": {
    "word": "Internet",
    "ipa": "/ˈɪn.t̬ɚ.nɛt/",
    "syllable": [
      "In",
      "ter",
      "net"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-452",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Internet",
    "actual_sound": "/ˈɪn.t̬ɚ.nɛt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɪn.t̬ɚ.nɛt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɪn.t̬ɚ.nɛt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Internet 發音為 /ˈɪn.t̬ɚ.nɛt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Internet"
      ]
    }
  },
  "into": {
    "word": "into",
    "ipa": "/ˈɪn.tuː/",
    "syllable": [
      "in",
      "to"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-453",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "into",
    "actual_sound": "/ˈɪn.tuː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɪn.tuː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɪn.tuː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "into 發音為 /ˈɪn.tuː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "into"
      ]
    }
  },
  "island": {
    "word": "island",
    "ipa": "/ˈaɪ.lənd/",
    "syllable": [
      "is",
      "land"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-454",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "island",
    "actual_sound": "/ˈaɪ.lənd/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /ˈaɪ.lənd/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/ˈaɪ.lənd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "island 發音為 /ˈaɪ.lənd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "island"
      ]
    }
  },
  "jacket": {
    "word": "jacket",
    "ipa": "/ˈdʒæk.ɪt/",
    "syllable": [
      "jack",
      "et"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-455",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "jacket",
    "actual_sound": "/ˈdʒæk.ɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdʒæk.ɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdʒæk.ɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "jacket 發音為 /ˈdʒæk.ɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "jacket"
      ]
    }
  },
  "january": {
    "word": "January",
    "ipa": "/ˈdʒæn.ju.ɛr.i/",
    "syllable": [
      "Jan",
      "u",
      "ar",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-456",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "January",
    "actual_sound": "/ˈdʒæn.ju.ɛr.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdʒæn.ju.ɛr.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdʒæn.ju.ɛr.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "January 發音為 /ˈdʒæn.ju.ɛr.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "January"
      ]
    }
  },
  "jeans": {
    "word": "jeans",
    "ipa": "/dʒiːnz/",
    "syllable": [
      "jeans"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-457",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "jeans",
    "actual_sound": "/dʒiːnz/",
    "note": "自然發音推導例外，美式標準音標為 /dʒiːnz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒiːnz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "jeans 發音為 /dʒiːnz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "jeans"
      ]
    }
  },
  "job": {
    "word": "job",
    "ipa": "/dʒɑːb/",
    "syllable": [
      "job"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-458",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "job",
    "actual_sound": "/dʒɑːb/",
    "note": "自然發音推導例外，美式標準音標為 /dʒɑːb/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒɑːb/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "job 發音為 /dʒɑːb/，對應 EPRS R010 特殊例外",
      "related_words": [
        "job"
      ]
    }
  },
  "jog": {
    "word": "jog",
    "ipa": "/dʒɑːɡ/",
    "syllable": [
      "jog"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-459",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "jog",
    "actual_sound": "/dʒɑːɡ/",
    "note": "自然發音推導例外，美式標準音標為 /dʒɑːɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒɑːɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "jog 發音為 /dʒɑːɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "jog"
      ]
    }
  },
  "join": {
    "word": "join",
    "ipa": "/dʒɔɪn/",
    "syllable": [
      "join"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-460",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "join",
    "actual_sound": "/dʒɔɪn/",
    "note": "自然發音推導例外，美式標準音標為 /dʒɔɪn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒɔɪn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "join 發音為 /dʒɔɪn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "join"
      ]
    }
  },
  "joy": {
    "word": "joy",
    "ipa": "/dʒɔɪ/",
    "syllable": [
      "joy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-461",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "joy",
    "actual_sound": "/dʒɔɪ/",
    "note": "自然發音推導例外，美式標準音標為 /dʒɔɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒɔɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "joy 發音為 /dʒɔɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "joy"
      ]
    }
  },
  "juice": {
    "word": "juice",
    "ipa": "/dʒuːs/",
    "syllable": [
      "juice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-462",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "juice",
    "actual_sound": "/dʒuːs/",
    "note": "自然發音推導例外，美式標準音標為 /dʒuːs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒuːs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "juice 發音為 /dʒuːs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "juice"
      ]
    }
  },
  "july": {
    "word": "July",
    "ipa": "/dʒuːˈlaɪ/",
    "syllable": [
      "Ju",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-463",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "July",
    "actual_sound": "/dʒuːˈlaɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /dʒuːˈlaɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/dʒuːˈlaɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "July 發音為 /dʒuːˈlaɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "July"
      ]
    }
  },
  "jump": {
    "word": "jump",
    "ipa": "/dʒʌmp/",
    "syllable": [
      "jump"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-464",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "jump",
    "actual_sound": "/dʒʌmp/",
    "note": "自然發音推導例外，美式標準音標為 /dʒʌmp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒʌmp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "jump 發音為 /dʒʌmp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "jump"
      ]
    }
  },
  "june": {
    "word": "June",
    "ipa": "/dʒuːn/",
    "syllable": [
      "June"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-465",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "June",
    "actual_sound": "/dʒuːn/",
    "note": "自然發音推導例外，美式標準音標為 /dʒuːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒuːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "June 發音為 /dʒuːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "June"
      ]
    }
  },
  "junior high school": {
    "word": "junior high school",
    "ipa": "/ˈdʒuː.njɚ haɪ skuːl/",
    "syllable": [
      "ju",
      "nior",
      "high",
      "school"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-466",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "junior high school",
    "actual_sound": "/ˈdʒuː.njɚ haɪ skuːl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈdʒuː.njɚ haɪ skuːl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈdʒuː.njɚ haɪ skuːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "junior high school 發音為 /ˈdʒuː.njɚ haɪ skuːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "junior high school"
      ]
    }
  },
  "just": {
    "word": "just",
    "ipa": "/dʒʌst/",
    "syllable": [
      "just"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-467",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "just",
    "actual_sound": "/dʒʌst/",
    "note": "自然發音推導例外，美式標準音標為 /dʒʌst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/dʒʌst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "just 發音為 /dʒʌst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "just"
      ]
    }
  },
  "kangaroo": {
    "word": "kangaroo",
    "ipa": "/ˌkæŋ.ɡəˈruː/",
    "syllable": [
      "kan",
      "ga",
      "roo"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-468",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "kangaroo",
    "actual_sound": "/ˌkæŋ.ɡəˈruː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌkæŋ.ɡəˈruː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌkæŋ.ɡəˈruː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "kangaroo 發音為 /ˌkæŋ.ɡəˈruː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "kangaroo"
      ]
    }
  },
  "keep": {
    "word": "keep",
    "ipa": "/kiːp/",
    "syllable": [
      "keep"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-469",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "keep",
    "actual_sound": "/kiːp/",
    "note": "自然發音推導例外，美式標準音標為 /kiːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kiːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "keep 發音為 /kiːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "keep"
      ]
    }
  },
  "key": {
    "word": "key",
    "ipa": "/kiː/",
    "syllable": [
      "key"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-470",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "key",
    "actual_sound": "/kiː/",
    "note": "自然發音推導例外，美式標準音標為 /kiː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kiː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "key 發音為 /kiː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "key"
      ]
    }
  },
  "kill": {
    "word": "kill",
    "ipa": "/kɪl/",
    "syllable": [
      "kill"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-471",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "kill",
    "actual_sound": "/kɪl/",
    "note": "自然發音推導例外，美式標準音標為 /kɪl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kɪl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "kill 發音為 /kɪl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "kill"
      ]
    }
  },
  "kilo": {
    "word": "kilo",
    "ipa": "/ˈkɪl.ə.ɡræm/",
    "syllable": [
      "ki",
      "lo",
      "gram"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-472",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "kilo",
    "actual_sound": "/ˈkɪl.ə.ɡræm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkɪl.ə.ɡræm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkɪl.ə.ɡræm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "kilo 發音為 /ˈkɪl.ə.ɡræm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "kilo"
      ]
    }
  },
  "kind": {
    "word": "kind",
    "ipa": "/kaɪnd/",
    "syllable": [
      "kind"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-473",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "kind",
    "actual_sound": "/kaɪnd/",
    "note": "自然發音推導例外，美式標準音標為 /kaɪnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kaɪnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "kind 發音為 /kaɪnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "kind"
      ]
    }
  },
  "kiss": {
    "word": "kiss",
    "ipa": "/kɪs/",
    "syllable": [
      "kiss"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-474",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "kiss",
    "actual_sound": "/kɪs/",
    "note": "自然發音推導例外，美式標準音標為 /kɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "kiss 發音為 /kɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "kiss"
      ]
    }
  },
  "kitchen": {
    "word": "kitchen",
    "ipa": "/ˈkɪtʃ.ən/",
    "syllable": [
      "kitch",
      "en"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-475",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "kitchen",
    "actual_sound": "/ˈkɪtʃ.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkɪtʃ.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkɪtʃ.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "kitchen 發音為 /ˈkɪtʃ.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "kitchen"
      ]
    }
  },
  "knee": {
    "word": "knee",
    "ipa": "/niː/",
    "syllable": [
      "knee"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-476",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "knee",
    "actual_sound": "/niː/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /niː/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/niː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "knee 發音為 /niː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "knee"
      ]
    }
  },
  "knife": {
    "word": "knife",
    "ipa": "/naɪf/",
    "syllable": [
      "knife"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-477",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "knife",
    "actual_sound": "/naɪf/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /naɪf/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/naɪf/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "knife 發音為 /naɪf/，對應 EPRS R010 特殊例外",
      "related_words": [
        "knife"
      ]
    }
  },
  "knock": {
    "word": "knock",
    "ipa": "/nɑːk/",
    "syllable": [
      "knock"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-478",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "knock",
    "actual_sound": "/nɑːk/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /nɑːk/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/nɑːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "knock 發音為 /nɑːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "knock"
      ]
    }
  },
  "know": {
    "word": "know",
    "ipa": "/noʊ/",
    "syllable": [
      "know"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-479",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "know",
    "actual_sound": "/noʊ/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /noʊ/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/noʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "know 發音為 /noʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "know"
      ]
    }
  },
  "knowledge": {
    "word": "knowledge",
    "ipa": "/ˈnɑː.lɪdʒ/",
    "syllable": [
      "knowl",
      "edge"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-480",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "knowledge",
    "actual_sound": "/ˈnɑː.lɪdʒ/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /ˈnɑː.lɪdʒ/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/ˈnɑː.lɪdʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "knowledge 發音為 /ˈnɑː.lɪdʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "knowledge"
      ]
    }
  },
  "koala": {
    "word": "koala",
    "ipa": "/koʊˈɑː.lə/",
    "syllable": [
      "ko",
      "a",
      "la"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-481",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "koala",
    "actual_sound": "/koʊˈɑː.lə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /koʊˈɑː.lə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/koʊˈɑː.lə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "koala 發音為 /koʊˈɑː.lə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "koala"
      ]
    }
  },
  "language": {
    "word": "language",
    "ipa": "/ˈlæŋ.ɡwɪdʒ/",
    "syllable": [
      "lan",
      "guage"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-482",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "language",
    "actual_sound": "/ˈlæŋ.ɡwɪdʒ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlæŋ.ɡwɪdʒ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlæŋ.ɡwɪdʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "language 發音為 /ˈlæŋ.ɡwɪdʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "language"
      ]
    }
  },
  "lantern": {
    "word": "lantern",
    "ipa": "/ˈlæn.tɚn/",
    "syllable": [
      "lan",
      "tern"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-483",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lantern",
    "actual_sound": "/ˈlæn.tɚn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlæn.tɚn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlæn.tɚn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lantern 發音為 /ˈlæn.tɚn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lantern"
      ]
    }
  },
  "large": {
    "word": "large",
    "ipa": "/lɑːrdʒ/",
    "syllable": [
      "large"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-484",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "large",
    "actual_sound": "/lɑːrdʒ/",
    "note": "自然發音推導例外，美式標準音標為 /lɑːrdʒ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lɑːrdʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "large 發音為 /lɑːrdʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "large"
      ]
    }
  },
  "later": {
    "word": "later",
    "ipa": "/ˈleɪ.t̬ɚ/",
    "syllable": [
      "lat",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-485",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "later",
    "actual_sound": "/ˈleɪ.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈleɪ.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈleɪ.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "later 發音為 /ˈleɪ.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "later"
      ]
    }
  },
  "laugh": {
    "word": "laugh",
    "ipa": "/læf/",
    "syllable": [
      "laugh"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-486",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "laugh",
    "actual_sound": "/læf/",
    "note": "自然發音推導例外，美式標準音標為 /læf/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/læf/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "laugh 發音為 /læf/，對應 EPRS R010 特殊例外",
      "related_words": [
        "laugh"
      ]
    }
  },
  "lawyer": {
    "word": "lawyer",
    "ipa": "/ˈlɑː.jɚ/",
    "syllable": [
      "law",
      "yer"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-487",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lawyer",
    "actual_sound": "/ˈlɑː.jɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlɑː.jɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlɑː.jɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lawyer 發音為 /ˈlɑː.jɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lawyer"
      ]
    }
  },
  "lazy": {
    "word": "lazy",
    "ipa": "/ˈleɪ.zi/",
    "syllable": [
      "la",
      "zy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-488",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lazy",
    "actual_sound": "/ˈleɪ.zi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈleɪ.zi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈleɪ.zi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lazy 發音為 /ˈleɪ.zi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lazy"
      ]
    }
  },
  "lead": {
    "word": "lead",
    "ipa": "/liːd/",
    "syllable": [
      "lead"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-489",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "lead",
    "actual_sound": "/liːd/",
    "note": "自然發音推導例外，美式標準音標為 /liːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/liːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "lead 發音為 /liːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lead"
      ]
    }
  },
  "leader": {
    "word": "leader",
    "ipa": "/ˈliː.dɚ/",
    "syllable": [
      "lead",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-490",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "leader",
    "actual_sound": "/ˈliː.dɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈliː.dɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈliː.dɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "leader 發音為 /ˈliː.dɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "leader"
      ]
    }
  },
  "learn": {
    "word": "learn",
    "ipa": "/lɝːn/",
    "syllable": [
      "learn"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-491",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "learn",
    "actual_sound": "/lɝːn/",
    "note": "自然發音推導例外，美式標準音標為 /lɝːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lɝːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "learn 發音為 /lɝːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "learn"
      ]
    }
  },
  "least": {
    "word": "least",
    "ipa": "/liːst/",
    "syllable": [
      "least"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-492",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "least",
    "actual_sound": "/liːst/",
    "note": "自然發音推導例外，美式標準音標為 /liːst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/liːst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "least 發音為 /liːst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "least"
      ]
    }
  },
  "leave": {
    "word": "leave",
    "ipa": "/liːv/",
    "syllable": [
      "leave"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-493",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "leave",
    "actual_sound": "/liːv/",
    "note": "自然發音推導例外，美式標準音標為 /liːv/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/liːv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "leave 發音為 /liːv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "leave"
      ]
    }
  },
  "left": {
    "word": "left",
    "ipa": "/lɛft/",
    "syllable": [
      "left"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-494",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "left",
    "actual_sound": "/lɛft/",
    "note": "自然發音推導例外，美式標準音標為 /lɛft/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lɛft/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "left 發音為 /lɛft/，對應 EPRS R010 特殊例外",
      "related_words": [
        "left"
      ]
    }
  },
  "leg": {
    "word": "leg",
    "ipa": "/lɛɡ/",
    "syllable": [
      "leg"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-495",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "leg",
    "actual_sound": "/lɛɡ/",
    "note": "自然發音推導例外，美式標準音標為 /lɛɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lɛɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "leg 發音為 /lɛɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "leg"
      ]
    }
  },
  "lemon": {
    "word": "lemon",
    "ipa": "/ˈlɛm.ən/",
    "syllable": [
      "lem",
      "on"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-496",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lemon",
    "actual_sound": "/ˈlɛm.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlɛm.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlɛm.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lemon 發音為 /ˈlɛm.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lemon"
      ]
    }
  },
  "lend": {
    "word": "lend",
    "ipa": "/lɛnd/",
    "syllable": [
      "lend"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-497",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "lend",
    "actual_sound": "/lɛnd/",
    "note": "自然發音推導例外，美式標準音標為 /lɛnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lɛnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "lend 發音為 /lɛnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lend"
      ]
    }
  },
  "less": {
    "word": "less",
    "ipa": "/lɛs/",
    "syllable": [
      "less"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-498",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "less",
    "actual_sound": "/lɛs/",
    "note": "自然發音推導例外，美式標準音標為 /lɛs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lɛs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "less 發音為 /lɛs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "less"
      ]
    }
  },
  "lesson": {
    "word": "lesson",
    "ipa": "/ˈlɛs.ən/",
    "syllable": [
      "les",
      "son"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-499",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lesson",
    "actual_sound": "/ˈlɛs.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlɛs.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlɛs.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lesson 發音為 /ˈlɛs.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lesson"
      ]
    }
  },
  "let": {
    "word": "let",
    "ipa": "/lɛt/",
    "syllable": [
      "let"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-500",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "let",
    "actual_sound": "/lɛt/",
    "note": "自然發音推導例外，美式標準音標為 /lɛt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lɛt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "let 發音為 /lɛt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "let"
      ]
    }
  },
  "letter": {
    "word": "letter",
    "ipa": "/ˈlɛt.ɚ/",
    "syllable": [
      "let",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-501",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "letter",
    "actual_sound": "/ˈlɛt.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlɛt.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlɛt.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "letter 發音為 /ˈlɛt.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "letter"
      ]
    }
  },
  "lettuce": {
    "word": "lettuce",
    "ipa": "/ˈlɛt.ɪs/",
    "syllable": [
      "let",
      "tuce"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-502",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lettuce",
    "actual_sound": "/ˈlɛt.ɪs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlɛt.ɪs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlɛt.ɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lettuce 發音為 /ˈlɛt.ɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lettuce"
      ]
    }
  },
  "library": {
    "word": "library",
    "ipa": "/ˈlaɪ.brɛr.i/",
    "syllable": [
      "li",
      "brary"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-503",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "library",
    "actual_sound": "/ˈlaɪ.brɛr.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlaɪ.brɛr.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlaɪ.brɛr.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "library 發音為 /ˈlaɪ.brɛr.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "library"
      ]
    }
  },
  "lie": {
    "word": "lie",
    "ipa": "/laɪ/",
    "syllable": [
      "lie"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-504",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "lie",
    "actual_sound": "/laɪ/",
    "note": "自然發音推導例外，美式標準音標為 /laɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/laɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "lie 發音為 /laɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lie"
      ]
    }
  },
  "light": {
    "word": "light",
    "ipa": "/laɪt/",
    "syllable": [
      "light"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-505",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "light",
    "actual_sound": "/laɪt/",
    "note": "自然發音推導例外，美式標準音標為 /laɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/laɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "light 發音為 /laɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "light"
      ]
    }
  },
  "lion": {
    "word": "lion",
    "ipa": "/ˈlaɪ.ən/",
    "syllable": [
      "li",
      "on"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-506",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lion",
    "actual_sound": "/ˈlaɪ.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlaɪ.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlaɪ.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lion 發音為 /ˈlaɪ.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lion"
      ]
    }
  },
  "listen": {
    "word": "listen",
    "ipa": "/ˈlɪs.ən/",
    "syllable": [
      "lis",
      "ten"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-507",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "listen",
    "actual_sound": "/ˈlɪs.ən/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /ˈlɪs.ən/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/ˈlɪs.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "listen 發音為 /ˈlɪs.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "listen"
      ]
    }
  },
  "little": {
    "word": "little",
    "ipa": "/ˈlɪt.əl/",
    "syllable": [
      "lit",
      "tle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-508",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "little",
    "actual_sound": "/ˈlɪt.əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlɪt.əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlɪt.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "little 發音為 /ˈlɪt.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "little"
      ]
    }
  },
  "living room": {
    "word": "living room",
    "ipa": "/ˈlɪv.ɪŋ ruːm/",
    "syllable": [
      "liv",
      "ing",
      "room"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-509",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "living room",
    "actual_sound": "/ˈlɪv.ɪŋ ruːm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlɪv.ɪŋ ruːm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlɪv.ɪŋ ruːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "living room 發音為 /ˈlɪv.ɪŋ ruːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "living room"
      ]
    }
  },
  "long": {
    "word": "long",
    "ipa": "/lɔːŋ/",
    "syllable": [
      "long"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-510",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "long",
    "actual_sound": "/lɔːŋ/",
    "note": "自然發音推導例外，美式標準音標為 /lɔːŋ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lɔːŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "long 發音為 /lɔːŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "long"
      ]
    }
  },
  "lose": {
    "word": "lose",
    "ipa": "/luːz/",
    "syllable": [
      "lose"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-511",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "lose",
    "actual_sound": "/luːz/",
    "note": "自然發音推導例外，美式標準音標為 /luːz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/luːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "lose 發音為 /luːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lose"
      ]
    }
  },
  "loud": {
    "word": "loud",
    "ipa": "/laʊd/",
    "syllable": [
      "loud"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-512",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "loud",
    "actual_sound": "/laʊd/",
    "note": "自然發音推導例外，美式標準音標為 /laʊd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/laʊd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "loud 發音為 /laʊd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "loud"
      ]
    }
  },
  "love": {
    "word": "love",
    "ipa": "/lʌv/",
    "syllable": [
      "love"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-513",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "love",
    "actual_sound": "/lʌv/",
    "note": "自然發音推導例外，美式標準音標為 /lʌv/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/lʌv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "love 發音為 /lʌv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "love"
      ]
    }
  },
  "lovely": {
    "word": "lovely",
    "ipa": "/ˈlʌv.li/",
    "syllable": [
      "love",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-514",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lovely",
    "actual_sound": "/ˈlʌv.li/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlʌv.li/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlʌv.li/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lovely 發音為 /ˈlʌv.li/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lovely"
      ]
    }
  },
  "low": {
    "word": "low",
    "ipa": "/loʊ/",
    "syllable": [
      "low"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-515",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "low",
    "actual_sound": "/loʊ/",
    "note": "自然發音推導例外，美式標準音標為 /loʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/loʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "low 發音為 /loʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "low"
      ]
    }
  },
  "lucky": {
    "word": "lucky",
    "ipa": "/ˈlʌk.i/",
    "syllable": [
      "luck",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-516",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "lucky",
    "actual_sound": "/ˈlʌk.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈlʌk.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈlʌk.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "lucky 發音為 /ˈlʌk.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "lucky"
      ]
    }
  },
  "machine": {
    "word": "machine",
    "ipa": "/məˈʃiːn/",
    "syllable": [
      "ma",
      "chine"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-517",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "machine",
    "actual_sound": "/məˈʃiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /məˈʃiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/məˈʃiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "machine 發音為 /məˈʃiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "machine"
      ]
    }
  },
  "magic": {
    "word": "magic",
    "ipa": "/ˈmædʒ.ɪk/",
    "syllable": [
      "mag",
      "ic"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-518",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "magic",
    "actual_sound": "/ˈmædʒ.ɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmædʒ.ɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmædʒ.ɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "magic 發音為 /ˈmædʒ.ɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "magic"
      ]
    }
  },
  "mailman": {
    "word": "mailman",
    "ipa": "/ˈmeɪl.mæn/",
    "syllable": [
      "mail",
      "man"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-519",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "mailman",
    "actual_sound": "/ˈmeɪl.mæn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmeɪl.mæn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmeɪl.mæn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "mailman 發音為 /ˈmeɪl.mæn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mailman"
      ]
    }
  },
  "many": {
    "word": "many",
    "ipa": "/ˈmɛn.i/",
    "syllable": [
      "man",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-520",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "many",
    "actual_sound": "/ˈmɛn.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɛn.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɛn.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "many 發音為 /ˈmɛn.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "many"
      ]
    }
  },
  "marker": {
    "word": "marker",
    "ipa": "/ˈmɑːr.kɚ/",
    "syllable": [
      "mark",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-521",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "marker",
    "actual_sound": "/ˈmɑːr.kɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɑːr.kɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɑːr.kɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "marker 發音為 /ˈmɑːr.kɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "marker"
      ]
    }
  },
  "market": {
    "word": "market",
    "ipa": "/ˈmɑːr.kɪt/",
    "syllable": [
      "mar",
      "ket"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-522",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "market",
    "actual_sound": "/ˈmɑːr.kɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɑːr.kɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɑːr.kɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "market 發音為 /ˈmɑːr.kɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "market"
      ]
    }
  },
  "married": {
    "word": "married",
    "ipa": "/ˈmær.id/",
    "syllable": [
      "mar",
      "ried"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-523",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "married",
    "actual_sound": "/ˈmær.id/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmær.id/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmær.id/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "married 發音為 /ˈmær.id/，對應 EPRS R010 特殊例外",
      "related_words": [
        "married"
      ]
    }
  },
  "matter": {
    "word": "matter",
    "ipa": "/ˈmæt.ɚ/",
    "syllable": [
      "mat",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-524",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "matter",
    "actual_sound": "/ˈmæt.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmæt.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmæt.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "matter 發音為 /ˈmæt.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "matter"
      ]
    }
  },
  "maybe": {
    "word": "maybe",
    "ipa": "/ˈmeɪ.bi/",
    "syllable": [
      "may",
      "be"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-525",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "maybe",
    "actual_sound": "/ˈmeɪ.bi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmeɪ.bi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmeɪ.bi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "maybe 發音為 /ˈmeɪ.bi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "maybe"
      ]
    }
  },
  "meal": {
    "word": "meal",
    "ipa": "/miːl/",
    "syllable": [
      "meal"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-526",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "meal",
    "actual_sound": "/miːl/",
    "note": "自然發音推導例外，美式標準音標為 /miːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/miːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "meal 發音為 /miːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "meal"
      ]
    }
  },
  "mean": {
    "word": "mean",
    "ipa": "/miːn/",
    "syllable": [
      "mean"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-527",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "mean",
    "actual_sound": "/miːn/",
    "note": "自然發音推導例外，美式標準音標為 /miːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/miːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "mean 發音為 /miːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mean"
      ]
    }
  },
  "meat": {
    "word": "meat",
    "ipa": "/miːt/",
    "syllable": [
      "meat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-528",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "meat",
    "actual_sound": "/miːt/",
    "note": "自然發音推導例外，美式標準音標為 /miːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/miːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "meat 發音為 /miːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "meat"
      ]
    }
  },
  "medicine": {
    "word": "medicine",
    "ipa": "/ˈmɛd.ə.sən/",
    "syllable": [
      "med",
      "i",
      "cine"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-529",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "medicine",
    "actual_sound": "/ˈmɛd.ə.sən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɛd.ə.sən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɛd.ə.sən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "medicine 發音為 /ˈmɛd.ə.sən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "medicine"
      ]
    }
  },
  "medium": {
    "word": "medium",
    "ipa": "/ˈmiː.di.əm/",
    "syllable": [
      "me",
      "di",
      "um"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-530",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "medium",
    "actual_sound": "/ˈmiː.di.əm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmiː.di.əm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmiː.di.əm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "medium 發音為 /ˈmiː.di.əm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "medium"
      ]
    }
  },
  "meet": {
    "word": "meet",
    "ipa": "/miːt/",
    "syllable": [
      "meet"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-531",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "meet",
    "actual_sound": "/miːt/",
    "note": "自然發音推導例外，美式標準音標為 /miːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/miːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "meet 發音為 /miːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "meet"
      ]
    }
  },
  "meeting": {
    "word": "meeting",
    "ipa": "/ˈmiː.t̬ɪŋ/",
    "syllable": [
      "meet",
      "ing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-532",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "meeting",
    "actual_sound": "/ˈmiː.t̬ɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmiː.t̬ɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmiː.t̬ɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "meeting 發音為 /ˈmiː.t̬ɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "meeting"
      ]
    }
  },
  "menu": {
    "word": "menu",
    "ipa": "/ˈmɛn.juː/",
    "syllable": [
      "men",
      "u"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-533",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "menu",
    "actual_sound": "/ˈmɛn.juː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɛn.juː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɛn.juː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "menu 發音為 /ˈmɛn.juː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "menu"
      ]
    }
  },
  "million": {
    "word": "million",
    "ipa": "/ˈmɪl.jən/",
    "syllable": [
      "mil",
      "lion"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-534",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "million",
    "actual_sound": "/ˈmɪl.jən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɪl.jən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɪl.jən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "million 發音為 /ˈmɪl.jən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "million"
      ]
    }
  },
  "mind": {
    "word": "mind",
    "ipa": "/maɪnd/",
    "syllable": [
      "mind"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-535",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "mind",
    "actual_sound": "/maɪnd/",
    "note": "自然發音推導例外，美式標準音標為 /maɪnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/maɪnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "mind 發音為 /maɪnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mind"
      ]
    }
  },
  "minute": {
    "word": "minute",
    "ipa": "/ˈmɪn.ɪt/",
    "syllable": [
      "min",
      "ute"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-536",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "minute",
    "actual_sound": "/ˈmɪn.ɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɪn.ɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɪn.ɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "minute 發音為 /ˈmɪn.ɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "minute"
      ]
    }
  },
  "miss": {
    "word": "Miss",
    "ipa": "/mɪs/",
    "syllable": [
      "Miss"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-537",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "Miss",
    "actual_sound": "/mɪs/",
    "note": "自然發音推導例外，美式標準音標為 /mɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/mɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "Miss 發音為 /mɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Miss"
      ]
    }
  },
  "mistake": {
    "word": "mistake",
    "ipa": "/mɪˈsteɪk/",
    "syllable": [
      "mis",
      "take"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-538",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "mistake",
    "actual_sound": "/mɪˈsteɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /mɪˈsteɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/mɪˈsteɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "mistake 發音為 /mɪˈsteɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mistake"
      ]
    }
  },
  "modern": {
    "word": "modern",
    "ipa": "/ˈmɑː.dɚn/",
    "syllable": [
      "mod",
      "ern"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-539",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "modern",
    "actual_sound": "/ˈmɑː.dɚn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɑː.dɚn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɑː.dɚn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "modern 發音為 /ˈmɑː.dɚn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "modern"
      ]
    }
  },
  "moment": {
    "word": "moment",
    "ipa": "/ˈmoʊ.mənt/",
    "syllable": [
      "mo",
      "ment"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-540",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "moment",
    "actual_sound": "/ˈmoʊ.mənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmoʊ.mənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmoʊ.mənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "moment 發音為 /ˈmoʊ.mənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "moment"
      ]
    }
  },
  "monday": {
    "word": "Monday",
    "ipa": "/ˈmʌn.deɪ/",
    "syllable": [
      "Mon",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-541",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Monday",
    "actual_sound": "/ˈmʌn.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmʌn.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmʌn.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Monday 發音為 /ˈmʌn.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Monday"
      ]
    }
  },
  "money": {
    "word": "money",
    "ipa": "/ˈmʌn.i/",
    "syllable": [
      "mon",
      "ey"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-542",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "money",
    "actual_sound": "/ˈmʌn.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmʌn.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmʌn.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "money 發音為 /ˈmʌn.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "money"
      ]
    }
  },
  "monkey": {
    "word": "monkey",
    "ipa": "/ˈmʌŋ.ki/",
    "syllable": [
      "mon",
      "key"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-543",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "monkey",
    "actual_sound": "/ˈmʌŋ.ki/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmʌŋ.ki/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmʌŋ.ki/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "monkey 發音為 /ˈmʌŋ.ki/，對應 EPRS R010 特殊例外",
      "related_words": [
        "monkey"
      ]
    }
  },
  "month": {
    "word": "month",
    "ipa": "/mʌnθ/",
    "syllable": [
      "month"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-544",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "month",
    "actual_sound": "/mʌnθ/",
    "note": "自然發音推導例外，美式標準音標為 /mʌnθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/mʌnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "month 發音為 /mʌnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "month"
      ]
    }
  },
  "moon": {
    "word": "moon",
    "ipa": "/muːn/",
    "syllable": [
      "moon"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-545",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "moon",
    "actual_sound": "/muːn/",
    "note": "自然發音推導例外，美式標準音標為 /muːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/muːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "moon 發音為 /muːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "moon"
      ]
    }
  },
  "mop": {
    "word": "mop",
    "ipa": "/mɑːp/",
    "syllable": [
      "mop"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-546",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "mop",
    "actual_sound": "/mɑːp/",
    "note": "自然發音推導例外，美式標準音標為 /mɑːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/mɑːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "mop 發音為 /mɑːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mop"
      ]
    }
  },
  "more": {
    "word": "more",
    "ipa": "/mɔːr/",
    "syllable": [
      "more"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-547",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "more",
    "actual_sound": "/mɔːr/",
    "note": "自然發音推導例外，美式標準音標為 /mɔːr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/mɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "more 發音為 /mɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "more"
      ]
    }
  },
  "morning": {
    "word": "morning",
    "ipa": "/ˈmɔːr.nɪŋ/",
    "syllable": [
      "mor",
      "ning"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-548",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "morning",
    "actual_sound": "/ˈmɔːr.nɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmɔːr.nɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmɔːr.nɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "morning 發音為 /ˈmɔːr.nɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "morning"
      ]
    }
  },
  "most": {
    "word": "most",
    "ipa": "/moʊst/",
    "syllable": [
      "most"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-549",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "most",
    "actual_sound": "/moʊst/",
    "note": "自然發音推導例外，美式標準音標為 /moʊst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/moʊst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "most 發音為 /moʊst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "most"
      ]
    }
  },
  "mother": {
    "word": "mother",
    "ipa": "/ˈmʌð.ɚ/",
    "syllable": [
      "moth",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-550",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "mother",
    "actual_sound": "/ˈmʌð.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmʌð.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmʌð.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "mother 發音為 /ˈmʌð.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mother"
      ]
    }
  },
  "motorcycle": {
    "word": "motorcycle",
    "ipa": "/ˈmoʊ.t̬ɚˌsaɪ.kəl/",
    "syllable": [
      "mo",
      "tor",
      "cy",
      "cle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-551",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "motorcycle",
    "actual_sound": "/ˈmoʊ.t̬ɚˌsaɪ.kəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmoʊ.t̬ɚˌsaɪ.kəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmoʊ.t̬ɚˌsaɪ.kəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "motorcycle 發音為 /ˈmoʊ.t̬ɚˌsaɪ.kəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "motorcycle"
      ]
    }
  },
  "mountain": {
    "word": "mountain",
    "ipa": "/ˈmaʊn.tən/",
    "syllable": [
      "moun",
      "tain"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-552",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "mountain",
    "actual_sound": "/ˈmaʊn.tən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmaʊn.tən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmaʊn.tən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "mountain 發音為 /ˈmaʊn.tən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mountain"
      ]
    }
  },
  "mouse": {
    "word": "mouse",
    "ipa": "/maʊs/",
    "syllable": [
      "mouse"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-553",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "mouse",
    "actual_sound": "/maʊs/",
    "note": "自然發音推導例外，美式標準音標為 /maʊs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/maʊs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "mouse 發音為 /maʊs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mouse"
      ]
    }
  },
  "mouth": {
    "word": "mouth",
    "ipa": "/maʊθ/",
    "syllable": [
      "mouth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-554",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "mouth",
    "actual_sound": "/maʊθ/",
    "note": "自然發音推導例外，美式標準音標為 /maʊθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/maʊθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "mouth 發音為 /maʊθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "mouth"
      ]
    }
  },
  "move": {
    "word": "move",
    "ipa": "/muːv/",
    "syllable": [
      "move"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-555",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "move",
    "actual_sound": "/muːv/",
    "note": "自然發音推導例外，美式標準音標為 /muːv/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/muːv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "move 發音為 /muːv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "move"
      ]
    }
  },
  "movie": {
    "word": "movie",
    "ipa": "/ˈmuː.vi/",
    "syllable": [
      "mov",
      "ie"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-556",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "movie",
    "actual_sound": "/ˈmuː.vi/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmuː.vi/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmuː.vi/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "movie 發音為 /ˈmuː.vi/，對應 EPRS R010 特殊例外",
      "related_words": [
        "movie"
      ]
    }
  },
  "mr.": {
    "word": "Mr.",
    "ipa": "/ˈmɪs.tɚ/",
    "syllable": [
      "Mr."
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-557",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "Mr.",
    "actual_sound": "/ˈmɪs.tɚ/",
    "note": "自然發音推導例外，美式標準音標為 /ˈmɪs.tɚ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ˈmɪs.tɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "Mr. 發音為 /ˈmɪs.tɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Mr."
      ]
    }
  },
  "mrs.": {
    "word": "Mrs.",
    "ipa": "/ˈmɪs.ɪz/",
    "syllable": [
      "Mrs."
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-558",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "Mrs.",
    "actual_sound": "/ˈmɪs.ɪz/",
    "note": "自然發音推導例外，美式標準音標為 /ˈmɪs.ɪz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ˈmɪs.ɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "Mrs. 發音為 /ˈmɪs.ɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Mrs."
      ]
    }
  },
  "mrt": {
    "word": "MRT",
    "ipa": "/ˌɛm.ɑːrˈtiː/",
    "syllable": [
      "M",
      "R",
      "T"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-559",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "MRT",
    "actual_sound": "/ˌɛm.ɑːrˈtiː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌɛm.ɑːrˈtiː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌɛm.ɑːrˈtiː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "MRT 發音為 /ˌɛm.ɑːrˈtiː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "MRT"
      ]
    }
  },
  "ms.": {
    "word": "Ms.",
    "ipa": "/mɪz/",
    "syllable": [
      "Ms."
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-560",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "Ms.",
    "actual_sound": "/mɪz/",
    "note": "自然發音推導例外，美式標準音標為 /mɪz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/mɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "Ms. 發音為 /mɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Ms."
      ]
    }
  },
  "museum": {
    "word": "museum",
    "ipa": "/mjuːˈziː.əm/",
    "syllable": [
      "mu",
      "se",
      "um"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-561",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "museum",
    "actual_sound": "/mjuːˈziː.əm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /mjuːˈziː.əm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/mjuːˈziː.əm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "museum 發音為 /mjuːˈziː.əm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "museum"
      ]
    }
  },
  "music": {
    "word": "music",
    "ipa": "/ˈmjuː.zɪk/",
    "syllable": [
      "mu",
      "sic"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-562",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "music",
    "actual_sound": "/ˈmjuː.zɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈmjuː.zɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈmjuː.zɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "music 發音為 /ˈmjuː.zɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "music"
      ]
    }
  },
  "national": {
    "word": "national",
    "ipa": "/ˈnæʃ.ən.əl/",
    "syllable": [
      "na",
      "tion",
      "al"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-563",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "national",
    "actual_sound": "/ˈnæʃ.ən.əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnæʃ.ən.əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnæʃ.ən.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "national 發音為 /ˈnæʃ.ən.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "national"
      ]
    }
  },
  "near": {
    "word": "near",
    "ipa": "/nɪr/",
    "syllable": [
      "near"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-564",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "near",
    "actual_sound": "/nɪr/",
    "note": "自然發音推導例外，美式標準音標為 /nɪr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "near 發音為 /nɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "near"
      ]
    }
  },
  "neck": {
    "word": "neck",
    "ipa": "/nɛk/",
    "syllable": [
      "neck"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-565",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "neck",
    "actual_sound": "/nɛk/",
    "note": "自然發音推導例外，美式標準音標為 /nɛk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nɛk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "neck 發音為 /nɛk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "neck"
      ]
    }
  },
  "need": {
    "word": "need",
    "ipa": "/niːd/",
    "syllable": [
      "need"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-566",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "need",
    "actual_sound": "/niːd/",
    "note": "自然發音推導例外，美式標準音標為 /niːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/niːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "need 發音為 /niːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "need"
      ]
    }
  },
  "neighbor": {
    "word": "neighbor",
    "ipa": "/ˈneɪ.bɚ/",
    "syllable": [
      "neigh",
      "bor"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-567",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "neighbor",
    "actual_sound": "/ˈneɪ.bɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈneɪ.bɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈneɪ.bɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "neighbor 發音為 /ˈneɪ.bɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "neighbor"
      ]
    }
  },
  "never": {
    "word": "never",
    "ipa": "/ˈnɛv.ɚ/",
    "syllable": [
      "nev",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-568",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "never",
    "actual_sound": "/ˈnɛv.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnɛv.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnɛv.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "never 發音為 /ˈnɛv.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "never"
      ]
    }
  },
  "new": {
    "word": "new",
    "ipa": "/nuː/",
    "syllable": [
      "new"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-569",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "new",
    "actual_sound": "/nuː/",
    "note": "自然發音推導例外，美式標準音標為 /nuː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nuː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "new 發音為 /nuː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "new"
      ]
    }
  },
  "news": {
    "word": "news",
    "ipa": "/nuːz/",
    "syllable": [
      "news"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-570",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "news",
    "actual_sound": "/nuːz/",
    "note": "自然發音推導例外，美式標準音標為 /nuːz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nuːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "news 發音為 /nuːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "news"
      ]
    }
  },
  "next": {
    "word": "next",
    "ipa": "/nɛkst/",
    "syllable": [
      "next"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-571",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "next",
    "actual_sound": "/nɛkst/",
    "note": "自然發音推導例外，美式標準音標為 /nɛkst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nɛkst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "next 發音為 /nɛkst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "next"
      ]
    }
  },
  "nice": {
    "word": "nice",
    "ipa": "/naɪs/",
    "syllable": [
      "nice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-572",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "nice",
    "actual_sound": "/naɪs/",
    "note": "自然發音推導例外，美式標準音標為 /naɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/naɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "nice 發音為 /naɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "nice"
      ]
    }
  },
  "night": {
    "word": "night",
    "ipa": "/naɪt/",
    "syllable": [
      "night"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-573",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "night",
    "actual_sound": "/naɪt/",
    "note": "自然發音推導例外，美式標準音標為 /naɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/naɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "night 發音為 /naɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "night"
      ]
    }
  },
  "nineteen": {
    "word": "nineteen",
    "ipa": "/ˌnaɪnˈtiːn/",
    "syllable": [
      "nine",
      "teen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-574",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "nineteen",
    "actual_sound": "/ˌnaɪnˈtiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌnaɪnˈtiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌnaɪnˈtiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "nineteen 發音為 /ˌnaɪnˈtiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "nineteen"
      ]
    }
  },
  "nineteenth": {
    "word": "nineteenth",
    "ipa": "/ˌnaɪnˈtiːnθ/",
    "syllable": [
      "nine",
      "teenth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-575",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "nineteenth",
    "actual_sound": "/ˌnaɪnˈtiːnθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌnaɪnˈtiːnθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌnaɪnˈtiːnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "nineteenth 發音為 /ˌnaɪnˈtiːnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "nineteenth"
      ]
    }
  },
  "ninety": {
    "word": "ninety",
    "ipa": "/ˈnaɪn.ti/",
    "syllable": [
      "nine",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-576",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ninety",
    "actual_sound": "/ˈnaɪn.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnaɪn.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnaɪn.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ninety 發音為 /ˈnaɪn.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ninety"
      ]
    }
  },
  "ninth": {
    "word": "ninth",
    "ipa": "/naɪnθ/",
    "syllable": [
      "ninth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-577",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "ninth",
    "actual_sound": "/naɪnθ/",
    "note": "自然發音推導例外，美式標準音標為 /naɪnθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/naɪnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "ninth 發音為 /naɪnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ninth"
      ]
    }
  },
  "no": {
    "word": "no",
    "ipa": "/noʊ/",
    "syllable": [
      "no"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-578",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "no",
    "actual_sound": "/noʊ/",
    "note": "自然發音推導例外，美式標準音標為 /noʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/noʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "no 發音為 /noʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "no"
      ]
    }
  },
  "nobody": {
    "word": "nobody",
    "ipa": "/ˈnoʊ.bɑː.di/",
    "syllable": [
      "no",
      "bod",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-579",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "nobody",
    "actual_sound": "/ˈnoʊ.bɑː.di/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnoʊ.bɑː.di/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnoʊ.bɑː.di/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "nobody 發音為 /ˈnoʊ.bɑː.di/，對應 EPRS R010 特殊例外",
      "related_words": [
        "nobody"
      ]
    }
  },
  "nod": {
    "word": "nod",
    "ipa": "/nɑːd/",
    "syllable": [
      "nod"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-580",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "nod",
    "actual_sound": "/nɑːd/",
    "note": "自然發音推導例外，美式標準音標為 /nɑːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nɑːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "nod 發音為 /nɑːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "nod"
      ]
    }
  },
  "noise": {
    "word": "noise",
    "ipa": "/nɔɪz/",
    "syllable": [
      "noise"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-581",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "noise",
    "actual_sound": "/nɔɪz/",
    "note": "自然發音推導例外，美式標準音標為 /nɔɪz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nɔɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "noise 發音為 /nɔɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "noise"
      ]
    }
  },
  "noodle": {
    "word": "noodle",
    "ipa": "/ˈnuː.dəl/",
    "syllable": [
      "noo",
      "dle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-582",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "noodle",
    "actual_sound": "/ˈnuː.dəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnuː.dəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnuː.dəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "noodle 發音為 /ˈnuː.dəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "noodle"
      ]
    }
  },
  "noon": {
    "word": "noon",
    "ipa": "/nuːn/",
    "syllable": [
      "noon"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-583",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "noon",
    "actual_sound": "/nuːn/",
    "note": "自然發音推導例外，美式標準音標為 /nuːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nuːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "noon 發音為 /nuːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "noon"
      ]
    }
  },
  "nose": {
    "word": "nose",
    "ipa": "/noʊz/",
    "syllable": [
      "nose"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-584",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "nose",
    "actual_sound": "/noʊz/",
    "note": "自然發音推導例外，美式標準音標為 /noʊz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/noʊz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "nose 發音為 /noʊz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "nose"
      ]
    }
  },
  "not": {
    "word": "not",
    "ipa": "/nɑːt/",
    "syllable": [
      "not"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-585",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "not",
    "actual_sound": "/nɑːt/",
    "note": "自然發音推導例外，美式標準音標為 /nɑːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nɑːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "not 發音為 /nɑːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "not"
      ]
    }
  },
  "notebook": {
    "word": "notebook",
    "ipa": "/ˈnoʊt.bʊk/",
    "syllable": [
      "note",
      "book"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-586",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "notebook",
    "actual_sound": "/ˈnoʊt.bʊk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnoʊt.bʊk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnoʊt.bʊk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "notebook 發音為 /ˈnoʊt.bʊk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "notebook"
      ]
    }
  },
  "nothing": {
    "word": "nothing",
    "ipa": "/ˈnʌθ.ɪŋ/",
    "syllable": [
      "noth",
      "ing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-587",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "nothing",
    "actual_sound": "/ˈnʌθ.ɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnʌθ.ɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnʌθ.ɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "nothing 發音為 /ˈnʌθ.ɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "nothing"
      ]
    }
  },
  "notice": {
    "word": "notice",
    "ipa": "/ˈnoʊ.t̬ɪs/",
    "syllable": [
      "no",
      "tice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-588",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "notice",
    "actual_sound": "/ˈnoʊ.t̬ɪs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnoʊ.t̬ɪs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnoʊ.t̬ɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "notice 發音為 /ˈnoʊ.t̬ɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "notice"
      ]
    }
  },
  "november": {
    "word": "November",
    "ipa": "/noʊˈvɛm.bɚ/",
    "syllable": [
      "No",
      "vem",
      "ber"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-589",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "November",
    "actual_sound": "/noʊˈvɛm.bɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /noʊˈvɛm.bɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/noʊˈvɛm.bɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "November 發音為 /noʊˈvɛm.bɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "November"
      ]
    }
  },
  "now": {
    "word": "now",
    "ipa": "/naʊ/",
    "syllable": [
      "now"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-590",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "now",
    "actual_sound": "/naʊ/",
    "note": "自然發音推導例外，美式標準音標為 /naʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/naʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "now 發音為 /naʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "now"
      ]
    }
  },
  "number": {
    "word": "number",
    "ipa": "/ˈnʌm.bɚ/",
    "syllable": [
      "num",
      "ber"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-591",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "number",
    "actual_sound": "/ˈnʌm.bɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈnʌm.bɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈnʌm.bɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "number 發音為 /ˈnʌm.bɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "number"
      ]
    }
  },
  "nurse": {
    "word": "nurse",
    "ipa": "/nɝːs/",
    "syllable": [
      "nurse"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-592",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "nurse",
    "actual_sound": "/nɝːs/",
    "note": "自然發音推導例外，美式標準音標為 /nɝːs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/nɝːs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "nurse 發音為 /nɝːs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "nurse"
      ]
    }
  },
  "o'clock": {
    "word": "o'clock",
    "ipa": "/əˈklɑːk/",
    "syllable": [
      "o",
      "clock"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-593",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "o'clock",
    "actual_sound": "/əˈklɑːk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /əˈklɑːk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/əˈklɑːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "o'clock 發音為 /əˈklɑːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "o'clock"
      ]
    }
  },
  "october": {
    "word": "October",
    "ipa": "/ɑːkˈtoʊ.bɚ/",
    "syllable": [
      "Oc",
      "to",
      "ber"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-594",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "October",
    "actual_sound": "/ɑːkˈtoʊ.bɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ɑːkˈtoʊ.bɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ɑːkˈtoʊ.bɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "October 發音為 /ɑːkˈtoʊ.bɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "October"
      ]
    }
  },
  "of": {
    "word": "of",
    "ipa": "/ʌv/",
    "syllable": [
      "of"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-595",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "of",
    "actual_sound": "/ʌv/",
    "note": "自然發音推導例外，美式標準音標為 /ʌv/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʌv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "of 發音為 /ʌv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "of"
      ]
    }
  },
  "off": {
    "word": "off",
    "ipa": "/ɑːf/",
    "syllable": [
      "off"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-596",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "off",
    "actual_sound": "/ɑːf/",
    "note": "自然發音推導例外，美式標準音標為 /ɑːf/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɑːf/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "off 發音為 /ɑːf/，對應 EPRS R010 特殊例外",
      "related_words": [
        "off"
      ]
    }
  },
  "office": {
    "word": "office",
    "ipa": "/ˈɑː.fɪs/",
    "syllable": [
      "of",
      "fice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-597",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "office",
    "actual_sound": "/ˈɑː.fɪs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɑː.fɪs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɑː.fɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "office 發音為 /ˈɑː.fɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "office"
      ]
    }
  },
  "officer": {
    "word": "officer",
    "ipa": "/ˈɑː.fə.sɚ/",
    "syllable": [
      "of",
      "fi",
      "cer"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-598",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "officer",
    "actual_sound": "/ˈɑː.fə.sɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɑː.fə.sɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɑː.fə.sɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "officer 發音為 /ˈɑː.fə.sɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "officer"
      ]
    }
  },
  "often": {
    "word": "often",
    "ipa": "/ˈɑː.fən/",
    "syllable": [
      "of",
      "ten"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-599",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "often",
    "actual_sound": "/ˈɑː.fən/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /ˈɑː.fən/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/ˈɑː.fən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "often 發音為 /ˈɑː.fən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "often"
      ]
    }
  },
  "ok": {
    "word": "OK",
    "ipa": "/ˌoʊˈkeɪ/",
    "syllable": [
      "O",
      "K"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-600",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "OK",
    "actual_sound": "/ˌoʊˈkeɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌoʊˈkeɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌoʊˈkeɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "OK 發音為 /ˌoʊˈkeɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "OK"
      ]
    }
  },
  "old": {
    "word": "old",
    "ipa": "/oʊld/",
    "syllable": [
      "old"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-601",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "old",
    "actual_sound": "/oʊld/",
    "note": "自然發音推導例外，美式標準音標為 /oʊld/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/oʊld/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "old 發音為 /oʊld/，對應 EPRS R010 特殊例外",
      "related_words": [
        "old"
      ]
    }
  },
  "on": {
    "word": "on",
    "ipa": "/ɑːn/",
    "syllable": [
      "on"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-602",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "on",
    "actual_sound": "/ɑːn/",
    "note": "自然發音推導例外，美式標準音標為 /ɑːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɑːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "on 發音為 /ɑːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "on"
      ]
    }
  },
  "once": {
    "word": "once",
    "ipa": "/wʌns/",
    "syllable": [
      "once"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-603",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "once",
    "actual_sound": "/wʌns/",
    "note": "自然發音推導例外，美式標準音標為 /wʌns/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wʌns/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "once 發音為 /wʌns/，對應 EPRS R010 特殊例外",
      "related_words": [
        "once"
      ]
    }
  },
  "only": {
    "word": "only",
    "ipa": "/ˈoʊn.li/",
    "syllable": [
      "on",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-604",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "only",
    "actual_sound": "/ˈoʊn.li/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈoʊn.li/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈoʊn.li/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "only 發音為 /ˈoʊn.li/，對應 EPRS R010 特殊例外",
      "related_words": [
        "only"
      ]
    }
  },
  "open": {
    "word": "open",
    "ipa": "/ˈoʊ.pən/",
    "syllable": [
      "o",
      "pen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-605",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "open",
    "actual_sound": "/ˈoʊ.pən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈoʊ.pən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈoʊ.pən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "open 發音為 /ˈoʊ.pən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "open"
      ]
    }
  },
  "orange": {
    "word": "orange",
    "ipa": "/ˈɔːr.ɪndʒ/",
    "syllable": [
      "or",
      "ange"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-606",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "orange",
    "actual_sound": "/ˈɔːr.ɪndʒ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɔːr.ɪndʒ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɔːr.ɪndʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "orange 發音為 /ˈɔːr.ɪndʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "orange"
      ]
    }
  },
  "order": {
    "word": "order",
    "ipa": "/ˈɔːr.dɚ/",
    "syllable": [
      "or",
      "der"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-607",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "order",
    "actual_sound": "/ˈɔːr.dɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈɔːr.dɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈɔːr.dɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "order 發音為 /ˈɔːr.dɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "order"
      ]
    }
  },
  "other": {
    "word": "other",
    "ipa": "/ˈʌð.ɚ/",
    "syllable": [
      "oth",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-608",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "other",
    "actual_sound": "/ˈʌð.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈʌð.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈʌð.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "other 發音為 /ˈʌð.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "other"
      ]
    }
  },
  "out": {
    "word": "out",
    "ipa": "/aʊt/",
    "syllable": [
      "out"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-609",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "out",
    "actual_sound": "/aʊt/",
    "note": "自然發音推導例外，美式標準音標為 /aʊt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/aʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "out 發音為 /aʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "out"
      ]
    }
  },
  "outside": {
    "word": "outside",
    "ipa": "/ˌaʊtˈsaɪd/",
    "syllable": [
      "out",
      "side"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-610",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "outside",
    "actual_sound": "/ˌaʊtˈsaɪd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌaʊtˈsaɪd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌaʊtˈsaɪd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "outside 發音為 /ˌaʊtˈsaɪd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "outside"
      ]
    }
  },
  "over": {
    "word": "over",
    "ipa": "/ˈoʊ.vɚ/",
    "syllable": [
      "o",
      "ver"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-611",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "over",
    "actual_sound": "/ˈoʊ.vɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈoʊ.vɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈoʊ.vɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "over 發音為 /ˈoʊ.vɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "over"
      ]
    }
  },
  "own": {
    "word": "own",
    "ipa": "/oʊn/",
    "syllable": [
      "own"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-612",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "own",
    "actual_sound": "/oʊn/",
    "note": "自然發音推導例外，美式標準音標為 /oʊn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/oʊn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "own 發音為 /oʊn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "own"
      ]
    }
  },
  "ox": {
    "word": "ox",
    "ipa": "/ɑːks/",
    "syllable": [
      "ox"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-613",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "ox",
    "actual_sound": "/ɑːks/",
    "note": "自然發音推導例外，美式標準音標為 /ɑːks/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ɑːks/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "ox 發音為 /ɑːks/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ox"
      ]
    }
  },
  "package": {
    "word": "package",
    "ipa": "/ˈpæk.ɪdʒ/",
    "syllable": [
      "pack",
      "age"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-614",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "package",
    "actual_sound": "/ˈpæk.ɪdʒ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpæk.ɪdʒ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpæk.ɪdʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "package 發音為 /ˈpæk.ɪdʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "package"
      ]
    }
  },
  "page": {
    "word": "page",
    "ipa": "/peɪdʒ/",
    "syllable": [
      "page"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-615",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "page",
    "actual_sound": "/peɪdʒ/",
    "note": "自然發音推導例外，美式標準音標為 /peɪdʒ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/peɪdʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "page 發音為 /peɪdʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "page"
      ]
    }
  },
  "pair": {
    "word": "pair",
    "ipa": "/pɛr/",
    "syllable": [
      "pair"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-616",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pair",
    "actual_sound": "/pɛr/",
    "note": "自然發音推導例外，美式標準音標為 /pɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pair 發音為 /pɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pair"
      ]
    }
  },
  "papaya": {
    "word": "papaya",
    "ipa": "/pəˈpaɪ.ə/",
    "syllable": [
      "pa",
      "pay",
      "a"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-617",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "papaya",
    "actual_sound": "/pəˈpaɪ.ə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /pəˈpaɪ.ə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/pəˈpaɪ.ə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "papaya 發音為 /pəˈpaɪ.ə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "papaya"
      ]
    }
  },
  "paper": {
    "word": "paper",
    "ipa": "/ˈpeɪ.pɚ/",
    "syllable": [
      "pa",
      "per"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-618",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "paper",
    "actual_sound": "/ˈpeɪ.pɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpeɪ.pɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpeɪ.pɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "paper 發音為 /ˈpeɪ.pɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "paper"
      ]
    }
  },
  "parent": {
    "word": "parent",
    "ipa": "/ˈpɛr.ənt/",
    "syllable": [
      "par",
      "ent(s)"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-619",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "parent",
    "actual_sound": "/ˈpɛr.ənt",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɛr.ənt",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɛr.ənt",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "parent 發音為 /ˈpɛr.ənt，對應 EPRS R010 特殊例外",
      "related_words": [
        "parent"
      ]
    }
  },
  "party": {
    "word": "party",
    "ipa": "/ˈpɑːr.ti/",
    "syllable": [
      "par",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-620",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "party",
    "actual_sound": "/ˈpɑːr.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɑːr.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɑːr.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "party 發音為 /ˈpɑːr.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "party"
      ]
    }
  },
  "pass": {
    "word": "pass",
    "ipa": "/pæs/",
    "syllable": [
      "pass"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-621",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pass",
    "actual_sound": "/pæs/",
    "note": "自然發音推導例外，美式標準音標為 /pæs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pæs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pass 發音為 /pæs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pass"
      ]
    }
  },
  "paste": {
    "word": "paste",
    "ipa": "/peɪst/",
    "syllable": [
      "paste"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-622",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "paste",
    "actual_sound": "/peɪst/",
    "note": "自然發音推導例外，美式標準音標為 /peɪst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/peɪst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "paste 發音為 /peɪst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "paste"
      ]
    }
  },
  "pe": {
    "word": "PE",
    "ipa": "/ˌpiːˈiː/",
    "syllable": [
      "P",
      "E"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-623",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "PE",
    "actual_sound": "/ˌpiːˈiː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌpiːˈiː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌpiːˈiː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "PE 發音為 /ˌpiːˈiː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "PE"
      ]
    }
  },
  "peach": {
    "word": "peach",
    "ipa": "/piːtʃ/",
    "syllable": [
      "peach"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-624",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "peach",
    "actual_sound": "/piːtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /piːtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/piːtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "peach 發音為 /piːtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "peach"
      ]
    }
  },
  "pear": {
    "word": "pear",
    "ipa": "/pɛr/",
    "syllable": [
      "pear"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-625",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pear",
    "actual_sound": "/pɛr/",
    "note": "自然發音推導例外，美式標準音標為 /pɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pear 發音為 /pɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pear"
      ]
    }
  },
  "pen": {
    "word": "pen",
    "ipa": "/pɛn/",
    "syllable": [
      "pen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-626",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pen",
    "actual_sound": "/pɛn/",
    "note": "自然發音推導例外，美式標準音標為 /pɛn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pɛn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pen 發音為 /pɛn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pen"
      ]
    }
  },
  "pencil": {
    "word": "pencil",
    "ipa": "/ˈpɛn.səl/",
    "syllable": [
      "pen",
      "cil"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-627",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "pencil",
    "actual_sound": "/ˈpɛn.səl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɛn.səl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɛn.səl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "pencil 發音為 /ˈpɛn.səl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pencil"
      ]
    }
  },
  "people": {
    "word": "people",
    "ipa": "/ˈpiː.pəl/",
    "syllable": [
      "peo",
      "ple"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-628",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "people",
    "actual_sound": "/ˈpiː.pəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpiː.pəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpiː.pəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "people 發音為 /ˈpiː.pəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "people"
      ]
    }
  },
  "perhaps": {
    "word": "perhaps",
    "ipa": "/pɚˈhæps/",
    "syllable": [
      "per",
      "haps"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-629",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "perhaps",
    "actual_sound": "/pɚˈhæps/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /pɚˈhæps/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/pɚˈhæps/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "perhaps 發音為 /pɚˈhæps/，對應 EPRS R010 特殊例外",
      "related_words": [
        "perhaps"
      ]
    }
  },
  "person": {
    "word": "person",
    "ipa": "/ˈpɝː.sən/",
    "syllable": [
      "per",
      "son"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-630",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "person",
    "actual_sound": "/ˈpɝː.sən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɝː.sən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɝː.sən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "person 發音為 /ˈpɝː.sən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "person"
      ]
    }
  },
  "pet": {
    "word": "pet",
    "ipa": "/pɛt/",
    "syllable": [
      "pet"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-631",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pet",
    "actual_sound": "/pɛt/",
    "note": "自然發音推導例外，美式標準音標為 /pɛt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pɛt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pet 發音為 /pɛt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pet"
      ]
    }
  },
  "photo": {
    "word": "photo",
    "ipa": "/ˈfoʊ.toʊ/",
    "syllable": [
      "pho",
      "to"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-632",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "photo",
    "actual_sound": "/ˈfoʊ.toʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈfoʊ.toʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈfoʊ.toʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "photo 發音為 /ˈfoʊ.toʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "photo"
      ]
    }
  },
  "piano": {
    "word": "piano",
    "ipa": "/piˈæn.oʊ/",
    "syllable": [
      "pi",
      "an",
      "o"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-633",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "piano",
    "actual_sound": "/piˈæn.oʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /piˈæn.oʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/piˈæn.oʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "piano 發音為 /piˈæn.oʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "piano"
      ]
    }
  },
  "picnic": {
    "word": "picnic",
    "ipa": "/ˈpɪk.nɪk/",
    "syllable": [
      "pic",
      "nic"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-634",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "picnic",
    "actual_sound": "/ˈpɪk.nɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɪk.nɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɪk.nɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "picnic 發音為 /ˈpɪk.nɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "picnic"
      ]
    }
  },
  "picture": {
    "word": "picture",
    "ipa": "/ˈpɪk.tʃɚ/",
    "syllable": [
      "pic",
      "ture"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-635",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "picture",
    "actual_sound": "/ˈpɪk.tʃɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɪk.tʃɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɪk.tʃɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "picture 發音為 /ˈpɪk.tʃɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "picture"
      ]
    }
  },
  "pie": {
    "word": "pie",
    "ipa": "/paɪ/",
    "syllable": [
      "pie"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-636",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pie",
    "actual_sound": "/paɪ/",
    "note": "自然發音推導例外，美式標準音標為 /paɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/paɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pie 發音為 /paɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pie"
      ]
    }
  },
  "piece": {
    "word": "piece",
    "ipa": "/piːs/",
    "syllable": [
      "piece"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-637",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "piece",
    "actual_sound": "/piːs/",
    "note": "自然發音推導例外，美式標準音標為 /piːs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/piːs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "piece 發音為 /piːs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "piece"
      ]
    }
  },
  "pig": {
    "word": "pig",
    "ipa": "/pɪɡ/",
    "syllable": [
      "pig"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-638",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pig",
    "actual_sound": "/pɪɡ/",
    "note": "自然發音推導例外，美式標準音標為 /pɪɡ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pɪɡ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pig 發音為 /pɪɡ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pig"
      ]
    }
  },
  "pink": {
    "word": "pink",
    "ipa": "/pɪŋk/",
    "syllable": [
      "pink"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-639",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pink",
    "actual_sound": "/pɪŋk/",
    "note": "自然發音推導例外，美式標準音標為 /pɪŋk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pɪŋk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pink 發音為 /pɪŋk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pink"
      ]
    }
  },
  "pizza": {
    "word": "pizza",
    "ipa": "/ˈpiːt.sə/",
    "syllable": [
      "piz",
      "za"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-640",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "pizza",
    "actual_sound": "/ˈpiːt.sə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpiːt.sə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpiːt.sə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "pizza 發音為 /ˈpiːt.sə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pizza"
      ]
    }
  },
  "place": {
    "word": "place",
    "ipa": "/pleɪs/",
    "syllable": [
      "place"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-641",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "place",
    "actual_sound": "/pleɪs/",
    "note": "自然發音推導例外，美式標準音標為 /pleɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pleɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "place 發音為 /pleɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "place"
      ]
    }
  },
  "planet": {
    "word": "planet",
    "ipa": "/ˈplæn.ɪt/",
    "syllable": [
      "plan",
      "et"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-642",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "planet",
    "actual_sound": "/ˈplæn.ɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈplæn.ɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈplæn.ɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "planet 發音為 /ˈplæn.ɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "planet"
      ]
    }
  },
  "player": {
    "word": "player",
    "ipa": "/ˈpleɪ.ɚ/",
    "syllable": [
      "play",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-643",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "player",
    "actual_sound": "/ˈpleɪ.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpleɪ.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpleɪ.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "player 發音為 /ˈpleɪ.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "player"
      ]
    }
  },
  "playground": {
    "word": "playground",
    "ipa": "/ˈpleɪ.ɡraʊnd/",
    "syllable": [
      "play",
      "ground"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-644",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "playground",
    "actual_sound": "/ˈpleɪ.ɡraʊnd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpleɪ.ɡraʊnd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpleɪ.ɡraʊnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "playground 發音為 /ˈpleɪ.ɡraʊnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "playground"
      ]
    }
  },
  "pleasure": {
    "word": "pleasure",
    "ipa": "/ˈplɛʒ.ɚ/",
    "syllable": [
      "pleas",
      "ure"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-645",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "pleasure",
    "actual_sound": "/ˈplɛʒ.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈplɛʒ.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈplɛʒ.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "pleasure 發音為 /ˈplɛʒ.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pleasure"
      ]
    }
  },
  "please": {
    "word": "please",
    "ipa": "/pliːz/",
    "syllable": [
      "please"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-646",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "please",
    "actual_sound": "/pliːz/",
    "note": "自然發音推導例外，美式標準音標為 /pliːz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pliːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "please 發音為 /pliːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "please"
      ]
    }
  },
  "p.m.": {
    "word": "p.m.",
    "ipa": "/ˌpiːˈɛm/",
    "syllable": [
      "p.m."
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-647",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "p.m.",
    "actual_sound": "/ˌpiːˈɛm/",
    "note": "自然發音推導例外，美式標準音標為 /ˌpiːˈɛm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ˌpiːˈɛm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "p.m. 發音為 /ˌpiːˈɛm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "p.m."
      ]
    }
  },
  "pocket": {
    "word": "pocket",
    "ipa": "/ˈpɑː.kɪt/",
    "syllable": [
      "pock",
      "et"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-648",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "pocket",
    "actual_sound": "/ˈpɑː.kɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɑː.kɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɑː.kɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "pocket 發音為 /ˈpɑː.kɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pocket"
      ]
    }
  },
  "police": {
    "word": "police",
    "ipa": "/pəˈliːs/",
    "syllable": [
      "po",
      "lice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-649",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "police",
    "actual_sound": "/pəˈliːs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /pəˈliːs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/pəˈliːs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "police 發音為 /pəˈliːs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "police"
      ]
    }
  },
  "polite": {
    "word": "polite",
    "ipa": "/pəˈlaɪt/",
    "syllable": [
      "po",
      "lite"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-650",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "polite",
    "actual_sound": "/pəˈlaɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /pəˈlaɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/pəˈlaɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "polite 發音為 /pəˈlaɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "polite"
      ]
    }
  },
  "pond": {
    "word": "pond",
    "ipa": "/pɑːnd/",
    "syllable": [
      "pond"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-651",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pond",
    "actual_sound": "/pɑːnd/",
    "note": "自然發音推導例外，美式標準音標為 /pɑːnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pɑːnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pond 發音為 /pɑːnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pond"
      ]
    }
  },
  "pool": {
    "word": "pool",
    "ipa": "/puːl/",
    "syllable": [
      "pool"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-652",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pool",
    "actual_sound": "/puːl/",
    "note": "自然發音推導例外，美式標準音標為 /puːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/puːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pool 發音為 /puːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pool"
      ]
    }
  },
  "popcorn": {
    "word": "popcorn",
    "ipa": "/ˈpɑːp.kɔːrn/",
    "syllable": [
      "pop",
      "corn"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-653",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "popcorn",
    "actual_sound": "/ˈpɑːp.kɔːrn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɑːp.kɔːrn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɑːp.kɔːrn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "popcorn 發音為 /ˈpɑːp.kɔːrn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "popcorn"
      ]
    }
  },
  "popular": {
    "word": "popular",
    "ipa": "/ˈpɑː.pjə.lɚ/",
    "syllable": [
      "pop",
      "u",
      "lar"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-654",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "popular",
    "actual_sound": "/ˈpɑː.pjə.lɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɑː.pjə.lɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɑː.pjə.lɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "popular 發音為 /ˈpɑː.pjə.lɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "popular"
      ]
    }
  },
  "possible": {
    "word": "possible",
    "ipa": "/ˈpɑː.sə.bəl/",
    "syllable": [
      "pos",
      "si",
      "ble"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-655",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "possible",
    "actual_sound": "/ˈpɑː.sə.bəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɑː.sə.bəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɑː.sə.bəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "possible 發音為 /ˈpɑː.sə.bəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "possible"
      ]
    }
  },
  "post office": {
    "word": "post office",
    "ipa": "/ˈpoʊst ˌɑː.fɪs/",
    "syllable": [
      "post",
      "of",
      "fice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-656",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "post office",
    "actual_sound": "/ˈpoʊst ˌɑː.fɪs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpoʊst ˌɑː.fɪs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpoʊst ˌɑː.fɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "post office 發音為 /ˈpoʊst ˌɑː.fɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "post office"
      ]
    }
  },
  "postcard": {
    "word": "postcard",
    "ipa": "/ˈpoʊst.kɑːrd/",
    "syllable": [
      "post",
      "card"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-657",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "postcard",
    "actual_sound": "/ˈpoʊst.kɑːrd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpoʊst.kɑːrd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpoʊst.kɑːrd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "postcard 發音為 /ˈpoʊst.kɑːrd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "postcard"
      ]
    }
  },
  "pot": {
    "word": "pot",
    "ipa": "/pɑːt/",
    "syllable": [
      "pot"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-658",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pot",
    "actual_sound": "/pɑːt/",
    "note": "自然發音推導例外，美式標準音標為 /pɑːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pɑːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pot 發音為 /pɑːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pot"
      ]
    }
  },
  "pound": {
    "word": "pound",
    "ipa": "/paʊnd/",
    "syllable": [
      "pound"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-659",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pound",
    "actual_sound": "/paʊnd/",
    "note": "自然發音推導例外，美式標準音標為 /paʊnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/paʊnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pound 發音為 /paʊnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pound"
      ]
    }
  },
  "practice": {
    "word": "practice",
    "ipa": "/ˈpræk.tɪs/",
    "syllable": [
      "prac",
      "tice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-660",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "practice",
    "actual_sound": "/ˈpræk.tɪs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpræk.tɪs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpræk.tɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "practice 發音為 /ˈpræk.tɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "practice"
      ]
    }
  },
  "prepare": {
    "word": "prepare",
    "ipa": "/prɪˈpɛr/",
    "syllable": [
      "pre",
      "pare"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-661",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "prepare",
    "actual_sound": "/prɪˈpɛr/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /prɪˈpɛr/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/prɪˈpɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "prepare 發音為 /prɪˈpɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "prepare"
      ]
    }
  },
  "present": {
    "word": "present",
    "ipa": "/ˈprɛz.ənt/",
    "syllable": [
      "pres",
      "ent"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-662",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "present",
    "actual_sound": "/ˈprɛz.ənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈprɛz.ənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈprɛz.ənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "present 發音為 /ˈprɛz.ənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "present"
      ]
    }
  },
  "pretty": {
    "word": "pretty",
    "ipa": "/ˈprɪt.i/",
    "syllable": [
      "pret",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-663",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "pretty",
    "actual_sound": "/ˈprɪt.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈprɪt.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈprɪt.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "pretty 發音為 /ˈprɪt.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pretty"
      ]
    }
  },
  "price": {
    "word": "price",
    "ipa": "/praɪs/",
    "syllable": [
      "price"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-664",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "price",
    "actual_sound": "/praɪs/",
    "note": "自然發音推導例外，美式標準音標為 /praɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/praɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "price 發音為 /praɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "price"
      ]
    }
  },
  "princess": {
    "word": "princess",
    "ipa": "/ˈprɪn.səs/",
    "syllable": [
      "prin",
      "cess"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-665",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "princess",
    "actual_sound": "/ˈprɪn.səs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈprɪn.səs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈprɪn.səs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "princess 發音為 /ˈprɪn.səs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "princess"
      ]
    }
  },
  "problem": {
    "word": "problem",
    "ipa": "/ˈprɑː.bləm/",
    "syllable": [
      "prob",
      "lem"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-666",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "problem",
    "actual_sound": "/ˈprɑː.bləm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈprɑː.bləm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈprɑː.bləm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "problem 發音為 /ˈprɑː.bləm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "problem"
      ]
    }
  },
  "program": {
    "word": "program",
    "ipa": "/ˈproʊ.ɡræm/",
    "syllable": [
      "pro",
      "gram"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-667",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "program",
    "actual_sound": "/ˈproʊ.ɡræm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈproʊ.ɡræm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈproʊ.ɡræm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "program 發音為 /ˈproʊ.ɡræm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "program"
      ]
    }
  },
  "proud": {
    "word": "proud",
    "ipa": "/praʊd/",
    "syllable": [
      "proud"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-668",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "proud",
    "actual_sound": "/praʊd/",
    "note": "自然發音推導例外，美式標準音標為 /praʊd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/praʊd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "proud 發音為 /praʊd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "proud"
      ]
    }
  },
  "public": {
    "word": "public",
    "ipa": "/ˈpʌb.lɪk/",
    "syllable": [
      "pub",
      "lic"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-669",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "public",
    "actual_sound": "/ˈpʌb.lɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpʌb.lɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpʌb.lɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "public 發音為 /ˈpʌb.lɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "public"
      ]
    }
  },
  "pull": {
    "word": "pull",
    "ipa": "/pʊl/",
    "syllable": [
      "pull"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-670",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "pull",
    "actual_sound": "/pʊl/",
    "note": "自然發音推導例外，美式標準音標為 /pʊl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pʊl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "pull 發音為 /pʊl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pull"
      ]
    }
  },
  "pumpkin": {
    "word": "pumpkin",
    "ipa": "/ˈpʌmp.kɪn/",
    "syllable": [
      "pump",
      "kin"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-671",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "pumpkin",
    "actual_sound": "/ˈpʌmp.kɪn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpʌmp.kɪn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpʌmp.kɪn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "pumpkin 發音為 /ˈpʌmp.kɪn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "pumpkin"
      ]
    }
  },
  "purple": {
    "word": "purple",
    "ipa": "/ˈpɝː.pəl/",
    "syllable": [
      "pur",
      "ple"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-672",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "purple",
    "actual_sound": "/ˈpɝː.pəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈpɝː.pəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈpɝː.pəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "purple 發音為 /ˈpɝː.pəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "purple"
      ]
    }
  },
  "push": {
    "word": "push",
    "ipa": "/pʊʃ/",
    "syllable": [
      "push"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-673",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "push",
    "actual_sound": "/pʊʃ/",
    "note": "自然發音推導例外，美式標準音標為 /pʊʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pʊʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "push 發音為 /pʊʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "push"
      ]
    }
  },
  "put": {
    "word": "put",
    "ipa": "/pʊt/",
    "syllable": [
      "put"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-674",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "put",
    "actual_sound": "/pʊt/",
    "note": "自然發音推導例外，美式標準音標為 /pʊt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/pʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "put 發音為 /pʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "put"
      ]
    }
  },
  "quarter": {
    "word": "quarter",
    "ipa": "/ˈkwɔːr.t̬ɚ/",
    "syllable": [
      "quar",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-675",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "quarter",
    "actual_sound": "/ˈkwɔːr.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkwɔːr.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkwɔːr.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "quarter 發音為 /ˈkwɔːr.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "quarter"
      ]
    }
  },
  "queen": {
    "word": "queen",
    "ipa": "/kwiːn/",
    "syllable": [
      "queen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-676",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "queen",
    "actual_sound": "/kwiːn/",
    "note": "自然發音推導例外，美式標準音標為 /kwiːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kwiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "queen 發音為 /kwiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "queen"
      ]
    }
  },
  "question": {
    "word": "question",
    "ipa": "/ˈkwɛs.tʃən/",
    "syllable": [
      "ques",
      "tion"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-677",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "question",
    "actual_sound": "/ˈkwɛs.tʃən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkwɛs.tʃən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkwɛs.tʃən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "question 發音為 /ˈkwɛs.tʃən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "question"
      ]
    }
  },
  "quick": {
    "word": "quick",
    "ipa": "/kwɪk/",
    "syllable": [
      "quick"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-678",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "quick",
    "actual_sound": "/kwɪk/",
    "note": "自然發音推導例外，美式標準音標為 /kwɪk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kwɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "quick 發音為 /kwɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "quick"
      ]
    }
  },
  "quiet": {
    "word": "quiet",
    "ipa": "/ˈkwaɪ.ət/",
    "syllable": [
      "qui",
      "et"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-679",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "quiet",
    "actual_sound": "/ˈkwaɪ.ət/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈkwaɪ.ət/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈkwaɪ.ət/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "quiet 發音為 /ˈkwaɪ.ət/，對應 EPRS R010 特殊例外",
      "related_words": [
        "quiet"
      ]
    }
  },
  "quite": {
    "word": "quite",
    "ipa": "/kwaɪt/",
    "syllable": [
      "quite"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-680",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "quite",
    "actual_sound": "/kwaɪt/",
    "note": "自然發音推導例外，美式標準音標為 /kwaɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kwaɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "quite 發音為 /kwaɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "quite"
      ]
    }
  },
  "quiz": {
    "word": "quiz",
    "ipa": "/kwɪz/",
    "syllable": [
      "quiz"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-681",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "quiz",
    "actual_sound": "/kwɪz/",
    "note": "自然發音推導例外，美式標準音標為 /kwɪz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/kwɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "quiz 發音為 /kwɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "quiz"
      ]
    }
  },
  "rabbit": {
    "word": "rabbit",
    "ipa": "/ˈræb.ɪt/",
    "syllable": [
      "rab",
      "bit"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-682",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "rabbit",
    "actual_sound": "/ˈræb.ɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈræb.ɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈræb.ɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "rabbit 發音為 /ˈræb.ɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "rabbit"
      ]
    }
  },
  "race": {
    "word": "race",
    "ipa": "/reɪs/",
    "syllable": [
      "race"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-683",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "race",
    "actual_sound": "/reɪs/",
    "note": "自然發音推導例外，美式標準音標為 /reɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/reɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "race 發音為 /reɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "race"
      ]
    }
  },
  "radio": {
    "word": "radio",
    "ipa": "/ˈreɪ.di.oʊ/",
    "syllable": [
      "ra",
      "di",
      "o"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-684",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "radio",
    "actual_sound": "/ˈreɪ.di.oʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈreɪ.di.oʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈreɪ.di.oʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "radio 發音為 /ˈreɪ.di.oʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "radio"
      ]
    }
  },
  "rainy": {
    "word": "rainy",
    "ipa": "/ˈreɪ.ni/",
    "syllable": [
      "rain",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-685",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "rainy",
    "actual_sound": "/ˈreɪ.ni/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈreɪ.ni/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈreɪ.ni/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "rainy 發音為 /ˈreɪ.ni/，對應 EPRS R010 特殊例外",
      "related_words": [
        "rainy"
      ]
    }
  },
  "raise": {
    "word": "raise",
    "ipa": "/reɪz/",
    "syllable": [
      "raise"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-686",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "raise",
    "actual_sound": "/reɪz/",
    "note": "自然發音推導例外，美式標準音標為 /reɪz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/reɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "raise 發音為 /reɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "raise"
      ]
    }
  },
  "read": {
    "word": "read",
    "ipa": "/riːd/",
    "syllable": [
      "read"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-687",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "read",
    "actual_sound": "/riːd/",
    "note": "自然發音推導例外，美式標準音標為 /riːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/riːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "read 發音為 /riːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "read"
      ]
    }
  },
  "ready": {
    "word": "ready",
    "ipa": "/ˈrɛd.i/",
    "syllable": [
      "read",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-688",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ready",
    "actual_sound": "/ˈrɛd.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈrɛd.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈrɛd.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ready 發音為 /ˈrɛd.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ready"
      ]
    }
  },
  "real": {
    "word": "real",
    "ipa": "/riːl/",
    "syllable": [
      "real"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-689",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "real",
    "actual_sound": "/riːl/",
    "note": "自然發音推導例外，美式標準音標為 /riːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/riːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "real 發音為 /riːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "real"
      ]
    }
  },
  "really": {
    "word": "really",
    "ipa": "/ˈriː.ə.li/",
    "syllable": [
      "real",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-690",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "really",
    "actual_sound": "/ˈriː.ə.li/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈriː.ə.li/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈriː.ə.li/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "really 發音為 /ˈriː.ə.li/，對應 EPRS R010 特殊例外",
      "related_words": [
        "really"
      ]
    }
  },
  "recorder": {
    "word": "recorder",
    "ipa": "/rɪˈkɔːr.dɚ/",
    "syllable": [
      "re",
      "cord",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-691",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "recorder",
    "actual_sound": "/rɪˈkɔːr.dɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /rɪˈkɔːr.dɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/rɪˈkɔːr.dɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "recorder 發音為 /rɪˈkɔːr.dɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "recorder"
      ]
    }
  },
  "red": {
    "word": "red",
    "ipa": "/rɛd/",
    "syllable": [
      "red"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-692",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "red",
    "actual_sound": "/rɛd/",
    "note": "自然發音推導例外，美式標準音標為 /rɛd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/rɛd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "red 發音為 /rɛd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "red"
      ]
    }
  },
  "refrigerator": {
    "word": "refrigerator",
    "ipa": "/rɪˈfrɪdʒ.ə.reɪ.t̬ɚ/",
    "syllable": [
      "re",
      "frig",
      "er",
      "a",
      "tor"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-693",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "refrigerator",
    "actual_sound": "/rɪˈfrɪdʒ.ə.reɪ.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /rɪˈfrɪdʒ.ə.reɪ.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/rɪˈfrɪdʒ.ə.reɪ.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "refrigerator 發音為 /rɪˈfrɪdʒ.ə.reɪ.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "refrigerator"
      ]
    }
  },
  "remember": {
    "word": "remember",
    "ipa": "/rɪˈmɛm.bɚ/",
    "syllable": [
      "re",
      "mem",
      "ber"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-694",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "remember",
    "actual_sound": "/rɪˈmɛm.bɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /rɪˈmɛm.bɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/rɪˈmɛm.bɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "remember 發音為 /rɪˈmɛm.bɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "remember"
      ]
    }
  },
  "repeat": {
    "word": "repeat",
    "ipa": "/rɪˈpiːt/",
    "syllable": [
      "re",
      "peat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-695",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "repeat",
    "actual_sound": "/rɪˈpiːt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /rɪˈpiːt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/rɪˈpiːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "repeat 發音為 /rɪˈpiːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "repeat"
      ]
    }
  },
  "reporter": {
    "word": "reporter",
    "ipa": "/rɪˈpɔːr.t̬ɚ/",
    "syllable": [
      "re",
      "port",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-696",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "reporter",
    "actual_sound": "/rɪˈpɔːr.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /rɪˈpɔːr.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/rɪˈpɔːr.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "reporter 發音為 /rɪˈpɔːr.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "reporter"
      ]
    }
  },
  "rest": {
    "word": "rest",
    "ipa": "/rɛst/",
    "syllable": [
      "rest"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-697",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "rest",
    "actual_sound": "/rɛst/",
    "note": "自然發音推導例外，美式標準音標為 /rɛst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/rɛst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "rest 發音為 /rɛst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "rest"
      ]
    }
  },
  "restaurant": {
    "word": "restaurant",
    "ipa": "/ˈrɛs.tə.rɑːnt/",
    "syllable": [
      "res",
      "tau",
      "rant"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-698",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "restaurant",
    "actual_sound": "/ˈrɛs.tə.rɑːnt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈrɛs.tə.rɑːnt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈrɛs.tə.rɑːnt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "restaurant 發音為 /ˈrɛs.tə.rɑːnt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "restaurant"
      ]
    }
  },
  "restroom": {
    "word": "restroom",
    "ipa": "/ˈrɛst.ruːm/",
    "syllable": [
      "rest",
      "room"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-699",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "restroom",
    "actual_sound": "/ˈrɛst.ruːm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈrɛst.ruːm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈrɛst.ruːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "restroom 發音為 /ˈrɛst.ruːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "restroom"
      ]
    }
  },
  "rice": {
    "word": "rice",
    "ipa": "/raɪs/",
    "syllable": [
      "rice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-700",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "rice",
    "actual_sound": "/raɪs/",
    "note": "自然發音推導例外，美式標準音標為 /raɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/raɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "rice 發音為 /raɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "rice"
      ]
    }
  },
  "right": {
    "word": "right",
    "ipa": "/raɪt/",
    "syllable": [
      "right"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-701",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "right",
    "actual_sound": "/raɪt/",
    "note": "自然發音推導例外，美式標準音標為 /raɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/raɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "right 發音為 /raɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "right"
      ]
    }
  },
  "river": {
    "word": "river",
    "ipa": "/ˈrɪv.ɚ/",
    "syllable": [
      "riv",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-702",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "river",
    "actual_sound": "/ˈrɪv.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈrɪv.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈrɪv.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "river 發音為 /ˈrɪv.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "river"
      ]
    }
  },
  "road": {
    "word": "road",
    "ipa": "/roʊd/",
    "syllable": [
      "road"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-703",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "road",
    "actual_sound": "/roʊd/",
    "note": "自然發音推導例外，美式標準音標為 /roʊd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/roʊd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "road 發音為 /roʊd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "road"
      ]
    }
  },
  "robot": {
    "word": "robot",
    "ipa": "/ˈroʊ.bɑːt/",
    "syllable": [
      "ro",
      "bot"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-704",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "robot",
    "actual_sound": "/ˈroʊ.bɑːt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈroʊ.bɑːt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈroʊ.bɑːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "robot 發音為 /ˈroʊ.bɑːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "robot"
      ]
    }
  },
  "roc": {
    "word": "ROC",
    "ipa": "/ˌɑːr.oʊˈsiː/",
    "syllable": [
      "R",
      "O",
      "C"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-705",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ROC",
    "actual_sound": "/ˌɑːr.oʊˈsiː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌɑːr.oʊˈsiː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌɑːr.oʊˈsiː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ROC 發音為 /ˌɑːr.oʊˈsiː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ROC"
      ]
    }
  },
  "rock": {
    "word": "rock",
    "ipa": "/rɑːk/",
    "syllable": [
      "rock"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-706",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "rock",
    "actual_sound": "/rɑːk/",
    "note": "自然發音推導例外，美式標準音標為 /rɑːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/rɑːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "rock 發音為 /rɑːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "rock"
      ]
    }
  },
  "roll": {
    "word": "roll",
    "ipa": "/roʊl/",
    "syllable": [
      "roll"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-707",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "roll",
    "actual_sound": "/roʊl/",
    "note": "自然發音推導例外，美式標準音標為 /roʊl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/roʊl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "roll 發音為 /roʊl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "roll"
      ]
    }
  },
  "room": {
    "word": "room",
    "ipa": "/ruːm/",
    "syllable": [
      "room"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-708",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "room",
    "actual_sound": "/ruːm/",
    "note": "自然發音推導例外，美式標準音標為 /ruːm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ruːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "room 發音為 /ruːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "room"
      ]
    }
  },
  "roller-skate/roller-blade": {
    "word": "roller-skate/roller-blade",
    "ipa": "/ˈroʊ.lɚ.skeɪt/ /ˈroʊ.lɚ.bleɪd/",
    "syllable": [
      "rol",
      "ler",
      "skate",
      "rol",
      "ler",
      "blade"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-709",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "roller-skate/roller-blade",
    "actual_sound": "/ˈroʊ.lɚ.skeɪt/ /ˈroʊ.lɚ.bleɪd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈroʊ.lɚ.skeɪt/ /ˈroʊ.lɚ.bleɪd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈroʊ.lɚ.skeɪt/ /ˈroʊ.lɚ.bleɪd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "roller-skate/roller-blade 發音為 /ˈroʊ.lɚ.skeɪt/ /ˈroʊ.lɚ.bleɪd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "roller-skate/roller-blade"
      ]
    }
  },
  "rose": {
    "word": "rose",
    "ipa": "/roʊz/",
    "syllable": [
      "rose"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-710",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "rose",
    "actual_sound": "/roʊz/",
    "note": "自然發音推導例外，美式標準音標為 /roʊz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/roʊz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "rose 發音為 /roʊz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "rose"
      ]
    }
  },
  "round": {
    "word": "round",
    "ipa": "/raʊnd/",
    "syllable": [
      "round"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-711",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "round",
    "actual_sound": "/raʊnd/",
    "note": "自然發音推導例外，美式標準音標為 /raʊnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/raʊnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "round 發音為 /raʊnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "round"
      ]
    }
  },
  "row": {
    "word": "row",
    "ipa": "/roʊ/",
    "syllable": [
      "row"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-712",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "row",
    "actual_sound": "/roʊ/",
    "note": "自然發音推導例外，美式標準音標為 /roʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/roʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "row 發音為 /roʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "row"
      ]
    }
  },
  "rule": {
    "word": "rule",
    "ipa": "/ruːl/",
    "syllable": [
      "rule"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-713",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "rule",
    "actual_sound": "/ruːl/",
    "note": "自然發音推導例外，美式標準音標為 /ruːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ruːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "rule 發音為 /ruːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "rule"
      ]
    }
  },
  "ruler": {
    "word": "ruler",
    "ipa": "/ˈruː.lɚ/",
    "syllable": [
      "rul",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-714",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ruler",
    "actual_sound": "/ˈruː.lɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈruː.lɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈruː.lɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ruler 發音為 /ˈruː.lɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ruler"
      ]
    }
  },
  "salad": {
    "word": "salad",
    "ipa": "/ˈsæl.əd/",
    "syllable": [
      "sal",
      "ad"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-715",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "salad",
    "actual_sound": "/ˈsæl.əd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsæl.əd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsæl.əd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "salad 發音為 /ˈsæl.əd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "salad"
      ]
    }
  },
  "salesman": {
    "word": "salesman",
    "ipa": "/ˈseɪlz.mæn/",
    "syllable": [
      "sales",
      "man"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-716",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "salesman",
    "actual_sound": "/ˈseɪlz.mæn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈseɪlz.mæn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈseɪlz.mæn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "salesman 發音為 /ˈseɪlz.mæn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "salesman"
      ]
    }
  },
  "salt": {
    "word": "salt",
    "ipa": "/sɑːlt/",
    "syllable": [
      "salt"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-717",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "salt",
    "actual_sound": "/sɑːlt/",
    "note": "自然發音推導例外，美式標準音標為 /sɑːlt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɑːlt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "salt 發音為 /sɑːlt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "salt"
      ]
    }
  },
  "sandwich": {
    "word": "sandwich",
    "ipa": "/ˈsæn.wɪtʃ/",
    "syllable": [
      "sand",
      "wich"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-718",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sandwich",
    "actual_sound": "/ˈsæn.wɪtʃ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsæn.wɪtʃ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsæn.wɪtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sandwich 發音為 /ˈsæn.wɪtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sandwich"
      ]
    }
  },
  "saturday": {
    "word": "Saturday",
    "ipa": "/ˈsæt̬.ɚ.deɪ/",
    "syllable": [
      "Sat",
      "ur",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-719",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Saturday",
    "actual_sound": "/ˈsæt̬.ɚ.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsæt̬.ɚ.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsæt̬.ɚ.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Saturday 發音為 /ˈsæt̬.ɚ.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Saturday"
      ]
    }
  },
  "sacred": {
    "word": "sacred",
    "ipa": "/ˈseɪ.krɪd/",
    "syllable": [
      "sa",
      "cred"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-720",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sacred",
    "actual_sound": "/ˈseɪ.krɪd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈseɪ.krɪd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈseɪ.krɪd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sacred 發音為 /ˈseɪ.krɪd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sacred"
      ]
    }
  },
  "school": {
    "word": "school",
    "ipa": "/skuːl/",
    "syllable": [
      "school"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-721",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "school",
    "actual_sound": "/skuːl/",
    "note": "自然發音推導例外，美式標準音標為 /skuːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/skuːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "school 發音為 /skuːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "school"
      ]
    }
  },
  "science": {
    "word": "science",
    "ipa": "/ˈsaɪ.əns/",
    "syllable": [
      "sci",
      "ence"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-722",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "science",
    "actual_sound": "/ˈsaɪ.əns/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsaɪ.əns/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsaɪ.əns/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "science 發音為 /ˈsaɪ.əns/，對應 EPRS R010 特殊例外",
      "related_words": [
        "science"
      ]
    }
  },
  "scooter": {
    "word": "scooter",
    "ipa": "/ˈskuː.t̬ɚ/",
    "syllable": [
      "scoot",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-723",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "scooter",
    "actual_sound": "/ˈskuː.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈskuː.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈskuː.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "scooter 發音為 /ˈskuː.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "scooter"
      ]
    }
  },
  "screen": {
    "word": "screen",
    "ipa": "/skriːn/",
    "syllable": [
      "screen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-724",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "screen",
    "actual_sound": "/skriːn/",
    "note": "自然發音推導例外，美式標準音標為 /skriːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/skriːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "screen 發音為 /skriːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "screen"
      ]
    }
  },
  "sea": {
    "word": "sea",
    "ipa": "/siː/",
    "syllable": [
      "sea"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-725",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sea",
    "actual_sound": "/siː/",
    "note": "自然發音推導例外，美式標準音標為 /siː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/siː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sea 發音為 /siː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sea"
      ]
    }
  },
  "season": {
    "word": "season",
    "ipa": "/ˈsiː.zən/",
    "syllable": [
      "sea",
      "son"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-726",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "season",
    "actual_sound": "/ˈsiː.zən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsiː.zən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsiː.zən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "season 發音為 /ˈsiː.zən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "season"
      ]
    }
  },
  "seat": {
    "word": "seat",
    "ipa": "/siːt/",
    "syllable": [
      "seat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-727",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "seat",
    "actual_sound": "/siːt/",
    "note": "自然發音推導例外，美式標準音標為 /siːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/siːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "seat 發音為 /siːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seat"
      ]
    }
  },
  "second": {
    "word": "second",
    "ipa": "/ˈsɛk.ənd/",
    "syllable": [
      "sec",
      "ond"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-728",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "second",
    "actual_sound": "/ˈsɛk.ənd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛk.ənd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛk.ənd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "second 發音為 /ˈsɛk.ənd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "second"
      ]
    }
  },
  "secretary": {
    "word": "secretary",
    "ipa": "/ˈsɛk.rə.tɛr.i/",
    "syllable": [
      "sec",
      "re",
      "tar",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-729",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "secretary",
    "actual_sound": "/ˈsɛk.rə.tɛr.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛk.rə.tɛr.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛk.rə.tɛr.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "secretary 發音為 /ˈsɛk.rə.tɛr.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "secretary"
      ]
    }
  },
  "see": {
    "word": "see",
    "ipa": "/siː/",
    "syllable": [
      "see"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-730",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "see",
    "actual_sound": "/siː/",
    "note": "自然發音推導例外，美式標準音標為 /siː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/siː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "see 發音為 /siː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "see"
      ]
    }
  },
  "seed": {
    "word": "seed",
    "ipa": "/siːd/",
    "syllable": [
      "seed"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-731",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "seed",
    "actual_sound": "/siːd/",
    "note": "自然發音推導例外，美式標準音標為 /siːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/siːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "seed 發音為 /siːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seed"
      ]
    }
  },
  "seesaw": {
    "word": "seesaw",
    "ipa": "/ˈsiː.sɔː/",
    "syllable": [
      "see",
      "saw"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-732",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "seesaw",
    "actual_sound": "/ˈsiː.sɔː/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsiː.sɔː/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsiː.sɔː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "seesaw 發音為 /ˈsiː.sɔː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seesaw"
      ]
    }
  },
  "seldom": {
    "word": "seldom",
    "ipa": "/ˈsɛl.dəm/",
    "syllable": [
      "sel",
      "dom"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-733",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "seldom",
    "actual_sound": "/ˈsɛl.dəm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛl.dəm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛl.dəm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "seldom 發音為 /ˈsɛl.dəm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seldom"
      ]
    }
  },
  "sell": {
    "word": "sell",
    "ipa": "/sɛl/",
    "syllable": [
      "sell"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-734",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sell",
    "actual_sound": "/sɛl/",
    "note": "自然發音推導例外，美式標準音標為 /sɛl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɛl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sell 發音為 /sɛl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sell"
      ]
    }
  },
  "send": {
    "word": "send",
    "ipa": "/sɛnd/",
    "syllable": [
      "send"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-735",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "send",
    "actual_sound": "/sɛnd/",
    "note": "自然發音推導例外，美式標準音標為 /sɛnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɛnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "send 發音為 /sɛnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "send"
      ]
    }
  },
  "senior high school": {
    "word": "senior high school",
    "ipa": "/ˈsiː.njɚ haɪ skuːl/",
    "syllable": [
      "se",
      "nior",
      "high",
      "school"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-736",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "senior high school",
    "actual_sound": "/ˈsiː.njɚ haɪ skuːl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsiː.njɚ haɪ skuːl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsiː.njɚ haɪ skuːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "senior high school 發音為 /ˈsiː.njɚ haɪ skuːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "senior high school"
      ]
    }
  },
  "sentence": {
    "word": "sentence",
    "ipa": "/ˈsɛn.təns/",
    "syllable": [
      "sen",
      "tence"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-737",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sentence",
    "actual_sound": "/ˈsɛn.təns/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛn.təns/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛn.təns/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sentence 發音為 /ˈsɛn.təns/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sentence"
      ]
    }
  },
  "september": {
    "word": "September",
    "ipa": "/sɛpˈtɛm.bɚ/",
    "syllable": [
      "Sep",
      "tem",
      "ber"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-738",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "September",
    "actual_sound": "/sɛpˈtɛm.bɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /sɛpˈtɛm.bɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/sɛpˈtɛm.bɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "September 發音為 /sɛpˈtɛm.bɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "September"
      ]
    }
  },
  "serious": {
    "word": "serious",
    "ipa": "/ˈsɪr.i.əs/",
    "syllable": [
      "se",
      "ri",
      "ous"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-739",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "serious",
    "actual_sound": "/ˈsɪr.i.əs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɪr.i.əs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɪr.i.əs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "serious 發音為 /ˈsɪr.i.əs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "serious"
      ]
    }
  },
  "seven": {
    "word": "seven",
    "ipa": "/ˈsɛv.ən/",
    "syllable": [
      "sev",
      "en"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-740",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "seven",
    "actual_sound": "/ˈsɛv.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛv.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛv.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "seven 發音為 /ˈsɛv.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seven"
      ]
    }
  },
  "seventeen": {
    "word": "seventeen",
    "ipa": "/ˌsɛv.ənˈtiːn/",
    "syllable": [
      "sev",
      "en",
      "teen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-741",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "seventeen",
    "actual_sound": "/ˌsɛv.ənˈtiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌsɛv.ənˈtiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌsɛv.ənˈtiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "seventeen 發音為 /ˌsɛv.ənˈtiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seventeen"
      ]
    }
  },
  "seventeenth": {
    "word": "seventeenth",
    "ipa": "/ˌsɛv.ənˈtiːnθ/",
    "syllable": [
      "sev",
      "en",
      "teenth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-742",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "seventeenth",
    "actual_sound": "/ˌsɛv.ənˈtiːnθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌsɛv.ənˈtiːnθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌsɛv.ənˈtiːnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "seventeenth 發音為 /ˌsɛv.ənˈtiːnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seventeenth"
      ]
    }
  },
  "seventh": {
    "word": "seventh",
    "ipa": "/ˈsɛv.ənθ/",
    "syllable": [
      "sev",
      "en",
      "th"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-743",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "seventh",
    "actual_sound": "/ˈsɛv.ənθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛv.ənθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛv.ənθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "seventh 發音為 /ˈsɛv.ənθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seventh"
      ]
    }
  },
  "seventy": {
    "word": "seventy",
    "ipa": "/ˈsɛv.ən.ti/",
    "syllable": [
      "sev",
      "en",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-744",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "seventy",
    "actual_sound": "/ˈsɛv.ən.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛv.ən.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛv.ən.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "seventy 發音為 /ˈsɛv.ən.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "seventy"
      ]
    }
  },
  "several": {
    "word": "several",
    "ipa": "/ˈsɛv.ɚ.əl/",
    "syllable": [
      "sev",
      "er",
      "al"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-745",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "several",
    "actual_sound": "/ˈsɛv.ɚ.əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɛv.ɚ.əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɛv.ɚ.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "several 發音為 /ˈsɛv.ɚ.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "several"
      ]
    }
  },
  "shall": {
    "word": "shall",
    "ipa": "/ʃæl/",
    "syllable": [
      "shall"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-746",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "shall",
    "actual_sound": "/ʃæl/",
    "note": "自然發音推導例外，美式標準音標為 /ʃæl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃæl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "shall 發音為 /ʃæl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "shall"
      ]
    }
  },
  "share": {
    "word": "share",
    "ipa": "/ʃɛr/",
    "syllable": [
      "share"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-747",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "share",
    "actual_sound": "/ʃɛr/",
    "note": "自然發音推導例外，美式標準音標為 /ʃɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "share 發音為 /ʃɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "share"
      ]
    }
  },
  "she": {
    "word": "she",
    "ipa": "/ʃiː/",
    "syllable": [
      "she"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-748",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "she",
    "actual_sound": "/ʃiː/",
    "note": "自然發音推導例外，美式標準音標為 /ʃiː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃiː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "she 發音為 /ʃiː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "she"
      ]
    }
  },
  "sheep": {
    "word": "sheep",
    "ipa": "/ʃiːp/",
    "syllable": [
      "sheep"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-749",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sheep",
    "actual_sound": "/ʃiːp/",
    "note": "自然發音推導例外，美式標準音標為 /ʃiːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃiːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sheep 發音為 /ʃiːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sheep"
      ]
    }
  },
  "shirt": {
    "word": "shirt",
    "ipa": "/ʃɝːt/",
    "syllable": [
      "shirt"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-750",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "shirt",
    "actual_sound": "/ʃɝːt/",
    "note": "自然發音推導例外，美式標準音標為 /ʃɝːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃɝːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "shirt 發音為 /ʃɝːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "shirt"
      ]
    }
  },
  "shoe": {
    "word": "shoe",
    "ipa": "/ʃuː/",
    "syllable": [
      "shoe(s)"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-751",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "shoe",
    "actual_sound": "/ʃuː",
    "note": "自然發音推導例外，美式標準音標為 /ʃuː",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃuː",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "shoe 發音為 /ʃuː，對應 EPRS R010 特殊例外",
      "related_words": [
        "shoe"
      ]
    }
  },
  "shop": {
    "word": "shop",
    "ipa": "/ʃɑːp/",
    "syllable": [
      "shop"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-752",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "shop",
    "actual_sound": "/ʃɑːp/",
    "note": "自然發音推導例外，美式標準音標為 /ʃɑːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃɑːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "shop 發音為 /ʃɑːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "shop"
      ]
    }
  },
  "shopkeeper": {
    "word": "shopkeeper",
    "ipa": "/ˈʃɑːpˌkiː.pɚ/",
    "syllable": [
      "shop",
      "keep",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-753",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "shopkeeper",
    "actual_sound": "/ˈʃɑːpˌkiː.pɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈʃɑːpˌkiː.pɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈʃɑːpˌkiː.pɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "shopkeeper 發音為 /ˈʃɑːpˌkiː.pɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "shopkeeper"
      ]
    }
  },
  "should": {
    "word": "should",
    "ipa": "/ʃʊd/",
    "syllable": [
      "should"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-754",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "should",
    "actual_sound": "/ʃʊd/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /ʃʊd/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/ʃʊd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "should 發音為 /ʃʊd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "should"
      ]
    }
  },
  "shoulder": {
    "word": "shoulder",
    "ipa": "/ˈʃoʊl.dɚ/",
    "syllable": [
      "shoul",
      "der"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-755",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "shoulder",
    "actual_sound": "/ˈʃoʊl.dɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈʃoʊl.dɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈʃoʊl.dɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "shoulder 發音為 /ˈʃoʊl.dɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "shoulder"
      ]
    }
  },
  "shout": {
    "word": "shout",
    "ipa": "/ʃaʊt/",
    "syllable": [
      "shout"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-756",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "shout",
    "actual_sound": "/ʃaʊt/",
    "note": "自然發音推導例外，美式標準音標為 /ʃaʊt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃaʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "shout 發音為 /ʃaʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "shout"
      ]
    }
  },
  "show": {
    "word": "show",
    "ipa": "/ʃoʊ/",
    "syllable": [
      "show"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-757",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "show",
    "actual_sound": "/ʃoʊ/",
    "note": "自然發音推導例外，美式標準音標為 /ʃoʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃoʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "show 發音為 /ʃoʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "show"
      ]
    }
  },
  "shy": {
    "word": "shy",
    "ipa": "/ʃaɪ/",
    "syllable": [
      "shy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-758",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "shy",
    "actual_sound": "/ʃaɪ/",
    "note": "自然發音推導例外，美式標準音標為 /ʃaɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃaɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "shy 發音為 /ʃaɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "shy"
      ]
    }
  },
  "sidewalk": {
    "word": "sidewalk",
    "ipa": "/ˈsaɪd.wɑːk/",
    "syllable": [
      "side",
      "walk"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-759",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sidewalk",
    "actual_sound": "/ˈsaɪd.wɑːk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsaɪd.wɑːk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsaɪd.wɑːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sidewalk 發音為 /ˈsaɪd.wɑːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sidewalk"
      ]
    }
  },
  "sight": {
    "word": "sight",
    "ipa": "/saɪt/",
    "syllable": [
      "sight"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-760",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sight",
    "actual_sound": "/saɪt/",
    "note": "自然發音推導例外，美式標準音標為 /saɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/saɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sight 發音為 /saɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sight"
      ]
    }
  },
  "sign": {
    "word": "sign",
    "ipa": "/saɪn/",
    "syllable": [
      "sign"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-761",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sign",
    "actual_sound": "/saɪn/",
    "note": "自然發音推導例外，美式標準音標為 /saɪn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/saɪn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sign 發音為 /saɪn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sign"
      ]
    }
  },
  "simple": {
    "word": "simple",
    "ipa": "/ˈsɪm.pəl/",
    "syllable": [
      "sim",
      "ple"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-762",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "simple",
    "actual_sound": "/ˈsɪm.pəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɪm.pəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɪm.pəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "simple 發音為 /ˈsɪm.pəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "simple"
      ]
    }
  },
  "singer": {
    "word": "singer",
    "ipa": "/ˈsɪŋ.ɚ/",
    "syllable": [
      "sing",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-763",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "singer",
    "actual_sound": "/ˈsɪŋ.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɪŋ.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɪŋ.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "singer 發音為 /ˈsɪŋ.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "singer"
      ]
    }
  },
  "sir": {
    "word": "sir",
    "ipa": "/sɝː/",
    "syllable": [
      "sir"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-764",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sir",
    "actual_sound": "/sɝː/",
    "note": "自然發音推導例外，美式標準音標為 /sɝː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɝː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sir 發音為 /sɝː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sir"
      ]
    }
  },
  "sister": {
    "word": "sister",
    "ipa": "/ˈsɪs.tɚ/",
    "syllable": [
      "sis",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-765",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sister",
    "actual_sound": "/ˈsɪs.tɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɪs.tɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɪs.tɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sister 發音為 /ˈsɪs.tɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sister"
      ]
    }
  },
  "six": {
    "word": "six",
    "ipa": "/sɪks/",
    "syllable": [
      "six"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-766",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "six",
    "actual_sound": "/sɪks/",
    "note": "自然發音推導例外，美式標準音標為 /sɪks/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɪks/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "six 發音為 /sɪks/，對應 EPRS R010 特殊例外",
      "related_words": [
        "six"
      ]
    }
  },
  "sixteen": {
    "word": "sixteen",
    "ipa": "/ˌsɪksˈtiːn/",
    "syllable": [
      "six",
      "teen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-767",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sixteen",
    "actual_sound": "/ˌsɪksˈtiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌsɪksˈtiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌsɪksˈtiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sixteen 發音為 /ˌsɪksˈtiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sixteen"
      ]
    }
  },
  "sixteenth": {
    "word": "sixteenth",
    "ipa": "/ˌsɪksˈtiːnθ/",
    "syllable": [
      "six",
      "teenth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-768",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sixteenth",
    "actual_sound": "/ˌsɪksˈtiːnθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌsɪksˈtiːnθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌsɪksˈtiːnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sixteenth 發音為 /ˌsɪksˈtiːnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sixteenth"
      ]
    }
  },
  "sixth": {
    "word": "sixth",
    "ipa": "/sɪksθ/",
    "syllable": [
      "sixth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-769",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sixth",
    "actual_sound": "/sɪksθ/",
    "note": "自然發音推導例外，美式標準音標為 /sɪksθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɪksθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sixth 發音為 /sɪksθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sixth"
      ]
    }
  },
  "sixty": {
    "word": "sixty",
    "ipa": "/ˈsɪks.ti/",
    "syllable": [
      "six",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-770",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sixty",
    "actual_sound": "/ˈsɪks.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɪks.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɪks.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sixty 發音為 /ˈsɪks.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sixty"
      ]
    }
  },
  "skirt": {
    "word": "skirt",
    "ipa": "/skɝːt/",
    "syllable": [
      "skirt"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-771",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "skirt",
    "actual_sound": "/skɝːt/",
    "note": "自然發音推導例外，美式標準音標為 /skɝːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/skɝːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "skirt 發音為 /skɝːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "skirt"
      ]
    }
  },
  "sky": {
    "word": "sky",
    "ipa": "/skaɪ/",
    "syllable": [
      "sky"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-772",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sky",
    "actual_sound": "/skaɪ/",
    "note": "自然發音推導例外，美式標準音標為 /skaɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/skaɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sky 發音為 /skaɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sky"
      ]
    }
  },
  "sleep": {
    "word": "sleep",
    "ipa": "/sliːp/",
    "syllable": [
      "sleep"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-773",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sleep",
    "actual_sound": "/sliːp/",
    "note": "自然發音推導例外，美式標準音標為 /sliːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sliːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sleep 發音為 /sliːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sleep"
      ]
    }
  },
  "slow": {
    "word": "slow",
    "ipa": "/sloʊ/",
    "syllable": [
      "slow"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-774",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "slow",
    "actual_sound": "/sloʊ/",
    "note": "自然發音推導例外，美式標準音標為 /sloʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sloʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "slow 發音為 /sloʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "slow"
      ]
    }
  },
  "small": {
    "word": "small",
    "ipa": "/smɑːl/",
    "syllable": [
      "small"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-775",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "small",
    "actual_sound": "/smɑːl/",
    "note": "自然發音推導例外，美式標準音標為 /smɑːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/smɑːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "small 發音為 /smɑːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "small"
      ]
    }
  },
  "smell": {
    "word": "smell",
    "ipa": "/smɛl/",
    "syllable": [
      "smell"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-776",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "smell",
    "actual_sound": "/smɛl/",
    "note": "自然發音推導例外，美式標準音標為 /smɛl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/smɛl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "smell 發音為 /smɛl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "smell"
      ]
    }
  },
  "snow": {
    "word": "snow",
    "ipa": "/snoʊ/",
    "syllable": [
      "snow"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-777",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "snow",
    "actual_sound": "/snoʊ/",
    "note": "自然發音推導例外，美式標準音標為 /snoʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/snoʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "snow 發音為 /snoʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "snow"
      ]
    }
  },
  "snowman": {
    "word": "snowman",
    "ipa": "/ˈsnoʊ.mæn/",
    "syllable": [
      "snow",
      "man"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-778",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "snowman",
    "actual_sound": "/ˈsnoʊ.mæn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsnoʊ.mæn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsnoʊ.mæn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "snowman 發音為 /ˈsnoʊ.mæn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "snowman"
      ]
    }
  },
  "snowy": {
    "word": "snowy",
    "ipa": "/ˈsnoʊ.i/",
    "syllable": [
      "snow",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-779",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "snowy",
    "actual_sound": "/ˈsnoʊ.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsnoʊ.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsnoʊ.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "snowy 發音為 /ˈsnoʊ.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "snowy"
      ]
    }
  },
  "soccer": {
    "word": "soccer",
    "ipa": "/ˈsɑː.kɚ/",
    "syllable": [
      "soc",
      "cer"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-780",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "soccer",
    "actual_sound": "/ˈsɑː.kɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɑː.kɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɑː.kɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "soccer 發音為 /ˈsɑː.kɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "soccer"
      ]
    }
  },
  "socks": {
    "word": "socks",
    "ipa": "/sɑːks/",
    "syllable": [
      "socks"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-781",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "socks",
    "actual_sound": "/sɑːks/",
    "note": "自然發音推導例外，美式標準音標為 /sɑːks/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɑːks/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "socks 發音為 /sɑːks/，對應 EPRS R010 特殊例外",
      "related_words": [
        "socks"
      ]
    }
  },
  "sofa": {
    "word": "sofa",
    "ipa": "/ˈsoʊ.fə/",
    "syllable": [
      "so",
      "fa"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-782",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sofa",
    "actual_sound": "/ˈsoʊ.fə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsoʊ.fə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsoʊ.fə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sofa 發音為 /ˈsoʊ.fə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sofa"
      ]
    }
  },
  "soldier": {
    "word": "soldier",
    "ipa": "/ˈsoʊl.dʒɚ/",
    "syllable": [
      "sol",
      "dier"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-783",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "soldier",
    "actual_sound": "/ˈsoʊl.dʒɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsoʊl.dʒɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsoʊl.dʒɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "soldier 發音為 /ˈsoʊl.dʒɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "soldier"
      ]
    }
  },
  "someone/somebody": {
    "word": "someone/somebody",
    "ipa": "/ˈsʌm.wʌn/ /ˈsʌm.bɑː.di/",
    "syllable": [
      "some",
      "one",
      "some",
      "bod",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-784",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "someone/somebody",
    "actual_sound": "/ˈsʌm.wʌn/ /ˈsʌm.bɑː.di/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsʌm.wʌn/ /ˈsʌm.bɑː.di/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsʌm.wʌn/ /ˈsʌm.bɑː.di/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "someone/somebody 發音為 /ˈsʌm.wʌn/ /ˈsʌm.bɑː.di/，對應 EPRS R010 特殊例外",
      "related_words": [
        "someone/somebody"
      ]
    }
  },
  "something": {
    "word": "something",
    "ipa": "/ˈsʌm.θɪŋ/",
    "syllable": [
      "some",
      "thing"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-785",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "something",
    "actual_sound": "/ˈsʌm.θɪŋ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsʌm.θɪŋ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsʌm.θɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "something 發音為 /ˈsʌm.θɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "something"
      ]
    }
  },
  "sometimes": {
    "word": "sometimes",
    "ipa": "/ˈsʌm.taɪmz/",
    "syllable": [
      "some",
      "times"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-786",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sometimes",
    "actual_sound": "/ˈsʌm.taɪmz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsʌm.taɪmz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsʌm.taɪmz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sometimes 發音為 /ˈsʌm.taɪmz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sometimes"
      ]
    }
  },
  "somewhere": {
    "word": "somewhere",
    "ipa": "/ˈsʌm.wɛr/",
    "syllable": [
      "some",
      "where"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-787",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "somewhere",
    "actual_sound": "/ˈsʌm.wɛr/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsʌm.wɛr/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsʌm.wɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "somewhere 發音為 /ˈsʌm.wɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "somewhere"
      ]
    }
  },
  "son": {
    "word": "son",
    "ipa": "/sʌn/",
    "syllable": [
      "son"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-788",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "son",
    "actual_sound": "/sʌn/",
    "note": "自然發音推導例外，美式標準音標為 /sʌn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sʌn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "son 發音為 /sʌn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "son"
      ]
    }
  },
  "song": {
    "word": "song",
    "ipa": "/sɑːŋ/",
    "syllable": [
      "song"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-789",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "song",
    "actual_sound": "/sɑːŋ/",
    "note": "自然發音推導例外，美式標準音標為 /sɑːŋ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɑːŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "song 發音為 /sɑːŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "song"
      ]
    }
  },
  "soon": {
    "word": "soon",
    "ipa": "/suːn/",
    "syllable": [
      "soon"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-790",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "soon",
    "actual_sound": "/suːn/",
    "note": "自然發音推導例外，美式標準音標為 /suːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/suːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "soon 發音為 /suːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "soon"
      ]
    }
  },
  "sore": {
    "word": "sore",
    "ipa": "/sɔːr/",
    "syllable": [
      "sore"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-791",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sore",
    "actual_sound": "/sɔːr/",
    "note": "自然發音推導例外，美式標準音標為 /sɔːr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sore 發音為 /sɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sore"
      ]
    }
  },
  "sorry": {
    "word": "sorry",
    "ipa": "/ˈsɑː.ri/",
    "syllable": [
      "sor",
      "ry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-792",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sorry",
    "actual_sound": "/ˈsɑː.ri/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsɑː.ri/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsɑː.ri/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sorry 發音為 /ˈsɑː.ri/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sorry"
      ]
    }
  },
  "sound": {
    "word": "sound",
    "ipa": "/saʊnd/",
    "syllable": [
      "sound"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-793",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sound",
    "actual_sound": "/saʊnd/",
    "note": "自然發音推導例外，美式標準音標為 /saʊnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/saʊnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sound 發音為 /saʊnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sound"
      ]
    }
  },
  "soup": {
    "word": "soup",
    "ipa": "/suːp/",
    "syllable": [
      "soup"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-794",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "soup",
    "actual_sound": "/suːp/",
    "note": "自然發音推導例外，美式標準音標為 /suːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/suːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "soup 發音為 /suːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "soup"
      ]
    }
  },
  "south": {
    "word": "south",
    "ipa": "/saʊθ/",
    "syllable": [
      "south"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-795",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "south",
    "actual_sound": "/saʊθ/",
    "note": "自然發音推導例外，美式標準音標為 /saʊθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/saʊθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "south 發音為 /saʊθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "south"
      ]
    }
  },
  "space": {
    "word": "space",
    "ipa": "/speɪs/",
    "syllable": [
      "space"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-796",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "space",
    "actual_sound": "/speɪs/",
    "note": "自然發音推導例外，美式標準音標為 /speɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/speɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "space 發音為 /speɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "space"
      ]
    }
  },
  "spaghetti": {
    "word": "spaghetti",
    "ipa": "/spəˈɡɛt.i/",
    "syllable": [
      "spa",
      "ghet",
      "ti"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-797",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "spaghetti",
    "actual_sound": "/spəˈɡɛt.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /spəˈɡɛt.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/spəˈɡɛt.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "spaghetti 發音為 /spəˈɡɛt.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "spaghetti"
      ]
    }
  },
  "speak": {
    "word": "speak",
    "ipa": "/spiːk/",
    "syllable": [
      "speak"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-798",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "speak",
    "actual_sound": "/spiːk/",
    "note": "自然發音推導例外，美式標準音標為 /spiːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/spiːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "speak 發音為 /spiːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "speak"
      ]
    }
  },
  "special": {
    "word": "special",
    "ipa": "/ˈspɛʃ.əl/",
    "syllable": [
      "spe",
      "cial"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-799",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "special",
    "actual_sound": "/ˈspɛʃ.əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈspɛʃ.əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈspɛʃ.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "special 發音為 /ˈspɛʃ.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "special"
      ]
    }
  },
  "spell": {
    "word": "spell",
    "ipa": "/spɛl/",
    "syllable": [
      "spell"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-800",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "spell",
    "actual_sound": "/spɛl/",
    "note": "自然發音推導例外，美式標準音標為 /spɛl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/spɛl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "spell 發音為 /spɛl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "spell"
      ]
    }
  },
  "spend": {
    "word": "spend",
    "ipa": "/spɛnd/",
    "syllable": [
      "spend"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-801",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "spend",
    "actual_sound": "/spɛnd/",
    "note": "自然發音推導例外，美式標準音標為 /spɛnd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/spɛnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "spend 發音為 /spɛnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "spend"
      ]
    }
  },
  "spider": {
    "word": "spider",
    "ipa": "/ˈspaɪ.dɚ/",
    "syllable": [
      "spi",
      "der"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-802",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "spider",
    "actual_sound": "/ˈspaɪ.dɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈspaɪ.dɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈspaɪ.dɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "spider 發音為 /ˈspaɪ.dɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "spider"
      ]
    }
  },
  "spoon": {
    "word": "spoon",
    "ipa": "/spuːn/",
    "syllable": [
      "spoon"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-803",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "spoon",
    "actual_sound": "/spuːn/",
    "note": "自然發音推導例外，美式標準音標為 /spuːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/spuːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "spoon 發音為 /spuːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "spoon"
      ]
    }
  },
  "spring": {
    "word": "spring",
    "ipa": "/sprɪŋ/",
    "syllable": [
      "spring"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-804",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "spring",
    "actual_sound": "/sprɪŋ/",
    "note": "自然發音推導例外，美式標準音標為 /sprɪŋ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sprɪŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "spring 發音為 /sprɪŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "spring"
      ]
    }
  },
  "square": {
    "word": "square",
    "ipa": "/skwɛr/",
    "syllable": [
      "square"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-805",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "square",
    "actual_sound": "/skwɛr/",
    "note": "自然發音推導例外，美式標準音標為 /skwɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/skwɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "square 發音為 /skwɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "square"
      ]
    }
  },
  "stairs": {
    "word": "stairs",
    "ipa": "/stɛrz/",
    "syllable": [
      "stairs"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-806",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "stairs",
    "actual_sound": "/stɛrz/",
    "note": "自然發音推導例外，美式標準音標為 /stɛrz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/stɛrz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "stairs 發音為 /stɛrz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "stairs"
      ]
    }
  },
  "station": {
    "word": "station",
    "ipa": "/ˈsteɪ.ʃən/",
    "syllable": [
      "sta",
      "tion"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-807",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "station",
    "actual_sound": "/ˈsteɪ.ʃən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsteɪ.ʃən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsteɪ.ʃən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "station 發音為 /ˈsteɪ.ʃən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "station"
      ]
    }
  },
  "still": {
    "word": "still",
    "ipa": "/stɪl/",
    "syllable": [
      "still"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-808",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "still",
    "actual_sound": "/stɪl/",
    "note": "自然發音推導例外，美式標準音標為 /stɪl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/stɪl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "still 發音為 /stɪl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "still"
      ]
    }
  },
  "stomach": {
    "word": "stomach",
    "ipa": "/ˈstʌm.ək/",
    "syllable": [
      "stom",
      "ach"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-809",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "stomach",
    "actual_sound": "/ˈstʌm.ək/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈstʌm.ək/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈstʌm.ək/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "stomach 發音為 /ˈstʌm.ək/，對應 EPRS R010 特殊例外",
      "related_words": [
        "stomach"
      ]
    }
  },
  "stop": {
    "word": "stop",
    "ipa": "/stɑːp/",
    "syllable": [
      "stop"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-810",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "stop",
    "actual_sound": "/stɑːp/",
    "note": "自然發音推導例外，美式標準音標為 /stɑːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/stɑːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "stop 發音為 /stɑːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "stop"
      ]
    }
  },
  "store": {
    "word": "store",
    "ipa": "/stɔːr/",
    "syllable": [
      "store"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-811",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "store",
    "actual_sound": "/stɔːr/",
    "note": "自然發音推導例外，美式標準音標為 /stɔːr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/stɔːr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "store 發音為 /stɔːr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "store"
      ]
    }
  },
  "straight": {
    "word": "straight",
    "ipa": "/streɪt/",
    "syllable": [
      "straight"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-812",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "straight",
    "actual_sound": "/streɪt/",
    "note": "自然發音推導例外，美式標準音標為 /streɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/streɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "straight 發音為 /streɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "straight"
      ]
    }
  },
  "story": {
    "word": "story",
    "ipa": "/ˈstɔː.ri/",
    "syllable": [
      "sto",
      "ry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-813",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "story",
    "actual_sound": "/ˈstɔː.ri/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈstɔː.ri/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈstɔː.ri/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "story 發音為 /ˈstɔː.ri/，對應 EPRS R010 特殊例外",
      "related_words": [
        "story"
      ]
    }
  },
  "strange": {
    "word": "strange",
    "ipa": "/streɪndʒ/",
    "syllable": [
      "strange"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-814",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "strange",
    "actual_sound": "/streɪndʒ/",
    "note": "自然發音推導例外，美式標準音標為 /streɪndʒ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/streɪndʒ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "strange 發音為 /streɪndʒ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "strange"
      ]
    }
  },
  "stranger": {
    "word": "stranger",
    "ipa": "/ˈstreɪn.dʒɚ/",
    "syllable": [
      "stran",
      "ger"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-815",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "stranger",
    "actual_sound": "/ˈstreɪn.dʒɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈstreɪn.dʒɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈstreɪn.dʒɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "stranger 發音為 /ˈstreɪn.dʒɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "stranger"
      ]
    }
  },
  "strawberry": {
    "word": "strawberry",
    "ipa": "/ˈstrɔː.ber.i/",
    "syllable": [
      "straw",
      "ber",
      "ry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-816",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "strawberry",
    "actual_sound": "/ˈstrɔː.ber.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈstrɔː.ber.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈstrɔː.ber.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "strawberry 發音為 /ˈstrɔː.ber.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "strawberry"
      ]
    }
  },
  "street": {
    "word": "street",
    "ipa": "/striːt/",
    "syllable": [
      "street"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-817",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "street",
    "actual_sound": "/striːt/",
    "note": "自然發音推導例外，美式標準音標為 /striːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/striːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "street 發音為 /striːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "street"
      ]
    }
  },
  "strong": {
    "word": "strong",
    "ipa": "/strɔːŋ/",
    "syllable": [
      "strong"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-818",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "strong",
    "actual_sound": "/strɔːŋ/",
    "note": "自然發音推導例外，美式標準音標為 /strɔːŋ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/strɔːŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "strong 發音為 /strɔːŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "strong"
      ]
    }
  },
  "student": {
    "word": "student",
    "ipa": "/ˈstuː.dənt/",
    "syllable": [
      "stu",
      "dent"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-819",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "student",
    "actual_sound": "/ˈstuː.dənt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈstuː.dənt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈstuː.dənt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "student 發音為 /ˈstuː.dənt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "student"
      ]
    }
  },
  "study": {
    "word": "study",
    "ipa": "/ˈstʌd.i/",
    "syllable": [
      "stud",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-820",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "study",
    "actual_sound": "/ˈstʌd.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈstʌd.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈstʌd.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "study 發音為 /ˈstʌd.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "study"
      ]
    }
  },
  "stupid": {
    "word": "stupid",
    "ipa": "/ˈstuː.pɪd/",
    "syllable": [
      "stu",
      "pid"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-821",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "stupid",
    "actual_sound": "/ˈstuː.pɪd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈstuː.pɪd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈstuː.pɪd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "stupid 發音為 /ˈstuː.pɪd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "stupid"
      ]
    }
  },
  "subject": {
    "word": "subject",
    "ipa": "/ˈsʌb.dʒɪkt/",
    "syllable": [
      "sub",
      "ject"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-822",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "subject",
    "actual_sound": "/ˈsʌb.dʒɪkt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsʌb.dʒɪkt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsʌb.dʒɪkt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "subject 發音為 /ˈsʌb.dʒɪkt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "subject"
      ]
    }
  },
  "successful": {
    "word": "successful",
    "ipa": "/səkˈsɛs.fəl/",
    "syllable": [
      "suc",
      "cess",
      "ful"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-823",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "successful",
    "actual_sound": "/səkˈsɛs.fəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /səkˈsɛs.fəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/səkˈsɛs.fəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "successful 發音為 /səkˈsɛs.fəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "successful"
      ]
    }
  },
  "sugar": {
    "word": "sugar",
    "ipa": "/ˈʃʊɡ.ɚ/",
    "syllable": [
      "su",
      "gar"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-824",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sugar",
    "actual_sound": "/ˈʃʊɡ.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈʃʊɡ.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈʃʊɡ.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sugar 發音為 /ˈʃʊɡ.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sugar"
      ]
    }
  },
  "summer": {
    "word": "summer",
    "ipa": "/ˈsʌm.ɚ/",
    "syllable": [
      "sum",
      "mer"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-825",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "summer",
    "actual_sound": "/ˈsʌm.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsʌm.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsʌm.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "summer 發音為 /ˈsʌm.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "summer"
      ]
    }
  },
  "sunny": {
    "word": "sunny",
    "ipa": "/ˈsʌn.i/",
    "syllable": [
      "sun",
      "ny"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-826",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sunny",
    "actual_sound": "/ˈsʌn.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsʌn.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsʌn.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sunny 發音為 /ˈsʌn.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sunny"
      ]
    }
  },
  "supermarket": {
    "word": "supermarket",
    "ipa": "/ˈsuː.pɚˌmɑːr.kɪt/",
    "syllable": [
      "su",
      "per",
      "mar",
      "ket"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-827",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "supermarket",
    "actual_sound": "/ˈsuː.pɚˌmɑːr.kɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈsuː.pɚˌmɑːr.kɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈsuː.pɚˌmɑːr.kɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "supermarket 發音為 /ˈsuː.pɚˌmɑːr.kɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "supermarket"
      ]
    }
  },
  "sure": {
    "word": "sure",
    "ipa": "/ʃʊr/",
    "syllable": [
      "sure"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-828",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sure",
    "actual_sound": "/ʃʊr/",
    "note": "自然發音推導例外，美式標準音標為 /ʃʊr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ʃʊr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sure 發音為 /ʃʊr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sure"
      ]
    }
  },
  "surf": {
    "word": "surf",
    "ipa": "/sɝːf/",
    "syllable": [
      "surf"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-829",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "surf",
    "actual_sound": "/sɝːf/",
    "note": "自然發音推導例外，美式標準音標為 /sɝːf/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/sɝːf/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "surf 發音為 /sɝːf/，對應 EPRS R010 特殊例外",
      "related_words": [
        "surf"
      ]
    }
  },
  "surprise": {
    "word": "surprise",
    "ipa": "/sɚˈpraɪz/",
    "syllable": [
      "sur",
      "prise"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-830",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "surprise",
    "actual_sound": "/sɚˈpraɪz/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /sɚˈpraɪz/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/sɚˈpraɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "surprise 發音為 /sɚˈpraɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "surprise"
      ]
    }
  },
  "surprised": {
    "word": "surprised",
    "ipa": "/sɚˈpraɪzd/",
    "syllable": [
      "sur",
      "prised"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-831",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "surprised",
    "actual_sound": "/sɚˈpraɪzd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /sɚˈpraɪzd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/sɚˈpraɪzd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "surprised 發音為 /sɚˈpraɪzd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "surprised"
      ]
    }
  },
  "sweater": {
    "word": "sweater",
    "ipa": "/ˈswɛt.ɚ/",
    "syllable": [
      "sweat",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-832",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "sweater",
    "actual_sound": "/ˈswɛt.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈswɛt.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈswɛt.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "sweater 發音為 /ˈswɛt.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sweater"
      ]
    }
  },
  "sweet": {
    "word": "sweet",
    "ipa": "/swiːt/",
    "syllable": [
      "sweet"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-833",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "sweet",
    "actual_sound": "/swiːt/",
    "note": "自然發音推導例外，美式標準音標為 /swiːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/swiːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "sweet 發音為 /swiːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "sweet"
      ]
    }
  },
  "table": {
    "word": "table",
    "ipa": "/ˈteɪ.bəl/",
    "syllable": [
      "ta",
      "ble"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-834",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "table",
    "actual_sound": "/ˈteɪ.bəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈteɪ.bəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈteɪ.bəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "table 發音為 /ˈteɪ.bəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "table"
      ]
    }
  },
  "taiwan": {
    "word": "Taiwan",
    "ipa": "/ˌtaɪˈwɑːn/",
    "syllable": [
      "Tai",
      "wan"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-835",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Taiwan",
    "actual_sound": "/ˌtaɪˈwɑːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌtaɪˈwɑːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌtaɪˈwɑːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Taiwan 發音為 /ˌtaɪˈwɑːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Taiwan"
      ]
    }
  },
  "talk": {
    "word": "talk",
    "ipa": "/tɔːk/",
    "syllable": [
      "talk"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-836",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "talk",
    "actual_sound": "/tɔːk/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /tɔːk/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/tɔːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "talk 發音為 /tɔːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "talk"
      ]
    }
  },
  "tall": {
    "word": "tall",
    "ipa": "/tɔːl/",
    "syllable": [
      "tall"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-837",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "tall",
    "actual_sound": "/tɔːl/",
    "note": "自然發音推導例外，美式標準音標為 /tɔːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tɔːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "tall 發音為 /tɔːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tall"
      ]
    }
  },
  "taste": {
    "word": "taste",
    "ipa": "/teɪst/",
    "syllable": [
      "taste"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-838",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "taste",
    "actual_sound": "/teɪst/",
    "note": "自然發音推導例外，美式標準音標為 /teɪst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/teɪst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "taste 發音為 /teɪst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "taste"
      ]
    }
  },
  "taxi": {
    "word": "taxi",
    "ipa": "/ˈtæk.si/",
    "syllable": [
      "tax",
      "i"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-839",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "taxi",
    "actual_sound": "/ˈtæk.si/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtæk.si/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtæk.si/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "taxi 發音為 /ˈtæk.si/，對應 EPRS R010 特殊例外",
      "related_words": [
        "taxi"
      ]
    }
  },
  "tea": {
    "word": "tea",
    "ipa": "/tiː/",
    "syllable": [
      "tea"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-840",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "tea",
    "actual_sound": "/tiː/",
    "note": "自然發音推導例外，美式標準音標為 /tiː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tiː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "tea 發音為 /tiː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tea"
      ]
    }
  },
  "teach": {
    "word": "teach",
    "ipa": "/tiːtʃ/",
    "syllable": [
      "teach"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-841",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "teach",
    "actual_sound": "/tiːtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /tiːtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tiːtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "teach 發音為 /tiːtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "teach"
      ]
    }
  },
  "teacher": {
    "word": "teacher",
    "ipa": "/ˈtiː.tʃɚ/",
    "syllable": [
      "teach",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-842",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "teacher",
    "actual_sound": "/ˈtiː.tʃɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtiː.tʃɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtiː.tʃɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "teacher 發音為 /ˈtiː.tʃɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "teacher"
      ]
    }
  },
  "team": {
    "word": "team",
    "ipa": "/tiːm/",
    "syllable": [
      "team"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-843",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "team",
    "actual_sound": "/tiːm/",
    "note": "自然發音推導例外，美式標準音標為 /tiːm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tiːm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "team 發音為 /tiːm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "team"
      ]
    }
  },
  "teenager": {
    "word": "teenager",
    "ipa": "/ˈtiːnˌeɪ.dʒɚ/",
    "syllable": [
      "teen",
      "ag",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-844",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "teenager",
    "actual_sound": "/ˈtiːnˌeɪ.dʒɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtiːnˌeɪ.dʒɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtiːnˌeɪ.dʒɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "teenager 發音為 /ˈtiːnˌeɪ.dʒɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "teenager"
      ]
    }
  },
  "telephone": {
    "word": "telephone",
    "ipa": "/ˈtɛl.ə.foʊn/",
    "syllable": [
      "tel",
      "e",
      "phone"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-845",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "telephone",
    "actual_sound": "/ˈtɛl.ə.foʊn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtɛl.ə.foʊn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtɛl.ə.foʊn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "telephone 發音為 /ˈtɛl.ə.foʊn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "telephone"
      ]
    }
  },
  "television": {
    "word": "television",
    "ipa": "/ˈtɛl.ə.vɪʒ.ən/",
    "syllable": [
      "tel",
      "e",
      "vi",
      "sion"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-846",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "television",
    "actual_sound": "/ˈtɛl.ə.vɪʒ.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtɛl.ə.vɪʒ.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtɛl.ə.vɪʒ.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "television 發音為 /ˈtɛl.ə.vɪʒ.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "television"
      ]
    }
  },
  "tell": {
    "word": "tell",
    "ipa": "/tɛl/",
    "syllable": [
      "tell"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-847",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "tell",
    "actual_sound": "/tɛl/",
    "note": "自然發音推導例外，美式標準音標為 /tɛl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tɛl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "tell 發音為 /tɛl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tell"
      ]
    }
  },
  "temple": {
    "word": "temple",
    "ipa": "/ˈtɛm.pəl/",
    "syllable": [
      "tem",
      "ple"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-848",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "temple",
    "actual_sound": "/ˈtɛm.pəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtɛm.pəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtɛm.pəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "temple 發音為 /ˈtɛm.pəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "temple"
      ]
    }
  },
  "ten": {
    "word": "ten",
    "ipa": "/tɛn/",
    "syllable": [
      "ten"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-849",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "ten",
    "actual_sound": "/tɛn/",
    "note": "自然發音推導例外，美式標準音標為 /tɛn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tɛn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "ten 發音為 /tɛn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ten"
      ]
    }
  },
  "tennis": {
    "word": "tennis",
    "ipa": "/ˈtɛn.ɪs/",
    "syllable": [
      "ten",
      "nis"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-850",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "tennis",
    "actual_sound": "/ˈtɛn.ɪs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtɛn.ɪs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtɛn.ɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "tennis 發音為 /ˈtɛn.ɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tennis"
      ]
    }
  },
  "tenth": {
    "word": "tenth",
    "ipa": "/tɛnθ/",
    "syllable": [
      "tenth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-851",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "tenth",
    "actual_sound": "/tɛnθ/",
    "note": "自然發音推導例外，美式標準音標為 /tɛnθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tɛnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "tenth 發音為 /tɛnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tenth"
      ]
    }
  },
  "terrible": {
    "word": "terrible",
    "ipa": "/ˈtɛr.ə.bəl/",
    "syllable": [
      "ter",
      "ri",
      "ble"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-852",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "terrible",
    "actual_sound": "/ˈtɛr.ə.bəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtɛr.ə.bəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtɛr.ə.bəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "terrible 發音為 /ˈtɛr.ə.bəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "terrible"
      ]
    }
  },
  "test": {
    "word": "test",
    "ipa": "/tɛst/",
    "syllable": [
      "test"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-853",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "test",
    "actual_sound": "/tɛst/",
    "note": "自然發音推導例外，美式標準音標為 /tɛst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tɛst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "test 發音為 /tɛst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "test"
      ]
    }
  },
  "than": {
    "word": "than",
    "ipa": "/ðæn/",
    "syllable": [
      "than"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-854",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "than",
    "actual_sound": "/ðæn/",
    "note": "自然發音推導例外，美式標準音標為 /ðæn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðæn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "than 發音為 /ðæn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "than"
      ]
    }
  },
  "thank": {
    "word": "thank",
    "ipa": "/θæŋk/",
    "syllable": [
      "thank"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-855",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "thank",
    "actual_sound": "/θæŋk/",
    "note": "自然發音推導例外，美式標準音標為 /θæŋk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/θæŋk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "thank 發音為 /θæŋk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "thank"
      ]
    }
  },
  "that": {
    "word": "that",
    "ipa": "/ðæt/",
    "syllable": [
      "that"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-856",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "that",
    "actual_sound": "/ðæt/",
    "note": "自然發音推導例外，美式標準音標為 /ðæt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðæt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "that 發音為 /ðæt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "that"
      ]
    }
  },
  "the": {
    "word": "the",
    "ipa": "/ðə/",
    "syllable": [
      "the"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-857",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "the",
    "actual_sound": "/ðə/",
    "note": "自然發音推導例外，美式標準音標為 /ðə/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "the 發音為 /ðə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "the"
      ]
    }
  },
  "theater": {
    "word": "theater",
    "ipa": "/ˈθiː.ə.t̬ɚ/",
    "syllable": [
      "the",
      "a",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-858",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "theater",
    "actual_sound": "/ˈθiː.ə.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈθiː.ə.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈθiː.ə.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "theater 發音為 /ˈθiː.ə.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "theater"
      ]
    }
  },
  "then": {
    "word": "then",
    "ipa": "/ðɛn/",
    "syllable": [
      "then"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-859",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "then",
    "actual_sound": "/ðɛn/",
    "note": "自然發音推導例外，美式標準音標為 /ðɛn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðɛn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "then 發音為 /ðɛn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "then"
      ]
    }
  },
  "there": {
    "word": "there",
    "ipa": "/ðɛr/",
    "syllable": [
      "there"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-860",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "there",
    "actual_sound": "/ðɛr/",
    "note": "自然發音推導例外，美式標準音標為 /ðɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "there 發音為 /ðɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "there"
      ]
    }
  },
  "these": {
    "word": "these",
    "ipa": "/ðiːz/",
    "syllable": [
      "these"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-861",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "these",
    "actual_sound": "/ðiːz/",
    "note": "自然發音推導例外，美式標準音標為 /ðiːz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðiːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "these 發音為 /ðiːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "these"
      ]
    }
  },
  "they": {
    "word": "they",
    "ipa": "/ðeɪ/",
    "syllable": [
      "they"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-862",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "they",
    "actual_sound": "/ðeɪ/",
    "note": "自然發音推導例外，美式標準音標為 /ðeɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðeɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "they 發音為 /ðeɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "they"
      ]
    }
  },
  "think": {
    "word": "think",
    "ipa": "/θɪŋk/",
    "syllable": [
      "think"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-863",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "think",
    "actual_sound": "/θɪŋk/",
    "note": "自然發音推導例外，美式標準音標為 /θɪŋk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/θɪŋk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "think 發音為 /θɪŋk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "think"
      ]
    }
  },
  "third": {
    "word": "third",
    "ipa": "/θɝːd/",
    "syllable": [
      "third"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-864",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "third",
    "actual_sound": "/θɝːd/",
    "note": "自然發音推導例外，美式標準音標為 /θɝːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/θɝːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "third 發音為 /θɝːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "third"
      ]
    }
  },
  "thirsty": {
    "word": "thirsty",
    "ipa": "/ˈθɝː.sti/",
    "syllable": [
      "thirst",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-865",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "thirsty",
    "actual_sound": "/ˈθɝː.sti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈθɝː.sti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈθɝː.sti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "thirsty 發音為 /ˈθɝː.sti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "thirsty"
      ]
    }
  },
  "thirteen": {
    "word": "thirteen",
    "ipa": "/ˌθɝːˈtiːn/",
    "syllable": [
      "thir",
      "teen"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-866",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "thirteen",
    "actual_sound": "/ˌθɝːˈtiːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌθɝːˈtiːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌθɝːˈtiːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "thirteen 發音為 /ˌθɝːˈtiːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "thirteen"
      ]
    }
  },
  "thirteenth": {
    "word": "thirteenth",
    "ipa": "/ˌθɝːˈtiːnθ/",
    "syllable": [
      "thir",
      "teenth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-867",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "thirteenth",
    "actual_sound": "/ˌθɝːˈtiːnθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌθɝːˈtiːnθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌθɝːˈtiːnθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "thirteenth 發音為 /ˌθɝːˈtiːnθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "thirteenth"
      ]
    }
  },
  "thirty": {
    "word": "thirty",
    "ipa": "/ˈθɝː.ti/",
    "syllable": [
      "thir",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-868",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "thirty",
    "actual_sound": "/ˈθɝː.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈθɝː.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈθɝː.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "thirty 發音為 /ˈθɝː.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "thirty"
      ]
    }
  },
  "this": {
    "word": "this",
    "ipa": "/ðɪs/",
    "syllable": [
      "this"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-869",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "this",
    "actual_sound": "/ðɪs/",
    "note": "自然發音推導例外，美式標準音標為 /ðɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "this 發音為 /ðɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "this"
      ]
    }
  },
  "throat": {
    "word": "throat",
    "ipa": "/θroʊt/",
    "syllable": [
      "throat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-870",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "throat",
    "actual_sound": "/θroʊt/",
    "note": "自然發音推導例外，美式標準音標為 /θroʊt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/θroʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "throat 發音為 /θroʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "throat"
      ]
    }
  },
  "throw": {
    "word": "throw",
    "ipa": "/θroʊ/",
    "syllable": [
      "throw"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-871",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "throw",
    "actual_sound": "/θroʊ/",
    "note": "自然發音推導例外，美式標準音標為 /θroʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/θroʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "throw 發音為 /θroʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "throw"
      ]
    }
  },
  "those": {
    "word": "those",
    "ipa": "/ðoʊz/",
    "syllable": [
      "those"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-872",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "those",
    "actual_sound": "/ðoʊz/",
    "note": "自然發音推導例外，美式標準音標為 /ðoʊz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðoʊz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "those 發音為 /ðoʊz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "those"
      ]
    }
  },
  "though": {
    "word": "though",
    "ipa": "/ðoʊ/",
    "syllable": [
      "though"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-873",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "though",
    "actual_sound": "/ðoʊ/",
    "note": "自然發音推導例外，美式標準音標為 /ðoʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ðoʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "though 發音為 /ðoʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "though"
      ]
    }
  },
  "thousand": {
    "word": "thousand",
    "ipa": "/ˈθaʊ.zənd/",
    "syllable": [
      "thou",
      "sand"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-874",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "thousand",
    "actual_sound": "/ˈθaʊ.zənd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈθaʊ.zənd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈθaʊ.zənd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "thousand 發音為 /ˈθaʊ.zənd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "thousand"
      ]
    }
  },
  "three": {
    "word": "three",
    "ipa": "/θriː/",
    "syllable": [
      "three"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-875",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "three",
    "actual_sound": "/θriː/",
    "note": "自然發音推導例外，美式標準音標為 /θriː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/θriː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "three 發音為 /θriː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "three"
      ]
    }
  },
  "thursday": {
    "word": "Thursday",
    "ipa": "/ˈθɝːz.deɪ/",
    "syllable": [
      "Thurs",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-876",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Thursday",
    "actual_sound": "/ˈθɝːz.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈθɝːz.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈθɝːz.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Thursday 發音為 /ˈθɝːz.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Thursday"
      ]
    }
  },
  "ticket": {
    "word": "ticket",
    "ipa": "/ˈtɪk.ɪt/",
    "syllable": [
      "tick",
      "et"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-877",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "ticket",
    "actual_sound": "/ˈtɪk.ɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtɪk.ɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtɪk.ɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "ticket 發音為 /ˈtɪk.ɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "ticket"
      ]
    }
  },
  "tidy": {
    "word": "tidy",
    "ipa": "/ˈtaɪ.di/",
    "syllable": [
      "ti",
      "dy"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-878",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "tidy",
    "actual_sound": "/ˈtaɪ.di/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtaɪ.di/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtaɪ.di/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "tidy 發音為 /ˈtaɪ.di/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tidy"
      ]
    }
  },
  "tiger": {
    "word": "tiger",
    "ipa": "/ˈtaɪ.ɡɚ/",
    "syllable": [
      "ti",
      "ger"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-879",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "tiger",
    "actual_sound": "/ˈtaɪ.ɡɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtaɪ.ɡɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtaɪ.ɡɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "tiger 發音為 /ˈtaɪ.ɡɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tiger"
      ]
    }
  },
  "tie": {
    "word": "tie",
    "ipa": "/taɪ/",
    "syllable": [
      "tie"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-880",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "tie",
    "actual_sound": "/taɪ/",
    "note": "自然發音推導例外，美式標準音標為 /taɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/taɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "tie 發音為 /taɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tie"
      ]
    }
  },
  "tired": {
    "word": "tired",
    "ipa": "/ˈtaɪ.ɚd/",
    "syllable": [
      "tired"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-881",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "tired",
    "actual_sound": "/ˈtaɪ.ɚd/",
    "note": "自然發音推導例外，美式標準音標為 /ˈtaɪ.ɚd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/ˈtaɪ.ɚd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "tired 發音為 /ˈtaɪ.ɚd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tired"
      ]
    }
  },
  "toast": {
    "word": "toast",
    "ipa": "/toʊst/",
    "syllable": [
      "toast"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-882",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "toast",
    "actual_sound": "/toʊst/",
    "note": "自然發音推導例外，美式標準音標為 /toʊst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/toʊst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "toast 發音為 /toʊst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "toast"
      ]
    }
  },
  "today": {
    "word": "today",
    "ipa": "/təˈdeɪ/",
    "syllable": [
      "to",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-883",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "today",
    "actual_sound": "/təˈdeɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /təˈdeɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/təˈdeɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "today 發音為 /təˈdeɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "today"
      ]
    }
  },
  "toe": {
    "word": "toe",
    "ipa": "/toʊ/",
    "syllable": [
      "toe"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-884",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "toe",
    "actual_sound": "/toʊ/",
    "note": "自然發音推導例外，美式標準音標為 /toʊ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/toʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "toe 發音為 /toʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "toe"
      ]
    }
  },
  "together": {
    "word": "together",
    "ipa": "/təˈɡɛð.ɚ/",
    "syllable": [
      "to",
      "geth",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-885",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "together",
    "actual_sound": "/təˈɡɛð.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /təˈɡɛð.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/təˈɡɛð.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "together 發音為 /təˈɡɛð.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "together"
      ]
    }
  },
  "tomato": {
    "word": "tomato",
    "ipa": "/təˈmeɪ.toʊ/",
    "syllable": [
      "to",
      "ma",
      "to"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-886",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "tomato",
    "actual_sound": "/təˈmeɪ.toʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /təˈmeɪ.toʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/təˈmeɪ.toʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "tomato 發音為 /təˈmeɪ.toʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tomato"
      ]
    }
  },
  "tomorrow": {
    "word": "tomorrow",
    "ipa": "/təˈmɑː.roʊ/",
    "syllable": [
      "to",
      "mor",
      "row"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-887",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "tomorrow",
    "actual_sound": "/təˈmɑː.roʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /təˈmɑː.roʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/təˈmɑː.roʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "tomorrow 發音為 /təˈmɑː.roʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tomorrow"
      ]
    }
  },
  "tonight": {
    "word": "tonight",
    "ipa": "/təˈnaɪt/",
    "syllable": [
      "to",
      "night"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-888",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "tonight",
    "actual_sound": "/təˈnaɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /təˈnaɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/təˈnaɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "tonight 發音為 /təˈnaɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tonight"
      ]
    }
  },
  "too": {
    "word": "too",
    "ipa": "/tuː/",
    "syllable": [
      "too"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-889",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "too",
    "actual_sound": "/tuː/",
    "note": "自然發音推導例外，美式標準音標為 /tuː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tuː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "too 發音為 /tuː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "too"
      ]
    }
  },
  "tooth": {
    "word": "tooth",
    "ipa": "/tuːθ/",
    "syllable": [
      "tooth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-890",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "tooth",
    "actual_sound": "/tuːθ/",
    "note": "自然發音推導例外，美式標準音標為 /tuːθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tuːθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "tooth 發音為 /tuːθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tooth"
      ]
    }
  },
  "top": {
    "word": "top",
    "ipa": "/tɑːp/",
    "syllable": [
      "top"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-891",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "top",
    "actual_sound": "/tɑːp/",
    "note": "自然發音推導例外，美式標準音標為 /tɑːp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tɑːp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "top 發音為 /tɑːp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "top"
      ]
    }
  },
  "total": {
    "word": "total",
    "ipa": "/ˈtoʊ.təl/",
    "syllable": [
      "to",
      "tal"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-892",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "total",
    "actual_sound": "/ˈtoʊ.təl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtoʊ.təl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtoʊ.təl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "total 發音為 /ˈtoʊ.təl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "total"
      ]
    }
  },
  "touch": {
    "word": "touch",
    "ipa": "/tʌtʃ/",
    "syllable": [
      "touch"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-893",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "touch",
    "actual_sound": "/tʌtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /tʌtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tʌtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "touch 發音為 /tʌtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "touch"
      ]
    }
  },
  "towel": {
    "word": "towel",
    "ipa": "/ˈtaʊ.əl/",
    "syllable": [
      "tow",
      "el"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-894",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "towel",
    "actual_sound": "/ˈtaʊ.əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtaʊ.əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtaʊ.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "towel 發音為 /ˈtaʊ.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "towel"
      ]
    }
  },
  "town": {
    "word": "town",
    "ipa": "/taʊn/",
    "syllable": [
      "town"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-895",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "town",
    "actual_sound": "/taʊn/",
    "note": "自然發音推導例外，美式標準音標為 /taʊn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/taʊn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "town 發音為 /taʊn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "town"
      ]
    }
  },
  "traffic": {
    "word": "traffic",
    "ipa": "/ˈtræf.ɪk/",
    "syllable": [
      "traf",
      "fic"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-896",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "traffic",
    "actual_sound": "/ˈtræf.ɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtræf.ɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtræf.ɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "traffic 發音為 /ˈtræf.ɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "traffic"
      ]
    }
  },
  "treat": {
    "word": "treat",
    "ipa": "/triːt/",
    "syllable": [
      "treat"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-897",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "treat",
    "actual_sound": "/triːt/",
    "note": "自然發音推導例外，美式標準音標為 /triːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/triːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "treat 發音為 /triːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "treat"
      ]
    }
  },
  "tree": {
    "word": "tree",
    "ipa": "/triː/",
    "syllable": [
      "tree"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-898",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "tree",
    "actual_sound": "/triː/",
    "note": "自然發音推導例外，美式標準音標為 /triː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/triː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "tree 發音為 /triː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "tree"
      ]
    }
  },
  "trouble": {
    "word": "trouble",
    "ipa": "/ˈtrʌb.əl/",
    "syllable": [
      "trou",
      "ble"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-899",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "trouble",
    "actual_sound": "/ˈtrʌb.əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtrʌb.əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtrʌb.əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "trouble 發音為 /ˈtrʌb.əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "trouble"
      ]
    }
  },
  "true": {
    "word": "true",
    "ipa": "/truː/",
    "syllable": [
      "true"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-900",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "true",
    "actual_sound": "/truː/",
    "note": "自然發音推導例外，美式標準音標為 /truː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/truː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "true 發音為 /truː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "true"
      ]
    }
  },
  "try": {
    "word": "try",
    "ipa": "/traɪ/",
    "syllable": [
      "try"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-901",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "try",
    "actual_sound": "/traɪ/",
    "note": "自然發音推導例外，美式標準音標為 /traɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/traɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "try 發音為 /traɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "try"
      ]
    }
  },
  "t-shirt": {
    "word": "T-shirt",
    "ipa": "/ˈtiː.ʃɝːt/",
    "syllable": [
      "T",
      "shirt"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-902",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "T-shirt",
    "actual_sound": "/ˈtiː.ʃɝːt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtiː.ʃɝːt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtiː.ʃɝːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "T-shirt 發音為 /ˈtiː.ʃɝːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "T-shirt"
      ]
    }
  },
  "tuesday": {
    "word": "Tuesday",
    "ipa": "/ˈtuːz.deɪ/",
    "syllable": [
      "Tues",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-903",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Tuesday",
    "actual_sound": "/ˈtuːz.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtuːz.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtuːz.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Tuesday 發音為 /ˈtuːz.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Tuesday"
      ]
    }
  },
  "turkey": {
    "word": "turkey",
    "ipa": "/ˈtɝː.ki/",
    "syllable": [
      "tur",
      "key"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-904",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "turkey",
    "actual_sound": "/ˈtɝː.ki/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtɝː.ki/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtɝː.ki/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "turkey 發音為 /ˈtɝː.ki/，對應 EPRS R010 特殊例外",
      "related_words": [
        "turkey"
      ]
    }
  },
  "turn": {
    "word": "turn",
    "ipa": "/tɝːn/",
    "syllable": [
      "turn"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-905",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "turn",
    "actual_sound": "/tɝːn/",
    "note": "自然發音推導例外，美式標準音標為 /tɝːn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/tɝːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "turn 發音為 /tɝːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "turn"
      ]
    }
  },
  "turtle": {
    "word": "turtle",
    "ipa": "/ˈtɝː.t̬əl/",
    "syllable": [
      "tur",
      "tle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-906",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "turtle",
    "actual_sound": "/ˈtɝː.t̬əl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtɝː.t̬əl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtɝː.t̬əl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "turtle 發音為 /ˈtɝː.t̬əl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "turtle"
      ]
    }
  },
  "twelfth": {
    "word": "twelfth",
    "ipa": "/twɛlfθ/",
    "syllable": [
      "twelfth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-907",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "twelfth",
    "actual_sound": "/twɛlfθ/",
    "note": "自然發音推導例外，美式標準音標為 /twɛlfθ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/twɛlfθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "twelfth 發音為 /twɛlfθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "twelfth"
      ]
    }
  },
  "twelve": {
    "word": "twelve",
    "ipa": "/twɛlv/",
    "syllable": [
      "twelve"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-908",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "twelve",
    "actual_sound": "/twɛlv/",
    "note": "自然發音推導例外，美式標準音標為 /twɛlv/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/twɛlv/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "twelve 發音為 /twɛlv/，對應 EPRS R010 特殊例外",
      "related_words": [
        "twelve"
      ]
    }
  },
  "twenty": {
    "word": "twenty",
    "ipa": "/ˈtwɛn.ti/",
    "syllable": [
      "twen",
      "ty"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-909",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "twenty",
    "actual_sound": "/ˈtwɛn.ti/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtwɛn.ti/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtwɛn.ti/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "twenty 發音為 /ˈtwɛn.ti/，對應 EPRS R010 特殊例外",
      "related_words": [
        "twenty"
      ]
    }
  },
  "twentieth": {
    "word": "twentieth",
    "ipa": "/ˈtwɛn.ti.əθ/",
    "syllable": [
      "twen",
      "ti",
      "eth"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-910",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "twentieth",
    "actual_sound": "/ˈtwɛn.ti.əθ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtwɛn.ti.əθ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtwɛn.ti.əθ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "twentieth 發音為 /ˈtwɛn.ti.əθ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "twentieth"
      ]
    }
  },
  "twice": {
    "word": "twice",
    "ipa": "/twaɪs/",
    "syllable": [
      "twice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-911",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "twice",
    "actual_sound": "/twaɪs/",
    "note": "自然發音推導例外，美式標準音標為 /twaɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/twaɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "twice 發音為 /twaɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "twice"
      ]
    }
  },
  "type": {
    "word": "type",
    "ipa": "/taɪp/",
    "syllable": [
      "type"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-912",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "type",
    "actual_sound": "/taɪp/",
    "note": "自然發音推導例外，美式標準音標為 /taɪp/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/taɪp/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "type 發音為 /taɪp/，對應 EPRS R010 特殊例外",
      "related_words": [
        "type"
      ]
    }
  },
  "typhoon": {
    "word": "typhoon",
    "ipa": "/taɪˈfuːn/",
    "syllable": [
      "ty",
      "phoon"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-913",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "typhoon",
    "actual_sound": "/taɪˈfuːn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /taɪˈfuːn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/taɪˈfuːn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "typhoon 發音為 /taɪˈfuːn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "typhoon"
      ]
    }
  },
  "umbrella": {
    "word": "umbrella",
    "ipa": "/ʌmˈbrɛl.ə/",
    "syllable": [
      "um",
      "brel",
      "la"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-914",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "umbrella",
    "actual_sound": "/ʌmˈbrɛl.ə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ʌmˈbrɛl.ə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ʌmˈbrɛl.ə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "umbrella 發音為 /ʌmˈbrɛl.ə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "umbrella"
      ]
    }
  },
  "uncle": {
    "word": "uncle",
    "ipa": "/ˈʌŋ.kəl/",
    "syllable": [
      "un",
      "cle"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-915",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "uncle",
    "actual_sound": "/ˈʌŋ.kəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈʌŋ.kəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈʌŋ.kəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "uncle 發音為 /ˈʌŋ.kəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "uncle"
      ]
    }
  },
  "under": {
    "word": "under",
    "ipa": "/ˈʌn.dɚ/",
    "syllable": [
      "un",
      "der"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-916",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "under",
    "actual_sound": "/ˈʌn.dɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈʌn.dɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈʌn.dɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "under 發音為 /ˈʌn.dɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "under"
      ]
    }
  },
  "understand": {
    "word": "understand",
    "ipa": "/ˌʌn.dɚˈstænd/",
    "syllable": [
      "un",
      "der",
      "stand"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-917",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "understand",
    "actual_sound": "/ˌʌn.dɚˈstænd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌʌn.dɚˈstænd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌʌn.dɚˈstænd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "understand 發音為 /ˌʌn.dɚˈstænd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "understand"
      ]
    }
  },
  "unhappy": {
    "word": "unhappy",
    "ipa": "/ʌnˈhæp.i/",
    "syllable": [
      "un",
      "hap",
      "py"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-918",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "unhappy",
    "actual_sound": "/ʌnˈhæp.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ʌnˈhæp.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ʌnˈhæp.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "unhappy 發音為 /ʌnˈhæp.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "unhappy"
      ]
    }
  },
  "uniform": {
    "word": "uniform",
    "ipa": "/ˈjuː.nə.fɔːrm/",
    "syllable": [
      "u",
      "ni",
      "form"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-919",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "uniform",
    "actual_sound": "/ˈjuː.nə.fɔːrm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈjuː.nə.fɔːrm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈjuː.nə.fɔːrm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "uniform 發音為 /ˈjuː.nə.fɔːrm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "uniform"
      ]
    }
  },
  "until": {
    "word": "until",
    "ipa": "/ənˈtɪl/",
    "syllable": [
      "un",
      "til"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-920",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "until",
    "actual_sound": "/ənˈtɪl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ənˈtɪl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ənˈtɪl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "until 發音為 /ənˈtɪl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "until"
      ]
    }
  },
  "usa": {
    "word": "USA",
    "ipa": "/ˌjuː.ɛsˈeɪ/",
    "syllable": [
      "U",
      "S",
      "A"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-921",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "USA",
    "actual_sound": "/ˌjuː.ɛsˈeɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌjuː.ɛsˈeɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌjuː.ɛsˈeɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "USA 發音為 /ˌjuː.ɛsˈeɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "USA"
      ]
    }
  },
  "use": {
    "word": "use",
    "ipa": "/juːz/",
    "syllable": [
      "use"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-922",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "use",
    "actual_sound": "/juːz/",
    "note": "自然發音推導例外，美式標準音標為 /juːz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/juːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "use 發音為 /juːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "use"
      ]
    }
  },
  "useful": {
    "word": "useful",
    "ipa": "/ˈjuːs.fəl/",
    "syllable": [
      "use",
      "ful"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-923",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "useful",
    "actual_sound": "/ˈjuːs.fəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈjuːs.fəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈjuːs.fəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "useful 發音為 /ˈjuːs.fəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "useful"
      ]
    }
  },
  "usually": {
    "word": "usually",
    "ipa": "/ˈjuː.ʒu.ə.li/",
    "syllable": [
      "u",
      "su",
      "al",
      "ly"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-924",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "usually",
    "actual_sound": "/ˈjuː.ʒu.ə.li/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈjuː.ʒu.ə.li/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈjuː.ʒu.ə.li/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "usually 發音為 /ˈjuː.ʒu.ə.li/，對應 EPRS R010 特殊例外",
      "related_words": [
        "usually"
      ]
    }
  },
  "vacation": {
    "word": "vacation",
    "ipa": "/veɪˈkeɪ.ʃən/",
    "syllable": [
      "va",
      "ca",
      "tion"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-925",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "vacation",
    "actual_sound": "/veɪˈkeɪ.ʃən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /veɪˈkeɪ.ʃən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/veɪˈkeɪ.ʃən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "vacation 發音為 /veɪˈkeɪ.ʃən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "vacation"
      ]
    }
  },
  "vegetable": {
    "word": "vegetable",
    "ipa": "/ˈvɛdʒ.tə.bəl/",
    "syllable": [
      "veg",
      "e",
      "ta",
      "ble"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-926",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "vegetable",
    "actual_sound": "/ˈvɛdʒ.tə.bəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈvɛdʒ.tə.bəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈvɛdʒ.tə.bəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "vegetable 發音為 /ˈvɛdʒ.tə.bəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "vegetable"
      ]
    }
  },
  "very": {
    "word": "very",
    "ipa": "/ˈvɛr.i/",
    "syllable": [
      "ver",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-927",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "very",
    "actual_sound": "/ˈvɛr.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈvɛr.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈvɛr.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "very 發音為 /ˈvɛr.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "very"
      ]
    }
  },
  "vest": {
    "word": "vest",
    "ipa": "/vɛst/",
    "syllable": [
      "vest"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-928",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "vest",
    "actual_sound": "/vɛst/",
    "note": "自然發音推導例外，美式標準音標為 /vɛst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/vɛst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "vest 發音為 /vɛst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "vest"
      ]
    }
  },
  "video": {
    "word": "video",
    "ipa": "/ˈvɪd.i.oʊ/",
    "syllable": [
      "vid",
      "e",
      "o"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-929",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "video",
    "actual_sound": "/ˈvɪd.i.oʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈvɪd.i.oʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈvɪd.i.oʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "video 發音為 /ˈvɪd.i.oʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "video"
      ]
    }
  },
  "violin": {
    "word": "violin",
    "ipa": "/ˌvaɪ.əˈlɪn/",
    "syllable": [
      "vi",
      "o",
      "lin"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-930",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "violin",
    "actual_sound": "/ˌvaɪ.əˈlɪn/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˌvaɪ.əˈlɪn/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˌvaɪ.əˈlɪn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "violin 發音為 /ˌvaɪ.əˈlɪn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "violin"
      ]
    }
  },
  "visit": {
    "word": "visit",
    "ipa": "/ˈvɪz.ɪt/",
    "syllable": [
      "vis",
      "it"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-931",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "visit",
    "actual_sound": "/ˈvɪz.ɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈvɪz.ɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈvɪz.ɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "visit 發音為 /ˈvɪz.ɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "visit"
      ]
    }
  },
  "voice": {
    "word": "voice",
    "ipa": "/vɔɪs/",
    "syllable": [
      "voice"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-932",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "voice",
    "actual_sound": "/vɔɪs/",
    "note": "自然發音推導例外，美式標準音標為 /vɔɪs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/vɔɪs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "voice 發音為 /vɔɪs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "voice"
      ]
    }
  },
  "waiter": {
    "word": "waiter",
    "ipa": "/ˈweɪ.t̬ɚ/",
    "syllable": [
      "wait",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-933",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "waiter",
    "actual_sound": "/ˈweɪ.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈweɪ.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈweɪ.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "waiter 發音為 /ˈweɪ.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "waiter"
      ]
    }
  },
  "waitress": {
    "word": "waitress",
    "ipa": "/ˈweɪ.trəs/",
    "syllable": [
      "wait",
      "ress"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-934",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "waitress",
    "actual_sound": "/ˈweɪ.trəs/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈweɪ.trəs/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈweɪ.trəs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "waitress 發音為 /ˈweɪ.trəs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "waitress"
      ]
    }
  },
  "walk": {
    "word": "walk",
    "ipa": "/wɑːk/",
    "syllable": [
      "walk"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-935",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "walk",
    "actual_sound": "/wɑːk/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /wɑːk/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/wɑːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "walk 發音為 /wɑːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "walk"
      ]
    }
  },
  "wall": {
    "word": "wall",
    "ipa": "/wɑːl/",
    "syllable": [
      "wall"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-936",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "wall",
    "actual_sound": "/wɑːl/",
    "note": "自然發音推導例外，美式標準音標為 /wɑːl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɑːl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "wall 發音為 /wɑːl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "wall"
      ]
    }
  },
  "wallet": {
    "word": "wallet",
    "ipa": "/ˈwɑː.lɪt/",
    "syllable": [
      "wal",
      "let"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-937",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "wallet",
    "actual_sound": "/ˈwɑː.lɪt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɑː.lɪt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɑː.lɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "wallet 發音為 /ˈwɑː.lɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "wallet"
      ]
    }
  },
  "want": {
    "word": "want",
    "ipa": "/wɑːnt/",
    "syllable": [
      "want"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-938",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "want",
    "actual_sound": "/wɑːnt/",
    "note": "自然發音推導例外，美式標準音標為 /wɑːnt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɑːnt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "want 發音為 /wɑːnt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "want"
      ]
    }
  },
  "warm": {
    "word": "warm",
    "ipa": "/wɔːrm/",
    "syllable": [
      "warm"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-939",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "warm",
    "actual_sound": "/wɔːrm/",
    "note": "自然發音推導例外，美式標準音標為 /wɔːrm/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɔːrm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "warm 發音為 /wɔːrm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "warm"
      ]
    }
  },
  "wash": {
    "word": "wash",
    "ipa": "/wɑːʃ/",
    "syllable": [
      "wash"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-940",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "wash",
    "actual_sound": "/wɑːʃ/",
    "note": "自然發音推導例外，美式標準音標為 /wɑːʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɑːʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "wash 發音為 /wɑːʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "wash"
      ]
    }
  },
  "watch": {
    "word": "watch",
    "ipa": "/wɑːtʃ/",
    "syllable": [
      "watch"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-941",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "watch",
    "actual_sound": "/wɑːtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /wɑːtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɑːtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "watch 發音為 /wɑːtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "watch"
      ]
    }
  },
  "water": {
    "word": "water",
    "ipa": "/ˈwɑː.t̬ɚ/",
    "syllable": [
      "wa",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-942",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "water",
    "actual_sound": "/ˈwɑː.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɑː.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɑː.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "water 發音為 /ˈwɑː.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "water"
      ]
    }
  },
  "watermelon": {
    "word": "watermelon",
    "ipa": "/ˈwɑː.t̬ɚˌmɛl.ən/",
    "syllable": [
      "wa",
      "ter",
      "mel",
      "on"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-943",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "watermelon",
    "actual_sound": "/ˈwɑː.t̬ɚˌmɛl.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɑː.t̬ɚˌmɛl.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɑː.t̬ɚˌmɛl.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "watermelon 發音為 /ˈwɑː.t̬ɚˌmɛl.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "watermelon"
      ]
    }
  },
  "we": {
    "word": "we",
    "ipa": "/wiː/",
    "syllable": [
      "we"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-944",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "we",
    "actual_sound": "/wiː/",
    "note": "自然發音推導例外，美式標準音標為 /wiː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wiː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "we 發音為 /wiː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "we"
      ]
    }
  },
  "weak": {
    "word": "weak",
    "ipa": "/wiːk/",
    "syllable": [
      "weak"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-945",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "weak",
    "actual_sound": "/wiːk/",
    "note": "自然發音推導例外，美式標準音標為 /wiːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wiːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "weak 發音為 /wiːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "weak"
      ]
    }
  },
  "wear": {
    "word": "wear",
    "ipa": "/wɛr/",
    "syllable": [
      "wear"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-946",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "wear",
    "actual_sound": "/wɛr/",
    "note": "自然發音推導例外，美式標準音標為 /wɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "wear 發音為 /wɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "wear"
      ]
    }
  },
  "weather": {
    "word": "weather",
    "ipa": "/ˈwɛð.ɚ/",
    "syllable": [
      "weath",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-947",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "weather",
    "actual_sound": "/ˈwɛð.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɛð.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɛð.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "weather 發音為 /ˈwɛð.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "weather"
      ]
    }
  },
  "wednesday": {
    "word": "Wednesday",
    "ipa": "/ˈwɛnz.deɪ/",
    "syllable": [
      "Wednes",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-948",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "Wednesday",
    "actual_sound": "/ˈwɛnz.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɛnz.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɛnz.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "Wednesday 發音為 /ˈwɛnz.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "Wednesday"
      ]
    }
  },
  "week": {
    "word": "week",
    "ipa": "/wiːk/",
    "syllable": [
      "week"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-949",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "week",
    "actual_sound": "/wiːk/",
    "note": "自然發音推導例外，美式標準音標為 /wiːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wiːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "week 發音為 /wiːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "week"
      ]
    }
  },
  "weekend": {
    "word": "weekend",
    "ipa": "/ˈwiːk.ɛnd/",
    "syllable": [
      "week",
      "end"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-950",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "weekend",
    "actual_sound": "/ˈwiːk.ɛnd/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwiːk.ɛnd/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwiːk.ɛnd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "weekend 發音為 /ˈwiːk.ɛnd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "weekend"
      ]
    }
  },
  "welcome": {
    "word": "welcome",
    "ipa": "/ˈwɛl.kəm/",
    "syllable": [
      "wel",
      "come"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-951",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "welcome",
    "actual_sound": "/ˈwɛl.kəm/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɛl.kəm/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɛl.kəm/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "welcome 發音為 /ˈwɛl.kəm/，對應 EPRS R010 特殊例外",
      "related_words": [
        "welcome"
      ]
    }
  },
  "well": {
    "word": "well",
    "ipa": "/wɛl/",
    "syllable": [
      "well"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-952",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "well",
    "actual_sound": "/wɛl/",
    "note": "自然發音推導例外，美式標準音標為 /wɛl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɛl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "well 發音為 /wɛl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "well"
      ]
    }
  },
  "west": {
    "word": "west",
    "ipa": "/wɛst/",
    "syllable": [
      "west"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-953",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "west",
    "actual_sound": "/wɛst/",
    "note": "自然發音推導例外，美式標準音標為 /wɛst/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɛst/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "west 發音為 /wɛst/，對應 EPRS R010 特殊例外",
      "related_words": [
        "west"
      ]
    }
  },
  "wet": {
    "word": "wet",
    "ipa": "/wɛt/",
    "syllable": [
      "wet"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-954",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "wet",
    "actual_sound": "/wɛt/",
    "note": "自然發音推導例外，美式標準音標為 /wɛt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɛt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "wet 發音為 /wɛt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "wet"
      ]
    }
  },
  "whale": {
    "word": "whale",
    "ipa": "/weɪl/",
    "syllable": [
      "whale"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-955",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "whale",
    "actual_sound": "/weɪl/",
    "note": "自然發音推導例外，美式標準音標為 /weɪl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/weɪl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "whale 發音為 /weɪl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "whale"
      ]
    }
  },
  "what": {
    "word": "what",
    "ipa": "/wɑːt/",
    "syllable": [
      "what"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-956",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "what",
    "actual_sound": "/wɑːt/",
    "note": "自然發音推導例外，美式標準音標為 /wɑːt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɑːt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "what 發音為 /wɑːt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "what"
      ]
    }
  },
  "when": {
    "word": "when",
    "ipa": "/wɛn/",
    "syllable": [
      "when"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-957",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "when",
    "actual_sound": "/wɛn/",
    "note": "自然發音推導例外，美式標準音標為 /wɛn/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɛn/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "when 發音為 /wɛn/，對應 EPRS R010 特殊例外",
      "related_words": [
        "when"
      ]
    }
  },
  "where": {
    "word": "where",
    "ipa": "/wɛr/",
    "syllable": [
      "where"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-958",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "where",
    "actual_sound": "/wɛr/",
    "note": "自然發音推導例外，美式標準音標為 /wɛr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɛr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "where 發音為 /wɛr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "where"
      ]
    }
  },
  "whether": {
    "word": "whether",
    "ipa": "/ˈwɛð.ɚ/",
    "syllable": [
      "wheth",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-959",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "whether",
    "actual_sound": "/ˈwɛð.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɛð.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɛð.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "whether 發音為 /ˈwɛð.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "whether"
      ]
    }
  },
  "which": {
    "word": "which",
    "ipa": "/wɪtʃ/",
    "syllable": [
      "which"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-960",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "which",
    "actual_sound": "/wɪtʃ/",
    "note": "自然發音推導例外，美式標準音標為 /wɪtʃ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɪtʃ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "which 發音為 /wɪtʃ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "which"
      ]
    }
  },
  "white": {
    "word": "white",
    "ipa": "/waɪt/",
    "syllable": [
      "white"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-961",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "white",
    "actual_sound": "/waɪt/",
    "note": "自然發音推導例外，美式標準音標為 /waɪt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/waɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "white 發音為 /waɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "white"
      ]
    }
  },
  "whose": {
    "word": "whose",
    "ipa": "/huːz/",
    "syllable": [
      "whose"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-962",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "whose",
    "actual_sound": "/huːz/",
    "note": "自然發音推導例外，美式標準音標為 /huːz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/huːz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "whose 發音為 /huːz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "whose"
      ]
    }
  },
  "why": {
    "word": "why",
    "ipa": "/waɪ/",
    "syllable": [
      "why"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-963",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "why",
    "actual_sound": "/waɪ/",
    "note": "自然發音推導例外，美式標準音標為 /waɪ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/waɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "why 發音為 /waɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "why"
      ]
    }
  },
  "will": {
    "word": "will",
    "ipa": "/wɪl/",
    "syllable": [
      "will"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-964",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "will",
    "actual_sound": "/wɪl/",
    "note": "自然發音推導例外，美式標準音標為 /wɪl/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɪl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "will 發音為 /wɪl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "will"
      ]
    }
  },
  "windy": {
    "word": "windy",
    "ipa": "/ˈwɪn.di/",
    "syllable": [
      "wind",
      "y"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-965",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "windy",
    "actual_sound": "/ˈwɪn.di/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɪn.di/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɪn.di/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "windy 發音為 /ˈwɪn.di/，對應 EPRS R010 特殊例外",
      "related_words": [
        "windy"
      ]
    }
  },
  "winter": {
    "word": "winter",
    "ipa": "/ˈwɪn.t̬ɚ/",
    "syllable": [
      "win",
      "ter"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-966",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "winter",
    "actual_sound": "/ˈwɪn.t̬ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɪn.t̬ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɪn.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "winter 發音為 /ˈwɪn.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "winter"
      ]
    }
  },
  "wise": {
    "word": "wise",
    "ipa": "/waɪz/",
    "syllable": [
      "wise"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-967",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "wise",
    "actual_sound": "/waɪz/",
    "note": "自然發音推導例外，美式標準音標為 /waɪz/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/waɪz/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "wise 發音為 /waɪz/，對應 EPRS R010 特殊例外",
      "related_words": [
        "wise"
      ]
    }
  },
  "with": {
    "word": "with",
    "ipa": "/wɪð/",
    "syllable": [
      "with"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-968",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "with",
    "actual_sound": "/wɪð/",
    "note": "自然發音推導例外，美式標準音標為 /wɪð/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɪð/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "with 發音為 /wɪð/，對應 EPRS R010 特殊例外",
      "related_words": [
        "with"
      ]
    }
  },
  "without": {
    "word": "without",
    "ipa": "/wɪˈðaʊt/",
    "syllable": [
      "with",
      "out"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-969",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "without",
    "actual_sound": "/wɪˈðaʊt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /wɪˈðaʊt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/wɪˈðaʊt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "without 發音為 /wɪˈðaʊt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "without"
      ]
    }
  },
  "woman": {
    "word": "woman",
    "ipa": "/ˈwʊm.ən/",
    "syllable": [
      "wom",
      "an"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-970",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "woman",
    "actual_sound": "/ˈwʊm.ən/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwʊm.ən/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwʊm.ən/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "woman 發音為 /ˈwʊm.ən/，對應 EPRS R010 特殊例外",
      "related_words": [
        "woman"
      ]
    }
  },
  "wonderful": {
    "word": "wonderful",
    "ipa": "/ˈwʌn.dɚ.fəl/",
    "syllable": [
      "won",
      "der",
      "ful"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-971",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "wonderful",
    "actual_sound": "/ˈwʌn.dɚ.fəl/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwʌn.dɚ.fəl/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwʌn.dɚ.fəl/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "wonderful 發音為 /ˈwʌn.dɚ.fəl/，對應 EPRS R010 特殊例外",
      "related_words": [
        "wonderful"
      ]
    }
  },
  "word": {
    "word": "word",
    "ipa": "/wɝːd/",
    "syllable": [
      "word"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-972",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "word",
    "actual_sound": "/wɝːd/",
    "note": "自然發音推導例外，美式標準音標為 /wɝːd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɝːd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "word 發音為 /wɝːd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "word"
      ]
    }
  },
  "work": {
    "word": "work",
    "ipa": "/wɝːk/",
    "syllable": [
      "work"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-973",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "work",
    "actual_sound": "/wɝːk/",
    "note": "自然發音推導例外，美式標準音標為 /wɝːk/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɝːk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "work 發音為 /wɝːk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "work"
      ]
    }
  },
  "workbook": {
    "word": "workbook",
    "ipa": "/ˈwɝːk.bʊk/",
    "syllable": [
      "work",
      "book"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-974",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "workbook",
    "actual_sound": "/ˈwɝːk.bʊk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɝːk.bʊk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɝːk.bʊk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "workbook 發音為 /ˈwɝːk.bʊk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "workbook"
      ]
    }
  },
  "worker": {
    "word": "worker",
    "ipa": "/ˈwɝːk.ɚ/",
    "syllable": [
      "work",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-975",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "worker",
    "actual_sound": "/ˈwɝːk.ɚ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɝːk.ɚ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɝːk.ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "worker 發音為 /ˈwɝːk.ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "worker"
      ]
    }
  },
  "world": {
    "word": "world",
    "ipa": "/wɝːld/",
    "syllable": [
      "world"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-976",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "world",
    "actual_sound": "/wɝːld/",
    "note": "自然發音推導例外，美式標準音標為 /wɝːld/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/wɝːld/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "world 發音為 /wɝːld/，對應 EPRS R010 特殊例外",
      "related_words": [
        "world"
      ]
    }
  },
  "worry": {
    "word": "worry",
    "ipa": "/ˈwɝː.i/",
    "syllable": [
      "wor",
      "ry"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-977",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "worry",
    "actual_sound": "/ˈwɝː.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈwɝː.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈwɝː.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "worry 發音為 /ˈwɝː.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "worry"
      ]
    }
  },
  "write": {
    "word": "write",
    "ipa": "/raɪt/",
    "syllable": [
      "write"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-978",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "write",
    "actual_sound": "/raɪt/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /raɪt/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/raɪt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "write 發音為 /raɪt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "write"
      ]
    }
  },
  "writer": {
    "word": "writer",
    "ipa": "/ˈraɪ.t̬ɚ/",
    "syllable": [
      "writ",
      "er"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-979",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "writer",
    "actual_sound": "/ˈraɪ.t̬ɚ/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /ˈraɪ.t̬ɚ/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/ˈraɪ.t̬ɚ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "writer 發音為 /ˈraɪ.t̬ɚ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "writer"
      ]
    }
  },
  "wrong": {
    "word": "wrong",
    "ipa": "/rɑːŋ/",
    "syllable": [
      "wrong"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "ORTH-980",
    "exception_type": "Orthographic Exception",
    "reason": "Silent letter or orthographic irregularity",
    "pattern": "wrong",
    "actual_sound": "/rɑːŋ/",
    "note": "靜音子音或特殊拼字不規則例外，實際發音為 /rɑːŋ/",
    "condition": "自然發音規則推導例外（Silent letter or orthographic irregularity）",
    "primary_sound": "/rɑːŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Orthographic Exception",
      "content": "wrong 發音為 /rɑːŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "wrong"
      ]
    }
  },
  "yard": {
    "word": "yard",
    "ipa": "/jɑːrd/",
    "syllable": [
      "yard"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-981",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "yard",
    "actual_sound": "/jɑːrd/",
    "note": "自然發音推導例外，美式標準音標為 /jɑːrd/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/jɑːrd/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "yard 發音為 /jɑːrd/，對應 EPRS R010 特殊例外",
      "related_words": [
        "yard"
      ]
    }
  },
  "year": {
    "word": "year",
    "ipa": "/jɪr/",
    "syllable": [
      "year"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-982",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "year",
    "actual_sound": "/jɪr/",
    "note": "自然發音推導例外，美式標準音標為 /jɪr/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/jɪr/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "year 發音為 /jɪr/，對應 EPRS R010 特殊例外",
      "related_words": [
        "year"
      ]
    }
  },
  "yellow": {
    "word": "yellow",
    "ipa": "/ˈjɛl.oʊ/",
    "syllable": [
      "yel",
      "low"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-983",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "yellow",
    "actual_sound": "/ˈjɛl.oʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈjɛl.oʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈjɛl.oʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "yellow 發音為 /ˈjɛl.oʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "yellow"
      ]
    }
  },
  "yes": {
    "word": "yes",
    "ipa": "/jɛs/",
    "syllable": [
      "yes"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-984",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "yes",
    "actual_sound": "/jɛs/",
    "note": "自然發音推導例外，美式標準音標為 /jɛs/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/jɛs/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "yes 發音為 /jɛs/，對應 EPRS R010 特殊例外",
      "related_words": [
        "yes"
      ]
    }
  },
  "yesterday": {
    "word": "yesterday",
    "ipa": "/ˈjɛs.tɚ.deɪ/",
    "syllable": [
      "yes",
      "ter",
      "day"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-985",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "yesterday",
    "actual_sound": "/ˈjɛs.tɚ.deɪ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈjɛs.tɚ.deɪ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈjɛs.tɚ.deɪ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "yesterday 發音為 /ˈjɛs.tɚ.deɪ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "yesterday"
      ]
    }
  },
  "yet": {
    "word": "yet",
    "ipa": "/jɛt/",
    "syllable": [
      "yet"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-986",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "yet",
    "actual_sound": "/jɛt/",
    "note": "自然發音推導例外，美式標準音標為 /jɛt/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/jɛt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "yet 發音為 /jɛt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "yet"
      ]
    }
  },
  "you": {
    "word": "you",
    "ipa": "/juː/",
    "syllable": [
      "you"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-987",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "you",
    "actual_sound": "/juː/",
    "note": "自然發音推導例外，美式標準音標為 /juː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/juː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "you 發音為 /juː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "you"
      ]
    }
  },
  "young": {
    "word": "young",
    "ipa": "/jʌŋ/",
    "syllable": [
      "young"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-988",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "young",
    "actual_sound": "/jʌŋ/",
    "note": "自然發音推導例外，美式標準音標為 /jʌŋ/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/jʌŋ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "young 發音為 /jʌŋ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "young"
      ]
    }
  },
  "yummy": {
    "word": "yummy",
    "ipa": "/ˈjʌm.i/",
    "syllable": [
      "yum",
      "my"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-989",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "yummy",
    "actual_sound": "/ˈjʌm.i/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈjʌm.i/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈjʌm.i/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "yummy 發音為 /ˈjʌm.i/，對應 EPRS R010 特殊例外",
      "related_words": [
        "yummy"
      ]
    }
  },
  "zebra": {
    "word": "zebra",
    "ipa": "/ˈziː.brə/",
    "syllable": [
      "ze",
      "bra"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-990",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "zebra",
    "actual_sound": "/ˈziː.brə/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈziː.brə/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈziː.brə/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "zebra 發音為 /ˈziː.brə/，對應 EPRS R010 特殊例外",
      "related_words": [
        "zebra"
      ]
    }
  },
  "zero": {
    "word": "zero",
    "ipa": "/ˈzɪr.oʊ/",
    "syllable": [
      "ze",
      "ro"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-991",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "zero",
    "actual_sound": "/ˈzɪr.oʊ/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈzɪr.oʊ/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈzɪr.oʊ/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "zero 發音為 /ˈzɪr.oʊ/，對應 EPRS R010 特殊例外",
      "related_words": [
        "zero"
      ]
    }
  },
  "zoo": {
    "word": "zoo",
    "ipa": "/zuː/",
    "syllable": [
      "zoo"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "HIST-992",
    "exception_type": "Historical Exception",
    "reason": "Historical pronunciation retention",
    "pattern": "zoo",
    "actual_sound": "/zuː/",
    "note": "自然發音推導例外，美式標準音標為 /zuː/",
    "condition": "自然發音規則推導例外（Historical pronunciation retention）",
    "primary_sound": "/zuː/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Historical Exception",
      "content": "zoo 發音為 /zuː/，對應 EPRS R010 特殊例外",
      "related_words": [
        "zoo"
      ]
    }
  },
  "set": {
    "word": "set",
    "ipa": "/ˈtiː.viː sɛt/",
    "syllable": [
      "T",
      "V",
      "set"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-021",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "set",
    "actual_sound": "/ˈtiː.viː sɛt/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /ˈtiː.viː sɛt/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/ˈtiː.viː sɛt/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "set 發音為 /ˈtiː.viː sɛt/，對應 EPRS R010 特殊例外",
      "related_words": [
        "set"
      ]
    }
  },
  "steak": {
    "word": "steak",
    "ipa": "/biːf steɪk/",
    "syllable": [
      "beef",
      "steak"
    ],
    "pattern_id": "PAT-10",
    "pattern_name": "Irregular / Exception",
    "rule_id": "R010",
    "exception_id": "REDUC-022",
    "exception_type": "Pronunciation Reduction",
    "reason": "Vowel reduction or accent shift in multi-syllable word",
    "pattern": "steak",
    "actual_sound": "/biːf steɪk/",
    "note": "多音節重音或母音弱化不規則例外，實際發音為 /biːf steɪk/",
    "condition": "自然發音規則推導例外（Vowel reduction or accent shift in multi-syllable word）",
    "primary_sound": "/biːf steɪk/",
    "stage_id": "STAGE-05",
    "stage_name": "特殊例外",
    "memory_tip": {
      "type": "Pronunciation Reduction",
      "content": "steak 發音為 /biːf steɪk/，對應 EPRS R010 特殊例外",
      "related_words": [
        "steak"
      ]
    }
  }
};
