import fs from 'fs';
import path from 'path';
import { seniorBatch01Words } from '../lib/seniorBatch01Data';
import { seniorBatch02Words } from '../lib/seniorBatch02Data';
import { seniorBatch03Words } from '../lib/seniorBatch03Data';
import { seniorBatch04Words } from '../lib/seniorBatch04Data';
import { seniorBatch05Words } from '../lib/seniorBatch05Data';
import { seniorBatch06Words } from '../lib/seniorBatch06Data';
import { seniorBatch07Words } from '../lib/seniorBatch07Data';
import { seniorBatch08Words } from '../lib/seniorBatch08Data';
import { seniorBatch09Words } from '../lib/seniorBatch09Data';
import { seniorBatch10Words } from '../lib/seniorBatch10Data';
import { seniorBatch11Words } from '../lib/seniorBatch11Data';
import { seniorBatch12Words } from '../lib/seniorBatch12Data';
import { allBatchData } from '../lib/batch01Data';
import { EPRS_PHONICS_RULES } from '../lib/phonicsRules';
import { EPRS_VERSION_CONFIG } from '../lib/versionConfig';

const { ENGINE_VERSION, DATA_SPEC_VERSION, UI_SPEC_VERSION } = EPRS_VERSION_CONFIG;

const publicDir = path.resolve(process.cwd(), 'public');
const cssDir = path.resolve(publicDir, 'css');
const jsDir = path.resolve(publicDir, 'js');
const dataDir = path.resolve(publicDir, 'data');
const reportsDir = path.resolve(publicDir, 'reports');

