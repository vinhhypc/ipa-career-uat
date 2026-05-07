import type { Metadata } from 'next';

import LifeAtIpagTabsPage from '@/components/life-at-ipag/LifeAtIpagTabsPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Life at IPAG',
  description: 'Khám phá văn hoá, phúc lợi và câu chuyện đời sống tại IPAG.',
  pathname: '/life-at-ipag',
});

export default async function LifeAtIpagPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const tab = typeof sp.tab === 'string' ? sp.tab : undefined;
  return <LifeAtIpagTabsPage initialTab={tab} />;
}
