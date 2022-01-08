let lastModified = document.querySelector("#last-modified");
let currentYear = document.querySelector("#current-year");

lastModified.innerHTML = document.lastModified;
currentYear.innerHTML = new Date().getFullYear();