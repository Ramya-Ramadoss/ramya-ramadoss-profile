<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=0:FC5C7D,100:6A82FB&text=RAMYA%20RAMADOSS%20PROFILE&fontSize=55&fontColor=ffffff&animation=fadeIn&fontAlignY=40"/>
</p>

# Portfolio Website 

**Owner:** Ramya Ramadoss  
**Last Updated:** June 2026  
**Purpose:** Complete reference for updating, maintaining, and extending the portfolio website.

---

## Quick Summary

This portfolio is a **single-page React + Vite application** built with:

- **React 18 + TypeScript** — component logic
- **Tailwind CSS** — styling via utility classes
- **Framer Motion** — scroll animations, typewriter, entrance effects
- **Lucide React + React Icons** — iconography
- **Space Grotesk** (headings/body) + **JetBrains Mono** (tech labels) — typography

All content lives in **one file**: `artifacts/portfolio/src/data/profile.ts`

To update any text, project, skill, or link — **only edit that file**. Nothing else needs to change.

---

## The Golden Rule

> **99% of future changes only require editing `artifacts/portfolio/src/data/profile.ts`**

Never hardcode content inside component files. Every string, array, and object in the UI comes from `profile.ts`.

---

## File Structure

```
artifacts/portfolio/
├── src/
│   ├── data/
│   │   └── profile.ts          ← THE ONLY FILE YOU NORMALLY EDIT
│   ├── components/
│   │   ├── Hero.tsx             ← Hero section with typewriter + particles
│   │   ├── Sidebar.tsx          ← Fixed left navigation bar
│   │   ├── About.tsx            ← About + personality traits
│   │   ├── Skills.tsx           ← Skill bars by category
│   │   ├── Projects.tsx         ← Project cards grid
│   │   ├── Experience.tsx       ← Work experience timeline
│   │   ├── Education.tsx        ← Education card
│   │   ├── Research.tsx         ← Research interests tag cloud
│   │   ├── Certifications.tsx   ← Certification cards
│   │   ├── Achievements.tsx     ← Achievement expandable cards
│   │   └── Contact.tsx          ← Contact links + location
│   ├── pages/
│   │   └── Portfolio.tsx        ← Assembles all sections
│   ├── App.tsx                  ← Root app (no backend)
│   └── index.css               ← Color palette + fonts + utilities
```

---

## Design System Reference

### Color Palette

| Variable | Hex | Usage |
|---|---|---|
| `--background` | `#0C0420` | Page background |
| `--primary` | `#D391B0` | Glows, highlights, CTAs |
| `--secondary` | `#5D3C64` | Card borders, subtle accents |
| `--accent` | `#7B466A` | Hover states, mid-tones |
| `--muted-foreground` | `#9F6496` | Secondary text |
| `--foreground` | `#F8F8F8` | Body text |

### Typography

| Use | Font | Weight |
|---|---|---|
| Headings (H1–H3) | Space Grotesk | 700 |
| Body text | Space Grotesk | 400 |
| Tech labels, code | JetBrains Mono | 400–500 |

### CSS Utility Classes (in `index.css`)

```css
.glow-primary    /* purple-rose box-shadow glow */
.glow-text       /* text glow effect */
.glass-card      /* glassmorphism background + blur */
```

Use these on any new component to stay consistent with the design language.

---

## Running the Portfolio Locally

From the project root:

```bash
# Start the portfolio dev server
pnpm --filter @workspace/portfolio run dev
```

Or restart it from the Replit workflow panel (the "portfolio: web" workflow).

---

## Deploying / Publishing

Click the **Publish** button in Replit. It will:
1. Build the static site
2. Deploy to a `.replit.app` domain
3. Serve it globally over HTTPS

No backend, no database — pure static deployment. Fast and free on Replit's hosting.

