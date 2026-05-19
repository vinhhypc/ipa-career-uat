import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { RELATED_JOBS } from './data';
import { ASSETS } from '../WeLookFor/constants';

export default function RelatedJobsSection() {
  return (
    <section className="section-padding bg-[#fcfcfc] py-10! lg:py-20!">
      <div className="section-content">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 lg:gap-3">
            <Image
              alt=""
              src={ASSETS.sectionStar}
              width={21}
              height={24}
              className="h-4 w-[14px] shrink-0 lg:h-6 lg:w-[21px]"
            />
            <h2 className="text-[20px] leading-[28px] font-bold uppercase text-[#002b5b] lg:text-[30px] lg:leading-[42px]">
              Việc làm bạn sẽ thích
            </h2>
            <span className="hidden h-px w-[60px] bg-[#0d3f77] lg:block" />
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1 text-[14px] leading-[20px] font-bold text-[#002b5b] transition duration-200 hover:scale-105 hover:text-[#0C71C7] lg:gap-1 lg:text-lg lg:leading-[25px]"
          >
            Xem tất cả
            <ArrowRight className="size-4 lg:size-5" />
          </Link>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-1 lg:mt-10 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0">
          {RELATED_JOBS.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="block min-w-[262px] cursor-pointer rounded-[20px] border border-transparent bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2f8fdf] hover:shadow-[0px_8px_20px_0px_rgba(47,143,223,0.2)] lg:min-w-0 lg:rounded-[32px] lg:px-7 lg:py-10"
            >
              <div className="inline-flex rounded bg-[#d9e6f2] px-2 py-1 text-[10px] font-semibold leading-[1.4] text-[#707070] lg:text-[12px]">
                {job.tag}
              </div>
              <h3 className="mt-2 text-[18px] leading-[26px] font-bold text-[#292929]">
                {job.title}
              </h3>
              <div className="mt-3 flex items-center gap-2 text-[14px] leading-[22px] text-[#474747] lg:text-[16px] lg:leading-[26px]">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-4 text-[#707070] lg:size-5" />
                  {job.location}
                </span>
                <span className="size-1 rounded-full bg-black/25" />
                <span>{job.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
