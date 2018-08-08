/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

var utils = require('../utils/util');


var inputTest = function (inputVal) {
    console.log("inputVal=", inputVal, typeof inputVal);
    var bigN = utils.toBigNumber(inputVal);
    console.log("bigNum=", bigN, typeof bigN);
    var deci = utils.toDecimal(inputVal)
    console.log("deci=", deci, typeof deci);

    // console.log("utils.toDecimal(inputVal) = ", utils.toDecimal(inputVal));
    return deci
};
var outputTest = function (param) {
    console.log("output param=", param);
    var a = param + "_jh";
    return a
};

/**
 * Formats the output of a block to its proper values
 *
 * @method outputBlockFormatter
 * @param {Object} block
 * @returns {Object}
 */
var outputBlockFormatter = function (block) {
    // console.log("1. output block.blockNo=", block.blockNo, typeof block.blockNo);
    // console.log(block.numTxs, typeof block.numTxs);
    // console.log(block.time, typeof block.time);

    return block;
};
var inputMustString1 = function (string) {
    if (utils.isString(string)) {
        return string
    } else {
        throw new Error('First parameter should be string type.');
    }
};
var inputMustString2 = function (string) {
    if (utils.isString(string)) {
        return string
    } else {
        throw new Error('Second parameter should be string type.');
    }
};
var inputMustNumber1 = function (number) {
    if (utils.isNumber(number)) {
        return number
    } else {
        throw new Error('First parameter should be number type.');
    }
};
var inputMustNumber2 = function (number) {
    if (utils.isNumber(number)) {
        return number
    } else {
        throw new Error('Second parameter should be number type.');
    }
};
var inputMustStrOrNum1 = function (param) {
    if (utils.isNumber(param)) {
        return param
    } else if (utils.isString(param)) {
        return param
    } else {
        throw new Error('First parameter should be number or string type.');
    }
};
var inputMustStrOrNum2 = function (param) {
    if (utils.isNumber(param)) {
        return param
    } else if (utils.isString(param)) {
        return param
    } else {
        throw new Error('Second parameter should be number or string type.');
    }
};

module.exports = {
    inputTest: inputTest,
    inputMustString1: inputMustString1,
    inputMustString2: inputMustString2,
    inputMustNumber1: inputMustNumber1,
    inputMustNumber2: inputMustNumber2,
    inputMustStrOrNum1: inputMustStrOrNum1,
    inputMustStrOrNum2: inputMustStrOrNum2,
    outputTest: outputTest,
    outputBlockFormatter: outputBlockFormatter
};

