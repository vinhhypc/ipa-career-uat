import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import SpecialistTrack from '@/components/SpecialistTrack/index';

export const metadata: Metadata = createPageMetadata({
  title: 'Specialist Track',
  description:
    'Tại IPAG, năng lực chuyên môn của bạn được nâng tầm nhờ sức mạnh cộng hưởng từ hệ sinh thái. Chúng tôi biến sự nhạy bén của bạn thành kết quả thực thi vượt trội.',
  pathname: '/specialist-track',
});

export default function Page() {
  return <SpecialistTrack />;
}
