const speedKilo = Number(document.getElementById("speed").innerText);
const tempDegree = Number(document.getElementById("temp").innerText);
let windChill = document.getElementById("wind-chill");

//converting degrees to fahrenheit
let tempFah = (tempDegree * 9 / 5) + 32;
//kilometers per hour to miles per hour
let speedMile = speedKilo / 1609


if (tempFah <= 50 && speedMile > 3) {
    let windChill = 35.74 + (0.6215 * tempFah) - (35.75 * Math.pow(speedMile, 0.16)) + (0.4275 * tempFah * Math.pow(speedMile, 0.16));
    windChill.innerHTML = windChill;
} else {
    windChill.innerHTML = "N/A"
}