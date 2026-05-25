'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { useCallback, useMemo } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { fadeIn } from '@/components/jobs/constants';
import JobsHeroController from '@/components/jobs/JobsHeroController';
import JobsResultsSection from '@/components/jobs/JobsResultsSection';
import type { FilterConfig, JobsProps } from '@/components/jobs/types';
import { normalizeJobsResponse } from '@/components/jobs/utils';

export default function JobsClient({
  codebookOptions,
  initialJobsResponse = null,
  initialJobsError = null,
}: JobsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useMemo<FilterConfig[]>(
    () => [
      {
        key: 'domain',
        defaultLabel: 'Tất cả Domain',
        textSize: 'text-sm',
        options: codebookOptions.domain ?? [],
        defaultOption: { label: 'Tất cả Domain', value: 'all' },
      },
      {
        key: 'business',
        defaultLabel: 'Tất cả Business Line',
        textSize: 'text-base',
        options: codebookOptions.business ?? [],
        defaultOption: { label: 'Business', value: 'all' },
      },
      {
        key: 'program',
        defaultLabel: 'Tất cả Program Line',
        textSize: 'text-base',
        options: codebookOptions.program ?? [],
        defaultOption: { label: 'Program', value: 'all' },
      },
      {
        key: 'location',
        defaultLabel: 'Toàn quốc',
        textSize: 'text-base',
        options: codebookOptions.location ?? [],
        defaultOption: { label: 'Toàn quốc', value: 'all' },
      },
    ],
    [
      codebookOptions.business,
      codebookOptions.domain,
      codebookOptions.location,
      codebookOptions.program,
    ],
  );

  const searchParamsKey = searchParams.toString();

  const normalizedJobs = useMemo(
    () => normalizeJobsResponse(initialJobsResponse),
    [initialJobsResponse],
  );

  const initialKeyword = searchParams.get('name') ?? '';
  const initialSelected = {
    domain: searchParams.get('domain') ?? 'all',
    business: searchParams.get('businessLine') ?? 'all',
    program: searchParams.get('program') ?? 'all',
    location: searchParams.get('workAddress') ?? 'all',
  };

  const navigate = useCallback((href: string) => router.push(href), [router]);

  return (
    <div className="bg-white">
      <motion.div
        className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="section-padding !py-5">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Professional force', href: '/' }, { label: 'Tất cả vị trí' }]}
            />
          </div>
        </div>
      </motion.div>

      <JobsHeroController
        key={searchParamsKey}
        filters={filters}
        initialKeyword={initialKeyword}
        initialSelected={initialSelected}
        onNavigate={navigate}
      />

      <JobsResultsSection jobs={normalizedJobs} jobsError={initialJobsError} />
    </div>
  );
}
