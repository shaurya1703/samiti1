const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('joinForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', event => {
  if (form.action.includes('ADMIN_EMAIL_HERE')) {
    event.preventDefault();
    status.textContent = 'फॉर्म चालू करने के लिए व्यवस्थापक का ईमेल जोड़ना बाकी है।';
  } else {
    status.textContent = 'आवेदन भेजा जा रहा है…';
  }
});
