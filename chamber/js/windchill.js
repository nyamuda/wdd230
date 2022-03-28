const speedKilo = document.getElementById("speed");
const tempDegree = document.getElementById("temp");
let windChill = document.getElementById("wind-chill");
let icon = document.getElementById("icon");
let weatherStatus = document.getElementById("weather-status");


let lat = -33.9258;
let lon = 18.4232;
let theTemperature = 0;
let theSpeed = 0;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1d7ae8851fb29af1d3925be1c9bb900&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        theTemperature = Math.floor(Number(data.main.temp));
        theSpeed = Number(data.wind.speed);
        weatherStatus.innerHTML = data.weather[0].main;
        speedKilo.innerHTML = theSpeed;
        tempDegree.innerHTML = theTemperature;
        icon.src = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    })



//converting degrees to fahrenheit
let tempFah = (theTemperature * 9 / 5) + 32;
//kilometers per hour to miles per hour
let speedMile = theSpeed / 1609





if (tempFah <= 50 && speedMile > 3) {
    let windChill = 35.74 + (0.6215 * tempFah) - (35.75 * Math.pow(speedMile, 0.16)) + (0.4275 * tempFah * Math.pow(speedMile, 0.16));
    windChill.innerHTML = windChill;
} else {
    windChill.innerHTML = "N/A"
}