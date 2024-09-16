// Manual slider bar (e.g., for .slider1-container)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider1-container .slide1');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const offset = -currentSlide * 100;
    document.querySelector('.slider1').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
