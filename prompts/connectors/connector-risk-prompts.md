# Connector Risk Prompts

Copy and paste these prompts to plan and audit workflows involving Connector Risk.

## Overall Workflow Risk Audit

**Use case:** Workflow audit

**Copy/paste prompt:**
> Audit this workflow and identify all the data systems involved. Provide a list of the minimum connector stack required.

**Inputs needed:** Workflow description or process documentation.

**Expected output:** A list of required connectors with descriptions of what data they will handle.

**Human review note:** Ensure no unapproved connectors are suggested.

## Risk Classification Assessment

**Use case:** Risk classification

**Copy/paste prompt:**
> Review the following proposed data workflow. Classify the risk level (low, medium, high) based on whether it involves PII, money movement, or legal decisions.

**Inputs needed:** Proposed workflow data flow.

**Expected output:** Risk classification with reasoning.

**Human review note:** A human must manually verify any workflow classified as low risk before proceeding if it touches any sensitive data.

## Human Review Checkpoints

**Use case:** Human review planning

**Copy/paste prompt:**
> Review this automated workflow and identify exactly where human approval or review checkpoints are absolutely required before proceeding to the next step.

**Inputs needed:** Workflow steps.

**Expected output:** List of human intervention points with justification.

**Human review note:** Do not skip human reviews on any workflow dealing with money or PII.

## Data Mapping Analysis

**Use case:** Data mapping

**Copy/paste prompt:**
> Map this process across all its integrated platforms. Document what data moves between each system and in what direction.

**Inputs needed:** Process description.

**Expected output:** A data mapping table or list.

## Automation Candidate Selection

**Use case:** Automation candidate selection

**Copy/paste prompt:**
> Look at these manual tasks and select which ones are safe automation candidates using only low-risk connectors.

**Inputs needed:** List of manual tasks.

**Expected output:** Filtered list of safe automation tasks.

**Human review note:** Verify that 'low risk' definition matches your organization's compliance policy.

## Safe Pilot Plan Generation

**Use case:** Pilot plan

**Copy/paste prompt:**
> Create a safe automation pilot plan using only low-risk connectors for this proposed workflow. Keep the scope minimal.

**Inputs needed:** Proposed workflow.

**Expected output:** Step-by-step pilot plan.

**Human review note:** Pilot plans should be reviewed by a stakeholder before implementation.

## Security QA Checklist

**Use case:** QA checklist

**Copy/paste prompt:**
> Generate a security and QA checklist for testing this workflow automation to ensure no sensitive data is leaked.

**Inputs needed:** Automation steps and data involved.

**Expected output:** A checklist of QA tasks.

**Human review note:** Security teams should approve QA checklists for high-risk data.

## Minimum Connector Stack Recommendation

**Use case:** Minimum connector stack

**Copy/paste prompt:**
> Analyze this business process and recommend the absolute minimum connector stack needed to automate it efficiently, minimizing third-party risks.

**Inputs needed:** Business process details.

**Expected output:** List of minimal necessary connectors.
