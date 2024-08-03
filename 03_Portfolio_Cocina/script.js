// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.getBoundingClientRect().top;
        const startTime = performance.now();
        const duration = 800; // Duración del scroll en milisegundos

        function scrollStep(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            window.scrollTo(0, startPosition + targetPosition * progress);

            if (elapsed < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    });
});

