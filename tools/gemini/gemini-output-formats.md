# Gemini Output Formats

When interacting with Gemini, require it to format its responses according to these templates depending on the task.

## 1. Audit Report
Use this format when asking Gemini to review a workflow, process, or blueprint.

```markdown
# Workflow Audit Report: [Workflow Name]

## 1. Risk Classification
- **Recommendation Level**: [Automate now | Clean up first | Keep human | Revisit later]
- **Automation Mode**: [Draft-only AI assist | Human approval before action | etc.]

## 2. Identified Friction Points
- Point 1
- Point 2

## 3. Human-in-the-Loop Requirements
- Detail the necessary manual approval steps or audit logs required.

## 4. Priority Next Steps
1. Step 1
2. Step 2
```

## 2. Priority Fixes & Rewrite Suggestions
Use this format when asking Gemini to review page copy for tone and conversion.

```markdown
# Copy Review & Rewrite Suggestions

## Priority Fixes
- [ ] Remove hype phrase: "[Original Phrase]" -> Replace with: "[Direct alternative]"
- [ ] Fix unsupported claim: "[Original Claim]" -> Replace with: "[Fact-based alternative]"

## Rewrite Suggestions
### Section: [Section Name]
**Original:**
"[Original text]"

**Suggested Rewrite (Operator-friendly):**
"[New text]"
```

## 3. SEO Review
Use this format when asking Gemini to perform an SEO critique.

```markdown
# SEO Critique Report

## 1. Search Intent & Headings
- **H1 Status**: [Valid (only one) / Invalid]
- **Alignment**: [Notes on title vs H1 alignment]

## 2. Meta Data
- **Title**: [Status]
- **Description**: [Status]
- **Open Graph**: [Status - check for absolute paths]

## 3. Internal Links
- [List of broken paths or depth errors]

## 4. Schema & FAQs
- **FAQ Count**: [X/6]
- **Schema Validity**: [Valid / Contains fake data (Action required)]
```

## 4. Visual Critique (Multimodal)
Use this format for screenshot and design reviews.

```markdown
# Visual & Multimodal Critique

## 1. Hero Clarity & Value Prop
- [Feedback]

## 2. CTA Visibility & Contrast
- [Feedback]

## 3. Style Alignment
- **Neobrutalist Check**: [Does it have high contrast, thick borders, hard shadows?]

## 4. Mobile Layout / Crowding
- [Feedback on touch targets and readability]
```

## 5. Code Review
Use this format for reviewing HTML, CSS, JS, or TSX.

```markdown
# Code Review Summary

## 1. Security & Secrets
- [ ] No secrets exposed.

## 2. Semantic HTML
- [ ] Correct tags used.
- [ ] H1 constraint met.

## 3. Performance & CSS
- [ ] No heavy external frameworks added.
- [ ] Follows existing style roots.
```
