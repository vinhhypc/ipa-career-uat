import type { Metadata } from 'next';

import MaProgram from '@/components/MaProgram';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'MA Program',
  description: 'Tìm hiểu chương trình MA Program tại IPAG: lộ trình phát triển và cơ hội bứt phá.',
  pathname: '/ma-program',
});

export default function Page() {
  return <MaProgram />;
}
