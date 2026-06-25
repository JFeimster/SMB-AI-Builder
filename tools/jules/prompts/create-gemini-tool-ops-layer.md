You are working inside the `smb-ai-builder` repo.

Create a dedicated Gemini tool-ops layer.

Create these files:

tools/gemini/
├── README.md
├── gemini-agent-profile.md
├── gemini-project-context.md
├── gemini-prompt-library.md
├── gemini-research-rules.md
├── gemini-code-review-rules.md
├── gemini-copy-rules.md
├── gemini-seo-rules.md
├── gemini-multimodal-review-rules.md
├── gemini-qa-checklist.md
├── gemini-output-formats.md
└── gemini-changelog.md

Project:
SMB AI Workflow & Agent Builder

Product summary:
SMB AI Workflow & Agent Builder helps SMB owners and operators audit workflows, score readiness, rank automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans before investing in tools or builds.

Primary CTA URL:
https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

Notion resource:
https://feimster.notion.site/smb-ai-builder

GitHub resource:
https://github.com/JFeimster/SMB-AI-Builder

Purpose:
Create a Gemini tool-ops layer for research support, page QA, long-context reviews, structured content review, code review, and multimodal page/design critique.

General rules:
- Do not invent testimonials, ratings, reviews, logos, revenue claims, user counts, compliance claims, or case studies.
- Do not describe the GPT as giving legal, financial, tax, HR, lending, accounting, or compliance advice.
- Keep language direct, practical, and anti-hype.
- Use the existing neobrutalist + fintech + cyberpunk brand direction.
- All CTAs should point to the primary GPT URL unless a resource CTA is more appropriate.

File requirements:

1. tools/gemini/README.md
Explain when to use Gemini for this repo:
- Long-page review
- SEO content review
- Competitive/positioning review
- Design screenshot critique
- Code review
- Accessibility review

2. tools/gemini/gemini-agent-profile.md
Define the expected Gemini role:
- Strategic reviewer
- SEO critic
- UX auditor
- Safety/compliance copy checker
- Long-context page reviewer

3. tools/gemini/gemini-project-context.md
Create reusable product context, links, audience, style, and disclaimers.

4. tools/gemini/gemini-prompt-library.md
Create prompts for:
- Review this page for conversion
- Review this page for SEO
- Review this screenshot for visual hierarchy
- Find generic AI copy
- Find unsupported claims
- Review internal links
- Review schema
- Compare page variants

5. tools/gemini/gemini-research-rules.md
Document research rules:
- Use current sources when researching changing topics
- Prefer primary sources
- Cite claims in research output
- Do not turn research into unsupported product claims

6. tools/gemini/gemini-code-review-rules.md
Create code review checklist for HTML, CSS, JS, TSX, accessibility, responsive behavior, and performance.

7. tools/gemini/gemini-copy-rules.md
Create copy review rules focused on removing hype and sharpening operator language.

8. tools/gemini/gemini-seo-rules.md
Create SEO review rules:
- Search intent
- H1/title alignment
- Unique meta
- Internal links
- FAQ usefulness
- Schema honesty
- No fake review markup

9. tools/gemini/gemini-multimodal-review-rules.md
Create rules for reviewing screenshots:
- Check hero clarity
- CTA visibility
- Contrast
- Mobile layout
- Visual consistency
- Crowding
- Readability
- Trust signals

10. tools/gemini/gemini-qa-checklist.md
Create a QA checklist.

11. tools/gemini/gemini-output-formats.md
Define outputs:
- Audit report
- Priority fixes
- Rewrite suggestions
- SEO review
- Visual critique
- Code review

12. tools/gemini/gemini-changelog.md
Create changelog template.

Final QA:
- Confirm all files exist in `tools/gemini/`.
- Confirm the layer does not assume any unsupported Gemini-specific automation.
- Confirm the layer is useful for review, critique, research, and long-context QA.
