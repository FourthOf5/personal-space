---
name: Paper & Plate
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#464742'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#767872'
  outline-variant: '#c7c7c0'
  surface-tint: '#5f5e5d'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1c1a'
  on-primary-container: '#858382'
  inverse-primary: '#c9c6c4'
  secondary: '#605e5a'
  on-secondary: '#ffffff'
  secondary-container: '#e3dfda'
  on-secondary-container: '#64625f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1c18'
  on-tertiary-container: '#86847e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e0'
  primary-fixed-dim: '#c9c6c4'
  on-primary-fixed: '#1c1c1a'
  on-primary-fixed-variant: '#474745'
  secondary-fixed: '#e6e2dd'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#484743'
  tertiary-fixed: '#e6e2db'
  tertiary-fixed-dim: '#cac6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#484742'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 76px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Newsreader
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: 0em
  title-editorial:
    fontFamily: Newsreader
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  caption-meta:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  index-mono:
    fontFamily: Space Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.02em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system evokes the tactile authority of an independent, limited-run fashion monograph and the exacting structural discipline of Swiss International Typographic Style. It bridges high-culture editorial publishing with functional modern interfaces.

### Personality & Emotional Resonance
- **Curated & Restrained:** Quiet confidence over loud marketing cues; generous whitespace that treats interface real estate like fine-milled, heavy-stock paper.
- **Architectural Precision:** Every alignment is intentional. Strict asymmetric rhythm replaces generic component centering.
- **Literary Modernism:** Evokes the sensory luxury of archival ink on warm uncoated rag paper, balanced by rigorous typographic hierarchy and precise metadata tags.

### Design Movement & Archetype
- **Editorial Brutal-Modernism:** Crisp hairline division rules, asymmetrical grid tensions, monospaced metadata, and pronounced scale shifts between commanding serif titles and structural Swiss grotesk annotations.
- **Elimination of Artificial Artifacts:** No gratuitous box-shadows, skeuomorphic gradients, or high-radius pills. The physical paper plane and structural hairline borders define all surface boundaries.

## Colors

The palette reproduces the tactile interaction of rich, carbon-pigmented ink stamped onto heavy, warm-toned archival paper.

### Palette Architecture
- **Base Canvas (`#FBF9F5`):** Warm uncoated rag paper. Primary background for all major canvas contexts.
- **Secondary Canvas (`#F4F1EA`):** Shaded exhibition stock. Applied to offset sidebars, callout placards, footers, and recessed table rows.
- **Primary Ink (`#141413`):** Deep carbon charcoal. Used for primary headlines, high-priority body copy, active controls, and structural hairline rules.
- **Soft Charcoal (`#222220`):** Secondary text and dense reading blocks to prevent high-contrast eye fatigue.
- **Subtle Warm Greys (`#787672`, `#A8A59F`):** Architectural metadata, captions, monospaced indices, and inactive UI elements.
- **Hairline Rule (`#E5E2DA`):** Ultra-fine structural boundary lines separating content modules without visual weight.

### Usage Rules
- Avoid pure digital black (`#000000`) and optical white (`#FFFFFF`). Contrast must always feel organic to paper and ink.
- Color is never used as an emotional gimmick; accents are formed through contrast, typographic weight, and dark charcoal blocks against ivory backgrounds.

## Typography

The typographic engine relies on friction between three distinct typographic voices:
1. **The Literary Voice (`Newsreader`):** Display sizes utilize classical transitional serif proportions with generous vertical ascenders and sharp italic alternatives.
2. **The Systematic Voice (`Inter`):** Body and interactive elements utilize neutral, Swiss-inspired modernist grotesque for effortless legibility.
3. **The Archival Voice (`Space Mono`):** Numeric tables, index cataloging, system status marks, and section folio tags utilize fixed-pitch characters.

### Typographic Principles
- **Micro-Tracked Uppercase:** Running headers, section flags, and table labels use uppercase `caption-meta` with expanded letter-spacing (`0.08em`) to mirror archival print cataloging.
- **Tabular Alignment:** All financial sums, indices, page numbers, and dates must utilize `index-mono` to ensure rigid vertical alignment down structural hairlines.

## Layout & Spacing

Layouts follow strict asymmetrical column systems derived from international exhibition catalogs and editorial broadsheets.

### Grid Framework
- **Desktop (1200px+):** 12-column asymmetric grid. Standard content does not center; it anchors dynamically across asymmetrical spans (e.g., 4-column metadata index paired with an 8-column narrative canvas, or 3-column structural title against a 9-column gallery module).
- **Tablet (768px - 1199px):** 8-column grid with a baseline gutter of `1.5rem` and margin of `2rem`.
- **Mobile (Up to 767px):** 4-column grid with a gutter of `1rem` and edge margin of `1.25rem`.

