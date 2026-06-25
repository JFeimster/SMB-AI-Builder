# Metadata Rules

This document defines the strict rules for setting HTML metadata across the SMB AI Builder site.

## General Rules
- Every page must have unique `<title>` and `<meta name="description">` tags.
- No duplicate metadata across the site.
- Avoid promotional fluff and hype words (e.g., "game-changing", "revolutionary"). Use descriptive, action-oriented language.

## Titles (`<title>`)
- **Format:** `[Primary Keyword/Topic] | SMB AI Builder`
- **Length:** Keep under 60 characters to avoid truncation in SERPs.
- **Example:** `Audit Your Invoicing Workflow | SMB AI Builder`

## Meta Descriptions (`<meta name="description">`)
- **Format:** Describe the page's value proposition clearly and directly. Include secondary keywords naturally.
- **Length:** Keep between 120 - 155 characters.
- **Example:** `Score your invoicing workflow readiness before automating. Identify risks and build a safe AI agent pilot plan.`

## Canonical URLs (`<link rel="canonical">`)
- **Rule:** Every page must self-reference its canonical URL unless it is explicitly a duplicate.
- **Format:** Must use absolute paths pointing to the deployed site URL. No trailing slashes unless explicitly configured on the server.
- **Domain:** `https://smb-ai-builder.vercel.app`
- **Example:** `<link rel="canonical" href="https://smb-ai-builder.vercel.app/pages/seo/workflows/invoicing.html">`

## Open Graph (OG) Tags
- Required on all public-facing pages to ensure rich previews on social and messaging platforms.
- `og:title`: Usually mirrors the `<title>`.
- `og:description`: Usually mirrors the meta description.
- `og:url`: Must be the absolute URL matching the canonical URL.
- `og:type`: Usually `website` or `article`.
- `og:image`: Must use an absolute path to a valid image asset hosted on the primary domain.
  - **Example:** `<meta property="og:image" content="https://smb-ai-builder.vercel.app/assets/og-image.jpg">`

## Header Tags (H1)
- **Rule:** Exactly *one* `<h1>` tag per page.
- **Rule:** The H1 must accurately reflect the main topic and include the primary keyword.
- **Rule:** Do not use H1s for styling purposes.
