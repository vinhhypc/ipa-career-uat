import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { ASSETS, FEATURED_JOBS } from './constants';

function HotRibbon({ size }: { size: 'sm' | 'lg' }) {
  const wide = size === 'lg';
  const mobilePos = wide ? 'right-2 top-0 h-[45px] w-[65px]' : 'right-3 top-0 h-[33px] w-[47px]';
  const mobileHotText = wide
    ? 'pt-1 text-[14px] leading-[1.4]'
    : 'pt-0.5 text-[10px] leading-[1.4]';
  return (
    <div
      className={`pointer-events-none absolute z-10 ${mobilePos} lg:right-2 lg:top-[-6px] lg:h-[45px] lg:w-[65px]`}
      aria-hidden
    >
      <div
        className="flex h-full w-full items-start justify-end bg-gradient-to-br from-[#ff8c42] to-[#e85d04] pr-1 pt-1"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%)',
        }}
      >
        <span
          className={`font-extrabold uppercase text-white ${mobileHotText} lg:pt-1 lg:text-[14px] lg:leading-[1.4]`}
        >
          HOT
        </span>
      </div>
    </div>
  );
}

export default function FeaturedJobsSection() {
  return (
    <section id="featured-jobs" className="section-padding !pt-5 !pb-11 bg-[#faf9f7] lg:!pb-20">
      <div className="section-content flex flex-col gap-10 lg:gap-10">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex items-center gap-2 lg:gap-3">
            <img
              alt=""
              src={ASSETS.sectionStar}
              className="h-4 w-[14px] shrink-0 lg:h-6 lg:w-[21px]"
            />
            <h2 className="text-[18px] font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b] lg:text-[30px] lg:tracking-normal">
              Vị trí nổi bật
            </h2>
            <div className="relative hidden h-0 w-[60px] shrink-0 lg:block">
              <img alt="" src={ASSETS.programsLine} className="block h-px w-full" />
            </div>
          </div>
          <Link
            href="/jobs"
            className="flex shrink-0 items-center gap-1 text-[14px] font-bold leading-[1.4] text-[#002b5b] lg:gap-1 lg:text-lg"
          >
            Xem tất cả
            <span className="relative size-5 overflow-hidden lg:size-6">
              <img alt="" src={ASSETS.arrowRight} className="size-5 lg:size-6" />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">
          {FEATURED_JOBS.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="group relative flex flex-1 flex-col gap-4 rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0px_12px_32px_0px_rgba(0,43,91,0.18)] lg:gap-4 lg:rounded-[32px] lg:px-7 lg:py-10"
            >
              <HotRibbon size={job.hotSize} />
              <div className="flex flex-col gap-2 lg:gap-3">
                <span className="inline-flex w-fit rounded bg-[#d9e6f2] px-2 py-1 text-[10px] font-semibold leading-[1.4] text-[#707070] lg:px-2 lg:py-1 lg:text-xs">
                  {job.tag}
                </span>
                <h3 className="text-[16px] font-bold leading-[22px] text-[#292929] transition-colors duration-300 group-hover:text-[#002b5b] lg:text-lg lg:leading-[26px]">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-[14px] font-normal leading-5 text-[#474747] lg:gap-2 lg:text-base lg:leading-[26px]">
                  <span className="inline-flex items-center gap-1 lg:gap-1">
                    <MapPin
                      className="size-5 shrink-0 text-[#474747] lg:size-5"
                      strokeWidth={1.75}
                    />
                    {job.location}
                  </span>
                  <span
                    className="size-1 shrink-0 rounded-full bg-black/25 lg:size-1"
                    aria-hidden
                  />
                  <span>{job.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
