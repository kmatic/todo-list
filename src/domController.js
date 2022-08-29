import { Project, allProjects } from './project';
import { addProject, deleteProject, createTodo, getActiveProject, deleteTodo, editTodo } from './logic';

// Add Project Modal Toggle

export function toggleProjectModal() {
    const projectModal = document.querySelector('.project-modal');
    projectModal.classList.add('show-modal');

    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Add todo modal toggle

export function toggleTodoModal() {
    const todoModal = document.querySelector('.todo-modal');
    todoModal.classList.add('show-modal');
    
    window.addEventListener('click', (e) => {
        if (e.target === todoModal) {
            closeTodoModal();
        }
    });
}

// edit todo modal toggle

function toggleEditModal() {
    const editModal = document.querySelector('.edit-modal');
    editModal.classList.add('show-modal');

    window.addEventListener('click', (e) =>{
        if (e.target === editModal) {
            closeEditModal();
        }
    })
}

// initialize project modal 

function initProjectModal() {
    const closeBtn = document.querySelectorAll('.close-button')[0];
    const submitProjectBtn = document.querySelector('#submit-project');
    const project = document.querySelector('#projectName');

    closeBtn.addEventListener('click', () => {
        closeProjectModal();
    });

    submitProjectBtn.addEventListener('click', (e) => {
        if (project.validity.valueMissing) {
            project.setCustomValidity('Please provide a project name');
            project.reportValidity();
            e.preventDefault();
            return false;
        }
        addProject();
        renderProjects();
        clearProjectModal();
        closeProjectModal();
    });
}

// initialize todo modal

function initTodoModal() {
    const closeBtn = document.querySelectorAll('.close-button')[1];
    const submitTodoBtn = document.querySelector('#submit-todo');
    const title = document.querySelector('#todoTitle');
    const date = document.querySelector('#todoDueDate');

    closeBtn.addEventListener('click', () => {
        closeTodoModal();
    });

    submitTodoBtn.addEventListener('click', (e) => {
        if (title.validity.valueMissing) {
            title.setCustomValidity('Please provide a task name');
            title.reportValidity();
            e.preventDefault();
            return false;
        } else if (date.validity.valueMissing) {
            date.setCustomValidity('Please provide a due date');
            date.reportValidity();
            e.preventDefault();
            return false;
        }
        createTodo();
        renderTodos();
        clearTodoModal();
        closeTodoModal();
    });
}

// initialize edit modal

function initEditModal() {
    const closeBtn = document.querySelectorAll('.close-button')[2];
    const editTodoBtn = document.querySelector('#edit-todo');
    const title = document.querySelector('#editTodoTitle');
    const date = document.querySelector('#editTodoDueDate');

    closeBtn.addEventListener('click', () => {
        closeEditModal();
    });

    editTodoBtn.addEventListener('click', (e) => {
        if (title.validity.valueMissing) {
            title.setCustomValidity('Please provide a task name');
            title.reportValidity();
            e.preventDefault();
            return false;
        } else if (date.validity.valueMissing) {
            date.setCustomValidity('Please provide a due date');
            date.reportValidity();
            e.preventDefault();
            return false;
        }
        editTodo();
        renderTodos();
        closeEditModal();
    });
}

// Close modal functions

export function closeProjectModal() {
    const projectModal = document.querySelector('.project-modal');
    projectModal.classList.remove('show-modal');
}

function closeTodoModal() {
    const todoModal = document.querySelector('.todo-modal');
    todoModal.classList.remove('show-modal');
}

function closeEditModal() {
    const editModal = document.querySelector('.edit-modal');
    editModal.classList.remove('show-modal');
}

// Clear modal

function clearProjectModal() {
    const projectNameInput = document.querySelector('#projectName');
    projectNameInput.value = '';
}

function clearTodoModal() {
    const title = document.querySelector('#todoTitle');
    const description = document.querySelector('#todoDescription');
    const dueDate = document.querySelector('#todoDueDate');
    const priority = document.querySelector('#todoPriority');

    title.value = '';
    description.value = '';
    dueDate.value = '';
    priority.value = '1';
}

// Projects dom rendering

export function renderProjects() {
    const projectsContainer = document.querySelector('.projects');
    projectsContainer.innerHTML = '';

    allProjects.slice(1).forEach(project => { // slice to ignore inbox 'project'
        const newProjectDiv = document.createElement('div');
        newProjectDiv.classList.add('projects-item');

        newProjectDiv.innerHTML = `<div>
                                        <i class='fa-solid fa-calendar-days'></i>
                                        <p>${project.name}</p>
                                  </div>
                                  <i class="fa-solid fa-trash-can project-delete-btn"></i>`;

        projectsContainer.appendChild(newProjectDiv);
    });

    initProjectDelBtn();
    initProjectItem();
}

// Tasks dom rendering

function renderTodos() {
    const todoContainer = document.querySelector('.todo-list');
    todoContainer.innerHTML = '';

    let activeProject = getActiveProject();

    activeProject.todos.forEach(todo => {
        const newTodoDiv = document.createElement('div');
        newTodoDiv.classList.add('todo-item');

        newTodoDiv.innerHTML = `<div class='todo-left-group'>
                                    <input type='checkbox'>
                                    <p>${todo.title}</p>
                                </div>
                                <div class='todo-right-group'>
                                    <p>${todo.dueDate}</p>
                                    <i class="fa-solid fa-pen"></i>
                                    <i class="fa-solid fa-trash-can todo-delete-btn"></i>
                                </div>`;

        todoContainer.appendChild(newTodoDiv);
    });

    initTaskBtns();
}

// initialize project delete btn

function initProjectDelBtn() {
    const projectDelBtns = document.querySelectorAll('.project-delete-btn')

    projectDelBtns.forEach((delBtn, index) => {
        delBtn.addEventListener('click', () => {
            deleteProject(index);
            renderProjects();
        });
    });
}

// initialize project items on sidebar for changing active project

function initProjectItem() {
    const projectItems = document.querySelectorAll('.projects-item');

    projectItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            changeActiveProject(index);
        });
    });
}

