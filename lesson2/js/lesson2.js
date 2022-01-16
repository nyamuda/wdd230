let lastModified2 = document.querySelector("#last-modified2");
let currentYear2 = document.querySelector("#current-year2");

lastModified2.innerHTML = document.lastModified;
currentYear2.innerHTML = new Date().getFullYear();