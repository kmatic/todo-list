export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    // get methods
    get title() {
        return this.title;
    }

    get description() {
        return this.description;
    }

    get dueDate() { 
        return this.dueDate;
    }

    get priority() {
        return this.priority;
    }

    // set methods
    set title(value) {
        if (value) {
            this.title = value;
        }
    }

    set description(value) {
        if (value) {
            this.description = value;
        }
    }

    set dueDate(value) {
        if (value) {
            this.dueDate = value;
        }
    }

    set priority(value) {
        if (value) {
            this.priority = value;
        }
    }
}