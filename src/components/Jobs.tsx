'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { JOBS } from '@/data/jobs';

const ASSETS = {
  searchHeroTexture: '/we-look-for/search-hero-texture.png',
  sectionStar: '/we-look-for/section-star.svg',
} as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
};

export default function Jobs() {
  type FilterKey = 'domain' | 'business' | 'program' | 'location';

  const filters = useMemo(
    () => [
      {
        key: 'domain' as const,
        defaultLabel: 'Tất cả Domain',
        textSize: 'text-sm',
        options: [
          { label: 'Tất cả Domain', value: 'all' },
          { label: 'Chuyển đổi số', value: 'dx' },
        ],
      },
      {
        key: 'business' as const,
        defaultLabel: 'Business',
        textSize: 'text-base',
        options: [
          { label: 'Business', value: 'business' },
          { label: 'Tài chính', value: 'finance' },
        ],
      },
      {
        key: 'program' as const,
        defaultLabel: 'Program',
        textSize: 'text-base',
        options: [
          { label: 'Program', value: 'program' },
          { label: 'MA Program', value: 'ma' },
        ],
      },
      {
        key: 'location' as const,
        defaultLabel: 'Toàn quốc',
        textSize: 'text-base',
        options: [
          { label: 'Toàn quốc', value: 'nationwide' },
          { label: 'Hà Nội', value: 'hanoi' },
        ],
      },
    ],
    [],
  );

  const [openFilter, setOpenFilter] = useState<FilterKey | null>(null);

  const filterWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (!filterWrapRef.current?.contains(target)) setOpenFilter(null);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

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

      {/* 1 — Hero tìm kiếm */}
      <section className="section-padding !pt-8 !pb-11 bg-white lg:!py-20">
        <div className="section-content">
          <div className="flex flex-col items-stretch justify-center rounded-[32px]">
            <motion.div
              className="relative flex w-full flex-col gap-6 overflow-hidden rounded-[20px] px-4 py-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] lg:gap-[52px] lg:rounded-[32px] lg:px-10 lg:py-[60px]"
              style={{
                backgroundImage:
                  'linear-gradient(158.46deg, rgb(246, 252, 255) 9.7%, rgb(184, 221, 244) 91.3%)',
              }}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.38] mix-blend-overlay lg:rounded-[32px]"
              >
                <Image
                  alt=""
                  src={ASSETS.searchHeroTexture}
                  fill
                  priority
                  sizes="100vw"
                  className="object-fill"
                />
              </div>

              <motion.div
                className="relative flex w-full flex-col items-center gap-2 text-center lg:gap-2"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
              >
                <div className="flex w-full flex-col gap-2 lg:gap-5">
                  <h1 className="text-2xl font-bold uppercase leading-[38px] tracking-[1px] text-[#292929] lg:text-5xl lg:leading-[68px]">
                    KHÁM PHÁ CƠ HỘI
                  </h1>
                </div>
              </motion.div>

              <motion.form
                className="relative flex w-full flex-col gap-4 lg:gap-7"
                onSubmit={(e) => e.preventDefault()}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
              >
                <label className="sr-only" htmlFor="job-search">
                  Tìm kiếm công việc
                </label>
                <div className="flex w-full cursor-text items-center gap-2 rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2 transition-colors duration-200 hover:border-[rgba(0,43,91,0.35)] focus-within:border-[rgba(0,43,91,0.55)] focus-within:ring-2 focus-within:ring-[#0c71c7]/20 lg:gap-2 lg:px-4 lg:py-2.5">
                  <Search
                    className="size-6 shrink-0 text-[#707070] lg:size-7"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <input
                    id="job-search"
                    type="search"
                    placeholder="Tìm kiếm công việc"
                    className="min-w-0 flex-1 bg-transparent text-sm leading-[1.4] text-[#474747] outline-none placeholder:text-[#707070] lg:text-base"
                  />
                </div>

                <div
                  className="flex w-full flex-col gap-4 lg:flex-row lg:gap-5"
                  ref={filterWrapRef}
                >
                  {filters.map((filter) => {
                    const selectedValue = filter.options[0]?.value ?? '';
                    const selectedLabel = filter.defaultLabel;
                    const isOpen = openFilter === filter.key;

                    return (
                      <div key={filter.key} className="relative w-full lg:flex-1">
                        <button
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenFilter((prev) => (prev === filter.key ? null : filter.key))
                          }
                          className={`flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border border-[rgba(7,7,7,0.18)] bg-white px-3 py-2.5 text-left font-medium leading-[1.4] text-[#474747] transition-colors duration-200 hover:border-[rgba(0,43,91,0.35)] hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c71c7]/25 lg:min-h-12 lg:px-4 lg:py-2.5 lg:text-base ${filter.textSize} lg:!text-base`}
                        >
                          <span className="truncate">{selectedLabel}</span>
                          <ChevronDown
                            className={`size-7 shrink-0 text-[#474747] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            strokeWidth={1.75}
                          />
                        </button>

                        {isOpen ? (
                          <div
                            role="listbox"
                            className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-lg border border-[rgba(7,7,7,0.18)] bg-white shadow-[0px_12px_32px_0px_rgba(0,43,91,0.18)]"
                          >
                            {filter.options.map((opt) => {
                              const isSelected = opt.value === selectedValue;
                              return (
                                <button
                                  key={opt.value}
                                  type="button"
                                  role="option"
                                  aria-selected={isSelected}
                                  onClick={() => {
                                    setOpenFilter(null);
                                  }}
                                  className={`w-full px-3 py-2.5 text-left text-sm leading-[1.4] text-[#474747] transition-colors duration-150 hover:bg-black/5 lg:px-4 lg:text-base ${isSelected ? 'bg-black/5 font-semibold' : 'font-medium'}`}
                                >
                                  {opt.label}
                                </button>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
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
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

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

            <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-6">
              {JOBS.map((job, index) => (
                <motion.article
                  key={`${job.title}-${index}`}
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
                        {job.tag}
                      </span>
                      <span className="hidden text-sm leading-[26px] text-[#707070] lg:block">
                        30/3/2026
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-bold leading-[22px] text-[#292929] lg:text-lg lg:leading-[26px]">
                        {job.title}
                      </h3>
                      <div className="min-w-0 text-sm leading-5 text-[#474747] lg:text-base lg:leading-[26px]">
                        <div className="hidden items-center gap-2 lg:flex">
                          <span className="inline-flex items-center gap-1">
                            <MapPin
                              className="size-5 text-[#707070]"
                              strokeWidth={1.6}
                              aria-hidden
                            />
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
