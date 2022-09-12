// Require all js files, inquirer, fs
const Employee = require('./Lib/Employee');
const Manager = require('./Lib/Manager');
const Intern = require('./Lib/Intern');
const Engineer = require('./Lib/Engineer');
const generateHTML = require('./Src/generateHTML');
const inquirer = require('inquirer');
const fs = require('fs');

// Prompts
promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter manager's name."
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter manager's id."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter manager's email address."
        }
    ])
    .then((responses) => {
        const managerContent = generateHTML(responses);
        console.log(managerContent);
        askOptions();
    })
};

askOptions = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'newEmployee',
            message: 'To add an employee, please choose an option from below. Or finish building team.',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        },
    ])
    .then((response) => {
        console.log(response.newEmployee[0]);
    })
}
// create a new employee to initialize app
const employee = new Employee('john', 66, 'j.com');
employee.getName();


// Initial prompt
promptManager();


