'use client';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';
import BenefitsSection from '@/components/life-at-ipag/che-do-dai-ngo/BenefitsSection';
import CtaSection from '@/components/life-at-ipag/che-do-dai-ngo/CtaSection';
import HeroSection from '@/components/life-at-ipag/che-do-dai-ngo/HeroSection';

export default function CheDoDaiNgoPage() {
  return (
    <div className="bg-white">
      <LifeAtIpagBreadcrumbs
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Life at IPAG', href: '/life-at-ipag?tab=che-do-dai-ngo' },
          { label: 'Chế độ đãi ngộ' },
        ]}
      />

      <HeroSection />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
}
