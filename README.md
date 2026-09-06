# Misael Ledesma — Developer Portfolio

Personal portfolio built to present my work as a **Full Stack Developer**, with a focus on TypeScript, React, Next.js and production-oriented web applications.

The site is designed as a bilingual portfolio for recruiters, clients and collaborators.

## Tech stack

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel-ready deployment**

## Main features

- English and Spanish versions
- Statically rendered localized routes
- SEO metadata per language
- Canonical URLs
- Language alternate metadata
- Responsive UI
- Accessible navigation and labels
- Project showcase architecture
- Sitemap and robots configuration
- Production URL configuration through environment variables

## Routes

```text
/en  → English
/es  → Español
```

The language switcher uses regular links, so navigation remains functional even without client-side JavaScript.

## Project structure

Portfolio content is centralized to keep project data and translations maintainable.

```text
data/portfolio.ts   → localized portfolio content
lib/i18n.ts         → locale configuration and route helpers
lib/site.ts         → shared identity and links
public/projects/    → project screenshots and assets
```

## Local development

### Requirements

- Node.js 20.9+
- npm

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Production configuration

Copy the environment template:

```bash
cp .env.example .env.local
```

Then configure:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The application uses the same origin source for canonical metadata, `robots.txt` and the sitemap.

## About me

I'm a Full Stack Developer based in Córdoba, Argentina, currently focused on building real-world applications and strengthening my experience with:

- TypeScript
- React
- Next.js
- Node.js
- PostgreSQL
- SQL
- Backend architecture

My projects include internal business management systems, CRM software, commercial websites and automation-oriented solutions.

---

**Developer:** [Misael Ledesma](https://github.com/misaelr5)
