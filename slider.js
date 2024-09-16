// Automatic slider (e.g., for .slider-wrapper)
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-wrapper .slide');
    const navDots = document.querySelectorAll('.slider-nav a');
    let currentIndex = 0;
    const slideInterval = 3000; // Time between slides in milliseconds

    function goToSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
            navDots[i].classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }

    // Set interval to automatically go to the next slide
    setInterval(nextSlide, slideInterval);

    // Set up navigation dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(index);
        });
    });

    // Initial setup
    goToSlide(currentIndex);
});
