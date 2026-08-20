# Kamakhya Interior Designs — Website

Premium 5-page website for Kamakhya Interior Designs, built by Scaify.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · lucide-react

## Business Details (already wired in)
- **Name:** Kamakhya Interior Designs
- **Phone / WhatsApp:** +91 99667 74984
- **Email:** interiorskamkhya@gmail.com
- **Location:** Hyderabad, Telangana (service area: all of Telangana)
- **Track record:** 2+ years in business, 50+ projects delivered
- **Logo:** `public/images/logo.png` (used in Navbar, Footer, favicon)

## Services covered on site
Modular Kitchen, Modern TV Unit, Hall Partition, Bedroom Wardrobes, Crockery
Units, Pooja Mandir Unit, Wall Papers, Wall Arts, False Ceiling (POP /
Gypsum / PVC), and Floor Plans (2D Drawings, 3D Elevation & 3D Visualisation Sketchup).

## Pages
- `/` — Home (hero, featured projects, services preview, testimonials, CTA)
- `/portfolio` — Filterable gallery (Modular Kitchen / TV Unit / Hall Partition / Bedroom Wardrobe / Ceiling)
- `/services` — All 8 services + false ceiling types + floor plan types + process
- `/about` — Studio story, stats, team, design philosophy
- `/contact` — Contact form (service dropdown matches real services) + WhatsApp CTA + studio info

## Brand
- Gold `#C9A13B` · Gold Light `#E0C468` · Gold Dark `#A3801F` · Black `#0C0C0C` · Ivory `#F7F5F0`
- Display font: Cormorant Garamond · Body font: Lato
- Matches the circular black/gold logo

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before going fully live — replace these placeholders

1. **Founder/Designer photo** — the new "Meet Our Designer" section on the
   homepage and the "Our Studio"/team photos on the About page
   (`app/about/page.tsx`) are still gold-gradient placeholders
   (`<PlaceholderImg />`). Swap for real photos once available:
   - Drop images into `public/images/`
   - Replace `<PlaceholderImg label="..." />` with
     `<ProjectImg src="/images/your-photo.jpg" alt="..." />`
2. **Hero image** — done. The homepage hero uses `public/images/hero.jpg`
   (elegant living room) as a full-bleed background with a dark gradient
   overlay for text legibility.
3. **Wall Papers / Wall Arts photos** — these two service cards on the
   Services page don't have project photos yet, so they still show the
   icon-only gold gradient card.
4. **Contact form** — currently simulates submission only. To make it real,
   create `app/api/contact/route.ts` and connect it to email (Resend,
   Nodemailer) or a sheet/CRM, then call that endpoint from
   `app/contact/page.tsx`'s `handleSubmit`.
5. **Map embed** — done. Embeds Google Maps centered on Hyderabad.
6. **Instagram handle** — set to `@kamakhyainteriordesigns` in `Footer.tsx`.
7. **Custom domain email** — site currently uses `interiorskamakhya@gmail.com`
   everywhere. If/when a custom domain inbox (e.g. on `kamakhyainteriors.in`)
   is set up and ready to receive mail, search the codebase for
   `interiorskamakhya@gmail.com` and replace it site-wide.
8. **Testimonials** — the 3 testimonials on the homepage (Ramesh K., Sandhya
   P., Naveen R.) are placeholder text with placeholder locations/project
   types. Replace `testimonials` array in `app/page.tsx` with real client
   quotes once collected. Avatar circles currently show initials only —
   swap for real client photos if available by replacing the initials div
   with an `<Image>`.
9. **Before & After photos** — not yet added to the Portfolio page. This
   needs pairs of "before" (existing space) and "after" (completed project)
   photos from past projects, which weren't available yet.
10. **Google Reviews badge** — not added since there's no live Google
    Business listing with reviews yet. Once one exists, a badge like
    "4.8 ★ on Google (32 reviews)" can be added near the testimonials
    section on the homepage.
11. **Instagram feed embed** — not added this round. Embedding a live feed
    typically requires either the Instagram Graph API (requires a Meta
    Developer app + access token) or a third-party embed service (e.g.
    SnapWidget, Elfsight) — needs a decision on which approach before
    building it.

## What's new in this round (homepage overhaul)

- Hero headline fixed and made bolder: "Transforming Homes into Luxurious
  Spaces"
- New stats/trust strip below hero: 50+ Projects, 2+ Years, 100%
  Satisfaction, Hyderabad & Telangana
- Featured Projects cards now show location, budget range, and a one-line
  project description
- New "Meet Our Designer" section with founder placeholder + 2 lines of
  studio philosophy
- Services preview cards now show starting price and installation
  turnaround time
- Testimonials upgraded: 5-star ratings, avatar initials, client location,
  and project type per review
- New "Our Process" section: Consultation → 3D Design → Approval →
  Execution
- New "Why Choose Us" section: 3D Design Preview, On-time Delivery
  Guarantee, Premium Materials Only, Dedicated Project Manager
- CTA section now has a real project photo background with dark overlay
  instead of a flat gold background
- WhatsApp links site-wide now pre-fill a qualifying message:
  "Hi! I'm interested in [Kitchen/Wardrobe/Full Home] interior design for
  my [2BHK/3BHK] in Hyderabad." — edit the bracketed placeholders before
  sending, or leave them for the visitor to fill in
- Favicon already correctly in place (`app/favicon.ico`, 32x32 RGBA)

## Real project photos already in place

18 real project photos are in `public/images/portfolio/`, used across the
Home (Featured Projects, CTA background), Portfolio (filterable gallery —
Pooja Mandir, Modular Kitchen, TV Unit, Hall Partition, Bedroom Wardrobe,
Crockery Unit), and Services pages.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push this folder to a GitHub repo and import it at vercel.com/new —
zero config needed, Next.js is auto-detected.

## SEO
Title/description/keywords are set in `app/layout.tsx` metadata.
