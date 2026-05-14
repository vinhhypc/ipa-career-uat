import type { Metadata } from 'next';

import ExecutiveServe from '@/components/ExecutiveServe';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Executive Serve',
  description: 'Khám phá chương trình và phúc lợi dành cho đội ngũ Executive tại IPAG.',
  pathname: '/executive-serve',
});

export default function Page() {
  return <ExecutiveServe />;
}
