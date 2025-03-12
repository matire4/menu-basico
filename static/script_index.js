document.addEventListener("DOMContentLoaded", function() {
  // Dark Mode: se aplica al elemento <html>
  const darkModeToggle = document.getElementById("darkModeToggle");
  
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark-mode');
    darkModeToggle.textContent = "Modo Claro";
  }

  darkModeToggle.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.documentElement.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
    localStorage.setItem("darkMode", document.documentElement.classList.contains("dark-mode") ? "enabled" : "disabled");
  });

  // Carousel
  const carousel = document.querySelector('.carousel');
  const carouselContainer = document.querySelector('.carousel-container');

  if (carousel && carouselContainer) {
    const slides = carousel.querySelectorAll(".carousel-item");
    const dots = carouselContainer.querySelectorAll(".dot");
    let currentIndex = 0;
    
    function updateDots(index) {
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[index]) {
        dots[index].classList.add("active");
      }
    }
    
    function showNextImage() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
      updateDots(currentIndex);
    }

    // Cambio automático cada 4 segundos
    setInterval(showNextImage, 4000);

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
      currentIndex = index;
      updateDots(index);
    }

    const prevBtn = carouselContainer.querySelector(".prev");
    const nextBtn = carouselContainer.querySelector(".next");

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", function() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = slides.length - 1;
        }
        showSlide(newIndex);
      });

      nextBtn.addEventListener("click", function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
          newIndex = 0;
        }
        showSlide(newIndex);
      });
    }

    dots.forEach(dot => {
      dot.addEventListener("click", function() {
        const index = parseInt(this.getAttribute("data-index"));
        showSlide(index);
      });
    });
  }
});
