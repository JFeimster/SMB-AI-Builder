# CSS Class Map

A reference guide for the most commonly used utility and structural classes in the SMB AI Builder CSS.

## Layout & Structure

| Class | Purpose | Notes |
| :--- | :--- | :--- |
| `.shell` | Main container wrapper. | Constrains width to `var(--shell)` and centers. |
| `.section` | Vertical padding for page sections. | Uses fluid padding `clamp()`. |
| `.split-layout` | Two-column grid layout. | Stacks on mobile, splits on `min-width: 860px`. |
| `.card-grid` | Generic grid for cards. | Use modifiers like `.five-grid` for specific bento layouts. |

## Typography

| Class | Purpose | Notes |
| :--- | :--- | :--- |
| `.eyebrow`, `.section-kicker` | Small, uppercase monospace labels above headings. | Uses `var(--font-mono)`. |
| `.punch` | Highlighted inline text. | Lime background, slight rotation, pink shadow. |
| `.mono-label` | General monospace labeling. | |
| `.center-lede` | Centered paragraph text under a section heading. | Usually constrained by a `max-width`. |

## Buttons & Actions

| Class | Purpose | Notes |
| :--- | :--- | :--- |
| `.btn` | Base button style. | Neobrutalist borders, hover translation. |
| `.btn-primary` | Primary action. | `var(--lime)` background. |
| `.btn-secondary` | Secondary action. | `var(--cyan)` background. |
| `.btn-ghost` | Tertiary action. | `var(--off-white)` background. |
| `.btn-xl` | Larger button variant. | Taller height, larger font size. |
| `.full-width` | Forces button to span container. | Primarily used on mobile views. |

## UI Components & Cards

| Class | Purpose | Notes |
| :--- | :--- | :--- |
| `.brutal-card` | Standard card container. | Thick borders, unblurred shadow. |
| `.warning-board` | High-visibility warning panel. | `var(--yellow)` background, slight rotation. |
| `.dark-slab` | Inverted section background. | Dark gradient background, white text. |
| `.sticker` | Pill-shaped status indicator. | e.g., `.sticker-lime`, `.sticker-cyan`. |
| `.status-chip` | Smaller status indicator for matrix/scorecard. | e.g., `.status-ready`, `.status-warning`. |
| `.terminal-snippet` | Code or output display. | Black background, cyan border, lime text. |

## Utility

| Class | Purpose | Notes |
| :--- | :--- | :--- |
| `.sr-only` | Screen-reader only text. | Visually hides element but keeps it accessible. |
| `.tilt-left`, `.tilt-right` | Slight rotation utilities. | `transform: rotate(-1deg)` / `1deg`. |
