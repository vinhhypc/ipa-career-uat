import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppChrome from '@/components/AppChrome';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'IPAG Career',
  description: 'IPAG Career — Khai phóng năng lực, kiến tạo giá trị bền vững',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={plusJakarta.variable}>
      <body className={`${plusJakarta.className} antialiased`}>
        <AppChrome>
          <main>{children}</main>
        </AppChrome>
      </body>
    </html>
  );
}
