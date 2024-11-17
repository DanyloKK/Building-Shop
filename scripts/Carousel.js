const slides = document.querySelector(".testimonial-carousel");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
let currentIndex = 0;
const slide = document.querySelectorAll(".testimonial-slide")

function hideArrow() {
  const firstSlide = document.querySelector(".testimonial-slide:first-of-type");
  const lastSlide = document.querySelector(".testimonial-slide:last-of-type");
  let currentSlide = document.querySelector(".testimonial-slide.active");
  if(currentSlide === firstSlide){
      prevButton.classList.add("arrow-hide")
  }else{
      prevButton.classList.remove("arrow-hide")
  }
  if(currentSlide === lastSlide){
      nextButton.classList.add("arrow-hide")
  }else{
      nextButton.classList.remove("arrow-hide")
  }

}

function goToNextSlide() {
    let currentSlide = document.querySelector(".testimonial-slide.active");
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
        currentSlide.classList.remove("active");
        nextSlide.classList.add("active");
    }
    hideArrow();
}

function goToPrevSlide() {
    let currentSlide = document.querySelector(".testimonial-slide.active");
    let prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
        currentSlide.classList.remove("active");
        prevSlide.classList.add("active");
    }
    hideArrow();
}

nextButton.addEventListener("click", goToNextSlide);
prevButton.addEventListener("click", goToPrevSlide);