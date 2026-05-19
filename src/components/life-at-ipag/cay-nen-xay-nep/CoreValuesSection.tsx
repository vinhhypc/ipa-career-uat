'use client';

import Image from 'next/image';
import { Check, ChevronDown, Zap } from 'lucide-react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { useCallback, useMemo, useState } from 'react';

import LetterBadge from '@/components/life-at-ipag/cay-nen-xay-nep/LetterBadge';
import { getCoreDetail, IPAG_CORE } from '@/components/life-at-ipag/cay-nen-xay-nep/data';

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const cardListReveal: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

const bulletListReveal: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const bulletItemReveal: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: 'easeOut' as const },
  },
};

// Render accordion gia tri cot loi voi animation vao khung va mo dong noi dung mem hon.
export default function CoreValuesSection() {
  const [openKey, setOpenKey] = useState<string>('');

  const toggle = useCallback((key: string) => {
    setOpenKey((prev) => (prev === key ? '' : key));
  }, []);

  const detailsByKey = useMemo(() => {
    const map = new Map<string, ReturnType<typeof getCoreDetail>>();
    IPAG_CORE.forEach((core) => {
      map.set(core.key, getCoreDetail(core));
    });
    return map;
  }, []);

  return (
    <motion.section
      className="relative overflow-hidden bg-[linear-gradient(-1deg,#ffffff_15%,#fef6eb_100%)] px-4 py-14 md:px-12 md:py-20 lg:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
    >
      <Image
        src="/life-at-ipag/cay-nen-xay-nep/figma/core-values-bg.svg"
        alt=""
        width={986}
        height={772}
        className="pointer-events-none absolute -top-16 right-[-280px] opacity-[0.03] md:-top-20 md:right-[-200px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-black/[0.08]"
        aria-hidden
      />
      <div className="section-content">
        <div className="mx-auto ml-0 grid w-full max-w-[1366px] gap-12 lg:grid-cols-[360px_1fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-extrabold uppercase tracking-[3px] text-[#292929] md:text-[40px] md:leading-[60px]">
              Cấy nền
            </h2>
            <motion.div
              className="mt-3 h-[3px] w-40 bg-[#2e5f97]"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            />
            <motion.p
              className="mt-6 text-lg leading-8 text-[#474747] md:text-2xl md:leading-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
            >
              Tại IPAG, những giá trị cốt lõi được cấy sâu để trở thành nếp sống
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardListReveal}
          >
            {IPAG_CORE.map((item) => {
              const isOpen = openKey === item.key;
              const detail = detailsByKey.get(item.key);
              return (
                <motion.div
                  key={item.key}
                  variants={cardReveal}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={`overflow-hidden rounded-[32px] border-l-[6px] bg-[linear-gradient(141deg,rgba(241,249,255,1)_0%,rgba(233,246,255,1)_100%)] shadow-[0_4px_12px_rgba(0,0,0,0.1)] ${
                    isOpen
                      ? 'border-l-[#002B5B] shadow-[0_16px_36px_rgba(20,81,148,0.14)]'
                      : 'border-l-transparent'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.key)}
                    className="flex w-full cursor-pointer items-center gap-4 px-6 py-6 text-left md:px-10 md:py-6"
                  >
                    <LetterBadge letter={item.letter} active={isOpen} />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-normal text-[#707070]">{item.en}</p>
                      <p className="mt-1 text-xl font-extrabold text-[#292929] md:text-2xl">
                        {item.vi}
                      </p>
                    </div>
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full border ${
                        isOpen
                          ? 'border-transparent bg-[#145194] text-white'
                          : 'border-[#d6dbe3] bg-white text-[#9aa3af]'
                      }`}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                      >
                        <ChevronDown className="size-6" />
                      </motion.div>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key={`${item.key}-content`}
                        initial={{ height: 0, opacity: 0, y: -8 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -8 }}
                        transition={{ duration: 0.36, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="border-t border-black/5 px-4 pb-5 pt-4 md:px-5 md:pb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.22, delay: 0.04 }}
                        >
                          {detail?.image ? (
                            <motion.div
                              className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)]"
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                              <div className="relative aspect-[21/9]">
                                <Image
                                  src={detail.image}
                                  alt=""
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 1024px) 100vw, 720px"
                                />
                              </div>
                            </motion.div>
                          ) : null}

                          <motion.p
                            className="mt-4 text-sm leading-6 text-[#474747] md:text-base md:leading-7"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.25, delay: 0.06 }}
                          >
                            {detail?.lead}
                          </motion.p>

                          {detail?.bullets?.length ? (
                            <motion.div
                              className="mt-4 space-y-2.5"
                              initial="hidden"
                              animate="show"
                              exit="hidden"
                              variants={bulletListReveal}
                            >
                              {detail.bullets.map((b) => (
                                <motion.div
                                  key={b}
                                  className="flex items-start gap-3"
                                  variants={bulletItemReveal}
                                >
                                  <Check className="mt-0.5 size-4 shrink-0 text-[#145194]" />
                                  <p className="text-sm leading-6 text-[#292929] md:text-base">
                                    {b.includes(':') ? (
                                      <>
                                        <span className="font-extrabold">{b.split(':')[0]}:</span>{' '}
                                        <span className="font-medium text-[#667085]">
                                          {b.split(':').slice(1).join(':').trim()}
                                        </span>
                                      </>
                                    ) : (
                                      <span className="font-medium">{b}</span>
                                    )}
                                  </p>
                                </motion.div>
                              ))}
                            </motion.div>
                          ) : null}

                          {detail?.question ? (
                            <motion.div
                              className="mt-5 border-t border-black/5 pt-4"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.24, delay: 0.12 }}
                            >
                              <div className="flex items-start gap-3 ">
                                <Zap className="mt-0.5 size-4 shrink-0" fill="#00377C" />
                                <p className="text-sm font-semibold leading-6 md:text-base">
                                  {detail.question}
                                </p>
                              </div>
                            </motion.div>
                          ) : null}
                        </motion.div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
