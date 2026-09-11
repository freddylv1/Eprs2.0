export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch3DerivationsMap: Record<number, DerivationItem[]> = {
  201: [
    { syllable: '第 1 音節［cov］', rule: '閉音節規則 (R001) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '閉音節字母 o 常規發 /ɑː/，此處受後續子音 v 歷史影響特例發短母音 /ˈkʌv/ (R010)；字母 c 發硬音 /k/ (R007)' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 (R005) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -er 字尾弱化發輕捲舌母音 /ɚ/' }
  ],
  202: [
    { syllable: '單音節［cow］', rule: '母音組合 ow (R004) + 硬音 c (R007)', status: '【適用】', reason: 'c 起首發硬音 /k/，ow 雙母音字母組合於重音節常規發雙母音 /kaʊ/' }
  ],
  203: [
    { syllable: '第 1 音節［cra］', rule: '子音叢 cr (R006) + 開音節規則 (R002)', status: '【適用】', reason: '子音叢 cr 起首，開音節無子音封閉，單一母音 a 常規發字母長音 /ˈkreɪ/' },
    { syllable: '第 2 音節［zy］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 處非重讀音節，常規發長母音 /zi/' }
  ],
  204: [
    { syllable: '單音節［cross］', rule: '子音叢 cr (R006) + 閉音節規則 (R001)', status: '【適用】', reason: '子音叢 cr 起首，雙寫 ss 封閉音節，母音 o 常規發短母音 /krɔːs/' }
  ],
  205: [
    { syllable: '單音節［cry］', rule: '子音叢 cr (R006) + 開音節規則 (R002)', status: '【適用】', reason: '子音叢 cr 起首，字尾單一母音 y 常規發雙母音 /kraɪ/' }
  ],
  206: [
    { syllable: '單音節［cup］', rule: '硬音 c (R007) + 閉音節規則 (R001)', status: '【適用】', reason: 'c 起首發硬音 /k/，子音 p 封閉音節，母音 u 常規發短母音 /kʌp/' }
  ],
  207: [
    { syllable: '單音節［cut］', rule: '硬音 c (R007) + 閉音節規則 (R001)', status: '【適用】', reason: 'c 起首發硬音 /k/，子音 t 封閉音節，母音 u 常規發短母音 /kʌt/' }
  ],
  208: [
    { syllable: '單音節［cute］', rule: '硬音 c (R007) + 魔術 e 規則 (R003)', status: '【適用】', reason: 'c 起首發硬音 /k/，u_e 結構促使母音 u 發字母長音 /juː/，字尾 e 不發音，全字發 /kjuːt/' }
  ],
  209: [
    { syllable: '單音節［dance］', rule: '閉音節規則 (R001) + 軟音 c (R007)', status: '【適用】', reason: '鼻音 n 封閉使 a 發短母音 /æ/，字尾 -ce 受軟音規則發 /s/，字尾 e 靜音' }
  ],
  210: [
    { syllable: '第 1 音節［dan］', rule: '特殊開音節讀音 (R002/R011)', status: '【適用】', reason: '詞根 danger 中母音 a 常規發長母音 /ˈdeɪn/' },
    { syllable: '第 2 音節［ger］', rule: '軟音 g (R007) + R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '字母 g 在 e 前發軟音 /dʒ/，-er 非重讀弱化發輕捲舌母音 /dʒɚ/' },
    { syllable: '第 3 音節［ous］', rule: '形容詞後綴弱化規則 (R008)', status: '【適用】', reason: '-ous 後綴處於非重讀音節，母音弱化發 /əs/' }
  ],
  211: [
    { syllable: '單音節［dark］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於重音節受 r 牽引，常規發長捲舌母音 /dɑːrk/' }
  ],
  212: [
    { syllable: '單音節［date］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構促使母音 a 發字母長音 /deɪt/，字尾 e 靜音' }
  ],
  213: [
    { syllable: '第 1 音節［daugh］', rule: '特殊母音組合 augh (R004)', status: '【適用】', reason: 'augh 字母組合中 gh 默音，au 發長母音 /ˈdɔː/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音 (R005) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -ter 弱化發輕捲舌母音，美式發音 t 濁化為閃音 /t̬ɚ/' }
  ],
  214: [
    { syllable: '單音節［day］', rule: '母音組合 ay (R004)', status: '【適用】', reason: 'ay 雙母音字母組合於字尾常規發長母音 /deɪ/' }
  ],
  215: [
    { syllable: '單音節［dead］', rule: '母音組合規則 (R004) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'ea 組合常規發長音 /iː/，此處受歷史語音演變特例發短母音 /dɛd/ (R010)' }
  ],
  216: [
    { syllable: '單音節［deal］', rule: '母音組合規則 (R004)', status: '【適用】', reason: '相連雙母音 ea 常規發長母音 /iː/，子音 d 起首 l 結尾，全字發 /diːl/' }
  ],
  217: [
    { syllable: '單音節［dear］', rule: '母音組合 ear + R 控制母音 (R005)', status: '【適用】', reason: 'ear 組合於重音節常規發捲舌雙母音 /dɪr/' }
  ],
  218: [
    { syllable: '單音節［death］', rule: '母音組合規則 (R004) → 特例短母音 (R010) + 複合子音 th (R006)', status: '【不適用 (例外轉移)】', reason: 'ea 常規發長音 /iː/，此處特例發短母音 /dɛ/ (R010)；字尾 th 發清咬舌音 /θ/ (R006)' }
  ],
  219: [
    { syllable: '第 1 音節［de］', rule: '前綴非重讀弱化規則 (R008/R012)', status: '【適用】', reason: 'de- 前綴處於非重讀音節，母音 e 弱化發高弱母音 /dɪ/' },
    { syllable: '第 2 音節［cide］', rule: '軟音 c (R007) + 魔術 e 規則 (R003)', status: '【適用】', reason: '字母 c 在 i 前發軟音 /s/，i_e 結構促使母音 i 發長音 /ˈsaɪd/，字尾 e 靜音' }
  ],
  220: [
    { syllable: '單音節［deep］', rule: '母音組合規則 (R004)', status: '【適用】', reason: '雙母音 ee 常規發固定長母音 /iː/，子音 d 起首 p 結尾，全字發 /diːp/' }
  ],
  221: [
    { syllable: '第 1 音節［de］', rule: '前綴非重讀弱化規則 (R008/R012)', status: '【適用】', reason: 'de- 前綴處於非重讀音節，母音 e 弱化發高弱母音 /dɪ/' },
    { syllable: '第 2 音節［fine］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '重讀音節符合 i_e 結構，字尾 e 靜音使母音 i 發長雙母音 /ˈfaɪn/' }
  ],
  222: [
    { syllable: '單音節［desk］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -sk 封閉音節，單一母音 e 常規發短母音 /dɛsk/' }
  ],
  223: [
    { syllable: '第 1 音節［dic］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 c 封閉且為重音節，母音 i 常規發短母音 /ˈdɪk/' },
    { syllable: '第 2 音節［tion］', rule: '成音節名詞後綴 (R009) → 弱化 (R008)', status: '【適用】', reason: '-tion 後綴發 /ʃən/，母音弱化為輕母音 /ʃə/' },
    { syllable: '第 3 音節［ar］', rule: '次重音 R 控制母音 (R005)', status: '【適用】', reason: '次重讀音節 -ar- 發 /nɛr/' },
    { syllable: '第 4 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /i/' }
  ],
  224: [
    { syllable: '單音節［die］', rule: '母音組合 ie (R004)', status: '【適用】', reason: 'ie 字母組合於字尾常規發字母長雙母音 /daɪ/' }
  ],
  225: [
    { syllable: '第 1 音節［dif］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙寫 ff 拆分閉音節且為重音，母音 i 常規發短母音 /ˈdɪf/' },
    { syllable: '第 2 音節［fer］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -fer- 弱化發輕捲舌母音 /ɚ/' },
    { syllable: '第 3 音節［ent］', rule: '後綴非重讀弱化規則 (R008)', status: '【適用】', reason: '-ent 後綴非重讀弱化發輕母音 /ənt/' }
  ],
  226: [
    { syllable: '第 1 音節［dif］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙寫 ff 拆分閉音節且為重音，母音 i 常規發短母音 /ˈdɪf/' },
    { syllable: '第 2 音節［fi］', rule: '非重讀母音弱化規則 (R008)', status: '【適用】', reason: '非重讀開音節母音 i 弱化發輕母音 /ə/' },
    { syllable: '第 3 音節［cult］', rule: '閉音節規則 (R001) → 弱化 (R008)', status: '【適用】', reason: '非重讀閉音節，母音 u 弱化發 /kəlt/' }
  ],
  227: [
    { syllable: '單音節［dig］', rule: '閉音節規則 (R001) + 硬音 g (R007)', status: '【適用】', reason: '子音 g 封閉音節，單一母音 i 常規發短母音 /dɪɡ/' }
  ],
  228: [
    { syllable: '第 1 音節［din］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙寫 nn 劃分閉音節且為重音，母音 i 常規發短母音 /ˈdɪn/' },
    { syllable: '第 2 音節［ner］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -er 弱化發輕捲舌母音 /ɚ/' }
  ],
  229: [
    { syllable: '第 1 音節［dirt］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ir 組合於重音節受 r 牽引，常規發長捲舌母音 /ˈdɝːt/' },
    { syllable: '第 2 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /ti/' }
  ],
  230: [
    { syllable: '單音節［dish］', rule: '複合子音 sh (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合子音 sh 封閉音節，母音 i 常規發短母音 /dɪʃ/' }
  ],
  231: [
    { syllable: '單音節［do］', rule: '開音節規則 (R002) → 特例長母音 (R010)', status: '【不適用 (例外轉移)】', reason: '開音節 o 常規發長母音 /oʊ/，此高頻字特例發長母音 /duː/ (R010)' }
  ],
  232: [
    { syllable: '第 1 音節［doc］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 c 封閉且為重音節，母音 o 常規發短母音 /ˈdɑːk/' },
    { syllable: '第 2 音節［tor］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -or 字尾弱化發輕捲舌母音 /tɚ/' }
  ],
  233: [
    { syllable: '單音節［dog］', rule: '閉音節規則 (R001) + 硬音 g (R007)', status: '【適用】', reason: '子音 g 封閉音節，單一母音 o 常規發短母音 /dɔːɡ/' }
  ],
  234: [
    { syllable: '單音節［doll］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙寫 ll 封閉音節，單一母音 o 常規發短母音 /dɑːl/' }
  ],
  235: [
    { syllable: '第 1 音節［dol］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙寫 ll 拆分閉音節且為重音，母音 o 常規發短母音 /ˈdɑː/' },
    { syllable: '第 2 音節［lar］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -ar 字尾弱化發輕捲舌母音 /lɚ/' }
  ],
  236: [
    { syllable: '單音節［door］', rule: '母音組合 oor + R 控制母音 (R005)', status: '【適用】', reason: 'oor 組合受 r 牽引常規發長捲舌母音 /dɔːr/' }
  ],
  237: [
    { syllable: '單音節［down］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 組合在重音節常規發雙母音 /daʊn/' }
  ],
  238: [
    { syllable: '第 1 音節［doz］', rule: '閉音節規則 (R001) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '字母 o 於重音節不發常規短音 /ɑː/，特例發短母音 /ˈdʌz/ (R010)' },
    { syllable: '第 2 音節［en］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '非重讀 -en 字尾弱化發輕母音 /ən/' }
  ],
  239: [
    { syllable: '單音節［draw］', rule: '子音叢 dr (R006) + 母音組合 aw (R004)', status: '【適用】', reason: '子音叢 dr 起首，aw 組合常規發長母音 /drɔː/' }
  ],
  240: [
    { syllable: '單音節［dream］', rule: '子音叢 dr (R006) + 母音組合 ea (R004)', status: '【適用】', reason: '子音叢 dr 起首，ea 組合常規發長母音 /driːm/' }
  ],
  241: [
    { syllable: '單音節［dress］', rule: '子音叢 dr (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 dr 起首，雙寫 ss 封閉音節，母音 e 常規發短母音 /drɛs/' }
  ],
  242: [
    { syllable: '單音節［drink］', rule: '子音叢 dr (R006) + 鼻音同化 nk (R017) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 dr 起首，nk 封閉發 /ŋk/，母音 i 常規發短母音 /drɪŋk/' }
  ],
  243: [
    { syllable: '單音節［drive］', rule: '子音叢 dr (R006) + 魔術 e 規則 (R003)', status: '【適用】', reason: '子音叢 dr 起首，i_e 促使母音 i 發長雙母音 /draɪv/，字尾 e 不發音' }
  ],
  244: [
    { syllable: '第 1 音節［driv］', rule: '魔術 e 詞根 (R003) → 長母音 /ˈdraɪv/', status: '【適用】', reason: '詞根 drive 的長音保留，發長雙母音 /ˈdraɪ/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -er 後綴弱化發輕捲舌母音 /vɚ/' }
  ],
  245: [
    { syllable: '單音節［drop］', rule: '子音叢 dr (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 dr 起首，子音 p 封閉音節，母音 o 常規發短母音 /drɑːp/' }
  ],
  246: [
    { syllable: '單音節［drum］', rule: '子音叢 dr (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 dr 起首，子音 m 封閉音節，母音 u 常規發短母音 /drʌm/' }
  ],
  247: [
    { syllable: '單音節［dry］', rule: '子音叢 dr (R006) + 開音節規則 (R002)', status: '【適用】', reason: '子音叢 dr 起首，單音節字尾 y 常規發長雙母音 /draɪ/' }
  ],
  248: [
    { syllable: '單音節［duck］', rule: '複合子音 ck (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合子音 ck 封閉音節，母音 u 常規發短母音 /dʌk/' }
  ],
  249: [
    { syllable: '第 1 音節［dur］', rule: '特殊 R 控制母音 (R005/R011)', status: '【適用】', reason: 'u 接 r 於重音節常規發捲舌母音 /ˈdʊr/' },
    { syllable: '第 2 音節［ing］', rule: '非重讀後綴弱化 (R008) + 複合子音 ng (R006)', status: '【適用】', reason: '-ing 非重讀後綴發 /ɪŋ/，ng 發鼻音 /ŋ/' }
  ],
  250: [
    { syllable: '單音節［each］', rule: '母音組合 ea (R004) + 複合子音 ch (R006)', status: '【適用】', reason: 'ea 雙母音常規發長母音 /iː/，ch 發清塞擦音 /tʃ/，全字發 /iːtʃ/' }
  ],
  251: [
    { syllable: '單音節［ear］', rule: '母音組合 ear + R 控制母音 (R005)', status: '【適用】', reason: 'ear 組合於單音節受 r 牽引常規發捲舌音 /ɪr/' }
  ],
  252: [
    { syllable: '第 1 音節［ear］', rule: '母音組合規則 (R004) → 特例捲舌長音 (R010/R005)', status: '【不適用 (例外轉移)】', reason: 'ear 常規發 /ɪr/，此處特例發長捲舌母音 /ˈɝː/ (R010)' },
    { syllable: '第 2 音節［ly］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '-ly 後綴處非重讀音節，y 常規發長母音 /li/' }
  ],
  253: [
    { syllable: '單音節［earth］', rule: '母音組合規則 (R004) → 特例捲舌音 (R010) + 複合子音 th (R006)', status: '【不適用 (例外轉移)】', reason: 'ear 特例發長捲舌母音 /ɝː/ (R010)；字尾 th 發清咬舌音 /θ/ (R006)' }
  ],
  254: [
    { syllable: '單音節［east］', rule: '母音組合 ea (R004)', status: '【適用】', reason: 'ea 組合常規發長母音 /iː/，結合尾音 -st 發 /iːst/' }
  ],
  255: [
    { syllable: '第 1 音節［eas］', rule: '母音組合 ea (R004)', status: '【適用】', reason: 'ea 組合常規發長母音 /ˈiː/，子音 s 發濁音 /z/' },
    { syllable: '第 2 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /zi/' }
  ],
  256: [
    { syllable: '單音節［eat］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '相連雙母音 ea 常規發長母音 /iː/，子音 t 結尾發 /iːt/' }
  ],
  257: [
    { syllable: '單音節［egg］', rule: '閉音節規則 (R001) + 硬音 g (R007)', status: '【適用】', reason: '雙寫 gg 封閉音節，母音 e 常規發短母音 /ɛɡ/' }
  ],
  258: [
    { syllable: '第 1 音節［ei］', rule: '母音組合 ei (R004)', status: '【適用】', reason: 'ei 字母組合常規發長母音 /ˈiː/（美式口語亦可讀 /ˈaɪ/）' },
    { syllable: '第 2 音節［ther］', rule: '複合子音 th (R006) + R 控制母音弱化 (R005/R008)', status: '【適用】', reason: 'th 發濁咬舌音 /ð/，-er 弱化發輕捲舌母音 /ðɚ/' }
  ],
  259: [
    { syllable: '第 1 音節［el］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 l 封閉且為重音節，母音 e 常規發短母音 /ˈɛl/' },
    { syllable: '第 2 音節［e］', rule: '非重讀母音弱化 (R008)', status: '【適用】', reason: '非重讀開音節母音 e 弱化發輕母音 /ə/' },
    { syllable: '第 3 音節［phant］', rule: '複合子音 ph (R006) + 非重讀弱化 (R008)', status: '【適用】', reason: 'ph 發 /f/，非重讀閉音節母音 a 弱化發 /fənt/' }
  ],
  260: [
    { syllable: '單音節［else］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 ls 封閉，母音 e 常規發短母音 /ɛls/，字尾 e 靜音' }
  ],
  261: [
    { syllable: '第 1 音節［e］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一字母 e 獨立成開音節且受主重音，發長母音 /ˈiː/' },
    { syllable: '第 2 音節［mail］', rule: '母音組合 ai 規則 (R004)', status: '【適用】', reason: '雙母音 ai 常規發長母音 /eɪ/，加子音 m 與 l 合成 /meɪl/' }
  ],
  262: [
    { syllable: '單音節［end］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -nd 封閉音節，單一母音 e 常規發短母音 /ɛnd/' }
  ],
  263: [
    { syllable: '第 1 音節［en］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉音節，母音 e 常規發短母音 /ɛn/' },
    { syllable: '第 2 音節［gi］', rule: '軟音 g (R007) + 非重讀弱化 (R008)', status: '【適用】', reason: 'g 在 i 前發軟音 /dʒ/，非重讀母音 i 發 /dʒɪ/' },
    { syllable: '第 3 音節［neer］', rule: '母音組合 eer + R 控制母音 (R005)', status: '【適用】', reason: '-eer 組合受主重音，常規發長捲舌母音 /ˈnɪr/' }
  ],
  264: [
    { syllable: '第 1 音節［en］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'en- 前綴非重讀弱化發 /ɪn/' },
    { syllable: '第 2 音節［joy］', rule: '雙母音 oy 規則 (R004)', status: '【適用】', reason: 'j 發 /dʒ/，oy 組合於重音節常規發雙母音 /ˈdʒɔɪ/' }
  ],
  265: [
    { syllable: '第 1 音節［e］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: '首音節非重讀開音節母音 e 弱化發 /ɪ/' },
    { syllable: '第 2 音節［nough］', rule: '特殊拼字規則 (R010)', status: '【不適用 (例外轉移)】', reason: '-ough 組合特例發短母音加清唇齒摩擦音 /ˈnʌf/ (R010)' }
  ],
  266: [
    { syllable: '第 1 音節［en］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為重音節，母音 e 常規發短母音 /ˈɛn/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -ter 弱化發輕捲舌母音，美式發音 t 濁化為閃音 /t̬ɚ/' }
  ],
  267: [
    { syllable: '第 1 音節［en］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為重音節，母音 e 常規發短母音 /ˈɛn/' },
    { syllable: '第 2 音節［ve］', rule: '非重讀母音弱化 (R008)', status: '【適用】', reason: '非重讀開音節母音 e 弱化發輕母音 /və/' },
    { syllable: '第 3 音節［lope］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '次重讀音節 o_e 結構發長雙母音 /loʊp/，字尾 e 靜音' }
  ],
  268: [
    { syllable: '第 1 音節［e］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: '非重讀首音節母音 e 弱化發 /ɪ/' },
    { syllable: '第 2 音節［ra］', rule: '開音節規則 (R002)', status: '【適用】', reason: '開音節受主重音，單一母音 a 常規發字母長音 /ˈreɪ/' },
    { syllable: '第 3 音節［ser］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -ser 弱化發輕捲舌母音 /sɚ/' }
  ],
  269: [
    { syllable: '第 1 音節［er］', rule: '重讀閉音節 (R001)', status: '【適用】', reason: '雙寫 r 拆分閉音節且受重音，母音 e 發短母音 /ˈɛr/' },
    { syllable: '第 2 音節［ror］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -or 字尾，母音弱化發輕捲舌母音 /ɚ/' }
  ],
  270: [
    { syllable: '第 1 音節［e］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音 e 獨立成開音節且受主重音，常規發長母音 /ˈiː/' },
    { syllable: '第 2 音節［ven］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '非重讀 -en 字尾弱化發輕母音 /vən/' }
  ],
  271: [
    { syllable: '第 1 音節［eve］', rule: '開音節長母音詞根 (R002)', status: '【適用】', reason: '詞根 even 長母音保留，發長母音 /ˈiːv/' },
    { syllable: '第 2 音節［ning］', rule: '非重讀弱化 (R008) + 複合子音 ng (R006)', status: '【適用】', reason: '-ing 非重讀後綴發 /nɪŋ/，ng 保持完整發單一鼻音 /ŋ/' }
  ],
  272: [
    { syllable: '第 1 音節［ev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 v 封閉且為重音節，母音 e 常規發短母音 /ˈɛv/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -er 字尾弱化發輕捲舌母音 /ɚ/' }
  ],
  273: [
    { syllable: '第 1 音節［ev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 v 封閉且為重音節，母音 e 常規發短母音 /ˈɛv/' },
    { syllable: '第 2 音節［er］', rule: '語流省音規則 (R008)', status: '【適用】', reason: '中間非重讀音節母音脫落省音，直接連讀為 /ri/' },
    { syllable: '第 3 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '字尾 y 非重讀常規發長母音 /i/' }
  ],
  274: [
    { syllable: '第 1 音節［ev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 v 封閉且為主重音，母音 e 常規發短母音 /ˈɛv/' },
    { syllable: '第 2 音節［er］', rule: '語流省音規則 (R008)', status: '【適用】', reason: '非重讀中間音節母音脫落，r 與後續母音連讀' },
    { syllable: '第 3 音節［y］', rule: '開音節規則 (R002)', status: '【適用】', reason: '字尾 y 弱化過渡發 /ri/' },
    { syllable: '第 4 音節［one］', rule: '複合詞次重音 + 特例讀音 (R010)', status: '【不適用 (例外轉移)】', reason: 'one 保留單字特殊發音 /wʌn/ (R010)' }
  ],
  275: [
    { syllable: '第 1 音節［ev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 v 封閉且為重音節，母音 e 常規發短母音 /ˈɛv/' },
    { syllable: '第 2 音節［er］', rule: '語流省音規則 (R008)', status: '【適用】', reason: '中間非重讀音節母音脫落省音，與後綴連讀' },
    { syllable: '第 3 音節［y］', rule: '開音節規則 (R002)', status: '【適用】', reason: '過渡半母音 y 發 /i/' },
    { syllable: '第 4 音節［thing］', rule: '複合子音 th + ng (R006) + 閉音節 (R001)', status: '【適用】', reason: 'th 發清咬舌音 /θ/，ng 鼻音封閉發短母音 /θɪŋ/' }
  ],
  276: [
    { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴處於非重讀音節，x 在重讀母音前濁化發 /ɪɡz/' },
    { syllable: '第 2 音節［am］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻音 m 封閉且受主重音，母音 a 常規發短母音 /ˈzæm/' },
    { syllable: '第 3 音節［ple］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，發 /pəl/' }
  ],
  277: [
    { syllable: '第 1 音節［ex］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 x 封閉且為重音節，母音 e 常規發短母音 /ˈɛk/' },
    { syllable: '第 2 音節［cel］', rule: '軟音 c (R007) + 非重讀弱化 (R008)', status: '【適用】', reason: 'c 在 e 前發軟音 /s/，非重讀母音弱化發 /sə/' },
    { syllable: '第 3 音節［lent］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '-ent 後綴非重讀弱化發輕母音 /lənt/' }
  ],
  278: [
    { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴非重讀弱化發 /ɪk/' },
    { syllable: '第 2 音節［cept］', rule: '軟音 c (R007) + 閉音節 (R001)', status: '【適用】', reason: 'c 在 e 前發軟音 /s/，子音 pt 封閉且受主重音，母音 e 常規發短母音 /ˈsɛpt/' }
  ],
  279: [
    { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴處於非重讀音節，發弱化音 /ɪk/' },
    { syllable: '第 2 音節［cit］', rule: '軟音 c (R007) + 開音節長母音 (R002/R003)', status: '【適用】', reason: 'c 在 i 前發軟音 /s/，詞根 cite 原型帶長音 /ˈsaɪ/' },
    { syllable: '第 3 音節［ed］', rule: '動詞過去分詞後綴弱化 (R008)', status: '【適用】', reason: '-ed 在 t 後發 /t̬ɪd/，美式 t 濁化為閃音' }
  ],
  280: [
    { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴處於非重讀音節，發弱化音 /ɪk/' },
    { syllable: '第 2 音節［cit］', rule: '軟音 c (R007) + 開音節長母音 (R002)', status: '【適用】', reason: 'c 在 i 前發軟音 /s/，詞根 cite 發長雙母音 /ˈsaɪ/' },
    { syllable: '第 3 音節［ing］', rule: '非重讀後綴弱化 (R008) + 複合子音 ng (R006)', status: '【適用】', reason: '-ing 非重讀後綴發 /t̬ɪŋ/，ng 保持完整鼻音 /ŋ/' }
  ],
  281: [
    { syllable: '第 1 音節［ex］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 x 封閉且為重音節，母音 e 常規發短母音 /ˈɛk/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -er- 弱化發輕捲舌母音 /sɚ/' },
    { syllable: '第 3 音節［cise］', rule: '軟音 c (R007) + 魔術 e (R003)', status: '【適用】', reason: 'c 在 i 前發軟音 /s/，i_e 促使母音 i 發長雙母音 /saɪz/，字尾 e 靜音' }
  ],
  282: [
    { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴非重讀弱化，x 與後方 p 連綴發 /ɪk/' },
    { syllable: '第 2 音節［pect］', rule: '重讀閉音節規則 (R001)', status: '【適用】', reason: '子音叢 ct 封閉音節且受主重音，母音 e 發短母音 /ˈspɛkt/' }
  ],
  283: [
    { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴處於非重讀音節，發弱化音 /ɪk/' },
    { syllable: '第 2 音節［pen］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且受主重音，母音 e 常規發短母音 /ˈspɛn/' },
    { syllable: '第 3 音節［sive］', rule: '形容詞後綴弱化規則 (R008)', status: '【適用】', reason: '-sive 後綴處於非重讀音節，母音弱化發短音 /sɪv/，字尾 e 靜音' }
  ],
  284: [
    { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴處於非重讀音節，發弱化音 /ɪk/' },
    { syllable: '第 2 音節［pe］', rule: '開音節長母音 (R002) + R 控制影響 (R005)', status: '【適用】', reason: '重音節母音 e 受後續 r 牽引發長捲舌母音 /ˈspɪr/' },
    { syllable: '第 3 音節［ri］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '非重讀母音 i 發短輕母音 /i/' },
    { syllable: '第 4 音節［ence］', rule: '名詞後綴弱化 (R008) + 軟音 c (R007)', status: '【適用】', reason: '-ence 後綴弱化發 /əns/，字尾 ce 發軟音 /s/' }
  ],
  285: [
    { syllable: '第 1 音節［ex］', rule: '前綴非重讀弱化 (R008/R012)', status: '【適用】', reason: 'ex- 前綴處於非重讀音節，發弱化音 /ɪk/' },
    { syllable: '第 2 音節［plain］', rule: '子音叢 pl + 母音組合 ai 規則 (R004)', status: '【適用】', reason: '雙母音 ai 常規發長母音 /eɪ/，結合子音叢 pl 與尾音 n 發 /ˈspleɪn/' }
  ],
  286: [
    { syllable: '單音節［eye］', rule: '特例拼字發音 (R010)', status: '【不適用 (例外轉移)】', reason: '歷史拼字特例，全字特例發字母長雙母音 /aɪ/ (R010)' }
  ],
  287: [
    { syllable: '單音節［face］', rule: '魔術 e 規則 (R003) + 軟音 c (R007)', status: '【適用】', reason: 'a_e 促使母音 a 發字母長音 /feɪs/，c 在 e 前發軟音 /s/，字尾 e 靜音' }
  ],
  288: [
    { syllable: '單音節［fact］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -ct 封閉音節，單一母音 a 常規發短母音 /fækt/' }
  ],
  289: [
    { syllable: '第 1 音節［fac］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 c 封閉且為重音節，母音 a 常規發短母音 /ˈfæk/' },
    { syllable: '第 2 音節［to］', rule: '非重讀弱化 (R008) → 捲舌音 /tɚ/', status: '【適用】', reason: '非重讀音節 -to- 弱化為輕捲舌母音 /tɚ/' },
    { syllable: '第 3 音節［ry］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '字尾 y 非重讀常規發長母音 /ri/' }
  ],
  290: [
    { syllable: '單音節［fail］', rule: '母音組合 ai 規則 (R004)', status: '【適用】', reason: '雙母音 ai 常規發長母音 /eɪ/，加子音 f 與 l 發 /feɪl/' }
  ],
  291: [
    { syllable: '單音節［fall］', rule: '特殊母音字族規則 -all (R011)', status: '【適用】', reason: '-all 字族母音 a 受雙子音 ll 影響，常規發長母音 /fɔːl/' }
  ],
  292: [
    { syllable: '第 1 音節［fam］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 m 封閉且為重音節，母音 a 常規發短母音 /ˈfæm/' },
    { syllable: '第 2 音節［i］', rule: '非重讀母音弱化規則 (R008)', status: '【適用】', reason: '中間非重讀單一母音 i 弱化發輕母音 /əl/' },
    { syllable: '第 3 音節［ly］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '-ly 後綴非重讀，y 常規發長母音 /li/' }
  ],
  293: [
    { syllable: '第 1 音節［fa］', rule: '開音節規則 (R002)', status: '【適用】', reason: '開音節無子音封閉且為重音節，母音 a 常規發字母長音 /ˈfeɪ/' },
    { syllable: '第 2 音節［mous］', rule: '形容詞後綴弱化 (R008)', status: '【適用】', reason: '-ous 後綴非重讀弱化發輕母音 /məs/' }
  ],
  294: [
    { syllable: '單音節［fan］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 n 封閉音節，母音 a 常規發短母音 /fæn/' }
  ],
  295: [
    { syllable: '單音節［far］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於重音節受 r 牽引，常規發長捲舌母音 /fɑːr/' }
  ],
  296: [
    { syllable: '單音節［farm］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於重音節常規發長捲舌母音 /fɑːrm/' }
  ],
  297: [
    { syllable: '第 1 音節［farm］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於重音節常規發長捲舌母音 /ˈfɑːrm/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音弱化 (R005/R008)', status: '【適用】', reason: '非重讀 -er 後綴弱化發輕捲舌母音 /mɚ/' }
  ],
  298: [
    { syllable: '單音節［fast］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -st 封閉音節，單一母音 a 常規發短母音 /fæst/' }
  ],
  299: [
    { syllable: '單音節［fat］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 t 封閉音節，母音 a 常規發短母音 /fæt/' }
  ],
  300: [
    { syllable: '第 1 音節［fa］', rule: '開音節規則 (R002) → 特例母音 (R010)', status: '【不適用 (例外轉移)】', reason: '開音節 a 常規發長音 /eɪ/，此處特例發後低母音 /ˈfɑː/ (R010)' },
    { syllable: '第 2 音節［ther］', rule: '複合子音 th (R006) + R 控制母音弱化 (R005/R008)', status: '【適用】', reason: 'th 發濁咬舌音 /ð/，-er 弱化發輕捲舌母音 /ðɚ/' }
  ]
};
