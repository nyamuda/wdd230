let menu = document.getElementsByClassName('mobile-menu')
let links = document.getElementsByClassName('mobile-links')
let lastModified1 = document.querySelector("#last-modified1");
let lastModified2 = document.querySelector("#last-modified2");
let currentYear = document.querySelector("#current-year");
let display = false




lastModified1.innerHTML = document.lastModified;
lastModified2.innerHTML = document.lastModified;
let today = new Date()
currentYear.innerHTML = today.toUTCString()





menu[0].onclick = () => {
    links[0].style.display = (!display) ? "flex" : "none"
    display = !display
}