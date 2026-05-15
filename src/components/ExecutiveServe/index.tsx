'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

import Breadcrumbs from '@/components/Breadcrumbs';

import BenefitsSection from './BenefitsSection';
import ContactModal from './ContactModal';
import HeroSection from './HeroSection';
import OpenRolesSection from './OpenRolesSection';

export default function ExecutiveServe() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>

      <div className="bg-white">
        <div className="border-b border-black/5 bg-white pt-[88px] lg:pt-[104px]">
          <div className="section-padding py-5!">
            <div className="section-content">
              <Breadcrumbs
                tone="surface"
                items={[{ label: 'Trang chủ', href: '/' }, { label: 'Executive serve' }]}
              />
            </div>
          </div>
        </div>

        <HeroSection />
        <BenefitsSection />
        <OpenRolesSection onOpenModal={() => setModalOpen(true)} />
      </div>
    </>
  );
}
