import Breadcrumbs from '@/components/Breadcrumbs';
import { getMetadataBase } from '@/lib/seo';

import HeroSection from './HeroSection';
import FeaturedJobsSection from './FeaturedJobsSection';
import PathwaysSection from './PathwaysSection';
import RecruitmentSection from './RecruitmentSection';

type CodebookItem = { code?: unknown; name?: unknown };
type CodebookResponse = { content?: CodebookItem[] };
type HeroFilterOption = { label: string; value: string };

async function fetchCodebookOptions(subDomainCode: string): Promise<HeroFilterOption[]> {
  try {
    const url = new URL('/api/codebook/query', getMetadataBase().origin);
    url.searchParams.set('page', '1');
    url.searchParams.set('size', '2000');
    url.searchParams.set('subDomainCode', subDomainCode);

    const response = await fetch(url.toString(), { cache: 'no-store' });
    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as CodebookResponse;
    const items = Array.isArray(data?.content) ? data.content : [];

    return items
      .filter((item) => typeof item?.code === 'string' && typeof item?.name === 'string')
      .map((item) => ({ value: item.code as string, label: item.name as string }));
  } catch {
    return [];
  }
}

export default async function WeLookFor() {
  const [domainOptions, businessOptions, programOptions, locationOptions] = await Promise.all([
    fetchCodebookOptions('IPAG_HIRING_13'),
    fetchCodebookOptions('BUSINESS_LINE'),
    fetchCodebookOptions('IPAG_HIRING_15'),
    fetchCodebookOptions('PLC065'),
  ]);

  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding !py-5">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'We look for' }]}
            />
          </div>
        </div>
      </div>

      <HeroSection
        codebookOptions={{
          domain: domainOptions,
          business: businessOptions,
          program: programOptions,
          location: locationOptions,
        }}
      />
      <FeaturedJobsSection />
      <PathwaysSection />
      <RecruitmentSection />
    </div>
  );
}
