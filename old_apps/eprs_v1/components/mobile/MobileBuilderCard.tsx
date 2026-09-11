'use client';

import React, { useState } from 'react';
import { Cpu, FileSpreadsheet, Download, CheckCircle2, AlertCircle, Sparkles, FileText, RefreshCw, ShieldCheck } from 'lucide-react';

export function MobileBuilderCard() {
  const [csvText, setCsvText] = useState<string>(
    'index,word,pos,chinese\n1,have,v.,有；擁有\n2,apple,n.,蘋果\n3,give,v.,給予\n4,book,n.,書本\n5,said,v.,說'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [builderResult, setBuilderResult] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRunBuilder = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setBuilderResult(null);

    try {
      const res = await fetch('/api/vocabulary/builder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ csv: csvText }),
      });

      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setBuilderResult(data);
      } else {
        setErrorMessage(data.message || 'EPRS Builder Workflow 執行失敗');
      }
    } catch (err: any) {
      setErrorMessage(err.message || '網路存取失敗');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/vocabulary/builder', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setBuilderResult(data);
      } else {
        setErrorMessage(data.message || '檔案解析或製作失敗');
      }
    } catch (err: any) {
      setErrorMessage(err.message || '上傳處理失敗');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadYamlFile = () => {
    if (!builderResult?.yamlContent) return;
    const blob = new Blob([builderResult.yamlContent], { type: 'text/yaml;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'English_Pronunciation_Database.yaml');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-indigo-100 dark:border-indigo-900/50 shadow-sm space-y-4">
      {/* Title Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <span>Offline Vocabulary Builder</span>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500 inline" />
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              10-Step Discrete EPRS Builder Workflow (v1.6)
            </p>
          </div>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-800">
          v1.6 Workflow
        </span>
      </div>

      {/* CSV Input or File Selection */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-medium">
          <span>文字輸入 (CSV / TSV / 單字表)</span>
          <label className="cursor-pointer text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>上傳 CSV / XLSX</span>
            <input
              type="file"
              accept=".csv,.xlsx,.xls,.txt"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        <textarea
          rows={4}
          value={csvText}
          onChange={(e) => setCsvText(e.target.value)}
          placeholder="index,word,pos,chinese"
          className="w-full text-xs font-mono p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={handleRunBuilder}
          disabled={isLoading}
          className="w-full min-h-[44px] px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
        >
          {isLoading ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
          <span>執行 Workflow v1.6</span>
        </button>

        <a
          href="/api/export-pdf?batch=01&format=learning"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[44px] px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
        >
          <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>下載 Batch 01 PDF</span>
        </a>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-xl text-xs text-red-600 dark:text-red-400 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Result Display */}
      {builderResult && (
        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-xl space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-900 dark:text-emerald-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              10-Step Workflow 完成 ({builderResult.total_words} 個單字)
            </span>
            <button
              onClick={downloadYamlFile}
              className="px-2.5 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-lg hover:bg-emerald-700 flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              下載 .yaml
            </button>
          </div>

          <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-mono space-y-1 pt-1 border-t border-emerald-200/60 dark:border-emerald-900/60">
            <div>• Workflow: {builderResult.schema_name} (v{builderResult.workflow_version || builderResult.version})</div>
            <div>• Validation Level: <span className="text-amber-600 font-bold dark:text-amber-400">{builderResult.validation_level || 'GOLD'}</span></div>
            <div>• 包含 10-Step 模組化分析 (Syllable, Stress, Pattern, Rule, Exception, IPA, Memory, Validation, Commit)</div>
          </div>
        </div>
      )}
    </div>
  );
}
