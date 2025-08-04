const createListButton = document.getElementById('createListButton');
const listConstainer = document.getElementById('listContainer');

createListButton.addEventListener('click', createList)

function createList() {
    let listName = prompt("Enter the name of the new list:");
    if (listName) {
        let newList = document.createElement('div');
        newList.className = 'todo-list';
        listConstainer.appendChild(newList);
        let listTitle = document.createElement('h2');
        listTitle.textContent = listName;
        newList.appendChild(listTitle);
        let listItems = document.createElement('ul');
        newList.appendChild(listItems);
        let createListItemButton = document.createElement('button');
        createListItemButton.textContent = "Add Item";
        createListItemButton.addEventListener('click', function() {
            let itemName = prompt("Enter the name of the item:");
            if (itemName) {
                let newItem = document.createElement('li');
                newItem.textContent = itemName;
                listItems.appendChild(newItem);
            } else {
                alert("Item name cannot be empty.");
            }
        });
        newList.appendChild(createListItemButton);
        let deleteListButton = document.createElement('button');
        deleteListButton.textContent = "Delete List";
        deleteListButton.addEventListener('click', function() {
            if (confirm("Are you sure you want to delete this list?")) {
                listConstainer.removeChild(newList);
            }  else {
                alert("List deletion cancelled.");
            }
        });
        newList.appendChild(deleteListButton);
    } else {
        alert("List name cannot be empty.");
    }
}