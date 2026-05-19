'use client';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';
import CoreValuesSection from '@/components/life-at-ipag/cay-nen-xay-nep/CoreValuesSection';
import HabitsSection from '@/components/life-at-ipag/cay-nen-xay-nep/HabitsSection';
import HeroSection from '@/components/life-at-ipag/cay-nen-xay-nep/HeroSection';
import JourneySection from '@/components/life-at-ipag/cay-nen-xay-nep/JourneySection';
import QuoteSection from '@/components/life-at-ipag/cay-nen-xay-nep/QuoteSection';

export default function CayNenXayNepPage() {
  return (
    <div className="bg-white">
      <LifeAtIpagBreadcrumbs
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Life at IPAG', href: '/life-at-ipag?tab=cay-nen-xay-nep' },
          { label: 'Cấy nền — Xây nếp' },
        ]}
      />

      <HeroSection />
      <CoreValuesSection />
      <HabitsSection />
      <JourneySection />
      <QuoteSection />
    </div>
  );
}
