let todoInput, errorInfo, addBtn, ulList, newTodo, newTool,
    newBtn1, newBtn2, newBtn3,
    iElement1, iElement2;

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    addBtn.addEventListener('click', createToolsArea)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)

        todoInput.value = ''
        errorInfo.textContent = ''

    } else {
        errorInfo.textContent = 'Wpisz treśc zadania!'
    }
}

const createToolsArea = () => {
    newTool = document.createElement('div')
    newTool.classList.add("tools")
    newTodo.append(newTool)

    newBtn1 = document.createElement('button')
    newBtn1.classList.add("complete")
    newTool.append(newBtn1)
    iElement1 = document.createElement('i')
    iElement1.classList.add('fas')
    iElement1.classList.add('fa-check')
    newBtn1.append(iElement1)

    newBtn2 = document.createElement('button')
    newBtn2.classList.add("edit")
    newBtn2.textContent = 'EDIT'
    newTool.append(newBtn2)

    newBtn3 = document.createElement('button')
    newBtn3.classList.add("delete")
    newTool.append(newBtn3)
    iElement2 = document.createElement('i')
    iElement2.classList.add('fas')
    iElement2.classList.add('fa-times')
    newBtn3.append(iElement2)
}


document.addEventListener('DOMContentLoaded', main)









// const input = document.querySelector('.todo-input') // input
// const addBtn = document.querySelector('.btn-add') // add buton
// const taskList = document.querySelector('.todolist') // div with all tasks
// const errorInfo = document.querySelector('.error-info')
// const completeBtn = document.querySelector('.fa-check')
// const editBtn = document.querySelector('.edit')
// const toolsBtn = document.querySelector('.tools') // tools buttons like check
// const ulList = document.querySelector("ul");
// const newDiv = toolsBtn.outerHTML
// const deleteBtn = document.querySelectorAll('.delete')


// let li2 = []
// let li

// const addTask = () => {
//     li = document.createElement('li');
//     ulList.append(li)
//     li.innerHTML = input.value + newDiv

// }

// let listtt = Array.prototype.slice.call(document.querySelectorAll('.delete'));
// console.log(listtt[0]);

// // console.log(li);
// // console.log(deleteBtn);

// for (let i = 0; i < deleteBtn.length; i++) {
//     deleteBtn[i].addEventListener('click', function () {
//         let closestLi = deleteBtn[i].parentElement.parentElement;
//         closestLi.remove()
//         console.log(deleteBtn[i]);
//     })
// }

// addBtn.addEventListener('click', addTask)

