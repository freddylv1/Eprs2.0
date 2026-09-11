import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';
import { processSeniorWord } from './rebuild_senior_batch01_data';
import { DerivationItem } from '../lib/batch01Data';
import { SeniorBatchWord } from '../lib/seniorBatch01Data';

export async function buildBatch12() {
  console.log('--- Starting Senior Batch 12 Build (Words 1101 ~ 1200) ---');

  // Parse Level 2 words from PDF
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

  // Batch 12 covers Level 2 words from index 98 to 198 (100 words, IDs 1101 to 1200)
  const l2Words100 = l2RawList.slice(98, 198);

  // Accurate dictionary for Senior Batch 12 (Words 1101 ~ 1200)
  const wordDict: Record<string, { chinese: string; syllable: string[]; ipa: string; customDerivations?: DerivationItem[] }> = {
    "blood": { 
      chinese: "血液, 血統", 
      syllable: ["blood"], 
      ipa: "/blʌd/",
      customDerivations: [
        { syllable: "第 1 音節［blood］", rule: "母音組合例外 (R004/R010)", status: "【例外】", reason: "歷史母音推移殘留：oo 不發長音 /uː/，特例發短母音 /ʌ/" }
      ]
    },
    "board": { chinese: "木板, 董事會; 登機/船", syllable: ["board"], ipa: "/bɔːrd/" },
    "boil": { chinese: "煮沸, 沸騰; 沸點", syllable: ["boil"], ipa: "/bɔɪl/" },
    "bone": { chinese: "骨頭, 骨骼", syllable: ["bone"], ipa: "/boʊn/" },
    "bookstore": { chinese: "書店", syllable: ["book", "store"], ipa: "/ˈbʊk.stɔːr/" },
    "border": { chinese: "邊界, 邊緣; 毗鄰", syllable: ["bor", "der"], ipa: "/ˈbɔːr.dɚ/" },
    "bother": { chinese: "打擾, 煩惱; 麻煩", syllable: ["both", "er"], ipa: "/ˈbɑː.ðɚ/" },
    "brain": { chinese: "大腦, 智力", syllable: ["brain"], ipa: "/breɪn/" },
    "branch": { chinese: "樹枝, 分支, 分行", syllable: ["branch"], ipa: "/bræntʃ/" },
    "brand": { chinese: "品牌, 商標; 銘刻", syllable: ["brand"], ipa: "/brænd/" },
    "brief": { chinese: "簡短的; 概要, 簡報", syllable: ["brief"], ipa: "/briːf/" },
    "brilliant": { chinese: "燦爛的, 傑出的", syllable: ["bril", "liant"], ipa: "/ˈbrɪl.jənt/" },
    "broad": { 
      chinese: "寬廣的, 廣泛的", 
      syllable: ["broad"], 
      ipa: "/brɔːd/",
      customDerivations: [
        { syllable: "第 1 音節［broad］", rule: "母音組合例外 (R004/R010)", status: "【例外】", reason: "古英語歷史音變：oa 不發 /oʊ/，特例發開口長音 /ɔː/" }
      ]
    },
    "brush": { chinese: "刷子, 畫筆; 刷拭", syllable: ["brush"], ipa: "/brʌʃ/" },
    "building": { chinese: "建築物, 大樓", syllable: ["build", "ing"], ipa: "/ˈbɪl.dɪŋ/" },
    "bun": { chinese: "小圓麵包, 髮髻", syllable: ["bun"], ipa: "/bʌn/" },
    "burden": { chinese: "負擔, 重責; 加負擔於", syllable: ["bur", "den"], ipa: "/ˈbɝː.dən/" },
    "burn": { chinese: "燃燒, 燒傷", syllable: ["burn"], ipa: "/bɝːn/" },
    "burst": { chinese: "爆裂, 突發; 爆發", syllable: ["burst"], ipa: "/bɝːst/" },
    "businessman": { chinese: "商人, 企業家", syllable: ["busi", "ness", "man"], ipa: "/ˈbɪz.nɪs.mæn/" },
    "cabbage": { chinese: "高麗菜, 甘藍菜", syllable: ["cab", "bage"], ipa: "/ˈkæb.ɪdʒ/" },
    "café/cafe": { 
      chinese: "咖啡館, 輕食店", 
      syllable: ["ca", "fe"], 
      ipa: "/kæfˈeɪ/",
      customDerivations: [
        { syllable: "第 1 音節［ca］", rule: "閉音節 (R001)", status: "【適用】", reason: "法語借詞首音節發 /kæf/" },
        { syllable: "第 2 音節［fe］", rule: "外來借詞 (R010)", status: "【適用】", reason: "法語借詞結尾 é 重讀發長雙母音 /eɪ/" }
      ]
    },
    "cage": { chinese: "籠子, 鳥籠; 關入籠中", syllable: ["cage"], ipa: "/keɪdʒ/" },
    "calendar": { chinese: "日曆, 行事曆", syllable: ["cal", "en", "dar"], ipa: "/ˈkæl.ən.dɚ/" },
    "calm": { 
      chinese: "平靜的, 鎮靜的; 使平靜", 
      syllable: ["calm"], 
      ipa: "/kɑːm/",
      customDerivations: [
        { syllable: "第 1 音節［calm］", rule: "靜符子音規則 (R009)", status: "【適用】", reason: "字母組合 -alm 中 l 靜音不發音，a 發開口音 /ɑː/" }
      ]
    },
    "camel": { chinese: "駱駝", syllable: ["cam", "el"], ipa: "/ˈkæm.əl/" },
    "cancel": { chinese: "取消, 廢除", syllable: ["can", "cel"], ipa: "/ˈkæn.səl/" },
    "cancer": { chinese: "癌症, 巨蟹座", syllable: ["can", "cer"], ipa: "/ˈkæn.sɚ/" },
    "candle": { chinese: "蠟燭", syllable: ["can", "dle"], ipa: "/ˈkæn.dəl/" },
    "capital": { chinese: "首都, 資金; 主要的, 大寫的", syllable: ["cap", "i", "tal"], ipa: "/ˈkæp.ə.t̬əl/" },
    "cartoon": { chinese: "卡通, 動畫片; 畫漫畫", syllable: ["car", "toon"], ipa: "/kɑːrˈtuːn/" },
    "cash": { chinese: "現金; 兌現", syllable: ["cash"], ipa: "/kæʃ/" },
    "castle": { 
      chinese: "城堡", 
      syllable: ["cas", "tle"], 
      ipa: "/ˈkæs.əl/",
      customDerivations: [
        { syllable: "第 1 音節［cas］", rule: "閉音節 (R001)", status: "【適用】", reason: "重讀閉音節 a 發短母音 /æ/" },
        { syllable: "第 2 音節［tle］", rule: "靜符子音與成音節 (R009/R013)", status: "【適用】", reason: "歷史簡化：t 靜音不發音，-le 構成成音節 /əl/" }
      ]
    },
    "cause": { chinese: "原因, 起因; 導致", syllable: ["cause"], ipa: "/kɔːz/" },
    "ceiling": { chinese: "天花板, 最高限度", syllable: ["ceil", "ing"], ipa: "/ˈsiː.lɪŋ/" },
    "cell": { chinese: "細胞, 單人牢房, 電池", syllable: ["cell"], ipa: "/sel/" },
    "centimeter": { chinese: "公分, 厘米", syllable: ["cen", "ti", "me", "ter"], ipa: "/ˈsen.t̬əˌmiː.t̬ɚ/" },
    "central": { chinese: "中央的, 中心的", syllable: ["cen", "tral"], ipa: "/ˈsen.trəl/" },
    "century": { chinese: "世紀, 一百年", syllable: ["cen", "tu", "ry"], ipa: "/ˈsen.tʃər.i/" },
    "cereal": { chinese: "穀物, 麥片", syllable: ["ce", "re", "al"], ipa: "/ˈsɪr.i.əl/" },
    "chain": { chinese: "鏈條, 連鎖店; 拴住", syllable: ["chain"], ipa: "/tʃeɪn/" },
    "chalk": { 
      chinese: "粉筆", 
      syllable: ["chalk"], 
      ipa: "/tʃɔːk/",
      customDerivations: [
        { syllable: "第 1 音節［chalk］", rule: "靜符子音與複合子音 (R009/R006)", status: "【適用】", reason: "ch 發 /tʃ/，-alk 組合中 l 靜音，a 發圓唇長音 /ɔː/" }
      ]
    },
    "challenge": { chinese: "挑戰; 向...挑戰", syllable: ["chal", "lenge"], ipa: "/ˈtʃæl.ɪndʒ/" },
    "channel": { chinese: "頻道, 海峽, 途徑", syllable: ["chan", "nel"], ipa: "/ˈtʃæn.əl/" },
    "chapter": { chinese: "章節, 回", syllable: ["chap", "ter"], ipa: "/ˈtʃæp.tɚ/" },
    "character": { 
      chinese: "性格, 特色, 角色, 漢字", 
      syllable: ["char", "ac", "ter"], 
      ipa: "/ˈkær.ək.tɚ/",
      customDerivations: [
        { syllable: "第 1 音節［char］", rule: "複合子音借詞例外 (R006/R010)", status: "【適用】", reason: "希臘借詞：ch 發硬音 /k/，母音發 /ær/" },
        { syllable: "第 2 音節［ac］", rule: "非重音母音弱化 (R008)", status: "【適用】", reason: "非重讀音節母音弱化發 /ək/" },
        { syllable: "第 3 音節［ter］", rule: "R 控制母音弱化 (R005/R008)", status: "【適用】", reason: "非重讀後綴 er 弱化發輕捲舌音 /tɚ/" }
      ]
    },
    "charge": { chinese: "收費, 控告, 充電; 費用", syllable: ["charge"], ipa: "/tʃɑːrdʒ/" },
    "chart": { chinese: "圖表, 航海圖; 繪製圖表", syllable: ["chart"], ipa: "/tʃɑːrt/" },
    "chase": { chinese: "追逐, 追求; 追趕", syllable: ["chase"], ipa: "/tʃeɪs/" },
    "cheat": { chinese: "欺騙, 作弊; 騙子", syllable: ["cheat"], ipa: "/tʃiːt/" },
    "cheer": { chinese: "歡呼, 激勵; 乾杯", syllable: ["cheer"], ipa: "/tʃɪr/" },
    "chemical": { chinese: "化學的; 化學製品", syllable: ["chem", "i", "cal"], ipa: "/ˈkem.ɪ.kəl/" },
    "chess": { chinese: "西洋棋, 國際象棋", syllable: ["chess"], ipa: "/tʃes/" },
    "chief": { chinese: "首領, 長官; 主要的, 首席的", syllable: ["chief"], ipa: "/tʃiːf/" },
    "childhood": { chinese: "童年時期", syllable: ["child", "hood"], ipa: "/ˈtʃaɪld.hʊd/" },
    "childish": { chinese: "幼稚的, 孩子氣的", syllable: ["child", "ish"], ipa: "/ˈtʃaɪl.dɪʃ/" },
    "china": { chinese: "瓷器 (小寫); 中國 (大寫)", syllable: ["chi", "na"], ipa: "/ˈtʃaɪ.nə/" },
    "chopstick(s)": { chinese: "筷子", syllable: ["chop", "stick"], ipa: "/ˈtʃɑːp.stɪk/" },
    "claim": { chinese: "聲稱, 主張, 索賠", syllable: ["claim"], ipa: "/kleɪm/" },
    "clap": { chinese: "拍手, 鼓掌; 掌聲", syllable: ["clap"], ipa: "/klæp/" },
    "classic": { chinese: "經典的, 典範的; 名著", syllable: ["clas", "sic"], ipa: "/ˈklæs.ɪk/" },
    "classical": { chinese: "古典的, 傳統的", syllable: ["clas", "si", "cal"], ipa: "/ˈklæs.ə.kəl/" },
    "classmate": { chinese: "同班同學", syllable: ["class", "mate"], ipa: "/ˈklæs.meɪt/" },
    "clever": { chinese: "聰明的, 機敏的", syllable: ["clev", "er"], ipa: "/ˈklev.ɚ/" },
    "click": { chinese: "點擊, 發出喀噠聲; 點擊聲", syllable: ["click"], ipa: "/klɪk/" },
    "climate": { chinese: "氣候, 風氣", syllable: ["cli", "mate"], ipa: "/ˈklaɪ.mət/" },
    "cloth": { chinese: "布料, 抹布", syllable: ["cloth"], ipa: "/klɔːθ/" },
    "clothing": { chinese: "衣服, 服裝 (總稱)", syllable: ["cloth", "ing"], ipa: "/ˈkloʊ.ðɪŋ/" },
    "cloudy": { chinese: "多雲的, 陰天的", syllable: ["cloud", "y"], ipa: "/ˈklaʊ.di/" },
    "coal": { chinese: "煤炭, 煤塊", syllable: ["coal"], ipa: "/koʊl/" },
    "coast": { chinese: "海岸, 沿海地區", syllable: ["coast"], ipa: "/koʊst/" },
    "cockroach/roach": { chinese: "蟑螂", syllable: ["cock", "roach"], ipa: "/ˈkɑːk.roʊtʃ/" },
    "cocoa": { 
      chinese: "可可粉, 熱可可飲料", 
      syllable: ["co", "coa"], 
      ipa: "/ˈkoʊ.koʊ/",
      customDerivations: [
        { syllable: "第 1 音節［co］", rule: "開音節 (R002)", status: "【適用】", reason: "重讀開音節 o 發長雙母音 /oʊ/" },
        { syllable: "第 2 音節［coa］", rule: "母音組合例外 (R004/R010)", status: "【例外】", reason: "外來語音變：字尾 oa 簡化發 /koʊ/" }
      ]
    },
    "coin": { chinese: "硬幣, 錢幣; 創造 (新詞)", syllable: ["coin"], ipa: "/kɔɪn/" },
    "cola/Coke": { chinese: "可樂飲料", syllable: ["co", "la"], ipa: "/ˈkoʊ.lə/" },
    "college": { chinese: "大學, 學院", syllable: ["col", "lege"], ipa: "/ˈkɑː.lɪdʒ/" },
    "comb": { 
      chinese: "梳子; 梳理", 
      syllable: ["comb"], 
      ipa: "/koʊm/",
      customDerivations: [
        { syllable: "第 1 音節［comb］", rule: "靜符子音規則 (R009)", status: "【適用】", reason: "字尾 -mb 組合中 b 保持靜音，o 發字母長音 /oʊ/" }
      ]
    },
    "combine": { chinese: "結合, 聯合; 收割機", syllable: ["com", "bine"], ipa: "/kəmˈbaɪn/" },
    "comic(s)": { chinese: "滑稽的; 連環漫畫", syllable: ["com", "ic"], ipa: "/ˈkɑː.mɪk/" },
    "command": { chinese: "命令, 指揮, 掌控", syllable: ["com", "mand"], ipa: "/kəˈmænd/" },
    "commercial": { chinese: "商業的, 營利的; 電視廣告", syllable: ["com", "mer", "cial"], ipa: "/kəˈmɝː.ʃəl/" },
    "company": { 
      chinese: "公司, 陪伴, 伴侶", 
      syllable: ["com", "pa", "ny"], 
      ipa: "/ˈkʌm.pə.ni/",
      customDerivations: [
        { syllable: "第 1 音節［com］", rule: "例外音標字 (R010)", status: "【例外】", reason: "歷史音變：重讀 o 不發 /ɑː/，特例發央短音 /ʌ/" },
        { syllable: "第 2 音節［pa］", rule: "非重音母音弱化 (R008)", status: "【適用】", reason: "非重讀開音節弱化發輕母音 /pə/" },
        { syllable: "第 3 音節［ny］", rule: "開音節字尾 (R002)", status: "【適用】", reason: "非重讀字尾 y 發 /ni/" }
      ]
    },
    "compare": { chinese: "比較, 對比, 比擬", syllable: ["com", "pare"], ipa: "/kəmˈper/" },
    "complete": { chinese: "完整的, 完成的; 完成", syllable: ["com", "plete"], ipa: "/kəmˈpliːt/" },
    "complex": { chinese: "複雜的; 綜合體, 情結", syllable: ["com", "plex"], ipa: "/ˈkɑːm.pleks/" },
    "concern": { chinese: "關心, 關切; 涉及, 使擔憂", syllable: ["con", "cern"], ipa: "/kənˈsɝːn/" },
    "conclude": { chinese: "締結, 斷定, 下結論", syllable: ["con", "clude"], ipa: "/kənˈkluːd/" },
    "condition": { chinese: "條件, 狀況, 疾病; 調理", syllable: ["con", "di", "tion"], ipa: "/kənˈdɪʃ.ən/" },
    "confident": { chinese: "有信心的, 自信的", syllable: ["con", "fi", "dent"], ipa: "/ˈkɑːn.fə.dənt/" },
    "conflict": { chinese: "衝突, 矛盾; 爭執", syllable: ["con", "flict"], ipa: "/ˈkɑːn.flɪkt/" },
    "congratulation(s)": { chinese: "祝賀, 恭喜", syllable: ["con", "grat", "u", "la", "tion"], ipa: "/kənˌɡrætʃ.əˈleɪ.ʃən/" },
    "connection": { chinese: "連接, 關係, 人脈", syllable: ["con", "nec", "tion"], ipa: "/kəˈnek.ʃən/" },
    "consider": { chinese: "考慮, 認為, 體諒", syllable: ["con", "sid", "er"], ipa: "/kənˈsɪd.ɚ/" },
    "consideration": { chinese: "考慮, 體貼, 報酬", syllable: ["con", "sid", "er", "a", "tion"], ipa: "/kənˌsɪd.əˈreɪ.ʃən/" },
    "contact": { chinese: "接觸, 聯繫; 聯絡", syllable: ["con", "tact"], ipa: "/ˈkɑːn.tækt/" },
    "contain": { chinese: "包含, 容納, 控制", syllable: ["con", "tain"], ipa: "/kənˈteɪn/" },
    "continue": { chinese: "繼續, 持續, 延伸", syllable: ["con", "tin", "ue"], ipa: "/kənˈtɪn.juː/" },
    "contract": { chinese: "合約, 契約; 訂契約, 收縮", syllable: ["con", "tract"], ipa: "/ˈkɑːn.trækt/" },
    "control": { chinese: "控制, 支配; 控制權", syllable: ["con", "trol"], ipa: "/kənˈtroʊl/" },
    "conversation": { chinese: "對話, 交談", syllable: ["con", "ver", "sa", "tion"], ipa: "/ˌkɑːn.vɚˈseɪ.ʃən/" }
  };

  function deriveWordDerivations(cleanWord: string, syllables: string[], ipa: string, custom?: DerivationItem[]): DerivationItem[] {
    if (custom && custom.length > 0) {
      return custom;
    }

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

      // 1. Unstressed Prefixes (R012)
      // Standard unstressed prefixes: con-, com-, ac-, ad-, af-, al-, ap-, as-, at-, be-, de-, re-, ex-
      const unstressedPrefixes = ['con', 'com', 'ac', 'ad', 'af', 'al', 'ap', 'as', 'at', 'a', 'an', 'be', 'de', 're', 'ex', 'in', 'im', 'pro', 'sub', 'dis', 'un'];
      if (sIdx === 0 && !isStressed && syllables.length > 1 && (unstressedPrefixes.includes(sylL) || cleanIpa.startsWith('kən') || cleanIpa.startsWith('kəm') || cleanIpa.startsWith('kə') || cleanIpa.startsWith('ə') || cleanIpa.startsWith('ɪ') || cleanIpa.startsWith('bɪ') || cleanIpa.startsWith('dɪ') || cleanIpa.startsWith('rɪ'))) {
        rule = '非重讀前綴弱化 (R012)';
        status = '【適用】';
        if (sylL === 'con' || sylL === 'com') {
          reason = `非重讀前綴［${syl}］母音弱化發 /kən/ 或 /kəm/（嚴禁判定為 R001 閉音節短母音）`;
        } else if (['ac', 'ad', 'af', 'al', 'ap', 'as', 'at'].includes(sylL)) {
          reason = `非重讀同化前綴［${syl}］母音弱化發 /ə/（雙子音簡化發單音，不適用閉音節短母音 /æ/）`;
        } else {
          reason = `非重讀前綴［${syl}］母音弱化發輕母音 /ə/ 或 /ɪ/`;
        }
      }
      // 2. Consonant + le Syllables (R013)
      else if (sylL.endsWith('ble') || sylL.endsWith('tle') || sylL.endsWith('ple') || sylL.endsWith('dle') || sylL.endsWith('gle') || sylL.endsWith('kle') || sylL.endsWith('fle') || sylL.endsWith('cle')) {
        rule = '子音+le 音節規則 (R013)';
        status = '【適用】';
        reason = '成音節字尾 ［C+le］ 自帶成音節輔音發 /əl/';
      }
      // 3. Morphology & Suffixes (R011)
      else if (!isStressed && sIdx === syllables.length - 1 && ['tion', 'sion', 'cial', 'tial', 'ture', 'ment', 'ful', 'ance', 'ence', 'ous', 'less', 'ness', 'ing', 'ish', 'hood'].includes(sylL)) {
        rule = '字首字尾與詞構規則 (R011)';
        status = '【適用】';
        reason = `非重讀固定後綴［${syl}］弱化發音`;
      }
      // 4. Silent Consonants (R009)
      else if (sylL.endsWith('mb') || sylL.includes('alk') || sylL.includes('alm') || sylL.startsWith('kn') || sylL.startsWith('wr')) {
        rule = '靜符子音規則 (R009)';
        status = '【適用】';
        reason = '歷史輔音群簡化後特定字母不發音';
      }
      // 5. R-Controlled Vowel (R005)
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
      // 6. Magic E (R003)
      else if (sylL.endsWith('e') && sylL.length > 2 && !sylL.endsWith('ee') && !sylL.endsWith('le')) {
        rule = '魔術 E 規則 (R003)';
        status = '【適用】';
        reason = '字尾不發音 e 使主要母音發長母音';
      }
      // 7. Vowel Teams (R004)
      else if (/ee|ea|ai|ay|oo|ou|ow|oi|oy|au|aw|ie|ei|ew|ey|oa|ui/i.test(sylL)) {
        rule = '母音字母組合 (R004)';
        status = '【適用】';
        reason = '相連母音字母組合發固定長母音或雙母音';
      }
      // 8. Open Syllable (R002)
      else if (/^[b-df-hj-np-tv-z]*[aeiouy]$/i.test(sylL)) {
        rule = '開音節長母音 (R002)';
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
        rule = '閉音節短母音 (R001)';
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

  // Build raw 100 words array for Batch 12
  const raw100Words: any[] = [];

  l2Words100.forEach((w, index) => {
    const id = 1101 + index;
    const cleanWord = w.word.trim();
    const lookupKey = cleanWord.toLowerCase();
    const d = wordDict[lookupKey] || wordDict[cleanWord.split('/')[0].toLowerCase()] || {
      chinese: '高中核心詞彙',
      syllable: [cleanWord],
      ipa: `/${cleanWord}/`
    };

    const syllables = d.syllable || [cleanWord];
    const derivations = deriveWordDerivations(cleanWord, syllables, d.ipa, d.customDerivations);

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

  console.log(`Generated ${raw100Words.length} raw words for Senior Batch 12.`);

  // Write lib/seniorBatch12Raw.ts
  const rawTsContent = `// EPRS Dataset Version: v1.6.0-rc2 (Batch 12 Candidate) | Generated: 2026-09-08
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

export const seniorBatch12Raw: SeniorWordRecord[] = ${JSON.stringify(raw100Words, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch12Raw.ts'), rawTsContent, 'utf8');
  console.log('[PASS] lib/seniorBatch12Raw.ts written.');

  // Process through processSeniorWord
  const processedWords = raw100Words.map(w => processSeniorWord(w, 12, w.level, w.levelName));

  // Write lib/seniorBatch12Data.ts
  const dataTsContent = `// EPRS Dataset Version: v1.6.0-rc2 (Batch 12 Candidate) | Generated: 2026-09-08
// Auto-generated EPRS Senior High Level 2 Batch 12 Dataset
// Strictly matching MOE 1200 BatchWord schema and Phonics Reasoning Engine
import { BatchWord } from './batch01Data';
import { SeniorBatchWord } from './seniorBatch01Data';

export const seniorBatch12Words: SeniorBatchWord[] = ${JSON.stringify(processedWords, null, 2)};
`;
  fs.writeFileSync(path.join(process.cwd(), 'lib', 'seniorBatch12Data.ts'), dataTsContent, 'utf8');
  console.log('[PASS] lib/seniorBatch12Data.ts written with 100 words.');
}

if (process.argv[1] && process.argv[1].includes('build_senior_batch12_all')) {
  buildBatch12().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
