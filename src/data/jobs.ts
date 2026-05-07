export type JobItem = {
  id: string;
  tag: string;
  title: string;
  location: string;
  experience: string;
};

export const JOBS: JobItem[] = [
  {
    id: '1',
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên phân tích nghiệp vụ (Digital BA)',
    location: 'Hà Nội',
    experience: '3-5 năm',
  },
  {
    id: '2',
    tag: 'Chuyển đổi số',
    title: 'Kỹ sư phát triển phần mềm (Software Development Engineer)',
    location: 'Hà Nội',
    experience: '2-3 năm',
  },
  {
    id: '3',
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên cao cấp IT Quality Management',
    location: 'Hà Nội',
    experience: '4-6 năm',
  },
  {
    id: '4',
    tag: 'Chuyển đổi số',
    title: 'Chuyên viên tư vấn khách hàng (CSA)',
    location: 'Hà Nội',
    experience: '2 năm',
  },
  {
    id: '5',
    tag: 'Tiêu dùng xanh',
    title: 'Chuyên viên tư vấn khách hàng (CSO Next Gen)',
    location: 'Hà Nội/Hồ Chí Minh /Thanh Hóa',
    experience: '1-2 năm',
  },
  {
    id: '6',
    tag: 'Tiêu dùng xanh',
    title: 'Trưởng nhóm tư vấn khách hàng Dstation',
    location: 'Hà Nội/Hồ Chí Minh /Thanh Hóa',
    experience: '3 năm',
  },
  {
    id: '7',
    tag: 'Đầu tư tài chính lâu dài',
    title: 'Nhân viên dịch vụ chứng khoán/môi giới chứng khoán',
    location: 'Toàn quốc',
    experience: '1 năm',
  },
  {
    id: '8',
    tag: 'Đầu tư tài chính lâu dài',
    title: 'Trưởng phòng kinh doanh dịch vụ chứng khoán',
    location: 'Toàn quốc (Ưu tiên Hà Nội/Hồ Chí Minh)',
    experience: '3-5 năm',
  },
  {
    id: '9',
    tag: 'Đầu tư tài chính lâu dài',
    title: 'Nhân viên dịch vụ chứng khoán/môi giới chứng khoán',
    location: 'Toàn quốc',
    experience: '1 năm',
  },
  {
    id: '10',
    tag: 'Đầu tư tài chính lâu dài',
    title: 'Trưởng phòng kinh doanh dịch vụ chứng khoán',
    location: 'Toàn quốc (Ưu tiên Hà Nội/Hồ Chí Minh)',
    experience: '3-5 năm',
  },
];

export function getJobById(id: string): JobItem | null {
  return JOBS.find((job) => job.id === id) ?? null;
}
