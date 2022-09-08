class Employee {
    // first, the constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods
    checkInputType(name) {
        if (typeof name === "string") {
            return `Name: ${this.name}`
        }
        else {
            return `${this.name} is not a valid name. Please enter a string.`
        }
    }
}

module.exports = Employee;