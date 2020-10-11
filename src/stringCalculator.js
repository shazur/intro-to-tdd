const MINUS = '-'
const MULTIPLY = '*'
const PLUS = '+'
const sum = (numA, numB) => numA + numB
const mult = (numA, numB) => numA * numB
const subtract = (numA, numB) => numA - numB

module.exports = () => {
    function handleOperation(formula, sign, initialValue, operation) {
        const numArray = formula.split(sign)
        return numArray.reduce((result, numStr) => {
            return operation(result, calculate(numStr))
        }, initialValue)
    }

    function handleSum(formula) {
        return handleOperation(formula, PLUS, 0, sum)
    }

    function handleMultiplication(formula) {
        return handleOperation(formula, MULTIPLY, 1, mult)
    }

    function handleSubtraction(formula) {
        const minusIndex = formula.indexOf(MINUS)
        const minuend = formula.substring(0, minusIndex)
        const subtrahend = formula.substring(minusIndex + 1)
        return handleOperation(subtrahend, MINUS, calculate(minuend), subtract)
    }

    function calculate(formula) {
        if (formula.includes(PLUS)) {
            return handleSum(formula)
        }
        if (formula.includes(MINUS)) {
            return handleSubtraction(formula)
        }
        if (formula.includes(MULTIPLY)) {
            return handleMultiplication(formula)
        }
        return Number(formula)
    }

    return {
        calculate
    }
}
