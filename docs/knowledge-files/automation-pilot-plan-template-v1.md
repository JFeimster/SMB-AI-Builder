# Automation Pilot Plan Template

## Purpose
Build a pilot plan your business can actually survive. Never roll out automation to your entire business at once. Test it safely.

## When to run a pilot
After mapping the workflow and ensuring the data is clean, run a 2-week pilot to prove value and catch edge cases.

## Blank Pilot Plan

**Pilot Scope:** [What exactly are we testing?]
**Test Users:** [Who is involved internally?]
**Sample Data:** [Are we using test data or a small subset of real data?]
**Workflow Boundaries:** [Where does the automation start and stop?]

**Success Metrics:**
- [Metric 1, e.g., Time saved per task]
- [Metric 2, e.g., Zero hallucinations]

**Failure Criteria:**
- [What causes us to pull the plug?]

**Human Review Rules:**
- [How are humans overseeing the pilot?]

**Test Cases:**
1. [Normal run]
2. [Missing data run]

**Review Schedule:** [e.g., Daily at 4PM]
**Rollback Plan:** [How to revert to manual immediately]

**Go/No-Go Checklist (End of Pilot):**
- [ ] Did it meet success metrics?
- [ ] Were errors acceptable?
- [ ] Is the team comfortable?

**Post-Pilot Decision:**
[ ] Continue manual
[ ] Clean up first (Process broke)
[ ] Extend pilot
[ ] Automate limited workflow (Production)
[ ] Stop automation attempt

---

## Completed Example: Quote Follow-up Pilot

**Pilot Scope:** Automate drafting follow-up emails for quotes sent 3 days ago.
**Test Users:** Sales Manager.
**Sample Data:** Real data, limited to only Residential quotes (No Commercial).
**Workflow Boundaries:** Automation stops at creating a Gmail Draft. It does NOT send.

**Success Metrics:**
- 10 drafts created successfully.
- Sales Manager saves 30 minutes a week.

**Failure Criteria:**
- Drafts contain incorrect pricing.
- Drafts are sent to the wrong email.

**Human Review Rules:**
- Sales Manager must manually read every draft and click send.

**Test Cases:**
1. Quote is exactly 3 days old.
2. Quote was already replied to (Should not trigger).

**Review Schedule:** Friday mornings.
**Rollback Plan:** Turn off Zapier Zap. Sales Manager goes back to typing emails.
