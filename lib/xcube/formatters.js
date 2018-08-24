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

var errStrMap = {
    inputFilePath2: 'Second parameter should be FilePath. (like "/Users/yourname/filename")',
    inputMustString1: 'First parameter should be string type.',
    inputMustString2: 'Second parameter should be string type.',
    inputMustString3: 'Third parameter should be string type.',
    inputMustHexString1: 'First parameter should be string type.',
    inputMustHexStringOdd1: 'Fail decode: odd length hex string.\nFirst parameter should be even length hex string.',
    inputMustHexString2: 'Second parameter should be string type.',
    inputMustHexStringOdd2: 'Fail decode: odd length hex string.\nSecond parameter should be even length hex string.',
    inputMustNumber1: 'First parameter should be number type.',
    inputMustNumber2: 'Second parameter should be number type.',
    inputMustNumber4: 'Fourth parameter should be number type.',
    inputMustStrOrNum1: 'First parameter should be number or string type.',
    inputMustStrOrNum2: 'Second parameter should be number or string type.',
    inputMustBool1: 'First parameter should be boolean type. (true / false)',
    inputMustBool2: 'Second parameter should be boolean type. (true / false)',
    inputMustObject1: 'First parameter should be object type.',
};

var inputFilePath2 = function (path) {
    if (utils.isString(path)) {
        return path
    } else {
        throw new Error(errStrMap.inputFilePath2);
    }
};
var inputMustString1 = function (string) {
    if (utils.isString(string)) {
        return string
    } else {
        throw new Error(errStrMap.inputMustString1);
    }
};
var inputMustString2 = function (string) {
    if (utils.isString(string)) {
        return string
    } else {
        throw new Error(errStrMap.inputMustString2);
    }
};
var inputMustString3 = function (string) {
    if (utils.isString(string)) {
        return string
    } else {
        throw new Error(errStrMap.inputMustString3);
    }
};
var inputMustHexString1 = function (string) {
    if (utils.isString(string)) {
        if(string.length % 2) {
            throw new Error(errStrMap.inputMustHexStringOdd1);
        } else {
            return string
        }
    } else {
        throw new Error(errStrMap.inputMustHexString1);
    }
};
var inputMustHexString2 = function (string) {
    if (utils.isString(string)) {
        if(string.length % 2) {
            throw new Error(errStrMap.inputMustHexStringOdd2);
        } else {
            return string
        }
    } else {
        throw new Error(errStrMap.inputMustHexString2);
    }
};
var inputMustNumber1 = function (number) {
    if (utils.isNumber(number)) {
        return number
    } else {
        throw new Error(errStrMap.inputMustNumber1);
    }
};
var inputMustNumber2 = function (number) {
    if (utils.isNumber(number)) {
        return number
    } else {
        throw new Error(errStrMap.inputMustNumber2);
    }
};
var inputMustNumber4 = function (number) {
    if (utils.isNumber(number)) {
        return number
    } else {
        throw new Error(errStrMap.inputMustNumber4);
    }
};
var inputMustStrOrNum1 = function (param) {
    if (utils.isNumber(param)) {
        return param
    } else if (utils.isString(param)) {
        return param
    } else {
        throw new Error(errStrMap.inputMustStrOrNum1);
    }
};
var inputMustStrOrNum2 = function (param) {
    if (utils.isNumber(param)) {
        return param
    } else if (utils.isString(param)) {
        return param
    } else {
        throw new Error(errStrMap.inputMustStrOrNum2);
    }
};
var inputMustBool1 = function (param) {
    if (utils.isBoolean(param)){
        return param;
    } else {
        throw new Error(errStrMap.inputMustBool1);
    }
};
var inputMustBool2 = function (param) {
    if (utils.isBoolean(param)){
        return param;
    } else {
        throw new Error(errStrMap.inputMustBool2);
    }
};
var inputMustObject1 = function (param) {
    if (utils.isObject(param)){
        return param;
    } else {
        throw new Error(errStrMap.inputMustObject1);
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

    var forView = JSON.stringify(res, null, 3);
    console.log(forView);

    // var jsonPayloadBody = utils.decodeBase64(res.payloadBody);
    // res.payloadBody  = JSON.parse(jsonPayloadBody);
    return true;
};
var outputXChainInfoFormatter = function(res) {

    // var a = util.inspect(res, {depth:5});
    var forView = JSON.stringify(res, null, 3);
    console.log(forView);

    return true;
};


module.exports = {
    errStrMap: errStrMap,

    inputFilePath2: inputFilePath2,
    inputMustString1: inputMustString1,
    inputMustString2: inputMustString2,
    inputMustString3: inputMustString3,
    inputMustHexString1: inputMustHexString1,
    inputMustHexString2: inputMustHexString2,
    inputMustNumber1: inputMustNumber1,
    inputMustNumber2: inputMustNumber2,
    inputMustNumber4: inputMustNumber4,
    inputMustStrOrNum1: inputMustStrOrNum1,
    inputMustStrOrNum2: inputMustStrOrNum2,
    inputMustBool1: inputMustBool1,
    inputMustBool2: inputMustBool2,
    inputMustObject1: inputMustObject1,

    outputBlockResFormatter: outputBlockResFormatter,
    outputBondFormatter: outputBondFormatter,
    outputPayloadBodyFormatter: outputPayloadBodyFormatter,
    outputXChainInfoFormatter: outputXChainInfoFormatter
};

