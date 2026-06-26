# Skill: Repo Structure Auditor

## Purpose
Audits a GitHub repository structure for best practices, consistency, and organization.

## Use When
When reviewing a new repository, planning a refactor, or ensuring adherence to project standards.

## Inputs Needed
- Current repository file tree or description
- Project type (e.g., Next.js, static site, library)
- Organizational goals

## Outputs
- A critique of the current structure
- A proposed optimized directory tree
- Rationale for the changes

## Procedure
1. Analyze the provided directory structure against the project type's standard conventions.
2. Identify misplaced files, redundant directories, or confusing naming schemes.
3. Draft a proposed new structure.
4. Provide step-by-step guidance on how to migrate safely.
5. Apply safety checks.

## Safety / Human Review
- Do not execute destructive moves without explicit instructions.
- Ensure structural changes don't break existing deployment pipelines (e.g., Vercel) without updating configs.

## Quality Checklist
- [ ] Proposed structure follows conventions?
- [ ] Migration steps are clear?
- [ ] Deployment implications are addressed?

## Example Prompt
```
Here is the current folder structure of my Next.js project. It's getting messy. Can you audit it and suggest a cleaner organization, especially for my components and utility functions?
```

## Related Tool Docs
- [GitHub Tool Docs](../../README.md)

## Related Site Pages
- [GitHub Pages](../../../../pages/tools/github)
