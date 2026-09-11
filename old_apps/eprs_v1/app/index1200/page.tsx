'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Layers, 
  FileText, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Search,
  Volume2,
  Smartphone,
  ExternalLink,
  Zap,
  HardDrive
} from 'lucide-react';
import { allBatchData } from '@/lib/batch01Data';
import { seniorBatch01Words } from '@/lib/seniorBatch01Data';
import { audioManager, AudioStatus } from '@/lib/audioManager';
import SyllableIpaMatrixModal from '@/components/SyllableIpaMatrixModal';

export default function Index1200Page() {
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'senior' | 'moe1200'>('senior');
  const [audioStatus, setAudioStatus] = useState<AudioStatus>(audioManager.getStatus());

  useEffect(() => {
    return audioManager.subscribe(setAudioStatus);
  }, []);

  const batchMeta = [
    { batch: 1, range: '001 - 100', startWord: 'a', endWord: 'be', desc: '冠詞、基礎開閉音節、母音字母名發音 (CV, CVC)' },
    { batch: 2, range: '101 - 200', startWord: 'beach', endWord: 'close', desc: '母音組合 (ea, ee, oa)、軟硬子音 (c, g)、魔術 e (V_e)' },
    { batch: 3, range: '201 - 300', startWord: 'clothes', endWord: 'elephant', desc: 'R 控制母音 (ar, er, or)、-old/-all 特殊字族、多音節弱化' },
    { batch: 4, range: '301 - 400', startWord: 'eleven', endWord: 'funny', desc: '靜音子音 (gh, g)、複合詞重音、前綴弱化 (ex-, en-)' },
    { batch: 5, range: '401 - 500', startWord: 'game', endWord: 'husband', desc: '軟硬子音 g、-igh/-ind 字族、成音節字尾 (-le)' },
    { batch: 6, range: '501 - 600', startWord: 'I', endWord: 'lie', desc: '單字母核心詞、雙母音 (oi, oy, ou, ow)、不規則動詞' },
    { batch: 7, range: '601 - 700', startWord: 'life', endWord: 'mouth', desc: '複合子音 (th, sh, ch, wh)、多音節派生詞' },
    { batch: 8, range: '701 - 800', startWord: 'move', endWord: 'plan', desc: '特殊母音例外、多音節複合名詞重音推導' },
    { batch: 9, range: '801 - 900', startWord: 'plane', endWord: 'seem', desc: '字尾魔術 e 規律、母音組合長母音鏈' },
    { batch: 10, range: '901 - 1000', startWord: 'seldom', endWord: 'summer', desc: '非重音母音弱化 /ə/ /ɪ/、雙寫子音閉音節' },
    { batch: 11, range: '1001 - 1100', startWord: 'sun', endWord: 'twice', desc: '字尾 -tion/-sion、數字與序數複合推導' },
    { batch: 12, range: '1101 - 1200', startWord: 'two', endWord: 'zoo', desc: '外來語特例、高頻終端單字總結驗證' }
  ];

  const seniorBatches = [
    { batch: 1, range: '001 - 100', startWord: 'a', endWord: 'board', desc: '開閉音節、母音組合、雙音節複合重音與字首弱化' },
    { batch: 2, range: '101 - 200', startWord: 'body', endWord: 'cousin', desc: '複合子音 ch/sh/ph、魔術 e、R 控制母音及弱化' },
    { batch: 3, range: '201 - 300', startWord: 'cover', endWord: 'error', desc: '多音節重音、開音節長母音、前綴弱化 con-/de-' },
    { batch: 4, range: '301 - 400', startWord: 'escape', endWord: 'gas', desc: '軟硬子音 c/g、不發音字母、字尾 -tion/-sion' },
    { batch: 5, range: '401 - 500', startWord: 'gather', endWord: 'invent', desc: '雙子音閉音節、母音團隊 ea/ee/oa、複合詞' },
    { batch: 6, range: '501 - 600', startWord: 'invest', endWord: 'major', desc: '重音前綴、R 控制 er/ir/ur、非重音輕母音' },
    { batch: 7, range: '601 - 700', startWord: 'majority', endWord: 'oxygen', desc: '外來語音變、多音節倒數第二音節重音、弱化' },
    { batch: 8, range: '701 - 800', startWord: 'pace', endWord: 'pride', desc: '字尾魔術 e、開音節長母音 a_e/i_e/o_e/u_e' },
    { batch: 9, range: '801 - 900', startWord: 'primary', endWord: 'repeat', desc: '多音節動詞與名詞重音切換、字首 re-/dis-' },
    { batch: 10, range: '901 - 1000', startWord: 'replace', endWord: 'scene', desc: '第一級終端精選、母音弱化 /ə/ /ɪ/、成音節' },
    { batch: 11, range: '1001 - 1100', startWord: 'scenery', endWord: 'surround', desc: '第二級起點、多音節非重讀前綴弱化 (R012) 優先判定' },
    { batch: 12, range: '1101 - 1200', startWord: 'survey', endWord: 'zone', desc: '第二級精選、雙音節名動同形重音對立與弱化' }
  ];

  const ruleList = [
    { code: 'R001', name: '閉音節 (Closed)', desc: '子音封閉母音發短音 (/æ/, /ɛ/, /ɪ/, /ɑː/, /ʌ/)' },
    { code: 'R002', name: '開音節 (Open)', desc: '母音結尾發字母本名長音 (/eɪ/, /iː/, /aɪ/, /oʊ/, /juː/)' },
    { code: 'R003', name: '魔術 e (Magic e)', desc: '字尾 e 靜音使主要母音發長音 (V_e)' },
    { code: 'R004', name: '母音組合 (Vowel Teams)', desc: '常見雙母音/母音字母組合 (ai, ay, ee, ea, oa, oo...)' },
    { code: 'R005', name: 'R 控制母音 (R-Controlled)', desc: '母音接 r 發捲舌音 (ar, er, ir, or, ur, air, ear)' },
    { code: 'R006', name: '複合子音 (Consonant Digraphs)', desc: '固定子音組合 (sh, ch, th, ph, wh, ng, ck)' },
    { code: 'R007', name: '軟硬子音 (Soft/Hard c, g)', desc: 'c/g 在 e, i, y 前發軟音 (/s/, /dʒ/)，其餘發硬音 (/k/, /ɡ/)' },
    { code: 'R008', name: '非重音母音弱化 (Schwa)', desc: '多音節非重讀母音弱化發 /ə/ 或 /ɪ/' },
    { code: 'R009', name: '靜符子音 (Silent Letters)', desc: 'kn-, wr-, -mb, -bt, -gn, -lk 等歷史遺留不發音字母' },
    { code: 'R010', name: '例外音標字 (Exceptions)', desc: '借詞、歷史音變、拼寫不合常規字 (debt, island, laugh)' },
    { code: 'R011', name: '詞綴與構詞 (Morphology)', desc: '-tion/-sion, -ture, -ous, -ly, un-, re-, dis-' },
    { code: 'R012', name: '非重讀前綴弱化 (Prefix)', desc: 'ac-, ad-, af-, con-, de- 等非重讀前綴弱化 /ə/ 或 /ɪ/' },
    { code: 'R013', name: '成音節字尾 (Consonant + le)', desc: '字尾 -ble, -cle, -dle, -tle 自成獨立輕音節 (/bəl/, /təl/)' }
  ];

  const handlePlayWord = (word: string) => {
    audioManager.play(word);
  };

  const filteredData = searchTerm.trim() 
    ? allBatchData.filter(w => 
        w.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
        w.chinese.includes(searchTerm) ||
        w.ipa.includes(searchTerm) ||
        w.id.toString() === searchTerm.trim()
      ).slice(0, 30)
    : [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-12">
      {/* Top Navigation - Mobile Optimized */}
      <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link 
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline">主工作台</span>
              <span className="sm:hidden">返回</span>
            </Link>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-bold text-white tracking-tight">
                手機版速查入口
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/offline"
              className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
              title="開啟 100% 離線靜態網站專區"
            >
              <HardDrive className="w-3.5 h-3.5" />
              <span>離線版</span>
            </Link>

            <button
              onClick={() => setIsMatrixModalOpen(true)}
              className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>規則表</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile Friendly */}
      <section className="bg-gradient-to-b from-slate-900 via-indigo-950/30 to-slate-950 border-b border-slate-800/80 py-6 sm:py-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-indigo-900/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            EPRS 手機版專屬快速入口
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            單字與發音規則速查
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            專為手機與行動裝置打造，支援一鍵美式真人發音、批次切換、音節拆解與 13 大自然發音規則速查。
          </p>

          {/* Dataset Switch Tabs */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <button
              onClick={() => setActiveTab('senior')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'senior'
                  ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400/40'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              高中詞彙 (B01-12)
            </button>
            <button
              onClick={() => setActiveTab('moe1200')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'moe1200'
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400/40'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              國中 1200 (B01-12)
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">

        {/* Quick Search */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-indigo-400" />
                單字即時搜尋與發音
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">輸入英文、中文或序號直接過濾</p>
            </div>
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜尋單字 (如: student, cat)..."
                className="w-full bg-slate-950 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-indigo-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-white"
                >
                  清除
                </button>
              )}
            </div>
          </div>

          {searchTerm.trim() && (
            <div className="border-t border-slate-800 pt-3 mt-2">
              <div className="text-xs font-semibold text-slate-400 mb-2">
                搜尋結果 (顯示前 30 筆)：
              </div>
              {filteredData.length === 0 ? (
                <p className="text-sm text-slate-500 py-3 text-center">無符合單字</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {filteredData.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex items-start justify-between gap-2"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-500 font-mono">#{item.id}</span>
                          <button
                            onClick={() => handlePlayWord(item.word)}
                            className="font-bold text-white text-base hover:text-indigo-400 transition-colors cursor-pointer truncate"
                          >
                            {item.word}
                          </button>
                          <button
                            onClick={() => handlePlayWord(item.word)}
                            className="p-1 rounded text-indigo-400 hover:bg-indigo-950 cursor-pointer"
                            title="點擊發音"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {item.chinese} · <span className="font-mono text-emerald-400">{item.ipa}</span>
                        </div>
                        <div className="text-[11px] text-blue-300 mt-0.5 truncate">
                          音節: {item.syllableDetail?.header || item.syllableText}
                        </div>
                      </div>
                      <Link
                        href={`/report/${item.batch}`}
                        className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 bg-indigo-950 px-2.5 py-1 rounded border border-indigo-800/60 shrink-0 self-center"
                      >
                        B{item.batch}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Batches Grid by Active Tab */}
        {activeTab === 'senior' ? (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base sm:text-lg font-bold text-emerald-400 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                高中詞彙 (第一級 & 第二級) 12 批次速查
              </h2>
              <span className="text-xs text-slate-400">共 1,200 字</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {seniorBatches.map((b) => (
                <div 
                  key={b.batch}
                  className="bg-slate-900/90 border border-emerald-900/50 hover:border-emerald-500 rounded-xl p-3.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="bg-emerald-950 text-emerald-300 text-xs font-bold px-2 py-0.5 rounded border border-emerald-800/60">
                        Senior B{String(b.batch).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{b.range}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 truncate">
                      <span className="text-emerald-300">{b.startWord}</span>
                      <span className="text-slate-500 text-xs mx-1">~</span>
                      <span className="text-emerald-300">{b.endWord}</span>
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                      {b.desc}
                    </p>
                  </div>
                  <Link
                    href={`/report/senior-${b.batch}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    查看推導報表 (B{String(b.batch).padStart(2, '0')})
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base sm:text-lg font-bold text-blue-400 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                國中 1200 常用字 12 批次速查
              </h2>
              <span className="text-xs text-slate-400">共 1,200 字</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {batchMeta.map((b) => (
                <div 
                  key={b.batch}
                  className="bg-slate-900/90 border border-blue-900/50 hover:border-blue-500 rounded-xl p-3.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="bg-blue-950 text-blue-300 text-xs font-bold px-2 py-0.5 rounded border border-blue-800/60">
                        MOE B{String(b.batch).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{b.range}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 truncate">
                      <span className="text-blue-300">{b.startWord}</span>
                      <span className="text-slate-500 text-xs mx-1">~</span>
                      <span className="text-blue-300">{b.endWord}</span>
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                      {b.desc}
                    </p>
                  </div>
                  <Link
                    href={`/report/${b.batch}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    查看推導報表 (B{String(b.batch).padStart(2, '0')})
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 13 Phonics Rules Quick Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              13 大自然發音核心規則速查
            </h2>
            <button
              onClick={() => setIsMatrixModalOpen(true)}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
            >
              完整矩陣 ➔
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {ruleList.map((r) => (
              <div 
                key={r.code}
                className="bg-slate-950/60 border border-slate-800/90 rounded-xl p-3"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-extrabold text-amber-400 font-mono">{r.code}</span>
                  <span className="text-xs font-bold text-slate-200">{r.name}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-slate-500">
        <p>EPRS (English Pronunciation Reasoning System) · 手機版發音與單字速查入口</p>
      </footer>

      {/* Modal */}
      <SyllableIpaMatrixModal 
        isOpen={isMatrixModalOpen}
        onClose={() => setIsMatrixModalOpen(false)}
      />
    </div>
  );
}
