'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import InsightHeroSection from '@/components/ipag-insight/InsightHeroSection';
import InsightPurposeSection from '@/components/ipag-insight/InsightPurposeSection';
import InsightMessageSection from '@/components/ipag-insight/InsightMessageSection';
import InsightEcosystemSection from '@/components/ipag-insight/InsightEcosystemSection';

export default function IpagInsight() {
  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding py-5!">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'IPAG Insight' }]}
            />
          </div>
        </div>
      </div>

      <InsightHeroSection />
      <InsightPurposeSection />
      <InsightMessageSection />
      <InsightEcosystemSection />
    </div>
  );
}
