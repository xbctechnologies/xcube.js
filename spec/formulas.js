function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function myChecker(someState) {
    // console.log("myChecker() someState=", someState, typeof someState);
    return {
        asymmetricMatch: function (compareTo) {
            // console.log("asymmetricMatch() compareTo=", compareTo);
            return compareTo.myState === someState;
        },

        jasmineToString: function () {
            // console.log("jasmineToString()");
            return '<myChecker: ' + someState + '>';
        }
    }
}
var myCustomEquality = function (first, second) {
    // console.log(typeof first, typeof second, first[0], second[1]);
    if (typeof first == "string" && typeof second == "string") {
        return first[0] == second[0];
    }

};


module.exports = {sum, subtract, multiply, divide, myChecker, myCustomEquality};