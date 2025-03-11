document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
    });
  
    // Carousel
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;
    function showNextImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }
    setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos
  });
  