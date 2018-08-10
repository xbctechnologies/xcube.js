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

var outputBlockResFormatter = function (blockRes) {
    // console.log("time=", blockRes.time, "(", typeof blockRes.time, ")");
    // blockRes.time = utils.toBigNumber(blockRes.time);
    // console.log("time=", blockRes.time, "(", typeof blockRes.time, ")");
    // console.log("isBigN=", utils.isBigNumber(blockRes.time));

    return blockRes
};
var outputBondFormatter = function (bond) {
    // console.log(bond, typeof bond, bond.time);
    // for (var k1 in bond) {
    //     var obj = bond[k1];
    //     for (var k2 in obj) {
    //         console.log("k2=", k2, obj[k2]);
    //         obj[k2] = utils.toBigNumber(obj[k2])
    //     }
    // }
    return bond
};


module.exports = {
    inputMustString1: inputMustString1,
    inputMustString2: inputMustString2,
    inputMustNumber1: inputMustNumber1,
    inputMustNumber2: inputMustNumber2,
    inputMustStrOrNum1: inputMustStrOrNum1,
    inputMustStrOrNum2: inputMustStrOrNum2,

    outputBlockResFormatter: outputBlockResFormatter,
    outputBondFormatter: outputBondFormatter
};

