'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { allBatchData, BatchWord } from '@/lib/batch01Data';
import {
  X,
  Search,
  BookOpen,
  Zap,
  CheckCircle2,
  Table,
  Sliders,
  Workflow,
  AlertTriangle,
  Layers,
  ArrowRight,
  Filter
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SyllableIpaMatrixModal({ isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'TOOL' | 'SYLLABLE_RULES' | 'RULES' | 'IPA_TABLE' | 'EXCEPTIONS' | 'FLOW'>('TOOL');
  const [fontScale, setFontScale] = useState<number>(1.15);
  const [showFontToolbar, setShowFontToolbar] = useState<boolean>(false);
  const [exceptionFilterCategory, setExceptionFilterCategory] = useState<string>('ALL');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [exceptionSearch, setExceptionSearch] = useState<string>('');
  const [queryInput, setQueryInput] = useState('agree');
  const [selectedWord, setSelectedWord] = useState<BatchWord | null>(
    allBatchData.find(w => w.word.toLowerCase() === 'agree') || allBatchData[0]
  );

  const allExceptions = useMemo(() => {
    return allBatchData.filter(w => w.isException);
  }, []);

  const uniqueLetters = useMemo(() => {
    const letters = new Set(allExceptions.map(w => w.word[0].toUpperCase()));
    return Array.from(letters).sort();
  }, [allExceptions]);

  const categoriesList = useMemo(() => {
    const set = new Set(allExceptions.map(w => w.exceptionCategory || '不規則例外單字'));
    return ['ALL', ...Array.from(set)];
  }, [allExceptions]);

  const filteredExceptions = useMemo(() => {
    return allBatchData.filter(w => {
      if (!w.isException) return false;
      if (exceptionFilterCategory !== 'ALL' && w.exceptionCategory !== exceptionFilterCategory) return false;
      if (selectedLetter !== 'ALL' && w.word[0].toUpperCase() !== selectedLetter) return false;
      if (exceptionSearch) {
        const q = exceptionSearch.toLowerCase().trim();
        return (
          w.word.toLowerCase().includes(q) ||
          w.chinese.includes(q) ||
          w.ipa.includes(q) ||
          (w.exceptionCategory && w.exceptionCategory.includes(q))
        );
      }
      return true;
    });
  }, [exceptionFilterCategory, selectedLetter, exceptionSearch]);

  const groupedFilteredExceptions = useMemo(() => {
    const map = new Map<string, BatchWord[]>();
    filteredExceptions.forEach(w => {
      const cat = w.exceptionCategory || '不規則例外單字';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(w);
    });
    return Array.from(map.entries());
  }, [filteredExceptions]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearchWord = (e: React.FormEvent) => {
    e.preventDefault();
    const found = allBatchData.find(
      w => w.word.toLowerCase() === queryInput.trim().toLowerCase() ||
           w.chinese.includes(queryInput.trim()) ||
           w.id.toString() === queryInput.trim()
    );
    if (found) {
      setSelectedWord(found);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/30 border border-blue-500/40 rounded-xl text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  100% 離線純規則引擎
                </span>
                <span className="text-slate-400 text-xs font-mono">MOE 1200 全字庫</span>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white mt-0.5">
                音節切分與音標推導查詢工具表
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* 字級調整控制項 (支援隱藏/收合 & 1.0x ~ 3.0x 縮放) */}
            {!showFontToolbar ? (
              <button
                type="button"
                onClick={() => setShowFontToolbar(true)}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                title="點擊展開字級縮放工具列"
              >
                <span>🔤 字級:</span>
                <span className="text-sky-300 font-mono font-bold">{Math.round(fontScale * 100)}%</span>
                <span className="text-[10px] opacity-70">⚙️ 調整</span>
              </button>
            ) : (
              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 gap-2 flex-wrap" title="調整字級大小 (1.0x ~ 3.0x)">
                <span className="text-slate-300 text-xs font-bold">🔤 字級:</span>
                <div className="flex items-center gap-1.5">
                  <input
                    type="range"
                    min="1.0"
                    max="3.0"
                    step="0.05"
                    value={fontScale}
                    onChange={(e) => setFontScale(parseFloat(e.target.value))}
                    className="w-16 accent-blue-500 cursor-pointer"
                    title="滑動調整 1.0x ~ 3.0x"
                  />
                  <span className="text-sky-300 text-xs font-mono font-bold min-w-[36px] text-center">
                    {Math.round(fontScale * 100)}%
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1.0, 1.25, 1.5, 2.0, 2.5, 3.0].map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => setFontScale(scale)}
                      className={`px-1.5 py-0.5 text-xs font-bold rounded transition-colors ${
                        Math.abs(fontScale - scale) < 0.04
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                      title={`${scale}x (${Math.round(scale * 100)}%)`}
                    >
                      {scale}x
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setShowFontToolbar(false)}
                  className="text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-600 rounded px-1.5 py-0.5 text-[11px] font-bold transition-colors cursor-pointer"
                  title="隱藏此工具列 (可在需要時再次展開)"
                >
                  ✕ 隱藏
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="關閉視窗"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-2 flex items-center gap-2 overflow-x-auto shrink-0">
          {[
            { id: 'TOOL', label: '即時推導查詢器', icon: Zap },
            { id: 'SYLLABLE_RULES', label: '工具表一：音節切分四部曲', icon: Table },
            { id: 'RULES', label: '工具表二：17 條發音規則對照表', icon: BookOpen },
            { id: 'IPA_TABLE', label: '工具表三：IPA 母音子音速查矩陣', icon: Sliders },
            { id: 'EXCEPTIONS', label: '工具表四：1200 字庫例外速查 (A-Z)', icon: AlertTriangle },
            { id: 'FLOW', label: '推導判斷架構流程', icon: Workflow },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3.5 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Content Body */}
        <div
          className="p-6 overflow-y-auto flex-1 bg-slate-50/60 transition-all"
          style={{ fontSize: `calc(15px * ${fontScale})`, lineHeight: 1.6 }}
        >
          
          {/* TAB 1: 即時單字切分與推導查詢器 */}
          {activeTab === 'TOOL' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <form onSubmit={handleSearchWord} className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-1 w-full">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="輸入教育部 1200 單字 (例如: agree, banana, doctor, engineer, factory)..."
                      value={queryInput}
                      onChange={(e) => setQueryInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    即時查詢推導
                  </button>
                </form>

                {/* Quick Word Suggestions */}
                <div className="mt-3 flex items-center gap-2 overflow-x-auto text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="shrink-0 font-bold text-slate-700">熱門查詢示範：</span>
                  {['agree', 'balloon', 'teacher', 'student', 'happy', 'banana', 'engineer', 'eraser', 'factory'].map((word) => (
                    <button
                      key={word}
                      type="button"
                      onClick={() => {
                        setQueryInput(word);
                        const found = allBatchData.find(w => w.word.toLowerCase() === word);
                        if (found) setSelectedWord(found);
                      }}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-blue-100 hover:text-blue-700 font-mono font-semibold text-slate-700 rounded transition-colors cursor-pointer"
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Word Breakdown */}
              {selectedWord ? (
                <div className="bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden">
                  <div className="bg-slate-900 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800">
                    <div>
                      <div className="text-xs font-mono text-blue-400">Word ID #{selectedWord.id}</div>
                      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
                        {selectedWord.word}
                        <span className="text-base sm:text-lg font-normal text-slate-300">[{selectedWord.chinese}]</span>
                      </div>
                    </div>
                    <div className="bg-emerald-950/80 border border-emerald-500/40 px-4 py-2 rounded-lg text-right">
                      <div className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">美式 IPA 音標結論</div>
                      <div className="text-lg sm:text-xl font-mono font-bold text-emerald-300">{selectedWord.ipa}</div>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Section 1: 音節分割切分步驟 */}
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 space-y-3">
                      <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2 border-b border-blue-200 pb-2">
                        <Table className="w-4 h-4 text-blue-600" />
                        音節切分四部曲 (Syllable Steps)
                      </h3>
                      <div className="space-y-2 text-xs">
                        <div className="bg-white p-2.5 rounded border border-blue-200/80">
                          <span className="font-semibold text-slate-500 block">步驟 1：母音核心定位</span>
                          <span className="text-slate-900 font-bold">{selectedWord.syllableDetail?.vowelCore || '母音核心定位'}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded border border-blue-200/80">
                          <span className="font-semibold text-slate-500 block">步驟 2：鎖定複合子音</span>
                          <span className="text-slate-900 font-bold">{selectedWord.syllableDetail?.indivisibleRule || '不可拆子音鎖定'}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded border border-blue-200/80">
                          <span className="font-semibold text-slate-500 block">步驟 3：結構切分劃分 (VCV/VCCV)</span>
                          <span className="text-slate-900 font-bold">{selectedWord.syllableDetail?.structureRule || '結構切分'}</span>
                        </div>
                        <div className="bg-blue-100/80 p-2.5 rounded border border-blue-300 text-blue-900 font-semibold">
                          <span className="font-semibold text-blue-700 block">最終切分音節結果：</span>
                          {selectedWord.syllableText || selectedWord.syllable.join(' · ')}
                        </div>
                      </div>
                    </div>

                    {/* Section 2: 發音型態與規則推導 */}
                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-3">
                      <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2 border-b border-emerald-200 pb-2">
                        <Sliders className="w-4 h-4 text-emerald-600" />
                        發音型態與規則推導 (EPRS Reasoning)
                      </h3>
                      <div className="space-y-2 text-xs">
                        <div className="bg-white p-2.5 rounded border border-emerald-200/80">
                          <span className="font-semibold text-slate-500 block">各音節型態 (Pattern)：</span>
                          <span className="text-slate-900 font-bold">{selectedWord.steps.patternStep}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded border border-emerald-200/80">
                          <span className="font-semibold text-slate-500 block mb-1">觸發之發音規則 (EPRS Rules)：</span>
                          <div className="space-y-1 pl-1">
                            {selectedWord.steps.ruleStep.map((r, i) => (
                              <div key={i} className="text-blue-900 font-semibold border-l-2 border-blue-500 pl-2 py-0.5">
                                • {r}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-emerald-100/80 p-2.5 rounded border border-emerald-300 text-emerald-900 font-semibold">
                          <span className="font-semibold text-emerald-700 block">推導終端音標：</span>
                          {selectedWord.steps.ipaStep}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
                  查無此單字，請重新輸入單字。
                </div>
              )}
            </div>
          )}

          {/* TAB 2: 工具表一：音節切分四大黃金原則 */}
          {activeTab === 'SYLLABLE_RULES' && (
            <div className="space-y-4">
              <div className="bg-blue-900 text-white p-4 rounded-xl border border-blue-800">
                <h3 className="font-bold text-base">工具表一：自然發音音節切分四部曲 (Syllable Segmentation 4 Steps)</h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  所有未知單字均遵循「母音核心定位 → 複合子音鎖定 → 結構切分劃分 → 型態規則推導」四部曲，100% 可推導出音節邊界。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3 font-bold w-28">步驟階段</th>
                      <th className="p-3 font-bold w-40">核心法則</th>
                      <th className="p-3 font-bold">詳細操作說明與判定邏輯</th>
                      <th className="p-3 font-bold w-52">經典範例 (MOE 1200)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-blue-700">步驟 1：母音核心</td>
                      <td className="p-3 font-bold text-slate-900">找出發音母音核心</td>
                      <td className="p-3 leading-relaxed">
                        每個音節必有且僅有一個母音核心 (a, e, i, o, u, y / ai, ee, oa / ar, er 等)。字尾不發音 e 靜音不計為獨立核心。
                      </td>
                      <td className="p-3 font-mono text-emerald-700 font-bold">
                        cat [a], train [ai], agree [a]+[ee] (2音節)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-emerald-700">步驟 2：鎖定子音</td>
                      <td className="p-3 font-bold text-slate-900">標記不可拆子音組合</td>
                      <td className="p-3 leading-relaxed">
                        1. <b>不可拆複合子音</b> (sh, ch, th, ph, wh, ck, 字尾 ng [發單音 /ŋ/]) 與<b>子音叢</b> (gr, bl, cl, dr, st, pr, tr) 視為單一發音單位，切分音節時絕不可拆斷。<br />
                        <span className="text-amber-800 text-[11px] font-semibold">
                          ★ 核心辨析：字尾單一複合子音 ng (如 <i>sing, ring, song</i>) 不可拆；但字根內部相連雙子音 n + g (如 <i>kan·ga·roo, fin·ger, lan·guage, hun·gry</i>) 則遵循 VCCV 在 n 與 g 中間切分，前節 n 產生軟顎鼻音同化發 /ŋ/，後節 g 發 /ɡ/，拼合為 /ŋɡ/。
                        </span>
                      </td>
                      <td className="p-3 font-mono text-emerald-700 font-bold">
                        tea · cher (ch不拆)<br />
                        sing · er (字尾ng不拆 /ŋ/)<br />
                        kan · ga · roo (VCCV n+g拆分 /ŋɡ/)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-amber-700">步驟 3：結構切分</td>
                      <td className="p-3 font-bold text-slate-900">VCV 劃後 / 閉音留前 / VCCV 拆開</td>
                      <td className="p-3 leading-relaxed">
                        1. <b>VCV 結構（雙分流原則）</b>：<br />
                        &nbsp;&nbsp;• <b>(A) 開音節長音預設</b>：單子音劃歸後音節（V · CV，如 <i>o-pen, ti-ger, ba-by</i>）<br />
                        &nbsp;&nbsp;• <b>(B) 重讀短音閉音節修正</b>：首節為短母音時，子音留前封閉（VC · V，如 <i>hon-ey, sev-en, drag-on, rob-in</i>）<br />
                        2. <b>VCCV 結構</b>：相連雙子音從中間拆開（如 <i>bas-ket, doc-tor, hap-py</i>）<br />
                        3. <b>-Cle 結構</b>：字尾「子音 + le」獨立為成音節（如 <i>ap-ple, lit-tle, bot-tle</i>）<br />
                        4. <b>複合詞結構</b>：兩實詞字根在邊界處直接切分（如 <i>head-ache, bed-room</i>）
                      </td>
                      <td className="p-3 font-mono text-emerald-700 font-bold">
                        o · pen (長音劃後)<br />
                        hon · ey (短音留前)<br />
                        doc · tor (VCCV)<br />
                        head · ache (複合詞)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-purple-700">步驟 4：型態推導</td>
                      <td className="p-3 font-bold text-slate-900">音節型態與規則推導</td>
                      <td className="p-3 leading-relaxed">
                        依序判定各音節屬於閉音節 (R001)、開音節 (R002)、魔術 e (R003)、母音組合 (R004)、R控制 (R005) 或弱化音節 (R008/R012)。
                      </td>
                      <td className="p-3 font-mono text-emerald-700 font-bold">
                        eleven [e · lev · en] (3音節)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: 工具表二：17 條發音規則對照表 */}
          {activeTab === 'RULES' && (
            <div className="space-y-4">
              <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-base">工具表二：EPRS 17 條發音規則全代碼對照表 (R001 ~ R017)</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  涵蓋教育部 1200 常用字庫 95% 以上發音規律，100% 離線純規則庫。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3 font-bold w-20">代碼</th>
                      <th className="p-3 font-bold w-36">規則名稱</th>
                      <th className="p-3 font-bold">規則機制與說明</th>
                      <th className="p-3 font-bold w-40">典型美式 IPA</th>
                      <th className="p-3 font-bold w-52">範例單字</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {[
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
                      { code: 'R014', name: '美式音變 (Y脫落/閃音/弱化脫落 Syncope/鼻腔爆破)', desc: '1. <b>Y 脫落 (Yod-dropping)</b>：舌尖/流音後 u/ue/ew 省略 /j/ 直接發長音 /uː/<br/>2. <b>閃音 (Flap T)</b>：母音間非重音 t/d 轉為輕彈音 /t̬/<br/>3. <b>中音脫落 / 弱化脫落 (Syncope)</b>：非重讀音節母音弱化脫落，促使子音連讀 (如 <i>interest /ˈɪn.trɪst/, interesting, every, camera, family</i>)<br/>4. <b>t 脫落與同化</b>：非重讀音節中 /n/ 後的 /t/ 常脫落或同化 (如 <i>internet, interview, twenty</i>)<br/>5. <b>美式 -ary / -ery 次重音保留</b>：美式英語字尾保留次重音發 /ɛr.i/ (如 <i>January, library, dictionary</i>)', ipa: '/uː/ (Y脫落), /t̬/ (閃音), /tr/ (弱化脫落)', ex: 'tune, duty, blue<br/>water, better, city<br/>interest /ˈɪn.trɪst/<br/>interview /ˈɪn.t̬ɚ.vjuː/<br/>library /ˈlaɪ.brɛr.i/' },
                      { code: 'R015', name: '複合名詞重音', desc: '複合名詞主重音在第 1 部分，各部分各自保留母音', ipa: '首節主重音', ex: 'bedroom, classroom' },
                      { code: 'R016', name: '靜音子音', desc: '1. 首部靜音：kn- (k靜音), wr- (w靜音), gh- (h靜音)<br/>2. 尾部靜音：-mb (b靜音)<br/>3. 中間靜音：-alk/-alf/-alm (l靜音), -sten/-stle (t靜音)<br/>4. 保護靜音：gu- (u靜音保護g)', ipa: '不發音', ex: 'know, knee, write, wrong, ghost<br/>lamb, climb, bomb<br/>half, talk, walk, listen, castle<br/>guess, guide, guest' },
                      { code: 'R017', name: '歷史與外來語', desc: '法語或外來語留存之特殊拼音對應', ipa: '特例外來音', ex: 'police, machine, chef' },
                    ].map((r) => (
                      <tr key={r.code} className="hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-blue-700">{r.code}</td>
                        <td className="p-3 font-bold text-slate-900">{r.name}</td>
                        <td className="p-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: r.desc }} />
                        <td className="p-3 font-mono font-bold text-emerald-700">{r.ipa}</td>
                        <td className="p-3 font-mono text-slate-800" dangerouslySetInnerHTML={{ __html: r.ex }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: 工具表三：美式 IPA 母音子音速查矩陣 */}
          {activeTab === 'IPA_TABLE' && (
            <div className="space-y-6">
              <div className="bg-amber-900 text-white p-4 rounded-xl border border-amber-800">
                <h3 className="font-bold text-base">工具表三：美式 IPA 母音與子音速查矩陣</h3>
                <p className="text-xs text-amber-200 mt-0.5">
                  嚴謹標準美式音標分類，清晰對照自然發音字母組合與 1200 範例單字。
                </p>
              </div>

              {/* 母音表 */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-white px-4 py-2.5 font-bold text-xs">
                  美式母音分類速查表 (短母音 · 長母音 · 雙母音 · R控制母音)
                </div>
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="p-3 font-bold w-36">母音分類</th>
                      <th className="p-3 font-bold w-28">美式 IPA</th>
                      <th className="p-3 font-bold w-48">常見自然發音組合</th>
                      <th className="p-3 font-bold">範例單字 (MOE 1200)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {[
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
                      { cat: '長母音 (保留 /j/)', ipa: '/juː/', spell: 'u, u_e, ue, ew<br/><span className="text-[11px] text-slate-500">(唇音/喉音後: c, b, m, f, h)</span>', ex: 'cute, music, cube<br/>beauty, few, huge' },
                      { cat: '長母音 (美式 Y 脫落)', ipa: '/uː/', spell: '1. u_e, ue, ew, ui (舌尖/流音後)<br/>2. oo (長音字族)', ex: 'blue, glue, rule, flute, tune, suit<br/>food, moon, room, cool, fruit' },
                      { cat: '雙母音與其他', ipa: '/aʊ/', spell: 'ou, ow 組合', ex: 'house, mouse, cloud<br/>cow, now, town, brown' },
                      { cat: '雙母音與其他', ipa: '/ɔɪ/', spell: 'oi, oy 組合', ex: 'oil, coin, voice, point<br/>boy, toy, joy, enjoy' },
                      { cat: '雙母音與其他', ipa: '/ɔː/', spell: '1. au, aw 組合<br/>2. a (在 l 前，如 al, all)', ex: 'autumn, saw, draw, law<br/>all, ball, call, talk, walk' },
                      { cat: 'R 控制母音', ipa: '/ɝː/ 及 /ɚ/', spell: '1. 重音節: er, ir, ur, ear<br/>2. 非重音弱化: er, or, ar', ex: 'bird, girl, nurse, early<br/>teacher, sister, water, doctor' },
                      { cat: 'R 控制母音', ipa: '/ɑːr/', spell: 'ar 組合', ex: 'car, star, park, dark, yard, farm' },
                      { cat: 'R 控制母音', ipa: '/ɔːr/', spell: 'or, oar, oor, our 組合', ex: 'fork, short, morning<br/>door, floor, four, board' },
                      { cat: 'R 控制母音', ipa: '/ɪr/', spell: 'eer, ear, ere 組合', ex: 'deer, ear, hear, clear, here' },
                      { cat: 'R 控制母音', ipa: '/ɛr/', spell: '1. air, are 組合<br/>2. ear / ere (特例)', ex: 'chair, hair, care, share<br/>bear, wear, pear, there, where' },
                      { cat: '弱化輕母音', ipa: '/ə/ 及 /ɪ/', spell: '非重音音節之任意母音', ex: 'banana /bəˈnæn.ə/, open /ˈoʊ.pən/<br/>pencil /ˈpɛn.səl/, lemon /ˈlɛm.ən/' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-amber-900">{row.cat}</td>
                        <td className="p-3 font-mono font-bold text-emerald-700 text-sm">{row.ipa}</td>
                        <td className="p-3 text-slate-900" dangerouslySetInnerHTML={{ __html: row.spell }} />
                        <td className="p-3 font-mono text-slate-800" dangerouslySetInnerHTML={{ __html: row.ex }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 美式長母音 Y 脫落音變 (Yod-Dropping) 專題解說卡 */}
              <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 text-xs shadow-sm">
                <div className="flex items-center gap-2 font-bold text-amber-900 mb-1.5">
                  <span className="bg-amber-600 text-white text-[11px] px-2 py-0.5 rounded font-mono">美式發音核心音變</span>
                  <span>長母音 /juː/ 與 /uː/ 條件分流法則 (Yod-Dropping)</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  在標準美式英語自然發音中，母音字母 <b>u (含 u_e, ue, ew)</b> 的長音有兩種形式：
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2.5">
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <span className="font-bold text-emerald-800 block mb-1">1. 簡化為長母音 /uː/ (Y 脫落)</span>
                    <span className="text-slate-600 block">在<b>舌尖音、齒齦音、流音 (/l, r, d, t, s, z, n, θ/)</b> 之後，滑音 /j/ 自然省略脫落。</span>
                    <div className="mt-1 font-mono font-bold text-emerald-700 text-[11px]">
                      例：blue /bluː/, glue /ɡluː/, rule /ruːl/, flute /fluːt/, tune /tuːn/, duty /ˈduː.t̬i/, suit /suːt/, student /ˈstuː.dənt/
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <span className="font-bold text-blue-800 block mb-1">2. 保留長母音 /juː/</span>
                    <span className="text-slate-600 block">在<b>唇音、喉音、軟顎音 (/k, b, m, f, h, p/)</b> 之後，保留標準 /j/ 滑音。</span>
                    <div className="mt-1 font-mono font-bold text-blue-700 text-[11px]">
                      例：cute /kjuːt/, music /ˈmjuː.zɪk/, beauty /ˈbjuː.t̬i/, few /fjuː/, huge /hjuːdʒ/, use /juːz/
                    </div>
                  </div>
                </div>
              </div>

              {/* 子音表 */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-white px-4 py-2.5 font-bold text-xs">
                  美式子音發音速查 (有聲/無聲配對 · 鼻音 · 流音 · 美式音變)
                </div>
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="p-3 font-bold w-36">子音組別</th>
                      <th className="p-3 font-bold w-36">無聲 / 有聲 IPA</th>
                      <th className="p-3 font-bold w-40">對應字母拼寫</th>
                      <th className="p-3 font-bold">範例單字 (MOE 1200)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {[
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
                      { grp: '美式音變 (Flap T)', ipa: '/t/ 閃音 (輕彈音)', spell: '母音間非重音 t, tt, dd', ex: 'water, better, city, butter, letter' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-blue-900">{row.grp}</td>
                        <td className="p-3 font-mono font-bold text-emerald-700">{row.ipa}</td>
                        <td className="p-3 text-slate-900" dangerouslySetInnerHTML={{ __html: row.spell }} />
                        <td className="p-3 font-mono text-slate-800" dangerouslySetInnerHTML={{ __html: row.ex }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 屈折語尾發音與增音音節速查表 (-s/-es, -ed, -ing) */}
              <div className="bg-white rounded-xl border border-indigo-200 overflow-hidden shadow-sm">
                <div className="bg-indigo-950 text-white px-4 py-2.5 font-bold text-xs flex items-center justify-between">
                  <span>屈折詞尾變化發音與增音音節速查表 (-s / -es 複數及三單 · -ed 過去式 · -ing)</span>
                  <span className="text-[11px] font-mono bg-indigo-900 px-2 py-0.5 rounded text-indigo-200">100% 語音同化與音節增減邏輯</span>
                </div>
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-indigo-50 text-indigo-950">
                    <tr>
                      <th className="p-3 font-bold w-32">字尾類型</th>
                      <th className="p-3 font-bold w-48">前接音標條件</th>
                      <th className="p-3 font-bold w-32">音節變化</th>
                      <th className="p-3 font-bold w-24">IPA 發音</th>
                      <th className="p-3 font-bold">經典範例 (MOE 1200)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-100 text-slate-700">
                    <tr className="hover:bg-indigo-50/50 bg-indigo-50/20">
                      <td className="p-3 font-bold text-indigo-900" rowSpan={3}><b>-s / -es</b><br/><span className="text-[11px] text-slate-500 font-normal">(複數 / 第三稱單數)</span></td>
                      <td className="p-3 font-semibold text-slate-900"><b>噝音結尾</b><br/><span className="text-slate-500 text-[11px]">/s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/</span></td>
                      <td className="p-3 font-bold text-indigo-700 bg-indigo-100/50">+1 獨立音節</td>
                      <td className="p-3 font-mono font-bold text-emerald-700 text-sm">/-ɪz/</td>
                      <td className="p-3 font-mono text-slate-800"><b>glasses</b> /ˈɡlæs.ɪz/, <b>watches</b> /ˈwɑː.tʃɪz/, <b>boxes</b> /ˈbɑːk.sɪz/, <b>pages</b> /ˈpeɪ.dʒɪz/, <b>dishes</b> /ˈdɪʃ.ɪz/</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50">
                      <td className="p-3 font-semibold text-slate-900"><b>無聲清子音結尾 (非噝音)</b><br/><span className="text-slate-500 text-[11px]">/p/, /t/, /k/, /f/, /θ/</span></td>
                      <td className="p-3 font-semibold text-slate-500">不增加音節</td>
                      <td className="p-3 font-mono font-bold text-emerald-700 text-sm">/-s/</td>
                      <td className="p-3 font-mono text-slate-800"><b>cups</b> /kʌps/, <b>cats</b> /kæts/, <b>books</b> /bʊks/, <b>cliffs</b> /klɪfs/</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50">
                      <td className="p-3 font-semibold text-slate-900"><b>有聲濁子音或母音結尾</b><br/><span className="text-slate-500 text-[11px]">/b, d, ɡ, v, ð, m, n, ŋ, l, r/ 及母音</span></td>
                      <td className="p-3 font-semibold text-slate-500">不增加音節</td>
                      <td className="p-3 font-mono font-bold text-emerald-700 text-sm">/-z/</td>
                      <td className="p-3 font-mono text-slate-800"><b>dogs</b> /dɔːɡz/, <b>beds</b> /bɛdz/, <b>days</b> /deɪz/, <b>trees</b> /triːz/, <b>cars</b> /kɑːrz/</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50 bg-indigo-50/20">
                      <td className="p-3 font-bold text-indigo-900" rowSpan={3}><b>-ed</b><br/><span className="text-[11px] text-slate-500 font-normal">(過去式 / 過去分詞)</span></td>
                      <td className="p-3 font-semibold text-slate-900"><b>/t/ 或 /d/ 齒齦塞音結尾</b></td>
                      <td className="p-3 font-bold text-indigo-700 bg-indigo-100/50">+1 獨立音節</td>
                      <td className="p-3 font-mono font-bold text-emerald-700 text-sm">/-ɪd/</td>
                      <td className="p-3 font-mono text-slate-800"><b>wanted</b> /ˈwɑːn.tɪd/, <b>needed</b> /ˈniː.dɪd/, <b>waited</b> /ˈweɪ.tɪd/, <b>decided</b> /dɪˈsaɪ.dɪd/</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50">
                      <td className="p-3 font-semibold text-slate-900"><b>無聲清子音結尾 (非/t/)</b><br/><span className="text-slate-500 text-[11px]">/p/, /k/, /f/, /s/, /ʃ/, /tʃ/, /θ/</span></td>
                      <td className="p-3 font-semibold text-slate-500">不增加音節</td>
                      <td className="p-3 font-mono font-bold text-emerald-700 text-sm">/-t/</td>
                      <td className="p-3 font-mono text-slate-800"><b>stopped</b> /stɑːpt/, <b>cooked</b> /kʊkt/, <b>kissed</b> /kɪst/, <b>washed</b> /wɑːʃt/</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50">
                      <td className="p-3 font-semibold text-slate-900"><b>有聲濁子音或母音結尾 (非/d/)</b><br/><span className="text-slate-500 text-[11px]">/b, ɡ, v, z, ʒ, dʒ, m, n, ŋ, l, r/ 及母音</span></td>
                      <td className="p-3 font-semibold text-slate-500">不增加音節</td>
                      <td className="p-3 font-mono font-bold text-emerald-700 text-sm">/-d/</td>
                      <td className="p-3 font-mono text-slate-800"><b>played</b> /pleɪd/, <b>cleaned</b> /kliːnd/, <b>lived</b> /lɪvd/, <b>opened</b> /ˈoʊ.pənd/</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50">
                      <td className="p-3 font-bold text-indigo-900"><b>-ing</b><br/><span className="text-[11px] text-slate-500 font-normal">(進行式 / 動名詞)</span></td>
                      <td className="p-3 font-semibold text-slate-900"><b>任意動詞字尾</b></td>
                      <td className="p-3 font-bold text-indigo-700 bg-indigo-100/50">+1 獨立音節</td>
                      <td className="p-3 font-mono font-bold text-emerald-700 text-sm">/-ɪŋ/</td>
                      <td className="p-3 font-mono text-slate-800"><b>going</b> /ˈɡoʊ.ɪŋ/, <b>doing</b> /ˈduː.ɪŋ/, <b>eating</b> /ˈiː.tɪŋ/, <b>playing</b> /ˈpleɪ.ɪŋ/</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: 工具表四：1200 字庫例外單字速查表 */}
          {activeTab === 'EXCEPTIONS' && (
            <div className="space-y-4">
              <div className="bg-red-900 text-white p-4 rounded-xl border border-red-800">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base">工具表四：教育部 1200 字庫發音例外單字速查表 (共 {allExceptions.length} 字全收錄)</h3>
                  <span className="bg-red-950 px-2.5 py-1 rounded text-xs font-mono font-bold text-red-200">
                    已顯示 {filteredExceptions.length} 個單字
                  </span>
                </div>
                <p className="text-xs text-red-200 mt-0.5">
                  依規則類別歸納，規則內單字一律按 A-Z 嚴謹排序，字音對齊，100% 離線推理。
                </p>
              </div>

              {/* 搜尋與過濾列 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-1 w-full">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="搜尋例外單字、中文意思或 IPA 音標 (例如: son, have, bread)..."
                      value={exceptionSearch}
                      onChange={(e) => setExceptionSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900"
                    />
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter className="w-4 h-4 text-slate-500" />
                    <select
                      value={exceptionFilterCategory}
                      onChange={(e) => setExceptionFilterCategory(e.target.value)}
                      className="w-full sm:w-auto px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:outline-none"
                    >
                      {categoriesList.map(cat => (
                        <option key={cat} value={cat}>
                          {cat === 'ALL' ? '全部例外分類' : cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 字母 A-Z 快速篩選按鈕 */}
                <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-600 mr-2">字母速查：</span>
                  <button
                    onClick={() => setSelectedLetter('ALL')}
                    className={`px-2 py-1 rounded text-xs font-bold cursor-pointer transition-colors ${
                      selectedLetter === 'ALL'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    全部
                  </button>
                  {uniqueLetters.map(l => (
                    <button
                      key={l}
                      onClick={() => setSelectedLetter(l)}
                      className={`px-2 py-1 rounded text-xs font-bold font-mono cursor-pointer transition-colors ${
                        selectedLetter === l
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* 例外單字分類展示表 */}
              <div className="space-y-4">
                {groupedFilteredExceptions.length > 0 ? (
                  groupedFilteredExceptions.map(([catName, words]) => {
                    const sortedWords = [...words].sort((a, b) => a.word.localeCompare(b.word));
                    return (
                      <div key={catName} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
                          <span className="font-bold text-xs text-amber-300">{catName}</span>
                          <span className="text-[11px] text-slate-400 font-mono">共 {words.length} 個單字</span>
                        </div>
                        <div className="p-4">
                          <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border-l-4 border-amber-500 mb-3">
                            {words[0]?.exceptionReason || '發音例外說明'}
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                            {sortedWords.map(w => (
                              <div
                                key={w.id}
                                onClick={() => {
                                  setSelectedWord(w);
                                  setActiveTab('TOOL');
                                }}
                                className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 p-2.5 rounded-lg cursor-pointer transition-all flex items-center justify-between"
                                title="點擊檢視推導步驟"
                              >
                                <div>
                                  <div className="font-bold text-slate-900 text-xs">{w.word}</div>
                                  <div className="text-[11px] text-slate-500">{w.chinese}</div>
                                </div>
                                <div className="text-right">
                                  <div className="font-mono text-emerald-700 font-bold text-xs">{w.ipa}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
                    無符合條件之例外單字。
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 6: 推導判斷流程圖 */}
          {activeTab === 'FLOW' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 rounded-xl shadow-sm border border-blue-800">
                <h3 className="text-base font-bold text-white">EPRS 自然發音與 IPA 音標推導 4 階段標準判斷流程</h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  本系統遵循 100% 離線可驗證推理鏈，嚴格經由音節劃分、型態判定、規則對照與音標組裝 4 大步驟。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm space-y-2">
                  <div className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded inline-block">
                    階段 1：音節切分劃分
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">1. 音節結構邊界劃分</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                    <li>• <b>數母音核心：</b>找出單母音及雙母音組合 (a, e, i, o, u, ea, ee等)，確定總音節數。</li>
                    <li>• <b>保護不可拆組合：</b>sh, ch, th, ph, ck 及子音叢 (gr, bl, cl等) 嚴禁拆斷。</li>
                    <li>• <b>結構切分：</b>VCCV 夾雙子音拆中間 (bas-ket)；VCV 夾單子音向前/向後切 (stu-dent, a-gree)。</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm space-y-2">
                  <div className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded inline-block">
                    階段 2：發音型態判定
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">2. 判定各音節結構型態</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                    <li>• <b>魔術 e (Magic e)：</b>V+C+e，尾 e 靜音、母音發長音 (make, home)。</li>
                    <li>• <b>母音組合 (Vowel Team)：</b>ea, ee, ai 發固定長音/雙母音 (rain, agree)。</li>
                    <li>• <b>R 控制母音：</b>ar, er, ir, or, ur 捲舌組合 (car, teacher)。</li>
                    <li>• <b>開/閉音節：</b>開音節發長音 (go)；閉音節發短音 (cat, bed)。</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm space-y-2">
                  <div className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded inline-block">
                    階段 3：規則匹配與音變
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">3. 規則核對與音變調整</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                    <li>• <b>歷史例外優先 (R010)：</b>核對 have, give, live 等歷史高頻例外字。</li>
                    <li>• <b>非重音弱化 (R008)：</b>多音節非重音節母音弱化為輕母音 /ə/ 或 /ɪ/。</li>
                    <li>• <b>綁定規則代碼：</b>分配對應 R001~R017 規則演算法與邏輯鏈。</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm space-y-2">
                  <div className="bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded inline-block">
                    階段 4：美式 IPA 音標輸出
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">4. 組裝完整標準 IPA 音標</h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                    <li>• <b>子音母音拼裝：</b>將各音節子音、母音對應至美式國際音標 (IPA)。</li>
                    <li>• <b>重音標記定位：</b>標註主重音符號 (ˈ) 與次重音符號 (ˌ)。</li>
                    <li>• <b>完成輸出：</b>輸出如 agree 推導為 /əˈɡriː/，100% 可驗證推導鏈。</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 shrink-0">
          <div>EPRS 英文發音知識系統 © 2026 | 100% 離線可驗證推論引擎</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            關閉工具表
          </button>
        </div>

      </div>
    </div>
  );
}
