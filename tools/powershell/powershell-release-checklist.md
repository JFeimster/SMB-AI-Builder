# PowerShell Release Checklist

Before preparing a release, run through the following checklist using the PowerShell tool-ops layer to ensure project integrity.

## Pre-Release QA Steps

- [ ] Run `tools/powershell/examples/run-all-checks.ps1` to execute all read-only validation scripts.
- [ ] Review the output and verify that all link checks (`check-links.ps1`) pass.
- [ ] Verify that metadata checks (`check-metadata.ps1`) pass and required SEO tags are present.
- [ ] Ensure that key CTA links (`check-cta-links.ps1`) are present and accurate.
- [ ] Address any critical placeholders (`check-placeholders.ps1`) such as `TODO`, `FIXME`, or `example.com`.
- [ ] Confirm that `sitemap.xml` (`check-sitemap-paths.ps1`) is correctly formatted and includes all expected paths.
- [ ] Ensure all required embed files (`check-embed-files.ps1`) are intact.
- [ ] Validate the directory structure (`check-file-structure.ps1`) is correct.
- [ ] Run a dry run of the zip build: `tools/powershell/scripts/build-static-zip.ps1 -WhatIf`.
- [ ] Once all checks pass and the dry run looks good, run `tools/powershell/scripts/build-static-zip.ps1 -OutDir "dist" -Force` to generate the release artifact.
- [ ] Verify the generated zip does not contain secrets, `.git`, `node_modules`, or environment files.