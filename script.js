// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ANIMASI MUNCUL SAAT SCROLL
const elements = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));


// ACTIVE NAVBAR
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.borderBottom = "2px solid white";
  }
});


// SCROLL SHADOW NAVBAR
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    nav.style.boxShadow = "none";
  }
});
