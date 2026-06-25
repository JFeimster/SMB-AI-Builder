# Page Generation Rules

The SMB AI Builder supports two deployment strategies: pure static HTML and a Next.js App Router hybrid. When generating pages, follow the rules for the requested target architecture.

## 1. General Rules (Applies to Both)
- **Accessibility:** All actionable elements (links, buttons) must have visible focus states. Images must have descriptive `alt` tags. Semantic HTML must be used.
- **Styling:** Adhere to the established neobrutalist, cyberpunk visual style. Use high contrast, thick borders, and hard drop shadows.
- **Responsive Design:** All layouts must be mobile-first and fluidly adapt to larger screens.

## 2. Static HTML Rules (Default for `pages/seo/` and `docs/`)
When asked to generate static HTML files:
- **No Build Step:** Output plain, vanilla HTML, CSS, and JS. Do not assume the presence of Webpack, Babel, or a package manager.
- **Dependencies:** Do NOT use external UI frameworks (like React, Tailwind, or Bootstrap) unless explicitly instructed.
- **CSS Reuse:** Link to the existing global stylesheet (`styles.css`) using correct relative paths based on directory depth. Do not inline large blocks of CSS unless creating a self-contained "Knowledge File" or embed.
- **Semantic Structure:** Ensure standard tags (`<header>`, `<main>`, `<section>`, `<footer>`) are used correctly.

## 3. Next.js App Router Rules (When working in `app/`)
When asked to generate Next.js components or pages:
- **App Router Conventions:** Follow standard Next.js App Router directory structures (`page.tsx`, `layout.tsx`).
- **Server vs Client:** Default to React Server Components (RSC). Only use `"use client"` directives when state, effects (`useEffect`), or browser APIs are strictly required.
- **Metadata:** Use the Next.js Metadata API to define page titles, descriptions, and Open Graph data instead of manually writing `<head>` tags.
- **Links:** Use the Next.js `<Link>` component for internal routing.
- **Styling (If configured):** Utilize CSS Modules or the configured styling solution, keeping the neobrutalist aesthetic consistent with the static site.