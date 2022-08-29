/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeProjectModal": () => (/* binding */ closeProjectModal),
/* harmony export */   "initWebpage": () => (/* binding */ initWebpage),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "toggleProjectModal": () => (/* binding */ toggleProjectModal),
/* harmony export */   "toggleTodoModal": () => (/* binding */ toggleTodoModal)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



// Add Project Modal Toggle

function toggleProjectModal() {
    const projectModal = document.querySelector('.project-modal');
    projectModal.classList.add('show-modal');

    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Add todo modal toggle

function toggleTodoModal() {
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
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.addProject)();
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
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createTodo)();
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
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.editTodo)();
        renderTodos();
        closeEditModal();
    });
}

// Close modal functions

function closeProjectModal() {
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

function renderProjects() {
    const projectsContainer = document.querySelector('.projects');
    projectsContainer.innerHTML = '';

    _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.slice(1).forEach(project => { // slice to ignore inbox 'project'
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

    let activeProject = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)();

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
            ;(0,_logic__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(index);
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
            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(index);
            renderTodos();
        });
    });

    taskEditBtns.forEach((editBtn, index) => {
        editBtn.addEventListener('click', () => {
            getEditModalFields(index);
            (0,_logic__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)().activeTodo = index.toString();
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

    let activeProject = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.getActiveProject)();

    title.value = activeProject.todos[index].title;
    description.value = activeProject.todos[index].description;
    dueDate.value = activeProject.todos[index].dueDate;
    priority.value = activeProject.todos[index].priority;
}

// function to change active project

function changeActiveProject(index) {
    const projectTitle = document.querySelector('.project-title');
    projectTitle.textContent = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].name;

    renderTodos();    
}

// function to initialize webpage 

function initWebpage() {
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


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "getActiveProject": () => (/* binding */ getActiveProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/domController.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




function addProject() {
    const projectNameInput = document.querySelector('#projectName');
    const projectName = projectNameInput.value; 

    // if (projectName === '') {
    //     alert('Name cannot be empty');
    //     return;
    // }

    _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName));
}

function deleteProject(projectIndex) {
    _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(projectIndex + 1, 1);
}

function createTodo() {
    const title = document.querySelector('#todoTitle').value;
    const description = document.querySelector('#todoDescription').value;
    const dueDate = document.querySelector('#todoDueDate').value;
    const priority = document.querySelector('#todoPriority').value;

    let activeProject = getActiveProject();
    activeProject.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, dueDate, priority));
}

function deleteTodo(taskIndex) {
    let activeProject = getActiveProject();
    activeProject.delTodo(taskIndex);
}

function editTodo() {
    const title = document.querySelector('#editTodoTitle').value;
    const description = document.querySelector('#editTodoDescription').value;
    const dueDate = document.querySelector('#editTodoDueDate').value;
    const priority = document.querySelector('#editTodoPriority').value;
    
    let activeProject = getActiveProject();
    let activeTaskIndex = parseInt(activeProject.activeTodo);
    let activeTask = activeProject.todos[activeTaskIndex];

    activeTask.title = title;
    activeTask.description = description;
    activeTask.dueDate = dueDate;
    activeTask.priority = priority;
}

function getActiveProject() {
    const activeProject = document.querySelector('.project-title').textContent;

    return _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.find((project) => project.name === activeProject);
}





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "allProjects": () => (/* binding */ allProjects)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project {
    constructor(name) {
        this._name = name;
        this._todos = [];
        this._activeTodo;
    }

    get name() {
        return this._name;
    }

    get todos() {
        return this._todos;
    }

    get activeTodo() {
        return this._activeTodo;
    }

    set name(value) {
        if (value) {
            this._name = value;
        }
    }

    set todos(value) {
        if (value) {
            this._todos = value;
        }
    }
    
    set activeTodo(value) {
        if (value) {
            this._activeTodo = value;
        }
    }

    addTodo(newTodo) {
        if (newTodo) {
            this._todos.push(newTodo);
        }
    }

    delTodo(index) {
        this._todos.splice(index, 1);
    } 
}

let allProjects = [];
let inbox = new Project('Inbox');
let gym = new Project('Gym');
let work = new Project('Work');
allProjects.push(inbox);
allProjects.push(gym);
allProjects.push(work);

