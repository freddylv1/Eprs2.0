import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-slate-950 text-white">
      <h2 className="text-xl font-bold text-slate-100 mb-2">找不到頁面 (404)</h2>
      <p className="text-sm text-slate-400 mb-6">您所尋找的頁面不存在或已被移除。</p>
      <Link
        href="/"
        className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors"
      >
        返回首頁
      </Link>
    </div>
  );
}

