import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';
import * as yaml from 'js-yaml';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { allBatchData, BatchWord, DerivationItem } from '../lib/batch01Data';

export async function buildBatch11() {
  console.log('--- Starting Senior Batch 11 Build (Words 1001 ~ 1100) ---');

  // 1. Get words 1001 & 1002 from Level 1
  const seniorL1Path = path.join(process.cwd(), 'Source', 'MOE_SENIOR_Level1_Source_list.yaml');
  const seniorL1: any = yaml.load(fs.readFileSync(seniorL1Path, 'utf8'));
  const l1Words = seniorL1.words.filter((w: any) => w.id >= 1001 && w.id <= 1002);

  // 2. Parse Level 2 words from PDF
  const pdfBuffer = fs.readFileSync(path.join(process.cwd(), 'Source', 'MOE_SENIOR_Source.pdf'));
  const parser = new PDFParse(new Uint8Array(pdfBuffer));
  await parser.load();
  const res = await parser.getText();
  let inLevel2 = false;
  const allLines: string[] = [];

  for (let p = 0; p < res.pages.length; p++) {
    const rawLines = res.pages[p].text.split('\n').map(l => l.trim()).filter(Boolean);
    for (const line of rawLines) {
      if (/^高中英文參考詞彙表/.test(line)) continue;
      if (/^依級別排序/.test(line)) continue;
      if (/^-- \d+ of \d+ --/.test(line)) continue;
      if (/^\d+$/.test(line)) continue;
      if (line === '第二級') {
        inLevel2 = true;
        continue;
      }
      if (line === '第三級') {
        inLevel2 = false;
        break;
      }
      if (inLevel2) allLines.push(line);
    }
    if (!inLevel2 && allLines.length > 0) break;
  }

  const merged: string[] = [];
  for (let i = 0; i < allLines.length; i++) {
    const line = allLines[i];
    if (line.startsWith('/') || (line.startsWith('(') && !line.includes(' ')) || /^(?:art|n|v|adj|adv|prep|conj|pron|aux|int)\b\.?/i.test(line)) {
      if (merged.length > 0) {
        merged[merged.length - 1] += ' ' + line;
      }
    } else {
      merged.push(line);
    }
  }

  const l2RawList: { word: string; pos: string }[] = [];
  merged.forEach(entry => {
    const match = entry.match(/^(.+?)\s+((?:(?:art|n|v|adj|adv|prep|conj|pron|aux|int)\b\.?(?:\s*\/\s*(?:\([a-z]+\.\)|[a-z]+\.?))*|\/\([a-z]+\.\))+)$/i);
    if (match) {
      l2RawList.push({ word: match[1].trim(), pos: match[2].trim() });
    } else {
      const m2 = entry.match(/^(.+?)\s+((?:[a-z]+\.?\s*\/\s*)+[a-z]+\.?)$/i);
      if (m2) {
        l2RawList.push({ word: m2[1].trim(), pos: m2[2].trim() });
      } else {
        l2RawList.push({ word: entry, pos: '' });
      }
    }
  });

  const l2Words98 = l2RawList.slice(0, 98);

  // Chinese & Phonics dictionaries for Level 2 words 1~98
  const wordDict: Record<string, { chinese: string; syllable: string[]; ipa: string; derivations?: DerivationItem[] }> = {
    "zero": { chinese: "零", syllable: ["ze", "ro"], ipa: "/ˈzɪr.oʊ/" },
    "zoo": { chinese: "動物園", syllable: ["zoo"], ipa: "/zuː/" },
    "absence": { chinese: "缺席, 缺少", syllable: ["ab", "sence"], ipa: "/ˈæb.səns/" },
    "absent": { chinese: "缺席的; 缺席", syllable: ["ab", "sent"], ipa: "/ˈæb.sənt/" },
    "accept": { chinese: "接受, 認可", syllable: ["ac", "cept"], ipa: "/əkˈsept/" },
    "accident": { chinese: "意外, 事故", syllable: ["ac", "ci", "dent"], ipa: "/ˈæk.sə.dənt/" },
    "account": { chinese: "帳戶; 說明, 視為", syllable: ["ac", "count"], ipa: "/əˈkaʊnt/" },
    "active": { chinese: "活躍的, 積極的", syllable: ["ac", "tive"], ipa: "/ˈæk.tɪv/" },
    "activity": { chinese: "活動", syllable: ["ac", "tiv", "i", "ty"], ipa: "/ækˈtɪv.ə.t̬i/" },
    "actual": { chinese: "實際的, 真實的", syllable: ["ac", "tu", "al"], ipa: "/ˈæk.tʃu.əl/" },
    "addition": { chinese: "增加, 加法", syllable: ["ad", "di", "tion"], ipa: "/əˈdɪʃ.ən/" },
    "address": { chinese: "地址; 致詞, 處理", syllable: ["ad", "dress"], ipa: "/ˈæd.res/" },
    "admit": { chinese: "承認, 准許進入", syllable: ["ad", "mit"], ipa: "/ədˈmɪt/" },
    "adult": { chinese: "成年人; 成年的", syllable: ["a", "dult"], ipa: "/ˈæd.ʌlt/" },
    "advance": { chinese: "前進, 晉升; 預先", syllable: ["ad", "vance"], ipa: "/ədˈvæns/" },
    "advice": { chinese: "勸告, 忠告, 建議", syllable: ["ad", "vice"], ipa: "/ədˈvaɪs/" },
    "affair": { chinese: "事件, 事務", syllable: ["af", "fair"], ipa: "/əˈfer/" },
    "affect": { chinese: "影響, 感動", syllable: ["af", "fect"], ipa: "/əˈfekt/" },
    "against": { chinese: "反對, 依靠, 防備", syllable: ["a", "gainst"], ipa: "/əˈɡenst/" },
    "ahead": { chinese: "在前面, 事先", syllable: ["a", "head"], ipa: "/əˈhed/" },
    "aid": { chinese: "幫助, 援助", syllable: ["aid"], ipa: "/eɪd/" },
    "aim": { chinese: "目標; 瞄準, 致力", syllable: ["aim"], ipa: "/eɪm/" },
    "aircraft": { chinese: "航空器, 飛機", syllable: ["air", "craft"], ipa: "/ˈer.kræft/" },
    "alarm": { chinese: "警報; 使驚慌", syllable: ["a", "larm"], ipa: "/əˈlɑːrm/" },
    "album": { chinese: "相簿, 音樂專輯", syllable: ["al", "bum"], ipa: "/ˈæl.bəm/" },
    "alike": { chinese: "相似地; 相似的", syllable: ["a", "like"], ipa: "/əˈlaɪk/" },
    "alive": { chinese: "活著的, 有生氣的", syllable: ["a", "live"], ipa: "/əˈlaɪv/" },
    "alone": { chinese: "獨自的; 單獨地", syllable: ["a", "lone"], ipa: "/əˈloʊn/" },
    "aloud": { chinese: "大聲地", syllable: ["a", "loud"], ipa: "/əˈlaʊd/" },
    "altogether": { chinese: "完全, 總共", syllable: ["al", "to", "geth", "er"], ipa: "/ˌɔːl.təˈɡeð.ɚ/" },
    "among": { chinese: "在...之中", syllable: ["a", "mong"], ipa: "/əˈmʌŋ/" },
    "amount": { chinese: "數量; 總計達", syllable: ["a", "mount"], ipa: "/əˈmaʊnt/" },
    "ancient": { chinese: "古代的, 古老的", syllable: ["an", "cient"], ipa: "/ˈeɪn.ʃənt/" },
    "anger": { chinese: "憤怒, 生氣", syllable: ["an", "ger"], ipa: "/ˈæŋ.ɡɚ/" },
    "angle": { chinese: "角度, 角落", syllable: ["an", "gle"], ipa: "/ˈæŋ.ɡəl/" },
    "ankle": { chinese: "腳踝", syllable: ["an", "kle"], ipa: "/ˈæŋ.kəl/" },
    "anytime": { chinese: "在任何時候", syllable: ["an", "y", "time"], ipa: "/ˈen.i.taɪm/" },
    "anyway": { chinese: "無論如何, 反正", syllable: ["an", "y", "way"], ipa: "/ˈen.i.weɪ/" },
    "anywhere": { chinese: "在任何地方", syllable: ["an", "y", "where"], ipa: "/ˈen.i.wer/" },
    "anywhere/anyplace": { chinese: "在任何地方", syllable: ["an", "y", "where"], ipa: "/ˈen.i.wer/" },
    "ape": { chinese: "大猩猩, 猿", syllable: ["ape"], ipa: "/eɪp/" },
    "appearance": { chinese: "外表, 出現", syllable: ["ap", "pear", "ance"], ipa: "/əˈpɪr.əns/" },
    "appetite": { chinese: "食慾, 胃口", syllable: ["ap", "pe", "tite"], ipa: "/ˈæp.ə.taɪt/" },
    "apply": { chinese: "申請, 應用", syllable: ["ap", "ply"], ipa: "/əˈplaɪ/" },
    "appreciate": { chinese: "欣賞, 感激, 升值", syllable: ["ap", "pre", "ci", "ate"], ipa: "/əˈpriː.ʃi.eɪt/" },
    "approach": { chinese: "接近, 方法; 走近", syllable: ["ap", "proach"], ipa: "/əˈproʊtʃ/" },
    "argue": { chinese: "爭論, 主張", syllable: ["ar", "gue"], ipa: "/ˈɑːrɡ.juː/" },
    "argue(argument)": { chinese: "爭論, 主張 (爭論 n.)", syllable: ["ar", "gue"], ipa: "/ˈɑːrɡ.juː/" },
    "army": { chinese: "軍隊, 陸軍", syllable: ["ar", "my"], ipa: "/ˈɑːr.mi/" },
    "arrange": { chinese: "安排, 整理", syllable: ["ar", "range"], ipa: "/əˈreɪndʒ/" },
    "arrange(ment)": { chinese: "安排, 整理 (安排 n.)", syllable: ["ar", "range"], ipa: "/əˈreɪndʒ/" },
    "arrival": { chinese: "到達, 抵達者", syllable: ["ar", "riv", "al"], ipa: "/əˈraɪ.vəl/" },
    "arrow": { chinese: "箭, 箭頭符號", syllable: ["ar", "row"], ipa: "/ˈer.oʊ/" },
    "article": { chinese: "文章, 條款, 物件", syllable: ["ar", "ti", "cle"], ipa: "/ˈɑːr.t̬ɪ.kəl/" },
    "artist": { chinese: "藝術家, 畫家", syllable: ["art", "ist"], ipa: "/ˈɑːr.tɪst/" },
    "asleep": { chinese: "睡著的", syllable: ["a", "sleep"], ipa: "/əˈsliːp/" },
    "attempt": { chinese: "企圖, 嘗試", syllable: ["at", "tempt"], ipa: "/əˈtempt/" },
    "attend": { chinese: "出席, 參加, 照料", syllable: ["at", "tend"], ipa: "/əˈtend/" },
    "attention": { chinese: "注意, 專心, 關照", syllable: ["at", "ten", "tion"], ipa: "/əˈten.ʃən/" },
    "author": { chinese: "作者, 作家; 寫作", syllable: ["au", "thor"], ipa: "/ˈɔː.θɚ/" },
    "available": { chinese: "可用的, 有空的", syllable: ["a", "vail", "a", "ble"], ipa: "/əˈveɪ.lə.bəl/" },
    "average": { chinese: "平均的; 平均數; 平均達到", syllable: ["av", "er", "age"], ipa: "/ˈæv.ɚ.ɪdʒ/" },
    "avoid": { chinese: "避免, 躲避", syllable: ["a", "void"], ipa: "/əˈvɔɪd/" },
    "backpack": { chinese: "後背包; 背包旅行", syllable: ["back", "pack"], ipa: "/ˈbæk.pæk/" },
    "backward": { chinese: "向後的, 落後的", syllable: ["back", "ward"], ipa: "/ˈbæk.wɚd/" },
    "backward/backwards": { chinese: "向後地, 倒退地", syllable: ["back", "ward"], ipa: "/ˈbæk.wɚd/" },
    "badminton": { chinese: "羽毛球", syllable: ["bad", "min", "ton"], ipa: "/ˈbæd.mɪn.tən/" },
    "bake": { chinese: "烘烤, 烤麵包", syllable: ["bake"], ipa: "/beɪk/" },
    "bakery": { chinese: "麵包店", syllable: ["bak", "er", "y"], ipa: "/ˈbeɪ.kɚ.i/" },
    "balance": { chinese: "平衡, 餘額; 使平衡", syllable: ["bal", "ance"], ipa: "/ˈbæl.əns/" },
    "balcony": { chinese: "陽台, 包廂", syllable: ["bal", "co", "ny"], ipa: "/ˈbæl.kə.ni/" },
    "balloon": { chinese: "氣球", syllable: ["bal", "loon"], ipa: "/bəˈluːn/" },
    "bar": { chinese: "酒吧, 棒狀物; 阻擋", syllable: ["bar"], ipa: "/bɑːr/" },
    "barbecue": { chinese: "戶外烤肉", syllable: ["bar", "be", "cue"], ipa: "/ˈbɑːr.bə.kjuː/" },
    "barber": { chinese: "理髮師", syllable: ["bar", "ber"], ipa: "/ˈbɑːr.bɚ/" },
    "bark": { chinese: "吠叫; 樹皮", syllable: ["bark"], ipa: "/bɑːrk/" },
    "base": { chinese: "基礎, 基地; 以...為基礎", syllable: ["base"], ipa: "/beɪs/" },
    "basic": { chinese: "基本的, 基礎的", syllable: ["ba", "sic"], ipa: "/ˈbeɪ.sɪk/" },
    "basics": { chinese: "基礎, 基本原理", syllable: ["ba", "sics"], ipa: "/ˈbeɪ.sɪks/" },
    "basis": { chinese: "基礎, 根據", syllable: ["ba", "sis"], ipa: "/ˈbeɪ.sɪs/" },
    "bathe": { chinese: "洗澡, 沐浴", syllable: ["bathe"], ipa: "/beɪð/" },
    "battle": { chinese: "戰役, 奮鬥; 搏鬥", syllable: ["bat", "tle"], ipa: "/ˈbæt̬.əl/" },
    "beard": { chinese: "下巴鬍鬚", syllable: ["beard"], ipa: "/bɪrd/" },
    "beat": { chinese: "敲擊, 打敗; 節拍", syllable: ["beat"], ipa: "/biːt/" },
    "beauty": { chinese: "美麗, 美人", syllable: ["beau", "ty"], ipa: "/ˈbjuː.t̬i/" },
    "beer": { chinese: "啤酒", syllable: ["beer"], ipa: "/bɪr/" },
    "beg": { chinese: "乞求, 懇求", syllable: ["beg"], ipa: "/beɡ/" },
    "beginner": { chinese: "初學者, 新手", syllable: ["be", "gin", "ner"], ipa: "/bɪˈɡɪn.ɚ/" },
    "behave": { chinese: "表現, 舉止得體", syllable: ["be", "have"], ipa: "/bɪˈheɪv/" },
    "being": { chinese: "存在, 生物", syllable: ["be", "ing"], ipa: "/ˈbiː.ɪŋ/" },
    "belief": { chinese: "信仰, 信念", syllable: ["be", "lief"], ipa: "/bɪˈliːf/" },
    "bend": { chinese: "彎曲, 屈服; 拐彎處", syllable: ["bend"], ipa: "/bend/" },
    "better": { chinese: "較好的; 改善", syllable: ["bet", "ter"], ipa: "/ˈbet̬.ɚ/" },
    "beyond": { chinese: "超越, 超過; 在更遠處", syllable: ["be", "yond"], ipa: "/biˈjɑːnd/" },
    "bill": { chinese: "帳單, 鈔票; 開立帳單", syllable: ["bill"], ipa: "/bɪl/" },
    "billion": { chinese: "十億", syllable: ["bil", "lion"], ipa: "/ˈbɪl.jən/" },
    "birth": { chinese: "出生, 誕生", syllable: ["birth"], ipa: "/bɝːθ/" },
    "biscuit": { chinese: "餅乾", syllable: ["bis", "cuit"], ipa: "/ˈbɪs.kɪt/" },
    "bit": { chinese: "小塊, 一點點", syllable: ["bit"], ipa: "/bɪt/" },
    "blackboard": { chinese: "黑板", syllable: ["black", "board"], ipa: "/ˈblæk.bɔːrd/" },
    "blame": { chinese: "責怪, 歸咎; 責任", syllable: ["blame"], ipa: "/bleɪm/" },
    "blank": { chinese: "空白的; 空格", syllable: ["blank"], ipa: "/blæŋk/" },
    "blanket": { chinese: "毛毯, 毯子; 覆蓋", syllable: ["blan", "ket"], ipa: "/ˈblæŋ.kɪt/" }
  };

  // Build raw 100 words array
  const raw100Words: any[] = [];

  function deriveWordDerivations(cleanWord: string, syllables: string[], ipa: string): DerivationItem[] {
    const cleanIpa = ipa.replace(/^\//, '').replace(/\/$/, '');
    let primaryStressIdx = 0;
    const stressPos = cleanIpa.indexOf('ˈ');
    if (stressPos > 0) {
      const before = cleanIpa.substring(0, stressPos);
      const parts = before.split(/[\.ˌ]/).filter(p => p.length > 0);
      primaryStressIdx = Math.min(parts.length, syllables.length - 1);
    }

    const derivations: DerivationItem[] = [];

    syllables.forEach((syl, sIdx) => {
      const sylL = syl.toLowerCase();
      const isStressed = (sIdx === primaryStressIdx) || (syllables.length === 1);
      let rule = '閉音節 (R001)';
      let status = '【適用】';
      let reason = '子音封閉發短母音';

      // 1. Unstressed Assimilated / Standard Prefixes (R012)
      // e.g. ac- in account /əˈkaʊnt/, accept /əkˈsept/; ad- in admit /ədˈmɪt/; ap- in apply /əˈplaɪ/
      const unstressedPrefixes = ['ac', 'ad', 'af', 'al', 'ap', 'as', 'at', 'a', 'an', 'be', 'de', 're', 'ex', 'in', 'im', 'pro', 'sub', 'dis', 'un', 'con', 'com'];
      if (sIdx === 0 && !isStressed && syllables.length > 1 && (unstressedPrefixes.includes(sylL) || cleanIpa.startsWith('ə') || cleanIpa.startsWith('ɪ') || cleanIpa.startsWith('bɪ') || cleanIpa.startsWith('dɪ') || cleanIpa.startsWith('rɪ'))) {
        rule = '前綴弱化規則 (R012)';
        status = '【適用】';
        if (['ac', 'ad', 'af', 'al', 'ap', 'as', 'at'].includes(sylL)) {
          reason = `非重讀同化前綴［${syl}］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）`;
        } else if (['be', 'de', 're', 'ex'].includes(sylL)) {
          reason = `非重讀前綴［${syl}］母音弱化發 /ə/ 或 /ɪ/`;
        } else {
          reason = `非重讀前綴［${syl}］母音弱化發輕母音 /ə/ 或 /ɪ/`;
        }
      }
      // 2. Syllabic Consonants (R009)
      else if (sylL.endsWith('ble') || sylL.endsWith('tle') || sylL.endsWith('ple') || sylL.endsWith('dle') || sylL.endsWith('gle') || sylL.endsWith('kle')) {
        rule = '成音節字尾 (R009)';
        status = '【適用】';
        reason = '成音節字尾發 /əl/ 或 /l̩/';
      }
      // 3. Suffix Reduction (R012)
      else if (!isStressed && sIdx === syllables.length - 1 && ['tion', 'sion', 'ment', 'ful', 'ance', 'ence', 'al', 'ous', 'less', 'ness'].includes(sylL)) {
        rule = '前綴與後綴弱化規則 (R012)';
        status = '【適用】';
        reason = `非重讀衍生後綴［${syl}］弱化發音`;
      }
      // 4. R-Controlled Vowel (R005)
      else if (/[aeiou]{1,2}r$/i.test(sylL) || /[aeiou]r[b-df-hj-np-tv-z]/i.test(sylL)) {
        if (!isStressed) {
          rule = 'R 控制母音弱化 (R005/R008)';
          status = '【適用】';
          reason = '非重讀音節弱化發輕捲舌母音 /ɚ/';
        } else {
          rule = 'R 控制母音 (R005)';
          status = '【適用】';
          reason = '母音接 r 形成捲舌母音';
        }
      }
      // 5. Special root derivations (e.g. bakery from bake)
      else if (cleanWord === 'bakery' && sIdx === 0) {
        rule = '魔術 e 衍生 (R003)';
        status = '【適用】';
        reason = '衍生自 bake 保持長母音 /beɪ/';
      }
      // 6. Magic e (R003)
      else if (sylL.endsWith('e') && sylL.length > 2 && !sylL.endsWith('ee') && !sylL.endsWith('le')) {
        rule = '魔術 e (R003)';
        status = '【適用】';
        reason = '字尾不發音 e 使主要母音發長母音';
      }
      // 7. Vowel Teams (R004)
      else if (/ee|ea|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei|ew|ey|oa|ui|[aeiou]{2}/i.test(sylL)) {
        rule = '母音組合 (R004)';
        status = '【適用】';
        reason = '母音組合發固定長母音或雙母音';
      }
      // 8. Open Syllable (R002)
      else if (/^[b-df-hj-np-tv-z]*[aeiouy]$/i.test(sylL)) {
        rule = '開音節 (R002)';
        status = '【適用】';
        reason = isStressed ? '重讀開音節母音結尾發長母音' : '字尾母音結尾發長母音或弱化音';
      }
      // 9. Unstressed reduction for other syllables (R008)
      else if (!isStressed && syllables.length > 1) {
        rule = '非重音母音弱化 (R008)';
        status = '【適用】';
        reason = '非重讀音節母音弱化發輕母音 /ə/ 或 /ɪ/（不適用重讀閉音節短母音）';
      }
      // 10. Stressed Closed Syllable (R001)
      else {
        rule = '閉音節 (R001)';
        status = '【適用】';
        reason = '重讀閉音節子音封閉發短母音';
      }

      derivations.push({
        syllable: `第 ${sIdx + 1} 音節［${syl}］`,
        rule,
        status,
        reason
      });
    });

    return derivations;
  }

  // Add words 1001 & 1002 from Level 1
  l1Words.forEach((w: any) => {
    const d = wordDict[w.word.toLowerCase()] || { chinese: w.chinese, syllable: w.syllable, ipa: w.ipa };
    const syllables = d.syllable || [w.word];
    const derivations = deriveWordDerivations(w.word, syllables, d.ipa);
    raw100Words.push({
      id: w.id,
      word: w.word,
      pos: w.pos || 'n.',
      chinese: d.chinese,
      syllable: syllables,
      ipa: d.ipa,
      level: 1,
      levelName: '第一級',
      derivations
    });
  });

  // Add words 1003 to 1100 from Level 2
  l2Words98.forEach((w, index) => {
    const id = 1003 + index;
    const cleanWord = w.word.trim();
    const lookupKey = cleanWord.toLowerCase();
    const d = wordDict[lookupKey] || wordDict[cleanWord.split('/')[0].toLowerCase()] || {
      chinese: '高中核心詞彙',
      syllable: [cleanWord],
      ipa: `/${cleanWord}/`
    };

    const syllables = d.syllable || [cleanWord];
    const derivations = deriveWordDerivations(cleanWord, syllables, d.ipa);

    raw100Words.push({
      id,
      word: cleanWord,
      pos: w.pos || 'n.',
      chinese: d.chinese,
      syllable: syllables,
      ipa: d.ipa,
      level: 2,
      levelName: '第二級',
      derivations
    });
  });

  console.log(`Generated ${raw100Words.length} raw words for Batch 11.`);

  // Write lib/seniorBatch11Raw.ts
  const rawTsContent = `// EPRS Dataset Version: v1.6.0-rc1 (Batch 11 Candidate) | Generated: 2026-09-08
export interface SeniorWordRecord {
  id: number;
  word: string;
  pos: string;
  chinese: string;
  syllable: string[];
  ipa: string;
  level?: number;
  levelName?: string;
  derivations: {
    syllable: string;
    rule: string;
    status: string;
    reason: string;
  }[];
}

export const seniorBatch11Raw: SeniorWordRecord[] = ${JSON.stringify(raw100Words, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch11Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] lib/seniorBatch11Raw.ts written.');

  // Process through processSeniorWord
  const processedWords = raw100Words.map(w => processSeniorWord(w, 11, w.level, w.levelName));

  // Write lib/seniorBatch11Data.ts
  const dataTsContent = `// EPRS Dataset Version: v1.6.0-rc1 (Batch 11 Candidate) | Generated: 2026-09-08
// Auto-generated EPRS Senior High Level 1-2 Batch 11 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch11Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch11Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] lib/seniorBatch11Data.ts written with 100 words.');
}

buildBatch11().catch(err => {
  console.error(err);
  process.exit(1);
});
