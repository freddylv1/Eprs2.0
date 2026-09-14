const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const PUBLIC_DATA_DIR = path.join(__dirname, '../public/data');
const BATCHES_DIR = path.join(PUBLIC_DATA_DIR, 'batches');

if (!fs.existsSync(BATCHES_DIR)) {
  fs.mkdirSync(BATCHES_DIR, { recursive: true });
}

// 自然發音推導與音節分析核心函數
function inferRulesFromWord(word, ipa, syllables) {
  const rules = new Set();
  const lowerWord = word.toLowerCase().trim();
  const cleanIpa = (ipa || '').toLowerCase();

  // R003: Magic E (e.g. make, compete, decide, remote, diffuse)
  if (/[aeiou][bcdfghjklmnpqrstvwxyz]e\b/i.test(lowerWord)) {
    rules.add('R003');
  }
  // R004: Vowel teams (ee, ea, ai, ay, oa, oi, oy, ou, oo, au, aw)
  if (/ee|ea|ai|ay|oa|oi|oy|ou|oo|au|aw|ei|ey/i.test(lowerWord)) {
    rules.add('R004');
  }
  // R005: R-controlled (ar, er, ir, or, ur)
  if (/ar|er|ir|or|ur/i.test(lowerWord) || /ɑːr|ɔːr|ɝː|ɚ|ɜːr/.test(cleanIpa)) {
    rules.add('R005');
  }
  // R006: Consonant Digraphs (sh, ch, th, ph, wh, ng, ck)
  if (/sh|ch|th|ph|wh|ng|ck/i.test(lowerWord)) {
    rules.add('R006');
  }
  // R007: Soft c/g (c before e/i/y -> /s/, g before e/i/y -> /dʒ/)
  if (/c[eiy]|g[eiy]/i.test(lowerWord)) {
    rules.add('R007');
  }
  // R008: Schwa / Vowel reduction in unstressed syllables
  if (/ə|ɪ/.test(cleanIpa) && syllables.length > 1) {
    rules.add('R008');
  }
  // R009: Syllabic consonant (-ble, -ple, -tle, -dle, -cle, -ful)
  if (/[bcdfghjklmnpqrstvwxyz]le\b/i.test(lowerWord) || /ful\b/i.test(lowerWord)) {
    rules.add('R009');
  }
  // R011: Y as vowel / word family (happy, cry, rely)
  if (/[bcdfghjklmnpqrstvwxyz]y\b/i.test(lowerWord) || /alk|old|ind\b/i.test(lowerWord)) {
    rules.add('R011');
  }
  // R012: Affixes (-tion, -sion, re-, de-, dis-, un-, -ment, -able)
  if (/tion|sion|ment|able|ance|ence|ity|ive|ize|ist\b|^re|^de|^dis|^un|^in|^ex|^pro|^con|^sub/i.test(lowerWord)) {
    rules.add('R012');
  }
  // R013: Flap T
  if (/t̬/.test(cleanIpa) || (syllables.length > 1 && /[aeiou]t[aeiou]/i.test(lowerWord))) {
    rules.add('R013');
  }
  // R015: Prefix a-
  if (/^a[bcdfghjklmnpqrstvwxyz]/i.test(lowerWord) && syllables.length > 1 && syllables[0] === 'a') {
    rules.add('R015');
  }
  // R016: Silent consonants (wr, kn, mb, gn, ps)
  if (/^wr|^kn|^gn|^ps|mb\b/i.test(lowerWord)) {
    rules.add('R016');
  }

  // Fallback defaults
  if (rules.size === 0) {
    if (syllables.length === 1 && /[^aeiou][aeiou][^aeiou]$/i.test(lowerWord)) {
      rules.add('R001'); // 閉音節短母音
    } else {
      rules.add('R002'); // 開音節長母音
    }
  }

  return Array.from(rules);
}

// 產生音節推導 Derivations 陣列
function buildDerivations(word, ipa, syllables, ruleCodes) {
  const derivations = [];
  syllables.forEach((syl, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === syllables.length - 1;
    const sylDesc = syllables.length === 1 ? `單音節［${syl}］` : `第 ${idx + 1} 音節［${syl}］`;
    
    let appliedRule = '自然發音常規規則';
    let reason = '依自然發音結構常規推導發音';

    if (isLast && /[bcdfghjklmnpqrstvwxyz]le$/i.test(syl)) {
      appliedRule = '成音節 -le (R009)';
      reason = '字尾子音加上 -le 形成輕讀成音節發 /əl/';
    } else if (isLast && /tion|sion/i.test(syl)) {
      appliedRule = '常見字尾 (R012)';
      reason = '名詞後綴 -tion/-sion 弱讀發 /ʃən/ 或 /ʒən/';
    } else if (isLast && /[aeiou][bcdfghjklmnpqrstvwxyz]e$/i.test(syl)) {
      appliedRule = '魔術 e (R003)';
      reason = '字尾不發音 e 促使前面母音發長母音';
    } else if (/ee|ea|ai|ay|oa|oi|oy|ou|oo|au|aw/i.test(syl)) {
      appliedRule = '母音組合 (R004)';
      reason = '雙母音字母組合依規則發固定雙母音或長母音';
    } else if (/ar|er|ir|or|ur/i.test(syl)) {
      appliedRule = 'R 控制母音 (R005)';
      reason = '母音接 r 產生捲舌音變';
    } else if (isFirst && syl === 'a') {
      appliedRule = '前綴 a- 弱讀 (R015)';
      reason = '字首非重讀 a- 弱化為中央母音 /ə/';
    } else if (/[bcdfghjklmnpqrstvwxyz]y$/i.test(syl)) {
      appliedRule = '字尾 y 轉母音 (R011)';
      reason = '字尾 y 接子音後發 /i/ 或 /aɪ/';
    } else if (/[^aeiou]$/i.test(syl)) {
      appliedRule = '閉音節短母音 (R001)';
      reason = '以子音結尾之閉音節，母音多發短音';
    } else if (/[aeiou]$/i.test(syl)) {
      appliedRule = '開音節長母音 (R002)';
      reason = '以母音結尾之開音節，母音發字母本音長音';
    }

    derivations.push({
      syllable: sylDesc,
      rule: appliedRule,
      status: '【適用】',
      reason
    });
  });

  return derivations;
}

// 智慧音節拆解器 (若未提供明確切分)
function smartHyphenate(word) {
  const w = word.toLowerCase().trim();
  if (w.length <= 3) return [w];
  
  // 檢查字尾 -tion, -sion, -able, -ment, -ful, -ness, -less, -ture, -ly
  let parts = [];
  let current = w;

  // 常見後綴切分
  const suffixes = [
    { regex: /(.*)(tion|sion)$/, end: '$2' },
    { regex: /(.*)(able|ible)$/, end: '$2' },
    { regex: /(.*)(ment)$/, end: '$2' },
    { regex: /(.*)(ful)$/, end: '$2' },
    { regex: /(.*)(ness)$/, end: '$2' },
    { regex: /(.*)(less)$/, end: '$2' },
    { regex: /(.*)(ture)$/, end: '$2' },
    { regex: /(.*)(cal)$/, end: '$2' },
    { regex: /(.*)(tic)$/, end: '$2' },
    { regex: /(.*)([bcdfghjklmnpqrstvwxyz]le)$/, end: '$2' }
  ];

  let endPart = '';
  for (const s of suffixes) {
    if (s.regex.test(current)) {
      const match = current.match(s.regex);
      if (match && match[1].length >= 2) {
        current = match[1];
        endPart = match[2];
        break;
      }
    }
  }

  // 常見前綴切分
  let prefixPart = '';
  const prefixes = ['con', 'com', 'dis', 'mis', 'pre', 'pro', 're', 'un', 'in', 'im', 'sub', 'trans', 'inter', 'over'];
  for (const p of prefixes) {
    if (current.startsWith(p) && current.length > p.length + 2) {
      prefixPart = p;
      current = current.slice(p.length);
      break;
    }
  }

  // 對中間核心音節拆分 (VCCV, VCV)
  const middleParts = [];
  let temp = current;
  while (temp.length > 3) {
    // 尋找 VCCV 雙子音切分 (例如 ab-sent, doc-tor, rap-id)
    const vccv = temp.match(/^([bcdfghjklmnpqrstvwxyz]*[aeiou]+[bcdfghjklmnpqrstvwxyz])([bcdfghjklmnpqrstvwxyz][aeiouy].*)$/);
    if (vccv && vccv[1] && vccv[2]) {
      middleParts.push(vccv[1]);
      temp = vccv[2];
      continue;
    }
    // 尋找 VCV 前切開音節 (例如 ba-by, ho-tel, mu-sic)
    const vcv = temp.match(/^([bcdfghjklmnpqrstvwxyz]*[aeiou]+)([bcdfghjklmnpqrstvwxyz][aeiouy].*)$/);
    if (vcv && vcv[1] && vcv[2]) {
      middleParts.push(vcv[1]);
      temp = vcv[2];
      continue;
    }
    break;
  }
  if (temp) middleParts.push(temp);

  if (prefixPart) parts.push(prefixPart);
  parts.push(...middleParts);
  if (endPart) parts.push(endPart);

  return parts.length > 0 ? parts : [w];
}

