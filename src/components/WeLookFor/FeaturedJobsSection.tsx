import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { ASSETS, FEATURED_JOBS } from './constants';

function HotRibbon({ size }: { size: 'sm' | 'lg' }) {
  const wide = size === 'lg';
  const mobilePos = wide
    ? '-right-px -top-px h-[45px] w-[65px]'
    : '-right-px -top-px h-[33px] w-[47px]';
  return (
    <div
      className={`pointer-events-none absolute z-10 ${mobilePos} lg:-right-px lg:top-[-6px] lg:h-[45px] lg:w-[65px]`}
      aria-hidden
    >
      <Image alt="" src={ASSETS.hotRibbon} width={65} height={45} className="h-full w-full" />
    </div>
  );
}

export default function FeaturedJobsSection() {
  return (
    <section id="featured-jobs" className="section-padding !pt-5 !pb-11 bg-[#faf9f7] lg:!pb-20">
      <div className="section-content flex flex-col gap-10 lg:gap-10">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex items-center gap-2 lg:gap-3">
            <Image
              alt=""
              src={ASSETS.sectionStar}
              width={21}
              height={24}
              className="h-4 w-[14px] shrink-0 lg:h-6 lg:w-[21px]"
            />
            <h2 className="text-[18px] font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b] lg:text-[30px] lg:tracking-normal">
              Vị trí nổi bật
            </h2>
            <div className="relative hidden h-px w-[60px] shrink-0 lg:block">
              <Image
                alt=""
                src={ASSETS.programsLine}
                width={60}
                height={1}
                className="block h-px w-full"
              />
            </div>
          </div>
          <Link
            href="/jobs"
            className="inline-flex shrink-0 items-center gap-1 text-[14px] font-bold leading-[1.4] text-[#002b5b] transition duration-200 hover:scale-105 hover:text-[#0C71C7] lg:gap-1 lg:text-lg"
          >
            Xem tất cả
            <span className="inline-flex size-5 items-center justify-center overflow-hidden lg:size-6">
              <Image
                alt=""
                src={ASSETS.arrowRight}
                width={16}
                height={16}
                className="block size-3 lg:size-4"
              />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">
          {FEATURED_JOBS.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="group relative flex flex-1 flex-col gap-4 rounded-[20px] bg-white px-4 py-5 shadow-[0px_3px_12px_0px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0px_10px_26px_0px_rgba(0,43,91,0.14)] lg:gap-4 lg:rounded-[32px] lg:px-7 lg:py-10"
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
