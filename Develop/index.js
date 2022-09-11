// Require the parent constructor
const Employee = require('./Lib/Employee');
const generateHTML = require('./Src/generateHTML');
const Html = require('./Src/generateHTML')

// create a new employee to initialize app
const employee = new Employee();

//employee.getEmployeeInfo();

// A method from Employee.js
employee.promptUser();