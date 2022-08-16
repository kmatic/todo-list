import Todo from "./todo";

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

let todo1 = new Todo('Work out', 'Do heavy push day', '2020-01-31', '1');
let todo2 = new Todo('Go for a Run', 'Run around the park', '2022-02-20', '2');
allProjects[0].addTodo(todo1);
allProjects[0].addTodo(todo2);

export { Project, allProjects }