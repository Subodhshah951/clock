function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeDisplay = document.getElementById('time');
    timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;
    console.log(timeDisplay.innerText)
}


// Update the time every second
setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours > 12) {
        hours = hours - 12;
        day_night = "PM";
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
}, 1000);

// Call updateTime immediately to display the time when the page loads
updateTime();