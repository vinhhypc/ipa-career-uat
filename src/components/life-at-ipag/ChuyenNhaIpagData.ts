export type ChuyenNhaIpagCategoryKey =
  | 'all'
  | 'hoi-nhap-kham-pha'
  | 'chuyen-mon-tu-duy'
  | 'hoat-dong-su-kien';

export type ChuyenNhaIpagPost = {
  slug: string;
  title: string;
  excerpt: string;
  categoryKey: Exclude<ChuyenNhaIpagCategoryKey, 'all'>;
  categoryLabel: string;
  dateList: string;
  dateDetail: string;
  authorName: string;
  authorMeta: string;
  coverImageSrc: string;
  heroImageSrc: string;
  breadcrumbLabel: string;
  body: string[];
  relatedSlugs: string[];
};

const CATEGORIES: { key: ChuyenNhaIpagCategoryKey; label: string }[] = [
  { key: 'all', label: 'Tất cả' },
  { key: 'hoi-nhap-kham-pha', label: 'Hội nhập & Khám phá' },
  { key: 'chuyen-mon-tu-duy', label: 'Chuyên môn & Tư duy' },
  { key: 'hoat-dong-su-kien', label: 'Hoạt động & Sự kiện' },
];

export const CHUYEN_NHA_IPAG_CATEGORIES = CATEGORIES;

