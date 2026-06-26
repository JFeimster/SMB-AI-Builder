(() => {
  const body = document.body;
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const navLinks = document.querySelectorAll('#site-nav a[href^="#"]');
  const stickyCta = document.querySelector("[data-sticky-cta]");
  const year = document.querySelector("[data-current-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      body.classList.toggle("nav-open", isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        body.classList.remove("nav-open");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (history.pushState) {
        history.pushState(null, "", targetId);
      }
    });
  });

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      if (!item) return;

      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      const icon = button.querySelector(".faq-icon");
      if (icon) icon.textContent = isOpen ? "−" : "+";
    });
  });

  if (stickyCta) {
    const hero = document.querySelector(".hero");
    const showAfter = () => {
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      stickyCta.classList.toggle("is-visible", heroBottom < 120);
    };

    showAfter();
    window.addEventListener("scroll", showAfter, { passive: true });
    window.addEventListener("resize", showAfter);
  }
})();

// Nav toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.site-nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Copy buttons
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', () => {
            const codeBlock = button.nextElementSibling;
            if (codeBlock && codeBlock.tagName === 'CODE') {
                navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                    const originalText = button.textContent;
                    button.textContent = 'Copied!';
                    setTimeout(() => { button.textContent = originalText; }, 2000);
                }).catch(err => {
                    console.error('Copy failed', err);
                });
            }
        });
    });
});
