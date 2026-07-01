# style-system-enforcement

## Purpose
Keep visual and copy style consistent.

## When to use this skill
- When reviewing a PR or making sweeping updates to pages.
- When generating new pages that must align with the neobrutalist/cyberpunk aesthetic and copy guidelines.

## When not to use this skill
- When strictly writing technical logic or fixing backend/routing bugs.

## Inputs Jules should collect
- Target files to review/update.
- Desired visual or copy changes.

## Files and folders this skill may touch
- `styles.css`
- HTML files across `pages/`
- Component files (if using App Router)

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Evaluate the content against the style rules defined in `style-guide.md` and `copy-rules.md`.
2. Apply neobrutalist/cyberpunk style rules (e.g., ink black backgrounds, thick borders, hard offset shadows, acid accents).
3. Scan for and remove banned phrases (e.g., "unlock your potential", "game-changing").
4. Ensure approved phrases are used appropriately.
5. Check CTA consistency (must use approved language and high contrast).

## Output requirements
- Updated files that adhere strictly to visual and copy guidelines.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Visual style rules enforced (shadows, borders, colors).
- [ ] Banned copy phrases eliminated.
- [ ] Approved copy phrases utilized.
- [ ] CTAs are consistent and high-contrast.

## Common mistakes to avoid
- Introducing generic corporate SaaS visuals (e.g., soft shadows, rounded corners, pastel gradients).
- Allowing AI-generated hype words into the final copy.

## Final response format
Summarize style changes made, noting any specific banned phrases removed or visual updates applied.
