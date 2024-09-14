// ppt/views/slideView.js
export function displaySlide(slide) {
    const slideElement = document.getElementById('slideshow');
    slideElement.innerHTML = '';
    slideElement.appendChild(slide.render());
}