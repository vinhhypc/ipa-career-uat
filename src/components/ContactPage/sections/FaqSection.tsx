'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

import { FAQ_ITEMS, ITEM_REVEAL, STAGGER_CHILDREN } from '../constants';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="relative h-full w-full">
          <Image
            src="/contact/figma/faq-bg.png"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(-56deg,#062139_0%,#0e335d_100%)] opacity-95" />
        </div>
      </div>

      <motion.div
        className="section-content relative mx-auto flex w-full max-w-[954px] flex-col items-center gap-[52px] px-4 md:px-0"
        variants={STAGGER_CHILDREN}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={ITEM_REVEAL} className="max-w-[812px] text-center">
          <p className="text-sm font-normal leading-8 text-white">CÂU HỎI THƯỜNG GẶP</p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-wide text-white md:text-4xl md:leading-[60px]">
            Bạn có thắc mắc?
          </h2>
        </motion.div>

        <motion.div className="w-full space-y-5" variants={STAGGER_CHILDREN}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = idx === openFaq;
            const contentId = `faq-item-${idx}`;

            return (
              <motion.div
                key={item.q}
                className={[
                  'rounded-[20px] bg-[rgba(202,230,255,0.15)] px-10 py-6',
                  isOpen ? 'border border-[#7BC1FF] border-l-[7px]' : '',
                ].join(' ')}
                variants={ITEM_REVEAL}
              >
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenFaq((v) => (v === idx ? -1 : idx))}
                  >
                    <span className="text-lg font-semibold leading-8 text-[#fbc17b]">{item.q}</span>
                    <Image
                      src={isOpen ? '/contact/figma/faq-minus.svg' : '/contact/figma/faq-plus.svg'}
                      alt=""
                      width={36}
                      height={36}
                      className="shrink-0"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && item.a ? (
                      <motion.div
                        id={contentId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-base leading-[26px] text-white whitespace-pre-line">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
