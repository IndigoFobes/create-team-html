//const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call on super
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getNumber() {
        return this.officeNumber;
    };

    getRole() {
        return 'Manager'
    };
}

module.exports = Manager;

