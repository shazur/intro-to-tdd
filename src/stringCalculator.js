const multiply = (num1, num2) => num1 * num2
const sum = (num1, num2) => num1 + num2
const minus = (num1, num2) => num1 - num2

module.exports = () => {
    function executeOperation(formula, sign, operation, initialValue) {
        return formula.split(sign).reduce((result, strNum) => {
            return operation(calculate(result.toString()), calculate(strNum))
        }, initialValue)
    }
    function handleMultiply(formula) {
        return executeOperation(formula, '*', multiply, 1)
    }
    function handleSum(formula) {
        return executeOperation(formula, '+', sum, 0)
    }
    function handleMinus(formula) {
        const minusIndex = formula.indexOf('-')
        const subtrahend = formula.substring(minusIndex + 1)
        const minuend = formula.substring(0, minusIndex)
        return executeOperation(subtrahend, '-', minus, minuend)
    }

    function calculate(formula) {
        if (formula.includes('+')) {
            return handleSum(formula)
        } else if(formula.includes('-')) {
            return handleMinus(formula)
        }
        else if (formula.includes('*')) {
            return handleMultiply(formula)
        }
        return Number(formula)
    }
    return {calculate}
}