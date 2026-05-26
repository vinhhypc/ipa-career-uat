import type { Metadata } from 'next';

import { getCodebookQuery } from '@/actions/codebook';
import { listJdsIpagHiring } from '@/actions/jobs';
import { createPageMetadata } from '@/lib/seo';
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
    const data = (await getCodebookQuery({ subDomainCode })) as CodebookResponse;
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
    const resolvedSearchParams = await Promise.resolve(searchParams);

    const body: Record<string, unknown> = {
      page: 1,
      size: 20,
    };

    const domain = resolveSearchParam(resolvedSearchParams.domain);
    if (domain && domain !== 'all') body.domain = domain;

    const businessLine = resolveSearchParam(resolvedSearchParams.businessLine);
    if (businessLine && businessLine !== 'all') body.businessLine = businessLine;

    const program = resolveSearchParam(resolvedSearchParams.program);
    if (program && program !== 'all') body.program = program;

    const workAddress = resolveSearchParam(resolvedSearchParams.workAddress);
    if (workAddress && workAddress !== 'all') body.workAddress = workAddress;

    const name = resolveSearchParam(resolvedSearchParams.name);
    if (name) body.name = name;

    const data = await listJdsIpagHiring(body);
    return { data: data as JobsSearchResponse, error: null as string | null };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { data: null as JobsSearchResponse | null, error: message };
  }
}

type JobsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const resolvedSearchParams = await (searchParams ?? Promise.resolve({}));
  const [domainOptions, businessOptions, programOptions, locationOptions] = await Promise.all([
    fetchCodebookOptions('IPAG_HIRING_13'),
    fetchCodebookOptions('BUSINESS_LINE'),
    fetchCodebookOptions('IPAG_HIRING_15'),
    fetchCodebookOptions('PLC065'),
  ]);

  const { data: jobsResponse, error: jobsError } = await fetchJobs(resolvedSearchParams);

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
