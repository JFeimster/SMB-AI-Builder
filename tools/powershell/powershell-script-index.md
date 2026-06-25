# PowerShell Script Index

This document outlines the purpose of each script included in the PowerShell tool-ops layer.

## Validation Checks
*   **`check-links.ps1`**: Checks HTML files for obvious broken relative links and missing target files. Outputs pass/warn/fail messages.
*   **`check-metadata.ps1`**: Checks HTML files for required tags such as title, meta description, viewport, H1, Open Graph title, and Open Graph description.
*   **`check-cta-links.ps1`**: Verifies that the primary GPT CTA URL, Notion URL, and GitHub URL appear in key pages.
*   **`check-placeholders.ps1`**: Scans the codebase for placeholder strings (e.g., YOURDOMAIN.com, example.com, localhost, TODO, FIXME) and outputs the file paths and line numbers.
*   **`check-sitemap-paths.ps1`**: Validates that `sitemap.xml` exists and includes expected major page folders (e.g., pages/site/, pages/seo/, embeds/).
*   **`check-embed-files.ps1`**: Checks that all required embed files exist and ensures the 940px / 1200px constraints are defined in CSS or the README.
*   **`check-file-structure.ps1`**: Verifies the presence of expected core directories (e.g., pages/site/, pages/seo/, tools/).

## Build Operations
*   **`build-static-zip.ps1`**: Creates a distributable zip archive of the repository excluding build artifacts (.git, node_modules, etc.), secrets, and OS junk files. Respects `-WhatIf`, `-Force`, and `-OutDir` parameters for safe execution.

## Examples
*   **`run-all-checks.ps1`**: A non-destructive script that sequentially runs all the validation scripts listed above.