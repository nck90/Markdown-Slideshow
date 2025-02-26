import SlideShow from '../models/slideshow.js';
import { displaySlide } from './slideView.js';
import DefaultController from '../controllers/defaultController.js';
import { displaySlideNumber } from '../components/slidenumber/slideNumber.js';

export default class SlideShowView {
    constructor(markdownContent) {
        this.slideshow = new SlideShow(this.parseSlides(markdownContent));
        this.controller = new DefaultController(this.slideshow.getSlides());
        this.init();
    }

    parseSlides(markdown) {
        return markdown.split('---').map(slide => slide.trim());
    }

    init() {
        const totalSlides = this.slideshow.getSlideCount();
        document.addEventListener('slideChange', (event) => {
            const currentSlide = event.detail;
            displaySlide(currentSlide);
            displaySlideNumber(this.controller.controller.currentSlideIndex, totalSlides);
        });
    }
}