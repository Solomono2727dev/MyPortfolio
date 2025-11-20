// Contact form
const form = document.getElementById('contactForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.textContent = "Thank you! Your message has been sent.";
    form.reset();
});
