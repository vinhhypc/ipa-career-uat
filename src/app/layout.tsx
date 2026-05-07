import type { Metadata } from 'next';
import '../globals.css';
import AppChrome from '@/components/AppChrome';
import { plusJakarta } from '@/lib/fonts';
import { getMetadataBase, SITE_DESCRIPTION, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots:
    process.env.NODE_ENV === 'production'
      ? { index: true, follow: true }
      : { index: false, follow: false },
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
