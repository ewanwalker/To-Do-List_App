const createListButton = document.getElementById('createListButton');
const listConstainer = document.getElementById('listContainer');

createListButton.addEventListener('click', createList)

function createList() {
    let newList = document.createElement('div');
    newList.className = 'todo-list';
    listConstainer.appendChild(newList);
    let listTitle = document.createElement('input');
    listTitle.placeholder = "List Title";
    listTitle.className = 'list-title';
    newList.appendChild(listTitle);
    let listItems = document.createElement('ul');
    newList.appendChild(listItems);
    let createListItemButton = document.createElement('button');
    createListItemButton.textContent = "Add Item";
    createListItemButton.addEventListener('click', function() {
        let newItem = document.createElement('input');
        newItem.placeholder = "New Item";
        newItem.className = 'list-item';
        listItems.appendChild(newItem);
    });
    newList.appendChild(createListItemButton);
    let deleteListButton = document.createElement('button');
    deleteListButton.textContent = "Delete List";
    deleteListButton.addEventListener('click', function() {
            listConstainer.removeChild(newList);
    });
    newList.appendChild(deleteListButton);
}