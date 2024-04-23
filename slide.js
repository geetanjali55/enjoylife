const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex === 0) ? slider.children.length - 1 : slideIndex - 1;
    updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex === slider.children.length - 1) ? 0 : slideIndex + 1;
    updateSlidePosition();
});

function updateSlidePosition() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
