function loadbody_header2_script(){
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.carousel-dot');
    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        index = (index + 1) % dots.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + dots.length) % dots.length;
        updateCarousel();
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
    });

    setInterval(nextSlide, 3000); // Auto Slide
};
