import type { Metadata } from 'next';

import CayNenXayNepPage from '@/components/life-at-ipag/CayNenXayNepPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Cấy nền — Xây nếp',
  description:
    'Văn hóa tại IPAG: cấy nền giá trị cốt lõi I-P-A-G và xây nếp thói quen hằng ngày — hành trình chuyển hoá TAC & CAT.',
  pathname: '/life-at-ipag/cay-nen-xay-nep',
});

export default function CayNenXayNepRoutePage() {
  return <CayNenXayNepPage />;
}
