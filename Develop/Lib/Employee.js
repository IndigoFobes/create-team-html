class Employee {
    // first, the constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Methods
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    }
    
    getEmail() {
       return this.email;
    }

    getRole() {
        
        // Call function to ask what user wants to do next.
    }

};
//const elvis = new Employee("Elvis", 556, 'elvispres@hotmail.com');

//console.log(elvis);

module.exports = Employee;