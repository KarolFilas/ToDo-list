const input = document.querySelector('.todo-input') // input
const addBtn = document.querySelector('.btn-add') // add buton
const taskList = document.querySelector('.todolist') // div with all tasks
const errorInfo = document.querySelector('.error-info')
const completeBtn = document.querySelector('.fa-check')
const editBtn = document.querySelector('.edit')
const toolsBtn = document.querySelector('.tools') // tools buttons like check
const ulList = document.querySelector("ul");
const newDiv = toolsBtn.outerHTML
const deleteBtn = document.querySelectorAll('.delete')



for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function () {
        let closestLi = deleteBtn[i].parentElement.parentElement;
        closestLi.remove()
    })
}

const addTask = () => {
    let li = document.createElement('li');
    ulList.append(li)
    li.innerHTML = input.value + newDiv
}

addBtn.addEventListener('click', addTask)

