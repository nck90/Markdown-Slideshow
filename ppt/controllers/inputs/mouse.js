// ppt/controllers/inputs/mouse.js
export function handleMouseClick(controller) {
    document.addEventListener('click', () => {
        controller.nextSlide();
    });
}

export function handleMouseMovement(controller) {
    document.addEventListener('mousemove', (event) => {
        console.log('Mouse moved:', event.clientX, event.clientY);
    });
}