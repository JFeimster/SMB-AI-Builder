# Routing Notes

## Supported Architectures

### Static HTML Routing Notes
For plain static hosting, paths correspond directly to the folder structure. E.g., `pages/site/workflow-audit.html` resolves to that exact URL string.

### Next.js App Router Routing Notes
For Next.js, routes are generated cleanly without `.html` extensions. `app/tools/page.tsx` maps to `/tools`.

### Hybrid Repo Cautions
Mixing static HTML files with Next.js App Router files can create conflicting or ambiguous routing expectations depending on Vercel's build output. Ensure clear routing separation between static root pages and the Next.js `app` folder.

### Relative Path Cautions
When authoring static files nested multiple directories deep (e.g., `pages/seo/workflows/`), remember to calculate `../` steps accurately to resolve CSS or scripts located in the root.

## Recommended URL Paths

These are the expected structural paths:

- `/`
- `/pages/site/workflow-audit.html`
- `/pages/seo/best-gpt-for-smb-workflow-automation.html`
- `/pages/seo/comparisons/ai-agent-vs-automation-workflow.html`
- `/pages/seo/workflows/lead-follow-up-workflow-audit.html`
- `/embeds/iframe.html`
- `/embeds/iframe-compact.html`

## Canonical URLs
All pages, static or dynamically generated, should specify a canonical URL reflecting the expected production path. This prevents duplicate content penalties if deployed on multiple domains or accessed via Vercel preview URLs.

## Redirect Notes
If later migrating static pages (e.g., `pages/seo/workflows/my-page.html`) to clean Next.js routes (e.g., `/workflows/my-page`), you will need to map 301 redirects to preserve SEO momentum.

*Example (Conceptual only, do not force into vercel.json unless strictly needed):*
```json
{
  "redirects": [
    {
      "source": "/pages/seo/workflows/lead-follow-up-workflow-audit.html",
      "destination": "/workflows/lead-follow-up",
      "permanent": true
    }
  ]
}
```