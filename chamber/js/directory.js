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


fetch("https://github.com/pnyamuda/wdd230/blob/main/chamber/data.json", {
        mode: 'no-cors'
    })
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    })