'use client';

import React, { useEffect } from 'react';
import { X, Sparkles, Volume2, CheckCircle2, AlertTriangle, ArrowRight, ShieldAlert } from 'lucide-react';
import { PracticeWord } from './types';
import { PracticeAudioService } from './audioService';

interface PronunciationReasoningModalProps {
  isOpen: boolean;
  onClose: () => void;
  word: PracticeWord | null;
  onOpenRuleModal?: (ruleCode: string) => void;
  onPlayAudio?: (word: string) => void;
}

export default function PronunciationReasoningModal({
  isOpen,
  onClose,
  word,
  onOpenRuleModal,
  onPlayAudio,
}: PronunciationReasoningModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !word) return null;

  const derivations = word.steps?.derivations || [];
  const ruleSteps = word.steps?.ruleStep || [];

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPlayAudio) {
      onPlayAudio(word.word);
    } else {
      PracticeAudioService.play(word.word);
    }
  };

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-100">
                EPRS 發音推導演算與推理依據
              </h3>
              <p className="text-xs text-slate-400">
                Pronunciation Deduction Chain & Phonics Reasoning
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="關閉 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Info Banner */}
        <div className="bg-gradient-to-r from-indigo-50/70 to-slate-50 border-b border-slate-200 px-5 py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-2xl font-black text-slate-900 font-serif">
                {word.word}
              </span>
              {word.pos && (
                <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded">
                  {word.pos}
                </span>
              )}
              <span className="text-xs font-mono font-bold text-indigo-700 bg-white border border-indigo-200 px-2.5 py-0.5 rounded-full shadow-2xs">
                [{word.ipa}]
              </span>
              <span className="text-sm font-semibold text-slate-600">
                {word.chinese}
              </span>
            </div>

            <button
              type="button"
              onClick={handlePlay}
              className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-xs cursor-pointer flex items-center gap-1 text-xs font-semibold"
              title="播放發音"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>發音</span>
            </button>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-5 overflow-y-auto max-h-[60vh] space-y-4 text-xs sm:text-sm">
          {/* Exception Banner if applicable */}
          {word.isException && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5 text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-xs text-amber-800 flex items-center gap-1.5">
                  <span>發音例外註記 (Exception Notice)</span>
                  {word.exceptionCategory && (
                    <span className="bg-amber-200/80 px-1.5 py-0.2 rounded text-[10px]">
                      {word.exceptionCategory}
                    </span>
                  )}
                </div>
                <p className="text-xs text-amber-700 leading-relaxed mt-0.5">
                  {word.exceptionReason || '此單字之特定音節存在歷史發音轉移或特殊拼讀例外。'}
                </p>
              </div>
            </div>
          )}

          {/* Section 1: 音節推導鏈 (Derivation Items) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                <span className="w-1.5 h-3.5 bg-indigo-600 rounded-full" />
                <span>各音節推導與規則適用鏈 (Derivation Chain)</span>
              </span>
              <span className="text-[11px] text-slate-400">
                共 {derivations.length} 條音節推導
              </span>
            </div>

            {derivations.length > 0 ? (
              <div className="space-y-2">
                {derivations.map((d, dIdx) => {
                  const isApplicable = !d.status.includes('不適用');
                  return (
                    <div
                      key={dIdx}
                      className={`p-3 rounded-xl border text-xs leading-relaxed transition-all shadow-2xs ${
                        isApplicable
                          ? 'bg-slate-50/80 border-slate-200 border-l-4 border-l-emerald-500'
                          : 'bg-amber-50/60 border-amber-200 border-l-4 border-l-rose-500'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 text-sm bg-white px-2 py-0.5 rounded border border-slate-200 font-mono shadow-2xs">
                            {d.syllable}
                          </span>

                          {onOpenRuleModal ? (
                            <button
                              type="button"
                              onClick={() => onOpenRuleModal(d.rule)}
                              className="font-bold text-indigo-700 hover:text-indigo-950 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-2 py-0.5 rounded text-xs transition-colors cursor-pointer"
                              title="點擊查看完整規則詳解"
                            >
                              規則：{d.rule}
                            </button>
                          ) : (
                            <span className="font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded text-xs">
                              規則：{d.rule}
                            </span>
                          )}
                        </div>

                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${
                            isApplicable
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isApplicable ? (
                            <CheckCircle2 className="w-3 h-3" />
                          ) : (
                            <ShieldAlert className="w-3 h-3" />
                          )}
                          <span>{d.status}</span>
                        </span>
                      </div>

                      <p className="text-slate-600 pl-1 mt-1 leading-relaxed">
                        <span className="font-semibold text-slate-700">推理判斷：</span>
                        {d.reason}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-xs">
                本單字使用標準自然發音基礎規則直推。
              </div>
            )}
          </div>

          {/* Section 2: 自然發音推導步驟 (Rule Steps) */}
          {ruleSteps.length > 0 && (
            <div>
              <span className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
                <span className="w-1.5 h-3.5 bg-blue-600 rounded-full" />
                <span>自然發音規則推導步驟 (Rule Reasoning Steps)</span>
              </span>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
                {ruleSteps.map((stepText, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-700 text-xs leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{stepText}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Pattern 與 IPA 綜整 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {word.steps?.patternStep && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="font-bold text-slate-700 text-xs mb-1">
                  拼讀模式 (Pattern Mapping)
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {word.steps.patternStep}
                </p>
              </div>
            )}

            {word.steps?.ipaStep && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="font-bold text-slate-700 text-xs mb-1">
                  音標推演結論 (IPA Result)
                </div>
                <p className="text-slate-600 text-xs leading-relaxed font-mono">
                  {word.steps.ipaStep}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            EPRS 零黑箱原則：100% 透明化推導鏈
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            關閉 (Close)
          </button>
        </div>
      </div>
    </div>
  );
}
