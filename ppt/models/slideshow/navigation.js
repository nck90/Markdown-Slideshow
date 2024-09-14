// ppt/models/slideshow/navigation.js
export default class SlideController {
    constructor(slides) {
        this.slides = slides;
        this.currentSlideIndex = 0;
        this.updateSlide();
    }

    nextSlide() {
        if (this.currentSlideIndex < this.slides.length - 1) {
            this.currentSlideIndex++;
            this.updateSlide();
        }
    }

    previousSlide() {
        if (this.currentSlideIndex > 0) {
            this.currentSlideIndex--;
            this.updateSlide();
        }
    }

    updateSlide() {
        const currentSlide = this.slides[this.currentSlideIndex];
        document.getElementById('slideshow').innerHTML = currentSlide.render().outerHTML;
    }
}