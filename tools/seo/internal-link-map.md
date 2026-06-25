# Internal Link Map

This document outlines the internal linking strategy across the SMB AI Builder site.

## Linking Rules
- Internal links must use relative paths based on depth.
- From `pages/seo/` (2 levels deep):
  - Home: `../../index.html`
  - Site: `../site/[file].html`
  - Peer SEO pages: `[file].html`
  - Nested pages: `workflows/[file].html` or `comparisons/[file].html`
- From nested directories like `pages/seo/workflows/` (3 levels deep):
  - Home: `../../../index.html`
  - Site: `../../site/[file].html`
  - Main SEO pages: `../[file].html`
  - Peer directories: `../[dir]/[file].html`

## Link Clusters

### 1. Home
- Links to: Core site pages (About, Pricing if applicable, Tools), Top Level SEO pages, Main Categories.
- Received links from: Global navigation (header logo/home link), footer.

### 2. Core Site Pages
- Links to: Relevant Tool Pages, Contact/Support.
- Received links from: Home, footer.

### 3. SEO Pages (General)
- Links to: Workflow Pages (specific examples), Comparison Pages (decision guides), Core Tools (CTA).
- Received links from: Home, other relevant SEO pages, Resource hub.

### 4. Comparison Pages
- Links to: Relevant SEO pages (deep dives into concepts), Core Tools (Positioned as a planning layer before building).
- Received links from: General SEO pages, Resource hub.

### 5. Workflow Pages
- Links to: Safety guidelines, Core Tools (CTA to audit the specific workflow).
- Received links from: General SEO pages, Home (Featured workflows).

### 6. Resource Pages / Embed Docs
- Links to: Relevant tools, related guides, Workflow pages.
- Received links from: Footer, contextual links within articles.

## Link Anchor Text
- Use descriptive anchor text based on target keywords (e.g., "AI workflow audit" instead of "click here").
- Avoid overly optimized exact-match anchor text; keep it natural.
