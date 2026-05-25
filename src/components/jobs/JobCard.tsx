import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

import type { NormalizedJob } from '@/components/jobs/types';
import { fadeUp } from '@/components/jobs/constants';

type JobCardProps = {
  job: NormalizedJob;
  index: number;
};

export default function JobCard({ job, index }: JobCardProps) {
  return (
    <motion.article
      className="rounded-[20px] border border-transparent bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] transition-colors duration-200 hover:border-[#2f8fdf] lg:rounded-[32px] lg:px-7 lg:py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      custom={index % 2}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded bg-[#d9e6f2] px-2 py-1 text-xs font-semibold leading-[1.4] text-[#707070] lg:text-xs">
            {job.tag || '—'}
          </span>
          <span className="hidden text-sm leading-[26px] text-[#707070] lg:block">
            {job.publishDate || ''}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold leading-[22px] text-[#292929] lg:text-lg lg:leading-[26px]">
            {job.title}
          </h3>
          <div className="min-w-0 text-sm leading-5 text-[#474747] lg:text-base lg:leading-[26px]">
            <div className="hidden items-center gap-2 lg:flex">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-5 text-[#707070]" strokeWidth={1.6} aria-hidden />
                {job.location || '—'}
              </span>
              <span className="size-1 rounded-full bg-black/25" />
              <span>{job.experience || '—'}</span>
            </div>
            <span className="inline-flex items-center gap-1 lg:hidden">
              <MapPin className="size-5 text-[#707070]" strokeWidth={1.6} aria-hidden />
              {job.location || '—'}
            </span>
            <div className="mt-1 flex items-center gap-2 lg:hidden">
              <span>{job.experience || '—'}</span>
            </div>
          </div>
        </div>

        <div className="hidden h-px w-full bg-black/10 lg:block" />
        <Link
          href={`/jobs/${job.id}`}
          className="hidden h-10 w-[155px] items-center justify-center rounded-full text-base font-semibold leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] lg:inline-flex"
          style={{
            backgroundImage:
              'linear-gradient(80.96deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
          }}
        >
          Ứng tuyển
        </Link>
      </div>
    </motion.article>
  );
}
