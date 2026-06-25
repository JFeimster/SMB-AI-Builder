# Cursor SEO Rules

When creating or modifying SEO pages (especially in `pages/seo/`), adhere to the following rules:

1. **Unique Metadata:** Ensure every page has a unique `<title>` and `<meta name="description">`.
2. **H1 Tag:** Exactly one semantic `<h1>` tag per page, formatted appropriately (e.g., 'Audit Your [Workflow]...').
3. **Structured Data:** Include valid JSON-LD schema. For workflow pages, use `Article` and `FAQPage` schemas.
4. **FAQ Section:** Include a dedicated FAQ section with 4-6 questions per page.
5. **Internal Linking:** Ensure navigation links are correct relative to the file's directory depth.
6. **Canonical URLs:** Ensure absolute paths for canonical, og:url, and og:image pointing to the primary Vercel domain.
