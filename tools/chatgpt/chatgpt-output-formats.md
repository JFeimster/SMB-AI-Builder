# Preferred Output Formats

When instructing ChatGPT to generate specific assets, request these output formats to ensure consistency and usability.

## 1. Strategy Brief
Use this when planning a new page or feature before writing code.
- **Goal:** [Brief description of what we are trying to achieve]
- **Target Audience:** [Who this specific piece is for]
- **Core Message:** [The anti-hype, practical takeaway]
- **Proposed Structure:** [Bulleted list of sections/H2s]
- **Required Resources:** [e.g., specific images, links to other pages]

## 2. Wireframe (Text-Based)
Use this to align on page layout before writing HTML.
```text
[ HEADER ] -> Global Nav
-----------------------------------
[ HERO ]
H1: [Text]
Sub: [Text]
CTA: [Primary Button]
-----------------------------------
[ SECTION 1: Problem ]
- Bullet 1
- Bullet 2
-----------------------------------
[ FOOTER ] -> Links
```

## 3. Copy Deck
Use this when reviewing or editing text separated from code.
- **Section: [Name]**
  - **H2:** [Text]
  - **Body:** [Text]
  - **CTA:** [Button Text] -> [URL]
  - **Notes:** [e.g., Add sensitive workflow disclaimer here]

## 4. Static Files (HTML/CSS/JS)
When generating actual site pages, request output in standard code blocks.
- Output the full, self-contained HTML document.
- Use `<style>` and `<script>` tags if generating a standalone embed, otherwise reference global assets.
- Do not truncate code (e.g., avoiding `<!-- rest of the code -->`).

## 5. SEO Package
When generating SEO pages, request a complete package.
1. **Metadata block:** (Title, Meta Description, Canonical URL).
2. **HTML code block:** (The full page structure with H1 and logical headings).
3. **JSON-LD code block:** (The validated Schema script to be placed in the `<head>`).

## 6. Embed Package
When generating a partner embed.
1. **Instructions:** How the partner should paste the iframe.
2. **HTML code block:** The self-contained widget code (max 940px width).
3. **URL parameter guide:** Explaining the required UTM/ref tags for the CTAs.

## 7. QA Report
Use this when asking ChatGPT to review your work against the QA checklist.
- **Status:** [Pass / Fail / Needs Revision]
- **Critical Issues:** [e.g., Found "unlock your potential" in hero section. Needs removal.]
- **Warnings:** [e.g., Missing alt tag on line 45.]
- **Code Fixes:** [Provide the corrected code block]