let isRunning = false;

function startDetection() {
    if (!isRunning) {
        document.getElementById("status").innerText = "Starting...";
        isRunning = true;
    }
}

function stopDetection() {
    if (isRunning) {
        document.getElementById("status").innerText = "Stopped.";
        isRunning = false;
    }
}
