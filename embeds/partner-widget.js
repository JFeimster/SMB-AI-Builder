// embeds/partner-widget.js

(function() {
  const GPT_URL = "https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder";
  const NOTION_URL = "https://feimster.notion.site/smb-ai-builder";

  // Local fallback config
  const FALLBACK_CONFIG = {
    default: {
      name: "SMB AI Builder",
      referral: "direct",
      ctaLabel: "Launch GPT + Audit This Workflow"
    }
  };

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  function getPartnerConfig(partnerId) {
    let configObj = FALLBACK_CONFIG.default;

    // Check if global config exists
    if (window.SMB_AI_BUILDER_PARTNERS) {
      if (partnerId && window.SMB_AI_BUILDER_PARTNERS[partnerId]) {
        configObj = window.SMB_AI_BUILDER_PARTNERS[partnerId];
      } else if (window.SMB_AI_BUILDER_PARTNERS['default']) {
        configObj = window.SMB_AI_BUILDER_PARTNERS['default'];
      }
    } else if (partnerId) {
      // Fallback behavior if config js is missing but partner is in url
      configObj = {
        name: partnerId,
        referral: partnerId,
        ctaLabel: FALLBACK_CONFIG.default.ctaLabel
      };
    }

    return configObj;
  }

  function updateAttributionAndLinks() {
    const partnerId = getQueryParam('partner');
    const partnerData = getPartnerConfig(partnerId);

    // Update attribution text
    const attributionEl = document.getElementById('smb-ai-attribution-name');
    if (attributionEl && partnerData) {
      attributionEl.textContent = `Shared by ${partnerData.name}`;

      // Also update CTA label if the element supports it
      const primaryCta = document.getElementById('smb-ai-primary-cta');
      if (primaryCta && partnerData.ctaLabel) {
        primaryCta.textContent = partnerData.ctaLabel;
      }
    }

    // Append UTM/ref params
    const primaryCta = document.getElementById('smb-ai-primary-cta');
    const secondaryCta = document.getElementById('smb-ai-secondary-cta');

    if (primaryCta) {
      const gptUrlObj = new URL(GPT_URL);
      if (partnerId) {
        gptUrlObj.searchParams.set('utm_source', 'partner');
        gptUrlObj.searchParams.set('utm_medium', 'embed');
        gptUrlObj.searchParams.set('utm_campaign', 'smb_ai_builder');
        gptUrlObj.searchParams.set('utm_content', partnerId);
        gptUrlObj.searchParams.set('ref', partnerId);
      }
      primaryCta.href = gptUrlObj.toString();
    }

    if (secondaryCta) {
      const notionUrlObj = new URL(NOTION_URL);
      if (partnerId) {
        notionUrlObj.searchParams.set('ref', partnerId);
      }
      secondaryCta.href = notionUrlObj.toString();
    }
  }

  // Scoring Logic
  let scores = {
    q1: null,
    q2: null,
    q3: null
  };

  const pointMap = {
    'yes': 2,
    'sort-of': 1,
    'no': 0
  };

  function updateScore() {
    // Only calculate if all questions are answered
    if (scores.q1 === null || scores.q2 === null || scores.q3 === null) return;

    const total = pointMap[scores.q1] + pointMap[scores.q2] + pointMap[scores.q3];

    let recommendation = "";
    let cssClass = "";

    if (total <= 1) {
      recommendation = "Keep human";
      cssClass = "keep-human";
    } else if (total <= 3) {
      recommendation = "Clean up first";
      cssClass = "clean-up-first";
    } else if (total <= 5) {
      recommendation = "Pilot carefully";
      cssClass = "pilot-carefully";
    } else {
      recommendation = "Automate now";
      cssClass = "automate-now";
    }

    const panel = document.getElementById('smb-ai-result-panel');
    const recValue = document.getElementById('smb-ai-rec-value');

    if (panel && recValue) {
      recValue.textContent = recommendation;
      recValue.className = `smb-ai-rec-value ${cssClass}`;

      // Accessibility update
      recValue.setAttribute('aria-live', 'polite');

      panel.classList.add('is-visible');

      // Scroll to result slightly if it was hidden
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function initQuestions() {
    const questions = ['q1', 'q2', 'q3'];

    questions.forEach(q => {
      const btns = document.querySelectorAll(`button[data-q="${q}"]`);
      btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          // Clear selected state in this group
          btns.forEach(b => {
            b.classList.remove('is-selected');
            b.setAttribute('aria-pressed', 'false');
          });

          // Set new state
          const target = e.currentTarget;
          target.classList.add('is-selected');
          target.setAttribute('aria-pressed', 'true');

          scores[q] = target.getAttribute('data-val');
          updateScore();
        });
      });
    });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    updateAttributionAndLinks();
    initQuestions();
  });

})();
