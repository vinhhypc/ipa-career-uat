import type { ChuyenNhaIpagCategoryKey } from '@/components/life-at-ipag/ChuyenNhaIpagData';

export const CATEGORY_CODE_MAP: Record<string, ChuyenNhaIpagCategoryKey> = {
  HOI_NHAP_VA_KHAM_PHA: 'hoi-nhap-kham-pha',
  CHUYEN_MON_VA_TU_DUY: 'chuyen-mon-tu-duy',
  HOAT_DONG_VA_SU_KIEN: 'hoat-dong-su-kien',
};

export const CATEGORY_LABEL_MAP: Record<string, string> = {
  HOI_NHAP_VA_KHAM_PHA: 'Hội nhập & Khám phá',
  CHUYEN_MON_VA_TU_DUY: 'Chuyên môn & Tư duy',
  HOAT_DONG_VA_SU_KIEN: 'Hoạt động & Sự kiện',
};
