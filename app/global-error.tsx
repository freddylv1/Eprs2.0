'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="zh-TW">
      <body className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6 text-center dark:bg-slate-950">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">系統錯誤</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">發生未預期的問題，請稍後重試</p>
        <button
          onClick={() => reset()}
          className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 shadow-xs cursor-pointer"
        >
          重新載入
        </button>
      </body>
    </html>
  );
}
