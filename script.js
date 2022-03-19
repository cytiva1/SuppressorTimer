let counterEl = document.getElementById('timePassed');

function myFunc() {
    let time = Date.now() - 1617914597267;
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    // setTimeout(() => {
    //     myFunc();
    // }, 1000)
    counterEl.innerText = `Time Taco has spent waiting for a Suppressor calculated in.....
    Days: ${days}
    Hours: ${hours} 
    Minutes: ${minutes} 
    Seconds: ${seconds}`;
}

setInterval(myFunc, 1000);
