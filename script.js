// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  '.section-head, .card, .step, .soft-card, .quote, .ind, .fact, .serp, .cta__inner, .guarantee__inner'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealTargets.forEach(el => io.observe(el));

// Simple mobile burger -> reveals nav links as a dropdown
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav__links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// Subtle parallax on hero glow
const heroBg = document.querySelector('.hero__bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 800) heroBg.style.transform = `translateY(${y * 0.15}px)`;
  }, { passive: true });
}

// Audit form: realistic loader + success state
const auditForm      = document.getElementById('auditForm');
const auditSubmit    = document.getElementById('auditSubmit');
const auditSuccess   = document.getElementById('auditSuccess');
const auditFineprint = document.getElementById('auditFineprint');
const auditName      = document.getElementById('auditName');

if (auditForm) {
  auditForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name     = auditForm.elements.name.value.trim();
    const email    = auditForm.elements.email.value.trim();
    const business = auditForm.elements.business.value.trim();

    if (!name || !email || !business) {
      auditForm.querySelectorAll('input').forEach(i => {
        if (!i.value.trim()) i.style.borderColor = '#ff6b6b';
      });
      return;
    }

    auditSubmit.classList.add('is-loading');
    auditSubmit.disabled = true;
    auditForm.querySelectorAll('input').forEach(i => i.disabled = true);

    const delay = 1400 + Math.random() * 700;

    setTimeout(() => {
      auditForm.classList.add('is-leaving');

      setTimeout(() => {
        auditForm.hidden = true;
        if (auditFineprint) auditFineprint.hidden = true;

        const firstName = name.split(' ')[0];
        if (auditName) auditName.textContent = firstName;

        auditSuccess.hidden = false;
      }, 350);
    }, delay);
  });

  auditForm.querySelectorAll('input').forEach(i => {
    i.addEventListener('input', () => { i.style.borderColor = ''; });
  });
}
