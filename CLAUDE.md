# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Next.js on http://localhost:3000)
npm run build     # Production build
npm run start     # Serve production build locally
npm run lint      # ESLint via Next.js
```

There are no tests in this project.

## Architecture

Single-page Next.js 14 (App Router) portfolio site with MUI v5 as the primary UI library. Tailwind is configured but MUI's `sx` prop is used for all styling — avoid mixing Tailwind utility classes with MUI components.

**Key files:**
- [src/app/layout.tsx](src/app/layout.tsx) — root layout; wraps the app in `AppRouterCacheProvider` (Emotion SSR for Next.js App Router, from `@mui/material-nextjs/v13-appRouter`) + `ThemeProvider`
- [src/theme.ts](src/theme.ts) — MUI theme (light mode, Roboto font); must be `'use client'`
- [src/app/page.tsx](src/app/page.tsx) — single route, renders `<Profile>`
- [src/component/navbar/NavBar.tsx](src/component/navbar/NavBar.tsx) — responsive AppBar with mobile Drawer; nav items (`Home`, `About`, `Contact`) are currently placeholder buttons with no routing
- [src/component/profile/Profile.tsx](src/component/profile/Profile.tsx) — hero section with avatar, typewriter headline (via `react-simple-typewriter`), bio, social links, and resume PDF link

Components are placed under `src/component/<feature>/`. All components use `'use client'` because they rely on MUI or interactive hooks.

## Known quirks

- `@mui/material` is listed under `devDependencies` rather than `dependencies` in `package.json` — this is intentional for this setup but worth noting if adding new packages.
- Two fonts are loaded: `Inter` applied as a CSS class on `<body>` in the layout, and `Roboto` registered in the MUI theme (used by all MUI Typography). The Roboto theme font takes precedence for MUI components.

## ESLint rules

Enforced beyond `next/core-web-vitals`: `no-unused-vars` (error), `no-undef` (error), single quotes, and space inside object curly braces.

## Static assets

Resume PDF and cover letter live in `public/assets/`. Profile photo is at `public/images/dp.jpeg`.
