module.exports = () => {

    function processAction(numArray, action, initialValue) {
        return numArray.reduce((result, num) => {
            return action(calculate(result.toString()), calculate(num))
        }, initialValue)
    }
    const sum = (a, b) => a + b
    const multiply = (a, b) => a * b
    const subtract = (a, b) => a - b
    const split = (formula, separator) => formula.split(separator)

    function calculate (formula) {
        if (formula.includes('+')) {
            return processAction(split(formula, '+'), sum, 0)
        } else if (formula.includes("*") ) {
            return processAction(split(formula, '*'), multiply, 1)
        }  else if (formula.includes('-')) {
            const numArray = split(formula, '-')
            return processAction(numArray.slice(1), subtract, numArray[0])
        }
        return Number(formula)
    }

    return {
        calculate
    }
}