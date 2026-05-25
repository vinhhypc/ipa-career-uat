'use client';

import Breadcrumbs from '@/components/Breadcrumbs';

export default function BreadcrumbBar() {
  return (
    <section className="section-padding pt-30! md:pt-[120px]! pb-6!">
      <div className="section-content">
        <Breadcrumbs
          className="text-sm"
          items={[{ label: 'Trang chủ', href: '/' }, { label: 'Contact' }]}
        />
      </div>
    </section>
  );
}
