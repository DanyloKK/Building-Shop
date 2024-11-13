const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function goToNextSlide() {
    let currentElement = document.querySelector('.testimonial.active');
    let nextElement = currentElement.nextElementSibling;

    // Если следующий элемент существует, перемещаемся к следующему слайду
    if (nextElement && nextElement.classList.contains('testimonial')) {
        currentElement.classList.remove('active');
        currentElement.classList.add('hidden');
        nextElement.classList.remove('hidden');
        nextElement.classList.add('active');
    } else {
        // Если мы на последнем слайде, возвращаемся к первому
        currentElement.classList.remove('active');
        currentElement.classList.add('hidden');
        const firstElement = document.querySelector('.testimonial');
        firstElement.classList.remove('hidden');
        firstElement.classList.add('active');
    }
}

function goToPrevSlide() {
    let currentElement = document.querySelector('.testimonial.active');
    let prevElement = currentElement.previousElementSibling;

    // Если предыдущий элемент существует, перемещаемся к предыдущему слайду
    if (prevElement && prevElement.classList.contains('testimonial')) {
        currentElement.classList.remove('active');
        currentElement.classList.add('hidden');
        prevElement.classList.remove('hidden');
        prevElement.classList.add('active');
    } else {
        // Если мы на первом слайде, возвращаемся к последнему
        currentElement.classList.remove('active');
        currentElement.classList.add('hidden');
        const lastElement = document.querySelector('.testimonial:last-child');
        lastElement.classList.remove('hidden');
        lastElement.classList.add('active');
    }
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);