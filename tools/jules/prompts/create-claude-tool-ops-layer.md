You are working inside the `smb-ai-builder` repo.

Create a dedicated Claude tool-ops layer.

Create these files:

CLAUDE.md

tools/claude/
├── README.md
├── claude-agent-profile.md
├── claude-project-context.md
├── claude-task-library.md
├── claude-copy-rules.md
├── claude-seo-rules.md
├── claude-longform-review-rules.md
├── claude-code-review-rules.md
├── claude-qa-checklist.md
├── claude-output-formats.md
└── claude-changelog.md

Purpose:
Create a Claude-specific tool-ops layer for long-form page drafting, site architecture review, SEO page critique, copy tightening, code review, and documentation cleanup.

Project:
SMB AI Workflow & Agent Builder

Primary CTA URL:
https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

Notion resource:
https://feimster.notion.site/smb-ai-builder

GitHub resource:
https://github.com/JFeimster/SMB-AI-Builder

General rules:
- Do not invent testimonials, ratings, logos, revenue claims, compliance claims, case studies, or guarantees.
- Do not frame GPT output as legal, financial, tax, HR, lending, accounting, or compliance advice.
- Preserve direct, no-BS, workflow-first positioning.
- Prefer useful detail over vague AI copy.
- Keep claims honest and specific.

File requirements:

1. CLAUDE.md
Create repo-level Claude instructions.
Include:
- Project overview
- Folder map
- Preferred editing behavior
- Copy voice
- Design system
- SEO standards
- Safety/disclaimer rules
- QA checklist
- Do-not-invent rules

2. tools/claude/README.md
Explain the Claude layer and when to use it.

3. tools/claude/claude-agent-profile.md
Define Claude’s ideal role:
- Strategic reviewer
- Long-form drafter
- Code reviewer
- SEO critic
- Safety copy checker

4. tools/claude/claude-project-context.md
Reusable context.

5. tools/claude/claude-task-library.md
Prompts for:
- Draft SEO page
- Review copy
- Tighten hero
- Rewrite generic AI copy
- Review sitemap
- Review embed docs
- Review accessibility
- Review code

6. tools/claude/claude-copy-rules.md
Copy rules.

7. tools/claude/claude-seo-rules.md
SEO rules.

8. tools/claude/claude-longform-review-rules.md
Rules for reviewing long pages:
- Structure
- Redundancy
- Search intent
- CTA clarity
- Internal links
- Safety language

9. tools/claude/claude-code-review-rules.md
HTML/CSS/JS/TSX review rules.

10. tools/claude/claude-qa-checklist.md
QA checklist.

11. tools/claude/claude-output-formats.md
Preferred output formats.

12. tools/claude/claude-changelog.md
Changelog template.

Final QA:
- Confirm `CLAUDE.md` exists.
- Confirm all files exist in `tools/claude/`.
- Confirm no unsupported product or compliance claims were added.
