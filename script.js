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
