# Airtable Prompts

Copy and paste these prompts to plan and audit workflows involving Airtable.

## Airtable Workflow Audit

**Use case:** Workflow audit

**Copy/paste prompt:**
> Audit this workflow and recommend the minimum connector stack involving Airtable.

**Inputs needed:** Current workflow description.

**Expected output:** Recommended minimum connector stack and reasoning.

**Human review note:** Review to ensure no unnecessary permissions are requested.

## Process Mapping for Airtable

**Use case:** Data mapping

**Copy/paste prompt:**
> Map this process across Airtable and other required tools. Document the data flow.

**Inputs needed:** Process documentation.

**Expected output:** Data flow map highlighting data entering/exiting the connector.

## Risk Classification

**Use case:** Risk classification

**Copy/paste prompt:**
> Identify the risk classification of using Airtable for this specific workflow. Are there PII or compliance concerns?

**Inputs needed:** Workflow data types.

**Expected output:** Risk classification (Low/Medium/High) with explanation.

**Human review note:** Any high-risk classification requires formal compliance review.

## Human Review Identification

**Use case:** Human review planning

**Copy/paste prompt:**
> Review this Airtable workflow and identify where human approval is required before the next automation step executes.

**Inputs needed:** Workflow automation steps.

**Expected output:** Identified human review bottlenecks or checkpoints.

**Human review note:** Ensure all critical decision points have a human-in-the-loop.

## Automation Candidate Selection

**Use case:** Automation candidate selection

**Copy/paste prompt:**
> Review these manual Airtable tasks and determine which are the best candidates for automation.

**Inputs needed:** List of manual tasks.

**Expected output:** Ranked list of automation candidates.

## Pilot Plan Creation

**Use case:** Pilot plan

**Copy/paste prompt:**
> Create a safe automation pilot plan using only low-risk connectors for this Airtable workflow.

**Inputs needed:** Workflow goals.

**Expected output:** Step-by-step pilot rollout plan.

**Human review note:** Pilot plan must include a rollback strategy.

## QA Checklist

**Use case:** QA checklist

**Copy/paste prompt:**
> Generate a comprehensive QA checklist to test the Airtable integration before going live.

**Inputs needed:** Integration scope.

**Expected output:** Actionable QA checklist.

**Human review note:** Include edge cases and failure modes in testing.

## No-Auth GPT Action Design

**Use case:** GPT Action planning

**Copy/paste prompt:**
> Design a no-auth GPT Action for this Airtable workflow that doesn't expose private data.

**Inputs needed:** Action goal.

**Expected output:** OpenAPI schema draft and endpoint descriptions.

**Human review note:** Ensure endpoints do not require authentication or leak PII.
