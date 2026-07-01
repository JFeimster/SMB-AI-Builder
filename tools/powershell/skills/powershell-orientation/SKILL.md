# PowerShell Orientation

## Purpose
Establishes the baseline for running PowerShell commands safely within this repository. It defines Windows shell assumptions, correct path handling practices, and emphasizes non-destructive checks.

## When to use this skill
- Before executing any other PowerShell script or command in this repository.
- When configuring a new Windows development environment for this project.
- To verify that the PowerShell environment meets the required execution policies.

## When not to use this skill
- When operating in a non-Windows environment (e.g., native Linux bash, macOS zsh), unless using PowerShell Core.

## Inputs PowerShell should collect
- Current `$PSVersionTable.PSVersion`
- Output of `Get-ExecutionPolicy`
- Verification of current working directory context (`Get-Location`)

## Files and folders this skill may touch
- None (Read-only environment checks).

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `jules.json`

## Process
1. Verify the current shell is PowerShell.
2. Check the PowerShell version to ensure compatibility with modern scripts.
3. Validate the current execution policy allows running local scripts (e.g., `RemoteSigned` or `Unrestricted`).
4. Establish the repository root as the working directory.
5. Review path handling rules: Always use `Join-Path` or ensure consistent use of directory separators to avoid cross-platform issues if scripts are shared.

## Output requirements
- A summary text output confirming the PowerShell environment is ready, displaying the version, execution policy, and current path.

## Safety rules
- Do not run any destructive commands (e.g., `Remove-Item` without `-WhatIf`).
- Never add secrets or hardcoded credentials to the terminal or scripts.
- Only perform non-destructive checks.

## QA checklist
- [ ] Is the PowerShell version documented?
- [ ] Is the execution policy verified?
- [ ] Is the current directory confirmed as the repository root?

## Common mistakes to avoid
- Assuming Linux-style path separators (`/`) will universally work in native Windows commands without proper handling.
- Running scripts with a restricted execution policy, leading to silent failures.

## Final response format
Markdown list summarizing the environment state and readiness to proceed with further PowerShell automation.
