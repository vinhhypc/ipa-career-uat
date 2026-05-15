import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import Jobs from '@/components/Jobs';

export const metadata: Metadata = createPageMetadata({
  title: 'Cơ hội nghề nghiệp',
  description: 'Khám phá các vị trí đang tuyển tại IPAG và tìm vai trò phù hợp với bạn.',
  pathname: '/jobs',
});

export default async function JobsPage() {
  return <Jobs />;
}
