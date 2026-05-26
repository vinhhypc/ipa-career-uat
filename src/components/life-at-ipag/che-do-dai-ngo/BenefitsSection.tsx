'use client';

import Image from 'next/image';

import BenefitBlock from '@/components/life-at-ipag/che-do-dai-ngo/BenefitBlock';
import { BLOCKS } from '@/components/life-at-ipag/che-do-dai-ngo/data';

export default function BenefitsSection() {
  return (
    <section>
      {BLOCKS.map((block) => (
        <div
          key={block.key}
          className={
            block.key === 'song-an'
              ? 'relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fef6eb_134.87%)]'
              : ''
          }
        >
          {block.key === 'song-an' ? (
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(72%,900px)] md:block"
              aria-hidden
            >
              <Image
                src="/life-at-ipag/che-do-dai-ngo/figma/song-an-bg.png"
                alt=""
                fill
                className="object-contain object-right"
                sizes="(min-width: 768px) 55vw, 0px"
              />
            </div>
          ) : null}
          <div className="relative z-[1] px-4 md:px-12 lg:px-20">
            <div className="section-content">
              <BenefitBlock block={block} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
