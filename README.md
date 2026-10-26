# personal-space

Personal business-card site for Filip Guerrero Mengana, Software Developer. Built iteratively.

**Stack:** Next.js (App Router) · TypeScript (strict) · Tailwind CSS 4 · GSAP (`@gsap/react`) · pnpm · Vercel

## Scripts

| Command               | What it does                                         |
| --------------------- | ---------------------------------------------------- |
| `pnpm dev`            | Dev server on http://localhost:3000                  |
| `pnpm build`          | Production build                                     |
| `pnpm typecheck`      | Generate Next route types, run `tsc`                 |
| `pnpm lint`           | ESLint                                               |
| `pnpm format`         | Prettier (write); `format:check` to check            |
| `pnpm brand:generate` | Regenerate PNG and favicon exports from the logo SVG |

## Logo and favicon

The hand-traced source is `public/brand/logo.svg`: an unfilled ink outline with a
transparent background, preserving the sketch's asymmetry and pen lifts.
`public/brand/logo.png` is the transparent 1024px export.

Run `pnpm brand:generate` after editing the source. It also exports a transparent
64px `public/brand/favicon.png`, an adaptive light/dark `src/app/icon.svg`, and
`src/app/favicon.ico` with 16px, 32px, and 48px sizes. The icons share the original
geometry with heavier strokes for legibility. Next.js discovers both app icons
automatically.

## Structure

```
design/            Stitch exports (reference only, never imported). See design/README.md
public/            Static assets
src/
  app/             Routes and layout only. No logic; compose features here.
  features/        One folder per page section (hero, about, work, ...)
    <feature>/
      components/  Feature-private components
      <feature>.content.ts   Copy and data; keep text out of JSX
      index.ts     Public API of the feature
  components/
    ui/            Shared primitives (Container, Button, ...)
    layout/        Header, Footer, section wrappers
  animations/      Shared GSAP layer
    gsap.ts        The only place plugins are registered
    presets.ts     Durations, eases, staggers, reduced-motion queries
    hooks/         useReveal, ...
    components/    Client wrappers that let server components animate
  lib/             Shared utilities. Check here before writing a helper.
  config/          site.ts: name, role, URL, SEO
  types/           Shared types
```

## Rules

- `app/` only wires things together. Sections live in `features/`.
- Features never import from each other; they use `components/`, `animations/`, `lib/`, `config/`.
- Import GSAP only through `@/animations/gsap`. Motion values come from `presets.ts`.
- Animated elements are marked `data-reveal` inside a `RevealGroup`; they are hidden by CSS only when reduced motion is not requested.
- Small components, one per file, arrow functions. Keep copy in `*.content.ts`.

## Deploying

Import the repo in Vercel (framework auto-detected), then attach the custom domain. Set `NEXT_PUBLIC_SITE_URL` to the production URL so metadata resolves correctly.
