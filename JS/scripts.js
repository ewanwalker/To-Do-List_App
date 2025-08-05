const createListButton = document.getElementById('createListButton');
const listConstainer = document.getElementById('listContainer');

createListButton.addEventListener('click', createList)

function createList() {
    let newList = document.createElement('div');
    newList.className = 'todo-list';
    newList.id = 'todo-list-' + Date.now(); // Unique ID for each list
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
    
    let newX = 0;
    let newY = 0;
    newList.style.position = 'absolute';
    newList.style.left = newList.newX + 'px';
    newList.style.top = newList.newY + 'px';
    newList.addEventListener('mousedown', function(event) {
        newList.newX = event.clientX - newList.offsetLeft;
        newList.newY = event.clientY - newList.offsetTop;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }); 
    
    function onMouseMove(event) {
        newList.style.left = (event.clientX - newList.newX) + 'px';
        newList.style.top = (event.clientY - newList.newY) + 'px';     
    }
    
    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}

