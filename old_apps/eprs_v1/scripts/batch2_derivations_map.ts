import { DerivationItem } from '../lib/batch01Data';

export const batch2DerivationsMap: Record<number, DerivationItem[]> = {
  101: [
    { syllable: '單音節［black］', rule: '子音叢 (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 bl- 開頭且以 -ck 封閉，單一母音字母 a 常規發短母音 /blæk/' }
  ],
  102: [
    { syllable: '第 1 音節［black］', rule: '子音叢 (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合名詞主重音在前，單一母音 a 於閉音節常規發短母音 /ˈblæk/' },
    { syllable: '第 2 音節［board］', rule: '母音組合 oar (R004/R005)', status: '【適用】', reason: 'oar 組合受 r 牽引常規發長捲舌母音 /bɔːrd/' }
  ],
  103: [
    { syllable: '第 1 音節［blan］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '鼻音 n 封閉且為重音節，母音 a 常規發短母音 /ˈblæŋ/' },
    { syllable: '第 2 音節［ket］', rule: '閉音節規則 (R001) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀閉音節，母音 e 弱化發短音 /kɪt/' }
  ],
  104: [
    { syllable: '單音節［blind］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-ind 字族受相連子音影響，母音 i 常規發字母長雙母音 /blaɪnd/' }
  ],
  105: [
    { syllable: '單音節［block］', rule: '子音叢 (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 bl- 開頭且以 -ck 封閉，母音 o 常規發短母音 /blɑːk/' }
  ],
  106: [
    { syllable: '單音節［blow］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 雙母音字母組合於字尾常規發雙母音 /bloʊ/' }
  ],
  107: [
    { syllable: '單音節［blue］', rule: '母音組合 ue (R004)', status: '【適用】', reason: 'ue 字母組合常規發長母音 /bluː/，字尾 e 不發音' }
  ],
  108: [
    { syllable: '單音節［boat］', rule: '母音組合 oa (R004)', status: '【適用】', reason: 'oa 雙母音字母組合常規發長母音 /boʊt/' }
  ],
  109: [
    { syllable: '第 1 音節［bod］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 d 封閉且為重音節，母音 o 常規發短母音 /ˈbɑː/' },
    { syllable: '第 2 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /di/' }
  ],
  110: [
    { syllable: '單音節［boil］', rule: '母音組合 oi (R004)', status: '【適用】', reason: 'oi 雙母音組合常規發雙母音 /bɔɪl/' }
  ],
  111: [
    { syllable: '單音節［book］', rule: '母音組合 oo 短音組 (R004)', status: '【適用】', reason: 'oo 在子音 k 前常規發短母音 /bʊk/' }
  ],
  112: [
    { syllable: '第 1 音節［book］', rule: '母音組合 oo 短音組 (R004)', status: '【適用】', reason: '複合名詞主重音在前，oo 發短母音 /ˈbʊk/' },
    { syllable: '第 2 音節［store］', rule: '魔術 e 規則 (R003) + R 控制母音 (R005)', status: '【適用】', reason: 'o_e 受 r 牽引發長捲舌母音 /stɔːr/，字尾 e 不發音' }
  ],
  113: [
    { syllable: '單音節［bored］', rule: '魔術 e 規則 (R003) + R 控制母音 (R005)', status: '【適用】', reason: 'o_e 受 r 牽引發長捲舌母音 /bɔːrd/，字尾 -ed 發濁子音 /d/' }
  ],
  114: [
    { syllable: '第 1 音節［bor］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'or 組合於重音節常規發長捲舌母音 /ˈbɔːr/' },
    { syllable: '第 2 音節［ing］', rule: '後綴弱化規則 (R008)', status: '【適用】', reason: '-ing 非重讀後綴常規發 /ɪŋ/' }
  ],
  115: [
    { syllable: '單音節［born］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'or 組合於重音節常規發長捲舌母音 /bɔːrn/' }
  ],
  116: [
    { syllable: '第 1 音節［bor］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 rr 劃分，前音節為閉音節，母音 o 發短母音 /ˈbɑːr/' },
    { syllable: '第 2 音節［row］', rule: '母音組合 ow (R004)', status: '【適用】', reason: '非重讀字尾 ow 常規發雙母音 /oʊ/' }
  ],
  117: [
    { syllable: '單音節［boss］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 ss 封閉音節，單一母音字母 o 常規發短母音 /bɔːs/' }
  ],
  118: [
    { syllable: '單音節［both］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-oth 字族受特定子音環境影響，母音 o 常規發長母音 /boʊθ/' }
  ],
  119: [
    { syllable: '第 1 音節［bot］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 tt 劃分，閉音節單一母音 o 發短母音 /ˈbɑː/' },
    { syllable: '第 2 音節［tle］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，美式發音濁化為閃音 /t̬əl/' }
  ],
  120: [
    { syllable: '第 1 音節［bot］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 tt 劃分，閉音節單一母音 o 發短母音 /ˈbɑː/' },
    { syllable: '第 2 音節［tom］', rule: '閉音節規則 (R001) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀閉音節，母音 o 弱化發輕音 /t̬əm/' }
  ],
  121: [
    { syllable: '單音節［bow］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 雙母音字母組合於重音節常規發雙母音 /baʊ/' }
  ],
  122: [
    { syllable: '單音節［bowl］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 組合後接子音 l，常規發長母音 /boʊl/' }
  ],
  123: [
    { syllable: '單音節［box］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 x 封閉音節，單一母音字母 o 常規發短母音 /bɑːks/' }
  ],
  124: [
    { syllable: '單音節［boy］', rule: '母音組合 oy (R004)', status: '【適用】', reason: 'oy 雙母音字母組合常規發雙母音 /bɔɪ/' }
  ],
  125: [
    { syllable: '單音節［bread］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ea 組合常規發長音 /iː/，此處受語音演變特例發短母音 /brɛd/ (R010)' }
  ],
  126: [
    { syllable: '單音節［break］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ea 組合常規發長音 /iː/，此處特例發字母長雙母音 /breɪk/ (R010)' }
  ],
  127: [
    { syllable: '第 1 音節［break］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ea 組合受複合詞重音影響弱化為短母音 /ˈbrɛk/ (R010)' },
    { syllable: '第 2 音節［fast］', rule: '閉音節規則 (R001) → 弱讀弱化 (R008)', status: '【適用】', reason: '非重讀音節，母音 a 弱化發輕母音 /fəst/' }
  ],
  128: [
    { syllable: '單音節［bridge］', rule: '短母音 + -dge 複合子音 (R006)', status: '【適用】', reason: '-dge 複合子音前母音 i 常規發短母音 /brɪdʒ/，字尾 e 不發音' }
  ],
  129: [
    { syllable: '單音節［bright］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-ight 字族 gh 不發音，促使母音 i 發字母長雙母音 /braɪt/' }
  ],
  130: [
    { syllable: '單音節［bring］', rule: '複合子音 ng (R006) + 閉音節 (R001)', status: '【適用】', reason: 'ng 鼻音組合封閉音節，單一母音字母 i 常規發短母音 /brɪŋ/' }
  ],
  131: [
    { syllable: '第 1 音節［broth］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: '母音 o 於重音節不發常規短音 /ɑː/，特例發短母音 /ˈbrʌð/ (R010)' },
    { syllable: '第 2 音節［er］', rule: 'R 控制母音 (R005) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -er 弱化發輕捲舌母音 /ɚ/' }
  ],
  132: [
    { syllable: '單音節［brown］', rule: '母音組合 ow (R004)', status: '【適用】', reason: 'ow 雙母音字母組合於重音節常規發雙母音 /braʊn/' }
  ],
  133: [
    { syllable: '單音節［brush］', rule: '複合子音 sh (R006) + 閉音節 (R001)', status: '【適用】', reason: 'sh 清摩擦音封閉音節，單一母音字母 u 常規發短母音 /brʌʃ/' }
  ],
  134: [
    { syllable: '單音節［bug］', rule: '閉音節 (R001) + 硬音 g (R007)', status: '【適用】', reason: '子音 g 封閉音節，單一母音字母 u 常規發短母音 /bʌɡ/' }
  ],
  135: [
    { syllable: '單音節［build］', rule: '母音組合規則 (R004)', status: '【不適用 (例外轉移)】', reason: 'ui 組合常規發長母音 /uː/，此處字母 u 默音，特例發短母音 /bɪld/ (R010)' }
  ],
  136: [
    { syllable: '單音節［bun］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 n 封閉音節，母音 u 常規發短母音 /bʌn/' }
  ],
  137: [
    { syllable: '單音節［burn］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ur 組合於重音節受 r 牽引，常規發長捲舌母音 /bɝːn/' }
  ],
  138: [
    { syllable: '單音節［bus］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 s 封閉音節，母音 u 常規發短母音 /bʌs/' }
  ],
  139: [
    { syllable: '第 1 音節［busi］', rule: '開音節規則 (R002)', status: '【不適用 (例外轉移)】', reason: '字母 u 特例發短母音 /ˈbɪz/，s 發濁音 /z/ (R010)' },
    { syllable: '第 2 音節［ness］', rule: '名詞後綴弱化規則 (R008)', status: '【適用】', reason: '-ness 後綴非重讀，母音 e 弱化發 /nɪs/' }
  ],
  140: [
    { syllable: '第 1 音節［busi］', rule: '特例發音 (R010)', status: '【不適用 (例外轉移)】', reason: '字母 u 特例發短母音 /ˈbɪz/ (R010)' },
    { syllable: '第 2 音節［ness］', rule: '名詞後綴弱化 (R008)', status: '【適用】', reason: '-ness 後綴非重讀弱化發 /nɪs/' },
    { syllable: '第 3 音節［man］', rule: '複合詞次重音 (R015)', status: '【適用】', reason: '次重音保留單字完整發音 /mæn/' }
  ],
  141: [
    { syllable: '第 1 音節［bus］', rule: '閉音節規則 (R001)', status: '【不適用 (例外轉移)】', reason: '字母 u 不發短音 /ʌ/，特例發短母音 /ˈbɪz/ (R010)' },
    { syllable: '第 2 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /i/' }
  ],
  142: [
    { syllable: '單音節［but］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 t 封閉音節，母音 u 常規發短母音 /bʌt/' }
  ],
  143: [
    { syllable: '第 1 音節［but］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 tt 劃分，閉音節單一母音 u 發短母音 /ˈbʌt/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音 (R005) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -er 弱化發輕捲舌母音 /ɚ/' }
  ],
  144: [
    { syllable: '第 1 音節［but］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 tt 劃分，母音 u 發短母音 /ˈbʌt/' },
    { syllable: '第 2 音節［ter］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '中間音節 -er 弱化發輕音 /ɚ/' },
    { syllable: '第 3 音節［fly］', rule: '開音節規則 (R002)', status: '【適用】', reason: '次重音單一母音 y 於字尾常規發雙母音 /flaɪ/' }
  ],
  145: [
    { syllable: '單音節［buy］', rule: '特例拼字發音 (R010)', status: '【不適用 (例外轉移)】', reason: 'uy 字母組合字母 u 默音，特例發字母長雙母音 /baɪ/' }
  ],
  146: [
    { syllable: '單音節［by］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單音節字尾母音 y 常規發字母長雙母音 /baɪ/' }
  ],
  147: [
    { syllable: '單音節［cage］', rule: '魔術 e 規則 (R003) + 軟音 g (R007)', status: '【適用】', reason: 'a_e 促使母音 a 發字母長音 /eɪ/，g 在 e 前發軟音 /dʒ/，字尾 e 不發音' }
  ],
  148: [
    { syllable: '單音節［cake］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 促使母音 a 發字母長音 /keɪk/，字尾 e 不發音' }
  ],
  149: [
    { syllable: '單音節［call］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-all 字族母音 a 受雙子音 ll 影響，常規發長母音 /kɔːl/' }
  ],
  150: [
    { syllable: '第 1 音節［cam］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 m 封閉且為重音節，母音 a 常規發短母音 /ˈkæm/' },
    { syllable: '第 2 音節［er］', rule: '弱化省音規則 (R008)', status: '【適用】', reason: '弱讀音節受快速語流省音影響融入 /r/' },
    { syllable: '第 3 音節［a］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '字尾非重讀單一母音 a 弱化發輕母音 /rə/' }
  ],
  151: [
    { syllable: '單音節［camp］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音叢 -mp 封閉音節，母音 a 常規發短母音 /kæmp/' }
  ],
  152: [
    { syllable: '單音節［can］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 n 封閉音節，母音 a 常規發短母音 /kæn/' }
  ],
  153: [
    { syllable: '第 1 音節［can］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為重音節，母音 a 常規發短母音 /ˈkæn/' },
    { syllable: '第 2 音節［dle］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，發 /dəl/' }
  ],
  154: [
    { syllable: '第 1 音節［can］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 n 封閉且為重音節，母音 a 常規發短母音 /ˈkæn/' },
    { syllable: '第 2 音節［dy］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /di/' }
  ],
  155: [
    { syllable: '單音節［cap］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 p 封閉音節，母音 a 常規發短母音 /kæp/' }
  ],
  156: [
    { syllable: '單音節［car］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於重音節受 r 牽引，常規發長捲舌母音 /kɑːr/' }
  ],
  157: [
    { syllable: '單音節［card］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'ar 組合於重音節常規發長捲舌母音 /kɑːrd/' }
  ],
  158: [
    { syllable: '單音節［care］', rule: '魔術 e 規則 (R003) + R 控制母音 (R005)', status: '【適用】', reason: 'a_e 受 r 牽引常規發雙母音 /kɛr/，字尾 e 不發音' }
  ],
  159: [
    { syllable: '第 1 音節［care］', rule: '魔術 e (R003) + R 控制母音 (R005)', status: '【適用】', reason: '重音節 a_e 受 r 牽引常規發雙母音 /ˈkɛr/' },
    { syllable: '第 2 音節［ful］', rule: '後綴弱化規則 (R008)', status: '【適用】', reason: '-ful 形容詞後綴非重讀，母音 u 弱化發 /fəl/' }
  ],
  160: [
    { syllable: '第 1 音節［car］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '雙子音 rr 劃分，前音節為閉音節，母音 a 發短母音 /ˈkær/' },
    { syllable: '第 2 音節［ry］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /i/' }
  ],
  161: [
    { syllable: '單音節［case］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 促使母音 a 發字母長音 /keɪs/，字尾 e 不發音' }
  ],
  162: [
    { syllable: '第 1 音節［cas］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '子音 s 封閉且為重音節，母音 a 常規發短母音 /ˈkæs/' },
    { syllable: '第 2 音節［tle］', rule: '默音 t (R010) + 成音節字尾 (R009)', status: '【不適用 (例外轉移)】', reason: '字母 t 在 -stle 結構中默音不發音，-le 構成成音節發 /əl/' }
  ],
  163: [
    { syllable: '單音節［cat］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '單一子音 t 封閉音節，母音 a 常規發短母音 /kæt/' }
  ],
  164: [
    { syllable: '單音節［catch］', rule: '複合子音 -tch (R006) + 閉音節 (R001)', status: '【適用】', reason: '-tch 複合子音前，單一母音字母 a 常規發短母音 /kætʃ/' }
  ],
  165: [
    { syllable: '第 1 音節［cel］', rule: '軟音 c (R007) + 閉音節 (R001)', status: '【適用】', reason: '字母 c 在 e 前發軟音 /s/，閉音節母音 e 發短母音 /ˈsɛl/' },
    { syllable: '第 2 音節［e］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '非重讀單一母音字母 e 弱化發輕母音 /ə/' },
    { syllable: '第 3 音節［brate］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'a_e 促使母音 a 發字母長音 /breɪt/，字尾 e 不發音' }
  ],
  166: [
    { syllable: '第 1 音節［cell］', rule: '軟音 c (R007) + 閉音節 (R001)', status: '【適用】', reason: '字母 c 在 e 前發軟音 /s/，雙子音 ll 封閉發短母音 /ˈsɛl/' },
    { syllable: '第 2 音節［phone］', rule: '複合子音 ph (R006) + 魔術 e (R003)', status: '【適用】', reason: 'ph 發 /f/，o_e 促使母音 o 發字母長音 /foʊn/' }
  ],
  167: [
    { syllable: '單音節［cent］', rule: '軟音 c (R007) + 閉音節 (R001)', status: '【適用】', reason: '字母 c 在 e 前發軟音 /s/，子音叢 -nt 封閉發短母音 /sɛnt/' }
  ],
  168: [
    { syllable: '第 1 音節［cen］', rule: '軟音 c (R007) + 閉音節 (R001)', status: '【適用】', reason: '字母 c 在 e 前發軟音 /s/，閉音節母音 e 發短母音 /ˈsɛn/' },
    { syllable: '第 2 音節［ter］', rule: 'R 控制母音 (R005) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀 -er 弱化發輕捲舌母音 /tɚ/' }
  ],
  169: [
    { syllable: '第 1 音節［cen］', rule: '軟音 c (R007) + 閉音節 (R001)', status: '【適用】', reason: '字母 c 在 e 前發軟音 /s/，母音 e 發短母音 /ˈsɛn/' },
    { syllable: '第 2 音節［ti］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '非重讀音節母音 i 弱化發輕母音 /tə/' },
    { syllable: '第 3 音節［me］', rule: '開音節規則 (R002)', status: '【適用】', reason: '次重音開音節母音 e 發長母音 /miː/' },
    { syllable: '第 4 音節［ter］', rule: '非重讀弱化 (R008)', status: '【適用】', reason: '字尾 -er 弱化發 /t̬ɚ/' }
  ],
  170: [
    { syllable: '單音節［chair］', rule: '複合子音 ch (R006) + 母音組合 air (R004/R005)', status: '【適用】', reason: 'ch 發清塞擦音 /tʃ/，air 組合受 r 牽引常規發長雙母音 /tʃɛr/' }
  ],
  171: [
    { syllable: '單音節［chalk］', rule: '複合子音 ch (R006) + 特殊字族 -alk (R011)', status: '【適用】', reason: 'ch 發 /tʃ/，-alk 字族字母 l 默音，母音 a 發長母音 /tʃɔːk/' }
  ],
  172: [
    { syllable: '單音節［chance］', rule: '複合子音 ch (R006) + 軟音 c (R007)', status: '【適用】', reason: 'ch 發 /tʃ/，子音 n 封閉母音 a 發短音 /æ/，字尾 ce 發清音 /ns/' }
  ],
  173: [
    { syllable: '單音節［change］', rule: '複合子音 ch (R006) + 特殊字族 -ange (R011)', status: '【適用】', reason: '-ange 字族促使母音 a 發字母長音 /eɪ/，g 在 e 前發軟音 /dʒ/' }
  ],
  174: [
    { syllable: '單音節［cheap］', rule: '複合子音 ch (R006) + 母音組合 ea (R004)', status: '【適用】', reason: 'ch 發 /tʃ/，ea 雙母音組合常規發長母音 /tʃiːp/' }
  ],
  175: [
    { syllable: '單音節［cheat］', rule: '複合子音 ch (R006) + 母音組合 ea (R004)', status: '【適用】', reason: 'ch 發 /tʃ/，ea 雙母音組合常規發長母音 /tʃiːt/' }
  ],
  176: [
    { syllable: '單音節［check］', rule: '複合子音 ch (R006) + 閉音節 (R001)', status: '【適用】', reason: 'ch 發 /tʃ/，雙子音 ck 封閉音節，母音 e 發短母音 /tʃɛk/' }
  ],
  177: [
    { syllable: '單音節［cheer］', rule: '複合子音 ch (R006) + 母音組合 eer (R004/R005)', status: '【適用】', reason: 'eer 組合受 r 牽引，於重音節常規發長雙母音 /tʃɪr/' }
  ],
  178: [
    { syllable: '單音節［cheese］', rule: '複合子音 ch (R006) + 母音組合 ee (R004)', status: '【適用】', reason: 'ee 組合發長母音 /iː/，字尾 se 於母音後發濁音 /z/，產出 /tʃiːz/' }
  ],
  179: [
    { syllable: '單音節［chess］', rule: '複合子音 ch (R006) + 閉音節 (R001)', status: '【適用】', reason: '雙子音 ss 封閉音節，單一母音字母 e 常規發短母音 /tʃɛs/' }
  ],
  180: [
    { syllable: '第 1 音節［chick］', rule: '複合子音 ch (R006) + 閉音節 (R001)', status: '【適用】', reason: '雙子音 ck 封閉且為重音節，母音 i 發短母音 /ˈtʃɪk/' },
    { syllable: '第 2 音節［en］', rule: '閉音節規則 (R001) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀閉音節，母音 e 弱化發短音 /ɪn/' }
  ],
  181: [
    { syllable: '單音節［child］', rule: '特殊母音字族規則 (R011)', status: '【適用】', reason: '-ild 字族受相連子音影響，母音 i 常規發字母長雙母音 /tʃaɪld/' }
  ],
  182: [
    { syllable: '第 1 音節［Chi］', rule: '開音節規則 (R002)', status: '【適用】', reason: '單一母音字母結尾且為重音節，母音 i 常規發字母長雙母音 /ˈtʃaɪ/' },
    { syllable: '第 2 音節［na］', rule: '開音節規則 (R002) → 非重讀弱化 (R008)', status: '【適用】', reason: '非重讀字尾單一母音 a 弱化發輕母音 /nə/' }
  ],
  183: [
    { syllable: '第 1 音節［Chi］', rule: '開音節規則 (R002) → 次重音', status: '【適用】', reason: '次重音開音節，母音 i 發雙母音 /ˌtʃaɪ/' },
    { syllable: '第 2 音節［nese］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '主重音在後，e_e 結構促使母音 e 發字母長音 /ˈniːz/' }
  ],
  184: [
    { syllable: '第 1 音節［choc］', rule: '複合子音 ch (R006) + 閉音節 (R001)', status: '【適用】', reason: '閉音節重音節，母音 o 常規發短母音 /ˈtʃɑːk/' },
    { syllable: '第 2 音節［o · late］', rule: '非重讀弱化與省音規則 (R008)', status: '【適用】', reason: '中間音節省音，字尾 -ate 弱化發 /lət/' }
  ],
  185: [
    { syllable: '單音節［choose］', rule: '母音組合 oo (R004)', status: '【適用】', reason: 'oo 雙母音組合常規發長母音 /uː/，字尾 se 發濁音 /z/，產出 /tʃuːz/' }
  ],
  186: [
    { syllable: '第 1 音節［chop］', rule: '複合子音 ch (R006) + 閉音節 (R001)', status: '【適用】', reason: '複合名詞主重音在前，閉音節母音 o 發短母音 /ˈtʃɑːp/' },
    { syllable: '第 2 音節［sticks］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '-ck 封閉音節，母音 i 發短母音 /stɪks/' }
  ],
  187: [
    { syllable: '第 1 音節［Christ］', rule: '外來語音規則 (R010)', status: '【不適用 (例外轉移)】', reason: '希臘語源 ch 發硬音 /k/，字母 t 默音，閉音節母音 i 發短音 /ˈkrɪs/' },
    { syllable: '第 2 音節［mas］', rule: '非重讀弱化規則 (R008)', status: '【適用】', reason: '非重讀音節母音 a 弱化發輕母音 /məs/' }
  ],
  188: [
    { syllable: '單音節［church］', rule: '複合子音 ch (R006) + R 控制母音 (R005)', status: '【適用】', reason: 'ur 組合受 r 牽引常規發長捲舌母音 /tʃɝːtʃ/' }
  ],
  189: [
    { syllable: '第 1 音節［cir］', rule: '軟音 c (R007) + R 控制母音 (R005)', status: '【適用】', reason: 'c 在 i 前發軟音 /s/，ir 組合常規發長捲舌母音 /ˈsɝː/' },
    { syllable: '第 2 音節［cle］', rule: '成音節字尾規則 (R009)', status: '【適用】', reason: '子音 + le 於字尾構成成音節，發 /kəl/' }
  ],
  190: [
    { syllable: '第 1 音節［cit］', rule: '軟音 c (R007) + 閉音節 (R001)', status: '【適用】', reason: 'c 在 i 前發軟音 /s/，閉音節單一母音 i 發短母音 /ˈsɪt/' },
    { syllable: '第 2 音節［y］', rule: '開音節規則 (R002) → 字尾 y 半母音', status: '【適用】', reason: '多音節字尾 y 非重讀時常規發長母音 /i/' }
  ],
  191: [
    { syllable: '單音節［clap］', rule: '子音叢 (R006) + 閉音節 (R001)', status: '【適用】', reason: '子音叢 cl- 開頭且以子音 p 封閉，母音 a 常規發短母音 /klæp/' }
  ],
  192: [
    { syllable: '單音節［class］', rule: '子音叢 (R006) + 閉音節 (R001)', status: '【適用】', reason: '雙子音 ss 封閉音節，單一母音字母 a 常規發短母音 /klæs/' }
  ],
  193: [
    { syllable: '第 1 音節［class］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '複合名詞主重音在前，閉音節母音 a 發短母音 /ˈklæs/' },
    { syllable: '第 2 音節［mate］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: '次重音 a_e 促使母音 a 發字母長音 /meɪt/' }
  ],
  194: [
    { syllable: '第 1 音節［class］', rule: '閉音節規則 (R001)', status: '【適用】', reason: '複合名詞主重音在前，閉音節母音 a 發短母音 /ˈklæs/' },
    { syllable: '第 2 音節［room］', rule: '母音組合 oo (R004)', status: '【適用】', reason: 'oo 雙母音組合常規發長母音 /ruːm/' }
  ],
  195: [
    { syllable: '單音節［clean］', rule: '子音叢 (R006) + 母音組合 ea (R004)', status: '【適用】', reason: 'ea 雙母音字母組合於重音節常規發長母音 /kliːn/' }
  ],
  196: [
    { syllable: '單音節［clear］', rule: '母音組合 ear (R004/R005)', status: '【適用】', reason: 'ear 組合受 r 牽引，於重音節常規發長雙母音 /klɪr/' }
  ],
  197: [
    { syllable: '單音節［clerk］', rule: 'R 控制母音規則 (R005)', status: '【適用】', reason: 'er 組合於美語重音節受 r 牽引，常規發長捲舌母音 /klɝːk/' }
  ],
  198: [
    { syllable: '單音節［climb］', rule: '默音 b 規則 (R010)', status: '【不適用 (例外轉移)】', reason: '-mb 字尾 b 默音不發音，相連子音促使母音 i 特例發雙母音 /klaɪm/' }
  ],
  199: [
    { syllable: '單音節［clock］', rule: '子音叢 (R006) + 閉音節 (R001)', status: '【適用】', reason: '雙子音 ck 封閉音節，單一母音字母 o 常規發短母音 /klɑːk/' }
  ],
  200: [
    { syllable: '單音節［close］', rule: '魔術 e 規則 (R003)', status: '【適用】', reason: 'o_e 促使母音 o 發字母長雙母音 /kloʊz/，動詞字尾 s 發濁音 /z/' }
  ]
};
