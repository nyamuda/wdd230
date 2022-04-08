let cardContainer = document.getElementById("card");











let createCard = (company, container) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let address = document.createElement("p");
    address.classList.add("card-address");
    let span1 = '<span style="font-weight:bold">Address:</span>'
    address.innerHTML = `${span1} ${company.address}`;
    let phone = document.createElement("p");
    phone.classList.add("card-phone");
    let span2 = '<span style="font-weight:bold">Phone:</span>'
    phone.innerHTML = `${span2} ${company.telephone}`
    let name = document.createElement("p")
    name.classList.add("temple-name")
    name.innerHTML = company.name;

    let figure = document.createElement("figure");
    let figCaption = document.createElement("figcaption");
    figCaption.innerHTML = "Temple closure schedule"
    let list = document.createElement("ul");

    company.temple_closure.forEach(val => {
        let listItem = document.createElement("li");
        listItem.innerHTML = val;
        list.appendChild(listItem);
    })

    figure.appendChild(figCaption)
    figure.appendChild(list)



    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(figure);

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


fetch("https://raw.githubusercontent.com/pnyamuda/wdd230/main/tampleInn/temple.json")
    .then(response => {
        return response.json()
    }).then(info => {
        //creating cards for all companies;
        info.forEach(element => {
            //CARD CREATION
            createCard(element, cardContainer);






        });
    })