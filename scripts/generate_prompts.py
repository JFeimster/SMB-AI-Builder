import os

connectors = [
    "google-drive",
    "gmail",
    "calendar",
    "github",
    "notion",
    "airtable",
    "hubspot",
    "vercel",
    "quickbooks",
    "connector-risk"
]

def generate_markdown(connector_name):
    title_name = connector_name.replace("-", " ").title()
    content = f"# {title_name} Prompts\n\n"
    content += f"Copy and paste these prompts to plan and audit workflows involving {title_name}.\n\n"

    prompts = []

    # We need 8-12 prompts per file, representing the categories
    # 1. Workflow audit
    # 2. Minimum connector stack
    # 3. Risk classification
    # 4. Human review planning
    # 5. Data mapping
    # 6. Automation candidate selection
    # 7. Pilot plan
    # 8. QA checklist

    if connector_name == "connector-risk":
        prompts = [
            {
                "title": "Overall Workflow Risk Audit",
                "use_case": "Workflow audit",
                "prompt": "Audit this workflow and identify all the data systems involved. Provide a list of the minimum connector stack required.",
                "inputs": "Workflow description or process documentation.",
                "output": "A list of required connectors with descriptions of what data they will handle.",
                "review_note": "Ensure no unapproved connectors are suggested."
            },
            {
                "title": "Risk Classification Assessment",
                "use_case": "Risk classification",
                "prompt": "Review the following proposed data workflow. Classify the risk level (low, medium, high) based on whether it involves PII, money movement, or legal decisions.",
                "inputs": "Proposed workflow data flow.",
                "output": "Risk classification with reasoning.",
                "review_note": "A human must manually verify any workflow classified as low risk before proceeding if it touches any sensitive data."
            },
            {
                "title": "Human Review Checkpoints",
                "use_case": "Human review planning",
                "prompt": "Review this automated workflow and identify exactly where human approval or review checkpoints are absolutely required before proceeding to the next step.",
                "inputs": "Workflow steps.",
                "output": "List of human intervention points with justification.",
                "review_note": "Do not skip human reviews on any workflow dealing with money or PII."
            },
            {
                "title": "Data Mapping Analysis",
                "use_case": "Data mapping",
                "prompt": "Map this process across all its integrated platforms. Document what data moves between each system and in what direction.",
                "inputs": "Process description.",
                "output": "A data mapping table or list.",
                "review_note": "None."
            },
            {
                "title": "Automation Candidate Selection",
                "use_case": "Automation candidate selection",
                "prompt": "Look at these manual tasks and select which ones are safe automation candidates using only low-risk connectors.",
                "inputs": "List of manual tasks.",
                "output": "Filtered list of safe automation tasks.",
                "review_note": "Verify that 'low risk' definition matches your organization's compliance policy."
            },
            {
                "title": "Safe Pilot Plan Generation",
                "use_case": "Pilot plan",
                "prompt": "Create a safe automation pilot plan using only low-risk connectors for this proposed workflow. Keep the scope minimal.",
                "inputs": "Proposed workflow.",
                "output": "Step-by-step pilot plan.",
                "review_note": "Pilot plans should be reviewed by a stakeholder before implementation."
            },
            {
                "title": "Security QA Checklist",
                "use_case": "QA checklist",
                "prompt": "Generate a security and QA checklist for testing this workflow automation to ensure no sensitive data is leaked.",
                "inputs": "Automation steps and data involved.",
                "output": "A checklist of QA tasks.",
                "review_note": "Security teams should approve QA checklists for high-risk data."
            },
            {
                "title": "Minimum Connector Stack Recommendation",
                "use_case": "Minimum connector stack",
                "prompt": "Analyze this business process and recommend the absolute minimum connector stack needed to automate it efficiently, minimizing third-party risks.",
                "inputs": "Business process details.",
                "output": "List of minimal necessary connectors.",
                "review_note": "None."
            }
        ]
    else:
        # Standard prompts for specific connectors
        connector_specific = {
            "google-drive": "Drive",
            "gmail": "Gmail",
            "calendar": "Calendar",
            "github": "GitHub repo",
            "notion": "Notion",
            "airtable": "Airtable",
            "hubspot": "CRM",
            "vercel": "Vercel",
            "quickbooks": "QuickBooks"
        }

        c_ref = connector_specific.get(connector_name, title_name)

        prompts = [
            {
                "title": f"{title_name} Workflow Audit",
                "use_case": "Workflow audit",
                "prompt": f"Audit this workflow and recommend the minimum connector stack involving {title_name}.",
                "inputs": "Current workflow description.",
                "output": "Recommended minimum connector stack and reasoning.",
                "review_note": "Review to ensure no unnecessary permissions are requested."
            },
            {
                "title": f"Process Mapping for {title_name}",
                "use_case": "Data mapping",
                "prompt": f"Map this process across {title_name} and other required tools. Document the data flow.",
                "inputs": "Process documentation.",
                "output": "Data flow map highlighting data entering/exiting the connector.",
                "review_note": "None."
            },
            {
                "title": "Risk Classification",
                "use_case": "Risk classification",
                "prompt": f"Identify the risk classification of using {title_name} for this specific workflow. Are there PII or compliance concerns?",
                "inputs": "Workflow data types.",
                "output": "Risk classification (Low/Medium/High) with explanation.",
                "review_note": "Any high-risk classification requires formal compliance review."
            },
            {
                "title": "Human Review Identification",
                "use_case": "Human review planning",
                "prompt": f"Review this {c_ref} workflow and identify where human approval is required before the next automation step executes.",
                "inputs": "Workflow automation steps.",
                "output": "Identified human review bottlenecks or checkpoints.",
                "review_note": "Ensure all critical decision points have a human-in-the-loop."
            },
            {
                "title": "Automation Candidate Selection",
                "use_case": "Automation candidate selection",
                "prompt": f"Review these manual {c_ref} tasks and determine which are the best candidates for automation.",
                "inputs": "List of manual tasks.",
                "output": "Ranked list of automation candidates.",
                "review_note": "None."
            },
            {
                "title": "Pilot Plan Creation",
                "use_case": "Pilot plan",
                "prompt": f"Create a safe automation pilot plan using only low-risk connectors for this {c_ref} workflow.",
                "inputs": "Workflow goals.",
                "output": "Step-by-step pilot rollout plan.",
                "review_note": "Pilot plan must include a rollback strategy."
            },
            {
                "title": "QA Checklist",
                "use_case": "QA checklist",
                "prompt": f"Generate a comprehensive QA checklist to test the {title_name} integration before going live.",
                "inputs": "Integration scope.",
                "output": "Actionable QA checklist.",
                "review_note": "Include edge cases and failure modes in testing."
            },
            {
                "title": "No-Auth GPT Action Design",
                "use_case": "GPT Action planning",
                "prompt": f"Design a no-auth GPT Action for this {c_ref} workflow that doesn't expose private data.",
                "inputs": "Action goal.",
                "output": "OpenAPI schema draft and endpoint descriptions.",
                "review_note": "Ensure endpoints do not require authentication or leak PII."
            }
        ]

        # Add a couple more specific ones if appropriate to reach 9-10
        if connector_name == "github":
            prompts.append({
                "title": "Static Site Improvement Plan",
                "use_case": "Workflow audit",
                "prompt": "Turn this GitHub repo into a static site improvement plan.",
                "inputs": "GitHub repository URL or structure.",
                "output": "Actionable improvement plan.",
                "review_note": "None."
            })
        if connector_name in ["gmail", "google-drive", "calendar", "notion"]:
            prompts.append({
                "title": "Cross-Platform Data Map",
                "use_case": "Data mapping",
                "prompt": "Map this process across Gmail, Drive, Calendar, and Notion.",
                "inputs": "Process description.",
                "output": "Comprehensive data mapping across the Google Workspace and Notion.",
                "review_note": "Check for data duplication."
            })

    for p in prompts:
        content += f"## {p['title']}\n\n"
        content += f"**Use case:** {p['use_case']}\n\n"
        content += f"**Copy/paste prompt:**\n"
        content += f"> {p['prompt']}\n\n"
        content += f"**Inputs needed:** {p['inputs']}\n\n"
        content += f"**Expected output:** {p['output']}\n\n"
        if p['review_note'] != "None.":
            content += f"**Human review note:** {p['review_note']}\n\n"

    with open(f"prompts/connectors/{connector_name}-prompts.md", "w") as f:
        f.write(content)


