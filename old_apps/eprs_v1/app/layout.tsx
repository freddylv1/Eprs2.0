import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'EPRS_Learning_APP',
  description: 'EPRS 英文發音知識推導系統 - 教育部國中 1200 單字及高中英文參考詞彙表音節切分、自然發音規則與音標推導知識庫',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
