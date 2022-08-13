import { Project, allProjects } from './project';
import { addProject, deleteProject } from './logic';

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

// initialize project modal buttons

function initProjectModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[0];
    const addProjectSubmit = document.querySelector('#submit-project');

    closeBtn.addEventListener('click', () => {
        closeProjectModal();
    });

    addProjectSubmit.addEventListener('click', () => {
        addProject();
        renderProjects();
        clearProjectModal();
        closeProjectModal();
        console.log(allProjects);
    });
}

// initialize todo modal buttons

function initTodoModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[1];

    closeBtn.addEventListener('click', () => {
        closeTodoModal();
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

<<<<<<< HEAD
// Clear modal

function clearProjectModal() {
    const projectNameInput = document.querySelector('#projectName');
    projectNameInput.value = '';
}

// Projects dom &
=======
// Projects dom rendering
>>>>>>> refs/remotes/origin/main

export function renderProjects() {
    const projectsContainer = document.querySelector('.projects');
    projectsContainer.innerHTML = '';

    allProjects.forEach(project => {
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

function renderTodos(index) {
    const todoContainer = document.querySelector('.todo-list');
    todoContainer.innerHTML = '';

    allProjects[index].todos.forEach(todo => {
        const newTodoDiv = document.createElement('div');
        newTodoDiv.classList.add('todo-item');

        newTodoDiv.innerHTML = `<div class='todo-left-group'>
                                    <input type='checkbox'>
                                    <p>${todo.title}</p>
                                </div>
                                <div class='todo-right-group'>
                                    <p>${todo.dueDate}</p>
                                    <i class="fa-solid fa-pen"></i>
                                    <i class="fa-solid fa-trash-can"></i>
                                </div>`;

        todoContainer.appendChild(newTodoDiv);
    });
}

// initialize project delete btn

function initProjectDelBtn() {
    const projectDelBtns = document.querySelectorAll('.project-delete-btn')

    projectDelBtns.forEach((delBtn, index) => {
        delBtn.addEventListener('click', () => {
            deleteProject(index);
            renderProjects();
        });
    })
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

// function to change active project

function changeActiveProject(index) {
    const projectTitle = document.querySelector('.project-title');

    projectTitle.textContent = allProjects[index].name;

    renderTodos(index);    
}

// function to initialize webpage 

export function initWebpage() {
    const addProjectModal = document.querySelector('.add-project-btn');
    const addtodoModal = document.querySelector('.add-todo-btn');

    addProjectModal.addEventListener('click', toggleProjectModal);
    addtodoModal.addEventListener('click', toggleTodoModal);

    initProjectModalBtn()
    initTodoModalBtn();
    renderProjects();
}
