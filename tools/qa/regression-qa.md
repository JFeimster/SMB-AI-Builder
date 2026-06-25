# Regression QA Checklist

Use this checklist to ensure that new code changes do not break existing, previously working functionality.

## 1. Global Navigation & Layout
- [ ] Header and Footer render correctly across all primary page templates.
- [ ] Mobile navigation toggles and functions as expected.
- [ ] Core layout CSS (`styles.css`) changes haven't broken the grid or spacing on older pages.

## 2. Core Workflows
- [ ] Test the primary GPT CTA link from the homepage.
- [ ] Verify that existing SEO/Workflow pages still load their content and FAQs correctly.
- [ ] Check that previously implemented disclaimers on sensitive workflow pages remain visible.

## 3. Integrations / Embeds
- [ ] Check a known-working iframe embed to ensure it still fits within size constraints and loads without errors.

## 4. Metadata Preservation
- [ ] Spot-check 2-3 older pages to ensure their Title, Meta Description, and Canonical URLs have not been inadvertently altered or dropped.
