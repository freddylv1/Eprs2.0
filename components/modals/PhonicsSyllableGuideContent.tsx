'use client';

import React from 'react';
import {
  BookOpen,
  Volume2,
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { audioManager } from '../../lib/audioManager';
import { FontSizePreference } from '../../lib/types';
import { getModalFontSizeClasses } from '../../lib/fontSizeUtils';

interface PhonicsSyllableGuideContentProps {
  fontSize?: FontSizePreference;
  onClose?: () => void;
}

export function PhonicsSyllableGuideContent({
  fontSize = 'medium'
}: PhonicsSyllableGuideContentProps) {
  const typo = getModalFontSizeClasses(fontSize);

  const handlePlay = (text: string) => {
    audioManager.speakWord(text);
  };

  return (
    <div className="space-y-6 text-slate-800 dark:text-slate-100">
      {/* 頂部 Highlight Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 p-5 sm:p-6 text-white shadow-lg">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>核心觀念解析</span>
          </div>
          <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight leading-snug">
            為什麼字典的「文字拆分」與實際說話的「嘴型音節」常常不一致？
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed max-w-3xl">
            英文學習中一個很有趣的現象：字典與自然發音的「文字拆分（Orthographic Syllables）」與實際口語說話時的「嘴型音節（Phonetic / Spoken Syllables）」常常不同。
          </p>
        </div>
      </div>

      {/* 核心概念對比卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/50 p-4 dark:border-indigo-900/60 dark:bg-indigo-950/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs">
              書寫規則
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              文字拆分 (Orthographic)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            為<span className="font-bold text-indigo-600 dark:text-indigo-400">「視覺拼字與字典」</span>服務。目的是幫助學習者對照規則猜出母音長短音，並拼出完整單字。
          </p>
        </div>

        <div className="rounded-2xl border border-sky-200/80 bg-sky-50/50 p-4 dark:border-sky-900/60 dark:bg-sky-950/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-sky-600 text-white font-bold text-xs">
              實際發音
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
              嘴型音節 (Phonetic / Spoken)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            為<span className="font-bold text-sky-600 dark:text-sky-400">「口腔肌肉的省力與流暢度」</span>服務。母音與子音連在一起流動，界線更加自然融會。
          </p>
        </div>
      </div>

      {/* 一、三大核心原因拆解 */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-extrabold text-sm">
            1
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            視覺拆分（拼字規律） vs. 聽覺拆分（實際發音）三大原因
          </h3>
        </div>

        {/* 1. 雙寫子音 */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 bg-white dark:bg-slate-900/80 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs">
                  原因 1
                </span>
                子音字母「雙寫」的障礙 (Double Consonants)
              </h4>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            像 <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold">bit-ter</code> 或 <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold">hop-ping</code>，為了維持前面母音發短音，拼字規則規定要雙寫子音並從中間切開（VC/CV）。
          </p>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-700 dark:text-slate-300">實際發音感：</span>
                <span className="text-slate-600 dark:text-slate-400">你不會唸出「bit...ter」，而是唸成單一彈舌音或將子音順暢連到後面。</span>
              </div>
              <button
                onClick={() => handlePlay('bitter')}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition shrink-0 cursor-pointer text-xs"
              >
                <Volume2 className="h-3.5 w-3.5" />
                <span>唸 bitter</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. 連音與音節重組 */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 bg-white dark:bg-slate-900/80 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs">
                原因 2
              </span>
              連音與音節重組 (Resyllabification)
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            當一個單字結尾是子音，下一個音節（或單字）開頭是母音時，尾巴的子音會直接「滑」到下一個音節去。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
                <span>單字：orange</span>
                <button
                  onClick={() => handlePlay('orange')}
                  className="p-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 cursor-pointer"
                  title="聆聽"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
              <div className="text-slate-500 dark:text-slate-400">書面拆分：<code className="text-indigo-600 dark:text-indigo-300">or-ange</code></div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">口語感受：聽起來像 <code className="bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.5 rounded">o-range</code> (r 滑到後面)</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
                <span>片語：at all</span>
                <button
                  onClick={() => handlePlay('at all')}
                  className="p-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 cursor-pointer"
                  title="聆聽"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
              <div className="text-slate-500 dark:text-slate-400">書面拆分：<code className="text-indigo-600 dark:text-indigo-300">at ... all</code></div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">口語感受：聽起來像 <code className="bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.5 rounded">a-tall</code> (t 黏到 all 開頭)</div>
            </div>
          </div>
        </div>

        {/* 3. 弱化音與輕讀 */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 bg-white dark:bg-slate-900/80 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs">
                原因 3
              </span>
              弱化音（Schwa Sound /ə/）與輕讀吞音 (Elision)
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            英文是強弱分明的語言（Stress-timed language）。非重音音節會被快速帶過、壓縮甚至省略，讓書本上的拆分在聽覺上融為一體。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
                <span>單字：camera</span>
                <button
                  onClick={() => handlePlay('camera')}
                  className="p-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 cursor-pointer"
                  title="聆聽"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
              <div className="text-slate-500 dark:text-slate-400">字典拆分：<code className="text-indigo-600 dark:text-indigo-300">cam-er-a</code> (3音節)</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">母語人士口語：省去中間母音，唸作 <code className="bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.5 rounded">cam-ra</code> (2音節)</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
                <span>單字：family</span>
                <button
                  onClick={() => handlePlay('family')}
                  className="p-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 cursor-pointer"
                  title="聆聽"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
              <div className="text-slate-500 dark:text-slate-400">字典拆分：<code className="text-indigo-600 dark:text-indigo-300">fam-i-ly</code> (3音節)</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">母語人士口語：中間 i 常被省略，聽起來像 <code className="bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.5 rounded">fam-ly</code> (2音節)</div>
            </div>
          </div>
        </div>
      </div>

      {/* 二、總結：我們該怎麼看待這兩者的不同？ */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-950/50 dark:to-sky-950/40 p-5 border border-indigo-100 dark:border-indigo-900 space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
            總結：學習者該如何看待這兩者的不同？
          </h3>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-indigo-700 dark:text-indigo-300">書面拆分 (VC/CV, V/CV)：</span>
              <span>是用來幫你把單字拼出來、猜出母音大概怎麼唸的輔助工具。</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-sky-700 dark:text-sky-300">實際口語發音：</span>
              <span>是透過「連音（Linking）、省音（Elision）、弱化（Reduction）」達到說話自然流暢的結果。</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-indigo-200/60 dark:border-indigo-800/60 mt-2 font-medium text-slate-800 dark:text-slate-200">
            💡 <span className="font-bold text-indigo-600 dark:text-indigo-400">心法提示：</span>在背單字時，先用書面規則將單字記熟、基礎讀對；而在練習聽力與口語流利度時，忘掉死板的切線，多感受母語人士的連音與語調節奏！
          </div>
        </div>
      </div>
    </div>
  );
}
