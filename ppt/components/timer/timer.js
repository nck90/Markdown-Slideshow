// ppt/components/timer/timer.js
export function startTimer(duration, callback) {
    let time = duration;
    const intervalId = setInterval(() => {
        time--;
        callback(time);
        if (time <= 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}