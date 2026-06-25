# QA Tool-Ops Layer

## Purpose
This directory contains a practical QA layer for the SMB AI Workflow & Agent Builder project. It provides structured checklists and procedures to ensure the quality of the project across various contexts, including:

*   **Static site pages**
*   **SEO pages**
*   **Embeds**
*   **Next.js pages**

## Priorities
The QA layer is designed to ensure the following core priorities are consistently met:

*   **CTA links work**: Essential conversion paths must remain functional.
*   **Relative paths work**: All internal routing, assets, and styling must connect correctly.
*   **Mobile layouts work**: Content must be accessible and usable on all screen sizes.
*   **Accessibility basics are covered**: Key accessibility principles (ARIA landmarks, focus states, etc.) must be adhered to.
*   **SEO metadata is unique**: Every page must have correct and non-duplicated meta tags, titles, and descriptions.
*   **No fake proof or unsupported claims**: Maintain absolute honesty. No fake reviews, testimonials, metrics, or professional claims.
*   **Sensitive workflow disclaimers exist**: Any financial, legal, or high-risk workflow must display a clear, standard disclaimer.
*   **Partner embeds meet size constraints**: Embedded iframes must stay within 940px width and 1200px height.
*   **Pages are practical and not generic AI copy**: Tone should be operator-friendly, anti-hype, and strictly avoid AI buzzwords.

## Contents
*   `master-qa-checklist.md`: The overarching checklist for a standard review.
*   `accessibility-checklist.md`: Specific checks for accessibility.
*   `link-checklist.md`: Verification for all external and internal links.
*   `metadata-checklist.md`: Verification for SEO and Open Graph metadata.
*   `mobile-layout-checklist.md`: Checks for responsive design on smaller viewports.
*   `performance-checklist.md`: Basic performance metrics for static content.
*   `seo-checklist.md`: Deep dive on SEO structures and content.
*   `embed-checklist.md`: Requirements for partner iframe implementations.
*   `content-claims-checklist.md`: Strict rule checks for truthful and compliant copy.
*   `release-qa.md`: Checklist to run prior to a new major deployment.
*   `regression-qa.md`: Checklist for verifying past fixes stay fixed.
*   `qa-report-template.md`: A standard format for reporting QA results.
