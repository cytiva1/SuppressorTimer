let counterEl = document.getElementById('timePassed');

function myFunc() {
    let time = Date.now() - 1617914597267;
    let seconds = Math.floor(time / 1000).toLocaleString();
    let minutes = Math.floor(seconds / 60).toLocaleString();
    let hours = Math.floor(minutes / 60).toLocaleString();
    let days = (hours / 24).toFixed(2).toLocaleString();
    let moonOrbitsApprox = (days / 27.32).toLocaleString();
    
    counterEl.innerText = `Time Taco has spent waiting for a suppressor...
    Days: ${days}
    Hours: ${hours} 
    Minutes: ${minutes} 
    Seconds: ${seconds}
    `;
}

setInterval(myFunc, 1000);
