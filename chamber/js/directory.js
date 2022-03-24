let cardIcon = document.getElementById("card-icon");
let listIcon = document.getElementById("list-icon");
let cardContainer = document.getElementById("card");
let listContainer = document.getElementById("list");
let theTable = document.getElementById("table");


cardIcon.addEventListener('click', () => {
    cardContainer.style.display = "grid";
    listContainer.style.display = "none"
})

listIcon.addEventListener('click', () => {
    cardContainer.style.display = "none";
    listContainer.style.display = "block"

})


fetch("https://raw.githubusercontent.com/pnyamuda/wdd230/main/chamber/data.json")
    .then(response => {
        return response.json()
    }).then(info => {
        info.data.forEach(element => {
            //CARD CREATION
            let card = document.createElement("div");
            card.classList.add("card");
            let image = document.createElement("img");
            image.classList.add("card-img");
            image.src = element.img;
            image.alt = "logo"
            let address = document.createElement("p");
            address.classList.add("card-address");
            address.innerHTML = element.address;
            let phone = document.createElement("p");
            phone.classList.add("card-phone");
            phone.innerHTML = element.phone
            let websiteLink = document.createElement("a");
            websiteLink.classList.add("card-website");
            websiteLink.setAttribute("href", element.website);
            websiteLink.innerHTML = element.website;
            let websiteContainer = document.createElement("p");
            websiteContainer.appendChild(websiteLink);


            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(websiteContainer);

            cardContainer.appendChild(card);



            //LIST CREATION

            let tableRow = document.createElement("tr");
            let tableDataName = document.createElement("td");
            tableDataName.innerHTML = element.name;
            let tableDataAddress = document.createElement("td");
            tableDataAddress.innerHTML = element.address;
            let tableDataPhone = document.createElement("td");
            tableDataPhone.innerHTML = element.phone;
            let tableDataWebsite = document.createElement("td");
            let link = document.createElement("a");
            link.innerHTML = element.website;
            link.setAttribute("href", element.website);
            tableDataWebsite.appendChild(link);

            tableRow.appendChild(tableDataName);
            tableRow.appendChild(tableDataAddress);
            tableRow.appendChild(tableDataPhone);
            tableRow.appendChild(tableDataWebsite);

            theTable.appendChild(tableRow);






        });
    })