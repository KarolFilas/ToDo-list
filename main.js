let todoInput, errorInfo, addBtn, ulList, newTodo, newTool,
    popup, popupInfo, todoToEdit,
    popupInput, popupAddBtn, popupCloseBtn;


const main = () => {
    // wywyłouje nasze funkcje
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    // pobieramy wszystkie elementy
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')

}

const prepareDOMEvents = () => {
    // nadajemy nasłuchiwanie 
    addBtn.addEventListener('click', addNewTodo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value
        console.log(newTodo);
        createToolsArea()

        ulList.append(newTodo)
        todoInput.value = ''
        errorInfo.textContent = ''

    } else {
        errorInfo.textContent = 'Wpisz treśc zadania!'
    }
}

const createToolsArea = () => {

    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
    if (e.target.matches('.complete')) {
        console.log('completed');
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed')

    } else if (e.target.matches('.edit')) {
        editTodo(e);

    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = 'flex';
}

const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        closePopup()
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!'
    }
}

const deleteTodo = (e) => {

}







document.addEventListener('DOMContentLoaded', main)
