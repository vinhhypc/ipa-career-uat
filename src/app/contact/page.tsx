import type { Metadata } from 'next';

import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | IPAG Career',
  description:
    'Liên hệ IPAG: gửi hồ sơ ứng tuyển, đặt lịch trao đổi, hoặc để lại thông tin để đội ngũ tuyển dụng liên hệ lại.',
};

export default function ContactRoutePage() {
  return <ContactPage />;
}