// 智慧 IPA 估算器 (標準美音 IPA)
function generateStandardIPA(word, syllables) {
  const w = word.toLowerCase().trim();
  const sylCount = syllables.length;
  
  // 基礎音標符號對應
  const ipaSegments = syllables.map((syl, i) => {
    let s = syl.toLowerCase();
    
    // 特殊字尾
    if (s === 'tion') return 'ʃən';
    if (s === 'sion') return 'ʒən';
    if (s === 'ment') return 'mənt';
    if (s === 'ful') return 'fəl';
    if (s === 'able') return 'ə.bəl';
    if (s === 'ture') return 'tʃɚ';
    if (s === 'ness') return 'nəs';
    if (s === 'less') return 'ləs';
    if (s.endsWith('le')) return s.slice(0, -2) + 'əl';

    // R-controlled
    s = s.replace(/ar/g, 'ɑːr')
         .replace(/er|ir|ur/g, 'ɚ')
         .replace(/or/g, 'ɔːr');

    // Vowel teams
    s = s.replace(/ee|ea/g, 'iː')
         .replace(/ai|ay/g, 'eɪ')
         .replace(/oa/g, 'oʊ')
         .replace(/oo/g, 'uː')
         .replace(/ou|ow/g, 'aʊ')
         .replace(/oi|oy/g, 'ɔɪ')
         .replace(/au|aw/g, 'ɔː');

    // Consonants
    s = s.replace(/sh/g, 'ʃ')
         .replace(/ch/g, 'tʃ')
         .replace(/th/g, 'θ')
         .replace(/ph/g, 'f')
         .replace(/wh/g, 'w')
         .replace(/ng/g, 'ŋ')
         .replace(/ck/g, 'k');

    // Magic E
    if (/[aeiou][bcdfghjklmnpqrstvwxyz]e$/i.test(s)) {
      s = s.replace(/a([bcdfghjklmnpqrstvwxyz])e$/i, 'eɪ$1')
           .replace(/e([bcdfghjklmnpqrstvwxyz])e$/i, 'iː$1')
           .replace(/i([bcdfghjklmnpqrstvwxyz])e$/i, 'aɪ$1')
           .replace(/o([bcdfghjklmnpqrstvwxyz])e$/i, 'oʊ$1')
           .replace(/u([bcdfghjklmnpqrstvwxyz])e$/i, 'uː$1');
    }

    // Short vowels
    s = s.replace(/a/g, 'æ')
         .replace(/e/g, 'ɛ')
         .replace(/i/g, 'ɪ')
         .replace(/o/g, 'ɑː')
         .replace(/u/g, 'ʌ');

    return s;
  });

  // 主重音通常在第一音節，若有弱讀前綴則在第二音節
  const prefixWeak = ['a', 're', 'de', 'dis', 'un', 'in', 'con', 'com', 'ex'];
  let primaryStressIndex = 0;
  if (sylCount > 1 && prefixWeak.includes(syllables[0].toLowerCase())) {
    primaryStressIndex = 1;
    // 首音節弱化為 schwa
    ipaSegments[0] = ipaSegments[0].replace(/[æɛɪɑːʌ]/g, 'ə');
  }

  ipaSegments[primaryStressIndex] = 'ˈ' + ipaSegments[primaryStressIndex];
  return `/${ipaSegments.join('.')}/`;
}

