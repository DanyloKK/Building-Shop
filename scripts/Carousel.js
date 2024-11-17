const slides = document.querySelector(".testimonial-carousel");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

function goToNextSlide() {
    let currentSlide = document.querySelector(".testimonial-slide.active");
    let nextSlide = currentSlide.nextElementSibling;
    if(nextSlide){
        currentSlide.classList.remove("active");
        nextSlide.classList.add("active");
    }
}

function goToPrevSlide() {
    let currentSlide = document.querySelector(".testimonial-slide.active");
    let prevSlide = currentSlide.previousElementSibling;
    if(prevSlide){
        currentSlide.classList.remove("active");
        prevSlide.classList.add("active");
    }
}

nextButton.addEventListener("click",goToNextSlide);
prevButton.addEventListener("click",goToPrevSlide);