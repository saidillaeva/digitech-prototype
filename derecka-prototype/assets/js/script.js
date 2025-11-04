// Prototype loaded
console.log('Prototype loaded');

// === Burger Menu Toggle ===
const burger = document.getElementById('burger');
const nav = document.getElementById('site-nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('is-open');
    nav.classList.toggle('nav--open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-open');
      nav.classList.remove('nav--open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// === Reveal on Scroll (Intersection Observer) ===
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

// === Header Shadow on Scroll ===
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.style.boxShadow = y > 8
    ? '0 6px 16px rgba(0,0,0,.08)'
    : '0 4px 12px rgba(0,0,0,.05)';
});
