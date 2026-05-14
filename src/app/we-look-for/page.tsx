import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import WeLookFor from '@/components/WeLookFor';

export const metadata: Metadata = createPageMetadata({
  title: 'Chúng tôi tìm kiếm',
  description: 'Tìm hiểu tiêu chí, quy trình và những điều IPAG trân trọng ở ứng viên.',
  pathname: '/we-look-for',
});

export default function Page() {
  return <WeLookFor />;
}
