const stringCalculator = require('../src/stringCalculator')
const {expect} = require('chai')

describe('stringCalculator', () => {
    const calculator = stringCalculator()
    it('should return 1 for 1', () => {
        const expectedResult = 1

        const actualResult = calculator.calculate('1')

        expect(actualResult).to.equal(expectedResult)
    })

    it('should return 2 for 2', () => {
        const expectedResult = 2

        const actualResult = calculator.calculate('2')

        expect(actualResult).to.equal(expectedResult)
    })

    it('should return 3 for 1+2', () => {
        const expectedResult = 3

        const actualResult = calculator.calculate('1+2')

        expect(actualResult).to.equal(expectedResult)
    })

    it('should return 3 for 1+1+1', () => {
        const expectedResult = 3

        const actualResult = calculator.calculate('1+1+1')

        expect(actualResult).to.equal(expectedResult)
    })

    it('should return 4 for 2*2', () => {
        const expectedResult = 4

        const actualResult = calculator.calculate('2*2')

        expect(actualResult).to.equal(expectedResult)
    })

    it('should return 5 for 1+2*2', () => {
        const expectedResult = 5

        const actualResult = calculator.calculate('1+2*2')

        expect(actualResult).to.equal(expectedResult)
    })

    it('should return 2 for 3-1', () => {
        const expectedResult = 2

        const actualResult = calculator.calculate('3-1')

        expect(actualResult).to.equal(expectedResult)
    })
})