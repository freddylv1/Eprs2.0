'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">發生錯誤</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">系統載入失敗，請嘗試重新整理</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 shadow-xs cursor-pointer"
      >
        再試一次
      </button>
    </div>
  );
}
