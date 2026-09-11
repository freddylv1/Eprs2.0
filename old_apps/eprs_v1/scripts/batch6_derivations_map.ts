export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch6DerivationsMap: Record<number, DerivationItem[]> = {
  501: [
    { syllable: '第 1 音節［lone］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 結構中字尾 e 靜音，促使母音 o 常規發長雙母音 /ˈloʊn/' },
    { syllable: '第 2 音節［ly］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '字尾 y 處非重音節，常規發長短交界的長母音 /li/' }
  ],
  502: [
    { syllable: '單音節［long］', rule: '閉音節規則 (R001) + 鼻音 ng (R006)', status: '【適用】', reason: '軟顎鼻音 ng /ŋ/ 封閉音節，母音 o 常規發短開後母音 /lɔːŋ/' }
  ],
  503: [
    { syllable: '單音節［look］', rule: '雙母音組合 oo (R004)', status: '【適用】', reason: 'oo 組合在子音 k 前常規發短母音 /ʊ/，全字發 /lʊk/' }
  ],
  504: [
    { syllable: '單音節［lose］', rule: '魔術 e 規則 (R003) → 特例長母音轉移 (R010)', status: '【不適用 (例外轉移)】', reason: 'o_e 未發 /oʊ/ 而特殊轉移發長圓唇母音 /uː/，尾音 s 濁化為 /z/，全字發 /luːz/ (R010)' }
  ],
  505: [
    { syllable: '單音節［lot］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 o 常規發短母音 /lɑːt/' }
  ],
  506: [
    { syllable: '單音節［loud］', rule: '雙母音組合 ou (R004)', status: '【適用】', reason: '雙母音 ou 常規發 /aʊ/，尾音 d 封閉，全字發 /laʊd/' }
  ],
  507: [
    { syllable: '單音節［love］', rule: '魔術 e 規則 (R003) → 特例短中舌母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'o_e 未發長母音 /oʊ/，受古英語歷史音變轉移發短中舌母音 /lʌv/，字尾 e 靜音 (R010)' }
  ],
  508: [
    { syllable: '第 1 音節［love］', rule: '詞根特例轉移 (R010)', status: '【不適用 (例外轉移)】', reason: '詞根 love 依歷史音變發短中舌母音 /ˈlʌv/ (R010)' },
    { syllable: '第 2 音節［ly］', rule: '字尾 y 規則 (R002/R008)', status: '【適用】', reason: '字尾 -ly 處非重音節常規發 /li/' }
  ],
  509: [
    { syllable: '單音節［low］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 字母組合於詞尾常規發長雙母音 /loʊ/' }
  ],
  510: [
    { syllable: '第 1 音節［luck］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: '複合子音 ck 封閉重音節，單一母音 u 常規發短母音 /ˈlʌk/' },
    { syllable: '第 2 音節［y］', rule: '字尾 y 規則 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /i/' }
  ],
  511: [
    { syllable: '單音節［lunch］', rule: '閉音節規則 (R001) + 複合子音 ch (R006)', status: '【適用】', reason: '鼻音 n 與 ch 封閉音節，母音 u 發短母音 /ʌ/，ch 發清塞擦音 /tʃ/，全字發 /lʌntʃ/' }
  ],
  512: [
    { syllable: '第 1 音節［ma］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '單一母音 a 處非重讀音節，弱化發央母音 /mə/' },
    { syllable: '第 2 音節［chine］', rule: '法語外來詞特例 (R010) + ch 特殊發音 (R006)', status: '【不適用 (例外轉移)】', reason: '法語外來詞規則使 ch 發清擦音 /ʃ/，i 發長母音 /iː/，字尾 e 靜音，發 /ˈʃiːn/ (R010)' }
  ],
  513: [
    { syllable: '單音節［mad］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉音節，單一母音 a 常規發短母音 /mæd/' }
  ],
  514: [
    { syllable: '第 1 音節［mag］', rule: '閉音節規則 (R001) + 軟音 g (R006)', status: '【適用】', reason: '子音 g 封閉重音節，後接母音 i 軟化發 /dʒ/，母音 a 發短母音 /ˈmædʒ/' },
    { syllable: '第 2 音節［ic］', rule: '閉音節規則 (R001) / 字尾弱化 (R008)', status: '【適用】', reason: '非重讀字尾 -ic，母音 i 常規發短促音 /ɪk/' }
  ],
  515: [
    { syllable: '單音節［mail］', rule: '母音組合 ai (R004)', status: '【適用】', reason: '雙母音組合 ai 常規發長母音 /eɪ/，尾音 l 發邊音，全字發 /meɪl/' }
  ],
  516: [
    { syllable: '單音節［main］', rule: '母音組合 ai (R004)', status: '【適用】', reason: '字母組合 ai 常規發字母長雙母音 /meɪ/，尾音 n 發鼻音，全字發 /meɪn/' }
  ],
  517: [
    { syllable: '單音節［make］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構中字尾 e 靜音，促使母音 a 常規發長雙母音 /meɪk/' }
  ],
  518: [
    { syllable: '單音節［man］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻音 n 封閉音節，單一母音 a 常規發短母音 /mæn/' }
  ],
  519: [
    { syllable: '第 1 音節［man］', rule: '閉音節短母音 (R001) → 特例變音 (R010)', status: '【不適用 (例外轉移)】', reason: '母音 a 未發 /æ/，特殊音變發前中短母音 /ˈmɛn/ (R010)' },
    { syllable: '第 2 音節［y］', rule: '字尾 y 規則 (R002/R008)', status: '【適用】', reason: '非重讀字尾 y 常規發長母音 /i/' }
  ],
  520: [
    { syllable: '單音節［map］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 p 封閉音節，單一母音 a 常規發短母音 /mæp/' }
  ],
  521: [
    { syllable: '單音節［mark］', rule: 'R 控制母音 ar (R005)', status: '【適用】', reason: 'ar 組合受捲舌音控制發長音 /ɑːr/，尾音 k 封閉發 /mɑːrk/' }
  ],
  522: [
    { syllable: '第 1 音節［mar］', rule: 'R 控制母音 ar (R005)', status: '【適用】', reason: '重讀音節 ar 組合常規發 /ɑːr/，音節發 /ˈmɑːr/' },
    { syllable: '第 2 音節［ket］', rule: '閉音節規則 (R001) + 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節 -ket，母音 e 弱化發短音 /kɪt/' }
  ],
  523: [
    { syllable: '第 1 音節［mar］', rule: '雙子音 rr 分節 (R007) + 短母音 /æ/', status: '【適用】', reason: '雙子音 rr 前單一母音 a 常規發短母音 /ˈmær/' },
    { syllable: '第 2 音節［ried］', rule: '字尾 -ed 規則 (R006) + y 變 i (R002)', status: '【適用】', reason: 'y 變 i 接 -ed，發短長音加清濁子音 /id/' }
  ],
  524: [
    { syllable: '第 1 音節［math］', rule: '閉音節規則 (R001) + 無聲 th (R006)', status: '【適用】', reason: 'th /θ/ 封閉次重音節，母音 a 發短母音 /ˌmæθ/' },
    { syllable: '第 2 音節［e］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '單一母音 e 位於非重讀音節，弱化發央母音 /ə/' },
    { syllable: '第 3 音節［mat］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉主重音節，母音 a 常規發短母音 /ˈmæt/' },
    { syllable: '第 4 音節［ics］', rule: '閉音節規則 (R001) / 學科字尾 (R008)', status: '【適用】', reason: '-ics 尾音母音 i 弱讀發短音 /ɪks/' }
  ],
  525: [
    { syllable: '第 1 音節［mat］', rule: '雙子音 tt 閉音節 (R001/R007)', status: '【適用】', reason: '雙子音 tt 劃分音節，母音 a 常規發短母音 /ˈmæt/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音 (R005) + 美式彈音 t (R006)', status: '【適用】', reason: '-er 處非重讀音節發捲舌弱化母音 /ɚ/，美式英語 t 濁化為彈音 [t̬]' }
  ],
  526: [
    { syllable: '單音節［May］', rule: '母音組合 ay (R004)', status: '【適用】', reason: '字母組合 ay 處詞尾固定發長雙母音 /meɪ/' }
  ],
  527: [
    { syllable: '第 1 音節［may］', rule: '複合詞根 (Compound) + 母音組合 ay (R004)', status: '【適用】', reason: '主重音節 may 中 ay 發長雙母音 /ˈmeɪ/' },
    { syllable: '第 2 音節［be］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 e 位於開音節，發長母音 /bi/' }
  ],
  528: [
    { syllable: '單音節［meal］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '字母組合 ea 常規發長母音 /iː/，尾音 l 發邊音，全字發 /miːl/' }
  ],
  529: [
    { syllable: '單音節［mean］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '字母組合 ea 常規發長母音 /iː/，尾音 n 發鼻音，全字發 /miːn/' }
  ],
  530: [
    { syllable: '單音節［meat］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '字母組合 ea 常規發長母音 /iː/，尾音 t 封閉，全字發 /miːt/' }
  ],
  531: [
    { syllable: '第 1 音節［me］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 e 位於重讀開音節，常規發長字母本音 /ˈmiː/' },
    { syllable: '第 2 音節［di］', rule: '母音弱化 / 連音 (R008)', status: '【適用】', reason: '母音 i 處非重讀音節發短音 /di/' },
    { syllable: '第 3 音節［a］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '字尾單一母音 a 弱化發央母音 /ə/' }
  ],
  532: [
    { syllable: '第 1 音節［med］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉重音節，單一母音 e 常規發短母音 /ˈmɛd/' },
    { syllable: '第 2 音節［i］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '單一母音 i 位於非重讀音節，弱化發央母音 /ə/' },
    { syllable: '第 3 音節［cine］', rule: '軟音 c (R006) + 非重讀弱化 (R008)', status: '【適用】', reason: 'c 在 i 前發清擦音 /s/，非重讀 -ine 弱化發短音 /sən/' }
  ],
  533: [
    { syllable: '第 1 音節［me］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 e 處重讀開音節，發長字母音 /ˈmiː/' },
    { syllable: '第 2 音節［di］', rule: '非重讀音節 (R008)', status: '【適用】', reason: '母音 i 弱讀發 /di/' },
    { syllable: '第 3 音節［um］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '拉丁字尾 -um 弱化發央母音加鼻音 /əm/' }
  ],
  534: [
    { syllable: '單音節［meet］', rule: '雙母音組合 ee (R004)', status: '【適用】', reason: '字母組合 ee 固定發長母音 /iː/，全字發 /miːt/' }
  ],
  535: [
    { syllable: '第 1 音節［meet］', rule: '雙母音組合 ee (R004)', status: '【適用】', reason: '重讀音節 ee 固定發長母音 /ˈmiːt/' },
    { syllable: '第 2 音節［ing］', rule: '動名詞字尾 -ing (R006/R008)', status: '【適用】', reason: '-ing 字尾發 /ɪŋ/，美式英語 t 常濁化為彈音 [t̬]' }
  ],
  536: [
    { syllable: '第 1 音節［mem］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻音 m 封閉主重音節，單一母音 e 常規發短母音 /ˈmɛm/' },
    { syllable: '第 2 音節［ber］', rule: 'R 控制母音 (R005) + 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節 -er 組合發捲舌弱化母音 /bər/' }
  ],
  537: [
    { syllable: '第 1 音節［men］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻音 n 封閉重音節，母音 e 常規發短母音 /ˈmɛn/' },
    { syllable: '第 2 音節［u］', rule: '開音節母音 u (R002)', status: '【適用】', reason: '單一母音 u 處字尾開音節，發長音 /juː/' }
  ],
  538: [
    { syllable: '第 1 音節［mid］', rule: '雙子音 dd 閉音節 (R001/R007)', status: '【適用】', reason: '雙子音 dd 劃分音節使第一音節閉合，母音 i 發短母音 /ˈmɪd/' },
    { syllable: '第 2 音節［dle］', rule: '子音+le 成音節 (R009)', status: '【適用】', reason: '-dle 結構中 e 靜音，d 與邊音 l 結合成音節 /əl/' }
  ],
  539: [
    { syllable: '單音節［milk］', rule: '閉音節規則 (R001) + 子音群 lk (R006)', status: '【適用】', reason: '子音群 lk 封閉音節，單一母音 i 常規發短母音 /mɪlk/' }
  ],
  540: [
    { syllable: '第 1 音節［mil］', rule: '雙子音 ll 閉音節 (R001/R007)', status: '【適用】', reason: '雙子音 ll 劃分音節使前音節閉合，母音 i 發短母音 /ˈmɪl/' },
    { syllable: '第 2 音節［lion］', rule: '半母音滑音 + 弱化 (R008)', status: '【適用】', reason: '-lion 中 i 轉為半母音 /j/，母音 o 弱化發央母音 /jən/' }
  ],
  541: [
    { syllable: '單音節［mind］', rule: '閉音節規則 (R001) → 特例長母音 -ind (R010/R002)', status: '【不適用 (例外轉移)】', reason: '-ind 組合打破一般閉音節規則，母音 i 受後方鼻音子音群影響發長雙母音 /maɪnd/ (R010)' }
  ],
  542: [
    { syllable: '單音節［mine］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構中字尾 e 靜音，促使母音 i 發長雙母音本音 /maɪn/' }
  ],
  543: [
    { syllable: '第 1 音節［min］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻音 n 封閉重音節，母音 i 發短母音 /ˈmɪn/' },
    { syllable: '第 2 音節［ute］', rule: '魔術 e 規則 (R003) → 非重讀弱化 (R008/R010)', status: '【不適用 (例外轉移)】', reason: '非重讀 -ute 未發長音 /juːt/，特殊弱化發短音 /ɪt/ (R010)' }
  ],
  544: [
    { syllable: '單音節［miss］', rule: '閉音節規則 (R001) + 雙子音 ss (R006)', status: '【適用】', reason: '雙子音 ss 封閉音節，單一母音 i 常規發短母音 /mɪs/' }
  ],
  545: [
    { syllable: '第 1 音節［mis］', rule: '閉音節前綴 (R001/R008)', status: '【適用】', reason: '否定前綴 mis- 處次重讀，母音 i 發短音 /mɪ/' },
    { syllable: '第 2 音節［take］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音，主重音節母音 a 發長雙母音 /ˈsteɪk/' }
  ],
  546: [
    { syllable: '第 1 音節［mod］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉重音節，單一母音 o 常規發短母音 /ˈmɑː.d/' },
    { syllable: '第 2 音節［ern］', rule: 'R 控制母音 (R005) + 非重讀弱化 (R008)', status: '【適用】', reason: '-ern 處非重音節，母音 er 發捲舌音 /ɚn/' }
  ],
  547: [
    { syllable: '第 1 音節［mo］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 o 處重讀開音節，常規發長雙母音 /ˈmoʊ/' },
    { syllable: '第 2 音節［ment］', rule: '名詞字尾弱化 (R008)', status: '【適用】', reason: '非重讀字尾 -ment，母音 e 弱化發央母音 /mənt/' }
  ],
  548: [
    { syllable: '第 1 音節［mon］', rule: '閉音節短母音 (R001) → 特例短中舌母音 (R010)', status: '【不適用 (例外轉移)】', reason: '母音 o 未發短音 /ɑː/，受古英語音變轉移發短中舌母音 /ˈmʌn/ (R010)' },
    { syllable: '第 2 音節［ey］', rule: '母音組合 ey (R004)', status: '【適用】', reason: '字尾 -ey 處非重讀音節常規發短長母音 /i/' }
  ],
  549: [
    { syllable: '第 1 音節［mon］', rule: '閉音節短母音 (R001) → 特例轉移 (R010) + 軟顎鼻音 (R006)', status: '【不適用 (例外轉移)】', reason: '母音 o 特殊轉移發 /ʌ/，鼻音 n 受後方 k 同化發軟顎鼻音 /ŋ/，構成 /ˈmʌŋ/ (R010)' },
    { syllable: '第 2 音節［key］', rule: '母音組合 ey (R004)', status: '【適用】', reason: '字尾 -ey 處非重音節常規發長母音 /ki/' }
  ],
  550: [
    { syllable: '單音節［month］', rule: '閉音節規則 (R001) → 特例短母音轉移 (R010) + 無聲 th (R006)', status: '【不適用 (例外轉移)】', reason: '母音 o 特殊轉移發短中舌母音 /ʌ/，th 發無聲擦音 /θ/，全字發 /mʌnθ/ (R010)' }
  ],
  551: [
    { syllable: '單音節［moon］', rule: '雙母音組合 oo (R004)', status: '【適用】', reason: 'oo 字母組合常規發長雙母音 /uː/，尾音 n 發鼻音，全字發 /muːn/' }
  ],
  552: [
    { syllable: '單音節［more］', rule: 'R 控制魔術 e 組合 o_re (R005/R003)', status: '【適用】', reason: '字尾 e 靜音，ore 組合常規發捲舌長母音 /mɔːr/' }
  ],
  553: [
    { syllable: '第 1 音節［mor］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: 'or 組合處重讀音節常規發捲舌音 /ˈmɔːr/' },
    { syllable: '第 2 音節［ning］', rule: '非重讀弱化 (R008) + 鼻音 ng (R006)', status: '【適用】', reason: '字尾 -ing 發弱化鼻音 /nɪŋ/' }
  ],
  554: [
    { syllable: '單音節［most］', rule: '閉音節規則 (R001) → 特例長母音 -ost (R010/R002)', status: '【不適用 (例外轉移)】', reason: '-ost 結構打破閉音節常規，母音 o 特殊發長雙母音 /moʊst/ (R010)' }
  ],
  555: [
    { syllable: '第 1 音節［moth］', rule: '特例短中舌母音 (R010) + 有聲 th (R006)', status: '【不適用 (例外轉移)】', reason: '母音 o 特殊轉移發短母音 /ʌ/，th 介於母音間發有聲擦音 /ˈmʌð/ (R010)' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 (R005) + 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀字尾 -er 發捲舌央母音 /ɚ/' }
  ],
  556: [
    { syllable: '第 1 音節［moun］', rule: '雙母音組合 ou (R004) + 鼻音 n', status: '【適用】', reason: '雙母音 ou 承擔主重音常規發 /ˈmaʊn/' },
    { syllable: '第 2 音節［tain］', rule: '母音組合 ai (R004) → 非重讀弱化 (R008/R010)', status: '【不適用 (例外轉移)】', reason: '非重讀字尾 -tain 母音 ai 未發 /eɪ/，特殊弱化為央母音 /tən/ (R010)' }
  ],
  557: [
    { syllable: '單音節［mouse］', rule: '雙母音組合 ou (R004) + 尾音 se (R006)', status: '【適用】', reason: 'ou 組合發雙母音 /aʊ/，字尾 se 發清擦音 /s/，全字發 /maʊs/' }
  ],
  558: [
    { syllable: '單音節［mouth］', rule: '雙母音組合 ou (R004) + 無聲 th (R006)', status: '【適用】', reason: 'ou 組合發雙母音 /aʊ/，尾音 th 發無聲擦音 /θ/，全字發 /maʊθ/' }
  ],
  559: [
    { syllable: '單音節［move］', rule: '魔術 e 規則 (R003) → 特例長母音轉移 (R010)', status: '【不適用 (例外轉移)】', reason: 'o_e 結構中母音 o 未發 /oʊ/，受外來音變轉移發長圓唇母音 /muːv/ (R010)' }
  ],
  560: [
    { syllable: '第 1 音節［mov］', rule: '特例長母音轉移 (R010)', status: '【不適用 (例外轉移)】', reason: '母音 o 依循 move 之音變發長圓唇音 /ˈmuːv/ (R010)' },
    { syllable: '第 2 音節［ie］', rule: '雙母音 ie 字尾 (R004/R008)', status: '【適用】', reason: '字尾 -ie 處非重音節常規發短長母音 /i/' }
  ],
  561: [
    { syllable: '第 1 音節［Mis］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉重音節，單一母音 i 常規發短母音 /ˈmɪs/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音 (R005) + 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節 -er 組合發捲舌弱化母音 /tɚ/' }
  ],
  562: [
    { syllable: '第 1 音節［Mrs.］', rule: '慣用縮寫語音 (R010)', status: '【不適用 (例外轉移)】', reason: '歷史敬稱縮寫，常規約定發音為雙音節 /ˈmɪs.ɪz/ (R010)' }
  ],
  563: [
    { syllable: '單音節［Ms.］', rule: '現代女性敬稱縮寫 (R010)', status: '【不適用 (例外轉移)】', reason: '現代女性敬稱縮寫，常規濁音化發 /mɪz/ (R010)' }
  ],
  564: [
    { syllable: '單音節［much］', rule: '閉音節規則 (R001) + 複合子音 ch (R006)', status: '【適用】', reason: '複合子音 ch /tʃ/ 封閉音節，單一母音 u 常規發短母音 /mʌtʃ/' }
  ],
  565: [
    { syllable: '單音節［mud］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉音節，單一母音 u 常規發短母音 /mʌd/' }
  ],
  566: [
    { syllable: '第 1 音節［mu］', rule: '開音節規則 (R002) + 次重音弱化 (R008)', status: '【適用】', reason: '單一母音 u 處開音節發半母音加母音 /mjuː/' },
    { syllable: '第 2 音節［se］', rule: '開音節規則 (R002) + s 濁化 (R006)', status: '【適用】', reason: '主重音開音節，母音 e 發長母音 /ˈziː/，s 位於母音間濁化為 /z/' },
    { syllable: '第 3 音節［um］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '字尾 -um 處非重音節，弱化發央母音加鼻音 /əm/' }
  ],
  567: [
    { syllable: '第 1 音節［mu］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 u 處重讀開音節，發字母本音 /ˈmjuː/' },
    { syllable: '第 2 音節［sic］', rule: '閉音節規則 (R001) + s 濁化 (R006)', status: '【適用】', reason: 's 介於母音間濁化發 /z/，-ic 非重音節發短音 /zɪk/' }
  ],
  568: [
    { syllable: '單音節［must］', rule: '閉音節規則 (R001) + 子音群 st (R006)', status: '【適用】', reason: '子音群 st 封閉音節，單一母音 u 常規發短母音 /mʌst/' }
  ],
  569: [
    { syllable: '單音節［name］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構中字尾 e 靜音，母音 a 常規發長雙母音 /neɪm/' }
  ],
  570: [
    { syllable: '第 1 音節［na］', rule: '三音節短音化 (Trisyllabic Laxing, R010)', status: '【不適用 (例外轉移)】', reason: '衍生自 nation，但因三音節法則母音 a 轉移發短母音 /ˈnæ/ (R010)' },
    { syllable: '第 2 音節［tion］', rule: '特殊複合字尾 -tion (R006/R008)', status: '【適用】', reason: '-tion 固定發清擦音加弱化母音 /ʃən/' },
    { syllable: '第 3 音節［al］', rule: '形容詞字尾弱化 (R008) / 成音節 (R009)', status: '【適用】', reason: '-al 弱化發成音節邊音 /əl/' }
  ],
  571: [
    { syllable: '第 1 音節［na］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 a 位於主重讀開音節，常規發長雙母音 /ˈneɪ/' },
    { syllable: '第 2 音節［ture］', rule: '特殊字尾 -ture (R010/R005)', status: '【適用】', reason: '-ture 為常見複合音節字尾，發塞擦音加捲舌音 /tʃər/' }
  ],
  572: [
    { syllable: '單音節［near］', rule: '母音組合 ear (R004/R005)', status: '【適用】', reason: 'ear 字母組合受捲舌音控制發 /nɪr/' }
  ],
  573: [
    { syllable: '單音節［neck］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: '複合子音 ck 封閉音節，單一母音 e 常規發短母音 /nɛk/' }
  ],
  574: [
    { syllable: '單音節［need］', rule: '雙母音組合 ee (R004)', status: '【適用】', reason: '字母組合 ee 固定發長母音 /iː/，全字發 /niːd/' }
  ],
  575: [
    { syllable: '單音節［net］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 e 常規發短母音 /nɛt/' }
  ],
  576: [
    { syllable: '第 1 音節［nev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 v 封閉重音節，單一母音 e 常規發短母音 /ˈnɛv/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 (R005) + 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -er 發捲舌央母音 /ɚ/' }
  ],
  577: [
    { syllable: '單音節［new］', rule: '母音組合 ew (R004)', status: '【適用】', reason: '字母組合 ew 處詞尾常規發長母音 /nuː/' }
  ],
  578: [
    { syllable: '單音節［news］', rule: '母音組合 ew (R004) + s 濁化 (R006)', status: '【適用】', reason: 'ew 發長母音 /uː/，字尾 s 接濁母音濁化為 /z/，全字發 /nuːz/' }
  ],
  579: [
    { syllable: '第 1 音節［news］', rule: '母音組合 ew (R004) + s 濁化', status: '【適用】', reason: '複合字根 news-，ew 發長母音 /uː/，s 濁化為 /z/，發 /ˈnuːz/' },
    { syllable: '第 2 音節［pa］', rule: '開音節規則 (R002)', status: '【適用】', reason: '次重音開音節，單一母音 a 發字母本音 /ˌpeɪ/' },
    { syllable: '第 3 音節［per］', rule: 'R 控制母音 (R005) + 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -er 弱化發捲舌音 /pər/' }
  ],
  580: [
    { syllable: '單音節［next］', rule: '閉音節規則 (R001) + 子音群 xt (R006)', status: '【適用】', reason: 'x 代表雙子音 /ks/，封閉音節，母音 e 常規發短母音 /nɛkst/' }
  ],
  581: [
    { syllable: '單音節［nice］', rule: '魔術 e 規則 (R003) + 軟音 c (R006)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音促使 i 發長雙母音 /aɪ/，c 在 e 前發軟音 /s/，全字發 /naɪs/' }
  ],
  582: [
    { syllable: '單音節［night］', rule: '母音組合 igh (R004) + 靜音 gh (R006)', status: '【適用】', reason: '字母組合 -igh- 中 gh 靜音，促使母音 i 發長雙母音 /naɪt/' }
  ],
  583: [
    { syllable: '單音節［no］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 o 位於單音節字尾開音節，常規發長雙母音 /noʊ/' }
  ],
  584: [
    { syllable: '第 1 音節［no］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節，母音 o 發長雙母音 /ˈnoʊ/' },
    { syllable: '第 2 音節［bod］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉次音節，母音 o 發短母音 /bɑːd/' },
    { syllable: '第 3 音節［y］', rule: '字尾 y 規則 (R002/R008)', status: '【適用】', reason: '非重讀字尾 y 常規發長母音 /i/' }
  ],
  585: [
    { syllable: '單音節［noise］', rule: '雙母音組合 oi (R004) + 尾音 se 濁化 (R006)', status: '【適用】', reason: 'oi 常規發雙母音 /ɔɪ/，字尾 se 發濁音 /z/，全字發 /nɔɪz/' }
  ],
  586: [
    { syllable: '第 1 音節［nois］', rule: '雙母音 oi (R004) + s 濁化', status: '【適用】', reason: '母音組合 oi 常規發雙母音 /ˈnɔɪ/，s 位於母音間濁化為 /z/' },
    { syllable: '第 2 音節［y］', rule: '字尾 y 規則 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節，常規發長音 /i/' }
  ],
  587: [
    { syllable: '單音節［noon］', rule: '雙母音組合 oo (R004)', status: '【適用】', reason: 'oo 字母組合常規發長雙母音 /uː/，全字發 /nuːn/' }
  ],
  588: [
    { syllable: '單音節［north］', rule: 'R 控制母音 or (R005) + 無聲 th (R006)', status: '【適用】', reason: 'or 組合受捲舌音控制發 /ɔːr/，尾音 th 發清擦音 /θ/，全字發 /nɔːrθ/' }
  ],
  589: [
    { syllable: '單音節［nose］', rule: '魔術 e 規則 (R003) + s 濁化 (R006)', status: '【適用】', reason: 'o_e 結構中字尾 e 靜音促使 o 發長音 /oʊ/，s 位於母音間濁化為 /z/，全字發 /noʊz/' }
  ],
  590: [
    { syllable: '單音節［not］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 o 常規發短母音 /nɑːt/' }
  ],
  591: [
    { syllable: '單音節［note］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 結構中字尾 e 靜音，母音 o 常規發長雙母音 /noʊt/' }
  ],
  592: [
    { syllable: '第 1 音節［noth］', rule: '特例短中舌母音 (R010) + 無聲 th (R006)', status: '【不適用 (例外轉移)】', reason: '母音 o 未發長音 /oʊ/，受音變發短中舌母音 /ˈnʌθ/ (R010)' },
    { syllable: '第 2 音節［ing］', rule: '非重讀弱化 (R008) + 鼻音 ng (R006)', status: '【適用】', reason: '-ing 字尾發非重讀鼻音 /ɪŋ/' }
  ],
  593: [
    { syllable: '第 1 音節［no］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 o 處重讀開音節，發長雙母音 /ˈnoʊ/' },
    { syllable: '第 2 音節［tice］', rule: '軟音 c (R006) + 非重讀弱化 (R008)', status: '【適用】', reason: 'c 在 e 前發清擦音 /s/，-ice 非重讀音節弱化發短音 /t̬ɪs/' }
  ],
  594: [
    { syllable: '單音節［now］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 組合於此常規發雙母音 /naʊ/' }
  ],
  595: [
    { syllable: '第 1 音節［num］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻音 m 封閉重音節，母音 u 常規發短母音 /ˈnʌm/' },
    { syllable: '第 2 音節［ber］', rule: 'R 控制母音 (R005) + 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節 -er 發捲舌央母音 /bɚ/' }
  ],
  596: [
    { syllable: '單音節［nurse］', rule: 'R 控制母音 ur (R005) + 尾音 se (R006)', status: '【適用】', reason: 'ur 組合受捲舌音控制發長音 /ɝː/，字尾 se 發清音 /s/，全字發 /nɝːs/' }
  ],
  597: [
    { syllable: '第 1 音節［o］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 o 處於開音節，發字母本音 /oʊ/' },
    { syllable: '第 2 音節［kay］', rule: '母音組合 ay (R004)', status: '【適用】', reason: '字尾 ay 字母組合承擔主重音，發長雙母音 /ˈkeɪ/' }
  ],
  598: [
    { syllable: '第 1 音節［o\'］', rule: '前綴弱化 (R008)', status: '【適用】', reason: '縮寫前綴 o\' 處非重讀音節，弱化發央母音 /ə/' },
    { syllable: '第 2 音節［clock］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: 'ck /k/ 封閉重讀音節，母音 o 常規發短母音 /ˈklɑːk/' }
  ],
  599: [
    { syllable: '單音節［of］', rule: '閉音節短母音 (R001) → 弱讀及濁化 (R010/R006)', status: '【不適用 (例外轉移)】', reason: '單一母音 o 轉移發中舌母音 /ʌ/，尾音 f 特殊濁化為 /v/，全字發 /ʌv/ (R010)' }
  ],
  600: [
    { syllable: '單音節［off］', rule: '閉音節規則 (R001) + 雙子音 ff (R006)', status: '【適用】', reason: '雙子音 ff 封閉音節，單一母音 o 常規發短開後母音 /ɑːf/' }
  ]
};
