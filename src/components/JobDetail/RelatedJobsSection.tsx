import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { RELATED_JOBS } from './data';

export default function RelatedJobsSection() {
  return (
    <section className="section-padding bg-[#fcfcfc] py-10! lg:py-20!">
      <div className="section-content">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 lg:gap-3">
            <Sparkles className="size-4 text-[#002b5b] lg:size-6" />
            <h2 className="text-[20px] leading-[28px] font-bold uppercase text-[#002b5b] lg:text-[30px] lg:leading-[42px]">
              Việc làm bạn sẽ thích
            </h2>
            <span className="hidden h-px w-[60px] bg-[#0d3f77] lg:block" />
          </div>
          <a
            href="/jobs"
            className="inline-flex items-center gap-1 text-[14px] leading-[20px] font-bold text-[#002b5b] lg:text-[18px] lg:leading-[25px]"
          >
            Xem tất cả
            <ArrowRight className="size-4 lg:size-5" />
          </a>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-1 lg:mt-10 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0">
          {RELATED_JOBS.map((job) => (
            <article
              key={job.title}
              className={`min-w-[262px] rounded-[20px] bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2f8fdf] hover:shadow-[0px_8px_20px_0px_rgba(47,143,223,0.2)] lg:min-w-0 lg:rounded-[32px] lg:px-7 lg:py-10 ${
                job.highlighted
                  ? 'border border-[#2f8fdf] shadow-[0px_8px_20px_0px_rgba(47,143,223,0.2)]'
                  : 'border border-transparent'
              }`}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
