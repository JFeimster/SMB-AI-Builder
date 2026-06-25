# Copilot Code Style Rules

## 1. General Principles
- **Keep it Simple:** Prefer plain, static HTML/CSS/JS over complex frameworks where possible.
- **No External Frameworks:** Do not add Bootstrap, Tailwind (unless part of a Next.js App Router setup), or jQuery. Rely on vanilla web standards.
- **Reuse:** Always attempt to reuse classes defined in the root `styles.css`.

## 2. HTML Standards
- **Semantic Tags:** Use `<header>`, `<main>`, `<footer>`, `<article>`, `<section>`, and `<nav>`.
- **Headings:** Strict hierarchy. Exactly ONE `<h1>` per page. Do not skip heading levels (e.g., jump from H2 to H4).
- **Mobile First:** Ensure layout structure defaults to vertical stacking for mobile before applying desktop media queries.

## 3. CSS & Design System
- **Neobrutalism:**
  - High contrast.
  - Ink black backgrounds where appropriate.
  - Vivid accent colors.
  - Thick, distinct borders.
  - Hard, un-blurred offset drop shadows (`box-shadow: 4px 4px 0px #000;`).
- Avoid subtle gradients and soft shadows.

## 4. Next.js App Router (When Applicable)
- If working inside the `app/` directory, adhere strictly to Next.js App Router conventions.
- Use Server Components by default; only use `'use client'` when interactivity/hooks are strictly required.
