import { Project, allProjects } from './project';
import { addProject } from './logic';

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
            closeModal(todoModal);
        }
    });
}

function initProjectModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[0];
    const addProjectSubmit = document.querySelector('#submit-project');

    closeBtn.addEventListener('click', () => {
        closeProjectModal();
    });

    addProjectSubmit.addEventListener('click', () => {
        addProject();
        renderProjects();
        closeProjectModal();
        console.log(allProjects);
    });
}

function initTodoModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[1];

    closeBtn.addEventListener('click', () => {
        closeModal(todoModal);
    });
}

// Close modal

export function closeProjectModal() {
    const projectModal = document.querySelector('.project-modal');
    projectModal.classList.remove('show-modal');
}

function closeTodoModal() {
    const todoModal = document.querySelector('.todo-modal');
    todoModal.classList.remove('show-modal');
}

// Projects dom &

export function renderProjects() {
    const projectsContainer = document.querySelector('.projects');
    projectsContainer.innerHTML = '';
    allProjects.forEach(project => {
        const newProjectDom = document.createElement('div');
        newProjectDom.classList.add('projects-item');
        newProjectDom.innerHTML = `<i class='fa-solid fa-calendar-days'></i>
                                  ${project.name}`;
        projectsContainer.appendChild(newProjectDom);
    });
}

export function initWebpage() {
    const addProjectModal = document.querySelector('.create-project');
    const addtodoModal = document.querySelector('.create-todo');

    addProjectModal.addEventListener('click', toggleProjectModal);
    addtodoModal.addEventListener('click', toggleTodoModal);

    initProjectModalBtn()
    initTodoModalBtn();
    renderProjects();
}
