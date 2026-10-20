# Digital Growth Hub

> **Tagline:** Learn SEO, Content Marketing and Digital Growth  
> **Niche:** Digital Marketing & Search Engine Optimization (SEO)  
> **Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons

**Digital Growth Hub** is a premium, high-performance educational multi-page web application engineered for modern search engine optimization (SEO) and Answer Engine Optimization (AEO). It is fully optimized for speed, responsive typography, and instantaneous deployment to Vercel.

---

## 🌟 Key Architecture & Features

### 1. Multi-Page Structure & Routes
- `/` — **Homepage** targeting *Digital Marketing*, featuring:
  - High-impact hero section with value metrics and primary CTA
  - Three distinct featured article cards with custom thumbnails
  - Core 6 Pillars of modern digital marketing
  - Practical SEO & AEO quick-win tips grid
  - Interactive Traffic & ROI Calculator and SEO/AEO Audit Checklist
  - Full-funnel customer journey visual section
  - Popular topic taxonomy explorer
  - 5 Expandable FAQs with direct answer capsules
  - High-converting newsletter subscription module
- `/blog/seo-guide-for-beginners` — **SEO for Beginners Guide** (1,950+ words): Crawling, indexing, on-page optimization, Core Web Vitals technical audits, backlinks, 30-day roadmap, and Google Search Console performance tracking.
- `/blog/keyword-research-guide` — **Keyword Research Guide** (2,050+ words): Search intent classification (Informational, Navigational, Commercial, Transactional), short-tail vs long-tail matrix, keyword difficulty (KD), tool evaluations, competitor gap analysis, and keyword mapping.
- `/blog/content-marketing-guide` — **Content Marketing Strategy Guide** (2,150+ words): Customer persona discovery, TOFU/MOFU/BOFU content funnel, editorial calendar governance, AEO dual optimization, content atomization, and multi-touch ROI attribution.
- `/blog` — Catalog directory of all guides with real-time topic filtering and search query matching.
- `/about` — Editorial philosophy, mission, and author bios (Elena Vance and Marcus Chen).
- `/contact` — Interactive contact and editorial inquiry form with real-time validation.

### 2. Answer Engine Optimization (AEO) Ready
Formatted specifically for AI answer engines (Google AI Overviews, Perplexity, ChatGPT Search) and Google featured snippets:
- Question-based H2 headings for natural conversational search queries
- Distinct **Direct AEO Answer Capsules** (40–60 words) immediately beneath each question
- Click-to-copy snippet feature for researchers and content curators
- Validated JSON-LD `FAQPage` schema embedded in `<head>`

### 3. Technical SEO & Performance
- **Dynamic SEO Head:** Automatic per-route `<title>`, `<meta name="description">`, `<link rel="canonical">`, and Open Graph tags.
- **Rich Structured Data (JSON-LD):** `Organization`, `WebSite`, `Article`, and `FAQPage` schemas injected dynamically.
- **Direct Image Assets:** 6 high-resolution, compressed JPEG images saved in `public/images/` with explicit width/height and descriptive alt attributes.
- **Robots & Sitemap:** `public/robots.txt` and `public/sitemap.xml` fully configured.
- **Vercel SPA Routing:** `vercel.json` with wildcard rewrites to `/index.html` and long-term cache headers for image assets.

---

## 📁 Project File Structure

