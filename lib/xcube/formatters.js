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


var inputFilePath2 = function (path) {
    console.log("path=", path);
    // var text = fs.readFileSync('./test.txt', 'utf8');
    // fsys.mkdirSync("./a");
    // fs.emptyDir();
    // var text = fs.readFileSync();

    return path
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
var inputMustHexString1 = function (string) {
    if (utils.isString(string)) {
        if(string.length % 2) {
            throw new Error('Fail decode: odd length hex string.\nFirst parameter should be even length hex string.');
        } else {
            return string
        }
    } else {
        throw new Error('First parameter should be string type.');
    }
};
var inputMustHexString2 = function (string) {
    if (utils.isString(string)) {
        if(string.length % 2) {
            throw new Error('Fail decode: odd length hex string.\nSecond parameter should be even length hex string.');
        } else {
            return string
        }
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
var outputPayloadBodyFormatter = function (res) {
    function parseObj (obj) {
        if (typeof obj == "object") {
            for (var k in obj) {
                var val = obj[k];
                if (typeof val == "object"){
                    parseObj(val);
                } else if (k == "payloadBody") {
                    var tmp = utils.decodeBase64(val);
                    obj[k] = JSON.parse(tmp);
                }
            }
        }
    }
    parseObj(res);

    // var jsonPayloadBody = utils.decodeBase64(res.payloadBody);
    // res.payloadBody  = JSON.parse(jsonPayloadBody);
    return res;
};


module.exports = {
    inputFilePath2: inputFilePath2,
    inputMustString1: inputMustString1,
    inputMustString2: inputMustString2,
    inputMustHexString1: inputMustHexString1,
    inputMustHexString2: inputMustHexString2,
    inputMustNumber1: inputMustNumber1,
    inputMustNumber2: inputMustNumber2,
    inputMustStrOrNum1: inputMustStrOrNum1,
    inputMustStrOrNum2: inputMustStrOrNum2,

    outputBlockResFormatter: outputBlockResFormatter,
    outputBondFormatter: outputBondFormatter,
    outputPayloadBodyFormatter: outputPayloadBodyFormatter
};

