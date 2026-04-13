import type { Metadata } from 'next';

import CayNenXayNepPage from '@/components/life-at-ipag/CayNenXayNepPage';

export const metadata: Metadata = {
  title: 'Cấy nền — Xây nếp | IPAG Career',
  description:
    'Văn hóa tại IPAG: cấy nền giá trị cốt lõi I-P-A-G và xây nếp thói quen hằng ngày — hành trình chuyển hoá TAC & CAT.',
};

export default function CayNenXayNepRoutePage() {
  return <CayNenXayNepPage />;
}
