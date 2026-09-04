# Misael Ledesma — Portfolio

Production-oriented personal portfolio built with Next.js 16, React, TypeScript, and Tailwind CSS.

## Local development

Requirements:

- Node.js 20.9 or newer
- npm

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root redirects to the default English route.

## Languages

- English: `/en`
- Spanish: `/es`

Both routes are statically rendered with localized metadata, canonical URLs,
language alternates, accessible labels, and content. The language switcher is a
regular link, so it keeps working without client-side JavaScript.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Content updates

- English and Spanish content: `data/portfolio.ts`
- Supported locales and route helpers: `lib/i18n.ts`
- Shared identity and links: `lib/site.ts`

Project images are optional and supported by the `image` field in each localized
project entry. Add final screenshots under `public/projects/`; no mock project
imagery is included.

## Production URL

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final origin. Vercel deployment URLs are used automatically when that variable is absent. The canonical URL, robots file, and sitemap all use the same source.

## Open Graph image

Metadata is ready for sharing, but an image is intentionally not referenced until a real branded asset exists. Add a final localized Open Graph image (1200 × 630) when the production brand image is approved.
