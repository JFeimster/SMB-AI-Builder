# final-copilot-qa

## Purpose
To perform a final, comprehensive quality assurance pass over Copilot-assisted code before submission, confirming adherence to all SMB AI Builder rules.

## When to use this skill
- At the end of a significant coding session or before marking a task as complete.
- When finalizing a new feature, API route, or skill implementation.

## When not to use this skill
- For minor, isolated typo fixes.

## Inputs Copilot should collect
- The scope of the work completed during the session.
- The files created or modified.

## Files and folders this skill may touch
- Reads all modified files.

## Source-of-truth files to read first
- `README.md`
- All relevant `SKILL.md` files related to the task.

## Process
1. Review the overarching goals of the task.
2. Cross-reference the implementation against the repository goals (deterministic, no-auth, safe examples).
3. Validate that no sensitive data, fake integrations, or secrets were included.
4. Ensure documentation and schemas match the code.
5. Provide a final summary of readiness.

## Output requirements
- A clear "Pass/Fail" assessment for key project tenets.
- A summary of verified items.

## Security and safety rules
- Re-verify the absence of secrets.
- Confirm adherence to anti-hype and operator-friendly language guidelines if content was generated.

## QA checklist
- [ ] Is the code deterministic and stateless (where required)?
- [ ] Are examples clean of PII?
- [ ] Are schemas accurate?
- [ ] Are all newly created `SKILL.md` files (if applicable) correctly formatted?

## Common mistakes to avoid
- Skipping the check for PII in generated examples.
- Assuming external dependencies were validated without checking.

## Final response format
A concise QA report summarizing the validation steps and their outcomes.
