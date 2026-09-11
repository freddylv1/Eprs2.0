import { PhonicsRule } from '../types';

export const EPRS_PHONICS_RULES: Record<string, PhonicsRule> = {
  R001: {
    id: 'R001',
    name: '短母音 / 閉音節',
    englishName: 'Closed Syllable (Short Vowels)',
    category: '母音法則',
    summary: '單一母音字母後方被一個或多個子音封閉時，該母音通常發「短母音」。',
    formula: '［(C)VC］母音 + 封閉子音 ➔ 發短母音',
    description: '閉音節（Closed Syllable）是英語最基礎且最頻繁的音節結構。音節結尾有子音封閉阻擋氣流，使得母音長度受限，發出緊湊短促的短母音。',
    phonemeMapping: [
      { letters: 'a', ipa: '/æ/', desc: '蝴蝶音短母音（如 cat, bag, hand, apple）' },
      { letters: 'e', ipa: '/ɛ/', desc: '扁唇短母音（如 bed, desk, pen, red）' },
      { letters: 'i', ipa: '/ɪ/', desc: '鬆母音短母音（如 sit, fish, milk, big）' },
      { letters: 'o', ipa: '/ɑː/', desc: '美式開口短母音（如 hot, dog, stop, box）' },
      { letters: 'u', ipa: '/ʌ/', desc: '央短母音（如 cup, bus, sun, duck）' }
    ],
    examples: [
      { word: 'cat', ipa: '/kæt/', note: 'a 在 c 與 t 之間被閉合，發 /æ/' },
      { word: 'bed', ipa: '/bɛd/', note: 'e 後接子音 d 閉合，發 /ɛ/' },
      { word: 'sit', ipa: '/sɪt/', note: 'i 後接子音 t 閉合，發 /ɪ/' },
      { word: 'stop', ipa: '/stɑːp/', note: 'o 後接子音 p 閉合，發 /ɑː/' },
      { word: 'bus', ipa: '/bʌs/', note: 'u 後接子音 s 閉合，發 /ʌ/' }
    ],
    exceptionsOrTips: '若母音後接 r 則會轉為 R 控制母音 (R005)；【重要判定防範】若處於非重讀音節或前綴（如 ac-, ad-, ap-, at-, con-, com- 等）發 /ə/ 或 /ɪ/，屬弱化音，嚴禁誤判為 R001 閉音節適用，必須轉移歸入前綴弱化 (R012) 或非重音弱化 (R008)。'
  },
  R002: {
    id: 'R002',
    name: '長母音 / 開音節',
    englishName: 'Open Syllable (Long Vowels)',
    category: '母音法則',
    summary: '音節以單一母音字母結尾（無子音封閉），氣流暢通，母音發字母本音「長母音」。',
    formula: '［(C)V］母音未被子音阻擋 ➔ 發字母本音',
    description: '開音節（Open Syllable）的音節尾端沒有子音「封門」，聲音可以充分延長並以雙母音或長母音滑動形式發出字母的本音名稱。',
    phonemeMapping: [
      { letters: 'a', ipa: '/eɪ/', desc: '字母本音長母音（如 ba·by, pa·per）' },
      { letters: 'e', ipa: '/iː/', desc: '字母本音長母音（如 me, he, we）' },
      { letters: 'i', ipa: '/aɪ/', desc: '字母本音雙母音（如 hi, ti·ger, spi·der）' },
      { letters: 'o', ipa: '/oʊ/', desc: '字母本音圓唇雙母音（如 no, go, o·pen）' },
      { letters: 'u', ipa: '/uː/ 或 /juː/', desc: '字母本音（如 mu·sic, stu·dent）' }
    ],
    examples: [
      { word: 'me', ipa: '/miː/', note: '單音節開放結尾，e 發 /iː/' },
      { word: 'go', ipa: '/ɡoʊ/', note: '單音節開放結尾，o 發 /oʊ/' },
      { word: 'paper', ipa: '/ˈpeɪ.pɚ/', note: '第 1 音節 [pa] 為開音節，a 發 /eɪ/' },
      { word: 'tiger', ipa: '/ˈtaɪ.ɡɚ/', note: '第 1 音節 [ti] 為開音節，i 發 /aɪ/' },
      { word: 'music', ipa: '/ˈmjuː.zɪk/', note: '第 1 音節 [mu] 為開音節，u 發 /mjuː/' }
    ],
    exceptionsOrTips: '多音節字中非重音的開音節常會發生弱化，例如 banana 中的首個 [ba] 弱化為 /bə/。'
  },
  R003: {
    id: 'R003',
    name: '魔術 e 規則',
    englishName: 'Magic E / Vowel-Consonant-e',
    category: '母音法則',
    summary: '單字呈現「母音 + 單子音 + e」結構，字尾 e 保持靜音，賦予前方母音發字母本音長音。',
    formula: '［V + C + e］字尾 e 靜音 ➔ 前方母音發長母音',
    description: 'Magic E 又稱「無聲 e (Silent e)」或「拆分雙母音 (Split Digraph)」。歷史上字尾 e 原有發音，在大母音推移後失去發音，轉而作為指示前方母音發長音的正字法標記。',
    phonemeMapping: [
      { letters: 'a_e', ipa: '/eɪ/', desc: '如 cake, lake, name, safe, plate' },
      { letters: 'e_e', ipa: '/iː/', desc: '如 Pete, scene, eve, theme' },
      { letters: 'i_e', ipa: '/aɪ/', desc: '如 bike, time, kite, fine, drive' },
      { letters: 'o_e', ipa: '/oʊ/', desc: '如 home, rope, nose, hope, stone' },
      { letters: 'u_e', ipa: '/uː/ 或 /juː/', desc: '如 cute, tube, flute, June, rule' }
    ],
    examples: [
      { word: 'cake', ipa: '/keɪk/', note: '字尾 e 靜音，a 發長音 /eɪ/' },
      { word: 'bike', ipa: '/baɪk/', note: '字尾 e 靜音，i 發長音 /aɪ/' },
      { word: 'home', ipa: '/hoʊm/', note: '字尾 e 靜音，o 發長音 /oʊ/' },
      { word: 'cute', ipa: '/kjuːt/', note: '字尾 e 靜音，u 發長音 /juː/' },
      { word: 'brave', ipa: '/breɪv/', note: '子音叢 br + a_e 結構，發 /breɪv/' }
    ],
    exceptionsOrTips: '少數高頻詞不符合 Magic E，如 have /hæv/, give /ɡɪv/, live /lɪv/, love /lʌv/，此類歸入 R010 例外庫。'
  },
  R004: {
    id: 'R004',
    name: '母音字母組合',
    englishName: 'Vowel Teams / Digraphs & Diphthongs',
    category: '母音法則',
    summary: '兩個連續的母音字母組合成一個特定音素（「兩母相逢，前母長嘯」或固定雙母音）。',
    formula: '［VV］相連雙母音 ➔ 發固定長母音或滑音雙母音',
    description: '英語中有許多固定的母音字母對，最著名的是「When two vowels go walking, the first one does the talking」（如 oa 發 /oʊ/、ee 發 /iː/、ai 發 /eɪ/），另外也有如 ou, oi, oy 等固定雙母音。',
    phonemeMapping: [
      { letters: 'ee / ea', ipa: '/iː/', desc: '如 see, meet, tea, sea, deal, deep' },
      { letters: 'ai / ay', ipa: '/eɪ/', desc: '如 rain, train, day, play, say' },
      { letters: 'oa / ow', ipa: '/oʊ/', desc: '如 boat, road, coat, snow, show' },
      { letters: 'oi / oy', ipa: '/ɔɪ/', desc: '如 coin, boil, toy, boy, joy' },
      { letters: 'ou / ow', ipa: '/aʊ/', desc: '如 out, loud, house, cow, down' },
      { letters: 'oo', ipa: '/uː/ 或 /ʊ/', desc: '長音如 moon, cool；短音如 book, look, foot' }
    ],
    examples: [
      { word: 'rain', ipa: '/reɪn/', note: 'ai 組合固定發長母音 /eɪ/' },
      { word: 'boat', ipa: '/boʊt/', note: 'oa 組合固定發長母音 /oʊ/' },
      { word: 'deal', ipa: '/diːl/', note: 'ea 組合發長母音 /iː/' },
      { word: 'coin', ipa: '/kɔɪn/', note: 'oi 組合發雙母音 /ɔɪ/' },
      { word: 'cloud', ipa: '/klaʊd/', note: 'ou 組合常規發雙母音 /aʊ/' }
    ],
    exceptionsOrTips: 'ea 組合存在特例短音，如 bread, head, dead, death /dɛθ/，此類歸入 R010 特例庫。'
  },
  R005: {
    id: 'R005',
    name: 'R 控制母音',
    englishName: 'R-Controlled Vowels (Bossy R)',
    category: '母音法則',
    summary: '母音字母後緊隨字母 r 時，母音失去原有純母音特質，轉化為捲舌色彩母音。',
    formula: '［V + r］母音與 r 融合 ➔ 發捲舌母音',
    description: '字母 r 在英語發音學中稱為「霸道 R (Bossy R)」，它會強烈改變前方母音的舌位與共鳴腔，形成獨特的美式捲舌音。',
    phonemeMapping: [
      { letters: 'ar', ipa: '/ɑːr/', desc: '後開捲舌音（如 car, park, dark, star）' },
      { letters: 'or / ore', ipa: '/ɔːr/', desc: '半開後圓唇捲舌音（如 for, sport, horse, more）' },
      { letters: 'er / ir / ur (重音)', ipa: '/ɝː/', desc: '重讀中舌捲舌音（如 bird, nurse, her, turn）' },
      { letters: 'er / or / ar (非重音)', ipa: '/ɚ/', desc: '非重讀輕捲舌音（如 teacher, doctor, dollar）' }
    ],
    examples: [
      { word: 'car', ipa: '/kɑːr/', note: 'ar 在重音節發捲舌音 /ɑːr/' },
      { word: 'bird', ipa: '/bɝːd/', note: 'ir 在重音節發中央捲舌音 /ɝː/' },
      { word: 'for', ipa: '/fɔːr/', note: 'or 在單音節發捲舌音 /ɔːr/' },
      { word: 'teacher', ipa: '/ˈtiː.tʃɚ/', note: '字尾 -er 處於非重音節，弱化發 /ɚ/' },
      { word: 'dollar', ipa: '/ˈdɑː.lɚ/', note: '字尾 -ar 處於非重音節，弱化發 /ɚ/' }
    ],
    exceptionsOrTips: '雙寫 rr 時常會切分音節，使前方母音保留為短母音，例如 carrot /ˈkær.ət/, error /ˈɛr.ɚ/。'
  },
  R006: {
    id: 'R006',
    name: '複合子音與子音叢',
    englishName: 'Consonant Digraphs & Blends',
    category: '子音法則',
    summary: '特定子音組合共同發單一音素（複合子音），或緊密相連滑動過渡（子音叢），音節劃分時不可任意拆開。',
    formula: '［CC 組合］不可分割 ➔ 視為單一子音音素或複合音位',
    description: '複合子音（Digraphs）是由兩個字母合成一個全新音素；子音叢（Blends/Clusters）是由兩個以上子音緊密銜接，各音素皆保留但不可跨音節隨意拆解。',
    phonemeMapping: [
      { letters: 'sh', ipa: '/ʃ/', desc: '如 ship, fish, wish, shoe' },
      { letters: 'ch / tch', ipa: '/tʃ/', desc: '如 chair, rich, watch, catch' },
      { letters: 'th (清音)', ipa: '/θ/', desc: '清咬舌音（如 think, thank, path, death）' },
      { letters: 'th (濁音)', ipa: '/ð/', desc: '濁咬舌音（如 this, that, mother, father）' },
      { letters: 'ph', ipa: '/f/', desc: '如 photo, phone, elephant' },
      { letters: 'wh', ipa: '/w/', desc: '如 what, white, wheel' },
      { letters: 'ng', ipa: '/ŋ/', desc: '軟顎鼻音（如 sing, ring, long, king）' },
      { letters: 'ck', ipa: '/k/', desc: '接短母音之後（如 duck, back, clock, black）' }
    ],
    examples: [
      { word: 'ship', ipa: '/ʃɪp/', note: 'sh 複合子音發 /ʃ/' },
      { word: 'chair', ipa: '/tʃɛr/', note: 'ch 複合子音發 /tʃ/' },
      { word: 'think', ipa: '/θɪŋk/', note: 'th 清咬舌音發 /θ/，nk 同化發 /ŋk/' },
      { word: 'this', ipa: '/ðɪs/', note: 'th 濁咬舌音發 /ð/' },
      { word: 'elephant', ipa: '/ˈɛl.ə.fənt/', note: 'ph 複合子音發 /f/' }
    ],
    exceptionsOrTips: '複合子音在音節切分時具備「不可拆組合」優先權，嚴禁拆成兩個音節。'
  },
  R007: {
    id: 'R007',
    name: '軟子音與硬子音 (C 與 G)',
    englishName: 'Soft & Hard C and G',
    category: '子音法則',
    summary: '字母 c 與 g 在 e, i, y 前發軟音；在 a, o, u 或其他子音前發硬音。',
    formula: 'c/g + (e, i, y) ➔ 軟音 /s/, /dʒ/；c/g + (a, o, u) ➔ 硬音 /k/, /ɡ/',
    description: '這是拉丁語系借詞進入中古英語所形成的規律。軟音是指發摩擦音或破擦音，硬音則為軟顎塞音。',
    phonemeMapping: [
      { letters: 'c + e, i, y (軟音)', ipa: '/s/', desc: '如 city, cell, face, ice, cycle' },
      { letters: 'c + a, o, u (硬音)', ipa: '/k/', desc: '如 cat, cold, cup, clear' },
      { letters: 'g + e, i, y (軟音)', ipa: '/dʒ/', desc: '如 gym, giant, page, orange' },
      { letters: 'g + a, o, u (硬音)', ipa: '/ɡ/', desc: '如 gap, go, gun, glad' }
    ],
    examples: [
      { word: 'city', ipa: '/ˈsɪt.i/', note: 'c 在 i 前發軟音 /s/' },
      { word: 'cat', ipa: '/kæt/', note: 'c 在 a 前發硬音 /k/' },
      { word: 'gym', ipa: '/dʒɪm/', note: 'g 在 y 前發軟音 /dʒ/' },
      { word: 'go', ipa: '/ɡoʊ/', note: 'g 在 o 前發硬音 /ɡ/' },
      { word: 'face', ipa: '/feɪs/', note: '字尾 ce 發軟音 /s/' }
    ],
    exceptionsOrTips: '日耳曼古英語原生詞常保留硬音 g，如 get /ɡɛt/, give /ɡɪv/, girl /ɡɝːl/，此類歸入 R010 例外庫。'
  },
  R008: {
    id: 'R008',
    name: '非重音央化弱音 (Schwa)',
    englishName: 'Unstressed Vowel Reduction (Schwa)',
    category: '音節與弱化',
    summary: '多音節單字中非重音音節的母音，多數弱化為央母音 /ə/ 或高弱音 /ɪ/。',
    formula: '非重音節母音 ➔ 弱化發 /ə/ 或 /ɪ/',
    description: '英語是重音等時節奏語言（Stress-timed language）。為了突顯重音節的清晰度，非重音音節會迅速滑過並中央化，發出最省力的 Schwa 音 /ə/。',
    phonemeMapping: [
      { letters: 'a (非重音)', ipa: '/ə/', desc: '如 a·bout, ba·na·na, so·fa' },
      { letters: 'e (非重音)', ipa: '/ə/ 或 /ɪ/', desc: '如 el·e·phant, prob·lem, de·cide' },
      { letters: 'i (非重音)', ipa: '/ə/ 或 /ɪ/', desc: '如 fam·i·ly, hol·i·day, a·bil·i·ty' },
      { letters: 'o (非重音)', ipa: '/ə/', desc: '如 lem·on, car·rot, bot·tom' },
      { letters: 'u (非重音)', ipa: '/ə/', desc: '如 cir·cus, au·tumn, dif·fi·cult' }
    ],
    examples: [
      { word: 'banana', ipa: '/bəˈnæn.ə/', note: '前後兩個非重讀 a 均弱化為 /ə/' },
      { word: 'about', ipa: '/əˈbaʊt/', note: '字首非重音 a- 弱化為 /ə/' },
      { word: 'family', ipa: '/ˈfæm.ə.li/', note: '中間非重音 i 弱化為 /ə/' },
      { word: 'carrot', ipa: '/ˈkær.ət/', note: '第二音節 ot 弱化為 /ət/' },
      { word: 'lemon', ipa: '/ˈlɛm.ən/', note: '第二音節 on 弱化為 /ən/' }
    ],
    exceptionsOrTips: '重音所在音節絕對不會弱化為 Schwa，只有非重音音節才會發生弱化。'
  },
  R009: {
    id: 'R009',
    name: '成音節 (Syllabic Consonant)',
    englishName: 'Syllabic Consonants (-le, -el, -en)',
    category: '音節與弱化',
    summary: '字尾 -ble, -cle, -dle, -tle 等「子音 + le」結構，子音 l 自行獨立成音節，發 /əl/ 或 /l̩/。',
    formula: '［子音 + le］➔ 獨立成音節，發 /C + əl/',
    description: '成音節是指不含完整顯性母音字母，而由響音子音（如 l, n, m）單獨或攜帶微弱央音 /ə/ 構成音節核，常見於字尾 -le, -el, -en。',
    phonemeMapping: [
      { letters: '-ble', ipa: '/bəl/', desc: '如 ta·ble, a·ble, no·ble' },
      { letters: '-ple', ipa: '/pəl/', desc: '如 ap·ple, sim·ple, peo·ple' },
      { letters: '-tle', ipa: '/təl/ 或 /t̬əl/', desc: '如 lit·tle, bot·tle, bat·tle' },
      { letters: '-dle', ipa: '/dəl/', desc: '如 mid·dle, can·dle, noo·dle' },
      { letters: '-cle', ipa: '/kəl/', desc: '如 un·cle, bi·cy·cle, cir·cle' }
    ],
    examples: [
      { word: 'table', ipa: '/ˈteɪ.bəl/', note: '字尾 -ble 獨立成第 2 音節 /bəl/' },
      { word: 'apple', ipa: '/ˈæp.əl/', note: '字尾 -ple 獨立成第 2 音節 /pəl/' },
      { word: 'bottle', ipa: '/ˈbɑː.t̬əl/', note: '字尾 -tle 結合閃音與成音節發 /t̬əl/' },
      { word: 'uncle', ipa: '/ˈʌŋ.kəl/', note: '字尾 -cle 獨立成音節發 /kəl/' },
      { word: 'little', ipa: '/ˈlɪt̬.əl/', note: '字尾 -tle 獨立成音節' }
    ],
    exceptionsOrTips: '字尾 -le 前若有子音叢，需將前置子音與 -le 一同歸入末音節。'
  },
  R010: {
    id: 'R010',
    name: '發音例外與特例型態',
    englishName: 'Phonics Exceptions & Historical Retentions',
    category: '例外與特殊',
    summary: '受歷史大母音推移、外來語借詞（法語、希臘語）或頻繁使用產生的特例發音。',
    formula: '特殊歷史留存或借詞 ➔ 不遵循常規拼讀鏈',
    description: '英語在發展歷史中吸收大量古法語、拉丁語、諾曼語及古日耳曼語，且經由大母音推移（Great Vowel Shift），部分超高頻核心字詞保留了特殊拼法與發音。',
    phonemeMapping: [
      { letters: 'ea 特例短音', ipa: '/ɛ/', desc: '如 bread, head, dead, death, deaf' },
      { letters: 'o 特例短音 /ʌ/', ipa: '/ʌ/', desc: '如 come, some, love, done, cover' },
      { letters: 'oo 特例短音 /ʊ/', ipa: '/ʊ/', desc: '如 book, look, good, foot, wood' },
      { letters: '外來語特例', ipa: '特殊音標', desc: '如 island, machine, police, buffet' }
    ],
    examples: [
      { word: 'cover', ipa: '/ˈkʌv.ɚ/', note: 'o 位於開音節環境卻特例發短音 /ʌ/' },
      { word: 'death', ipa: '/dɛθ/', note: 'ea 母音組合特例發短母音 /ɛ/' },
      { word: 'come', ipa: '/kʌm/', note: 'o_e 結構不發長音，特例發短音 /ʌ/' },
      { word: 'give', ipa: '/ɡɪv/', note: 'i_e 結構不發長音，保留短音 /ɪ/' },
      { word: 'one', ipa: '/wʌn/', note: '開頭字母 o 特例發滑音子音 /wʌn/' }
    ],
    exceptionsOrTips: 'EPRS 針對所有 R010 例外皆建立完整例外分類標籤（如「母音特例短音」、「發音例外」），讓學習者明確掌握例外成因。'
  },
  R011: {
    id: 'R011',
    name: '母音 Y 半母音法則與特殊字族',
    englishName: 'Semi-Vowel Y & Word Families (-alk, -old)',
    category: '母音法則',
    summary: '字母 y 在字首為子音 /j/，在單音節字尾為長母音 /aɪ/，在多音節字尾為長母音 /i/；特殊字族如 -alk, -ind 發特例音。',
    formula: '字首 y ➔ /j/；字尾單音節 y ➔ /aɪ/；字尾多音節 y ➔ /i/',
    description: '字母 y 具有子音與母音的雙重身份。另外如 -alk (a 發 /ɔː/, l 靜音)、-old (o 發長音 /oʊ/)、-ind (i 發長音 /aɪ/) 屬於特殊封閉字族。',
    phonemeMapping: [
      { letters: 'y (字首)', ipa: '/j/', desc: '如 yes, yellow, you, young' },
      { letters: 'y (單音節字尾)', ipa: '/aɪ/', desc: '如 my, fly, cry, try, sky, why' },
      { letters: 'y (多音節字尾)', ipa: '/i/', desc: '如 happy, baby, family, city, party' },
      { letters: '-alk 字族', ipa: '/ɔːk/', desc: '如 talk, walk, chalk (l 靜音)' },
      { letters: '-old 字族', ipa: '/oʊld/', desc: '如 cold, hold, old, gold' }
    ],
    examples: [
      { word: 'cry', ipa: '/kraɪ/', note: '單音節字尾 y 發雙母音 /aɪ/' },
      { word: 'happy', ipa: '/ˈhæp.i/', note: '多音節字尾 y 發輕長母音 /i/' },
      { word: 'yellow', ipa: '/ˈjɛl.oʊ/', note: '字首 y 發子音 /j/' },
      { word: 'talk', ipa: '/tɔːk/', note: '-alk 字族，a 發 /ɔː/ 且 l 靜音' },
      { word: 'cold', ipa: '/koʊld/', note: '-old 字族，o 發長音 /oʊ/' }
    ],
    exceptionsOrTips: '若 y 後方接母音，則其為子音起首；若處於音節核或末尾，則為母音性質。'
  },
  R012: {
    id: 'R012',
    name: '前綴與後綴弱化規則',
    englishName: 'Affix Reduction (-tion, -sion, re-, de-, dis-)',
    category: '詞綴與複合詞',
    summary: '非重讀前綴（re-, de-, be-, pre-, ex-）與衍生後綴（-tion, -sion, -ment, -ful, -able）具固定弱化讀音。',
    formula: '固定詞綴 ➔ 弱化標準音標',
    description: '在英語構詞學中，前綴與後綴極少承載第一主重音，通常發出固定的弱化音。例如 -tion 固定發 /ʃən/，且重音強制鎖定在前一個音節。',
    phonemeMapping: [
      { letters: '-tion', ipa: '/ʃən/', desc: '如 ac·tion, sta·tion, dic·tion·ar·y' },
      { letters: '-sion', ipa: '/ʒən/ 或 /ʃən/', desc: '如 de·ci·sion, vi·sion, pen·sion' },
      { letters: 're- / de- (前綴)', ipa: '/rɪ/ 或 /dɪ/', desc: '如 re·port, de·cide, de·fine' },
      { letters: 'ex- (前綴)', ipa: '/ɪk/ 或 /ɛks/', desc: '如 ex·pect, ex·plain, ex·pen·sive' },
      { letters: 'ac- / ad- / ap- / at- (同化前綴)', ipa: '/ə/', desc: '如 account /əˈkaʊnt/, admit /ədˈmɪt/, apply /əˈplaɪ/, attend /əˈtɛnd/' },
      { letters: '-ment / -ful (後綴)', ipa: '/mənt/, /fəl/', desc: '如 en·joy·ment, care·ful' }
    ],
    examples: [
      { word: 'action', ipa: '/ˈæk.ʃən/', note: '-tion 後綴弱化發 /ʃən/，重音在前' },
      { word: 'account', ipa: '/əˈkaʊnt/', note: 'ac- 為非重讀前綴弱化發 /ə/（不適用閉音節 R001 短母音 /æ/）' },
      { word: 'decide', ipa: '/dɪˈsaɪd/', note: 'de- 前綴非重讀弱化發 /dɪ/' },
      { word: 'expect', ipa: '/ɪkˈspɛkt/', note: 'ex- 前綴非重讀弱化發 /ɪk/' },
      { word: 'explain', ipa: '/ɪkˈspleɪn/', note: 'ex- 前綴非重讀弱化發 /ɪk/' },
      { word: 'define', ipa: '/dɪˈfaɪn/', note: 'de- 前綴非重讀弱化發 /dɪ/' }
    ],
    exceptionsOrTips: '-tion / -sion 前方的音節往往受主重音，此為判斷多音節單字重音位置的重要標竿；非重讀前綴（如 ac-, ad-, ap-, at-）即便表面帶封閉子音，亦一律受前綴弱化支配發 /ə/，嚴禁誤判為閉音節短母音。'
  },
  R013: {
    id: 'R013',
    name: '閃音 T 與音位同化 (Flap T)',
    englishName: 'Flap T & Allophonic Variation',
    category: '音節與弱化',
    summary: '字母 t 或 d 夾在兩個母音之間且位於非重音節時，弱化發齒齦閃音 /t̬/。',
    formula: '母音 + [t/d] + 非重讀母音 ➔ 閃音 /t̬/',
    description: '美式英語最具代表性的特徵之一。舌尖迅速輕觸齒齦後彈開（Flap），聽感類似快速輕發的 d 音，極具流暢感。',
    phonemeMapping: [
      { letters: 't (夾於雙母音)', ipa: '/t̬/', desc: '如 wa·ter, ci·ty, bet·ter, let·ter' },
      { letters: 'tt (雙寫 t 弱化)', ipa: '/t̬/', desc: '如 lit·tle, bot·tle, but·ter' },
      { letters: 'd (夾於雙母音)', ipa: '/d̬/', desc: '如 lead·er, rid·er' }
    ],
    examples: [
      { word: 'water', ipa: '/ˈwɑː.t̬ɚ/', note: 't 介於兩個母音間且在非重讀節，發閃音 /t̬/' },
      { word: 'city', ipa: '/ˈsɪt̬.i/', note: 't 弱化為閃音 /t̬/' },
      { word: 'better', ipa: '/ˈbɛt̬.ɚ/', note: 'tt 拆分音節後弱化為閃音 /t̬/' },
      { word: 'bottle', ipa: '/ˈbɑː.t̬əl/', note: 't 結合末尾成音節發閃音 /t̬əl/' }
    ],
    exceptionsOrTips: '若 t 處於重讀音節開頭（如 re·turn, a·ttack），則必須清晰爆破送氣發 /t/，絕不可發閃音。'
  },
  R014: {
    id: 'R014',
    name: '複合詞發音與重音規律',
    englishName: 'Compound Words & Stress Distribution',
    category: '詞綴與複合詞',
    summary: '由兩個獨立詞根組合而成的複合詞，音節在字詞交界處切分，主重音通常落在第一字根。',
    formula: '［詞根 1 + 詞根 2］➔ 第一詞根主重音，第二詞根次重音或保留原音',
    description: '複合詞（如 bedroom, cellphone, afternoon）需先進行詞彙邊界切分，各詞根分別套用其自然發音規則，重音多數落在前方以突顯語義辨識。',
    phonemeMapping: [
      { letters: '複合名詞', ipa: '/ˈ詞根1.詞根2/', desc: '如 bed·room, pan·cake, air·plane' },
      { letters: '複合名詞 (帶次重音)', ipa: '/ˈ詞根1.ˌ詞根2/', desc: '如 cell·phone, birth·day' }
    ],
    examples: [
      { word: 'cellphone', ipa: '/ˈsɛl.foʊn/', note: 'cell (閉音節) + phone (魔術e)，主重音在 cell' },
      { word: 'bedroom', ipa: '/ˈbɛd.ruːm/', note: 'bed + room 切分，重音在 bed' },
      { word: 'pancake', ipa: '/ˈpæn.keɪk/', note: 'pan + cake 切分，重音在 pan' },
      { word: 'birthday', ipa: '/ˈbɝːθ.deɪ/', note: 'birth + day 切分，重音在 birth' }
    ],
    exceptionsOrTips: '部分時間或方位複合詞重音在第二詞根，如 af·ter·noon /ˌæf.tɚˈnuːn/ (雙重音或後重音)。'
  },
  R015: {
    id: 'R015',
    name: '字首 a- 弱化前綴',
    englishName: 'Prefix A- Reduction',
    category: '詞綴與複合詞',
    summary: '單字開頭為非重音之 a- 前綴時，固定弱化為央母音 /ə/，主重音移至後續音節。',
    formula: '字首 a- + 主音節 ➔ /ə/ + 重讀音節',
    description: '古英語中 on- 或 of- 演變為現代英語字首 a-（表示處於某種狀態或動作中），一律不承擔重音，一律弱化為 /ə/。',
    phonemeMapping: [
      { letters: 'a- (字首前綴)', ipa: '/ə/', desc: '如 a·bout, a·cross, a·gree, a·fraid, a·long' }
    ],
    examples: [
      { word: 'across', ipa: '/əˈkrɔːs/', note: '字首 a- 弱化為 /ə/，重音在 cross' },
      { word: 'afraid', ipa: '/əˈfreɪd/', note: '字首 a- 弱化為 /ə/，重音在 fraid' },
      { word: 'agree', ipa: '/əˈɡriː/', note: '字首 a- 弱化為 /ə/，重音在 gree' },
      { word: 'alone', ipa: '/əˈloʊn/', note: '字首 a- 弱化為 /ə/，重音在 lone' }
    ],
    exceptionsOrTips: '若 a 開頭為名詞字根部分（如 ap·ple, an·gle），則非弱化前綴，受重音發短母音 /æ/。'
  },
  R016: {
    id: 'R016',
    name: '靜音子音規則',
    englishName: 'Silent Consonants (wr-, kn-, -mb, -bt)',
    category: '子音法則',
    summary: '歷史語音演變導致特定子音字母保留拼寫但不發音（如 wr- 中的 w、kn- 中的 k、-mb 中的 b）。',
    formula: '特定子音對 ➔ 前或後一子音保持靜音',
    description: '古英語與中古英語時期此類子音皆曾發音（如 kn- 曾發 /kn/），但隨著發音省力化演變，嘴唇或舌位動作被簡化，留下只寫不念的靜音子音。',
    phonemeMapping: [
      { letters: 'wr-', ipa: '/r/', desc: 'w 靜音，如 write, writer, wrong, wrist' },
      { letters: 'kn-', ipa: '/n/', desc: 'k 靜音，如 know, knife, knee, knock' },
      { letters: '-mb', ipa: '/m/', desc: 'b 靜音，如 climb, comb, bomb, thumb' },
      { letters: '-bt', ipa: '/t/', desc: 'b 靜音，如 doubt, debt' },
      { letters: '-lk', ipa: '/k/', desc: 'l 靜音，如 talk, walk, half' }
    ],
    examples: [
      { word: 'write', ipa: '/raɪt/', note: 'wr- 字首 w 靜音，發 /raɪt/' },
      { word: 'know', ipa: '/noʊ/', note: 'kn- 字首 k 靜音，發 /noʊ/' },
      { word: 'climb', ipa: '/klaɪm/', note: '-mb 字尾 b 靜音，發 /klaɪm/' },
      { word: 'wrong', ipa: '/rɑːŋ/', note: 'wr- 字首 w 靜音，發 /rɑːŋ/' }
    ],
    exceptionsOrTips: '靜音子音不可參與音節切分計算，必須隨伴主子音保持在同一音節。'
  },
  R017: {
    id: 'R017',
    name: '軟顎鼻音同化 (Velar Nasal)',
    englishName: 'Velar Nasal Assimilation (-nk, -ng+k/g)',
    category: '子音法則',
    summary: '齒齦鼻音 n 接在軟顎音 /k/ 或 /ɡ/ 之前時，受發音部位同化變音為軟顎鼻音 /ŋ/。',
    formula: 'n + (k 或 g) ➔ /ŋ/ + /k/ 或 /ŋɡ/',
    description: '發音器官在準備後方的舌根軟顎塞音 /k/ 或 /ɡ/ 時，鼻音 n 的阻礙部位提前退回軟顎處，由齒齦鼻音變為軟顎鼻音 /ŋ/。',
    phonemeMapping: [
      { letters: '-nk', ipa: '/ŋk/', desc: '如 think, thank, bank, monkey, pink' },
      { letters: '-ng + 母音', ipa: '/ŋɡ/', desc: '如 finger, longer, kangaroo' },
      { letters: '-ng (字尾)', ipa: '/ŋ/', desc: '如 sing, song, long, king' }
    ],
    examples: [
      { word: 'monkey', ipa: '/ˈmʌŋ.ki/', note: 'n 受後方 k 同化，發 /ŋk/' },
      { word: 'think', ipa: '/θɪŋk/', note: 'nk 組合發 /ŋk/' },
      { word: 'kangaroo', ipa: '/ˌkæŋ.ɡəˈruː/', note: 'n 受後方 g 同化發 /ŋɡ/' },
      { word: 'finger', ipa: '/ˈfɪŋ.ɡɚ/', note: 'n 受後方 g 同化發 /ŋɡ/' }
    ],
    exceptionsOrTips: '字尾 -ng 通常純粹發 /ŋ/，但在部分比較級或特定字詞中會帶出爆破音 /ɡ/（如 longer /ˈlɑːŋ.ɡɚ/）。'
  },
  R018: {
    id: 'R018',
    name: '字母縮寫讀音規則',
    englishName: 'Initialisms & Acronyms',
    category: '例外與特殊',
    summary: '首字母縮寫字依據英文字母本名逐字朗讀，各字母均具備獨立音節與重音強度。',
    formula: '縮寫字母 ➔ 依字母個別名稱朗讀',
    description: '英語中的首字母縮寫詞（Initialisms）如 CD, TV, VIP, USA，由各字母名稱組合而成，主重音通常落在最後一個字母上。',
    phonemeMapping: [
      { letters: 'CD', ipa: '/ˌsiːˈdiː/', desc: '逐字讀 C /siː/ 與 D /diː/' },
      { letters: 'TV', ipa: '/ˌtiːˈviː/', desc: '逐字讀 T /tiː/ 與 V /viː/' }
    ],
    examples: [
      { word: 'CD', ipa: '/ˌsiːˈdiː/', note: '依字母發音，重音在 D' },
      { word: 'TV', ipa: '/ˌtiːˈviː/', note: '依字母發音，重音在 V' }
    ],
    exceptionsOrTips: '若縮寫字被當作普通單詞拼讀（Acronyms，如 NASA, UNESCO），則套用一般自然發音規則。'
  }
};

export const ALL_RULE_CODES = Object.keys(EPRS_PHONICS_RULES);

export function getPhonicsRule(ruleCode: string): PhonicsRule | null {
  if (!ruleCode) return null;
  const code = ruleCode.toUpperCase().trim();
  return EPRS_PHONICS_RULES[code] || null;
}
