# Workflow Connector Maps

## Minimum Stack Thinking

Connecting tools shouldn't be your first move. When designing automations, the goal is the leanest viable stack—only mapping the minimum useful connections needed to eliminate manual data entry, handoffs, and friction. Adding too many connectors upfront adds brittle dependencies and unnecessary points of failure.

**If the process is broken, automation makes it broken faster.** Always ensure your process is functioning smoothly before introducing any automation.

## Workflow Connector Maps

- [Lead Follow-Up](./lead-follow-up.md)
- [Client Onboarding](./client-onboarding.md)
- [Document Collection](./document-collection.md)
- [Invoice Reminders](./invoice-reminders.md)
- [Weekly Reporting](./weekly-reporting.md)
- [Content Production](./content-production.md)
- [Sales Pipeline](./sales-pipeline.md)
- [Support Triage](./support-triage.md)
- [Meeting to Tasks](./meeting-to-tasks.md)
- [Repo to Deployment](./repo-to-deployment.md)

## Summary Table

| Workflow | Minimum Stack | Risk Level | Best First Action |
|----------|---------------|------------|-------------------|
| Lead Follow-Up | Webform → CRM → Email | Medium | Standardize lead capture |
| Client Onboarding | CRM → Form → Cloud Storage | Medium | Map required onboarding data |
| Document Collection | Email/Portal → Cloud Storage | Medium | Define required documents |
| Invoice Reminders | Accounting Tool → Email | High | Centralize invoice tracking |
| Weekly Reporting | CRM/Sales → Spreadsheet/Doc | Low | Identify core metrics |
| Content Production | Project Mgmt → CMS | Low | Create content templates |
| Sales Pipeline | Email → CRM | Medium | Standardize deal stages |
| Support Triage | Helpdesk → Project Mgmt / Chat | Medium | Define triage categories |
| Meeting to Tasks | Calendar → Meeting Tool → Task Tracker | Low | Standardize meeting notes |
| Repo to Deployment | Repo → CI/CD → Hosting | Sensitive | Automate tests first |
