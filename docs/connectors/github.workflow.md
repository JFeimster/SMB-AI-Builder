# GitHub Workflow Playbook

## Connector
GitHub

## Best For
Code management, issue tracking, CI/CD triggering, documentation versioning, and technical project management.

## Do Not Use For
Storing non-technical customer data, managing accounting records, or replacing a general-purpose CRM.

## Required Inputs
- Repository Name
- Branch Name
- File Paths/Contents (for commits)
- Issue/PR Titles and Bodies
- Commit Messages

## Common SMB Workflows
1. Creating standard issue templates for bug reports.
2. Automating documentation updates from external wikis.
3. Triggering deployments on specific tag releases.
4. Triaging and assigning new issues to developers.
5. Syncing GitHub issues with external project management tools.

## Automation Opportunities
- Auto-labeling issues based on keywords.
- Generating release notes from merged PRs.
- Creating boilerplate files for new projects.
- Checking code formatting or linting automatically.

## What Should Stay Human
- Merging PRs to the main branch.
- Approving major architectural changes.
- Handling security vulnerability reports.
- Resolving complex merge conflicts.

## Privacy / Security Risks
Automated commits with poor credentials can leak secrets. Misconfigured automations can overwrite critical code, delete branches, or expose private repositories to public access.

## Risk Level
- High (for commits and merges)
- Medium (for issue tracking)

## Starter Prompt
```text
I want to automate my release notes. When a milestone is closed in GitHub, I want a workflow to gather all the merged PR titles, format them into a markdown summary, and create a new draft release in the repository. Help me map out this process.
```

## Example Output
```json
{
  "workflow_step": "Draft Release Notes",
  "connector": "GitHub",
  "action": "Create Release",
  "parameters": {
    "repository": "AcmeCorp/webapp",
    "tag_name": "v1.2.0",
    "name": "Release v1.2.0",
    "body": "## Changes\n- Fixed login bug\n- Added new dashboard",
    "draft": true
  }
}
```

## Related Pages
- [../../pages/tools/integration-map.html](../../pages/tools/integration-map.html)
- [../../pages/directories/workflow-library.html](../../pages/directories/workflow-library.html)
