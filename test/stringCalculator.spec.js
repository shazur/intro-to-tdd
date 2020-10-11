const stringCalculator = require('../src/stringCalculator')
const {expect} = require('chai')

describe('stringCalculator', () => {
    it('returns 1 for 1', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('1')

        expect(result).to.equal(1)
    })

    it('returns 2 for 2', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('2')

        expect(result).to.equal(2)
    })

    it('returns 2 for 1+1', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('1+1')

        expect(result).to.equal(2)
    })
    it('returns 3 for 1+2', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('1+2')

        expect(result).to.equal(3)
    })

    it('returns 3 for 1+1+1', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('1+1+1')

        expect(result).to.equal(3)
    })

    it('returns 6 for 2*3', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('2*3')

        expect(result).to.equal(6)
    })

    it('returns 7 for 1+3*2', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('1+3*2')

        expect(result).to.equal(7)
    })

    it('returns 3 for 8-5', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('8-5')

        expect(result).to.equal(3)
    })

    it('returns 6 for 1+2*4-3"', () => {
        const calculator = stringCalculator()

        const result = calculator.calculate('1+2*4-3')

        expect(result).to.equal(6)
    })
})
