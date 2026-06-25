# Design Tokens

This document outlines the design-token rules for the SMB AI Builder visual system.

## Hard Rule

Do not use a documented design token in production CSS unless it is actually defined in the relevant root stylesheet.

For the static site, the relevant root stylesheet is `styles.css`.
For the Next.js layer, the relevant root stylesheet is `app/globals.css` when that file exists.

## Active Tokens

The following custom properties are active because they are currently defined in the real root stylesheets.

```css
:root {
  /* Primary palette */
  --ink: #050505;
  --off-white: #F8F4E8;
  --lime: #C6FF00;
  --pink: #FF2BD6;
  --cyan: #00E5FF;

  /* Secondary palette */
  --orange: #FF7A00;
  --violet: #6D28D9;
  --yellow: #FFE500;
  --blue: #1D4ED8;
  --concrete: #D1D5DB;

  /* Surface and text colors */
  --paper: #FFFDF3;
  --muted: #3f3f46;
  --line: #050505;

  /* Shadows */
  --shadow: 8px 8px 0 var(--ink);
  --shadow-lg: 14px 14px 0 var(--ink);

  /* Radius */
  --radius: 18px;
  --radius-sm: 10px;

  /* Layout */
  --shell: 1180px;
  --header-height: 76px;

  /* Typography */
  --font-main: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}
```

## Planned Token Aliases

The following names may be useful aliases, but they are not active source-of-truth tokens unless added to `styles.css` and any matching Next/global stylesheet.

Do not use these in production CSS without first adding them to the real `:root` block:

```css
:root {
  --border-width: 4px;
  --border-thick: 6px;
  --radius-pill: 999px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
  --z-below: -1;
  --z-base: 0;
  --z-above: 10;
  --z-sticky: 80;
  --z-header: 100;
  --z-modal: 900;
  --z-skip-link: 999;
  --transition-fast: 140ms ease;
  --transition-normal: 180ms ease;
}
```

## Usage Rules

- Use active tokens for production CSS.
- Label future token ideas as planned until they exist in the real stylesheet.
- If a component needs a planned token, add the token to `styles.css` first, then update this document.
- Do not create component CSS that depends on missing variables without fallbacks.
- Keep the visual language neobrutalist, high-contrast, and operator-friendly.
