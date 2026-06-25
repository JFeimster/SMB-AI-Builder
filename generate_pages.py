import os
import json

workflows = [
    {
        "filename": "lead-follow-up-workflow-audit.html",
        "name": "Lead Follow-Up Workflow",
        "h1": "Audit Your Lead Follow-Up Workflow Before Automating It With AI",
        "focus": "Fast follow-up is valuable, but bad CRM data, stale context, and pushy automated messages can hurt trust.",
        "pilot": "AI drafts follow-up messages and summarizes lead context. A human reviews before sending.",
        "disclaimer": ""
    },
    {
        "filename": "quote-follow-up-workflow-audit.html",
        "name": "Quote Follow-Up Workflow",
        "h1": "Audit Your Quote Follow-Up Workflow Before Automating It With AI",
        "focus": "Quote follow-up is repetitive, but pricing context, custom terms, and deal sensitivity matter.",
        "pilot": "AI drafts reminders and summarizes quote status. A human approves customer-facing sends.",
        "disclaimer": ""
    },
    {
        "filename": "client-onboarding-workflow-audit.html",
        "name": "Client Onboarding Workflow",
        "h1": "Audit Your Client Onboarding Workflow Before Automating It With AI",
        "focus": "Onboarding has repeated steps, but missed handoffs create confusion.",
        "pilot": "AI generates onboarding checklists, drafts welcome messages, and flags missing information.",
        "disclaimer": ""
    },
    {
        "filename": "document-collection-workflow-audit.html",
        "name": "Document Collection Workflow",
        "h1": "Audit Your Document Collection Workflow Before Automating It With AI",
        "focus": "Document collection is repetitive, but access, privacy, and sensitivity matter.",
        "pilot": "AI tracks missing items and drafts reminder messages. Humans review edge cases.",
        "disclaimer": ""
    },
    {
        "filename": "invoice-reminder-workflow-audit.html",
        "name": "Invoice Reminder Workflow",
        "h1": "Audit Your Invoice Reminder Workflow Before Automating It With AI",
        "focus": "Payment reminders are repetitive, but money-related communication needs care.",
        "pilot": "AI drafts reminders from approved rules. Humans review escalations.",
        "disclaimer": "This is not financial, legal, collections, accounting, tax, or compliance advice."
    },
    {
        "filename": "crm-task-creation-workflow-audit.html",
        "name": "CRM Task Creation Workflow",
        "h1": "Audit Your CRM Task Creation Workflow Before Automating It With AI",
        "focus": "CRM admin is tedious, but bad automation creates bad records.",
        "pilot": "AI suggests CRM tasks from notes. A human confirms before updates are made.",
        "disclaimer": ""
    },
    {
        "filename": "faq-response-drafting-workflow-audit.html",
        "name": "FAQ Response Drafting Workflow",
        "h1": "Audit Your FAQ Response Drafting Workflow Before Automating It With AI",
        "focus": "Drafting responses can save time, but customer-facing accuracy and tone matter.",
        "pilot": "AI drafts FAQ replies from approved source material. Humans review before sending.",
        "disclaimer": ""
    },
    {
        "filename": "weekly-finance-summary-workflow-audit.html",
        "name": "Weekly Finance Summary Workflow",
        "h1": "Audit Your Weekly Finance Summary Workflow Before Automating It With AI",
        "focus": "Finance summaries can help operators see patterns, but financial interpretation needs human review.",
        "pilot": "AI summarizes approved reports and flags questions. It does not provide tax, accounting, investment, lending, legal, or compliance advice.",
        "disclaimer": "This is planning support only, not financial, tax, accounting, investment, lending, legal, or compliance advice."
    },
    {
        "filename": "proposal-drafting-workflow-audit.html",
        "name": "Proposal Drafting Workflow",
        "h1": "Audit Your Proposal Drafting Workflow Before Automating It With AI",
        "focus": "Proposals have reusable structure, but scope, pricing, terms, and commitments need review.",
        "pilot": "AI drafts first-pass proposals from approved inputs. Humans review all commercial terms.",
        "disclaimer": ""
    },
    {
        "filename": "internal-status-reporting-workflow-audit.html",
        "name": "Internal Status Reporting Workflow",
        "h1": "Audit Your Internal Status Reporting Workflow Before Automating It With AI",
        "focus": "Status reporting is repetitive, but stale data and unclear ownership create noise.",
        "pilot": "AI drafts weekly status summaries and flags blockers. Owners review before sharing.",
        "disclaimer": ""
    }
]

