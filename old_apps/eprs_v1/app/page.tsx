'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { allBatchData, BatchWord } from '@/lib/batch01Data';
import { seniorBatch01Words, SeniorBatchWord } from '@/lib/seniorBatch01Data';
import { seniorBatch02Words } from '@/lib/seniorBatch02Data';
import { seniorBatch03Words } from '@/lib/seniorBatch03Data';
import { seniorBatch04Words } from '@/lib/seniorBatch04Data';
import { seniorBatch05Words } from '@/lib/seniorBatch05Data';
import { seniorBatch06Words } from '@/lib/seniorBatch06Data';
import { seniorBatch07Words } from '@/lib/seniorBatch07Data';
import { seniorBatch08Words } from '@/lib/seniorBatch08Data';
import { seniorBatch09Words } from '@/lib/seniorBatch09Data';
import { seniorBatch10Words } from '@/lib/seniorBatch10Data';
import { seniorBatch11Words } from '@/lib/seniorBatch11Data';
import { seniorBatch12Words } from '@/lib/seniorBatch12Data';
import * as XLSX from 'xlsx';
import SyllableIpaMatrixModal from '@/components/SyllableIpaMatrixModal';
import RuleDetailModal from '@/components/RuleDetailModal';
import QuickPracticeModal from '@/components/QuickPracticeModal';
import VersionControlModal from '@/components/VersionControlModal';
import { extractRuleCodes } from '@/lib/phonicsRules';
import { audioManager, AudioStatus } from '@/lib/audioManager';
import { 
  Search, 
  CheckCircle2, 
  RotateCcw,
  FileSpreadsheet,
  ExternalLink,
  Layers,
  Filter,
  BookOpen,
  Zap,
  Volume2,
  GraduationCap,
  GitBranch,
  Smartphone,
  HardDrive
} from 'lucide-react';

