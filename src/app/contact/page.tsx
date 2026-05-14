import type { Metadata } from 'next';

import ContactPage from '@/components/ContactPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Liên hệ',
  description:
    'Liên hệ IPAG: gửi hồ sơ ứng tuyển, đặt lịch trao đổi, hoặc để lại thông tin để đội ngũ tuyển dụng liên hệ lại.',
  pathname: '/contact',
});

export default function ContactRoutePage() {
  return <ContactPage />;
}
