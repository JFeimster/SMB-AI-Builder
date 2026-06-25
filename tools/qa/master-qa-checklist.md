# Master QA Checklist

This checklist coordinates the execution of specific QA checks across static site pages, SEO pages, embeds, and Next.js pages for the SMB AI Workflow & Agent Builder project.

## 1. Preparation
- [ ] Identify the scope of the QA (e.g., full site, specific new pages, embed update).
- [ ] Create a new copy of the `qa-report-template.md`.

## 2. Functional & Link QA
- [ ] Complete `link-checklist.md`.
  - *Verifies GPT URLs, internal links, relative paths, etc.*
- [ ] Complete `performance-checklist.md`.
  - *Ensures static performance metrics are acceptable.*

## 3. Content & Claims QA
- [ ] Complete `content-claims-checklist.md`.
  - *Strict checks for no fake proof, unsupported claims, and presence of sensitive workflow disclaimers. Ensure no generic AI copy.*

## 4. SEO & Metadata QA
- [ ] Complete `metadata-checklist.md`.
  - *Checks titles, meta descriptions, canonicals, OG tags, and H1s.*
- [ ] Complete `seo-checklist.md`.
  - *Ensures metadata uniqueness and overall SEO health.*

## 5. UI, UX, & Accessibility QA
- [ ] Complete `mobile-layout-checklist.md`.
  - *Verifies usability on smaller screens.*
- [ ] Complete `accessibility-checklist.md`.
  - *Checks semantic HTML, focus states, contrast, keyboard navigation, etc.*

## 6. Context-Specific QA
- [ ] **If updating/creating embeds:** Complete `embed-checklist.md`.
  - *Verifies size constraints (940x1200), compact mode, attribution, and disclaimers.*
- [ ] **If testing a new release:** Complete `release-qa.md`.
- [ ] **If checking for regressions:** Complete `regression-qa.md`.

## 7. Reporting
- [ ] Compile findings into the QA Report Template.
- [ ] File issues for any failures and assign them for remediation.
- [ ] Do not approve release if critical checks (especially `content-claims-checklist.md`) fail.
