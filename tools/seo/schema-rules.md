# Schema Rules

Structured data (JSON-LD) helps search engines understand the context of our pages. All schema implementations must strictly adhere to the guidelines in `no-fake-schema.md`.

## Implementation Rules
- All schema must be injected as JSON-LD within a `<script type="application/ld+json">` tag in the `<head>`.
- Validate all schema using the Google Rich Results Test before publishing.

## Approved Schema Types

### 1. WebApplication / SoftwareApplication
Used on the home page and core tool pages to define the GPT application.
- **Rules:** Must accurately reflect the tool. Do *not* invent `aggregateRating` or `offers` if they do not exist.
- **Required Fields:** `name`, `applicationCategory`, `operatingSystem`.

### 2. Article
Used on general SEO pages, blog posts, and deep dives.
- **Rules:** Must include valid `headline`, `author` (Organization or specific human), `datePublished`, and `image`.

### 3. FAQPage
Used on *every* SEO, Workflow, and Comparison page that contains the required FAQ section.
- **Rules:** Must perfectly mirror the visible Q&A content on the page. Do not include FAQs in the schema that are hidden from the user.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AI workflow audit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI workflow audit evaluates a business process to determine if it is ready, safe, and beneficial to automate using artificial intelligence."
      }
    }
  ]
}
</script>
```

### 4. BreadcrumbList
Used on nested pages (e.g., `/pages/seo/workflows/invoicing.html`) to clarify site structure.
- **Rules:** Paths must accurately reflect the site hierarchy and use absolute URLs.

## Prohibited Schema
See `no-fake-schema.md` for explicit prohibitions. Never use schema to artificially inflate authority or invent reviews.
