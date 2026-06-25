# Embed Release Checklist

Follow this checklist when deploying updates to the embeds package:

- [ ] Ensure all changes have been tested against the `embed-qa-checklist.md`.
- [ ] Confirm no hardcoded secrets or sensitive API keys are included in the embed HTML, JS, or CSS.
- [ ] Verify that all asset paths (e.g., CSS, JS, images) are absolute or correctly resolved for third-party hosting.
- [ ] Update `embed-changelog.md` with notes on the new release.
- [ ] Minify CSS and JS assets if applicable to reduce payload size on partner sites.
- [ ] Ensure cache-busting mechanisms (like version query strings) are updated for static assets if major changes were made.
- [ ] Do a final verification of UTM parameter generation for tracking accuracy.
