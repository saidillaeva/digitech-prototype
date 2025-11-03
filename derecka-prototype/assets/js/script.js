// Placeholder for future interactivity (mobile menu, sliders, etc.).
console.log('Prototype loaded');
<<<<<<< HEAD
// Scroll animation
// Burger toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('site-nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('is-open');
    nav.classList.toggle('nav--open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Закрывать меню по клику на ссылку
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('is-open');
      nav.classList.remove('nav--open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// Reveal on scroll (Intersection Observer)
const toReveal = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.18 });

toReveal.forEach(el => io.observe(el));

// Лёгкая тень при скролле на хедер
const header = document.querySelector('.header');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.style.boxShadow = y > 6 ? '0 6px 16px rgba(0,0,0,.08)' : '0 4px 12px rgba(0,0,0,.05)';
  lastY = y;
});
=======
>>>>>>> 4fc394506832ed2356fa93a78e5e4c4a1aba2399