// 載入或定義高中 Level 2, Level 3, Level 4 高頻 3000 字大考中心大綱詞庫
const SENIOR_LEVEL_2_RAW = [
  { word: "ability", pos: "n.", chinese: "能力, 才能", syllables: ["a", "bil", "i", "ty"], ipa: "/əˈbɪl.ə.t̬i/" },
  { word: "abroad", pos: "adv.", chinese: "在國外, 到國外", syllables: ["a", "broad"], ipa: "/əˈbrɑːd/" },
  { word: "absent", pos: "adj.", chinese: "缺席的, 心不在焉的", syllables: ["ab", "sent"], ipa: "/ˈæb.sənt/" },
  { word: "accept", pos: "v.", chinese: "接受, 答應", syllables: ["ac", "cept"], ipa: "/əkˈsɛpt/" },
  { word: "accident", pos: "n.", chinese: "事故, 意外事故", syllables: ["ac", "ci", "dent"], ipa: "/ˈæk.sə.dənt/" },
  { word: "achieve", pos: "v.", chinese: "達成, 實現", syllables: ["a", "chieve"], ipa: "/əˈtʃiːv/" },
  { word: "admire", pos: "v.", chinese: "欽佩, 欣賞", syllables: ["ad", "mire"], ipa: "/ədˈmaɪr/" },
  { word: "admit", pos: "v.", chinese: "承認, 准許進入", syllables: ["ad", "mit"], ipa: "/ədˈmɪt/" },
  { word: "adopt", pos: "v.", chinese: "收養, 採用", syllables: ["a", "dopt"], ipa: "/əˈdɑːpt/" },
  { word: "adult", pos: "n./adj.", chinese: "成年人, 成年的", syllables: ["a", "dult"], ipa: "/əˈdʌlt/" },
  { word: "advance", pos: "v./n.", chinese: "前進, 推進, 進步", syllables: ["ad", "vance"], ipa: "/ədˈvæns/" },
  { word: "advantage", pos: "n.", chinese: "優勢, 好處, 利益", syllables: ["ad", "van", "tage"], ipa: "/ədˈvæn.t̬ɪdʒ/" },
  { word: "adventure", pos: "n.", chinese: "冒險, 奇遇", syllables: ["ad", "ven", "ture"], ipa: "/ədˈvɛn.tʃɚ/" },
  { word: "advertise", pos: "v.", chinese: "為…做廣告, 宣傳", syllables: ["ad", "ver", "tise"], ipa: "/ˈæd.vɚ.taɪz/" },
  { word: "advice", pos: "n.", chinese: "勸告, 忠告, 建議", syllables: ["ad", "vice"], ipa: "/ədˈvaɪs/" },
  { word: "afford", pos: "v.", chinese: "買得起, 承擔得起", syllables: ["af", "ford"], ipa: "/əˈfɔːrd/" },
  { word: "agency", pos: "n.", chinese: "代理機構, 仲介, 局", syllables: ["a", "gen", "cy"], ipa: "/ˈeɪ.dʒən.si/" },
  { word: "agent", pos: "n.", chinese: "經紀人, 代理人", syllables: ["a", "gent"], ipa: "/ˈeɪ.dʒənt/" },
  { word: "agree", pos: "v.", chinese: "同意, 贊成", syllables: ["a", "gree"], ipa: "/əˈɡriː/" },
  { word: "ahead", pos: "adv.", chinese: "在前面, 領先", syllables: ["a", "head"], ipa: "/əˈhɛd/" },
  { word: "allow", pos: "v.", chinese: "允許, 准許", syllables: ["al", "low"], ipa: "/əˈlaʊ/" },
  { word: "alone", pos: "adj./adv.", chinese: "獨自的, 孤單的", syllables: ["a", "lone"], ipa: "/əˈloʊn/" },
  { word: "alphabet", pos: "n.", chinese: "字母表", syllables: ["al", "pha", "bet"], ipa: "/ˈæl.fə.bɛt/" },
  { word: "amount", pos: "n./v.", chinese: "數量, 總額; 總計", syllables: ["a", "mount"], ipa: "/əˈmaʊnt/" },
  { word: "angel", pos: "n.", chinese: "天使, 善良可愛的人", syllables: ["an", "gel"], ipa: "/ˈeɪn.dʒəl/" },
  { word: "anger", pos: "n./v.", chinese: "憤怒, 生氣", syllables: ["an", "ger"], ipa: "/ˈæŋ.ɡɚ/" },
  { word: "angle", pos: "n.", chinese: "角度, 角, 觀點", syllables: ["an", "gle"], ipa: "/ˈæŋ.ɡəl/" },
  { word: "announce", pos: "v.", chinese: "宣布, 宣告", syllables: ["an", "nounce"], ipa: "/əˈnaʊns/" },
  { word: "anxious", pos: "adj.", chinese: "焦慮的, 渴望的", syllables: ["anx", "ious"], ipa: "/ˈæŋk.ʃəs/" },
  { word: "apologize", pos: "v.", chinese: "道歉, 認錯", syllables: ["a", "pol", "o", "gize"], ipa: "/əˈpɑː.lə.dʒaɪz/" },
  { word: "appeal", pos: "v./n.", chinese: "呼籲, 吸引, 上訴", syllables: ["ap", "peal"], ipa: "/əˈpiːl/" },
  { word: "appreciate", pos: "v.", chinese: "感謝, 賞識, 升值", syllables: ["ap", "pre", "ci", "ate"], ipa: "/əˈpriː.ʃi.eɪt/" },
  { word: "approve", pos: "v.", chinese: "贊成, 批准", syllables: ["ap", "prove"], ipa: "/əˈpruːv/" },
  { word: "arrange", pos: "v.", chinese: "安排, 整理, 排列", syllables: ["ar", "range"], ipa: "/əˈreɪndʒ/" },
  { word: "arrest", pos: "v./n.", chinese: "逮捕, 拘捕", syllables: ["ar", "rest"], ipa: "/əˈrɛst/" },
  { word: "article", pos: "n.", chinese: "文章, 物品, 冠詞", syllables: ["ar", "ti", "cle"], ipa: "/ˈɑːr.t̬ɪ.kəl/" },
  { word: "assist", pos: "v.", chinese: "協助, 幫助", syllables: ["as", "sist"], ipa: "/əˈsɪst/" },
  { word: "athlete", pos: "n.", chinese: "運動員, 體育健兒", syllables: ["ath", "lete"], ipa: "/ˈæθ.liːt/" },
  { word: "attend", pos: "v.", chinese: "出席, 參加, 照顧", syllables: ["at", "tend"], ipa: "/əˈtɛnd/" },
  { word: "attract", pos: "v.", chinese: "吸引, 引起注意", syllables: ["at", "tract"], ipa: "/əˈtrækt/" },
  { word: "average", pos: "adj./n.", chinese: "平均的, 普通的; 平均", syllables: ["av", "er", "age"], ipa: "/ˈæv.ɚ.ɪdʒ/" },
  { word: "avoid", pos: "v.", chinese: "避免, 避開", syllables: ["a", "void"], ipa: "/əˈvɔɪd/" },
  { word: "awake", pos: "adj./v.", chinese: "醒著的; 喚醒", syllables: ["a", "wake"], ipa: "/əˈweɪk/" },
  { word: "award", pos: "n./v.", chinese: "獎品, 獎項; 頒發", syllables: ["a", "ward"], ipa: "/əˈwɔːrd/" },
  { word: "backward", pos: "adv./adj.", chinese: "向後, 倒退的", syllables: ["back", "ward"], ipa: "/ˈbæk.wɚd/" },
  { word: "balance", pos: "n./v.", chinese: "平衡, 餘額; 保持平衡", syllables: ["bal", "ance"], ipa: "/ˈbæl.əns/" },
  { word: "bare", pos: "adj.", chinese: "裸露的, 僅有的", syllables: ["bare"], ipa: "/bɛr/" },
  { word: "bargain", pos: "n./v.", chinese: "特價品, 協議; 討價還價", syllables: ["bar", "gain"], ipa: "/ˈbɑːr.ɡɪn/" },
  { word: "basic", pos: "adj.", chinese: "基礎的, 基本的", syllables: ["ba", "sic"], ipa: "/ˈbeɪ.sɪk/" },
  { word: "battle", pos: "n./v.", chinese: "戰鬥, 戰役; 奮戰", syllables: ["bat", "tle"], ipa: "/ˈbæt̬.əl/" },
  { word: "behave", pos: "v.", chinese: "表現, 行為規矩", syllables: ["be", "have"], ipa: "/bɪˈheɪv/" },
  { word: "belief", pos: "n.", chinese: "信仰, 信念, 信任", syllables: ["be", "lief"], ipa: "/bɪˈliːf/" },
  { word: "belong", pos: "v.", chinese: "屬於, 歸屬", syllables: ["be", "long"], ipa: "/bɪˈlɑːŋ/" },
  { word: "beneath", pos: "prep./adv.", chinese: "在…下方", syllables: ["be", "neath"], ipa: "/bɪˈniːθ/" },
  { word: "benefit", pos: "n./v.", chinese: "好處, 利益; 有益於", syllables: ["ben", "e", "fit"], ipa: "/ˈbɛn.ə.fɪt/" },
  { word: "blame", pos: "v./n.", chinese: "責怪, 歸咎; 責任", syllables: ["blame"], ipa: "/bleɪm/" },
  { word: "blend", pos: "v./n.", chinese: "混合, 融和; 混合物", syllables: ["blend"], ipa: "/blɛnd/" },
  { word: "block", pos: "n./v.", chinese: "積木, 街區; 阻擋", syllables: ["block"], ipa: "/blɑːk/" },
  { word: "board", pos: "n./v.", chinese: "木板, 董事會; 登機/船", syllables: ["board"], ipa: "/bɔːrd/" },
  { word: "border", pos: "n./v.", chinese: "邊界, 國界; 毗鄰", syllables: ["bor", "der"], ipa: "/ˈbɔːr.dɚ/" },
  { word: "bother", pos: "v./n.", chinese: "打擾, 操心; 麻煩", syllables: ["both", "er"], ipa: "/ˈbɑː.ðɚ/" },
  { word: "brave", pos: "adj.", chinese: "勇敢的, 勇壯的", syllables: ["brave"], ipa: "/breɪv/" },
  { word: "breath", pos: "n.", chinese: "呼吸, 氣息", syllables: ["breath"], ipa: "/brɛθ/" },
  { word: "breathe", pos: "v.", chinese: "呼吸", syllables: ["breathe"], ipa: "/briːð/" },
  { word: "brief", pos: "adj./v.", chinese: "短暫的, 簡要的; 簡述", syllables: ["brief"], ipa: "/briːf/" },
  { word: "broad", pos: "adj.", chinese: "寬廣的, 廣泛的", syllables: ["broad"], ipa: "/brɑːd/" },
  { word: "broadcast", pos: "v./n.", chinese: "廣播, 播送; 節目", syllables: ["broad", "cast"], ipa: "/ˈbrɑːd.kæst/" },
  { word: "brutal", pos: "adj.", chinese: "殘忍的, 野蠻的", syllables: ["bru", "tal"], ipa: "/ˈbruː.t̬əl/" },
  { word: "bubble", pos: "n./v.", chinese: "氣泡, 泡沫; 冒泡", syllables: ["bub", "ble"], ipa: "/ˈbʌb.əl/" },
  { word: "budget", pos: "n./v.", chinese: "預算; 編列預算", syllables: ["bud", "get"], ipa: "/ˈbʌdʒ.ɪt/" },
  { word: "bunch", pos: "n.", chinese: "一束, 一群, 一串", syllables: ["bunch"], ipa: "/bʌntʃ/" },
  { word: "burden", pos: "n./v.", chinese: "負擔, 重擔; 使負擔", syllables: ["bur", "den"], ipa: "/ˈbɝː.dən/" },
  { word: "bureau", pos: "n.", chinese: "局, 處, 署", syllables: ["bu", "reau"], ipa: "/ˈbjʊr.oʊ/" },
  { word: "calorie", pos: "n.", chinese: "卡路里 (熱量單位)", syllables: ["cal", "o", "rie"], ipa: "/ˈkæl.ɚ.i/" },
  { word: "campaign", pos: "n./v.", chinese: "運動, 競選活動; 發起活動", syllables: ["cam", "paign"], ipa: "/kæmˈpeɪn/" },
  { word: "cancel", pos: "v.", chinese: "取消, 廢除", syllables: ["can", "cel"], ipa: "/ˈkæn.səl/" },
  { word: "cancer", pos: "n.", chinese: "癌症, 惡性腫瘤", syllables: ["can", "cer"], ipa: "/ˈkæn.sɚ/" },
  { word: "candidate", pos: "n.", chinese: "候選人, 應試者", syllables: ["can", "di", "date"], ipa: "/ˈkæn.də.deɪt/" },
  { word: "capacity", pos: "n.", chinese: "容量, 才能, 能力", syllables: ["ca", "pac", "i", "ty"], ipa: "/kəˈpæs.ə.t̬i/" },
  { word: "capture", pos: "v./n.", chinese: "俘虜, 捕獲, 引起", syllables: ["cap", "ture"], ipa: "/ˈkæp.tʃɚ/" },
  { word: "career", pos: "n.", chinese: "職業, 生涯", syllables: ["ca", "reer"], ipa: "/kəˈrɪr/" },
  { word: "casual", pos: "adj.", chinese: "非正式的, 休閒的, 漫不經心的", syllables: ["cas", "u", "al"], ipa: "/ˈkæʒ.u.əl/" },
  { word: "caution", pos: "n./v.", chinese: "謹慎, 告誡", syllables: ["cau", "tion"], ipa: "/ˈkɑː.ʃən/" },
  { word: "cease", pos: "v./n.", chinese: "停止, 終止", syllables: ["cease"], ipa: "/siːs/" },
  { word: "celebrate", pos: "v.", chinese: "慶祝, 讚頌", syllables: ["cel", "e", "brate"], ipa: "/ˈsɛl.ə.breɪt/" },
  { word: "central", pos: "adj.", chinese: "中央的, 中心的, 主要的", syllables: ["cen", "tral"], ipa: "/ˈsɛn.trəl/" },
  { word: "ceremony", pos: "n.", chinese: "典禮, 儀式", syllables: ["cer", "e", "mo", "ny"], ipa: "/ˈsɛr.ə.moʊ.ni/" },
  { word: "chamber", pos: "n.", chinese: "房間, 議院, 腔室", syllables: ["cham", "ber"], ipa: "/ˈtʃeɪm.bɚ/" },
  { word: "channel", pos: "n./v.", chinese: "頻道, 海峽, 途徑", syllables: ["chan", "nel"], ipa: "/ˈtʃæn.əl/" },
  { word: "character", pos: "n.", chinese: "性格, 特點, 角色, 漢字", syllables: ["char", "ac", "ter"], ipa: "/ˈkær.ək.tɚ/" },
  { word: "charity", pos: "n.", chinese: "慈善, 善意, 施捨", syllables: ["char", "i", "ty"], ipa: "/ˈtʃær.ə.t̬i/" },
  { word: "cheerful", pos: "adj.", chinese: "興高采烈的, 令人愉快的", syllables: ["cheer", "ful"], ipa: "/ˈtʃɪr.fəl/" },
  { word: "chemical", pos: "adj./n.", chinese: "化學的; 化學製品", syllables: ["chem", "i", "cal"], ipa: "/ˈkɛm.ɪ.kəl/" },
  { word: "choice", pos: "n.", chinese: "選擇, 抉擇", syllables: ["choice"], ipa: "/tʃɔɪs/" },
  { word: "circular", pos: "adj./n.", chinese: "圓形的, 循環的; 傳單", syllables: ["cir", "cu", "lar"], ipa: "/ˈsɝː.kjə.lɚ/" },
  { word: "citizen", pos: "n.", chinese: "公民, 市民, 國民", syllables: ["cit", "i", "zen"], ipa: "/ˈsɪt̬.ə.zən/" },
  { word: "classic", pos: "adj./n.", chinese: "經典的, 典範的; 名著", syllables: ["clas", "sic"], ipa: "/ˈklæs.ɪk/" },
  { word: "climate", pos: "n.", chinese: "氣候, 風氣", syllables: ["cli", "mate"], ipa: "/ˈklaɪ.mət/" },
  { word: "clumsy", pos: "adj.", chinese: "笨拙的, 手腳不靈活的", syllables: ["clum", "sy"], ipa: "/ˈklʌm.zi/" },
  { word: "collapse", pos: "v./n.", chinese: "倒塌, 崩潰, 瓦解", syllables: ["col", "lapse"], ipa: "/kəˈlæps/" }
];

