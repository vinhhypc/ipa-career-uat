1. Assets (image, icon, svg) phải export trực tiếp từ Figma và lưu trong public theo page/section rõ ràng.
2. UI phải bám sát Figma: spacing, typography, màu sắc, radius, layout, animation, responsive.
3. Responsive mobile-first theo Tailwind: sm, md, lg, xl, 2xl. Desktop giữ layout đồng nhất, chỉ chỉnh nhẹ spacing, font-size, max-width.
4. Ưu tiên subtle animation bằng transition, transform, opacity; dùng Framer Motion hoặc Tailwind animation, tối ưu performance.
5. Hỗ trợ SEO: semantic HTML, meta đầy đủ, heading chuẩn, image có alt, ưu tiên SSR/SSG.
6. Không dùng arbitrary values nếu Tailwind đã có class tương đương.
7. Typography dùng đúng scale Tailwind (text-sm → text-6xl).
8. Không comment trong source code.
9. Component phải reusable, dễ maintain, tách logic/UI, ưu tiên composition, tránh prop drilling.
10. Hạn chế hardcode, inline style, magic number, duplicate code.
11. Image tối ưu bằng next/image, đúng kích thước, lazy load khi phù hợp.
