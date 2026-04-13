import type { Metadata } from 'next';

import ChuyenNhaIpagListPage from '@/components/life-at-ipag/ChuyenNhaIpagListPage';

export const metadata: Metadata = {
  title: 'Chuyện nhà IPAG | IPAG Career',
  description:
    'Chuyện nhà IPAG: nơi chia sẻ câu chuyện, góc nhìn và trải nghiệm thực tế từ các thành viên trong hành trình phát triển tại IPAG.',
};

export default function ChuyenNhaIpagRoutePage() {
  return <ChuyenNhaIpagListPage />;
}
