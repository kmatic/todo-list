import Todo from "./todo";

class Project {
    constructor(name) {
        this._name = name;
        this._todos = [];
    }

    get name() {
        return this._name;
    }

    get todos() {
        return this._todos;
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
let gym = new Project('Gym');
let work = new Project('Work');
allProjects.push(gym);
allProjects.push(work);

let todo1 = new Todo('Work out', 'Do heavy push day', 'tomorrow', '1');
let todo2 = new Todo('Go for a Run', 'Run around the park', 'Next week', '2');
allProjects[0].addTodo(todo1);
allProjects[0].addTodo(todo2);
console.log(allProjects[0].todos);

export { Project, allProjects }