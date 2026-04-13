import LifeAtIpagTabsPage from '@/components/life-at-ipag/LifeAtIpagTabsPage';

export default async function LifeAtIpagPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const tab = typeof sp.tab === 'string' ? sp.tab : undefined;
  return <LifeAtIpagTabsPage initialTab={tab} />;
}
