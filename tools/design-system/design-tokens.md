# Design Tokens

This document outlines the core CSS variables (custom properties) that form the foundation of the SMB AI Builder design system.

## Colors

The palette is high-contrast, cyberpunk, and neobrutalist.

```css
:root {
  /* Primary palette */
  --ink: #050505;
  --off-white: #F8F4E8;
  --lime: #C6FF00;       /* Acid Lime */
  --pink: #FF2BD6;       /* Cyber Pink */
  --cyan: #00E5FF;       /* Electric Cyan */

  /* Secondary palette */
  --orange: #FF7A00;     /* Signal Orange */
  --violet: #6D28D9;     /* Deep Violet */
  --yellow: #FFE500;     /* Hazard Yellow */
  --blue: #1D4ED8;       /* Brutalist Blue */
  --concrete: #D1D5DB;   /* Concrete Gray */

  /* Surface colors */
  --paper: #FFFDF3;      /* Slightly warmer surface */
  --muted: #3f3f46;      /* Subtle text/borders */
  --line: #050505;       /* Explicit line color */
}
```

## Borders and Shadows

Hard, unblurred drop shadows are a key feature of the neobrutalist style.

```css
:root {
  /* Shadows are explicitly unblurred */
  --shadow: 8px 8px 0 var(--ink);
  --shadow-lg: 14px 14px 0 var(--ink);

  /* Standard border thickness */
  --border-width: 4px;
  --border-thick: 6px;
}
```

## Radius

```css
:root {
  --radius: 18px;      /* Large components, cards */
  --radius-sm: 10px;   /* Small inputs, tags */
  --radius-pill: 999px;/* Buttons, nav items */
}
```

## Typography

```css
:root {
  --font-main: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}
```

## Spacing and Layout

```css
:root {
  --shell: 1180px;         /* Max layout width */
  --header-height: 76px;   /* Sticky header height */
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
}
```

## Z-Index

```css
:root {
  --z-below: -1;
  --z-base: 0;
  --z-above: 10;
  --z-sticky: 80;
  --z-header: 100;
  --z-modal: 900;
  --z-skip-link: 999;
}
```

## Motion

```css
:root {
  --transition-fast: 140ms ease;
  --transition-normal: 180ms ease;
}
```
