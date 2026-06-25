# Final QA Runner

## Purpose

Run the final cross-file QA checks before calling a task fully complete.

## When to use this skill

- Always, as the last step of any task modifying files.

## When not to use this skill

- In the middle of an incomplete task.

## Inputs Codex should collect

- Task requirements.
- List of touched files.

## Files and folders this skill may touch

- (Read-only) All touched files.

## Source-of-truth files to read first

- JULES.md
- jules.json
- qa-checklist.md
- style-guide.md
- tools/jules/file-map.json
- tools/jules/copy-rules.md
- tools/jules/seo-rules.md
- tools/jules/accessibility-checklist.md

## Process

1. Verify expected file list.
2. Validate JSON and XML where modified.
3. Check relative paths.
4. Check CTA URLs (`https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`).
5. Check metadata uniqueness and One-H1 rule.
6. Scan for fake proof and banned phrases.
7. Verify sensitive disclaimers.
8. Summarize pass/fail findings.

## Output requirements

A final QA pass/fail report.

## Safety and claims rules
- **No fake proof:** Do not invent fake testimonials, reviews, ratings, logos, case studies, user counts, revenue numbers, guarantees, compliance claims, partner relationships, certifications, benchmarks, integrations, or unsupported competitor claims.
- **Sensitive workflows:** For workflows involving customer-facing communication, money, finance, tax, accounting, legal, HR, medical, lending, underwriting, compliance, private data, or sensitive personal data, recommend:
  - Draft-only mode
  - Human approval before action
  - Limited permissions
  - Test data first
  - Audit logs
  - Escalation rules
  - Rollback plan
  - Qualified human review
- **Safety stance:** Include the exact disclaimer visibly near the relevant safety/CTA section when handling sensitive workflows:
  > This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## QA checklist

- [ ] All QA checks completed.
- [ ] Links validated.
- [ ] No fake proof.

## Common mistakes to avoid

- Skipping the QA step to save time.
- Ignoring relative path errors.

## Final response format

Output the final QA report and confirm task readiness.
