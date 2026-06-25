# File Generation Scripts

## Purpose
Provides safe, structured methods for generating folder hierarchies and boilerplate files within the repository using PowerShell, ensuring consistency and adherence to project conventions.

## When to use this skill
- When scaffolding new sections of the project (e.g., new tool ops layers, page clusters).
- When generating placeholder files required by the architecture.
- For bulk creation of standard configuration files.

## When not to use this skill
- For deleting or modifying existing files (use targeted update skills instead).
- When a more specific tool (like an npm scaffold script) is already provided for the exact task.

## Inputs PowerShell should collect
- Target base directory.
- List of folders to create.
- List of files to create and their initial content templates.
- Flag indicating whether to perform a `-WhatIf` (dry-run).

## Files and folders this skill may touch
- Any specified target directory within the repository (Create only).

## Source-of-truth files to read first
- `jules.json` (for project structure rules)
- `tools/jules/file-map.json` (if applicable)
- `README.md`

## Process
1. Validate input paths to ensure they reside within the repository boundaries.
2. Check for the existence of target folders/files.
3. If a dry-run flag is set, output what *would* be created without making changes.
4. If not a dry-run, use `New-Item -ItemType Directory` for folders and `New-Item -ItemType File` for files.
5. Populate files with baseline boilerplate content if provided.
6. Log all created paths.

## Output requirements
- A detailed log of all created directories and files.
- Clear indication if the operation was a dry-run.
- Warnings if target files already exist (operation should skip to avoid overwriting).

## Safety rules
- **Never overwrite existing files.** Always check `Test-Path` before creation.
- Default to dry-run mode (`-WhatIf` equivalent logic) if intent is ambiguous.
- Ensure all created paths are strictly relative to the repository root.

## QA checklist
- [ ] Are inputs validated against repository boundaries?
- [ ] Does it check for existing files before creating?
- [ ] Is dry-run functionality implemented and documented?

## Common mistakes to avoid
- Hardcoding absolute paths instead of deriving them dynamically from the repository root.
- Forgetting to handle exceptions if a file creation fails due to permissions.

## Final response format
A summarized list of created files and directories, or a dry-run preview plan.
