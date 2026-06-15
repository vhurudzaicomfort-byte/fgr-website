# Formal Grand Resources — Website

Modern marketing site for **Formal Grand Resources (FGR)**, a South African
Technology · Media · Telecom provider delivering mobile games, mobile video,
programmatic digital media, cloud and IVR through carrier-ready, reskinnable portals.

Built to the same engineering standard as the sibling **DrumTree Studio** site so the
two "speak to each other": Next.js 16 (App Router) · React 19 · Tailwind v4 ·
framer-motion · lucide-react, deployed on Vercel — while carrying FGR's own
navy + champagne-gold brand identity.

## Stack
- **Next.js 16** (App Router, RSC) + **TypeScript**
- **Tailwind v4** with a CSS-variable design system (`app/globals.css`)
- **lucide-react** icons, custom scroll-reveal + animated counters
- Light/dark theming, sticky responsive nav, accessible (WCAG-AA) components

## Pages
- `/` — Home (hero, capability snapshot, services, featured Game-O-Mania, stats, ecosystem, CTA)
- `/about` — Who FGR is, stats, values, expertise, FAQ
- `/services` — Digital Content, Digital Media (DSP/SSP/DMP), Cloud, IVR, Project Management, CSI
- `/products` — Game-O-Mania (flagship), HappyTube Games/TV, KidsZone Pro, Games 360, Cash Rider/Battle
- `/partners` — Strategic alliances, AWS & Azure, MNO integration, markets
- `/contact` — Details, map, working enquiry form

## Content source
All copy, products and contact details are drawn from the live/archived FGR site
(`formalgrandresources.co.za`) and consolidated in `lib/site.ts`. Nothing is invented.

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
