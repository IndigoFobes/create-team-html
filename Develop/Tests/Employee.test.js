// require relevant js file
const Employee = require('../Lib/Employee');

describe('Employee input type', () => {

    it('should log an error if user inputs the wrong data type for name', () => {

        const name = new Employee('John');

        expect(name.checkNameType(name)).toBe('John');
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