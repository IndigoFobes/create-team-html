const inquirer = require('inquirer');
const fs = require('fs');

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

    checkNameType(name) {
        if (typeof name === 'string') {
            return true
        }
        else {
            return undefined;
        }
    }

    checkIdType(id) {
        if (typeof id === 'number') {
            return true
        }
        else {
            return undefined;
        }
    }

    checkEmailType(email) {
        if (typeof email === 'string') {
            return true
        }
        else {
            return undefined;
        }
    }
    
    // Prompt user for manager info to get started
    promptUser() {
        inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'managerName',
                    message: "Please enter manager's name."
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "Please enter manager's ID."
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "Please enter manager's email address."
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "Please enter office number."
                },
                {
                    type: 'list',
                    name: 'options',
                    message: 'Please select an option:',
                    choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
                }
            ])
    }
};


const elvis = new Employee("Elvis", 556, 'elvispres@hotmail.com');

console.log(elvis);

module.exports = Employee;