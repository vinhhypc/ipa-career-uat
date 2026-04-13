import type { Metadata } from 'next';

import CheDoDaiNgoPage from '@/components/life-at-ipag/CheDoDaiNgoPage';

export const metadata: Metadata = {
  title: 'Chế độ đãi ngộ | IPAG Career',
  description:
    'Chế độ đãi ngộ toàn diện tại IPAG: chăm sóc sức khỏe, wellbeing, hỗ trợ tài chính, ghi nhận, gắn kết và môi trường phát triển bền vững.',
};

export default function CheDoDaiNgoRoutePage() {
  return <CheDoDaiNgoPage />;
}
