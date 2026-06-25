# Sitemap QA Checklist

This checklist must be reviewed before committing updates to the site to ensure the XML sitemap remains accurate.

## Rules
- The sitemap must be located at the root of the repository: `sitemap.xml`.
- All URLs must be absolute, pointing to `https://smb-ai-builder.vercel.app`.

## Checklist

- [ ] **Are all new HTML pages included?** Verify that any recently created pages (SEO, workflows, comparisons) have been added to `sitemap.xml`.
- [ ] **Are deleted/redirected pages removed?** Ensure no 404 pages are present in the sitemap.
- [ ] **Are all URLs absolute?** Confirm the `https://smb-ai-builder.vercel.app` domain is used consistently. No relative paths.
- [ ] **Is the `<loc>` tag correct?** Check for typos in the file paths.
- [ ] **Is the `<lastmod>` date updated?** If significant changes were made to existing pages, update the `<lastmod>` value to the current date (YYYY-MM-DD).
- [ ] **Is XML valid?** Ensure all tags are properly opened and closed, and the file begins with the correct XML declaration and urlset schema.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://smb-ai-builder.vercel.app/</loc>
      <lastmod>2024-01-01</lastmod>
   </url>
   <!-- Additional URLs here -->
</urlset>
```
