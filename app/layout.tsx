import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ServiceWorkerRegister } from '../components/pwa/ServiceWorkerRegister';
import { PWAInstallBanner } from '../components/pwa/PWAInstallBanner';

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'EPRS English Phonics Matrix',
  description: 'Dynamic English Phonics Rules and Syllable Matrix System for MOE 1200, Senior High School CEEC 7000 (Levels 1-7), TOEIC, and GEPT Vocabulary',
  applicationName: 'EPRS 英語自然發音系統',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'EPRS英語'
  },
  formatDetection: {
    telephone: false
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    title: 'EPRS English Phonics Matrix',
    description: 'Dynamic English Phonics Rules and Syllable Matrix System for MOE 1200, Senior High School CEEC 7000 (Levels 1-7), TOEIC, and GEPT Vocabulary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPRS English Phonics Matrix',
    description: 'Dynamic English Phonics Rules and Syllable Matrix System for MOE 1200, Senior High School CEEC 7000 (Levels 1-7), TOEIC, and GEPT Vocabulary',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className="h-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ServiceWorkerRegister />
        <PWAInstallBanner />
        {children}
      </body>
    </html>
  );
}
