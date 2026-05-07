import type { Metadata } from 'next';

import Jobs from '@/components/Jobs';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Cơ hội nghề nghiệp',
  description: 'Khám phá các vị trí đang tuyển tại IPAG và tìm vai trò phù hợp với bạn.',
  pathname: '/jobs',
});

export default async function JobsPage() {
  return <Jobs />;
}
