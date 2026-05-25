'use client';

import BreadcrumbBar from './sections/BreadcrumbBar';
import ContactFormSection from './sections/ContactFormSection';
import FaqSection from './sections/FaqSection';
import HeroSection from './sections/HeroSection';
import OfficesSection from './sections/OfficesSection';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <BreadcrumbBar />
      <HeroSection />
      <ContactFormSection />
      <OfficesSection />
      <FaqSection />
    </div>
  );
}
