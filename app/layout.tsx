import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EPRS English Phonics Matrix',
  description: 'Dynamic English Phonics Rules and Syllable Matrix System for MOE 1200 and Senior High Vocabulary',
  openGraph: {
    title: 'EPRS English Phonics Matrix',
    description: 'Dynamic English Phonics Rules and Syllable Matrix System for MOE 1200 and Senior High Vocabulary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPRS English Phonics Matrix',
    description: 'Dynamic English Phonics Rules and Syllable Matrix System for MOE 1200 and Senior High Vocabulary',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className="h-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

