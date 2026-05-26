'use client';

import Image from 'next/image';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { listJdsIpagHiring } from '@/actions/jobs';
import FilterSelect from '@/components/common/FilterSelect';
import { ASSETS, fadeUp } from '@/components/jobs/constants';
import JobCard from '@/components/jobs/JobCard';
import type { JobsSearchResponse, NormalizedJob } from '@/components/jobs/types';
import { normalizeJobsResponse } from '@/components/jobs/utils';

type JobsFilterKey = 'domain' | 'business' | 'program' | 'location';

const FILTERS: Array<{
  key: JobsFilterKey;
  defaultLabel: string;
  textSize: string;
  subDomainCode: string;
  defaultOption: { label: string; value: string };
}> = [
  {
    key: 'domain',
    defaultLabel: 'Tất cả Domain',
    textSize: 'text-sm',
    subDomainCode: 'IPAG_HIRING_13',
    defaultOption: { label: 'Tất cả Domain', value: 'all' },
  },
  {
    key: 'business',
    defaultLabel: 'Tất cả Business Line',
    textSize: 'text-base',
    subDomainCode: 'BUSINESS_LINE',
    defaultOption: { label: 'Business', value: 'all' },
  },
  {
    key: 'program',
    defaultLabel: 'Tất cả Program Line',
    textSize: 'text-base',
    subDomainCode: 'IPAG_HIRING_15',
    defaultOption: { label: 'Program', value: 'all' },
  },
  {
    key: 'location',
    defaultLabel: 'Toàn quốc',
    textSize: 'text-base',
    subDomainCode: 'PLC065',
    defaultOption: { label: 'Toàn quốc', value: 'all' },
  },
] as const;

function normalizeNumber(value: unknown) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number.parseInt(value, 10);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

