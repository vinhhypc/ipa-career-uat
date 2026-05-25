'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ASSETS, PATHWAY_TAB_ICONS, PATHWAYS } from './constants';

export default function PathwaysSection() {
  const [pathwayIndex, setPathwayIndex] = useState(0);
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);
  const pathway = PATHWAYS[pathwayIndex];
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const tapTransition = { type: 'spring', stiffness: 520, damping: 28 } as const;
  const hoverScalePill = reduceMotion ? undefined : { scale: 1.05 };
  const tapScaleSoft = reduceMotion ? undefined : { scale: 0.94 };
  const hoverScaleStep = reduceMotion ? undefined : { scale: 1.03 };
  const pathwayHrefByKey: Record<string, string> = {
    maprogram: '/we-look-for/ma-program',
    professionalforce: '/we-look-for/specialist-track',
    executiveserve: '/we-look-for/leadership-track',
  };
  const pathwayHrefFallbackByIndex = [
    '/we-look-for/ma-program',
    '/we-look-for/specialist-track',
    '/we-look-for/leadership-track',
  ] as const;
  const pathwayKey = pathway.name.toLowerCase().replace(/[^a-z0-9]+/g, '');
  const pathwayHref =
    pathwayHrefByKey[pathwayKey] ?? pathwayHrefFallbackByIndex[pathwayIndex] ?? '/';

  return (
    <section className="section-padding bg-gradient-to-b from-[#fef6eb] to-white to-[72%] md:pt-10 md:pb-16 xl:pt-14 xl:pb-20">
      <div className="section-content flex flex-col gap-8 md:gap-10 xl:gap-14">
        <motion.div
          className="flex w-full flex-col gap-2 text-center md:gap-3 xl:gap-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h2 className="text-xl font-bold uppercase leading-8 tracking-[1px] text-[#292929] md:text-3xl md:leading-10 xl:text-4xl xl:font-extrabold xl:leading-[60px]">
            Các chương trình tuyển dụng trọng điểm tại IPAG
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-5 md:gap-6 xl:gap-0"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="flex items-center gap-2 xl:hidden">
            <Image
              alt=""
              src={ASSETS.programsStar}
              width={14}
              height={16}
              className="h-4 w-[14px] shrink-0"
            />
            <h3 className="text-lg font-bold uppercase leading-[1.4] tracking-[0.18px] text-[#002b5b]">
              Về IPAG
            </h3>
            <div className="relative h-px w-[60px] shrink-0">
              <Image
                alt=""
                src={ASSETS.programsLine}
                fill
                sizes="60px"
                className="block object-contain"
              />
            </div>
          </div>

          <div className="flex w-full flex-col shadow-none rounded-4xl ">
            {/* Tab headers */}
            <div className="flex w-full overflow-hidden rounded-t-[20px] border border-b-0 border-[rgba(7,7,7,0.13)] md:rounded-t-[24px] xl:rounded-t-[32px]">
              {PATHWAYS.map((p, i) => {
                const active = i === pathwayIndex;
                const tabIcon = PATHWAY_TAB_ICONS[i];
                return (
                  <button
                    key={p.pathway}
                    type="button"
                    onClick={() => setPathwayIndex(i)}
                    className={`flex cursor-pointer min-h-[128px] min-w-0 flex-1 flex-col items-center justify-center border-r border-[rgba(7,7,7,0.13)] px-3 py-6 text-center transition-colors last:border-r-0 md:min-h-[144px] md:gap-1 md:px-5 md:py-7 xl:min-h-0 xl:gap-1 xl:px-10 xl:py-6 ${
                      active
                        ? 'border-b-[3px] border-[#fbc17b] bg-gradient-to-b from-[#0264b3] to-[#002b5b] text-white md:border-b-4 xl:border-b-[5px]'
                        : 'bg-white text-[#474747] xl:border-t xl:border-[rgba(7,7,7,0.13)]'
                    } ${i === 0 ? 'rounded-tl-[20px] md:rounded-tl-[24px] xl:rounded-tl-[32px]' : ''} ${i === 2 ? 'rounded-tr-[20px] md:rounded-tr-[24px] xl:rounded-tr-[32px]' : ''}`}
                  >
                    {tabIcon.overflow ? (
                      <div
                        className="relative hidden size-11 shrink-0 overflow-hidden sm:block md:size-[52px] xl:size-[60px]"
                        aria-hidden
                      >
                        <div className="absolute inset-[-20.91%_-20.9%_-20.91%_-20.92%]">
                          <Image
                            alt=""
                            src={tabIcon.src}
                            fill
                            sizes="60px"
                            className="absolute inset-0 block max-w-none object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <Image
                        alt=""
                        src={tabIcon.src}
                        width={60}
                        height={60}
                        className="hidden size-11 shrink-0 sm:block md:size-[52px] xl:size-[60px]"
                        aria-hidden
                      />
                    )}
                    <span
                      className={`text-xs font-normal uppercase leading-4 md:text-xs md:leading-4 xl:text-sm xl:leading-4 ${active ? 'text-white' : 'text-[#474747]'}`}
                    >
                      {p.pathway}
                    </span>
                    <span
                      className={` min-w-full text-sm font-bold leading-[18px] md:text-lg md:leading-6 xl:mt-0 xl:text-2xl xl:leading-10 ${active ? 'text-white' : 'text-[#292929]'}`}
                    >
                      {p.name}
                    </span>
                    <div
                      className={`flex flex-col items-center justify-center gap-0.5 text-xs font-normal leading-3 md:text-xs md:leading-4 xl:mt-0 xl:flex-row xl:gap-2 xl:text-sm xl:leading-4 ${
                        active ? 'text-white' : 'text-[#474747]'
                      }`}
                    >
                      <span>{p.lines[0]}</span>
                      <span
                        className={`hidden size-1 shrink-0 rounded-full xl:inline-block ${
                          active ? 'bg-white' : 'bg-black/25'
                        }`}
                        aria-hidden
                      />
                      <span>{p.lines[1]}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tab panel */}
            <div
              className="w-full rounded-b-[20px] md:rounded-b-[24px] xl:rounded-b-[32px]"
              style={{
                backgroundImage:
                  'linear-gradient(13.01deg, rgb(0, 21, 45) 31.68%, rgb(0, 61, 130) 94.34%)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathwayIndex}
                  className="grid grid-cols-1 gap-10 px-4 py-6 md:gap-8 md:px-8 md:py-8 xl:grid-cols-[minmax(0,1fr)_400px] xl:items-center xl:gap-x-8 xl:gap-y-0 xl:px-10 xl:py-10 2xl:grid-cols-[minmax(0,1fr)_460px] 2xl:gap-x-14 2xl:px-20 2xl:py-12"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="flex flex-col gap-5 md:gap-6 xl:col-start-1 xl:gap-7 2xl:gap-8">
                    {/* Title & description */}
                    <motion.div
                      className="flex flex-col gap-4 md:gap-5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
                    >
                      <div className="flex flex-col gap-2 uppercase text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:gap-3 xl:gap-2">
                        <p className="text-sm font-medium leading-[26px] text-white md:text-base md:leading-6 xl:text-sm xl:leading-6 2xl:text-lg 2xl:leading-[26px]">
                          {pathway.kicker}
                        </p>
                        <p className="text-base font-extrabold leading-5 md:text-2xl md:leading-8 md:tracking-[1px] xl:text-2xl xl:leading-10 xl:tracking-[1.5px] 2xl:text-3xl 2xl:leading-[60px] 2xl:tracking-[2px]">
                          {pathway.titleAccentFirst ? (
                            <>
                              <span className="text-[#fbc17b]">{pathway.titleAccent}</span>
                              <span className="text-white">{pathway.titleWhite}</span>
                            </>
                          ) : (
                            <>
                              <span className="text-white">{pathway.titleWhite}</span>
                              <span className="text-[#fbc17b]">{pathway.titleAccent}</span>
                            </>
                          )}
                        </p>
                      </div>
                      <div className="text-sm font-normal leading-[22px] tracking-[0.14px] text-white md:text-base md:leading-7 xl:text-lg xl:leading-8 2xl:text-xl 2xl:leading-[33px] 2xl:tracking-[0.2px]">
                        {pathway.description.map((line, li) => (
                          <p key={li} className="mb-0">
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                    >
                      <motion.button
                        type="button"
                        className="mx-auto flex cursor-pointer h-9 w-full max-w-[400px] items-center justify-center gap-2 rounded-full bg-white px-3 py-2.5 text-sm font-bold leading-[1.4] text-[#474747] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:h-11 md:px-5 md:text-base lg:mx-0 lg:w-[276px] lg:max-w-none xl:h-11 xl:px-6 xl:text-base 2xl:h-12 2xl:text-lg"
                        whileHover={hoverScalePill}
                        whileTap={tapScaleSoft}
                        transition={tapTransition}
                        onClick={() => router.push(pathwayHref)}
                      >
                        XEM THÊM
                        <span className="relative size-3 2xl:size-4">
                          <Image
                            alt=""
                            src={ASSETS.ctaArrow}
                            fill
                            sizes="24px"
                            className="object-contain"
                          />
                        </span>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Steps timeline */}
                  <div className="relative flex flex-col xl:col-start-2 xl:max-w-[400px] xl:self-start 2xl:max-w-[460px]">
                    {/* Vertical line grows from top */}
                    <motion.div
                      className="absolute left-[5px] top-0 bottom-0 w-0.5 lg:left-[7px]"
                      style={{ background: 'rgba(254, 179, 22, 0.5)', originY: 0 }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                      aria-hidden
                    />
                    {pathway.steps.map((step, si) => (
                      <motion.div
                        key={step.title}
                        className={`flex items-center gap-3 md:gap-5 xl:gap-5 2xl:gap-7 ${si < pathway.steps.length - 1 ? 'pb-4 md:pb-6 xl:pb-6 2xl:pb-8' : ''}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onHoverStart={() => setHoveredStepIndex(si)}
                        onHoverEnd={() =>
                          setHoveredStepIndex((current) => (current === si ? null : current))
                        }
                        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.25 + si * 0.12 }}
                      >
                        {/* Dot */}
                        <div className="relative z-10 shrink-0" aria-hidden>
                          <motion.div
                            className="size-3 rounded-xl border-4 border-[#002b5b] bg-[#fbc17a] lg:size-4 lg:rounded-[12px]"
                            animate={
                              hoveredStepIndex === si
                                ? {
                                    boxShadow: '0px 0px 32px 0px rgba(254,179,22,0.95)',
                                    filter: 'brightness(1.12)',
                                  }
                                : {
                                    boxShadow: '0px 0px 20px 0px rgba(254,179,22,0.6)',
                                    filter: 'brightness(1)',
                                  }
                            }
                            transition={tapTransition}
                          />
                        </div>

                        {/* Card */}
                        <div className="min-w-0 flex-1">
                          <motion.div
                            className="origin-left will-change-transform flex items-center rounded-xl border border-[rgba(123,193,255,0.6)] bg-[rgba(202,230,255,0.15)] p-[13px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.1)] backdrop-blur-[12px] md:rounded-[16px] md:px-4 md:py-4 xl:rounded-[18px] xl:px-4 xl:py-3 2xl:rounded-[20px] 2xl:px-[17px] 2xl:py-[13px]"
                            whileHover={hoverScaleStep}
                            transition={tapTransition}
                          >
                            <div className="flex min-w-0 flex-1 flex-col gap-1 md:gap-2">
                              <div className="flex items-center gap-2 md:gap-3">
                                <Image
                                  alt=""
                                  src={step.icon}
                                  width={28}
                                  height={28}
                                  className="size-5 shrink-0 md:size-6 xl:size-6 2xl:size-7"
                                />
                                <p className="text-sm font-bold leading-[22px] text-[#fbc17b] md:text-base md:leading-6 xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-7">
                                  {step.title}
                                </p>
                              </div>
                              <p className="text-sm font-normal leading-5 text-white/90 md:text-sm md:leading-6 xl:text-sm xl:leading-6 2xl:text-base 2xl:leading-6">
                                {step.body}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
