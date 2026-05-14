import type { Metadata } from 'next';

import ChuyenNhaIpagListPage from '@/components/life-at-ipag/ChuyenNhaIpagListPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Chuyện nhà IPAG',
  description:
    'Chuyện nhà IPAG: nơi chia sẻ câu chuyện, góc nhìn và trải nghiệm thực tế từ các thành viên trong hành trình phát triển tại IPAG.',
  pathname: '/life-at-ipag/chuyen-nha-ipag',
});

export default function ChuyenNhaIpagRoutePage() {
  return <ChuyenNhaIpagListPage />;
}
