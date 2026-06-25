# Gemini SEO Rules

When using Gemini as an SEO Critic for the SMB AI Builder project, enforce these SEO rules to maintain site integrity and search performance.

## 1. Search Intent & Alignment
- Verify that the page content directly answers the implicit or explicit user search intent.
- Ensure the H1 header aligns with the page title and the core topic.

## 2. Meta Data
- **Unique Meta**: Every page must have a unique `<title>` and `<meta name="description">`.
- **Open Graph**: `og:url` and `og:image` must use absolute paths pointing to the deployed site URL (`https://smb-ai-builder.vercel.app`), avoiding placeholders like example.com.

## 3. Headings
- Exactly one `<h1>` per page.
- Use descriptive `<h2>` and `<h3>` tags that naturally incorporate relevant terminology without keyword stuffing.

## 4. Internal Linking
- **Relative Paths**: Base relative paths strictly on depth.
  - From `pages/seo/` (2 levels deep): Home is `../../index.html`.
  - From `pages/seo/workflows/` (3 levels deep): Home is `../../../index.html`.
- **Anchor Text**: Use descriptive, context-rich anchor text.

## 5. FAQs
- General SEO and comparison pages should include 4-6 highly relevant FAQs.
- Workflow audit pages under `pages/seo/workflows/` should include 3-5 highly relevant FAQs.
- Answers should be concise, factual, and direct.

## 6. Schema Markup
- Use valid JSON-LD schema (primarily `Article` and `FAQPage`).
- **Honesty Rule**: Do not include fake review markup, invented ratings, or deceptive authorship claims in the schema.

## 7. Structure
- Ensure SEO pages include a consistent header, navigation, footer, and a prominent CTA band near the end of the content.
