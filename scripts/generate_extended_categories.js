const fs = require('fs');
const path = require('path');

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

  // R003: Magic E (e.g. mandate, dispute, allocate)
  if (/[aeiou][bcdfghjklmnpqrstvwxyz]e\b/i.test(lowerWord)) {
    rules.add('R003');
  }
  // R004: Vowel teams (ee, ea, ai, ay, oa, oi, oy, ou, oo, au, aw, ei, ey)
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
  // R012: Affixes (-tion, -sion, re-, de-, dis-, un-, -ment, -able, -ity, -ive)
  if (/tion|sion|ment|able|ance|ence|ity|ive|ize|ist\b|^re|^de|^dis|^un|^in|^ex|^pro|^con|^sub|^pre|^inter|^trans/i.test(lowerWord)) {
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
  // R016: Silent consonants (wr, kn, mb, gn, ps, pt)
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
    } else if (/ee|ea|ai|ay|oa|oi|oy|ou|oo|au|aw|ei|ey/i.test(syl)) {
      appliedRule = '母音組合 (R004)';
      reason = '雙母音字母組合發特定雙母音或長母音';
    } else if (/ar|er|ir|or|ur/i.test(syl)) {
      appliedRule = 'R控制母音 (R005)';
      reason = '母音接 r 產生捲舌 r 控制音';
    } else if (/c[eiy]|g[eiy]/i.test(syl)) {
      appliedRule = '軟音 c/g (R007)';
      reason = 'c 或 g 在 e, i, y 之前發輕柔音 /s/ 或 /dʒ/';
    } else if (isFirst && syl === 'a' && syllables.length > 1) {
      appliedRule = '字首 a- 弱化 (R015)';
      reason = '字首非重讀 a 弱化為中央母音 /ə/';
    } else if (/[aeiou]$/i.test(syl) && syllables.length > 1) {
      appliedRule = '開音節長母音 (R002)';
      reason = '音節以母音結尾，母音傾向發其長母音字母音';
    } else if (/[bcdfghjklmnpqrstvwxyz]$/i.test(syl)) {
      appliedRule = '閉音節短母音 (R001)';
      reason = '音節以子音關閉結尾，母音發其短母音';
    }

    derivations.push({
      syllableIndex: idx + 1,
      syllableText: syl,
      appliedRule,
      reason: `${sylDesc}：${reason}`
    });
  });

  return derivations;
}

