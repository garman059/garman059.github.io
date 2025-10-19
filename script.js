// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = modeToggle.querySelector('i');

modeToggle.addEventListener('click', function() {
    // Check current mode and switch to the opposite
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
});

// Music Toggle
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isPlaying = false;

musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        backgroundMusic.pause();
        isPlaying = false;
    } else {
        backgroundMusic.play();
        isPlaying = true;
    }
});

// Language Card Flip
const englishCard = document.getElementById('english-card');
const frenchCard = document.getElementById('french-card');
const spanishCard = document.getElementById('spanish-card');

englishCard.addEventListener('click', function() {
    this.classList.toggle('flipped');
});

frenchCard.addEventListener('click', function() {
    this.classList.toggle('flipped');
});

spanishCard.addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});