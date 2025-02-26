// ppt/controllers/inputs/touch.js
export function handleTouchInput(controller) {
    document.addEventListener('touchstart', (event) => {
        if (event.touches.length > 1) return; 
        controller.nextSlide();
    });
}

export function handleSwipeInput(controller) {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        if (touchEndX < touchStartX) {
            controller.nextSlide();
        } else if (touchEndX > touchStartX) {
            controller.previousSlide();
        }
    });
}