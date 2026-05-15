export const BENEFITS = [
  {
    label: 'Mandate',
    title: 'Trao quyền thực sự',
    body: 'Làm chủ chiến lược, dẫn dắt đội ngũ và chịu trách nhiệm cao nhất trên kết quả công việc của chính mình.',
    icon: '/executive-serve/benefit-mandate.svg',
  },
  {
    label: 'Phần thưởng',
    title: 'Thành quả xứng đáng',
    body: 'Bên cạnh sự ghi nhận, IPAG cam kết chia sẻ lợi ích tương xứng thành quả mà bạn đã dày công kiến tạo.',
    icon: '/executive-serve/benefit-reward.svg',
  },
  {
    label: 'Hệ sinh thái',
    title: 'Sức mạnh từ hệ sinh thái',
    body: 'Nguồn lực từ VNDIRECT, PTI, ANVIE luôn sẵn sàng tiếp sức về khách hàng, công nghệ và đối tác, giúp bạn tập trung vào bài toán lớn.',
    icon: '/executive-serve/benefit-ecosystem.svg',
  },
  {
    label: 'Lộ trình',
    title: 'Vị thế cho cộng sự',
    body: 'Các vị trí điều hành luôn dành cho cộng sự tâm huyết và gắn bó lâu dài.',
    icon: '/executive-serve/benefit-roadmap.svg',
  },
] as const;

export const EXPERTISE_OPTIONS = [
  { id: 'finance', label: 'Finance & Investment' },
  { id: 'operations', label: 'Operations & Supply Chain' },
  { id: 'technology', label: 'Technology & Digital' },
  { id: 'people', label: 'People & Organisation' },
  { id: 'strategy', label: 'Strategy & Corp. Dev.' },
  { id: 'sales', label: 'Sales & Commercial' },
  { id: 'marketing', label: 'Marketing & Brand' },
  { id: 'legal', label: 'Legal & Governance' },
  { id: 'healthcare', label: 'Healthcare & Life Sci.' },
  { id: 'other', label: 'Khác' },
] as const;

export const MAX_EXPERTISE = 2;

export const OPEN_ROLES = [
  {
    title: 'CFO - CHIEF FINANCIAL OFFICER',
    summary:
      'Dẫn dắt chuyển đổi tài chính tại một đơn vị trong danh mục đầu tư của IPAG. P&L thuộc về bạn. Báo cáo trực tiếp Chairwoman.',
    tone: 'blue' as const,
    requirements: [
      '12+ năm tài chính, trong đó có kinh nghiệm M&A hoặc corporate restructuring',
      'Đã lãnh đạo finance team hơn 10 người',
      'Thành thạo đọc và trình bày báo cáo tài chính hợp nhất',
      'Tư duy chiến lược và khả năng ra quyết định dựa trên dữ liệu',
    ],
    benefits: [
      'Đơn vị: IPAG Group',
      'Gói lương senior leadership + bonus hiệu suất theo P&L',
      'Equity opportunity sau 12 tháng',
    ],
  },
  {
    title: 'CHIEF TECHNOLOGY OFFICER (CTO)',
    summary:
      'Thiết kế và vận hành hạ tầng công nghệ số cho các đơn vị trong hệ sinh thái - từ ERP đến AI ứng dụng. Báo cáo trực tiếp Chairwoman.',
    tone: 'cream' as const,
    requirements: [
      '10+ năm technology, đã lead digital transformation cấp enterprise',
      'Kinh nghiệm với Cloud platforms và ERP implementation',
      'Có khả năng truyền đạt công nghệ cho non-technical stakeholders',
      'Tư duy sản phẩm và am hiểu về AI/ML',
    ],
    benefits: [
      'Đơn vị: IPAG Group / IPAS',
      'Gói lương C-level + ESOP',
      'Ngân sách công nghệ rõ ràng theo KPI',
      'Remote-flexible arrangement',
    ],
  },
  {
    title: 'CHIEF OPERATING OFFICER (COO)',
    summary:
      'Xây dựng mô hình vận hành xuất sắc cho HWG - tối ưu chuỗi giá trị từ nhà cung cấp đến khách hàng cuối. Báo cáo CEO.',
    tone: 'blue' as const,
    requirements: [
      '10+ năm operations / supply chain, đã vận hành quy mô hơn 500 nhân sự',
      'Tư duy hệ thống và kỷ luật số liệu cao',
      'Kinh nghiệm multi-unit management là lợi thế lớn',
      'Khả năng tối ưu hóa quy trình và quản trị P&L',
    ],
    benefits: [
      'Đơn vị: IPAG Group / HWG',
      'Gói lương + Performance bonus theo EBITDA portfolio',
      'Cơ hội Board seat sau 24 tháng nếu phù hợp',
      'Ngân sách đào tạo team không bị giới hạn',
    ],
  },
] as const;
