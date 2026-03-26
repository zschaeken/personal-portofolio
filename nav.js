// nav.js — gedeeld script voor alle pagina's
document.addEventListener('DOMContentLoaded', () => {

  // Hamburger menu
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Actieve pagina markeren
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Taalknop actief markeren
  const isEN = page.includes('_en');
  document.querySelectorAll('.nav-lang a').forEach(a => {
    if (isEN  && a.dataset.lang === 'en') a.classList.add('active');
    if (!isEN && a.dataset.lang === 'nl') a.classList.add('active');
  });

  // Skill bars animeren zodra ze zichtbaar zijn
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width + '%';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-fill').forEach(el => observer.observe(el));

});
