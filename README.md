# NutriSalma — The Balance Plate

A production Next.js implementation of the NutriSalma landing page, built from
the Claude Design handoff in [`design-handoff/`](./design-handoff) (see that
folder's `README.md`, `chats/chat1.md`, and `project/NutriSalma.dc.html` for
the original design source and the design decisions behind it).

## What's here

- **Landing page** (`/`) — fully implemented, pixel-matched to the design:
  header/nav with mobile menu, hero with an animated dashboard mockup and
  rotating notifications, the "Know Your Dietitian" bio section with a
  scroll-reveal photo, How It Works, a live meal plan with a working
  **swap-meal modal**, the Automation workflow section, a split
  user/dietitian dashboard showcase, pricing plans (SAR), a final CTA, and a
  footer. Plus a site-wide floating WhatsApp button and toast notifications.
- **Stub screens** for everything the original design never got past an "in
  production" placeholder for: `/onboarding`, `/app` (dashboard), `/app/plan`,
  `/app/progress`, `/app/appointments`, `/app/messages`,
  `/app/notifications`, `/plans`, `/dietitian-console`, `/mobile`.

## Stack

Next.js (App Router) + React, plain JavaScript, CSS Modules for styling
(no Tailwind/UI kit — the design's exact colors, radii, and shadows are
encoded as CSS variables in `app/globals.css` and consumed directly).
`next/font/google` loads Outfit (heading fallback) and Karla (body); the
design's intended `Gilroy` heading font is first in the stack for anyone
viewing on a machine that has it licensed, same as the original prototype.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

- `app/` — routes (App Router). `app/page.js` assembles the landing page from
  `components/`; every other folder under `app/` is a stub screen.
- `components/` — one component + CSS Module per section/piece of chrome.
- `lib/content.js` — copy and data (meals, plans, workflow steps, nav links)
  ported from the design's JS state.
- `public/images/` — founder photos and meal photography extracted from the
  design bundle's uploaded assets.

## Known placeholders

- The WhatsApp number (`966500000000`) and Instagram handle
  (`instagram.com/nutrisalma`) are placeholders carried over from the design
  — swap in the real ones in `lib/content.js` and `components/DietitianBio.jsx`.
