import Image from 'next/image';
import { motion } from 'motion/react';

import { ASSETS, fadeUp } from '@/components/jobs/constants';
import JobCard from '@/components/jobs/JobCard';
import type { NormalizedJob } from '@/components/jobs/types';

type JobsResultsSectionProps = {
  jobs: NormalizedJob[];
  loadingJobs?: boolean;
  jobsError?: string | null;
  hasMore?: boolean;
  loadingMore?: boolean;
  loadMoreError?: string | null;
  onLoadMore?: (() => void) | (() => Promise<void>);
};

export default function JobsResultsSection({
  jobs,
  loadingJobs = false,
  jobsError = null,
  hasMore = true,
  loadingMore = false,
  loadMoreError = null,
  onLoadMore,
}: JobsResultsSectionProps) {
  const skeletonItems = Array.from({ length: 6 });

  return (
    <section className="section-padding !pt-5 !pb-11 bg-[#fcfcfc] lg:!pt-0 lg:!pb-20">
      <div className="section-content">
        <div className="flex flex-col items-start gap-6 lg:gap-10">
          <motion.div
            className="flex items-center gap-2 lg:gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            <Image
              alt=""
              src={ASSETS.sectionStar}
              width={21}
              height={24}
              className="h-4 w-[14px] shrink-0 lg:h-6 lg:w-[21px]"
            />
            <h2 className="text-lg font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b] lg:text-2xl lg:tracking-[0.24px]">
              Tất cả các vị trí
            </h2>
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

              {onLoadMore ? (
                <div className="mt-8 flex w-full flex-col items-center gap-3 lg:mt-10">
                  {loadMoreError ? (
                    <p className="text-center text-sm leading-[22px] text-[#d14343]">
                      Không thể tải thêm vị trí: {loadMoreError}
                    </p>
                  ) : null}

                  {hasMore ? (
                    <button
                      type="button"
                      onClick={onLoadMore}
                      disabled={loadingMore}
                      className="inline-flex items-center justify-center rounded-full border border-[#145194] bg-white px-6 py-2.5 text-sm font-semibold text-[#145194] shadow-[0_8px_18px_rgba(20,81,148,0.10)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(20,81,148,0.14)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loadingMore ? 'Đang tải...' : 'Xem thêm'}
                    </button>
                  ) : (
                    <p className="text-sm text-[#6b7280]">Bạn đã xem hết vị trí</p>
                  )}
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
