# Vercel Workflow Playbook

## Connector
Vercel

## Best For
Frontend deployments, serverless functions (like GPT Actions), static site hosting, and preview environments.

## Do Not Use For
Long-running background processing, heavy relational database hosting (use dedicated DBs), or processing highly secure financial transactions without proper backend architecture.

## Required Inputs
- Project ID / Name
- Deployment URLs
- Environment Variables (keys, not values)
- Build Commands

## Common SMB Workflows
1. Triggering deployments from GitHub merges.
2. Managing environment variables for different staging setups.
3. Deploying no-auth Next.js API routes for GPT Actions.
4. Hosting static marketing sites or demo pages.
5. Monitoring deployment statuses and build logs.

## Automation Opportunities
- Auto-deploying preview links for client review.
- Triggering rebuilds when headless CMS content is updated.
- Rotating safe API keys via environment variable updates.

## What Should Stay Human
- Approving production deployments for critical applications.
- Managing production secrets and sensitive environment variables.
- Diagnosing complex build failures.
- Modifying core domain routing or DNS settings.

## Privacy / Security Risks
Automating environment variable updates carries immense risk if a script accidentally injects a secret into public code or overwrites a production key with a staging key. Deploying broken code to production will cause immediate downtime.

## Risk Level
- High (for production deployments and env vars)
- Medium (for preview deployments)

## Starter Prompt
```text
I need to map out the deployment workflow for our new GPT Action API. The code lives in GitHub. I want to deploy to Vercel, but only trigger a production build when a PR is merged to the 'main' branch, and I need to ensure the OpenAPI schema is available at a public route. Help me design this pipeline.
```

## Example Output
```json
{
  "workflow_step": "Trigger Production Build",
  "connector": "Vercel",
  "action": "Deploy",
  "parameters": {
    "project_id": "prj_abc123",
    "target": "production",
    "git_branch": "main"
  }
}
```

## Related Pages
- [../../pages/tools/connectors.html](../../pages/tools/connectors.html)
- [../../pages/tools/connector-risk-map.html](../../pages/tools/connector-risk-map.html)
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
