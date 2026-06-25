# SEO QA Checklist

Before merging any pull request that adds or modifies SEO pages (General, Workflows, Comparisons), the following checklist MUST be completed.

## 1. Content & Tone
- [ ] Only one `<h1>` tag exists on the page.
- [ ] Tone is direct, practical, and operator-friendly.
- [ ] No banned hype words are used (e.g., "game-changing", "leverage AI").
- [ ] No fake testimonials, case studies, or metrics are included.
- [ ] The required sensitive workflow disclaimer is present if applicable.

## 2. Metadata & URLs
- [ ] `<title>` is unique, keyword-optimized, and under 60 characters.
- [ ] `<meta name="description">` is unique and between 120-155 characters.
- [ ] `<link rel="canonical">` is present and uses an absolute path (`https://smb-ai-builder.vercel.app/...`).
- [ ] All Open Graph (`og:*`) tags are present and use absolute paths.

## 3. Structure & Schema
- [ ] Page includes 4-6 FAQs (3-5 for workflow pages).
- [ ] `FAQPage` schema JSON-LD is correctly formatted and perfectly matches visible content.
- [ ] NO fake schema (`aggregateRating`, `Offer`, etc.) is present.
- [ ] Internal links follow depth-based relative path rules (e.g., `../../index.html`).

## 4. Technical / Global
- [ ] Global `styles.css` is linked correctly.
- [ ] Global `script.js` is linked correctly.
- [ ] The CTA band is present and links to the correct primary URL: `https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`.
- [ ] The new URL has been added to the root `sitemap.xml`.
- [ ] If required, `seo-refresh-log.md` has been updated.
