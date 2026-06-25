# Routing Notes

This document covers routing expectations for the different deployment modes.

## Static HTML Routing Cautions

- Be careful with relative paths. A link like `../styles.css` will break if the HTML file is moved to a different depth.
- Vercel's static hosting handles `.html` extensions automatically. However, ensure links in the app either include the extension or rely on Vercel's `cleanUrls` setting if enabled.

## Next.js App Router Cautions

- Next.js uses file-based routing in the `app/` directory (e.g., `app/page.tsx` maps to `/`).
- Mixing Next.js routes with static HTML pages in the same repo can cause confusion or conflicts if not managed carefully. Ensure no overlap between Next.js routes and static folder paths.

## Hybrid Repo Cautions

- If maintaining both static pages and Next.js, verify that paths like `/pages/seo/` do not conflict with Next.js dynamic routes.
- Thoroughly test all routes after a deployment.

## Recommended URL Paths

Below are the recommended paths for specific site pages:

- `/` (Root homepage)
- `/pages/site/workflow-audit.html`
- `/pages/seo/best-gpt-for-smb-workflow-automation.html`
- `/pages/seo/comparisons/ai-agent-vs-automation-workflow.html`
- `/pages/seo/workflows/lead-follow-up-workflow-audit.html`
- `/embeds/iframe.html`
- `/embeds/iframe-compact.html`

## Canonical URLs

Always use absolute URLs (e.g., `https://smb-ai-builder.vercel.app/...`) for canonical tags. Do not use relative paths for canonical URLs.

## Redirects (Optional)

If you plan to move static pages to clean Next.js routes later, you might add redirects in `vercel.json` or `next.config.js`. Example (do not add this to `vercel.json` unless needed):

```json
{
  "redirects": [
    {
      "source": "/pages/old-path.html",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```