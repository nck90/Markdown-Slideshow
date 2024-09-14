// ppt/controllers/inputs/location.js
export function trackLocationChange(callback) {
    window.addEventListener('popstate', () => {
        callback(window.location.hash);
    });
}

export function changeLocation(hash) {
    window.history.pushState({}, '', hash);
}