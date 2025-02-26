// ppt/controllers/inputs/keyboard.js
export function handleKeyboardInput(event, controller) {
    if (event.key === 'ArrowRight' || event.key === ' ') {
        controller.nextSlide();
    } else if (event.key === 'ArrowLeft') {
        controller.previousSlide();
    }
}