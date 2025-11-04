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

/* ====== ABOUT PAGE FEATURES ====== */
(() => {
  // Reveal timeline and other elements on scroll
  const items = document.querySelectorAll('.reveal, .tl-item');
  if (!items.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => io.observe(el));
})();

/* ====== ABOUT: Light Parallax Effect for Hero ====== */
(() => {
  const hero = document.querySelector('.about-hero');
  if (!hero) return;

  const onScroll = () => {
    const rect = hero.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, 1 - Math.abs(rect.top) / (window.innerHeight * 1.2)));
    hero.style.setProperty('--p', k.toFixed(3));
    hero.style.setProperty('--scale', (1.08 + (1 - k) * 0.05).toFixed(3));
  };

  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .about-hero::before {
      transform: scale(var(--scale, 1.08));
    }
  `;
  document.head.appendChild(styleTag);

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
