import type { Metadata } from 'next';

import CheDoDaiNgoPage from '@/components/life-at-ipag/CheDoDaiNgoPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Chế độ đãi ngộ',
  description:
    'Chế độ đãi ngộ toàn diện tại IPAG: chăm sóc sức khỏe, wellbeing, hỗ trợ tài chính, ghi nhận, gắn kết và môi trường phát triển bền vững.',
  pathname: '/life-at-ipag/che-do-dai-ngo',
});

export default function CheDoDaiNgoRoutePage() {
  return <CheDoDaiNgoPage />;
}
