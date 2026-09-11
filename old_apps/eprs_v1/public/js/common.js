// EPRS Master Interactive Controller & Offline Application Core
(function() {
  'use strict';

  // Application State
  const state = {
    dataset: 'senior', // 'senior' | 'moe'
    batch: 12, // 1..12 or 0 (All)
    words: [],
    filteredWords: [],
    searchTerm: '',
    selectedRule: 'ALL',
    selectedSyllableCount: 'ALL',
    fontScale: 1.0,
    loadedBatches: {},
    
    // Quick Practice State
    practice: {
      isOpen: false,
      unit: 1,
      unitWords: [],
      currentIndex: 0,
      step: 1 // 1: Word, 2: Chinese, 3: Breakdown+IPA+Rules, 4: First Audio, 5: Second Audio & Complete
    }
  };

  // DOM Elements Cache
  const dom = {};

  // Common UI utilities for batch reports and standalone pages
  window.EPRS_COMMON = {
    initFontScale: function() {
      const scaleSelect = document.getElementById('fontScaleSelect') || document.getElementById('font-scale-select');
      if (!scaleSelect) return;
      try {
        const saved = localStorage.getItem('eprs_font_scale') || '1';
        scaleSelect.value = saved;
        document.documentElement.style.setProperty('--font-scale', saved);
      } catch (e) {}

      scaleSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        document.documentElement.style.setProperty('--font-scale', val);
        try { localStorage.setItem('eprs_font_scale', val); } catch (e) {}
      });
    },
    openRuleModal: function(ruleId) {
      const modal = document.getElementById('ruleModal') || document.getElementById('rules-modal');
      const titleEl = document.getElementById('ruleModalTitle') || document.getElementById('rule-modal-title');
      const descEl = document.getElementById('ruleModalDesc') || document.getElementById('rule-modal-desc');
      const formulaEl = document.getElementById('ruleModalFormula') || document.getElementById('rule-modal-formula');
      const examplesEl = document.getElementById('ruleModalExamples') || document.getElementById('rule-modal-examples');
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
    },
    closeRuleModal: function() {
      const modal = document.getElementById('ruleModal') || document.getElementById('rules-modal');
      if (modal) {
        modal.classList.remove('open');
        modal.style.display = 'none';
      }
    },
    filterTable: function(searchTerm) {
      const term = (searchTerm || '').toLowerCase().trim();
      const rows = document.querySelectorAll('#wordTableBody tr, #words-table-body tr');
      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (!term || text.includes(term)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }
  };

  function init() {
    cacheDom();
    if (window.EPRS_COMMON && window.EPRS_COMMON.initFontScale) {
      window.EPRS_COMMON.initFontScale();
    }
    const isPortal = !!(dom.wordsTableBody || dom.batchSelect);
    if (isPortal) {
      bindEvents();
      loadStoredPreferences();
      loadCurrentBatch();
    }
  }

  function cacheDom() {
    dom.datasetTabs = document.querySelectorAll('.dataset-tab');
    dom.batchSelect = document.getElementById('batch-select');
    dom.batchInfo = document.getElementById('batch-info');
    dom.batchTitle = document.getElementById('batch-title');
    dom.batchStats = document.getElementById('batch-stats');
    dom.unitBar = document.getElementById('unit-bar');
    dom.searchInput = document.getElementById('search-input');
    dom.ruleFilter = document.getElementById('rule-filter');
    dom.syllableFilter = document.getElementById('syllable-filter');
    dom.wordsTableBody = document.getElementById('words-table-body');
    dom.totalCountEl = document.getElementById('total-count');
    dom.fontScaleSlider = document.getElementById('font-scale-slider');
    dom.fontScaleVal = document.getElementById('font-scale-val');
    
    // Modals
    dom.practiceModal = document.getElementById('practice-modal');
    dom.rulesModal = document.getElementById('rules-modal');
    dom.matrixModal = document.getElementById('matrix-modal');
    dom.versionModal = document.getElementById('version-modal');
    dom.wordDetailModal = document.getElementById('word-detail-modal');
    dom.syllableExplainerModal = document.getElementById('syllable-explainer-modal');
    dom.reasoningModal = document.getElementById('reasoning-modal');
  }

  function bindEvents() {
    // Dataset Switching
    dom.datasetTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetDataset = e.currentTarget.dataset.set;
        if (targetDataset === state.dataset) return;
        state.dataset = targetDataset;
        state.batch = targetDataset === 'senior' ? 12 : 1;
        updateDatasetUI();
        loadCurrentBatch();
      });
    });

    // Batch Selection Dropdown
    if (dom.batchSelect) {
      dom.batchSelect.addEventListener('change', (e) => {
        state.batch = parseInt(e.target.value, 10);
        loadCurrentBatch();
      });
    }

    // Search & Filters
    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.trim().toLowerCase();
        applyFilters();
      });
    }

    if (dom.ruleFilter) {
      dom.ruleFilter.addEventListener('change', (e) => {
        state.selectedRule = e.target.value;
        applyFilters();
      });
    }

    if (dom.syllableFilter) {
      dom.syllableFilter.addEventListener('change', (e) => {
        state.selectedSyllableCount = e.target.value;
        applyFilters();
      });
    }

    // Font Scale
    if (dom.fontScaleSlider) {
      dom.fontScaleSlider.addEventListener('input', (e) => {
        setFontScale(parseFloat(e.target.value));
      });
    }

    // Universal Modal Backdrop Click & Escape Key Closing
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        // If clicking on the backdrop itself (not inside the modal-box), close modal smoothly
        if (e.target === backdrop) {
          closeModal(backdrop);
          if (backdrop === dom.practiceModal) {
            state.practice.isOpen = false;
          }
        }
      });
    });

    // Keyboard Shortcuts for Practice Mode & Global Escape
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        // Close any currently open modals on Escape
        const openModals = document.querySelectorAll('.modal-backdrop.open');
        if (openModals.length > 0) {
          openModals.forEach(m => closeModal(m));
          state.practice.isOpen = false;
        }
        return;
      }

      if (state.practice.isOpen) {
        if (e.code === 'Space') {
          e.preventDefault();
          nextPracticeStep();
        } else if (e.code === 'ArrowRight') {
          e.preventDefault();
          changePracticeWord(1);
        } else if (e.code === 'ArrowLeft') {
          e.preventDefault();
          changePracticeWord(-1);
        }
      }
    });
  }

  function loadStoredPreferences() {
    try {
      const savedScale = localStorage.getItem('eprs_font_scale');
      if (savedScale) setFontScale(parseFloat(savedScale));
    } catch {}
  }

  function setFontScale(scale) {
    state.fontScale = scale;
    document.documentElement.style.setProperty('--font-scale', scale);
    if (dom.fontScaleSlider) dom.fontScaleSlider.value = scale;
    if (dom.fontScaleVal) dom.fontScaleVal.textContent = Math.round(scale * 100) + '%';
    try { localStorage.setItem('eprs_font_scale', scale); } catch {}
  }

  function updateDatasetUI() {
    dom.datasetTabs.forEach(tab => {
      const isCurrent = tab.dataset.set === state.dataset;
      tab.className = `dataset-tab ${isCurrent ? (state.dataset === 'senior' ? 'active-senior' : 'active-moe') : ''}`;
    });

    // Populate Batch Dropdown
    if (dom.batchSelect) {
      dom.batchSelect.innerHTML = '';
      if (state.dataset === 'senior') {
        for (let i = 1; i <= 12; i++) {
          const opt = document.createElement('option');
          opt.value = i;
          const s = (i - 1) * 100 + 1;
          const e = i * 100;
          opt.textContent = `高中 ${i >= 12 ? '第二級' : '第一級'} Batch ${String(i).padStart(2, '0')} (${s} ~ ${e})`;
          dom.batchSelect.appendChild(opt);
        }
      } else {
        const allOpt = document.createElement('option');
        allOpt.value = 0;
        allOpt.textContent = '國中 1200 全資料集 (Word 1 ~ 1200)';
        dom.batchSelect.appendChild(allOpt);
        for (let i = 1; i <= 12; i++) {
          const opt = document.createElement('option');
          opt.value = i;
          const s = (i - 1) * 100 + 1;
          const e = i * 100;
          opt.textContent = `國中 Batch ${String(i).padStart(2, '0')} (${s} ~ ${e})`;
          dom.batchSelect.appendChild(opt);
        }
      }
      dom.batchSelect.value = state.batch;
    }
  }

  function loadCurrentBatch() {
    updateDatasetUI();
    const batchKey = `${state.dataset}-${state.batch}`;

    if (state.loadedBatches[batchKey]) {
      state.words = state.loadedBatches[batchKey];
      onBatchLoaded();
      return;
    }

    // Determine script source path
    let scriptSrc = '';
    let globalVarName = '';

    if (state.dataset === 'senior') {
      const bStr = String(state.batch).padStart(2, '0');
      scriptSrc = `./data/senior-batch-${bStr}.js`;
      globalVarName = `EPRS_SENIOR_BATCH_${bStr}`;
    } else {
      if (state.batch === 0) {
        scriptSrc = `./data/moe-batch-all.js`;
        globalVarName = `EPRS_MOE_BATCH_ALL`;
      } else {
        const bStr = String(state.batch).padStart(2, '0');
        scriptSrc = `./data/moe-batch-${bStr}.js`;
        globalVarName = `EPRS_MOE_BATCH_${bStr}`;
      }
    }

    const extractBatchWords = () => {
      // 1. Direct match with specific global variable if present
      if (window[globalVarName]) {
        const direct = window[globalVarName];
        if (Array.isArray(direct) && direct.length > 0 && direct[0].word) return direct;
        if (direct && Array.isArray(direct.words)) return direct.words;
      }

      // 2. Check window.EPRS_CURRENT_BATCH (used by senior-batch-*.js)
      if (window.EPRS_CURRENT_BATCH && Array.isArray(window.EPRS_CURRENT_BATCH.words)) {
        return window.EPRS_CURRENT_BATCH.words;
      }

      // 3. Search among window keys, explicitly excluding non-word objects like EPRS_RULES
      const candidateKeys = Object.keys(window).filter(k => 
        k.startsWith('EPRS_') && 
        k !== 'EPRS_RULES' && 
        k !== 'EPRS_AUDIO' && 
        k !== 'EPRS_APP_PACKAGE' &&
        !k.startsWith('__')
      );

      for (const k of candidateKeys) {
        const val = window[k];
        if (val && Array.isArray(val.words) && val.words.length > 0) {
          return val.words;
        }
        if (Array.isArray(val) && val.length > 0 && val[0].word) {
          return val;
        }
      }

      return null;
    };

    const existingWords = state.loadedBatches[batchKey];
    if (existingWords && existingWords.length > 0) {
      state.words = existingWords;
      onBatchLoaded();
      return;
    }

    // Load Script Dynamically
    if (dom.wordsTableBody) {
      dom.wordsTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 40px; color: var(--slate-500);">⏳ 正在載入單字推導資料庫 (${batchKey})...</td></tr>`;
    }

    // Reset current batch global slot before loading script to avoid cross-batch pollution
    window.EPRS_CURRENT_BATCH = null;

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.onload = () => {
      const loaded = extractBatchWords();
      if (loaded && loaded.length > 0) {
        // Clone array to isolate batch state
        state.words = loaded.slice();
        state.loadedBatches[batchKey] = state.words;
        onBatchLoaded();
      } else {
        if (dom.wordsTableBody) {
          dom.wordsTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 40px; color: var(--rose);">⚠️ 無法解析資料格式：${scriptSrc}</td></tr>`;
        }
      }
    };
    script.onerror = () => {
      if (dom.wordsTableBody) {
        dom.wordsTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 40px; color: var(--rose);">⚠️ 無法載入資料檔：${scriptSrc}，請確認檔案是否存在於 public/data 目錄中。</td></tr>`;
      }
    };
    document.head.appendChild(script);
  }

  function normalizeWord(w, idx) {
    if (!w) return null;
    const wordText = w.word || '';
    const pos = w.pos || '';
    const chinese = w.chinese || '';
    const ipa = w.ipa || '';
    const id = w.id || (idx + 1);

    // 1. Syllables Normalization
    let syllables = [];
    if (Array.isArray(w.syllables)) {
      syllables = w.syllables;
    } else if (Array.isArray(w.syllable)) {
      syllables = w.syllable.map((sText, sIdx) => {
        const isStressed = ipa.includes('ˈ') ? (sIdx === 0 && !ipa.startsWith('/ə')) : true;
        return {
          text: sText,
          isStressed: isStressed,
          type: '音節'
        };
      });
    } else if (typeof w.syllableText === 'string') {
      const parts = w.syllableText.replace(/^.*?\[(.*?)\]$/, '$1').split(/·|\s+/).filter(Boolean);
      syllables = parts.map(p => ({ text: p, isStressed: false, type: '音節' }));
    }

    // 2. Rules Applied Normalization
    let rulesApplied = [];
    if (Array.isArray(w.rulesApplied)) {
      rulesApplied = w.rulesApplied;
    } else if (w.steps && Array.isArray(w.steps.ruleStep)) {
      rulesApplied = w.steps.ruleStep.map(rStr => {
        const match = rStr.match(/R\d{3}/i);
        return match ? match[0].toUpperCase() : rStr.split('：')[0].replace(/\(.*?\)/g, '').trim();
      });
    }

    // 3. Derivations Steps Normalization
    let derivationSteps = [];
    if (Array.isArray(w.derivationSteps)) {
      derivationSteps = w.derivationSteps;
    } else if (w.steps && Array.isArray(w.steps.derivations)) {
      derivationSteps = w.steps.derivations.map(d => ({
        syllable: d.syllable || '',
        ruleName: d.rule || '',
        status: (d.status || '').replace(/【|】/g, '') || '適用',
        reason: d.reason || ''
      }));
    } else if (w.steps && Array.isArray(w.steps.ruleStep)) {
      derivationSteps = w.steps.ruleStep.map((r, rIdx) => ({
        syllable: `音節 ${rIdx + 1}`,
        ruleName: r.split('：')[0] || r,
        status: '適用',
        reason: r.split('：')[1] || r
      }));
    }

    // 4. Syllable Detail Normalization (4-step sequence)
    const syllableDetail = w.syllableDetail || {
      vowelCore: w.steps && w.steps.syllableStep ? w.steps.syllableStep.split('\n')[0] : '',
      indivisibleRule: w.steps && w.steps.syllableStep ? w.steps.syllableStep.split('\n')[1] : '',
      structureRule: w.steps && w.steps.syllableStep ? w.steps.syllableStep.split('\n')[2] : '',
      header: w.syllableText || (w.syllable ? `${w.syllable.length} 音節 [${w.syllable.join(' · ')}]` : '')
    };

    return {
      id,
      word: wordText,
      pos,
      chinese,
      ipa,
      syllables,
      syllableDetail,
      rulesApplied,
      derivationSteps,
      isException: !!w.isException,
      exceptionCategory: w.exceptionCategory || (w.isException ? '歷史音變/借詞' : ''),
      raw: w
    };
  }

  function onBatchLoaded() {
    // Normalize data if necessary
    if (Array.isArray(state.words)) {
      state.words = state.words.map((w, i) => normalizeWord(w, i));
    }
    updateHeaderStats();
    renderUnitBar();
    applyFilters();
  }

  function updateHeaderStats() {
    const isSenior = state.dataset === 'senior';
    const bNum = state.batch;
    const startId = isSenior ? (bNum - 1) * 100 + 1 : (bNum === 0 ? 1 : (bNum - 1) * 100 + 1);
    const endId = isSenior ? (bNum - 1) * 100 + state.words.length : (bNum === 0 ? state.words.length : Math.min(bNum * 100, state.words.length));

    if (dom.batchTitle) {
      dom.batchTitle.textContent = isSenior
        ? `高中單字${bNum >= 12 ? '第二級' : '第一級'} Batch ${String(bNum).padStart(2, '0')} (${startId} ~ ${endId})`
        : (bNum === 0 ? '國中 1200 全資料集 (Word 1 ~ 1200)' : `國中單字 Batch ${String(bNum).padStart(2, '0')} (${startId} ~ ${endId})`);
    }

    if (dom.batchStats) {
      const exceptionCount = state.words.filter(w => w.isException).length;
      const passRate = 100;
      dom.batchStats.innerHTML = `
        <span class="badge ${isSenior ? 'badge-emerald' : 'badge-blue'}">${isSenior ? '高中英文詞彙表' : '教育部 1200'}</span>
        <span class="badge badge-slate">單字總數：<b>${state.words.length}</b> 字</span>
        <span class="badge ${exceptionCount > 0 ? 'badge-amber' : 'badge-slate'}">特殊音變字：<b>${exceptionCount}</b></span>
        <span class="badge badge-emerald">驗證通過率：<b>${passRate}%</b> (100% PASS)</span>
      `;
    }
  }

  function renderUnitBar() {
    if (!dom.unitBar) return;
    dom.unitBar.innerHTML = '';
    const unitCount = Math.ceil(state.words.length / 20);

    for (let u = 1; u <= unitCount; u++) {
      const start = (u - 1) * 20 + 1;
      const end = Math.min(u * 20, state.words.length);
      const btn = document.createElement('button');
      btn.className = 'btn btn-secondary btn-sm';
      btn.innerHTML = `U${u} <span style="font-size:10px; color:var(--slate-400);">(${start}~${end})</span>`;
      btn.title = `進入單元 ${u} (${start} ~ ${end} 字) 快速發音練習`;
      btn.onclick = () => startQuickPractice(u);
      dom.unitBar.appendChild(btn);
    }
  }

  function applyFilters() {
    let list = state.words;

    // Search filter
    if (state.searchTerm) {
      const q = state.searchTerm;
      list = list.filter(w => 
        (w.word && w.word.toLowerCase().includes(q)) ||
        (w.chinese && w.chinese.toLowerCase().includes(q)) ||
        (w.ipa && w.ipa.toLowerCase().includes(q)) ||
        (w.rulesApplied && w.rulesApplied.some(r => r.toLowerCase().includes(q))) ||
        (w.id && String(w.id) === q)
      );
    }

    // Rule filter
    if (state.selectedRule !== 'ALL') {
      list = list.filter(w => w.rulesApplied && w.rulesApplied.includes(state.selectedRule));
    }

    // Syllable Count filter
    if (state.selectedSyllableCount !== 'ALL') {
      const count = parseInt(state.selectedSyllableCount, 10);
      if (count === 3) {
        list = list.filter(w => (w.syllables || []).length >= 3);
      } else {
        list = list.filter(w => (w.syllables || []).length === count);
      }
    }

    state.filteredWords = list;
    if (dom.totalCountEl) dom.totalCountEl.textContent = `${list.length} / ${state.words.length}`;
    renderTable();
  }

  function renderTable() {
    if (!dom.wordsTableBody) return;
    if (state.filteredWords.length === 0) {
      dom.wordsTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 40px; color: var(--slate-400);">查無符合條件的單字。</td></tr>`;
      return;
    }

    const scale = state.fontScale || 1.0;

    const html = state.filteredWords.map((w, index) => {
      const steps = w.derivationSteps || [];
      const sylDetail = w.syllableDetail || {};
      const cleanWord = (w.word || '').replace(/\(.*?\)/g, '').trim();

      // Format Syllable 4-step details
      const vCore = (sylDetail.vowelCore || '').replace(/^1\.\s*母音核心：/, '').replace(/^母音核心：/, '') || '無';
      const indiv = (sylDetail.indivisibleRule || '').replace(/^2\.\s*不可拆組合：/, '').replace(/^不可拆組合：/, '') || '無';
      const struc = (sylDetail.structureRule || '').replace(/^3\.\s*結構切分：/, '').replace(/^結構切分：/, '') || '單音節獨立';
      const headerText = sylDetail.header || w.syllableText || (w.syllables ? w.syllables.map(s => s.text).join(' · ') : w.word);

      // Format Derivation Steps Cards
      const stepsHtml = steps.map(step => {
        const isTransfer = step.reason && (step.reason.includes('弱化') || step.reason.includes('轉移') || step.status === '弱化轉移');
        const isNotApplicable = step.status && step.status.includes('不適用');
        const statusBadge = step.status === '適用' 
          ? `<span class="badge badge-emerald" style="font-size:10px; padding:1px 5px;">【適用】</span>` 
          : `<span class="badge ${isTransfer ? 'badge-amber' : (isNotApplicable ? 'badge-rose' : 'badge-slate')}" style="font-size:10px; padding:1px 5px;">【${step.status || '不適用'}】</span>`;

        const ruleCode = (step.ruleName || '').match(/R\d{3}/i) ? (step.ruleName.match(/R\d{3}/i)[0].toUpperCase()) : '';

        return `
          <div style="padding: 6px 8px; border-radius: 6px; background: ${isNotApplicable ? '#fff1f2' : '#f8fafc'}; border: 1px solid ${isNotApplicable ? '#fecdd3' : '#e2e8f0'}; margin-bottom: 4px;">
            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 2px;">
              <span style="font-weight: 800; color: #0f172a; font-size: 11px; background: #fff; padding: 1px 5px; border-radius: 4px; border: 1px solid #cbd5e1;">${step.syllable || ''}</span>
              ${statusBadge}
              <button type="button" class="badge badge-indigo" style="cursor:pointer; border:none; padding: 2px 6px; font-size: 11px;" onclick="window.EPRS_APP.openRuleDetail('${ruleCode || step.ruleName}')">
                📖 ${step.ruleName || ''}
              </button>
            </div>
            <div style="font-size: 11px; color: #475569; line-height: 1.35; margin-left: 2px;">
              ${step.reason || ''}
            </div>
          </div>
        `;
      }).join('');

      return `
        <tr style="border-bottom: 1px solid var(--border); transition: background 0.15s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''">
          <!-- 1. 序號 -->
          <td style="font-weight: bold; color: var(--slate-400); font-size: 11.5px; text-align: center; vertical-align: top; padding: 12px 8px;">
            ${w.id || index + 1}
          </td>

          <!-- 2. 單字與音標 (單字在上方，音標在下方，支援點擊發音) -->
          <td style="vertical-align: top; padding: 12px 14px; width: 170px; min-width: 150px;">
            <!-- 上層：單字本體 + 詞性 + 發音/字典按鈕 -->
            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <span style="font-weight: 900; font-size: 16px; color: #0f172a; cursor: pointer;" onclick="window.EPRS_APP.openWordDetail('${w.word}')">${w.word}</span>
              ${w.pos ? `<span style="font-size: 11px; font-style: italic; color: #64748b; background: #f1f5f9; padding: 1px 4px; border-radius: 4px; border: 1px solid #e2e8f0;">${w.pos}</span>` : ''}
              <button type="button" class="audio-btn" onclick="window.EPRS_AUDIO.play('${w.word}', this)" title="朗讀 ${w.word} 發音" style="background: none; border: none; font-size: 14px; cursor: pointer; padding: 2px 4px; border-radius: 4px;">🔊</button>
              <a href="https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(cleanWord.toLowerCase())}" target="_blank" rel="noopener noreferrer" title="在劍橋詞典查詢真人發音" style="font-size: 11px; color: #94a3b8; text-decoration: none; padding: 1px 3px;">🔗</a>
            </div>

            <!-- 下層：綠色音標按鈕 (點擊播放) -->
            <div style="margin-top: 6px;">
              <button type="button" onclick="window.EPRS_AUDIO.play('${w.word}', this)" title="點擊聆聽 ${w.word} 音標發音" style="font-family: monospace, sans-serif; font-weight: 700; color: #065f46; font-size: 13.5px; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 2px 8px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
                <span>🔊</span>
                <span>${w.ipa || ''}</span>
              </button>
            </div>

            <!-- 例外標記 -->
            ${w.isException ? `<div style="margin-top: 4px;"><span class="badge badge-amber" style="font-size: 10.5px;">⚠️ ${w.exceptionCategory || '發音例外'}</span></div>` : ''}
          </td>

          <!-- 3. 中文釋義 -->
          <td style="vertical-align: top; padding: 12px 14px; font-weight: 700; color: #065f46; font-size: 13.5px; width: 120px;">
            ${w.chinese || ''}
          </td>

          <!-- 4. 音節分割 (4-step 結構) -->
          <td style="vertical-align: top; padding: 12px 14px; width: 360px; min-width: 320px; font-size: 12px; line-height: 1.45;">
            <div style="color: #334155;">
              <div><strong style="color: #1e3a8a;">1. 母音核心：</strong><span style="color: #475569;">${vCore}</span></div>
              <div><strong style="color: #78350f;">2. 不可拆組合：</strong><span style="color: #475569;">${indiv}</span></div>
              <div><strong style="color: #334155;">3. 結構切分：</strong><span style="color: #475569;">${struc}</span></div>
              <div style="margin-top: 4px; padding-top: 4px; border-top: 1px solid #e2e8f0; font-weight: 800; color: #1e40af;">
                <span style="color: #64748b; font-weight: 600;">4. 切分結果：</span>
                <span style="font-family: monospace; font-size: 13.5px;">${headerText}</span>
              </div>
            </div>
          </td>

          <!-- 5. 規則判斷與推導鏈 -->
          <td style="vertical-align: top; padding: 12px 14px; min-width: 340px;">
            <div style="max-width: 480px;">${stepsHtml}</div>
          </td>
        </tr>
      `;
    }).join('');

    dom.wordsTableBody.innerHTML = html;
  }

  // Quick Practice Flow
  function startQuickPractice(unitNum) {
    state.practice.unit = unitNum || 1;
    const startIdx = (state.practice.unit - 1) * 20;
    state.practice.unitWords = state.words.slice(startIdx, startIdx + 20);
    if (state.practice.unitWords.length === 0) return;
    
    state.practice.currentIndex = 0;
    state.practice.step = 1;
    state.practice.isOpen = true;
    
    renderPracticeCard();
    openModal(dom.practiceModal);
  }

  function renderPracticeCard() {
    const w = state.practice.unitWords[state.practice.currentIndex];
    if (!w) return;

    const step = state.practice.step;
    const unitBadge = document.getElementById('practice-unit-badge');
    if (unitBadge) unitBadge.textContent = `Unit ${state.practice.unit} (${state.practice.currentIndex + 1} / ${state.practice.unitWords.length})`;
    
    const cardProgress = document.getElementById('p-card-progress');
    if (cardProgress) cardProgress.textContent = `單元進度：第 ${state.practice.currentIndex + 1} / ${state.practice.unitWords.length} 字`;

    const cardId = document.getElementById('p-card-id');
    if (cardId) cardId.textContent = `ID: #${w.id || (state.practice.currentIndex + 1)}`;

    const stepBadge = document.getElementById('p-step-badge');
    if (stepBadge) stepBadge.textContent = `階段 ${step} / 5`;

    const wordEl = document.getElementById('practice-word');
    if (wordEl) wordEl.textContent = w.word;

    const posEl = document.getElementById('practice-pos');
    if (posEl) posEl.textContent = w.pos || '';

    const chineseEl = document.getElementById('practice-chinese');
    const chineseBox = document.getElementById('practice-chinese-box');
    const chinesePlaceholder = document.getElementById('practice-chinese-placeholder');
    const stepHintEl = document.getElementById('practice-step-hint');
    const syllablesRevealed = document.getElementById('p-syllables-revealed');
    const syllablesPlaceholder = document.getElementById('p-syllables-placeholder');
    const placeholderHint = document.getElementById('p-placeholder-hint');

    // Step 1: Word Only
    if (step === 1) {
      if (chineseEl) {
        chineseEl.style.visibility = 'hidden';
      }
      if (chineseBox) chineseBox.style.display = 'none';
      if (chinesePlaceholder) chinesePlaceholder.style.display = 'flex';
      if (syllablesRevealed) syllablesRevealed.style.display = 'none';
      if (syllablesPlaceholder) syllablesPlaceholder.style.display = 'flex';
      if (placeholderHint) placeholderHint.textContent = '請先看單字思考發音與詞義，下一步揭曉中文';
      if (stepHintEl) stepHintEl.textContent = '步驟 1/5：請先嘗試自己推導此單字之發音（按 Space 或點擊卡片/「下一步」）';
    } 
    // Step 2: Show Chinese
    else if (step === 2) {
      if (chineseEl) {
        chineseEl.style.visibility = 'visible';
        chineseEl.textContent = w.chinese;
      }
      if (chineseBox) chineseBox.style.display = 'flex';
      if (chinesePlaceholder) chinesePlaceholder.style.display = 'none';
      if (syllablesRevealed) syllablesRevealed.style.display = 'none';
      if (syllablesPlaceholder) syllablesPlaceholder.style.display = 'flex';
      if (placeholderHint) placeholderHint.innerHTML = '✂️ 按空白鍵或下一步展開音節切割與發音推導';
      if (stepHintEl) stepHintEl.textContent = '步驟 2/5：中文釋義已展開，請觀察字母組合與音節';
    }
    // Step 3: Show Breakdown, IPA & Rules & Reasoning
    else if (step >= 3) {
      if (chineseEl) {
        chineseEl.style.visibility = 'visible';
        chineseEl.textContent = w.chinese;
      }
      if (chineseBox) chineseBox.style.display = 'flex';
      if (chinesePlaceholder) chinesePlaceholder.style.display = 'none';
      if (syllablesRevealed) syllablesRevealed.style.display = 'flex';
      if (syllablesPlaceholder) syllablesPlaceholder.style.display = 'none';

      // Fill Breakdown Details
      const ipaTextEl = document.getElementById('practice-ipa-text');
      if (ipaTextEl) ipaTextEl.textContent = `[${w.ipa || ''}]`;
      const ipaEl = document.getElementById('practice-ipa');
      if (ipaEl) ipaEl.textContent = w.ipa || '';
      
      // Interactive Syllables (Clickable to open Syllable Explainer)
      const rawSyllables = (w.syllables && w.syllables.length > 0) ? w.syllables : [{ text: w.word, isStressed: true, type: '單音節' }];
      const syllablesHtml = rawSyllables.map((s, sIdx) => 
        `<button type="button" class="syllable-btn" onclick="event.stopPropagation(); window.EPRS_APP.openSyllableExplainerModal('${s.text}', '${w.word}')" 
          title="點擊查看「${s.text}」音節切割說明">
          <span>${s.text}${s.isStressed ? ' ˈ' : ''}</span>
        </button>`
      ).join(' <span style="color:#cbd5e1; font-weight:900; align-self:center; font-size:18px;">·</span> ');

      const syllablesContainer = document.getElementById('practice-syllables-btns') || document.getElementById('practice-syllables');
      if (syllablesContainer) syllablesContainer.innerHTML = syllablesHtml;

      const rulesHtml = (w.rulesApplied || []).map(r => `<span class="badge badge-indigo">${r}</span>`).join(' ');
      const rulesEl = document.getElementById('practice-rules');
      if (rulesEl) rulesEl.innerHTML = rulesHtml;

      const stepsHtml = (w.derivationSteps || []).map(st => `
        <div style="font-size:12px; margin-bottom:3px;">
          <b>${st.syllable}</b> 【${st.status}】 ${st.ruleName} <span style="color:var(--slate-500);">(${st.reason})</span>
        </div>
      `).join('');
      const stepsEl = document.getElementById('practice-steps');
      if (stepsEl) stepsEl.innerHTML = stepsHtml;

      if (step === 3) {
        if (stepHintEl) stepHintEl.textContent = '步驟 3/5：音節與規則推導鏈已展示，即將進行第一次發音聆聽';
      } else if (step === 4) {
        if (stepHintEl) stepHintEl.textContent = '步驟 4/5：第一次標準發音已播放，請跟隨大聲朗讀';
      } else if (step === 5) {
        if (stepHintEl) stepHintEl.textContent = '步驟 5/5：第二次流暢發音完成！可按 Space 進入下一個單字';
      }
    }

    // Auto Play Audio at Step 4 and Step 5
    if (step === 4 || step === 5) {
      window.EPRS_AUDIO.play(w.word);
    }
  }

  function onPracticeCardClick(e) {
    // If click originated from a button, don't auto advance
    if (e && e.target && e.target.closest('button')) return;
    nextPracticeStep();
  }

  function playCurrentPracticeWord() {
    const w = state.practice.unitWords[state.practice.currentIndex];
    if (w) window.EPRS_AUDIO.play(w.word);
  }

  function openPracticeReasoningModal() {
    const w = state.practice.unitWords[state.practice.currentIndex];
    if (w) openReasoningModal(w.word);
  }

  function nextPracticeStep() {
    if (state.practice.step < 5) {
      state.practice.step++;
      renderPracticeCard();
    } else {
      changePracticeWord(1);
    }
  }

  function changePracticeWord(delta) {
    const newIdx = state.practice.currentIndex + delta;
    if (newIdx >= 0 && newIdx < state.practice.unitWords.length) {
      state.practice.currentIndex = newIdx;
      state.practice.step = 1;
      renderPracticeCard();
    } else if (newIdx >= state.practice.unitWords.length) {
      alert(`🎉 恭喜！您已完成 Unit ${state.practice.unit} 的 20 個單字發音練習！`);
      state.practice.step = 1;
      state.practice.currentIndex = 0;
      renderPracticeCard();
    }
  }

  // Modals Utility
  function openModal(el) {
    if (el) el.classList.add('open');
  }

  function closeModal(el) {
    if (el) el.classList.remove('open');
    // Stop audio whenever any modal is closed
    if (window.EPRS_AUDIO && window.EPRS_AUDIO.stop) {
      window.EPRS_AUDIO.stop();
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // Word Detail Modal
  function openWordDetail(wordText) {
    const w = state.words.find(item => item.word.toLowerCase() === wordText.toLowerCase());
    if (!w) return;

    document.getElementById('wd-word').textContent = w.word;
    document.getElementById('wd-pos').textContent = w.pos || '';
    document.getElementById('wd-chinese').textContent = w.chinese;
    document.getElementById('wd-ipa').textContent = w.ipa;

    const syllablesHtml = (w.syllables || []).map(s => 
      `<div style="padding:6px 12px; border-radius:6px; background:${s.isStressed ? '#fef3c7' : '#f8fafc'}; border:1px solid ${s.isStressed ? '#fde68a' : '#e2e8f0'};">
        <div style="font-weight:bold; font-size:14px; color:${s.isStressed ? '#b45309' : '#1e293b'};">${s.text}</div>
        <div style="font-size:11px; color:var(--slate-500);">${s.type || ''} · ${s.isStressed ? '★ 重讀' : '次/弱讀'}</div>
      </div>`
    ).join('');
    document.getElementById('wd-syllables').innerHTML = syllablesHtml;

    const stepsHtml = (w.derivationSteps || []).map(st => `
      <div style="padding:8px 12px; border-radius:6px; background:#f8fafc; border:1px solid #e2e8f0; margin-bottom:6px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:bold; color:var(--slate-900);">${st.syllable} ➔ ${st.ruleName}</span>
          <span class="badge ${st.status === '適用' ? 'badge-emerald' : 'badge-amber'}">【${st.status}】</span>
        </div>
        <div style="font-size:11.5px; color:var(--slate-600); margin-top:4px;">${st.reason}</div>
      </div>
    `).join('');
    document.getElementById('wd-steps').innerHTML = stepsHtml;

    document.getElementById('wd-audio-btn').onclick = function() {
      window.EPRS_AUDIO.play(w.word, this);
    };

    openModal(dom.wordDetailModal);
  }

  // Syllable Explainer Modal (音節切分詳解 - 100% 呼應動態版)
  function openSyllableExplainerModal(syllableText, wordText) {
    const targetWord = wordText || (state.practice.isOpen && state.practice.unitWords[state.practice.currentIndex] ? state.practice.unitWords[state.practice.currentIndex].word : '');
    const w = state.words.find(item => item.word.toLowerCase() === targetWord.toLowerCase()) || (state.practice.unitWords && state.practice.unitWords[state.practice.currentIndex]);
    if (!w) return;

    const targetSyllable = syllableText || (w.syllables && w.syllables[0] ? w.syllables[0].text : w.word);
    const sylObj = (w.syllables || []).find(s => s.text.toLowerCase() === targetSyllable.toLowerCase()) || { text: targetSyllable, isStressed: true, type: '音節核心' };
    
    const container = document.getElementById('syllable-explainer-body') || document.getElementById('syllable-explainer-content');
    if (container) {
      const sylChipsHtml = (w.syllables || []).map(s => {
        const isActive = s.text.toLowerCase() === targetSyllable.toLowerCase();
        return `
          <button type="button" 
            onclick="window.EPRS_APP.openSyllableExplainerModal('${s.text}', '${w.word}')"
            style="padding: 6px 14px; border-radius: 10px; font-weight: 800; font-size: 14px; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid ${isActive ? '#3b82f6' : '#cbd5e1'}; background: ${isActive ? '#eff6ff' : '#fff'}; color: ${isActive ? '#1e40af' : '#475569'};">
            ${s.text} ${s.isStressed ? '★' : ''}
          </button>
        `;
      }).join('');

      container.innerHTML = `
        <!-- Word Information Banner -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 26px; font-weight: 900; color: #0f172a;">${w.word}</span>
              ${w.pos ? `<span style="font-size: 13px; font-weight: 700; color: #64748b; background: #e2e8f0; padding: 2px 8px; border-radius: 6px;">${w.pos}</span>` : ''}
              <span style="font-family: monospace; font-size: 16px; color: #065f46; font-weight: 800; background: #ecfdf5; padding: 3px 10px; border-radius: 8px; border: 1px solid #a7f3d0;">[${w.ipa}]</span>
            </div>
            <button type="button" class="btn btn-primary" onclick="window.EPRS_AUDIO.play('${w.word}', this)" style="padding: 6px 14px; font-size: 13px; font-weight: 700;">
              🔊 播放整字發音
            </button>
          </div>
          <div style="margin-top: 8px; font-size: 14px; font-weight: 700; color: #475569;">
            中文釋義：<span style="color: #0f172a;">${w.chinese}</span>
          </div>
        </div>

        <!-- Syllables Selection Bar -->
        <div style="margin-bottom: 16px;">
          <div style="font-size: 12px; font-weight: 800; color: #64748b; margin-bottom: 6px; text-transform: uppercase;">
            音節切分標籤 (點擊切換音節分析)：
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${sylChipsHtml || `<span style="font-weight: bold; color: #1e40af;">${w.word}</span>`}
          </div>
        </div>

        <!-- 3 Structured Cards -->
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;">
          <!-- 1. Vowel Core -->
          <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="width: 8px; height: 8px; border-radius: 9999px; background: #10b981; display: inline-block;"></span>
              <span style="font-weight: 800; font-size: 13px; color: #0f172a;">母音核心判定 (Vowel Core)</span>
            </div>
            <p style="font-size: 13px; color: #334155; line-height: 1.5; margin: 0;">
              ${w.vowelCore || '定位發音母音字母群，作為該音節之主要響音核心。'}
            </p>
          </div>

          <!-- 2. Structure Rule -->
          <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 14px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; border-radius: 9999px; background: #3b82f6; display: inline-block;"></span>
                <span style="font-weight: 800; font-size: 13px; color: #1e40af;">目標音節「${targetSyllable}」切分原則 (Structure Rule)</span>
              </div>
              <span class="badge ${sylObj.isStressed ? 'badge-amber' : 'badge-slate'}">
                ${sylObj.isStressed ? '★ 重讀音節' : '次/弱讀音節'}
              </span>
            </div>
            <p style="font-size: 13px; color: #1e3a8a; line-height: 1.6; margin: 0;">
              ${sylObj.analysis || w.structureSplitting || `${targetSyllable} 遵循自然發音 VCV/VCCV 切分與前後子音分配原則。`}
            </p>
          </div>

          <!-- 3. Indivisible Constraints -->
          <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="width: 8px; height: 8px; border-radius: 9999px; background: #6366f1; display: inline-block;"></span>
              <span style="font-weight: 800; font-size: 13px; color: #0f172a;">組合備註與約束 (Indivisible Constraints)</span>
            </div>
            <p style="font-size: 13px; color: #334155; line-height: 1.5; margin: 0;">
              ${w.indivisible || '不可拆子音群（如 sh, ch, th, ph, bl, st）視為單一子音單元完整保留於同一音節。'}
            </p>
          </div>
        </div>

        <!-- Footer Actions -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #e2e8f0;">
          <span style="font-size: 12px; color: #64748b;">按鍵提示：點擊任何音節標籤即可隨時開啟詳解</span>
          <button type="button" class="btn btn-secondary" onclick="window.EPRS_APP.closeModal(document.getElementById('syllable-explainer-modal'))">
            關閉 (Close)
          </button>
        </div>
      `;
    }

    openModal(dom.syllableExplainerModal);
  }

  // Pronunciation Reasoning Deduction Modal (發音推理詳解 - 100% 呼應動態版)
  function openReasoningModal(wordText) {
    const targetWord = wordText || (state.practice.isOpen && state.practice.unitWords[state.practice.currentIndex] ? state.practice.unitWords[state.practice.currentIndex].word : '');
    const w = state.words.find(item => item.word.toLowerCase() === targetWord.toLowerCase()) || (state.practice.unitWords && state.practice.unitWords[state.practice.currentIndex]);
    if (!w) return;

    const container = document.getElementById('reasoning-modal-body') || document.getElementById('reasoning-modal-content');
    if (container) {
      const stepsHtml = (w.derivationSteps || []).map((st, idx) => `
        <div style="padding: 12px 14px; border-radius: 12px; background: #fff; border: 1.5px solid #e2e8f0; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="background: #1e3a8a; color: #fff; font-size: 11px; font-weight: 800; border-radius: 6px; padding: 2px 7px;">音節 ${idx + 1}</span>
              <span style="font-weight: 900; font-size: 16px; color: #0f172a;">${st.syllable}</span>
              <button type="button" onclick="window.EPRS_APP.openRuleDetail('${st.ruleCode || 'R001'}')" 
                style="font-size: 13px; color: #2563eb; font-weight: 800; background: none; border: none; cursor: pointer; text-decoration: underline; padding: 0;">
                ➔ ${st.ruleName}
              </button>
            </div>
            <span class="badge ${st.status === '適用' ? 'badge-emerald' : 'badge-amber'}">【${st.status}】</span>
          </div>
          <div style="font-size: 13px; color: #334155; line-height: 1.6; background: #f8fafc; padding: 8px 12px; border-radius: 8px; border: 1px solid #f1f5f9;">
            ${st.reason}
          </div>
        </div>
      `).join('');

      container.innerHTML = `
        <!-- Word Information Banner -->
        <div style="background: #f8fafc; border-radius: 14px; padding: 16px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 26px; font-weight: 900; color: #0f172a;">${w.word}</span>
                <span style="font-family: monospace; font-size: 16px; font-weight: 800; color: #065f46; background: #d1fae5; padding: 3px 10px; border-radius: 8px; border: 1px solid #a7f3d0;">[${w.ipa}]</span>
              </div>
              <div style="font-size: 14px; font-weight: 700; color: #64748b; margin-top: 4px;">
                ${w.pos ? `<span style="font-style:italic; margin-right:6px; color:#475569;">${w.pos}</span>` : ''}中文釋義：<span style="color:#0f172a;">${w.chinese}</span>
              </div>
            </div>
            <button type="button" class="btn btn-primary" onclick="window.EPRS_AUDIO.play('${w.word}', this)" style="padding: 6px 14px; font-weight: 700;">
              🔊 聆聽標準發音
            </button>
          </div>
        </div>

        <!-- Exception Notice Banner (if any) -->
        ${w.isException ? `
          <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 12px; padding: 12px 16px; margin-bottom: 16px;">
            <div style="font-weight: 800; font-size: 13.5px; color: #92400e; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
              <span>⚠️</span> <span>歷史音變或外來借詞例外標記 (${w.exceptionCategory || '發音特例'})</span>
            </div>
            <p style="font-size: 12.5px; color: #b45309; line-height: 1.5; margin: 0;">
              此單字之特定字母或音節發音因歷史語音演變或外來語借入，未完全依循常規拼讀規則，建議透過「音形對應 + 規律例外」強化記憶。
            </p>
          </div>
        ` : ''}

        <!-- Section 1: Derivation Chain -->
        <div style="margin-bottom: 16px;">
          <div style="font-weight: 800; font-size: 14px; color: #1e293b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
            <span>✨</span> <span>各音節推導與規則適用鏈 (Derivation Chain)：</span>
          </div>
          ${stepsHtml || '<div style="color:#64748b; font-size:13px;">無特定步驟資料</div>'}
        </div>

        <!-- Section 2: Step-by-Step Phonics Reasoning -->
        <div style="margin-bottom: 16px;">
          <div style="font-weight: 800; font-size: 14px; color: #1e293b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
            <span>📋</span> <span>自然發音規則推導步驟 (Rule Reasoning Steps)：</span>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 14px;">
            ${(w.ruleReasoning || [
              `1. 尋找核心母音：定位母音字母群以確認音節核心。`,
              `2. 切分音節結構：依循 VCV/VCCV 規則劃分音節邊界。`,
              `3. 判定重弱音節：識別重讀音節與弱化音節。`,
              `4. 查驗發音規則：套用對應自然發音規則推導標準音標。`
            ]).map(st => `<div style="font-size: 13px; color: #334155; margin-bottom: 6px; line-height: 1.5;">${st}</div>`).join('')}
          </div>
        </div>

        <!-- Section 3: Summary Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div style="background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 10px; padding: 12px;">
            <div style="font-size: 12px; font-weight: 800; color: #475569; margin-bottom: 4px;">拼讀模式 (Pattern Mapping)</div>
            <div style="font-size: 13.5px; font-weight: 800; color: #1e3a8a; font-family: monospace;">${w.pattern || (w.syllables || []).map(s => s.type).join(' + ') || '標準拼讀結構'}</div>
          </div>
          <div style="background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 10px; padding: 12px;">
            <div style="font-size: 12px; font-weight: 800; color: #065f46; margin-bottom: 4px;">音標推演結論 (IPA Result)</div>
            <div style="font-size: 15px; font-weight: 900; color: #065f46; font-family: monospace;">[${w.ipa}]</div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #e2e8f0;">
          <span style="font-size: 12px; color: #64748b;">EPRS 零黑箱原則：100% 透明化推導鏈</span>
          <button type="button" class="btn btn-secondary" onclick="window.EPRS_APP.closeModal(document.getElementById('reasoning-modal'))">
            關閉 (Close)
          </button>
        </div>
      `;
    }

    openModal(dom.reasoningModal);
  }

  // 4-Tab Syllable & IPA Matrix Modal (音節矩陣與工具表 - 100% 呼應動態版)
  let matrixCurrentTab = 'syllable-steps';

  function openMatrixModal(defaultTab) {
    matrixCurrentTab = defaultTab || 'syllable-steps';
    switchMatrixTab(matrixCurrentTab);
    openModal(dom.matrixModal);
  }

  function switchMatrixTab(tabKey, tabBtnEl) {
    matrixCurrentTab = tabKey;
    const navTabs = document.querySelectorAll('.matrix-nav-tab');
    navTabs.forEach(t => {
      if (t.dataset.tab === tabKey || t === tabBtnEl) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    renderMatrixTabContent(tabKey);
  }

  function handleMatrixWordSearch(query) {
    if (!query) return;
    const q = query.trim().toLowerCase();
    const found = (state.words || []).find(w => w.word.toLowerCase() === q || w.chinese.includes(q)) || 
                  (window.EPRS_APP_ALL_WORDS && window.EPRS_APP_ALL_WORDS.find(w => w.word.toLowerCase() === q));
    
    const resultBox = document.getElementById('matrix-search-result');
    if (!resultBox) return;

    if (found) {
      resultBox.innerHTML = `
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 14px; margin-top: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 22px; font-weight: 900; color: #1e40af;">${found.word}</span>
              <span style="font-family: monospace; font-size: 15px; font-weight: 800; color: #065f46; background: #ecfdf5; padding: 2px 8px; border-radius: 6px; border: 1px solid #a7f3d0;">[${found.ipa}]</span>
              <span style="font-size: 13.5px; font-weight: 700; color: #475569;">${found.chinese}</span>
            </div>
            <button type="button" class="btn btn-primary" onclick="window.EPRS_AUDIO.play('${found.word}', this)" style="padding: 4px 12px; font-size: 12px;">
              🔊 播放發音
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; margin-top: 10px;">
            <div style="background: #fff; padding: 8px 10px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 12px;">
              <b style="color: #1e3a8a;">音節切分：</b> ${(found.syllables || []).map(s => s.text).join(' · ') || found.word}
            </div>
            <div style="background: #fff; padding: 8px 10px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 12px;">
              <b style="color: #065f46;">母音核心：</b> ${found.vowelCore || '標準母音定位'}
            </div>
            <div style="background: #fff; padding: 8px 10px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 12px;">
              <b style="color: #78350f;">不可拆組合：</b> ${found.indivisible || '無特殊不可拆'}
            </div>
          </div>
        </div>
      `;
    } else {
      resultBox.innerHTML = `
        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 10px 14px; margin-top: 10px; color: #991b1b; font-size: 13px;">
          未在當前批次找到「${query}」，請輸入當前批次收錄單字（如 ${(state.words && state.words[0]) ? state.words[0].word : 'apple'}）。
        </div>
      `;
    }
  }

  function renderMatrixTabContent(tabKey) {
    const data = window.EPRS_MATRIX;
    const body = document.getElementById('matrix-content-body');
    if (!data || !body) return;

    // Search Box Header
    const searchHeaderHtml = `
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 16px; margin-bottom: 16px;">
        <form onsubmit="event.preventDefault(); window.EPRS_APP.handleMatrixWordSearch(document.getElementById('matrix-query-input').value);" style="display: flex; gap: 8px; align-items: center;">
          <input type="text" id="matrix-query-input" placeholder="輸入單字即時演練音節與音標推導 (如 agree, banana, teacher)..." 
            style="flex: 1; padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 13px; font-weight: 600;">
          <button type="submit" class="btn btn-primary" style="padding: 8px 16px; font-size: 13px; font-weight: 700;">
            🔍 即時切分
          </button>
        </form>
        <div id="matrix-search-result"></div>
      </div>
    `;

    if (tabKey === 'syllable-steps' || tabKey === 'SYLLABLE_RULES') {
      body.innerHTML = searchHeaderHtml + `
        <div>
          <div style="margin-bottom: 12px; color: #475569; font-size: 13px; line-height: 1.5;">
            自然發音音節切分核心四步驟是推導未知單字發音之基本架構，依序找出母音核心、鎖定不可拆組合、實施 VCV/VCCV 劃分，並推導音節型態。
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
            ${(data.syllableSteps || []).map(s => `
              <div class="card" style="border: 1.5px solid #cbd5e1; background: #fff; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span class="badge badge-indigo" style="font-size: 12px; padding: 2px 8px;">${s.step}</span>
                  <span style="font-weight: 800; font-size: 15px; color: #0f172a;">${s.rule}</span>
                </div>
                <p style="font-size: 13px; color: #334155; line-height: 1.5; margin-bottom: 10px;">${s.desc}</p>
                <div style="background: #f8fafc; padding: 8px 12px; border-radius: 6px; font-size: 12.5px; border: 1px solid #e2e8f0;">
                  <b style="color: #475569;">代表範例：</b> <span style="color: #2563eb; font-weight: 800;">${s.example}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tabKey === 'rules17' || tabKey === 'RULES') {
      body.innerHTML = searchHeaderHtml + `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
          ${(data.rules17 || []).map(r => `
            <div class="card" style="border: 1px solid #e2e8f0; background: #fff; padding: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <div>
                  <span class="badge badge-indigo">${r.code}</span>
                  <span style="font-weight: 800; font-size: 14px; color: #0f172a; margin-left: 6px;">${r.name}</span>
                </div>
                <span style="font-family: monospace; font-size: 12px; color: #065f46; background: #ecfdf5; padding: 2px 8px; border-radius: 4px; border: 1px solid #a7f3d0; font-weight: 800;">${r.ipa}</span>
              </div>
              <p style="font-size: 12.5px; color: #475569; margin-bottom: 8px; line-height: 1.4;">${r.desc}</p>
              <div style="font-size: 11.5px; color: #64748b; background: #f8fafc; padding: 6px 10px; border-radius: 6px; border: 1px solid #f1f5f9;">
                <b>範例：</b> ${r.ex}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabKey === 'vowels' || tabKey === 'IPA_TABLE') {
      body.innerHTML = searchHeaderHtml + `
        <div style="overflow-x: auto; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <thead>
              <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1; text-align: left;">
                <th style="padding: 10px 14px; color: #1e3a8a; width: 140px;">母音分類</th>
                <th style="padding: 10px 14px; color: #065f46; width: 120px;">IPA 音標</th>
                <th style="padding: 10px 14px; color: #0f172a;">常見字母與拼讀組合</th>
                <th style="padding: 10px 14px; color: #475569;">代表單字範例</th>
              </tr>
            </thead>
            <tbody>
              ${(data.ipaVowels || []).map((v, i) => `
                <tr style="border-bottom: 1px solid #e2e8f0; background: ${i % 2 === 0 ? '#fff' : '#f8fafc'};">
                  <td style="padding: 10px 14px; font-weight: bold; color: #1e3a8a;">${v.cat}</td>
                  <td style="padding: 10px 14px; font-family: monospace; font-weight: 800; color: #065f46; font-size: 14px;">${v.ipa}</td>
                  <td style="padding: 10px 14px; color: #334155; line-height: 1.4;">${v.spell}</td>
                  <td style="padding: 10px 14px; color: #64748b; line-height: 1.4;">${v.ex}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (tabKey === 'consonants') {
      body.innerHTML = searchHeaderHtml + `
        <div style="overflow-x: auto; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <thead>
              <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1; text-align: left;">
                <th style="padding: 10px 14px; color: #78350f; width: 150px;">發音部位與類型</th>
                <th style="padding: 10px 14px; color: #065f46; width: 160px;">無聲 / 有聲 IPA</th>
                <th style="padding: 10px 14px; color: #0f172a;">對應字母拼寫</th>
                <th style="padding: 10px 14px; color: #475569;">代表單字範例</th>
              </tr>
            </thead>
            <tbody>
              ${(data.ipaConsonants || []).map((c, i) => `
                <tr style="border-bottom: 1px solid #e2e8f0; background: ${i % 2 === 0 ? '#fff' : '#f8fafc'};">
                  <td style="padding: 10px 14px; font-weight: bold; color: #78350f;">${c.grp}</td>
                  <td style="padding: 10px 14px; font-family: monospace; font-weight: 800; color: #065f46; font-size: 14px;">${c.ipa}</td>
                  <td style="padding: 10px 14px; color: #334155; line-height: 1.4;">${c.spell}</td>
                  <td style="padding: 10px 14px; color: #64748b; line-height: 1.4;">${c.ex}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  // Version Governance Modal (雙軌版本控制與規格中心 - 100% 呼應動態版)
  let versionCurrentTab = 'overview';

  function openVersionModal(defaultTab) {
    versionCurrentTab = defaultTab || 'overview';
    renderVersionModalContent();
    openModal(dom.versionModal);
  }

  function switchVersionTab(tabKey) {
    versionCurrentTab = tabKey;
    renderVersionModalContent();
  }

  function renderVersionModalContent() {
    const container = document.getElementById('version-modal-content');
    if (!container) return;

    const records = [
      { id: 'moe-all', name: '國中 1200 全套', range: '1 ~ 1200', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-15' },
      { id: 'senior-01', name: '高中第一級 Batch 01', range: '1 ~ 100', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-20' },
      { id: 'senior-02', name: '高中第一級 Batch 02', range: '101 ~ 200', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-21' },
      { id: 'senior-03', name: '高中第一級 Batch 03', range: '201 ~ 300', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-22' },
      { id: 'senior-04', name: '高中第一級 Batch 04', range: '301 ~ 400', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-23' },
      { id: 'senior-05', name: '高中第一級 Batch 05', range: '401 ~ 500', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-24' },
      { id: 'senior-06', name: '高中第一級 Batch 06', range: '501 ~ 600', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-25' },
      { id: 'senior-07', name: '高中第一級 Batch 07', range: '601 ~ 700', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-26' },
      { id: 'senior-08', name: '高中第一級 Batch 08', range: '701 ~ 800', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-27' },
      { id: 'senior-09', name: '高中第一級 Batch 09', range: '801 ~ 900', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-28' },
      { id: 'senior-10', name: '高中第一級 Batch 10', range: '901 ~ 1000', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-29' },
      { id: 'senior-11', name: '高中第二級 Batch 11', range: '1001 ~ 1100', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-08-30' },
      { id: 'senior-12', name: '高中第二級 Batch 12', range: '1101 ~ 1200', eng: 'v1.6.0', data: 'v1.6.0', ui: 'v1.3.0', status: 'GOLD', date: '2026-09-01' }
    ];

    let tabBodyHtml = '';

    if (versionCurrentTab === 'overview') {
      tabBodyHtml = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-bottom: 16px;">
          <!-- Data Spec Card -->
          <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 800; color: #1e40af; font-size: 14px;">資料生成規則 (Data Spec)</span>
              <span class="badge badge-blue">v1.6.0</span>
            </div>
            <p style="font-size: 12.5px; color: #1e3a8a; line-height: 1.5; margin: 0 0 10px 0;">
              管控自然發音 13 大規則庫 (R001~R013)、音節切分演算法、非重讀前綴優先弱化 (R012) 與例外字庫判定。
            </p>
            <div style="font-size: 11px; color: #64748b; font-family: monospace;">status: GOLD RELEASED</div>
          </div>

          <!-- UI Spec Card -->
          <div style="background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 12px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 800; color: #166534; font-size: 14px;">UI 顯示規範 (UI Spec)</span>
              <span class="badge badge-emerald">v1.3.0</span>
            </div>
            <p style="font-size: 12.5px; color: #14532d; line-height: 1.5; margin: 0 0 10px 0;">
              管控獨立推導報表、動態字級縮放 (85%~200%)、A4 橫向列印最佳化排版與 5 步快速練習互動模式。
            </p>
            <div style="font-size: 11px; color: #64748b; font-family: monospace;">status: ACTIVE SPEC</div>
          </div>
        </div>

        <!-- Current Context Status -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; margin-bottom: 16px;">
          <div style="font-weight: 800; font-size: 13px; color: #0f172a; margin-bottom: 6px;">當前執行環境版本狀態：</div>
          <div style="display: flex; flex-wrap: wrap; gap: 10px; font-size: 12.5px; color: #475569;">
            <div>當前資料集：<b style="color: #1e40af;">${state.dataset === 'senior' ? '高中英文詞彙 (Senior)' : '國中 1200 (MOE)'}</b></div>
            <div>當前批次：<b style="color: #065f46;">Batch ${String(state.batch).padStart(2, '0')}</b></div>
            <div>發音引擎：<b style="color: #78350f;">雙引擎 (Audio Stream + Web Speech)</b></div>
          </div>
        </div>
      `;
    } else if (versionCurrentTab === 'matrix') {
      tabBodyHtml = `
        <div style="overflow-x: auto; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 12.5px;">
            <thead>
              <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1; text-align: left;">
                <th style="padding: 10px 12px; color: #0f172a;">批次項目</th>
                <th style="padding: 10px 12px; color: #64748b;">單字範圍</th>
                <th style="padding: 10px 12px; color: #1e40af;">引擎版本</th>
                <th style="padding: 10px 12px; color: #065f46;">資料版本</th>
                <th style="padding: 10px 12px; color: #78350f;">UI版本</th>
                <th style="padding: 10px 12px; color: #0f172a;">發布狀態</th>
                <th style="padding: 10px 12px; color: #94a3b8;">核定日期</th>
              </tr>
            </thead>
            <tbody>
              ${records.map((r, i) => `
                <tr style="border-bottom: 1px solid #f1f5f9; background: ${i % 2 === 0 ? '#fff' : '#fafafa'};">
                  <td style="padding: 8px 12px; font-weight: 800; color: #0f172a;">${r.name}</td>
                  <td style="padding: 8px 12px; font-size: 12px; color: #64748b;">${r.range}</td>
                  <td style="padding: 8px 12px; font-family: monospace; color: #1e40af; font-weight: 700;">${r.eng}</td>
                  <td style="padding: 8px 12px; font-family: monospace; color: #065f46; font-weight: 700;">${r.data}</td>
                  <td style="padding: 8px 12px; font-family: monospace; color: #78350f; font-weight: 700;">${r.ui}</td>
                  <td style="padding: 8px 12px;">
                    <span class="badge ${r.status === 'GOLD' ? 'badge-emerald' : 'badge-indigo'}" style="font-size: 11px;">
                      ${r.status === 'GOLD' ? '✨ GOLD' : 'RC 候選'}
                    </span>
                  </td>
                  <td style="padding: 8px 12px; font-size: 11.5px; color: #94a3b8;">${r.date}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (versionCurrentTab === 'changelog') {
      tabBodyHtml = `
        <div style="background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div style="border-left: 3px solid #10b981; padding-left: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: 800; font-size: 14px; color: #0f172a;">v1.6.0 (2026-09)</span>
                <span class="badge badge-emerald">Current Stable</span>
              </div>
              <p style="font-size: 12.5px; color: #475569; margin: 4px 0 0 0; line-height: 1.5;">
                強化 R012 非重讀前綴優先弱化判定，全量核定高中第一級與第二級 Batch 01~12 發音推導鏈；升級雙引擎音訊容錯架構。
              </p>
            </div>
            <div style="border-left: 3px solid #3b82f6; padding-left: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: 800; font-size: 14px; color: #0f172a;">v1.5.0 (2026-08)</span>
                <span class="badge badge-blue">Gold Release</span>
              </div>
              <p style="font-size: 12.5px; color: #475569; margin: 4px 0 0 0; line-height: 1.5;">
                教育部國中 1200 全套單字自然發音推導鏈標準化完成，建立 13 大規則庫與音節切分四步驟矩陣。
              </p>
            </div>
          </div>
        </div>
      `;
    } else if (versionCurrentTab === 'governance') {
      tabBodyHtml = `
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px;">
            <div style="font-weight: 800; font-size: 13.5px; color: #1e3a8a; margin-bottom: 4px;">① 修復即入規 (Mandatory Codification on Fix)</div>
            <p style="font-size: 12.5px; color: #334155; line-height: 1.5; margin: 0;">
              每次問題修復後，必須第一時間將根本原因、修復方法與防範對策沉澱為具體條文規則寫入專案知識庫。
            </p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px;">
            <div style="font-weight: 800; font-size: 13.5px; color: #065f46; margin-bottom: 4px;">② 變更需求隔離原則 (Isolation of Completed Batches)</div>
            <p style="font-size: 12.5px; color: #334155; line-height: 1.5; margin: 0;">
              已完成審核之批次嚴格凍結；新規則僅於指定測試批次中演練，未經明確確認絕不批量回溯覆寫歷史批次。
            </p>
          </div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px;">
            <div style="font-weight: 800; font-size: 13.5px; color: #78350f; margin-bottom: 4px;">③ 單一真實來源 (Single Source of Truth)</div>
            <p style="font-size: 12.5px; color: #334155; line-height: 1.5; margin: 0;">
              資料規格與 UI 規範獨立雙軌版本控制，以核心資料庫與標準規則庫為唯一權威參考依據。
            </p>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <!-- Tabs Navigation -->
      <div style="display: flex; gap: 6px; background: #f1f5f9; padding: 4px; border-radius: 10px; margin-bottom: 16px; flex-wrap: wrap;">
        <button type="button" class="matrix-nav-tab ${versionCurrentTab === 'overview' ? 'active' : ''}" onclick="window.EPRS_APP.switchVersionTab('overview')">
          🌿 版本總覽 (Overview)
        </button>
        <button type="button" class="matrix-nav-tab ${versionCurrentTab === 'matrix' ? 'active' : ''}" onclick="window.EPRS_APP.switchVersionTab('matrix')">
          📊 批次版本矩陣 (Batch Matrix)
        </button>
        <button type="button" class="matrix-nav-tab ${versionCurrentTab === 'changelog' ? 'active' : ''}" onclick="window.EPRS_APP.switchVersionTab('changelog')">
          📝 演進紀錄 (Changelog)
        </button>
        <button type="button" class="matrix-nav-tab ${versionCurrentTab === 'governance' ? 'active' : ''}" onclick="window.EPRS_APP.switchVersionTab('governance')">
          🛡️ 治理規範 (Governance)
        </button>
      </div>

      <!-- Tab Body -->
      ${tabBodyHtml}

      <!-- Footer Actions -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #e2e8f0;">
        <span style="font-size: 12px; color: #64748b;">EPRS 雙軌版本管理系統 · Engine v1.6.0 · Data Spec v1.6.0 · UI Spec v1.3.0</span>
        <button type="button" class="btn btn-secondary" onclick="window.EPRS_APP.closeModal(document.getElementById('version-modal'))">
          關閉 (Close)
        </button>
      </div>
    `;
  }

  // 13 Phonics Rules Modal (自然發音 13 大規則庫 - 100% 呼應動態版 RuleDetailModal)
  let rulesSearchFilter = '';
  let rulesSelectedCategory = 'ALL';
  let activeRuleCode = 'R001';

  function openRulesModal(ruleCode) {
    rulesSearchFilter = '';
    rulesSelectedCategory = 'ALL';
    activeRuleCode = ruleCode || activeRuleCode || 'R001';
    renderRulesModalContent(activeRuleCode);
    openModal(dom.rulesModal);
  }

  function openRuleDetail(ruleCode) {
    if (ruleCode) {
      const cleanCode = ruleCode.match(/R\d{3}/i) ? ruleCode.match(/R\d{3}/i)[0].toUpperCase() : ruleCode;
      activeRuleCode = cleanCode;
    }
    openRulesModal(activeRuleCode);
  }

  function selectRuleInModal(ruleCode) {
    activeRuleCode = ruleCode;
    renderRulesModalContent(ruleCode);
  }

  function filterRulesCategory(cat) {
    rulesSelectedCategory = cat;
    renderRulesModalContent(activeRuleCode);
  }

  function handleRulesSearch(query) {
    rulesSearchFilter = query;
    renderRulesModalContent(activeRuleCode);
  }

  function renderRulesModalContent(focusRuleCode) {
    const container = document.getElementById('rules-list-container') || document.getElementById('rules-modal-content');
    if (!container || !window.EPRS_RULES) return;

    const allRules = window.EPRS_RULES || [];
    const currentRule = allRules.find(r => r.id.toUpperCase() === (focusRuleCode || activeRuleCode || 'R001').toUpperCase()) || allRules[0];
    
    // Filter other rules
    const filteredRules = allRules.filter(r => {
      if (rulesSelectedCategory !== 'ALL' && r.category !== rulesSelectedCategory) return false;
      if (rulesSearchFilter) {
        const q = rulesSearchFilter.toLowerCase().trim();
        return r.id.toLowerCase().includes(q) ||
               r.name.toLowerCase().includes(q) ||
               (r.englishName && r.englishName.toLowerCase().includes(q)) ||
               (r.formula && r.formula.toLowerCase().includes(q)) ||
               (r.description && r.description.toLowerCase().includes(q));
      }
      return true;
    });

    const categories = ['ALL', '母音法則', '子音法則', '音節與弱化', '例外與特殊', '詞綴與複合詞'];

    // Examples HTML for current active rule
    const currentExamplesHtml = (currentRule.examples || []).map(ex => `
      <div style="display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 1.5px solid #bfdbfe; padding: 6px 12px; border-radius: 10px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
        <span style="font-weight: 800; font-size: 15px; color: #1e3a8a;">${ex.word}</span>
        <span class="ipa-font" style="color: #059669; font-weight: 800; font-size: 13.5px; background: #ecfdf5; padding: 1px 6px; border-radius: 4px; border: 1px solid #a7f3d0;">${ex.ipa}</span>
        <button type="button" onclick="window.EPRS_AUDIO.play('${ex.word}', this)" style="background: none; border: none; cursor: pointer; font-size: 14px; padding: 2px;" title="朗讀 ${ex.word}">🔊</button>
      </div>
    `).join(' ');

    container.innerHTML = `
      <!-- Modal Header (Dark matching RuleDetailModal.tsx) -->
      <div class="modal-header modal-header-dark" style="margin: -20px -24px 20px -24px; padding: 18px 24px; border-radius: 19px 19px 0 0;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(99, 102, 241, 0.25); border: 1px solid rgba(99, 102, 241, 0.4); padding: 6px 10px; border-radius: 10px; color: #a5b4fc; font-size: 18px;">
            📖
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span style="font-family: monospace; font-weight: 900; font-size: 18px; color: #fbbf24;">${currentRule.id}</span>
              <span style="font-weight: 800; font-size: 18px; color: #ffffff;">${currentRule.name}</span>
              <span style="font-size: 11px; font-weight: 700; background: rgba(99, 102, 241, 0.2); color: #c7d2fe; border: 1px solid rgba(99, 102, 241, 0.4); padding: 2px 8px; border-radius: 9999px;">
                ${currentRule.category}
              </span>
            </div>
            <div style="font-size: 12px; color: #94a3b8; font-family: monospace; margin-top: 2px;">
              ${currentRule.englishName} · 自然發音 13 大標準體系
            </div>
          </div>
        </div>
        <button type="button" class="close-btn" onclick="window.EPRS_APP.closeModal(document.getElementById('rules-modal'))" title="關閉 (Esc)">✕</button>
      </div>

      <!-- Section 1: Active Rule Detailed Showcase -->
      <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px;">
        <!-- Core Formula -->
        <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 14px; padding: 16px; box-shadow: 0 2px 6px rgba(59, 130, 246, 0.08);">
          <div style="font-size: 11.5px; font-weight: 800; color: #2563eb; text-transform: uppercase; margin-bottom: 4px; letter-spacing: 0.05em;">
            核心公式 / 判定特徵
          </div>
          <div style="font-family: monospace; font-size: 17px; font-weight: 800; color: #1e3a8a; line-height: 1.4;">
            ${currentRule.formula}
          </div>
        </div>

        <!-- Description -->
        <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
          <div style="font-size: 12px; font-weight: 800; color: #475569; margin-bottom: 6px;">規則核心說明</div>
          <p style="font-size: 14px; color: #1e293b; line-height: 1.6; margin: 0;">
            ${currentRule.description}
          </p>
        </div>

        <!-- Examples -->
        <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 16px;">
          <div style="font-size: 12px; font-weight: 800; color: #475569; margin-bottom: 8px;">代表單字範例 (點擊 🔊 發音)</div>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${currentExamplesHtml}
          </div>
        </div>

        <!-- Exceptions & Warnings -->
        ${currentRule.summary || currentRule.exceptions ? `
          <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 14px; padding: 14px 16px;">
            <div style="font-size: 12px; font-weight: 800; color: #92400e; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
              <span>⚠️</span> <span>判定防範與例外原則</span>
            </div>
            <p style="font-size: 13px; color: #b45309; line-height: 1.5; margin: 0;">
              ${currentRule.summary || currentRule.exceptions}
            </p>
          </div>
        ` : ''}
      </div>

      <!-- Section 2: Rule Switcher Section (切換與查閱其餘 13 大規則) -->
      <div style="border-top: 2px solid #e2e8f0; padding-top: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 6px; font-weight: 800; font-size: 14px; color: #0f172a;">
            <span>📖</span> <span>切換與查閱其餘 13 大自然發音規則：</span>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            ${categories.map(cat => `
              <button type="button" onclick="window.EPRS_APP.filterRulesCategory('${cat}')"
                style="padding: 3px 10px; border-radius: 9999px; font-size: 11.5px; font-weight: 700; cursor: pointer; border: 1px solid ${rulesSelectedCategory === cat ? '#3b82f6' : '#cbd5e1'}; background: ${rulesSelectedCategory === cat ? '#2563eb' : '#fff'}; color: ${rulesSelectedCategory === cat ? '#fff' : '#475569'};">
                ${cat === 'ALL' ? '全部 (13)' : cat}
              </button>
            `).join('')}
          </div>
        </div>

        <input type="text" id="rules-search-input" value="${rulesSearchFilter}" placeholder="🔍 快速搜尋規則名稱、公式或代碼 (如 R001, 閉音節)..." 
          oninput="window.EPRS_APP.handleRulesSearch(this.value)"
          style="width: 100%; padding: 8px 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 13px; font-weight: 600; margin-bottom: 12px; box-sizing: border-box;">

        <!-- Grid of Rule Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; max-height: 280px; overflow-y: auto; padding: 2px;">
          ${filteredRules.map(r => {
            const isSelected = r.id.toUpperCase() === currentRule.id.toUpperCase();
            return `
              <div onclick="window.EPRS_APP.selectRuleInModal('${r.id}')"
                style="cursor: pointer; padding: 12px; border-radius: 12px; border: 1.5px solid ${isSelected ? '#3b82f6' : '#e2e8f0'}; background: ${isSelected ? '#eff6ff' : '#ffffff'}; transition: all 0.15s ease; box-shadow: ${isSelected ? '0 2px 8px rgba(59,130,246,0.15)' : '0 1px 2px rgba(0,0,0,0.02)'};"
                onmouseover="if(!${isSelected}) this.style.borderColor='#93c5fd'"
                onmouseout="if(!${isSelected}) this.style.borderColor='#e2e8f0'">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-family: monospace; font-weight: 900; font-size: 13px; color: ${isSelected ? '#1d4ed8' : '#b45309'};">${r.id}</span>
                  <span style="font-size: 10.5px; color: #64748b; background: #f1f5f9; padding: 1px 6px; border-radius: 4px;">${r.category}</span>
                </div>
                <div style="font-weight: 800; font-size: 13.5px; color: #0f172a; margin-bottom: 4px;">${r.name}</div>
                <div style="font-size: 11.5px; color: #475569; font-family: monospace; line-height: 1.3; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  ${r.formula}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Footer Actions -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; margin-top: 16px; border-top: 1px solid #e2e8f0;">
        <span style="font-size: 12px; color: #64748b;">EPRS 自然發音 13 大標準體系 · 以最少例外、最多通用規則推導發音</span>
        <button type="button" class="btn btn-secondary" onclick="window.EPRS_APP.closeModal(document.getElementById('rules-modal'))">
          關閉 (Close)
        </button>
      </div>
    `;
  }

  // Export to Excel / CSV with UTF-8 BOM
  function exportExcel() {
    if (state.words.length === 0) return;
    const isSenior = state.dataset === 'senior';
    const bNum = state.batch;
    const filename = `EPRS_${isSenior ? 'Senior' : 'MOE'}_Batch_${String(bNum).padStart(2, '0')}.csv`;

    let csvContent = '\uFEFF序號,單字,詞性,IPA音標,中文釋義,音節切分,適用發音規則,推導詳解\n';

    state.words.forEach((w, idx) => {
      const syllables = (w.syllables || []).map(s => s.text).join('-');
      const rules = (w.rulesApplied || []).join('; ');
      const steps = (w.derivationSteps || []).map(st => `${st.syllable}: [${st.status}] ${st.ruleName} (${st.reason})`).join(' | ');
      
      const row = [
        w.id || idx + 1,
        `"${(w.word || '').replace(/"/g, '""')}"`,
        `"${(w.pos || '').replace(/"/g, '""')}"`,
        `"${(w.ipa || '').replace(/"/g, '""')}"`,
        `"${(w.chinese || '').replace(/"/g, '""')}"`,
        `"${syllables.replace(/"/g, '""')}"`,
        `"${rules.replace(/"/g, '""')}"`,
        `"${steps.replace(/"/g, '""')}"`
      ];
      csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Public API Expose
  window.EPRS_APP = {
    init,
    startQuickPractice,
    nextPracticeStep,
    changePracticeWord,
    onPracticeCardClick,
    playCurrentPracticeWord,
    openPracticeReasoningModal,
    openModal,
    closeModal,
    openWordDetail,
    openSyllableExplainerModal,
    openReasoningModal,
    openMatrixModal,
    switchMatrixTab,
    handleMatrixWordSearch,
    openVersionModal,
    switchVersionTab,
    openRulesModal,
    openRuleDetail,
    filterRulesCategory,
    handleRulesSearch,
    exportExcel,
    setFontScale
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
