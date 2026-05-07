import type { Metadata } from 'next';

import ChuongTrinhDaoTaoPage from '@/components/life-at-ipag/ChuongTrinhDaoTaoPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Chương trình đào tạo',
  description:
    'Các chương trình đào tạo tại IPAG: học cùng chuyên gia, mentoring, leadership academy, retreat và lộ trình phát triển năng lực bền vững.',
  pathname: '/life-at-ipag/chuong-trinh-dao-tao',
});

export default function ChuongTrinhDaoTaoRoutePage() {
  return <ChuongTrinhDaoTaoPage />;
}
