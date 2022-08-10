export default class Project {
    constructor(name) {
        this.name = name;
        this.projectTodos = [];
    }

    get name() {
        return this.name;
    }

    get projectTodos() {
        return this.projectTodos;
    }

    set name(value) {
        if (value) {
            this.name = value;
        }
    }

    set projectTodos(value) {
        if (value) {
            this.projectTodos = value;
        }
    }

    addTodo(newTodo) {
        if (newTodo) {
            this.projectTodos.push(newTodo);
        }
    }
}