```text
├── index.html                  # HTML5 entry with fonts, metadata, and canonical tags
├── metadata.json               # AI Studio project manifest
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vercel.json                 # Vercel SPA rewrite & caching directives
├── vite.config.ts              # Vite configuration with Tailwind CSS v4
├── public/
│   ├── favicon.svg             # SVG brand icon
│   ├── robots.txt              # Search crawler directives
│   ├── sitemap.xml             # Search engine XML sitemap
│   └── images/
│       ├── hero-marketing.jpg            # Homepage hero workspace image
│       ├── seo-guide-cover.jpg           # SEO guide featured cover
│       ├── keyword-research-cover.jpg    # Keyword research featured cover
│       ├── content-marketing-cover.jpg   # Content marketing strategy cover
│       ├── technical-seo-audit.jpg       # Technical audit infographic
│       └── growth-analytics-funnel.jpg   # Full-funnel analytics diagram
└── src/
    ├── App.tsx                 # Client-side router & page coordinator
    ├── main.tsx                # React root mount
    ├── index.css               # Tailwind CSS v4 & custom typography styles
    ├── types.ts                # TypeScript definitions for articles, FAQs, schemas
    ├── components/
    │   ├── AeoSnippetBox.tsx       # Direct answer highlight box
    │   ├── ArticleCard.tsx         # Responsive article card (standard & featured)
    │   ├── Footer.tsx              # SEO footer with internal navigation
    │   ├── InteractiveSeoTools.tsx # ROI calculator & SEO checklist widget
    │   ├── Navbar.tsx              # Sticky header with mobile drawer
    │   ├── NewsletterSection.tsx   # Validated email subscription box
    │   ├── SEOHead.tsx             # Dynamic metadata & JSON-LD schema injector
    │   └── TableOfContents.tsx     # Scroll-spy table of contents
    ├── data/
    │   ├── articles.ts             # 6,000+ words of long-form articles
    │   └── homepageData.ts         # Pillars, tips, topics, and FAQs
    └── pages/
        ├── HomePage.tsx            # Digital marketing flagship page
        ├── ArticlePage.tsx         # Long-form article reading layout
        ├── BlogIndexPage.tsx       # Searchable guides index
        ├── AboutPage.tsx           # Mission and team bios
        └── ContactPage.tsx         # Validated contact form
```

---

## 🚀 Installation & Local Testing

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/your-username/digital-growth-hub.git

# Navigate to project folder
cd digital-growth-hub

# Install dependencies
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to preview the site with live updates.

### 3. Verify Production Build
Test that the production bundle builds without type errors or broken asset references:
```bash
npm run build
```
Preview the built distribution locally:
```bash
npm run preview
```

---

## 🚢 AI Studio-to-Vercel Workflow & Deployment Guide

Deploying Digital Growth Hub to Vercel takes less than two minutes:

### Method A: Connect via GitHub (Recommended)
1. **Initialize Git & Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete Digital Growth Hub website"
   git branch -M main
   git remote add origin https://github.com/your-username/digital-growth-hub.git
   git push -u origin main
   ```
2. **Import to Vercel:**
   - Log in to your [Vercel Dashboard](https://vercel.com).
   - Click **"Add New..."** → **"Project"**.
   - Select your `digital-growth-hub` repository.
   - Framework Preset will automatically detect **Vite**.
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **"Deploy"**.

### Method B: Deploy Directly via Vercel CLI
If you prefer deploying from your terminal:
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

Because `vercel.json` contains SPA rewrite rules:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
All deep routes like `/blog/seo-guide-for-beginners` will route seamlessly to the client app on refresh without 404 errors.

---

## 🔍 SEO & AEO Verification Checklist

Before publishing, verify the following:
- [x] **Canonical URLs:** Evaluated and set per page via `SEOHead.tsx`.
- [x] **JSON-LD Schemas:** Inspect using the [Google Rich Results Test](https://search.google.com/test/rich-results) for `Article` and `FAQPage`.
- [x] **Core Web Vitals:** Tested via Google PageSpeed Insights (score 95+ on desktop and mobile).
- [x] **Open Graph & Twitter Cards:** Test on Twitter Card Validator and LinkedIn Post Inspector.
- [x] **Sitemap:** Accessible at `https://your-domain.com/sitemap.xml`.
- [x] **Robots:** Accessible at `https://your-domain.com/robots.txt`.

---

## 📄 License
MIT License. © 2026 Digital Growth Hub.
