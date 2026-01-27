document.addEventListener('DOMContentLoaded', () => {
  // Initial animations
  initAnimations();
});

function initAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, observerOptions);

  // Observe elements that exist immediately
  observeElements(observer);

  // Since we load components dynamically, we need to observe new elements added to DOM
  // A simple way is to re-run observation after a slight delay or use MutationObserver (overkill maybe)
  // Or simpler: Hook into include.js logic. But here, let's just poll or wait for 'bootIncludes' to finish if possible.
  // Actually, include.js runs bootIncludes on DOMContentLoaded.
  // We can just set a timeout or rely on MutationObserver.

  const mutObserver = new MutationObserver((mutations) => {
    mutations.forEach((mu) => {
      if (mu.addedNodes.length) {
        observeElements(observer);
      }
    });
  });

  mutObserver.observe(document.body, { childList: true, subtree: true });
}

function observeElements(observer) {
  const elements = document.querySelectorAll('.fade-up:not(.visible)');
  elements.forEach(el => observer.observe(el));
}
