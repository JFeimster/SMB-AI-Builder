# Sample Output

```
Running All Checks...

----------------------------------------
[1/7] Running check-file-structure.ps1
----------------------------------------
[PASS] Found directory: pages/site/
[PASS] Found directory: pages/seo/
[PASS] Found directory: pages/seo/comparisons/
[PASS] Found directory: pages/seo/workflows/
[PASS] Found directory: pages/seo-support/
[PASS] Found directory: embeds/
[PASS] Found directory: tools/

----------------------------------------
[2/7] Running check-embed-files.ps1
----------------------------------------
[PASS] Found file: embeds/partner-widget.html
[PASS] Found file: embeds/partner-widget.css
[PASS] Constraint check passed: 940px / 1200px found in embeds/partner-widget.css
...

----------------------------------------
[3/7] Running check-sitemap-paths.ps1
----------------------------------------
[PASS] Found sitemap.xml
[PASS] Found path in sitemap: pages/site/
[PASS] Found path in sitemap: pages/seo/
...

----------------------------------------
[4/7] Running check-placeholders.ps1
----------------------------------------
[WARN] Found 'TODO' in app/page.tsx:12
[WARN] Found 'example.com' in pages/site/contact.html:45
...

----------------------------------------
[5/7] Running check-cta-links.ps1
----------------------------------------
[PASS] Found primary GPT CTA URL in pages/site/index.html
[PASS] Found Notion URL in pages/site/about.html
...

----------------------------------------
[6/7] Running check-metadata.ps1
----------------------------------------
[PASS] Valid metadata for pages/site/index.html
[WARN] Missing Open Graph description in pages/site/contact.html
...

----------------------------------------
[7/7] Running check-links.ps1
----------------------------------------
[PASS] All relative links resolved in pages/site/index.html
[FAIL] Broken link in pages/site/about.html -> pages/site/missing.html
...

========================================
Checks Completed. Please review the output above.
```