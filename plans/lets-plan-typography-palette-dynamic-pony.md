# CraftCV — Design System Reference Page Plan

## Context

CraftCV is an online CV builder targeting all experience levels. The visual identity must feel distinct from the crowded field of CV tools (Canva, Resume.io, Zety) while remaining professional and trustworthy. This plan defines the design language and describes a single **design system reference page** — a living style guide component that documents all tokens, type scale, components, and patterns before we build any product screens.

---

## Design Decisions (agreed in conversation)

| Property | Decision |
|---|---|
| **Tone** | Calm, trustworthy, clean — with a deliberate edge of boldness |
| **Gradients** | None. Flat color only. |
| **Primary color** | Rich indigo/violet — bold, creative-yet-professional, distinct |
| **Typography** | Sharp modern geometric sans-serif (DM Sans as primary) |
| **Button radius** | Medium — 8–10px, balanced and modern |
| **Layout density** | Balanced — comfortable but efficient |

---

## Color Palette

### Brand
| Token | Hex | Role |
|---|---|---|
| `--color-brand-50` | `#EEEBFF` | Tint backgrounds, hover states |
| `--color-brand-100` | `#D6D0FF` | Subtle fills |
| `--color-brand-500` | `#5B4EE8` | Primary buttons, links, active states |
| `--color-brand-600` | `#4A3DD6` | Button hover |
| `--color-brand-700` | `#3A2EB8` | Button pressed, deep accents |
| `--color-brand-900` | `#1E1880` | Dark text on light brand surfaces |

### Neutrals (off-white base — not pure #FFF or #000)
| Token | Hex | Role |
|---|---|---|
| `--color-neutral-0` | `#FAFAFA` | Page background |
| `--color-neutral-50` | `#F4F4F6` | Card/surface fill |
| `--color-neutral-200` | `#E2E2E8` | Borders, dividers |
| `--color-neutral-400` | `#9898A8` | Placeholder, muted text |
| `--color-neutral-700` | `#3D3D4E` | Secondary text |
| `--color-neutral-900` | `#14141F` | Primary text, headings |

### Semantic
| Token | Hex | Role |
|---|---|---|
| `--color-success` | `#16A34A` | Validation success |
| `--color-warning` | `#D97706` | Caution states |
| `--color-error` | `#DC2626` | Errors, destructive actions |

---

## Typography

**Font:** DM Sans (Google Fonts) — geometric, precise, warm at reading sizes.  
**Scale** uses a 1.25 modular ratio. All weights from the DM Sans variable axis.

| Token | Size | Weight | Line-height | Usage |
|---|---|---|---|---|
| `--text-display` | 3rem / 48px | 700 | 1.1 | Hero / landing |
| `--text-h1` | 2rem / 32px | 700 | 1.2 | Page titles |
| `--text-h2` | 1.5rem / 24px | 600 | 1.3 | Section headings |
| `--text-h3` | 1.25rem / 20px | 600 | 1.35 | Card/panel titles |
| `--text-body-lg` | 1rem / 16px | 400 | 1.6 | Primary body copy |
| `--text-body` | 0.875rem / 14px | 400 | 1.6 | Default UI text |
| `--text-label` | 0.75rem / 12px | 500 | 1.4 | Form labels, badges |
| `--text-caption` | 0.6875rem / 11px | 400 | 1.4 | Helper text, timestamps |

Letter-spacing: headings at `-0.02em`, body at `0`.

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Tags, chips, small badges |
| `--radius-md` | `8px` | Inputs, cards |
| `--radius-lg` | `12px` | Modals, panels, large cards |
| `--radius-xl` | `16px` | Feature cards |
| `--radius-pill` | `9999px` | Pill badges only (sparingly) |

Buttons use `--radius-md` (8px).

---

## Spacing Scale

8px base grid. All spacing tokens are multiples of 4px.

`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`

---

## Shadows / Elevation

