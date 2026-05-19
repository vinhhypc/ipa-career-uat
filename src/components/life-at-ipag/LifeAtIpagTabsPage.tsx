'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';

import LifeAtIpagBreadcrumbs from '@/components/life-at-ipag/LifeAtIpagBreadcrumbs';
import LifeAtIpagPageIntro from '@/components/life-at-ipag/LifeAtIpagPageIntro';
import LifeAtIpagStoryPanel from '@/components/life-at-ipag/LifeAtIpagStoryPanel';
import { type LifeAtIpagTabKey } from '@/components/life-at-ipag/LifeAtIpagTabs';

type TabContent = {
  title: string;
  description: string;
  ctaHref: string;
  images: {
    hero1: string;
    hero2: string;
    hero3: string;
    hero4: string;
  };
};

const TAB_CONTENT: Record<LifeAtIpagTabKey, TabContent> = {
  'cay-nen-xay-nep': {
    title: 'Cấy nền - Xây nếp',
    description:
      'Câu chuyện chuyển hóa nội tại - tiến tới thành công. Chúng tôi chú trọng xây dựng nền tảng văn hóa vững chắc từ những thói quen nhỏ nhất. Tại IPAG, mỗi cá nhân được khuyến khích rèn luyện sự kỷ luật, lòng biết ơn và tinh thần phụng sự để không chỉ phát triển sự nghiệp mà còn hoàn thiện nhân cách.',
    ctaHref: '/life-at-ipag/cay-nen-xay-nep',
    images: {
      hero1: '/life-at-ipag/cay-nen-xay-nep/hero-1.png',
      hero2: '/life-at-ipag/cay-nen-xay-nep/hero-2.png',
      hero3: '/life-at-ipag/cay-nen-xay-nep/hero-3.png',
      hero4: '/life-at-ipag/cay-nen-xay-nep/hero-4.png',
    },
  },
  'chuong-trinh-dao-tao': {
    title: 'Chương trình đào tạo',
    description:
      'Học từ các chuyên gia hàng đầu và tham gia các chương trình đào tạo chuyên sâu dành riêng cho nhân sự IPAG. Chúng tôi tin rằng học tập không phải là một sự kiện, mà là một nghi thức hàng ngày. Các chương trình mentoring 1-1, IPAG Retreat và Leadership Academy được thiết kế để khai phóng tối đa tiềm năng của bạn.',
    ctaHref: '/life-at-ipag/chuong-trinh-dao-tao',
    images: {
      hero1: '/life-at-ipag/chuong-trinh-dao-tao/hero-1.png',
      hero2: '/life-at-ipag/chuong-trinh-dao-tao/hero-3.png',
      hero3: '/life-at-ipag/chuong-trinh-dao-tao/hero-2.png',
      hero4: '/life-at-ipag/chuong-trinh-dao-tao/hero-4.png',
    },
  },
  'che-do-dai-ngo': {
    title: 'Chế độ đãi ngộ',
    description:
      'Chế độ đãi ngộ toàn diện, tập trung vào sức khỏe, tinh thần và sự phát triển dài hạn của mỗi cá nhân. Từ các gói bảo hiểm sức khỏe cao cấp, chương trình hỗ trợ tài chính đến các hoạt động gắn kết tập thể, IPAG cam kết mang lại một môi trường làm việc an tâm và thịnh vượng cho mọi thành viên.',
    ctaHref: '/life-at-ipag/che-do-dai-ngo',
    images: {
      hero1: '/life-at-ipag/che-do-dai-ngo/hero-1.png',
      hero2: '/life-at-ipag/che-do-dai-ngo/hero-3.png',
      hero3: '/life-at-ipag/che-do-dai-ngo/hero-2.png',
      hero4: '/life-at-ipag/che-do-dai-ngo/hero-4.png',
    },
  },
  'chuyen-nha-ipag': {
    title: 'Chuyện nhà IPAG',
    description:
      'Nơi chia sẻ những câu chuyện, góc nhìn và trải nghiệm thực tế từ các thành viên trong chương trình Management Associate. Khám phá hành trình trưởng thành, những bài học quý giá và những khoảnh khắc đáng nhớ của các MA qua từng giai đoạn phát triển tại IPAG.',
    ctaHref: '/life-at-ipag/chuyen-nha-ipag',
    images: {
      hero1: '/life-at-ipag/chuyen-nha-ipag/hero-1.png',
      hero2: '/life-at-ipag/chuyen-nha-ipag/hero-3.png',
      hero3: '/life-at-ipag/chuyen-nha-ipag/hero-2.png',
      hero4: '/life-at-ipag/chuyen-nha-ipag/hero-4.png',
    },
  },
};

function coerceTabKey(v: string | undefined): LifeAtIpagTabKey {
  if (v === 'chuong-trinh-dao-tao') return 'chuong-trinh-dao-tao';
  if (v === 'cay-nen-xay-nep') return 'cay-nen-xay-nep';
  if (v === 'che-do-dai-ngo') return 'che-do-dai-ngo';
  if (v === 'chuyen-nha-ipag') return 'chuyen-nha-ipag';
  return 'cay-nen-xay-nep';
}

export default function LifeAtIpagTabsPage({ initialTab }: { initialTab?: string }) {
  const router = useRouter();
  const [activeKey, setActiveKey] = useState<LifeAtIpagTabKey>(() => coerceTabKey(initialTab));

  const content = useMemo(() => {
    return TAB_CONTENT[activeKey] ?? TAB_CONTENT['cay-nen-xay-nep'];
  }, [activeKey]);

  const onTabChange = useCallback(
    (key: LifeAtIpagTabKey) => {
      setActiveKey(key);
      router.replace(`/life-at-ipag?tab=${encodeURIComponent(key)}`, { scroll: false });
    },
    [router],
  );

  return (
    <div
      style={{
        background:
          'linear-gradient(179deg, rgba(255, 255, 255, 1) 0%, rgba(254, 246, 235, 1) 100%)',
      }}
    >
      <LifeAtIpagBreadcrumbs />
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute left-[647px] top-[-250px] -z-10 w-[1765px] max-w-none">
          <Image src="/life-at-ipag/figma/tabs-bg.svg" alt="" width={1765} height={798} />
        </div>
        <LifeAtIpagPageIntro
          activeKey={activeKey}
          mobileTitle="KHÁM PHÁ CƠ HỘI"
          desktopTitle="Vững nền tảng, sáng tương lai"
          onTabChange={onTabChange}
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <LifeAtIpagStoryPanel
              title={content.title}
              description={content.description}
              ctaHref={content.ctaHref}
              images={content.images}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
