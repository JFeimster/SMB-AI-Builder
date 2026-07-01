# ChatGPT Prompt Library

Use these prompt templates to ensure consistent, high-quality outputs when generating or revising content for the SMB AI Workflow & Agent Builder project.

Always attach or reference `chatgpt-project-context.md` and `chatgpt-copy-rules.md` when using these prompts.

---

## 1. Landing Page Revision
**Use Case:** Updating or improving the main static site structure and copy.

> **Prompt:**
> "Act as a Landing Page Strategist for the SMB AI Builder project. Review the attached HTML code for the landing page. Revise the structure and copy to improve conversion rates and clarity.
>
> Strict constraints:
> - Adhere to the `chatgpt-copy-rules.md` (no hype, direct, practical).
> - Ensure the primary CTA ('Score My Automation Readiness') points to the official GPT URL.
> - Maintain the neobrutalist/cyberpunk design aesthetics.
> - Do NOT add any fake testimonials, logos, or unsupported metrics.
>
> Output the revised HTML code and a brief bulleted list of the changes made."

---

## 2. SEO Page Generation (Workflows)
**Use Case:** Generating new SEO content for specific workflow audits (e.g., "Invoice Processing").

> **Prompt:**
> "Act as an SEO Page Generator. I need a new static HTML page for auditing the '[Insert Workflow Name]' workflow.
>
> Requirements based on `chatgpt-seo-rules.md`:
> - Create a unique H1 formatted exactly as: 'Audit Your [Workflow] Before Automating It With AI'.
> - Provide unique Title and Meta Description tags.
> - Include sections: Why it's tempting to automate, What can go wrong, What the GPT checks, Readiness factors, Suggested safe pilot, Human review checkpoints.
> - Include exactly 3-5 relevant FAQs.
> - Generate valid JSON-LD FAQPage Schema.
> - Apply the sensitive workflow disclaimer if this touches money, compliance, or customers.
> - Ensure the final CTA band links to the Custom GPT.
>
> Output the complete, semantic HTML structure."

---

## 3. Comparison Page Generation
**Use Case:** Creating 'Vs' or 'Alternative' pages (e.g., "SMB AI Builder vs. Zapier").

> **Prompt:**
> "Act as an SEO Page Generator. Create a comparison page comparing the 'SMB AI Builder' to '[Competitor/Tool Name]'.
>
> Strict constraints:
> - Frame this as a decision guide, not an attack. Be balanced.
> - Position the SMB AI Builder as the 'planning/readiness layer' used *before* building in the other tool.
> - Do not invent benchmarks or direct integrations.
> - Include sections: 'Use this when...', 'Audit first when...'.
> - Include a comparison table or card grid.
> - Include 4-6 FAQs.
> - Provide a clear CTA band pointing to the GPT.
>
> Output the complete, semantic HTML structure."

---

## 4. Embed Package Generation
**Use Case:** Creating a localized, iframe-ready version of a specific tool for a partner.

> **Prompt:**
> "Act as a Partner Embed Planner. Create the static HTML, CSS, and JS required for an embeddable version of the '[Tool Name]' widget.
>
> Constraints from `chatgpt-embed-generation-rules.md`:
> - Maximum width: 940px. Maximum height: 1200px.
> - Ensure mobile responsiveness within these constraints.
> - Include clear partner attribution ("Powered by SMB AI Builder").
> - Set up CTA links to append standard UTM/ref parameters for tracking.
> - Do not use static config for real access control or secret management.
>
> Output the complete embed package."

---

## 5. README Generation
**Use Case:** Creating documentation for a new directory or tool.

> **Prompt:**
> "Act as a Technical Writer. Create a `README.md` for the new `[Directory Path]` directory.
>
> Requirements:
> - Clearly state the purpose of the directory.
> - List the primary files and their functions.
> - Provide usage instructions for a developer or operator.
> - Maintain the direct, practical, and anti-hype tone of the project.
>
> Output the Markdown text."

---

## 6. Copy Tightening (Anti-Hype Pass)
**Use Case:** Removing marketing fluff and jargon from drafted text.

> **Prompt:**
> "Act as an Anti-Hype Copy Editor. Review the following text.
>
> Rewrite it to be punchy, direct, and operator-friendly.
> - Strip out all vague AI buzzwords (e.g., 'unlock', 'revolutionize', 'seamless', 'game-changing').
> - Replace passive voice with active verbs (e.g., audit, score, map, build).
> - Ensure the tone reflects practical risk mitigation and readiness.
>
> [Insert Text Here]"

---

## 7. QA & Accessibility Pass
**Use Case:** Final review of code or copy before committing.

> **Prompt:**
> "Act as a QA Reviewer. Evaluate the attached [HTML code / Content].
>
> Run it against the `chatgpt-qa-checklist.md`. Specifically check for:
> 1. No invented metrics, fake testimonials, or unsupported claims.
> 2. Presence of sensitive workflow disclaimers (if applicable).
> 3. Proper semantic HTML (exactly one H1, proper heading hierarchy).
> 4. Accessible CTA links (visible focus states, clear labels).
> 5. Links point to the correct Primary GPT URL.
>
> Output a brief QA report detailing any issues found, and provide the corrected code/text."

---

## 8. Schema Review
**Use Case:** Checking JSON-LD structured data for SEO pages.

> **Prompt:**
> "Act as an SEO Reviewer. Validate the following JSON-LD snippet intended for an SEO page.
>
> Constraints:
> - Ensure it is valid Article and/or FAQPage schema.
> - Ensure it does NOT contain any fake review, rating, or aggregate rating schema.
> - Confirm all URLs within the schema point to the canonical production domain (`https://smb-ai-builder.vercel.app`).
>
> [Insert Schema Here]"