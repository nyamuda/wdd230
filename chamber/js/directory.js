let cardIcon = document.getElementById("card-icon");
let listIcon = document.getElementById("list-icon");
let cardContainer = document.getElementById("card");
let listContainer = document.getElementById("list");


cardIcon.addEventListener('click', () => {
    cardContainer.style.display = "grid";
    listContainer.style.display = "none"
})

listIcon.addEventListener('click', () => {
    cardContainer.style.display = "none";
    listContainer.style.display = "block"

})