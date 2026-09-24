export interface SongWord {
  id: string;
  word: string;
  cleanWord: string;
  ipa: string;
  chinese: string;
  syllables?: string[];
  ruleCodes?: string[];
  pos?: string;
  level?: '國中基礎' | '高中精選' | '歌曲核心';
}

export interface SongLine {
  id: number;
  english: string;
  chinese: string;
  words: SongWord[];
}

export interface SongItem {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: string;
  genre: string;
  coverEmoji: string;
  accentColor: string;
  description: string;
  totalLines: number;
  totalWords: number;
  lines: SongLine[];
  vocabulary: SongWord[];
}

// 歌詞單字庫字典（含音標、音節拆解、中文意義、詞性與發音法則）
const WORD_DICT: Record<string, Omit<SongWord, 'id' | 'word' | 'cleanWord'>> = {
  we: { ipa: '/wiː/', chinese: '我們', pos: 'pron.', syllables: ['we'], ruleCodes: ['R03'], level: '國中基礎' },
  were: { ipa: '/wɜːr/', chinese: '是(過去式)', pos: 'v.', syllables: ['were'], ruleCodes: ['R05'], level: '國中基礎' },
  both: { ipa: '/boʊθ/', chinese: '兩者都', pos: 'pron./adj.', syllables: ['both'], ruleCodes: ['R02', 'R08'], level: '國中基礎' },
  young: { ipa: '/jʌŋ/', chinese: '年輕的；年少輕狂的', pos: 'adj.', syllables: ['young'], ruleCodes: ['R01', 'R10'], level: '國中基礎' },
  when: { ipa: '/wen/', chinese: '當…之時', pos: 'conj.', syllables: ['when'], ruleCodes: ['R01', 'R09'], level: '國中基礎' },
  i: { ipa: '/aɪ/', chinese: '我', pos: 'pron.', syllables: ['i'], ruleCodes: ['R03'], level: '國中基礎' },
  first: { ipa: '/fɜːrst/', chinese: '最初；第一', pos: 'adv./adj.', syllables: ['first'], ruleCodes: ['R05'], level: '國中基礎' },
  saw: { ipa: '/sɔː/', chinese: '看見(過去式)', pos: 'v.', syllables: ['saw'], ruleCodes: ['R04'], level: '國中基礎' },
  you: { ipa: '/juː/', chinese: '你/你們', pos: 'pron.', syllables: ['you'], ruleCodes: ['R03'], level: '國中基礎' },
  close: { ipa: '/kloʊz/', chinese: '閉上；關閉', pos: 'v.', syllables: ['close'], ruleCodes: ['R02'], level: '國中基礎' },
  my: { ipa: '/maɪ/', chinese: '我的', pos: 'pron.', syllables: ['my'], ruleCodes: ['R03'], level: '國中基礎' },
  eyes: { ipa: '/aɪz/', chinese: '眼睛(複數)', pos: 'n.', syllables: ['eyes'], ruleCodes: ['R03'], level: '國中基礎' },
  and: { ipa: '/ænd/', chinese: '和；然後', pos: 'conj.', syllables: ['and'], ruleCodes: ['R01'], level: '國中基礎' },
  the: { ipa: '/ðə/', chinese: '這；那', pos: 'art.', syllables: ['the'], ruleCodes: ['R08'], level: '國中基礎' },
  flashback: { ipa: '/ˈflæʃ.bæk/', chinese: '往事閃現；倒敘回想', pos: 'n.', syllables: ['flash', 'back'], ruleCodes: ['R01', 'R07'], level: '高中精選' },
  starts: { ipa: '/stɑːrts/', chinese: '開始', pos: 'v.', syllables: ['starts'], ruleCodes: ['R05'], level: '國中基礎' },
  standing: { ipa: '/ˈstæn.dɪŋ/', chinese: '站著', pos: 'v.', syllables: ['stand', 'ing'], ruleCodes: ['R01', 'R10'], level: '國中基礎' },
  there: { ipa: '/ðer/', chinese: '在那裡', pos: 'adv.', syllables: ['there'], ruleCodes: ['R08'], level: '國中基礎' },
  on: { ipa: '/ɑːn/', chinese: '在…之上', pos: 'prep.', syllables: ['on'], ruleCodes: ['R01'], level: '國中基礎' },
  a: { ipa: '/ə/', chinese: '一個', pos: 'art.', syllables: ['a'], ruleCodes: ['R11'], level: '國中基礎' },
  balcony: { ipa: '/ˈbæl.kə.ni/', chinese: '陽台；露台', pos: 'n.', syllables: ['bal', 'co', 'ny'], ruleCodes: ['R01', 'R11', 'R03'], level: '高中精選' },
  in: { ipa: '/ɪn/', chinese: '在…之中', pos: 'prep.', syllables: ['in'], ruleCodes: ['R01'], level: '國中基礎' },
  summer: { ipa: '/ˈsʌm.ər/', chinese: '夏天；夏日', pos: 'n.', syllables: ['sum', 'mer'], ruleCodes: ['R01', 'R05'], level: '國中基礎' },
  air: { ipa: '/er/', chinese: '空氣；微風', pos: 'n.', syllables: ['air'], ruleCodes: ['R04'], level: '國中基礎' },
  see: { ipa: '/siː/', chinese: '看見；見到', pos: 'v.', syllables: ['see'], ruleCodes: ['R03'], level: '國中基礎' },
  lights: { ipa: '/laɪts/', chinese: '燈光；亮光', pos: 'n.', syllables: ['lights'], ruleCodes: ['R02', 'R07'], level: '國中基礎' },
  party: { ipa: '/ˈpɑːr.ti/', chinese: '派對；宴會', pos: 'n.', syllables: ['par', 'ty'], ruleCodes: ['R05', 'R03'], level: '國中基礎' },
  ballgowns: { ipa: '/ˈbɔːl.ɡaʊnz/', chinese: '舞會禮服；晚禮服', pos: 'n.', syllables: ['ball', 'gowns'], ruleCodes: ['R04', 'R04'], level: '歌曲核心' },
  make: { ipa: '/meɪk/', chinese: '前往；做出', pos: 'v.', syllables: ['make'], ruleCodes: ['R02'], level: '國中基礎' },
  your: { ipa: '/jʊr/', chinese: '你的', pos: 'pron.', syllables: ['your'], ruleCodes: ['R05'], level: '國中基礎' },
  way: { ipa: '/weɪ/', chinese: '道路；步伐', pos: 'n.', syllables: ['way'], ruleCodes: ['R03'], level: '國中基礎' },
  to: { ipa: '/tuː/', chinese: '向；朝著', pos: 'prep.', syllables: ['to'], ruleCodes: ['R03'], level: '國中基礎' },
  crowd: { ipa: '/kraʊd/', chinese: '人群；群眾', pos: 'n.', syllables: ['crowd'], ruleCodes: ['R04'], level: '國中基礎' },
  say: { ipa: '/seɪ/', chinese: '說；問候', pos: 'v.', syllables: ['say'], ruleCodes: ['R03'], level: '國中基礎' },
  hello: { ipa: '/həˈloʊ/', chinese: '哈囉；問好', pos: 'interj.', syllables: ['hel', 'lo'], ruleCodes: ['R01', 'R03'], level: '國中基礎' },
  little: { ipa: '/ˈlɪt.əl/', chinese: '幾乎沒有；一點點', pos: 'adv./adj.', syllables: ['lit', 'tle'], ruleCodes: ['R01', 'R12'], level: '國中基礎' },
  did: { ipa: '/dɪd/', chinese: '做(助動詞過去式)', pos: 'aux.', syllables: ['did'], ruleCodes: ['R01'], level: '國中基礎' },
  know: { ipa: '/noʊ/', chinese: '知道；知曉', pos: 'v.', syllables: ['know'], ruleCodes: ['R03', 'R07'], level: '國中基礎' },
  that: { ipa: '/ðæt/', chinese: '那是；那件事', pos: 'conj.', syllables: ['that'], ruleCodes: ['R01', 'R08'], level: '國中基礎' },
  romeo: { ipa: '/ˈroʊ.mi.oʊ/', chinese: '羅密歐(莎劇主角，喻情人)', pos: 'n.', syllables: ['Ro', 'me', 'o'], ruleCodes: ['R03'], level: '歌曲核心' },
  throwing: { ipa: '/ˈθroʊ.ɪŋ/', chinese: '投擲；丟(石子)', pos: 'v.', syllables: ['throw', 'ing'], ruleCodes: ['R08', 'R03', 'R10'], level: '國中基礎' },
  pebbles: { ipa: '/ˈpeb.əlz/', chinese: '小石子；鵝卵石', pos: 'n.', syllables: ['peb', 'bles'], ruleCodes: ['R01', 'R12'], level: '高中精選' },
  daddy: { ipa: '/ˈdæd.i/', chinese: '爹地；爸爸', pos: 'n.', syllables: ['dad', 'dy'], ruleCodes: ['R01', 'R03'], level: '國中基礎' },
  said: { ipa: '/sed/', chinese: '說(過去式)', pos: 'v.', syllables: ['said'], ruleCodes: ['R01'], level: '國中基礎' },
  stay: { ipa: '/steɪ/', chinese: '停留；保持', pos: 'v.', syllables: ['stay'], ruleCodes: ['R03'], level: '國中基礎' },
  away: { ipa: '/əˈweɪ/', chinese: '遠離；離開', pos: 'adv.', syllables: ['a', 'way'], ruleCodes: ['R11', 'R03'], level: '國中基礎' },
  from: { ipa: '/frʌm/', chinese: '從…；遠離…', pos: 'prep.', syllables: ['from'], ruleCodes: ['R01'], level: '國中基礎' },
  juliet: { ipa: '/ˈdʒuː.li.ət/', chinese: '茱莉葉(莎劇女主角)', pos: 'n.', syllables: ['Ju', 'li', 'et'], ruleCodes: ['R03', 'R11'], level: '歌曲核心' },
  was: { ipa: '/wʌz/', chinese: '是(過去式)', pos: 'v.', syllables: ['was'], ruleCodes: ['R01'], level: '國中基礎' },
  crying: { ipa: '/ˈkraɪ.ɪŋ/', chinese: '哭泣；痛哭', pos: 'v.', syllables: ['cry', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' },
  staircase: { ipa: '/ˈster.keɪs/', chinese: '樓梯；台階', pos: 'n.', syllables: ['stair', 'case'], ruleCodes: ['R04', 'R02'], level: '高中精選' },
  begging: { ipa: '/ˈbeɡ.ɪŋ/', chinese: '懇求；乞求', pos: 'v.', syllables: ['beg', 'ging'], ruleCodes: ['R01', 'R10'], level: '高中精選' },
  please: { ipa: '/pliːz/', chinese: '請；拜託', pos: 'adv.', syllables: ['please'], ruleCodes: ['R03', 'R02'], level: '國中基礎' },
  dont: { ipa: '/doʊnt/', chinese: '不要', pos: 'aux.', syllables: ['dont'], ruleCodes: ['R02'], level: '國中基礎' },
  go: { ipa: '/ɡoʊ/', chinese: '走；離開', pos: 'v.', syllables: ['go'], ruleCodes: ['R03'], level: '國中基礎' },
  take: { ipa: '/teɪk/', chinese: '帶領；拿', pos: 'v.', syllables: ['take'], ruleCodes: ['R02'], level: '國中基礎' },
  me: { ipa: '/miː/', chinese: '我(受格)', pos: 'pron.', syllables: ['me'], ruleCodes: ['R03'], level: '國中基礎' },
  somewhere: { ipa: '/ˈsʌm.wer/', chinese: '某處；某個地方', pos: 'adv.', syllables: ['some', 'where'], ruleCodes: ['R01', 'R08'], level: '國中基礎' },
  can: { ipa: '/kæn/', chinese: '能夠；可以', pos: 'aux.', syllables: ['can'], ruleCodes: ['R01'], level: '國中基礎' },
  be: { ipa: '/biː/', chinese: '是；處於', pos: 'v.', syllables: ['be'], ruleCodes: ['R03'], level: '國中基礎' },
  alone: { ipa: '/əˈloʊn/', chinese: '單獨的；只有兩人獨處', pos: 'adj.', syllables: ['a', 'lone'], ruleCodes: ['R11', 'R02'], level: '國中基礎' },
  ill: { ipa: '/aɪl/', chinese: '我將會(I will)', pos: 'pron.+aux.', syllables: ['ill'], ruleCodes: ['R03'], level: '國中基礎' },
  waiting: { ipa: '/ˈweɪ.tɪŋ/', chinese: '等待；等候', pos: 'v.', syllables: ['wait', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' },
  all: { ipa: '/ɔːl/', chinese: '全部；所有', pos: 'pron.', syllables: ['all'], ruleCodes: ['R04'], level: '國中基礎' },
  theres: { ipa: '/ðerz/', chinese: '有(there is)', pos: 'phrase', syllables: ['theres'], ruleCodes: ['R08'], level: '國中基礎' },
  left: { ipa: '/left/', chinese: '剩下；保留', pos: 'adj./v.', syllables: ['left'], ruleCodes: ['R01'], level: '國中基礎' },
  do: { ipa: '/duː/', chinese: '做', pos: 'v.', syllables: ['do'], ruleCodes: ['R03'], level: '國中基礎' },
  is: { ipa: '/ɪz/', chinese: '是', pos: 'v.', syllables: ['is'], ruleCodes: ['R01'], level: '國中基礎' },
  run: { ipa: '/rʌn/', chinese: '奔跑；逃跑', pos: 'v.', syllables: ['run'], ruleCodes: ['R01'], level: '國中基礎' },
  youll: { ipa: '/juːl/', chinese: '你將會(You will)', pos: 'pron.+aux.', syllables: ['youll'], ruleCodes: ['R03'], level: '國中基礎' },
  prince: { ipa: '/prɪns/', chinese: '王子', pos: 'n.', syllables: ['prince'], ruleCodes: ['R01', 'R06'], level: '國中基礎' },
  princess: { ipa: '/ˈprɪn.ses/', chinese: '公主', pos: 'n.', syllables: ['prin', 'cess'], ruleCodes: ['R01', 'R06'], level: '國中基礎' },
  its: { ipa: '/ɪts/', chinese: '它是(it is)', pos: 'pron.+aux.', syllables: ['its'], ruleCodes: ['R01'], level: '國中基礎' },
  love: { ipa: '/lʌv/', chinese: '愛；愛情', pos: 'n./v.', syllables: ['love'], ruleCodes: ['R01'], level: '國中基礎' },
  story: { ipa: '/ˈstɔːr.i/', chinese: '故事', pos: 'n.', syllables: ['sto', 'ry'], ruleCodes: ['R05', 'R03'], level: '國中基礎' },
  baby: { ipa: '/ˈbeɪ.bi/', chinese: '寶貝；親愛的', pos: 'n.', syllables: ['ba', 'by'], ruleCodes: ['R03', 'R03'], level: '國中基礎' },
  just: { ipa: '/dʒʌst/', chinese: '只要；僅僅', pos: 'adv.', syllables: ['just'], ruleCodes: ['R01'], level: '國中基礎' },
  yes: { ipa: '/jes/', chinese: '願意；是的', pos: 'adv.', syllables: ['yes'], ruleCodes: ['R01'], level: '國中基礎' },
  so: { ipa: '/soʊ/', chinese: '所以；那麼', pos: 'conj.', syllables: ['so'], ruleCodes: ['R03'], level: '國中基礎' },
  sneak: { ipa: '/sniːk/', chinese: '偷溜；偷偷地走', pos: 'v.', syllables: ['sneak'], ruleCodes: ['R03'], level: '高中精選' },
  out: { ipa: '/aʊt/', chinese: '出去；到外面', pos: 'adv.', syllables: ['out'], ruleCodes: ['R04'], level: '國中基礎' },
  garden: { ipa: '/ˈɡɑːr.dən/', chinese: '花園；庭院', pos: 'n.', syllables: ['gar', 'den'], ruleCodes: ['R05', 'R11'], level: '國中基礎' },
  keep: { ipa: '/kiːp/', chinese: '保持；維持', pos: 'v.', syllables: ['keep'], ruleCodes: ['R03'], level: '國中基礎' },
  quiet: { ipa: '/ˈkwaɪ.ət/', chinese: '安靜的；小小聲的', pos: 'adj.', syllables: ['qui', 'et'], ruleCodes: ['R09', 'R03'], level: '國中基礎' },
  cause: { ipa: '/kəz/', chinese: '因為(because簡稱)', pos: 'conj.', syllables: ['cause'], ruleCodes: ['R04'], level: '國中基礎' },
  were_dead: { ipa: '/wɜːr ded/', chinese: '死定了', pos: 'phrase', syllables: ['dead'], ruleCodes: ['R01'], level: '國中基礎' },
  dead: { ipa: '/ded/', chinese: '死定了；死亡的', pos: 'adj.', syllables: ['dead'], ruleCodes: ['R01'], level: '國中基礎' },
  if: { ipa: '/ɪf/', chinese: '如果', pos: 'conj.', syllables: ['if'], ruleCodes: ['R01'], level: '國中基礎' },
  they: { ipa: '/ðeɪ/', chinese: '他們', pos: 'pron.', syllables: ['they'], ruleCodes: ['R08', 'R03'], level: '國中基礎' },
  knew: { ipa: '/nuː/', chinese: '知道(過去式)', pos: 'v.', syllables: ['knew'], ruleCodes: ['R07', 'R03'], level: '國中基礎' },
  escape: { ipa: '/ɪˈskeɪp/', chinese: '逃離；遠離', pos: 'v.', syllables: ['es', 'cape'], ruleCodes: ['R01', 'R02'], level: '高中精選' },
  this: { ipa: '/ðɪs/', chinese: '這座；這個', pos: 'pron./adj.', syllables: ['this'], ruleCodes: ['R08', 'R01'], level: '國中基礎' },
  town: { ipa: '/taʊn/', chinese: '城鎮；小鎮', pos: 'n.', syllables: ['town'], ruleCodes: ['R04'], level: '國中基礎' },
  for: { ipa: '/fɔːr/', chinese: '為了；持續(時間)', pos: 'prep.', syllables: ['for'], ruleCodes: ['R05'], level: '國中基礎' },
  while: { ipa: '/waɪl/', chinese: '一會兒；一段時間', pos: 'n.', syllables: ['while'], ruleCodes: ['R09', 'R02'], level: '國中基礎' },
  scarlet: { ipa: '/ˈskɑːr.lət/', chinese: '鮮紅色的(指紅字罪人)', pos: 'adj./n.', syllables: ['scar', 'let'], ruleCodes: ['R05', 'R01'], level: '歌曲核心' },
  letter: { ipa: '/ˈlet.ər/', chinese: '字母；信件', pos: 'n.', syllables: ['let', 'ter'], ruleCodes: ['R01', 'R05'], level: '國中基礎' },
  but: { ipa: '/bʌt/', chinese: '但是；然而', pos: 'conj.', syllables: ['but'], ruleCodes: ['R01'], level: '國中基礎' },
  everything: { ipa: '/ˈev.ri.θɪŋ/', chinese: '一切；所有事情/全部', pos: 'pron.', syllables: ['ev', 'ery', 'thing'], ruleCodes: ['R01', 'R08', 'R10'], level: '國中基礎' },
  save: { ipa: '/seɪv/', chinese: '拯救；救救', pos: 'v.', syllables: ['save'], ruleCodes: ['R02'], level: '國中基礎' },
  trying: { ipa: '/ˈtraɪ.ɪŋ/', chinese: '試著；試圖', pos: 'v.', syllables: ['try', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' },
  tell: { ipa: '/tel/', chinese: '告訴', pos: 'v.', syllables: ['tell'], ruleCodes: ['R01'], level: '國中基礎' },
  how: { ipa: '/haʊ/', chinese: '如何；怎樣', pos: 'adv.', syllables: ['how'], ruleCodes: ['R04'], level: '國中基礎' },
  feel: { ipa: '/fiːl/', chinese: '感受；感覺', pos: 'v.', syllables: ['feel'], ruleCodes: ['R03'], level: '國中基礎' },
  difficult: { ipa: '/ˈdɪf.ə.kəlt/', chinese: '艱難的；困難的', pos: 'adj.', syllables: ['dif', 'fi', 'cult'], ruleCodes: ['R01', 'R11'], level: '國中基礎' },
  real: { ipa: '/riː.əl/', chinese: '真實的；真愛的', pos: 'adj.', syllables: ['re', 'al'], ruleCodes: ['R03', 'R11'], level: '國中基礎' },
  afraid: { ipa: '/əˈfreɪd/', chinese: '害怕的；恐懼的', pos: 'adj.', syllables: ['a', 'fraid'], ruleCodes: ['R11', 'R03'], level: '國中基礎' },
  well: { ipa: '/wiːl/', chinese: '我們將(we will)', pos: 'pron.+aux.', syllables: ['well'], ruleCodes: ['R03'], level: '國中基礎' },
  mess: { ipa: '/mes/', chinese: '混亂；難關；泥沼', pos: 'n.', syllables: ['mess'], ruleCodes: ['R01'], level: '高中精選' },
  got: { ipa: '/ɡɑːt/', chinese: '變得；得到', pos: 'v.', syllables: ['got'], ruleCodes: ['R01'], level: '國中基礎' },
  tired: { ipa: '/taɪərd/', chinese: '疲倦的；厭倦的', pos: 'adj.', syllables: ['tired'], ruleCodes: ['R02', 'R05'], level: '國中基礎' },
  of: { ipa: '/ʌv/', chinese: '關於；…的', pos: 'prep.', syllables: ['of'], ruleCodes: ['R01'], level: '國中基礎' },
  wondering: { ipa: '/ˈwʌn.dɚ.ɪŋ/', chinese: '心想；納悶；猜想', pos: 'v.', syllables: ['won', 'der', 'ing'], ruleCodes: ['R01', 'R05', 'R10'], level: '高中精選' },
  ever: { ipa: '/ˈev.ɚ/', chinese: '究竟；曾經', pos: 'adv.', syllables: ['ev', 'er'], ruleCodes: ['R01', 'R05'], level: '國中基礎' },
  coming: { ipa: '/ˈkʌm.ɪŋ/', chinese: '前來；到來', pos: 'v.', syllables: ['com', 'ing'], ruleCodes: ['R01', 'R10'], level: '國中基礎' },
  around: { ipa: '/əˈraʊnd/', chinese: '過來；在周圍', pos: 'adv.', syllables: ['a', 'round'], ruleCodes: ['R11', 'R04'], level: '國中基礎' },
  faith: { ipa: '/feɪθ/', chinese: '信念；信心；信任', pos: 'n.', syllables: ['faith'], ruleCodes: ['R03', 'R08'], level: '高中精選' },
  fading: { ipa: '/ˈfeɪ.dɪŋ/', chinese: '褪色；消逝；漸漸動搖', pos: 'v./adj.', syllables: ['fad', 'ing'], ruleCodes: ['R02', 'R10'], level: '高中精選' },
  met: { ipa: '/met/', chinese: '遇見(過去式)', pos: 'v.', syllables: ['met'], ruleCodes: ['R01'], level: '國中基礎' },
  outskirts: { ipa: '/ˈaʊt.skɜːrts/', chinese: '城郊；市郊；城外', pos: 'n.', syllables: ['out', 'skirts'], ruleCodes: ['R04', 'R05'], level: '高中精選' },
  been: { ipa: '/bɪn/', chinese: '一直(be過去分詞)', pos: 'v.', syllables: ['been'], ruleCodes: ['R03'], level: '國中基礎' },
  feeling: { ipa: '/ˈfiː.lɪŋ/', chinese: '感到；感覺', pos: 'v.', syllables: ['feel', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' },
  never: { ipa: '/ˈnev.ɚ/', chinese: '從不；絕不', pos: 'adv.', syllables: ['nev', 'er'], ruleCodes: ['R01', 'R05'], level: '國中基礎' },
  come: { ipa: '/kʌm/', chinese: '來；到來', pos: 'v.', syllables: ['come'], ruleCodes: ['R01'], level: '國中基礎' },
  head: { ipa: '/hed/', chinese: '腦海；頭部', pos: 'n.', syllables: ['head'], ruleCodes: ['R01'], level: '國中基礎' },
  think: { ipa: '/θɪŋk/', chinese: '思考；想', pos: 'v.', syllables: ['think'], ruleCodes: ['R08', 'R10'], level: '國中基礎' },
  he: { ipa: '/hiː/', chinese: '他', pos: 'pron.', syllables: ['he'], ruleCodes: ['R03'], level: '國中基礎' },
  knelt: { ipa: '/nelt/', chinese: '下跪；跪下(kneel過去式)', pos: 'v.', syllables: ['knelt'], ruleCodes: ['R07', 'R01'], level: '高中精選' },
  ground: { ipa: '/ɡraʊnd/', chinese: '地面；地上', pos: 'n.', syllables: ['ground'], ruleCodes: ['R04'], level: '國中基礎' },
  pulled: { ipa: '/pʊld/', chinese: '掏出；拉出', pos: 'v.', syllables: ['pulled'], ruleCodes: ['R01'], level: '國中基礎' },
  ring: { ipa: '/rɪŋ/', chinese: '戒指；指環', pos: 'n.', syllables: ['ring'], ruleCodes: ['R01', 'R10'], level: '國中基礎' },
  marry: { ipa: '/ˈmær.i/', chinese: '嫁給；與…結婚', pos: 'v.', syllables: ['mar', 'ry'], ruleCodes: ['R01', 'R03'], level: '國中基礎' },
  have: { ipa: '/hæv/', chinese: '必須；擁有', pos: 'v.', syllables: ['have'], ruleCodes: ['R01'], level: '國中基礎' },
  really: { ipa: '/ˈriː.ə.li/', chinese: '真地；確實', pos: 'adv.', syllables: ['re', 'al', 'ly'], ruleCodes: ['R03', 'R03'], level: '國中基礎' },
  talked: { ipa: '/tɔːkt/', chinese: '談過；談話', pos: 'v.', syllables: ['talked'], ruleCodes: ['R04'], level: '國中基礎' },
  dad: { ipa: '/dæd/', chinese: '爹地；老爸', pos: 'n.', syllables: ['dad'], ruleCodes: ['R01'], level: '國中基礎' },
  pick: { ipa: '/pɪk/', chinese: '挑選；選擇', pos: 'v.', syllables: ['pick'], ruleCodes: ['R01', 'R07'], level: '國中基礎' },
  white: { ipa: '/waɪt/', chinese: '白色的；白紗', pos: 'adj.', syllables: ['white'], ruleCodes: ['R09', 'R02'], level: '國中基礎' },
  dress: { ipa: '/dres/', chinese: '洋裝；禮服；白紗', pos: 'n.', syllables: ['dress'], ruleCodes: ['R01'], level: '國中基礎' },
  // Look What You Made Me Do 新增單字庫
  like: { ipa: '/laɪk/', chinese: '喜歡；欣悅', pos: 'v.', syllables: ['like'], ruleCodes: ['R02'], level: '國中基礎' },
  games: { ipa: '/ɡeɪmz/', chinese: '遊戲；把戲(複數)', pos: 'n.', syllables: ['games'], ruleCodes: ['R02'], level: '國中基礎' },
  tilted: { ipa: '/ˈtɪl.tɪd/', chinese: '傾斜的；不公正的', pos: 'adj.', syllables: ['til', 'ted'], ruleCodes: ['R01'], level: '高中精選' },
  stage: { ipa: '/steɪdʒ/', chinese: '舞台；舞台布景', pos: 'n.', syllables: ['stage'], ruleCodes: ['R02'], level: '國中基礎' },
  role: { ipa: '/roʊl/', chinese: '角色；扮演的人物', pos: 'n.', syllables: ['role'], ruleCodes: ['R02'], level: '國中基礎' },
  play: { ipa: '/pleɪ/', chinese: '扮演；玩耍', pos: 'v.', syllables: ['play'], ruleCodes: ['R03'], level: '國中基礎' },
  fool: { ipa: '/fuːl/', chinese: '愚者；傻子；丑角', pos: 'n.', syllables: ['fool'], ruleCodes: ['R04'], level: '國中基礎' },
  no: { ipa: '/noʊ/', chinese: '不；不是', pos: 'adv.', syllables: ['no'], ruleCodes: ['R03'], level: '國中基礎' },
  perfect: { ipa: '/ˈpɜːr.fɪkt/', chinese: '完美的；自命無瑕的', pos: 'adj.', syllables: ['per', 'fect'], ruleCodes: ['R05', 'R01'], level: '國中基礎' },
  crime: { ipa: '/kraɪm/', chinese: '罪行；犯罪', pos: 'n.', syllables: ['crime'], ruleCodes: ['R02'], level: '國中基礎' },
  laugh: { ipa: '/læf/', chinese: '冷笑；笑', pos: 'v./n.', syllables: ['laugh'], ruleCodes: ['R04'], level: '國中基礎' },
  lie: { ipa: '/laɪ/', chinese: '說謊；謊言', pos: 'v./n.', syllables: ['lie'], ruleCodes: ['R03'], level: '國中基礎' },
  gun: { ipa: '/ɡʌn/', chinese: '槍枝；手槍', pos: 'n.', syllables: ['gun'], ruleCodes: ['R01'], level: '國中基礎' },
  mine: { ipa: '/maɪn/', chinese: '我的(代名詞)', pos: 'pron.', syllables: ['mine'], ruleCodes: ['R02'], level: '國中基礎' },
  isnt: { ipa: '/ˈɪz.ənt/', chinese: '不是(is not)', pos: 'aux.', syllables: ['isnt'], ruleCodes: ['R01'], level: '國中基礎' },
  cool: { ipa: '/kuːl/', chinese: '酷的；冷靜的', pos: 'adj.', syllables: ['cool'], ruleCodes: ['R04'], level: '國中基礎' },
  oh: { ipa: '/oʊ/', chinese: '噢；哦', pos: 'interj.', syllables: ['oh'], ruleCodes: ['R03'], level: '國中基礎' },
  ooh: { ipa: '/uː/', chinese: '噢；嗚', pos: 'interj.', syllables: ['ooh'], ruleCodes: ['R04'], level: '國中基礎' },
  smarter: { ipa: '/ˈsmɑːr.tər/', chinese: '更聰明的；更明智的', pos: 'adj.', syllables: ['smar', 'ter'], ruleCodes: ['R05', 'R05'], level: '國中基礎' },
  harder: { ipa: '/ˈhɑːr.dər/', chinese: '更堅強的；更頑強的', pos: 'adj.', syllables: ['har', 'der'], ruleCodes: ['R05', 'R05'], level: '國中基礎' },
  nick: { ipa: '/nɪk/', chinese: '刻痕；最後關鍵時刻', pos: 'n.', syllables: ['nick'], ruleCodes: ['R01', 'R07'], level: '歌曲核心' },
  time: { ipa: '/taɪm/', chinese: '時間；時刻', pos: 'n.', syllables: ['time'], ruleCodes: ['R02'], level: '國中基礎' },
  honey: { ipa: '/ˈhʌn.i/', chinese: '親愛的；寶貝', pos: 'n.', syllables: ['hon', 'ey'], ruleCodes: ['R01', 'R03'], level: '國中基礎' },
  rose: { ipa: '/roʊz/', chinese: '站起；重生(rise過去式)', pos: 'v.', syllables: ['rose'], ruleCodes: ['R02'], level: '國中基礎' },
  up: { ipa: '/ʌp/', chinese: '向上；起來', pos: 'adv.', syllables: ['up'], ruleCodes: ['R01'], level: '國中基礎' },
  it: { ipa: '/ɪt/', chinese: '它', pos: 'pron.', syllables: ['it'], ruleCodes: ['R01'], level: '國中基礎' },
  ive: { ipa: '/aɪv/', chinese: '我已經(I have)', pos: 'pron.+aux.', syllables: ['ive'], ruleCodes: ['R03'], level: '國中基礎' },
  list: { ipa: '/lɪst/', chinese: '名單；清單', pos: 'n.', syllables: ['list'], ruleCodes: ['R01'], level: '國中基礎' },
  names: { ipa: '/neɪmz/', chinese: '名字(複數)', pos: 'n.', syllables: ['names'], ruleCodes: ['R02'], level: '國中基礎' },
  yours: { ipa: '/jʊrz/', chinese: '你的(所有格代名詞)', pos: 'pron.', syllables: ['yours'], ruleCodes: ['R05'], level: '國中基礎' },
  red: { ipa: '/red/', chinese: '紅色；紅色的', pos: 'adj./n.', syllables: ['red'], ruleCodes: ['R01'], level: '國中基礎' },
  underlined: { ipa: '/ˌʌn.dɚˈlaɪnd/', chinese: '劃紅線底線標記的', pos: 'adj./v.', syllables: ['un', 'der', 'lined'], ruleCodes: ['R01', 'R05', 'R02'], level: '高中精選' },
  check: { ipa: '/tʃek/', chinese: '檢查；核對', pos: 'v.', syllables: ['check'], ruleCodes: ['R01', 'R07'], level: '國中基礎' },
  once: { ipa: '/wʌns/', chinese: '一次；一遍', pos: 'adv.', syllables: ['once'], ruleCodes: ['R01'], level: '國中基礎' },
  then: { ipa: '/ðen/', chinese: '然後；接著', pos: 'adv.', syllables: ['then'], ruleCodes: ['R08', 'R01'], level: '國中基礎' },
  twice: { ipa: '/twaɪs/', chinese: '兩次；兩遍', pos: 'adv.', syllables: ['twice'], ruleCodes: ['R02'], level: '國中基礎' },
  look: { ipa: '/lʊk/', chinese: '看；注意看', pos: 'v.', syllables: ['look'], ruleCodes: ['R04'], level: '國中基礎' },
  what: { ipa: '/wʌt/', chinese: '什麼事物', pos: 'pron.', syllables: ['what'], ruleCodes: ['R09', 'R01'], level: '國中基礎' },
  made: { ipa: '/meɪd/', chinese: '迫使；逼使(make過去式)', pos: 'v.', syllables: ['made'], ruleCodes: ['R02'], level: '國中基礎' },
  kingdom: { ipa: '/ˈkɪŋ.dəm/', chinese: '王國；國度', pos: 'n.', syllables: ['king', 'dom'], ruleCodes: ['R01', 'R10'], level: '高中精選' },
  keys: { ipa: '/kiːz/', chinese: '鑰匙(複數)', pos: 'n.', syllables: ['keys'], ruleCodes: ['R03'], level: '國中基礎' },
  belonged: { ipa: '/bɪˈlɑːŋd/', chinese: '屬於(過去式)', pos: 'v.', syllables: ['be', 'longed'], ruleCodes: ['R03', 'R10'], level: '國中基礎' },
  asked: { ipa: '/æskt/', chinese: '請求；要求(過去式)', pos: 'v.', syllables: ['asked'], ruleCodes: ['R01'], level: '國中基礎' },
  place: { ipa: '/pleɪs/', chinese: '地方；容身之處', pos: 'n.', syllables: ['place'], ruleCodes: ['R02'], level: '國中基礎' },
  sleep: { ipa: '/sliːp/', chinese: '睡覺；容身借宿', pos: 'v.', syllables: ['sleep'], ruleCodes: ['R03'], level: '國中基礎' },
  locked: { ipa: '/lɑːkt/', chinese: '把…鎖住關在外面', pos: 'v.', syllables: ['locked'], ruleCodes: ['R01', 'R07'], level: '國中基礎' },
  threw: { ipa: '/θruː/', chinese: '舉辦；舉行(宴會)', pos: 'v.', syllables: ['threw'], ruleCodes: ['R08', 'R04'], level: '國中基礎' },
  feast: { ipa: '/fiːst/', chinese: '盛宴；宴席', pos: 'n.', syllables: ['feast'], ruleCodes: ['R03'], level: '高中精選' },
  world: { ipa: '/wɜːrld/', chinese: '世界；世間', pos: 'n.', syllables: ['world'], ruleCodes: ['R05'], level: '國中基礎' },
  moves: { ipa: '/muːvz/', chinese: '運轉；轉動', pos: 'v.', syllables: ['moves'], ruleCodes: ['R03'], level: '國中基礎' },
  another: { ipa: '/əˈnʌð.ɚ/', chinese: '又一個；另一個', pos: 'adj./pron.', syllables: ['a', 'noth', 'er'], ruleCodes: ['R11', 'R08', 'R05'], level: '國中基礎' },
  day: { ipa: '/deɪ/', chinese: '一天；日子', pos: 'n.', syllables: ['day'], ruleCodes: ['R03'], level: '國中基礎' },
  drama: { ipa: '/ˈdrɑː.mə/', chinese: '鬧劇；抓馬；戲劇', pos: 'n.', syllables: ['dra', 'ma'], ruleCodes: ['R01', 'R11'], level: '高中精選' },
  not: { ipa: '/nɑːt/', chinese: '不是；並非', pos: 'adv.', syllables: ['not'], ruleCodes: ['R01'], level: '國中基礎' },
  about: { ipa: '/əˈbaʊt/', chinese: '關於；心思在於', pos: 'prep.', syllables: ['a', 'bout'], ruleCodes: ['R11', 'R04'], level: '國中基礎' },
  karma: { ipa: '/ˈkɑːr.mə/', chinese: '因果報應；業報', pos: 'n.', syllables: ['kar', 'ma'], ruleCodes: ['R05', 'R11'], level: '歌曲核心' },
  one: { ipa: '/wʌn/', chinese: '一個；唯一的', pos: 'num./pron.', syllables: ['one'], ruleCodes: ['R01'], level: '國中基礎' },
  things: { ipa: '/θɪŋz/', chinese: '事情；事物(單數所有格)', pos: 'n.', syllables: ['things'], ruleCodes: ['R08', 'R10'], level: '國中基礎' },
  sure: { ipa: '/ʃʊr/', chinese: '確定的；無庸置疑的', pos: 'adj.', syllables: ['sure'], ruleCodes: ['R05'], level: '國中基礎' },
  maybe: { ipa: '/ˈmeɪ.bi/', chinese: '也許；或許', pos: 'adv.', syllables: ['may', 'be'], ruleCodes: ['R03', 'R03'], level: '國中基礎' },
  get: { ipa: '/ɡet/', chinese: '得到；自食(惡果)', pos: 'v.', syllables: ['get'], ruleCodes: ['R01'], level: '國中基礎' },
  trust: { ipa: '/trʌst/', chinese: '信任；相信', pos: 'v./n.', syllables: ['trust'], ruleCodes: ['R01'], level: '國中基礎' },
  nobody: { ipa: '/ˈnoʊ.bɑː.di/', chinese: '沒有人；誰也不', pos: 'pron.', syllables: ['no', 'bod', 'y'], ruleCodes: ['R03', 'R01', 'R03'], level: '國中基礎' },
  trusts: { ipa: '/trʌsts/', chinese: '信任(單數動詞)', pos: 'v.', syllables: ['trusts'], ruleCodes: ['R01'], level: '國中基礎' },
  actress: { ipa: '/ˈæk.trəs/', chinese: '女演員；女主角', pos: 'n.', syllables: ['ac', 'tress'], ruleCodes: ['R01', 'R11'], level: '高中精選' },
  starring: { ipa: '/ˈstɑːr.ɪŋ/', chinese: '領銜主演；主演', pos: 'v./adj.', syllables: ['star', 'ring'], ruleCodes: ['R05', 'R10'], level: '高中精選' },
  bad: { ipa: '/bæd/', chinese: '壞的；可怕的', pos: 'adj.', syllables: ['bad'], ruleCodes: ['R01'], level: '國中基礎' },
  dreams: { ipa: '/driːmz/', chinese: '夢境；噩夢(複數)', pos: 'n.', syllables: ['dreams'], ruleCodes: ['R03'], level: '國中基礎' },
  im: { ipa: '/aɪm/', chinese: '我是(I am)', pos: 'pron.+v.', syllables: ['im'], ruleCodes: ['R03'], level: '國中基礎' },
  sorry: { ipa: '/ˈsɔːr.i/', chinese: '抱歉的；不好意思的', pos: 'adj.', syllables: ['sor', 'ry'], ruleCodes: ['R05', 'R03'], level: '國中基礎' },
  old: { ipa: '/oʊld/', chinese: '以前的；舊的', pos: 'adj.', syllables: ['old'], ruleCodes: ['R02'], level: '國中基礎' },
  taylor: { ipa: '/ˈteɪ.lɚ/', chinese: '泰勒絲(歌手名)', pos: 'n.', syllables: ['Tay', 'lor'], ruleCodes: ['R03', 'R05'], level: '歌曲核心' },
  cant: { ipa: '/kænt/', chinese: '不能；無法(can not)', pos: 'aux.', syllables: ['cant'], ruleCodes: ['R01'], level: '國中基礎' },
  thirteen: { ipa: '/ˌθɜːrˈtiːn/', chinese: '十三(歲)', pos: 'num.', syllables: ['thir', 'teen'], ruleCodes: ['R05', 'R03'], level: '國中基礎' },
  school: { ipa: '/skuːl/', chinese: '學校', pos: 'n.', syllables: ['school'], ruleCodes: ['R04'], level: '國中基礎' },
  heard: { ipa: '/hɜːrd/', chinese: '聽見(過去式)', pos: 'v.', syllables: ['heard'], ruleCodes: ['R05'], level: '國中基礎' },
  laughing: { ipa: '/ˈlæf.ɪŋ/', chinese: '笑聲；歡笑著', pos: 'v./n.', syllables: ['laugh', 'ing'], ruleCodes: ['R01', 'R10'], level: '國中基礎' },
  thousands: { ipa: '/ˈθaʊ.zəndz/', chinese: '成千上萬；數以千計', pos: 'n.', syllables: ['thou', 'sands'], ruleCodes: ['R04', 'R01'], level: '國中基礎' },
  listening: { ipa: '/ˈlɪs.ən.ɪŋ/', chinese: '傾聽；聆聽', pos: 'v.', syllables: ['lis', 'ten', 'ing'], ruleCodes: ['R01', 'R10'], level: '國中基礎' },
  stories: { ipa: '/ˈstɔː.riːz/', chinese: '故事(複數)', pos: 'n.', syllables: ['sto', 'ries'], ruleCodes: ['R05', 'R03'], level: '國中基礎' },
  wisdom: { ipa: '/ˈwɪz.dəm/', chinese: '智慧', pos: 'n.', syllables: ['wis', 'dom'], ruleCodes: ['R01', 'R11'], level: '高中精選' },
  kids: { ipa: '/kɪdz/', chinese: '孩童(複數)', pos: 'n.', syllables: ['kids'], ruleCodes: ['R01'], level: '國中基礎' },
  understand: { ipa: '/ˌʌn.dərˈstænd/', chinese: '理解；明白', pos: 'v.', syllables: ['un', 'der', 'stand'], ruleCodes: ['R01', 'R05'], level: '國中基礎' },
  passed: { ipa: '/pæst/', chinese: '流逝；經過(過去式)', pos: 'v.', syllables: ['passed'], ruleCodes: ['R01'], level: '國中基礎' },
  quickly: { ipa: '/ˈkwɪk.li/', chinese: '快速地', pos: 'adv.', syllables: ['quick', 'ly'], ruleCodes: ['R01', 'R03'], level: '國中基礎' },
  turned: { ipa: '/tɜːrnd/', chinese: '轉變；變成', pos: 'v.', syllables: ['turned'], ruleCodes: ['R05'], level: '國中基礎' },
  night: { ipa: '/naɪt/', chinese: '夜晚', pos: 'n.', syllables: ['night'], ruleCodes: ['R02', 'R07'], level: '國中基礎' },
  everyone: { ipa: '/ˈev.ri.wʌn/', chinese: '每個人；所有人', pos: 'pron.', syllables: ['ev', 'ry', 'one'], ruleCodes: ['R01', 'R03'], level: '國中基礎' },
  hungry: { ipa: '/ˈhʌŋ.ɡri/', chinese: '飢餓的', pos: 'adj.', syllables: ['hun', 'gry'], ruleCodes: ['R01', 'R03'], level: '國中基礎' },
  food: { ipa: '/fuːd/', chinese: '食物', pos: 'n.', syllables: ['food'], ruleCodes: ['R04'], level: '國中基礎' },
  sight: { ipa: '/saɪt/', chinese: '視野；看見', pos: 'n.', syllables: ['sight'], ruleCodes: ['R02', 'R07'], level: '國中基礎' },
  lunchbox: { ipa: '/ˈlʌntʃ.bɑːks/', chinese: '午餐盒；便當盒', pos: 'n.', syllables: ['lunch', 'box'], ruleCodes: ['R01'], level: '國中基礎' },
  fed: { ipa: '/fed/', chinese: '餵飽；餵養(過去分詞)', pos: 'v.', syllables: ['fed'], ruleCodes: ['R01'], level: '國中基礎' },
  twinkling: { ipa: '/ˈtwɪŋ.kəl.ɪŋ/', chinese: '閃爍的；精光閃閃的', pos: 'adj./v.', syllables: ['twin', 'kling'], ruleCodes: ['R01', 'R10'], level: '高中精選' },
  jesus: { ipa: '/ˈdʒiː.zəs/', chinese: '耶穌', pos: 'n.', syllables: ['Je', 'sus'], ruleCodes: ['R03', 'R11'], level: '歌曲核心' },
  kindness: { ipa: '/ˈkaɪnd.nəs/', chinese: '慈愛；仁慈', pos: 'n.', syllables: ['kind', 'ness'], ruleCodes: ['R02', 'R01'], level: '高中精選' },
  smile: { ipa: '/smaɪl/', chinese: '微笑', pos: 'n./v.', syllables: ['smile'], ruleCodes: ['R02'], level: '國中基礎' },
  cried: { ipa: '/kraɪd/', chinese: '喊叫；高喊(過去式)', pos: 'v.', syllables: ['cried'], ruleCodes: ['R03'], level: '國中基礎' },
  loaves: { ipa: '/loʊvz/', chinese: '麵包條(複數)', pos: 'n.', syllables: ['loaves'], ruleCodes: ['R03'], level: '歌曲核心' },
  fishes: { ipa: '/ˈfɪʃ.ɪz/', chinese: '魚(複數)', pos: 'n.', syllables: ['fish', 'es'], ruleCodes: ['R01', 'R07'], level: '國中基礎' },
  surrender: { ipa: '/səˈren.dər/', chinese: '完全奉獻；交託臣服', pos: 'v.', syllables: ['sur', 'ren', 'der'], ruleCodes: ['R05', 'R01'], level: '高中精選' },
  fears: { ipa: '/fɪərz/', chinese: '恐懼(複數)', pos: 'n.', syllables: ['fears'], ruleCodes: ['R03'], level: '國中基礎' },
  inhibitions: { ipa: '/ˌɪn.hɪˈbɪʃ.ənz/', chinese: '顧忌；拘束感', pos: 'n.', syllables: ['in', 'hi', 'bi', 'tions'], ruleCodes: ['R01', 'R11'], level: '歌曲核心' },
  burdens: { ipa: '/ˈbɜːr.dənz/', chinese: '重擔；負擔', pos: 'n.', syllables: ['bur', 'dens'], ruleCodes: ['R05', 'R01'], level: '高中精選' },
  ambitions: { ipa: '/æmˈbɪʃ.ənz/', chinese: '野心；雄心抱負', pos: 'n.', syllables: ['am', 'bi', 'tions'], ruleCodes: ['R01', 'R11'], level: '高中精選' },
  feed: { ipa: '/fiːd/', chinese: '餵養；供給食物', pos: 'v.', syllables: ['feed'], ruleCodes: ['R03'], level: '國中基礎' },
  often: { ipa: '/ˈɑːf.ən/', chinese: '經常；常常', pos: 'adv.', syllables: ['of', 'ten'], ruleCodes: ['R01', 'R11'], level: '國中基礎' },
  small: { ipa: '/smɔːl/', chinese: '渺小的；小小的', pos: 'adj.', syllables: ['small'], ruleCodes: ['R04'], level: '國中基礎' },
  worry: { ipa: '/ˈwɜːr.i/', chinese: '擔心；憂心', pos: 'v.', syllables: ['wor', 'ry'], ruleCodes: ['R05', 'R03'], level: '國中基礎' },
  work: { ipa: '/wɜːrk/', chinese: '工作；努力；付出的心血', pos: 'n.', syllables: ['work'], ruleCodes: ['R05'], level: '國中基礎' },
  means: { ipa: '/miːnz/', chinese: '意味著；代表', pos: 'v.', syllables: ['means'], ruleCodes: ['R03'], level: '國中基礎' },
  nothing: { ipa: '/ˈnʌθ.ɪŋ/', chinese: '毫無意義；沒有什麼', pos: 'pron.', syllables: ['noth', 'ing'], ruleCodes: ['R01', 'R08', 'R10'], level: '國中基礎' },
  phone: { ipa: '/foʊn/', chinese: '電話；接電話', pos: 'n.', syllables: ['phone'], ruleCodes: ['R02'], level: '國中基礎' },
  right: { ipa: '/raɪt/', chinese: '立刻；正', pos: 'adv.', syllables: ['right'], ruleCodes: ['R02', 'R07'], level: '國中基礎' },
  now: { ipa: '/naʊ/', chinese: '現在', pos: 'adv.', syllables: ['now'], ruleCodes: ['R04'], level: '國中基礎' },
  why: { ipa: '/waɪ/', chinese: '為什麼；何故', pos: 'adv.', syllables: ['why'], ruleCodes: ['R09', 'R03'], level: '國中基礎' },
  shes: { ipa: '/ʃiːz/', chinese: '她是(she is)', pos: 'pron.+v.', syllables: ['shes'], ruleCodes: ['R03'], level: '國中基礎' }
};

// Shake It Off, WANEGBT, You Belong With Me 新增詞彙（使用陣列以防物件重複鍵名）
const EXTRA_SONG_WORDS: [string, Omit<SongWord, 'id' | 'word' | 'cleanWord'>][] = [
  ['stay', { ipa: '/steɪ/', chinese: '停留；待著', pos: 'v.', syllables: ['stay'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['late', { ipa: '/leɪt/', chinese: '遲的；晚的', pos: 'adj./adv.', syllables: ['late'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['brain', { ipa: '/breɪn/', chinese: '腦袋；大腦', pos: 'n.', syllables: ['brain'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['say', { ipa: '/seɪ/', chinese: '說；言道', pos: 'v.', syllables: ['say'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['too', { ipa: '/tuː/', chinese: '太；過於', pos: 'adv.', syllables: ['too'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['many', { ipa: '/ˈmen.i/', chinese: '許多的', pos: 'adj.', syllables: ['man', 'y'], ruleCodes: ['R01', 'R03'], level: '國中基礎' }],
  ['dates', { ipa: '/deɪts/', chinese: '約會(複數)', pos: 'n.', syllables: ['dates'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['least', { ipa: '/liːst/', chinese: '至少(at least)', pos: 'adv.', syllables: ['least'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['cruising', { ipa: '/ˈkruː.zɪŋ/', chinese: '自在漫步；悠然航行', pos: 'v.', syllables: ['cruis', 'ing'], ruleCodes: ['R04', 'R10'], level: '高中精選' }],
  ['moving', { ipa: '/ˈmuː.vɪŋ/', chinese: '律動；舞動', pos: 'v.', syllables: ['mov', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' }],
  ['mind', { ipa: '/maɪnd/', chinese: '心神；腦海', pos: 'n.', syllables: ['mind'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['saying', { ipa: '/ˈseɪ.ɪŋ/', chinese: '唱著；說著', pos: 'v.', syllables: ['say', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' }],
  ['gonna', { ipa: '/ˈɡɑː.nə/', chinese: '將要(going to口語)', pos: 'aux.', syllables: ['gon', 'na'], ruleCodes: ['R01', 'R11'], level: '國中基礎' }],
  ['alright', { ipa: '/ɔːlˈraɪt/', chinese: '沒事的；安好無恙', pos: 'adj./adv.', syllables: ['al', 'right'], ruleCodes: ['R04', 'R02', 'R07'], level: '國中基礎' }],
  ['players', { ipa: '/ˈpleɪ.ərz/', chinese: '情場浪子；玩家', pos: 'n.', syllables: ['play', 'ers'], ruleCodes: ['R03', 'R05'], level: '歌曲核心' }],
  ['haters', { ipa: '/ˈheɪ.tərz/', chinese: '酸民；黑粉', pos: 'n.', syllables: ['ha', 'ters'], ruleCodes: ['R02', 'R05'], level: '歌曲核心' }],
  ['hate', { ipa: '/heɪt/', chinese: '討厭；憎恨', pos: 'v.', syllables: ['hate'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['shake', { ipa: '/ʃeɪk/', chinese: '搖擺；甩開', pos: 'v.', syllables: ['shake'], ruleCodes: ['R02', 'R07'], level: '歌曲核心' }],
  ['off', { ipa: '/ɔːf/', chinese: '甩掉；脫離', pos: 'adv./prep.', syllables: ['off'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['heartbreakers', { ipa: '/ˈhɑːrtˌbreɪ.kɚz/', chinese: '負心漢；心碎製造者', pos: 'n.', syllables: ['heart', 'break', 'ers'], ruleCodes: ['R05', 'R03', 'R05'], level: '高中精選' }],
  ['fakers', { ipa: '/ˈfeɪ.kərz/', chinese: '偽裝者；裝模作樣者', pos: 'n.', syllables: ['fa', 'kers'], ruleCodes: ['R02', 'R05'], level: '高中精選' }],
  ['fake', { ipa: '/feɪk/', chinese: '偽裝；假造', pos: 'v./adj.', syllables: ['fake'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['never', { ipa: '/ˈnev.ɚ/', chinese: '從不；絕不', pos: 'adv.', syllables: ['nev', 'er'], ruleCodes: ['R01', 'R05'], level: '國中基礎' }],
  ['miss', { ipa: '/mɪs/', chinese: '錯過；想念', pos: 'v.', syllables: ['miss'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['beat', { ipa: '/biːt/', chinese: '節奏；節拍', pos: 'n.', syllables: ['beat'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['lightning', { ipa: '/ˈlaɪt.nɪŋ/', chinese: '閃電；迅捷如雷', pos: 'n.', syllables: ['light', 'ning'], ruleCodes: ['R02', 'R07', 'R10'], level: '高中精選' }],
  ['feet', { ipa: '/fiːt/', chinese: '雙腳(foot複數)', pos: 'n.', syllables: ['feet'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['dancing', { ipa: '/ˈdæn.sɪŋ/', chinese: '跳舞；起舞', pos: 'v.', syllables: ['dan', 'cing'], ruleCodes: ['R01', 'R10'], level: '國中基礎' }],
  ['own', { ipa: '/oʊn/', chinese: '自己的；獨自一人', pos: 'adj./pron.', syllables: ['own'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['grooving', { ipa: '/ˈɡruː.vɪŋ/', chinese: '盡情律動；享受節奏', pos: 'v.', syllables: ['groov', 'ing'], ruleCodes: ['R04', 'R10'], level: '高中精選' }],
  ['hey', { ipa: '/heɪ/', chinese: '嘿！(招呼/感嘆詞)', pos: 'interj.', syllables: ['hey'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['think', { ipa: '/θɪŋk/', chinese: '思考；想想', pos: 'v.', syllables: ['think'], ruleCodes: ['R08', 'R10'], level: '國中基礎' }],
  ['while', { ipa: '/waɪl/', chinese: '當…的時候', pos: 'conj.', syllables: ['while'], ruleCodes: ['R09', 'R02'], level: '國中基礎' }],
  ['youve', { ipa: '/juːv/', chinese: '你已經(you have)', pos: 'pron.+aux.', syllables: ['youve'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['been', { ipa: '/bɪn/', chinese: '一直以來；是(過去分詞)', pos: 'v.', syllables: ['been'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['getting', { ipa: '/ˈɡet.ɪŋ/', chinese: '變得；沉溺於', pos: 'v.', syllables: ['get', 'ting'], ruleCodes: ['R01', 'R10'], level: '國中基礎' }],
  ['down', { ipa: '/daʊn/', chinese: '低落；沮喪；嗨起來', pos: 'adv./adj.', syllables: ['down'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['out', { ipa: '/aʊt/', chinese: '在外；徹底', pos: 'adv.', syllables: ['out'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['liars', { ipa: '/ˈlaɪ.ərz/', chinese: '說謊者；騙子', pos: 'n.', syllables: ['li', 'ars'], ruleCodes: ['R03', 'R05'], level: '高中精選' }],
  ['dirty', { ipa: '/ˈdɝː.t̬i/', chinese: '卑鄙的；骯髒的', pos: 'adj.', syllables: ['dir', 'ty'], ruleCodes: ['R05', 'R03'], level: '國中基礎' }],
  ['cheats', { ipa: '/tʃiːts/', chinese: '欺騙者；騙徒', pos: 'n.', syllables: ['cheats'], ruleCodes: ['R07', 'R03'], level: '高中精選' }],
  ['couldve', { ipa: '/ˈkʊd.əv/', chinese: '本來可以(could have)', pos: 'aux.', syllables: ['couldve'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['sick', { ipa: '/sɪk/', chinese: '超酷的；超讚的', pos: 'adj.', syllables: ['sick'], ruleCodes: ['R01', 'R07'], level: '歌曲核心' }],
  ['exman', { ipa: '/ˌeksˈmæn/', chinese: '前男友；前夫', pos: 'n.', syllables: ['ex', 'man'], ruleCodes: ['R01', 'R01'], level: '歌曲核心' }],
  ['brought', { ipa: '/brɔːt/', chinese: '帶來(bring過去式)', pos: 'v.', syllables: ['brought'], ruleCodes: ['R04', 'R07'], level: '國中基礎' }],
  ['his', { ipa: '/hɪz/', chinese: '他的', pos: 'pron.', syllables: ['his'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['new', { ipa: '/nuː/', chinese: '新的；新歡', pos: 'adj.', syllables: ['new'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['girlfriend', { ipa: '/ˈɡɝːl.frend/', chinese: '女朋友', pos: 'n.', syllables: ['girl', 'friend'], ruleCodes: ['R05', 'R01'], level: '國中基礎' }],
  ['god', { ipa: '/ɡɑːd/', chinese: '上帝；天哪', pos: 'n.', syllables: ['god'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['fella', { ipa: '/ˈfel.ə/', chinese: '帥哥；傢伙', pos: 'n.', syllables: ['fel', 'la'], ruleCodes: ['R01', 'R11'], level: '歌曲核心' }],
  ['hella', { ipa: '/ˈhel.ə/', chinese: '超級；極度(俚語)', pos: 'adv.', syllables: ['hel', 'la'], ruleCodes: ['R01', 'R11'], level: '歌曲核心' }],
  ['hair', { ipa: '/her/', chinese: '頭髮；髮型', pos: 'n.', syllables: ['hair'], ruleCodes: ['R03', 'R05'], level: '國中基礎' }],
  ['wont', { ipa: '/woʊnt/', chinese: '不會(will not)', pos: 'aux.', syllables: ['wont'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['over', { ipa: '/ˈoʊ.vɚ/', chinese: '過來；在那邊', pos: 'adv.', syllables: ['o', 'ver'], ruleCodes: ['R03', 'R05'], level: '國中基礎' }],
  ['remember', { ipa: '/rɪˈmem.bɚ/', chinese: '記得；想起', pos: 'v.', syllables: ['re', 'mem', 'ber'], ruleCodes: ['R03', 'R01', 'R05'], level: '國中基礎' }],
  ['broke', { ipa: '/broʊk/', chinese: '分手；破裂(break過去式)', pos: 'v.', syllables: ['broke'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['enough', { ipa: '/ɪˈnʌf/', chinese: '足夠；受夠了', pos: 'adv./adj.', syllables: ['e', 'nough'], ruleCodes: ['R03', 'R01'], level: '國中基礎' }],
  ['hadnt', { ipa: '/ˈhæd.ənt/', chinese: '尚未(had not)', pos: 'aux.', syllables: ['hadnt'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['seen', { ipa: '/siːn/', chinese: '看見(過去分詞)', pos: 'v.', syllables: ['seen'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['each', { ipa: '/iːtʃ/', chinese: '彼此；各個', pos: 'pron./adj.', syllables: ['each'], ruleCodes: ['R03', 'R07'], level: '國中基礎' }],
  ['other', { ipa: '/ˈʌð.ɚ/', chinese: '對方；其他', pos: 'pron.', syllables: ['oth', 'er'], ruleCodes: ['R01', 'R08', 'R05'], level: '國中基礎' }],
  ['month', { ipa: '/mʌnθ/', chinese: '月份；一個月', pos: 'n.', syllables: ['month'], ruleCodes: ['R01', 'R08'], level: '國中基礎' }],
  ['needed', { ipa: '/ˈniː.dɪd/', chinese: '需要(過去式)', pos: 'v.', syllables: ['nee', 'ded'], ruleCodes: ['R03', 'R01'], level: '國中基礎' }],
  ['space', { ipa: '/speɪs/', chinese: '個人空間；距離', pos: 'n.', syllables: ['space'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['around', { ipa: '/əˈraʊnd/', chinese: '轉身回頭；周圍', pos: 'adv.', syllables: ['a', 'round'], ruleCodes: ['R11', 'R04'], level: '國中基礎' }],
  ['swear', { ipa: '/swer/', chinese: '發誓；承諾', pos: 'v.', syllables: ['swear'], ruleCodes: ['R03', 'R05'], level: '國中基礎' }],
  ['change', { ipa: '/tʃeɪndʒ/', chinese: '改變；改過', pos: 'v.', syllables: ['change'], ruleCodes: ['R07', 'R02'], level: '國中基礎' }],
  ['lasted', { ipa: '/ˈlæs.tɪd/', chinese: '持續；維持(過去式)', pos: 'v.', syllables: ['las', 'ted'], ruleCodes: ['R01', 'R01'], level: '國中基礎' }],
  ['called', { ipa: '/kɔːld/', chinese: '打電話；宣布(過去式)', pos: 'v.', syllables: ['called'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['telling', { ipa: '/ˈtel.ɪŋ/', chinese: '鄭重告知；訴說', pos: 'v.', syllables: ['tel', 'ling'], ruleCodes: ['R01', 'R10'], level: '國中基礎' }],
  ['ever', { ipa: '/ˈev.ɚ/', chinese: '永遠；曾經', pos: 'adv.', syllables: ['ev', 'er'], ruleCodes: ['R01', 'R05'], level: '國中基礎' }],
  ['together', { ipa: '/təˈɡeð.ɚ/', chinese: '復合；在一起', pos: 'adv.', syllables: ['to', 'geth', 'er'], ruleCodes: ['R04', 'R01', 'R08', 'R05'], level: '國中基礎' }],
  ['talk', { ipa: '/tɔːk/', chinese: '傾訴；交談', pos: 'v.', syllables: ['talk'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['friends', { ipa: '/frendz/', chinese: '朋友們', pos: 'n.', syllables: ['friends'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['really', { ipa: '/ˈriː.ə.li/', chinese: '真的很；確實在', pos: 'adv.', syllables: ['real', 'ly'], ruleCodes: ['R03', 'R03'], level: '國中基礎' }],
  ['picking', { ipa: '/ˈpɪk.ɪŋ/', chinese: '無事挑起(爭端)', pos: 'v.', syllables: ['pick', 'ing'], ruleCodes: ['R01', 'R07', 'R10'], level: '高中精選' }],
  ['fights', { ipa: '/faɪts/', chinese: '爭吵；爭端(複數)', pos: 'n.', syllables: ['fights'], ruleCodes: ['R02', 'R07'], level: '國中基礎' }],
  ['falling', { ipa: '/ˈfɑː.lɪŋ/', chinese: '落入圈套；中計', pos: 'v.', syllables: ['fal', 'ling'], ruleCodes: ['R04', 'R10'], level: '國中基礎' }],
  ['screaming', { ipa: '/ˈskriː.mɪŋ/', chinese: '尖叫高喊', pos: 'v.', syllables: ['scream', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' }],
  ['hide', { ipa: '/haɪd/', chinese: '躲藏；避開', pos: 'v.', syllables: ['hide'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['peace', { ipa: '/piːs/', chinese: '平靜；安寧', pos: 'n.', syllables: ['peace'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['indie', { ipa: '/ˈɪn.di/', chinese: '獨立音樂唱片', pos: 'adj./n.', syllables: ['in', 'die'], ruleCodes: ['R01', 'R03'], level: '高中精選' }],
  ['record', { ipa: '/ˈrek.ɚd/', chinese: '黑膠唱片；唱片', pos: 'n.', syllables: ['re', 'cord'], ruleCodes: ['R01', 'R05'], level: '國中基礎' }],
  ['much', { ipa: '/mʌtʃ/', chinese: '更；非常', pos: 'adv.', syllables: ['much'], ruleCodes: ['R01', 'R07'], level: '國中基礎' }],
  ['cooler', { ipa: '/ˈkuː.lɚ/', chinese: '更酷的；更帥氣的', pos: 'adj.', syllables: ['coo', 'ler'], ruleCodes: ['R04', 'R05'], level: '國中基礎' }],
  ['tonight', { ipa: '/təˈnaɪt/', chinese: '今晚；今夜', pos: 'adv./n.', syllables: ['to', 'night'], ruleCodes: ['R04', 'R02', 'R07'], level: '國中基礎' }],
  ['yeah', { ipa: '/jeə/', chinese: '是啊；沒錯', pos: 'interj.', syllables: ['yeah'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['used', { ipa: '/juːzd/', chinese: '曾經(used to)', pos: 'v.', syllables: ['used'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['forever', { ipa: '/fəˈrev.ɚ/', chinese: '永遠；長長久久', pos: 'adv.', syllables: ['for', 'ev', 'er'], ruleCodes: ['R05', 'R01', 'R05'], level: '國中基礎' }],
  ['huh', { ipa: '/hʌ/', chinese: '哼；呵(感嘆詞)', pos: 'interj.', syllables: ['huh'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['still', { ipa: '/stɪl/', chinese: '仍然；依然', pos: 'adv.', syllables: ['still'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['mean', { ipa: '/miːn/', chinese: '意思是；想說', pos: 'v.', syllables: ['mean'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['exhausting', { ipa: '/ɪɡˈzɑː.stɪŋ/', chinese: '令人精疲力竭的', pos: 'adj.', syllables: ['ex', 'haus', 'ting'], ruleCodes: ['R01', 'R04', 'R10'], level: '高中精選' }],
  ['no', { ipa: '/noʊ/', chinese: '不；絕不', pos: 'adv.', syllables: ['no'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['upset', { ipa: '/ʌpˈset/', chinese: '生氣心煩的', pos: 'adj.', syllables: ['up', 'set'], ruleCodes: ['R01', 'R01'], level: '國中基礎' }],
  ['humor', { ipa: '/ˈhjuː.mɚ/', chinese: '幽默感；風趣', pos: 'n.', syllables: ['hu', 'mor'], ruleCodes: ['R03', 'R05'], level: '高中精選' }],
  ['room', { ipa: '/ruːm/', chinese: '房間', pos: 'n.', syllables: ['room'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['typical', { ipa: '/ˈtɪp.ɪ.kəl/', chinese: '典型的；常見平常的', pos: 'adj.', syllables: ['typ', 'i', 'cal'], ruleCodes: ['R01', 'R01', 'R11'], level: '高中精選' }],
  ['tuesday', { ipa: '/ˈtuːz.deɪ/', chinese: '星期二', pos: 'n.', syllables: ['Tues', 'day'], ruleCodes: ['R03', 'R03'], level: '國中基礎' }],
  ['listening', { ipa: '/ˈlɪs.ən.ɪŋ/', chinese: '聆聽；聽著', pos: 'v.', syllables: ['lis', 'ten', 'ing'], ruleCodes: ['R01', 'R11', 'R10'], level: '國中基礎' }],
  ['kind', { ipa: '/kaɪnd/', chinese: '種類；類型', pos: 'n.', syllables: ['kind'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['music', { ipa: '/ˈmjuː.zɪk/', chinese: '音樂', pos: 'n.', syllables: ['mu', 'sic'], ruleCodes: ['R03', 'R01'], level: '國中基礎' }],
  ['shell', { ipa: '/ʃiːl/', chinese: '她將會(she will)', pos: 'pron.+aux.', syllables: ['shell'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['story', { ipa: '/ˈstɔːr.i/', chinese: '經歷；故事', pos: 'n.', syllables: ['sto', 'ry'], ruleCodes: ['R05', 'R03'], level: '國中基礎' }],
  ['wears', { ipa: '/werz/', chinese: '穿著(第三人稱)', pos: 'v.', syllables: ['wears'], ruleCodes: ['R03', 'R05'], level: '國中基礎' }],
  ['short', { ipa: '/ʃɔːrt/', chinese: '短的', pos: 'adj.', syllables: ['short'], ruleCodes: ['R07', 'R05'], level: '國中基礎' }],
  ['skirts', { ipa: '/skɝːts/', chinese: '短裙(複數)', pos: 'n.', syllables: ['skirts'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['wear', { ipa: '/wer/', chinese: '穿著', pos: 'v.', syllables: ['wear'], ruleCodes: ['R03', 'R05'], level: '國中基礎' }],
  ['tshirts', { ipa: '/ˈtiː.ʃɝːts/', chinese: 'T恤(複數)', pos: 'n.', syllables: ['T', 'shirts'], ruleCodes: ['R03', 'R07', 'R05'], level: '國中基礎' }],
  ['cheer', { ipa: '/tʃɪr/', chinese: '啦啦隊；歡呼', pos: 'n.', syllables: ['cheer'], ruleCodes: ['R07', 'R03'], level: '國中基礎' }],
  ['captain', { ipa: '/ˈkæp.tən/', chinese: '隊長；領隊', pos: 'n.', syllables: ['cap', 'tain'], ruleCodes: ['R01', 'R03'], level: '高中精選' }],
  ['bleachers', { ipa: '/ˈbliː.tʃɚz/', chinese: '看台座位；露天看台', pos: 'n.', syllables: ['bleach', 'ers'], ruleCodes: ['R03', 'R07', 'R05'], level: '歌曲核心' }],
  ['dreaming', { ipa: '/ˈdriː.mɪŋ/', chinese: '夢想；幻想著', pos: 'v.', syllables: ['dream', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' }],
  ['wake', { ipa: '/weɪk/', chinese: '醒來；覺悟', pos: 'v.', syllables: ['wake'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['looking', { ipa: '/ˈlʊk.ɪŋ/', chinese: '尋找；盼望', pos: 'v.', syllables: ['look', 'ing'], ruleCodes: ['R04', 'R10'], level: '國中基礎' }],
  ['for', { ipa: '/fɔːr/', chinese: '為了；尋求', pos: 'prep.', syllables: ['for'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['has', { ipa: '/hæz/', chinese: '已經(現在完成式)', pos: 'aux.', syllables: ['has'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['whole', { ipa: '/hoʊl/', chinese: '整體的；全部的', pos: 'adj.', syllables: ['whole'], ruleCodes: ['R09', 'R02'], level: '國中基礎' }],
  ['if', { ipa: '/ɪf/', chinese: '如果；假如', pos: 'conj.', syllables: ['if'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['understands', { ipa: '/ˌʌn.dɚˈstændz/', chinese: '懂；理解(單數)', pos: 'v.', syllables: ['un', 'der', 'stands'], ruleCodes: ['R01', 'R05', 'R01'], level: '國中基礎' }],
  ['along', { ipa: '/əˈlɑːŋ/', chinese: '一直都在(all along)', pos: 'adv.', syllables: ['a', 'long'], ruleCodes: ['R11', 'R10'], level: '國中基礎' }],
  ['belong', { ipa: '/bɪˈlɑːŋ/', chinese: '屬於；歸宿於', pos: 'v.', syllables: ['be', 'long'], ruleCodes: ['R03', 'R10'], level: '歌曲核心' }],
  ['with', { ipa: '/wɪð/', chinese: '和…一起；伴隨', pos: 'prep.', syllables: ['with'], ruleCodes: ['R01', 'R08'], level: '國中基礎' }],
  ['walking', { ipa: '/ˈwɑː.kɪŋ/', chinese: '漫步；走著', pos: 'v.', syllables: ['wal', 'king'], ruleCodes: ['R04', 'R10'], level: '國中基礎' }],
  ['streets', { ipa: '/striːts/', chinese: '街道(複數)', pos: 'n.', syllables: ['streets'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['wornout', { ipa: '/ˌwɔːrnˈaʊt/', chinese: '穿舊磨損的', pos: 'adj.', syllables: ['worn', 'out'], ruleCodes: ['R05', 'R04'], level: '高中精選' }],
  ['jeans', { ipa: '/dʒiːnz/', chinese: '牛仔褲', pos: 'n.', syllables: ['jeans'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['help', { ipa: '/help/', chinese: '忍不住(can\'t help)', pos: 'v.', syllables: ['help'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['thinking', { ipa: '/ˈθɪŋ.kɪŋ/', chinese: '心想；思忖', pos: 'v.', syllables: ['thin', 'king'], ruleCodes: ['R08', 'R10'], level: '國中基礎' }],
  ['how', { ipa: '/haʊ/', chinese: '如何；怎樣', pos: 'adv.', syllables: ['how'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['ought', { ipa: '/ɔːt/', chinese: '應當；理應', pos: 'aux.', syllables: ['ought'], ruleCodes: ['R04'], level: '高中精選' }],
  ['be', { ipa: '/biː/', chinese: '是；成為', pos: 'v.', syllables: ['be'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['laughing', { ipa: '/ˈlæf.ɪŋ/', chinese: '歡笑著', pos: 'v.', syllables: ['laugh', 'ing'], ruleCodes: ['R01', 'R10'], level: '國中基礎' }],
  ['park', { ipa: '/pɑːrk/', chinese: '公園', pos: 'n.', syllables: ['park'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['bench', { ipa: '/bentʃ/', chinese: '公園長椅', pos: 'n.', syllables: ['bench'], ruleCodes: ['R01', 'R07'], level: '國中基礎' }],
  ['myself', { ipa: '/maɪˈself/', chinese: '我自己', pos: 'pron.', syllables: ['my', 'self'], ruleCodes: ['R03', 'R01'], level: '國中基礎' }],
  ['easy', { ipa: '/ˈiː.zi/', chinese: '輕鬆自在的', pos: 'adj.', syllables: ['ea', 'sy'], ruleCodes: ['R03', 'R03'], level: '國中基礎' }],
  ['smile', { ipa: '/smaɪl/', chinese: '微笑；笑容', pos: 'n.', syllables: ['smile'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['light', { ipa: '/laɪt/', chinese: '照亮；發光', pos: 'v.', syllables: ['light'], ruleCodes: ['R02', 'R07'], level: '國中基礎' }],
  ['town', { ipa: '/taʊn/', chinese: '城鎮；小鎮', pos: 'n.', syllables: ['town'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['havent', { ipa: '/ˈhæv.ənt/', chinese: '尚未(have not)', pos: 'aux.', syllables: ['havent'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['since', { ipa: '/sɪns/', chinese: '自從…以來', pos: 'prep./conj.', syllables: ['since'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['better', { ipa: '/ˈbet̬.ɚ/', chinese: '更好；更深了解', pos: 'adv./adj.', syllables: ['bet', 'ter'], ruleCodes: ['R01', 'R05'], level: '國中基礎' }],
  ['than', { ipa: '/ðæn/', chinese: '比起；比', pos: 'prep.', syllables: ['than'], ruleCodes: ['R08', 'R01'], level: '國中基礎' }],
  ['ya', { ipa: '/jə/', chinese: '你(you口語)', pos: 'pron.', syllables: ['ya'], ruleCodes: ['R11'], level: '國中基礎' }],
  ['doing', { ipa: '/ˈduː.ɪŋ/', chinese: '做著；幹嘛', pos: 'v.', syllables: ['do', 'ing'], ruleCodes: ['R04', 'R10'], level: '國中基礎' }],
  ['girl', { ipa: '/ɡɝːl/', chinese: '女孩；女生', pos: 'n.', syllables: ['girl'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['high', { ipa: '/haɪ/', chinese: '高的', pos: 'adj.', syllables: ['high'], ruleCodes: ['R02', 'R07'], level: '國中基礎' }],
  ['heels', { ipa: '/hiːlz/', chinese: '高跟鞋', pos: 'n.', syllables: ['heels'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['sneakers', { ipa: '/ˈsniː.kɚz/', chinese: '運動鞋；球鞋', pos: 'n.', syllables: ['snea', 'kers'], ruleCodes: ['R03', 'R05'], level: '國中基礎' }],
  ['standing', { ipa: '/ˈstæn.dɪŋ/', chinese: '佇立；站著', pos: 'v.', syllables: ['stan', 'ding'], ruleCodes: ['R01', 'R10'], level: '國中基礎' }],
  ['by', { ipa: '/baɪ/', chinese: '在旁邊；藉由', pos: 'prep./adv.', syllables: ['by'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['waiting', { ipa: '/ˈweɪ.tɪŋ/', chinese: '等待；守候', pos: 'v.', syllables: ['wai', 'ting'], ruleCodes: ['R03', 'R10'], level: '國中基礎' }],
  ['door', { ipa: '/dɔːr/', chinese: '門口；大門', pos: 'n.', syllables: ['door'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['could', { ipa: '/kʊd/', chinese: '能；可以', pos: 'aux.', syllables: ['could'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['driving', { ipa: '/ˈdraɪ.vɪŋ/', chinese: '開車駕駛', pos: 'v.', syllables: ['dri', 'ving'], ruleCodes: ['R02', 'R10'], level: '國中基礎' }],
  ['house', { ipa: '/haʊs/', chinese: '房子；住所', pos: 'n.', syllables: ['house'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['middle', { ipa: '/ˈmɪd.əl/', chinese: '中間；半夜時分', pos: 'n.', syllables: ['mid', 'dle'], ruleCodes: ['R01', 'R11'], level: '國中基礎' }],
  ['night', { ipa: '/naɪt/', chinese: '深夜；夜晚', pos: 'n.', syllables: ['night'], ruleCodes: ['R02', 'R07'], level: '國中基礎' }],
  ['makes', { ipa: '/meɪks/', chinese: '使；逗笑', pos: 'v.', syllables: ['makes'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['laugh', { ipa: '/læf/', chinese: '開懷大笑', pos: 'v.', syllables: ['laugh'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['cry', { ipa: '/kraɪ/', chinese: '哭泣；流淚', pos: 'v.', syllables: ['cry'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['favorite', { ipa: '/ˈfeɪ.vər.ɪt/', chinese: '最喜愛的', pos: 'adj.', syllables: ['fa', 'vor', 'ite'], ruleCodes: ['R03', 'R05', 'R01'], level: '國中基礎' }],
  ['songs', { ipa: '/sɑːŋz/', chinese: '歌曲(複數)', pos: 'n.', syllables: ['songs'], ruleCodes: ['R10'], level: '國中基礎' }],
  ['tell', { ipa: '/tel/', chinese: '訴說；講述', pos: 'v.', syllables: ['tell'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['where', { ipa: '/wer/', chinese: '哪裡；何處', pos: 'adv.', syllables: ['where'], ruleCodes: ['R09', 'R05'], level: '國中基礎' }],
  ['thought', { ipa: '/θɔːt/', chinese: '想過；認為(think過去式)', pos: 'v.', syllables: ['thought'], ruleCodes: ['R08', 'R04'], level: '國中基礎' }],
  ['just', { ipa: '/dʒʌst/', chinese: '只是；也許就', pos: 'adv.', syllables: ['just'], ruleCodes: ['R01'], level: '國中基礎' }],
  // Blank Space 專屬核心字彙庫
  ['nice', { ipa: '/naɪs/', chinese: '美好的；很棒的', pos: 'adj.', syllables: ['nice'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['meet', { ipa: '/miːt/', chinese: '遇見；結識', pos: 'v.', syllables: ['meet'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['been', { ipa: '/bɪn/', chinese: '去過；待過(be完成式)', pos: 'v.', syllables: ['been'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['incredible', { ipa: '/ɪnˈkred.ə.bəl/', chinese: '不可思議的；驚人的', pos: 'adj.', syllables: ['in', 'cred', 'i', 'ble'], ruleCodes: ['R01', 'R01', 'R11'], level: '高中精選' }],
  ['magic', { ipa: '/ˈmædʒ.ɪk/', chinese: '魔法；魔幻力量', pos: 'n.', syllables: ['mag', 'ic'], ruleCodes: ['R01', 'R01'], level: '國中基礎' }],
  ['madness', { ipa: '/ˈmæd.nəs/', chinese: '狂亂；瘋狂之舉', pos: 'n.', syllables: ['mad', 'ness'], ruleCodes: ['R01', 'R01'], level: '高中精選' }],
  ['heaven', { ipa: '/ˈhev.ən/', chinese: '天堂；無上極樂', pos: 'n.', syllables: ['heav', 'en'], ruleCodes: ['R01', 'R11'], level: '國中基礎' }],
  ['sin', { ipa: '/sɪn/', chinese: '罪孽；罪過', pos: 'n.', syllables: ['sin'], ruleCodes: ['R01'], level: '高中精選' }],
  ['god', { ipa: '/ɡɑːd/', chinese: '天啊；上帝', pos: 'n.', syllables: ['god'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['face', { ipa: '/feɪs/', chinese: '臉龐；容貌', pos: 'n.', syllables: ['face'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['mistake', { ipa: '/mɪˈsteɪk/', chinese: '美麗錯誤；失誤', pos: 'n.', syllables: ['mis', 'take'], ruleCodes: ['R01', 'R02'], level: '國中基礎' }],
  ['suit', { ipa: '/suːt/', chinese: '西裝；正裝', pos: 'n.', syllables: ['suit'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['tie', { ipa: '/taɪ/', chinese: '領帶', pos: 'n.', syllables: ['tie'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['read', { ipa: '/riːd/', chinese: '看透；閱覽', pos: 'v.', syllables: ['read'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['magazine', { ipa: '/ˌmæɡ.əˈziːn/', chinese: '雜誌；期刊', pos: 'n.', syllables: ['mag', 'a', 'zine'], ruleCodes: ['R01', 'R11', 'R03'], level: '高中精選' }],
  ['aint', { ipa: '/eɪnt/', chinese: '難道不是(is not/are not)', pos: 'aux.', syllables: ['aint'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['funny', { ipa: '/ˈfʌn.i/', chinese: '諷刺可笑的；有趣的', pos: 'adj.', syllables: ['fun', 'ny'], ruleCodes: ['R01', 'R03'], level: '國中基礎' }],
  ['rumors', { ipa: '/ˈruː.mɚz/', chinese: '流言蜚語；八卦傳聞', pos: 'n.', syllables: ['ru', 'mors'], ruleCodes: ['R04', 'R05'], level: '高中精選' }],
  ['fly', { ipa: '/flaɪ/', chinese: '傳播飛揚；飛馳', pos: 'v.', syllables: ['fly'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['heard', { ipa: '/hɜːrd/', chinese: '聽聞；聽說過(hear過去式)', pos: 'v.', syllables: ['heard'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['hey', { ipa: '/heɪ/', chinese: '嘿(問候呼喚語)', pos: 'interj.', syllables: ['hey'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['dying', { ipa: '/ˈdaɪ.ɪŋ/', chinese: '極度渴望(dying to)', pos: 'v.', syllables: ['dy', 'ing'], ruleCodes: ['R03', 'R10'], level: '高中精選' }],
  ['ends', { ipa: '/endz/', chinese: '落幕；收場', pos: 'v./n.', syllables: ['ends'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['grab', { ipa: '/ɡræb/', chinese: '緊抓；握住', pos: 'v.', syllables: ['grab'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['passport', { ipa: '/ˈpæs.pɔːrt/', chinese: '護照', pos: 'n.', syllables: ['pass', 'port'], ruleCodes: ['R01', 'R05'], level: '高中精選' }],
  ['guys', { ipa: '/ɡaɪz/', chinese: '男孩們；傢伙們', pos: 'n.', syllables: ['guys'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['weekend', { ipa: '/ˈwiːk.end/', chinese: '週末時光', pos: 'n.', syllables: ['week', 'end'], ruleCodes: ['R03', 'R01'], level: '國中基礎' }],
  ['gonna', { ipa: '/ˈɡɑː.nə/', chinese: '將會(going to口語)', pos: 'aux.', syllables: ['gon', 'na'], ruleCodes: ['R01', 'R11'], level: '國中基礎' }],
  ['forever', { ipa: '/fəˈrev.ɚ/', chinese: '永恆；天長地久', pos: 'adv.', syllables: ['for', 'ev', 'er'], ruleCodes: ['R05', 'R01', 'R05'], level: '國中基礎' }],
  ['flames', { ipa: '/fleɪmz/', chinese: '烈焰；火海(go down in flames)', pos: 'n.', syllables: ['flames'], ruleCodes: ['R02'], level: '高中精選' }],
  ['worth', { ipa: '/wɜːrθ/', chinese: '值得的；抵得過', pos: 'adj.', syllables: ['worth'], ruleCodes: ['R05', 'R08'], level: '高中精選' }],
  ['pain', { ipa: '/peɪn/', chinese: '痛苦；錐心痛楚', pos: 'n.', syllables: ['pain'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['got', { ipa: '/ɡɑːt/', chinese: '擁有；得到', pos: 'v.', syllables: ['got'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['lovers', { ipa: '/ˈlʌv.ɚz/', chinese: '戀人們；情人', pos: 'n.', syllables: ['lov', 'ers'], ruleCodes: ['R01', 'R05'], level: '國中基礎' }],
  ['exlovers', { ipa: '/eksˈlʌv.ɚz/', chinese: '前任戀人們', pos: 'n.', syllables: ['ex', 'lov', 'ers'], ruleCodes: ['R01', 'R01', 'R05'], level: '歌曲核心' }],
  ['theyll', { ipa: '/ðeɪl/', chinese: '他們將會(they will)', pos: 'pron.+aux.', syllables: ['theyll'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['insane', { ipa: '/ɪnˈseɪn/', chinese: '瘋狂的；歇斯底里的', pos: 'adj.', syllables: ['in', 'sane'], ruleCodes: ['R01', 'R02'], level: '高中精選' }],
  ['players', { ipa: '/ˈpleɪ.ɚz/', chinese: '情場玩家；高手', pos: 'n.', syllables: ['play', 'ers'], ruleCodes: ['R03', 'R05'], level: '高中精選' }],
  ['were', { ipa: '/wɜːr/', chinese: '是(複數過去式)', pos: 'v.', syllables: ['were'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['reckless', { ipa: '/ˈrek.ləs/', chinese: '不計後果的；魯莽的', pos: 'adj.', syllables: ['reck', 'less'], ruleCodes: ['R01', 'R01'], level: '高中精選' }],
  ['well', { ipa: '/wel/', chinese: '我們將(we will)', pos: 'pron.+aux.', syllables: ['well'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['itll', { ipa: '/ˈɪt̬.əl/', chinese: '它將會(it will)', pos: 'pron.+aux.', syllables: ['itll'], ruleCodes: ['R01', 'R11'], level: '國中基礎' }],
  ['leave', { ipa: '/liːv/', chinese: '留下；使處於…狀態', pos: 'v.', syllables: ['leave'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['breathless', { ipa: '/ˈbreθ.ləs/', chinese: '屏息沉醉的；喘不過氣的', pos: 'adj.', syllables: ['breath', 'less'], ruleCodes: ['R01', 'R08', 'R01'], level: '高中精選' }],
  ['nasty', { ipa: '/ˈnæs.ti/', chinese: '難以癒合的；醜陋的', pos: 'adj.', syllables: ['nas', 'ty'], ruleCodes: ['R01', 'R03'], level: '高中精選' }],
  ['scar', { ipa: '/skɑːr/', chinese: '傷疤；傷痕', pos: 'n.', syllables: ['scar'], ruleCodes: ['R05'], level: '高中精選' }],
  ['blank', { ipa: '/blæŋk/', chinese: '空白的；空格', pos: 'adj./n.', syllables: ['blank'], ruleCodes: ['R01', 'R10'], level: '高中精選' }],
  ['space', { ipa: '/speɪs/', chinese: '空白處；空間', pos: 'n.', syllables: ['space'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['ill', { ipa: '/aɪl/', chinese: '我將會(I will)', pos: 'pron.+aux.', syllables: ['ill'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['write', { ipa: '/raɪt/', chinese: '書寫；寫下', pos: 'v.', syllables: ['write'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['cherry', { ipa: '/ˈtʃer.i/', chinese: '櫻桃紅的；櫻桃', pos: 'adj./n.', syllables: ['cher', 'ry'], ruleCodes: ['R01', 'R03'], level: '國中基礎' }],
  ['lips', { ipa: '/lɪps/', chinese: '雙唇；嘴唇', pos: 'n.', syllables: ['lips'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['crystal', { ipa: '/ˈkrɪs.təl/', chinese: '水晶般澄澈的', pos: 'adj.', syllables: ['crys', 'tal'], ruleCodes: ['R01', 'R11'], level: '高中精選' }],
  ['skies', { ipa: '/skaɪz/', chinese: '蒼穹；天空(複數)', pos: 'n.', syllables: ['skies'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['stolen', { ipa: '/ˈstoʊ.lən/', chinese: '偷來的；偷偷的', pos: 'adj.', syllables: ['sto', 'len'], ruleCodes: ['R02', 'R11'], level: '國中基礎' }],
  ['kisses', { ipa: '/ˈkɪs.ɪz/', chinese: '熱吻；親吻(複數)', pos: 'n.', syllables: ['kiss', 'es'], ruleCodes: ['R01', 'R01'], level: '國中基礎' }],
  ['lies', { ipa: '/laɪz/', chinese: '謊言(複數)', pos: 'n.', syllables: ['lies'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['youre', { ipa: '/jʊr/', chinese: '你是(you are)', pos: 'pron.+v.', syllables: ['youre'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['king', { ipa: '/kɪŋ/', chinese: '國王；王者', pos: 'n.', syllables: ['king'], ruleCodes: ['R01', 'R10'], level: '國中基礎' }],
  ['queen', { ipa: '/kwiːn/', chinese: '皇后；女王', pos: 'n.', syllables: ['queen'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['month', { ipa: '/mʌnθ/', chinese: '一個月；月', pos: 'n.', syllables: ['month'], ruleCodes: ['R01', 'R08'], level: '國中基礎' }],
  ['wait', { ipa: '/weɪt/', chinese: '等等；等候', pos: 'v.', syllables: ['wait'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['worst', { ipa: '/wɜːrst/', chinese: '最糟的；最壞情況', pos: 'adj./n.', syllables: ['worst'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['screaming', { ipa: '/ˈskriː.mɪŋ/', chinese: '尖叫；吶喊', pos: 'v.', syllables: ['screa', 'ming'], ruleCodes: ['R03', 'R10'], level: '國中基礎' }],
  ['crying', { ipa: '/ˈkraɪ.ɪŋ/', chinese: '痛哭；啜泣', pos: 'v.', syllables: ['cry', 'ing'], ruleCodes: ['R03', 'R10'], level: '國中基礎' }],
  ['perfect', { ipa: '/ˈpɝː.fekt/', chinese: '完美的；毫無破綻的', pos: 'adj.', syllables: ['per', 'fect'], ruleCodes: ['R05', 'R01'], level: '國中基礎' }],
  ['storm', { ipa: '/stɔːrm/', chinese: '風暴；暴風雨', pos: 'n.', syllables: ['storm'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['tables', { ipa: '/ˈteɪ.bəlz/', chinese: '局勢(turn tables扭轉局勢)', pos: 'n.', syllables: ['ta', 'bles'], ruleCodes: ['R03', 'R11'], level: '國中基礎' }],
  ['turn', { ipa: '/tɜːrn/', chinese: '扭轉；反轉', pos: 'v.', syllables: ['turn'], ruleCodes: ['R05'], level: '國中基礎' }],
  ['gardens', { ipa: '/ˈɡɑːr.dənz/', chinese: '花園；庭院', pos: 'n.', syllables: ['gar', 'dens'], ruleCodes: ['R05', 'R01'], level: '國中基礎' }],
  ['filled', { ipa: '/fɪld/', chinese: '充滿的；裝滿的', pos: 'v./adj.', syllables: ['filled'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['thorns', { ipa: '/θɔːrnz/', chinese: '荊棘；毒刺', pos: 'n.', syllables: ['thorns'], ruleCodes: ['R08', 'R05'], level: '高中精選' }],
  ['second', { ipa: '/ˈsek.ənd/', chinese: '反覆；二次(second-guessing)', pos: 'adj.', syllables: ['sec', 'ond'], ruleCodes: ['R01', 'R01'], level: '國中基礎' }],
  ['guessing', { ipa: '/ˈɡes.ɪŋ/', chinese: '猜疑；推測', pos: 'v.', syllables: ['gues', 'sing'], ruleCodes: ['R01', 'R10'], level: '國中基礎' }],
  ['she', { ipa: '/ʃiː/', chinese: '她', pos: 'pron.', syllables: ['she'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['drunk', { ipa: '/drʌŋk/', chinese: '沉醉；醉醺醺的', pos: 'adj.', syllables: ['drunk'], ruleCodes: ['R01', 'R10'], level: '國中基礎' }],
  ['jealousy', { ipa: '/ˈdʒel.ə.si/', chinese: '嫉妒；醋意', pos: 'n.', syllables: ['jeal', 'ou', 'sy'], ruleCodes: ['R01', 'R11', 'R03'], level: '高中精選' }],
  ['youll', { ipa: '/juːl/', chinese: '你將會(you will)', pos: 'pron.+aux.', syllables: ['youll'], ruleCodes: ['R03'], level: '國中基礎' }],
  ['each', { ipa: '/iːtʃ/', chinese: '每一次；每個', pos: 'adj./pron.', syllables: ['each'], ruleCodes: ['R03', 'R07'], level: '國中基礎' }],
  ['darling', { ipa: '/ˈdɑːr.lɪŋ/', chinese: '親愛的；寶貝', pos: 'n.', syllables: ['dar', 'ling'], ruleCodes: ['R05', 'R10'], level: '國中基礎' }],
  ['nightmare', { ipa: '/ˈnaɪt.mer/', chinese: '致命噩夢；夢魘', pos: 'n.', syllables: ['night', 'mare'], ruleCodes: ['R02', 'R07', 'R05'], level: '高中精選' }],
  ['dressed', { ipa: '/drest/', chinese: '穿著裝扮的', pos: 'adj./v.', syllables: ['dressed'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['daydream', { ipa: '/ˈdeɪ.driːm/', chinese: '白日夢；美好幻象', pos: 'n.', syllables: ['day', 'dream'], ruleCodes: ['R03', 'R03'], level: '高中精選' }],
  ['boys', { ipa: '/bɔɪz/', chinese: '男孩們', pos: 'n.', syllables: ['boys'], ruleCodes: ['R04'], level: '國中基礎' }],
  ['only', { ipa: '/ˈoʊn.li/', chinese: '只有；僅僅', pos: 'adv./adj.', syllables: ['on', 'ly'], ruleCodes: ['R02', 'R03'], level: '國中基礎' }],
  ['want', { ipa: '/wɑːnt/', chinese: '想要；渴望', pos: 'v.', syllables: ['want'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['torture', { ipa: '/ˈtɔːr.tʃɚ/', chinese: '痛苦折磨；苦痛煎熬', pos: 'n.', syllables: ['tor', 'ture'], ruleCodes: ['R05', 'R05'], level: '高中精選' }],
  ['dont', { ipa: '/doʊnt/', chinese: '不要；別(do not)', pos: 'aux.', syllables: ['dont'], ruleCodes: ['R02'], level: '國中基礎' }],
  ['didnt', { ipa: '/ˈdɪd.ənt/', chinese: '沒有(did not)', pos: 'aux.', syllables: ['didnt'], ruleCodes: ['R01'], level: '國中基礎' }],
  ['warn', { ipa: '/wɔːrn/', chinese: '警告；提醒預告', pos: 'v.', syllables: ['warn'], ruleCodes: ['R05'], level: '國中基礎' }]
];

for (const [k, v] of EXTRA_SONG_WORDS) {
  if (!WORD_DICT[k]) {
    WORD_DICT[k] = v;
  }
}

// 輔助函式：將單字字串切分並連結字典資料
function parseLineWords(englishLine: string, lineId: number, prefix: string = 'ls'): SongWord[] {
  // 提取有效英文單字字詞（去除引號、括號與逗號等標點）
  const tokens = englishLine
    .replace(/[",!?;:()]/g, ' ')
    .replace(/[“”]/g, ' ')
    .split(/\s+/)
    .filter(t => t.trim().length > 0);

  return tokens.map((token, idx) => {
    const rawClean = token.toLowerCase().replace(/[^a-z']/g, '');
    const dictKey = rawClean.replace(/'/g, '');
    const dictEntry = WORD_DICT[dictKey] || WORD_DICT[rawClean] || {
      ipa: `/${rawClean}/`,
      chinese: rawClean,
      pos: 'word',
      syllables: [rawClean],
      ruleCodes: ['R01'],
      level: '國中基礎'
    };

    return {
      id: `${prefix}-l${lineId}-w${idx}-${rawClean}`,
      word: token,
      cleanWord: rawClean,
      ipa: dictEntry.ipa,
      chinese: dictEntry.chinese,
      syllables: dictEntry.syllables,
      ruleCodes: dictEntry.ruleCodes,
      pos: dictEntry.pos,
      level: dictEntry.level
    };
  });
}

// 原始 46 句中英完整對照歌詞清單
const RAW_LYRIC_LINES: { id: number; english: string; chinese: string }[] = [
  { id: 1, english: "We were both young when I first saw you", chinese: "我們在年少輕狂時初遇" },
  { id: 2, english: "I close my eyes and the flashback starts", chinese: "我閉上了眼，往日時光一閃而過" },
  { id: 3, english: "I'm standing there on a balcony in summer air", chinese: "夏風中，我就站在陽台" },
  { id: 4, english: "See the lights, see the party, the ballgowns", chinese: "看著燈光、舞會、禮服" },
  { id: 5, english: "See you make your way to the crowd", chinese: "然後見你穿過人群走來" },
  { id: 6, english: "And say hello, little did I know", chinese: "向我問好，那時我還不知道" },
  { id: 7, english: "That you were Romeo, you were throwing pebbles", chinese: "你就是羅密歐，你在窗下丟石子" },
  { id: 8, english: 'And my daddy said, "Stay away from Juliet!"', chinese: "而我爹地要你遠離茱莉葉" },
  { id: 9, english: "And I was crying on the staircase", chinese: "於是我哭倒在台階上" },
  { id: 10, english: "Begging you please don't go", chinese: "求你別走" },
  { id: 11, english: "And I said,", chinese: "然後我說了" },
  { id: 12, english: '"Romeo, take me somewhere we can be alone', chinese: "“羅密歐，帶我到一個只有我們倆的地方吧" },
  { id: 13, english: "I'll be waiting, all there's left to do is run", chinese: "我會一直等著，現在能做的只有逃跑了" },
  { id: 14, english: "You'll be the prince and I'll be the princess", chinese: "那麼你就是王子，而我就是公主" },
  { id: 15, english: 'It\'s a love story, baby, just say yes"', chinese: "這是一個愛的故事，親愛的，就只要說你願意”" },
  { id: 16, english: "So I sneak out to the garden to see you", chinese: "結果我偷溜到花園見你" },
  { id: 17, english: "We keep quiet, 'cause we're dead if they knew", chinese: "我們小小聲的，因為被別人發現就死定了" },
  { id: 18, english: "So close your eyes, escape this town for a little while", chinese: "所以閉上雙眼吧！讓我們遠離這城鎮一會兒" },
  { id: 19, english: "'Cause you were Romeo, I was a scarlet letter", chinese: "因為你是羅密歐，而我是一世的罪人" },
  { id: 20, english: 'And my daddy said, "Stay away from Juliet!"', chinese: '所以我爹地說了 "離茱麗葉遠一點"' },
  { id: 21, english: "But you were everything to me", chinese: "但你是我的全部" },
  { id: 22, english: "I was begging you please don't go", chinese: "我求你別走" },
  { id: 23, english: "And I said,", chinese: "然後我說了" },
  { id: 24, english: '"Romeo, take me somewhere we can be alone', chinese: "“羅密歐，帶我到一個只有我們倆的地方吧" },
  { id: 25, english: "I'll be waiting, all there's left to do is run", chinese: "我會一直等著，現在能做的只有逃跑了" },
  { id: 26, english: "You'll be the prince and I'll be the princess", chinese: "那麼你就是王子，而我就是公主" },
  { id: 27, english: "It's a love story, baby, just say yes", chinese: "這是一個愛的故事，親愛的，就只要說你願意" },
  { id: 28, english: "Romeo, save me, they're trying to tell me how to feel", chinese: "羅密歐，救救我，他們一直在告訴我該相信什麼" },
  { id: 29, english: "This love is difficult, but it's real", chinese: "這份愛艱難，卻是真愛" },
  { id: 30, english: "Don't be afraid, we'll make it out of this mess", chinese: "請不要害怕，我們將會渡過難關的" },
  { id: 31, english: 'It\'s a love story, baby, just say yes"', chinese: "這是一個愛的故事，親愛的，就只要說你願意”" },
  { id: 32, english: "I’ve got tired of waiting", chinese: "我已厭倦了等待" },
  { id: 33, english: "wondering if you were ever coming around", chinese: "心想你是否真的會來" },
  { id: 34, english: "My faith in you was fading,", chinese: "對於你，我的心已漸漸動搖" },
  { id: 35, english: "when I met you on the outskirts of town", chinese: "當我在城外遇見你時" },
  { id: 36, english: "And I said,", chinese: "我說" },
  { id: 37, english: '"Romeo, save me, I\'ve been feeling so alone', chinese: "“羅密歐，救救我，我一直感到孤單" },
  { id: 38, english: "I keep waiting for you but you never come", chinese: "我一直等著你，而你卻不來" },
  { id: 39, english: 'Is this in my head, I don\'t know what to think"', chinese: "這一切是真的嗎？我真的不知道該如何想了”" },
  { id: 40, english: "He knelt to the ground and pulled out a ring", chinese: "他跪在地上並掏出一只戒指" },
  { id: 41, english: "And said,", chinese: "然後說" },
  { id: 42, english: '"Marry me, Juliet, you\'ll never have to be alone', chinese: "“嫁給我吧！茱麗葉，妳再也不會孤單一人了" },
  { id: 43, english: "I love you and that's all I really know", chinese: "我愛妳，而且那也是我唯一的感受" },
  { id: 44, english: "I talked to your dad, go pick out a white dress", chinese: "我和妳爹地談過了，就去挑一件白紗吧！" },
  { id: 45, english: 'It\'s a love story, baby, just say yes"', chinese: "這是一個愛的故事，親愛的，就只要說你願意”" },
  { id: 46, english: "We were both young when I first saw you", chinese: "我們在年少輕狂時初遇" }
];

// 輔助函式：提取歌曲全曲唯一詞彙表（依難度與重要性排序）
function extractSongVocabulary(lines: SongLine[]): SongWord[] {
  const map = new Map<string, SongWord>();
  lines.forEach(line => {
    line.words.forEach(w => {
      const key = w.cleanWord.toLowerCase().replace(/'/g, '');
      if (key.length > 0 && !map.has(key)) {
        map.set(key, w);
      }
    });
  });

  return Array.from(map.values()).sort((a, b) => {
    // 優先排歌曲核心與高中精選，再來依字長排
    const levelScore = (level?: string) => (level === '歌曲核心' ? 3 : level === '高中精選' ? 2 : 1);
    const scoreDiff = levelScore(b.level) - levelScore(a.level);
    if (scoreDiff !== 0) return scoreDiff;
    return b.cleanWord.length - a.cleanWord.length;
  });
}

// 組裝 Love Story 完整歌詞資料結構
export const LOVE_STORY_LINES: SongLine[] = RAW_LYRIC_LINES.map(line => ({
  id: line.id,
  english: line.english,
  chinese: line.chinese,
  words: parseLineWords(line.english, line.id, 'ls')
}));

export const LOVE_STORY_VOCABULARY: SongWord[] = extractSongVocabulary(LOVE_STORY_LINES);

export const LOVE_STORY_SONG: SongItem = {
  id: 'taylor-swift-love-story',
  title: 'Love Story',
  artist: 'Taylor Swift',
  album: 'Fearless',
  year: '2008',
  genre: 'Country Pop / Romantic',
  coverEmoji: '👑',
  accentColor: 'from-amber-500 via-rose-500 to-indigo-600',
  description: '泰勒絲經典鄉村流行浪漫代表作，改編莎士比亞《羅密歐與茱麗葉》，傳達青春純愛與堅定誓言。',
  totalLines: LOVE_STORY_LINES.length,
  totalWords: LOVE_STORY_VOCABULARY.length,
  lines: LOVE_STORY_LINES,
  vocabulary: LOVE_STORY_VOCABULARY
};

// ==========================================
// 第 2 首歌: Look What You Made Me Do - Taylor Swift
// ==========================================
const LWYMMD_RAW_LINES: { id: number; english: string; chinese: string }[] = [
  { id: 1, english: "I don't like your little games", chinese: "我不喜歡你的那些小把戲" },
  { id: 2, english: "Don't like your tilted stage", chinese: "不喜歡你傾斜不公的舞台" },
  { id: 3, english: "The role you made me play", chinese: "你逼我扮演的角色" },
  { id: 4, english: "Of the fool, no, I don't like you", chinese: "那裝傻的丑角，不，我不喜歡你" },
  { id: 5, english: "I don't like your perfect crime", chinese: "我不喜歡你自命完美的罪行" },
  { id: 6, english: "How you laugh when you lie", chinese: "當你說謊時那得意的冷笑" },
  { id: 7, english: "You said the gun was mine", chinese: "你竟誣指那把槍是我的" },
  { id: 8, english: "Isn't cool, no, I don't like you (oh)", chinese: "這一點都不酷，不，我一點也不喜歡你" },
  { id: 9, english: "But I got smarter, I got harder in the nick of time", chinese: "但我及時變得更聰明、更堅強" },
  { id: 10, english: "Honey, I rose up from the dead, I do it all the time", chinese: "親愛的，我從死裡重生，我向來都做得到" },
  { id: 11, english: "I've got a list of names and yours is in red, underlined", chinese: "我有份黑名單，而你的名字用紅筆加了底線" },
  { id: 12, english: "I check it once, then I check it twice, oh!", chinese: "我審視了一遍，接著又核對了一遍" },
  { id: 13, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 14, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 15, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 16, english: "Look what you just made me", chinese: "看看你剛剛把我變成了什麼樣" },
  { id: 17, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 18, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 19, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 20, english: "Look what you just made me do", chinese: "看看你逼我做出了什麼" },
  { id: 21, english: "I don't like your kingdom keys", chinese: "我不稀罕你王國的鑰匙" },
  { id: 22, english: "They once belonged to me", chinese: "那座王國曾屬於我" },
  { id: 23, english: "You asked me for a place to sleep", chinese: "你曾向我央求一處容身之所" },
  { id: 24, english: "Locked me out and threw a feast (what?)", chinese: "轉頭卻把我鎖在門外大開筵席" },
  { id: 25, english: "The world moves on, another day, another drama, drama", chinese: "世界繼續運轉，又是新的一天，又有新的鬧劇" },
  { id: 26, english: "But not for me, not for me, all I think about is karma", chinese: "但對我而言不是，我心心念念的只有因果報應" },
  { id: 27, english: "And then the world moves on, but one thing's for sure", chinese: "世界依舊轉動，但有一件事確定無疑" },
  { id: 28, english: "Maybe I got mine, but you'll all get yours", chinese: "也許我受夠了教訓，但你們終將自食惡果" },
  { id: 29, english: "But I got smarter, I got harder in the nick of time", chinese: "但我及時變得更聰明、更堅強" },
  { id: 30, english: "Honey, I rose up from the dead, I do it all the time", chinese: "親愛的，我從死裡重生，我向來都做得到" },
  { id: 31, english: "I've got a list of names and yours is in red, underlined", chinese: "我有份黑名單，而你的名字用紅筆加了底線" },
  { id: 32, english: "I check it once, then I check it twice, oh!", chinese: "我審視了一遍，接著又核對了一遍" },
  { id: 33, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 34, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 35, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 36, english: "Look what you just made me", chinese: "看看你剛剛把我變成了什麼樣" },
  { id: 37, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 38, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 39, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 40, english: "Look what you just made me do", chinese: "看看你逼我做出了什麼" },
  { id: 41, english: "I don't trust nobody and nobody trusts me", chinese: "我誰也不信，也沒人信任我" },
  { id: 42, english: "I'll be the actress starring in your bad dreams", chinese: "我將成為在你噩夢中領銜主演的女主角" },
  { id: 43, english: "I don't trust nobody and nobody trusts me", chinese: "我誰也不信，也沒人信任我" },
  { id: 44, english: "I'll be the actress starring in your bad dreams", chinese: "我將成為在你噩夢中領銜主演的女主角" },
  { id: 45, english: "I don't trust nobody and nobody trusts me", chinese: "我誰也不信，也沒人信任我" },
  { id: 46, english: "I'll be the actress starring in your bad dreams", chinese: "我將成為在你噩夢中領銜主演的女主角" },
  { id: 47, english: "I don't trust nobody and nobody trusts me", chinese: "我誰也不信，也沒人信任我" },
  { id: 48, english: "I'll be the actress starring in your bad dreams", chinese: "我將成為在你噩夢中領銜主演的女主角" },
  { id: 49, english: "(Ooh, look what you made me do", chinese: "（噢，看看你逼我做了什麼" },
  { id: 50, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 51, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 52, english: "Look what you just made me", chinese: "看看你剛剛把我變成了什麼" },
  { id: 53, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 54, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 55, english: "Look what you just made me)", chinese: "看看你剛剛把我逼成了什麼）" },
  { id: 56, english: '"I\'m sorry, the old Taylor can\'t come to the phone right now', chinese: "“抱歉，以前那個泰勒絲現在不能接電話”" },
  { id: 57, english: '"Why? Oh, \'cause she\'s dead!" (Oh)', chinese: "“問我為什麼？噢，因為她已經死了！”" },
  { id: 58, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 59, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 60, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 61, english: "Look what you just made me", chinese: "看看你剛剛把我變成了什麼樣" },
  { id: 62, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 63, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 64, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 65, english: "Look what you just made me do", chinese: "看看你逼我做出了什麼" },
  { id: 66, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 67, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 68, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 69, english: "Look what you just made me", chinese: "看看你剛剛把我變成了什麼樣" },
  { id: 70, english: "Ooh, look what you made me do", chinese: "噢，看看你逼我做了什麼" },
  { id: 71, english: "Look what you made me do", chinese: "看看你逼我做出了什麼" },
  { id: 72, english: "Look what you just made me do", chinese: "看看你剛剛逼我做了什麼" },
  { id: 73, english: "Look what you just made me do", chinese: "看看你逼我做出了什麼" }
];

// 組裝 Look What You Made Me Do 完整歌詞結構
export const LWYMMD_LINES: SongLine[] = LWYMMD_RAW_LINES.map(line => ({
  id: line.id,
  english: line.english,
  chinese: line.chinese,
  words: parseLineWords(line.english, line.id, 'lwymmd')
}));

export const LWYMMD_VOCABULARY: SongWord[] = extractSongVocabulary(LWYMMD_LINES);

export const LWYMMD_SONG: SongItem = {
  id: 'taylor-swift-look-what-you-made-me-do',
  title: 'Look What You Made Me Do',
  artist: 'Taylor Swift',
  album: 'Reputation',
  year: '2017',
  genre: 'Electropop / Dark Pop',
  coverEmoji: '🐍',
  accentColor: 'from-zinc-800 via-rose-900 to-red-600',
  description: '泰勒絲浴火重生的電子流行暗黑霸氣代表作，洗腦節奏宣告舊泰勒絲的蛻變與全新反擊。',
  totalLines: LWYMMD_LINES.length,
  totalWords: LWYMMD_VOCABULARY.length,
  lines: LWYMMD_LINES,
  vocabulary: LWYMMD_VOCABULARY
};

// ==========================================
// 3. Shake It Off
// ==========================================
const SHAKE_IT_OFF_RAW_LINES: { id: number; english: string; chinese: string }[] = [
  { id: 1, english: "I stay out too late, got nothing in my brain", chinese: "我總在外面待到很晚，腦袋裡一片空空" },
  { id: 2, english: "That's what people say, that's what people say", chinese: "大家都是這麼說的，每個人都這樣八卦" },
  { id: 3, english: "I go on too many dates, but I can't make them stay", chinese: "我約會過很多人，但沒人能留下來" },
  { id: 4, english: "At least that's what people say, that's what people say", chinese: "至少大家都是這麼講的，說三道四" },
  { id: 5, english: "But I keep cruising", chinese: "但我依舊悠然前行" },
  { id: 6, english: "Can't stop, won't stop moving", chinese: "無法停下，也不會停止律動" },
  { id: 7, english: "It's like I got this music in my mind", chinese: "就像我的腦海中響起這段旋律" },
  { id: 8, english: "Saying it's gonna be alright", chinese: "唱著一切都會好轉的" },
  { id: 9, english: "Cause the players gonna play, play, play, play, play", chinese: "因為情場浪子終究四處留情" },
  { id: 10, english: "And the haters gonna hate, hate, hate, hate, hate", chinese: "而酸民黑粉永遠滿口酸言" },
  { id: 11, english: "Baby, I'm just gonna shake, shake, shake, shake, shake", chinese: "親愛的，我只想盡情搖擺" },
  { id: 12, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 13, english: "Heartbreakers gonna break, break, break, break, break", chinese: "薄情負心漢總會傷人透骨" },
  { id: 14, english: "And the fakers gonna fake, fake, fake, fake, fake", chinese: "虛情假意者依然裝模作樣" },
  { id: 15, english: "Baby, I'm just gonna shake, shake, shake, shake, shake", chinese: "親愛的，我只想盡情搖擺" },
  { id: 16, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 17, english: "I never miss a beat, I'm lightning on my feet", chinese: "我從不錯過任何節奏，腳步輕盈如閃電" },
  { id: 18, english: "And that's what they don't see, that's what they don't see", chinese: "那是他們看不見的一面，他們根本不懂" },
  { id: 19, english: "I'm dancing on my own, I make the moves up as I go", chinese: "我獨自起舞，隨心所欲自創舞步" },
  { id: 20, english: "And that's what they don't know, that's what they don't know", chinese: "而那是他們一無所知的，他們完全不了解" },
  { id: 21, english: "But I keep cruising", chinese: "但我依舊悠然前行" },
  { id: 22, english: "Can't stop, won't stop grooving", chinese: "無法停歇，停不下的搖擺節奏" },
  { id: 23, english: "It's like I got this music in my mind", chinese: "就像我的腦海中響起這段旋律" },
  { id: 24, english: "Saying it's gonna be alright", chinese: "唱著一切都會好轉的" },
  { id: 25, english: "Cause the players gonna play, play, play, play, play", chinese: "因為情場浪子終究四處留情" },
  { id: 26, english: "And the haters gonna hate, hate, hate, hate, hate", chinese: "而酸民黑粉永遠滿口酸言" },
  { id: 27, english: "Baby, I'm just gonna shake, shake, shake, shake, shake", chinese: "親愛的，我只想盡情搖擺" },
  { id: 28, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 29, english: "Heartbreakers gonna break, break, break, break, break", chinese: "薄情負心漢總會傷人透骨" },
  { id: 30, english: "And the fakers gonna fake, fake, fake, fake, fake", chinese: "虛情假意者依然裝模作樣" },
  { id: 31, english: "Baby, I'm just gonna shake, shake, shake, shake, shake", chinese: "親愛的，我只想盡情搖擺" },
  { id: 32, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 33, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 34, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" },
  { id: 35, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" },
  { id: 36, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" },
  { id: 37, english: "Hey, hey, hey!", chinese: "嘿！嘿！嘿！" },
  { id: 38, english: "Just think while you've been getting down and out about the liars", chinese: "想想看，當你為了那些說謊者而沮喪落魄時" },
  { id: 39, english: "And dirty, dirty cheats of the world you could've been getting down to this sick beat", chinese: "與這世上的卑鄙騙子糾纏時，你本可以跟著這超讚節奏嗨起來" },
  { id: 40, english: "My ex-man brought his new girlfriend", chinese: "我的前任帶來了他的新歡女友" },
  { id: 41, english: "She's like, “oh my God”, but I'm just gonna shake", chinese: "她擺出一副「我的天啊」的樣子，但我只想繼續跳舞" },
  { id: 42, english: "And to the fella over there with the hella good hair", chinese: "還有那邊那位頂著一頭超好看頭髮的帥哥" },
  { id: 43, english: "Won't you come on over, baby, we can shake, shake, shake", chinese: "何不過來這裡，寶貝，我們一起搖擺吧" },
  { id: 44, english: "Cause the players gonna play, play, play, play, play", chinese: "因為情場浪子終究四處留情" },
  { id: 45, english: "And the haters gonna hate, hate, hate, hate, hate", chinese: "而酸民黑粉永遠滿口酸言" },
  { id: 46, english: "Baby, I'm just gonna shake, shake, shake, shake, shake", chinese: "親愛的，我只想盡情搖擺" },
  { id: 47, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 48, english: "Heartbreakers gonna break, break, break, break, break", chinese: "薄情負心漢總會傷人透骨" },
  { id: 49, english: "And the fakers gonna fake, fake, fake, fake, fake", chinese: "虛情假意者依然裝模作樣" },
  { id: 50, english: "Baby, I'm just gonna shake, shake, shake, shake, shake", chinese: "親愛的，我只想盡情搖擺" },
  { id: 51, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 52, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 53, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" },
  { id: 54, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" },
  { id: 55, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" },
  { id: 56, english: "I shake it off, I shake it off", chinese: "把煩惱全甩掉，全部甩開" },
  { id: 57, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" },
  { id: 58, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" },
  { id: 59, english: "I, I, I shake it off, I shake it off", chinese: "我通通甩開，全甩掉" }
];

export const SHAKE_IT_OFF_LINES: SongLine[] = SHAKE_IT_OFF_RAW_LINES.map(line => ({
  id: line.id,
  english: line.english,
  chinese: line.chinese,
  words: parseLineWords(line.english, line.id, 'sio')
}));

export const SHAKE_IT_OFF_VOCABULARY: SongWord[] = extractSongVocabulary(SHAKE_IT_OFF_LINES);

export const SHAKE_IT_OFF_SONG: SongItem = {
  id: 'shake-it-off',
  title: 'Shake It Off',
  artist: 'Taylor Swift (泰勒絲)',
  album: '1989',
  year: '2014',
  genre: 'Dance-Pop / Synth-Pop',
  coverEmoji: '💃',
  accentColor: 'from-sky-500 via-pink-500 to-indigo-600',
  description: '動感狂潮洗腦神曲！自信瀟灑甩開所有酸言酸語與世俗雜念，隨著超強節奏搖擺起舞。',
  totalLines: SHAKE_IT_OFF_LINES.length,
  totalWords: SHAKE_IT_OFF_VOCABULARY.length,
  lines: SHAKE_IT_OFF_LINES,
  vocabulary: SHAKE_IT_OFF_VOCABULARY
};

// ==========================================
// 4. We Are Never Ever Getting Back Together
// ==========================================
const WANEGBT_RAW_LINES: { id: number; english: string; chinese: string }[] = [
  { id: 1, english: "I remember when we broke up, the first time", chinese: "我還記得我們第一次分手的時候" },
  { id: 2, english: "Saying, this is it, I've had enough", chinese: "說著：就這樣了，我受夠了" },
  { id: 3, english: "Cause like we hadn't seen each other in a month", chinese: "因為我們好像整整一個月都沒見面" },
  { id: 4, english: "When you, said you, needed space (what)", chinese: "當時你說，你需要個人空間（什麼鬼？）" },
  { id: 5, english: "Then you come around again and say", chinese: "然後你又回過頭來對我說" },
  { id: 6, english: "Baby, I miss you and I swear I'm gonna change, trust me", chinese: "寶貝，我想妳，我發誓我會改變，相信我" },
  { id: 7, english: "Remember how that lasted for a day?", chinese: "還記得那誓言維持了多久嗎？才一天！" },
  { id: 8, english: "I say, I hate you, we break up, you call me, I love you", chinese: "我說我討厭你、我們分手，你又打來說我愛妳" },
  { id: 9, english: "Oh we called it off again last night", chinese: "噢，昨晚我們又宣布分手了" },
  { id: 10, english: "But oh, this time I'm telling you, I'm telling you", chinese: "但噢，這次我是認真的告訴你，我跟你說" },
  { id: 11, english: "We are never ever, ever getting back together", chinese: "我們絕、對、絕、對不可能復合了" },
  { id: 12, english: "We are never ever, ever getting back together", chinese: "我們永遠不可能再重修舊好" },
  { id: 13, english: "You go talk to your friends, talk to my friends, talk to me", chinese: "你去向你的朋友傾訴，跟我朋友訴苦，再來找我" },
  { id: 14, english: "But we are never ever, ever, ever getting back together", chinese: "但我們永永遠遠都絕對不會復合" },
  { id: 15, english: "Like, ever", chinese: "真的，永遠不" },
  { id: 16, english: "I'm really gonna miss you picking fights", chinese: "我真的會好「懷念」你總是無事生非找我吵架" },
  { id: 17, english: "And me, falling for it screaming that I'm right", chinese: "而我總是不甘示弱尖叫大喊我才是對的" },
  { id: 18, english: "And you, would hide away and find your peace of mind", chinese: "然後你躲得遠遠的，尋求你所謂的內心平靜" },
  { id: 19, english: "With some indie record that's much cooler than mine", chinese: "聽著自認比我的歌酷得多的獨立樂團唱片" },
  { id: 20, english: "Oh, you called me up again tonight", chinese: "噢，今晚你竟然又打電話給我" },
  { id: 21, english: "But oh, this time I'm telling you, I'm telling you", chinese: "但噢，這次我是認真的告訴你，我跟你說" },
  { id: 22, english: "We are never ever, ever getting back together", chinese: "我們絕、對、絕、對不可能復合了" },
  { id: 23, english: "We are never ever, ever getting back together", chinese: "我們永遠不可能再重修舊好" },
  { id: 24, english: "You go talk to your friends, talk to my friends, talk to me (talk to me)", chinese: "你去向你的朋友傾訴，跟我朋友訴苦，再來找我（找我說）" },
  { id: 25, english: "But we are never ever, ever, ever getting back together", chinese: "但我們永永遠遠都絕對不會復合" },
  { id: 26, english: "Oh yeah, oh yeah, oh yeah", chinese: "噢沒錯，噢是的，千真萬確" },
  { id: 27, english: "Oh oh oh", chinese: "噢～噢～噢" },
  { id: 28, english: "I used to think that we were forever ever, ever", chinese: "我曾經以為我們會永遠永遠走下去" },
  { id: 29, english: "And I used to say, never say never", chinese: "而且我曾經深信「永不言絕」" },
  { id: 30, english: "Huh, so he calls me up and he's like, I still love you", chinese: "呵，他剛打給我說「我依然愛妳」" },
  { id: 31, english: "And I'm like I just I mean this is exhausting, you know, like", chinese: "我心想「天啊這簡直讓人筋疲力竭，你懂嗎」" },
  { id: 32, english: "We are never getting back together like, ever", chinese: "我們是絕對絕對不可能復合的，永遠不！" },
  { id: 33, english: "No", chinese: "絕不！" },
  { id: 34, english: "We are never ever, ever getting back together", chinese: "我們絕、對、絕、對不可能復合了" },
  { id: 35, english: "We are never ever, ever getting back together", chinese: "我們永遠不可能再重修舊好" },
  { id: 36, english: "You go talk to your friends, talk to my friends, talk to me", chinese: "你去向你的朋友傾訴，跟我朋友訴苦，再來找我" },
  { id: 37, english: "But we are never ever ever ever getting back together", chinese: "但我們永永遠遠都絕對不會復合" },
  { id: 38, english: "We, are not getting back together", chinese: "我們，絕對不會復合" },
  { id: 39, english: "We, ooh oh, getting back together", chinese: "我們，噢，絕不可能再在一起" },
  { id: 40, english: "You go talk to your friends, talk to my friends, talk to me (talk to me)", chinese: "你去向你的朋友傾訴，跟我朋友訴苦，再來找我（找我說）" },
  { id: 41, english: "But we are never ever, ever, ever getting back together", chinese: "但我們永永遠遠都絕對不會復合" }
];

export const WANEGBT_LINES: SongLine[] = WANEGBT_RAW_LINES.map(line => ({
  id: line.id,
  english: line.english,
  chinese: line.chinese,
  words: parseLineWords(line.english, line.id, 'wanegbt')
}));

export const WANEGBT_VOCABULARY: SongWord[] = extractSongVocabulary(WANEGBT_LINES);

export const WANEGBT_SONG: SongItem = {
  id: 'we-are-never-ever-getting-back-together',
  title: 'We Are Never Ever Getting Back Together',
  artist: 'Taylor Swift (泰勒絲)',
  album: 'Red',
  year: '2012',
  genre: 'Pop Rock / Bubblegum Pop',
  coverEmoji: '💔',
  accentColor: 'from-rose-600 via-red-500 to-amber-600',
  description: '泰勒絲首支告示牌冠軍神單！果斷瀟灑切斷有毒反覆分合戀情，超洗腦口語歌詞與爽快節奏。',
  totalLines: WANEGBT_LINES.length,
  totalWords: WANEGBT_VOCABULARY.length,
  lines: WANEGBT_LINES,
  vocabulary: WANEGBT_VOCABULARY
};

// ==========================================
// 5. You Belong With Me
// ==========================================
const YBWM_RAW_LINES: { id: number; english: string; chinese: string }[] = [
  { id: 1, english: "You're on the phone with your girlfriend, she's upset", chinese: "你正在和女友講電話，她聽起來很不高興" },
  { id: 2, english: "She's going off about something that you said", chinese: "她因為你說的某些話而大發雷霆" },
  { id: 3, english: "'Cause she doesn't get your humor like I do", chinese: "因為她根本不像我那樣懂你的幽默" },
  { id: 4, english: "I'm in the room, it's a typical Tuesday night", chinese: "我在房間裡，這是一個平凡的週二夜晚" },
  { id: 5, english: "I'm listening to the kind of music she doesn't like", chinese: "我聽著那種她根本不喜歡的音樂" },
  { id: 6, english: "And she'll never know your story like I do", chinese: "而她永遠不會像我這樣了解你的故事" },
  { id: 7, english: "But she wears short skirts, I wear T-shirts", chinese: "她穿著超短窄裙，而我只穿著普通T恤" },
  { id: 8, english: "She's Cheer Captain and I'm on the bleachers", chinese: "她是啦啦隊隊長，而我只是看台上的觀眾" },
  { id: 9, english: "Dreaming about the day when you wake up and find", chinese: "夢想著某天你一覺醒來終於發覺" },
  { id: 10, english: "That what you're looking for has been here the whole time", chinese: "你一直在追尋的真愛，其實一直都在這裡" },
  { id: 11, english: "If you could see that I'm the one who understands you", chinese: "如果你能看出，我才是那個真正懂你的人" },
  { id: 12, english: "Been here all along, so why can't you see?", chinese: "我一直都在這裡，為什麼你就是看不見？" },
  { id: 13, english: "You, you belong with me, you belong with me", chinese: "你，你應該和我在一起，屬於我" },
  { id: 14, english: "Walking the streets with you and your worn-out jeans", chinese: "和你一起漫步在街頭，你看起來穿著那條破舊牛仔褲" },
  { id: 15, english: "I can't help thinking this is how it ought to be", chinese: "我忍不住心想，這才應該是愛情的模樣" },
  { id: 16, english: "Laughing on a park bench, thinking to myself", chinese: "坐在公園長椅上歡笑，我心裡想著" },
  { id: 17, english: "Hey, isn't this easy?", chinese: "嘿，我們相處起來不是如此自在輕鬆嗎？" },
  { id: 18, english: "And you've got a smile that could light up this whole town", chinese: "你的微笑璀璨得足以照亮整個小鎮" },
  { id: 19, english: "I haven't seen it in a while since she brought you down", chinese: "自從她讓你傷心後，我已經好久沒看到你的笑容了" },
  { id: 20, english: "You say you're fine, I know you better than that", chinese: "你說你沒事，但我比誰都更了解你" },
  { id: 21, english: "Hey, what ya doing with a girl like that?", chinese: "嘿，你到底跟那樣的女生在一起做什麼？" },
  { id: 22, english: "She wears high heels, I wear sneakers", chinese: "她穿著高跟鞋，而我穿著球鞋" },
  { id: 23, english: "She's Cheer Captain and I'm on the bleachers", chinese: "她是啦啦隊隊長，而我只是看台上的觀眾" },
  { id: 24, english: "Dreaming about the day when you wake up and find", chinese: "夢想著某天你一覺醒來終於發覺" },
  { id: 25, english: "That what you're looking for has been here the whole time", chinese: "你一直在追尋的真愛，其實一直都在這裡" },
  { id: 26, english: "If you could see that I'm the one who understands you", chinese: "如果你能看出，我才是那個真正懂你的人" },
  { id: 27, english: "Been here all along, so why can't you see?", chinese: "我一直都在這裡，為什麼你就是看不見？" },
  { id: 28, english: "You belong with me", chinese: "你應該和我在一起" },
  { id: 29, english: "Standing by and waiting at your back door", chinese: "默默守候在你的後門外等待著" },
  { id: 30, english: "All this time how could you not know?", chinese: "這麼久了，你怎麼可能都不知道？" },
  { id: 31, english: "Baby, you belong with me, you belong with me", chinese: "親愛的，你屬於我，你應該跟我在一起" },
  { id: 32, english: "Oh, I remember you driving to my house in the middle of the night", chinese: "噢，我還記得你在半夜開車來找我" },
  { id: 33, english: "I'm the one who makes you laugh when you know you're 'bout to cry", chinese: "當你快要哭出來時，是我逗你破涕為笑" },
  { id: 34, english: "And I know your favorite songs and you tell me 'bout your dreams", chinese: "我熟記你最愛的歌，而你對我訴說夢想" },
  { id: 35, english: "Think I know where you belong, think I know it's with me", chinese: "我想我知道你的歸宿在哪，我知道那就是我身邊" },
  { id: 36, english: "Can't you see that I'm the one who understands you?", chinese: "你難道看不出我才是最懂你的人嗎？" },
  { id: 37, english: "Been here all along, so why can't you see?", chinese: "我一直都在這裡，為什麼你就是看不見？" },
  { id: 38, english: "You belong with me", chinese: "你應該和我在一起" },
  { id: 39, english: "Standing by and waiting at your back door", chinese: "默默守候在你的後門外等待著" },
  { id: 40, english: "All this time, how could you not know?", chinese: "這麼久了，你怎麼可能都不知道？" },
  { id: 41, english: "Baby, you belong with me, you belong with me", chinese: "親愛的，你屬於我，你應該跟我在一起" },
  { id: 42, english: "You belong with me", chinese: "你應該和我在一起" },
  { id: 43, english: "Have you ever thought just maybe", chinese: "你難道從沒想過，也許" },
  { id: 44, english: "You belong with me?", chinese: "你本就該和我在一起？" },
  { id: 45, english: "You belong with me", chinese: "你屬於我" }
];

export const YBWM_LINES: SongLine[] = YBWM_RAW_LINES.map(line => ({
  id: line.id,
  english: line.english,
  chinese: line.chinese,
  words: parseLineWords(line.english, line.id, 'ybwm')
}));

export const YBWM_VOCABULARY: SongWord[] = extractSongVocabulary(YBWM_LINES);

export const YBWM_SONG: SongItem = {
  id: 'you-belong-with-me',
  title: 'You Belong With Me',
  artist: 'Taylor Swift (泰勒絲)',
  album: 'Fearless',
  year: '2008',
  genre: 'Country Pop / Teen Pop',
  coverEmoji: '🎸',
  accentColor: 'from-amber-500 via-yellow-500 to-indigo-600',
  description: '全球億萬傳唱的青澀暗戀經典！「看台上的我與啦啦隊長她」，最真摯動人的青春告白。',
  totalLines: YBWM_LINES.length,
  totalWords: YBWM_VOCABULARY.length,
  lines: YBWM_LINES,
  vocabulary: YBWM_VOCABULARY
};

// ==========================================
// 6. Blank Space (Taylor Swift - 1989)
// ==========================================
const BLANK_SPACE_RAW_LINES: { id: number; english: string; chinese: string }[] = [
  { id: 1, english: "Nice to meet you, where you been?", chinese: "很高興認識你，你之前都在哪裡？" },
  { id: 2, english: "I could show you incredible things", chinese: "我可以帶你見識不可思議的世界" },
  { id: 3, english: "Magic, madness, heaven, sin", chinese: "魔法、瘋狂、天堂與罪孽" },
  { id: 4, english: "Saw you there and I thought", chinese: "看見你在那裡，我心想" },
  { id: 5, english: "Oh my God, look at that face", chinese: "我的天啊，看看那張迷人的臉龐" },
  { id: 6, english: "You look like my next mistake", chinese: "你簡直就是我的下一個美麗錯誤" },
  { id: 7, english: "Love's a game, wanna play?", chinese: "愛情就是一場遊戲，想一起玩嗎？" },
  { id: 8, english: "New money, suit and tie", chinese: "新貴富豪、西裝革履繫上領帶" },
  { id: 9, english: "I can read you like a magazine", chinese: "我能像翻閱雜誌一樣將你看得一清二楚" },
  { id: 10, english: "Ain't it funny, rumors fly", chinese: "這不可笑嗎？流言蜚語滿天飛" },
  { id: 11, english: "And I know you heard about me", chinese: "我也知道你早就聽過關於我的傳聞" },
  { id: 12, english: "So hey, let's be friends", chinese: "所以嘿，我們就先當朋友吧" },
  { id: 13, english: "I'm dying to see how this one ends", chinese: "我迫不及待想看看這段感情如何收場" },
  { id: 14, english: "Grab your passport and my hand", chinese: "帶上你的護照，牽起我的手" },
  { id: 15, english: "I can make the bad guys good for a weekend", chinese: "我能讓壞男孩在這個週末為我改邪歸正" },
  { id: 16, english: "So it's gonna be forever", chinese: "所以這會是天長地久" },
  { id: 17, english: "Or it's gonna go down in flames", chinese: "亦或會在烈焰中轟轟烈烈毀於一旦" },
  { id: 18, english: "You can tell me when it's over", chinese: "當一切結束時你可以告訴我" },
  { id: 19, english: "If the high was worth the pain", chinese: "那時的高潮刺激是否值得現在的痛苦" },
  { id: 20, english: "Got a long list of ex-lovers", chinese: "我有一長串的前任戀人名單" },
  { id: 21, english: "They'll tell you I'm insane", chinese: "他們都會告訴你我簡直是個瘋子" },
  { id: 22, english: "'Cause you know I love the players", chinese: "因為你知道我著迷於調情高手" },
  { id: 23, english: "And you love the game", chinese: "而你也深愛著這場愛情遊戲" },
  { id: 24, english: "'Cause we're young and we're reckless", chinese: "因為我們年輕且無所畏懼" },
  { id: 25, english: "We'll take this way too far", chinese: "我們會把這段關係玩得太過火" },
  { id: 26, english: "It'll leave you breathless", chinese: "它會讓你屏息沈醉" },
  { id: 27, english: "Or with a nasty scar", chinese: "或留下難以撫平的醜陋傷疤" },
  { id: 28, english: "Got a long list of ex-lovers", chinese: "我有一長串的前任名單" },
  { id: 29, english: "They'll tell you I'm insane", chinese: "他們會告訴你我是個瘋狂的女人" },
  { id: 30, english: "But I've got a blank space baby", chinese: "但在我這還有個空白名額，寶貝" },
  { id: 31, english: "And I'll write your name", chinese: "我會把你的名字寫上去" },
  { id: 32, english: "Cherry lips, crystal skies", chinese: "櫻桃紅唇、水晶般澄澈的天空" },
  { id: 33, english: "I could show you incredible things", chinese: "我可以帶你見識不可思議的一切" },
  { id: 34, english: "Stolen kisses, pretty lies", chinese: "偷來的熱吻、美麗的謊言" },
  { id: 35, english: "You're the king baby I'm your Queen", chinese: "你是我的國王，寶貝我是你的皇后" },
  { id: 36, english: "Find out what you want", chinese: "摸清你心中到底想要什麼" },
  { id: 37, english: "Be that girl for a month", chinese: "就做那個讓你著迷的女孩一個月" },
  { id: 38, english: "Wait the worst is yet to come, oh no", chinese: "等等，最可怕的噩夢還在後頭呢，噢不" },
  { id: 39, english: "Screaming, crying, perfect storm", chinese: "歇斯底里的尖叫、痛哭，如同一場完美風暴" },
  { id: 40, english: "I can make all the tables turn", chinese: "我能徹底扭轉局勢反敗為勝" },
  { id: 41, english: "Rose gardens filled with thorns", chinese: "看似浪漫的玫瑰花園裡其實布滿荊棘" },
  { id: 42, english: "Keep you second guessing like", chinese: "讓你不斷胡思亂想猜疑" },
  { id: 43, english: "\"Oh my God, who is she?\"", chinese: "「我的天，那個女人又是誰？」" },
  { id: 44, english: "I get drunk on jealousy", chinese: "我沉醉在強烈的嫉妒怒火中" },
  { id: 45, english: "But you'll come back each time you leave", chinese: "但每次你離開後總會乖乖回來" },
  { id: 46, english: "'Cause darling I'm a nightmare dressed like a daydream", chinese: "因為親愛的，我就是穿著白日夢華服的致命噩夢" },
  { id: 47, english: "So it's gonna be forever", chinese: "所以這會是永恆" },
  { id: 48, english: "Or it's gonna go down in flames", chinese: "或是會在火海中灰飛煙滅" },
  { id: 49, english: "You can tell me when it's over", chinese: "結束時你可以親口告訴我" },
  { id: 50, english: "If the high was worth the pain", chinese: "那片刻的歡愉是否抵得過這份痛" },
  { id: 51, english: "Got a long list of ex-lovers", chinese: "我有一長串的前任戀人名單" },
  { id: 52, english: "They'll tell you I'm insane", chinese: "他們會告訴你我瘋了" },
  { id: 53, english: "'Cause you know I love the players", chinese: "因為你知道我愛那些情場浪子" },
  { id: 54, english: "And you love the game", chinese: "而你也深愛這場遊戲" },
  { id: 55, english: "'Cause we're young and we're reckless", chinese: "因為我們青春年少、肆無忌憚" },
  { id: 56, english: "We'll take this way too far", chinese: "我們會把這段關係推向極致" },
  { id: 57, english: "It'll leave you breathless", chinese: "它會讓你喘不過氣" },
  { id: 58, english: "Or with a nasty scar", chinese: "或是留下難以痊癒的傷痕" },
  { id: 59, english: "Got a long list of ex-lovers", chinese: "我有長長一列前任名單" },
  { id: 60, english: "They'll tell you I'm insane (Insane)", chinese: "他們都會說我瘋狂（太瘋狂）" },
  { id: 61, english: "But I've got a blank space baby", chinese: "但我的清單上還有個空格，寶貝" },
  { id: 62, english: "And I'll write your name", chinese: "我會填上你的名字" },
  { id: 63, english: "Boys only want love if it's torture", chinese: "男孩們只有在愛如折磨時才懂得珍惜" },
  { id: 64, english: "Don't say I didn't say I didn't warn ya", chinese: "別說我沒事先給過你警告" },
  { id: 65, english: "Boys only want love if it's torture", chinese: "男孩們總把折磨當成刻骨銘心的愛" },
  { id: 66, english: "Don't say I didn't say I didn't warn ya", chinese: "別說我從未提醒警告過你" },
  { id: 67, english: "So it's gonna be forever", chinese: "所以這會是天長地久" },
  { id: 68, english: "Or it's gonna go down in flames", chinese: "還是轟然墜入烈焰化為灰燼" },
  { id: 69, english: "You can tell me when it's over", chinese: "散場時你可以告訴我" },
  { id: 70, english: "If the high was worth the pain", chinese: "當初的興奮狂喜是否值得後來的痛楚" },
  { id: 71, english: "Got a long list of ex-lovers", chinese: "我有一長串前任戀人名單" },
  { id: 72, english: "They'll tell you I'm insane", chinese: "他們都會跟你說我瘋狂至極" },
  { id: 73, english: "'Cause you know I love the players", chinese: "因為你知道我深愛情場玩家" },
  { id: 74, english: "And you love the game", chinese: "而你也對這遊戲樂此不疲" },
  { id: 75, english: "'Cause we're young and we're reckless", chinese: "因為我們年輕衝動、無畏無懼" },
  { id: 76, english: "We'll take this way too far", chinese: "我們會把這段感情玩到失控邊緣" },
  { id: 77, english: "It'll leave you breathless", chinese: "它會讓你神魂顛倒屏息" },
  { id: 78, english: "Or with a nasty scar", chinese: "或者留下一道深深的惡劣疤痕" },
  { id: 79, english: "Got a long list of ex-lovers", chinese: "我有一張長長的前任名單" },
  { id: 80, english: "They'll tell you I'm insane", chinese: "他們會告訴你我是個瘋子" },
  { id: 81, english: "But I've got a blank space baby", chinese: "但我這還有個空白名額，親愛的" },
  { id: 82, english: "And I'll write your name", chinese: "而我會在上頭寫上你的名字" }
];

export const BLANK_SPACE_LINES: SongLine[] = BLANK_SPACE_RAW_LINES.map(line => ({
  ...line,
  words: parseLineWords(line.english, line.id, 'bs')
}));

export const BLANK_SPACE_VOCABULARY: SongWord[] = extractSongVocabulary(BLANK_SPACE_LINES);

export const BLANK_SPACE_SONG: SongItem = {
  id: 'blank-space',
  title: 'Blank Space',
  artist: 'Taylor Swift (泰勒絲)',
  album: '1989',
  year: '2014',
  genre: 'Electropop / Synth-pop',
  coverEmoji: '🖊️',
  accentColor: 'from-rose-500 via-pink-600 to-slate-900',
  description: '告示牌連冠神曲！以自嘲口吻寫盡情場狂瀾，極致諷刺與反差美感。',
  totalLines: BLANK_SPACE_LINES.length,
  totalWords: BLANK_SPACE_VOCABULARY.length,
  lines: BLANK_SPACE_LINES,
  vocabulary: BLANK_SPACE_VOCABULARY
};

// ==========================================
// 7. Five Loaves And Two Fishes (Corrinne May)
// ==========================================
const FIVE_LOAVES_RAW_LINES: { id: number; english: string; chinese: string }[] = [
  { id: 1, english: "A little boy of thirteen was on his way to school", chinese: "一個十三歲的小男孩在去上學的路上" },
  { id: 2, english: "He heard a crowd of people laughing and he went to take a look", chinese: "他聽到人群歡笑的聲音，便湊上前去瞧瞧" },
  { id: 3, english: "Thousands were listening to the stories of one man", chinese: "數以千計的人正凝神傾聽著一個人講故事" },
  { id: 4, english: "He spoke with such wisdom, even the kids could understand", chinese: "他充滿深邃智慧的言語，連小孩子都能完全聽懂" },
  { id: 5, english: "The hours passed so quickly, the day turned to night", chinese: "時光飛逝，不知不覺已從白天漸入深夜" },
  { id: 6, english: "Everyone was hungry but there was no food in sight", chinese: "眾人都飢腸轆轆，但四周卻看不見任何食物" },
  { id: 7, english: "The boy looked in his lunchbox at the little that he had", chinese: "男孩看了看自己的餐盒，裡面只有微薄的食物" },
  { id: 8, english: "He wasn't sure what good it'd do, there were thousands to be fed", chinese: "面對幾千張要餵飽的嘴，他不確定這能管什麼用" },
  { id: 9, english: "But he saw the twinkling eyes of Jesus", chinese: "但他看到了耶穌眼中閃爍的光芒" },
  { id: 10, english: "The kindness in His smile", chinese: "以及他微笑中所流露出的無盡慈愛" },
  { id: 11, english: "And the boy cried out", chinese: "於是小男孩情不自禁地大聲呼喊" },
  { id: 12, english: "With the trust of a child", chinese: "懷著如孩童般最純真無邪的信任" },
  { id: 13, english: "He said:", chinese: "他說：" },
  { id: 14, english: "\"Take my five loaves and two fishes", chinese: "「拿去我的五個餅和兩條魚吧" },
  { id: 15, english: "Do with it as you will", chinese: "隨照您的心意自由去行" },
  { id: 16, english: "I surrender", chinese: "我完全交託順服" },
  { id: 17, english: "Take my fears and my inhibitions", chinese: "帶走我的恐懼與種種顧忌" },
  { id: 18, english: "All my burdens, my ambitions", chinese: "卸下我所有的重擔與人生的野心" },
  { id: 19, english: "You can use it all to feed them all\"", chinese: "您可以善用這一切，去餵飽現場所有的人」" },
  { id: 20, english: "I often think about that boy when I'm feeling small", chinese: "每當我覺得自己卑微渺小、力不從心時，常會想起那個男孩" },
  { id: 21, english: "And I worry that the work I do means nothing at all", chinese: "我也曾擔心自己所做的努力是否根本毫無意義" }
];

export const FIVE_LOAVES_LINES: SongLine[] = FIVE_LOAVES_RAW_LINES.map(line => ({
  ...line,
  words: parseLineWords(line.english, line.id, 'fl')
}));

export const FIVE_LOAVES_VOCABULARY: SongWord[] = extractSongVocabulary(FIVE_LOAVES_LINES);

export const FIVE_LOAVES_SONG: SongItem = {
  id: 'five-loaves-and-two-fishes',
  title: 'Five Loaves And Two Fishes',
  artist: 'Corrinne May',
  album: 'Fly Away',
  year: '2001',
  genre: 'Acoustic / Contemporary Christian',
  coverEmoji: '🍞',
  accentColor: 'from-amber-500 via-orange-600 to-indigo-900',
  description: '感人至深的典雅英文金曲！描繪小男孩獻出五餅二魚的純真信任，寓意深遠，旋律優美。',
  totalLines: FIVE_LOAVES_LINES.length,
  totalWords: FIVE_LOAVES_VOCABULARY.length,
  lines: FIVE_LOAVES_LINES,
  vocabulary: FIVE_LOAVES_VOCABULARY
};

/**
 * 取得精簡歌手名稱 (移除括號說明，例如 "Taylor Swift (泰勒絲)" -> "Taylor Swift")
 */
export function getShortArtistName(artist: string): string {
  if (!artist) return '';
  return artist.replace(/\s*\(.*?\)/g, '').trim();
}

/**
 * 取得格式化顯示名稱："最短歌手名稱 - 歌名"
 */
export function getFormattedSongTitle(song: SongItem): string {
  const shortArtist = getShortArtistName(song.artist);
  return `${shortArtist} - ${song.title}`;
}

const RAW_UNSORTED_SONGS: SongItem[] = [
  FIVE_LOAVES_SONG,
  LOVE_STORY_SONG,
  BLANK_SPACE_SONG,
  LWYMMD_SONG,
  SHAKE_IT_OFF_SONG,
  WANEGBT_SONG,
  YBWM_SONG
];

// 依據 "最短歌手名稱 - 歌名" 字母順序排序
export const ALL_SONGS: SongItem[] = [...RAW_UNSORTED_SONGS].sort((a, b) => {
  const nameA = getFormattedSongTitle(a);
  const nameB = getFormattedSongTitle(b);
  return nameA.localeCompare(nameB);
});

/**
 * 完整歌詞順序快速練習的步驟定義
 * 每句提供：'words' (第 N 句所有單字) 與 'sentence' (第 N 句整句)
 */
export interface SongPracticeStep {
  stepIndex: number;
  lineId: number;
  type: 'words' | 'sentence';
  title: string;
  line: SongLine;
}

/**
 * 產生循序混合模式的步驟陣列
 * [Line 1 所有單字, Line 1 整句, Line 2 所有單字, Line 2 整句...]
 */
export function generateSequentialPracticeSteps(lines: SongLine[]): SongPracticeStep[] {
  const steps: SongPracticeStep[] = [];
  let stepCounter = 1;

  lines.forEach(line => {
    // 階段 1: 本句所有單字拆解練習
    steps.push({
      stepIndex: stepCounter++,
      lineId: line.id,
      type: 'words',
      title: `第 ${line.id} 句 • 所有單字拆解`,
      line
    });

    // 階段 2: 本句完整歌詞朗讀練習
    steps.push({
      stepIndex: stepCounter++,
      lineId: line.id,
      type: 'sentence',
      title: `第 ${line.id} 句 • 完整歌詞朗讀`,
      line
    });
  });

  return steps;
}
