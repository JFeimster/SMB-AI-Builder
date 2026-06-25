# SMB Workflow Audit Playbook

## Purpose
This playbook helps small business owners, operators, and automation builders audit existing manual workflows before attempting to automate them. Stop automating broken workflows. Audit the mess first.

## When to use this playbook
Use this playbook when:
- A process feels repetitive, slow, or messy.
- You want to build an AI agent but aren't sure what it should do.
- You are losing track of customer communications, documents, or data.
- You want to score the workflow before AI touches it.

## What a workflow audit is
- A clear mapping of current reality.
- Identifying inputs, tools, owners, and outputs.
- A risk and readiness assessment.
- A decision point: Automate now, Clean up first, Keep human, or Revisit later.

## What a workflow audit is not
- It is not a tool selection process (Plan the workflow before choosing the tool).
- It is not a promise of full automation.
- It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## Discovery Intake
Start by asking the business owner/operator these practical questions:

1. What business are you in?
2. What workflow are we auditing?
3. What triggers it?
4. Who owns it?
5. What tools are involved?
6. What data is required?
7. How often does it happen?
8. What breaks most often?
9. What happens if it goes wrong?
10. Does it touch customers, money, sensitive data, legal, HR, tax, accounting, lending, medical, or compliance?

## Workflow Mapping Process
Map out the current process step-by-step. Do not skip the small manual steps like "copy data from email to spreadsheet."

## Current-State Workflow Map
1. **Trigger:** [What starts the process?]
2. **Step 1:** [First action] -> **Owner:** [Who] -> **Tool:** [What tool]
3. **Step 2:** [Second action] -> **Owner:** [Who] -> **Tool:** [What tool]
4. **Output:** [Final result]

## Pain Point Identification
Where does the process slow down, break, or require manual data entry? List the pain points.

## Bottleneck Analysis
What is the single slowest step? Is it waiting on a human, missing data, or tool limitations?

## Data Readiness Review
Is the data required for this workflow structured, accessible, and accurate?
- Yes: Ready for automation.
- No: Clean up first.

## Tool Readiness Review
Do the tools used have APIs, integrations, or export capabilities?
- Yes: Ready for automation.
- No: May need workaround or different tools.

## Ownership Review
Is it clear who owns the process and the data?
- Yes: Clear ownership.
- No: Assign an owner before automating.

## Risk Review
Does this workflow touch sensitive data, customers, or finances?
- Yes: Requires human review. Draft-only mode recommended.
- No: Lower risk, easier to automate.

## Customer Experience Review
Will automating this improve or hurt the customer experience? Avoid robotic or tone-deaf automated responses.

## Automation Fit Indicators
- High frequency, repetitive.
- Clear trigger and rules.
- Structured data.
- Low risk if an error occurs.

## Cleanup Indicators
- Unclear ownership.
- Missing or messy data.
- Process changes frequently based on exceptions.

## Human-Review Requirements
For workflows involving customer-facing communication, money, finance, tax, accounting, legal, HR, medical, lending, underwriting, compliance, private data, or sensitive personal data, recommend:
- Draft-only mode
- Human approval before action
- Limited permissions
- Test data first
- Audit logs
- Escalation rules
- Rollback plan
- Qualified human review

## Recommended Next-Step Language
Use one of these four recommendations based on the audit:
- **Automate now:** The workflow is clear, low-risk, and data is ready.
- **Clean up first:** The workflow is valuable but messy. Fix the data or process first.
- **Keep human:** The workflow is too sensitive, high-risk, or requires professional judgment.
- **Revisit later:** The workflow is low value or low frequency. Not worth the effort now.

## Sample Completed Audit
**Workflow:** Lead response for plumbing business.
**Trigger:** Customer fills out website form.
**Current State:** Email received -> Owner reads it at night -> Owner replies manually.
**Pain Point:** Delayed response time, lost leads.
**Risk:** Customer-facing, but low risk if polite.
**Recommendation:** Automate now.
**Pilot Idea:** AI drafts response based on services offered, saves as draft in Gmail. Human reviews and sends.

## Audit Checklist
- [ ] Workflow trigger identified.
- [ ] All steps mapped.
- [ ] Pain points and bottlenecks listed.
- [ ] Data readiness assessed.
- [ ] Tool readiness assessed.
- [ ] Risk level determined.
- [ ] Human review points defined.
- [ ] Recommendation selected.

## Output Template

**Workflow Name:** [Name]
**Owner:** [Owner]
**Current Status:** [Brief description]
**Pain Points:** [List]
**Risk Level:** [Low/Medium/High]
**Recommendation:** [Automate now / Clean up first / Keep human / Revisit later]
**Next Steps:** [Action items]
