import type { Metadata } from 'next';

import { createPageMetadata, getMetadataBase } from '@/lib/seo';
import Jobs from '@/components/Jobs';
import type { JobsSearchResponse } from '@/components/jobs/types';

export const metadata: Metadata = createPageMetadata({
  title: 'Cơ hội nghề nghiệp',
  description: 'Khám phá các vị trí đang tuyển tại IPAG và tìm vai trò phù hợp với bạn.',
  pathname: '/jobs',
});

export const dynamic = 'force-dynamic';

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

function resolveSearchParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}

async function fetchJobs(searchParams: Record<string, string | string[] | undefined>) {
  try {
    const url = new URL('/api/list_jds_ipag_hiring', getMetadataBase().origin);

    const body: Record<string, unknown> = {
      page: 1,
      size: 20,
    };

    const domain = resolveSearchParam(searchParams.domain);
    if (domain && domain !== 'all') body.domain = domain;

    const businessLine = resolveSearchParam(searchParams.businessLine);
    if (businessLine && businessLine !== 'all') body.businessLine = businessLine;

    const program = resolveSearchParam(searchParams.program);
    if (program && program !== 'all') body.program = program;

    const workAddress = resolveSearchParam(searchParams.workAddress);
    if (workAddress && workAddress !== 'all') body.workAddress = workAddress;

    const name = resolveSearchParam(searchParams.name);
    if (name) body.name = name;

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    if (!response.ok) {
      return { data: null as JobsSearchResponse | null, error: `Jobs request failed: ${response.status}` };
    }

    const data = (await response.json()) as JobsSearchResponse;
    return { data, error: null as string | null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { data: null as JobsSearchResponse | null, error: message };
  }
}

type JobsPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function JobsPage({ searchParams = {} }: JobsPageProps) {
  const [domainOptions, businessOptions, programOptions, locationOptions] = await Promise.all([
    fetchCodebookOptions('IPAG_HIRING_13'),
    fetchCodebookOptions('BUSINESS_LINE'),
    fetchCodebookOptions('IPAG_HIRING_15'),
    fetchCodebookOptions('PLC065'),
  ]);

  const { data: jobsResponse, error: jobsError } = await fetchJobs(searchParams);

  return (
    <Jobs
      codebookOptions={{
        domain: domainOptions,
        business: businessOptions,
        program: programOptions,
        location: locationOptions,
      }}
      initialJobsResponse={jobsResponse}
      initialJobsError={jobsError}
    />
  );
}
