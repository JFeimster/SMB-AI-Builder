# Build and Test Runner

## Purpose
Executes npm build and test scripts safely within the PowerShell environment, capturing and summarizing the output for review.

## When to use this skill
- Before creating a pull request or submitting code changes.
- To verify that recent code changes have not broken the build or tests.

## When not to use this skill
- If the repository does not use `npm` or `package.json` for build/test execution.
- If dependencies (`node_modules`) are not installed.

## Inputs PowerShell should collect
- The specific npm script to run (e.g., `build`, `test`, `lint`).

## Files and folders this skill may touch
- `package.json` (Read)
- Execution of scripts may modify `dist/`, `.next/`, or coverage directories depending on the script.

## Source-of-truth files to read first
- `package.json`

## Process
1. Verify `package.json` exists and the requested script is defined.
2. Verify `node_modules` exists.
3. Execute the script using `npm run <script>`.
4. Capture standard output and standard error.
5. Analyze the exit code to determine success or failure.

## Output requirements
- A summary of the script execution (Success/Failure).
- The captured output, truncated or filtered if excessively long, focusing on errors if the run failed.

## Safety rules
- Do not run `npm install` automatically as part of this runner unless specifically requested, as it alters the environment.
- Only run standard scripts defined in `package.json`.

## QA checklist
- [ ] Validates script existence before running?
- [ ] Captures exit code correctly?
- [ ] Summarizes output for easy reading?

## Common mistakes to avoid
- Failing to capture standard error streams in PowerShell.
- Running long-running processes (like dev servers) without a timeout or background job management, causing the session to hang.

## Final response format
A concise status report of the run, followed by relevant logs or error details.
