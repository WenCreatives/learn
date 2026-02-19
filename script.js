// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// CTA button click
const ctaBtn = document.getElementById('cta-btn');
const messageEl = document.getElementById('message');
const messages = [
  'Hello!',
  'You clicked me.',
  'Have a nice day!',
  'Thanks for visiting.',
];
let messageIndex = 0;

ctaBtn.addEventListener('click', () => {
  messageEl.textContent = messages[messageIndex % messages.length];
  messageIndex++;
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form submit
const form = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  formFeedback.textContent = `Thanks, ${name}! We'll be in touch at ${email}.`;
  formFeedback.style.color = 'var(--accent)';
  form.reset();
});
