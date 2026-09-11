'use client';

import React, { useState, useEffect } from 'react';
import { MobileHeader } from './MobileHeader';
import { WordCard } from './WordCard';
import { PatternCard } from './PatternCard';
import { RuleCard } from './RuleCard';
import { PracticeCard } from './PracticeCard';
import { MobilePdfExportCard } from './MobilePdfExportCard';
import { MobileBuilderCard } from './MobileBuilderCard';
import { BottomNav, NavTab } from './BottomNav';
import { SearchInput } from './SearchInput';
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Layers,
  ChevronLeft,
  Database,
  Cpu,
  CheckCircle,
  Code2,
} from 'lucide-react';

interface MobileAppViewProps {
  initialStatus: any;
  initialStatistics: any;
  initialWords: any[];
  initialWordDetail: any;
  rawJsonData: any;
}

export function MobileAppView({
  initialStatus,
  initialStatistics,
  initialWords,
  initialWordDetail,
  rawJsonData,
}: MobileAppViewProps) {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedWord, setSelectedWord] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>(initialWords);
  const [isSearching, setIsSearching] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [isRawJsonMode, setIsRawJsonMode] = useState(false);

  const handleSearchQueryChange = (val: string) => {
    setSearchQuery(val);
    if (!val.trim()) {
      setSearchResults(initialWords);
    }
  };

  // Quick word detail selector
  const handleOpenWord = async (wordObj: any) => {
    if (wordObj && wordObj.word) {
      try {
        const res = await fetch(`/api/word-query?word=${encodeURIComponent(wordObj.word)}&mode=full`);
        if (res.ok) {
          const detail = await res.json();
          setSelectedWord(detail);
        } else {
          setSelectedWord(wordObj);
        }
      } catch {
        setSelectedWord(wordObj);
      }
    }
  };

  // Perform search query via API /api/search
  const triggerSearch = React.useCallback(async (queryText: string) => {
    if (!queryText.trim()) {
      setSearchResults(initialWords);
      return;
    }

    setIsSearching(true);
    try {
      let url = `/api/search?q=${encodeURIComponent(queryText)}`;
      if (queryText.toUpperCase().startsWith('R0') || queryText.toUpperCase().startsWith('R1')) {
        url = `/api/search?rule=${encodeURIComponent(queryText.toUpperCase())}`;
      } else if (queryText.toUpperCase().startsWith('PAT')) {
        url = `/api/search?pattern=${encodeURIComponent(queryText.toUpperCase())}`;
      } else if (queryText.toUpperCase().startsWith('L')) {
        url = `/api/search?level=${encodeURIComponent(queryText.toUpperCase())}`;
      }

      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setSearchResults(data.matches || []);
      }
    } catch {
      // fallback local filter
      const filtered = initialWords.filter((w) =>
        w.word.toLowerCase().includes(queryText.toLowerCase())
      );
      setSearchResults(filtered);
    } finally {
      setIsSearching(false);
    }
  }, [initialWords]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      return;
    }
    const timer = setTimeout(() => {
      triggerSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, triggerSearch]);

  // If RAW JSON mode is toggled, display standard Phase 2 JSON inspector output
  if (isRawJsonMode) {
    return (
      <div className="min-h-screen bg-gray-900 text-green-400 p-4 font-mono text-xs leading-relaxed overflow-auto">
        <div className="max-w-[600px] mx-auto space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-gray-800">
            <span className="text-white font-bold">EPRS_Learning_APP API JSON Mode</span>
            <button
              onClick={() => setIsRawJsonMode(false)}
              className="px-3 py-1 bg-amber-500 text-slate-950 font-bold rounded hover:bg-amber-400"
            >
              返回 Mobile UI
            </button>
          </div>
          <pre className="bg-black/90 p-4 rounded-lg border border-gray-800 whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(rawJsonData, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      {/* Centered Single Column Container - max-width 600px */}
      <div className="w-full max-w-[600px] mx-auto min-h-screen flex flex-col bg-white dark:bg-slate-900 shadow-xl border-x border-slate-200 dark:border-slate-800 pb-20">
        {/* Sticky Mobile Header */}
        <MobileHeader
          title="EPRS"
          subtitle="English Pronunciation Rule System"
          activeTab={activeTab}
          onSearchClick={() => {
            setActiveTab('search');
          }}
          onRawJsonToggle={() => setIsRawJsonMode(true)}
          isRawJsonMode={isRawJsonMode}
        />

        {/* Main Content View Switcher */}
        <main className="flex-1 p-4 space-y-4 overflow-y-auto">
          {/* WORD DETAIL MODAL / VIEW (IF SELECTED) */}
          {selectedWord ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <button
                onClick={() => setSelectedWord(null)}
                className="min-h-[44px] px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center gap-1.5 hover:bg-slate-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>返回上一頁</span>
              </button>

              <WordCard data={selectedWord} />

              <PatternCard
                data={selectedWord.pattern_mapping}
                onPatternClick={(patId) => {
                  setSelectedWord(null);
                  setActiveTab('search');
                  setSearchQuery(patId);
                }}
              />

              <RuleCard
                data={selectedWord.rule_mapping}
                onRuleClick={(ruleId) => {
                  setSelectedWord(null);
                  setActiveTab('search');
                  setSearchQuery(ruleId);
                }}
              />

              <PracticeCard
                memoryTip={selectedWord.memory_tip}
                practice={selectedWord.practice}
                correctIpa={selectedWord.ipa}
                word={selectedWord.word}
              />
            </div>
          ) : (
            <>
              {/* TAB 1: HOME VIEW */}
              {activeTab === 'home' && (
                <div className="space-y-5">
                  {/* Hero Banner Card */}
                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-2xl p-5 shadow-md space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
                        EPRS v1.5 發音學習
                      </span>
                      <span className="text-xs text-indigo-200">
                        收錄 {initialStatus?.database_words || 50} 個範例單字
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-extrabold tracking-tight">
                        自然拼讀與音標規則體系
                      </h2>
                      <p className="text-xs text-indigo-100 mt-1 leading-relaxed">
                        從音節結構、子音音標與變音規則，掌握美式英語發音規律。
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <button
                        onClick={() => {
                          const randomWord =
                            initialWords[Math.floor(Math.random() * initialWords.length)];
                          handleOpenWord(randomWord || initialWordDetail);
                        }}
                        className="min-h-[44px] px-3 py-2.5 rounded-xl bg-white text-indigo-900 font-bold text-sm flex items-center justify-center gap-1.5 shadow active:scale-95 transition-transform"
                      >
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>隨機單字卡</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('vocab')}
                        className="min-h-[44px] px-3 py-2.5 rounded-xl bg-indigo-700/80 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-1.5 border border-indigo-500/50 active:scale-95 transition-transform"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>瀏覽字庫</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Search */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      快速搜尋單字或規則
                    </h3>
                    <SearchInput
                      value={searchQuery}
                      onChange={(val) => {
                        handleSearchQueryChange(val);
                        if (val.trim()) {
                          setActiveTab('search');
                        }
                      }}
                    />
                  </div>

                  {/* Featured Word of the Day */}
                  {initialWordDetail && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          <span>精選發音解析單字</span>
                        </h3>
                        <button
                          onClick={() => handleOpenWord(initialWordDetail)}
                          className="min-h-[44px] text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5"
                        >
                          <span>查看完整細節</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div
                        onClick={() => handleOpenWord(initialWordDetail)}
                        className="cursor-pointer hover:border-indigo-300 transition-colors"
                      >
                        <WordCard data={initialWordDetail} />
                      </div>
                    </div>
                  )}

                  {/* MOE 1200 PDF Export Card */}
                  <MobilePdfExportCard totalWords={initialStatus?.database_words || initialWords.length} />

                  {/* Popular Rule Quick Badges */}
                  <div className="space-y-2.5">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      常見發音規則分類 (Rule Master)
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'R001', name: '閉音節短母音 (R001)' },
                        { id: 'R002', name: '開音節長母音 (R002)' },
                        { id: 'R003', name: 'Magic e 靜音 (R003)' },
                        { id: 'R008', name: '弱讀 Schwa [ə] (R008)' },
                        { id: 'R010', name: '不規則例外 (R010)' },
                        { id: 'R011', name: '腭音化變音 (R011)' },
                      ].map((r) => (
                        <button
                          key={r.id}
                          onClick={() => {
                            setActiveTab('search');
                            setSearchQuery(r.id);
                          }}
                          className="min-h-[48px] p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left hover:border-indigo-400 transition-colors flex items-center justify-between"
                        >
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                            {r.name}
                          </span>
                          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: VOCABULARY VIEW */}
              {activeTab === 'vocab' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                        EPRS 單字庫
                      </h2>
                      <p className="text-xs text-slate-500">
                        共有 {initialWords.length} 個單字點擊查看完整發音規則
                      </p>
                    </div>
                  </div>

                  {/* Stage/Level Filter Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {['ALL', 'L1', 'L2', 'L3', 'R001', 'R008', 'R010'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setActiveFilter(filter);
                          if (filter === 'ALL') {
                            setSearchResults(initialWords);
                          } else {
                            triggerSearch(filter);
                          }
                        }}
                        className={`min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                          activeFilter === filter
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {filter === 'ALL' ? '全部單字' : filter}
                      </button>
                    ))}
                  </div>

                  {/* Word List */}
                  <div className="space-y-2.5">
                    {searchResults.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleOpenWord(item)}
                        className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3.5 flex items-center justify-between cursor-pointer hover:border-indigo-400 transition-colors shadow-sm"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            {/* Word text min 28px/20px */}
                            <span className="text-xl font-bold text-slate-900 dark:text-white">
                              {item.word}
                            </span>
                            {item.pos && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                {item.pos}
                              </span>
                            )}
                          </div>
                          {/* IPA */}
                          <div className="text-base font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                            {item.ipa || `/${item.word}/`}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-right">
                          <div>
                            {item.chinese && (
                              <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                {item.chinese}
                              </div>
                            )}
                            <div className="text-[11px] text-slate-400 font-mono">
                              {Array.isArray(item.syllable) ? item.syllable.join('·') : item.word}
                            </div>
                          </div>
                          <ChevronLeft className="w-5 h-5 text-slate-300 rotate-180" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: SEARCH VIEW */}
              {activeTab === 'search' && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      即時音律與規則搜尋
                    </h2>
                    <p className="text-xs text-slate-500">
                      可輸入單字 (apple)、發音規則 (R008)、模式 (PAT-M001) 或等級 (L1)
                    </p>
                  </div>

                  <SearchInput
                    value={searchQuery}
                    onChange={(val) => handleSearchQueryChange(val)}
                    onClear={() => {
                      handleSearchQueryChange('');
                      setSearchResults(initialWords);
                    }}
                  />

                  {/* Quick Preset Filter Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: 'R008 (弱讀縮音)', value: 'R008' },
                      { label: 'R001 (閉音節)', value: 'R001' },
                      { label: 'R010 (不規則例外)', value: 'R010' },
                      { label: 'L1 初階', value: 'L1' },
                    ].map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSearchQuery(chip.value)}
                        className="min-h-[44px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 transition-colors"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>

                  {/* Results List */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                      <span>搜尋結果：{searchResults.length} 個符合單字</span>
                      {isSearching && <span className="text-indigo-500 font-bold">搜尋中...</span>}
                    </div>

                    {searchResults.length === 0 ? (
                      <div className="p-8 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                        <p className="text-base font-bold text-slate-700 dark:text-slate-300">
                          未找到與「{searchQuery}」符合的項目
                        </p>
                        <p className="text-xs text-slate-500">
                          嘗試搜尋其餘規則代碼如 R001, R002, R003 或基礎單字如 have, book
                        </p>
                      </div>
                    ) : (
                      searchResults.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleOpenWord(item)}
                          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 space-y-2 cursor-pointer hover:border-indigo-400 transition-colors shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                              {item.word}
                            </span>
                            <span className="text-base font-mono font-bold text-indigo-600 dark:text-indigo-400">
                              {item.ipa || `/${item.word}/`}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>
                              規則: {item.rule_mapping?.rule_id || item.rule_mapping?.[0] || 'R001'}
                            </span>
                            <span>
                              模式: {item.pattern_mapping?.pattern_id || 'PAT-M001'}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* TAB 4: SETTINGS VIEW */}
              {activeTab === 'settings' && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      系統資訊與 API 狀態
                    </h2>
                    <p className="text-xs text-slate-500">
                      EPRS APP Package Runtime v1.5 快取狀態與記憶體數據
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 space-y-3 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
                      <Cpu className="w-5 h-5 text-indigo-500" />
                      <span>Package Context 快取資訊</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800">
                        <div className="text-slate-400 font-medium">版本</div>
                        <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                          {initialStatus?.package_version || 'v1.5'}
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800">
                        <div className="text-slate-400 font-medium">收錄單字數</div>
                        <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                          {initialStatus?.database_words || 50} 字
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800">
                        <div className="text-slate-400 font-medium">發音規則數</div>
                        <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {initialStatus?.rule_count || 17} 條
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800">
                        <div className="text-slate-400 font-medium">快取載入耗時</div>
                        <div className="text-base font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                          {initialStatus?.load_time_ms || 0} ms
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Heap Memory Usage:</span>
                        <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                          {initialStatus?.memory_usage?.heapUsed || 'N/A'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-500">
                        <span>O(1) Map Indexing:</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          ENABLED
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Offline Vocabulary Builder Card */}
                  <MobileBuilderCard />

                  {/* MOE 1200 PDF Export Section */}
                  <MobilePdfExportCard totalWords={initialStatus?.database_words || initialWords.length} />

                  {/* Inspector / Mode Switch Button */}
                  <div className="bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-900/60 p-4 space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-base">
                      <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      <span>Phase 2 API 檢視器</span>
                    </div>
                    <p className="text-xs text-amber-800 dark:text-amber-300">
                      點擊下方按鈕可切換至 Raw Phase 2 API JSON 狀態輸出模式。
                    </p>
                    <button
                      onClick={() => setIsRawJsonMode(true)}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>開啟 Raw JSON API Inspector</span>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        {/* Sticky Mobile Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={(tab) => {
          setSelectedWord(null);
          setActiveTab(tab);
        }} />
      </div>
    </div>
  );
}
