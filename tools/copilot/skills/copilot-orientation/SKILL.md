# copilot-orientation

## Purpose
This skill establishes how GitHub Copilot should orient itself within the SMB AI Workflow & Agent Builder repository, understand its structural hierarchy, and identify the definitive sources of truth before writing or suggesting code.

## When to use this skill
- Whenever starting a new session or analyzing a new complex request.
- When navigating an unfamiliar section of the codebase.
- Before suggesting architectural changes.

## When not to use this skill
- For straightforward file edits where the context is entirely contained within the active file.
- When generating simple boilerplate.

## Inputs Copilot should collect
- Current active file path.
- The user's prompt or comment intent.
- Any open tabs or referenced files in the context.

## Files and folders this skill may touch
This skill does not write files; it only reads them. It scans repository structures across `app/`, `lib/`, `docs/`, `tools/`, and configuration files at the root.

## Source-of-truth files to read first
- `README.md`
- `JULES.md`
- `jules.json`
- `jules.qa.md`
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `vercel.json`

## Process
1. Identify the user's current working directory and context.
2. Cross-reference the active task with the core project goals (SMB AI Workflow & Agent Builder).
3. Read the necessary source-of-truth files to establish constraints (e.g., no database dependencies, Vercel deployment requirements, no-auth API endpoints).
4. Analyze the specific directory being modified against the overarching architecture patterns documented in `README.md`.

## Output requirements
- Contextual understanding of repo limitations (e.g., static vs Next.js boundaries).
- Awareness of safety guidelines regarding sensitive business data.

## Security and safety rules
- Do not invent fake integrations, fake database connections, or fake production values.
- Never hardcode secrets, tokens, or private credentials in any context.
- Keep in mind that sensitive business data must remain out of the repository.

## QA checklist
- [ ] Were the root config files read?
- [ ] Does the conceptual model align with `README.md` definitions?
- [ ] Is the suggested approach adhering to the no-auth, deterministic constraints of the project?

## Common mistakes to avoid
- Suggesting full-stack database architectures when the project expects deterministic, stateless utilities.
- Ignoring Vercel deployment constraints.
- Recommending external libraries that contradict project guidelines.

## Final response format
N/A (This is an internal contextual skill, output is applied to subsequent Copilot actions).
