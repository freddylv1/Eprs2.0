window.EPRS_RULES = [
  {
    "id": "R001",
    "name": "短母音 / 閉音節",
    "englishName": "Closed Syllable (Short Vowels)",
    "formula": "［(C)VC］母音 + 封閉子音 ➔ 發短母音",
    "description": "閉音節（Closed Syllable）是英語最基礎且最頻繁的音節結構。音節結尾有子音封閉阻擋氣流，使得母音長度受限，發出緊湊短促的短母音。",
    "summary": "單一母音字母後方被一個或多個子音封閉時，該母音通常發「短母音」。",
    "examples": [
      {
        "word": "cat",
        "ipa": "/kæt/"
      },
      {
        "word": "bed",
        "ipa": "/bɛd/"
      },
      {
        "word": "sit",
        "ipa": "/sɪt/"
      },
      {
        "word": "stop",
        "ipa": "/stɑːp/"
      },
      {
        "word": "bus",
        "ipa": "/bʌs/"
      }
    ]
  },
  {
    "id": "R002",
    "name": "長母音 / 開音節",
    "englishName": "Open Syllable (Long Vowels)",
    "formula": "［(C)V］母音未被子音阻擋 ➔ 發字母本音",
    "description": "開音節（Open Syllable）的音節尾端沒有子音「封門」，聲音可以充分延長並以雙母音或長母音滑動形式發出字母的本音名稱。",
    "summary": "音節以單一母音字母結尾（無子音封閉），氣流暢通，母音發字母本音「長母音」。",
    "examples": [
      {
        "word": "me",
        "ipa": "/miː/"
      },
      {
        "word": "go",
        "ipa": "/ɡoʊ/"
      },
      {
        "word": "paper",
        "ipa": "/ˈpeɪ.pɚ/"
      },
      {
        "word": "tiger",
        "ipa": "/ˈtaɪ.ɡɚ/"
      },
      {
        "word": "music",
        "ipa": "/ˈmjuː.zɪk/"
      }
    ]
  },
  {
    "id": "R003",
    "name": "魔術 e 規則",
    "englishName": "Magic E / Vowel-Consonant-e",
    "formula": "［V + C + e］字尾 e 靜音 ➔ 前方母音發長母音",
    "description": "Magic E 又稱「無聲 e (Silent e)」或「拆分雙母音 (Split Digraph)」。歷史上字尾 e 原有發音，在大母音推移後失去發音，轉而作為指示前方母音發長音的正字法標記。",
    "summary": "單字呈現「母音 + 單子音 + e」結構，字尾 e 保持靜音，賦予前方母音發字母本音長音。",
    "examples": [
      {
        "word": "cake",
        "ipa": "/keɪk/"
      },
      {
        "word": "bike",
        "ipa": "/baɪk/"
      },
      {
        "word": "home",
        "ipa": "/hoʊm/"
      },
      {
        "word": "cute",
        "ipa": "/kjuːt/"
      },
      {
        "word": "brave",
        "ipa": "/breɪv/"
      }
    ]
  },
  {
    "id": "R004",
    "name": "母音字母組合",
    "englishName": "Vowel Teams / Digraphs & Diphthongs",
    "formula": "［VV］相連雙母音 ➔ 發固定長母音或滑音雙母音",
    "description": "英語中有許多固定的母音字母對，最著名的是「When two vowels go walking, the first one does the talking」（如 oa 發 /oʊ/、ee 發 /iː/、ai 發 /eɪ/），另外也有如 ou, oi, oy 等固定雙母音。",
    "summary": "兩個連續的母音字母組合成一個特定音素（「兩母相逢，前母長嘯」或固定雙母音）。",
    "examples": [
      {
        "word": "rain",
        "ipa": "/reɪn/"
      },
      {
        "word": "boat",
        "ipa": "/boʊt/"
      },
      {
        "word": "deal",
        "ipa": "/diːl/"
      },
      {
        "word": "coin",
        "ipa": "/kɔɪn/"
      },
      {
        "word": "cloud",
        "ipa": "/klaʊd/"
      }
    ]
  },
  {
    "id": "R005",
    "name": "R 控制母音",
    "englishName": "R-Controlled Vowels (Bossy R)",
    "formula": "［V + r］母音與 r 融合 ➔ 發捲舌母音",
    "description": "字母 r 在英語發音學中稱為「霸道 R (Bossy R)」，它會強烈改變前方母音的舌位與共鳴腔，形成獨特的美式捲舌音。",
    "summary": "母音字母後緊隨字母 r 時，母音失去原有純母音特質，轉化為捲舌色彩母音。",
    "examples": [
      {
        "word": "car",
        "ipa": "/kɑːr/"
      },
      {
        "word": "bird",
        "ipa": "/bɝːd/"
      },
      {
        "word": "for",
        "ipa": "/fɔːr/"
      },
      {
        "word": "teacher",
        "ipa": "/ˈtiː.tʃɚ/"
      },
      {
        "word": "dollar",
        "ipa": "/ˈdɑː.lɚ/"
      }
    ]
  },
  {
    "id": "R006",
    "name": "複合子音與子音叢",
    "englishName": "Consonant Digraphs & Blends",
    "formula": "［CC 組合］不可分割 ➔ 視為單一子音音素或複合音位",
    "description": "複合子音（Digraphs）是由兩個字母合成一個全新音素；子音叢（Blends/Clusters）是由兩個以上子音緊密銜接，各音素皆保留但不可跨音節隨意拆解。",
    "summary": "特定子音組合共同發單一音素（複合子音），或緊密相連滑動過渡（子音叢），音節劃分時不可任意拆開。",
    "examples": [
      {
        "word": "ship",
        "ipa": "/ʃɪp/"
      },
      {
        "word": "chair",
        "ipa": "/tʃɛr/"
      },
      {
        "word": "think",
        "ipa": "/θɪŋk/"
      },
      {
        "word": "this",
        "ipa": "/ðɪs/"
      },
      {
        "word": "elephant",
        "ipa": "/ˈɛl.ə.fənt/"
      }
    ]
  },
  {
    "id": "R007",
    "name": "軟子音與硬子音 (C 與 G)",
    "englishName": "Soft & Hard C and G",
    "formula": "c/g + (e, i, y) ➔ 軟音 /s/, /dʒ/；c/g + (a, o, u) ➔ 硬音 /k/, /ɡ/",
    "description": "這是拉丁語系借詞進入中古英語所形成的規律。軟音是指發摩擦音或破擦音，硬音則為軟顎塞音。",
    "summary": "字母 c 與 g 在 e, i, y 前發軟音；在 a, o, u 或其他子音前發硬音。",
    "examples": [
      {
        "word": "city",
        "ipa": "/ˈsɪt.i/"
      },
      {
        "word": "cat",
        "ipa": "/kæt/"
      },
      {
        "word": "gym",
        "ipa": "/dʒɪm/"
      },
      {
        "word": "go",
        "ipa": "/ɡoʊ/"
      },
      {
        "word": "face",
        "ipa": "/feɪs/"
      }
    ]
  },
  {
    "id": "R008",
    "name": "非重音央化弱音 (Schwa)",
    "englishName": "Unstressed Vowel Reduction (Schwa)",
    "formula": "非重音節母音 ➔ 弱化發 /ə/ 或 /ɪ/",
    "description": "英語是重音等時節奏語言（Stress-timed language）。為了突顯重音節的清晰度，非重音音節會迅速滑過並中央化，發出最省力的 Schwa 音 /ə/。",
    "summary": "多音節單字中非重音音節的母音，多數弱化為央母音 /ə/ 或高弱音 /ɪ/。",
    "examples": [
      {
        "word": "banana",
        "ipa": "/bəˈnæn.ə/"
      },
      {
        "word": "about",
        "ipa": "/əˈbaʊt/"
      },
      {
        "word": "family",
        "ipa": "/ˈfæm.ə.li/"
      },
      {
        "word": "carrot",
        "ipa": "/ˈkær.ət/"
      },
      {
        "word": "lemon",
        "ipa": "/ˈlɛm.ən/"
      }
    ]
  },
  {
    "id": "R009",
    "name": "成音節 (Syllabic Consonant)",
    "englishName": "Syllabic Consonants (-le, -el, -en)",
    "formula": "［子音 + le］➔ 獨立成音節，發 /C + əl/",
    "description": "成音節是指不含完整顯性母音字母，而由響音子音（如 l, n, m）單獨或攜帶微弱央音 /ə/ 構成音節核，常見於字尾 -le, -el, -en。",
    "summary": "字尾 -ble, -cle, -dle, -tle 等「子音 + le」結構，子音 l 自行獨立成音節，發 /əl/ 或 /l̩/。",
    "examples": [
      {
        "word": "table",
        "ipa": "/ˈteɪ.bəl/"
      },
      {
        "word": "apple",
        "ipa": "/ˈæp.əl/"
      },
      {
        "word": "bottle",
        "ipa": "/ˈbɑː.t̬əl/"
      },
      {
        "word": "uncle",
        "ipa": "/ˈʌŋ.kəl/"
      },
      {
        "word": "little",
        "ipa": "/ˈlɪt̬.əl/"
      }
    ]
  },
  {
    "id": "R010",
    "name": "發音例外與特例型態",
    "englishName": "Phonics Exceptions & Historical Retentions",
    "formula": "特殊歷史留存或借詞 ➔ 不遵循常規拼讀鏈",
    "description": "英語在發展歷史中吸收大量古法語、拉丁語、諾曼語及古日耳曼語，且經由大母音推移（Great Vowel Shift），部分超高頻核心字詞保留了特殊拼法與發音。",
    "summary": "受歷史大母音推移、外來語借詞（法語、希臘語）或頻繁使用產生的特例發音。",
    "examples": [
      {
        "word": "cover",
        "ipa": "/ˈkʌv.ɚ/"
      },
      {
        "word": "death",
        "ipa": "/dɛθ/"
      },
      {
        "word": "come",
        "ipa": "/kʌm/"
      },
      {
        "word": "give",
        "ipa": "/ɡɪv/"
      },
      {
        "word": "one",
        "ipa": "/wʌn/"
      }
    ]
  },
  {
    "id": "R011",
    "name": "母音 Y 半母音法則與特殊字族",
    "englishName": "Semi-Vowel Y & Word Families (-alk, -old)",
    "formula": "字首 y ➔ /j/；字尾單音節 y ➔ /aɪ/；字尾多音節 y ➔ /i/",
    "description": "字母 y 具有子音與母音的雙重身份。另外如 -alk (a 發 /ɔː/, l 靜音)、-old (o 發長音 /oʊ/)、-ind (i 發長音 /aɪ/) 屬於特殊封閉字族。",
    "summary": "字母 y 在字首為子音 /j/，在單音節字尾為長母音 /aɪ/，在多音節字尾為長母音 /i/；特殊字族如 -alk, -ind 發特例音。",
    "examples": [
      {
        "word": "cry",
        "ipa": "/kraɪ/"
      },
      {
        "word": "happy",
        "ipa": "/ˈhæp.i/"
      },
      {
        "word": "yellow",
        "ipa": "/ˈjɛl.oʊ/"
      },
      {
        "word": "talk",
        "ipa": "/tɔːk/"
      },
      {
        "word": "cold",
        "ipa": "/koʊld/"
      }
    ]
  },
  {
    "id": "R012",
    "name": "前綴與後綴弱化規則",
    "englishName": "Affix Reduction (-tion, -sion, re-, de-, dis-)",
    "formula": "固定詞綴 ➔ 弱化標準音標",
    "description": "在英語構詞學中，前綴與後綴極少承載第一主重音，通常發出固定的弱化音。例如 -tion 固定發 /ʃən/，且重音強制鎖定在前一個音節。",
    "summary": "非重讀前綴（re-, de-, be-, pre-, ex-）與衍生後綴（-tion, -sion, -ment, -ful, -able）具固定弱化讀音。",
    "examples": [
      {
        "word": "action",
        "ipa": "/ˈæk.ʃən/"
      },
      {
        "word": "account",
        "ipa": "/əˈkaʊnt/"
      },
      {
        "word": "decide",
        "ipa": "/dɪˈsaɪd/"
      },
      {
        "word": "expect",
        "ipa": "/ɪkˈspɛkt/"
      },
      {
        "word": "explain",
        "ipa": "/ɪkˈspleɪn/"
      },
      {
        "word": "define",
        "ipa": "/dɪˈfaɪn/"
      }
    ]
  },
  {
    "id": "R013",
    "name": "閃音 T 與音位同化 (Flap T)",
    "englishName": "Flap T & Allophonic Variation",
    "formula": "母音 + [t/d] + 非重讀母音 ➔ 閃音 /t̬/",
    "description": "美式英語最具代表性的特徵之一。舌尖迅速輕觸齒齦後彈開（Flap），聽感類似快速輕發的 d 音，極具流暢感。",
    "summary": "字母 t 或 d 夾在兩個母音之間且位於非重音節時，弱化發齒齦閃音 /t̬/。",
    "examples": [
      {
        "word": "water",
        "ipa": "/ˈwɑː.t̬ɚ/"
      },
      {
        "word": "city",
        "ipa": "/ˈsɪt̬.i/"
      },
      {
        "word": "better",
        "ipa": "/ˈbɛt̬.ɚ/"
      },
      {
        "word": "bottle",
        "ipa": "/ˈbɑː.t̬əl/"
      }
    ]
  },
  {
    "id": "R014",
    "name": "複合詞發音與重音規律",
    "englishName": "Compound Words & Stress Distribution",
    "formula": "［詞根 1 + 詞根 2］➔ 第一詞根主重音，第二詞根次重音或保留原音",
    "description": "複合詞（如 bedroom, cellphone, afternoon）需先進行詞彙邊界切分，各詞根分別套用其自然發音規則，重音多數落在前方以突顯語義辨識。",
    "summary": "由兩個獨立詞根組合而成的複合詞，音節在字詞交界處切分，主重音通常落在第一字根。",
    "examples": [
      {
        "word": "cellphone",
        "ipa": "/ˈsɛl.foʊn/"
      },
      {
        "word": "bedroom",
        "ipa": "/ˈbɛd.ruːm/"
      },
      {
        "word": "pancake",
        "ipa": "/ˈpæn.keɪk/"
      },
      {
        "word": "birthday",
        "ipa": "/ˈbɝːθ.deɪ/"
      }
    ]
  },
  {
    "id": "R015",
    "name": "字首 a- 弱化前綴",
    "englishName": "Prefix A- Reduction",
    "formula": "字首 a- + 主音節 ➔ /ə/ + 重讀音節",
    "description": "古英語中 on- 或 of- 演變為現代英語字首 a-（表示處於某種狀態或動作中），一律不承擔重音，一律弱化為 /ə/。",
    "summary": "單字開頭為非重音之 a- 前綴時，固定弱化為央母音 /ə/，主重音移至後續音節。",
    "examples": [
      {
        "word": "across",
        "ipa": "/əˈkrɔːs/"
      },
      {
        "word": "afraid",
        "ipa": "/əˈfreɪd/"
      },
      {
        "word": "agree",
        "ipa": "/əˈɡriː/"
      },
      {
        "word": "alone",
        "ipa": "/əˈloʊn/"
      }
    ]
  },
  {
    "id": "R016",
    "name": "靜音子音規則",
    "englishName": "Silent Consonants (wr-, kn-, -mb, -bt)",
    "formula": "特定子音對 ➔ 前或後一子音保持靜音",
    "description": "古英語與中古英語時期此類子音皆曾發音（如 kn- 曾發 /kn/），但隨著發音省力化演變，嘴唇或舌位動作被簡化，留下只寫不念的靜音子音。",
    "summary": "歷史語音演變導致特定子音字母保留拼寫但不發音（如 wr- 中的 w、kn- 中的 k、-mb 中的 b）。",
    "examples": [
      {
        "word": "write",
        "ipa": "/raɪt/"
      },
      {
        "word": "know",
        "ipa": "/noʊ/"
      },
      {
        "word": "climb",
        "ipa": "/klaɪm/"
      },
      {
        "word": "wrong",
        "ipa": "/rɑːŋ/"
      }
    ]
  },
  {
    "id": "R017",
    "name": "軟顎鼻音同化 (Velar Nasal)",
    "englishName": "Velar Nasal Assimilation (-nk, -ng+k/g)",
    "formula": "n + (k 或 g) ➔ /ŋ/ + /k/ 或 /ŋɡ/",
    "description": "發音器官在準備後方的舌根軟顎塞音 /k/ 或 /ɡ/ 時，鼻音 n 的阻礙部位提前退回軟顎處，由齒齦鼻音變為軟顎鼻音 /ŋ/。",
    "summary": "齒齦鼻音 n 接在軟顎音 /k/ 或 /ɡ/ 之前時，受發音部位同化變音為軟顎鼻音 /ŋ/。",
    "examples": [
      {
        "word": "monkey",
        "ipa": "/ˈmʌŋ.ki/"
      },
      {
        "word": "think",
        "ipa": "/θɪŋk/"
      },
      {
        "word": "kangaroo",
        "ipa": "/ˌkæŋ.ɡəˈruː/"
      },
      {
        "word": "finger",
        "ipa": "/ˈfɪŋ.ɡɚ/"
      }
    ]
  },
  {
    "id": "R018",
    "name": "字母縮寫讀音規則",
    "englishName": "Initialisms & Acronyms",
    "formula": "縮寫字母 ➔ 依字母個別名稱朗讀",
    "description": "英語中的首字母縮寫詞（Initialisms）如 CD, TV, VIP, USA，由各字母名稱組合而成，主重音通常落在最後一個字母上。",
    "summary": "首字母縮寫字依據英文字母本名逐字朗讀，各字母均具備獨立音節與重音強度。",
    "examples": [
      {
        "word": "CD",
        "ipa": "/ˌsiːˈdiː/"
      },
      {
        "word": "TV",
        "ipa": "/ˌtiːˈviː/"
      }
    ]
  }
];