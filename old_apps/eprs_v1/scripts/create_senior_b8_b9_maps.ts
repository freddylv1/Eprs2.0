// Generator for Batch 08 and Batch 09 Derivations Maps
import fs from 'fs';
import path from 'path';

export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch8Map: Record<number, DerivationItem[]> = {
  701: [
    { syllable: '第 1 音節［read］', rule: '母音組合 ea (R004) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '字母組合 ea 常規發長音 /iː/，此處特例發短母音 /ˈrɛd/' },
    { syllable: '第 2 音節［y］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規弱化發長母音 /i/' }
  ],
  702: [
    { syllable: '單音節［real］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '母音組合 ea 常規發長母音 /iː/，字尾 l 帶舌根軟顎化音，全字發 /riːl/' }
  ],
  703: [
    { syllable: '第 1 音節［real］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '母音組合 ea 於重讀音節發長音 /ˈriː/，其後滑向央母音 /ə/' },
    { syllable: '第 2 音節［ly］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '副詞字尾 -ly 處非重讀音節常規發 /li/' }
  ],
  704: [
    { syllable: '第 1 音節［rea］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '重讀母音組合 ea 常規發長母音 /ˈriː/' },
    { syllable: '第 2 音節［son］', rule: '非重音弱化 (R008) + 成音節 (R009)', status: '【適用】', reason: '非重讀音節母音 o 弱化，s 處於母音間濁化為 /z/，與鼻音 n 結合成音節發 /zən/' }
  ],
  705: [
    { syllable: '單音節［red］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 d 封閉，常規發短母音 /rɛd/' }
  ],
  706: [
    { syllable: '第 1 音節［rel］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 l 封閉，重讀音節常規發短母音 /ˈrɛl/' },
    { syllable: '第 2 音節［a］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀單一母音 a 弱化發央母音 /ə/' },
    { syllable: '第 3 音節［tive］', rule: '後綴弱化 (R008) → 魔術 e 不適用 (R010)', status: '【不適用 (例外轉移)】', reason: '形容詞後綴 -ive 處非重音節，未發魔術 e 長音，弱化發短音 /tɪv/' }
  ],
  707: [
    { syllable: '第 1 音節［re］', rule: '前綴弱化規則 (R012/R008)', status: '【適用】', reason: '非重讀前綴 re- 弱化發短音 /rɪ/' },
    { syllable: '第 2 音節［mem］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被鼻音 m 封閉，重讀音節常規發短母音 /ˈmɛm/' },
    { syllable: '第 3 音節［ber］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /bɚ/' }
  ],
  708: [
    { syllable: '第 1 音節［re］', rule: '前綴弱化規則 (R012/R008)', status: '【適用】', reason: '非重讀前綴 re- 弱化發短音 /rɪ/' },
    { syllable: '第 2 音節［peat］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '重讀音節母音組合 ea 常規發長母音 /ˈpiːt/' }
  ],
  709: [
    { syllable: '第 1 音節［re］', rule: '前綴弱化規則 (R012/R008)', status: '【適用】', reason: '非重讀前綴 re- 弱化發短音 /rɪ/' },
    { syllable: '第 2 音節［port］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: '主要重讀音節 or 字母組合常規發長捲舌母音 /ˈpɔːrt/' }
  ],
  710: [
    { syllable: '第 1 音節［re］', rule: '前綴弱化規則 (R012/R008)', status: '【適用】', reason: '非重讀前綴 re- 弱化發短音 /rɪ/' },
    { syllable: '第 2 音節［port］', rule: 'R 控制母音 or (R005)', status: '【適用】', reason: '重讀音節 or 字母組合常規發長捲舌母音 /ˈpɔːr/' },
    { syllable: '第 3 音節［er］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '後綴 -er 處非重讀音節常規發捲舌音 /t̬ɚ/，t 濁化為閃音' }
  ],
  711: [
    { syllable: '單音節［rest］', rule: '閉音節規則 (R001) + 子音叢 st (R006)', status: '【適用】', reason: '子音叢 st 封閉音節，單一母音 e 常規發短母音 /rɛst/' }
  ],
  712: [
    { syllable: '第 1 音節［res］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 s 封閉，重讀音節常規發短母音 /ˈrɛs/' },
    { syllable: '第 2 音節［tau］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀母音組合 au 弱化發央母音 /tə/' },
    { syllable: '第 3 音節［rant］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 nt 封閉次重音節，母音 a 發短母音 /rɑːnt/' }
  ],
  713: [
    { syllable: '單音節［rice］', rule: '魔術 e 規則 (R003) + 軟音 c (R007)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音促使 i 發長雙母音 /aɪ/，c 在 e 前軟音化為 /s/，全字發 /raɪs/' }
  ],
  714: [
    { syllable: '單音節［rich］', rule: '閉音節規則 (R001) + 複合子音 ch (R006)', status: '【適用】', reason: '複合子音 ch 封閉音節，單一母音 i 常規發短母音 /rɪ/，ch 發清塞擦音 /tʃ/，全字發 /rɪtʃ/' }
  ],
  715: [
    { syllable: '單音節［ride］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音促使母音 i 常規發字母本名長雙母音 /raɪd/' }
  ],
  716: [
    { syllable: '單音節［right］', rule: '母音組合 igh (R004) + 靜音 gh (R010)', status: '【適用】', reason: '字母組合 igh 常規發長雙母音 /aɪ/，gh 歷史演變保持靜音，全字發 /raɪt/' }
  ],
  717: [
    { syllable: '單音節［ring］', rule: '閉音節規則 (R001) + 複合子音 ng (R006)', status: '【適用】', reason: '軟顎鼻音 ng 封閉音節，單一母音 i 常規發短母音 /rɪŋ/' }
  ],
  718: [
    { syllable: '單音節［rise］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音使母音 i 發長音 /aɪ/，中間子音 s 濁化為 /z/，全字發 /raɪz/' }
  ],
  719: [
    { syllable: '第 1 音節［riv］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 i 被子音 v 封閉，重讀音節常規發短母音 /ˈrɪv/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /ɚ/' }
  ],
  720: [
    { syllable: '單音節［road］', rule: '母音組合 oa (R004)', status: '【適用】', reason: 'oa 字母組合常規發字母本名長雙母音 /oʊ/，子音 d 封閉發 /roʊd/' }
  ],
  721: [
    { syllable: '第 1 音節［ro］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節結尾無子音封閉，單一母音 o 常規發長雙母音 /ˈroʊ/' },
    { syllable: '第 2 音節［bot］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '次重讀閉音節單一母音 o 被子音 t 封閉發短母音 /bɑːt/' }
  ],
  722: [
    { syllable: '單音節［rock］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: '複合子音 ck 封閉音節，單一母音 o 常規發短母音 /rɑːk/' }
  ],
  723: [
    { syllable: '單音節［roll］', rule: '-oll 特例長母音字族 (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 o 在 -ll 前依古英語長化特例常規發長雙母音 /roʊl/，而非短母音' }
  ],
  724: [
    { syllable: '單音節［room］', rule: '雙母音組合 oo (R004)', status: '【適用】', reason: '字母組合 oo 常規發長圓唇母音 /uː/，鼻子音 m 封閉發 /ruːm/' }
  ],
  725: [
    { syllable: '單音節［root］', rule: '雙母音組合 oo (R004)', status: '【適用】', reason: '字母組合 oo 常規發長圓唇母音 /uː/，子音 t 封閉發 /ruːt/' }
  ],
  726: [
    { syllable: '單音節［rope］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 結構字尾 e 靜音促使母音 o 常規發長雙母音 /roʊp/' }
  ],
  727: [
    { syllable: '單音節［rose］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 結構字尾 e 靜音使 o 發長雙母音 /roʊ/，中間 s 濁化為 /z/，發 /roʊz/' }
  ],
  728: [
    { syllable: '單音節［round］', rule: '雙母音組合 ou (R004)', status: '【適用】', reason: '字母組合 ou 常規發雙母音 /aʊ/，子音 nd 封閉發 /raʊnd/' }
  ],
  729: [
    { syllable: '單音節［row］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 字母組合於詞尾常規發長雙母音 /roʊ/' }
  ],
  730: [
    { syllable: '單音節［rule］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'u_e 結構字尾 e 靜音，母音 u 在流音 r 後常規發長母音 /ruːl/' }
  ],
  731: [
    { syllable: '第 1 音節［rul］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節母音 u 在 r 後常規發長母音 /ˈruː/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '後綴 -er 處非重讀音節常規發弱化捲舌音 /lɚ/' }
  ],
  732: [
    { syllable: '單音節［run］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 u 被鼻子音 n 封閉，常規發短母音 /rʌn/' }
  ],
  733: [
    { syllable: '單音節［sad］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 a 被子音 d 封閉，常規發短蝴蝶母音 /sæd/' }
  ],
  734: [
    { syllable: '單音節［safe］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /seɪf/' }
  ],
  735: [
    { syllable: '第 1 音節［sal］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 a 被子音 l 封閉，重讀音節常規發短母音 /ˈsæl/' },
    { syllable: '第 2 音節［ad］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 a 弱化發央母音 /əd/' }
  ],
  736: [
    { syllable: '單音節［sale］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /seɪl/' }
  ],
  737: [
    { syllable: '單音節［salt］', rule: '流音 l 牽引母音音變 (R010)', status: '【不適用 (例外轉移)】', reason: '母音 a 在 -lt 前受舌側流音 l 牽引圓唇化，特例發長母音 /sɑːlt/ 或 /sɔːlt/' }
  ],
  738: [
    { syllable: '單音節［same］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /seɪm/' }
  ],
  739: [
    { syllable: '單音節［save］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /seɪv/' }
  ],
  740: [
    { syllable: '單音節［say］', rule: '母音組合 ay (R004)', status: '【適用】', reason: 'ay 字母組合於詞尾常規發長雙母音 /seɪ/' }
  ],
  741: [
    { syllable: '單音節［school］', rule: '希臘字根 ch 發硬音 (R010) + 雙母音 oo (R004)', status: '【不適用 (例外轉移)】', reason: '複合子音 ch 承襲希臘字源特例發硬音 /k/，oo 常規發長母音 /uː/，全字發 /skuːl/' }
  ],
  742: [
    { syllable: '第 1 音節［sci］', rule: '開音節規則 (R002) + 軟音 c (R007)', status: '【適用】', reason: 'c 在 i 前軟音化與 s 融合發單一 /s/，開音節 i 發長雙母音 /ˈsaɪ/' },
    { syllable: '第 2 音節［ence］', rule: '非重音弱化 (R008) + 軟音 c (R007)', status: '【適用】', reason: '非重讀後綴 -ence 母音弱化發 /əns/，c 在 e 前軟音化為 /s/' }
  ],
  743: [
    { syllable: '單音節［sea］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '母音組合 ea 於詞尾常規發長母音 /siː/' }
  ],
  744: [
    { syllable: '第 1 音節［sea］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '母音組合 ea 於重讀音節常規發長母音 /ˈsiː/' },
    { syllable: '第 2 音節［son］', rule: '非重音弱化 (R008) + 成音節 (R009)', status: '【適用】', reason: '非重讀音節母音 o 弱化，s 濁化發 /z/，與鼻音 n 結合成音節發 /zən/' }
  ],
  745: [
    { syllable: '單音節［seat］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '母音組合 ea 常規發長母音 /iː/，子音 t 封閉發 /siːt/' }
  ],
  746: [
    { syllable: '第 1 音節［sec］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 c 封閉，重讀音節常規發短母音 /ˈsɛk/' },
    { syllable: '第 2 音節［ond］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 o 弱化發央母音 /ənd/' }
  ],
  747: [
    { syllable: '第 1 音節［sec］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 c 封閉，重讀音節常規發短母音 /ˈsɛk/' },
    { syllable: '第 2 音節［re］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發央母音 /rə/' },
    { syllable: '第 3 音節［tar］', rule: '次重讀 R 控制母音 (R005)', status: '【適用】', reason: '次重讀音節 ar 受美式發音影響發次重音捲舌音 /tɛr/' },
    { syllable: '第 4 音節［y］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /i/' }
  ],
  748: [
    { syllable: '單音節［see］', rule: '母音組合 ee (R004)', status: '【適用】', reason: 'ee 字母組合常規發長母音 /siː/' }
  ],
  749: [
    { syllable: '單音節［seed］', rule: '母音組合 ee (R004)', status: '【適用】', reason: 'ee 字母組合常規發長母音 /iː/，子音 d 封閉發 /siːd/' }
  ],
  750: [
    { syllable: '單音節［sell］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 ll 封閉音節，單一母音 e 常規發短母音 /sɛl/' }
  ],
  751: [
    { syllable: '單音節［send］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 nd 封閉音節，單一母音 e 常規發短母音 /sɛnd/' }
  ],
  752: [
    { syllable: '第 1 音節［sen］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被鼻子音 n 封閉，重讀音節常規發短母音 /ˈsɛn/' },
    { syllable: '第 2 音節［tence］', rule: '非重音弱化 (R008) + 軟音 c (R007)', status: '【適用】', reason: '非重讀後綴 -ence 母音弱化發 /təns/，c 在 e 前軟音化發 /s/' }
  ],
  753: [
    { syllable: '第 1 音節［se］', rule: '開音節規則 (R002) → R 音牽引 (R005)', status: '【適用】', reason: '重讀母音 e 在 r 前牽引發長音滑音 /ˈsɪr/' },
    { syllable: '第 2 音節［ri］', rule: '非重讀開音節 (R002/R008)', status: '【適用】', reason: '非重讀音節單一母音 i 發短長母音 /i/' },
    { syllable: '第 3 音節［ous］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '後綴 -ous 處非重音節，母音組合弱化發央母音 /əs/' }
  ],
  754: [
    { syllable: '第 1 音節［ser］', rule: 'R 控制母音 er (R005)', status: '【適用】', reason: 'er 字母組合於重讀音節常規發捲舌母音 /ˈsɜːr/' },
    { syllable: '第 2 音節［vice］', rule: '魔術 e 弱化 (R008) + 軟音 c (R007)', status: '【不適用 (例外轉移)】', reason: '處非重音節，i_e 未發長母音弱化發短音 /vɪs/，c 在 e 前軟音化為 /s/' }
  ],
  755: [
    { syllable: '單音節［set］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 t 封閉，常規發短母音 /sɛt/' }
  ],
  756: [
    { syllable: '第 1 音節［sev］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 v 封閉，重讀音節常規發短母音 /ˈsɛv/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '非重讀音節 -er 常規發弱化捲舌音 /ɚ/' },
    { syllable: '第 3 音節［al］', rule: '非重音弱化 (R008) + 成音節 (R009)', status: '【適用】', reason: '字尾 -al 弱化發成音節音 /əl/' }
  ],
  757: [
    { syllable: '單音節［shake］', rule: '複合子音 sh (R006) + 魔術 e (R003)', status: '【適用】', reason: '複合子音 sh 發清擦音 /ʃ/，a_e 結構字尾 e 靜音使 a 發長雙母音 /ʃeɪk/' }
  ],
  758: [
    { syllable: '單音節［shall］', rule: '複合子音 sh (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，雙子音 ll 封閉音節使 a 發短蝴蝶母音 /ʃæl/' }
  ],
  759: [
    { syllable: '單音節［shape］', rule: '複合子音 sh (R006) + 魔術 e (R003)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，a_e 結構字尾 e 靜音促使 a 發長雙母音 /ʃeɪp/' }
  ],
  760: [
    { syllable: '單音節［share］', rule: '複合子音 sh (R006) + R 控制魔術 e (R005)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，are 結構受 r 捲舌控制常規發 /ʃɛr/' }
  ],
  761: [
    { syllable: '單音節［sharp］', rule: '複合子音 sh (R006) + R 控制母音 ar (R005)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，ar 組合受捲舌控制常規發後開母音 /ʃɑːrp/' }
  ],
  762: [
    { syllable: '單音節［she］', rule: '複合子音 sh (R006) + 開音節 (R002)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，單一母音 e 結尾無子音封閉，常規發長母音 /ʃiː/' }
  ],
  763: [
    { syllable: '單音節［sheep］', rule: '複合子音 sh (R006) + 母音組合 ee (R004)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，ee 組合常規發長母音 /iː/，子音 p 封閉發 /ʃiːp/' }
  ],
  764: [
    { syllable: '單音節［ship］', rule: '複合子音 sh (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，子音 p 封閉單一母音 i 常規發短母音 /ʃɪp/' }
  ],
  765: [
    { syllable: '單音節［shirt］', rule: '複合子音 sh (R006) + R 控制母音 ir (R005)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，ir 組合受捲舌控制常規發捲舌長母音 /ʃɝːt/' }
  ],
  766: [
    { syllable: '單音節［shoe(s)］', rule: '複合子音 sh (R006) + 特例母音轉移 (R010)', status: '【不適用 (例外轉移)】', reason: '複合子音 sh 發 /ʃ/，oe 組合未發常規 /oʊ/，受古英語歷史音變特例發長圓唇音 /ʃuː/' }
  ],
  767: [
    { syllable: '單音節［shop］', rule: '複合子音 sh (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，子音 p 封閉單一母音 o 常規發短母音 /ʃɑːp/' }
  ],
  768: [
    { syllable: '單音節［short］', rule: '複合子音 sh (R006) + R 控制母音 or (R005)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，or 組合受捲舌控制常規發後圓唇長母音 /ʃɔːrt/' }
  ],
  769: [
    { syllable: '單音節［shorts］', rule: '複合子音 sh (R006) + R 控制母音 or (R005)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，or 組合常規發長母音 /ʃɔːrt/，尾音 s 發清音 /s/' }
  ],
  770: [
    { syllable: '第 1 音節［shoul］', rule: '複合子音 sh (R006) + ou 特例音變 (R010)', status: '【不適用 (例外轉移)】', reason: '複合子音 sh 發 /ʃ/，ou 字母組合在此特例發長雙母音 /ˈʃoʊl/ 而非 /aʊ/' },
    { syllable: '第 2 音節［der］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /dɚ/' }
  ],
  771: [
    { syllable: '單音節［shout］', rule: '複合子音 sh (R006) + 雙母音組合 ou (R004)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，ou 字母組合常規發雙母音 /aʊ/，子音 t 封閉發 /ʃaʊt/' }
  ],
  772: [
    { syllable: '單音節［show］', rule: '複合子音 sh (R006) + 母音組合 ow (R004)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，ow 字母組合於詞尾常規發長雙母音 /ʃoʊ/' }
  ],
  773: [
    { syllable: '第 1 音節［show］', rule: '複合子音 sh (R006) + 雙母音組合 ow (R004)', status: '【適用】', reason: '複合子音 sh 發 /ʃ/，ow 組合常規發雙母音 /ˈʃaʊ/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /ɚ/' }
  ],
  774: [
    { syllable: '單音節［sick］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: '複合子音 ck 封閉音節，單一母音 i 常規發短母音 /sɪk/' }
  ],
  775: [
    { syllable: '單音節［side］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音促使母音 i 常規發長雙母音 /saɪd/' }
  ],
  776: [
    { syllable: '單音節［sight］', rule: '母音組合 igh (R004) + 靜音 gh (R010)', status: '【適用】', reason: '字母組合 igh 常規發長雙母音 /aɪ/，gh 保持靜音，全字發 /saɪt/' }
  ],
  777: [
    { syllable: '單音節［sign］', rule: '-ign 字族長母音 (R004) + 靜音 g (R010)', status: '【不適用 (例外轉移)】', reason: '字尾 -ign 結構中 g 靜音，促使單一母音 i 特例發長雙母音 /saɪn/' }
  ],
  778: [
    { syllable: '第 1 音節［sim］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 i 被鼻音 m 封閉，重讀音節常規發短母音 /ˈsɪm/' },
    { syllable: '第 2 音節［ple］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於詞尾構成成音節，不發音 e 弱化發 /pəl/' }
  ],
  779: [
    { syllable: '單音節［since］', rule: '魔術 e 弱化短音 (R010) + 軟音 c (R007)', status: '【不適用 (例外轉移)】', reason: 'i_e 結構未發長音，特例發短母音 /sɪn/，c 在 e 前軟音化發 /s/，字尾 e 靜音' }
  ],
  780: [
    { syllable: '單音節［sing］', rule: '閉音節規則 (R001) + 複合子音 ng (R006)', status: '【適用】', reason: '軟顎鼻音 ng 封閉音節，單一母音 i 常規發短母音 /sɪŋ/' }
  ],
  781: [
    { syllable: '第 1 音節［sing］', rule: '閉音節規則 (R001) + 複合子音 ng (R006)', status: '【適用】', reason: '軟顎鼻音 ng 封閉重讀音節，單一母音 i 常規發短母音 /ˈsɪŋ/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '後綴 -er 處非重讀音節常規發弱化捲舌音 /ɚ/' }
  ],
  782: [
    { syllable: '單音節［sir］', rule: 'R 控制母音 ir (R005)', status: '【適用】', reason: 'ir 字母組合受捲舌控制常規發長捲舌母音 /sɝː/' }
  ],
  783: [
    { syllable: '第 1 音節［sis］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 i 被子音 s 封閉，重讀音節常規發短母音 /ˈsɪs/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /tɚ/' }
  ],
  784: [
    { syllable: '單音節［sit］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 i 被子音 t 封閉，常規發短母音 /sɪt/' }
  ],
  785: [
    { syllable: '單音節［size］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音促使母音 i 常規發長雙母音 /saɪz/' }
  ],
  786: [
    { syllable: '單音節［skirt］', rule: '子音叢 sk (R006) + R 控制母音 ir (R005)', status: '【適用】', reason: '子音叢 sk 發 /sk/，ir 字母組合受捲舌控制常規發長捲舌母音 /skɝːt/' }
  ],
  787: [
    { syllable: '單音節［sky］', rule: '子音叢 sk (R006) + 開音節 y (R002)', status: '【適用】', reason: '子音叢 sk 發 /sk/，單音節詞尾 y 充任開音節母音常規發長雙母音 /skaɪ/' }
  ],
  788: [
    { syllable: '單音節［sleep］', rule: '子音叢 sl (R006) + 母音組合 ee (R004)', status: '【適用】', reason: '子音叢 sl 發 /sl/，ee 組合常規發長母音 /iː/，子音 p 封閉發 /sliːp/' }
  ],
  789: [
    { syllable: '單音節［slim］', rule: '子音叢 sl (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 sl 發 /sl/，子音 m 封閉單一母音 i 常規發短母音 /slɪm/' }
  ],
  790: [
    { syllable: '單音節［slow］', rule: '子音叢 sl (R006) + 母音組合 ow (R004)', status: '【適用】', reason: '子音叢 sl 發 /sl/，ow 字母組合於詞尾常規發長雙母音 /sloʊ/' }
  ],
  791: [
    { syllable: '單音節［small］', rule: '子音叢 sm (R006) + 特例音變 (R010)', status: '【不適用 (例外轉移)】', reason: '子音叢 sm 發 /sm/，單一母音 a 在 -ll 前特例受流音圓唇化發後長母音 /smɑːl/' }
  ],
  792: [
    { syllable: '單音節［smart］', rule: '子音叢 sm (R006) + R 控制母音 ar (R005)', status: '【適用】', reason: '子音叢 sm 發 /sm/，ar 組合受捲舌控制常規發後開母音 /smɑːrt/' }
  ],
  793: [
    { syllable: '單音節［smell］', rule: '子音叢 sm (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 sm 發 /sm/，雙子音 ll 封閉音節使單一母音 e 常規發短母音 /smɛl/' }
  ],
  794: [
    { syllable: '單音節［smile］', rule: '子音叢 sm (R006) + 魔術 e (R003)', status: '【適用】', reason: '子音叢 sm 發 /sm/，i_e 結構字尾 e 靜音促使母音 i 常規發長雙母音 /smaɪl/' }
  ],
  795: [
    { syllable: '單音節［smoke］', rule: '子音叢 sm (R006) + 魔術 e (R003)', status: '【適用】', reason: '子音叢 sm 發 /sm/，o_e 結構字尾 e 靜音促使母音 o 常規發長雙母音 /smoʊk/' }
  ],
  796: [
    { syllable: '單音節［snake］', rule: '子音叢 sn (R006) + 魔術 e (R003)', status: '【適用】', reason: '子音叢 sn 發 /sn/，a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /sneɪk/' }
  ],
  797: [
    { syllable: '單音節［snow］', rule: '子音叢 sn (R006) + 母音組合 ow (R004)', status: '【適用】', reason: '子音叢 sn 發 /sn/，ow 字母組合於詞尾常規發長雙母音 /snoʊ/' }
  ],
  798: [
    { syllable: '單音節［so］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單音節結尾無子音封閉，單一母音 o 常規發字母本名長雙母音 /soʊ/' }
  ],
  799: [
    { syllable: '第 1 音節［so］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 o 結尾無子音封閉，常規發長雙母音 /ˈsoʊ/' },
    { syllable: '第 2 音節［fa］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 a 弱化發央母音 /fə/' }
  ],
  800: [
    { syllable: '第 1 音節［sol］', rule: '-ol 特例長音化 (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 o 在 l 前受古英語演變特例發長雙母音 /ˈsoʊl/' },
    { syllable: '第 2 音節［dier］', rule: '顎化音變 (R010) + R 控制母音 (R005)', status: '【不適用 (例外轉移)】', reason: '子音 d 在 ie 前顎化與 r 結合發塞擦捲舌音 /dʒɚ/' }
  ]
};

export const batch9Map: Record<number, DerivationItem[]> = {
  801: [
    { syllable: '單音節［some］', rule: '魔術 e 規則 (R003) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'o_e 未發長母音 /oʊ/，受古英語歷史音變特例轉移發短中舌母音 /sʌm/，字尾 e 靜音' }
  ],
  802: [
    { syllable: '第 1 音節［some］', rule: '複合詞詞根 (R011) + 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '詞根 some 依歷史音變發短中舌母音 /ˈsʌm/' },
    { syllable: '第 2 音節［one］', rule: '特例雙母音 (R010)', status: '【不適用 (例外轉移)】', reason: 'one 依歷史音變首音帶唇軟顎半母音發 /wʌn/' },
    { syllable: '第 3 音節［bod］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 o 被子音 d 封閉，次重讀發短母音 /bɑːd/' },
    { syllable: '第 4 音節［y］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /di/' }
  ],
  803: [
    { syllable: '第 1 音節［some］', rule: '複合詞詞根 (R011) + 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '詞根 some 依歷史音變發短中舌母音 /ˈsʌm/' },
    { syllable: '第 2 音節［thing］', rule: '複合子音 th/ng (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合子音 th 發清齒間擦音 /θ/，ng 封閉音節使 i 發短音 /θɪŋ/' }
  ],
  804: [
    { syllable: '第 1 音節［some］', rule: '複合詞詞根 (R011) + 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '詞根 some 依歷史音變發短中舌母音 /ˈsʌm/' },
    { syllable: '第 2 音節［times］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音使母音 i 發長雙母音 /taɪm/，尾音 s 濁化為 /z/' }
  ],
  805: [
    { syllable: '第 1 音節［some］', rule: '複合詞詞根 (R011) + 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '詞根 some 依歷史音變發短中舌母音 /ˈsʌm/' },
    { syllable: '第 2 音節［where］', rule: '複合子音 wh (R006) + R 控制音變 (R005)', status: '【適用】', reason: 'wh 發 /w/，ere 受捲舌控制發捲舌音 /wɛr/' }
  ],
  806: [
    { syllable: '單音節［son］', rule: '閉音節規則 (R001) → 特例短母音 (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 o 封閉音節未發短音 /ɑː/，歷史演變特例發短中舌母音 /sʌn/' }
  ],
  807: [
    { syllable: '單音節［song］', rule: '閉音節規則 (R001) + 複合子音 ng (R006)', status: '【適用】', reason: '軟顎鼻音 ng 封閉音節，單一母音 o 常規發短開後母音 /sɑːŋ/' }
  ],
  808: [
    { syllable: '單音節［soon］', rule: '雙母音組合 oo (R004)', status: '【適用】', reason: '字母組合 oo 常規發長圓唇母音 /uː/，鼻子音 n 封閉發 /suːn/' }
  ],
  809: [
    { syllable: '單音節［sore］', rule: 'R 控制魔術 e (R005)', status: '【適用】', reason: 'ore 結構字尾 e 靜音，字母組合受捲舌控制常規發後圓唇長母音 /sɔːr/' }
  ],
  810: [
    { syllable: '第 1 音節［sor］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 o 被子音 r 封閉，重讀音節常規發短母音 /ˈsɑː/' },
    { syllable: '第 2 音節［ry］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /ri/' }
  ],
  811: [
    { syllable: '單音節［sound］', rule: '雙母音組合 ou (R004)', status: '【適用】', reason: '字母組合 ou 常規發雙母音 /aʊ/，子音 nd 封閉發 /saʊnd/' }
  ],
  812: [
    { syllable: '單音節［soup］', rule: '法語外來語特例 (R010)', status: '【不適用 (例外轉移)】', reason: '字母組合 ou 承襲法語源流未發 /aʊ/，特例發長圓唇母音 /suːp/' }
  ],
  813: [
    { syllable: '單音節［south］', rule: '雙母音組合 ou (R004) + 複合子音 th (R006)', status: '【適用】', reason: 'ou 組合常規發雙母音 /aʊ/，複合子音 th 發清齒間擦音 /θ/，全字發 /saʊθ/' }
  ],
  814: [
    { syllable: '單音節［space］', rule: '子音叢 sp (R006) + 魔術 e (R003) + 軟音 c (R007)', status: '【適用】', reason: 'sp 發 /sp/，a_e 結構促使 a 發長音 /eɪ/，c 在 e 前軟音化為 /s/，字尾 e 靜音發 /speɪs/' }
  ],
  815: [
    { syllable: '單音節［speak］', rule: '子音叢 sp (R006) + 母音組合 ea (R004)', status: '【適用】', reason: 'sp 發 /sp/，ea 組合常規發長母音 /iː/，子音 k 封閉發 /spiːk/' }
  ],
  816: [
    { syllable: '第 1 音節［spe］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被後續子音封閉，重讀音節常規發短母音 /ˈspɛ/' },
    { syllable: '第 2 音節［cial］', rule: '顎化音變 (R010) + 成音節 (R009)', status: '【不適用 (例外轉移)】', reason: '後綴 -cial 中 c 在弱化母音前顎化發摩擦音 /ʃ/，與 l 形成成音節發 /ʃəl/' }
  ],
  817: [
    { syllable: '單音節［spell］', rule: '子音叢 sp (R006) + 閉音節 (R001)', status: '【適用】', reason: 'sp 發 /sp/，雙子音 ll 封閉音節使母音 e 常規發短母音 /spɛl/' }
  ],
  818: [
    { syllable: '單音節［spend］', rule: '子音叢 sp (R006) + 閉音節 (R001)', status: '【適用】', reason: 'sp 發 /sp/，子音叢 nd 封閉音節使母音 e 常規發短母音 /spɛnd/' }
  ],
  819: [
    { syllable: '單音節［spring］', rule: '三子音叢 spr (R006) + 鼻音 ng (R006)', status: '【適用】', reason: '三子音叢 spr 緊密結合發 /spr/，ng 封閉音節使母音 i 常規發短音 /sprɪŋ/' }
  ],
  820: [
    { syllable: '單音節［square］', rule: '複合子音 squ (R006) + R 控制魔術 e (R005)', status: '【適用】', reason: 'squ 發 /skw/，are 結構受 r 捲舌控制常規發 /skwɛr/' }
  ],
  821: [
    { syllable: '單音節［stair］', rule: '子音叢 st (R006) + R 控制母音 air (R005)', status: '【適用】', reason: 'st 發 /st/，母音組合 air 受捲舌控制常規發捲舌雙母音 /stɛr/' }
  ],
  822: [
    { syllable: '單音節［stand］', rule: '子音叢 st (R006) + 閉音節 (R001)', status: '【適用】', reason: 'st 發 /st/，子音 nd 封閉音節使母音 a 常規發短蝴蝶音 /stænd/' }
  ],
  823: [
    { syllable: '單音節［star］', rule: '子音叢 st (R006) + R 控制母音 ar (R005)', status: '【適用】', reason: 'st 發 /st/，ar 字母組合受捲舌控制常規發後開母音 /stɑːr/' }
  ],
  824: [
    { syllable: '單音節［start］', rule: '子音叢 st (R006) + R 控制母音 ar (R005)', status: '【適用】', reason: 'st 發 /st/，ar 字母組合受捲舌控制常規發後開母音 /stɑːrt/' }
  ],
  825: [
    { syllable: '第 1 音節［sta］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 a 結尾無子音封閉，常規發長雙母音 /ˈsteɪ/' },
    { syllable: '第 2 音節［tion］', rule: '常見後綴 (R008) + 成音節 (R009)', status: '【適用】', reason: '常用名詞後綴 -tion 常規發弱化擦音成音節 /ʃən/' }
  ],
  826: [
    { syllable: '單音節［stay］', rule: '子音叢 st (R006) + 母音組合 ay (R004)', status: '【適用】', reason: 'st 發 /st/，ay 字母組合於詞尾常規發長雙母音 /steɪ/' }
  ],
  827: [
    { syllable: '單音節［still］', rule: '子音叢 st (R006) + 閉音節 (R001)', status: '【適用】', reason: 'st 發 /st/，雙子音 ll 封閉音節使母音 i 常規發短母音 /stɪl/' }
  ],
  828: [
    { syllable: '單音節［stop］', rule: '子音叢 st (R006) + 閉音節 (R001)', status: '【適用】', reason: 'st 發 /st/，子音 p 封閉單一母音 o 常規發短母音 /stɑːp/' }
  ],
  829: [
    { syllable: '單音節［store］', rule: '子音叢 st (R006) + R 控制魔術 e (R005)', status: '【適用】', reason: 'st 發 /st/，ore 結構字尾 e 靜音受 r 控制常規發後圓唇長母音 /stɔːr/' }
  ],
  830: [
    { syllable: '第 1 音節［sto］', rule: '開音節 R 牽引音變 (R005)', status: '【適用】', reason: '重讀母音 o 在 r 前常規牽引發後圓唇長母音 /ˈstɔː/' },
    { syllable: '第 2 音節［ry］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /ri/' }
  ],
  831: [
    { syllable: '單音節［straight］', rule: '三子音叢 str (R006) + aigh 特殊長音 (R004/R010)', status: '【適用】', reason: 'str 發 /str/，aigh 組合中 gh 保持靜音，母音組合常規發長雙母音 /streɪt/' }
  ],
  832: [
    { syllable: '單音節［strange］', rule: '-ange 特例長母音 (R010) + 軟音 g (R007)', status: '【不適用 (例外轉移)】', reason: '母音 a 在 -nge 前特例發長雙母音 /eɪ/，g 在 e 前軟音化為 /dʒ/，字尾 e 靜音發 /streɪndʒ/' }
  ],
  833: [
    { syllable: '單音節［street］', rule: '三子音叢 str (R006) + 母音組合 ee (R004)', status: '【適用】', reason: 'str 發 /str/，ee 字母組合常規發長母音 /iː/，子音 t 封閉發 /striːt/' }
  ],
  834: [
    { syllable: '單音節［string］', rule: '三子音叢 str (R006) + 複合子音 ng (R006)', status: '【適用】', reason: 'str 發 /str/，軟顎鼻音 ng 封閉音節使母音 i 常規發短母音 /strɪŋ/' }
  ],
  835: [
    { syllable: '單音節［strong］', rule: '三子音叢 str (R006) + 複合子音 ng (R006)', status: '【適用】', reason: 'str 發 /str/，軟顎鼻音 ng 封閉音節使母音 o 常規發短開母音 /strɔːŋ/' }
  ],
  836: [
    { syllable: '第 1 音節［stu］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 u 結尾無子音封閉，常規發長母音 /ˈstuː/' },
    { syllable: '第 2 音節［dent］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化，常規發央母音 /dənt/' }
  ],
  837: [
    { syllable: '第 1 音節［stud］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 u 被子音 d 封閉，重讀音節常規發短母音 /ˈstʌd/' },
    { syllable: '第 2 音節［y］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /i/' }
  ],
  838: [
    { syllable: '第 1 音節［stu］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 u 結尾無子音封閉，常規發長母音 /ˈstuː/' },
    { syllable: '第 2 音節［pid］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 i 常規發鬆短母音 /pɪd/' }
  ],
  839: [
    { syllable: '第 1 音節［sub］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 u 被子音 b 封閉，重讀音節常規發短母音 /ˈsʌb/' },
    { syllable: '第 2 音節［ject］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 e 弱化發鬆短音 /dʒɪkt/' }
  ],
  840: [
    { syllable: '第 1 音節［suc］', rule: '前綴弱化規則 (R012/R008) + 硬音 c (R007)', status: '【適用】', reason: '非重讀前綴 suc- 弱化發 /sək/，c 發硬音 /k/' },
    { syllable: '第 2 音節［cess］', rule: '閉音節規則 (R001) + 軟音 c (R007)', status: '【適用】', reason: '第二個 c 在 e 前軟音化為 /s/，重讀閉音節發 /ˈsɛs/' },
    { syllable: '第 3 音節［ful］', rule: '非重讀後綴弱化 (R008)', status: '【適用】', reason: '常用形容詞後綴 -ful 處非重音節，母音弱化發 /fəl/' }
  ],
  841: [
    { syllable: '第 1 音節［su］', rule: '歷史音變特例 (R010)', status: '【不適用 (例外轉移)】', reason: '字首 s 受歷史顎化影響特例發擦音 /ʃ/，母音 u 特例發短音 /ˈʃʊ/' },
    { syllable: '第 2 音節［gar］', rule: 'R 控制母音 ar (R005/R008)', status: '【適用】', reason: '非重讀音節 -ar 受弱化控制發捲舌音 /ɡɚ/' }
  ],
  842: [
    { syllable: '單音節［sun］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 u 被鼻子音 n 封閉，常規發短母音 /sʌn/' }
  ],
  843: [
    { syllable: '第 1 音節［sun］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 u 被鼻子音 n 封閉，重讀音節常規發短母音 /ˈsʌn/' },
    { syllable: '第 2 音節［ny］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /ni/' }
  ],
  844: [
    { syllable: '第 1 音節［su］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 u 結尾無子音封閉，常規發長母音 /ˈsuː/' },
    { syllable: '第 2 音節［per］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '非重讀音節 -er 常規發弱化捲舌音 /pɚ/' },
    { syllable: '第 3 音節［mar］', rule: '次重讀 R 控制母音 ar (R005)', status: '【適用】', reason: '次重讀音節 ar 常規發長捲舌開母音 /ˌmɑːr/' },
    { syllable: '第 4 音節［ket］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 e 弱化發鬆短音 /kɪt/' }
  ],
  845: [
    { syllable: '單音節［sure］', rule: '歷史音變特例 (R010) + R 控制音 (R005)', status: '【不適用 (例外轉移)】', reason: '字首 s 受歷史顎化影響特例發 /ʃ/，ure 組合受捲舌控制發 /ʃʊr/' }
  ],
  846: [
    { syllable: '第 1 音節［sur］', rule: '非重讀前綴弱化 (R005/R008)', status: '【適用】', reason: '非重讀音節 sur- 常規弱化發輕捲舌音 /sɚ/' },
    { syllable: '第 2 音節［prise］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音使母音 i 發長雙母音 /ˈpraɪ/，中間 s 濁化為 /z/' }
  ],
  847: [
    { syllable: '第 1 音節［sur］', rule: '非重讀前綴弱化 (R005/R008)', status: '【適用】', reason: '非重讀音節 sur- 常規弱化發輕捲舌音 /sɚ/' },
    { syllable: '第 2 音節［prised］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構促使 i 發長雙母音 /ˈpraɪz/，過去分詞後綴 -ed 濁化發 /d/' }
  ],
  848: [
    { syllable: '單音節［sweet］', rule: '子音叢 sw (R006) + 母音組合 ee (R004)', status: '【適用】', reason: 'sw 發 /sw/，ee 字母組合常規發長母音 /iː/，子音 t 封閉發 /swiːt/' }
  ],
  849: [
    { syllable: '第 1 音節［ta］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 a 結尾無子音封閉，常規發長雙母音 /ˈteɪ/' },
    { syllable: '第 2 音節［ble］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於詞尾構成成音節，不發音 e 弱化發 /bəl/' }
  ],
  850: [
    { syllable: '單音節［tail］', rule: '母音組合 ai (R004)', status: '【適用】', reason: 'ai 字母組合常規發長雙母音 /eɪ/，尾音 l 帶出軟顎化音，全字發 /teɪl/' }
  ],
  851: [
    { syllable: '單音節［take］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /teɪk/' }
  ],
  852: [
    { syllable: '單音節［talk］', rule: '-alk 特例音變 (R010) + 靜音 l (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 a 在 -lk 前特例發後長母音 /ɔː/，子音 l 保持完全靜音發 /tɔːk/' }
  ],
  853: [
    { syllable: '單音節［tall］', rule: '-all 特例長母音字族 (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 a 在 -ll 前受舌側流音牽引特例發圓唇長母音 /tɔːl/' }
  ],
  854: [
    { syllable: '單音節［tape］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 結構字尾 e 靜音促使母音 a 常規發長雙母音 /teɪp/' }
  ],
  855: [
    { syllable: '單音節［taste］', rule: '-aste 特例長母音字族 (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 a 在 -ste 前承襲古法特例發長雙母音 /teɪst/，而非短母音' }
  ],
  856: [
    { syllable: '第 1 音節［tax］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 a 被子音 x /ks/ 封閉，重讀音節常規發短蝴蝶音 /ˈtæk/' },
    { syllable: '第 2 音節［i］', rule: '非重讀開音節 (R002/R008)', status: '【適用】', reason: '詞尾單一母音 i 處非重讀音節常規發長母音 /si/' }
  ],
  857: [
    { syllable: '單音節［tea］', rule: '母音組合 ea (R004)', status: '【適用】', reason: '母音組合 ea 於詞尾常規發長母音 /tiː/' }
  ],
  858: [
    { syllable: '單音節［teach］', rule: '母音組合 ea (R004) + 複合子音 ch (R006)', status: '【適用】', reason: 'ea 組合常規發長母音 /iː/，複合子音 ch 發清塞擦音 /tʃ/，全字發 /tiːtʃ/' }
  ],
  859: [
    { syllable: '第 1 音節［teach］', rule: '母音組合 ea (R004) + 複合子音 ch (R006)', status: '【適用】', reason: 'ea 組合發長母音 /ˈtiː/，ch 發清塞擦音 /tʃ/' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '動名詞後綴 -er 處非重讀音節常規發弱化捲舌音 /ɚ/' }
  ],
  860: [
    { syllable: '單音節［team］', rule: '母音組合 ea (R004)', status: '【適用】', reason: 'ea 字母組合常規發長母音 /iː/，鼻子音 m 封閉發 /tiːm/' }
  ],
  861: [
    { syllable: '第 1 音節［teen］', rule: '母音組合 ee (R004)', status: '【適用】', reason: 'ee 組合常規發長母音 /ˈtiːn/' },
    { syllable: '第 2 音節［ag］', rule: '開音節規則 (R002)', status: '【適用】', reason: '次重讀音節 a 發長雙母音 /ˌeɪ/' },
    { syllable: '第 3 音節［er］', rule: '軟音 g (R007) + R 控制母音 (R005)', status: '【適用】', reason: 'g 在 e 前軟音化為濁塞擦音 /dʒ/，-er 弱化發捲舌音 /dʒɚ/' }
  ],
  862: [
    { syllable: '第 1 音節［tel］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 l 封閉，重讀音節常規發短母音 /ˈtɛl/' },
    { syllable: '第 2 音節［e］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀單一母音 e 弱化發央母音 /ə/' },
    { syllable: '第 3 音節［phone］', rule: '複合子音 ph (R006) + 魔術 e (R003)', status: '【適用】', reason: 'ph 發清擦音 /f/，o_e 結構字尾 e 靜音促使 o 發長雙母音 /foʊn/' }
  ],
  863: [
    { syllable: '第 1 音節［tel］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被子音 l 封閉，重讀音節常規發短母音 /ˈtɛl/' },
    { syllable: '第 2 音節［e］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀單一母音 e 弱化發央母音 /ə/' },
    { syllable: '第 3 音節［vi］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 i 發鬆短音 /vɪ/' },
    { syllable: '第 4 音節［sion］', rule: '顎化音變 (R010) + 成音節 (R009)', status: '【適用】', reason: '後綴 -sion 處母音後濁化發濁擦音 /ʒən/' }
  ],
  864: [
    { syllable: '單音節［tell］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 ll 封閉音節，單一母音 e 常規發短母音 /tɛl/' }
  ],
  865: [
    { syllable: '第 1 音節［tem］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被鼻音 m 封閉，重讀音節常規發短母音 /ˈtɛm/' },
    { syllable: '第 2 音節［ple］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於詞尾構成成音節，不發音 e 弱化發 /pəl/' }
  ],
  866: [
    { syllable: '第 1 音節［ten］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 e 被鼻子音 n 封閉，重讀音節常規發短母音 /ˈtɛn/' },
    { syllable: '第 2 音節［nis］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 i 弱化發鬆短母音 /ɪs/' }
  ],
  867: [
    { syllable: '第 1 音節［ter］', rule: 'R 控制母音 er (R005)', status: '【適用】', reason: '重讀音節 er 字母組合常規發捲舌短音 /ˈtɛr/' },
    { syllable: '第 2 音節［ri］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 i 弱化發央母音 /ə/' },
    { syllable: '第 3 音節［ble］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '後綴 -ble 於詞尾常規構成成音節發 /bəl/' }
  ],
  868: [
    { syllable: '單音節［test］', rule: '閉音節規則 (R001) + 子音叢 st (R006)', status: '【適用】', reason: '子音叢 st 封閉音節，單一母音 e 常規發短母音 /tɛst/' }
  ],
  869: [
    { syllable: '單音節［than］', rule: '複合子音 th 濁音 (R006) + 閉音節 (R001)', status: '【適用】', reason: '功能詞複合子音 th 濁化發 /ð/，鼻子音 n 封閉發短蝴蝶音 /ðæn/' }
  ],
  870: [
    { syllable: '單音節［thank］', rule: '複合子音 th 清音 (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合子音 th 發清齒間擦音 /θ/，nk 封閉音節使 a 發 /θæŋk/' }
  ],
  871: [
    { syllable: '單音節［that］', rule: '複合子音 th 濁音 (R006) + 閉音節 (R001)', status: '【適用】', reason: '功能詞 th 濁化發 /ð/，子音 t 封閉單一母音 a 發短蝴蝶音 /ðæt/' }
  ],
  872: [
    { syllable: '單音節［the］', rule: '複合子音 th (R006) + 非重音弱化 (R008)', status: '【適用】', reason: '定冠詞 th 濁化發 /ð/，母音 e 於輔音前弱化發央母音 /ðə/' }
  ],
  873: [
    { syllable: '第 1 音節［the］', rule: '複合子音 th 清音 (R006) + 開音節 (R002)', status: '【適用】', reason: '複合子音 th 發清擦音 /θ/，開音節母音 e 發長母音 /ˈθiː/' },
    { syllable: '第 2 音節［a］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀母音 a 弱化發央母音 /ə/' },
    { syllable: '第 3 音節［ter］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /t̬ɚ/，t 濁化為閃音' }
  ],
  874: [
    { syllable: '單音節［then］', rule: '複合子音 th 濁音 (R006) + 閉音節 (R001)', status: '【適用】', reason: '功能詞 th 濁化發 /ð/，鼻子音 n 封閉音節使母音 e 常規發短音 /ðɛn/' }
  ],
  875: [
    { syllable: '單音節［there］', rule: '複合子音 th (R006) + R 控制音變 (R010)', status: '【不適用 (例外轉移)】', reason: '功能詞 th 濁化發 /ð/，ere 結構未發長音 /iːr/，特例發開捲舌音 /ðɛr/' }
  ],
  876: [
    { syllable: '單音節［these］', rule: '複合子音 th 濁音 (R006) + 魔術 e (R003)', status: '【適用】', reason: 'th 濁化發 /ð/，e_e 結構字尾 e 靜音使母音 e 發長母音 /iː/，尾音 s 濁化為 /z/，全字發 /ðiːz/' }
  ],
  877: [
    { syllable: '單音節［they］', rule: '複合子音 th 濁音 (R006) + 母音組合 ey (R004)', status: '【適用】', reason: '代名詞 th 濁化發 /ð/，ey 字母組合常規發長雙母音 /ðeɪ/' }
  ],
  878: [
    { syllable: '單音節［thick］', rule: '複合子音 th 清音 (R006) + 複合子音 ck (R006)', status: '【適用】', reason: 'th 發清擦音 /θ/，ck 封閉音節使母音 i 常規發短母音 /θɪk/' }
  ],
  879: [
    { syllable: '單音節［thin］', rule: '複合子音 th 清音 (R006) + 閉音節 (R001)', status: '【適用】', reason: 'th 發清擦音 /θ/，鼻子音 n 封閉單一母音 i 常規發短母音 /θɪn/' }
  ],
  880: [
    { syllable: '單音節［thing］', rule: '複合子音 th 清音 (R006) + 複合子音 ng (R006)', status: '【適用】', reason: 'th 發清擦音 /θ/，軟顎鼻音 ng 封閉音節使母音 i 發短音 /θɪŋ/' }
  ],
  881: [
    { syllable: '單音節［think］', rule: '複合子音 th 清音 (R006) + 閉音節 (R001)', status: '【適用】', reason: 'th 發清擦音 /θ/，子音叢 nk 封閉音節使母音 i 發短母音 /θɪŋk/' }
  ],
  882: [
    { syllable: '單音節［third］', rule: '複合子音 th 清音 (R006) + R 控制母音 ir (R005)', status: '【適用】', reason: 'th 發清擦音 /θ/，ir 字母組合受捲舌控制常規發長捲舌母音 /θɝːd/' }
  ],
  883: [
    { syllable: '單音節［this］', rule: '複合子音 th 濁音 (R006) + 閉音節 (R001)', status: '【適用】', reason: '指示詞 th 濁化發 /ð/，子音 s 封閉單一母音 i 常規發短母音 /ðɪs/' }
  ],
  884: [
    { syllable: '單音節［those］', rule: '複合子音 th 濁音 (R006) + 魔術 e (R003)', status: '【適用】', reason: '指示詞 th 濁化發 /ð/，o_e 結構字尾 e 靜音促使 o 發長雙母音 /oʊ/，s 濁化為 /z/，發 /ðoʊz/' }
  ],
  885: [
    { syllable: '單音節［though］', rule: '複合子音 th (R006) + 靜音 gh (R010)', status: '【不適用 (例外轉移)】', reason: '功能詞 th 濁化發 /ð/，ough 字母組合中 gh 保持靜音，母音特例發長雙母音 /ðoʊ/' }
  ],
  886: [
    { syllable: '第 1 音節［thou］', rule: '複合子音 th (R006) + 雙母音組合 ou (R004)', status: '【適用】', reason: 'th 發清音 /θ/，ou 字母組合常規發雙母音 /ˈθaʊ/' },
    { syllable: '第 2 音節［sand］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 a 弱化，s 濁化為 /z/，常規發 /zənd/' }
  ],
  887: [
    { syllable: '單音節［throat］', rule: '子音叢 thr (R006) + 母音組合 oa (R004)', status: '【適用】', reason: 'thr 緊密結合發 /θr/，oa 組合常規發長雙母音 /oʊ/，子音 t 封閉發 /θroʊt/' }
  ],
  888: [
    { syllable: '單音節［through］', rule: '子音叢 thr (R006) + 特例長音化 (R010)', status: '【不適用 (例外轉移)】', reason: 'thr 發 /θr/，ough 組合中 gh 保持靜音，母音特例發長圓唇母音 /θruː/' }
  ],
  889: [
    { syllable: '單音節［throw］', rule: '子音叢 thr (R006) + 母音組合 ow (R004)', status: '【適用】', reason: 'thr 發 /θr/，ow 字母組合於詞尾常規發長雙母音 /θroʊ/' }
  ],
  890: [
    { syllable: '第 1 音節［tick］', rule: '閉音節規則 (R001) + 複合子音 ck (R006)', status: '【適用】', reason: '複合子音 ck 封閉音節，單一母音 i 常規發短母音 /ˈtɪk/' },
    { syllable: '第 2 音節［et］', rule: '非重音弱化 (R008)', status: '【適用】', reason: '非重讀音節單一母音 e 弱化發鬆短音 /ɪt/' }
  ],
  891: [
    { syllable: '第 1 音節［ti］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 i 結尾無子音封閉，常規發長雙母音 /ˈtaɪ/' },
    { syllable: '第 2 音節［dy］', rule: '字尾 y 半母音 (R002/R008)', status: '【適用】', reason: '字尾 y 處非重讀音節常規發長母音 /di/' }
  ],
  892: [
    { syllable: '單音節［tie］', rule: '母音組合 ie (R004)', status: '【適用】', reason: 'ie 字母組合於詞尾常規發長雙母音 /taɪ/' }
  ],
  893: [
    { syllable: '第 1 音節［ti］', rule: '開音節規則 (R002)', status: '【適用】', reason: '重讀開音節單一母音 i 結尾無子音封閉，常規發長雙母音 /ˈtaɪ/' },
    { syllable: '第 2 音節［ger］', rule: '硬音 g (R007) + R 控制母音 er (R005)', status: '【適用】', reason: 'g 發硬音 /ɡ/，字尾 -er 處非重讀音節常規發弱化捲舌音 /ɡɚ/' }
  ],
  894: [
    { syllable: '單音節［time］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'i_e 結構字尾 e 靜音促使母音 i 常規發長雙母音 /taɪm/' }
  ],
  895: [
    { syllable: '單音節［tip］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一母音 i 被子音 p 封閉，常規發短母音 /tɪp/' }
  ],
  896: [
    { syllable: '單音節［tired］', rule: 'R 控制魔術 e (R005) + 規則過去分詞', status: '【適用】', reason: 'ire 結構受 r 捲舌控制發 /ˈtaɪ.ɚ/，後綴 -d 濁化發 /d/，全字發 /ˈtaɪ.ɚd/' }
  ],
  897: [
    { syllable: '單音節［to］', rule: '開音節規則 (R002) → 特例長母音 (R010)', status: '【不適用 (例外轉移)】', reason: '單一母音 o 結尾未發字母本名長雙音 /oʊ/，受高頻音變特例發長圓唇音 /tuː/' }
  ],
  898: [
    { syllable: '第 1 音節［to］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀前綴母音 o 弱化發輕母音 /tə/' },
    { syllable: '第 2 音節［day］', rule: '母音組合 ay (R004)', status: '【適用】', reason: '重讀音節 ay 組合常規發長雙母音 /deɪ/' }
  ],
  899: [
    { syllable: '單音節［toe］', rule: '母音組合 oe (R004)', status: '【適用】', reason: 'oe 字母組合於詞尾常規發長雙母音 /toʊ/' }
  ],
  900: [
    { syllable: '第 1 音節［to］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '非重讀音節母音 o 弱化發輕母音 /tə/' },
    { syllable: '第 2 音節［geth］', rule: '閉音節規則 (R001) + 複合子音 th 濁音 (R006)', status: '【適用】', reason: '重讀音節 e 發短母音 /ˈɡɛ/，複合子音 th 濁化發 /ð/' },
    { syllable: '第 3 音節［er］', rule: 'R 控制母音 er (R005/R008)', status: '【適用】', reason: '字尾 -er 處非重讀音節常規發弱化捲舌音 /ɚ/' }
  ]
};

export function writeMaps() {
  const b8Content = `export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch8DerivationsMap: Record<number, DerivationItem[]> = ${JSON.stringify(batch8Map, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'scripts', 'batch8_derivations_map.ts'), b8Content, 'utf8');
  console.log('[PASS] Wrote scripts/batch8_derivations_map.ts');

  const b9Content = `export interface DerivationItem {
  syllable: string;
  rule: string;
  status: '【適用】' | '【不適用 (例外轉移)】' | '【適用 (部分轉移)】';
  reason: string;
}

export const batch9DerivationsMap: Record<number, DerivationItem[]> = ${JSON.stringify(batch9Map, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'scripts', 'batch9_derivations_map.ts'), b9Content, 'utf8');
  console.log('[PASS] Wrote scripts/batch9_derivations_map.ts');
}

writeMaps();
