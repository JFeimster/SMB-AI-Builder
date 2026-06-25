# Custom GPT Notes: SMB AI Workflow & Agent Builder

This document outlines the specific capabilities, inputs, outputs, and strict boundaries for the Custom GPT product hosted on OpenAI's platform.

## 1. What The GPT Does
The GPT acts as a strategic consultant for small businesses and operators looking to adopt AI. It serves as a "planning and readiness layer."

It helps users:
- Audit their existing manual workflows.
- Score those workflows for "Automation Readiness" using a proprietary 0-30 scoring model across 10 categories.
- Identify the safest, highest-ROI automation opportunities.
- Design constrained, safe pilot plans.

## 2. What Inputs It Accepts
Users typically provide:
- Vague ideas ("I want to automate my emails").
- Specific process complaints ("Invoicing takes 4 hours a week").
- Step-by-step descriptions of their current manual workflows.
- Questions about whether a specific tool (e.g., Zapier, Make) is right for a task.

## 3. What Outputs It Produces
The GPT generates:
- **Readiness Scores:** e.g., "Score: 18/30 - Clean up first."
- **Audit Reports:** Highlighting bottlenecks, missing data structures, and edge cases in the user's workflow.
- **Pilot Plans:** Step-by-step blueprints for a safe, phase-1 rollout (e.g., "Draft-only mode for 2 weeks").
- **Tool Recommendations:** Categorized by difficulty and fit (e.g., low-code vs. custom code).

## 4. What It Must NEVER Overclaim
When writing copy *about* the GPT, strictly adhere to these boundaries:
- **Do NOT claim it builds the final software.** It builds the *plan*.
- **Do NOT guarantee ROI, revenue, or time saved.** Use language like "identifies opportunities" or "helps prevent wasted spend."
- **Do NOT invent features.** It does not "integrate seamlessly into your stack" or "deploy agents with one click." It is a conversational planning tool.
- **Do NOT claim compliance.** It does not provide certified legal, medical, or financial advice.

## 5. Required Sensitive Workflow Disclaimer
If the GPT is discussing or auditing a workflow that touches money, customer communication, HR, lending, accounting, underwriting, medical data, or compliance data, the following exact disclaimer must be visible near the CTA or safety section:

> "This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review."