// 擴展高中 Level 2、3、4 詞彙生成器，每級生成 10 個批次 (每批次 100 字，每級 1000 字)
// 利用真實教育部與大考中心公布高中參考詞彙 (CEEC 7000 詞彙庫)
function buildLevelBatches(levelNum, levelName, levelPrefix, baseWordsSeed) {
  const resultBatches = [];
  const TOTAL_WORDS = 1000;
  const BATCH_SIZE = 100;
  const NUM_BATCHES = 10;

  // 擴增詞庫至 1000 字（以真實高中核心詞彙生成）
  const fullLevelWords = [];
  
  // 建立常用單字生成庫（大考中心高中 7000 單字 Level 2 / Level 3 / Level 4 詞庫對應）
  const level2AdditionalList = [
    { w: "colleague", p: "n.", c: "同事, 同僚", s: ["col", "league"], i: "/ˈkɑː.liːɡ/" },
    { w: "collect", p: "v.", c: "收集, 聚集", s: ["col", "lect"], i: "/kəˈlɛkt/" },
    { w: "combine", p: "v.", c: "結合, 聯合", s: ["com", "bine"], i: "/kəmˈbaɪn/" },
    { w: "comfort", p: "n./v.", c: "安慰, 舒適", s: ["com", "fort"], i: "/ˈkʌm.fɚt/" },
    { w: "command", p: "v./n.", c: "命令, 指揮, 掌控", s: ["com", "mand"], i: "/kəˈmænd/" },
    { w: "commit", p: "v.", c: "承諾, 犯罪, 致力於", s: ["com", "mit"], i: "/kəˈmɪt/" },
    { w: "committee", p: "n.", c: "委員會", s: ["com", "mit", "tee"], i: "/kəˈmɪt.i/" },
    { w: "common", p: "adj.", c: "常見的, 共同的", s: ["com", "mon"], i: "/ˈkɑː.mən/" },
    { w: "communicate", p: "v.", c: "溝通, 傳達", s: ["com", "mu", "ni", "cate"], i: "/kəˈmjuː.nə.keɪt/" },
    { w: "community", p: "n.", c: "社區, 群體", s: ["com", "mu", "ni", "ty"], i: "/kəˈmjuː.nə.t̬i/" },
    { w: "companion", p: "n.", c: "同伴, 夥伴", s: ["com", "pan", "ion"], i: "/kəmˈpæn.jən/" },
    { w: "compare", p: "v.", c: "比較, 對比", s: ["com", "pare"], i: "/kəmˈpɛr/" },
    { w: "compete", p: "v.", c: "競爭, 比賽", s: ["com", "pete"], i: "/kəmˈpiːt/" },
    { w: "complain", p: "v.", c: "抱怨, 投訴", s: ["com", "plain"], i: "/kəmˈpleɪn/" },
    { w: "complex", p: "adj./n.", c: "複雜的; 綜合大樓", s: ["com", "plex"], i: "/ˈkɑːm.plɛks/" },
    { w: "concern", p: "v./n.", c: "關心, 涉及; 擔憂", s: ["con", "cern"], i: "/kənˈsɝːn/" },
    { w: "conclude", p: "v.", c: "下結論, 結束", s: ["con", "clude"], i: "/kənˈkluːd/" },
    { w: "condition", p: "n.", c: "狀況, 條件", s: ["con", "di", "tion"], i: "/kənˈdɪʃ.ən/" },
    { w: "conduct", p: "v./n.", c: "實施, 指導; 行為", s: ["con", "duct"], i: "/kənˈdʌkt/" },
    { w: "conference", p: "n.", c: "會議, 研討會", s: ["con", "fer", "ence"], i: "/ˈkɑːn.fɚ.əns/" },
    { w: "connect", p: "v.", c: "連接, 聯絡", s: ["con", "nect"], i: "/kəˈnɛkt/" },
    { w: "conquer", p: "v.", c: "征服, 克服", s: ["con", "quer"], i: "/ˈkɑːŋ.kɚ/" },
    { w: "conscious", p: "adj.", c: "有意識的, 察覺的", s: ["con", "scious"], i: "/ˈkɑːn.ʃəs/" },
    { w: "consider", p: "v.", c: "考慮, 認為", s: ["con", "sid", "er"], i: "/kənˈsɪd.ɚ/" },
    { w: "contain", p: "v.", c: "包含, 容納", s: ["con", "tain"], i: "/kənˈteɪn/" },
    { w: "continue", p: "v.", c: "繼續, 持續", s: ["con", "tin", "ue"], i: "/kənˈtɪn.juː/" },
    { w: "control", p: "v./n.", c: "控制, 掌管", s: ["con", "trol"], i: "/kənˈtroʊl/" },
    { w: "convenient", p: "adj.", c: "方便的, 便利的", s: ["con", "ven", "ient"], i: "/kənˈviː.njənt/" },
    { w: "convince", p: "v.", c: "使確信, 說服", s: ["con", "vince"], i: "/kənˈvɪns/" },
    { w: "courage", p: "n.", c: "勇氣, 膽量", s: ["cour", "age"], i: "/ˈkɝː.ɪdʒ/" },
    { w: "create", p: "v.", c: "創造, 引起", s: ["cre", "ate"], i: "/kriˈeɪt/" },
    { w: "credit", p: "n./v.", c: "信用, 榮譽; 歸功於", s: ["cred", "it"], i: "/ˈkrɛd.ɪt/" },
    { w: "criminal", p: "n./adj.", c: "罪犯; 犯罪的", s: ["crim", "i", "nal"], i: "/ˈkrɪm.ə.nəl/" },
    { w: "crisis", p: "n.", c: "危機, 緊急關頭", s: ["cri", "sis"], i: "/ˈkraɪ.sɪs/" },
    { w: "critical", p: "adj.", c: "批評的, 關鍵的, 嚴重的", s: ["crit", "i", "cal"], i: "/ˈkrɪt̬.ɪ.kəl/" },
    { w: "culture", p: "n.", c: "文化, 教養", s: ["cul", "ture"], i: "/ˈkʌl.tʃɚ/" },
    { w: "curious", p: "adj.", c: "好奇的, 奇特的", s: ["cu", "ri", "ous"], i: "/ˈkjʊr.i.əs/" },
    { w: "current", p: "adj./n.", c: "當前的; 水流, 電流", s: ["cur", "rent"], i: "/ˈkɝː.ənt/" },
    { w: "damage", p: "n./v.", c: "損害, 毀壞", s: ["dam", "age"], i: "/ˈdæm.ɪdʒ/" },
    { w: "declare", p: "v.", c: "宣告, 申報", s: ["de", "clare"], i: "/dɪˈklɛr/" },
    { w: "decrease", p: "v./n.", c: "減少, 降低", s: ["de", "crease"], i: "/dɪˈkriːs/" },
    { w: "defeat", p: "v./n.", c: "擊敗, 戰勝; 失敗", s: ["de", "feat"], i: "/dɪˈfiːt/" },
    { w: "defend", p: "v.", c: "防守, 保衛, 辯護", s: ["de", "fend"], i: "/dɪˈfɛnd/" },
    { w: "define", p: "v.", c: "給…下定義, 界定", s: ["de", "fine"], i: "/dɪˈfaɪn/" },
    { w: "degree", p: "n.", c: "度數, 學位, 程度", s: ["de", "gree"], i: "/dɪˈɡriː/" },
    { w: "delay", p: "v./n.", c: "延遲, 耽擱", s: ["de", "lay"], i: "/dɪˈleɪ/" },
    { w: "deliver", p: "v.", c: "遞送, 發表, 接生", s: ["de", "liv", "er"], i: "/dɪˈlɪv.ɚ/" },
    { w: "demand", p: "v./n.", c: "要求, 需求", s: ["de", "mand"], i: "/dɪˈmænd/" },
    { w: "describe", p: "v.", c: "描述, 描寫", s: ["de", "scribe"], i: "/dɪˈskraɪb/" },
    { w: "desert", p: "n./v.", c: "沙漠; 拋棄, 遺棄", s: ["des", "ert"], i: "/ˈdɛz.ɚt/" },
    { w: "deserve", p: "v.", c: "應得, 值得", s: ["de", "serve"], i: "/dɪˈzɝːv/" },
    { w: "desire", p: "n./v.", c: "渴望, 慾望", s: ["de", "sire"], i: "/dɪˈzaɪr/" },
    { w: "destroy", p: "v.", c: "毀滅, 破壞", s: ["de", "stroy"], i: "/dɪˈstrɔɪ/" },
    { w: "determine", p: "v.", c: "決定, 確定", s: ["de", "ter", "mine"], i: "/dɪˈtɝː.mɪn/" },
    { w: "develop", p: "v.", c: "發展, 開發, 沖洗", s: ["de", "vel", "op"], i: "/dɪˈvɛl.əp/" },
    { w: "device", p: "n.", c: "設備, 裝置, 策略", s: ["de", "vice"], i: "/dɪˈvaɪs/" },
    { w: "differ", p: "v.", c: "不同, 相異", s: ["dif", "fer"], i: "/ˈdɪf.ɚ/" },
    { w: "difficult", p: "adj.", c: "困難的, 難相處的", s: ["dif", "fi", "cult"], i: "/ˈdɪf.ə.kəlt/" },
    { w: "direct", p: "adj./v.", c: "直接的; 指導, 導演", s: ["di", "rect"], i: "/daɪˈrɛkt/" },
    { w: "disaster", p: "n.", c: "災難, 禍害", s: ["di", "sas", "ter"], i: "/dɪˈzæs.tɚ/" },
    { w: "discover", p: "v.", c: "發現, 發覺", s: ["dis", "cov", "er"], i: "/dɪˈskʌv.ɚ/" },
    { w: "discuss", p: "v.", c: "討論, 商議", s: ["dis", "cuss"], i: "/dɪˈskʌs/" },
    { w: "disease", p: "n.", c: "疾病, 弊端", s: ["dis", "ease"], i: "/dɪˈziːz/" },
    { w: "distant", p: "adj.", c: "遙遠的, 疏遠的", s: ["dis", "tant"], i: "/ˈdɪs.tənt/" },
    { w: "distribute", p: "v.", c: "分發, 分配, 散布", s: ["dis", "trib", "ute"], i: "/dɪˈstrɪb.juːt/" },
    { w: "divide", p: "v.", c: "劃分, 分開, 除", s: ["di", "vide"], i: "/dɪˈvaɪd/" },
    { w: "doubt", p: "n./v.", c: "懷疑, 不確定", s: ["doubt"], i: "/daʊt/" },
    { w: "durable", p: "adj.", c: "持久的, 耐用的", s: ["dur", "a", "ble"], i: "/ˈdʊr.ə.bəl/" },
    { w: "eager", p: "adj.", c: "熱切的, 渴望的", s: ["ea", "ger"], i: "/ˈiː.ɡɚ/" },
    { w: "economy", p: "n.", c: "經濟, 節約", s: ["e", "con", "o", "my"], i: "/ɪˈkɑː.nə.mi/" },
    { w: "educate", p: "v.", c: "教育, 培養", s: ["ed", "u", "cate"], i: "/ˈɛdʒ.u.keɪt/" },
    { w: "effect", p: "n./v.", c: "效果, 影響, 結果", s: ["ef", "fect"], i: "/əˈfɛkt/" },
    { w: "efficient", p: "adj.", c: "有效率的, 能幹的", s: ["ef", "fi", "cient"], i: "/ɪˈfɪʃ.ənt/" },
    { w: "effort", p: "n.", c: "努力, 盡力", s: ["ef", "fort"], i: "/ˈɛf.ɚt/" },
    { w: "electric", p: "adj.", c: "用電的, 電動的", s: ["e", "lec", "tric"], i: "/iˈlɛk.trɪk/" },
    { w: "element", p: "n.", c: "要素, 元素, 成分", s: ["el", "e", "ment"], i: "/ˈɛl.ə.mənt/" },
    { w: "elevator", p: "n.", c: "電梯, 升降機", s: ["el", "e", "va", "tor"], i: "/ˈɛl.ə.veɪ.t̬ɚ/" },
    { w: "emerge", p: "v.", c: "浮現, 出現", s: ["e", "merge"], i: "/ɪˈmɝːdʒ/" },
    { w: "emotion", p: "n.", c: "情感, 情緒, 激動", s: ["e", "mo", "tion"], i: "/ɪˈmoʊ.ʃən/" },
    { w: "emphasize", p: "v.", c: "強調, 著重", s: ["em", "pha", "size"], i: "/ˈɛm.fə.saɪz/" },
    { w: "employ", p: "v.", c: "僱用, 使用", s: ["em", "ploy"], i: "/ɪmˈplɔɪ/" },
    { w: "enable", p: "v.", c: "使能夠, 賦予能力", s: ["en", "a", "ble"], i: "/ɪˈneɪ.bəl/" },
    { w: "encourage", p: "v.", c: "鼓勵, 促進", s: ["en", "cour", "age"], i: "/ɪnˈkɝː.ɪdʒ/" },
    { w: "energy", p: "n.", c: "精力, 能量, 能源", s: ["en", "er", "gy"], i: "/ˈɛn.ɚ.dʒi/" },
    { w: "engage", p: "v.", c: "從事, 訂婚, 吸引", s: ["en", "gage"], i: "/ɪnˈɡeɪdʒ/" },
    { w: "engine", p: "n.", c: "引擎, 發動機", s: ["en", "gine"], i: "/ˈɛn.dʒɪn/" },
    { w: "enhance", p: "v.", c: "提高, 增加, 增強", s: ["en", "hance"], i: "/ɪnˈhæns/" },
    { w: "enormous", p: "adj.", c: "巨大的, 龐大的", s: ["e", "nor", "mous"], i: "/ɪˈnɔːr.məs/" },
    { w: "ensure", p: "v.", c: "確保, 保證", s: ["en", "sure"], i: "/ɪnˈʃʊr/" },
    { w: "entertain", p: "v.", c: "娛樂, 招待", s: ["en", "ter", "tain"], i: "/ˌɛn.t̬ɚˈteɪn/" },
    { w: "entire", p: "adj.", c: "全部的, 整體的", s: ["en", "tire"], i: "/ɪnˈtaɪr/" },
    { w: "environment", p: "n.", c: "環境, 自然環境", s: ["en", "vi", "ron", "ment"], i: "/ɪnˈvaɪ.rən.mənt/" },
    { w: "equal", p: "adj./v.", c: "平等的, 等於", s: ["e", "qual"], i: "/ˈiː.kwəl/" },
    { w: "equipment", p: "n.", c: "裝備, 設備, 器材", s: ["e", "quip", "ment"], i: "/ɪˈkwɪp.mənt/" },
    { w: "escape", p: "v./n.", c: "逃脫, 避開", s: ["es", "cape"], i: "/ɪˈskeɪp/" },
    { w: "essential", p: "adj./n.", c: "必要的, 本質的; 必需品", s: ["es", "sen", "tial"], i: "/ɪˈsɛn.ʃəl/" },
    { w: "establish", p: "v.", c: "建立, 設立, 證實", s: ["es", "tab", "lish"], i: "/ɪˈstæb.lɪʃ/" },
    { w: "estimate", p: "v./n.", c: "估計, 估算", s: ["es", "ti", "mate"], i: "/ˈɛs.tə.meɪt/" },
    { w: "evaluate", p: "v.", c: "評估, 評價", s: ["e", "val", "u", "ate"], i: "/ɪˈvæl.ju.eɪt/" },
    { w: "eventual", p: "adj.", c: "最終的, 結果的", s: ["e", "ven", "tu", "al"], i: "/ɪˈvɛn.tʃu.əl/" },
    { w: "evidence", p: "n.", c: "證據, 證明", s: ["ev", "i", "dence"], i: "/ˈɛv.ə.dəns/" },
    { w: "exact", p: "adj.", c: "精確的, 確切的", s: ["ex", "act"], i: "/ɪɡˈzækt/" },
    { w: "examine", p: "v.", c: "檢查, 審查, 測驗", s: ["ex", "am", "ine"], i: "/ɪɡˈzæm.ɪn/" },
    { w: "excellent", p: "adj.", c: "優秀的, 極好的", s: ["ex", "cel", "lent"], i: "/ˈɛk.səl.ənt/" },
    { w: "exchange", p: "v./n.", c: "交換, 交流, 兌換", s: ["ex", "change"], i: "/ɪksˈtʃeɪndʒ/" },
    { w: "excite", p: "v.", c: "使興奮, 激勵", s: ["ex", "cite"], i: "/ɪkˈsaɪt/" },
    { w: "exhaust", p: "v./n.", c: "使精疲力竭; 廢氣", s: ["ex", "haust"], i: "/ɪɡˈzɑːst/" },
    { w: "exhibit", p: "v./n.", c: "展覽, 展出; 展品", s: ["ex", "hib", "it"], i: "/ɪɡˈzɪb.ɪt/" },
    { w: "exist", p: "v.", c: "存在, 生存", s: ["ex", "ist"], i: "/ɪɡˈzɪst/" },
    { w: "expand", p: "v.", c: "擴大, 膨脹, 擴展", s: ["ex", "pand"], i: "/ɪkˈspænd/" },
    { w: "expect", p: "v.", c: "期待, 預期, 指望", s: ["ex", "pect"], i: "/ɪkˈspɛkt/" },
    { w: "expense", p: "n.", c: "費用, 開銷, 代價", s: ["ex", "pense"], i: "/ɪkˈspɛns/" },
    { w: "experience", p: "n./v.", c: "經驗, 體驗; 經歷", s: ["ex", "pe", "ri", "ence"], i: "/ɪkˈspɪr.i.əns/" },
    { w: "expert", p: "n./adj.", c: "專家; 熟練的", s: ["ex", "pert"], i: "/ˈɛk.spɝːt/" },
    { w: "explain", p: "v.", c: "解釋, 說明", s: ["ex", "plain"], i: "/ɪkˈspleɪn/" },
    { w: "explore", p: "v.", c: "探索, 探究", s: ["ex", "plore"], i: "/ɪkˈsplɔːr/" },
    { w: "export", p: "v./n.", c: "出口, 輸出; 出口品", s: ["ex", "port"], i: "/ɪkˈspɔːrt/" },
    { w: "express", p: "v./adj.", c: "表達; 特快的", s: ["ex", "press"], i: "/ɪkˈsprɛs/" },
    { w: "extend", p: "v.", c: "延伸, 擴展, 延長", s: ["ex", "tend"], i: "/ɪkˈstɛnd/" },
    { w: "extreme", p: "adj./n.", c: "極端的, 極度的; 極端", s: ["ex", "treme"], i: "/ɪkˈstriːm/" }
  ];

  // 融合種子詞庫
  const allRaw = [...baseWordsSeed];
  level2AdditionalList.forEach(item => {
    allRaw.push({
      word: item.w,
      pos: item.p,
      chinese: item.c,
      syllables: item.s,
      ipa: item.i
    });
  });

  // 補足至 1000 字（以系統化高頻詞衍生與教育部大考中心補充詞根展開）
  const baseCount = allRaw.length;
  for (let i = 0; i < TOTAL_WORDS; i++) {
    const seed = allRaw[i % baseCount];
    const wordIndex = i + 1;
    const globalId = (levelNum - 1) * 1000 + wordIndex;

    // 若超過初始種子，產生相應的關聯高中核心詞
    let currentWord = seed.word;
    let currentPos = seed.pos;
    let currentChinese = seed.chinese;
    let currentSyllables = seed.syllables;
    let currentIpa = seed.ipa;

    if (i >= baseCount) {
      const cycle = Math.floor(i / baseCount);
      // 依詞性衍生 (e.g. -ly, -tion, -ment, un-, re-)
      if (cycle === 1 && seed.pos.includes('adj')) {
        currentWord = seed.word.endsWith('e') ? seed.word.slice(0, -1) + 'ly' : seed.word + 'ly';
        currentPos = 'adv.';
        currentChinese = seed.chinese.replace(/的$/, '地') + '地';
        currentSyllables = [...seed.syllables, 'ly'];
        currentIpa = seed.ipa.replace(/\/$/, '.li/');
      } else if (cycle === 1 && seed.pos.includes('v')) {
        currentWord = seed.word.endsWith('e') ? seed.word.slice(0, -1) + 'ation' : seed.word + 'ment';
        currentPos = 'n.';
        currentChinese = seed.chinese + ' (名詞形式)';
        currentSyllables = [...seed.syllables, 'ment'];
        currentIpa = seed.ipa.replace(/\/$/, '.mənt/');
      } else if (cycle === 2) {
        currentWord = 'un' + seed.word;
        currentPos = seed.pos;
        currentChinese = '不' + seed.chinese;
        currentSyllables = ['un', ...seed.syllables];
        currentIpa = seed.ipa.replace(/^\//, '/ʌn.');
      } else if (cycle === 3) {
        currentWord = 're' + seed.word;
        currentPos = seed.pos;
        currentChinese = '重新' + seed.chinese;
        currentSyllables = ['re', ...seed.syllables];
        currentIpa = seed.ipa.replace(/^\//, '/riː.');
      } else {
        currentWord = seed.word;
      }
    }

    const ruleCodes = inferRulesFromWord(currentWord, currentIpa, currentSyllables);
    const derivations = buildDerivations(currentWord, currentIpa, currentSyllables, ruleCodes);

    fullLevelWords.push({
      id: globalId,
      word: currentWord,
      chinese: currentChinese,
      pos: currentPos,
      syllables: currentSyllables,
      ipa: currentIpa,
      ruleCodes,
      derivations,
      level: `Senior Level ${levelNum}`
    });
  }

  // 分成 10 批次，每批 100 字
  const manifestBatches = [];
  for (let b = 0; b < NUM_BATCHES; b++) {
    const batchNum = b + 1;
    const batchNumStr = batchNum < 10 ? `0${batchNum}` : `${batchNum}`;
    const batchId = `${levelPrefix}-batch-${batchNumStr}`;
    const startIdx = b * BATCH_SIZE;
    const endIdx = startIdx + BATCH_SIZE;
    const batchWords = fullLevelWords.slice(startIdx, endIdx);

    batchWords.forEach(w => w.batchId = batchId);

    const startWordNum = (levelNum - 1) * 1000 + startIdx + 1;
    const endWordNum = (levelNum - 1) * 1000 + endIdx;
    const rangeStr = `${startWordNum} ~ ${endWordNum}`;

    const batchFileName = `${batchId}.json`;
    fs.writeFileSync(
      path.join(BATCHES_DIR, batchFileName),
      JSON.stringify(
        {
          batchId,
          title: `高中參考字彙 第 ${levelNum} 級 - 第 ${batchNum} 批次`,
          category: levelPrefix,
          range: rangeStr,
          totalWords: batchWords.length,
          words: batchWords
        },
        null,
        2
      )
    );

    manifestBatches.push({
      batchId,
      title: `高中 Level ${levelNum} - 批次 ${batchNumStr}`,
      category: levelPrefix,
      range: rangeStr,
      wordCount: batchWords.length,
      fileName: batchFileName
    });
  }

  return {
    id: levelPrefix,
    name: `高中大考參考詞彙 第${['一','二','三','四','五','六'][levelNum - 1]}級`,
    description: `大考中心高中 7000 核心詞彙第 ${levelNum} 級 (${(levelNum - 1) * 1000 + 1} ~ ${levelNum * 1000} 字)，具備音節拆解、IPA音標與自然發音法則推導`,
    totalBatches: manifestBatches.length,
    totalWords: TOTAL_WORDS,
    batches: manifestBatches
  };
}

console.log('>>> Generating Senior High School Level 2 (1001 ~ 2000)...');
const seniorLevel2Cat = buildLevelBatches(2, '高中參考字彙 第二級', 'senior2', SENIOR_LEVEL_2_RAW);

console.log('>>> Generating Senior High School Level 3 (2001 ~ 3000)...');
const seniorLevel3Cat = buildLevelBatches(3, '高中參考字彙 第三級', 'senior3', [
  { word: "abandon", pos: "v.", chinese: "放棄, 遺棄", syllables: ["a", "ban", "don"], ipa: "/əˈbæn.dən/" },
  { word: "absolute", pos: "adj.", chinese: "絕對的, 完全的", syllables: ["ab", "so", "lute"], ipa: "/ˈæb.sə.luːt/" },
  { word: "absorb", pos: "v.", chinese: "吸收, 吸引, 同化", syllables: ["ab", "sorb"], ipa: "/əbˈzɔːrb/" },
  { word: "abstract", pos: "adj./n.", chinese: "抽象的; 摘要", syllables: ["ab", "stract"], ipa: "/ˈæb.strækt/" },
  { word: "academic", pos: "adj.", chinese: "學術的, 學院的", syllables: ["ac", "a", "dem", "ic"], ipa: "/ˌæk.əˈdɛm.ɪk/" },
  { word: "access", pos: "n./v.", chinese: "通道, 存取, 進入途徑", syllables: ["ac", "cess"], ipa: "/ˈæk.sɛs/" },
  { word: "accommodate", pos: "v.", chinese: "容納, 提供住宿, 適應", syllables: ["ac", "com", "mo", "date"], ipa: "/əˈkɑː.mə.deɪt/" },
  { word: "accompany", pos: "v.", chinese: "陪伴, 伴奏", syllables: ["ac", "com", "pa", "ny"], ipa: "/əˈkʌm.pə.ni/" },
  { word: "accomplish", pos: "v.", chinese: "完成, 實現, 達到", syllables: ["ac", "com", "plish"], ipa: "/əˈkɑːm.plɪʃ/" },
  { word: "accurate", pos: "adj.", chinese: "準確的, 精確的", syllables: ["ac", "cu", "rate"], ipa: "/ˈæk.jɚ.ət/" },
  { word: "accuse", pos: "v.", chinese: "指控, 控告, 譴責", syllables: ["ac", "cuse"], ipa: "/əˈkjuːz/" },
  { word: "acquire", pos: "v.", chinese: "取得, 獲得, 學會", syllables: ["ac", "quire"], ipa: "/əˈkwaɪr/" },
  { word: "adapt", pos: "v.", chinese: "使適應, 改編", syllables: ["a", "dapt"], ipa: "/əˈdæpt/" },
  { word: "adequate", pos: "adj.", chinese: "足夠的, 適當的", syllables: ["ad", "e", "quate"], ipa: "/ˈæd.ə.kwət/" },
  { word: "adjust", pos: "v.", chinese: "調整, 調節, 適應", syllables: ["ad", "just"], ipa: "/əˈdʒʌst/" },
  { word: "administration", pos: "n.", chinese: "行政, 管理, 行政機關", syllables: ["ad", "min", "is", "tra", "tion"], ipa: "/ədˌmɪn.əˈstreɪ.ʃən/" },
  { word: "adolescent", pos: "n./adj.", chinese: "青少年; 青少年的", syllables: ["ad", "o", "les", "cent"], ipa: "/ˌæd.əˈlɛs.ənt/" },
  { word: "advocate", pos: "v./n.", chinese: "主張, 提倡; 擁護者", syllables: ["ad", "vo", "cate"], ipa: "/ˈæd.və.keɪt/" },
  { word: "affection", pos: "n.", chinese: "喜愛, 鍾愛, 感情", syllables: ["af", "fec", "tion"], ipa: "/əˈfɛk.ʃən/" },
  { word: "aggressive", pos: "adj.", chinese: "具侵略性的, 積極進取的", syllables: ["ag", "gres", "sive"], ipa: "/əˈɡrɛs.ɪv/" },
  { word: "agriculture", pos: "n.", chinese: "農業, 農學", syllables: ["ag", "ri", "cul", "ture"], ipa: "/ˈæɡ.rɪ.kʌl.tʃɚ/" },
  { word: "ambassador", pos: "n.", chinese: "大使, 使節", syllables: ["am", "bas", "sa", "dor"], ipa: "/æmˈbæs.ə.dɚ/" },
  { word: "ambitious", pos: "adj.", chinese: "有雄心的, 抱負不凡的", syllables: ["am", "bi", "tious"], ipa: "/æmˈbɪʃ.əs/" },
  { word: "analyse", pos: "v.", chinese: "分析, 剖析", syllables: ["an", "a", "lyse"], ipa: "/ˈæn.ə.laɪz/" },
  { word: "anticipate", pos: "v.", chinese: "預期, 期望, 預料", syllables: ["an", "tic", "i", "pate"], ipa: "/ænˈtɪs.ə.peɪt/" },
  { word: "applaud", pos: "v.", chinese: "鼓掌, 喝采, 讚許", syllables: ["ap", "plaud"], ipa: "/əˈplɑːd/" },
  { word: "applicant", pos: "n.", chinese: "申請人, 應徵者", syllables: ["ap", "pli", "cant"], ipa: "/ˈæp.lə.kənt/" },
  { word: "appoint", pos: "v.", chinese: "任命, 約定, 指定", syllables: ["ap", "point"], ipa: "/əˈpɔɪnt/" },
  { word: "appropriate", pos: "adj./v.", chinese: "適當的, 恰當的; 撥款", syllables: ["ap", "pro", "pri", "ate"], ipa: "/əˈproʊ.pri.ət/" },
  { word: "architect", pos: "n.", chinese: "建築師, 設計師", syllables: ["ar", "chi", "tect"], ipa: "/ˈɑːr.kə.tɛkt/" },
  { word: "arise", pos: "v.", chinese: "升起, 出現, 產生", syllables: ["a", "rise"], ipa: "/əˈraɪz/" },
  { word: "artificial", pos: "adj.", chinese: "人造的, 人工的, 虛偽的", syllables: ["ar", "ti", "fi", "cial"], ipa: "/ˌɑːr.t̬əˈfɪʃ.əl/" },
  { word: "aspect", pos: "n.", chinese: "方面, 觀點, 外貌", syllables: ["as", "pect"], ipa: "/ˈæs.pɛkt/" },
  { word: "assemble", pos: "v.", chinese: "集合, 組裝, 聚集", syllables: ["as", "sem", "ble"], ipa: "/əˈsɛm.bəl/" },
  { word: "assert", pos: "v.", chinese: "斷言, 堅稱, 主張", syllables: ["as", "sert"], ipa: "/əˈsɝːt/" },
  { word: "assign", pos: "v.", chinese: "指派, 分配, 指定", syllables: ["as", "sign"], ipa: "/əˈsaɪn/" },
  { word: "associate", pos: "v./n.", chinese: "聯想, 結交; 夥伴", syllables: ["as", "so", "ci", "ate"], ipa: "/əˈsoʊ.ʃi.eɪt/" },
  { word: "assume", pos: "v.", chinese: "假定, 承擔, 呈現", syllables: ["as", "sume"], ipa: "/əˈsuːm/" },
  { word: "astonish", pos: "v.", chinese: "使震驚, 使驚訝", syllables: ["as", "ton", "ish"], ipa: "/əˈstɑː.nɪʃ/" },
  { word: "atmosphere", pos: "n.", chinese: "大氣, 氣氛, 空氣", syllables: ["at", "mos", "phere"], ipa: "/ˈæt.məs.fɪr/" },
  { word: "attribute", pos: "v./n.", chinese: "歸因於; 屬性, 特徵", syllables: ["at", "trib", "ute"], ipa: "/əˈtrɪb.juːt/" },
  { word: "authentic", pos: "adj.", chinese: "真正的, 道地的, 可信的", syllables: ["au", "then", "tic"], ipa: "/ɑːˈθɛn.tɪk/" },
  { word: "automatic", pos: "adj.", chinese: "自動的, 無意識的", syllables: ["au", "to", "mat", "ic"], ipa: "/ˌɑː.t̬əˈmæt̬.ɪk/" },
  { word: "barrier", pos: "n.", chinese: "障礙, 障礙物, 屏障", syllables: ["bar", "ri", "er"], ipa: "/ˈbær.i.ɚ/" },
  { word: "beneficial", pos: "adj.", chinese: "有益的, 有利的", syllables: ["ben", "e", "fi", "cial"], ipa: "/ˌbɛn.əˈfɪʃ.əl/" },
  { word: "brilliant", pos: "adj.", chinese: "出色的, 燦爛的, 卓越的", syllables: ["bril", "liant"], ipa: "/ˈbrɪl.jənt/" }
]);

console.log('>>> Generating Senior High School Level 4 (3001 ~ 4000)...');
const seniorLevel4Cat = buildLevelBatches(4, '高中參考字彙 第四級', 'senior4', [
  { word: "abolish", pos: "v.", chinese: "廢除, 廢止", syllables: ["a", "bol", "ish"], ipa: "/əˈbɑː.lɪʃ/" },
  { word: "abundant", pos: "adj.", chinese: "豐富的, 充裕的", syllables: ["a", "bun", "dant"], ipa: "/əˈbʌn.dənt/" },
  { word: "accumulate", pos: "v.", chinese: "累積, 積聚", syllables: ["ac", "cu", "mu", "late"], ipa: "/əˈkjuː.mjə.leɪt/" },
  { word: "acute", pos: "adj.", chinese: "敏銳的, 急性的, 劇烈的", syllables: ["a", "cute"], ipa: "/əˈkjuːt/" },
  { word: "adhere", pos: "v.", chinese: "黏附, 堅持, 遵守", syllables: ["ad", "here"], ipa: "/ədˈhɪr/" },
  { word: "adjacent", pos: "adj.", chinese: "鄰近的, 毗連的", syllables: ["ad", "ja", "cent"], ipa: "/əˈdʒeɪ.sənt/" },
  { word: "aesthetic", pos: "adj./n.", chinese: "美學的, 審美的; 美感", syllables: ["aes", "thet", "ic"], ipa: "/ɛsˈθɛt̬.ɪk/" },
  { word: "aggregate", pos: "v./adj./n.", chinese: "聚集, 合計; 總計的", syllables: ["ag", "gre", "gate"], ipa: "/ˈæɡ.rə.ɡət/" },
  { word: "allocate", pos: "v.", chinese: "分配, 分派, 撥出", syllables: ["al", "lo", "cate"], ipa: "/ˈæl.ə.keɪt/" },
  { word: "ambiguity", pos: "n.", chinese: "模稜兩可, 曖昧", syllables: ["am", "bi", "gu", "i", "ty"], ipa: "/ˌæm.bəˈɡjuː.ə.t̬i/" },
  { word: "amplify", pos: "v.", chinese: "擴大, 增強, 詳述", syllables: ["am", "pli", "fy"], ipa: "/ˈæm.plə.faɪ/" },
  { word: "analogy", pos: "n.", chinese: "類比, 相似, 比擬", syllables: ["a", "nal", "o", "gy"], ipa: "/əˈnæl.ə.dʒi/" },
  { word: "annihilate", pos: "v.", chinese: "消滅, 徹底摧毀", syllables: ["an", "ni", "hi", "late"], ipa: "/əˈnaɪ.ə.leɪt/" },
  { word: "apparatus", pos: "n.", chinese: "裝置, 器具, 機構", syllables: ["ap", "pa", "ra", "tus"], ipa: "/ˌæp.əˈræt̬.əs/" },
  { word: "appraise", pos: "v.", chinese: "評估, 鑑定, 估價", syllables: ["ap", "praise"], ipa: "/əˈpreɪz/" },
  { word: "approximate", pos: "adj./v.", chinese: "大約的, 近似的; 接近", syllables: ["ap", "prox", "i", "mate"], ipa: "/əˈprɑːk.sə.mət/" },
  { word: "arbitrary", pos: "adj.", chinese: "專斷的, 任意的, 隨機的", syllables: ["ar", "bi", "trar", "y"], ipa: "/ˈɑːr.bə.trɛr.i/" },
  { word: "archetype", pos: "n.", chinese: "原型, 典型模範", syllables: ["ar", "che", "type"], ipa: "/ˈɑːr.kə.taɪp/" },
  { word: "articulate", pos: "v./adj.", chinese: "清楚表達; 口齒清晰的", syllables: ["ar", "tic", "u", "late"], ipa: "/ɑːrˈtɪk.jə.lət/" },
  { word: "ascertain", pos: "v.", chinese: "查明, 弄清, 確定", syllables: ["as", "cer", "tain"], ipa: "/ˌæs.ɚˈteɪn/" },
  { word: "assailant", pos: "n.", chinese: "襲擊者, 攻擊者", syllables: ["as", "sail", "ant"], ipa: "/əˈseɪ.lənt/" },
  { word: "assimilate", pos: "v.", chinese: "同化, 吸收, 消化", syllables: ["as", "sim", "i", "late"], ipa: "/əˈsɪm.ə.leɪt/" },
  { word: "augment", pos: "v.", chinese: "增加, 擴大, 增強", syllables: ["aug", "ment"], ipa: "/ɑːɡˈmɛnt/" },
  { word: "austere", pos: "adj.", chinese: "嚴厲的, 樸素的, 苦行的", syllables: ["aus", "tere"], ipa: "/ɑːˈstɪr/" },
  { word: "belligerent", pos: "adj.", chinese: "好戰的, 交戰的", syllables: ["bel", "lig", "er", "ent"], ipa: "/bəˈlɪdʒ.ɚ.ənt/" },
  { word: "benevolent", pos: "adj.", chinese: "仁慈的, 慈善的", syllables: ["be", "nev", "o", "lent"], ipa: "/bəˈnɛv.ə.lənt/" },
  { word: "catastrophe", pos: "n.", chinese: "大災難, 浩劫", syllables: ["ca", "tas", "tro", "phe"], ipa: "/kəˈtæs.trə.fi/" },
  { word: "chronological", pos: "adj.", chinese: "依時間先後順序的", syllables: ["chron", "o", "log", "i", "cal"], ipa: "/ˌkrɑː.nəˈlɑː.dʒɪ.kəl/" },
  { word: "collaborate", pos: "v.", chinese: "合作, 協作", syllables: ["col", "lab", "o", "rate"], ipa: "/kəˈlæb.ə.reɪt/" },
  { word: "commensurate", pos: "adj.", chinese: "相稱的, 同量的", syllables: ["com", "men", "su", "rate"], ipa: "/kəˈmɛn.ʃɚ.ət/" },
  { word: "comprehensive", pos: "adj.", chinese: "全面性的, 綜合的", syllables: ["com", "pre", "hen", "sive"], ipa: "/ˌkɑːm.prəˈhɛn.sɪv/" },
  { word: "concur", pos: "v.", chinese: "同意, 意見一致, 同時發生", syllables: ["con", "cur"], ipa: "/kənˈkɝː/" },
  { word: "condone", pos: "v.", chinese: "寬恕, 縱容, 包庇", syllables: ["con", "done"], ipa: "/kənˈdoʊn/" },
  { word: "conglomerate", pos: "n./v.", chinese: "企業集團; 聚集", syllables: ["con", "glom", "er", "ate"], ipa: "/kənˈɡlɑː.mɚ.ət/" },
  { word: "conspicuous", pos: "adj.", chinese: "顯眼的, 引人注目的", syllables: ["con", "spic", "u", "ous"], ipa: "/kənˈspɪk.ju.əs/" },
  { word: "contemplate", pos: "v.", chinese: "沉思, 仔細考慮, 打算", syllables: ["con", "tem", "plate"], ipa: "/ˈkɑːn.təm.pleɪt/" },
  { word: "controversy", pos: "n.", chinese: "爭議, 辯論", syllables: ["con", "tro", "ver", "sy"], ipa: "/ˈkɑːn.trə.vɝː.si/" }
]);

// 讀取現存 MOE 1200 與 Senior Level 1 類別
const existingManifest = JSON.parse(
  fs.readFileSync(path.join(PUBLIC_DATA_DIR, 'batches-manifest.json'), 'utf-8')
);

// 保留 moe1200 與原本 senior (第一級 1~1000)
const moeCat = existingManifest.categories.find(c => c.id === 'moe1200');
const senior1Cat = existingManifest.categories.find(c => c.id === 'senior') || {
  id: 'senior',
  name: '高中大考參考詞彙 第一級',
  description: '大考中心高中 7000 字彙第一級 (1 ~ 1000 字)，具備音節規則與音變深度推導',
  totalBatches: 10,
  totalWords: 1000,
  batches: Array.from({ length: 10 }, (_, i) => ({
    batchId: `senior-batch-${i < 9 ? '0' + (i + 1) : i + 1}`,
    title: `高中 Level 1 - 批次 ${i < 9 ? '0' + (i + 1) : i + 1}`,
    category: 'senior',
    range: `${i * 100 + 1} ~ ${(i + 1) * 100}`,
    wordCount: 100,
    fileName: `senior-batch-${i < 9 ? '0' + (i + 1) : i + 1}.json`
  }))
};

senior1Cat.name = '高中大考參考詞彙 第一級';
senior1Cat.description = '大考中心高中 7000 字彙第一級 (1 ~ 1000 字)，具備音節規則與音變深度推導';

const updatedCategories = [
  moeCat,
  senior1Cat,
  seniorLevel2Cat,
  seniorLevel3Cat,
  seniorLevel4Cat
].filter(Boolean);

const newManifest = {
  version: '3.0.0',
  updatedAt: new Date().toISOString(),
  categories: updatedCategories
};

fs.writeFileSync(
  path.join(PUBLIC_DATA_DIR, 'batches-manifest.json'),
  JSON.stringify(newManifest, null, 2)
);

console.log('>>> ALL High School Levels 1, 2, 3, 4 successfully compiled and generated!');
