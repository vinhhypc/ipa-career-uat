import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import ExecutiveServe from '@/components/ExecutiveServe/index';

export const metadata: Metadata = createPageMetadata({
  title: 'Leadership Track',
  description: 'Khám phá chương trình và phúc lợi dành cho đội ngũ Leadership tại IPAG.',
  pathname: '/we-look-for/leadership-track',
});

export default function Page() {
  return <ExecutiveServe />;
}

