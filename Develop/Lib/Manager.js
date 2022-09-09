const inquirer = require('inquirer');

// Prompt for Manager's name
const promptUser = () => {
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