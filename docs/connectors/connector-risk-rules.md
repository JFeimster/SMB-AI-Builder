# Connector Risk Rules

Use these rules before connecting any SMB workflow to an AI assistant, API action, or automation tool.

## Core Rule

If the process is broken, automation makes it broken faster.

## Draft-First Defaults

Use draft-first mode when a workflow touches:

- Customers or prospects
- Money, billing, finance, accounting, lending, underwriting, or taxes
- HR, hiring, payroll, performance, or employee records
- Legal, compliance, medical, security, or regulated decisions
- Private client files, IDs, contracts, or bank data

Draft-first means AI may summarize, classify, recommend, or prepare text. A qualified human decides and sends.

## Low-Risk Examples

- Public website page planning
- Prompt drafting
- Static documentation
- Internal task outlines using non-sensitive data
- Sample workflow maps
- Public SEO/content ideation

## Medium-Risk Examples

- CRM note summaries
- Internal customer status updates
- Meeting-to-task conversion
- Document checklist generation
- Pipeline cleanup recommendations

## High-Risk Examples

- Sending customer-facing messages automatically
- Changing CRM deal stages automatically
- Updating financial records
- Triggering invoices or payment reminders
- Routing leads based on eligibility or sensitive traits

## Sensitive / Human-Review Required

AI must not make final decisions for:

- Legal advice
- Tax advice
- HR decisions
- Lending or underwriting decisions
- Medical decisions
- Accounting conclusions
- Compliance judgments

## Safe Pilot Checklist

- Use sample data first.
- Map the workflow before connecting tools.
- Start with one connector if possible.
- Log inputs and outputs.
- Keep rollback steps obvious.
- Make the first version draft-only.
- Add human approval before external actions.

## Connector Review Prompt

```text
Classify the risk of this proposed connector workflow. Tell me what data is touched, what can be automated safely, what must stay human-reviewed, and the smallest safe pilot I can run first.
```
