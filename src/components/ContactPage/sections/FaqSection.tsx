'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import { FAQ_ITEMS, ITEM_REVEAL, STAGGER_CHILDREN } from '../constants';

const FAQ_EASE = [0.32, 0.72, 0, 1] as const;

function FaqAnswer({ text }: { text: string }) {
  const paragraphs = text.split('\n').filter(Boolean);

  return (
    <div className="w-full text-base font-normal leading-[26px] text-white">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={index < paragraphs.length - 1 ? 'mb-0' : undefined}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function FaqToggleIcon({ isOpen, reduceMotion }: { isOpen: boolean; reduceMotion: boolean | null }) {
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.32, ease: FAQ_EASE };

  return (
    <div className="relative size-9 shrink-0" aria-hidden>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.88 : 1, rotate: isOpen ? -90 : 0 }}
        transition={transition}
      >
        <Image src="/contact/figma/faq-plus.svg" alt="" width={36} height={36} />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.88 }}
        transition={transition}
      >
        <Image src="/contact/figma/faq-minus.svg" alt="" width={36} height={36} />
      </motion.div>
    </div>
  );
}

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const reduceMotion = useReducedMotion();
  const panelDuration = reduceMotion ? 0 : 0.5;

  return (
    <section className="relative isolate overflow-hidden py-[80px]">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(-65.09deg, rgb(6, 33, 57) 5.77%, rgb(14, 51, 93) 107.88%)',
          }}
        />
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/contact/figma/faq-bg.jpg"
            alt=""
            className="absolute left-0 top-[-42.69%] h-[147.89%] w-full max-w-none object-cover"
          />
        </div>
      </div>

      <motion.div
        className="section-content relative z-10 flex flex-col items-center gap-[52px] px-4 md:px-12 lg:px-20 xl:px-[240px]"
        variants={STAGGER_CHILDREN}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={ITEM_REVEAL} className="w-full max-w-[812px] text-center">
          <p className="text-[14px] font-normal leading-[32px] text-white">CÂU HỎI THƯỜNG GẶP</p>
          <h2 className="mt-2 text-[32px] font-extrabold uppercase tracking-[1px] leading-[44px] text-white sm:text-[40px] sm:leading-[60px]">
            Bạn có thắc mắc?
          </h2>
        </motion.div>

        <motion.div
          className="flex w-full max-w-[954px] flex-col gap-5"
          variants={STAGGER_CHILDREN}
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = idx === openFaq;
            const contentId = `faq-item-${idx}`;

            return (
              <motion.div
                key={item.q}
                layout={!reduceMotion}
                transition={{ layout: { duration: panelDuration, ease: FAQ_EASE } }}
                className={[
                  'rounded-[20px] bg-[rgba(202,230,255,0.15)] px-10 py-6',
                  'border border-solid border-l-[7px] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
                  isOpen ? 'border-[#7BC1FF]' : 'border-transparent',
                ].join(' ')}
                variants={ITEM_REVEAL}
              >
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={item.a ? contentId : undefined}
                    onClick={() => setOpenFaq((v) => (v === idx ? -1 : idx))}
                  >
                    <span className="wrap-break-word text-[18px] font-semibold leading-[32px] text-[#fbc17b]">
                      {item.q}
                    </span>
                    <FaqToggleIcon isOpen={isOpen} reduceMotion={reduceMotion} />
                  </button>

                  {item.a ? (
                    <motion.div
                      initial={false}
                      animate={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      transition={{ duration: panelDuration, ease: FAQ_EASE }}
                      className="grid"
                    >
                      <div className="min-h-0 overflow-hidden">
                        <motion.div
                          id={contentId}
                          role="region"
                          aria-hidden={!isOpen}
                          initial={false}
                          animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : -6,
                          }}
                          transition={
                            reduceMotion
                              ? { duration: 0 }
                              : {
                                  opacity: {
                                    duration: isOpen ? 0.34 : 0.2,
                                    ease: FAQ_EASE,
                                    delay: isOpen ? 0.12 : 0,
                                  },
                                  y: {
                                    duration: 0.4,
                                    ease: FAQ_EASE,
                                    delay: isOpen ? 0.08 : 0,
                                  },
                                }
                          }
                        >
                          <FaqAnswer text={item.a} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
