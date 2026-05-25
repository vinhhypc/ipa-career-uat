'use client';

import { useCallback, useMemo, useState } from 'react';

import JobsResultsSection from '@/components/jobs/JobsResultsSection';
import type { JobsSearchResponse } from '@/components/jobs/types';
import { normalizeJobsResponse } from '@/components/jobs/utils';

type JobsResultsControllerProps = {
  initialJobsResponse: JobsSearchResponse | null;
  initialJobsError: string | null;
  query: {
    domain: string | null;
    businessLine: string | null;
    program: string | null;
    workAddress: string | null;
    name: string | null;
  };
  pageSize?: number;
};

function normalizeNumber(value: unknown) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number.parseInt(value, 10);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

export default function JobsResultsController({
  initialJobsResponse,
  initialJobsError,
  query,
  pageSize = 20,
}: JobsResultsControllerProps) {
  const [jobs, setJobs] = useState(() => normalizeJobsResponse(initialJobsResponse));
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadMoreError, setLoadMoreError] = useState<string | null>(null);

  const totalPages = useMemo(
    () => normalizeNumber(initialJobsResponse?.totalPages),
    [initialJobsResponse?.totalPages],
  );

  const [nextPage, setNextPage] = useState(2);

  const hasMore = useMemo(() => {
    if (totalPages != null) return nextPage <= totalPages;
    return true;
  }, [nextPage, totalPages]);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    setLoadMoreError(null);

    const body: Record<string, unknown> = {
      page: nextPage,
      size: pageSize,
    };

    if (query.domain && query.domain !== 'all') body.domain = query.domain;
    if (query.businessLine && query.businessLine !== 'all') body.businessLine = query.businessLine;
    if (query.program && query.program !== 'all') body.program = query.program;
    if (query.workAddress && query.workAddress !== 'all') body.workAddress = query.workAddress;
    if (query.name) body.name = query.name;

    try {
      const response = await fetch('/api/list_jds_ipag_hiring', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Jobs request failed: ${response.status}`);
      }

      const data = (await response.json()) as JobsSearchResponse;
      const nextJobs = normalizeJobsResponse(data);

      setJobs((prev) => {
        const existing = new Set(prev.map((j) => j.id));
        const merged = [...prev];
        for (const item of nextJobs) {
          if (!existing.has(item.id)) merged.push(item);
        }
        return merged;
      });

      setNextPage((prev) => prev + 1);

      if (totalPages == null) {
        const receivedSize = nextJobs.length;
        if (receivedSize < pageSize) {
          setNextPage(Number.POSITIVE_INFINITY);
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setLoadMoreError(message);
    } finally {
      setLoadingMore(false);
    }
  }, [hasMore, loadingMore, nextPage, pageSize, query, totalPages]);

  const initialLoading = !initialJobsError && !initialJobsResponse;

  return (
    <JobsResultsSection
      jobs={jobs}
      loadingJobs={initialLoading}
      jobsError={initialJobsError}
      hasMore={hasMore}
      loadingMore={loadingMore}
      loadMoreError={loadMoreError}
      onLoadMore={loadMore}
    />
  );
}
