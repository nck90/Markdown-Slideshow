// ppt/models/slide.js
export default class Slide {
    constructor(content) {
        this.content = content;
    }

    render() {
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        slideElement.innerHTML = this.content;
        return slideElement;
    }
}