# Prompt: Accessibility Pass

## Purpose
Run an accessibility sweep across designated SMB AI Workflow & Agent Builder files without redesigning the product.

## Source-of-Truth Requirement
Before starting, read these root files if they exist:

- `JULES.md`
- `jules.json`
- `jules.qa.md`
- `jules.style.md`

Use `JULES.md` as the human-readable source of truth. Use `jules.json` as the machine-readable source of truth. Use `jules.qa.md` as the final QA checklist. Use `jules.style.md` to preserve the visual system.

## Project Context
- **Project:** SMB AI Workflow & Agent Builder
- **Product description:** SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans.
- **Primary CTA URL:** https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
- **Notion resource:** https://feimster.notion.site/smb-ai-builder
- **GitHub resource:** https://github.com/JFeimster/SMB-AI-Builder

## Task Instructions
Perform an accessibility sweep on the files requested by the user or issue. Do not redesign unless needed for accessibility. Preserve the neobrutalist, futurist fintech, cyberpunk brand style while improving usability.

## File Path Rules
- Preserve existing file locations.
- Preserve existing valid relative paths.
- When editing `pages/site/*.html`, CSS should link as `../../styles.css` and JS should link as `../../script.js` with `defer`.
- When editing `pages/seo/*.html`, CSS should link as `../../styles.css` and JS should link as `../../script.js` with `defer`.
- When editing `pages/seo/comparisons/*.html`, CSS should link as `../../../styles.css` and JS should link as `../../../script.js` with `defer`.
- When editing `pages/seo/workflows/*.html`, CSS should link as `../../../styles.css` and JS should link as `../../../script.js` with `defer`.
- When editing `embeds/*`, keep embed assets portable and relative to the `embeds/` folder unless the file intentionally loads root assets.
- Do not move files unless the task explicitly asks for restructuring.

## Accessibility Checks
Check and fix the following:

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Exactly one H1 per page
- Logical heading order
- Descriptive button labels
- Descriptive link text; no vague `click here` links
- Explicit form labels
- Color contrast strong enough for WCAG AA where practical
- Visible focus states for all interactive elements
- Keyboard navigation order
- Skip links where pages have repeated navigation
- FAQ accordion accessibility using native `<details>/<summary>` or correct ARIA
- Reduced motion support using `@media (prefers-reduced-motion: reduce)`
- Meaningful alt text for informative images
- Decorative images hidden with `alt=""` or `aria-hidden="true"`
- No text trapped in images
- Touch target sizing of at least 44x44 CSS pixels where practical
- Accessible names for interactive elements
- `aria-live` for dynamic status/result updates where relevant
- No keyboard traps

## Brand Preservation Rules
- Preserve the neobrutalist + futurist fintech + cyberpunk style.
- Keep thick borders, hard offset shadows, high contrast, vivid accents, dashboard panels, and scorecard motifs where they do not harm accessibility.
- Do not flatten the brand into generic corporate SaaS beige soup.

## Copy and Claims Rules
Tone must stay direct, no-BS, operator-friendly, anti-hype, practical, and safety-aware.

Avoid banned language:

- unlock your potential
- revolutionize your workflow
- seamless experience
- game-changing
- cutting-edge
- transform your business
- leverage AI
- AI-powered magic
- effortless automation
- fully autonomous business

Do not add fake proof, fake ratings, fake reviews, fake logos, fake testimonials, fake partner claims, fake integrations, guarantees, or unsupported compliance claims while making accessibility fixes.

## Safety Disclaimer Rule
Do not remove existing safety disclaimers. If a sensitive workflow page is missing a necessary disclaimer, add:

> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## CTA Rule
Do not break CTA links. Primary CTA links should use:

`https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`

## Final QA Checklist
Before completing, verify:

- [ ] `JULES.md`, `jules.json`, and `jules.qa.md` were read.
- [ ] Existing file paths were preserved.
- [ ] Correct relative CSS/JS paths were preserved or fixed.
- [ ] Semantic landmarks are present.
- [ ] Every page has exactly one H1.
- [ ] Heading order is logical.
- [ ] Buttons and links have descriptive accessible names.
- [ ] Form labels are explicit.
- [ ] Focus states are visible.
- [ ] Keyboard navigation works.
- [ ] Skip links exist where useful.
- [ ] FAQ accordions are accessible.
- [ ] Reduced motion support exists where motion is used.
- [ ] Meaningful images have alt text.
- [ ] Decorative images are hidden from assistive tech.
- [ ] No text is trapped in images.
- [ ] Touch targets are usable.
- [ ] Primary CTA URL is still correct.
- [ ] No fake proof or unsupported claims were introduced.
- [ ] Safety disclaimers were preserved or added where relevant.

## Final Summary Format
Return a concise report with:

1. **Files Reviewed**
2. **Fixes Made**
3. **Unresolved Issues**
4. **Manual Checks Recommended**
