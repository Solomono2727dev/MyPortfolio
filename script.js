<<<<<<< HEAD
// Contact Form Submission
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = "Thanks! Your message has been sent.";
    formMessage.style.color = "#f0a500";
    form.reset();
});

// Optional: Smooth scroll offset for sticky navbar
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const offset = 70; // navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const targetRect = target.getBoundingClientRect().top;
        const targetPosition = targetRect - bodyRect - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
=======
// Contact form
const form = document.getElementById('contactForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.textContent = "Thank you! Your message has been sent.";
    form.reset();
});
>>>>>>> a510667e36bf9fe7f4c4f84d6a06cc6b129a844c
