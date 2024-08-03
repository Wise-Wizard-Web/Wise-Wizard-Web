///////////////// banner

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
  
    function showSlide(index) {
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }
  
    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
  
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            showSlide(index);
        });
    });
  
    // Cambiar de imagen automáticamente cada 3 segundos
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 4000);
  
    // Inicializar el slider
    showSlide(currentIndex);
  });