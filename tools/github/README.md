# GitHub Tool-Ops Layer

## Purpose
Provides internal configuration, guidelines, and documentation for interacting with the GitHub API to manage repositories, pull requests, issues, and deployments.

## Best Used For
- Automating PR creation and reviews
- Managing issue lifecycle
- Triggering GitHub Actions
- Synchronizing code with external tools
- Analyzing repository metrics

## Not For
- Directly pushing code without review
- Managing organizational billing
- Handling personal access tokens (PATs) insecurely

## Common Tasks
- Generate a PR template
- Create an issue from a bug report
- Review code diffs

## Inputs Needed
- Repository name
- Branch name
- PR details
- Issue descriptions

## Outputs
- Markdown formatted PR bodies
- JSON payloads for API requests
- Status summaries

## Skills
List related skills in `tools/github/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/github/prompts/` if present.

## Risk Notes
Avoid exposing sensitive credentials. Do not bypass branch protection rules. Ensure automated actions have clear audit trails.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.