export default function EPRSReportPage() {
  const [dataset, setDataset] = useState<'moe1200' | 'senior'>('senior');
  const [selectedBatch, setSelectedBatch] = useState<number>(12); // 1 = Batch 01, ..., 12 = Batch 12, 0 = All
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedFamily, setSelectedFamily] = useState<string>('ALL');
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState<boolean>(false);
  const [isVersionModalOpen, setIsVersionModalOpen] = useState<boolean>(false);
  const [activeRuleModalCode, setActiveRuleModalCode] = useState<string | null>(null);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState<boolean>(false);
  const [practiceUnit, setPracticeUnit] = useState<number>(1);
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [audioStatus, setAudioStatus] = useState<AudioStatus>({
    state: 'idle',
    word: null,
    message: ''
  });
  const [fontScale, setFontScale] = useState<number>(1.15);
  const [showFontToolbar, setShowFontToolbar] = useState<boolean>(true);

  // Subscribe to unified audio manager
  useEffect(() => {
    return audioManager.subscribe((status) => {
      setAudioStatus(status);
      setPlayingWord(status.word);
    });
  }, []);

  const handleOpenRuleModal = (ruleText: string) => {
    const codes = extractRuleCodes(ruleText);
    if (codes.length > 0) {
      setActiveRuleModalCode(codes[0]);
    } else {
      // Look for common rule keywords
      if (ruleText.includes('閉音節')) setActiveRuleModalCode('R001');
      else if (ruleText.includes('開音節')) setActiveRuleModalCode('R002');
      else if (ruleText.includes('魔術 e') || ruleText.includes('Magic-e')) setActiveRuleModalCode('R003');
      else if (ruleText.includes('母音組合') || ruleText.includes('雙母音')) setActiveRuleModalCode('R004');
      else if (ruleText.includes('R 控制') || ruleText.includes('R-Controlled')) setActiveRuleModalCode('R005');
      else if (ruleText.includes('複合子音') || ruleText.includes('Digraph')) setActiveRuleModalCode('R006');
      else if (ruleText.includes('子音叢') || ruleText.includes('Blend')) setActiveRuleModalCode('R007');
      else if (ruleText.includes('非重讀') || ruleText.includes('弱化') || ruleText.includes('Schwa')) setActiveRuleModalCode('R008');
      else if (ruleText.includes('軟硬 C') || ruleText.includes('軟硬 G')) setActiveRuleModalCode('R009');
      else if (ruleText.includes('特例') || ruleText.includes('例外')) setActiveRuleModalCode('R010');
      else setActiveRuleModalCode('R001');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedScale = localStorage.getItem('eprs_font_scale');
        if (savedScale) {
          const val = parseFloat(savedScale);
          if (!isNaN(val) && val >= 1.0 && val <= 3.0) {
            setFontScale(val);
          }
        }
        const savedHidden = localStorage.getItem('eprs_font_toolbar_hidden');
        if (savedHidden !== null) {
          setShowFontToolbar(savedHidden !== 'true');
        }
      } catch {}
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleFontScaleChange = (scale: number) => {
    setFontScale(scale);
    try {
      localStorage.setItem('eprs_font_scale', String(scale));
    } catch {}
  };

  const speakWord = async (word: string) => {
    if (audioManager.isBusy()) return;
    await audioManager.play(word);
  };

  // Total batches count for current dataset
  const totalBatches = dataset === 'senior' ? 12 : Math.ceil(allBatchData.length / 100);

  const currentBatchWords = useMemo(() => {
    if (dataset === 'senior') {
      if (selectedBatch === 12) return seniorBatch12Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 11) return seniorBatch11Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 10) return seniorBatch10Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 9) return seniorBatch09Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 8) return seniorBatch08Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 7) return seniorBatch07Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 6) return seniorBatch06Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 5) return seniorBatch05Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 4) return seniorBatch04Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 3) return seniorBatch03Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 2) return seniorBatch02Words as (BatchWord & { pos?: string })[];
      if (selectedBatch === 0) return [...seniorBatch01Words, ...seniorBatch02Words, ...seniorBatch03Words, ...seniorBatch04Words, ...seniorBatch05Words, ...seniorBatch06Words, ...seniorBatch07Words, ...seniorBatch08Words, ...seniorBatch09Words, ...seniorBatch10Words, ...seniorBatch11Words, ...seniorBatch12Words] as (BatchWord & { pos?: string })[];
      return seniorBatch01Words as (BatchWord & { pos?: string })[];
    }
    if (selectedBatch === 0) return allBatchData;
    return allBatchData.filter((w) => w.batch === selectedBatch);
  }, [dataset, selectedBatch]);

  const filteredWords = useMemo(() => {
    return currentBatchWords.filter((w) => {
      // 1. 文字/語意搜尋
      const matchesSearch = 
        w.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.chinese.includes(searchTerm) ||
        w.ipa.includes(searchTerm) ||
        w.id.toString() === searchTerm ||
        w.steps.ruleStep.some(r => r.includes(searchTerm)) ||
        (w.steps.derivations && w.steps.derivations.some(d => d.rule.includes(searchTerm) || d.reason.includes(searchTerm)));

      if (!matchesSearch) return false;

      // 2. 音節數/快捷分類過濾
      if (selectedCategory === 'MONO' && w.syllable.length !== 1) return false;
      if (selectedCategory === 'MULTI' && w.syllable.length <= 1) return false;
      if (selectedCategory === 'MAGIC_E' && !w.steps.ruleStep.some(r => r.includes('魔術 e'))) return false;
      if (selectedCategory === 'VOWEL_TEAM' && !w.steps.ruleStep.some(r => r.includes('母音組合'))) return false;
      if (selectedCategory === 'R_CONTROL' && !w.steps.ruleStep.some(r => r.includes('R 控制'))) return false;
      if (selectedCategory === 'EXCEPTION' && !w.isException && !w.steps.ruleStep.some(r => r.includes('例外'))) return false;

      // 3. EPRS 發音家族下拉式選單精準過濾
      if (selectedFamily === 'MAGIC_E' && !w.steps.ruleStep.some(r => r.includes('魔術 e'))) return false;
      if (selectedFamily === 'VOWEL_TEAM' && !w.steps.ruleStep.some(r => r.includes('母音組合'))) return false;
      if (selectedFamily === 'R_CONTROL' && !w.steps.ruleStep.some(r => r.includes('R 控制'))) return false;
      if (selectedFamily === 'OPEN_SYLLABLE' && !w.steps.ruleStep.some(r => r.includes('開音節'))) return false;
      if (selectedFamily === 'CLOSED_SYLLABLE' && !w.steps.ruleStep.some(r => r.includes('閉音節'))) return false;
      if (selectedFamily === 'ANCE_ENDING' && !/ance$|ence$/i.test(w.word)) return false;
      if (selectedFamily === 'TION_ENDING' && !/tion$|sion$/i.test(w.word)) return false;
      if (selectedFamily === 'SYLLABIC_L' && !/ble$|tle$|ple$|cle$|dle$|gle$/i.test(w.word)) return false;
      if (selectedFamily === 'CONSONANT_DIGRAPH' && !w.steps.ruleStep.some(r => r.includes('複合子音'))) return false;
      if (selectedFamily === 'EXCEPTION' && !w.steps.ruleStep.some(r => r.includes('例外'))) return false;

      return true;
    });
  }, [currentBatchWords, searchTerm, selectedCategory, selectedFamily]);

  const currentBatchNum = selectedBatch === 0 ? 1 : selectedBatch;
  const handleDownloadExcel = () => {
    const dataToExport = filteredWords.map((item) => ({
      '序號': item.id,
      '單字': item.word,
      '中文': item.chinese,
      '音節分割標題': item.syllableDetail?.header || item.syllableText,
      '母音核心說明': item.syllableDetail?.vowelCore || '',
      '音節結構切分': item.syllableDetail?.structureRule || '',
      '不可拆組合說明': item.syllableDetail?.indivisibleRule || '',
      '美式音標': item.ipa,
      '1. 發音型態': item.steps.patternStep,
      '2. 發音規則說明': item.steps.ruleStep.join('\n'),
      '3. 音標推導結論': item.steps.ipaStep,
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);

    // Set column widths for beautiful layout in Excel
    worksheet['!cols'] = [
      { wch: 8 },  // 序號
      { wch: 15 }, // 單字
      { wch: 12 }, // 中文
      { wch: 20 }, // 音節分割標題
      { wch: 28 }, // 母音核心說明
      { wch: 30 }, // 音節結構切分
      { wch: 35 }, // 不可拆組合說明
      { wch: 15 }, // 美式音標
      { wch: 30 }, // 1. 發音型態
      { wch: 65 }, // 2. 發音規則說明
      { wch: 25 }, // 3. 音標推導結論
    ];

    const workbook = XLSX.utils.book_new();
    const sheetName = selectedBatch === 0 
      ? 'MOE1200_All' 
      : `Batch_${String(selectedBatch).padStart(2, '0')}`;

    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    const fileName = selectedBatch === 0
      ? 'EPRS_MOE1200_All1200_Pronunciation_Report.xlsx'
      : `EPRS_MOE1200_Batch${String(selectedBatch).padStart(2, '0')}_Pronunciation_Report.xlsx`;

    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans print:bg-white print:p-0">
      {/* Header Bar - Light Neutral Theme */}
      <header className="bg-white text-slate-800 border-b border-slate-200 shadow-xs print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  100% 驗證
                </span>
                <button
                  onClick={() => setIsVersionModalOpen(true)}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded border border-blue-200 flex items-center gap-1 cursor-pointer transition-colors"
                  title="點擊查看資料生成與 UI 顯示雙軌版本控制中心"
                >
                  <GitBranch className="w-3 h-3 text-blue-600" />
                  {dataset === 'senior' 
                    ? (selectedBatch === 0 ? 'SENIOR v1.6.ALL' : (currentBatchNum >= 12 ? 'SENIOR v1.6.0-rc2' : (currentBatchNum >= 11 ? 'SENIOR v1.6.0-rc1' : `SENIOR v1.5.${String(currentBatchNum).padStart(2, '0')}`))) 
                    : (selectedBatch === 0 ? 'MOE1200 v1.4.ALL' : `MOE1200 v1.4.${String(selectedBatch).padStart(2, '0')}`)}
                </button>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-0.5 rounded border border-slate-200">
                  純規則推論 (無 AI)
                </span>
              </div>

              {/* Dataset Switcher Tabs */}
              <div className="flex items-center gap-1 my-2 bg-slate-100 p-1 rounded-lg border border-slate-200 w-fit">
                <button
                  onClick={() => { setDataset('senior'); setSelectedBatch(12); }}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    dataset === 'senior'
                      ? 'bg-white text-emerald-700 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  高中詞彙 (B01-12)
                </button>
                <button
                  onClick={() => { setDataset('moe1200'); setSelectedBatch(1); }}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    dataset === 'moe1200'
                      ? 'bg-white text-blue-700 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  國中 1200
                </button>
              </div>

              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-2 mt-0.5">
                EPRS 發音知識系統
                <span className="text-slate-500 text-sm font-normal">
                  | {dataset === 'senior' 
                      ? `高中${currentBatchNum >= 12 ? '第二級' : '第一級'} B${String(currentBatchNum).padStart(2, '0')} (${(currentBatchNum - 1) * 100 + 1} ~ ${(currentBatchNum - 1) * 100 + currentBatchWords.length} 字)` 
                      : (selectedBatch === 0 ? 'MOE 1200 全資料集' : `MOE 1200 B${String(selectedBatch).padStart(2, '0')}`)}
                </span>
              </h1>
              <p className="text-slate-500 text-xs mt-0.5">
                {dataset === 'senior'
                  ? '教育部高中英文參考詞彙表 · 離線純規則自然發音推導鏈（音節 + 規則 + 適用狀態 + 判斷原因）'
                  : '完整發音規則鏈與黃金驗證報告（序號、單字、中文、音節分割、音標、判斷步驟）'}
              </p>
            </div>

            {/* Action Buttons - Light Style & Simplified Names */}
            <div className="flex flex-wrap items-center gap-1.5">
              <Link
                href="/offline"
                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
                title="開啟 100% 獨立離線系統專區 (含內嵌瀏覽、24 批次獨立離線報表、規則庫與發音)"
              >
                <HardDrive className="w-4 h-4 text-white" />
                離線網站專區
              </Link>

              <Link
                href="/index1200"
                className="inline-flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
                title="開啟專為手機與行動裝置打造之單字與發音速查入口"
              >
                <Smartphone className="w-4 h-4 text-indigo-600" />
                手機版入口
              </Link>

              <button
                onClick={() => setIsMatrixModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
                title="開啟音節切分與音標推導查詢工具表"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                音節矩陣
              </button>

              <button
                onClick={handleDownloadExcel}
                className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
                title="一鍵匯出 Excel 試算表"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                匯出 Excel
              </button>

              {dataset === 'senior' ? (
                <Link
                  href={`/report/senior-${currentBatchNum}`}
                  className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
                  title={`開啟高中第一級 Batch ${String(currentBatchNum).padStart(2, '0')} 發音報表頁`}
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  報表檢視 (B{String(currentBatchNum).padStart(2, '0')})
                </Link>
              ) : (
                <Link
                  href={`/report/${selectedBatch === 0 ? 'all' : selectedBatch}`}
                  className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
                  title="開啟發音報表頁"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  報表檢視
                </Link>
              )}
            </div>
          </div>

          {/* Batch Selector Dropdown - Simplified Names */}
          <div className="mt-4 border-t border-slate-100 pt-3 flex flex-wrap items-center gap-2.5">
            <label htmlFor="batch-select" className="text-xs font-bold text-slate-600 flex items-center gap-1.5 shrink-0">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              批次：
            </label>
            {dataset === 'senior' ? (
              <select
                id="batch-select"
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(Number(e.target.value))}
                className="bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <option value={1}>高中 B01 (1 ~ 100)</option>
                <option value={2}>高中 B02 (101 ~ 200)</option>
                <option value={3}>高中 B03 (201 ~ 300)</option>
                <option value={4}>高中 B04 (301 ~ 400)</option>
                <option value={5}>高中 B05 (401 ~ 500)</option>
                <option value={6}>高中 B06 (501 ~ 600)</option>
                <option value={7}>高中 B07 (601 ~ 700)</option>
                <option value={8}>高中 B08 (701 ~ 800)</option>
                <option value={9}>高中 B09 (801 ~ 900)</option>
                <option value={10}>高中 B10 (901 ~ 1000)</option>
                <option value={11}>高中 B11 (1001 ~ 1100)</option>
                <option value={12}>高中 B12 (1101 ~ 1200)</option>
                <option value={0}>高中 全部 (1 ~ 1200)</option>
              </select>
            ) : (
              <select
                id="batch-select"
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(Number(e.target.value))}
                className="bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer shadow-2xs hover:bg-slate-50 transition-colors"
              >
                {Array.from({ length: Math.min(totalBatches, 12) }).map((_, i) => {
                  const bNum = i + 1;
                  const startId = (bNum - 1) * 100 + 1;
                  const endId = Math.min(bNum * 100, allBatchData.length);
                  return (
                    <option key={bNum} value={bNum}>
                      MOE B{String(bNum).padStart(2, '0')} ({startId} ~ {endId})
                    </option>
                  );
                })}
                <option value={0}>MOE 全部 (1 ~ 1200)</option>
              </select>
            )}

            <span className="text-xs text-slate-500">
              顯示：
              <strong className="text-slate-800 ml-1 font-bold">
                {dataset === 'senior'
                  ? `高中 B${String(currentBatchNum).padStart(2, '0')} (${currentBatchWords.length} 字)`
                  : (selectedBatch === 0 ? '全部 1200 字' : `B${String(selectedBatch).padStart(2, '0')} (100 字)`)}
              </strong>
            </span>
          </div>

          {/* Quick Practice Mode Unit Bar - Simplified Names */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200">
                <Zap className="w-3 h-3 text-amber-600" />
                快速練習：
              </span>
              {Array.from({ length: Math.ceil(currentBatchWords.length / 20) }).map((_, idx) => {
                const uNum = idx + 1;
                const startIdx = idx * 20 + 1;
                const endIdx = Math.min((idx + 1) * 20, currentBatchWords.length);
                return (
                  <button
                    key={uNum}
                    type="button"
                    onClick={() => {
                      setPracticeUnit(uNum);
                      setIsPracticeModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1 bg-white hover:bg-amber-50 hover:text-amber-900 text-slate-700 border border-slate-200 hover:border-amber-300 px-2.5 py-0.5 rounded-md text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                    title={`進入單元 ${uNum} (${startIdx}~${endIdx})`}
                  >
                    U{uNum} ({startIdx}~{endIdx})
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                setPracticeUnit(1);
                setIsPracticeModalOpen(true);
              }}
              className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-md text-xs font-bold transition-all shadow-2xs cursor-pointer"
            >
              <Zap className="w-3 h-3 text-white" />
              開始練習
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:p-0 print:max-w-none">
        
        {/* Printable Header Title (Visible only when printing) */}
        <div className="hidden print:block mb-6 border-b-2 border-slate-900 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                EPRS 英文發音知識系統 - MOE 1200 {selectedBatch === 0 ? '全資料集' : `Batch ${String(selectedBatch).padStart(2, '0')} (Word ${(selectedBatch - 1) * 100 + 1} ~ ${Math.min(selectedBatch * 100, allBatchData.length)})`}
              </h1>
              <p className="text-xs text-slate-600 mt-1">
                建置單號：BUILD_20260806_00{selectedBatch || 'ALL'} | 模式：100% 離線純規則推論 (OFFLINE_NO_AI) | 品質認證：GOLD LEVEL (100% PASS)
              </p>
            </div>
            <div className="text-right text-xs text-slate-500">
              報告產出時間：2026-08-06
            </div>
          </div>
        </div>

        {/* Filter & Search Controls - Hidden in Print */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 print:hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="搜尋單字、中文、音標、規則 (如 balloon, 魔術 e)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900 placeholder-slate-400"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  清除
                </button>
              )}
            </div>

            {/* EPRS 家族下拉選單 (Family Dropdown Filter) */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600 shrink-0 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-blue-600" /> 發音家族：
              </span>
              <select
                value={selectedFamily}
                onChange={(e) => setSelectedFamily(e.target.value)}
                className="bg-slate-50 border border-slate-300 text-slate-900 text-xs font-medium rounded-lg px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white cursor-pointer"
              >
                <option value="ALL">全部家族</option>
                <option value="MAGIC_E">魔術 e 家族</option>
                <option value="VOWEL_TEAM">母音組合家族</option>
                <option value="R_CONTROL">R 控制母音</option>
                <option value="OPEN_SYLLABLE">開音節家族</option>
                <option value="CLOSED_SYLLABLE">閉音節家族</option>
                <option value="ANCE_ENDING">-ance/-ence 字尾</option>
                <option value="TION_ENDING">-tion/-sion 字尾</option>
                <option value="SYLLABIC_L">-le 成音節</option>
                <option value="CONSONANT_DIGRAPH">複合子音</option>
                <option value="EXCEPTION">⚠️ 特殊例外</option>
              </select>
            </div>

            {/* Quick Filter Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {[
                { id: 'ALL', label: '全部' },
                { id: 'MONO', label: '單音節' },
                { id: 'MULTI', label: '多音節' },
                { id: 'EXCEPTION', label: '⚠️ 例外' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-slate-800 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3 flex-wrap gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div>
                顯示 <span className="font-semibold text-slate-900">{filteredWords.length}</span> / {currentBatchWords.length} 筆資料
                {selectedFamily !== 'ALL' && (
                  <span className="ml-2 bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium border border-blue-200">
                    使用家族選單過濾中
                  </span>
                )}
              </div>

              {/* 字形放大 / 字級縮放工具列 */}
              <div className="flex items-center gap-2 flex-wrap">
                {!showFontToolbar ? (
                  <button
                    type="button"
                    onClick={() => { setShowFontToolbar(true); try { localStorage.setItem('eprs_font_toolbar_hidden', 'false'); } catch {} }}
                    className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    title="點擊展開字形放大 (字級縮放) 工具列"
                  >
                    <span>🔤 字形放大:</span>
                    <span className="text-blue-700 font-mono font-bold">{Math.round(fontScale * 100)}%</span>
                    <span className="text-[10px] text-slate-500">⚙️ 調整</span>
                  </button>
                ) : (
                  <div className="flex items-center bg-slate-100 border border-slate-300 rounded-lg px-2.5 py-1 gap-2 flex-wrap" title="調整表格字形放大倍率 (1.0x ~ 3.0x)">
                    <span className="text-slate-800 text-xs font-bold">🔤 字形放大：</span>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="range"
                        min="1.0"
                        max="3.0"
                        step="0.05"
                        value={fontScale}
                        onChange={(e) => handleFontScaleChange(parseFloat(e.target.value))}
                        className="w-20 accent-blue-600 cursor-pointer"
                        title="滑動調整 1.0x ~ 3.0x"
                      />
                      <span className="text-blue-700 text-xs font-mono font-bold min-w-[38px] text-right">
                        {Math.round(fontScale * 100)}%
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1.0, 1.15, 1.25, 1.5, 2.0, 2.5, 3.0].map((scale) => (
                        <button
                          key={scale}
                          type="button"
                          onClick={() => handleFontScaleChange(scale)}
                          className={`px-1.5 py-0.5 text-xs font-bold rounded transition-colors cursor-pointer ${
                            Math.abs(fontScale - scale) < 0.04
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                          }`}
                          title={`${scale}x (${Math.round(scale * 100)}%)`}
                        >
                          {scale}x
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => { setShowFontToolbar(false); try { localStorage.setItem('eprs_font_toolbar_hidden', 'true'); } catch {} }}
                      className="text-slate-500 hover:text-red-600 hover:bg-slate-200 border border-slate-300 rounded px-1.5 py-0.5 text-[11px] font-bold transition-colors cursor-pointer"
                      title="隱藏字形放大工具列"
                    >
                      ✕ 隱藏
                    </button>
                  </div>
                )}
              </div>
            </div>
            {(searchTerm || selectedCategory !== 'ALL' || selectedFamily !== 'ALL') && (
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('ALL'); setSelectedFamily('ALL'); }}
                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> 重置所有篩選
              </button>
            )}
          </div>
        </div>

        {/* Output Table - Designed for crisp layout and print readability */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden print:border-slate-300 print:shadow-none print:rounded-none transition-all">
          <div className="overflow-x-auto">
            <table 
              className="w-full text-left border-collapse transition-all"
              style={{
                fontSize: `calc(13.5px * ${fontScale})`,
                minWidth: `calc(900px * ${Math.max(1, fontScale * 0.85)})`
              }}
            >
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs font-bold border-b border-slate-200 print:bg-slate-900 print:text-white">
                  <th className="py-2.5 px-3 w-12 text-center border-b border-slate-200" style={{ fontSize: `calc(11.5px * ${fontScale})` }}>序號</th>
                  <th className="py-2.5 px-4 w-40 min-w-[140px] border-b border-slate-200" style={{ fontSize: `calc(12px * ${fontScale})` }}>單字 / 音標</th>
                  <th className="py-2.5 px-4 w-28 border-b border-slate-200" style={{ fontSize: `calc(12px * ${fontScale})` }}>中文</th>
                  <th className="py-2.5 px-4 w-[380px] min-w-[320px] border-b border-slate-200" style={{ fontSize: `calc(12px * ${fontScale})` }}>音節分割</th>
                  <th className="py-2.5 px-4 min-w-[320px] border-b border-slate-200" style={{ fontSize: `calc(12px * ${fontScale})` }}>規則判斷</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm print:divide-slate-300">
                {filteredWords.map((item, idx) => (
                  <tr 
                    key={item.id}
                    className={`${idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'} hover:bg-slate-100/60 transition-colors print:bg-white`}
                  >
                    {/* 1. 序號 */}
                    <td 
                      className="py-3 px-3 text-center font-mono font-medium text-slate-500 print:text-slate-700 align-top"
                      style={{ fontSize: `calc(12px * ${fontScale})` }}
                    >
                      {item.id}
                    </td>

                    {/* 2. 單字與音標 (單字在上方，音標在下方，支援點擊播放與發音例外標記) */}
                    <td className="py-3 px-4 font-bold text-slate-900 print:text-slate-900 align-top w-40 min-w-[140px]">
                      {/* 上層：單字本體 + 詞性 + 發音/字典按鈕 */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-slate-900 tracking-tight" style={{ fontSize: `calc(15.5px * ${fontScale})` }}>{item.word}</span>
                        {(item as any).pos && (
                          <span 
                            className="font-medium text-slate-500 italic bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200"
                            style={{ fontSize: `calc(11px * ${fontScale})` }}
                          >
                            {(item as any).pos}
                          </span>
                        )}
                        
                        {/* 發音按鈕 (Web Speech API via audioManager) */}
                        <button
                          onClick={() => speakWord(item.word)}
                          disabled={audioStatus.state !== 'idle'}
                          title={audioStatus.word === item.word ? audioStatus.message : (audioStatus.state !== 'idle' ? '發音中請稍候...' : `播放 ${item.word} 發音`)}
                          className={`p-1 rounded-md transition-all cursor-pointer print:hidden ${
                            audioStatus.word === item.word 
                              ? 'bg-amber-100 text-amber-800 scale-110 shadow-2xs animate-pulse' 
                              : audioStatus.state !== 'idle'
                                ? 'text-slate-300 cursor-not-allowed'
                                : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/80'
                          }`}
                          aria-label={`聆聽 ${item.word} 發音`}
                        >
                          <Volume2 className={`w-4 h-4 ${audioStatus.word === item.word ? 'animate-bounce text-amber-600' : ''}`} />
                        </button>

                        {/* 劍橋字典真人發音外鏈 */}
                        <a
                          href={`https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(item.word.toLowerCase().replace(/\(.*?\)/g, '').trim().split('/')[0])}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="在劍橋詞典線上查詢真人母語發音"
                          className="p-1 text-slate-300 hover:text-blue-600 hover:bg-blue-50/80 rounded transition-colors print:hidden cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* 下層：音標直接置於單字正下方 (點擊可播放，發音中停用) */}
                      <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
                        <button
                          type="button"
                          onClick={() => speakWord(item.word)}
                          disabled={audioStatus.state !== 'idle'}
                          title={audioStatus.word === item.word ? audioStatus.message : (audioStatus.state !== 'idle' ? '發音中請稍候...' : `點擊聆聽 ${item.word} 音標發音`)}
                          className={`font-mono text-emerald-800 hover:text-emerald-950 font-bold bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-300/80 rounded px-2 py-0.5 inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs group print:bg-transparent print:p-0 print:border-none print:text-emerald-900 ${
                            audioStatus.state !== 'idle' ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                          style={{ fontSize: `calc(13.5px * ${fontScale})` }}
                        >
                          <Volume2 className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-800 shrink-0 print:hidden" />
                          <span>{item.ipa}</span>
                        </button>
                      </div>

                      {/* 發音中即時狀態提示 */}
                      {audioStatus.word === item.word && (
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 border border-amber-300 font-bold px-1.5 py-0.5 rounded text-[11px] animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                            {audioStatus.message}
                          </span>
                        </div>
                      )}

                      {/* 發音例外標記 */}
                      {item.isException && (
                        <div className="mt-1">
                          <span 
                            className="inline-block bg-amber-50 text-amber-900 border border-amber-200 font-bold px-1.5 py-0.5 rounded text-xs"
                            style={{ fontSize: `calc(10.5px * ${fontScale})` }}
                          >
                            ⚠️ {item.exceptionCategory || '發音例外'}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* 3. 中文 */}
                    <td 
                      className="py-3 px-4 text-slate-700 font-medium print:text-slate-800 align-top w-28"
                      style={{ fontSize: `calc(14px * ${fontScale})` }}
                    >
                      {item.chinese}
                    </td>

                    {/* 4. 音節分割 (依推導順序：1.母音核心 -> 2.不可拆組合 -> 3.結構切分 -> 4.切分結果) */}
                    <td className="py-3 px-4 text-slate-800 align-top w-[380px] min-w-[340px]">
                      <div className="font-sans text-slate-700 space-y-1.5 leading-snug" style={{ fontSize: `calc(12.5px * ${fontScale})` }}>
                        <div>
                          <span className="font-semibold text-blue-900">1. 母音核心：</span>
                          <span className="text-slate-800">{item.syllableDetail?.vowelCore?.replace(/^1\.\s*母音核心：/, '')?.replace(/^母音核心：/, '')}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-amber-900">2. 不可拆組合：</span>
                          <span className="text-slate-800">{item.syllableDetail?.indivisibleRule?.replace(/^2\.\s*不可拆組合：/, '')?.replace(/^不可拆組合：/, '')}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-700">3. 結構切分：</span>
                          <span className="text-slate-800">{item.syllableDetail?.structureRule?.replace(/^3\.\s*結構切分：/, '')?.replace(/^結構切分：/, '')}</span>
                        </div>
                        <div className="mt-1.5 pt-1.5 border-t border-slate-200/80 font-bold text-blue-800 flex items-center gap-1.5">
                          <span className="text-slate-500 font-semibold">4. 切分結果：</span>
                          <span className="text-blue-900 font-mono" style={{ fontSize: `calc(14px * ${fontScale})` }}>
                            {item.syllableDetail?.header || item.syllableText}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* 5. 判斷步驟與推導鏈 (規則可點擊查看詳細定義與範例) */}
                    <td className="py-3 px-4 text-slate-800 align-top leading-relaxed" style={{ fontSize: `calc(12px * ${fontScale})` }}>
                      {item.steps.derivations && item.steps.derivations.length > 0 ? (
                        <div className="space-y-2">
                          {item.steps.derivations.map((d: any, dIdx: number) => {
                            const isExc = d.status?.includes('不適用');
                            return (
                              <div
                                key={dIdx}
                                className={`p-2.5 rounded-lg border transition-all ${
                                  isExc 
                                    ? 'bg-rose-50/80 border-rose-200 text-slate-900' 
                                    : 'bg-slate-50 border-slate-200/90 text-slate-900'
                                }`}
                                style={{ fontSize: `calc(12px * ${fontScale})` }}
                              >
                                <div className="flex items-center gap-1.5 flex-wrap mb-1.5">
                                  <span className="font-bold text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                                    {d.syllable}
                                  </span>

                                  {/* 點擊可彈出規則定義視窗 */}
                                  <button
                                    type="button"
                                    onClick={() => handleOpenRuleModal(d.rule)}
                                    className="font-bold text-indigo-700 hover:text-indigo-950 hover:underline bg-indigo-50/90 hover:bg-indigo-100 border border-indigo-200 rounded px-1.5 py-0.5 inline-flex items-center gap-1 transition-all cursor-pointer shadow-2xs group"
                                    title="點擊查看此規則完整定義、公式與示範範例"
                                  >
                                    <BookOpen className="w-3.5 h-3.5 text-indigo-500 group-hover:text-indigo-700 shrink-0" />
                                    <span>{d.rule}</span>
                                  </button>

                                  <span
                                    className={`font-bold px-1.5 py-0.5 rounded ${
                                      isExc
                                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                    }`}
                                    style={{ fontSize: `calc(11px * ${fontScale})` }}
                                  >
                                    {d.status}
                                  </span>
                                </div>
                                <div className="text-slate-600 leading-snug" style={{ fontSize: `calc(11.5px * ${fontScale})` }}>
                                  <span className="font-semibold text-slate-700">判定原因：</span>
                                  {d.reason}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          {/* 步驟 1 */}
                          <div className="font-medium text-slate-900">
                            <span className="text-slate-500 font-semibold">1. 發音型態：</span>
                            <span className="text-slate-800">{item.steps.patternStep}</span>
                          </div>

                          {/* 步驟 2 */}
                          <div>
                            <div className="text-slate-500 font-semibold mb-0.5">2. 發音規則說明：</div>
                            <div className="pl-2 border-l-2 border-blue-500 space-y-1 my-1 print:border-slate-400">
                              {item.steps.ruleStep.map((rule, rIdx) => (
                                <div key={rIdx} className="text-blue-950 font-medium flex items-center gap-1.5 flex-wrap">
                                  <span>•</span>
                                  <button
                                    type="button"
                                    onClick={() => handleOpenRuleModal(rule)}
                                    className="font-semibold text-indigo-700 hover:text-indigo-900 hover:underline bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/70 rounded px-1.5 py-0.5 inline-flex items-center gap-1 transition-colors cursor-pointer text-left"
                                    title="點擊查看規則詳細定義與範例"
                                  >
                                    <BookOpen className="w-3 h-3 text-indigo-500 shrink-0" />
                                    <span>{rule}</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 步驟 3 */}
                          <div className="text-emerald-800 font-semibold pt-0.5 print:text-emerald-950">
                            <span className="text-slate-500 font-semibold">3. 音標推導：</span>
                            {item.steps.ipaStep}
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {filteredWords.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-500">
                      沒有符合「{searchTerm}」的發音單字資料
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="mt-8 text-center text-xs text-slate-500 print:mt-4 print:border-t print:border-slate-300 print:pt-2">
          <p>EPRS (English Pronunciation Reasoning System) - Rule-Based Pronunciation Engine</p>
          <p className="mt-1">主機端集中維護 · 零 AI 依賴發音規則庫 · 支援多步驟發音推導與聽音練習</p>
        </div>
      </main>

      {/* Syllable & IPA Reasoning Matrix Modal */}
      <SyllableIpaMatrixModal
        isOpen={isMatrixModalOpen}
        onClose={() => setIsMatrixModalOpen(false)}
      />

      {/* Phonics Rule Definition Modal */}
      <RuleDetailModal
        ruleCode={activeRuleModalCode}
        onClose={() => setActiveRuleModalCode(null)}
        onSpeak={speakWord}
      />

      {/* Dual-Track Version Control Center Modal */}
      <VersionControlModal
        isOpen={isVersionModalOpen}
        onClose={() => setIsVersionModalOpen(false)}
        currentBatchNum={currentBatchNum}
        isSenior={dataset === 'senior'}
      />

      {/* Quick Practice Modal (每20單字為一單元，支援空白鍵/點擊多步驟發音推導) */}
      <QuickPracticeModal
        isOpen={isPracticeModalOpen}
        onClose={() => setIsPracticeModalOpen(false)}
        words={currentBatchWords}
        batchTitle={dataset === 'senior' ? `高中第一級 Batch ${String(currentBatchNum).padStart(2, '0')}` : `國中 1200 單字 Batch ${String(currentBatchNum).padStart(2, '0')}`}
        initialUnit={practiceUnit}
        onOpenRuleModal={(code) => setActiveRuleModalCode(code)}
      />

      {/* Floating Audio Status Alert (保證發音中提示與單一播放互鎖) */}
      {audioStatus.state !== 'idle' && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900/90 backdrop-blur-xs text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2.5 text-xs font-semibold animate-fade-in print:hidden">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span>{audioStatus.message}：<strong className="text-amber-300 font-serif tracking-wide">{audioStatus.word}</strong></span>
        </div>
      )}
    </div>
  );
}
