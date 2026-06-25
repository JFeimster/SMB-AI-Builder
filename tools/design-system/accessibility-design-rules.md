# Accessibility Design Rules

Accessibility is not an afterthought; it is a core requirement for operator-friendly tools.

## 1. Contrast

*   **High Contrast is Default:** The neobrutalist palette inherently supports high contrast (e.g., Ink Black on Off White, Ink Black on Acid Lime).
*   **Verification:** All text must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
*   **Warning Colors:** Cyber Pink, Hazard Yellow, and Signal Orange must primarily be used as backgrounds with dark (`var(--ink)`) text to ensure legibility.

## 2. Focus States

*   **Visible Focus is Mandatory:** Never remove `outline` without providing an equally visible alternative.
*   **Standard Focus Style:** The global focus style uses a thick, offset cyan outline to fit the cyberpunk theme while ensuring high visibility.
    ```css
    :focus-visible {
      outline: 4px solid var(--cyan);
      outline-offset: 4px;
    }
    ```

## 3. Readable Typography

*   **Base Size:** Ensure the base font size on mobile is legible (minimum 16px effective size).
*   **Line Height:** Body text line-height must be at least 1.5.
*   **Formatting:** Avoid long blocks of all-caps text. Uppercase is reserved for short headings, labels, and buttons.

## 4. Button & Touch Target Sizing

*   **Minimum Target Size:** All interactive elements (buttons, links, form inputs, accordion toggles) must have a minimum touch target area of `44x44px` on mobile devices.
*   **Spacing:** Ensure adequate spacing between interactive elements to prevent accidental clicks.

## 5. Keyboard-Friendly Components

*   **Semantic HTML:** Use `<button>` for actions and `<a>` for navigation. Never use a `<div>` with an `onClick` handler unless you fully implement keyboard events and ARIA roles.
*   **Navigation:** The "Skip to Main Content" link (`.skip-link`) must be the first focusable element on the page, styled clearly when focused.
*   **Accordions/Modals:** Must be fully operable via Tab, Enter, and Space keys.

## 6. Screen Readers

*   **Hidden Text:** Use the `.sr-only` utility class to provide context to screen readers that is visually obvious to sighted users (e.g., labeling an icon-only button).
*   **Images:** All non-decorative `<img>` tags must have descriptive `alt` text. Decorative images (like abstract gradient blobs) should have empty `alt=""` attributes.
