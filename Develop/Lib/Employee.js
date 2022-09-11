const inquirer = require('inquirer');
const fs = require('fs');



class Employee {
    // first, the constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Methods
    promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter employee name.'
            },
            {
                type: 'number',
                name: 'id',
                message: 'Please enter employee id.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter employee email address.'
            }
        ])
    }

    getName(name) {
        return `Name: ${name}`
    };

    getId() {
        
    }
    
    getEmail() {
       
    }

    getRole() {
        // Call function to ask what user wants to do next.
    }

};
//const elvis = new Employee("Elvis", 556, 'elvispres@hotmail.com');

//console.log(elvis);

module.exports = Employee;