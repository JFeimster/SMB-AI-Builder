# Claude SEO Rules

## On-Page Elements
- **Titles & Meta Descriptions:** Must be unique for every page, descriptive, and keyword-aligned with search intent.
- **Headings:** Exactly one H1 per page. Use descriptive H2s and H3s for logical hierarchy.
- **URLs and Canonicalization:** All canonical URLs, Open Graph URLs (`og:url`), and Open Graph image URLs (`og:image`) must use absolute paths pointing to the deployed site URL (`https://smb-ai-builder.vercel.app`). Avoid placeholders like example.com.

## Content Structure
- **Consistency:** SEO pages must include a consistent header, navigation, and footer.
- **FAQs:** General SEO and comparison pages should include 4-6 FAQs relevant to the topic.
- **Workflow FAQs:** Workflow audit pages under `pages/seo/workflows/` should include 3-5 FAQs relevant to the workflow.
- **CTA:** Include a clear CTA band near the end of the page using the core CTA language ("Audit My First Workflow", "Score My Automation Readiness").

## Technical SEO
- **JSON-LD Schema:** Ensure valid JSON-LD schema (Article and FAQPage) is included where appropriate.
- **Accessibility:** Ensure accessible CTA links, visible focus states, semantic HTML, and descriptive alt attributes for images.
- **Crawler Files:** Maintain `robots.txt` and `sitemap.xml` in the repository root. Use `pages/seo-support/` for llms.txt and JSON-LD schemas.

## Internal Linking
- Base relative paths on depth.
- From `pages/seo/` (2 levels deep): Home is `../../index.html`, Site is `../site/[file].html`, Peer SEO pages are `[file].html`, nested pages are `workflows/[file].html` or `comparisons/[file].html`.
- From nested directories like `pages/seo/workflows/` (3 levels deep): Home is `../../../index.html`, Site is `../../site/[file].html`, Main SEO pages are `../[file].html`, workflow peer pages are `[file].html` or `./[file].html`, and comparison pages are `../comparisons/[file].html`.
