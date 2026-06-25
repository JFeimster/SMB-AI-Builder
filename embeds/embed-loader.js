// embeds/embed-loader.js

(function() {
  // Try not to run multiple times
  if (window.SMB_AI_EMBED_LOADED) return;
  window.SMB_AI_EMBED_LOADED = true;

  // Replace with actual production domain when deploying
  const BASE_URL = "https://smb-ai-builder.vercel.app";

  function injectIframes() {
    // Find containers by ID or class
    const containers = [
      document.getElementById('smb-ai-builder-widget'),
      ...document.querySelectorAll('.smb-ai-builder-widget')
    ];

    containers.forEach(container => {
      if (!container || container.dataset.injected === 'true') return;

      const partnerId = container.dataset.partner || 'default';
      const size = container.dataset.size || 'full';
      // dataset.theme is parsed but handled by the CSS logic internally if we expand it later, neon is default
      const theme = container.dataset.theme || 'neon';

      let srcFile = '/embeds/iframe.html';
      let iframeWidth = '100%';
      let iframeHeight = '1200px'; // full max height
      let iframeTitle = 'SMB AI Workflow & Agent Builder';

      if (size === 'compact') {
        srcFile = '/embeds/iframe-compact.html';
        iframeHeight = '680px';
        iframeTitle = 'SMB AI Workflow Readiness Check';
      } else if (size === 'card') {
        srcFile = '/embeds/affiliate-card.html';
        iframeHeight = '380px';
        iframeTitle = 'SMB AI Affiliate Card';
      }

      // Construct final URL
      const iframeUrl = new URL(BASE_URL + srcFile);
      iframeUrl.searchParams.set('partner', partnerId);

      // Create iframe
      const iframe = document.createElement('iframe');
      iframe.src = iframeUrl.toString();
      iframe.title = iframeTitle;
      iframe.style.width = iframeWidth;

      // We can use style max-width to obey boundaries requested
      if (size === 'full') {
        iframe.style.maxWidth = '940px';
        iframe.style.height = iframeHeight;
      } else if (size === 'compact') {
        iframe.style.maxWidth = '420px'; // typical compact width but we let it be responsive
        iframe.style.height = iframeHeight;
      } else if (size === 'card') {
        iframe.style.maxWidth = '400px';
        iframe.style.height = iframeHeight;
      }

      iframe.style.border = 'none';
      iframe.style.display = 'block';
      iframe.style.margin = '0 auto';

      container.appendChild(iframe);
      container.dataset.injected = 'true';
    });
  }

  // Inject once DOM is ready or immediately if already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectIframes);
  } else {
    injectIframes();
  }
})();
