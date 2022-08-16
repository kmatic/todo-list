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

// initialize project modal buttons

function initProjectModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[0];
    const submitProjectBtn = document.querySelector('#submit-project');

    closeBtn.addEventListener('click', () => {
        closeProjectModal();
    });

    submitProjectBtn.addEventListener('click', () => {
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.addProject)();
        renderProjects();
        clearProjectModal();
        closeProjectModal();
    });
}

// initialize todo modal buttons

function initTodoModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[1];
    const submitTodoBtn = document.querySelector('#submit-todo');

    closeBtn.addEventListener('click', () => {
        closeTodoModal();
    });

    submitTodoBtn.addEventListener('click', () => {
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createTodo)();
        renderTodos();
        clearTodoModal();
        closeTodoModal();
    });
}

// initialize edit modal buttons

function initEditModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[2];
    const editTodoBtn = document.querySelector('#edit-todo');

    closeBtn.addEventListener('click', () => {
        closeEditModal();
    });

    editTodoBtn.addEventListener('click', () => {
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

    _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(project => {
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
    initProjectModalBtn();
    initTodoModalBtn();
    initEditModalBtn();
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
    _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(projectIndex, 1);
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
let gym = new Project('Gym');
let work = new Project('Work');
allProjects.push(gym);
allProjects.push(work);

let todo1 = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Work out', 'Do heavy push day', '2020-01-31', '1');
let todo2 = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Go for a Run', 'Run around the park', '2022-02-20', '2');
allProjects[0].addTodo(todo1);
allProjects[0].addTodo(todo2);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZDQUFJO0FBQ3BCLGdCQUFnQiw2Q0FBSTtBQUNwQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNqREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ3BCO0FBQ3VCOztBQUVqRCwyREFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBjcmVhdGVUb2RvLCBnZXRBY3RpdmVQcm9qZWN0LCBkZWxldGVUb2RvLCBlZGl0VG9kbyB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBBZGQgUHJvamVjdCBNb2RhbCBUb2dnbGVcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHByb2plY3RNb2RhbCkge1xuICAgICAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBBZGQgdG9kbyBtb2RhbCB0b2dnbGVcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRvZG9Nb2RhbCgpIHtcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1tb2RhbCcpO1xuICAgIHRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJyk7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0b2RvTW9kYWwpIHtcbiAgICAgICAgICAgIGNsb3NlVG9kb01vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gZWRpdCB0b2RvIG1vZGFsIHRvZ2dsZVxuXG5mdW5jdGlvbiB0b2dnbGVFZGl0TW9kYWwoKSB7XG4gICAgY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbW9kYWwnKTtcbiAgICBlZGl0TW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdy1tb2RhbCcpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGVkaXRNb2RhbCkge1xuICAgICAgICAgICAgY2xvc2VFZGl0TW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIGluaXRpYWxpemUgcHJvamVjdCBtb2RhbCBidXR0b25zXG5cbmZ1bmN0aW9uIGluaXRQcm9qZWN0TW9kYWxCdG4oKSB7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJylbMF07XG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtcHJvamVjdCcpO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBzdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRQcm9qZWN0KCk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICAgIGNsZWFyUHJvamVjdE1vZGFsKCk7XG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsKCk7XG4gICAgfSk7XG59XG5cbi8vIGluaXRpYWxpemUgdG9kbyBtb2RhbCBidXR0b25zXG5cbmZ1bmN0aW9uIGluaXRUb2RvTW9kYWxCdG4oKSB7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJylbMV07XG4gICAgY29uc3Qgc3VibWl0VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtdG9kbycpO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlVG9kb01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBzdWJtaXRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVUb2RvKCk7XG4gICAgICAgIHJlbmRlclRvZG9zKCk7XG4gICAgICAgIGNsZWFyVG9kb01vZGFsKCk7XG4gICAgICAgIGNsb3NlVG9kb01vZGFsKCk7XG4gICAgfSk7XG59XG5cbi8vIGluaXRpYWxpemUgZWRpdCBtb2RhbCBidXR0b25zXG5cbmZ1bmN0aW9uIGluaXRFZGl0TW9kYWxCdG4oKSB7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnV0dG9uJylbMl07XG4gICAgY29uc3QgZWRpdFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10b2RvJyk7XG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VFZGl0TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGVkaXRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlZGl0VG9kbygpO1xuICAgICAgICByZW5kZXJUb2RvcygpO1xuICAgICAgICBjbG9zZUVkaXRNb2RhbCgpO1xuICAgIH0pO1xufVxuXG4vLyBDbG9zZSBtb2RhbCBmdW5jdGlvbnNcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsJyk7XG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VUb2RvTW9kYWwoKSB7XG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbW9kYWwnKTtcbiAgICB0b2RvTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUVkaXRNb2RhbCgpIHtcbiAgICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1tb2RhbCcpO1xuICAgIGVkaXRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJyk7XG59XG5cbi8vIENsZWFyIG1vZGFsXG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVG9kb01vZGFsKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9UaXRsZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0R1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvUHJpb3JpdHknKTtcblxuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICBkdWVEYXRlLnZhbHVlID0gJyc7XG4gICAgcHJpb3JpdHkudmFsdWUgPSAnMSc7XG59XG5cbi8vIFByb2plY3RzIGRvbSByZW5kZXJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaXRlbScpO1xuXG4gICAgICAgIG5ld1Byb2plY3REaXYuaW5uZXJIVE1MID0gYDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheXMnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2plY3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gcHJvamVjdC1kZWxldGUtYnRuXCI+PC9pPmA7XG5cbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4gICAgfSk7XG5cbiAgICBpbml0UHJvamVjdERlbEJ0bigpO1xuICAgIGluaXRQcm9qZWN0SXRlbSgpO1xufVxuXG4vLyBUYXNrcyBkb20gcmVuZGVyaW5nXG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9zKCkge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gICAgYWN0aXZlUHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCBuZXdUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1RvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG5cbiAgICAgICAgbmV3VG9kb0Rpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0ndG9kby1sZWZ0LWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3RvZG8udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndG9kby1yaWdodC1ncm91cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3RvZG8uZHVlRGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIHRvZG8tZGVsZXRlLWJ0blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9EaXYpO1xuICAgIH0pO1xuXG4gICAgaW5pdFRhc2tCdG5zKCk7XG59XG5cbi8vIGluaXRpYWxpemUgcHJvamVjdCBkZWxldGUgYnRuXG5cbmZ1bmN0aW9uIGluaXRQcm9qZWN0RGVsQnRuKCkge1xuICAgIGNvbnN0IHByb2plY3REZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZGVsZXRlLWJ0bicpXG5cbiAgICBwcm9qZWN0RGVsQnRucy5mb3JFYWNoKChkZWxCdG4sIGluZGV4KSA9PiB7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIGluaXRpYWxpemUgcHJvamVjdCBpdGVtcyBvbiBzaWRlYmFyIGZvciBjaGFuZ2luZyBhY3RpdmUgcHJvamVjdFxuXG5mdW5jdGlvbiBpbml0UHJvamVjdEl0ZW0oKSB7XG4gICAgY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzLWl0ZW0nKTtcblxuICAgIHByb2plY3RJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQWN0aXZlUHJvamVjdChpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBpbml0YWxpemUgcHJvamVjdCB0YXNrIGJ1dHRvbnNcblxuZnVuY3Rpb24gaW5pdFRhc2tCdG5zKCkge1xuICAgIGNvbnN0IHRhc2tFZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1wZW4nKTtcbiAgICBjb25zdCB0YXNrRGVsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWRlbGV0ZS1idG4nKTtcblxuICAgIHRhc2tEZWxCdG5zLmZvckVhY2goKGRlbEJ0biwgaW5kZXgpID0+IHtcbiAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVG9kbyhpbmRleCk7XG4gICAgICAgICAgICByZW5kZXJUb2RvcygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRhc2tFZGl0QnRucy5mb3JFYWNoKChlZGl0QnRuLCBpbmRleCkgPT4ge1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZ2V0RWRpdE1vZGFsRmllbGRzKGluZGV4KTtcbiAgICAgICAgICAgIGdldEFjdGl2ZVByb2plY3QoKS5hY3RpdmVUb2RvID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRNb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gR2V0IHRhc2sgZGV0YWlscyB0byBlZGl0XG5cbmZ1bmN0aW9uIGdldEVkaXRNb2RhbEZpZWxkcyhpbmRleCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb2RvVGl0bGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9kb0Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9kb0R1ZURhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9kb1ByaW9yaXR5Jyk7XG5cbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcblxuICAgIHRpdGxlLnZhbHVlID0gYWN0aXZlUHJvamVjdC50b2Rvc1tpbmRleF0udGl0bGU7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBhY3RpdmVQcm9qZWN0LnRvZG9zW2luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnZhbHVlID0gYWN0aXZlUHJvamVjdC50b2Rvc1tpbmRleF0uZHVlRGF0ZTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IGFjdGl2ZVByb2plY3QudG9kb3NbaW5kZXhdLnByaW9yaXR5O1xufVxuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWN0aXZlIHByb2plY3RcblxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlUHJvamVjdChpbmRleCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpbmRleF0ubmFtZTtcblxuICAgIHJlbmRlclRvZG9zKCk7ICAgIFxufVxuXG4vLyBmdW5jdGlvbiB0byBpbml0aWFsaXplIHdlYnBhZ2UgXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2VicGFnZSgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG4gICAgY29uc3QgYWRkdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWJ0bicpO1xuXG4gICAgYWRkUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUHJvamVjdE1vZGFsKTtcbiAgICBhZGR0b2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVUb2RvTW9kYWwpO1xuXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICBpbml0UHJvamVjdE1vZGFsQnRuKCk7XG4gICAgaW5pdFRvZG9Nb2RhbEJ0bigpO1xuICAgIGluaXRFZGl0TW9kYWxCdG4oKTtcbn1cbiIsImltcG9ydCB7IFByb2plY3QsIGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIGNsb3NlUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlOyBcblxuICAgIC8vIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHtcbiAgICAvLyAgICAgYWxlcnQoJ05hbWUgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgLy8gICAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICBhbGxQcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgIGFsbFByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9EdWVEYXRlJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb1ByaW9yaXR5JykudmFsdWU7XG5cbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBhY3RpdmVQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kbyh0YXNrSW5kZXgpIHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBhY3RpdmVQcm9qZWN0LmRlbFRvZG8odGFza0luZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRUb2RvVGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9kb0Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9kb0R1ZURhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VG9kb1ByaW9yaXR5JykudmFsdWU7XG4gICAgXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgbGV0IGFjdGl2ZVRhc2tJbmRleCA9IHBhcnNlSW50KGFjdGl2ZVByb2plY3QuYWN0aXZlVG9kbyk7XG4gICAgbGV0IGFjdGl2ZVRhc2sgPSBhY3RpdmVQcm9qZWN0LnRvZG9zW2FjdGl2ZVRhc2tJbmRleF07XG5cbiAgICBhY3RpdmVUYXNrLnRpdGxlID0gdGl0bGU7XG4gICAgYWN0aXZlVGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGFjdGl2ZVRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgYWN0aXZlVGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS50ZXh0Q29udGVudDtcblxuICAgIHJldHVybiBhbGxQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IGFjdGl2ZVByb2plY3QpO1xufVxuXG5cblxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl90b2RvcyA9IFtdO1xuICAgICAgICB0aGlzLl9hY3RpdmVUb2RvO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgdG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvcztcbiAgICB9XG5cbiAgICBnZXQgYWN0aXZlVG9kbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRvZG87XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgdG9kb3ModmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90b2RvcyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNldCBhY3RpdmVUb2RvKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlVG9kbyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVG9kbyhuZXdUb2RvKSB7XG4gICAgICAgIGlmIChuZXdUb2RvKSB7XG4gICAgICAgICAgICB0aGlzLl90b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsVG9kbyhpbmRleCkge1xuICAgICAgICB0aGlzLl90b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIFxufVxuXG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcbmxldCBneW0gPSBuZXcgUHJvamVjdCgnR3ltJyk7XG5sZXQgd29yayA9IG5ldyBQcm9qZWN0KCdXb3JrJyk7XG5hbGxQcm9qZWN0cy5wdXNoKGd5bSk7XG5hbGxQcm9qZWN0cy5wdXNoKHdvcmspO1xuXG5sZXQgdG9kbzEgPSBuZXcgVG9kbygnV29yayBvdXQnLCAnRG8gaGVhdnkgcHVzaCBkYXknLCAnMjAyMC0wMS0zMScsICcxJyk7XG5sZXQgdG9kbzIgPSBuZXcgVG9kbygnR28gZm9yIGEgUnVuJywgJ1J1biBhcm91bmQgdGhlIHBhcmsnLCAnMjAyMi0wMi0yMCcsICcyJyk7XG5hbGxQcm9qZWN0c1swXS5hZGRUb2RvKHRvZG8xKTtcbmFsbFByb2plY3RzWzBdLmFkZFRvZG8odG9kbzIpO1xuXG5leHBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICAvLyBnZXQgbWV0aG9kc1xuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCkgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgLy8gc2V0IG1ldGhvZHNcbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRXZWJwYWdlIH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmluaXRXZWJwYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9