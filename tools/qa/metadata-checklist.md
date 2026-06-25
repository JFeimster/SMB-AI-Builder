# Metadata Checklist

Verify the correct implementation of standard and Open Graph metadata on all pages.

## HTML Head Elements
- [ ] **Title**: Page `<title>` is present, descriptive, unique to the page, and under 60 characters.
- [ ] **Meta description**: `<meta name="description">` is present, compelling, unique, and under 160 characters.
- [ ] **Canonical**: `<link rel="canonical">` points to the absolute, correct URL for the specific page on `https://smb-ai-builder.vercel.app`.

## Open Graph (OG) Tags
- [ ] **OG title**: `og:title` is present and matches or closely aligns with the `<title>`.
- [ ] **OG description**: `og:description` is present and matches or closely aligns with the meta description.
- [ ] **OG image**: `og:image` is defined and uses an absolute path pointing to a valid image asset on the deployed domain.
- [ ] **OG url**: `og:url` is defined and uses the absolute path.

## Page Structure
- [ ] **One H1**: Confirm there is exactly one `<h1>` element on the page, and it aligns with the title and intent of the page.
