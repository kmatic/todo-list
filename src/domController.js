const projectBtn = document.querySelector(".create-project");
const todoBtn = document.querySelector('.create-todo');

projectBtn.addEventListener("click", toggleProjectModal);
todoBtn.addEventListener('click', toggleTodoModal);

function toggleProjectModal() {
    const projectModal = document.querySelector(".project-modal");
    const closeBtn = document.querySelectorAll(".close-button")[0];

    projectModal.classList.add('show-modal');

    closeBtn.addEventListener('click', () => {
        closeModal(projectModal);
    });

    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeModal(projectModal);
        }
    });
}

function toggleTodoModal() {
    const todoModal = document.querySelector('.todo-modal');
    const closeBtn = document.querySelectorAll(".close-button")[1];

    todoModal.classList.add('show-modal');

    closeBtn.addEventListener('click', () => {
        closeModal(todoModal);
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === todoModal) {
            closeModal(todoModal);
        }
    });
}

function closeModal(modal) {
    modal.classList.remove('show-modal');
}

export { toggleProjectModal, toggleTodoModal, closeModal }
