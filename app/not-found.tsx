import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white">404</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">找不到請求的頁面</p>
      <Link
        href="/"
        className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 shadow-xs cursor-pointer"
      >
        返回首頁
      </Link>
    </div>
  );
}
