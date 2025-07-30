document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav');
  const btn = document.querySelector('.nav-toggle');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});

// Scroll fade-in animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.service-card, .features-list li').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) el.classList.add('visible');
  });
});