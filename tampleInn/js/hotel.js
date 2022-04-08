let join = () => window.location.href = "reservation.html";
let lastModified1 = document.querySelector("#last-modified1");
let menu = document.getElementsByClassName('mobile-menu')

let links = document.getElementsByClassName('mobile-links')
let display = false


lastModified1.innerHTML = document.lastModified;
menu[0].onclick = () => {
    links[0].style.display = (!display) ? "flex" : "none"
    display = !display
}