You are working inside the `smb-ai-builder` repo.

Create a dedicated Cursor tool-ops layer.

Create these files:

.cursor/
└── rules/
    ├── project.mdc
    ├── static-html.mdc
    ├── next-app-router.mdc
    ├── seo-pages.mdc
    ├── embeds.mdc
    ├── accessibility.mdc
    ├── no-fake-proof.mdc
    └── design-system.mdc

tools/cursor/
├── README.md
├── cursor-prompts.md
├── cursor-qa.md
├── cursor-file-map.json
├── cursor-copy-rules.md
├── cursor-seo-rules.md
├── cursor-component-rules.md
└── cursor-changelog.md

Purpose:
Create a Cursor-specific tool-ops layer for fast repo edits, page generation, refactors, component cleanup, QA passes, and static-to-Next migration support.

Project:
SMB AI Workflow & Agent Builder

Primary CTA URL:
https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

Rules:
- Do not invent testimonials, logos, ratings, reviews, revenue claims, compliance claims, guarantees, or user counts.
- Keep the voice direct, practical, anti-hype, SMB-friendly.
- Preserve the neobrutalist + futurist fintech + cyberpunk style.
- Use semantic HTML and accessible patterns.
- Avoid heavy dependencies.
- Avoid introducing build tools unless the repo already uses them.
- Preserve existing URLs unless instructed otherwise.

File requirements:

1. .cursor/rules/project.mdc
Project-wide rules:
- Product context
- Audience
- CTA links
- Tone
- Safety stance
- Do-not-invent rules

2. .cursor/rules/static-html.mdc
Rules for static HTML files:
- Relative CSS/JS paths
- Semantic sections
- Metadata
- CTA bands
- FAQ sections
- Link comments

3. .cursor/rules/next-app-router.mdc
Rules for Next.js App Router files:
- app/page.tsx
- app/layout.tsx
- app/globals.css
- Client component rules
- Metadata rules

4. .cursor/rules/seo-pages.mdc
SEO page rules:
- Useful content
- Search intent
- FAQ/schema
- Internal links
- No thin doorway pages

5. .cursor/rules/embeds.mdc
Partner embed rules:
- 940px max width
- 1200px max height
- Static config is not real access control
- Partner attribution
- UTM/ref handling

6. .cursor/rules/accessibility.mdc
Accessibility rules.

7. .cursor/rules/no-fake-proof.mdc
Hard rule against fake testimonials, logos, ratings, claims, guarantees, or compliance statements.

8. .cursor/rules/design-system.mdc
Visual design rules:
- Thick borders
- Hard shadows
- Acid lime/cyber pink/electric cyan accents
- Monospace labels
- Dashboard panels

9. tools/cursor/README.md
Explain the Cursor layer.

10. tools/cursor/cursor-prompts.md
Create reusable Cursor prompts.

11. tools/cursor/cursor-qa.md
Create Cursor QA checklist.

12. tools/cursor/cursor-file-map.json
Map folders and file types.

13. tools/cursor/cursor-copy-rules.md
Copy rules.

14. tools/cursor/cursor-seo-rules.md
SEO rules.

15. tools/cursor/cursor-component-rules.md
Rules for reusable sections/components.

16. tools/cursor/cursor-changelog.md
Changelog template.

Final QA:
- Confirm `.cursor/rules/` exists.
- Confirm all Cursor rule files exist.
- Confirm `tools/cursor/` exists.
- Confirm no unsupported claims were added.
