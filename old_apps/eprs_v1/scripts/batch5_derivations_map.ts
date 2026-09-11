export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch5DerivationsMap: Record<number, DerivationItem[]> = {
  401: [
    { syllable: '單音節［hit］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 i 常規發短母音 /hɪt/' }
  ],
  402: [
    { syllable: '第 1 音節［hob］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 bb 切分，重音節母音 o 常規發短母音 /ˈhɑːb/' },
    { syllable: '第 2 音節［by］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '字尾 y 處非重音節，常規發長母音 /bi/' }
  ],
  403: [
    { syllable: '單音節［hold］', rule: '閉音節規則 (R001) → 特例長母音 -old (R010/R002)', status: '【不適用 (例外轉移)】', reason: '-old 組合打破一般閉音節規則，歷史長音化使母音 o 發長雙母音 /hoʊld/ (R010)' }
  ],
  404: [
    { syllable: '第 1 音節［hol］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 l 封閉重音節，母音 o 常規發短母音 /ˈhɑːl/' },
    { syllable: '第 2 音節［i］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀單一母音 i 弱化發輕母音 /ə/' },
    { syllable: '第 3 音節［day］', rule: '母音組合 ay (R004)', status: '【適用】', reason: 'ay 字母組合處字尾固定發長雙母音 /deɪ/' }
  ],
  405: [
    { syllable: '單音節［home］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 結構中字尾 e 靜音，母音 o 常規發長雙母音 /hoʊm/' }
  ],
  406: [
    { syllable: '第 1 音節［home］', rule: '複合字 (Compound) + 魔術 e (R003)', status: '【適用】', reason: 'o_e 結構字尾 e 靜音，母音 o 發長音 /ˈhoʊm/' },
    { syllable: '第 2 音節［work］', rule: '複合字 (Compound) + R 控制母音 (R005)', status: '【適用】', reason: 'w 後之 or 特殊受捲舌音同化發 /wɝːk/' }
  ],
  407: [
    { syllable: '第 1 音節［hon］', rule: '靜音 h (R006) + 閉音節規則 (R001)', status: '【適用】', reason: '字首 h 靜音不發音，子音 n 封閉音節，母音 o 發短母音 /ˈɑːn/' },
    { syllable: '第 2 音節［est］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -est 尾音弱化發短音 /ɪst/' }
  ],
  408: [
    { syllable: '第 1 音節［hon］', rule: '閉音節短母音 (R001) → 特例母音轉移 (R010)', status: '【不適用 (例外轉移)】', reason: '重音節母音 o 特殊轉移發短促中舌母音 /ˈhʌn/ 而非 /ɑː/ (R010)' },
    { syllable: '第 2 音節［ey］', rule: '母音組合 ey (R004)', status: '【適用】', reason: '字尾 -ey 處非重音節常規發短長母音 /i/' }
  ],
  409: [
    { syllable: '單音節［hope］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 結構中字尾 e 靜音，母音 o 常規發字母長音 /hoʊp/' }
  ],
  410: [
    { syllable: '單音節［horse］', rule: 'R 控制母音 or (R005) + 尾音 se (R006)', status: '【適用】', reason: 'or 受捲舌音控制發 /ɔːr/，字尾 se 發清音 /s/，全字發 /hɔːrs/' }
  ],
  411: [
    { syllable: '第 1 音節［hos］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉重音節，母音 o 常規發短母音 /ˈhɑːs/' },
    { syllable: '第 2 音節［pi］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 i 弱化發輕短音 /pɪ/' },
    { syllable: '第 3 音節［tal］', rule: '成音節字尾 (R009) / 弱化 (R008)', status: '【適用】', reason: '-tal 處字尾弱化發成音節邊音 /t̬əl/' }
  ],
  412: [
    { syllable: '單音節［hot］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 t 封閉，母音 o 常規發短母音 /hɑːt/' }
  ],
  413: [
    { syllable: '第 1 音節［ho］', rule: '開音節非重讀弱化 (R002/R008)', status: '【適用】', reason: '母音 o 處於非重讀開音節，發次重長音 /hoʊ/' },
    { syllable: '第 2 音節［tel］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '重音落在第二音節，子音 l 封閉，母音 e 常規發短母音 /ˈtɛl/' }
  ],
  414: [
    { syllable: '單音節［hour］', rule: '靜音 h (R006) + 母音組合 ou (R004) + R 控制 (R005)', status: '【適用】', reason: '字首 h 靜音，ou 發雙母音 /aʊ/，結尾 r 捲舌帶出三合音雙音拍 /ˈaʊ.ɚ/' }
  ],
  415: [
    { syllable: '單音節［house］', rule: '母音組合 ou (R004) + 尾音 se (R006)', status: '【適用】', reason: 'ou 常規發雙母音 /aʊ/，字尾 se 發清子音 /s/，全字發 /haʊs/' }
  ],
  416: [
    { syllable: '第 1 音節［house］', rule: '複合字 (Compound) + 母音組合 ou (R004)', status: '【適用】', reason: 'ou 發雙母音 /ˈhaʊs/' },
    { syllable: '第 2 音節［wife］', rule: '複合字 (Compound) + 魔術 e (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 常規發長音 /waɪf/' }
  ],
  417: [
    { syllable: '單音節［how］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 字母組合在此處常規發雙母音 /haʊ/' }
  ],
  418: [
    { syllable: '第 1 音節［how］', rule: '複合開音節 ow (R004)', status: '【適用】', reason: 'ow 次重音發雙母音 /haʊ/' },
    { syllable: '第 2 音節［ev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '主重音節，母音 e 常規發短母音 /ˈɛv/' },
    { syllable: '第 3 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -er 弱化發輕捲舌母音 /ɚ/' }
  ],
  419: [
    { syllable: '第 1 音節［hun］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉重音節，母音 u 常規發短母音 /ˈhʌn/' },
    { syllable: '第 2 音節［dred］', rule: '雙子音開頭閉音節 (R001) + 弱化 (R008)', status: '【適用】', reason: '子音群 dr 開頭，非重讀音節母音 e 弱化發 /drəd/' }
  ],
  420: [
    { syllable: '第 1 音節［hun］', rule: '複合鼻音 ng (R006) + 閉音節 (R001)', status: '【適用】', reason: '母音 u 在 g 前同化為軟顎鼻音，發 /ˈhʌŋ/' },
    { syllable: '第 2 音節［gry］', rule: '硬音 g (R007) + 字尾 y 半母音 (R002)', status: '【適用】', reason: 'g 發濁塞音 /ɡ/，字尾 y 處非重讀音節發長母音 /ɡri/' }
  ],
  421: [
    { syllable: '單音節［hurt］', rule: 'R 控制母音 ur (R005)', status: '【適用】', reason: 'ur 組合受捲舌音控制，常規發重讀捲舌長母音 /hɝːt/' }
  ],
  422: [
    { syllable: '第 1 音節［hus］', rule: '閉音節規則 (R001) + 濁音 s (R007)', status: '【適用】', reason: '重音節母音 u 發短母音 /ˈhʌ/，介於兩母音間的 s 濁化為 /z/' },
    { syllable: '第 2 音節［band］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -and 尾音弱化，母音 a 發輕母音 /bənd/' }
  ],
  423: [
    { syllable: '單音節［I］', rule: '單字母開音節 (R002)', status: '【適用】', reason: '大寫單字母 I 為獨立開音節，字母本音發長雙母音 /aɪ/' }
  ],
  424: [
    { syllable: '單音節［ice］', rule: '魔術 e (R003) + 軟音 c (R007)', status: '【適用】', reason: '字尾 e 靜音使母音 i 發字母本音 /aɪ/，c 在 e 前發軟音 /s/，全字發 /aɪs/' }
  ],
  425: [
    { syllable: '第 1 音節［i］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 i 處開音節，發字母長音 /aɪ/' },
    { syllable: '第 2 音節［de］', rule: '主重音開音節 (R002)', status: '【適用】', reason: '母音 e 結尾承擔主重音，發長母音 /ˈdiː/' },
    { syllable: '第 3 音節［a］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '字尾母音 a 處非重讀音節弱化發輕母音 /ə/' }
  ],
  426: [
    { syllable: '單音節［if］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 f 封閉音節，單一母音 i 常規發短母音 /ɪf/' }
  ],
  427: [
    { syllable: '第 1 音節［im］', rule: '閉音節前綴 (R001/R008)', status: '【適用】', reason: '前綴 im- 處非重音節，母音 i 發短音 /ɪm/' },
    { syllable: '第 2 音節［por］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: '承擔主重音，or 組合發長捲舌母音 /ˈpɔːr/' },
    { syllable: '第 3 音節［tant］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-ant 後綴非重讀弱化，母音 a 發輕母音 /tənt/' }
  ],
  428: [
    { syllable: '單音節［in］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉音節，單一母音 i 常規發短母音 /ɪn/' }
  ],
  429: [
    { syllable: '單音節［inch］', rule: '閉音節規則 (R001) + 複合子音 ch (R006)', status: '【適用】', reason: '鼻音 n 與 ch 封閉音節，母音 i 常規發短母音 /ɪ/，ch 發清塞擦音 /tʃ/，全字發 /ɪntʃ/' }
  ],
  430: [
    { syllable: '第 1 音節［in］', rule: '前綴閉音節 (R001)', status: '【適用】', reason: '重音節母音 i 在子音 n 封閉下發短母音 /ˈɪn/' },
    { syllable: '第 2 音節［sect］', rule: '複合子音群閉音節 (R001)', status: '【適用】', reason: '尾音 ct 封閉，母音 e 發短母音 /sɛkt/' }
  ],
  431: [
    { syllable: '第 1 音節［in］', rule: '前綴閉音節 (R001)', status: '【適用】', reason: '前綴 in- 處次重音，母音 i 發短母音 /ɪn/' },
    { syllable: '第 2 音節［side］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 承擔主重音發長音 /ˈsaɪd/' }
  ],
  432: [
    { syllable: '第 1 音節［in］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉承擔主重音，母音 i 發短母音 /ˈɪn/' },
    { syllable: '第 2 音節［ter］', rule: '音節內弱化脫落 (Syncopation)', status: '【適用 (部分轉移)】', reason: '口語中非重讀 -ter- 常弱化並併入尾音節發音' },
    { syllable: '第 3 音節［est］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-est 弱化發輕短音 /trɪst/，全字念 /ˈɪn.trɪst/' }
  ],
  433: [
    { syllable: '第 1 音節［in］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉主重音節，母音 i 發短母音 /ˈɪn/' },
    { syllable: '第 2 音節［ter］', rule: '中音弱化 (Syncopation)', status: '【適用 (部分轉移)】', reason: '非重讀音節弱化，常併入第三音節發音' },
    { syllable: '第 3 音節［est］', rule: '非重讀音節 (R008)', status: '【適用】', reason: '子音群 st 組合發 /trɪst/' },
    { syllable: '第 4 音節［ed］', rule: '過去分詞 -ed 發音規則 (R006)', status: '【適用】', reason: '在清齒齦爆破音 t 之後，-ed 規則增音發成音節 /ɪd/' }
  ],
  434: [
    { syllable: '第 1 音節［in］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '主重音節，子音 n 封閉母音 i 發短音 /ˈɪn/' },
    { syllable: '第 2 音節［ter］', rule: '弱化脫落 (Syncopation)', status: '【適用 (部分轉移)】', reason: '非重讀弱化常併入後方音節' },
    { syllable: '第 3 音節［est］', rule: '非重讀音節 (R008)', status: '【適用】', reason: '弱化發 /trɪst/' },
    { syllable: '第 4 音節［ing］', rule: '複合鼻音 -ing (R006)', status: '【適用】', reason: 'ng 發軟顎鼻音，後綴發輕音 /ɪŋ/' }
  ],
  435: [
    { syllable: '第 1 音節［in］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉主重音節，母音 i 發短音 /ˈɪn/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '-er 處非重讀弱化發輕捲舌母音 /t̬ɚ/' },
    { syllable: '第 3 音節［view］', rule: '母音組合 iew (R004)', status: '【適用】', reason: 'iew 組合發雙母音 /vjuː/' }
  ],
  436: [
    { syllable: '第 1 音節［in］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '重音節母音 i 在 n 封閉下發短母音 /ˈɪn/' },
    { syllable: '第 2 音節［to］', rule: '母音組合 / 開音節特例 (R010)', status: '【適用】', reason: '介系詞 to 在重讀時常規發長圓唇音 /tuː/' }
  ],
  437: [
    { syllable: '第 1 音節［in］', rule: '前綴閉音節 (R001/R008)', status: '【適用】', reason: '前綴 in- 處非重音節，母音 i 發短音 /ɪn/' },
    { syllable: '第 2 音節［vite］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 承擔主重音發字母長音 /ˈvaɪt/' }
  ],
  438: [
    { syllable: '第 1 音節［is］', rule: '靜音 s (R006/R010) + 開音節規則 (R002)', status: '【不適用 (例外轉移)】', reason: 's 歷史靜音不發音，使前面字母 i 成為開音節，發字母長音 /ˈaɪ/ (R010)' },
    { syllable: '第 2 音節［land］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-and 處非重讀音節弱化，母音 a 發輕母音 /lənd/' }
  ],
  439: [
    { syllable: '單音節［it］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 i 常規發短母音 /ɪt/' }
  ],
  440: [
    { syllable: '第 1 音節［i］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 i 處於開音節並承擔主重音，發字母本音 /ˈaɪ/' },
    { syllable: '第 2 音節［tem］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發輕母音 /təm/' }
  ],
  441: [
    { syllable: '第 1 音節［jack］', rule: '閉音節 (R001) + 雙子音 ck (R006)', status: '【適用】', reason: 'j 發 /dʒ/，ck 雙字母封閉音節，母音 a 常規發短母音 /ˈdʒæk/' },
    { syllable: '第 2 音節［et］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-et 尾音處非重讀音節，母音 e 弱化發短音 /ɪt/' }
  ],
  442: [
    { syllable: '單音節［jeans］', rule: '母音組合 ea (R004) + 尾音 s 濁化 (R006)', status: '【適用】', reason: 'ea 組合常規發長母音 /iː/，名詞複數 -s 在濁鼻音 n 後濁化為 /z/，全字發 /dʒiːnz/' }
  ],
  443: [
    { syllable: '單音節［job］', rule: '閉音節規則 (R001)', status: '【適用】', reason: 'j 發 /dʒ/，子音 b 封閉音節，母音 o 常規發短母音 /dʒɑːb/' }
  ],
  444: [
    { syllable: '單音節［join］', rule: '母音組合 oi (R004)', status: '【適用】', reason: 'oi 字母組合常規發雙母音 /ɔɪ/，結合尾音 n 發 /dʒɔɪn/' }
  ],
  445: [
    { syllable: '單音節［joke］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 結構中字尾 e 靜音，母音 o 常規發長雙母音 /dʒoʊk/' }
  ],
  446: [
    { syllable: '單音節［joy］', rule: '母音組合 oy (R004)', status: '【適用】', reason: 'oy 字母組合常規發雙母音 /ɔɪ/，字首 j 發 /dʒ/，全字發 /dʒɔɪ/' }
  ],
  447: [
    { syllable: '單音節［juice］', rule: '母音組合 ui (R004) + 軟音 c (R007)', status: '【適用】', reason: 'ui 組合發長母音 /uː/，c 在 e 前發軟音 /s/，字尾 e 靜音，全字發 /dʒuːs/' }
  ],
  448: [
    { syllable: '單音節［jump］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '子音群 mp 封閉音節，母音 u 常規發短母音 /dʒʌmp/' }
  ],
  449: [
    { syllable: '單音節［just］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '子音群 st 封閉音節，母音 u 常規發短母音 /dʒʌst/' }
  ],
  450: [
    { syllable: '單音節［keep］', rule: '母音組合 ee (R004)', status: '【適用】', reason: 'ee 雙母音常規發固定長母音 /iː/，全字發 /kiːp/' }
  ],
  451: [
    { syllable: '單音節［key］', rule: '母音組合 ey (R004) → 特例長母音 (R010)', status: '【適用 (部分轉移)】', reason: 'ey 字母組合在此處特例發長母音 /kiː/ (R010)' }
  ],
  452: [
    { syllable: '單音節［kick］', rule: '閉音節 (R001) + 雙子音 ck (R006)', status: '【適用】', reason: 'ck 複合字母發單音 /k/，子音封閉音節使母音 i 常規發短母音 /kɪk/' }
  ],
  453: [
    { syllable: '單音節［kid］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉音節，單一母音 i 常規發短母音 /kɪd/' }
  ],
  454: [
    { syllable: '單音節［kill］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 ll 封閉音節，母音 i 常規發短母音 /kɪl/' }
  ],
  455: [
    { syllable: '單音節［kind］', rule: '閉音節規則 (R001) → 特例長母音 -ind (R010/R002)', status: '【不適用 (例外轉移)】', reason: '-ind 組合打破一般閉音節規則，歷史長音化使母音 i 發長雙母音 /kaɪnd/ (R010)' }
  ],
  456: [
    { syllable: '單音節［king］', rule: '複合鼻音 ng (R006) + 閉音節 (R001)', status: '【適用】', reason: 'ng 字母組合發軟顎鼻音 /ŋ/，母音 i 常規發短母音 /kɪŋ/' }
  ],
  457: [
    { syllable: '單音節［kiss］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 ss 封閉音節，單一母音 i 常規發短母音 /kɪs/' }
  ],
  458: [
    { syllable: '第 1 音節［kitch］', rule: '複合子音 tch (R006) + 閉音節 (R001)', status: '【適用】', reason: 'tch 組合發清塞擦音 /tʃ/，封閉重音節使母音 i 發短母音 /ˈkɪtʃ/' },
    { syllable: '第 2 音節［en］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-en 處非重讀音節，弱化發輕短音 /ən/' }
  ],
  459: [
    { syllable: '單音節［kite］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 常規發字母長音 /kaɪt/' }
  ],
  460: [
    { syllable: '單音節［knee］', rule: '靜音 kn- (R006) + 母音組合 ee (R004)', status: '【適用】', reason: '字首 kn- 中 k 靜音發 /n/，雙母音 ee 常規發長母音 /iː/，全字發 /niː/' }
  ],
  461: [
    { syllable: '單音節［knife］', rule: '靜音 kn- (R006) + 魔術 e (R003)', status: '【適用】', reason: '字首 k 靜音，i_e 結構字尾 e 靜音促使前面母音 i 發長雙母音 /naɪf/' }
  ],
  462: [
    { syllable: '單音節［knock］', rule: '靜音 kn- (R006) + 雙子音 ck 閉音節 (R001)', status: '【適用】', reason: '字首 k 靜音，ck 封閉音節，單一母音 o 常規發短母音 /nɑːk/' }
  ],
  463: [
    { syllable: '單音節［know］', rule: '靜音 kn- (R006) + 母音組合 ow (R004)', status: '【適用】', reason: '字首 k 靜音發 /n/，ow 字母組合常規發長雙母音 /oʊ/，全字發 /noʊ/' }
  ],
  464: [
    { syllable: '第 1 音節［knowl］', rule: '靜音 kn- (R006) + ow 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'k 靜音，ow 字母在此處受歷史演變轉化為短母音 /ˈnɑːl/ (R010)' },
    { syllable: '第 2 音節［edge］', rule: '複合子音 -dge (R006) + 弱化 (R008)', status: '【適用】', reason: '-dge 組合發濁塞擦音 /dʒ/，非重讀母音 e 弱化發 /ɪdʒ/' }
  ],
  465: [
    { syllable: '單音節［lake］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音，母音 a 常規發長雙母音 /leɪk/' }
  ],
  466: [
    { syllable: '單音節［lamp］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '子音群 mp 封閉音節，單一母音 a 常規發短母音 /læmp/' }
  ],
  467: [
    { syllable: '單音節［land］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '子音群 nd 封閉音節，單一母音 a 常規發短母音 /lænd/' }
  ],
  468: [
    { syllable: '第 1 音節［lan］', rule: '閉音節 (R001) + 複合鼻音 (R006)', status: '【適用】', reason: '母音 a 在軟顎音前鼻音化，發短母音 /ˈlæŋ/' },
    { syllable: '第 2 音節［guage］', rule: '軟音 g (R007) + 弱化 (R008)', status: '【適用】', reason: 'u 發半母音 /w/，字尾 g 在 e 前發軟音 /dʒ/，非重讀母音 a 弱化發 /ɡwɪdʒ/' }
  ],
  469: [
    { syllable: '單音節［large］', rule: 'R 控制母音 ar (R005) + 軟音 g (R007)', status: '【適用】', reason: 'ar 受捲舌音控制發 /ɑːr/，g 在 e 前發軟音 /dʒ/，字尾 e 靜音，全字發 /lɑːrdʒ/' }
  ],
  470: [
    { syllable: '單音節［last］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '子音群 st 封閉音節，單一母音 a 常規發短母音 /læst/' }
  ],
  471: [
    { syllable: '單音節［late］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音，母音 a 常規發長雙母音 /leɪt/' }
  ],
  472: [
    { syllable: '第 1 音節［lat］', rule: '開音節規則 (R002/R003)', status: '【適用】', reason: '由 late 衍生，母音 a 承擔主重音發長雙母音 /ˈleɪ/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: 't 夾在兩母音間產生閃音 (Flap-t)，-er 弱化發輕捲舌音 /t̬ɚ/' }
  ],
  473: [
    { syllable: '單音節［laugh］', rule: '母音組合 augh (R004) → 特例短母音 + gh 轉 /f/ (R010/R006)', status: '【不適用 (例外轉移)】', reason: 'augh 字母組合打破常規，母音轉化為短母音 /æ/，gh 轉發擦音 /f/，全字發 /læf/ (R010)' }
  ],
  474: [
    { syllable: '第 1 音節［law］', rule: '母音組合 aw (R004)', status: '【適用】', reason: 'aw 字母組合常規發長圓唇母音 /ˈlɑː/' },
    { syllable: '第 2 音節［yer］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: 'y 作為滑音 /j/，-er 處非重讀弱化發輕捲舌音 /jɚ/' }
  ],
  475: [
    { syllable: '第 1 音節［la］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音 a 結尾承擔主重音，常規發長雙母音 /ˈleɪ/' },
    { syllable: '第 2 音節［zy］', rule: '字尾 y 半母音 (R002)', status: '【適用】', reason: '字尾 y 處非重讀音節，常規發長母音 /zi/' }
  ],
  476: [
    { syllable: '單音節［lead］', rule: '母音組合 ea (R004)', status: '【適用】', reason: 'ea 字母組合常規發長母音 /iː/，結合尾音 d 發 /liːd/' }
  ],
  477: [
    { syllable: '第 1 音節［lead］', rule: '母音組合 ea (R004)', status: '【適用】', reason: 'ea 組合在重音節常規發長母音 /ˈliːd/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '-er 後綴處非重讀音節，弱化發輕捲舌母音 /ɚ/' }
  ],
  478: [
    { syllable: '單音節［learn］', rule: '母音組合 ear + R 控制 (R005) → 特例 /ɝː/ (R010)', status: '【適用 (部分轉移)】', reason: 'ear 在子音 n 前轉化為中央捲舌長母音 /lɝːn/ (R010)' }
  ],
  479: [
    { syllable: '單音節［least］', rule: '母音組合 ea (R004) + 雙子音 st (R006)', status: '【適用】', reason: 'ea 字母組合常規發長母音 /iː/，結合子音群 st 發 /liːst/' }
  ],
  480: [
    { syllable: '單音節［leave］', rule: '母音組合 ea (R004) + 尾音 ve (R006)', status: '【適用】', reason: 'ea 組合發長母音 /iː/，字尾 ve 發濁擦音 /v/，全字發 /liːv/' }
  ],
  481: [
    { syllable: '單音節［left］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '子音群 ft 封閉音節，單一母音 e 常規發短母音 /lɛft/' }
  ],
  482: [
    { syllable: '單音節［leg］', rule: '閉音節規則 (R001) + 硬音 g (R007)', status: '【適用】', reason: 'g 在字尾發濁塞音 /ɡ/，封閉音節使母音 e 常規發短母音 /lɛɡ/' }
  ],
  483: [
    { syllable: '第 1 音節［lem］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 m 封閉主重音節，單一母音 e 常規發短母音 /ˈlɛm/' },
    { syllable: '第 2 音節［on］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-on 處非重讀音節，母音 o 弱化發輕母音 /ən/' }
  ],
  484: [
    { syllable: '單音節［less］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 ss 封閉音節，單一母音 e 常規發短母音 /lɛs/' }
  ],
  485: [
    { syllable: '第 1 音節［les］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 ss 切分，重音節母音 e 常規發短母音 /ˈlɛs/' },
    { syllable: '第 2 音節［son］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-on 尾音處非重讀音節，母音 o 弱化發輕母音 /ən/' }
  ],
  486: [
    { syllable: '單音節［let］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 e 常規發短母音 /lɛt/' }
  ],
  487: [
    { syllable: '第 1 音節［let］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 tt 切分，重音節母音 e 常規發短母音 /ˈlɛt/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '-er 處非重讀弱化發輕捲舌母音 /ɚ/' }
  ],
  488: [
    { syllable: '第 1 音節［lev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 v 封閉主重音節，單一母音 e 常規發短母音 /ˈlɛv/' },
    { syllable: '第 2 音節［el］', rule: '非重讀弱化 (R008) / 成音節 (R009)', status: '【適用】', reason: '-el 尾音處非重讀音節，母音弱化發成音節邊音 /əl/' }
  ],
  489: [
    { syllable: '第 1 音節［li］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 i 結尾承擔主重音，常規發長雙母音 /ˈlaɪ/' },
    { syllable: '第 2 音節［brary］', rule: '雙母音縮合弱化 (R008) + 字尾 y (R002)', status: '【適用】', reason: '-brary 音節弱化發 /brɛr.i/，字尾 y 發長音 /i/' }
  ],
  490: [
    { syllable: '單音節［lie］', rule: '母音組合 ie (R004)', status: '【適用】', reason: 'ie 雙母音在字尾常規發長雙母音 /laɪ/' }
  ],
  491: [
    { syllable: '單音節［life］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 常規發字母長音 /laɪf/' }
  ],
  492: [
    { syllable: '單音節［light］', rule: '母音組合 igh (R004) + 靜音 gh (R006)', status: '【適用】', reason: 'igh 特殊組合中 gh 靜音，母音 i 發長雙母音 /laɪt/' }
  ],
  493: [
    { syllable: '單音節［like］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 常規發長音 /laɪk/' }
  ],
  494: [
    { syllable: '單音節［line］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 常規發長音 /laɪn/' }
  ],
  495: [
    { syllable: '第 1 音節［li］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音 i 處開音節承擔主重音，發長雙母音 /ˈlaɪ/' },
    { syllable: '第 2 音節［on］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-on 處非重讀音節，母音 o 弱化發輕母音 /ən/' }
  ],
  496: [
    { syllable: '單音節［lip］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 p 封閉音節，單一母音 i 常規發短母音 /lɪp/' }
  ],
  497: [
    { syllable: '單音節［list］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '子音群 st 封閉音節，單一母音 i 常規發短母音 /lɪst/' }
  ],
  498: [
    { syllable: '第 1 音節［lis］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '重音節母音 i 在子音 s 封閉下發短母音 /ˈlɪs/' },
    { syllable: '第 2 音節［ten］', rule: '靜音 t (R006/R010) + 成音節 (R009)', status: '【不適用 (例外轉移)】', reason: '-sten 組合中子音 t 歷史靜音不發音，-en 弱化為成音節鼻音 /ən/ (R010)' }
  ],
  499: [
    { syllable: '第 1 音節［lit］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 tt 切分，重音節母音 i 常規發短母音 /ˈlɪt/' },
    { syllable: '第 2 音節［tle］', rule: '成音節字尾 -le (R009)', status: '【適用】', reason: '子音 + le 形成成音節，字尾 e 靜音，舌尖抵住齒齦發成音節邊音 /əl/' }
  ],
  500: [
    { syllable: '單音節［live］', rule: '魔術 e 規則 (R003) → 動詞短音特例 (R010) / 形容詞長音 (R003)', status: '【不適用 (例外轉移)】', reason: '作動詞時為特例短母音 /lɪv/ (打破魔術 e)；作形容詞/副詞時則適用魔術 e 發長雙母音 /laɪv/' }
  ]
};
