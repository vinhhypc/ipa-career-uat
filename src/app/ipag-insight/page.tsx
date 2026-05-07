import type { Metadata } from 'next';

import IpagInsight from '@/components/IpagInsight';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'IPAG Insight',
  description: 'Góc nhìn và câu chuyện từ IPAG: văn hoá, con người và hành trình phát triển.',
  pathname: '/ipag-insight',
});

export default function Page() {
  return <IpagInsight />;
}
