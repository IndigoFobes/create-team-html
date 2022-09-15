const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call on super
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
}

// const generateIntern = ({name, id, email, school}) => {
//     return `
//     <container>
//         <h2>Intern</h2>
//         <ul>
//             <li> Name: ${name} </li>
//             <li> ID: ${id} </li>
//             <li> Email: ${email} </li>
//             <li> School: ${school} </li>
//         </ul>
//     </container>`
// };

module.exports = Intern;