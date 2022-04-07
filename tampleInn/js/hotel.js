let join = () => window.location.href = "reservation.html";


let menu = document.getElementsByClassName('mobile-menu')

let links = document.getElementsByClassName('mobile-links')
let display = false



menu[0].onclick = () => {
    links[0].style.display = (!display) ? "flex" : "none"
    display = !display
}