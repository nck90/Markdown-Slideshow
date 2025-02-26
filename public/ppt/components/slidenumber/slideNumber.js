// ppt/components/slidenumber/slideNumber.js
export function displaySlideNumber(current, total) {
    const counter = document.getElementById('slide-counter');
    counter.textContent = `${current + 1} / ${total}`;
}