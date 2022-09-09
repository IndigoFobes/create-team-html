const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    // first, the constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    firstPrompt() {
        this.getName();
    }


    getName() {
        inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: "Please enter employee's name."
            }
        ])   
        .then((res) => {
            console.log(res);
            this.getId();
        })
    }

    getId() {
        inquirer
        .prompt ([
            {
                type: 'number',
                name: 'id',
                message: "Please enter employee id."
            }
        ])   
        .then((res) => {
            console.log(res);
            this.getEmail();
        })
    }
    
    getEmail() {
        inquirer
        .prompt ([
            {
                type: 'input',
                name: 'email',
                message: "Please enter employee's email address."
            }
        ])   
        .then((res) => {
            console.log(res);
        })
    }

    getRole() {
        return "employee"
    }


};
//const elvis = new Employee("Elvis", 556, 'elvispres@hotmail.com');

//console.log(elvis);

module.exports = Employee;