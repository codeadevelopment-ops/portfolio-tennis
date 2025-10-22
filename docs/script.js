// ===== BURGER MENU =====
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ===== CAROUSEL ÉVÉNEMENTS =====
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
});

showSlide(slideIndex);

// ===== TESTIMONIALS CAROUSEL =====
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((t) => t.classList.remove('active'));
    testimonials[index].classList.add('active');
}

function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
}

showTestimonial(testimonialIndex);
setInterval(nextTestimonial, 5000); // auto-slide every 5s
