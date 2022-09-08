class Employee {
    // first, the constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods
    checkName() {
        return this.name
    }

    // checkNameType(name) {
    //     return typeof name;
    // }

    checkNameType(name) {
        if (typeof name === 'string') {
            return true
        }
        else {
            return undefined;
        }
    }
    // checkIdType(id) {
    //     if (typeof id === "number") {
    //         return true;
    //     }
    //     else {
    //         return `${this.id} is not a valid id. Please enter a number.`
    //     }
    // }

    // checkEmailType(email) {
    //     if (typeof email === "string") {
    //         return true;
    //     }
    //     else {
    //         return `${this.email} is not a valid email address. Please enter a string.`
    //     }
    // }
}

module.exports = Employee;