[publicDir, cssDir, jsDir, dataDir, reportsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Senior Batches catalog
const seniorBatches = [
  { batchNum: 1, level: '第一級', range: '0001~0100', title: '高中第一級 Batch 01 (0001~0100)', words: seniorBatch01Words, version: 'v1.5.01' },
  { batchNum: 2, level: '第一級', range: '0101~0200', title: '高中第一級 Batch 02 (0101~0200)', words: seniorBatch02Words, version: 'v1.5.02' },
  { batchNum: 3, level: '第一級', range: '0201~0300', title: '高中第一級 Batch 03 (0201~0300)', words: seniorBatch03Words, version: 'v1.5.03' },
  { batchNum: 4, level: '第一級', range: '0301~0400', title: '高中第一級 Batch 04 (0301~0400)', words: seniorBatch04Words, version: 'v1.5.04' },
  { batchNum: 5, level: '第一級', range: '0401~0500', title: '高中第一級 Batch 05 (0401~0500)', words: seniorBatch05Words, version: 'v1.5.05' },
  { batchNum: 6, level: '第一級', range: '0501~0600', title: '高中第一級 Batch 06 (0501~0600)', words: seniorBatch06Words, version: 'v1.5.06' },
  { batchNum: 7, level: '第一級', range: '0601~0700', title: '高中第一級 Batch 07 (0601~0700)', words: seniorBatch07Words, version: 'v1.5.07' },
  { batchNum: 8, level: '第一級', range: '0701~0800', title: '高中第一級 Batch 08 (0701~0800)', words: seniorBatch08Words, version: 'v1.5.08' },
  { batchNum: 9, level: '第一級', range: '0801~0900', title: '高中第一級 Batch 09 (0801~0900)', words: seniorBatch09Words, version: 'v1.5.09' },
  { batchNum: 10, level: '第一級', range: '0901~1000', title: '高中第一級 Batch 10 (0901~1000)', words: seniorBatch10Words, version: 'v1.5.10' },
  { batchNum: 11, level: '第一級', range: '1001~1095', title: '高中第一級 Batch 11 (1001~1095)', words: seniorBatch11Words, version: 'v1.6.0-rc1' },
  { batchNum: 12, level: '第二級', range: '1096~1195', title: '高中第二級 Batch 12 (1096~1195)', words: seniorBatch12Words, version: 'v1.6.0-rc2' },
];

// Split MOE 1200 batches
const moeBatches = Array.from({ length: 12 }, (_, i) => {
  const batchNum = i + 1;
  const words = allBatchData.filter(w => w.batch === batchNum);
  const startId = (batchNum - 1) * 100 + 1;
  const endId = Math.min(batchNum * 100, 1200);
  return {
    batchNum,
    range: `${String(startId).padStart(4, '0')}~${String(endId).padStart(4, '0')}`,
    title: `國中常用 1200 字 Batch ${String(batchNum).padStart(2, '0')}`,
    words,
    version: 'v1.5.0'
  };
});

// 1. Generate Shared CSS (public/css/app.css)
const sharedCss = `
:root {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --primary-light: #eff6ff;
  --emerald: #059669;
  --emerald-light: #ecfdf5;
  --amber: #d97706;
  --amber-light: #fffbeb;
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1e293b;
  --slate-900: #0f172a;
  --slate-950: #020617;
  --border: #e2e8f0;
  --card-bg: #ffffff;
  --bg: #f8fafc;
  --font-scale: 1;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: var(--bg);
  color: var(--slate-800);
  line-height: 1.5;
  padding: 16px;
  font-size: calc(14px * var(--font-scale));
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

/* Nav & Header */
.app-header {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.header-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--primary-hover); }
.btn-emerald { background: var(--emerald); color: #fff; }
.btn-emerald:hover { background: #047857; }
.btn-secondary { background: #fff; border-color: var(--slate-300); color: var(--slate-700); }
.btn-secondary:hover { background: var(--slate-100); }
.btn-amber { background: var(--amber); color: #fff; }
.btn-amber:hover { background: #b45309; }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}
.badge-blue { background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe; }
.badge-emerald { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
.badge-amber { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
.badge-slate { background: var(--slate-100); color: var(--slate-600); border: 1px solid var(--slate-200); }

/* Grid / Cards */
.grid {
  display: grid;
  gap: 16px;
}
.grid-2 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
.grid-6 { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }

.card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.card:hover {
  border-color: var(--primary);
  transform: translateY(-1px);
}

/* Data Table */
.table-container {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow-x: auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;
}

th {
  background: var(--slate-100);
  color: var(--slate-700);
  font-weight: 700;
  padding: 10px 12px;
  border-bottom: 2px solid var(--border);
  white-space: nowrap;
}

td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

tr:hover td {
  background: var(--slate-50);
}

/* Audio button */
.btn-audio {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-audio:hover {
  background: #2563eb;
  color: #fff;
}
.btn-audio.loading {
  opacity: 0.6;
  cursor: wait;
}

/* Modals */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}
.modal-backdrop.open {
  display: flex;
}
.modal-box {
  background: #fff;
  border-radius: 16px;
  max-width: 680px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  position: relative;
}

/* Print Optimization */
@media print {
  body {
    background: #fff !important;
    padding: 0 !important;
    font-size: 9pt !important;
  }
  .no-print, header, .nav-links, .btn, .search-box {
    display: none !important;
  }
  .app-header {
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }
  .table-container {
    border: none !important;
    box-shadow: none !important;
  }
  table {
    page-break-inside: auto;
    font-size: 8.5pt !important;
  }
  tr {
    page-break-inside: avoid;
    page-break-after: auto;
  }
  th, td {
    padding: 4px 6px !important;
  }
}
`;
fs.writeFileSync(path.resolve(cssDir, 'app.css'), sharedCss.trim());

// 2. Generate Audio Manager (public/js/audio.js)
const audioJs = `
// EPRS Modular Audio Engine (Dual-Engine: HTML5 Audio + Web Speech API fallback)
window.EPRS_AUDIO = (function() {
  let isLocked = false;
  let activeAudio = null;
  let cachedVoices = [];

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      const loadVoices = () => {
        const v = window.speechSynthesis.getVoices();
        if (v && v.length > 0) cachedVoices = v;
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    } catch {}
  }

  function play(word, buttonElement) {
    if (isLocked) return;
    const cleanWord = (word || '').replace(/\\(.*?\\)/g, '').replace(/\\s+(?:n|v|adj|adv|prep|conj|pron|aux|int)\\..*$/i, '').replace(/[^a-zA-Z\\s'-]/g, '').trim();
    if (!cleanWord) return;

    isLocked = true;
    if (buttonElement) {
      buttonElement.classList.add('loading');
      buttonElement.innerText = '🔊';
      buttonElement.style.opacity = '0.7';
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch {}
    }

    const unlock = () => {
      setTimeout(() => {
        isLocked = false;
        if (buttonElement) {
          buttonElement.classList.remove('loading');
          buttonElement.innerText = '🔊';
          buttonElement.style.opacity = '1';
        }
      }, 200);
    };

    // 1. Try Online Standard Human Stream (Youdao Audio API) with fast failover
    try {
      if (activeAudio) {
        activeAudio.pause();
        activeAudio = null;
      }
      const audioUrl = 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(cleanWord.toLowerCase()) + '&type=2';
      const audio = new Audio(audioUrl);
      activeAudio = audio;

      let hasPlayed = false;
      let isDone = false;

      const handleFinish = (success) => {
        if (isDone) return;
        isDone = true;
        if (success) {
          unlock();
        } else {
          fallbackSpeechSynthesis(cleanWord, unlock);
        }
      };

      audio.onplay = () => { hasPlayed = true; };
      audio.onended = () => handleFinish(true);
      audio.onerror = () => handleFinish(false);

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => handleFinish(false));
      }

      // Fast failover timeout (1.2s)
      setTimeout(() => {
        if (!hasPlayed && !isDone) {
          handleFinish(false);
        }
      }, 1200);
    } catch (e) {
      fallbackSpeechSynthesis(cleanWord, unlock);
    }

    // Lock reset failsafe
    setTimeout(() => {
      if (isLocked) unlock();
    }, 3000);
  }

  function fallbackSpeechSynthesis(text, onComplete) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.rate = 0.85;
        utter.pitch = 1.0;
        utter.volume = 1.0;

        window.__eprs_active_utter = utter;

        const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
        const usVoice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') && !v.name.includes('Bad')) ||
                        voices.find(v => v.lang.startsWith('en'));
        if (usVoice) utter.voice = usVoice;

        utter.onend = () => {
          window.__eprs_active_utter = null;
          onComplete();
        };
        utter.onerror = () => {
          window.__eprs_active_utter = null;
          onComplete();
        };
        window.speechSynthesis.speak(utter);
      } catch (e) {
        onComplete();
      }
    } else {
      onComplete();
    }
  }

  return { play };
})();
`;
fs.writeFileSync(path.resolve(jsDir, 'audio.js'), audioJs.trim());

// 3. Generate Rules Knowledge Base Data (public/js/rules-data.js)
const rulesJs = `
window.EPRS_RULES = ${JSON.stringify(Object.values(EPRS_PHONICS_RULES).map(r => ({
  id: r.id,
  name: r.name,
  englishName: r.englishName,
  formula: r.formula,
  description: r.description,
  summary: r.summary,
  examples: r.examples.map(e => ({ word: e.word, ipa: e.ipa }))
})), null, 2)};
`;
fs.writeFileSync(path.resolve(jsDir, 'rules-data.js'), rulesJs.trim());

// 4. Generate Common UI & Table JS (public/js/common.js) - Preserve existing full common.js
if (!fs.existsSync(path.resolve(jsDir, 'common.js'))) {
  const commonJs = `
// EPRS Common UI Utilities
window.EPRS_COMMON = (function() {
  function initFontScale() {
    const scaleSelect = document.getElementById('fontScaleSelect') || document.getElementById('font-scale-select');
    if (!scaleSelect) return;
    const saved = localStorage.getItem('eprs_font_scale') || '1';
    scaleSelect.value = saved;
    document.documentElement.style.setProperty('--font-scale', saved);

    scaleSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      document.documentElement.style.setProperty('--font-scale', val);
      try { localStorage.setItem('eprs_font_scale', val); } catch (e) {}
    });
  }

  function openRuleModal(ruleId) {
    const modal = document.getElementById('ruleModal');
    const titleEl = document.getElementById('ruleModalTitle');
    const descEl = document.getElementById('ruleModalDesc');
    const formulaEl = document.getElementById('ruleModalFormula');
    const examplesEl = document.getElementById('ruleModalExamples');
    if (!modal) return;

    const rule = (window.EPRS_RULES || []).find(r => r.id === ruleId);
    if (!rule) return;

    if (titleEl) titleEl.innerHTML = '<span class="badge badge-amber">' + rule.id + '</span> ' + rule.name + (rule.englishName ? ' (' + rule.englishName + ')' : '');
    if (formulaEl) formulaEl.innerText = rule.formula || '無特定公式';
    if (descEl) descEl.innerText = rule.description || rule.summary || '';

    if (examplesEl && rule.examples) {
      examplesEl.innerHTML = rule.examples.map(ex => 
        '<span style="display:inline-block; background:#f1f5f9; padding:4px 8px; border-radius:6px; margin:2px; font-weight:600;">' + 
        ex.word + ' <span style="color:#059669; font-family:monospace;">' + ex.ipa + '</span></span>'
      ).join('');
    }

    modal.classList.add('open');
    modal.style.display = 'flex';
  }

  function closeRuleModal() {
    const modal = document.getElementById('ruleModal');
    if (modal) {
      modal.classList.remove('open');
      modal.style.display = 'none';
    }
  }

  function filterTable(searchTerm) {
    const term = (searchTerm || '').toLowerCase().trim();
    const rows = document.querySelectorAll('#wordTableBody tr');
    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      if (!term || text.includes(term)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  return { initFontScale, openRuleModal, closeRuleModal, filterTable };
})();

document.addEventListener('DOMContentLoaded', () => {
  window.EPRS_COMMON.initFontScale();
});
`;
  fs.writeFileSync(path.resolve(jsDir, 'common.js'), commonJs.trim());
}

// 5. Generate Individual Senior Batch Data files (public/data/senior-batch-XX.js)
seniorBatches.forEach(b => {
  const batchDataJs = `window.EPRS_CURRENT_BATCH = {
  batchNum: ${b.batchNum},
  level: "${b.level}",
  range: "${b.range}",
  title: "${b.title}",
  version: "${b.version}",
  words: ${JSON.stringify(b.words, null, 2)}
};`;
  fs.writeFileSync(path.resolve(dataDir, `senior-batch-${String(b.batchNum).padStart(2, '0')}.js`), batchDataJs);
});

// 6. Generate Individual MOE 1200 Batch Data files (public/data/moe-batch-XX.js)
moeBatches.forEach(b => {
  const batchDataJs = `window.EPRS_CURRENT_BATCH = {
  batchNum: ${b.batchNum},
  level: "國中1200",
  range: "${b.range}",
  title: "${b.title}",
  version: "${b.version}",
  words: ${JSON.stringify(b.words, null, 2)}
};`;
  fs.writeFileSync(path.resolve(dataDir, `moe-batch-${String(b.batchNum).padStart(2, '0')}.js`), batchDataJs);
});

// Helper: Generate HTML Shell for a Batch Report
function generateBatchReportHtml(type: 'senior' | 'moe', batchNum: number): string {
  const isSenior = type === 'senior';
  const prefix = isSenior ? 'senior' : 'moe';
  const formattedBatch = String(batchNum).padStart(2, '0');
  const prevLink = batchNum > 1 ? `${prefix}-${String(batchNum - 1).padStart(2, '0')}.html` : '#';
  const nextLink = batchNum < 12 ? `${prefix}-${String(batchNum + 1).padStart(2, '0')}.html` : '#';

  return `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EPRS ${isSenior ? '高中' : '國中1200'} Batch ${formattedBatch} 發音推導報表 (離線模組化版)</title>
  <link rel="stylesheet" href="../css/app.css">
  <script src="../js/audio.js"></script>
  <script src="../js/rules-data.js"></script>
  <script src="../js/common.js"></script>
  <script src="../data/${prefix}-batch-${formattedBatch}.js"></script>
</head>
<body>
  <div class="container">
    <header class="app-header">
      <div class="header-row">
        <div>
          <div class="nav-links" style="margin-bottom: 8px;">
            <a href="../offline.html" class="btn btn-secondary">⬅ 返回主入口</a>
            <a href="../rules.html" class="btn btn-secondary">📖 13 大發音規則表</a>
            <span class="badge ${isSenior ? 'badge-emerald' : 'badge-blue'}">${isSenior ? '高中英文第一級/第二級' : '國中 1200 常用字'}</span>
            <span class="badge badge-slate" id="batchVersionBadge">載入中...</span>
          </div>
          <h1 style="font-size: 20px; font-weight: 800;" id="batchTitleText">
            ${isSenior ? '高中' : '國中'} Batch ${formattedBatch} 自然發音規則推導報表
          </h1>
        </div>

        <div class="nav-links no-print">
          <select id="fontScaleSelect" class="btn btn-secondary" style="font-size: 12px; padding: 4px 8px;">
            <option value="1">字級 100%</option>
            <option value="1.15">字級 115%</option>
            <option value="1.3">字級 130%</option>
            <option value="1.5">字級 150%</option>
          </select>
          <button onclick="window.print()" class="btn btn-primary">🖨️ A4 橫向列印</button>
        </div>
      </div>

      <div class="header-row no-print" style="margin-top: 12px; border-top: 1px solid var(--border); padding-top: 12px;">
        <div style="display: flex; gap: 8px; align-items: center;">
          <input type="text" id="searchInput" placeholder="即時過濾單字 (如: student, apple)..." 
                 oninput="window.EPRS_COMMON.filterTable(this.value)" 
                 style="padding: 6px 12px; border: 1px solid var(--border); border-radius: 8px; width: 260px; font-size: 13px;">
          <button onclick="document.getElementById('searchInput').value=''; window.EPRS_COMMON.filterTable('')" class="btn btn-secondary" style="padding: 6px 8px;">清除</button>
        </div>

        <div class="nav-links">
          ${batchNum > 1 ? `<a href="${prevLink}" class="btn btn-secondary">◀ 上一批次 (B${String(batchNum - 1).padStart(2, '0')})</a>` : ''}
          ${batchNum < 12 ? `<a href="${nextLink}" class="btn btn-emerald">下一批次 (B${String(batchNum + 1).padStart(2, '0')}) ▶</a>` : ''}
        </div>
      </div>
    </header>

    <main class="table-container">
      <table>
        <thead>
          <tr>
            <th style="width: 50px; text-align: center;">序號</th>
            <th style="width: 140px;">單字 (Word)</th>
            <th style="width: 100px;">音標 (IPA)</th>
            <th style="width: 120px;">音節切分</th>
            <th style="width: 140px;">自然發音規則推導</th>
            <th>發音推導詳解與母音核心</th>
            <th style="width: 110px;">中文釋義</th>
          </tr>
        </thead>
        <tbody id="wordTableBody">
          <!-- Populated by client script -->
        </tbody>
      </table>
    </main>

    <footer style="margin-top: 24px; text-align: center; font-size: 12px; color: var(--slate-500);">
      EPRS 英文發音知識推導系統 · 100% 離線可用 · 零外部依賴
    </footer>
  </div>

  <!-- Rule Modal -->
  <div id="ruleModal" class="modal-backdrop" onclick="if(event.target===this) window.EPRS_COMMON.closeRuleModal()">
    <div class="modal-box">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <h3 id="ruleModalTitle" style="font-size: 18px; font-weight: 800;">規則詳情</h3>
        <button onclick="window.EPRS_COMMON.closeRuleModal()" class="btn btn-secondary" style="padding: 2px 8px;">✕</button>
      </div>
      <div style="background: var(--slate-100); padding: 10px 14px; border-radius: 8px; margin-bottom: 12px;">
        <span style="font-size: 12px; color: var(--slate-500); font-weight: 600;">核心判定公式：</span>
        <div id="ruleModalFormula" style="font-weight: 700; color: var(--primary); margin-top: 2px;"></div>
      </div>
      <p id="ruleModalDesc" style="font-size: 13px; color: var(--slate-700); line-height: 1.6; margin-bottom: 16px;"></p>
      <div>
        <span style="font-size: 12px; color: var(--slate-500); font-weight: 600; display: block; margin-bottom: 6px;">標準代表發音與範例單字：</span>
        <div id="ruleModalExamples" style="display: flex; flex-wrap: wrap; gap: 4px;"></div>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const data = window.EPRS_CURRENT_BATCH;
      if (!data || !Array.isArray(data.words)) return;

      const badgeEl = document.getElementById('batchVersionBadge');
      if (badgeEl) badgeEl.innerText = data.version || 'v1.5';
      const titleEl = document.getElementById('batchTitleText');
      if (titleEl) titleEl.innerText = data.title;

      const tbody = document.getElementById('wordTableBody');
      if (!tbody) return;

      tbody.innerHTML = data.words.map(w => {
        let ruleBadges = '';
        if (Array.isArray(w.rules) && w.rules.length > 0) {
          ruleBadges = w.rules.map(r => '<button onclick="window.EPRS_COMMON.openRuleModal(\\'' + (r.ruleCode || r.id || r) + '\\')" class="badge badge-amber" style="cursor:pointer; border:none; margin:1px;" title="' + (r.ruleName || '') + '">' + (r.ruleCode || r.id || r) + '</button>').join(' ');
        } else if (Array.isArray(w.rulesApplied) && w.rulesApplied.length > 0) {
          ruleBadges = w.rulesApplied.map(r => '<button onclick="window.EPRS_COMMON.openRuleModal(\\'' + r + '\\')" class="badge badge-amber" style="cursor:pointer; border:none; margin:1px;">' + r + '</button>').join(' ');
        } else if (w.steps && Array.isArray(w.steps.ruleStep)) {
          ruleBadges = w.steps.ruleStep.map(rStr => {
            const m = rStr.match(/R\\d{3}/i);
            const code = m ? m[0].toUpperCase() : '';
            return code ? '<button onclick="window.EPRS_COMMON.openRuleModal(\\'' + code + '\\')" class="badge badge-amber" style="cursor:pointer; border:none; margin:1px;">' + code + '</button>' : '';
          }).filter(Boolean).join(' ');
        }
        if (!ruleBadges) ruleBadges = '<span class="badge badge-slate">標準推導</span>';

        const cleanWord = (w.word || '').replace(/['"]/g, '');
        const syllableText = w.syllableDetail?.header || (Array.isArray(w.syllable) ? w.syllable.join(' · ') : (Array.isArray(w.syllables) ? w.syllables.map(s => s.text || s).join(' · ') : (w.word || '')));
        const derivationText = w.phonicsDerivation || w.steps?.ipaStep || (Array.isArray(w.steps?.derivations) ? w.steps.derivations.map(d => d.rule + ': ' + d.reason).join('； ') : '') || w.syllableDetail?.structureRule || '';

        return '<tr>' +
          '<td style="text-align:center; font-weight:700; color:var(--slate-500);">' + w.id + '</td>' +
          '<td>' +
            '<div style="display:flex; align-items:center; gap:6px;">' +
              '<span style="font-weight:800; font-size:15px; color:var(--slate-900);">' + w.word + '</span>' +
              '<button onclick="window.EPRS_AUDIO.play(\\'' + cleanWord + '\\', this)" class="btn-audio" title="點擊發音">🔊</button>' +
            '</div>' +
          '</td>' +
          '<td style="font-family:monospace; color:#059669; font-weight:700;">' + (w.ipa || '') + '</td>' +
          '<td style="color:#2563eb; font-weight:600;">' + syllableText + '</td>' +
          '<td>' + ruleBadges + '</td>' +
          '<td style="font-size:12px; color:var(--slate-600); line-height:1.4;">' + derivationText + '</td>' +
          '<td style="font-weight:600; color:var(--slate-800);">' + (w.chinese || '') + '</td>' +
        '</tr>';
      }).join('');
    });
  </script>
</body>
</html>`;
}

// 7. Generate all Batch Report HTML files (public/reports/senior-XX.html, moe-XX.html)
seniorBatches.forEach(b => {
  const html = generateBatchReportHtml('senior', b.batchNum);
  fs.writeFileSync(path.resolve(reportsDir, `senior-${String(b.batchNum).padStart(2, '0')}.html`), html);
});

moeBatches.forEach(b => {
  const html = generateBatchReportHtml('moe', b.batchNum);
  fs.writeFileSync(path.resolve(reportsDir, `moe-${String(b.batchNum).padStart(2, '0')}.html`), html);
});

// 8. Generate Rules Overview Page (public/rules.html)
const rulesHtml = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EPRS 自然發音 13 大核心規則標準知識庫 (離線版)</title>
  <link rel="stylesheet" href="./css/app.css">
  <script src="./js/audio.js"></script>
  <script src="./js/rules-data.js"></script>
  <script src="./js/common.js"></script>
</head>
<body>
  <div class="container">
    <header class="app-header">
      <div class="header-row">
        <div>
          <div class="nav-links" style="margin-bottom: 8px;">
            <a href="./offline.html" class="btn btn-secondary">⬅ 返回主入口</a>
            <span class="badge badge-amber">EPRS Phonics Matrix</span>
          </div>
          <h1 style="font-size: 22px; font-weight: 800;">EPRS 自然發音 13 大核心規則標準體系</h1>
          <p style="font-size: 13px; color: var(--slate-600); margin-top: 4px;">
            以最少的例外、最多的通用規則，涵蓋開閉音節、母音組合、軟硬子音與非重音弱化
          </p>
        </div>
        <div class="nav-links">
          <button onclick="window.print()" class="btn btn-primary">🖨️ 列印規則表</button>
        </div>
      </div>
    </header>

    <div class="grid grid-2" id="rulesGrid">
      <!-- Injected by script -->
    </div>

    <footer style="margin-top: 24px; text-align: center; font-size: 12px; color: var(--slate-500);">
      EPRS 英文發音知識推導系統 · 自然發音 13 大核心規則
    </footer>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const grid = document.getElementById('rulesGrid');
      grid.innerHTML = (window.EPRS_RULES || []).map(r => {
        return '<div class="card">' +
          '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">' +
            '<span class="badge badge-amber" style="font-size:12px;">' + r.id + '</span>' +
            '<span style="font-weight:700; color:var(--slate-800);">' + r.name + '</span>' +
          '</div>' +
          '<div style="font-size:12px; color:var(--primary); font-weight:700; background:var(--primary-light); padding:4px 8px; border-radius:6px; margin-bottom:8px;">' +
            '公式：' + (r.formula || '') +
          '</div>' +
          '<p style="font-size:13px; color:var(--slate-600); line-height:1.5; margin-bottom:10px;">' +
            (r.description || r.summary || '') +
          '</p>' +
          '<div>' +
            '<span style="font-size:11px; font-weight:700; color:var(--slate-400); display:block; margin-bottom:4px;">範例單字：</span>' +
            '<div style="display:flex; flex-wrap:wrap; gap:4px;">' +
              (r.examples || []).map(ex => 
                '<span style="background:var(--slate-100); padding:2px 6px; border-radius:4px; font-size:12px; font-weight:600;">' + 
                ex.word + ' <span style="color:#059669; font-family:monospace;">' + ex.ipa + '</span></span>'
              ).join('') +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    });
  </script>
</body>
</html>`;
fs.writeFileSync(path.resolve(publicDir, 'rules.html'), rulesHtml.trim());

// 9. Generate Main Modular Portal (public/offline.html)
const indexHtml = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EPRS 英文發音知識推導系統 - 離線模組化完整網站</title>
  <link rel="stylesheet" href="./css/app.css">
  <script src="./js/audio.js"></script>
  <script src="./js/rules-data.js"></script>
  <script src="./js/common.js"></script>
</head>
<body>
  <div class="container">
    <header class="app-header" style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); color: #fff; border: none;">
      <div class="header-row">
        <div>
          <div class="nav-links" style="margin-bottom: 8px;">
            <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4);">
              EPRS OFFLINE MODULAR V1.6
            </span>
            <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4);">
              100% 離線可用 · 零依賴
            </span>
          </div>
          <h1 style="font-size: 24px; font-weight: 800; color: #fff;">
            EPRS 英文發音知識推導系統 · 離線模組化入口
          </h1>
          <p style="font-size: 13px; color: #cbd5e1; margin-top: 4px; max-width: 800px;">
            本系統已按「模組、功能、批次」完全拆分，各批次報表與資料檔獨立載入，可將整個 <code>public/</code> 目錄直接拷貝至任何無網路電腦雙擊開啟使用。
          </p>
        </div>
        <div class="nav-links" style="display:flex; flex-wrap:wrap; gap:8px;">
          <a href="./index.html" class="btn btn-emerald" style="background:#059669; color:#fff; font-weight:700;">⚡ 完整推導練習單頁版 (SPA)</a>
          <a href="./rules.html" class="btn btn-amber">📖 13 大發音規則表</a>
          <a href="../" class="btn btn-secondary" style="background:rgba(255,255,255,0.15); color:#fff; border:1px solid rgba(255,255,255,0.3);">🏠 線上動態系統</a>
        </div>
      </div>
    </header>

    <!-- Section 1: Senior Batches (高中詞彙) -->
    <section style="margin-bottom: 28px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h2 style="font-size: 18px; font-weight: 800; color: var(--slate-900); display: flex; align-items: center; gap: 8px;">
          <span style="display:inline-block; width:4px; height:18px; background:var(--emerald); border-radius:2px;"></span>
          教育部高中英文參考詞彙表 (第一級 & 第二級) 12 批次報表
        </h2>
        <span style="font-size: 12px; color: var(--slate-500); font-weight: 600;">共 1,200 字</span>
      </div>

      <div class="grid grid-4">
        ${seniorBatches.map(b => `
          <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span class="badge badge-emerald">Senior B${String(b.batchNum).padStart(2, '0')}</span>
              <span style="font-size: 11px; color: var(--slate-400); font-family: monospace;">${b.range}</span>
            </div>
            <h3 style="font-size: 14px; font-weight: 700; color: var(--slate-800); margin-bottom: 4px;">
              ${b.words[0]?.word || ''} ~ ${b.words[b.words.length - 1]?.word || ''}
            </h3>
            <p style="font-size: 12px; color: var(--slate-500); margin-bottom: 12px; line-height: 1.4;">
              ${b.level} · 完整音節切分、發音規則與美式 IPA
            </p>
            <a href="./reports/senior-${String(b.batchNum).padStart(2, '0')}.html" class="btn btn-emerald" style="width: 100%; justify-content: center;">
              開啟 B${String(b.batchNum).padStart(2, '0')} 報表 ➔
            </a>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Section 2: MOE 1200 Batches (國中詞彙) -->
    <section style="margin-bottom: 28px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h2 style="font-size: 18px; font-weight: 800; color: var(--slate-900); display: flex; align-items: center; gap: 8px;">
          <span style="display:inline-block; width:4px; height:18px; background:var(--primary); border-radius:2px;"></span>
          教育部國中常用 1200 單字 12 批次報表
        </h2>
        <span style="font-size: 12px; color: var(--slate-500); font-weight: 600;">共 1,200 字</span>
      </div>

      <div class="grid grid-4">
        ${moeBatches.map(b => `
          <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span class="badge badge-blue">MOE B${String(b.batchNum).padStart(2, '0')}</span>
              <span style="font-size: 11px; color: var(--slate-400); font-family: monospace;">${b.range}</span>
            </div>
            <h3 style="font-size: 14px; font-weight: 700; color: var(--slate-800); margin-bottom: 4px;">
              ${b.words[0]?.word || ''} ~ ${b.words[b.words.length - 1]?.word || ''}
            </h3>
            <p style="font-size: 12px; color: var(--slate-500); margin-bottom: 12px; line-height: 1.4;">
              基礎開閉音節、母音團隊與複合子音推導
            </p>
            <a href="./reports/moe-${String(b.batchNum).padStart(2, '0')}.html" class="btn btn-primary" style="width: 100%; justify-content: center;">
              開啟 B${String(b.batchNum).padStart(2, '0')} 報表 ➔
            </a>
          </div>
        `).join('')}
      </div>
    </section>

    <footer style="margin-top: 32px; padding: 20px; border-top: 1px solid var(--border); text-align: center; font-size: 12px; color: var(--slate-500);">
      EPRS (English Pronunciation Reasoning System) &copy; 2026. 模組化離線發音知識系統
    </footer>
  </div>
</body>
</html>`;
fs.writeFileSync(path.resolve(publicDir, 'offline.html'), indexHtml.trim());
fs.writeFileSync(path.resolve(publicDir, 'index1200.html'), indexHtml.trim());

console.log('✅ Successfully generated modular offline static site in public/ directory!');
console.log('📦 Generated Structure:');
console.log('  - public/offline.html (Modular Portal)');
console.log('  - public/rules.html (13 Phonics Rules)');
console.log('  - public/css/app.css (Shared Stylesheet)');
console.log('  - public/js/ (audio.js, rules-data.js, common.js)');
console.log('  - public/data/ (senior-batch-01~12.js, moe-batch-01~12.js)');
console.log('  - public/reports/ (senior-01~12.html, moe-01~12.html)');
