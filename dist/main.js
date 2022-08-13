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

function initProjectModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[0];
    const addProjectSubmit = document.querySelector('#submit-project');

    closeBtn.addEventListener('click', () => {
        closeProjectModal();
    });

    addProjectSubmit.addEventListener('click', () => {
        (0,_logic__WEBPACK_IMPORTED_MODULE_1__.addProject)();
        renderProjects();
        clearProjectModal();
        closeProjectModal();
        console.log(_project__WEBPACK_IMPORTED_MODULE_0__.allProjects);
    });
}

function initTodoModalBtn() {
    const closeBtn = document.querySelectorAll('.close-button')[1];

    closeBtn.addEventListener('click', () => {
        closeTodoModal();
    });
}

// Close modal

function closeProjectModal() {
    const projectModal = document.querySelector('.project-modal');
    projectModal.classList.remove('show-modal');
}

function closeTodoModal() {
    const todoModal = document.querySelector('.todo-modal');
    todoModal.classList.remove('show-modal');
}

// Clear modal

function clearProjectModal() {
    const projectNameInput = document.querySelector('#projectName');
    projectNameInput.value = '';
}

// Projects dom &

function renderProjects() {
    const projectsContainer = document.querySelector('.projects');
    projectsContainer.innerHTML = '';

    _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(project => {
        const newProjectDom = document.createElement('div');
        newProjectDom.classList.add('projects-item');
        newProjectDom.innerHTML = `<div>
                                        <i class='fa-solid fa-calendar-days'></i>
                                        <p>${project.name}</p>
                                  </div>
                                  <i class="fa-solid fa-trash-can project-delete-btn"></i>`;
        projectsContainer.appendChild(newProjectDom);
    });

    initProjectDelBtn();
}

function initProjectDelBtn() {
    const projectDelBtns = document.querySelectorAll('.project-delete-btn')

    projectDelBtns.forEach((delBtn, index) => {
        delBtn.addEventListener('click', () => {
            ;(0,_logic__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(index);
            renderProjects();
        });
    })
}

function initWebpage() {
    const addProjectModal = document.querySelector('.add-project-btn');
    const addtodoModal = document.querySelector('.add-todo-btn');

    addProjectModal.addEventListener('click', toggleProjectModal);
    addtodoModal.addEventListener('click', toggleTodoModal);

    initProjectModalBtn()
    initTodoModalBtn();
    renderProjects();
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
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/domController.js");



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
    console.log(_project__WEBPACK_IMPORTED_MODULE_0__.allProjects);
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
class Project {
    constructor(name) {
        this._name = name;
        this._todos = [];
    }

    get name() {
        return this._name;
    }

    get todos() {
        return this.todos;
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

    addTodo(newTodo) {
        if (newTodo) {
            this._todos.push(newTodo);
        }
    }
}

let allProjects = [];
let gym = new Project('gym');
let work = new Project('work');
allProjects.push(gym);
allProjects.push(work);




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNHOztBQUVwRDs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxRQUFRLGtEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBVztBQUMvQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQSxJQUFJLHlEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHNEQUFhO0FBQ3pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhpRDtBQUNtQjs7QUFFN0Q7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksc0RBQWdCLEtBQUssNkNBQU87QUFDaEM7O0FBRU87QUFDUCxJQUFJLHdEQUFrQjtBQUN0QixnQkFBZ0IsaURBQVc7QUFDM0I7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QztBQUNwQjtBQUN1Qjs7QUFFakQsMkRBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCwgYWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBBZGQgUHJvamVjdCBNb2RhbCBUb2dnbGVcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHByb2plY3RNb2RhbCkge1xuICAgICAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBBZGQgdG9kbyBtb2RhbCB0b2dnbGVcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRvZG9Nb2RhbCgpIHtcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1tb2RhbCcpO1xuICAgIHRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJyk7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0b2RvTW9kYWwpIHtcbiAgICAgICAgICAgIGNsb3NlVG9kb01vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdFByb2plY3RNb2RhbEJ0bigpIHtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS1idXR0b24nKVswXTtcbiAgICBjb25zdCBhZGRQcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1wcm9qZWN0Jyk7XG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0VG9kb01vZGFsQnRuKCkge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ1dHRvbicpWzFdO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlVG9kb01vZGFsKCk7XG4gICAgfSk7XG59XG5cbi8vIENsb3NlIG1vZGFsXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1vZGFsJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVG9kb01vZGFsKCkge1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLW1vZGFsJyk7XG4gICAgdG9kb01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKTtcbn1cblxuLy8gQ2xlYXIgbW9kYWxcblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbn1cblxuLy8gUHJvamVjdHMgZG9tICZcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Byb2plY3REb20uY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaXRlbScpO1xuICAgICAgICBuZXdQcm9qZWN0RG9tLmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSdmYS1zb2xpZCBmYS1jYWxlbmRhci1kYXlzJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuIHByb2plY3QtZGVsZXRlLWJ0blwiPjwvaT5gO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RG9tKTtcbiAgICB9KTtcblxuICAgIGluaXRQcm9qZWN0RGVsQnRuKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRQcm9qZWN0RGVsQnRuKCkge1xuICAgIGNvbnN0IHByb2plY3REZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZGVsZXRlLWJ0bicpXG5cbiAgICBwcm9qZWN0RGVsQnRucy5mb3JFYWNoKChkZWxCdG4sIGluZGV4KSA9PiB7XG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWJwYWdlKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBhZGR0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tYnRuJyk7XG5cbiAgICBhZGRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQcm9qZWN0TW9kYWwpO1xuICAgIGFkZHRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVRvZG9Nb2RhbCk7XG5cbiAgICBpbml0UHJvamVjdE1vZGFsQnRuKClcbiAgICBpbml0VG9kb01vZGFsQnRuKCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbn1cbiIsImltcG9ydCB7IFByb2plY3QsIGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIGNsb3NlUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlOyBcblxuICAgIC8vIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHtcbiAgICAvLyAgICAgYWxlcnQoJ05hbWUgY2Fubm90IGJlIGVtcHR5Jyk7XG4gICAgLy8gICAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICBhbGxQcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgIGFsbFByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbn0iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl90b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgdG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICAgIH1cblxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IHRvZG9zKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdG9kb3MgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFRvZG8obmV3VG9kbykge1xuICAgICAgICBpZiAobmV3VG9kbykge1xuICAgICAgICAgICAgdGhpcy5fdG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGFsbFByb2plY3RzID0gW107XG5sZXQgZ3ltID0gbmV3IFByb2plY3QoJ2d5bScpO1xubGV0IHdvcmsgPSBuZXcgUHJvamVjdCgnd29yaycpO1xuYWxsUHJvamVjdHMucHVzaChneW0pO1xuYWxsUHJvamVjdHMucHVzaCh3b3JrKTtcblxuXG5leHBvcnQgeyBQcm9qZWN0LCBhbGxQcm9qZWN0cyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICAvLyBnZXQgbWV0aG9kc1xuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCkgeyBcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgLy8gc2V0IG1ldGhvZHNcbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRXZWJwYWdlIH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmluaXRXZWJwYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9