import { Project, allProjects } from "./project";
import { renderProjects, closeProjectModal } from "./domController";
import Todo from "./todo";

export function addProject() {
    const projectNameInput = document.querySelector('#projectName');
    const projectName = projectNameInput.value; 

    // if (projectName === '') {
    //     alert('Name cannot be empty');
    //     return;
    // }

    allProjects.push(new Project(projectName));
}

export function deleteProject(projectIndex) {
    allProjects.splice(projectIndex, 1);
}

export function createTodo() {
    const title = document.querySelector('#todoTitle').value;
    const description = document.querySelector('#todoDescription').value;
    const dueDate = document.querySelector('#todoDueDate').value;
    const priority = document.querySelector('#todoPriority').value;
    console.log(dueDate);

    let activeProject = getActiveProject();
    activeProject.addTodo(new Todo(title, description, dueDate, priority));
}

export function deleteTodo(taskIndex) {
    let activeProject = getActiveProject();
    activeProject.delTodo(taskIndex);
}

export function getActiveProject() {
    const activeProject = document.querySelector('.project-title').textContent;

    return allProjects.find((project) => project.name === activeProject);
}



