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
