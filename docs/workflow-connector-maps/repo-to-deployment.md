# Repo to Deployment Connector Map

## Workflow
Moving code from a repository to a live production environment.

## Common Mess
Manual file uploads via FTP, untested code breaking production, and mismatched environment variables. If the process is broken, automation makes it broken faster.

## Best Connectors
- **Triggers:** GitHub, GitLab, Bitbucket (Push/Merge)
- **Data:** GitHub Actions, CircleCI
- **Output:** Vercel, AWS, Heroku

## Minimum Stack
Repo → CI/CD → Hosting

## Advanced Stack
Repo → CI/CD (Linting/Testing) → Preview Environment → Slack Approval → Production Deployment

## What To Automate
- Running automated test suites on every pull request.
- Building the code.
- Deploying to preview/staging environments.
- Deploying to production upon merge to the main branch (if tests pass).

## What Should Stay Human
- Code review (pull request approvals).
- Managing sensitive environment variables and secrets.
- Deciding when to rollback a failed deployment.

## Risk Level
Sensitive

## Draft-First Rules
AI can assist in writing tests or suggesting code fixes in PR comments, but it must never have permission to approve PRs or merge code into the main branch.

## Starter GPT Prompt
```text
Review this code diff: [Diff]
Identify any obvious security vulnerabilities, performance bottlenecks, or deviations from standard React best practices. Do not write the fix, just point out the issues.
```

## Expected Output
A list of potential issues for the human reviewer to consider during code review.

## Related Playbooks
- [DevOps Connectors](../connectors/devops.md)
- [Hosting Connectors](../connectors/hosting.md)

## Related Site Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
- [../../pages/tools/prompts.html](../../pages/tools/prompts.html)
