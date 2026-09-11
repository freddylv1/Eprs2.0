// EPRS 音節切分與音標推導四大工具表靜態知識庫
window.EPRS_MATRIX = {
  syllableSteps: [
    {
      step: '步驟 1：母音核心',
      rule: '找出發音母音核心',
      desc: '每個音節必有且僅有一個發音母音核心 (a, e, i, o, u, y / ai, ee, oa / ar, er 等)。字尾不發音 e 靜音不計為獨立核心。',
      example: 'cat [a], train [ai], agree [a]+[ee] (2音節)'
    },
    {
      step: '步驟 2：鎖定子音',
      rule: '標記不可拆子音組合',
      desc: '1. 不可拆複合子音 (sh, ch, th, ph, wh, ck, 字尾 ng [發單音 /ŋ/]) 與子音叢 (gr, bl, cl, dr, st, pr, tr) 視為單一發音單位，切分音節時絕不可拆斷。<br/>★ 核心辨析：字尾單一複合子音 ng (如 sing, ring, song) 不可拆；但字根內部相連雙子音 n + g (如 kan·ga·roo, fin·ger, lan·guage, hun·gry) 則遵循 VCCV 在 n 與 g 中間切分，前節 n 發 /ŋ/，後節 g 發 /ɡ/，拼合為 /ŋɡ/。',
      example: 'tea · cher (ch不拆)<br/>sing · er (字尾ng不拆 /ŋ/)<br/>kan · ga · roo (VCCV n+g拆分 /ŋɡ/)'
    },
    {
      step: '步驟 3：結構切分',
      rule: 'VCV 劃後 / 閉音留前 / VCCV 拆開',
      desc: '1. <b>VCV 結構（雙分流原則）</b>：<br/>&nbsp;&nbsp;• <b>(A) 開音節長音預設</b>：單子音劃歸後音節（V · CV，如 o-pen, ti-ger, ba-by）<br/>&nbsp;&nbsp;• <b>(B) 重讀短音閉音節修正</b>：首節為短母音時，子音留前封閉（VC · V，如 hon-ey, sev-en, drag-on, rob-in）<br/>2. <b>VCCV 結構</b>：相連雙子音從中間拆開（如 bas-ket, doc-tor, hap-py）<br/>3. <b>-Cle 結構</b>：字尾「子音 + le」獨立為成音節（如 ap-ple, lit-tle, bot-tle）<br/>4. <b>複合詞結構</b>：兩實詞字根在邊界處直接切分（如 head-ache, bed-room）',
      example: 'o · pen (長音劃後)<br/>hon · ey (短音留前)<br/>doc · tor (VCCV)<br/>head · ache (複合詞)'
    },
    {
      step: '步驟 4：型態推導',
      rule: '音節型態與規則推導',
      desc: '依序判定各音節屬於閉音節 (R001)、開音節 (R002)、魔術 e (R003)、母音組合 (R004)、R控制 (R005) 或弱化音節 (R008/R012)。',
      example: 'eleven [e · lev · en] (3音節)'
    }
  ],

  rules17: [
    { code: 'R001', name: '閉音節短母音', desc: '母音字母被子音封閉時發短音', ipa: '/æ, ɛ, ɪ, ɑː, ʌ/', ex: 'cat, bed, sit, bus' },
    { code: 'R002', name: '開音節長母音', desc: '母音結尾發字母本身長音', ipa: '/eɪ, iː, aɪ, oʊ, juː/', ex: 'he, go, hi, no' },
    { code: 'R003', name: '魔術 e 長音', desc: '1. 字尾不發音 e 使前方母音跳發長音 (V-C-e)<br/>2. 舌尖/流音 (l, r, d, t, s, z) 後 u_e 美式簡化發 /uː/<br/>3. 其餘子音後保留 /juː/', ipa: '/eɪ, iː, aɪ, oʊ, juː, uː/', ex: 'cake, time, home<br/>rule, flute, glue<br/>cute, tube' },
    { code: 'R004', name: '母音組合', desc: '固定母音群發長音或雙母音 (ai, ay, ee, ea, oa, oi, oy, ou, ow, oo, ue, ew)', ipa: '/iː, eɪ, aɪ, aʊ, ɔɪ, ɔː, uː/', ex: 'rain, see, boat, coin, blue, new' },
    { code: 'R005', name: 'R 控制母音', desc: '母音接 r 產生捲舌音 (ar, or, er, ir, ur, eer, air)', ipa: '/ɑːr, ɔːr, ɝː, ɚ, ɪr, ɛr/', ex: 'car, fork, bird, hear, care' },
    { code: 'R006', name: '複合子音', desc: '1. 雙子音組合發單一音 (sh, th, ph, wh, ck, ng, nk)<br/>2. ch 常用發 /tʃ/，希臘外來字發 /k/', ipa: '/ʃ, tʃ, θ, ð, f, ŋ, k/', ex: 'ship, think, photo, ring, bank<br/>chair, watch vs ache, school' },
    { code: 'R007', name: '軟硬子音', desc: '1. c, g 接 e, i, y 時發軟音 (/s/, /dʒ/)<br/>2. 其餘接 a, o, u 發硬音 (/k/, /ɡ/)<br/>3. gu- 中的 u 靜音保護 g 維持硬音 /ɡ/', ipa: '/s/, /dʒ/ vs /k/, /ɡ/', ex: 'city, giant<br/>cat, go, gun<br/>guess, guide, guitar' },
    { code: 'R008', name: '母音弱化', desc: '非重音音節之母音弱化發中央輕母音 /ə/ 或 /ɪ/', ipa: '/ə/, /ɪ/', ex: 'banana, open, pencil' },
    { code: 'R009', name: '成音節字尾', desc: '-ble, -tle, -dle, -ple 等字尾直接形成成音節', ipa: '/l/ 成音節', ex: 'apple, little, bottle' },
    { code: 'R010', name: '特殊發音例外', desc: '受歷史演變留存之特殊單字，獨立歸納記憶', ipa: '特例音標', ex: 'son, friend, one, eye' },
    { code: 'R011', name: '特殊母音字族', desc: '-all, -old, -ind, -ild, -ight 發特定長母音', ipa: '/ɔːl, oʊld, aɪnd, aɪt/', ex: 'fall, cold, find, light' },
    { code: 'R012', name: '前綴弱化', desc: '非重讀前綴 a-, be-, de-, re-, ex-, con-, in- 弱化發 /ə/ 或 /ɪ/', ipa: '/ə-, bɪ-, dɪ-, rɪ-/', ex: 'agree, begin, report' },
    { code: 'R013', name: '詞性重音轉移', desc: '雙音節名詞重音在第 1 音節，動詞重音在第 2 音節', ipa: '重音切換', ex: 'record (n. vs v.)' },
    { code: 'R014', name: '美式音變 (Y脫落/閃音/弱化脫落 Syncope)', desc: '1. <b>Y 脫落</b>：舌尖/流音後 u/ue/ew 省略 /j/ 直接發長音 /uː/<br/>2. <b>閃音 (Flap T)</b>：母音間非重音 t/d 轉為輕彈音 /t̬/<br/>3. <b>弱化脫落 (Syncope)</b>：非重讀音節母音弱化脫落促使子音連讀 (interest, family)<br/>4. <b>美式次重音保留</b>：-ary/-ery 發 /ɛr.i/ (library, dictionary)', ipa: '/uː/ (Y脫落), /t̬/ (閃音)', ex: 'tune, duty, blue<br/>water, better, city<br/>interest /ˈɪn.trɪst/<br/>library /ˈlaɪ.brɛr.i/' },
    { code: 'R015', name: '複合名詞重音', desc: '複合名詞主重音在第 1 部分，各部分各自保留母音', ipa: '首節主重音', ex: 'bedroom, classroom' },
    { code: 'R016', name: '靜音子音', desc: '1. 首部靜音：kn- (k靜音), wr- (w靜音)<br/>2. 尾部靜音：-mb (b靜音)<br/>3. 中間靜音：-alk/-alf (l靜音), -sten/-stle (t靜音)<br/>4. 保護靜音：gu- (u靜音保護g)', ipa: '不發音', ex: 'know, knee, write, wrong<br/>lamb, climb, bomb<br/>half, talk, walk, listen<br/>guess, guide, guest' },
    { code: 'R017', name: '歷史與外來語', desc: '法語或外來語留存之特殊拼音對應', ipa: '特例外來音', ex: 'police, machine, chef' }
  ],

  ipaVowels: [
    { cat: '短母音', ipa: '/æ/', spell: 'a (閉音節)', ex: 'cat, bag, apple, fat, hat, stand' },
    { cat: '短母音', ipa: '/ɛ/', spell: '1. e (閉音節)<br/>2. ea 組合 (歷史特例)', ex: 'bed, red, desk, pen<br/>bread, head, heavy, ready' },
    { cat: '短母音', ipa: '/ɪ/', spell: '1. i (閉音節)<br/>2. y (字中閉音節)', ex: 'pig, sit, milk, dish<br/>gym, myth, system' },
    { cat: '短母音', ipa: '/ɑː/', spell: '1. o (閉音節)<br/>2. a (在 w / wh 之後)', ex: 'dog, box, hot, stop<br/>wash, watch, want, water, what' },
    { cat: '短母音', ipa: '/ʌ/', spell: '1. u (閉音節)<br/>2. o (在 -th, -v, -m 前特例)', ex: 'bus, cup, duck, run<br/>son, love, money, come' },
    { cat: '短母音', ipa: '/ʊ/', spell: '1. oo (短音字族)<br/>2. u (特定子音前)', ex: 'book, foot, good, cook, look<br/>pull, full, put, push, should' },
    { cat: '長母音', ipa: '/eɪ/', spell: '1. a_e (魔術 e)<br/>2. ai, ay 組合<br/>3. ea (特例)', ex: 'cake, face, game<br/>rain, day, play<br/>break, great' },
    { cat: '長母音', ipa: '/iː/', spell: '1. e (開音節)<br/>2. e_e, ee, ea 組合<br/>3. ie 組合、y (字尾)', ex: 'he, be, we<br/>bee, eat, tree, read<br/>piece, key, city, happy' },
    { cat: '長母音', ipa: '/aɪ/', spell: '1. i_e (魔術 e)<br/>2. igh 組合<br/>3. -ind, -ild 字族<br/>4. y (單音節字尾)', ex: 'bike, time, kite<br/>night, light, high<br/>find, kind, wild<br/>fly, cry, sky' },
    { cat: '長母音', ipa: '/oʊ/', spell: '1. o_e (魔術 e)<br/>2. oa, ow 組合<br/>3. -old, -ost 字族<br/>4. o (開音節)', ex: 'home, nose, rope<br/>boat, road, snow<br/>cold, old, most<br/>go, no, open' },
    { cat: '長母音 (保留 /j/)', ipa: '/juː/', spell: 'u, u_e, ue, ew<br/><span style="font-size:11px; color:#64748b;">(唇音/喉音後: c, b, m, f, h)</span>', ex: 'cute, music, cube<br/>beauty, few, huge' },
    { cat: '長母音 (美式 Y 脫落)', ipa: '/uː/', spell: '1. u_e, ue, ew, ui (舌尖/流音後)<br/>2. oo (長音字族)', ex: 'blue, glue, rule, flute, tune, suit<br/>food, moon, room, cool, fruit' },
    { cat: '雙母音與其他', ipa: '/aʊ/', spell: 'ou, ow 組合', ex: 'house, mouse, cloud<br/>cow, now, town, brown' },
    { cat: '雙母音與其他', ipa: '/ɔɪ/', spell: 'oi, oy 組合', ex: 'oil, coin, voice, point<br/>boy, toy, joy, enjoy' },
    { cat: '雙母音與其他', ipa: '/ɔː/', spell: '1. au, aw 組合<br/>2. a (在 l 前，如 al, all)', ex: 'autumn, saw, draw, law<br/>all, ball, call, talk, walk' },
    { cat: 'R 控制母音', ipa: '/ɝː/ 及 /ɚ/', spell: '1. 重音節: er, ir, ur, ear<br/>2. 非重音弱化: er, or, ar', ex: 'bird, girl, nurse, early<br/>teacher, sister, water, doctor' },
    { cat: 'R 控制母音', ipa: '/ɑːr/', spell: 'ar 組合', ex: 'car, star, park, dark, yard, farm' },
    { cat: 'R 控制母音', ipa: '/ɔːr/', spell: 'or, oar, oor, our 組合', ex: 'fork, short, morning<br/>door, floor, four, board' },
    { cat: 'R 控制母音', ipa: '/ɪr/', spell: 'eer, ear, ere 組合', ex: 'deer, ear, hear, clear, here' },
    { cat: 'R 控制母音', ipa: '/ɛr/', spell: '1. air, are 組合<br/>2. ear / ere (特例)', ex: 'chair, hair, care, share<br/>bear, wear, pear, there, where' },
    { cat: '弱化輕母音', ipa: '/ə/ 及 /ɪ/', spell: '非重音音節之任意母音', ex: 'banana /bəˈnæn.ə/, open /ˈoʊ.pən/<br/>pencil /ˈpɛn.səl/, lemon /ˈlɛm.ən/' }
  ],

  ipaConsonants: [
    { grp: '雙唇塞音', ipa: '無聲 /p/ · 有聲 /b/', spell: 'p, pp · b, bb', ex: 'pen, pig, stop · bag, bed, rabbit' },
    { grp: '齒齦塞音', ipa: '無聲 /t/ · 有聲 /d/', spell: 't, tt · d, dd', ex: 'ten, top, cat · dog, duck, red' },
    { grp: '軟顎塞音', ipa: '無聲 /k/ · 有聲 /ɡ/', spell: 'k, c, ck · g, gg', ex: 'kid, cat, duck · go, girl, big' },
    { grp: '唇齒擦音', ipa: '無聲 /f/ · 有聲 /v/', spell: 'f, ff, ph · v, ve', ex: 'fan, fish, photo · van, vest, have' },
    { grp: '齒間擦音', ipa: '無聲 /θ/ · 有聲 /ð/', spell: 'th (無聲) · th (有聲)', ex: 'thank, think, three · this, that, mother' },
    { grp: '齒齦擦音', ipa: '無聲 /s/ · 有聲 /z/', spell: 's, ss, c · z, s', ex: 'sun, bus, city · zoo, zero, nose' },
    { grp: '硬顎擦音', ipa: '無聲 /ʃ/ · 有聲 /ʒ/', spell: 'sh, ti, ci, si · s, ge', ex: 'ship, shoe, nation · television, usually' },
    { grp: '破擦音', ipa: '無聲 /tʃ/ · 有聲 /dʒ/', spell: 'ch, tch · j, g, dge', ex: 'chair, watch, rich · jump, giant, bridge' },
    { grp: '雙唇鼻音', ipa: '/m/', spell: 'm, mm, -mb(靜音b)', ex: 'man, milk, summer, climb, lamb' },
    { grp: '齒齦鼻音', ipa: '/n/', spell: 'n, nn, kn-(靜音k)', ex: 'no, name, dinner, know, knee' },
    { grp: '軟顎鼻音 (單音)', ipa: '/ŋ/', spell: 'ng (字尾/詞幹末)', ex: 'sing, song, ring, king, long' },
    { grp: '軟顎鼻音叢 (複合)', ipa: '/ŋk/ 或 /ŋɡ/', spell: 'nk 發 /ŋk/<br/>ng 接母音常發 /ŋɡ/', ex: 'bank, thank, pink, think<br/>finger, anger, English' },
    { grp: '舌側流音', ipa: '/l/', spell: 'l, ll (含淺音與深音 dark l)', ex: 'leg, light, ball, bell, milk' },
    { grp: '齒齦捲舌音', ipa: '/r/', spell: 'r, rr, wr-(靜音w)', ex: 'red, run, sorry, write, wrong' },
    { grp: '美式音變 (Flap T)', ipa: '/t/ 閃音 (輕彈音)', spell: '母音間非重音 t, tt, dd', ex: 'water, better, city, butter, letter' }
  ]
};
