# personal-space

Personal business-card site for Filip Guerrero Mengana, Senior Frontend Developer. Built iteratively.

**Stack:** Next.js (App Router) · TypeScript (strict) · Tailwind CSS 4 · GSAP (`@gsap/react`) · pnpm · Vercel

## Scripts

| Command          | What it does                              |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Dev server on http://localhost:3000       |
| `pnpm build`     | Production build                          |
| `pnpm typecheck` | Generate Next route types, run `tsc`      |
| `pnpm lint`      | ESLint                                    |
| `pnpm format`    | Prettier (write); `format:check` to check |

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
