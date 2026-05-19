'use client';

import BenefitBlock from '@/components/life-at-ipag/che-do-dai-ngo/BenefitBlock';
import { BLOCKS } from '@/components/life-at-ipag/che-do-dai-ngo/data';

export default function BenefitsSection() {
  return (
    <section>
      {BLOCKS.map((block) => (
        <div
          key={block.key}
          className={
            block.key === 'song-an' ? 'bg-[linear-gradient(180deg,#ffffff_0%,#fef6eb_100%)]' : ''
          }
        >
          <div className="px-4 md:px-12 lg:px-20">
            <div className="section-content">
              <BenefitBlock block={block} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
