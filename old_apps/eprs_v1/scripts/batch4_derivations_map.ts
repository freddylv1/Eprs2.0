export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch4DerivationsMap: Record<number, DerivationItem[]> = {
  301: [
    { syllable: '單音節［feed］', rule: '母音組合 ee (R004)', status: '【適用】', reason: '雙母音 ee 常規發固定長母音 /iː/，子音 d 結尾發 /fiːd/' }
  ],
  302: [
    { syllable: '單音節［feel］', rule: '母音組合 ee (R004)', status: '【適用】', reason: '雙母音 ee 常規發長母音 /iː/，結合舌尖齒齦邊音 l 發 /fiːl/' }
  ],
  303: [
    { syllable: '第 1 音節［fes］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉且為重音節，母音 e 常規發短母音 /ˈfɛs/' },
    { syllable: '第 2 音節［ti］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀母音 i 弱化發短音 /tə/' },
    { syllable: '第 3 音節［val］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-al 後綴非重讀弱化發輕母音 /vəl/' }
  ],
  304: [
    { syllable: '單音節［few］', rule: '母音組合 ew (R004)', status: '【適用】', reason: 'ew 字母組合常規發雙母音 /juː/，全字發 /fjuː/' }
  ],
  305: [
    { syllable: '單音節［fight］', rule: '母音組合 igh (R004) + 靜音 gh (R006)', status: '【適用】', reason: 'igh 特殊組合中 gh 靜音，母音 i 發長雙母音 /faɪt/' }
  ],
  306: [
    { syllable: '單音節［file］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '字尾 e 靜音促使前面母音 i 發長音 /aɪ/，結合尾音 l 發 /faɪl/' }
  ],
  307: [
    { syllable: '單音節［fill］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 ll 封閉音節，單一母音 i 常規發短母音 /fɪl/' }
  ],
  308: [
    { syllable: '第 1 音節［fi］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音 i 結尾受主重音，常規發長雙母音 /ˈfaɪ/' },
    { syllable: '第 2 音節［nal］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-al 後綴處於非重讀音節，母音弱化發 /nəl/' },
    { syllable: '第 3 音節［ly］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '副詞後綴 -ly 處非重讀音節，y 常規發長母音 /li/' }
  ],
  309: [
    { syllable: '單音節［find］', rule: '閉音節規則 (R001) → 特例長母音 -ind (R010/R002)', status: '【不適用 (例外轉移)】', reason: '-ind 組合打破一般閉音節規則，母音 i 歷史長音化發長雙母音 /faɪnd/ (R010)' }
  ],
  310: [
    { syllable: '單音節［fine］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構中字尾 e 靜音，母音 i 發字母長音 /faɪn/' }
  ],
  311: [
    { syllable: '第 1 音節［fin］', rule: '閉音節規則 (R001) + 複合鼻音 ng (R006)', status: '【適用】', reason: '重音節母音 i 在 g 前鼻音化，發 /ˈfɪŋ/' },
    { syllable: '第 2 音節［ger］', rule: '硬音 g (R007) + R 控制母音弱化 (R005/R008)', status: '【適用】', reason: 'g 發濁塞音 /ɡ/，-er 處非重讀音節弱化發輕捲舌母音 /ɡɚ/' }
  ],
  312: [
    { syllable: '第 1 音節［fin］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為重音節，母音 i 常規發短母音 /ˈfɪn/' },
    { syllable: '第 2 音節［ish］', rule: '非重讀弱化 (R008) + 複合子音 sh (R006)', status: '【適用】', reason: '-ish 後綴非重讀發 /ɪʃ/，sh 保持完整發摩擦音 /ʃ/' }
  ],
  313: [
    { syllable: '單音節［fire］', rule: '魔術 e (R003) + R 控制長音 (R005)', status: '【適用】', reason: 'i_e 促使母音 i 發長雙母音 /aɪ/，字尾 r 使雙母音展開為 /ˈfaɪ.ɚ/' }
  ],
  314: [
    { syllable: '單音節［first］', rule: 'R 控制母音 ir (R005)', status: '【適用】', reason: 'ir 組合受 r 控制常規發捲舌長母音 /ɝː/，結合尾音 -st 發 /fɝːst/' }
  ],
  315: [
    { syllable: '單音節［fish］', rule: '閉音節規則 (R001) + 複合子音 sh (R006)', status: '【適用】', reason: '母音 i 於閉音節發短母音 /ɪ/，sh 保持完整發單一音 /ʃ/' }
  ],
  316: [
    { syllable: '單音節［floor］', rule: '子音叢 fl (R006) + 母音組合 oor (R004/R005)', status: '【適用】', reason: '子音叢 fl- 開頭，oor 受 r 牽引常規發長捲舌母音 /ɔːr/，全字發 /flɔːr/' }
  ],
  317: [
    { syllable: '第 1 音節［flow］', rule: '子音叢 fl (R006) + 母音組合 ow (R004)', status: '【適用】', reason: '子音叢 fl- 開頭，ow 雙母音於重音節常規發雙母音 /ˈflaʊ/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '-er 後綴非重讀弱化發輕捲舌母音 /ɚ/' }
  ],
  318: [
    { syllable: '單音節［fly］', rule: '子音叢 fl (R006) + 開音節 y 半母音 (R002)', status: '【適用】', reason: 'fl- 子音叢開頭，單音節字尾 y 作母音結尾發長雙母音 /flaɪ/' }
  ],
  319: [
    { syllable: '第 1 音節［fol］', rule: '雙子音中間切分 (VCCV) + 閉音節 (R001)', status: '【適用】', reason: 'll 子音中間切分，重音節母音 o 於閉音節常規發短母音 /ˈfɑːl/' },
    { syllable: '第 2 音節［low］', rule: '母音組合 ow (R004) → 非重讀長雙母音', status: '【適用】', reason: '字尾 -ow 處非重音節常規發長雙母音 /loʊ/' }
  ],
  320: [
    { syllable: '單音節［food］', rule: '母音組合 oo (R004)', status: '【適用】', reason: 'oo 雙母音常規發長母音 /uː/，子音 d 結尾發 /fuːd/' }
  ],
  321: [
    { syllable: '單音節［fool］', rule: '母音組合 oo (R004)', status: '【適用】', reason: 'oo 雙母音常規發長母音 /uː/，舌尖齒齦音 l 結尾發 /fuːl/' }
  ],
  322: [
    { syllable: '單音節［foot］', rule: '母音組合 oo (R004) → 短音特例 (R010)', status: '【不適用 (例外轉移)】', reason: 'oo 於 -t 前常規縮短發短母音 /fʊt/ (R010)' }
  ],
  323: [
    { syllable: '單音節［for］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: 'or 組合受 r 控制常規發長捲舌母音 /fɔːr/' }
  ],
  324: [
    { syllable: '第 1 音節［for］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: '重音節 or 常規發捲舌母音 /ˈfɔːr/' },
    { syllable: '第 2 音節［eign］', rule: '特殊靜音 g (R006) + 弱化 (R008)', status: '【適用】', reason: '-eign 後綴中 g 靜音，母音非重讀弱化發 /ən/' }
  ],
  325: [
    { syllable: '第 1 音節［for］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: '重音節 or 常規發捲舌母音 /ˈfɔːr/' },
    { syllable: '第 2 音節［eign］', rule: '特殊靜音 g (R006) + 弱化 (R008)', status: '【適用】', reason: '-eign 中 g 靜音，非重讀發 /ə/' },
    { syllable: '第 3 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '-er 人稱名詞後綴非重讀弱化發 /nɚ/' }
  ],
  326: [
    { syllable: '第 1 音節［for］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '前綴 for- 處於非重讀音節，母音弱化發輕捲舌音 /fɚ/' },
    { syllable: '第 2 音節［get］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉且受主重音，母音 e 常規發短母音 /ˈɡɛt/' }
  ],
  327: [
    { syllable: '單音節［fork］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: 'or 組合受 r 控制常規發長捲舌母音 /ɔːr/，結合尾音 k 發 /fɔːrk/' }
  ],
  328: [
    { syllable: '單音節［free］', rule: '子音叢 fr (R006) + 母音組合 ee (R004)', status: '【適用】', reason: '子音叢 fr- 開頭，雙母音 ee 常規發長母音 /friː/' }
  ],
  329: [
    { syllable: '單音節［fresh］', rule: '子音叢 fr (R006) + 閉音節 (R001) + 複合子音 sh (R006)', status: '【適用】', reason: 'fr- 開頭，母音 e 於閉音節發短音 /frɛ/，sh 發單一摩擦音 /ʃ/' }
  ],
  330: [
    { syllable: '單音節［friend］', rule: '母音組合規則 (R004) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'ie 雙母音常規發長音 /iː/，此處特例發短母音 /frɛnd/ (R010)' }
  ],
  331: [
    { syllable: '第 1 音節［friend］', rule: '母音組合規則 (R004) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'friend 詞根特例發短母音 /ˈfrɛnd/ (R010)' },
    { syllable: '第 2 音節［ly］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '-ly 後綴非重讀常規發長母音 /li/' }
  ],
  332: [
    { syllable: '單音節［frog］', rule: '子音叢 fr (R006) + 閉音節 (R001)', status: '【適用】', reason: 'fr- 開頭，子音 g 封閉音節，單一母音 o 常規發短母音 /frɑːɡ/' }
  ],
  333: [
    { syllable: '單音節［from］', rule: '子音叢 fr (R006) + 閉音節規則 (R001) → 弱化短母音 (R010)', status: '【適用 (部分轉移)】', reason: 'fr- 開頭，介系詞日常口語母音常規弱化發 /frʌm/ 或 /frəm/' }
  ],
  334: [
    { syllable: '單音節［front］', rule: '子音叢 fr (R006) + 閉音節規則 (R001) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '閉音節字母 o 常規發 /ɑː/，此處受鼻音叢 nt 影響特例發短母音 /frʌnt/ (R010)' }
  ],
  335: [
    { syllable: '單音節［fruit］', rule: '子音叢 fr (R006) + 母音組合 ui (R004)', status: '【適用】', reason: 'fr- 開頭，ui 雙母音常規發長母音 /uː/，結合尾音 t 發 /fruːt/' }
  ],
  336: [
    { syllable: '單音節［full］', rule: '雙子音閉音節 (R001) → 特例短圓唇音 (R010)', status: '【不適用 (例外轉移)】', reason: '閉音節 u 常規發 /ʌ/，在 -ll 前特例發後高短圓唇音 /fʊl/ (R010)' }
  ],
  337: [
    { syllable: '單音節［fun］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉音節，單一母音 u 常規發短母音 /fʌn/' }
  ],
  338: [
    { syllable: '第 1 音節［fun］', rule: '雙子音中間切分 (VCCV) + 閉音節 (R001)', status: '【適用】', reason: 'nn 雙子音切分，重音節母音 u 常規發短母音 /ˈfʌn/' },
    { syllable: '第 2 音節［ny］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /ni/' }
  ],
  339: [
    { syllable: '第 1 音節［fu］', rule: '開音節規則 (R002)', status: '【適用】', reason: '母音 u 結尾受主重音，常規發長雙母音 /ˈfjuː/' },
    { syllable: '第 2 音節［ture］', rule: '成音節字尾 (R009) + 顎化音變 (R008)', status: '【適用】', reason: '-ture 後綴受 r 影響弱化發塞擦音 /tʃɚ/' }
  ],
  340: [
    { syllable: '單音節［game］', rule: '魔術 e 規則 (R003) + 硬音 g (R007)', status: '【適用】', reason: 'g 在 a 前發硬音 /ɡ/，a_e 促使母音 a 發字母長音 /ɡeɪm/，字尾 e 靜音' }
  ],
  341: [
    { syllable: '第 1 音節［gar］', rule: '硬音 g (R007) + R 控制母音 ar (R005)', status: '【適用】', reason: 'g 在 a 前發硬音 /ɡ/，重音節 ar 常規發長捲舌母音 /ˈɡɑːr/' },
    { syllable: '第 2 音節［den］', rule: '成音節/非重讀弱化 (R008/R009)', status: '【適用】', reason: '-den 後綴非重讀弱化，發成音節鼻音 /dən/' }
  ],
  342: [
    { syllable: '單音節［gate］', rule: '魔術 e 規則 (R003) + 硬音 g (R007)', status: '【適用】', reason: 'g 在 a 前發硬音 /ɡ/，a_e 促使母音 a 發字母長音 /ɡeɪt/，字尾 e 靜音' }
  ],
  343: [
    { syllable: '單音節［get］', rule: '閉音節 (R001) → 硬音 g 特例 (R010/R007)', status: '【不適用 (例外轉移)】', reason: 'g 在 e 前原則發軟音 /dʒ/，此處為日耳曼語源特例保留硬音 /ɡɛt/ (R010)' }
  ],
  344: [
    { syllable: '單音節［ghost］', rule: '複合子音 gh (R006) + -ost 特例長母音 (R010/R002)', status: '【不適用 (例外轉移)】', reason: 'gh 字母組合中 h 靜音發硬音 /ɡ/；-ost 組合中母音 o 特例發長雙母音 /ɡoʊst/ (R010)' }
  ],
  345: [
    { syllable: '第 1 音節［gi］', rule: '軟音 g (R007) + 開音節長母音 (R002)', status: '【適用】', reason: 'g 在 i 前常規發軟音 /dʒ/，開音節母音 i 受主重音發長雙母音 /ˈdʒaɪ/' },
    { syllable: '第 2 音節［ant］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '-ant 後綴處於非重讀音節，母音弱化發 /ənt/' }
  ],
  346: [
    { syllable: '單音節［gift］', rule: '閉音節 (R001) → 硬音 g 特例 (R010/R007)', status: '【不適用 (例外轉移)】', reason: 'g 在 i 前原則發軟音 /dʒ/，此處特例發硬音 /ɡɪft/ (R010)' }
  ],
  347: [
    { syllable: '單音節［girl］', rule: 'R 控制母音 ir (R005) → 硬音 g 特例 (R010/R007)', status: '【不適用 (例外轉移)】', reason: 'g 在 i 前特例發硬音 /ɡ/ (R010)；ir 受 r 控制常規發長捲舌母音 /ɝːl/' }
  ],
  348: [
    { syllable: '單音節［give］', rule: '魔術 e 規則 (R003) → 硬音 g 與短母音特例 (R010)', status: '【不適用 (例外轉移)】', reason: 'g 在 i 前特例發硬音 /ɡ/；字尾 e 未使 i 發長音，特例發短音 /ɡɪv/ (R010)' }
  ],
  349: [
    { syllable: '單音節［glad］', rule: '子音叢 gl (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 gl- 開頭，子音 d 封閉音節，單一母音 a 常規發短母音 /ɡlæd/' }
  ],
  350: [
    { syllable: '單音節［glass］', rule: '子音叢 gl (R006) + 雙子音閉音節 (R001)', status: '【適用】', reason: 'gl- 開頭，雙子音 ss 封閉音節，母音 a 常規發短母音 /ɡlæs/' }
  ],
  351: [
    { syllable: '第 1 音節［glass］', rule: '子音叢 gl (R006) + 閉音節 (R001)', status: '【適用】', reason: '重音節母音 a 常規發短母音 /ˈɡlæs/' },
    { syllable: '第 2 音節［es］', rule: '名詞複數弱化後綴 (R008)', status: '【適用】', reason: '名詞以 s 結尾加 -es，發成音節弱化音 /ɪz/' }
  ],
  352: [
    { syllable: '單音節［glove］', rule: '魔術 e 規則 (R003) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'o_e 常規發長音 /oʊ/，此處受尾音 v 影響特例發短母音 /ɡlʌv/ (R010)' }
  ],
  353: [
    { syllable: '單音節［go］', rule: '開音節規則 (R002) + 硬音 g (R007)', status: '【適用】', reason: 'g 在 o 前發硬音 /ɡ/，單一母音 o 於字尾開音節常規發字母長音 /ɡoʊ/' }
  ],
  354: [
    { syllable: '單音節［god］', rule: '閉音節規則 (R001) + 硬音 g (R007)', status: '【適用】', reason: 'g 在 o 前發硬音 /ɡ/，子音 d 封閉音節，單一母音 o 常規發短母音 /ɡɑːd/' }
  ],
  355: [
    { syllable: '單音節［good］', rule: '母音組合 oo (R004) → 短音特例 (R010)', status: '【不適用 (例外轉移)】', reason: 'oo 在 d 前歷史演變為短母音 /ɡʊd/ (R010)' }
  ],
  356: [
    { syllable: '第 1 音節［good］', rule: '母音組合規則 (R004) → 短音特例 (R010)', status: '【不適用 (例外轉移)】', reason: '複合詞次重音 good 特例發短母音 /ˌɡʊd/ (R010)' },
    { syllable: '第 2 音節［bye］', rule: '開音節規則 (R002) → 特例長雙母音', status: '【適用】', reason: '字尾 -ye 受主重音發長雙母音 /ˈbaɪ/' }
  ],
  357: [
    { syllable: '單音節［grade］', rule: '子音叢 gr (R006) + 魔術 e 規則 (R003)', status: '【適用】', reason: 'gr- 開頭，a_e 促使母音 a 發字母長音 /ɡreɪd/，字尾 e 靜音' }
  ],
  358: [
    { syllable: '第 1 音節［grand］', rule: '子音叢 gr (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 nd 封閉且為重音節，母音 a 常規發短母音 /ˈɡræn/' },
    { syllable: '第 2 音節［fa］', rule: '開音節規則 (R002) → 特例後低母音 (R010)', status: '【不適用 (例外轉移)】', reason: '開音節 a 常規發長音 /eɪ/，father 詞根特例發後低母音 /fɑː/ (R010)' },
    { syllable: '第 3 音節［ther］', rule: '複合子音 th (R006) + R 控制母音弱化 (R005/R008)', status: '【適用】', reason: 'th 發濁咬舌音 /ð/，-er 弱化發輕捲舌母音 /ðɚ/' }
  ],
  359: [
    { syllable: '第 1 音節［grand］', rule: '子音叢 gr (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 nd 封閉且為重音節，母音 a 常規發短母音 /ˈɡræn/' },
    { syllable: '第 2 音節［moth］', rule: '閉音節規則 (R001) → 特例短母音 (R010) + 複合子音 th (R006)', status: '【不適用 (例外轉移)】', reason: 'mother 詞根之母音 o 特例發短母音 /mʌð/ (R010)，th 發濁咬舌音 /ð/' },
    { syllable: '第 3 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '-er 後綴非重讀弱化發輕捲舌母音 /ɚ/' }
  ],
  360: [
    { syllable: '單音節［grass］', rule: '子音叢 gr (R006) + 雙子音閉音節 (R001)', status: '【適用】', reason: 'gr- 開頭，雙子音 ss 封閉音節，母音 a 常規發短母音 /ɡræs/' }
  ],
  361: [
    { syllable: '單音節［gray］', rule: '子音叢 gr (R006) + 母音組合 ay (R004)', status: '【適用】', reason: 'gr- 開頭，字尾 ay 組合常規發長母音 /ɡreɪ/' }
  ],
  362: [
    { syllable: '單音節［great］', rule: '子音叢 gr (R006) + 母音組合規則 (R004) → 特例長雙母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'ea 組合常規發長母音 /iː/，此處特例發長雙母音 /ɡreɪt/ (R010)' }
  ],
  363: [
    { syllable: '單音節［green］', rule: '子音叢 gr (R006) + 母音組合 ee (R004)', status: '【適用】', reason: 'gr- 開頭，雙母音 ee 常規發長母音 /iː/，子音 n 結尾發 /ɡriːn/' }
  ],
  364: [
    { syllable: '單音節［ground］', rule: '子音叢 gr (R006) + 母音組合 ou (R004)', status: '【適用】', reason: 'gr- 開頭，ou 雙母音常規發長雙母音 /aʊ/，結合 -nd 發 /ɡraʊnd/' }
  ],
  365: [
    { syllable: '單音節［group］', rule: '子音叢 gr (R006) + 母音組合 ou (R004) → 特例長母音 (R010)', status: '【不適用 (例外轉移)】', reason: '法語借詞 ou 常規發雙母音 /aʊ/，此處特例發長圓唇音 /ɡruːp/ (R010)' }
  ],
  366: [
    { syllable: '單音節［grow］', rule: '子音叢 gr (R006) + 母音組合 ow (R004)', status: '【適用】', reason: 'gr- 開頭，ow 字母組合常規發長雙母音 /ɡroʊ/' }
  ],
  367: [
    { syllable: '單音節［guess］', rule: '子音叢 gu (R006) + 雙子音閉音節 (R001)', status: '【適用】', reason: 'gu- 組合中 u 靜音維持 g 硬音 /ɡ/，母音 e 於閉音節常規發短母音 /ɡɛs/' }
  ],
  368: [
    { syllable: '第 1 音節［gui］', rule: '子音叢 gu (R006) + 非重讀弱化 (R008)', status: '【適用】', reason: 'gu- 中 u 靜音維持硬音 /ɡ/，非重讀母音 i 發短音 /ɡɪ/' },
    { syllable: '第 2 音節［tar］', rule: 'R 控制母音 ar (R005)', status: '【適用】', reason: '重音節 ar 受主重音常規發長捲舌母音 /ˈtɑːr/' }
  ],
  369: [
    { syllable: '單音節［guy］', rule: '硬音 g (R007) + 特殊母音組合 uy (R004)', status: '【適用】', reason: 'uy 組合發長雙母音 /aɪ/，結合硬音 g 發 /ɡaɪ/' }
  ],
  370: [
    { syllable: '第 1 音節［hab］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 b 封閉且為重音節，母音 a 常規發短母音 /ˈhæb/' },
    { syllable: '第 2 音節［it］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀閉音節，母音 i 弱化發短音 /ɪt/' }
  ],
  371: [
    { syllable: '單音節［hair］', rule: '母音組合 air + R 控制母音 (R005)', status: '【適用】', reason: 'air 組合受 r 牽引常規發捲舌雙母音 /hɛr/' }
  ],
  372: [
    { syllable: '單音節［half］', rule: '閉音節規則 (R001) → 靜音 l 特例 (R010/R006)', status: '【不適用 (例外轉移)】', reason: '-alf 結構中字母 l 靜音 (Silent L)，母音 a 發短母音 /hæf/ (R010)' }
  ],
  373: [
    { syllable: '單音節［ham］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻音 m 封閉音節，單一母音 a 常規發短母音 /hæm/' }
  ],
  374: [
    { syllable: '單音節［hand］', rule: '子音叢 nd (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 nd 封閉音節，單一母音 a 常規發短母音 /hænd/' }
  ],
  375: [
    { syllable: '單音節［hang］', rule: '閉音節規則 (R001) + 複合子音 ng (R006)', status: '【適用】', reason: 'ng 鼻音保持完整，單一母音 a 發鼻音化短母音 /hæŋ/' }
  ],
  376: [
    { syllable: '第 1 音節［hap］', rule: '雙子音中間切分 (VCCV) + 閉音節 (R001)', status: '【適用】', reason: 'pp 雙子音切分，重音節母音 a 常規發短母音 /ˈhæp/' },
    { syllable: '第 2 音節［pen］', rule: '成音節/非重讀弱化 (R008/R009)', status: '【適用】', reason: '-pen 後綴非重讀弱化發輕母音 /ən/' }
  ],
  377: [
    { syllable: '第 1 音節［hap］', rule: '雙子音中間切分 (VCCV) + 閉音節 (R001)', status: '【適用】', reason: 'pp 雙子音切分，重音節母音 a 常規發短母音 /ˈhæp/' },
    { syllable: '第 2 音節［py］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /i/' }
  ],
  378: [
    { syllable: '單音節［hard］', rule: 'R 控制母音 ar (R005)', status: '【適用】', reason: 'ar 組合受 r 控制常規發長捲舌母音 /ɑːrd/，全字發 /hɑːrd/' }
  ],
  379: [
    { syllable: '單音節［hat］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 a 常規發短母音 /hæt/' }
  ],
  380: [
    { syllable: '單音節［hate］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 促使前面母音 a 發字母長音 /heɪt/，字尾 e 靜音' }
  ],
  381: [
    { syllable: '單音節［have］', rule: '魔術 e 規則 (R003) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '字尾 e 避免英語字尾為 v，母音 a 未發長音，特例發短母音 /hæv/ (R010)' }
  ],
  382: [
    { syllable: '單音節［he］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單音節單一母音 e 結尾，常規發長母音 /hiː/' }
  ],
  383: [
    { syllable: '單音節［head］', rule: '母音組合規則 (R004) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'ea 組合常規發長音 /iː/，此處受歷史語音演變特例發短母音 /hɛd/ (R010)' }
  ],
  384: [
    { syllable: '第 1 音節［head］', rule: '母音組合規則 (R004) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'head 詞素特例發短母音 /ˈhɛd/ (R010)' },
    { syllable: '第 2 音節［ache］', rule: '魔術 e (R003) + 複合子音 ch 發硬音 (R006/R010)', status: '【適用 (部分轉移)】', reason: 'a_e 發長音 /eɪ/，ch 受希臘語源影響特例發硬音 /k/，產出 /ˈhɛd.eɪk/' }
  ],
  385: [
    { syllable: '單音節［health］', rule: '母音組合規則 (R004) → 特例短母音 (R010) + 複合子音 th (R006)', status: '【不適用 (例外轉移)】', reason: 'ea 特例發短母音 /hɛl/ (R010)；字尾 th 發清咬舌音 /θ/ (R006)' }
  ],
  386: [
    { syllable: '第 1 音節［health］', rule: '母音組合規則 (R004) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'health 詞根特例發短母音 /ˈhɛlθ/ (R010)' },
    { syllable: '第 2 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '形容詞後綴 -y 非重讀常規發長母音 /i/' }
  ],
  387: [
    { syllable: '單音節［hear］', rule: '母音組合 ear + R 控制母音 (R005)', status: '【適用】', reason: 'ear 組合受 r 牽引常規發捲舌音 /hɪr/' }
  ],
  388: [
    { syllable: '單音節［heart］', rule: '母音組合規則 (R004) → 特例捲舌母音 (R010/R005)', status: '【不適用 (例外轉移)】', reason: 'ear 常規發 /ɪr/ 或 /ɝː/，此處受中古英語演變特例發後低捲舌音 /hɑːrt/ (R010)' }
  ],
  389: [
    { syllable: '單音節［heat］', rule: '母音組合 ea (R004)', status: '【適用】', reason: 'ea 雙母音組合常規發長母音 /iː/，子音 t 結尾發 /hiːt/' }
  ],
  390: [
    { syllable: '第 1 音節［heav］', rule: '母音組合規則 (R004) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'ea 組合常規發長音 /iː/，此處受後續子音 v 影響特例發短母音 /ˈhɛv/ (R010)' },
    { syllable: '第 2 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /i/' }
  ],
  391: [
    { syllable: '單音節［height］', rule: '母音組合規則 (R004) → 特例長雙母音 (R010) + 靜音 gh (R006)', status: '【不適用 (例外轉移)】', reason: 'eigh 組合常規發 /eɪ/ (如 weight)，此處特例發長雙母音 /haɪt/，gh 靜音 (R010)' }
  ],
  392: [
    { syllable: '第 1 音節［hel］', rule: '前綴非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發輕母音 /hə/' },
    { syllable: '第 2 音節［lo］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重音節母音 o 結尾，常規發長雙母音 /ˈloʊ/' }
  ],
  393: [
    { syllable: '單音節［help］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 lp 封閉音節，單一母音 e 常規發短母音 /hɛlp/' }
  ],
  394: [
    { syllable: '第 1 音節［help］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 lp 封閉且為重音節，母音 e 常規發短母音 /ˈhɛlp/' },
    { syllable: '第 2 音節［ful］', rule: '形容詞後綴弱化 (R008)', status: '【適用】', reason: '-ful 後綴非重讀弱化發輕母音 /fəl/' }
  ],
  395: [
    { syllable: '單音節［hen］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉音節，單一母音 e 常規發短母音 /hɛn/' }
  ],
  396: [
    { syllable: '單音節［here］', rule: '魔術 e (R003) + R 控制 (R005)', status: '【適用】', reason: 'e_e 結合 r 發長捲舌音 /hɪr/，字尾 e 靜音' }
  ],
  397: [
    { syllable: '單音節［hide］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 促使母音 i 發字母長音 /haɪd/，字尾 e 靜音' }
  ],
  398: [
    { syllable: '單音節［high］', rule: '母音組合 igh (R004) + 靜音 gh (R006)', status: '【適用】', reason: 'igh 組合中 gh 靜音，母音 i 發長雙母音 /haɪ/' }
  ],
  399: [
    { syllable: '單音節［hill］', rule: '雙子音閉音節 (R001)', status: '【適用】', reason: '雙子音 ll 封閉音節，單一母音 i 常規發短母音 /hɪl/' }
  ],
  400: [
    { syllable: '第 1 音節［his］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉且為重音節，母音 i 常規發短母音 /ˈhɪs/' },
    { syllable: '第 2 音節［to］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀母音 o 弱化，受美式 t 濁化發輕捲舌音 /t̬ɚ/' },
    { syllable: '第 3 音節［ry］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /ri/' }
  ]
};
