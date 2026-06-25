# Audit Prompts

## Purpose
Provides prompts to conduct comprehensive audits of SMB workflows.

## When to use
Use these prompts during the initial discovery phase or when analyzing an existing messy process.

## Inputs needed
- Current process description
- Tools currently used
- Identified pain points

## Quick workflow audit
**Prompt:**
```text
Please provide a high-level overview of your current workflow, the primary goal, and the main tools you are using today.
```
**Expected output:** A brief summary of the workflow, its objective, and tech stack.
**Follow-up prompts:** What is the most time-consuming part of this process?
**Safety notes:** Do not include sensitive customer data or credentials.
**Human-review reminders:** Always review the workflow summary for accuracy before proceeding.
**Example use cases:** Lead follow-up triage, invoice processing.
**Final QA checklist:**
- [ ] Captured main tools
- [ ] Identified primary goal
- [ ] Avoided sensitive info

## Deep workflow audit
**Prompt:**
```text
Map out your workflow step-by-step from trigger to final outcome. Include every manual action, tool handoff, and decision point.
```
**Expected output:** A detailed, step-by-step process map.
**Follow-up prompts:** Are there any exceptions or edge cases not covered here?
**Safety notes:** Be cautious with compliance-heavy steps.
**Human-review reminders:** Ensure all stakeholders agree on the mapped steps.
**Example use cases:** Client onboarding, complex approval routing.
**Final QA checklist:**
- [ ] Documented all steps
- [ ] Identified decision points
- [ ] Noted manual vs. automated steps

## Bottleneck discovery
**Prompt:**
```text
Identify the top 3 bottlenecks or friction points in your current process that cause delays or errors.
```
**Expected output:** A list of specific bottlenecks with their impact.
**Follow-up prompts:** How much time is lost per week due to these bottlenecks?
**Safety notes:** None.
**Human-review reminders:** Review bottlenecks to ensure they reflect reality.
**Example use cases:** Slow report generation, missed follow-ups.
**Final QA checklist:**
- [ ] Listed top 3 bottlenecks
- [ ] Quantified impact if possible

## Current-state workflow mapping
**Prompt:**
```text
Create a visual or structural representation of your current workflow, detailing inputs, actions, and outputs for each step.
```
**Expected output:** A structured diagram or outline of the current state.
**Follow-up prompts:** Can we simplify any of these steps?
**Safety notes:** Avoid mapping confidential proprietary algorithms.
**Human-review reminders:** Verify with actual process operators.
**Example use cases:** Documenting legacy processes.
**Final QA checklist:**
- [ ] Clear inputs and outputs
- [ ] All steps accounted for

## Data/tool readiness review
**Prompt:**
```text
List all tools involved in this workflow. Do they have APIs available? Are they connected to any integration platforms like Zapier or Make?
```
**Expected output:** An inventory of tools and their connectivity status.
**Follow-up prompts:** Which of these tools are legacy and hard to integrate?
**Safety notes:** Do not share API keys or tokens.
**Human-review reminders:** Confirm API availability with tool documentation.
**Example use cases:** Preparing for Zapier automation.
**Final QA checklist:**
- [ ] Tool list complete
- [ ] API status noted

## Cleanup-before-automation review
**Prompt:**
```text
Before automating, what steps in this workflow are redundant, obsolete, or unnecessarily complex? Let's clean it up first.
```
**Expected output:** A list of steps to eliminate or simplify.
**Follow-up prompts:** Who needs to approve these process changes?
**Safety notes:** Ensure compliance steps are not mistakenly removed.
**Human-review reminders:** Get sign-off on process changes before building.
**Example use cases:** Streamlining an old approval chain.
**Final QA checklist:**
- [ ] Redundant steps identified
- [ ] Compliance steps preserved

## Automation fit recommendation
**Prompt:**
```text
Based on the workflow audit, recommend whether this process should be fully automated, partially automated (human-in-the-loop), or remain manual. Provide reasons.
```
**Expected output:** A recommendation with supporting rationale.
**Follow-up prompts:** What is the estimated ROI of automating this?
**Safety notes:** Sensitive processes should default to human-in-the-loop.
**Human-review reminders:** Final decision rests with the business owner.
**Example use cases:** Deciding how to handle customer support tickets.
**Final QA checklist:**
- [ ] Clear recommendation given
- [ ] Rationale provided
- [ ] Safety considered
