# Next.js Deployment Notes

If you are deploying the Next.js App Router version of this project on Vercel, adhere to these guidelines.

## Expected Files
A Next.js deployment relies on the standard App Router structure:
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `package.json`
- `next.config.js` or `next.config.mjs` (if used)

## Build Settings
- **Build Command:** The standard command is usually `npm run build` or `npm run build` (or yarn/bun equivalents).
- **Output Directory:** The output directory is typically `.next`. Vercel understands this inherently when the Next.js framework preset is selected.
- **Static Export Note:** If you configure Next.js to do a static export (`output: 'export'`), ensure dynamic routes or server actions are disabled.

## Development and Structure Notes
- **App Router Routing:** Ensure routes are constructed properly within the `app` directory. A folder `app/tools` with a `page.tsx` will map to `/tools`.
- **Metadata:** Use the Next.js App Router Metadata API exported from `layout.tsx` or `page.tsx` to handle title, description, open graph, and canonical tags dynamically.
- **Client Components:** Use the `"use client"` directive only when interactive components (like an FAQ accordion, or navigation menus) are required. Keep SEO-focused content as Server Components by default.
- **Do Not Mix Paradigms:** Do not loosely mix the static HTML `pages/` structure with Next.js `app/` routes without very clear server routing expectations (like redirects or Vercel `vercel.json` rewrites), as it leads to confused build outputs and broken internal links.