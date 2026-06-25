// embeds/partner-widget.js

(function() {
  const GPT_URL = "https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder";
  const NOTION_URL = "https://feimster.notion.site/smb-ai-builder";

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

  function formatPartnerName(partnerId) {
    if (!partnerId) return FALLBACK_CONFIG.default.name;

    return partnerId
      .trim()
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .replace(/\b\w/g, char => char.toUpperCase());
  }

  function getPartnerConfig(partnerId) {
    const defaultConfig = (window.SMB_AI_BUILDER_PARTNERS && window.SMB_AI_BUILDER_PARTNERS.default)
      ? window.SMB_AI_BUILDER_PARTNERS.default
      : FALLBACK_CONFIG.default;

    if (partnerId && window.SMB_AI_BUILDER_PARTNERS && window.SMB_AI_BUILDER_PARTNERS[partnerId]) {
      return {
        ...defaultConfig,
        ...window.SMB_AI_BUILDER_PARTNERS[partnerId],
        referral: window.SMB_AI_BUILDER_PARTNERS[partnerId].referral || partnerId
      };
    }

    if (partnerId) {
      return {
        ...defaultConfig,
        name: formatPartnerName(partnerId),
        referral: partnerId,
        ctaLabel: defaultConfig.ctaLabel || FALLBACK_CONFIG.default.ctaLabel
      };
    }

    return defaultConfig;
  }

  function updateAttributionAndLinks() {
    const partnerId = getQueryParam('partner');
    const partnerData = getPartnerConfig(partnerId);
    const trackingId = partnerId || partnerData.referral;

    const attributionEl = document.getElementById('smb-ai-attribution-name');
    if (attributionEl && partnerData) {
      attributionEl.textContent = `Shared by ${partnerData.name}`;
    }

    const primaryCta = document.getElementById('smb-ai-primary-cta');
    if (primaryCta && partnerData && partnerData.ctaLabel) {
      primaryCta.textContent = partnerData.ctaLabel;
    }

    const secondaryCta = document.getElementById('smb-ai-secondary-cta');

    if (primaryCta) {
      const gptUrlObj = new URL(GPT_URL);
      if (trackingId && trackingId !== 'direct') {
        gptUrlObj.searchParams.set('utm_source', 'partner');
        gptUrlObj.searchParams.set('utm_medium', 'embed');
        gptUrlObj.searchParams.set('utm_campaign', 'smb_ai_builder');
        gptUrlObj.searchParams.set('utm_content', trackingId);
        gptUrlObj.searchParams.set('ref', trackingId);
      }
      primaryCta.href = gptUrlObj.toString();
    }

    if (secondaryCta) {
      const notionUrlObj = new URL(NOTION_URL);
      if (trackingId && trackingId !== 'direct') {
        notionUrlObj.searchParams.set('ref', trackingId);
      }
      secondaryCta.href = notionUrlObj.toString();
    }
  }

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
      recValue.setAttribute('aria-live', 'polite');
      panel.classList.add('is-visible');
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function initQuestions() {
    const questions = ['q1', 'q2', 'q3'];

    questions.forEach(q => {
      const btns = document.querySelectorAll(`button[data-q="${q}"]`);
      btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          btns.forEach(b => {
            b.classList.remove('is-selected');
            b.setAttribute('aria-pressed', 'false');
          });

          const target = e.currentTarget;
          target.classList.add('is-selected');
          target.setAttribute('aria-pressed', 'true');

          scores[q] = target.getAttribute('data-val');
          updateScore();
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateAttributionAndLinks();
    initQuestions();
  });

})();
