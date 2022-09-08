// require relevant js file
const Employee = require('../Lib/Employee');

describe('Employee input type', () => {

    it('should log an error if user inputs the wrong data type for a given prompt', () => {

        const name = new Employee('John');

        expect(typeof name).toBe('string');

    })

})