# QA Checklist

Before finalizing or committing any generated code, copy, or page structure, run through this checklist to ensure compliance with project standards.

## 1. Copy & Claims
- [ ] No fake metrics, ratings, user counts, or case studies were invented.
- [ ] No vague AI buzzwords (e.g., "unlock," "revolutionize," "seamless") are present.
- [ ] The tone is practical, direct, and operator-friendly.
- [ ] No legal, financial, HR, or compliance advice is guaranteed.

## 2. Links & CTAs
- [ ] The primary CTA text uses approved phrasing (e.g., "Audit My First Workflow").
- [ ] The primary CTA link points directly to the Custom GPT URL (`https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`).
- [ ] Internal links use the correct relative path depth.
- [ ] References to Notion and GitHub use the correct URLs where appropriate.

## 3. Disclaimers
- [ ] If the page discusses money, compliance, HR, or customer data, the exact Sensitive Workflow Disclaimer is present and visible.
  - *Disclaimer: "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review."*

## 4. SEO & Schema (If applicable)
- [ ] The page has exactly ONE `<h1>` tag.
- [ ] Workflow audit pages use the H1 format: "Audit Your [Workflow] Before Automating It With AI".
- [ ] Title tag is unique and < 60 characters.
- [ ] Meta description is unique, action-oriented, and < 155 characters.
- [ ] 4-6 FAQs are included on the page.
- [ ] JSON-LD schema (Article or FAQPage) is valid.
- [ ] No fake Review, Product, or AggregateRating schema is present.

## 5. Accessibility & Layout
- [ ] Layout is mobile-first and responsive.
- [ ] All images have descriptive `alt` attributes.
- [ ] All interactive elements (links, buttons) have visible focus states.
- [ ] Adheres to the neobrutalist/cyberpunk visual style.

## 6. Embeds (If applicable)
- [ ] Complies with max dimensions (940px width, 1200px height).
- [ ] Includes "Powered by SMB AI Builder" attribution.
- [ ] CTA links include tracking parameters (UTM/ref).
- [ ] Contains no hardcoded secrets or secure access control logic in the frontend.