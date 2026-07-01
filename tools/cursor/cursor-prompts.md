# Reusable Cursor Prompts

Use these prompts when asking Cursor to generate or refactor code within the project.

## 1. Generate an SEO HTML Page
```text
Generate a new static HTML SEO page for a workflow audit.
- Title: "Audit Your [Workflow] Before Automating It With AI"
- Include exactly one H1.
- Include a CTA band linking to the primary GPT URL.
- Include 4-6 FAQs with JSON-LD FAQPage schema.
- Keep the language direct, operator-friendly, and anti-hype.
- Ensure all relative CSS/JS paths match the page's directory depth.
```

## 2. Refactor a React Component to Next.js App Router Standard
```text
Refactor this component for the Next.js App Router.
- Default to a Server Component unless React hooks are strictly required.
- If hooks are required, add the "use client" directive at the top.
- Ensure the styling adheres to the neobrutalist/cyberpunk design system.
```

## 3. General Code Cleanup & QA Pass
```text
Run a QA pass on this file.
- Verify semantic HTML and accessibility.
- Check that there are no fake testimonials, logos, or unsupported claims.
- Ensure the tone is direct and SMB-friendly.
- Confirm any embedded content fits within 940x1200 constraints.
```
