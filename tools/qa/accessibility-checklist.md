# Accessibility Checklist

Use this checklist to ensure all static, SEO, embed, and Next.js pages meet basic accessibility standards.

## Semantic Structure
- [ ] **Semantic landmarks**: Page uses `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, and `<footer>` appropriately.
- [ ] **H1 presence**: There is exactly one `<h1>` tag on the page, and it accurately describes the primary content.
- [ ] **Heading hierarchy**: Headings follow a logical, nested structure (`h2` follows `h1`, `h3` follows `h2`) without skipping levels.

## Interactive Elements
- [ ] **Button labels**: All `<button>` elements have descriptive text or an `aria-label` explaining their function.
- [ ] **Link text**: Link text is descriptive ("Read the Workflow Guide" rather than "Click Here").
- [ ] **Focus states**: All interactive elements (links, buttons, inputs) have a visible focus state (outline/ring) when navigated via keyboard.
- [ ] **Keyboard navigation**: Every interactive element on the page can be reached and activated using only the `Tab` and `Enter`/`Space` keys.

## Visual Accessibility
- [ ] **Color contrast**: Text and essential UI components have sufficient contrast against their backgrounds (minimum 4.5:1 for normal text).
- [ ] **Reduced motion**: Animations and transitions respect the `prefers-reduced-motion` media query, disabling or minimizing motion if requested by the user.

## Specific Components
- [ ] **FAQ accordion behavior**: FAQ accordions can be opened and closed via keyboard, and their expanded/collapsed state is correctly communicated (e.g., via `aria-expanded`).
