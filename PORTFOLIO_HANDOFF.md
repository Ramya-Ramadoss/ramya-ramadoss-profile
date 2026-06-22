# Portfolio Website — Handoff Guide

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

## How to Add / Update Content

### Add a New Project

Open `src/data/profile.ts` and find the `projects` array. Add a new object:

```typescript
{
  title: "My New Project",
  description: "A brief description of what it does and the problem it solves.",
  tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
  githubUrl: "https://github.com/ramya/project-name",   // optional
  liveUrl: "https://myproject.com",                      // optional
  featured: true                                          // shows in featured grid
}
```

**That's it.** The card renders automatically.

---

### Add a Certification

In `profile.ts`, find the `certifications` array:

```typescript
{
  title: "AWS Certified Machine Learning Specialty",
  issuer: "Amazon Web Services",
  date: "March 2026",
  credentialUrl: "https://aws.amazon.com/verify/...",   // optional
  badgeColor: "#FF9900"                                  // optional accent color
}
```

---

### Add an Achievement

In `profile.ts`, find the `achievements` array:

```typescript
{
  title: "1st Place — National AI Hackathon",
  description: "Built an autonomous medical diagnosis system in 48 hours. Competed against 200+ teams.",
  date: "February 2026",
  category: "Hackathon"
}
```

---

### Update Skills

In `profile.ts`, find the `skills` object. Each category has an array of skill items:

```typescript
{
  name: "PyTorch",
  level: 75,        // percentage (0-100) shown in the progress bar
  icon: "SiPytorch" // react-icons/si icon name (optional)
}
```

To add a new **category**, add a new key to the `skills` object:

```typescript
skills: {
  "Programming": [...],
  "AI / ML": [...],
  "My New Category": [          // ← new category
    { name: "New Skill", level: 80 }
  ]
}
```

---

### Update Experience

In `profile.ts`, find the `experience` array:

```typescript
{
  role: "Machine Learning Engineer",
  company: "Google DeepMind",
  period: "Jan 2027 – Present",
  description: "Worked on large language model fine-tuning and evaluation frameworks.",
  tags: ["Python", "TensorFlow", "LLMs"]
}
```

---

### Update Social / Contact Links

In `profile.ts`, find the `contact` object:

```typescript
contact: {
  email: "ramya@example.com",
  linkedin: "https://linkedin.com/in/ramya-ramadoss",
  github: "https://github.com/ramya-ramadoss",
  leetcode: "https://leetcode.com/ramya",
  location: "Chennai, Tamil Nadu, India"
}
```

---

### Add a Profile Photo

1. Place your photo at: `artifacts/portfolio/src/assets/photo.jpg`
2. Open `src/components/About.tsx`
3. Find the avatar/placeholder element and replace it with:

```tsx
import photoPng from "../assets/photo.jpg";

<img
  src={photoPng}
  alt="Ramya Ramadoss"
  className="w-48 h-48 rounded-full object-cover glow-primary border-2 border-primary/30"
/>
```

---

### Add a Resume File

1. Place your resume PDF at: `artifacts/portfolio/public/Ramya_Ramadoss_Resume.pdf`
2. In `profile.ts`, set:

```typescript
resumeUrl: "/Ramya_Ramadoss_Resume.pdf"
```

The "Download Resume" button in the Hero section will now trigger a download.

---

## Adding a Completely New Section

If you want to add a brand new section (e.g., "Publications", "Blog", "Open Source"):

1. **Create the component**: `artifacts/portfolio/src/components/Publications.tsx`
   - Follow the same pattern as existing components — import data from `profile.ts`, use `framer-motion`'s `motion.div` with `whileInView={{ opacity: 1, y: 0 }}` for scroll animation
2. **Add data to profile.ts**: Add a `publications` array
3. **Register in Portfolio.tsx**: Import and add `<Publications />` inside the scroll container
4. **Add sidebar icon**: In `Sidebar.tsx`, add a new nav item with an icon and the section's hash anchor

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

---

## Checklist Before Publishing

- [ ] Update `contact.email` with your real email
- [ ] Update `contact.linkedin` with your LinkedIn URL
- [ ] Update `contact.github` with your GitHub URL
- [ ] Update `contact.leetcode` with your LeetCode URL
- [ ] Add your resume PDF to `artifacts/portfolio/public/`
- [ ] Add your profile photo to `artifacts/portfolio/src/assets/`
- [ ] Fill in any placeholder certifications with real ones
- [ ] Review all project descriptions and tech stacks

---

## Common Questions

**Q: How do I change the taglines in the hero typewriter?**  
A: In `profile.ts`, find the `taglines` array and edit the strings.

**Q: How do I reorder the sections?**  
A: Open `src/pages/Portfolio.tsx` and reorder the component elements.

**Q: How do I change the color palette?**  
A: Edit `src/index.css` — the `:root` block has all HSL color variables. Change the HSL values to match your new palette.

**Q: How do I add a dark/light mode toggle?**  
A: Currently dark-mode-only. To add a toggle: (1) create a `ThemeToggle` component, (2) add a `ThemeProvider` with localStorage sync in `App.tsx`, (3) define `.light` overrides in `index.css`.

**Q: How do I add analytics?**  
A: Add your Google Analytics or Plausible script tag to `artifacts/portfolio/index.html` inside the `<head>` block.

---

*This document was generated alongside the initial portfolio build. Keep it updated as you add new features or change the architecture.*