def generate_readme():
    content = """# Connector Prompt Packs

Welcome to the Connector Prompt Packs library. These prompts are designed to help you safely plan, audit, and structure workflows around specific connectors and platforms.

## How to Use Connector Prompts

1. Select the relevant connector prompt pack from the list below.
2. Find the prompt that matches your current goal (e.g., Workflow audit, Risk classification, Pilot plan).
3. Copy the prompt block.
4. Paste the prompt into your AI assistant, providing the requested inputs (like your workflow description or process documentation).

## Available Prompt Packs

"""
    for c in connectors:
        content += f"- [{c.replace('-', ' ').title()} Prompts]({c}-prompts.md)\n"

    content += """
## ⚠️ Important Safety Warnings

- **Do not paste private customer data** unnecessarily into public AI models.
- Use synthetic data or abstract representations of your workflow whenever possible.
- **Recommend draft-first workflows** for sensitive areas (e.g., always have the AI draft an email rather than sending it, always create a proposed plan rather than executing it automatically).

Always maintain a "human-in-the-loop" for any automated workflow involving money, legal decisions, compliance, or PII.
"""
    with open("prompts/connectors/README.md", "w") as f:
        f.write(content)

for c in connectors:
    generate_markdown(c)

generate_readme()

print("Prompt packs generated.")
