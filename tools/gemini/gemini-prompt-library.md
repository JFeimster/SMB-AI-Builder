# Gemini Prompt Library

Use these prompts when asking Gemini to perform specific reviews within the SMB AI Builder project. Always provide the `gemini-project-context.md` file along with your target file/image.

## Review this page for conversion
```text
Act as a UX Auditor and Strategic Reviewer. Review this page layout and copy.
Identify any friction points that might prevent a user from converting.
Ensure the primary CTA points to the core GPT URL (unless a resource CTA is more appropriate).
Output priority fixes and rewrite suggestions focusing on practical, operator-friendly language.
```

## Review this page for SEO
```text
Act as an SEO Critic. Review this HTML page.
Check for search intent alignment, unique meta title/description, proper H1 usage (only one per page), and descriptive H2s.
Verify internal link structure depth and ensure the presence of 4-6 useful FAQs.
Check that the JSON-LD schema (Article or FAQPage) is valid and does not contain fake reviews or markup.
Output an SEO review report.
```

## Review this screenshot for visual hierarchy
```text
Act as a UX Auditor. Review this screenshot.
Evaluate the hero clarity, CTA visibility, contrast, and visual consistency against a neobrutalist/cyberpunk/fintech style.
Look for crowding, readability issues, and trust signals.
Provide a visual critique output.
```

## Find generic AI copy
```text
Act as a Copy Reviewer. Scan this text for hype words, vague buzzwords, or fluffy deployment theory.
Specifically, flag phrases like "unlock your potential," "revolutionize your workflow," "seamless experience," "game-changing," "cutting-edge," "transform your business," or "leverage AI."
Suggest direct, practical rewrites.
```

## Find unsupported claims
```text
Act as a Safety and Compliance Checker. Scan this text.
Identify any invented testimonials, ratings, reviews, logos, revenue claims, user counts, compliance claims, or case studies.
Flag any language that implies the product provides legal, financial, tax, HR, lending, accounting, or compliance advice.
```

## Review internal links
```text
Act as an SEO Critic. Review the internal links on this page.
Verify that relative paths are based correctly on depth (e.g., from `pages/seo/workflows/` ensuring Home is `../../../index.html`).
Ensure CTAs are accessible and have visible focus states.
```

## Review schema
```text
Act as an SEO Critic. Review the provided JSON-LD schema.
Ensure it represents honest data (no fake reviews) and matches the content of the page.
Check for valid structural format for Article and FAQPage schemas.
```

## Compare page variants
```text
Act as a Strategic Reviewer. Compare these two page variants.
Ensure the comparison is balanced, framed as a decision guide, and does not attack competitors (like Zapier or Make).
Position the GPT as a planning/readiness layer before building.
Check that the variants include a 'Use this when...' section, an 'Audit first when...' section, a comparison table/grid, a CTA band, and 4-6 FAQs.
```