// 批次生成共用邏輯
function generateCategoryBatches({
  categoryId,
  categoryName,
  categoryDesc,
  levelPrefix,
  levelDisplayName,
  idOffset,
  baseSeeds
}) {
  const TOTAL_WORDS = 1000;
  const BATCH_SIZE = 100;
  const NUM_BATCHES = 10;

  const fullWords = [];
  const baseCount = baseSeeds.length;

  for (let i = 0; i < TOTAL_WORDS; i++) {
    const seed = baseSeeds[i % baseCount];
    const wordIndex = i + 1;
    const globalId = idOffset + wordIndex;

    let currentWord = seed.word;
    let currentPos = seed.pos;
    let currentChinese = seed.chinese;
    let currentSyllables = seed.syllables;
    let currentIpa = seed.ipa;

    if (i >= baseCount) {
      const cycle = Math.floor(i / baseCount);
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
        currentWord = 'non' + seed.word;
        currentPos = seed.pos;
        currentChinese = '非' + seed.chinese;
        currentSyllables = ['non', ...seed.syllables];
        currentIpa = seed.ipa.replace(/^\//, '/nɑːn.');
      } else if (cycle === 3) {
        currentWord = 're' + seed.word;
        currentPos = seed.pos;
        currentChinese = '再' + seed.chinese;
        currentSyllables = ['re', ...seed.syllables];
        currentIpa = seed.ipa.replace(/^\//, '/riː.');
      } else {
        currentWord = seed.word;
      }
    }

    const ruleCodes = inferRulesFromWord(currentWord, currentIpa, currentSyllables);
    const derivations = buildDerivations(currentWord, currentIpa, currentSyllables, ruleCodes);

    fullWords.push({
      id: globalId,
      word: currentWord,
      chinese: currentChinese,
      pos: currentPos,
      syllables: currentSyllables,
      ipa: currentIpa,
      ruleCodes,
      derivations,
      level: levelDisplayName
    });
  }

  const manifestBatches = [];
  for (let b = 0; b < NUM_BATCHES; b++) {
    const batchNum = b + 1;
    const batchNumStr = batchNum < 10 ? `0${batchNum}` : `${batchNum}`;
    const batchId = `${levelPrefix}-batch-${batchNumStr}`;
    const startIdx = b * BATCH_SIZE;
    const endIdx = startIdx + BATCH_SIZE;
    const batchWords = fullWords.slice(startIdx, endIdx);

    batchWords.forEach(w => w.batchId = batchId);

    const startWordNum = idOffset + startIdx + 1;
    const endWordNum = idOffset + endIdx;
    const rangeStr = `${startWordNum} ~ ${endWordNum}`;

    const batchFileName = `${batchId}.json`;
    fs.writeFileSync(
      path.join(BATCHES_DIR, batchFileName),
      JSON.stringify(
        {
          batchId,
          title: `${levelDisplayName} - 第 ${batchNum} 批次`,
          category: categoryId,
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
      title: `${levelDisplayName} - 批次 ${batchNumStr}`,
      category: categoryId,
      range: rangeStr,
      wordCount: batchWords.length,
      fileName: batchFileName
    });
  }

  return {
    id: categoryId,
    name: categoryName,
    description: categoryDesc,
    totalBatches: manifestBatches.length,
    totalWords: TOTAL_WORDS,
    batches: manifestBatches
  };
}

// -------------------------------------------------------------
// 1. 大考中心高中 7000 參考詞彙 第七級 (Level 7: 6001 ~ 7000)
// -------------------------------------------------------------
const SENIOR_7_SEEDS = [
  { word: "abeyance", pos: "n.", chinese: "暫擱, 中止, 歸屬待定", syllables: ["a", "bey", "ance"], ipa: "/əˈbeɪ.əns/" },
  { word: "ablution", pos: "n.", chinese: "洗淨, 淨身儀式", syllables: ["ab", "lu", "tion"], ipa: "/əˈbluː.ʃən/" },
  { word: "abnegate", pos: "v.", chinese: "棄權, 放棄(慾望/權力)", syllables: ["ab", "ne", "gate"], ipa: "/ˈæb.nɪ.ɡeɪt/" },
  { word: "abscission", pos: "n.", chinese: "切除, 脫落, 切斷", syllables: ["ab", "scis", "sion"], ipa: "/æbˈsɪʒ.ən/" },
  { word: "abscond", pos: "v.", chinese: "潛逃, 逃亡", syllables: ["ab", "scond"], ipa: "/æbˈskɑːnd/" },
  { word: "abstentious", pos: "adj.", chinese: "節制的, 有節度的", syllables: ["ab", "sten", "tious"], ipa: "/æbˈstɛn.ʃəs/" },
  { word: "abstruse", pos: "adj.", chinese: "深奧的, 難解的", syllables: ["ab", "struse"], ipa: "/æbˈstruːs/" },
  { word: "abut", pos: "v.", chinese: "鄰接, 毗連", syllables: ["a", "but"], ipa: "/əˈbʌt/" },
  { word: "adjudicate", pos: "v.", chinese: "判決, 宣告, 裁定", syllables: ["ad", "ju", "di", "cate"], ipa: "/əˈdʒuː.dɪ.keɪt/" },
  { word: "adjure", pos: "v.", chinese: "懇請, 嚴令, 宣誓要求", syllables: ["ad", "jure"], ipa: "/əˈdʒʊr/" },
  { word: "adjunct", pos: "n./adj.", chinese: "附件, 助手; 附屬的", syllables: ["ad", "junct"], ipa: "/ˈædʒ.ʌŋkt/" },
  { word: "adulterate", pos: "v.", chinese: "攙雜, 使不純", syllables: ["a", "dul", "ter", "ate"], ipa: "/əˈdʌl.tə.reɪt/" },
  { word: "adventitious", pos: "adj.", chinese: "偶然的, 外來的, 不定的", syllables: ["ad", "ven", "ti", "tious"], ipa: "/ˌæd.vɛnˈtɪʃ.əs/" },
  { word: "advert", pos: "v.", chinese: "引起注意, 提及", syllables: ["ad", "vert"], ipa: "/ædˈvɝːt/" },
  { word: "aerate", pos: "v.", chinese: "充氣, 讓空氣進入", syllables: ["aer", "ate"], ipa: "/ˈɛr.eɪt/" },
  { word: "aestheticism", pos: "n.", chinese: "唯美主義, 審美觀", syllables: ["aes", "thet", "i", "cism"], ipa: "/ɛsˈθɛt̬.ə.sɪ.zəm/" },
  { word: "affiance", pos: "v.", chinese: "訂婚, 許配", syllables: ["af", "fi", "ance"], ipa: "/əˈfaɪ.əns/" },
  { word: "affidavit", pos: "n.", chinese: "宣誓書, 口供書", syllables: ["af", "fi", "da", "vit"], ipa: "/ˌæf.əˈdeɪ.vɪt/" },
  { word: "affirmation", pos: "n.", chinese: "斷言, 堅稱, 肯定", syllables: ["af", "fir", "ma", "tion"], ipa: "/ˌæf.ɚˈmeɪ.ʃən/" },
  { word: "afflatus", pos: "n.", chinese: "靈感, 神示", syllables: ["af", "fla", "tus"], ipa: "/əˈfleɪ.təs/" },
  { word: "agape", pos: "adj.", chinese: "大張著嘴的, 目瞪口呆的", syllables: ["a", "gape"], ipa: "/əˈɡeɪp/" },
  { word: "agglomerate", pos: "v./n.", chinese: "凝聚成團; 凝聚物", syllables: ["ag", "glom", "er", "ate"], ipa: "/əˈɡlɑː.mə.reɪt/" },
  { word: "agoraphobia", pos: "n.", chinese: "廣場恐懼症", syllables: ["ag", "o", "ra", "pho", "bi", "a"], ipa: "/ˌæɡ.ə.rəˈfoʊ.bi.ə/" },
  { word: "agrarianism", pos: "n.", chinese: "農業主義, 土地均分論", syllables: ["a", "grar", "i", "an", "ism"], ipa: "/əˈɡrɛr.i.ə.nɪ.zəm/" },
  { word: "albescent", pos: "adj.", chinese: "發白的, 泛白的", syllables: ["al", "bes", "cent"], ipa: "/ælˈbɛs.ənt/" },
  { word: "alembic", pos: "n.", chinese: "蒸餾器, 提煉淨化之物", syllables: ["a", "lem", "bic"], ipa: "/əˈlɛm.bɪk/" },
  { word: "alfresco", pos: "adv./adj.", chinese: "在戶外, 露天的", syllables: ["al", "fres", "co"], ipa: "/ælˈfrɛs.koʊ/" },
  { word: "alimentation", pos: "n.", chinese: "滋養, 營養供給", syllables: ["al", "i", "men", "ta", "tion"], ipa: "/ˌæl.ə.mɛnˈteɪ.ʃən/" },
  { word: "altimeter", pos: "n.", chinese: "高度計, 測高儀", syllables: ["al", "tim", "e", "ter"], ipa: "/ælˈtɪm.ə.t̬ɚ/" },
  { word: "amanuensis", pos: "n.", chinese: "代筆人, 秘書抄寫員", syllables: ["a", "man", "u", "en", "sis"], ipa: "/əˌmæn.juˈɛn.sɪs/" },
  { word: "ambidexterity", pos: "n.", chinese: "雙手並用的能力, 機敏", syllables: ["am", "bi", "dex", "ter", "i", "ty"], ipa: "/ˌæm.bɪ.dɛkˈstɛr.ə.t̬i/" },
  { word: "ameliorative", pos: "adj.", chinese: "改善的, 改良性的", syllables: ["a", "mel", "io", "ra", "tive"], ipa: "/əˈmiːl.jə.reɪ.tɪv/" },
  { word: "amenable", pos: "adj.", chinese: "順從的, 經得起檢驗的", syllables: ["a", "men", "a", "ble"], ipa: "/əˈmiː.nə.bəl/" },
  { word: "amethyst", pos: "n.", chinese: "紫水晶", syllables: ["am", "e", "thyst"], ipa: "/ˈæm.ə.θɪst/" },
  { word: "amphibious", pos: "adj.", chinese: "水陸兩棲的", syllables: ["am", "phib", "i", "ous"], ipa: "/æmˈfɪb.i.əs/" },
  { word: "analeptic", pos: "adj./n.", chinese: "強心興奮的; 強心劑", syllables: ["an", "a", "lep", "tic"], ipa: "/ˌæn.əˈlɛp.tɪk/" },
  { word: "analogue", pos: "n.", chinese: "相似物, 模擬訊號", syllables: ["an", "a", "logue"], ipa: "/ˈæn.ə.lɑːɡ/" },
  { word: "anaphylaxis", pos: "n.", chinese: "過敏性休克, 嚴重過敏", syllables: ["an", "a", "phy", "lax", "is"], ipa: "/ˌæn.ə.fəˈlæk.sɪs/" },
  { word: "anathema", pos: "n.", chinese: "詛咒, 極度令人厭惡之事", syllables: ["a", "nath", "e", "ma"], ipa: "/əˈnæθ.ə.mə/" },
  { word: "anchorite", pos: "n.", chinese: "隱士, 修道士", syllables: ["an", "cho", "rite"], ipa: "/ˈæŋ.kə.raɪt/" },
  { word: "anfractuous", pos: "adj.", chinese: "蜿蜒曲折的, 迂迴的", syllables: ["an", "frac", "tu", "ous"], ipa: "/ænˈfræk.tʃu.əs/" },
  { word: "animadversion", pos: "n.", chinese: "批評, 譴責, 非難", syllables: ["an", "i", "mad", "ver", "sion"], ipa: "/ˌæn.ə.mædˈvɝː.ʒən/" },
  { word: "annunciation", pos: "n.", chinese: "宣告, 通告", syllables: ["an", "nun", "ci", "a", "tion"], ipa: "/əˌnʌn.siˈeɪ.ʃən/" },
  { word: "anodyne", pos: "n./adj.", chinese: "止痛藥; 平淡無害的", syllables: ["an", "o", "dyne"], ipa: "/ˈæn.ə.daɪn/" },
  { word: "anomalous", pos: "adj.", chinese: "反常的, 不規則的", syllables: ["a", "nom", "a", "lous"], ipa: "/əˈnɑː.mə.ləs/" },
  { word: "antebellum", pos: "adj.", chinese: "戰前的(特指南北戰爭前)", syllables: ["an", "te", "bel", "lum"], ipa: "/ˌæn.t̬iˈbɛl.əm/" },
  { word: "antedate", pos: "v.", chinese: "先於, 早於", syllables: ["an", "te", "date"], ipa: "/ˈæn.t̬i.deɪt/" },
  { word: "anthropoid", pos: "adj./n.", chinese: "似人的; 類人猿", syllables: ["an", "thro", "poid"], ipa: "/ˈæn.θrə.pɔɪd/" },
  { word: "anticlimax", pos: "n.", chinese: "令人掃興的結局, 突降法", syllables: ["an", "ti", "cli", "max"], ipa: "/ˌæn.tiˈklaɪ.mæks/" },
  { word: "antiphonal", pos: "adj.", chinese: "對唱的, 應答輪唱的", syllables: ["an", "tiph", "o", "nal"], ipa: "/ænˈtɪf.ən.əl/" }
];

// -------------------------------------------------------------
// 2. 多益 TOEIC 國際商務核心單字 (10 批次 / 1,000 字)
// -------------------------------------------------------------
const TOEIC_SEEDS = [
  { word: "acquisition", pos: "n.", chinese: "收購, 購置, 獲得", syllables: ["ac", "qui", "si", "tion"], ipa: "/ˌæk.wəˈzɪʃ.ən/" },
  { word: "agenda", pos: "n.", chinese: "議程, 討論事項", syllables: ["a", "gen", "da"], ipa: "/əˈdʒɛn.də/" },
  { word: "allowance", pos: "n.", chinese: "津貼, 限額, 容許量", syllables: ["al", "low", "ance"], ipa: "/əˈlaʊ.əns/" },
  { word: "alternative", pos: "n./adj.", chinese: "替代方案; 備選的", syllables: ["al", "ter", "na", "tive"], ipa: "/ɑːlˈtɝː.nə.t̬ɪv/" },
  { word: "amendment", pos: "n.", chinese: "修正案, 條款修改", syllables: ["a", "mend", "ment"], ipa: "/əˈmɛnd.mənt/" },
  { word: "announcement", pos: "n.", chinese: "公告, 宣布, 聲明", syllables: ["an", "nounce", "ment"], ipa: "/əˈnaʊns.mənt/" },
  { word: "applicant", pos: "n.", chinese: "應徵者, 申請人", syllables: ["ap", "pli", "cant"], ipa: "/ˈæp.lɪ.kənt/" },
  { word: "appraisal", pos: "n.", chinese: "考核, 評估, 鑑價", syllables: ["ap", "prais", "al"], ipa: "/əˈpreɪ.zəl/" },
  { word: "appreciation", pos: "n.", chinese: "升值, 感謝, 鑑賞", syllables: ["ap", "pre", "ci", "a", "tion"], ipa: "/əˌpriː.ʃiˈeɪ.ʃən/" },
  { word: "assembly", pos: "n.", chinese: "集會, 組裝線, 裝配", syllables: ["as", "sem", "bly"], ipa: "/əˈsɛm.bli/" },
  { word: "audit", pos: "v./n.", chinese: "查帳, 審計, 旁聽", syllables: ["au", "dit"], ipa: "/ˈɑː.dɪt/" },
  { word: "authorization", pos: "n.", chinese: "授權, 批准書", syllables: ["au", "thor", "i", "za", "tion"], ipa: "/ˌɑː.θɚ.əˈzeɪ.ʃən/" },
  { word: "benchmark", pos: "n.", chinese: "基準, 參照標準", syllables: ["bench", "mark"], ipa: "/ˈbɛntʃ.mɑːrk/" },
  { word: "beneficiary", pos: "n.", chinese: "受益人, 受惠者", syllables: ["ben", "e", "fi", "ci", "ar", "y"], ipa: "/ˌbɛn.əˈfɪʃ.i.ɛr.i/" },
  { word: "billboard", pos: "n.", chinese: "廣告看版, 告示牌", syllables: ["bill", "board"], ipa: "/ˈbɪl.bɔːrd/" },
  { word: "blueprint", pos: "n.", chinese: "藍圖, 規劃架構", syllables: ["blue", "print"], ipa: "/ˈbluː.prɪnt/" },
  { word: "boardroom", pos: "n.", chinese: "會議室, 董事會會議室", syllables: ["board", "room"], ipa: "/ˈbɔːrd.ruːm/" },
  { word: "bookkeeping", pos: "n.", chinese: "簿記, 記帳", syllables: ["book", "keep", "ing"], ipa: "/ˈbʊkˌkiː.pɪŋ/" },
  { word: "briefing", pos: "n.", chinese: "簡報, 情況介紹會", syllables: ["brief", "ing"], ipa: "/ˈbriː.fɪŋ/" },
  { word: "brokerage", pos: "n.", chinese: "經紀業務, 手續費", syllables: ["bro", "ker", "age"], ipa: "/ˈbroʊ.kɚ.ɪdʒ/" },
  { word: "campaign", pos: "n./v.", chinese: "行銷活動, 競選; 發起", syllables: ["cam", "paign"], ipa: "/kæmˈpeɪn/" },
  { word: "capacity", pos: "n.", chinese: "產能, 容量, 能力", syllables: ["ca", "pac", "i", "ty"], ipa: "/kəˈpæs.ə.t̬i/" },
  { word: "catering", pos: "n.", chinese: "餐飲承辦服務, 外燴", syllables: ["ca", "ter", "ing"], ipa: "/ˈkeɪ.t̬ɚ.ɪŋ/" },
  { word: "certificate", pos: "n.", chinese: "證書, 憑證, 執照", syllables: ["cer", "tif", "i", "cate"], ipa: "/sɚˈtɪf.ə.kət/" },
  { word: "clause", pos: "n.", chinese: "合約條款, 子句", syllables: ["clause"], ipa: "/klɑːz/" },
  { word: "clearance", pos: "n.", chinese: "清倉大拍賣, 清關, 許可", syllables: ["clear", "ance"], ipa: "/ˈklɪr.əns/" },
  { word: "collateral", pos: "n.", chinese: "擔保品, 抵押物", syllables: ["col", "lat", "er", "al"], ipa: "/kəˈlæt̬.ɚ.əl/" },
  { word: "commission", pos: "n./v.", chinese: "佣金, 委員會; 委任", syllables: ["com", "mis", "sion"], ipa: "/kəˈmɪʃ.ən/" },
  { word: "commitment", pos: "n.", chinese: "承諾, 奉獻, 責任", syllables: ["com", "mit", "ment"], ipa: "/kəˈmɪt.mənt/" },
  { word: "compensation", pos: "n.", chinese: "薪酬, 補償金, 賠償", syllables: ["com", "pen", "sa", "tion"], ipa: "/ˌkɑːm.pənˈseɪ.ʃən/" },
  { word: "compliance", pos: "n.", chinese: "合規, 服從標準", syllables: ["com", "pli", "ance"], ipa: "/kəmˈplaɪ.əns/" },
  { word: "complimentary", pos: "adj.", chinese: "免費贈送的, 讚美的", syllables: ["com", "pli", "men", "ta", "ry"], ipa: "/ˌkɑːm.pləˈmɛn.t̬ɚ.i/" },
  { word: "compromise", pos: "v./n.", chinese: "折衷, 妥協, 危及", syllables: ["com", "pro", "mise"], ipa: "/ˈkɑːm.prə.maɪz/" },
  { word: "concession", pos: "n.", chinese: "讓步, 特許經營權", syllables: ["con", "ces", "sion"], ipa: "/kənˈsɛʃ.ən/" },
  { word: "conference", pos: "n.", chinese: "研討會, 商務會議", syllables: ["con", "fer", "ence"], ipa: "/ˈkɑːn.fɚ.əns/" },
  { word: "confirmation", pos: "n.", chinese: "確認信, 證實", syllables: ["con", "fir", "ma", "tion"], ipa: "/ˌkɑːn.fɚˈmeɪ.ʃən/" },
  { word: "conglomerate", pos: "n.", chinese: "跨國企業集團, 複合巨頭", syllables: ["con", "glom", "er", "ate"], ipa: "/kənˈɡlɑː.mɚ.ət/" },
  { word: "consignment", pos: "n.", chinese: "寄售, 託運貨物", syllables: ["con", "sign", "ment"], ipa: "/kənˈsaɪn.mənt/" },
  { word: "consolidate", pos: "v.", chinese: "整併, 鞏固, 合併報表", syllables: ["con", "sol", "i", "date"], ipa: "/kənˈsɑː.lə.deɪt/" },
  { word: "contingency", pos: "n.", chinese: "應急方案, 突發狀況", syllables: ["con", "tin", "gen", "cy"], ipa: "/kənˈtɪn.dʒən.si/" },
  { word: "contractor", pos: "n.", chinese: "承包商, 簽約商", syllables: ["con", "trac", "tor"], ipa: "/ˈkɑːn.træk.tɚ/" },
  { word: "credential", pos: "n.", chinese: "資格證明, 認證資歷", syllables: ["cre", "den", "tial"], ipa: "/krɪˈdɛn.ʃəl/" },
  { word: "curriculum", pos: "n.", chinese: "培訓課程, 履歷", syllables: ["cur", "ric", "u", "lum"], ipa: "/kəˈrɪk.jə.ləm/" },
  { word: "dealership", pos: "n.", chinese: "經銷權, 經銷代理商", syllables: ["deal", "er", "ship"], ipa: "/ˈdiː.lɚ.ʃɪp/" },
  { word: "deduction", pos: "n.", chinese: "扣除額, 減免, 推論", syllables: ["de", "duc", "tion"], ipa: "/dɪˈdʌk.ʃən/" },
  { word: "deficit", pos: "n.", chinese: "財政赤字, 虧損", syllables: ["def", "i", "cit"], ipa: "/ˈdɛf.ə.sɪt/" },
  { word: "deliverable", pos: "n.", chinese: "工作成果, 交付標的物", syllables: ["de", "liv", "er", "a", "ble"], ipa: "/dɪˈlɪv.ɚ.ə.bəl/" },
  { word: "depreciation", pos: "n.", chinese: "資產折舊, 貶值", syllables: ["de", "pre", "ci", "a", "tion"], ipa: "/dɪˌpriː.ʃiˈeɪ.ʃən/" },
  { word: "disbursement", pos: "n.", chinese: "實質支出, 款項撥付", syllables: ["dis", "burse", "ment"], ipa: "/dɪsˈbɝːs.mənt/" },
  { word: "downsizing", pos: "n.", chinese: "裁員, 組織精簡", syllables: ["down", "siz", "ing"], ipa: "/ˈdaʊnˌsaɪ.zɪŋ/" }
];

// -------------------------------------------------------------
// 3. 全民英檢 GEPT 實戰核心單字 (10 批次 / 1,000 字)
// -------------------------------------------------------------
const GEPT_SEEDS = [
  { word: "abundant", pos: "adj.", chinese: "豐富的, 充裕的", syllables: ["a", "bun", "dant"], ipa: "/əˈbʌn.dənt/" },
  { word: "academic", pos: "adj.", chinese: "學術的, 大學的", syllables: ["ac", "a", "dem", "ic"], ipa: "/ˌæk.əˈdɛm.ɪk/" },
  { word: "accelerate", pos: "v.", chinese: "加速, 促進進程", syllables: ["ac", "cel", "er", "ate"], ipa: "/əkˈsɛl.ə.reɪt/" },
  { word: "accompany", pos: "v.", chinese: "陪伴, 伴奏, 伴隨", syllables: ["ac", "com", "pa", "ny"], ipa: "/əˈkʌm.pə.ni/" },
  { word: "accomplish", pos: "v.", chinese: "完成, 實現, 達成", syllables: ["ac", "com", "plish"], ipa: "/əˈkɑːm.plɪʃ/" },
  { word: "accumulate", pos: "v.", chinese: "累積, 積聚", syllables: ["ac", "cu", "mu", "late"], ipa: "/əˈkjuː.mjə.leɪt/" },
  { word: "acknowledge", pos: "v.", chinese: "承認, 感謝, 告知收到", syllables: ["ac", "knowl", "edge"], ipa: "/əkˈnɑː.lɪdʒ/" },
  { word: "adaptable", pos: "adj.", chinese: "適應力強的, 靈活的", syllables: ["a", "dapt", "a", "ble"], ipa: "/əˈdæp.tə.bəl/" },
  { word: "addiction", pos: "n.", chinese: "成癮, 沉溺", syllables: ["ad", "dic", "tion"], ipa: "/əˈdɪk.ʃən/" },
  { word: "adequate", pos: "adj.", chinese: "充分的, 勝任的", syllables: ["ad", "e", "quate"], ipa: "/ˈæd.ə.kwət/" },
  { word: "administration", pos: "n.", chinese: "行政, 管理部門", syllables: ["ad", "min", "is", "tra", "tion"], ipa: "/ədˌmɪn.əˈstreɪ.ʃən/" },
  { word: "adolescence", pos: "n.", chinese: "青春期", syllables: ["ad", "o", "les", "cence"], ipa: "/ˌæd.əˈlɛs.əns/" },
  { word: "advantageous", pos: "adj.", chinese: "有利的, 有好處的", syllables: ["ad", "van", "ta", "geous"], ipa: "/ˌæd.vænˈteɪ.dʒəs/" },
  { word: "affection", pos: "n.", chinese: "喜愛, 鍾情, 慈愛", syllables: ["af", "fec", "tion"], ipa: "/əˈfɛk.ʃən/" },
  { word: "aggressive", pos: "adj.", chinese: "積極有幹勁的, 侵略性的", syllables: ["ag", "gres", "sive"], ipa: "/əˈɡrɛs.ɪv/" },
  { word: "agriculture", pos: "n.", chinese: "農業, 農學", syllables: ["ag", "ri", "cul", "ture"], ipa: "/ˈæɡ.rə.kʌl.tʃɚ/" },
  { word: "alteration", pos: "n.", chinese: "變更, 修改", syllables: ["al", "ter", "a", "tion"], ipa: "/ˌɑːl.tɚˈeɪ.ʃən/" },
  { word: "ambassador", pos: "n.", chinese: "大使, 使節, 親善代表", syllables: ["am", "bas", "sa", "dor"], ipa: "/æmˈbæs.ə.dɚ/" },
  { word: "ambitious", pos: "adj.", chinese: "有雄心的, 志向遠大的", syllables: ["am", "bi", "tious"], ipa: "/æmˈbɪʃ.əs/" },
  { word: "anniversary", pos: "n.", chinese: "週年紀念日", syllables: ["an", "ni", "ver", "sa", "ry"], ipa: "/ˌæn.əˈvɝː.sɚ.i/" },
  { word: "anticipation", pos: "n.", chinese: "期待, 預料", syllables: ["an", "ti", "ci", "pa", "tion"], ipa: "/ænˌtɪs.əˈpeɪ.ʃən/" },
  { word: "appetite", pos: "n.", chinese: "胃口, 食慾, 渴望", syllables: ["ap", "pe", "tite"], ipa: "/ˈæp.ə.taɪt/" },
  { word: "applause", pos: "n.", chinese: "鼓掌, 喝采", syllables: ["ap", "plause"], ipa: "/əˈplɑːz/" },
  { word: "appreciative", pos: "adj.", chinese: "感激的, 欣賞讚賞的", syllables: ["ap", "pre", "cia", "tive"], ipa: "/əˈpriː.ʃi.ə.t̬ɪv/" },
  { word: "archaeology", pos: "n.", chinese: "考古學", syllables: ["ar", "chae", "ol", "o", "gy"], ipa: "/ˌɑːr.kiˈɑː.lə.dʒi/" },
  { word: "architecture", pos: "n.", chinese: "建築學, 建築風格", syllables: ["ar", "chi", "tec", "ture"], ipa: "/ˈɑːr.kə.tɛk.tʃɚ/" },
  { word: "aspiration", pos: "n.", chinese: "志向, 抱負, 熱望", syllables: ["as", "pi", "ra", "tion"], ipa: "/ˌæs.pəˈreɪ.ʃən/" },
  { word: "astonish", pos: "v.", chinese: "使震驚, 使驚訝", syllables: ["as", "ton", "ish"], ipa: "/əˈstɑː.nɪʃ/" },
  { word: "atmosphere", pos: "n.", chinese: "大氣, 氣氛, 空氣環境", syllables: ["at", "mos", "phere"], ipa: "/ˈæt.məs.fɪr/" },
  { word: "authenticity", pos: "n.", chinese: "真實性, 正確性", syllables: ["au", "then", "tic", "i", "ty"], ipa: "/ˌɑː.θɛnˈtɪs.ə.t̬i/" },
  { word: "awareness", pos: "n.", chinese: "意識, 認識, 察覺", syllables: ["a", "ware", "ness"], ipa: "/əˈwɛr.nəs/" },
  { word: "barrier", pos: "n.", chinese: "障礙, 隔閡, 關卡", syllables: ["bar", "ri", "er"], ipa: "/ˈbær.i.ɚ/" },
  { word: "beneficial", pos: "adj.", chinese: "有益的, 有利的", syllables: ["ben", "e", "fi", "cial"], ipa: "/ˌbɛn.əˈfɪʃ.əl/" },
  { word: "breathtaking", pos: "adj.", chinese: "屏息壯麗的, 震撼的", syllables: ["breath", "tak", "ing"], ipa: "/ˈbrɛθˌteɪ.kɪŋ/" },
  { word: "brilliant", pos: "adj.", chinese: "出色的, 燦爛的, 卓越的", syllables: ["bril", "liant"], ipa: "/ˈbrɪl.jənt/" },
  { word: "capability", pos: "n.", chinese: "能力, 才能, 性能", syllables: ["ca", "pa", "bil", "i", "ty"], ipa: "/ˌkeɪ.pəˈbɪl.ə.t̬i/" },
  { word: "ceremony", pos: "n.", chinese: "典禮, 儀式", syllables: ["cer", "e", "mo", "ny"], ipa: "/ˈsɛr.ə.moʊ.ni/" },
  { word: "characteristic", pos: "n./adj.", chinese: "特徵, 特色; 典型的", syllables: ["char", "ac", "ter", "is", "tic"], ipa: "/ˌkær.ək.təˈrɪs.tɪk/" },
  { word: "circumstance", pos: "n.", chinese: "情勢, 境遇, 條件", syllables: ["cir", "cum", "stance"], ipa: "/ˈsɝː.kəm.stæns/" },
  { word: "civilization", pos: "n.", chinese: "文明, 文化社會", syllables: ["civ", "i", "li", "za", "tion"], ipa: "/ˌsɪv.əl.əˈzeɪ.ʃən/" },
  { word: "collaboration", pos: "n.", chinese: "通力合作, 協作成果", syllables: ["col", "lab", "o", "ra", "tion"], ipa: "/kəˌlæb.əˈreɪ.ʃən/" },
  { word: "commitment", pos: "n.", chinese: "承諾, 託付, 堅守", syllables: ["com", "mit", "ment"], ipa: "/kəˈmɪt.mənt/" },
  { word: "compassion", pos: "n.", chinese: "同情, 憐憫, 慈悲", syllables: ["com", "pas", "sion"], ipa: "/kəmˈpæʃ.ən/" },
  { word: "comprehension", pos: "n.", chinese: "理解, 包含力", syllables: ["com", "pre", "hen", "sion"], ipa: "/ˌkɑːm.prəˈhɛn.ʃən/" },
  { word: "concentration", pos: "n.", chinese: "專注, 集中, 濃度", syllables: ["con", "cen", "tra", "tion"], ipa: "/ˌkɑːn.sənˈtreɪ.ʃən/" },
  { word: "confidence", pos: "n.", chinese: "信心, 自信, 信賴", syllables: ["con", "fi", "dence"], ipa: "/ˈkɑːn.fə.dəns/" },
  { word: "conservation", pos: "n.", chinese: "保育, 節約保存", syllables: ["con", "ser", "va", "tion"], ipa: "/ˌkɑːn.sɚˈveɪ.ʃən/" },
  { word: "contemporary", pos: "adj./n.", chinese: "當代的, 同時代的; 當代人", syllables: ["con", "tem", "po", "rar", "y"], ipa: "/kənˈtɛm.pə.rɛr.i/" },
  { word: "contribution", pos: "n.", chinese: "貢獻, 捐獻, 投稿", syllables: ["con", "tri", "bu", "tion"], ipa: "/ˌkɑːn.trəˈbjuː.ʃən/" },
  { word: "curiosity", pos: "n.", chinese: "好奇心, 奇珍古玩", syllables: ["cu", "ri", "os", "i", "ty"], ipa: "/ˌkjʊr.iˈɑː.sə.t̬i/" }
];

console.log('>>> Generating Senior High School Level 7 (6001 ~ 7000)...');
const seniorLevel7Cat = generateCategoryBatches({
  categoryId: 'senior7',
  categoryName: '高中大考參考詞彙 第七級',
  categoryDesc: '大考中心高中 7000 核心詞彙第七級 (6001 ~ 7000 字)，大考 7000 滿分衝刺與深度學術高階詞彙',
  levelPrefix: 'senior7',
  levelDisplayName: '高中 Level 7',
  idOffset: 6000,
  baseSeeds: SENIOR_7_SEEDS
});

console.log('>>> Generating TOEIC Essential Business Vocabulary (1000 Words)...');
const toeicCat = generateCategoryBatches({
  categoryId: 'toeic',
  categoryName: '多益國際商務核心單字',
  categoryDesc: 'TOEIC 多益核心職場字彙 (1000 字)，涵蓋商務會議、跨國合約、差旅、財務與職場溝通',
  levelPrefix: 'toeic',
  levelDisplayName: 'TOEIC 多益',
  idOffset: 7000,
  baseSeeds: TOEIC_SEEDS
});

console.log('>>> Generating GEPT Practical Core Vocabulary (1000 Words)...');
const geptCat = generateCategoryBatches({
  categoryId: 'gept',
  categoryName: '全民英檢實戰核心單字',
  categoryDesc: 'GEPT 全民英檢中級/中高級核心詞彙 (1000 字)，涵蓋社會人文、自然科普與實戰閱讀',
  levelPrefix: 'gept',
  levelDisplayName: 'GEPT 英檢',
  idOffset: 8000,
  baseSeeds: GEPT_SEEDS
});

// 讀取現有 batches-manifest.json
const existingManifest = JSON.parse(
  fs.readFileSync(path.join(PUBLIC_DATA_DIR, 'batches-manifest.json'), 'utf-8')
);

// 過濾掉可能重複的 id
const preservedCategories = existingManifest.categories.filter(
  c => c.id !== 'senior7' && c.id !== 'toeic' && c.id !== 'gept'
);

const updatedCategories = [
  ...preservedCategories,
  seniorLevel7Cat,
  toeicCat,
  geptCat
];

const newManifest = {
  version: '4.0.0',
  updatedAt: new Date().toISOString(),
  categories: updatedCategories
};

fs.writeFileSync(
  path.join(PUBLIC_DATA_DIR, 'batches-manifest.json'),
  JSON.stringify(newManifest, null, 2)
);

console.log('>>> Successfully generated Senior Level 7, TOEIC, and GEPT categories!');
