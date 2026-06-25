You are working inside the `smb-ai-builder` repo.

Create a dedicated PowerShell tool-ops layer for local repo automation.

Create these files:

tools/powershell/
├── README.md
├── powershell-usage.md
├── powershell-safety-rules.md
├── powershell-script-index.md
├── powershell-release-checklist.md
├── scripts/
│   ├── check-links.ps1
│   ├── check-metadata.ps1
│   ├── check-cta-links.ps1
│   ├── check-placeholders.ps1
│   ├── check-sitemap-paths.ps1
│   ├── check-embed-files.ps1
│   ├── check-file-structure.ps1
│   └── build-static-zip.ps1
└── examples/
    ├── run-all-checks.ps1
    └── sample-output.md

Purpose:
Create a safe PowerShell automation layer for Windows-friendly local QA of the SMB AI Builder repo.

Project:
SMB AI Workflow & Agent Builder

Important safety rules:
- Do not create destructive scripts.
- Do not delete files.
- Do not move files without explicit confirmation.
- Do not require admin privileges.
- Do not require private credentials.
- Do not read or print secrets.
- Scripts should default to read-only checks except `build-static-zip.ps1`.
- Scripts should use clear console output.
- Scripts should work from the repo root.

Script requirements:

1. tools/powershell/scripts/check-links.ps1
Check HTML files for obvious broken relative links and missing target files.
Output pass/warn/fail style messages.

2. tools/powershell/scripts/check-metadata.ps1
Check HTML files for:
- title
- meta description
- viewport
- H1
- Open Graph title
- Open Graph description

3. tools/powershell/scripts/check-cta-links.ps1
Check that primary GPT CTA URL appears in key pages.
GPT URL:
https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

Also check Notion and GitHub URLs where expected:
https://feimster.notion.site/smb-ai-builder
https://github.com/JFeimster/SMB-AI-Builder

4. tools/powershell/scripts/check-placeholders.ps1
Search for placeholder strings:
- YOURDOMAIN.com
- example.com
- localhost
- 127.0.0.1
- TODO
- FIXME
- INSERT_
- REPLACE_

Output file paths and line numbers where possible.

5. tools/powershell/scripts/check-sitemap-paths.ps1
Check that sitemap.xml exists if expected and includes major page folders:
- pages/site/
- pages/seo/
- pages/seo/comparisons/
- pages/seo/workflows/
- embeds/

6. tools/powershell/scripts/check-embed-files.ps1
Check that these files exist:
- embeds/partner-widget.html
- embeds/partner-widget.css
- embeds/partner-widget.js
- embeds/iframe.html
- embeds/iframe-compact.html
- embeds/affiliate-card.html
- embeds/embed-loader.js
- embeds/partner-config.js
- embeds/partners.json
- embeds/EMBED-README.md
- embeds/demo-partner-page.html

Also check for the 940px / 1200px constraint in CSS or README.

7. tools/powershell/scripts/check-file-structure.ps1
Check expected folders:
- pages/site/
- pages/seo/
- pages/seo/comparisons/
- pages/seo/workflows/
- pages/seo-support/
- embeds/
- tools/

8. tools/powershell/scripts/build-static-zip.ps1
Create a zip of the repo excluding:
- .git
- node_modules
- .next
- dist
- out
- .vercel
- environment files
- OS junk files

Do not include secrets.
Output zip to:
dist/smb-ai-builder-static.zip

Documentation requirements:

1. README.md
Explain the PowerShell layer and how to run scripts.

2. powershell-usage.md
Include example commands:
- Run one check
- Run all checks
- Build zip

3. powershell-safety-rules.md
Document safe script rules.

4. powershell-script-index.md
Describe every script.

5. powershell-release-checklist.md
Create a pre-release checklist.

6. examples/run-all-checks.ps1
Create a non-destructive script that runs all check scripts in sequence.

7. examples/sample-output.md
Show example output format.

Final QA:
- Confirm all files exist.
- Confirm scripts are non-destructive.
- Confirm scripts do not require admin privileges.
- Confirm scripts do not require external modules unless documented.
- Confirm no secrets or credentials are included.
