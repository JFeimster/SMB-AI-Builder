# Claude Code Review Rules

When reviewing code (HTML, CSS, JS, TSX), adhere to the following guidelines:

## 1. General Principles
- **No Secrets:** Never commit or include secrets, API keys, private tokens, or real environment variables in the repository or frontend code.
- **Simplicity:** Use plain semantic HTML, mobile-first layouts.
- **No External Frameworks (for Static Site):** For static pages, reuse the existing root `styles.css` and `script.js` without adding external frameworks.
- **Next.js Conventions:** When working in the `app/` directory, follow App Router conventions.

## 2. HTML Rules
- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- Exactly one `<h1>` element per page.
- Ensure accessible CTA links, descriptive `alt` attributes on images, and proper ARIA labels where necessary.

## 3. CSS Rules
- Implement the defined design system: Neobrutalist, futurist fintech, and cyberpunk aesthetic.
- Key visual elements: High contrast, thick borders, hard offset shadows, ink black backgrounds, vivid accent colors.
- Ensure visible focus states for all interactive elements to maintain accessibility.

## 4. JavaScript / TypeScript Rules
- For demo code assets (in `docs/knowledge-files/`), ensure they are self-contained HTML/CSS/JS/TS without external dependencies.
- Ensure any utility functions or API routes follow clean, stateless (where possible) design principles.
- Validate all inputs.
