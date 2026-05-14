'use client';

import CareerGroupsSection from '@/components/home/CareerGroupsSection';
import EpicSection from '@/components/home/EpicSection';
import FoundationSection from '@/components/home/FoundationSection';
import HeroSection from '@/components/home/HeroSection';
import LifeAtIpagSection from '@/components/home/LifeAtIpagSection';
import WhyIpagSection from '@/components/home/WhyIpagSection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FoundationSection />
      <WhyIpagSection />
      <EpicSection />
      <LifeAtIpagSection />
      <CareerGroupsSection />
    </div>
  );
}
