# Windows Repo Setup

## Purpose
Validates the local Windows environment to ensure all necessary tools, dependencies, and configurations are correctly set up to work on this repository.

## When to use this skill
- When onboarding a new developer on a Windows machine.
- Before starting a new development session to ensure dependencies are up to date.
- Troubleshooting build or runtime issues related to local environment configurations.

## When not to use this skill
- In automated CI/CD pipelines where the environment is pre-configured (unless used as a pre-flight check).
- On non-Windows platforms.

## Inputs PowerShell should collect
- Output of `node -v`
- Output of `npm -v`
- Content of `package.json` scripts section
- Output of `Get-ExecutionPolicy`

## Files and folders this skill may touch
- `package.json` (Read)
- `node_modules/` (Read/Check existence)
- `.env.example` (Read)

## Source-of-truth files to read first
- `README.md`
- `package.json`
- `JULES.md`

## Process
1. Verify Node.js is installed by checking `node -v`.
2. Verify npm is installed by checking `npm -v`.
3. Check if `node_modules` exists; if not, suggest running `npm install`.
4. Parse `package.json` to list available scripts for the user.
5. Check local paths to ensure they resolve correctly within the Windows environment.
6. Print PowerShell execution policy notes to ensure the user knows they might need to run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` if scripts fail to run.

## Output requirements
- A detailed status report of the local environment.
- A list of available npm scripts.
- Actionable warnings if Node/npm is missing or if `node_modules` is absent.

## Safety rules
- Do not automatically run `npm install` without prompting or explicit instruction, to avoid unexpected network or disk activity.
- Do not modify global PowerShell execution policies without user consent.
- Read-only operations for environment validation.

## QA checklist
- [ ] Node version checked?
- [ ] npm version checked?
- [ ] `node_modules` existence verified?
- [ ] `package.json` scripts parsed and displayed?
- [ ] Execution policy noted?

## Common mistakes to avoid
- Attempting to parse `package.json` with regex instead of `ConvertFrom-Json`.
- Ignoring potential path issues when dealing with spaces in directory names.

## Final response format
Structured text output detailing the environment checks, highlighting any missing dependencies, and listing available project commands.
