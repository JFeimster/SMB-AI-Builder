# Copilot Accessibility Rules

## 1. Visual Accessibility
- **Contrast:** Ensure all text passes WCAG AA contrast ratios against its background. The neobrutalist style generally aids this with high contrast, but verify accent colors.
- **Focus States:** Every interactive element (links, buttons, inputs) MUST have a clearly visible focus state. Do not use `outline: none;` without providing a distinct custom focus style (e.g., a thick border or strong background color change).

## 2. Structural Semantics
- Use proper HTML5 landmark elements (`<nav>`, `<main>`, `<footer>`, etc.).
- Ensure logical tab order. Tab order should follow the visual layout of the page.
- Do not use `<div>` or `<span>` for buttons or links. Use `<button>` and `<a>`.

## 3. Media
- **Images:** All `<img>` tags must have descriptive `alt` attributes. If an image is purely decorative, use `alt=""`.
- Never use images containing critical text that isn't replicated in the HTML.

## 4. Forms & Interactive Elements
- All `<input>`, `<textarea>`, and `<select>` elements must have an explicitly associated `<label>`.
- Use ARIA attributes (`aria-expanded`, `aria-hidden`, `aria-label`) only when native HTML elements fall short, but prefer native semantics.

## 5. Copy & Content
- Ensure CTA links describe the action or destination. Avoid generic text like "Click Here". Instead, use "Audit My First Workflow" or "Score My Automation Readiness".
