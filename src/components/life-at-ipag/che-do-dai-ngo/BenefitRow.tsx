'use client';

import Image from 'next/image';

import type { BenefitItem } from '@/components/life-at-ipag/che-do-dai-ngo/data';

export default function BenefitRow({ title, desc, iconSrc }: BenefitItem) {
  return (
    <div className="flex items-center gap-4">
      <Image src={iconSrc} alt="" width={48} height={48} className="shrink-0" aria-hidden />
      <div className="min-w-0">
        <p className="text-lg font-bold uppercase leading-7 text-[#292929] md:text-xl md:leading-[30px]">
          {title}
        </p>
        <p className="mt-1 text-sm leading-6 text-[#474747] md:text-base">{desc}</p>
      </div>
    </div>
  );
}
