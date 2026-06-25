# Cursor Component Rules

Guidelines for creating and modifying reusable sections or UI components.

## Static HTML Components (Sections)
- **Modularity:** Design sections (like headers, footers, CTA bands, FAQ sections) so they can be easily duplicated and modified across static pages.
- **Styling:** Rely entirely on the root `styles.css` without introducing inline styles unless strictly necessary for dynamic behaviors.
- **Semantics:** Use standard HTML tags (`<header>`, `<footer>`, `<section>`, `<aside>`) to ensure structural integrity.

## Next.js Components (`app/` Directory)
- **Server Default:** Default to React Server Components. Avoid `"use client"` unless browser APIs or React state (hooks) are actively used.
- **Prop Drilling:** Keep component props explicit and strongly typed if using TypeScript.
- **Styling:** Follow the neobrutalist/cyberpunk theme utilizing global CSS styles. Avoid heavy third-party UI component libraries if the existing CSS suffices.
