let intervalId = null;
let elapsedTime = 0;

const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const datePicker = document.getElementById('date-picker');


const currentDate = new Date();
datePicker.valueAsDate = currentDate;


datePicker.addEventListener('keydown', (event) => {
    event.preventDefault(); 
});

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener('click', async () => {
    if (intervalId) return; 

    intervalId = await startTimer();
});


function startTimer() {
    return new Promise((resolve) => {
        intervalId = setInterval(() => {
            elapsedTime += 1000; 
            timeDisplay.textContent = formatTime(elapsedTime);
        }, 1000);
        resolve(intervalId);
    });
}

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; 
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; 
    elapsedTime = 0; 
    timeDisplay.textContent = formatTime(elapsedTime); 
});