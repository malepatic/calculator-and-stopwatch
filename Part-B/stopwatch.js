let intervalId = null;
let elapsedTime = 0;
let running = false; 

const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const datePicker = document.getElementById('date-picker');


datePicker.valueAsDate = new Date();

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    return new Promise((resolve) => {
        // setInterval
        intervalId = setInterval(() => {
            elapsedTime += 1000; 
            timeDisplay.textContent = formatTime(elapsedTime); 
        }, 1000);
        resolve(); 
    });
}

// Async function 
async function handleStart() {
    if (running) return; 
    running = true; 
    await startTimer(); 
}

startButton.addEventListener('click', handleStart);

stopButton.addEventListener('click', () => {
    clearInterval(intervalId); 
    intervalId = null; 
    running = false; 
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId); 
    intervalId = null; 
    elapsedTime = 0; 
    timeDisplay.textContent = formatTime(elapsedTime); 
    running = false; 
});