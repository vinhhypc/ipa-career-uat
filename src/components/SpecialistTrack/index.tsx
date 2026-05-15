'use client';

import Breadcrumbs from '@/components/Breadcrumbs';

import CommitmentsSection from './CommitmentsSection';
import HeroSection from './HeroSection';
import JobsSection from './JobsSection';

export default function SpecialistTrack() {
  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding !py-5">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'Professional force' }]}
            />
          </div>
        </div>
      </div>

      <HeroSection />
      <CommitmentsSection />
      <JobsSection />
    </div>
  );
}
