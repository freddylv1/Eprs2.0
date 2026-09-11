'use client';

import React from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-slate-950 text-white">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
          !
        </div>
        <h2 className="text-lg font-bold text-slate-100 mb-2">系統頁面載入異常</h2>
        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          {error.message || '資料庫推演或頁面渲染遭遇例外，系統已自動攔截防止崩潰。'}
        </p>

        {error.digest && (
          <p className="text-[11px] font-mono text-slate-500 mb-4 bg-slate-950 py-1 px-2 rounded">
            Error Digest: {error.digest}
          </p>
        )}

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            重新載入 (Retry)
          </button>
          <Link
            href="/"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors"
          >
            返回首頁 (Home)
          </Link>
        </div>
      </div>
    </div>
  );
}