### Rhythmic Rules
- **Structural Bleed vs. Bounded Cell:** Full-bleed hero visuals are balanced by strictly boxed hairline-bordered data blocks.
- **Strict Vertical Cadence:** All component heights and section breaks conform to steps of the spacing scale. Margins must honor the spaciousness of editorial gallery layouts; white space is never compressed to pack information.

## Elevation & Depth

This system rejects artificial drop-shadows and blur-based z-index elevation. Depth is strictly two-dimensional and physical, articulated through surface shading, layered stacking, and razor-sharp hairline borders.

### Surface Tiers
- **Tier 0 (Root Canvas):** `#FBF9F5` (Archival Ivory) - the physical page foundation.
- **Tier 1 (Framed Containers & Modals):** `#F4F1EA` (Warm Shaded Paper) - used to define secondary content compartments, callout panels, and contextual toolbars.
- **Tier 2 (Selected State / Solid Dark Planes):** `#141413` (Carbon Ink) - absolute focal point overlays, floating action bars, and modal scrims.

### Structural Hairlines
- **Primary Dividers:** 1px solid `#E5E2DA`. Used horizontally and vertically to cross-section panels without blur.
- **Focal Boundaries:** 1px solid `#141413`. Applied when an element must express physical isolation, active focus, or structural weight.

## Shapes

The shape vocabulary is strictly non-rounded (`0px` border-radius). 

### Rationale & Rules
- **Architectural Edge:** Every card, button, input field, and modal uses razor-sharp, right-angle intersections. This preserves the illusion of sheared paper sheets and metal typesetting rules.
- **Exceptions:** No rounded corners are permitted anywhere in the primary UI chrome. Circular geometric shapes are reserved strictly for circular status indicator dots (e.g., live gallery status, recording pips) at a fixed scale of `6px` to `8px`.

## Components

### Buttons & Interactive Controls
- **Primary Button:** Solid carbon black (`#141413`) surface with ivory (`#FBF9F5`) sans-serif text (`Inter`, 13px, weight 500, uppercase, `letter-spacing: 0.05em`). Flat 0px corners, no shadow. Hover: Inverts to transparent background with a 1px solid `#141413` border and `#141413` text.
- **Secondary / Outline Button:** Hairline 1px border (`#141413`), transparent background, `#141413` text. Hover: fills solid `#141413` with `#FBF9F5` text.
- **Ghost Action:** Borderless, underlined with a 1px baseline `#141413` rule offset by 4px.

### Input Fields & Selectors
- **Text Inputs:** Flat canvas-matched background with a 1px bottom-only border (`#141413`) or a 4-sided ultra-fine border (`#E5E2DA`). Focus state transforms the border to 1px solid `#141413`.
- **Labels:** Set above the input in `caption-meta` (`Inter`, 11px, weight 500, uppercase, color `#787672`).
- **Input Content:** Set in `body-md` (`Inter`, 14px) or `index-mono` (`Space Mono`, 13px) for financial, date, or numeric entry.

### Checkboxes & Radios
- **Checkboxes:** 14px × 14px square, 0px radius, 1px solid `#141413`. Active state fills completely with `#141413` containing a high-contrast `#FBF9F5` minimal cross or solid square inset.
- **Radio Buttons:** 14px × 14px square (preserving the architectural ethos) or strict geometric circle, 1px solid `#141413`, holding an inner solid `#141413` block on selection.

### Chips, Tags & Badges
- **Editorial Badges:** 0px radius, 1px solid `#E5E2DA`, background `#F4F1EA`, padding `4px 8px`. Typography: `index-mono` (10px, uppercase, color `#787672`).
- **Category Filter Chips:** 1px solid `#141413` when active (solid `#141413` background with `#FBF9F5` text); 1px solid `#E5E2DA` with `#787672` text when inactive.

### Cards & Exhibition Panels
- **Editorial Card:** Defined by an outer 1px hairline border (`#E5E2DA`) or separated purely by asymmetric layout whitespace. Image containers display an aspect ratio of 3:2, 4:5, or 1:1 with an ultra-thin 1px inner keyline.
- **Placard / Inset Card:** Surface fill `#F4F1EA` with an asymmetric 4-column allocation, featuring a monospaced catalog index (`index-mono`) positioned top-left and an editorial serif header (`Newsreader`) positioned bottom-left.

### Lists & Tables
- **Exhibition Tables:** Zero vertical interior borders; horizontal hairline borders (`#E5E2DA`) isolate row items. Row headers use `caption-meta` (`#787672`). Data numbers must use `index-mono` with right-alignment.
- **Hover States:** Table rows subtly tint to `#F4F1EA` without transition delays.