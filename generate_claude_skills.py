import os

skills = {
    "claude-orientation": {
        "title": "Claude Orientation",
        "purpose": "Explain how Claude should read repository context before writing any content or code.",
        "when_to_use": "Use this skill at the beginning of any new task to ensure full alignment with project rules and existing context.",
        "when_not_to_use": "Do not use this if the task requires immediate output without needing repository context (which is rare).",
        "inputs": "- The specific task or user request.\n- Any provided constraints or constraints from previous turns.",
        "files_touched": "- None (Read-only skill).",
        "source_of_truth": "- `JULES.md`\n- `jules.json`\n- `tools/jules/jules-copy-rules.md`\n- `tools/jules/jules-seo-rules.md`\n- `README.md`",
        "process": "1. Identify the requested task.\n2. Locate and read the relevant source-of-truth files.\n3. Analyze the constraints, voice, and rules applicable to the task.\n4. Formulate an execution plan based on the gathered context.",
        "output_requirements": "- A clear acknowledgment of the rules read.\n- A brief summary of constraints applying to the task.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nDo not invent fake proof, fake customer stories, fake ratings, fake testimonials, fake revenue claims, fake partners, fake guarantees, or fake compliance claims.",
        "qa_checklist": "- Did you read `JULES.md`?\n- Did you read `jules.json`?\n- Are you aware of the forbidden claims and safety rules?",
        "common_mistakes": "- Skipping context reading and assuming standard AI answers.\n- Ignoring the neobrutalist, anti-hype tone constraints.",
        "final_response_format": "A short markdown confirmation listing the rules absorbed and readiness to proceed."
    },
    "longform-planning": {
        "title": "Longform Planning",
        "purpose": "Create strategy docs, implementation plans, task breakdowns, and phased roadmaps.",
        "when_to_use": "Use when a user requests a comprehensive plan, roadmap, or task breakdown for a workflow or automation project.",
        "when_not_to_use": "Do not use for generating final code or short copy snippets.",
        "inputs": "- User's business objective.\n- Current workflow state.\n- Target automation state.",
        "files_touched": "- `docs/knowledge-files/` (for creating markdown playbooks or plans).",
        "source_of_truth": "- `README.md`\n- `tools/jules/jules-copy-rules.md`",
        "process": "1. Analyze the objective.\n2. Break the objective into logical phases (e.g., Audit, Clean Up, Pilot, Rollout).\n3. Detail specific, actionable tasks for each phase.\n4. Apply safety and risk assessments to sensitive steps.",
        "output_requirements": "- Structured markdown with clear headings.\n- Phased timelines or logical sequences.\n- Direct, actionable steps (no fluff).",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nNever guarantee automation success or specific ROI.",
        "qa_checklist": "- Is the plan practical and operator-friendly?\n- Are safety boundaries clearly marked for sensitive steps?\n- Is the tone anti-hype?",
        "common_mistakes": "- Recommending full automation for broken workflows instead of a cleanup phase first.\n- Using buzzwords like 'revolutionize' or 'seamless'.",
        "final_response_format": "A markdown document containing the strategy, phased roadmap, and task breakdown."
    },
    "page-copywriting": {
        "title": "Page Copywriting",
        "purpose": "Write product/site page copy with CTA clarity and anti-hype tone.",
        "when_to_use": "Use when creating new landing pages, site pages, or product descriptions.",
        "when_not_to_use": "Do not use for technical documentation or internal SOPs.",
        "inputs": "- Target audience for the page.\n- Core value proposition.\n- Primary CTA.",
        "files_touched": "- `pages/site/`\n- `pages/seo/`",
        "source_of_truth": "- `tools/jules/jules-copy-rules.md`\n- `tools/jules/jules-seo-rules.md`\n- `jules.json`",
        "process": "1. Determine the page structure (Headline, Value Prop, Details, CTA).\n2. Draft copy using the approved direct, anti-hype voice.\n3. Ensure CTA is prominent and uses approved language (e.g., 'Audit My First Workflow').\n4. Incorporate safety disclaimers if sensitive workflows are mentioned.",
        "output_requirements": "- Semantic HTML or clean Markdown.\n- One H1 per page.\n- Clear, actionable CTA.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nDo not invent fake testimonials, fake reviews, or fake metrics.",
        "qa_checklist": "- Is there exactly one H1?\n- Is the tone direct and free of hype?\n- Is the CTA link correct (`https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`)?",
        "common_mistakes": "- Using banned words like 'unlock your potential'.\n- Burying the CTA.\n- Inventing social proof.",
        "final_response_format": "HTML or Markdown file content ready to be saved."
    },
    "seo-brief-writing": {
        "title": "SEO Brief Writing",
        "purpose": "Create SEO briefs with keyword intent, H1/H2s, FAQs, internal links, and CTA.",
        "when_to_use": "Use when planning new SEO pages or content clusters.",
        "when_not_to_use": "Do not use for writing the actual final page copy; this is just the brief.",
        "inputs": "- Target keyword or topic.\n- Audience intent.",
        "files_touched": "- `pages/seo-support/`\n- `tools/seo/` (if applicable)",
        "source_of_truth": "- `tools/jules/jules-seo-rules.md`\n- `jules.json`",
        "process": "1. Identify the primary search intent.\n2. Outline the H1 and descriptive H2s.\n3. Draft 4-6 practical FAQs.\n4. Define the internal linking strategy and the primary CTA placement.",
        "output_requirements": "- A structured brief with Title, Meta Description, H1, H2s, and FAQs.\n- Title under 60 chars, Meta Description 120-155 chars.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nDo not plan for fake review schemas or deceptive keyword stuffing.",
        "qa_checklist": "- Are the title and meta description within character limits?\n- Are the FAQs practical and realistic?\n- Is the primary CTA included?",
        "common_mistakes": "- Recommending thin, keyword-stuffed content.\n- Suggesting fake aggregate rating schema.",
        "final_response_format": "A markdown document containing the complete SEO brief."
    },
    "knowledge-file-writing": {
        "title": "Knowledge File Writing",
        "purpose": "Create markdown playbooks, templates, SOPs, scorecards, and guides.",
        "when_to_use": "Use when generating reusable assets, reference materials, or standardized processes.",
        "when_not_to_use": "Do not use for marketing copy or SEO landing pages.",
        "inputs": "- The specific process or topic to document.\n- Required format (SOP, scorecard, template).",
        "files_touched": "- `docs/knowledge-files/`",
        "source_of_truth": "- `README.md`\n- `JULES.md`",
        "process": "1. Define the structure based on the requested format.\n2. Write clear, step-by-step instructions or structured data.\n3. Ensure operator-friendly language and remove any unnecessary fluff.\n4. Include disclaimers for sensitive processes.",
        "output_requirements": "- Clean, well-structured Markdown or JSON.\n- Actionable, easy-to-read formatting (checklists, tables).",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nDo not invent fake compliance standards.",
        "qa_checklist": "- Is the file strictly informative and practical?\n- Are safety boundaries clear for high-risk processes?",
        "common_mistakes": "- Writing overly academic or verbose documentation.\n- Omitting the human-in-the-loop requirement for sensitive workflows.",
        "final_response_format": "Markdown or JSON file content."
    },
    "prompt-engineering": {
        "title": "Prompt Engineering",
        "purpose": "Create single-block prompts for Jules, Codex, Cursor, Copilot, Claude, Vercel, SEO, and embeds.",
        "when_to_use": "Use when creating or updating prompt libraries or generating specific instructions for other AI agents.",
        "when_not_to_use": "Do not use for general content writing or user-facing copy.",
        "inputs": "- The target agent/tool.\n- The specific task the prompt must accomplish.",
        "files_touched": "- `prompts/jules/`\n- `docs/knowledge-files/`",
        "source_of_truth": "- `JULES.md`\n- `jules.json`",
        "process": "1. Identify the target tool's strengths and limitations.\n2. Draft a clear, single-block prompt with explicit constraints and goals.\n3. Incorporate the required voice, tone, and safety rules into the prompt instructions.",
        "output_requirements": "- A well-structured, precise prompt block.\n- Clear input and output expectations within the prompt.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nThe prompt must instruct the agent to avoid fake claims.",
        "qa_checklist": "- Is the prompt clear and unambiguous?\n- Does it enforce the anti-hype and safety rules?",
        "common_mistakes": "- Writing vague or overly complex prompts.\n- Forgetting to include the safety disclaimer requirement in the prompt.",
        "final_response_format": "A markdown file or block containing the prompt text."
    },
    "agent-instructions-writing": {
        "title": "Agent Instructions Writing",
        "purpose": "Write GPT/agent instructions, guardrails, output formats, and test prompts.",
        "when_to_use": "Use when defining the behavior and rules for a new custom GPT or AI agent.",
        "when_not_to_use": "Do not use for standard operating procedures intended only for humans.",
        "inputs": "- The agent's purpose.\n- Required guardrails and safety constraints.\n- Desired output formats.",
        "files_touched": "- `docs/knowledge-files/`",
        "source_of_truth": "- `README.md`\n- `JULES.md`",
        "process": "1. Define the agent's core persona and goal.\n2. List strict guardrails (what the agent must never do).\n3. Define the step-by-step process the agent should follow.\n4. Provide examples of required output formats.",
        "output_requirements": "- Comprehensive system prompt or instructions document.\n- Clear, testable guardrails.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nInstructions must explicitly forbid the agent from generating fake proof or providing certified professional advice.",
        "qa_checklist": "- Are the guardrails comprehensive?\n- Is the sensitive workflow disclaimer included in the agent's rules?",
        "common_mistakes": "- Allowing the agent too much creative freedom.\n- Failing to specify fallback behaviors when the agent encounters out-of-scope requests.",
        "final_response_format": "A markdown document containing the complete agent instructions."
    },
    "safety-review": {
        "title": "Safety Review",
        "purpose": "Review content or plans for risky claims, missing disclaimers, professional advice issues, and fake proof.",
        "when_to_use": "Use as a QA step before finalizing content, workflows, or agent instructions that touch sensitive topics.",
        "when_not_to_use": "Do not use as a replacement for actual legal or compliance review by a human professional.",
        "inputs": "- The draft content, plan, or blueprint.\n- The context of the workflow (e.g., is it handling money or personal data?).",
        "files_touched": "- Any file being reviewed.",
        "source_of_truth": "- `JULES.md`\n- `tools/jules/jules-copy-rules.md`",
        "process": "1. Scan the text for claims regarding ROI, compliance, or guaranteed success.\n2. Check for the presence of the exact sensitive workflow disclaimer if applicable.\n3. Verify that no fake testimonials, reviews, or metrics are present.\n4. Suggest specific revisions to mitigate risk.",
        "output_requirements": "- A structured review report.\n- Specific text snippets that need changing and suggested safe alternatives.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nFlag any content that violates the forbidden claims rule.",
        "qa_checklist": "- Did you check for fake proof?\n- Did you verify the exact wording of the safety disclaimer?",
        "common_mistakes": "- Missing subtle implications of professional advice.\n- Approving 'fully autonomous' patterns for high-risk workflows.",
        "final_response_format": "A markdown report detailing safety issues and required fixes."
    },
    "research-synthesis": {
        "title": "Research Synthesis",
        "purpose": "Summarize user-provided or repo-provided material without inventing facts.",
        "when_to_use": "Use when analyzing multiple knowledge files, audit results, or user inputs to create a cohesive summary.",
        "when_not_to_use": "Do not use to generate novel claims or external research not provided in the inputs.",
        "inputs": "- Raw notes, audit logs, or source documents.",
        "files_touched": "- `docs/knowledge-files/` (or strictly returning output to the user).",
        "source_of_truth": "- `JULES.md`",
        "process": "1. Read all provided materials carefully.\n2. Extract key themes, data points, and actionable insights.\n3. Synthesize the findings into a structured summary (e.g., bullet points, tables).\n4. Strictly avoid adding any outside information or assumed facts.",
        "output_requirements": "- A concise, accurate summary.\n- Clear distinction between provided facts and suggested next steps.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nDo not invent fake data, partners, or proof.",
        "qa_checklist": "- Is every point directly traceable to the source material?\n- Is the tone objective and anti-hype?",
        "common_mistakes": "- Hallucinating statistics or 'best practices' not present in the source material.\n- Over-promising the results of the synthesized findings.",
        "final_response_format": "A structured markdown summary."
    },
    "comparison-guide-writing": {
        "title": "Comparison Guide Writing",
        "purpose": "Write balanced comparison content without attacking competitors.",
        "when_to_use": "Use when creating vs. pages (e.g., Make vs. Zapier, Custom vs. Off-the-shelf).",
        "when_not_to_use": "Do not use to write biased, aggressive takedowns of other platforms.",
        "inputs": "- The tools or approaches being compared.\n- The specific SMB use case.",
        "files_touched": "- `pages/seo/comparisons/`",
        "source_of_truth": "- `tools/jules/jules-seo-rules.md`\n- `tools/jules/jules-copy-rules.md`",
        "process": "1. Frame the comparison as a decision guide based on readiness and workflow type.\n2. Provide objective pros and cons for both sides.\n3. Include a 'Use this when...' and 'Audit first when...' section.\n4. Add a comparison table and the primary CTA.",
        "output_requirements": "- Balanced, operator-friendly copy.\n- Clear decision frameworks.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nDo not invent benchmarks, unsupported claims, or fake integrations.",
        "qa_checklist": "- Is the comparison fair and objective?\n- Does it position the SMB AI Builder as a planning layer beforehand?\n- Are there no attacks on competitors?",
        "common_mistakes": "- Trashing a competitor to make a point.\n- Inventing performance metrics.",
        "final_response_format": "HTML or Markdown file containing the comparison guide."
    },
    "workflow-blueprint-writing": {
        "title": "Workflow Blueprint Writing",
        "purpose": "Write audit outputs, readiness scorecards, workflow maps, automation plans, and agent blueprints.",
        "when_to_use": "Use when converting a user's raw process into a structured, executable blueprint or plan.",
        "when_not_to_use": "Do not use for general content writing or vague brainstorming.",
        "inputs": "- User's current process steps.\n- Identified pain points.\n- Desired outcome.",
        "files_touched": "- `docs/knowledge-files/` (or direct output to user).",
        "source_of_truth": "- `README.md`\n- `JULES.md`",
        "process": "1. Analyze the workflow for automation readiness.\n2. Map the 'As-Is' and 'To-Be' states.\n3. Detail the exact triggers, actions, and human-in-the-loop checkpoints.\n4. Assign a readiness score and risk classification.",
        "output_requirements": "- Highly structured markdown (tables, step-by-step lists).\n- Explicit definitions of human review steps.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nNever automate high-risk decisions without a qualified human review checkpoint.",
        "qa_checklist": "- Are the human-in-the-loop checkpoints clearly defined?\n- Is the blueprint practical and ready for a pilot?",
        "common_mistakes": "- Recommending full end-to-end automation without testing.\n- Overlooking exceptions and edge cases in the workflow map.",
        "final_response_format": "A comprehensive markdown blueprint document."
    },
    "editing-and-tightening": {
        "title": "Editing and Tightening",
        "purpose": "Convert bloated or generic copy into concise, operator-friendly copy.",
        "when_to_use": "Use when refining drafts, user inputs, or previously generated content to align with the brand voice.",
        "when_not_to_use": "Do not use to change the core factual meaning or technical accuracy of the text.",
        "inputs": "- The draft text to be edited.",
        "files_touched": "- Any file containing draft copy.",
        "source_of_truth": "- `tools/jules/jules-copy-rules.md`\n- `jules.json`",
        "process": "1. Read the text to understand the core message.\n2. Strip out banned buzzwords (e.g., 'unlock your potential', 'seamless').\n3. Shorten sentences and use active voice.\n4. Replace vague statements with direct, practical instructions.",
        "output_requirements": "- Concise, punchy text.\n- Strong alignment with the anti-hype voice.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nDo not inadvertently introduce fake claims while trying to make copy sound better.",
        "qa_checklist": "- Are all banned phrases removed?\n- Is the tone direct and no-BS?",
        "common_mistakes": "- Making the text too aggressive rather than practical.\n- Losing important nuance during the shortening process.",
        "final_response_format": "The edited text in markdown or plain text."
    },
    "final-claude-qa": {
        "title": "Final Claude QA",
        "purpose": "Check copy consistency, claims, tone, CTA, safety, and structure before final submission.",
        "when_to_use": "Use as the absolute final step before committing code, publishing pages, or delivering final output.",
        "when_not_to_use": "Do not skip this step.",
        "inputs": "- The final draft of the work.",
        "files_touched": "- None (Read and verify only).",
        "source_of_truth": "- `JULES.md`\n- `jules.json`\n- `tools/jules/jules-copy-rules.md`\n- `tools/jules/accessibility-checklist.md`",
        "process": "1. Verify the file structure and naming conventions.\n2. Check tone against `copy-rules.md` (no hype, no banned words).\n3. Verify all CTAs point to the correct URL and use approved text.\n4. Confirm the exact safety disclaimer is present if sensitive topics are involved.\n5. Verify absolutely no fake proof, metrics, or claims were included.",
        "output_requirements": "- A pass/fail report based on the project's strict rules.",
        "safety_rules": "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.\nStrict enforcement of the 'no fake claims' rule.",
        "qa_checklist": "- Are all links correct?\n- Is the tone accurate?\n- Are safety disclaimers included?\n- Is the formatting correct?",
        "common_mistakes": "- Approving work that contains 'seamless' or 'revolutionize'.\n- Missing fake testimonials added by earlier AI generations.",
        "final_response_format": "A markdown QA report indicating approval or required changes."
    }
}

template = """# {title}

## Purpose
{purpose}

## When to use this skill
{when_to_use}

## When not to use this skill
{when_not_to_use}

## Inputs Claude should collect
{inputs}

## Files and folders this skill may touch
{files_touched}

## Source-of-truth files to read first
{source_of_truth}

## Process
{process}

## Output requirements
{output_requirements}

## Safety and claims rules
{safety_rules}

## QA checklist
{qa_checklist}

## Common mistakes to avoid
{common_mistakes}

## Final response format
{final_response_format}
"""

for skill_id, content in skills.items():
    filepath = f"tools/claude/skills/{skill_id}/SKILL.md"
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w") as f:
        f.write(template.format(**content))

print("All 13 SKILL.md files generated successfully.")
