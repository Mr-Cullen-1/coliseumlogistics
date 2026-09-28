# Coliseum Logistics School

Marketing site for Coliseum Logistics School — a training program preparing
students for careers in the U.S. logistics industry. Single-page, dark/bronze
"Premium American Logistics Academy" visual system (see
`coliseum_logistics_design_style_guide.md` for the full design spec).

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS 4

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint       # ESLint
npx tsc --noEmit   # Type check
npm run build      # Production build
npm run start      # Serve the production build locally
```

## Environment variables

Copy `.env.example` to `.env.local` and set the real production URL once it's
known. It feeds metadata, Open Graph tags, `robots.txt` and `sitemap.xml` —
see `src/lib/site-url.ts`.

```bash
cp .env.example .env.local
```

## Project structure

```
src/
  app/            Root layout, page, and metadata routes (robots, sitemap, manifest, icons, OG image)
  components/
    layout/       Header, Footer, Container, Section
    sections/     One component per homepage section (Hero, Stats, WhyColiseum, ...)
    ui/           Shared primitives (Button, Card, Eyebrow, SectionHeading, Stat)
  content/        Per-section copy and structured content, kept out of JSX
  content/media/  Real photography used across sections (static-imported)
  lib/            Small helpers (cn, external-link props, site URL)
```

## Known launch-blocking placeholders

Tracked at the top of `src/content/site.ts`:

- A real contact email hasn't been provided yet.
- Student reviews/testimonials — the Reviews section renders an honest
  "coming soon" notice until real testimonials are added to
  `src/content/reviews.ts`.

Everything else (phone, Instagram, Telegram, the Google Maps location link,
and all on-site photography) is real, confirmed content.

## Source assets

The `/photos` and `/logo` folders at the project root are the original client
deliverables (full-resolution photography and logo variants). The site itself
only uses optimized copies from `src/content/media/` and `public/logo/` —
the root folders are kept for reference if a different crop or export is
needed later.
