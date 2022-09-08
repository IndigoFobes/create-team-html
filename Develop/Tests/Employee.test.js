// require relevant js file
const Employee = require('../Lib/Employee');

describe('Employee input', () => {

    it('should make sure a name is being returned with the name function', () => {

        const employee = new Employee('John');

        expect(employee.checkName(employee)).toBe('John');
    })


    it('should check input type for name; if not a string, throw an error', () => {

        const employee = new Employee(7);
        expect(employee.checkNameType(7)).toBeFalsy();
        
    })

    // it('should log an error if user inputs the wrong data type for id', () => {

    //     const id = new Employee('John', 7, 'gmail');

    //     expect(id.checkIdType(id)).toBeTruthy();
    // })

    // it('should log an error if user inputs the wrong data type for email', () => {

    //     const email = new Employee('John', 7, 'john@gmail.com');

    //     expect(email.checkEmailType(email)).toBeTruthy();
    // })

})