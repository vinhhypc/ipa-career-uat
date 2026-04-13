# Thiết kế UI (desktop-first) — IPAG Career

## Global Styles
- Layout system: Tailwind utility + layout wrapper `.section-content` (max-width 1440) và `.section-padding`.
- Breakpoints mục tiêu: desktop ≥1024px, tablet 768–1023px, mobile <768px.
- Color tokens chính: Navy `#00152d`, Blue `#145194`, Accent `#fbc17b`, Text secondary `#59798f`, Bg dark `#060d16`.
- Typography: Plus Jakarta Sans; heading uppercase, tracking rộng; body 14–18px.
- Buttons/links:
  - Primary CTA: nền gradient sáng/white, text đậm; hover giảm brightness.
  - Link hover: opacity/underline; card hover: nâng bóng + zoom ảnh.

## Page 1 — Trang chủ (Landing)
### Meta Information
- Title: IPAG Career
- Description: “Khai phóng năng lực, kiến tạo giá trị bền vững”
- OG: title/description + og:image (ảnh hero hoặc brand image)

### Page Structure (Desktop-first)
1) **Sticky Navbar (overlay Hero)**
- Layout: hàng ngang, trái logo/brand; phải menu + CTA “apply now”.
- States:
  - Default (top): nền trong suốt, chữ trắng.
  - Scrolled: nền trắng + border/shadow, chữ navy.
  - Mobile: nút hamburger; mở panel dọc có animation (height/opacity).

2) **Hero Section (min-height ~ viewport)**
- Layout desktop: 2 cột (trái nội dung, phải danh sách program cards).
- Thành phần: H1 (highlight màu accent), mô tả, CTA “ỨNG TUYỂN NGAY”, 3 ProgramGlassCard.
- Responsive:
  - Mobile: stack dọc; CTA full width; cards nằm dưới.
  - Desktop: giữ khoảng trắng lớn, align center.
- Hành vi: CTA scroll tới `#news` (hoặc `#apply`).

3) **Ecosystem ticker (chỉ desktop/tablet)**
- Một hàng marquee auto-scroll; ẩn ở mobile.

4) **Nhận diện năng lực / Bản sắc IPAG**
- Layout desktop: 2 cột; trái gallery 2x2 ảnh; phải heading + list 4 pillars.
- Components: SectionDiamond, image cards có label overlay, Identity pillar item (icon + title/subtitle/body).
- Responsive: mobile stack (gallery trước, content sau); typography giảm size.

5) **Journey**
- Layout: heading center + ảnh minh họa; ảnh co giãn theo container.

6) **Capabilities (Tabs + 3 cards)**
- Tabs dạng pill; state active đổi nền navy chữ trắng.
- Grid: 3 cột desktop, 1 cột mobile.
- Card hover: tăng shadow; ảnh cover fixed ratio.

7) **Mid CTA Band**
- Nền gradient tối + blur blobs; center align.
- CTA scroll về `#apply`.

8) **News Section**
- Heading + CTA; grid 4 cột desktop, 2 cột tablet, 1 cột mobile.
- Card states: default bg translucent; hover đổi bg + zoom ảnh + đổi màu title sang accent.

9) **Footer / Contact**
- Layout desktop: grid 12 cols (brand, explore links, contact).
- Responsive: 1 cột mobile; nhóm link/địa chỉ stack.

## Page 2 — Trang chi tiết tin tức
### Meta Information
- Title: {post.title} | IPAG Career
- Description: {post.description hoặc snippet}
- OG: og:title, og:description, og:image (nếu có thumbnail)

### Sections & Components
- Header spacing: chừa khoảng trên để không bị Navbar che (pt ~120px).
- Post header row: badge category + date.
- H1 title lớn.
- Content area: render HTML; cần style cho `h2/h3/p/ul/ol/img/a` theo hệ typography.

### States
- Loading (nếu fetch): skeleton tiêu đề + đoạn nội dung.
- Not found: điều hướng sang 404.
- Redirect: nếu slug không khớp canonical.

### Responsive
- Desktop: nội dung max-width theo `.section-content`.
- Mobile: giảm font H1, tăng line-height body để dễ đọc.
