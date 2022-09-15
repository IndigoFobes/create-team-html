const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call on super
        super (name, id, email);
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;