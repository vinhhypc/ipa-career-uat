// import abountMe1 from '@/assets/about_me1.png';
// import Image from 'next/image';
// import fakeData from './tintuc_thongcaobaochi.json';
import { notFound, redirect } from 'next/navigation';
import dayjs from 'dayjs';
import { slugify } from '@/lib/post';
import { fetchPostInfo } from '@/services';

export function parseSlugAndId(input: string) {
  const match = input.match(/^(.*)-(\d+)(?:\.html)?$/);

  if (!match) {
    return null;
  }

  return {
    slug: match[1],
    id: match[2],
  };
}

// const fetchFakePostInfo = async (id: string) => {
//   const post = fakeData.content.find((item: any) => item.id === id);

//   if (!post) {
//     return;
//   }

//   return {
//     id: post.id,
//     title: post.name,
//     category: 'Tin công ty thành viên',
//     description:
//       'IPA Solution chính thức giới thiệu nền tảng đầu tư thông minh, tích hợp loạt tiện ích giúp khách hàng cá nhân, khách hàng doanh nghiệp...',
//     date: '24/02/2025',
//     contentUrl: post?.cms_contentInfo?.fields?.cms_content?.linkFileUrl,
//   };
// };

async function fetchPostFileContent(url: string) {
  const res = await fetch(url, {
    next: { revalidate: 20 },
  });

  return res.text();
}

export default async function Post({ url }: { url: string }) {
  const { id, slug } = parseSlugAndId(url) || {};

  if (!id || !slug) {
    return notFound();
  }

  const post = await fetchPostInfo(id);

  if (!post) {
    return notFound();
  }

  const postSlug = post.slug || slugify(post.title);
  if (slug !== postSlug) {
    return redirect(`/bai-viet/${postSlug}-${id}.html`);
  }

  let htmlContent = '';
  if (post.contentUrl) {
    htmlContent = await fetchPostFileContent(post.contentUrl);
  }

  return (
    <section className="section-padding bg-brand-white pt-[120px]!">
      <div className="section-content">
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <span className="text-xs text-text-secondary p-1 bg-text-secondary/20">
            {post.category}
          </span>
          <span className="text-xs md:text-sm text-black">{formatDate(post.date)}</span>
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-brand-black mb-3 md:mb-4">
          {post.title}
        </h1>
        <div className="text-black" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </section>
  );
}

function formatDate(time?: string | number) {
  if (time == null) return '-';
  const d = dayjs(time);
  return d.isValid() ? d.format('DD/MM/YYYY') : '';
}
