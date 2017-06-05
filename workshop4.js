
var Calculator = (function () {

    // Define variables here...
    // It has to be the names of methods below
    var calcAdd, calcMultiply, calcDivide;
    // Define methods here...
    // Have to pass in number 1 and number 2 to individual methods, that's the sticking point
    calcAdd = function (number1, number2) {
        return (number1 + number2);
    };
    calcMultiply = function (number1, number2) {
        return (number1 * number2);
    };
    calcDivide = function (number1, number2) {
        return (number1 / number2);
    };
    // Return an object
    return {
        add: calcAdd,
        multiply: calcMultiply,
        divide: calcDivide
    };

})();

function startScript() {
    var result1 = Calculator.add(7, 8);
    console.log(result1); // result = 15
    var result2 = Calculator.multiply(3, 8);
    console.log(result2);// result = 24
    var result3 = Calculator.divide(3, 8);
    console.log(result3);// result = 0.375
}

startScript();