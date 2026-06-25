# Gemini Code Review Rules

Use this checklist when asking Gemini to review code within the repository.

## HTML
- [ ] **Semantic Structure**: Uses correct tags (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`).
- [ ] **Headings**: Exactly one `<h1>` per page. `<h2>` and `<h3>` are used in logical order without skipping levels.
- [ ] **Cleanliness**: Plain semantic HTML is used for static pages.
- [ ] **Schema**: Any JSON-LD schema (Article, FAQPage) is valid and honestly represents the page content.

## CSS
- [ ] **Style Alignment**: Adheres to the neobrutalist, futurist fintech, and cyberpunk aesthetic.
- [ ] **Key Traits**: High contrast, thick borders, hard offset shadows, ink black backgrounds, vivid accent colors.
- [ ] **Reusability**: Uses existing root `styles.css` where possible without adding unnecessary external frameworks.
- [ ] **Organization**: Clean, un-bloated, and well-commented.

## JavaScript / TSX
- [ ] **Vanilla JS (Static)**: Uses plain JavaScript for static pages without external dependencies. Reuse existing `script.js`.
- [ ] **Next.js (App Router)**: Follows App Router conventions when working inside the `app/` directory.
- [ ] **Security**: No secrets, API keys, private tokens, or real environment variables are committed or exposed in frontend code.

## Accessibility (A11y)
- [ ] **Focus States**: All interactive elements (links, buttons) have visible focus states.
- [ ] **Contrast**: Text and background colors meet high contrast requirements.
- [ ] **Alt Text**: Images have descriptive `alt` attributes.
- [ ] **ARIA**: ARIA labels are used only when native HTML elements are insufficient.

## Responsiveness & Performance
- [ ] **Mobile-First**: Layouts are built mobile-first and scale cleanly to desktop.
- [ ] **Performance**: Minimal heavy assets. Scripts are deferred or loaded asynchronously where appropriate.
- [ ] **Touch Targets**: CTAs and links are easily clickable on mobile devices.
