export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch7DerivationsMap: Record<number, DerivationItem[]> = {
  601: [
    { syllable: '第 1 音節［of］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 f 封閉重讀音節，單一母音 o 常規發短母音 /ˈɑːf/' },
    { syllable: '第 2 音節［fice］', rule: '魔術 e 規則 (R003) → 非重音弱化 (R008) + 軟音 c (R007)', status: '【不適用 (例外轉移)】', reason: '處非重音節，i_e 未發長母音轉移弱化發短音 /ɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音發 /fɪs/' }
  ],
  602: [
    { syllable: '第 1 音節［of］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 f 封閉重讀音節，單一母音 o 常規發短母音 /ˈɑːf/' },
    { syllable: '第 2 音節［fi］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 i 弱化發央母音 /fə/' },
    { syllable: '第 3 音節［cer］', rule: '軟音 c (R007) + R 控制母音 (R005)', status: '【適用】', reason: 'c 在 e 前軟音化為 /s/，-er 於詞尾常規發弱化捲舌音 /sɚ/' }
  ],
  603: [
    { syllable: '第 1 音節［of］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 o 被子音 f 封閉常規發短母音 /ˈɑːf/' },
    { syllable: '第 2 音節［ten］', rule: '靜音子音 t (R010) + 成音節弱化 (R009)', status: '【不適用 (例外轉移)】', reason: '現代美式發音中 t 靜音，en 弱化發成音節鼻音 /fən/ (亦有念出 t 之變體)' }
  ],
  604: [
    { syllable: '單音節［oil］', rule: '雙母音組合 oi (R004)', status: '【適用】', reason: '字母組合 oi 常規發雙母音 /ɔɪ/，尾音 l 帶出舌根軟顎化音，全字發 /ɔɪl/' }
  ],
  605: [
    { syllable: '單音節［old］', rule: '-old 特例長母音字族 (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 o 在 -ld 前依古英語長化特例常規發長雙母音 /oʊld/，而非短母音 (R010)' }
  ],
  606: [
    { syllable: '單音節［on］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻子音 n 封閉音節，單一母音 o 常規發短母音 /ɑːn/' }
  ],
  607: [
    { syllable: '單音節［once］', rule: '歷史音變特例 (R010) + 軟音 c (R007)', status: '【不適用 (例外轉移)】', reason: '字首 o 歷史演變帶出唇軟顎半母音發 /wʌ/，c 在 e 前軟音化為 /s/，字尾 e 靜音，全字發 /wʌns/' }
  ],
  608: [
    { syllable: '第 1 音節［on］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 o 被鼻子音 n 封閉，常規發短母音 /ˈɑːn/' },
    { syllable: '第 2 音節［line］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音促使母音 i 常規發字母本名長雙母音 /laɪn/' }
  ],
  609: [
    { syllable: '第 1 音節［on］', rule: '-on 特例長音轉移 (R010)', status: '【不適用 (例外轉移)】', reason: '源自 one 字根演變，o 特例發長雙母音 /ˈoʊn/，未發短母音 (R010)' },
    { syllable: '第 2 音節［ly］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 -ly 處非重讀音節常規發長母音 /li/' }
  ],
  610: [
    { syllable: '第 1 音節［o］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節結尾無子音封閉，單一母音 o 常規發長雙母音 /ˈoʊ/' },
    { syllable: '第 2 音節［pen］', rule: '非重讀弱化 / 成音節 (R008/R009)', status: '【適用】', reason: '非重讀音節母音 e 弱化，鼻音 n 形成成音節發 /pən/' }
  ],
  611: [
    { syllable: '單音節［or］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: 'or 組合於單音節常規發後圓唇長母音 /ɔːr/' }
  ],
  612: [
    { syllable: '第 1 音節［or］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: 'or 字母組合於重音節常規發 /ˈɔːr/' },
    { syllable: '第 2 音節［ange］', rule: '軟音 g (R007) + 非重讀弱化 (R008)', status: '【適用】', reason: 'g 在 e 前軟音化發濁塞擦音 /dʒ/，a 弱化發短音 /ɪndʒ/' }
  ],
  613: [
    { syllable: '第 1 音節［or］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: 'or 組合於重讀音節常規發長母音 /ˈɔːr/' },
    { syllable: '第 2 音節［der］', rule: 'R 控制母音 er (R005) / 弱化 (R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /dɚ/' }
  ],
  614: [
    { syllable: '第 1 音節［oth］', rule: '複合子音 th (R006) + 特例短母音 (R010)', status: '【適用 (部分轉移)】', reason: 'th 濁化發 /ð/，母音 o 受歷史音變影響發短中舌母音 /ˈʌð/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005) / 弱化 (R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發捲舌音 /ɚ/' }
  ],
  615: [
    { syllable: '單音節［out］', rule: '雙母音組合 ou (R004)', status: '【適用】', reason: '雙母音 ou 常規發 /aʊ/，尾音 t 封閉，全字發 /aʊt/' }
  ],
  616: [
    { syllable: '第 1 音節［out］', rule: '雙母音組合 ou (R004)', status: '【適用】', reason: 'ou 字母組合常規發雙母音 /aʊt/' },
    { syllable: '第 2 音節［side］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 常規發字母本名長雙母音 /ˈsaɪd/' }
  ],
  617: [
    { syllable: '第 1 音節［o］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節母音 o 結尾無子音封閉，常規發長雙母音 /ˈoʊ/' },
    { syllable: '第 2 音節［ver］', rule: 'R 控制母音 er (R005) / 弱化 (R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /vɚ/' }
  ],
  618: [
    { syllable: '單音節［own］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 字母組合常規發長雙母音 /oʊ/，鼻子音 n 封閉全字發 /oʊn/' }
  ],
  619: [
    { syllable: '單音節［pack］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: '複合子音 ck 封閉音節，單一母音 a 常規發短母音 /pæk/' }
  ],
  620: [
    { syllable: '第 1 音節［pack］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: 'ck 封閉重讀音節，母音 a 常規發短母音 /ˈpæk/' },
    { syllable: '第 2 音節［age］', rule: '名詞字尾弱化 (R008) + 軟音 g (R007)', status: '【適用】', reason: '名詞後綴 -age 處非重音節 a 弱化發 /ɪ/，g 在 e 前軟音化為 /dʒ/，發 /ɪdʒ/' }
  ],
  621: [
    { syllable: '單音節［page］', rule: '魔術 e 規則 (R003) + 軟音 g (R007)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音促使 a 發長雙母音 /peɪ/，g 在 e 前軟化為 /dʒ/' }
  ],
  622: [
    { syllable: '單音節［paint］', rule: '雙母音組合 ai (R004)', status: '【適用】', reason: 'ai 字母組合常規發長雙母音 /eɪ/，子音叢 nt 封閉發 /peɪnt/' }
  ],
  623: [
    { syllable: '單音節［pair］', rule: '雙母音 air 組合 (R005)', status: '【適用】', reason: 'air 字母組合於單音節常規發捲舌雙母音 /pɛr/' }
  ],
  624: [
    { syllable: '單音節［pants］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 nts 封閉音節，單一母音 a 常規發短母音 /pænts/' }
  ],
  625: [
    { syllable: '第 1 音節［pa］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 a 結尾無子音封閉，常規發長雙母音 /ˈpeɪ/' },
    { syllable: '第 2 音節［per］', rule: 'R 控制母音 er (R005) / 弱化 (R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /pɚ/' }
  ],
  626: [
    { syllable: '第 1 音節［par］', rule: 'R 控制母音 ar (R005)', status: '【適用】', reason: 'ar 在母音前常規發捲舌音 /ˈpɛr/' },
    { syllable: '第 2 音節［ent(s)］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發央母音 /ənt(s)/' }
  ],
  627: [
    { syllable: '單音節［park］', rule: 'R 控制母音 ar (R005)', status: '【適用】', reason: 'ar 組合受 r 控制常規發長開後母音 /ɑːr/，子音 k 封閉發 /pɑːrk/' }
  ],
  628: [
    { syllable: '單音節［part］', rule: 'R 控制母音 ar (R005)', status: '【適用】', reason: 'ar 組合常規發捲舌長母音 /ɑːr/，子音 t 封閉發 /pɑːrt/' }
  ],
  629: [
    { syllable: '第 1 音節［par］', rule: 'R 控制母音 ar (R005)', status: '【適用】', reason: 'ar 字母組合於重音節常規發捲舌長母音 /ˈpɑːr/' },
    { syllable: '第 2 音節［ty］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長短交界的長母音 /ti/' }
  ],
  630: [
    { syllable: '單音節［pass］', rule: '閉音節規則 (R001) + 雙寫 ss (R006)', status: '【適用】', reason: '雙寫子音 ss 封閉音節發單一音 /s/，單一母音 a 常規發短母音 /pæs/' }
  ],
  631: [
    { syllable: '單音節［past］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 st 封閉音節，單一母音 a 常規發短母音 /pæst/' }
  ],
  632: [
    { syllable: '單音節［pay］', rule: '母音組合 ay (R004)', status: '【適用】', reason: 'ay 字母組合於字尾常規發長雙母音 /peɪ/' }
  ],
  633: [
    { syllable: '單音節［pen］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻子音 n 封閉音節，單一母音 e 常規發短母音 /pɛn/' }
  ],
  634: [
    { syllable: '第 1 音節［pen］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻子音 n 封閉重讀音節，單一母音 e 常規發短母音 /ˈpɛn/' },
    { syllable: '第 2 音節［cil］', rule: '軟音 c (R007) + 非重讀弱化 (R008)', status: '【適用】', reason: 'c 在 i 前軟音化發 /s/，il 弱化發成音節性質的 /səl/' }
  ],
  635: [
    { syllable: '第 1 音節［peo］', rule: '歷史拼寫特例 (R010)', status: '【不適用 (例外轉移)】', reason: 'eo 字母組合受古法語音變影響特例發長母音 /ˈpiː/ (R010)' },
    { syllable: '第 2 音節［ple］', rule: '成音節字尾 -le (R009)', status: '【適用】', reason: '子音 + le 結構於詞尾常規形成成音節發 /pəl/' }
  ],
  636: [
    { syllable: '第 1 音節［per］', rule: 'R 控制母音 er (R005) / 弱化 (R008)', status: '【適用】', reason: '非重讀前綴音節 per- 常規弱化發捲舌音 /pɚ/' },
    { syllable: '第 2 音節［haps］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 ps 封閉重讀音節，單一母音 a 常規發短母音 /ˈhæps/' }
  ],
  637: [
    { syllable: '第 1 音節［per］', rule: 'R 控制母音 er (R005)', status: '【適用】', reason: 'er 字母組合處重讀音節，常規發捲舌長母音 /ˈpɝː/' },
    { syllable: '第 2 音節［son］', rule: '非重讀弱化 / 成音節 (R008/R009)', status: '【適用】', reason: '非重讀音節單一母音 o 弱化，鼻音 n 結合發成音節 /sən/' }
  ],
  638: [
    { syllable: '單音節［pet］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 e 常規發短母音 /pɛt/' }
  ],
  639: [
    { syllable: '第 1 音節［pho］', rule: '複合子音 ph (R006) + 開音節 (R002)', status: '【適用】', reason: 'ph 發清擦音 /f/，開音節結尾 o 常規發長雙母音 /ˈfoʊ/' },
    { syllable: '第 2 音節［to］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '夾在中間之非重讀開音節 o 弱化，發 /t̬ə/' },
    { syllable: '第 3 音節［graph］', rule: '閉音節 (R001) + 複合子音 ph (R006)', status: '【適用】', reason: 'ph 發 /f/ 封閉音節，母音 a 常規發短母音 /ɡræf/' }
  ],
  640: [
    { syllable: '第 1 音節［pi］', rule: '開音節規則 (R002) → 非重讀 (R008)', status: '【適用】', reason: '非重讀開音節單一母音 i 常規發短長母音 /pi/' },
    { syllable: '第 2 音節［an］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻子音 n 封閉重讀音節，單一母音 a 常規發短母音 /ˈæn/' },
    { syllable: '第 3 音節［o］', rule: '開音節規則 (R002)', status: '【適用】', reason: '詞尾開音節 o 常規發長雙母音 /oʊ/' }
  ],
  641: [
    { syllable: '單音節［pick］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: '複合子音 ck 封閉音節，單一母音 i 常規發短母音 /pɪk/' }
  ],
  642: [
    { syllable: '第 1 音節［pic］', rule: '閉音節規則 (R001) + 硬音 c (R007)', status: '【適用】', reason: 'c 在音節尾發硬音 /k/ 封閉重讀音節，母音 i 發短母音 /ˈpɪk/' },
    { syllable: '第 2 音節［nic］', rule: '閉音節規則 (R001) + 硬音 c (R007)', status: '【適用】', reason: 'c 在字尾發硬音 /k/ 封閉音節，單一母音 i 常規發短母音 /nɪk/' }
  ],
  643: [
    { syllable: '第 1 音節［pic］', rule: '閉音節規則 (R001) + 硬音 c (R007)', status: '【適用】', reason: 'c 發硬音 /k/ 封閉重讀音節，母音 i 發短母音 /ˈpɪk/' },
    { syllable: '第 2 音節［ture］', rule: '字尾 -ture 顎化規則 (R006/R008)', status: '【適用】', reason: '後綴 -ture 中 t 與後方母音同化發清塞擦音 /tʃ/，ure 發捲舌音 /ɚ/' }
  ],
  644: [
    { syllable: '單音節［pie］', rule: '母音組合 ie (R004)', status: '【適用】', reason: 'ie 字母組合於單音節詞尾常規發長雙母音 /paɪ/' }
  ],
  645: [
    { syllable: '單音節［piece］', rule: '母音組合 ie (R004) + 軟音 c (R007)', status: '【適用】', reason: 'ie 組合發長母音 /iː/，c 在 e 前軟音化為 /s/，字尾 e 靜音發 /piːs/' }
  ],
  646: [
    { syllable: '單音節［pig］', rule: '閉音節規則 (R001) + 硬音 g (R007)', status: '【適用】', reason: '子音 g 在詞尾發硬音 /ɡ/ 封閉音節，單一母音 i 常規發短母音 /pɪɡ/' }
  ],
  647: [
    { syllable: '單音節［pin］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻子音 n 封閉音節，單一母音 i 常規發短母音 /pɪn/' }
  ],
  648: [
    { syllable: '單音節［pink］', rule: '閉音節規則 (R001) + 軟顎鼻音 nk (R006)', status: '【適用】', reason: 'nk 字母組合常規發軟顎鼻音 /ŋk/，母音 i 常規發短母音 /pɪŋk/' }
  ],
  649: [
    { syllable: '單音節［pipe］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音，母音 i 常規發字母本名長雙母音 /paɪp/' }
  ],
  650: [
    { syllable: '單音節［place］', rule: '魔術 e 規則 (R003) + 軟音 c (R007)', status: '【適用】', reason: 'a_e 結構促使 a 發長雙母音 /pleɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音' }
  ],
  651: [
    { syllable: '單音節［plan］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 pl 開頭，單一母音 a 被 n 封閉常規發短母音 /plæn/' }
  ],
  652: [
    { syllable: '第 1 音節［plan］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻子音 n 封閉重讀音節，單一母音 a 常規發短母音 /ˈplæn/' },
    { syllable: '第 2 音節［et］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發短音 /ɪt/' }
  ],
  653: [
    { syllable: '單音節［plant］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 nt 封閉音節，單一母音 a 常規發短母音 /plænt/' }
  ],
  654: [
    { syllable: '單音節［plate］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音促使母音 a 發字母本名長雙母音 /pleɪt/' }
  ],
  655: [
    { syllable: '單音節［play］', rule: '母音組合 ay (R004)', status: '【適用】', reason: 'ay 字母組合於詞尾常規發長雙母音 /pleɪ/' }
  ],
  656: [
    { syllable: '第 1 音節［play］', rule: '母音組合 ay (R004)', status: '【適用】', reason: 'ay 字母組合常規發長雙母音 /ˈpleɪ/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005) / 弱化 (R008)', status: '【適用】', reason: '後綴 -er 處非重讀音節常規發捲舌音 /ɚ/' }
  ],
  657: [
    { syllable: '單音節［please］', rule: '雙母音組合 ea (R004)', status: '【適用】', reason: 'ea 字母組合常規發長母音 /iː/，尾音 s 濁化為 /z/，字尾 e 靜音，全字發 /pliːz/' }
  ],
  658: [
    { syllable: '第 1 音節［pleas］', rule: '雙母音組合 ea 特例 (R010) + s 濁擦化 (R006)', status: '【不適用 (例外轉移)】', reason: 'ea 組合受歷史音變影響未發長音轉移發短母音 /ˈplɛ/，s 顎化濁擦發 /ʒ/' },
    { syllable: '第 2 音節［ure］', rule: '字尾弱化 (R008)', status: '【適用】', reason: '非重讀字尾 -ure 常規弱化發捲舌音 /ɚ/' }
  ],
  659: [
    { syllable: '第 1 音節［p.］', rule: '字母本名音規則 (R018)', status: '【適用】', reason: '英文首字母縮寫字 P 唸其字母本名音 /piː/' },
    { syllable: '第 2 音節［m.］', rule: '字母本名音規則 (R018)', status: '【適用】', reason: '英文首字母縮寫字 M 唸其字母本名音 /ˈɛm/，重音落於第二字母' }
  ],
  660: [
    { syllable: '第 1 音節［pock］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: 'ck 封閉重讀音節，單一母音 o 常規發短母音 /ˈpɑːk/' },
    { syllable: '第 2 音節［et］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發短音 /ɪt/' }
  ],
  661: [
    { syllable: '單音節［point］', rule: '雙母音組合 oi (R004)', status: '【適用】', reason: 'oi 字母組合常規發雙母音 /ɔɪ/，子音叢 nt 封閉發 /pɔɪnt/' }
  ],
  662: [
    { syllable: '第 1 音節［po］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '首音節非重讀，單一母音 o 弱化為央母音 /pə/' },
    { syllable: '第 2 音節［lice］', rule: '法語外來詞特例 (R010) + 軟音 c (R007)', status: '【不適用 (例外轉移)】', reason: '源自法語借詞，i_e 未發 /aɪ/ 而發長母音 /ˈliː/，c 在 e 前發 /s/，字尾 e 靜音' }
  ],
  663: [
    { syllable: '第 1 音節［po］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '首音節非重讀，單一母音 o 弱化為央母音 /pə/' },
    { syllable: '第 2 音節［lite］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音促使母音 i 常規發字母本名長雙母音 /ˈlaɪt/' }
  ],
  664: [
    { syllable: '單音節［pond］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 nd 封閉音節，單一母音 o 常規發短母音 /pɑːnd/' }
  ],
  665: [
    { syllable: '單音節［pool］', rule: '雙母音組合 oo (R004)', status: '【適用】', reason: 'oo 字母組合於一般位置常規發後高長母音 /uː/，尾音 l 封閉發 /puːl/' }
  ],
  666: [
    { syllable: '單音節［poor］', rule: '雙母音組合 oor 特例 (R010)', status: '【不適用 (例外轉移)】', reason: 'oo 在 r 前受影響未發 /uː/ 轉移發短母音 /ʊr/ (美式亦有發 /pɔːr/ 之口音變體)' }
  ],
  667: [
    { syllable: '第 1 音節［pop］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 p 封閉重讀音節，單一母音 o 常規發短母音 /ˈpɑːp/' },
    { syllable: '第 2 音節［corn］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: 'or 組合常規發長母音 /kɔːrn/，形成複合詞重音結構' }
  ],
  668: [
    { syllable: '第 1 音節［pop］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 p 封閉重讀音節，單一母音 o 常規發短母音 /ˈpɑːp/' },
    { syllable: '第 2 音節［u］', rule: '半母音過渡 (R008/R011)', status: '【適用】', reason: '次重讀音節 u 帶出硬顎半母音過渡發 /jə/' },
    { syllable: '第 3 音節［lar］', rule: '非重讀 R 控制母音 (R005/R008)', status: '【適用】', reason: '字尾 -ar 處非重讀音節常規弱化發捲舌音 /lɚ/' }
  ],
  669: [
    { syllable: '第 1 音節［pos］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉重讀音節，單一母音 o 常規發短母音 /ˈpɑːs/' },
    { syllable: '第 2 音節［si］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 i 弱化發央母音 /sə/' },
    { syllable: '第 3 音節［ble］', rule: '成音節字尾 -le (R009)', status: '【適用】', reason: '子音 + le 結構於詞尾常規形成成音節發 /bəl/' }
  ],
  670: [
    { syllable: '單音節［pot］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 o 常規發短母音 /pɑːt/' }
  ],
  671: [
    { syllable: '第 1 音節［po］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '首音節非重讀，單一母音 o 弱化發央母音 /pə/' },
    { syllable: '第 2 音節［ta］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節結尾無子音封閉，母音 a 常規發長雙母音 /ˈteɪ/' },
    { syllable: '第 3 音節［to］', rule: '開音節規則 (R002)', status: '【適用】', reason: '詞尾開音節 o 常規發長雙母音 /t̬oʊ/' }
  ],
  672: [
    { syllable: '第 1 音節［pow］', rule: '雙母音組合 ow (R004)', status: '【適用】', reason: 'ow 字母組合常規發雙母音 /ˈpaʊ/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005) / 弱化 (R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /ɚ/' }
  ],
  673: [
    { syllable: '第 1 音節［prac］', rule: '閉音節規則 (R001) + 硬音 c (R007)', status: '【適用】', reason: 'c 在音節尾發硬音 /k/ 封閉重讀音節，母音 a 發短母音 /ˈpræk/' },
    { syllable: '第 2 音節［tice］', rule: '字尾弱化 (R008) + 軟音 c (R007)', status: '【適用】', reason: '非重讀後綴 -ice 弱化發 /ɪs/，c 在 e 前軟音化為 /s/，字尾 e 靜音' }
  ],
  674: [
    { syllable: '第 1 音節［pre］', rule: '前綴非重讀弱化 (R008)', status: '【適用】', reason: '非重讀前綴 pre- 常規弱化發短音 /prɪ/' },
    { syllable: '第 2 音節［pare］', rule: '魔術 e 結構 / R 控制母音 (R003/R005)', status: '【適用】', reason: 'a_e 在 r 前受影響常規發捲舌雙母音 /ˈpɛr/，字尾 e 靜音' }
  ],
  675: [
    { syllable: '第 1 音節［pres］', rule: '閉音節規則 (R001) + s 濁化 (R006)', status: '【適用】', reason: '子音 s 在兩母音之間濁化發 /z/ 封閉重音節，母音 e 發短母音 /ˈprɛz/' },
    { syllable: '第 2 音節［ent］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 e 弱化發央母音 /ənt/' }
  ],
  676: [
    { syllable: '第 1 音節［pret］', rule: '閉音節特例轉移 (R010)', status: '【不適用 (例外轉移)】', reason: '母音 e 受歷史古音影響未發 /ɛ/ 轉移發短母音 /ˈprɪt/ (R010)' },
    { syllable: '第 2 音節［ty］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長短交界的長母音 /i/' }
  ],
  677: [
    { syllable: '單音節［price］', rule: '魔術 e 規則 (R003) + 軟音 c (R007)', status: '【適用】', reason: 'i_e 結構促使母音 i 發長雙母音 /praɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音' }
  ],
  678: [
    { syllable: '第 1 音節［prob］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 b 封閉重讀音節，單一母音 o 常規發短母音 /ˈprɑːb/' },
    { syllable: '第 2 音節［a］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '夾在中間之單一母音 a 弱化發央母音 /ə/' },
    { syllable: '第 3 音節［bly］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '副詞字尾 -bly 處非重讀音節常規發 /bli/' }
  ],
  679: [
    { syllable: '第 1 音節［prob］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 b 封閉重讀音節，單一母音 o 常規發短母音 /ˈprɑːb/' },
    { syllable: '第 2 音節［lem］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發央母音 /ləm/' }
  ],
  680: [
    { syllable: '第 1 音節［pro］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節結尾無子音封閉，單一母音 o 常規發長雙母音 /ˈproʊ/' },
    { syllable: '第 2 音節［gram］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻子音 m 封閉音節，母音 a 常規發短母音 /ɡræm/' }
  ],
  681: [
    { syllable: '單音節［proud］', rule: '雙母音組合 ou (R004)', status: '【適用】', reason: 'ou 字母組合常規發雙母音 /aʊ/，尾音 d 封閉發 /praʊd/' }
  ],
  682: [
    { syllable: '第 1 音節［pub］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 b 封閉重讀音節，單一母音 u 常規發短母音 /ˈpʌb/' },
    { syllable: '第 2 音節［lic］', rule: '閉音節規則 (R001) + 硬音 c (R007)', status: '【適用】', reason: 'c 在詞尾發硬音 /k/ 封閉音節，單一母音 i 常規發短母音 /lɪk/' }
  ],
  683: [
    { syllable: '單音節［pull］', rule: '雙寫 ll 前特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '母音 u 在 -ll 前受影響未發短音 /ʌ/ 轉移發圓唇短母音 /pʊl/ (R010)' }
  ],
  684: [
    { syllable: '單音節［push］', rule: '複合子音 sh (R006) + 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '母音 u 在 -sh 前未發短音 /ʌ/ 轉移發圓唇短母音 /pʊʃ/ (R010)' }
  ],
  685: [
    { syllable: '單音節［put］', rule: '閉音節特例圓唇短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 u 在此詞中未發 /ʌ/ 轉移發圓唇短母音 /pʊt/ (R010)' }
  ],
  686: [
    { syllable: '第 1 音節［quar］', rule: '複合子音 qu (R006) + ar 受 w 圓唇化 (R005/R010)', status: '【不適用 (例外轉移)】', reason: 'qu 發 /kw/，其後 ar 受唇軟顎音 /w/ 牽引圓唇化為 /ˈkwɔːr/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音 er (R005) / 弱化 (R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /t̬ɚ/' }
  ],
  687: [
    { syllable: '單音節［queen］', rule: '複合子音 qu (R006) + 雙母音 ee (R004)', status: '【適用】', reason: 'qu 發 /kw/，ee 字母組合常規發長母音 /iː/，全字發 /kwiːn/' }
  ],
  688: [
    { syllable: '第 1 音節［ques］', rule: '複合子音 qu (R006) + 閉音節 (R001)', status: '【適用】', reason: 'qu 發 /kw/，子音 s 封閉重讀音節，母音 e 常規發短母音 /ˈkwɛs/' },
    { syllable: '第 2 音節［tion］', rule: '後綴 -tion 在 s 後同化顎化 (R006/R010)', status: '【不適用 (例外轉移)】', reason: '後綴 -tion 接在 s 後受同化不發 /ʃən/ 改發清塞擦音 /tʃən/' }
  ],
  689: [
    { syllable: '單音節［quick］', rule: '複合子音 qu (R006) + 閉音節 (R001) + ck (R006)', status: '【適用】', reason: 'qu 發 /kw/，ck 封閉音節，單一母音 i 常規發短母音 /kwɪk/' }
  ],
  690: [
    { syllable: '第 1 音節［qui］', rule: '複合子音 qu (R006) + 開音節 (R002)', status: '【適用】', reason: 'qu 發 /kw/，重讀開音節 i 常規發字母本名長雙母音 /ˈkwaɪ/' },
    { syllable: '第 2 音節［et］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發央母音 /ət/' }
  ],
  691: [
    { syllable: '單音節［quite］', rule: '複合子音 qu (R006) + 魔術 e 規則 (R003)', status: '【適用】', reason: 'qu 發 /kw/，i_e 結構字尾 e 靜音促使母音 i 發長雙母音 /kwaɪt/' }
  ],
  692: [
    { syllable: '第 1 音節［rab］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 b 封閉重讀音節，單一母音 a 常規發短母音 /ˈræb/' },
    { syllable: '第 2 音節［bit］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 t 封閉音節，單一母音 i 常規發短母音 /ɪt/' }
  ],
  693: [
    { syllable: '單音節［race］', rule: '魔術 e 規則 (R003) + 軟音 c (R007)', status: '【適用】', reason: 'a_e 結構促使 a 發長雙母音 /reɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音發 /reɪs/' }
  ],
  694: [
    { syllable: '第 1 音節［ra］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節母音 a 結尾無子音封閉，常規發長雙母音 /ˈreɪ/' },
    { syllable: '第 2 音節［di］', rule: '非重讀開音節 (R002/R008)', status: '【適用】', reason: '非重讀開音節單一母音 i 常規發短長母音 /di/' },
    { syllable: '第 3 音節［o］', rule: '開音節規則 (R002)', status: '【適用】', reason: '詞尾開音節 o 常規發長雙母音 /oʊ/' }
  ],
  695: [
    { syllable: '單音節［rain］', rule: '雙母音組合 ai (R004)', status: '【適用】', reason: 'ai 字母組合常規發長雙母音 /eɪ/，鼻子音 n 封閉發 /reɪn/' }
  ],
  696: [
    { syllable: '第 1 音節［rain］', rule: '雙母音組合 ai (R004)', status: '【適用】', reason: 'ai 字母組合於重音節常規發長雙母音 /ˈreɪn/' },
    { syllable: '第 2 音節［bow］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 字母組合於詞尾常規發長雙母音 /boʊ/' }
  ],
  697: [
    { syllable: '第 1 音節［rain］', rule: '雙母音組合 ai (R004)', status: '【適用】', reason: 'ai 字母組合常規發長雙母音 /ˈreɪ/' },
    { syllable: '第 2 音節［y］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長短交界的長母音 /ni/' }
  ],
  698: [
    { syllable: '單音節［raise］', rule: '雙母音組合 ai (R004) + s 濁化 (R006)', status: '【適用】', reason: 'ai 組合發長雙母音 /reɪ/，s 濁化發 /z/，字尾 e 靜音發 /reɪz/' }
  ],
  699: [
    { syllable: '單音節［reach］', rule: '雙母音組合 ea (R004) + 複合子音 ch (R006)', status: '【適用】', reason: 'ea 字母組合常規發長母音 /iː/，複合子音 ch 發清塞擦音 /tʃ/，全字發 /riːtʃ/' }
  ],
  700: [
    { syllable: '單音節［read］', rule: '雙母音組合 ea (R004)', status: '【適用】', reason: 'ea 字母組合於現在式常規發長母音 /iː/，子音 d 封閉發 /riːd/ (過去式與過去分詞則轉移發短母音 /rɛd/)' }
  ]
};
