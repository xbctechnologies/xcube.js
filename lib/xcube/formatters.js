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

    // var forView = JSON.stringify(res, null, 4);
    // function parseObj (obj) {
    //     if (typeof obj == "object") {
    //         for (var k in obj) {
    //             var val = obj[k];
    //             if (typeof val == "object"){
    //                 parseObj(val);
    //             }
    //         }
    //     }
    // }
    // parseObj(res);
    // console.log("res=", res, ", typ=", typeof res, res.length, res[0].childXChainInfo);
    // console.log(res[0].childXChainInfo[0]);
    // console.log(res[0].childXChainInfo[0].childXChainInfo[0].xchainID);
    // console.log(res[0].childXChainInfo[0].childXChainInfo[0].childXChainInfo);

    // if (utils.isArray(res)) {
    //     res.forEach(function(item){
    //        console.log("deps 1 : ", item);
    //        if (utils.isArray(item)){
    //            item.forEach(function(item2){
    //                console.log("deps 2 : ", item2);
    //                if (utils.isArray(item2)){
    //                    item2.forEach(function (item3) {
    //                        console.log("deps 3 : ", item3);
    //                        if (utils.isArray(item3)) {
    //                            item3.forEach(function (item4) {
    //                                console.log("deps 4 : ", item4);
    //                            })
    //                        }else{
    //                            item3.xchainID="deps3";
    //                        }
    //                    })
    //                }else{
    //                    item2.xchainID="deps2";
    //                }
    //            });
    //        }else{
    //            item.xchainID="deps1";
    //        }
    //     });
    // }
    // console.log(res[0].childXChainInfo[0].childXChainInfo[0].xchainID);

    // var res_len = res.length;
    //
    // function toObject(arr) {
    //     var rv = {};
    //     for (var i = 0; i < arr.length; ++i){
    //         rv[i] = arr[i];
    //     }
    //
    //     return rv;
    // }
    // var res2 = toObject(res);
    //
    // for(var i=0; i<res.length; i++){
    //     if (res2[i].childXChainInfo != null){
    //         var len = res2[i].childXChainInfo.length;
    //
    //         var tmpObj = toObject(res2[i].childXChainInfo);
    //         res2[i].childXChainInfo = tmpObj;
    //
    //         for(var j=0; j<len; j++){
    //             if (res2[i].childXChainInfo[j].childXChainInfo != null) {
    //                 console.log("j=", j, " res2[i].childXChainInfo[j].childXChainInfo=", res2[i].childXChainInfo[j].childXChainInfo);
    //
    //                 res2[i].childXChainInfo[j].childXChainInfo = toObject(res2[i].childXChainInfo[j].childXChainInfo);
    //                 console.log("res2[i].childXChainInfo[j].xchainID=", res2[i].childXChainInfo[j].xchainID);
    //
    //
    //             }
    //         }
    //     }
    // }


    //
    // function test(arr){
    //     if (utils.isArray(arr)) {
    //         arr.forEach(function(item){
    //
    //         })
    //     }else{
    //
    //     }
    // }


    // var testObj={};
    //
    // if (utils.isArray(res)) {
    //     res.forEach(function(obj){
    //
    //     })
    // }
    //
    // res.forEach(function(i){
    //     console.log("i=",i);
    //     if (typeof i.childXChainInfo == "object" && i.childXChainInfo != null){
    //         console.log("child=", i.childXChainInfo);
    //         i.childXChainInfo.forEach(function(i2){
    //             console.log("i2=", i2);
    //             if (typeof i2.childXChainInfo == "object" && i2.childXChainInfo != null){
    //                 i2.childXChainInfo.forEach(function(i3){
    //                     console.log("i3=",i3);
    //                     if (typeof i3.childXChainInfo == "object" && i3.childXChainInfo != null){
    //                         i3.childXChainInfo.forEach(function (i4) {
    //                             console.log("i4", i4);
    //                         })
    //                     }else{
    //                         i3.xchainID="i3"
    //                     }
    //                 })
    //             }else{
    //                 i2.xchainID="i2";
    //             }
    //         })
    //     }else{
    //         i.xchainID="i";
    //     }
    // });
    // console.log(res[0].childXChainInfo[0].childXChainInfo[0].xchainID);





    // var a = [{
    //     obj1: [{
    //         obj2: [{
    //             obj3: [{
    //                 a:"A",
    //                 b:"b",
    //             }]
    //         }]
    //     }]
    // }];
    // console.log("a=", a);

    // function replacer(key, value) {
    //     if (typeof value === "number") {
    //         return "\x1b[31m"+ value+ "\x1b[0m"; // red
    //     } else if (typeof value === "string") {
    //         return "\x1b[32m"+ value+ "\x1b[0m"; // green
    //     } else if (typeof value === "boolean") {
    //         return "\x1b[1m"+ value+ "\x1b[0m"; // bright
    //     }
    //     return value;
    // }

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

