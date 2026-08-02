# Burning Lotus Tattoo — Website

A proper Vite + React project (React Router for pages, real `src/` structure)
for the Burning Lotus Tattoo studio site: Home, Gallery, Studio, Reviews, and
Visit pages, scroll-triggered animations, a lightbox gallery, and a persistent
WhatsApp booking button.

## Project structure

```
burning-lotus-tattoo/
├── index.html            # Vite entry HTML (fonts loaded here)
├── package.json
├── vite.config.js
├── public/
│   └── images/            # shop + tattoo photos, served as /images/*.jpg
└── src/
    ├── main.jsx            # React root, wraps App in BrowserRouter
    ├── App.jsx             # routes + layout (Nav, Footer, WhatsApp button)
    ├── index.css           # design tokens + all styling/animation
    ├── components/
    │   ├── Nav.jsx
    │   ├── Footer.jsx
    │   ├── WhatsAppFloat.jsx
    │   ├── Reveal.jsx       # scroll-reveal wrapper + useReveal hook
    │   ├── InkDivider.jsx   # signature line-draw divider
    │   ├── LotusMark.jsx    # logo mark
    │   ├── SocialIcon.jsx
    │   └── Stars.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Gallery.jsx
    │   ├── Studio.jsx
    │   ├── Reviews.jsx
    │   └── Visit.jsx
    └── data/
        └── content.js      # gallery items, reviews, socials, WhatsApp link
```

## Getting started

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build      # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Deploying

`npm run build` outputs a static `dist/` folder — drag it into Netlify,
connect the repo to Vercel, or upload it to any static host (GitHub Pages,
Cloudflare Pages, cPanel, etc.). No server-side code involved.

## Things to update

- **Social links** — `src/data/content.js`, the `SOCIALS` array. Instagram is
  already wired up. Facebook, TikTok, and Google Reviews are placeholders
  (`href: "#"`) — send over the real links and swap them in.
- **WhatsApp welcome message** — `WHATSAPP_MESSAGE` in `src/data/content.js`.
- **Hours** — shown in `src/pages/Visit.jsx` as "Opens 10 AM Mon (hours vary
  by artist)" since full weekly hours weren't in the listing info provided.
- **Hero image** — set in `src/pages/Home.jsx` (`backgroundImage` on
  `.hero-bg`), currently `/images/tattoo-archangel.jpg`.
