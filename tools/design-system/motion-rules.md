# Motion Rules

The SMB AI Builder brand relies on stark visuals, not flashy animations. Motion should be used sparingly and purposefully.

## Core Rules

1.  **Use subtle motion only.**
    *   Motion is reserved for micro-interactions (hover states, focus states, accordion toggles, mobile menu opening).
    *   Avoid complex scroll-jacking, parallax, or long, sequence-based animations.

2.  **No motion is required to understand content.**
    *   If an animation fails or is disabled, the user must still be able to read all content and complete all actions.

3.  **Avoid heavy animation.**
    *   The neobrutalist aesthetic is inherently rigid and blocky. Smooth, flowing animations clash with this vibe.
    *   When elements do move (e.g., a button translating on hover), the transition should be fast and deliberate (e.g., `140ms ease`).

## Interaction Patterns

*   **Buttons (`.btn`):**
    *   On hover: Translate down and right (`transform: translate(4px, 4px)`), reduce shadow spread to create a "pressed in" effect.
    *   Transition: `transform 140ms ease, box-shadow 140ms ease`.
*   **Accordions (`.faq-answer`):**
    *   Toggle height using CSS Grid transitions (`grid-template-rows: 0fr` to `1fr`).
    *   Transition: `180ms ease`.
*   **Sticky CTA (`.sticky-cta`):**
    *   Slide in from the bottom when triggered by scroll position.
    *   Transition: `transform 180ms ease`.

## Respect Reduced Motion

All motion must respect the user's OS-level accessibility preferences. The root `styles.css` includes the following safeguard:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```
This ensures that all CSS transitions and smooth scrolling are immediately disabled if the user has requested reduced motion.