template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Audit Your {name} Before Automating It With AI</title>
  <meta name="description" content="Audit the {name}, score automation readiness, and build a safe AI agent pilot plan before buying tools." />
  <meta name="theme-color" content="#050505" />

  <!-- Open Graph basics -->
  <meta property="og:title" content="Audit Your {name} Before Automating It With AI" />
  <meta property="og:description" content="Stop automating broken workflows. Score readiness, find what to automate first, and build a safe AI agent pilot plan for the {name}." />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="../../../og-image-placeholder.png" />
  <link rel="canonical" href="https://example.com/pages/seo/workflows/{filename}" />

  <link rel="stylesheet" href="../../../styles.css" />
  <script defer src="../../../script.js"></script>

  <script type="application/ld+json">
  {json_ld_article}
  </script>

  <script type="application/ld+json">
  {json_ld_faq}
  </script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header" data-sticky-header>
    <div class="shell header-grid">
      <a class="brand" href="../../../index.html" aria-label="SMB AI Workflow and Agent Builder home">
        <span class="brand-mark" aria-hidden="true">AI</span>
        <span class="brand-text">
          <strong>SMB AI Builder</strong>
          <small>workflow audit cockpit</small>
        </span>
      </a>

      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">Toggle navigation</span>
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
      </button>

      <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
        <a href="#audit-details">Audit Details</a>
        <a href="#readiness">Readiness</a>
        <a href="#pilot">Pilot Plan</a>
        <a href="#faq">FAQ</a>
        <a class="nav-cta" href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" target="_blank" rel="noopener">Launch GPT</a>
      </nav>
    </div>
  </header>

  <main id="main">
    <section class="hero section-grid" id="top" aria-labelledby="hero-title">
      <div class="grid-bg" aria-hidden="true"></div>
      <div class="shell hero-layout">
        <div class="hero-copy">
          <p class="eyebrow punch">Workflow Audit</p>
          <h1 id="hero-title">{h1}</h1>
          <p class="hero-subhead">
            Before adding an AI agent to your {name}, use our GPT to audit the mess, score readiness, and build a safe pilot plan.
          </p>

          <div class="hero-actions" aria-label="Primary actions">
            <a class="btn btn-primary btn-xl" href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" target="_blank" rel="noopener">
              Audit This Workflow
            </a>
            <a class="btn btn-secondary btn-xl" href="#readiness">View Readiness Factors</a>
          </div>

          <p class="trust-microcopy">
            Built for operators who need a practical pilot plan — not another “AI will fix everything” pep talk.
          </p>

          {disclaimer_html}
        </div>
      </div>
    </section>

    <section class="section anti-hype" id="audit-details" aria-labelledby="audit-details-title">
      <div class="shell split-layout">
        <div>
          <p class="section-kicker">The breakdown</p>
          <h2 id="audit-details-title">Why this workflow is tempting to automate</h2>
          <p class="section-lede">
            {focus}
          </p>
          <h3>What can go wrong</h3>
          <p>
            If you automate the {name} without checking dependencies, you risk sending incorrect information, annoying customers, and breaking internal trust.
            AI agents can make bad processes faster, louder, and more expensive.
          </p>
        </div>

        <div class="warning-board">
          <h3>What the GPT checks</h3>
          <ul class="check-list angry">
            <li>Workflow steps and edge cases</li>
            <li>Data sources and messy inputs</li>
            <li>Clear ownership and handoff rules</li>
            <li>Customer experience risks</li>
            <li>Tool access and permission boundaries</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section" id="readiness" aria-labelledby="readiness-title">
      <div class="shell">
        <div class="section-heading">
          <p class="section-kicker">Readiness factors</p>
          <h2 id="readiness-title">Is your {name} ready for AI?</h2>
        </div>
        <div class="card-grid">
            <article class="brutal-card">
              <h3>1. Data Quality</h3>
              <p>Is the input data for this workflow clean, structured, and consistent?</p>
            </article>
            <article class="brutal-card">
              <h3>2. Process Consistency</h3>
              <p>Does the workflow follow the exact same steps every time, or are there frequent exceptions?</p>
            </article>
            <article class="brutal-card">
              <h3>3. Human Review Plan</h3>
              <p>Is there a designated human to review outputs before they go live or to a customer?</p>
            </article>
        </div>
      </div>
    </section>

    <section class="section blueprint-section" id="pilot" aria-labelledby="pilot-title">
      <div class="shell blueprint-layout">
        <div class="blueprint-copy">
          <p class="section-kicker">Pilot plan</p>
          <h2 id="pilot-title">Suggested safe pilot</h2>
          <p class="section-lede">
            {pilot}
          </p>
          <a class="btn btn-primary" href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" target="_blank" rel="noopener">Build My AI Agent Pilot Plan</a>
        </div>
        <article class="blueprint-card">
           <div class="blueprint-topline">
            <span class="mono-label">Human review checkpoints</span>
            <span class="status-chip status-ready">Required</span>
          </div>
          <dl class="blueprint-list">
            <div><dt>Draft Review</dt><dd>Always review AI-generated drafts before sending.</dd></div>
            <div><dt>Data Verification</dt><dd>Confirm AI interpretations of input data are correct.</dd></div>
            <div><dt>Exception Handling</dt><dd>Escalate edge cases to a human operator.</dd></div>
            <div><dt>Rollback Plan</dt><dd>Be prepared to revert to manual processes if needed.</dd></div>
          </dl>
        </article>
      </div>
    </section>

    <section class="section faq-section" id="faq" aria-labelledby="faq-title">
      <div class="shell faq-layout">
        <div>
          <p class="section-kicker">FAQ</p>
          <h2 id="faq-title">Common questions about automating the {name}</h2>
        </div>

        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Is it safe to automate the {name}?</span>
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer">
              <p>Yes, but only if you use a draft-first approach and implement strict human review checkpoints. Automating broken processes will only amplify errors.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How do I get started with a pilot?</span>
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer">
              <p>Use our GPT tool to audit your current workflow, score its readiness, and generate a safe, human-in-the-loop pilot plan.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What if my current process is too messy?</span>
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer">
              <p>The GPT will help identify the messy parts and suggest cleanup tasks before you attempt any AI automation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section final-cta-section" id="final-cta" aria-labelledby="final-cta-title">
      <div class="shell final-cta">
        <p class="section-kicker">The next smart workflow</p>
        <h2 id="final-cta-title">Turn your {name} into a safe AI pilot plan.</h2>
        <div class="hero-actions center-actions">
          <a class="btn btn-primary btn-xl" href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" target="_blank" rel="noopener">Audit My First Workflow</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer" aria-labelledby="footer-title">
    <div class="shell footer-grid">
      <div>
        <h2 id="footer-title">SMB AI Workflow & Agent Builder</h2>
        <p>Audit the mess before you wire it into your business.</p>
      </div>

      <nav class="footer-links" aria-label="Footer links">
        <a href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" target="_blank" rel="noopener">Launch GPT</a>
        <a href="../../../index.html">Home</a>
      </nav>
    </div>

    <div class="shell footer-bottom">
      <small>This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, or compliance advice. Sensitive decisions should stay under qualified human review.</small>
      <small>© <span data-current-year></span> SMB AI Workflow & Agent Builder. All rights reserved.</small>
    </div>
  </footer>

