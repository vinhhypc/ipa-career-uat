'use client';

import Link from 'next/link';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import { motion } from 'motion/react';

import { JOBS } from '@/data/jobs';

const ASSETS = {
  searchHeroTexture: '/we-look-for/search-hero-texture.png',
  iconAsterisk: '/specialist-track/icons/icon-asterisk.png',
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
};

const FILTERS = [
  { label: 'Tất cả Domain', value: 'all' },
  { label: 'Business', value: 'business' },
  { label: 'Program', value: 'program' },
  { label: 'Toàn quốc', value: 'nationwide' },
];

export default function JobsSection() {
  return (
    <section className="section-padding !py-11 md:!py-20">
      <div className="section-content flex flex-col gap-10 md:gap-[60px]">
        {/* Section title */}
        <motion.div
          className="flex flex-col items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-center text-[20px] font-bold uppercase leading-[30px] tracking-[0.4px] text-[#292929] md:text-[40px] md:leading-[48px] md:tracking-[1px]">
            Cơ hội nghề nghiệp
          </h2>
          {/* Decorative element */}
          <div className="flex items-center gap-3">
            <span className="h-px w-16 bg-[#002b5b]/20 md:w-[100px]" />
            <img
              src={ASSETS.iconAsterisk}
              alt=""
              aria-hidden
              className="h-[10px] w-[9px] md:h-[14px] md:w-3"
            />
            <span className="h-px w-16 bg-[#002b5b]/20 md:w-[100px]" />
          </div>
        </motion.div>

        {/* Search box */}
        <motion.div
          className="relative flex w-full flex-col gap-6 overflow-hidden rounded-[20px] px-4 py-8 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] lg:gap-[52px] lg:rounded-[32px] lg:px-10 lg:py-10"
          style={{
            backgroundImage:
              'linear-gradient(173.79deg, rgb(246, 252, 255) 5.95%, rgb(184, 221, 244) 82.23%)',
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
            <img
              alt=""
              src={ASSETS.searchHeroTexture}
              className="absolute left-[-115%] top-0 h-full w-[290%] max-w-none object-cover lg:left-[-16.67%] lg:top-[-27.88%] lg:h-[198.79%] lg:w-[133.33%]"
            />
          </div>

          <form
            className="relative flex w-full flex-col gap-4 lg:gap-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="specialist-job-search">
              Tìm kiếm công việc
            </label>
            <div className="flex w-full items-center gap-2 rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2 lg:px-4 lg:py-2.5">
              <Search className="size-6 shrink-0 text-[#707070] lg:size-7" strokeWidth={1.75} aria-hidden />
              <input
                id="specialist-job-search"
                type="search"
                placeholder="Tìm kiếm công việc"
                className="min-w-0 flex-1 bg-transparent text-[14px] leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] lg:text-base"
              />
            </div>

            <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-5">
              {FILTERS.map((item, i) => (
                <motion.button
                  key={item.value}
                  type="button"
                  className="flex h-10 w-full items-center justify-between rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2.5 text-left text-[14px] font-medium leading-[1.4] text-[#474747] lg:min-h-12 lg:flex-1 lg:px-4 lg:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: 0.3 + i * 0.07 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="truncate">{item.label}</span>
                  <ChevronDown className="size-7 shrink-0 text-[#474747]" strokeWidth={1.75} />
                </motion.button>
              ))}
            </div>

            <motion.button
              type="submit"
              className="mx-auto flex h-10 w-full items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[14px] font-bold uppercase leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] lg:h-[52px] lg:w-[466px] lg:text-[18px]"
              style={{
                backgroundImage:
                  'linear-gradient(69.79deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Search className="size-6 text-white lg:size-7" strokeWidth={2} aria-hidden />
              Tìm kiếm cơ hội
            </motion.button>
          </form>
        </motion.div>

        {/* Job listings */}
        <div className="flex flex-col items-start gap-6 lg:gap-8">
          <motion.div
            className="flex items-center gap-2 lg:gap-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={ASSETS.iconAsterisk}
              alt=""
              aria-hidden
              className="h-4 w-[14px] lg:h-6 lg:w-[21px]"
            />
            <h3 className="text-[18px] font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b] lg:text-[24px] lg:tracking-[0.24px]">
              Tất cả các vị trí
            </h3>
            <span className="h-px w-[60px] bg-[#0d3f77]" />
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-6">
            {JOBS.map((job, index) => (
              <motion.article
                key={`${job.id}-${index}`}
                className="rounded-[20px] border border-transparent bg-white px-4 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] transition-colors duration-200 hover:border-[#2f8fdf] lg:rounded-[32px] lg:px-7 lg:py-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={index % 2}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col gap-2 lg:gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded bg-[#d9e6f2] px-2 py-1 text-[10px] font-semibold leading-[1.4] text-[#707070] lg:text-[12px]">
                      {job.tag}
                    </span>
                    <span className="hidden text-[14px] leading-[26px] text-[#707070] lg:block">
                      30/3/2026
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-[16px] font-bold leading-[22px] text-[#292929] lg:text-[18px] lg:leading-[26px]">
                      {job.title}
                    </h4>
                    <div className="min-w-0 text-[14px] leading-5 text-[#474747] lg:text-[16px] lg:leading-[26px]">
                      <div className="hidden items-center gap-2 lg:flex">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-5 text-[#707070]" strokeWidth={1.6} aria-hidden />
                          {job.location}
                        </span>
                        <span className="size-1 rounded-full bg-black/25" />
                        <span>{job.experience}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 lg:hidden">
                        <MapPin className="size-5 text-[#707070]" strokeWidth={1.6} aria-hidden />
                        {job.location}
                      </span>
                      <div className="mt-1 flex items-center gap-2 lg:hidden">
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden h-px w-full bg-black/10 lg:block" />
                  <Link
                    href={`/jobs/${job.id}`}
                    className="hidden h-10 w-[155px] items-center justify-center rounded-full text-[16px] font-semibold leading-[1.4] text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] lg:inline-flex"
                    style={{
                      backgroundImage:
                        'linear-gradient(80.96deg, rgb(1, 58, 114) 3.48%, rgb(12, 113, 199) 83.47%)',
                    }}
                  >
                    Ứng tuyển
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
