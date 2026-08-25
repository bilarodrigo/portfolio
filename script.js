// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const menu = nav.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menu.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slider do hero
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopSlider();
        showSlide(parseInt(dot.dataset.slide));
        startSlider();
    });
});

startSlider();

// Pausar slider ao passar o mouse
const hero = document.querySelector('.hero');
hero.addEventListener('mouseenter', stopSlider);
hero.addEventListener('mouseleave', startSlider);

// Animação de números (stats)
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    const statsSection = document.querySelector('.stats');
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        statsAnimated = true;
        statNumbers.forEach(number => {
            const target = parseInt(number.dataset.target);
            const duration = 2000;
            const startTime = performance.now();
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                number.textContent = Math.floor(progress * target);
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    number.textContent = target;
                }
            }
            requestAnimationFrame(update);
        });
    }
}

window.addEventListener('scroll', animateStats);

// Scroll spy - destacar link ativo no menu
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Form submit
const form = document.getElementById('contatoForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'ENVIANDO...';
    btn.disabled = true;
    form.submit();
});

// Ano atual no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animação de scroll reveal
const revealElements = document.querySelectorAll('.servico-card, .portfolio-card, .sobre-card, .contato-item, .formacao-item, .formacao-list li');
revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));
