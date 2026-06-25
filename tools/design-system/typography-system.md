# Typography System

The typography is designed to be highly legible, slightly aggressive, and evocative of technical infrastructure and operations.

## Font Stacks

*   **Main (`var(--font-main)`):** `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Used for headings, paragraphs, and most UI text. It provides a clean, neutral, and highly readable base.
*   **Monospace (`var(--font-mono)`):** `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace`. Used for labels, kickers, matrix tags, terminal blocks, and data-heavy components. It reinforces the "infrastructure" and "operations" feel.

## Headings

*   **Huge Hero Headings (H1):**
    *   Designed for maximum impact.
    *   Responsive scaling: `clamp(4.1rem, 14vw, 10.8rem)`.
    *   Always uppercase.
    *   Tight line-height (`0.92`) and tight letter-spacing (`-0.075em`).
*   **Heavy Display Feel (H2, H3):**
    *   H2: Responsive scaling `clamp(2.6rem, 7vw, 6.8rem)`, uppercase.
    *   H3: Responsive scaling `clamp(1.4rem, 3vw, 2.15rem)`.
    *   Headings should feel blocky and substantive.

## Labels and Microcopy

*   **Monospace Labels:** Use `var(--font-mono)` for eyebrows, kickers (`.section-kicker`), tags, and status labels. Typically styled with:
    *   `font-size: ~0.8rem`
    *   `font-weight: 900`
    *   `text-transform: uppercase`
    *   `letter-spacing: 0.08em`

## Body Text

*   **Short Punchy Paragraphs:** Keep paragraphs brief. Avoid walls of text. Operator-friendly language means getting straight to the point.
*   **Line Height:** Standard line height is `1.5` for readability, but tighter (`1.18` to `1.28`) for subheadings and ledes.
*   **Weight:** Base paragraphs often use a slightly heavier weight (e.g., `720` or `750` in variable fonts) to hold their own against the heavy borders and shadows.

## Mobile Type Scaling

*   Use `clamp()` extensively for fluid typography that scales gracefully from small mobile screens up to wide desktop monitors without requiring numerous media queries.
