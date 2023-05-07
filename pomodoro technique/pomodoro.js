let minutes = 25;
let seconds = 0;
let isRunning = false;
let intervalId;

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            stopTimer();
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    let minutesStr = minutes.toString();
    let secondsStr = seconds.toString();

    if (minutes < 10) {
        minutesStr = '0' + minutesStr;
    }
    if (seconds < 10) {
        secondsStr = '0' + secondsStr;
    }

    document.getElementById('minutes').innerText = minutesStr;
    document.getElementById('seconds').innerText = secondsStr;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(intervalId);
}

function resetTimer() {
    stopTimer();
    minutes = 25;
    seconds = 0;
    document.getElementById('minutes').innerText = '25';
    document.getElementById('seconds').innerText = '00';
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
