# Ramya Ramadoss Portfolio

A premium, dark-mode AI/ML engineer portfolio website for Ramya Ramadoss — featuring glassmorphism, scroll animations, skill visualizations, and a deep cosmic purple color palette.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (port assigned via workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite + Tailwind CSS + Framer Motion
- Fonts: Space Grotesk (body/headings) + JetBrains Mono (tech labels)
- Icons: Lucide React + React Icons (SI)
- API: Express 5 (api-server, unused by portfolio)

## Where things live

- `artifacts/portfolio/src/data/profile.ts` — **single source of truth for ALL content** (projects, skills, certifications, contact, etc.)
- `artifacts/portfolio/src/components/` — all section components (Hero, Sidebar, Skills, Projects, etc.)
- `artifacts/portfolio/src/pages/Portfolio.tsx` — assembles all sections
- `artifacts/portfolio/src/index.css` — color palette (CSS variables), fonts, glass/glow utilities
- `PORTFOLIO_HANDOFF.md` — complete guide for updating content and extending the site

## Architecture decisions

- **Content in one file**: All profile data lives in `profile.ts`. Future updates (projects, certs, skills) only touch that file — no component edits needed.
- **Dark-mode only**: The palette (#0C0420 deep purple → #D391B0 rose glow) is fixed. No light-mode toggle by design.
- **No backend**: Pure static React SPA. The api-server artifact exists but is not used by the portfolio.
- **Single-page scroll**: All sections on one page with hash anchors; the fixed sidebar navigates between them.
- **Framer Motion for all animations**: Scroll-triggered entrance (whileInView), typewriter effect, skill bar fills.

## Product

A single-page personal portfolio showcasing: Hero (typewriter taglines, CTAs), About, Skills (animated bars by category), Featured Projects (glassmorphism cards), Experience timeline, Education, Research Interests, Certifications, Achievements, and Contact.

## User preferences

- Color palette: #0C0420, #5D3C64, #7B466A, #9F6496, #D391B0, #BA6E8F — never change to blue/teal
- No emojis anywhere in the UI
- All content editable via `src/data/profile.ts` only — never hardcode in components

## Gotchas

- Google Fonts `@import url(...)` MUST be the very first line of `index.css` — PostCSS fails silently if placed after other imports
- The `@assets/...` alias resolves to `attached_assets/` (reference images only — do NOT serve in UI)
- No `@workspace/api-client-react` dependency — this is a static frontend with no API calls

## Pointers

- See `PORTFOLIO_HANDOFF.md` for the complete content update guide (how to add projects, certs, skills, photos, resume)
- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
