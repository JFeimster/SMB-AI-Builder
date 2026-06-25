---
name: accessibility-audit
description: Use when auditing static HTML or Next.js UI for accessibility, keyboard support, semantic structure, focus states, contrast, labels, alt text, and FAQ/accordion behavior.
---

# Accessibility Audit

## Purpose
Run an accessibility QA pass over repo UI files before deployment or merge.

## Use this skill when
- Reviewing newly generated static or Next.js pages.
- Checking keyboard navigation, semantic landmarks, headings, labels, alt text, contrast, or focus states.
- Auditing FAQ accordions, embedded widgets, forms, CTAs, and navigation.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/qa-checklist.md`
- `tools/jules/style-guide.md`
- `tools/jules/file-map.json`
- `tools/jules/copy-rules.md`
- `tools/jules/accessibility-checklist.md`

## Process
1. Identify the target page or component paths.
2. Confirm relative CSS/JS paths are correct for each depth.
3. Check landmarks, one H1, heading order, labels, link text, alt text, and focus states.
4. Check keyboard support for menus, buttons, forms, and accordions.
5. Verify visible safety disclaimers remain present where sensitive workflows appear.
6. Return a pass/fail report with exact files and recommended fixes.

## Guardrails
- Do not redesign the page unless required for accessibility.
- Preserve the neobrutalist/futurist fintech style where possible.
- Do not introduce fake proof, fake reviews, guarantees, unsupported claims, or compliance claims.