export const CHUYEN_NHA_IPAG_POSTS: ChuyenNhaIpagPost[] = [
  {
    slug: 'chao-ban-den-voi-ipag',
    title: 'Chào bạn đến với IPAG: Hành trình từ “người mới: thành “người nhà”',
    excerpt:
      'Bước chân vào một môi trường mới luôn là một cuộc dấn thân đầy cảm xúc. Tại IPAG, chúng tôi tin rằng ngày đầu tiên không chỉ là để hoàn tất thủ tục, mà là...',
    categoryKey: 'hoi-nhap-kham-pha',
    categoryLabel: 'Hội nhập & Khám phá',
    dateList: '18/03/2026',
    dateDetail: '18/03/2026',
    authorName: 'IPAG HR Team',
    authorMeta: 'Onboarding & Culture',
    coverImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/thumb-1.png',
    heroImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/thumb-1.png',
    breadcrumbLabel: 'Chào bạn đến với IPAG',
    body: [
      'Bước chân vào một môi trường mới luôn là một cuộc dấn thân đầy cảm xúc.',
      'Tại IPAG, chúng tôi tin rằng ngày đầu tiên không chỉ là để hoàn tất thủ tục, mà là khởi đầu cho một hành trình gắn kết, trưởng thành và đồng hành dài hạn.',
      'Bạn sẽ luôn có người dẫn dắt, có “nhịp” để hòa nhập, và có không gian để đặt câu hỏi — thẳng thắn, tức thì, và xây dựng.',
    ],
    relatedSlugs: ['nhung-khoanh-khac-vndnext-19', 'town-hall-thang-11', 'khi-cfo-25-nam'],
  },
  {
    slug: 'nhung-khoanh-khac-vndnext-19',
    title: 'Những khoảnh khắc làm nên tinh thần VNDNEXT 19',
    excerpt:
      'Sự kiện Staff Meeting VNDIRECT 19 năm với chủ đề “VNDNEXT – Giấc mơ đại đồng” đã khép lại, nhưng năng lượng, cảm hứng và những khoảnh khắc thật...',
    categoryKey: 'hoat-dong-su-kien',
    categoryLabel: 'Hoạt động và sự kiện',
    dateList: '18/02/2026',
    dateDetail: '13/2/2026',
    authorName: 'VNDIRECT Team',
    authorMeta: 'Staff Meeting 19 Years',
    coverImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/thumb-2.png',
    heroImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/hero-detail.png',
    breadcrumbLabel: 'VNDNEXT 19 khoảnh khắc',
    body: [
      'Sự kiện Staff Meeting VNDIRECT 19 năm với chủ đề “VNDNEXT – Giấc mơ đại đồng” đã khép lại, nhưng năng lượng, cảm hứng và những khoảnh khắc thật đẹp mà chúng ta đã cùng tạo nên vẫn còn đọng lại nguyên vẹn.',
      'Đó là những ánh mắt đầy quyết tâm khi cùng hướng về mục tiêu chung. Là những tiếng cười, những cái gật đầu kết nối trái tim với trái tim. Là khoảnh khắc mỗi người chúng ta nhận ra rằng mình chính là một mảnh ghép quan trọng trong hành trình VNDNEXT',
      'Mỗi nỗ lực thầm lặng, mỗi chia sẻ chân thành, mỗi giây phút cùng đứng trong một không gian chung — tất cả đã góp phần tạo nên tinh thần VNDNEXT: Kết nối – Nhân tâm – Hiểu biết – Kỷ luật.',
      'Hãy cùng nhìn lại những hình ảnh ý nghĩa nhất của chương trình — nơi từng khoảnh khắc đều mang theo năng lượng mới, niềm tin mới, và một lời nhắc nhở dịu dàng về hành trình mà chúng ta đang cùng nhau mở ra.',
      'Hy vọng khi nhìn lại những hình ảnh này, Anh/Chị sẽ cảm nhận trọn vẹn sự hứng khởi hôm ấy — để tiếp tục lan tỏa nguồn năng lượng tích cực vào công việc, vào đội ngũ và vào từng bước chuyển mình của VNDNEXT trong thời gian tới.',
      'Chúng ta sẽ đi xa hơn, mạnh mẽ hơn — từ chính những khoảnh khắc này.',
    ],
    relatedSlugs: ['town-hall-thang-11', 'khi-cfo-25-nam', '1068-met-luc-5-gio-sang'],
  },
  {
    slug: 'recap-vndirect-marathon-2025',
    title: 'Recap – VNDIRECT MARATHON 2025',
    excerpt:
      'Sáng thứ Bảy 29/11/2025 tại Công viên Thống Nhất, hơn 300 vận động viên đến từ VNDIRECT và các công ty thành viên Tập đoàn IPA đã cùng hòa chung...',
    categoryKey: 'hoat-dong-su-kien',
    categoryLabel: 'Hoạt động và sự kiện',
    dateList: '18/03/2026',
    dateDetail: '18/03/2026',
    authorName: 'VNDIRECT Team',
    authorMeta: 'VNDIRECT Marathon 2025',
    coverImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/thumb-3.png',
    heroImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/thumb-3.png',
    breadcrumbLabel: 'Recap – VNDIRECT MARATHON 2025',
    body: [
      'Sáng thứ Bảy 29/11/2025 tại Công viên Thống Nhất, hơn 300 vận động viên đến từ VNDIRECT và các công ty thành viên Tập đoàn IPA đã cùng hòa chung nhịp chạy.',
      'Không chỉ là thành tích, đó là tinh thần kỷ luật, sự bền bỉ và năng lượng tập thể — những thứ tạo nên “nhịp” vận hành khỏe mạnh.',
    ],
    relatedSlugs: ['nhung-khoanh-khac-vndnext-19', 'town-hall-thang-11', '1068-met-luc-5-gio-sang'],
  },
  {
    slug: 'town-hall-thang-11',
    title: 'Town hall tháng 11 – khi những câu hỏi khó là “quà tặng”',
    excerpt:
      'Lần đầu tiên trong sự nghiệp, tôi chứng kiến một buổi đối thoại mà ở đó những câu hỏi "nhạy cảm" nhất không bị gạt đi, mà được đón nhận như một ...',
    categoryKey: 'hoat-dong-su-kien',
    categoryLabel: 'Hoạt động và sự kiện',
    dateList: '18/03/2026',
    dateDetail: '18/03/2026',
    authorName: 'Nguyễn Khánh Linh',
    authorMeta: 'Innovation Pathway - 8 tháng tại IPAG',
    coverImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/thumb-4.png',
    heroImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/related-1.png',
    breadcrumbLabel: 'Town hall tháng 11',
    body: [
      'Lần đầu tiên trong sự nghiệp, tôi chứng kiến một buổi đối thoại mà ở đó những câu hỏi “nhạy cảm” nhất không bị gạt đi.',
      'Chúng được đón nhận như một món quà — để nhìn thẳng vào thực tế và cùng nhau tiến bộ.',
    ],
    relatedSlugs: ['nhung-khoanh-khac-vndnext-19', 'khi-cfo-25-nam', '1068-met-luc-5-gio-sang'],
  },
  {
    slug: 'khi-cfo-25-nam',
    title: 'Khi CFO 25 năm kinh nghiệm dạy tôi cách “hoài nghi” số liệu',
    excerpt:
      'Mentoring tại IPAG không phải là "anh nói em nghe". Đó là những cuộc đối thoại hai chiều đầy kịch tính với những người lãnh đạo dày dạn. Mentor của tôi là...',
    categoryKey: 'chuyen-mon-tu-duy',
    categoryLabel: 'Chuyên môn & Tư duy',
    dateList: '18/02/2026',
    dateDetail: '18/02/2026',
    authorName: 'Vũ Thanh Hà',
    authorMeta: 'MA Program - Finance Pathway - 10 tháng tại IPAG',
    coverImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/thumb-5.png',
    heroImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/related-2.png',
    breadcrumbLabel: 'CFO 25 năm kinh nghiệm',
    body: [
      'Mentoring tại IPAG không phải là “anh nói em nghe”.',
      'Đó là những cuộc đối thoại hai chiều đầy kịch tính, nơi dữ liệu được soi chiếu từ nhiều góc nhìn để đi đến quyết định chắc chắn hơn.',
    ],
    relatedSlugs: ['town-hall-thang-11', 'nhung-khoanh-khac-vndnext-19', '1068-met-luc-5-gio-sang'],
  },
  {
    slug: '1068-met-luc-5-gio-sang',
    title: '1.068 mét và bài học “chuyển giao sự xuất sắc” lúc 5 giờ sáng',
    excerpt:
      'Không phải trong phòng họp máy lạnh. Bài học lớn nhất về quản trị tôi nhận được là ở độ cao 1.068m trên đỉnh Yên Tử, lúc 5 giờ sáng, giữa không khí loãng và...',
    categoryKey: 'hoat-dong-su-kien',
    categoryLabel: 'Hoạt động và sự kiện',
    dateList: '18/03/2026',
    dateDetail: '18/03/2026',
    authorName: 'Đinh Công Thành',
    authorMeta: 'Senior MA - IPAM Pathway - 18 tháng tại IPAG',
    coverImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/thumb-6.png',
    heroImageSrc: '/life-at-ipag/chuyen-nha-ipag/figma/related-3.png',
    breadcrumbLabel: '1.068 mét',
    body: [
      'Không phải trong phòng họp máy lạnh.',
      'Bài học lớn nhất về quản trị đôi khi nằm trong những khoảnh khắc kỷ luật nhất — khi bạn và đội ngũ cùng vượt qua giới hạn.',
    ],
    relatedSlugs: ['town-hall-thang-11', 'khi-cfo-25-nam', 'recap-vndirect-marathon-2025'],
  },
];

export function getChuyenNhaIpagPostBySlug(slug: string): ChuyenNhaIpagPost | null {
  return CHUYEN_NHA_IPAG_POSTS.find((p) => p.slug === slug) ?? null;
}
