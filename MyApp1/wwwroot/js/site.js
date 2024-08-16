// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;

    function showSlide(n) {
        if (n >= totalSlides) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = n;
        }

        for (let i = 0; i < totalSlides; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlide].style.display = "block";
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    setInterval(nextSlide, 3000);
});
