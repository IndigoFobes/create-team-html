// Include required modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./Src/generateHTML')
const Employee = require('./Lib/Employee');
const Engineer = require('./Lib/Engineer');
const Intern = require('./Lib/Intern');
const Manager = require('./Lib/Manager');

const promptUser = () =>
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

    // Function to initialize app
    function init() {
        promptUser();
    }
    
    // Run init
    init();