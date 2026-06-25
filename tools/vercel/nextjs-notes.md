# Next.js App Router Deployment Notes

Notes for deploying the Next.js version of this project on Vercel.

## Expected Files
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `package.json`
- `next.config.js` (or `.mjs`)

## Build Command
- Command: `npm run build`
- Output directory: `.next`

## Static Export Note
Only configure static export (`output: 'export'` in next.config) if you intentionally want to generate purely static HTML and do not need server-side features like API routes or dynamic rendering.

## Deployment Cautions
- **App Router Routing:** Ensure you understand file-based routing (`app/tools/*/page.tsx`).
- **Metadata:** Use the Next.js Metadata API in layout or page files instead of raw `<meta>` tags where applicable.
- **Client Components:** Add `'use client'` at the top of files that use interactivity (like FAQ accordions or menus).
- **Hybrid Repos:** Do not mix raw static HTML pages and Next.js routes without clear routing expectations. Next.js might ignore or conflict with files in `pages/` depending on the Next version and config.