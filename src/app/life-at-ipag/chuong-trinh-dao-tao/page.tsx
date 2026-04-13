import type { Metadata } from 'next';

import ChuongTrinhDaoTaoPage from '@/components/life-at-ipag/ChuongTrinhDaoTaoPage';

export const metadata: Metadata = {
  title: 'Chương trình đào tạo | IPAG Career',
  description:
    'Các chương trình đào tạo tại IPAG: học cùng chuyên gia, mentoring, leadership academy, retreat và lộ trình phát triển năng lực bền vững.',
};

export default function ChuongTrinhDaoTaoRoutePage() {
  return <ChuongTrinhDaoTaoPage />;
}
