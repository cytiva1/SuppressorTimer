let counterEl = document.getElementById('timePassed');

let d = new Date('April 8, 2022 20:17:40 GMT+00:00');
let time = d.getTime() - 1617914597267;
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
