'use client';

import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { PATHWAYS } from './constants';
import PathwayNumberRibbon from './PathwayNumberRibbon';

export default function PathwaysSection() {
  const [openPathwayIndex, setOpenPathwayIndex] = useState<number | null>(null);

  return (
    <section className="section-padding max-md:!py-11 bg-gradient-to-b from-[#fef6eb] to-white to-[72%] md:!py-20">
      <div className="section-content flex flex-col gap-8 md:gap-[52px]">
        <motion.div
          className="flex w-full flex-col items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h2 className="text-center text-[20px] font-bold uppercase leading-[32px] tracking-[1px] text-[#292929] md:text-[40px] md:font-extrabold md:leading-[60px]">
            7 PATHWAYS
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-6">
          {PATHWAYS.map((p, i) => {
            const isBlue = p.variant === 'blue';
            const isActive = i === openPathwayIndex;
            const isLeftCol = i % 2 === 0;
            return (
              <motion.div
                key={p.n}
                className="relative overflow-visible rounded-[28px] md:rounded-[32px]"
                initial={{ opacity: 0, x: isLeftCol ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: isLeftCol ? 0 : 0.08 }}
              >
                <PathwayNumberRibbon n={p.n} />
                <div className="overflow-hidden rounded-[28px] bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.12)] md:rounded-[32px]">
                  <button
                    type="button"
                    onClick={() => setOpenPathwayIndex((prev) => (prev === i ? null : i))}
                    aria-expanded={isActive}
                    aria-controls={`pathway-panel-${p.n}`}
                    className={`flex w-full items-end gap-2 px-4 py-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbc17b]/70 md:px-7 md:py-8 ${
                      isBlue
                        ? 'bg-gradient-to-br from-[#3192e3] to-[#01386f] text-white'
                        : 'bg-gradient-to-br from-[#ffe4c4] to-[#fbbf76] text-[#292929]'
                    }`}
                  >
                    <div className="flex min-w-0 flex-1 flex-col gap-2 md:gap-2">
                      <p className="text-[16px] font-bold leading-[24px] md:text-[24px] md:leading-[32px]">
                        {p.title}
                      </p>
                      <div
                        className={`text-[14px] font-medium leading-[20px] md:text-[18px] md:leading-[26px] ${
                          isBlue ? 'text-white' : 'text-[#474747]'
                        }`}
                      >
                        {p.description}
                      </div>
                    </div>
                    <div
                      className={`relative z-20 flex size-6 shrink-0 items-center justify-center rounded-full border p-1 md:size-7 ${
                        isBlue ? 'border-white bg-[#06427c]' : 'border-[#707070] bg-[#fff1df]'
                      }`}
                      aria-hidden
                    >
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <ChevronDown
                          className={`size-5 md:size-7 ${isBlue ? 'text-white' : 'text-[#474747]'}`}
                          strokeWidth={2}
                        />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`pathway-panel-${p.n}`}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: 'easeOut' }}
                        className="overflow-hidden bg-white"
                      >
                        <motion.div
                          initial={{ y: -8 }}
                          animate={{ y: 0 }}
                          exit={{ y: -8 }}
                          transition={{ duration: 0.28, ease: 'easeOut' }}
                        >
                          <div className="flex flex-col gap-3 px-4 pt-4 md:px-7 md:pt-4">
                            <p className="text-[14px] font-bold leading-[22px] text-[#474747] md:text-[16px] md:leading-[26px]">
                              KEY WORK
                            </p>
                            <ul className="space-y-2">
                              {p.keyWork.map((line, li) => (
                                <motion.li
                                  key={line}
                                  className="flex gap-2 text-[14px] leading-[20px] text-[#474747] md:text-[16px] md:leading-[22px]"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.25, ease: 'easeOut', delay: 0.06 + li * 0.06 }}
                                >
                                  <Check
                                    className="mt-0.5 size-5 shrink-0 text-[#00377c]"
                                    strokeWidth={2}
                                    aria-hidden
                                  />
                                  <span className="min-w-0 flex-1">{line}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="mx-4 mt-4 h-px bg-black/10 md:mx-7" aria-hidden />

                          <motion.p
                            className="px-4 pb-5 pt-4 text-[14px] font-normal leading-[22px] text-[#474747] md:px-7 md:pb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.15 }}
                          >
                            <span className="font-semibold italic">Phù hợp:</span>{' '}
                            <span className="italic">{p.fit}</span>
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="flex w-full flex-col items-center gap-4 rounded-[28px] px-7 py-5 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] md:rounded-[32px] md:gap-4 md:px-7 md:py-5"
            style={{
              backgroundImage: 'linear-gradient(-84.74deg, #3192e3 18.66%, #01386f 101.28%)',
            }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="w-full text-center text-[16px] font-bold uppercase leading-[22px] tracking-[0.5px] text-white md:text-[24px] md:leading-[32px]">
              Bạn đã sẵn sàng?
            </p>
            <Link
              href="/we-look-for"
              className="flex h-9 w-full items-center justify-center rounded-full bg-gradient-to-br from-white to-[#fff1e1] px-3 py-2.5 text-[14px] font-bold leading-[1.4] text-[#070707] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:h-10 md:w-[220px] md:text-[16px]"
            >
              <span className="md:hidden">NỘP HỒ SƠ NGAY</span>
              <span className="hidden md:inline">Nộp hồ sơ ngay</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
