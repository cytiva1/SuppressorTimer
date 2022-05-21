let counterEl = document.getElementById('timePassed');

let d = new Date('May 18, 22 12:29:00 GMT+00:00');

function updateTime() = {
  let now = new Date();
  let time = now.getTime() - d.getTime() ;
  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = (hours / 24).toFixed(2);
  let moonOrbitsApprox = (days / 27.32);

  counterEl.innerText = `Taco waited this long for his suppressors...
  Days: ${days.toLocaleString()}
  Hours: ${hours.toLocaleString()} 
  Minutes: ${minutes.toLocaleString()} 
  Seconds: ${seconds.toLocaleString()}
  `;
}

while(true){
  setInterval(
    updateTime();
  }, 1000)
}
