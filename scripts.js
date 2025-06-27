const todoInput = document.getElementById('todo-input')
const addButton = document.getElementById('add-button')
const listItemContainer = document.getElementById('list-item-contianer')

addButton.addEventListener('click', ()=>{

    //get values from input
    const value = todoInput.value;
    console.log(value)

    //here list item is created but not yet appended
    const li = document.createElement('li')
    li.innerHTML = value

    //appending list items
    listItemContainer.appendChild(li)

    //clearing the input box
    todoInput.value = ''

    //list item with buttons
    const delButton = document.createElement('button')
    delButton.innerHTML = 'X'

    li.appendChild(delButton)

    //delete functionality
    delButton.addEventListener('click', () => {
        li.remove()
    })
})