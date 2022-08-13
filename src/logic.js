import { Project, allProjects } from "./project";
import { renderProjects, closeProjectModal } from "./domController";

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
<<<<<<< HEAD
    console.log(allProjects);
=======
}

function addTodo() {
    const title = document.querySelector('#todoTitle');
    const description = document.querySelector('#todoDescription');
    const duedate = document.querySelector('#todoDueDate');
    const priority = document.querySelector('#todoPriority');
>>>>>>> refs/remotes/origin/main
}