// ppt/models/slideshow/events.js
export function onSlideChange(callback) {
    document.addEventListener('slideChange', (event) => {
        callback(event.detail);
    });
}

export function triggerSlideChange(detail) {
    const event = new CustomEvent('slideChange', { detail });
    document.dispatchEvent(event);
}