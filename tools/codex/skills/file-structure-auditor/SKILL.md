# File Structure Auditor

## Purpose

Audit expected folders and files to ensure they conform to the repo's architectural rules and `jules.json` file maps.

## When to use this skill

- When validating a deployment.
- After creating new pages to ensure they are in the right folder.
- To find missing required assets.

## When not to use this skill

- For modifying file contents.

## Inputs Codex should collect

- Expected file map (`tools/jules/file-map.json`).

## Files and folders this skill may touch

- (Read-only) Repo directories

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

1. List files in the target directory.
2. Detect missing directories based on requirements.
3. Detect duplicate or conflicting paths (e.g., static vs Next.js conflicts).
4. Verify relative CSS and JS paths.
5. Confirm expected files were actually created.
6. Report missing files without inventing them.

## Output requirements

A structural audit report.

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
- Do not invent files that do not exist to satisfy an audit.

## QA checklist

- [ ] Confirmed relative paths for static pages.
- [ ] Identified any missing directories.
- [ ] Detected conflicting files.

## Common mistakes to avoid

- Assuming a file exists without listing the directory.
- Failing to verify depth-based relative paths.

## Final response format

Provide a list of missing, conflicting, or verified files.