Flat-forward. Shadows are subtle and cold-tinted to avoid the "material" look.

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(20,20,31,0.08)` | Cards at rest |
| `--shadow-md` | `0 4px 12px rgba(20,20,31,0.10)` | Dropdowns, popovers |
| `--shadow-lg` | `0 8px 24px rgba(20,20,31,0.12)` | Modals |

---

## Component Specs

### Buttons
Four variants, all flat (no gradients, no shadows — ever):
- **Primary** — brand-500 fill, white text, brand-600 hover, brand-700 active
- **Secondary** — neutral-50 fill, neutral-900 text, brand-50 hover
- **Outline** — transparent fill, neutral-200 border, brand-500 text on hover
- **Ghost** — no fill, no border, brand-500 text, brand-50 background on hover
- **Destructive** — error fill, white text

Sizes: `sm` (32px h), `md` (40px h), `lg` (48px h)  
All use `--radius-md`, `--text-label` font size (14px, weight 500), `16px` horizontal padding.  
**No `box-shadow` on any button variant or state.**

### Inputs
Height: 40px. Border: `1px solid --color-neutral-200`. Focus ring: `2px solid --color-brand-500` offset 2px. Placeholder: `--color-neutral-400`. Radius: `--radius-md`.

### Badges / Tags
Variants: default (neutral-100/neutral-700), brand (brand-50/brand-700), success, warning, error.  
Radius: `--radius-sm`. Font: `--text-label`.

### Cards
Background: white. Border: `1px solid --color-neutral-200`. Radius: `--radius-lg`. Shadow: `--shadow-sm`. Hover: `--shadow-md`.

---

## Reference Page Structure

One **comprehensive Figma-style design system frame** — a fixed-canvas, non-scrolling artboard layout (or a wide/tall canvas that mimics a Figma page). Not a scrollable webpage — a proper design reference board where every section lives on the same visual plane, clearly separated by section labels, so the whole system can be read at a glance.

Layout: a light neutral background (`--color-neutral-50`) as the canvas. White "panel" blocks for each section, arranged in a grid. Section labels in `--text-label` uppercase spaced type. Think Figma's component pages, not a marketing landing page.

Sections (laid out as a 2–3 column grid of panels):
1. **Brand** — CraftCV wordmark + tagline, brand color swatch prominently
2. **Color palette** — all tokens as labeled swatches, grouped: Brand / Neutral / Semantic
3. **Typography scale** — all 8 tokens rendered as live text, with size + weight annotation
4. **Border radius** — labeled squares showing each radius value
5. **Spacing scale** — horizontal bar ruler with labeled tick marks
6. **Buttons** — all variants × all 3 sizes, plus disabled state; no shadows
7. **Form elements** — input default / focus / error / disabled
8. **Badges** — all variants inline
9. **Cards** — example card with all internal elements (title, body, action)

---

## Implementation Plan

### Files to create / modify
- `src/index.css` — wire DM Sans from Google Fonts (`@import` first), define all CSS custom properties as tokens inside `:root`
- `src/App.tsx` — replace stub with the design system reference page component
- No new files needed beyond these two

### Token wiring (src/index.css)
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&display=swap');
@import 'tailwindcss';

:root {
  --color-brand-50: #EEEBFF;
  /* ... all tokens */
  --font-sans: 'DM Sans', sans-serif;
  --radius-md: 8px;
  /* ... */
}

body { font-family: var(--font-sans); }
```

### Tailwind usage
Use Tailwind utility classes in JSX. For custom tokens not covered by default Tailwind scale, apply inline `style` or extend via `@theme` in `src/index.css` with Tailwind v4's `@theme` block.

---

## Next Step (after plan approval)

User will optionally share reference images. Once images are reviewed, we generate the reference page. No product screens yet — this page is purely the design system artifact we'll reference throughout the 3-week build.

---

## Verification

- Dev server is already running; preview updates on save
- Visual check: all sections render, colors match hex values, DM Sans loads from Google Fonts
- No build step needed for verification — hot reload suffices
