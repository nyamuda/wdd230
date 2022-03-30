let spotlightsContainer = document.getElementById("spotlights-container");

let randomNum = val => Math.floor(Math.random() * val);



let createCard = (company, container) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let image = document.createElement("img");
    image.classList.add("card-img");
    image.src = company.img;
    image.alt = "logo"
    let address = document.createElement("p");
    address.classList.add("card-address");
    address.innerHTML = company.address;
    let phone = document.createElement("p");
    phone.classList.add("card-phone");
    phone.innerHTML = company.phone
    let websiteLink = document.createElement("a");
    websiteLink.classList.add("card-website");
    websiteLink.setAttribute("href", company.website);
    websiteLink.innerHTML = company.website;
    let websiteContainer = document.createElement("p");
    websiteContainer.appendChild(websiteLink);


    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(websiteContainer);

    container.appendChild(card);

}


let createList = (company) => {

    let tableRow = document.createElement("tr");
    let tableDataName = document.createElement("td");
    tableDataName.innerHTML = company.name;
    let tableDataAddress = document.createElement("td");
    tableDataAddress.innerHTML = company.address;
    let tableDataPhone = document.createElement("td");
    tableDataPhone.innerHTML = company.phone;
    let tableDataWebsite = document.createElement("td");
    let link = document.createElement("a");
    link.innerHTML = company.website;
    link.setAttribute("href", company.website);
    tableDataWebsite.appendChild(link);

    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataAddress);
    tableRow.appendChild(tableDataPhone);
    tableRow.appendChild(tableDataWebsite);

    theTable.appendChild(tableRow);

}







fetch("https://raw.githubusercontent.com/pnyamuda/wdd230/main/chamber/data.json")
    .then(response => {
        return response.json()
    }).then(info => {
        //gathering three  random elements from the data
        //the elements are for use in the home page- spotlight;
        let randomCompanies = [];
        let length = info.data.length;
        for (let i = 0; i < 3; i++) {
            randomCompanies.push(info.data[randomNum(length)])
        }
        console.log(randomCompanies);
        //creating cards for only three companies

        randomCompanies.forEach((val, indx) => {
            //creating the spotlight container first
            let spotlightContainer = document.createElement('div');
            spotlightContainer.classList.add(`spotlight${indx+1}`);
            //now creating the spotlight---the card
            createCard(val, spotlightContainer);

            spotlightsContainer.appendChild(spotlightContainer);

        })
    })