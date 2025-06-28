//when i click add
// stores my input in an array
// now the array must be stored locally

//make a function that runs on the startup and parses through my local storage to show me all the tasks

const taskInput = document.getElementById('task-input')
const addButton = document.getElementById('add-task-button')

const all_task = []

addButton.addEventListener('click', ()=>{

    const value = taskInput.value
    all_task.push(value)

    // console.log(all_task)

    localStorage.setItem('all task', all_task)
    
    const li = document.createElement('li')
    li.innerHTML = value

    const listItemContainer = document.getElementById('list-item-contianer')
    listItemContainer.append(li)

    taskInput.value = ' '
})



const showAllTaskButton = document.getElementById('show_all_task')
const allTaskContainer = document.getElementById('all-task-contianer')

showAllTaskButton.addEventListener('click', ()=>{

    const fetched_all_task_string = localStorage.getItem('all task')
    
    console.log(fetched_all_task_string)
    console.log(typeof(fetched_all_task_string))

    //removing white spaces
    const seperated_result = fetched_all_task_string.split(',')
    console.log(seperated_result)
    
    for(let i=0; i<seperated_result.length; i++){
        console.log(seperated_result[i])

        const li = document.createElement('li')
        li.innerHTML = seperated_result[i]

        allTaskContainer.appendChild(li)
    }
})
