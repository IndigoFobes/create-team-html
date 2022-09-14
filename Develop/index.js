// Require all js files, inquirer, fs
const Employee = require('./Lib/Employee');
const Manager = require('./Lib/Manager');
const Intern = require('./Lib/Intern');
const Engineer = require('./Lib/Engineer');
const generateHTML = require('./Src/generateHTML');
const generateIntern = require('./Lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
// Will use this array to puch content into and use to write html file
const contentArray = [];

// Prompts
// Prompt Manager
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
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "Please enter manager's office number."
        },
    ])
    .then((responses) => {
        // Create a new Manager object
        const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
        // Push this new object to empty content array
        contentArray.push(manager)
        console.log(contentArray)
        askOptions();
    })
};

// Prompt Intern
promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's name."
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter intern's id."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's email address."
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school."
        },
    ])
    .then ((response) => {
        const internContent = generateIntern(response);
        console.log(internContent);

    })
}

// Prompt Engineer
promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name."
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter engineer's id."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's email address."
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter engineer's github username."
        },
    ])
    .then ((response) => {
        const engineerContent = generateEngineer(response);
        console.log(engineerContent);

    })
}

// Ask user if they would like to add an employee or finish building team
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
        const userRes = response.newEmployee[0];
        if (userRes === 'Finish building my team') {
            // Make html and log 'html created'
            console.log('See Dist folder for generated html.')
        }
        else if (userRes === 'Intern') {
            promptIntern();
        }
        else if (userRes === 'Engineer') {
            // promptEngineer();
        }
        else {
            // error
        }
        //console.log(response.newEmployee[0]);
    })
};


// Initial prompt
promptManager();