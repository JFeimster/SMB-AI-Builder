# Copilot PR Rules

## 1. Branching & Commits
- Use descriptive branch names (e.g., `feature/seo-invoice-audit`, `bugfix/mobile-nav-contrast`).
- Commit messages should be concise, git-agnostic, and follow standard conventions (short subject line, blank line, detailed body if necessary).

## 2. Pull Request Template
- You MUST use the provided `.github/pull_request_template.md`.
- Fill out all applicable checkboxes. If a checkbox does not apply, mark it with `N/A` or check it off and add a note explaining why.

## 3. Pre-Submit Checks
Before opening or submitting a PR, verify:
- **No secrets:** Ensure no `.env` files, API keys, or sensitive data are included in the diff.
- **Link Integrity:** Verify the primary CTA URL is exactly `https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`.
- **Content Policy:** Ensure no fake proof, fake testimonials, or prohibited buzzwords are included in the changed files.
- **Vercel Posture:** Confirm that the changes do not override the safe/manual deployment posture unless explicitly required. Vercel git auto-deploy should remain disabled.

## 4. Review Process
- Request reviews from relevant team members.
- Address PR comments promptly. When making changes based on feedback, ensure the changes still adhere to the rules in `tools/copilot/`.
