---
name: schema-jsonld-builder
description: Use when creating or validating JSON-LD schema for Article, FAQPage, BreadcrumbList, SoftwareApplication, WebSite, or other SEO support files.
---

# Schema JSON-LD Builder

## Purpose
Create and validate schema files and inline JSON-LD for SEO pages.

## Use this skill when
- Adding Article, FAQPage, BreadcrumbList, SoftwareApplication, WebSite, or related JSON-LD.
- Creating files under `pages/seo-support/`.
- Checking schema against visible page content.

## Source-of-truth files to read first
- `tools/jules/JULES.md`
- `tools/jules/jules.json`
- `tools/jules/seo-rules.md`
- `tools/jules/qa-checklist.md`

## Process
1. Match schema to the actual visible page content.
2. Use valid JSON.
3. Keep URLs on the deployed origin unless a custom domain is verified.
4. Avoid fake review, rating, aggregateRating, testimonial, or organization claims.
5. Confirm FAQ schema matches page FAQ copy.

## Guardrails
- Do not add fake ratings or review schema.
- Do not invent author credentials, awards, integrations, or proof.
