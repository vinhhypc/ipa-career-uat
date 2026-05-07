import type { Metadata } from 'next';

import Home from '@/components/Home';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Trang chủ IPAG tuyển dụng',
  description:
    'Khám phá cơ hội nghề nghiệp tại IPAG: môi trường phát triển, văn hoá gắn kết và lộ trình rõ ràng.',
  pathname: '/',
});

export default function Page() {
  return <Home />;
}
