export default class Todo {
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