export default function JobsSection() {
  const pageSize = 20;

  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [keyword, setKeyword] = useState('');
  const [selected, setSelected] = useState<Record<JobsFilterKey, string>>({
    domain: 'all',
    business: 'all',
    program: 'all',
    location: 'all',
  });

  const [appliedKeyword, setAppliedKeyword] = useState('');
  const [appliedSelected, setAppliedSelected] = useState<Record<JobsFilterKey, string>>({
    domain: 'all',
    business: 'all',
    program: 'all',
    location: 'all',
  });

  const [jobs, setJobs] = useState<NormalizedJob[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [jobsError, setJobsError] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadMoreError, setLoadMoreError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState(2);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const hasMore = useMemo(() => {
    if (!Number.isFinite(nextPage)) return false;
    if (totalPages != null) return nextPage <= totalPages;
    return true;
  }, [nextPage, totalPages]);

  const fetchJobsPage = useCallback(
    async (
      page: number,
      {
        keyword: requestKeyword,
        selected: requestSelected,
      }: { keyword: string; selected: Record<JobsFilterKey, string> },
    ) => {
      const body: Record<string, unknown> = { page, size: pageSize };

      if (requestSelected.domain && requestSelected.domain !== 'all')
        body.domain = requestSelected.domain;
      if (requestSelected.business && requestSelected.business !== 'all')
        body.businessLine = requestSelected.business;
      if (requestSelected.program && requestSelected.program !== 'all')
        body.program = requestSelected.program;
      if (requestSelected.location && requestSelected.location !== 'all')
        body.workAddress = requestSelected.location;

      const name = requestKeyword.trim();
      if (name) body.name = name;

      return (await listJdsIpagHiring(body)) as JobsSearchResponse;
    },
    [pageSize],
  );

  const runSearch = useCallback(
    async (query: { keyword: string; selected: Record<JobsFilterKey, string> }) => {
      setLoadingJobs(true);
      setJobsError(null);
      setLoadMoreError(null);

      try {
        const data = await fetchJobsPage(1, query);
        const normalized = normalizeJobsResponse(data);
        const resolvedTotalPages = normalizeNumber(data?.totalPages);

        setJobs(normalized);
        setTotalPages(resolvedTotalPages);
        setNextPage(2);

        setAppliedKeyword(query.keyword);
        setAppliedSelected(query.selected);

        if (resolvedTotalPages == null && normalized.length < pageSize) {
          setNextPage(Number.POSITIVE_INFINITY);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        setJobs([]);
        setJobsError(message);
        setTotalPages(null);
        setNextPage(Number.POSITIVE_INFINITY);
      } finally {
        setLoadingJobs(false);
      }
    },
    [fetchJobsPage, pageSize],
  );

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    setLoadMoreError(null);

    try {
      const data = await fetchJobsPage(nextPage, {
        keyword: appliedKeyword,
        selected: appliedSelected,
      });
      const normalized = normalizeJobsResponse(data);
      const resolvedTotalPages = normalizeNumber(data?.totalPages);

      setJobs((prev) => {
        const existing = new Set(prev.map((item) => item.id));
        const merged = [...prev];
        for (const item of normalized) {
          if (!existing.has(item.id)) merged.push(item);
        }
        return merged;
      });

      setTotalPages((prev) => prev ?? resolvedTotalPages);
      setNextPage((prev) => prev + 1);

      if (resolvedTotalPages == null && normalized.length < pageSize) {
        setNextPage(Number.POSITIVE_INFINITY);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setLoadMoreError(message);
    } finally {
      setLoadingMore(false);
    }
  }, [appliedKeyword, appliedSelected, fetchJobsPage, hasMore, loadingMore, nextPage, pageSize]);

  useEffect(() => {
    void runSearch({
      keyword: '',
      selected: { domain: 'all', business: 'all', program: 'all', location: 'all' },
    });
  }, [runSearch]);

  const skeletonItems = useMemo(() => Array.from({ length: 6 }), []);

  return (
    <section className="section-padding !py-11 md:!py-20">
      <div className="section-content flex flex-col gap-10 md:gap-[60px]">
        <motion.div
          className="flex flex-col items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-center text-xl font-bold uppercase leading-[30px] tracking-[0.4px] text-[#292929] md:text-4xl md:leading-[48px] md:tracking-[1px]">
            Cơ hội nghề nghiệp
          </h2>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-16 bg-[#002b5b]/20 md:w-[100px]" />
            <Image
              src={ASSETS.sectionStar}
              alt=""
              aria-hidden
              width={16}
              height={18}
              sizes="(min-width: 768px) 16px, 13px"
              className="h-[14px] w-[13px] md:h-[18px] md:w-4"
            />
            <span className="h-0.5 w-16 bg-[#002b5b]/20 md:w-[100px]" />
          </div>
        </motion.div>

        <motion.div
          className="relative flex w-full flex-col gap-6 overflow-hidden rounded-[20px] px-4 py-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] lg:gap-[52px] lg:rounded-[32px] lg:px-10 lg:py-[60px]"
          style={{
            backgroundImage:
              'linear-gradient(158.46deg, rgb(246, 252, 255) 9.7%, rgb(184, 221, 244) 91.3%)',
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.38] mix-blend-overlay lg:rounded-[32px]"
          >
            <Image
              src={ASSETS.searchHeroTexture}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-fill"
            />
          </div>

          <form
            className="relative flex w-full flex-col gap-4 lg:gap-7"
            onSubmit={(e) => {
              e.preventDefault();
              void runSearch({ keyword, selected });
            }}
          >
            <label className="sr-only" htmlFor="specialist-job-search">
              Tìm kiếm công việc
            </label>
            <div className="flex w-full cursor-text items-center gap-2 rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2 transition-colors duration-200 hover:border-[rgba(0,43,91,0.35)] focus-within:border-[rgba(0,43,91,0.55)] focus-within:ring-2 focus-within:ring-[#0c71c7]/20 lg:gap-2 lg:px-4 lg:py-2.5">
              <Search
                className="size-6 shrink-0 text-[#707070] lg:size-7"
                strokeWidth={1.75}
                aria-hidden
              />
              <input
                id="specialist-job-search"
                type="search"
                placeholder="Tìm kiếm công việc"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] lg:text-base"
              />
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:flex xl:flex-row xl:gap-5">
              {FILTERS.map((filter) => (
                <FilterSelect
                  key={filter.key}
                  selectKey={filter.key}
                  openKey={openFilter}
                  setOpenKey={setOpenFilter}
                  value={selected[filter.key] ?? 'all'}
                  onChange={(nextValue) =>
                    setSelected((prev) => ({ ...prev, [filter.key]: nextValue }))
                  }
                  defaultLabel={filter.defaultLabel}
                  textSize={filter.textSize}
                  subDomainCode={filter.subDomainCode}
                  defaultOption={filter.defaultOption}
                />
              ))}
            </div>

            <motion.button
              type="submit"
              className="group mx-auto flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-bold uppercase leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0px_12px_24px_0px_rgba(0,43,91,0.28)] active:translate-y-0 active:shadow-[0px_6px_14px_0px_rgba(0,43,91,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c71c7]/30 lg:h-12 lg:w-[466px] lg:gap-2 lg:text-lg"
              style={{
                backgroundImage:
                  'linear-gradient(72.72deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
            >
              <Search
                className="size-6 text-white transition-transform duration-200 group-hover:scale-110 lg:size-7"
                strokeWidth={2}
                aria-hidden
              />
              Tìm kiếm cơ hội
            </motion.button>
          </form>
        </motion.div>

        <div className="flex flex-col items-start gap-6 lg:gap-8">
          <motion.div
            className="flex items-center gap-2 lg:gap-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src={ASSETS.sectionStar}
              alt=""
              width={21}
              height={24}
              sizes="(min-width: 1024px) 21px, 14px"
              className="h-4 w-[14px] shrink-0 lg:h-6 lg:w-[21px]"
            />
            <h3 className="text-lg font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b] lg:text-2xl lg:tracking-[0.24px]">
              Tất cả các vị trí
            </h3>
            <span className="h-px w-[60px] bg-[#0d3f77]" />
          </motion.div>

          {loadingJobs ? (
            <div className="w-full">
              <span className="sr-only">Đang tải danh sách vị trí...</span>
              <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-6">
                {skeletonItems.map((_, index) => (
                  <div
                    key={index}
                    aria-hidden
                    className="rounded-[20px] border border-transparent bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] lg:rounded-[32px] lg:px-7 lg:py-8"
                  >
                    <div className="flex animate-pulse flex-col gap-2 lg:gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="h-6 w-24 rounded bg-[#d9e6f2]/70" />
                        <div className="hidden h-5 w-20 rounded bg-black/10 lg:block" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="h-5 w-4/5 rounded bg-black/10 lg:h-6" />
                        <div className="h-4 w-3/5 rounded bg-black/10 lg:h-5" />
                        <div className="h-4 w-2/5 rounded bg-black/10 lg:hidden" />
                      </div>

                      <div className="hidden h-px w-full bg-black/10 lg:block" />
                      <div className="hidden h-10 w-[155px] rounded-full bg-black/10 lg:inline-block" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : jobsError ? (
            <div className="w-full rounded-[20px] border border-black/5 bg-white px-4 py-5 text-sm leading-[22px] text-[#474747] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.08)] lg:rounded-[32px] lg:px-7 lg:py-8">
              Không thể tải danh sách vị trí: {jobsError}
            </div>
          ) : jobs.length === 0 ? (
            <div className="w-full rounded-[20px] border border-black/5 bg-white px-4 py-5 text-sm leading-[22px] text-[#474747] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.08)] lg:rounded-[32px] lg:px-7 lg:py-8">
              Không tìm thấy vị trí phù hợp.
            </div>
          ) : (
            <>
              <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-6">
                {jobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>

              <div className="mt-8 flex w-full flex-col items-center gap-3 lg:mt-10">
                {loadMoreError ? (
                  <p className="text-center text-sm leading-[22px] text-[#d14343]">
                    Không thể tải thêm vị trí: {loadMoreError}
                  </p>
                ) : null}

                {hasMore ? (
                  <button
                    type="button"
                    onClick={() => void loadMore()}
                    disabled={loadingMore}
                    className="inline-flex items-center justify-center rounded-full border border-[#145194] bg-white px-6 py-2.5 text-sm font-semibold text-[#145194] shadow-[0_8px_18px_rgba(20,81,148,0.10)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(20,81,148,0.14)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loadingMore ? 'Đang tải...' : 'Xem thêm'}
                  </button>
                ) : (
                  <p className="text-sm text-[#6b7280]">Bạn đã xem hết vị trí</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
