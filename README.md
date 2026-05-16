# Gen Z HR — Website

A culture-forward HR brand website for the next generation of work.

Built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone or extract the project
cd genzhr

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
genzhr/
├── app/
│   ├── globals.css          # Design tokens, base styles, utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page composing all sections
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button with all variants
│   │   └── RevealWrapper.tsx # Scroll-triggered animation wrapper
│   │
│   ├── Navbar.tsx           # Fixed nav with scroll state + mobile menu
│   ├── Hero.tsx             # Editorial split hero with stats card
│   ├── MarqueeStrip.tsx     # Animated culture ticker
│   ├── AboutSection.tsx     # Split composition with brand pillars
│   ├── WhatWeDo.tsx         # 6-card services grid
│   ├── CultureSection.tsx   # Purple bold section with oversized quote
│   ├── ContentSection.tsx   # Magazine editorial grid
│   ├── PhilosophySection.tsx # Cinematic brand philosophy
│   ├── CTASection.tsx       # Lime CTA with signup form
│   └── Footer.tsx           # Dark footer with all links
│
├── lib/
│   └── motion.ts            # All Framer Motion animation variants
│
├── public/
│   └── team/                # ← Drop brand images here
│
├── tailwind.config.ts       # Full design system tokens
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#06060E` | Primary background |
| `--surface` | `#0D0D1A` | Card / section backgrounds |
| `--lime` | `#C8F400` | Primary accent, CTAs, highlights |
| `--purple` | `#7B2FBE` | Secondary accent, culture section |
| `--teal` | `#00D4AA` | Tertiary accent, eyebrows |
| `--electric` | `#4361EE` | Electric blue accent |
| `--white` | `#F5F5F0` | Primary text |
| `--muted` | `#8888A0` | Secondary text |
| `--border` | `rgba(255,255,255,0.07)` | Subtle borders |

### Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Bebas Neue | All headlines, section titles |
| Body | Plus Jakarta Sans | All body copy, UI text |
| Mono | DM Mono | Labels, eyebrows, code, tags |

### Motion Variants (lib/motion.ts)

- `containerVariants` — stagger container
- `fadeUpVariants` — standard scroll reveal
- `fadeLeftVariants` / `fadeRightVariants` — directional reveals
- `scaleUpVariants` — scale entrance
- `heroContainerVariants` / `heroItemVariants` — hero stagger
- `cardGridVariants` / `cardVariants` — card grid reveals
- `pillContainerVariants` / `pillVariants` — pill/tag stagger
- `lineDrawVariants` — decorative line animation

---

## 🖼️ Adding Brand Images

1. Place your brand images in `/public/team/`
2. Reference them in components using Next.js `Image`:

```tsx
import Image from "next/image";

<Image
  src="/team/your-image.jpg"
  alt="Description"
  width={600}
  height={800}
  className="object-cover"
/>
```

### Recommended placements:
- **Hero section** — Replace/augment the stats card with a real brand image
- **About section** — Add brand personality image in the left column
- **Culture section** — Background image with overlay
- **Content section** — Featured article hero image

---

## 📄 Section Map

| ID | Component | Section |
|----|-----------|---------|
| `#home` | `Hero` | Landing hero |
| *(no id)* | `MarqueeStrip` | Animated ticker |
| `#about` | `AboutSection` | Brand story + pillars |
| `#conversations` | `WhatWeDo` | 6 service cards |
| `#culture` | `CultureSection` | Bold purple manifesto |
| `#community` | `ContentSection` | Editorial content grid |
| *(no id)* | `PhilosophySection` | Brand philosophy |
| `#contact` | `CTASection` | Signup CTA |
| *(no id)* | `Footer` | Site footer |

---

## 🔧 Customization

### Changing colors
Edit CSS variables in `app/globals.css` under `:root`.

### Adding sections
1. Create `components/YourSection.tsx`
2. Import and add to `app/page.tsx`
3. Add motion variants in `lib/motion.ts` if needed

### Updating content
All text content is colocated within each component file. 
Arrays of items (cards, pillars, stats) are defined at the top of each component for easy editing.

---

## 🌐 Deployment

### Vercel (recommended)

```bash
npx vercel
```

### Other platforms
- Export: `npm run build` → deploy `.next/` folder
- Docker: Add a `Dockerfile` using `node:20-alpine`

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.2.4 | Framework |
| react | 19.x | UI library |
| framer-motion | 11.x | Animations |
| clsx | 2.x | Class utilities |
| tailwindcss | 3.4.x | Styling |
| typescript | 5.x | Type safety |

---

## ✅ Features

- [x] Fully responsive (mobile, tablet, desktop)
- [x] Scroll-triggered animations (Framer Motion + IntersectionObserver)
- [x] Mobile fullscreen menu with animated transitions
- [x] Sticky navbar with blur on scroll
- [x] Animated marquee ticker
- [x] Editorial grid layouts
- [x] Hover micro-interactions on all cards
- [x] Parallax scroll effects
- [x] CSS grain noise texture overlay
- [x] Selection color styled to brand
- [x] Custom scrollbar
- [x] OpenGraph + Twitter card metadata
- [x] Dark color scheme meta tag
- [x] Semantic HTML structure
- [x] ARIA labels on interactive elements

---

*Gen Z HR — HR for the Next Generation*
