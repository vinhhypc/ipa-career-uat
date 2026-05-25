import type { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo';
import MaProgram from '@/components/MaProgram';

export const metadata: Metadata = createPageMetadata({
  title: 'MA Program',
  description: 'Tìm hiểu chương trình MA Program tại IPAG: lộ trình phát triển và cơ hội bứt phá.',
  pathname: '/we-look-for/ma-program',
});

export default function Page() {
  return <MaProgram />;
}