let todo1 = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Work out', 'Do heavy push day', '2020-01-31', '1');
let todo2 = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Go for a Run', 'Run around the park', '2022-02-20', '2');
allProjects[1].addTodo(todo1);
allProjects[1].addTodo(todo2);



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
    }

    // get methods
    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() { 
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    // set methods
    set title(value) {
        if (value) {
            this._title = value;
        }
    }

    set description(value) {
        if (value) {
            this._description = value;
        }
    }

    set dueDate(value) {
        if (value) {
            this._dueDate = value;
        }
    }

    set priority(value) {
        if (value) {
            this._priority = value;
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ "./src/domController.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




(0,_domController__WEBPACK_IMPORTED_MODULE_0__.initWebpage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QztBQUNwQjtBQUN1Qjs7QUFFakQsMkRBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCwgYWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgY3JlYXRlVG9kbywgZ2V0QWN0aXZlUHJvamVjdCwgZGVsZXRlVG9kbywgZWRpdFRvZG8gfSBmcm9tICcuL2xvZ2ljJztcblxuLy8gQWRkIFByb2plY3QgTW9kYWwgVG9nZ2xlXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwnKTtcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdy1tb2RhbCcpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBwcm9qZWN0TW9kYWwpIHtcbiAgICAgICAgICAgIGNsb3NlUHJvamVjdE1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gQWRkIHRvZG8gbW9kYWwgdG9nZ2xlXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUb2RvTW9kYWwoKSB7XG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbW9kYWwnKTtcbiAgICB0b2RvTW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdy1tb2RhbCcpO1xuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdG9kb01vZGFsKSB7XG4gICAgICAgICAgICBjbG9zZVRvZG9Nb2RhbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIGVkaXQgdG9kbyBtb2RhbCB0b2dnbGVcblxuZnVuY3Rpb24gdG9nZ2xlRWRpdE1vZGFsKCkge1xuICAgIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW1vZGFsJyk7XG4gICAgZWRpdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3ctbW9kYWwnKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlZGl0TW9kYWwpIHtcbiAgICAgICAgICAgIGNsb3NlRWRpdE1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vLyBpbml0aWFsaXplIHByb2plY3QgbW9kYWwgXG5cbmZ1bmN0aW9uIGluaXRQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJylbMF07XG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtcHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZVByb2plY3RNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICAgICAgcHJvamVjdC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIHByb3ZpZGUgYSBwcm9qZWN0IG5hbWUnKTtcbiAgICAgICAgICAgIHByb2plY3QucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBhZGRQcm9qZWN0KCk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICAgIGNsZWFyUHJvamVjdE1vZGFsKCk7XG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsKCk7XG4gICAgfSk7XG59XG5cbi8vIGluaXRpYWxpemUgdG9kbyBtb2RhbFxuXG5mdW5jdGlvbiBpbml0VG9kb01vZGFsKCkge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpWzFdO1xuICAgIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXRvZG8nKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EdWVEYXRlJyk7XG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VUb2RvTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGl0bGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgICAgICB0aXRsZS5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIHByb3ZpZGUgYSB0YXNrIG5hbWUnKTtcbiAgICAgICAgICAgIHRpdGxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBwcm92aWRlIGEgZHVlIGRhdGUnKTtcbiAgICAgICAgICAgIGRhdGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVUb2RvKCk7XG4gICAgICAgIHJlbmRlclRvZG9zKCk7XG4gICAgICAgIGNsZWFyVG9kb01vZGFsKCk7XG4gICAgICAgIGNsb3NlVG9kb01vZGFsKCk7XG4gICAgfSk7XG59XG5cbi8vIGluaXRpYWxpemUgZWRpdCBtb2RhbFxuXG5mdW5jdGlvbiBpbml0RWRpdE1vZGFsKCkge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpWzJdO1xuICAgIGNvbnN0IGVkaXRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdG9kbycpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb2RvVGl0bGUnKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb2RvRHVlRGF0ZScpO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlRWRpdE1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBlZGl0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmICh0aXRsZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIHRpdGxlLnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgcHJvdmlkZSBhIHRhc2sgbmFtZScpO1xuICAgICAgICAgICAgdGl0bGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICAgICAgZGF0ZS5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIHByb3ZpZGUgYSBkdWUgZGF0ZScpO1xuICAgICAgICAgICAgZGF0ZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVkaXRUb2RvKCk7XG4gICAgICAgIHJlbmRlclRvZG9zKCk7XG4gICAgICAgIGNsb3NlRWRpdE1vZGFsKCk7XG4gICAgfSk7XG59XG5cbi8vIENsb3NlIG1vZGFsIGZ1bmN0aW9uc1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwnKTtcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRvZG9Nb2RhbCgpIHtcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1tb2RhbCcpO1xuICAgIHRvZG9Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdE1vZGFsKCkge1xuICAgIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW1vZGFsJyk7XG4gICAgZWRpdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKTtcbn1cblxuLy8gQ2xlYXIgbW9kYWxcblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gY2xlYXJUb2RvTW9kYWwoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1RpdGxlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRHVlRGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9Qcmlvcml0eScpO1xuXG4gICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIGR1ZURhdGUudmFsdWUgPSAnJztcbiAgICBwcmlvcml0eS52YWx1ZSA9ICcxJztcbn1cblxuLy8gUHJvamVjdHMgZG9tIHJlbmRlcmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGFsbFByb2plY3RzLnNsaWNlKDEpLmZvckVhY2gocHJvamVjdCA9PiB7IC8vIHNsaWNlIHRvIGlnbm9yZSBpbmJveCAncHJvamVjdCdcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWl0ZW0nKTtcblxuICAgICAgICBuZXdQcm9qZWN0RGl2LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSdmYS1zb2xpZCBmYS1jYWxlbmRhci1kYXlzJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIHByb2plY3QtZGVsZXRlLWJ0blwiPjwvaT5gO1xuXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuICAgIH0pO1xuXG4gICAgaW5pdFByb2plY3REZWxCdG4oKTtcbiAgICBpbml0UHJvamVjdEl0ZW0oKTtcbn1cblxuLy8gVGFza3MgZG9tIHJlbmRlcmluZ1xuXG5mdW5jdGlvbiByZW5kZXJUb2RvcygpIHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcblxuICAgIGFjdGl2ZVByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgbmV3VG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdUb2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuXG4gICAgICAgIG5ld1RvZG9EaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J3RvZG8tbGVmdC1ncm91cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RvZG8tcmlnaHQtZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW5cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhbiB0b2RvLWRlbGV0ZS1idG5cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvRGl2KTtcbiAgICB9KTtcblxuICAgIGluaXRUYXNrQnRucygpO1xufVxuXG4vLyBpbml0aWFsaXplIHByb2plY3QgZGVsZXRlIGJ0blxuXG5mdW5jdGlvbiBpbml0UHJvamVjdERlbEJ0bigpIHtcbiAgICBjb25zdCBwcm9qZWN0RGVsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWRlbGV0ZS1idG4nKVxuXG4gICAgcHJvamVjdERlbEJ0bnMuZm9yRWFjaCgoZGVsQnRuLCBpbmRleCkgPT4ge1xuICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBpbml0aWFsaXplIHByb2plY3QgaXRlbXMgb24gc2lkZWJhciBmb3IgY2hhbmdpbmcgYWN0aXZlIHByb2plY3RcblxuZnVuY3Rpb24gaW5pdFByb2plY3RJdGVtKCkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0cy1pdGVtJyk7XG5cbiAgICBwcm9qZWN0SXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZVByb2plY3QoaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gaW5pdGFsaXplIHByb2plY3QgdGFzayBidXR0b25zXG5cbmZ1bmN0aW9uIGluaXRUYXNrQnRucygpIHtcbiAgICBjb25zdCB0YXNrRWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtcGVuJyk7XG4gICAgY29uc3QgdGFza0RlbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1kZWxldGUtYnRuJyk7XG5cbiAgICB0YXNrRGVsQnRucy5mb3JFYWNoKChkZWxCdG4sIGluZGV4KSA9PiB7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG8oaW5kZXgpO1xuICAgICAgICAgICAgcmVuZGVyVG9kb3MoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0YXNrRWRpdEJ0bnMuZm9yRWFjaCgoZWRpdEJ0biwgaW5kZXgpID0+IHtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGdldEVkaXRNb2RhbEZpZWxkcyhpbmRleCk7XG4gICAgICAgICAgICBnZXRBY3RpdmVQcm9qZWN0KCkuYWN0aXZlVG9kbyA9IGluZGV4LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0b2dnbGVFZGl0TW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIEdldCB0YXNrIGRldGFpbHMgdG8gZWRpdFxuXG5mdW5jdGlvbiBnZXRFZGl0TW9kYWxGaWVsZHMoaW5kZXgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9kb1RpdGxlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRvZG9EZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRvZG9EdWVEYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRvZG9Qcmlvcml0eScpO1xuXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG5cbiAgICB0aXRsZS52YWx1ZSA9IGFjdGl2ZVByb2plY3QudG9kb3NbaW5kZXhdLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gYWN0aXZlUHJvamVjdC50b2Rvc1tpbmRleF0uZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS52YWx1ZSA9IGFjdGl2ZVByb2plY3QudG9kb3NbaW5kZXhdLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkudmFsdWUgPSBhY3RpdmVQcm9qZWN0LnRvZG9zW2luZGV4XS5wcmlvcml0eTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGFjdGl2ZSBwcm9qZWN0XG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVByb2plY3QoaW5kZXgpIHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2luZGV4XS5uYW1lO1xuXG4gICAgcmVuZGVyVG9kb3MoKTsgICAgXG59XG5cbi8vIGZ1bmN0aW9uIHRvIGluaXRpYWxpemUgd2VicGFnZSBcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWJwYWdlKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBhZGR0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tYnRuJyk7XG5cbiAgICBhZGRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQcm9qZWN0TW9kYWwpO1xuICAgIGFkZHRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVRvZG9Nb2RhbCk7XG5cbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRvZG9zKCk7XG4gICAgaW5pdFByb2plY3RNb2RhbCgpO1xuICAgIGluaXRUb2RvTW9kYWwoKTtcbiAgICBpbml0RWRpdE1vZGFsKCk7XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCBjbG9zZVByb2plY3RNb2RhbCB9IGZyb20gXCIuL2RvbUNvbnRyb2xsZXJcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTsgXG5cbiAgICAvLyBpZiAocHJvamVjdE5hbWUgPT09ICcnKSB7XG4gICAgLy8gICAgIGFsZXJ0KCdOYW1lIGNhbm5vdCBiZSBlbXB0eScpO1xuICAgIC8vICAgICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgYWxsUHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICBhbGxQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4ICsgMSwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0R1ZURhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvUHJpb3JpdHknKS52YWx1ZTtcblxuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIGFjdGl2ZVByb2plY3QuYWRkVG9kbyhuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvKHRhc2tJbmRleCkge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIGFjdGl2ZVByb2plY3QuZGVsVG9kbyh0YXNrSW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZG8oKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRvZG9UaXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb2RvRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb2RvRHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb2RvUHJpb3JpdHknKS52YWx1ZTtcbiAgICBcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBsZXQgYWN0aXZlVGFza0luZGV4ID0gcGFyc2VJbnQoYWN0aXZlUHJvamVjdC5hY3RpdmVUb2RvKTtcbiAgICBsZXQgYWN0aXZlVGFzayA9IGFjdGl2ZVByb2plY3QudG9kb3NbYWN0aXZlVGFza0luZGV4XTtcblxuICAgIGFjdGl2ZVRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICBhY3RpdmVUYXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgYWN0aXZlVGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBhY3RpdmVUYXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpLnRleHRDb250ZW50O1xuXG4gICAgcmV0dXJuIGFsbFByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gYWN0aXZlUHJvamVjdCk7XG59XG5cblxuXG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3RvZG9zID0gW107XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRvZG87XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIGdldCB0b2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9zO1xuICAgIH1cblxuICAgIGdldCBhY3RpdmVUb2RvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVG9kbztcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCB0b2Rvcyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RvZG9zID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2V0IGFjdGl2ZVRvZG8odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVUb2RvID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRUb2RvKG5ld1RvZG8pIHtcbiAgICAgICAgaWYgKG5ld1RvZG8pIHtcbiAgICAgICAgICAgIHRoaXMuX3RvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxUb2RvKGluZGV4KSB7XG4gICAgICAgIHRoaXMuX3RvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBcbn1cblxubGV0IGFsbFByb2plY3RzID0gW107XG5sZXQgaW5ib3ggPSBuZXcgUHJvamVjdCgnSW5ib3gnKTtcbmxldCBneW0gPSBuZXcgUHJvamVjdCgnR3ltJyk7XG5sZXQgd29yayA9IG5ldyBQcm9qZWN0KCdXb3JrJyk7XG5hbGxQcm9qZWN0cy5wdXNoKGluYm94KTtcbmFsbFByb2plY3RzLnB1c2goZ3ltKTtcbmFsbFByb2plY3RzLnB1c2god29yayk7XG5cbmxldCB0b2RvMSA9IG5ldyBUb2RvKCdXb3JrIG91dCcsICdEbyBoZWF2eSBwdXNoIGRheScsICcyMDIwLTAxLTMxJywgJzEnKTtcbmxldCB0b2RvMiA9IG5ldyBUb2RvKCdHbyBmb3IgYSBSdW4nLCAnUnVuIGFyb3VuZCB0aGUgcGFyaycsICcyMDIyLTAyLTIwJywgJzInKTtcbmFsbFByb2plY3RzWzFdLmFkZFRvZG8odG9kbzEpO1xuYWxsUHJvamVjdHNbMV0uYWRkVG9kbyh0b2RvMik7XG5cbmV4cG9ydCB7IFByb2plY3QsIGFsbFByb2plY3RzIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIC8vIGdldCBtZXRob2RzXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7IFxuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG5cbiAgICAvLyBzZXQgbWV0aG9kc1xuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdFdlYnBhZ2UgfSBmcm9tIFwiLi9kb21Db250cm9sbGVyXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuaW5pdFdlYnBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=