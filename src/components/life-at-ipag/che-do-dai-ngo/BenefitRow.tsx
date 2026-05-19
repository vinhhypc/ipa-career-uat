'use client';

import Image from 'next/image';

import type { BenefitItem } from '@/components/life-at-ipag/che-do-dai-ngo/data';

export default function BenefitRow({ title, desc, iconSrc }: BenefitItem) {
  return (
    <div className="flex items-center gap-4">
      <Image src={iconSrc} alt="" width={48} height={48} className="shrink-0" aria-hidden />
      <div className="min-w-0">
        <p className="text-[17px] font-bold uppercase leading-7 text-[#292929] md:text-[20px] md:leading-[30px]">
          {title}
        </p>
        <p className="mt-1 text-[15px] leading-6 text-[#474747] md:text-[16px]">{desc}</p>
      </div>
    </div>
  );
}
