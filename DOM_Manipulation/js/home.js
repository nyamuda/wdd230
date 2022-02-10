const input = document.getElementById('favchap');
const btn = document.getElementById('submit');
const list = document.getElementsByClassName('list');

const deleteItem = (event) => {
    list[0].removeChild(event.target.parentElement.parentElement);
    input.focus();
}


const addNewItems = () => {
    if (!!input.value) {
        let listItem = document.createElement('li');
        listItem.innerText = input.value;
        list[0].appendChild(listItem)
        let spanItem = document.createElement('span');
        let imgItem = document.createElement('img');
        imgItem.setAttribute('src', 'images/cross.png');
        imgItem.setAttribute('alt', 'icon');
        imgItem.setAttribute('onclick', 'deleteItem(event)');
        imgItem.classList.add('delete')
        spanItem.appendChild(imgItem);
        listItem.appendChild(spanItem);
        listItem.appendChild(spanItem);

        //cleaning up the input
        input.value = "";
        input.focus();

    }
}

//on key press
input.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        addNewItems();
    }
})

//on click
btn.addEventListener('click', () => {
    addNewItems();
})