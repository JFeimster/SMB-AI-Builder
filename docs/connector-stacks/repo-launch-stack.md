# Repo Launch Stack

## What This Stack Is For
This stack provides a structured, safe workflow for building, testing, and deploying new codebase projects or features using AI coding assistants and modern hosting infrastructure.

## Minimum Stack
- **GitHub**: For version control, code storage, and collaborative review.
- **Vercel**: For automated preview deployments and production hosting.
- **Codex/Jules (or similar AI Agent)**: For writing code, generating boilerplate, and implementing features.
- **GPT**: For high-level architectural planning, brainstorming, and writing documentation.

## Expanded Stack
*(Add these only after the minimum stack is working reliably)*
- **GitHub Actions**: For automated testing and CI/CD pipelines before Vercel deployment.
- **Sentry**: For error tracking and performance monitoring in production.
- **Figma**: For UI/UX design mockups before coding begins.

## Data Flow
1. The project architecture and requirements are planned using **GPT**.
2. An initial repository is created in **GitHub**.
3. **Codex/Jules** is used to scaffold the project, write code, and submit Pull Requests.
4. **Vercel** automatically builds the PR and generates a preview URL.
5. The human reviews the code and tests the preview URL.
6. Once approved, the code is merged into the main branch on **GitHub**, triggering a production deployment to **Vercel**.

## What AI Can Draft
- Initial boilerplate code and scaffolding.
- Feature implementations and bug fixes.
- Unit tests and integration tests.
- `README.md` and inline code documentation.

## What AI Should Not Decide
- Approving and merging its own Pull Requests without human review.
- Managing production secrets, API keys, or database credentials.
- Pushing directly to the `main` branch.

## Risk Level
**Medium to High**. Deploying untested code can break production environments or expose security vulnerabilities. Strict reliance on branching, PRs, and human code review is mandatory.

## Setup Checklist
- [ ] Create a new GitHub repository with a clear `README.md`.
- [ ] Connect the GitHub repository to a new Vercel project.
- [ ] Ensure branch protection rules are enabled on the `main` branch in GitHub.
- [ ] Configure environment variables in Vercel (do not commit them to GitHub).
- [ ] Set up the AI coding assistant (e.g., provide it with project context or `AGENTS.md`).

## Starter GPT Prompt
```text
I am starting a new web project using Next.js and Tailwind CSS.
The goal of the app is to [describe app function].
Please act as a senior software architect and provide a step-by-step project setup plan.
Include recommendations for folder structure, state management, and any crucial initial dependencies I should install.
```

## Success Criteria
- Boilerplate setup time is reduced from hours to minutes.
- All code changes are trackable via Git and testable via Vercel previews.
- Deployments to production are reliable and easily reversible if issues occur.

## Related Docs
- [Connectors Directory](../connectors/README.md)
- [Workflow Connector Maps](../workflow-connector-maps/README.md)
- [Tools: Connectors](../../pages/tools/connectors.html)
