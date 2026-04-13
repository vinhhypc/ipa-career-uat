import type { Metadata } from 'next';
import '../globals.css';
import AppChrome from '@/components/AppChrome';
import { plusJakarta } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'IPAG Career',
  description: 'IPAG Career — Khai phóng năng lực, kiến tạo giá trị bền vững',
};

// Root layout áp dụng font local Plus Jakarta cho toàn bộ ứng dụng.
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
