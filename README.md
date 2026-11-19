# ToolsVibe

Free, privacy-first online tools for images, text, developers, and Pakistan tax/Zakat calculations. Every tool runs entirely in the browser — files and inputs never leave the visitor's device.

Live site: [toolsvibe.online](https://toolsvibe.online)

---

## What's in it

### Pakistan tax and Zakat calculators

- Salary Tax Calculator — FBR salaried slabs, Tax Year 2027 (Finance Act 2026), EOBI, take-home pay
- Freelancer Tax Calculator — Section 154A IT export tax (0.25% PSEB / 1%), local non-salaried slabs
- Zakat Calculator — silver/gold Nisab, 2.5% rate, gold and silver prices, government bank Nisab reference
- EMI Calculator — amortized loan formula, yearly breakdown, principal vs interest

### Image tools

- Image Compressor — quality mode or target size (20 KB to 1 MB), WebP output
- Image Converter — JPG, PNG, WebP
- Image Cropper — aspect ratio presets, rotate, flip
- Instagram Image Resizer — 1080×1350, 1080×1080, 1080×1920, 320×320, percentages

### PDF and utilities

- PDF Redaction — true redaction by rasterizing pages (text is permanently removed)
- Word Counter
- JSON Formatter
- Password Generator
- QR Code Generator
- Unit Converter
- Percentage Calculator
- Age Calculator

---

## Tech stack

- **Framework:** [Astro](https://astro.build) (static output)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) via `@tailwindcss/vite`
- **Deployment:** [Netlify](https://netlify.com) (see `netlify.toml`)
- **Sitemap:** `@astrojs/sitemap`
- **Build optimizations:** `astro-critters`, `@playform/compress`
- **PDF:** `pdfjs-dist`, `pdf-lib`
- **Image compression:** `browser-image-compression`
- **Image cropping:** `cropperjs`

---

## Project structure

```text
/
├── public/                     Static assets (favicons, robots.txt, llms.txt, etc.)
├── src/
│   ├── components/             Reusable Astro components (SocialShare, etc.)
│   ├── data/
│   │   ├── site.ts             Site-wide constants (SITE_URL, CONTACT_EMAIL, FOUNDER, social links)
│   │   ├── tools.ts            Tool catalog (used on home and tools index)
│   │   └── tax-data/
│   │       └── pakistan-salaried.ts   FBR salaried slabs + calculateAnnualTax()
│   ├── layouts/
│   │   └── Layout.astro        Shared layout: head, header, footer, JSON-LD
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── 404.astro
│   │   └── tools/
│   │       ├── index.astro
│   │       └── <tool-name>.astro   One file per tool
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── netlify.toml
├── tsconfig.json
└── package.json
```

---

## Getting started

### Requirements

- Node.js 18+ (Node 20 recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

### Build and preview

```bash
npm run build      # outputs to ./dist/
npm run preview    # serve the production build locally
```

---

## Common edits

### Change the contact email or social links

Edit **`src/data/site.ts`**. Every page (about, contact, privacy, terms, Layout schema) reads from this file, so one edit updates the whole site.

```ts
export const SITE_URL = "https://toolsvibe.online";
export const CONTACT_EMAIL = "khurammirza354@gmail.com";
export const FOUNDER = "Khuram Shahzad";
export const GITHUB_URL = "https://github.com/khuram354";
export const FACEBOOK_URL = "https://facebook.com/toolsvibe.online";
export const PORTFOLIO_URL = "https://khuram354.github.io/portfolio-v1";
```

### Update the Pakistan tax slabs

Edit **`src/data/tax-data/pakistan-salaried.ts`**:

- `salariedSlabs` — the slab list (min, max, rate, fixedTax)
- `LAST_UPDATED` — date shown as "Last reviewed" on the tool page
- `calculateAnnualTax()` — keep the maths in sync with the slabs

The slab table on the tool page is generated from the same list, so the page and the calculation cannot disagree.

### Update Zakat gold and silver example prices

Edit the constants at the top of **`src/pages/tools/zakat-calculator.astro`**:

- `PRICES_DATE` — date to display as "Example price from ..."
- `DEFAULT_GOLD_PRICE` — 24K gold per gram (PKR)
- `DEFAULT_SILVER_PRICE` — silver per gram (PKR)
- `GOVT_NISAB` and `GOVT_NISAB_YEAR` — the government's bank-deduction Nisab (updates once a year)

The Nisab grams are fixed fiqh values and should not be changed.

### Change site-wide schema dates

Edit **`src/layouts/Layout.astro`**:

- `siteSchema` → `WebSite` → `datePublished`, `dateModified`

### Add a new tool

1. Add an entry to **`src/data/tools.ts`** (name, href, category, description)
2. Create **`src/pages/tools/<tool-name>.astro`** (copy an existing tool as a starting point)
3. The footer and Tools page pick it up automatically

---

## Privacy and data flow

- All tool calculations and file processing happen in the browser. No inputs, images, or PDFs are sent to a server.
- No analytics or third-party tracking scripts are loaded.
- The contact form uses Netlify Forms (`data-netlify="true"` in `contact.astro`).
- Hosting provider (Netlify) keeps standard server logs for security and uptime.

---

## Memory and size limits

Browser tools decode files into memory. To protect phones and low-end laptops, these limits are in place:

| Tool              | File size | Other limits                                           |
| ----------------- | --------- | ------------------------------------------------------ |
| Image tools       | 20 MB     | Rendered/resized to max 4096 px on the longest side    |
| PDF Redaction     | 20 MB     | Max 30 pages, rendered to max 4096 px per page         |
| Tax / Zakat / EMI | n/a       | Inputs validated; results hidden when input is invalid |

`MAX_MB`, `MAX_PAGES`, and `MAX_RENDER_DIMENSION` constants at the top of each tool page control these values.

---

## Deployment

The site is configured for **Netlify** (see `netlify.toml`):

- Build command: `npm run build`
- Publish directory: `dist`

To deploy from scratch:

1. Push the repo to GitHub.
2. In Netlify, "Add new site" → "Import an existing project" → select the repo.
3. Netlify reads `netlify.toml`; no manual build settings needed.
4. Optional: add a custom domain under "Domain settings".

If you switch hosting providers, update `site` in **`astro.config.mjs`** to the new domain so canonical URLs and the sitemap use the correct host.

---

## SEO and discoverability

- Canonical URLs, Open Graph, Twitter cards, and JSON-LD (`WebSite`, `Organization`, `WebApplication`, `FAQPage`, `BreadcrumbList`) are set per page.
- `@astrojs/sitemap` generates `sitemap-index.xml` at build time. Submit this in Google Search Console and Bing Webmaster Tools after each deploy.
- `public/robots.txt` and `public/llms.txt` are in place.
- Search Console is linked to the domain; ownership is verified separately from analytics.

---

## Conventions

- **Trailing slashes:** `trailingSlash: "always"` in `astro.config.mjs`. Links should end with `/` (e.g., `/tools/emi-calculator/`).
- **Build output:** `format: "directory"`, so pages are emitted as `dist/tools/emi-calculator/index.html`.
- **TypeScript:** `// @ts-check` at the top of `astro.config.mjs`; `.astro` files use standard Astro typing.
- **Formatting:** Prettier with `prettier-plugin-astro`. See `.prettierrc` in the project root.
- **Constants vs literals:** Site-wide values live in `src/data/site.ts`. Per-tool data (slabs, prices, limits) live at the top of that tool's page.

---

## Scripts

| Command             | What it does                                |
| :------------------ | :------------------------------------------ |
| `npm run dev`       | Start dev server at `localhost:4321`        |
| `npm run build`     | Build the production site to `./dist/`      |
| `npm run preview`   | Preview the production build locally        |
| `npm run astro ...` | Astro CLI (e.g. `astro check`, `astro add`) |

---

## License and content

Site content (text, tool descriptions, calculators) is © ToolsVibe. Third-party libraries keep their own licenses.
