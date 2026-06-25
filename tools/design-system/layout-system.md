# Layout System

The layout principles emphasize structure, grid-based alignment, and bold, off-kilter elements for visual interest.

## Mobile-First Layout

*   All base styles must assume a mobile viewport.
*   Grids start as single columns (`grid-template-columns: 1fr`) and use media queries (e.g., `@media (min-width: 700px)`, `@media (min-width: 860px)`) to progressively enhance into multi-column layouts.

## Max Widths

*   **Shell (`.shell`):** The primary container width is restricted to `var(--shell)` (1180px).
*   **Content Widths:** Text blocks (H1, ledes) often have explicit `max-width` settings (e.g., `900px`, `720px`) to prevent line lengths from becoming unreadable on wide screens.

## Grids and Cards

*   **Bento Grids:** Used for varied content presentation. Often implemented using asymmetrical column spans (e.g., spanning 2 columns out of 6 for smaller items, 3 columns for wider items).
*   **Asymmetrical Cards:** Cards often feature slight rotations (`transform: rotate(-1deg)`) to break the rigid grid and reinforce the brutalist/startup vibe.
*   **Grid Gaps:** Generous gaps (`gap: 18px` to `gap: clamp(28px, 5vw, 56px)`) ensure distinct separation between elements.

## Section Spacing

*   Sections use large, fluid vertical padding: `padding: clamp(68px, 9vw, 128px) 0`.
*   This creates clear visual breaks between different functional areas of the page.

## CTA Placement

*   **Prominent:** CTAs must be immediately visible above the fold in the hero section.
*   **Contextual:** Place CTAs near the end of explanatory sections (e.g., after the scorecard or matrix).
*   **Sticky CTA Usage:** Implement a `.sticky-cta` that appears fixed at the bottom of the screen (`position: fixed; bottom: 16px;`) on mobile or when the user scrolls past the main hero CTA, ensuring a conversion path is always available.
