let counterEl = document.getElementById('timePassed');

let facts = [
        "Russia has invaded Ukraine",
        "Texas enacted a law to ban abortion after 6 weeks of gestation"
]

function myFunc() {
    let time = Date.now() - 1617914597267;
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let moonOrbitsApprox = (days / 27.32).toFixed(2)
    
    counterEl.innerText = `Time Taco has spent waiting for a suppressor...
    Days: ${days}
    Hours: ${hours} 
    Minutes: ${minutes} 
    Seconds: ${seconds}
    
    Fun Facts:
    Since then the moon has orbited earth about ${moonOrbitsApprox} times.
    `;
}

setInterval(myFunc, 1000);
