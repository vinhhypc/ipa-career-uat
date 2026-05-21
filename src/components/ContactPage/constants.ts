import type { Variants } from 'motion/react';

export const STAGGER_CHILDREN: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.06,
    },
  },
};

export const ITEM_REVEAL: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export type ContactField = {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel';
  colSpan?: 1 | 2;
};

export const PERSONAL_FIELDS: ContactField[] = [
  { name: 'fullName', label: 'Họ tên', required: true, placeholder: 'Nhập họ tên' },
  { name: 'email', label: 'Email', required: true, placeholder: 'Nhập email', type: 'email' },
  {
    name: 'phone',
    label: 'Số điện thoại',
    required: true,
    placeholder: 'Nhập số điện thoại',
    type: 'tel',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Tôi nên gửi hồ sơ ứng tuyển theo cách nào?',
    a: 'Bạn có thể ứng tuyển trực tiếp qua biểu mẫu trên website này hoặc gửi CV về mail nextgen@ipam.vn theo cú pháp: [Tên vị trí] - [Họ tên]. Đội ngũ tuyển dụng sẽ phản hồi thông tin đến bạn trong vòng 02 ngày làm việc',
  },
  { q: 'Tôi chưa chọn được vị trí cụ thể, có thể gửi hồ sơ tổng quát không?', a: '' },
  { q: 'Quy trình và thời gian xử lý hồ sơ mất bao lâu?', a: '' },
  { q: 'IPAG có tuyển dụng tại khu vực TP.Hồ Chí Minh không?', a: '' },
  { q: 'Tôi có thể đến trực tiếp văn phòng để nộp hồ sơ không?', a: '' },
] as const;
