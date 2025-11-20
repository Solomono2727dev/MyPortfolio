// Smooth scroll for navbar links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const offset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const targetRect = target.getBoundingClientRect().top;
        const targetPosition = targetRect - bodyRect - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
});

// Typewriter effect
const typewriterText = ["Web Developer", "Designer", "Creative Coder"];
let i = 0, j = 0;
let currentText = '';
let isDeleting = false;
const typewriterElement = document.querySelector('.typewriter');

function type() {
    if (!typewriterElement) return;
    if (i >= typewriterText.length) i = 0;
    const fullText = typewriterText[i];
    if (isDeleting) {
        currentText = fullText.substring(0, j--);
    } else {
        currentText = fullText.substring(0, j++);
    }
    typewriterElement.textContent = currentText;
    if (!isDeleting && j === fullText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && j === -1) {
        isDeleting = false;
        i++;
        j = 0;
        setTimeout(type, 500);
    } else {
        setTimeout(type, 150);
    }
}
type();

// Light/Dark mode toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
