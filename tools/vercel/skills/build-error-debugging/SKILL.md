# Build Error Debugging

## Purpose
Systematically diagnose and resolve common Vercel build failures related to dependencies, TypeScript strictness, routing, and environment variables.

## When to use this skill
- When a Vercel deployment fails during the Build Phase.
- When local `npm run build` fails before a commit.

## When not to use this skill
- When the build succeeds but runtime errors occur (use runtime logging/debugging instead).
- When the repository is a pure static site without a build step (unless the error is due to missing static entry points).

## Inputs Jules should collect
- The exact build error log from Vercel or the local terminal.
- Recent changes made to dependencies or configuration.

## Files and folders this skill may touch
- `package.json` / `package-lock.json`
- `tsconfig.json`
- `next.config.ts`
- Source files causing errors

## Source-of-truth files to read first
- `JULES.md`
- Build output logs

## Process
1. **NPM Install/Build Checks:**
   - Verify that all required dependencies are in `package.json`.
   - Check if `devDependencies` are inappropriately required for the production build.
2. **TypeScript Errors:**
   - Review the build logs for `tsc` errors.
   - Fix explicit typing issues, missing interfaces, or strict null checks. Do not bypass `tsconfig.json` strictness unless absolutely necessary and documented.
3. **Path Errors:**
   - Verify case sensitivity for file paths (Vercel uses a case-sensitive Linux file system; macOS/Windows might not catch this locally).
   - Check relative import paths in components and static asset references.
4. **Missing Env Values:**
   - If the build fails because an environment variable is undefined at build time, ensure the Vercel project settings have the variable configured, or that the code safely handles undefined values during static generation.
5. **Static Asset Failures:**
   - Ensure the root directory configured in Vercel matches where the actual `index.html` or build output is located.

## Output requirements
- A clear diagnosis of the build error.
- A tested fix applied to the codebase.

## Security and privacy rules
- Do not commit real environment variables to "fix" a missing env build error. Instruct the user to add them in the Vercel dashboard.
- Do not downgrade security packages to bypass build warnings.

## QA checklist
- [ ] Has the specific error from the log been identified?
- [ ] Have file paths been checked for case sensitivity?
- [ ] Are TypeScript errors resolved without disabling strict mode?
- [ ] Does `npm run build` pass locally after the fix?

## Common mistakes to avoid
- Adding an API key to the repository to fix a build error caused by a missing environment variable.
- Assuming local build success guarantees Vercel build success without checking case sensitivity.
- Ignoring warnings that eventually lead to silent build failures.

## Final response format
Provide a diagnosis of the original error, detail the exact code changes made to resolve it, and confirm that the local build process now completes successfully.
