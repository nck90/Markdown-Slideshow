// ppt/models/slideshow.js
import Slide from './slide.js';

export default class SlideShow {
    constructor(slidesData) {
        this.slides = slidesData.map((content, index) => new Slide(content, index));
    }

    getSlides() {
        return this.slides;
    }

    getSlide(index) {
        return this.slides[index];
    }

    getSlideCount() {
        return this.slides.length;
    }
}