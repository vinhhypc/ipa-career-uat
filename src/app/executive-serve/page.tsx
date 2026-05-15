import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import ExecutiveServe from '@/components/ExecutiveServe/index';

export const metadata: Metadata = createPageMetadata({
  title: 'Executive Serve',
  description: 'Khám phá chương trình và phúc lợi dành cho đội ngũ Executive tại IPAG.',
  pathname: '/executive-serve',
});

export default function Page() {
  return <ExecutiveServe />;
}
