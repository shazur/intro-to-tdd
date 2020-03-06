const MINUS = '-'
const PLUS = '+'
const MULTIPLY = '*'
const sum = (num1, num2) => num1 + num2
const multiply = (num1, num2) => num1 * num2
const subtract = (minuend, subtrahend) => minuend - subtrahend

module.exports = () => {
    function handleOperation(formula, sign, initialValue, operation) {
        return formula.split(sign).reduce((result, strNumber) => {
            return operation(calculate(String(result)), calculate(strNumber))
        }, initialValue)
    }
    function handleSum(formula) {
        return handleOperation(formula, PLUS, 0, sum)
    }
    function handleMultiply(formula) {
        return handleOperation(formula, MULTIPLY, 1, multiply)
    }
    function handleSubtract(formula) {
        const minusIndex = formula.indexOf(MINUS)
        const minuend = formula.substring(0, minusIndex)
        const subtrahend = formula.substring(minusIndex + 1)
        return handleOperation(subtrahend, MINUS, minuend, subtract)
    }

    function calculate(formula) {
        if (formula.includes(PLUS)) {
            return handleSum(formula)
        }
        if (formula.includes(MINUS)) {
            return handleSubtract(formula)
        }
        if (formula.includes(MULTIPLY)) {
            return handleMultiply(formula)
        }
        return Number(formula)
    }
    return {calculate}
}