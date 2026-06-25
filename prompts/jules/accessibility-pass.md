# Prompt: Accessibility Pass

**Purpose:** Prompt for an accessibility sweep.

## Pre-requisites
Read `JULES.md`, `jules.json`, and `jules.qa.md` as source-of-truth files before starting.

## Instructions
Perform an accessibility sweep on the designated files. Do not redesign the UI unless it is strictly necessary for accessibility compliance. You must preserve the existing brand style (neobrutalist, futurist fintech, cyberpunk).

Check and fix the following accessibility items:
- [ ] Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) are present and used correctly.
- [ ] There is exactly one `<h1>` per page.
- [ ] Heading order is logical (no skipping levels, e.g., `<h2>` to `<h4>`).
- [ ] Button labels are descriptive.
- [ ] Link text is descriptive (no "click here").
- [ ] Form labels are explicitly associated with their inputs.
- [ ] Color contrast ratios meet WCAG AA standards (especially with high contrast neobrutalist offset elements and vivid accents).
- [ ] Visible focus states are present for all interactive elements.
- [ ] Keyboard navigation flows logically and elements are accessible via keyboard.
- [ ] Skip links are present for bypassing repetitive navigation.
- [ ] FAQ accordion accessibility is properly implemented (e.g., using `aria-expanded`, `aria-controls`, or native `<details>`/`<summary>`).
- [ ] Reduced motion support is included (`@media (prefers-reduced-motion: reduce)`).
- [ ] Meaningful `alt` text is present on images.
- [ ] Decorative images are hidden from screen readers (e.g., `alt=""` or `aria-hidden="true"`).
- [ ] No text is trapped in images.
- [ ] Touch target sizing is sufficient (at least 44x44 CSS pixels).
- [ ] Accessible names are present for all interactive elements.

## Output Format
After completing the sweep, provide a report that includes:
1. **Fixes Made:** A summary of the accessibility issues found and corrected.
2. **Unresolved Issues:** A list of any issues that could not be fully resolved and require manual intervention or further redesign.