</body>
</html>
"""

os.makedirs('pages/seo/workflows', exist_ok=True)

for wf in workflows:
    disclaimer_html = f'<p style="color: #ff4d4f; font-weight: bold; margin-top: 1rem;">{wf["disclaimer"]}</p>' if wf["disclaimer"] else ""

    article_ld = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": wf["h1"],
        "description": f"Audit the {wf['name']}, score automation readiness, and build a safe AI agent pilot plan.",
        "author": {"@type": "Organization", "name": "SMB AI Builder"}
    }

    faq_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": f"Is it safe to automate the {wf['name']}?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but only if you use a draft-first approach and implement strict human review checkpoints. Automating broken processes will only amplify errors."
                }
            },
            {
                "@type": "Question",
                "name": "How do I get started with a pilot?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use our GPT tool to audit your current workflow, score its readiness, and generate a safe, human-in-the-loop pilot plan."
                }
            },
            {
                "@type": "Question",
                "name": "What if my current process is too messy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The GPT will help identify the messy parts and suggest cleanup tasks before you attempt any AI automation."
                }
            }
        ]
    }

    content = template.format(
        filename=wf["filename"],
        name=wf["name"],
        h1=wf["h1"],
        focus=wf["focus"],
        pilot=wf["pilot"],
        disclaimer_html=disclaimer_html,
        json_ld_article=json.dumps(article_ld, indent=4),
        json_ld_faq=json.dumps(faq_ld, indent=4)
    )

    with open(f'pages/seo/workflows/{wf["filename"]}', 'w') as f:
        f.write(content)

print("Generated all files successfully.")
