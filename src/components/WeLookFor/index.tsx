import Breadcrumbs from '@/components/Breadcrumbs';

import HeroSection from './HeroSection';
import FeaturedJobsSection from './FeaturedJobsSection';
import PathwaysSection from './PathwaysSection';
import RecruitmentSection from './RecruitmentSection';

export default function WeLookFor() {
  return (
    <div className="bg-white">
      <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
        <div className="section-padding !py-5">
          <div className="section-content">
            <Breadcrumbs
              tone="surface"
              items={[{ label: 'Trang chủ', href: '/' }, { label: 'We look for' }]}
            />
          </div>
        </div>
      </div>

      <HeroSection />
      <FeaturedJobsSection />
      <PathwaysSection />
      <RecruitmentSection />
    </div>
  );
}
