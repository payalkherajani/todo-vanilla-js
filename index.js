const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)


//functions

function addTodo(e){
  e.preventDefault()  //prevent form from submitting
 
  //create div
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  //create li
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)

  //checkmark
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completedButton.classList.add("complete-btn")
  todoDiv.appendChild(completedButton)

  //delete button

  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add("trash-btn")
  todoDiv.appendChild(trashButton)


  //attach todo div to ul
  todoList.appendChild(todoDiv)
  //todo input clear
  todoInput.value = ""
}

function deleteCheck(e) {
   const item = e.target

   if(item.classList[0] === 'trash-btn'){
            const parentOfTrash = item.parentElement
            //Animation
            parentOfTrash.classList.add('fall')
            parentOfTrash.addEventListener('transitionend', function(){
              parentOfTrash.remove()
            })
       
   }

   else if (item.classList[0] === "complete-btn"){
    const parentOfComplete = item.parentElement
    parentOfComplete.classList.toggle('completed')

   }
}