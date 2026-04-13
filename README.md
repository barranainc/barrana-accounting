# Barrana Accounting Services — Website

Marketing website for Barrana Accounting Services (barranaaccounting.ai), an AI-powered accounting division of Barrana.ai.

## Tech stack

- Astro (static site generator)
- Vanilla CSS with CSS custom properties
- Vanilla JS (no framework)
- Netlify Forms
- @astrojs/sitemap (auto-generated sitemap)
- Netlify deployment

## Local development

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`

## Build

```bash
npm run build
```

## Preview build locally

```bash
npm run preview
```

## Deploy

Push to main branch. Netlify auto-deploys.

- Build command: `npm run build`
- Publish directory: `dist`

## Before launch checklist

- [ ] Replace all `$X/month` pricing placeholders with real values
- [ ] Add real CPA partner name, credentials, and bio (About page + ServiceLayout team card)
- [ ] Replace placeholder testimonials with real client quotes (with permission)
- [ ] Set up Calendly and replace placeholder embed on Contact page
- [ ] Set up real contact email and replace `placeholder@barranaaccounting.ai` everywhere
- [ ] Insert Barrana.ai founding year in About page (`[year — insert before launch]`)
- [ ] Add `[DATE]` effective dates to Privacy Policy and Terms of Service
- [ ] Have legal counsel review Privacy Policy and Terms of Service for PIPEDA compliance
- [ ] Replace placeholder photography (hero images, team photos)
- [ ] Set up Google Analytics or Plausible
- [ ] Set up Netlify form notifications to real email address
- [ ] Add real phone number to Footer and Contact page (optional)

## Content placeholders to find and replace

Search the codebase for these strings before launch:

| Placeholder | Replace with |
|---|---|
| `$X/month` | Real pricing per plan |
| `$X` | Real standalone service pricing |
| `[CPA Partner Name]` | Real CPA name |
| `CPA, CGA` | Real credentials |
| `[Placeholder bio` | Real CPA bio |
| `placeholder@barranaaccounting.ai` | Real email address |
| `[your-link]` | Calendly booking link |
| `[DATE]` | Effective dates for legal pages |
| `[year — insert before launch]` | Barrana.ai founding year |
| `PLACEHOLDER` | All content marked as placeholder |

## Page inventory

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/services/` | `src/pages/services/index.astro` |
| `/services/bookkeeping/` | `src/pages/services/bookkeeping.astro` |
| `/services/tax-returns/` | `src/pages/services/tax-returns.astro` |
| `/services/payroll/` | `src/pages/services/payroll.astro` |
| `/services/corporate-tax/` | `src/pages/services/corporate-tax.astro` |
| `/services/hst-gst-filing/` | `src/pages/services/hst-gst-filing.astro` |
| `/services/financial-reporting/` | `src/pages/services/financial-reporting.astro` |
| `/services/cfo-advisory/` | `src/pages/services/cfo-advisory.astro` |
| `/how-it-works/` | `src/pages/how-it-works.astro` |
| `/about/` | `src/pages/about.astro` |
| `/pricing/` | `src/pages/pricing.astro` |
| `/contact/` | `src/pages/contact.astro` |
| `/blog/` | `src/pages/blog/index.astro` |
| `/locations/vaughan/` | `src/pages/locations/vaughan.astro` |
| `/locations/toronto/` | `src/pages/locations/toronto.astro` |
| `/locations/mississauga/` | `src/pages/locations/mississauga.astro` |
| `/locations/brampton/` | `src/pages/locations/brampton.astro` |
| `/locations/markham/` | `src/pages/locations/markham.astro` |
| `/privacy-policy/` | `src/pages/privacy-policy.astro` |
| `/terms-of-service/` | `src/pages/terms-of-service.astro` |

## Deploying to Netlify

1. Push the project to a GitHub repository
2. Log in to Netlify
3. New site from Git, connect your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add your custom domain: `barranaaccounting.ai`
7. Netlify auto-generates an SSL certificate

Forms work automatically through Netlify Forms once deployed.