// initalize project task buttons

function initTaskBtns() {
    const taskEditBtns = document.querySelectorAll('.fa-pen');
    const taskDelBtns = document.querySelectorAll('.todo-delete-btn');

    taskDelBtns.forEach((delBtn, index) => {
        delBtn.addEventListener('click', () => {
            deleteTodo(index);
            renderTodos();
        });
    });

    taskEditBtns.forEach((editBtn, index) => {
        editBtn.addEventListener('click', () => {
            getEditModalFields(index);
            getActiveProject().activeTodo = index.toString();
            toggleEditModal();
        });
    });
}

// Get task details to edit

function getEditModalFields(index) {
    const title = document.querySelector('#editTodoTitle');
    const description = document.querySelector('#editTodoDescription');
    const dueDate = document.querySelector('#editTodoDueDate');
    const priority = document.querySelector('#editTodoPriority');

    let activeProject = getActiveProject();

    title.value = activeProject.todos[index].title;
    description.value = activeProject.todos[index].description;
    dueDate.value = activeProject.todos[index].dueDate;
    priority.value = activeProject.todos[index].priority;
}

// function to change active project

function changeActiveProject(index) {
    const projectTitle = document.querySelector('.project-title');
    projectTitle.textContent = allProjects[index].name;

    renderTodos();    
}

// function to initialize webpage 

export function initWebpage() {
    const addProjectModal = document.querySelector('.add-project-btn');
    const addtodoModal = document.querySelector('.add-todo-btn');

    addProjectModal.addEventListener('click', toggleProjectModal);
    addtodoModal.addEventListener('click', toggleTodoModal);

    renderProjects();
    renderTodos();
    initProjectModal();
    initTodoModal();
    initEditModal();
}
