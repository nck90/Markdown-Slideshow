// ppt/controllers/defaultController.js
import SlideController from '../models/slideshow/navigation.js';
import { handleKeyboardInput } from './inputs/keyboard.js';

export default class DefaultController {
    constructor(slides) {
        this.controller = new SlideController(slides);
        this.setupInputHandlers();
    }

    setupInputHandlers() {
        document.addEventListener('keydown', (event) => {
            handleKeyboardInput(event, this.controller);
        });
    }
}