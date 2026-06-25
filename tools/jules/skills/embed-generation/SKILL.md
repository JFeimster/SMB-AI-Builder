# embed-generation

## Purpose
Create partner/affiliate embeds.

## When to use this skill
- When requested to create an embeddable version of the tool or a partner-specific widget.

## When not to use this skill
- When generating standard site pages or SEO pages.

## Inputs Jules should collect
- Partner name/ID.
- Embed type (e.g., iframe, compact, script loader).
- Required dimensions.

## Files and folders this skill may touch
- `embeds/`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Verify the requested embed constraints (e.g., max width 940px, max height 1200px).
2. Generate the requested embed format (iframe HTML, compact widget, or script loader).
3. Ensure partner configuration parameters (e.g., UTM tags) are correctly structured: `utm_source=partner`, `utm_medium=embed`, `utm_campaign=smb_ai_builder`, `utm_content=[partner-id]`, `ref=[partner-id]`.
4. Include necessary partner attribution if required.
5. Include the sensitive workflow disclaimer.
6. Save the output in the `embeds/` directory.

## Output requirements
- A self-contained HTML file or snippet suitable for third-party embedding.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] Appropriate embed type generated.
- [ ] Dimensions are within bounds (if specified).
- [ ] UTM parameters are correctly formatted.
- [ ] No fake partner claims included.
- [ ] Disclaimer included.

## Common mistakes to avoid
- Inventing partner relationships or logos that do not exist.
- Omitting the sensitive workflow disclaimer from embeds.
- Hardcoding invalid or unrequested UTM parameters.

## Final response format
Output the path of the created embed and provide a brief preview of the code block designed for partner use.
