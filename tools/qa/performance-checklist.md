# Performance Checklist (Static)

Ensure the static site remains fast and lightweight.

## Core Checks
- [ ] **Asset Minification**: CSS and JS files are reasonably sized (minified where appropriate for production).
- [ ] **Image Optimization**: Images are compressed, appropriately sized, and ideally served in modern formats (e.g., WebP).
- [ ] **Lazy Loading**: Non-critical images (especially below the fold) use `loading="lazy"`.
- [ ] **No Unused External Scripts**: Ensure no extraneous third-party tracking, fonts, or frameworks are loaded unless explicitly required. The site should rely primarily on its root `styles.css` and `script.js`.
- [ ] **Core Web Vitals**: Run a quick Lighthouse test (or similar) locally or on the preview deployment to ensure LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift) are in the "Good" range.
