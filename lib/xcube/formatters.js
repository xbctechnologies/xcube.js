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
var BigNumber = require('bignumber.js');

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

    inputFeeNumber: 'Fee should be number type.',
    inputAmountNumber: 'Amount should be number type.',

    inputMustAtxtype3: "Third parameter should be atxType (xto / atx)"
};

var objValueCheckBool = function (key, value) {
    if (utils.isBoolean(value)) {
        return value;
    } else {
        throw new Error(key + " should be boolean type. (true / false)")
    }
};
var objValueCheckString = function (key, value) {
    if (utils.isString(value)) {
        return value;
    } else {
        throw new Error(key + " should be string type.");
    }
};
var objValueCheckHexString = function (key, value) {
    if (utils.isString(value)) {
        if (value.length % 2) {
            throw new Error("Fail decode: odd length hex string.\n" + key + " should be even length hex string.");
        } else {
            return value;
        }
    } else {
        throw new Error(key + " should be string type.");
    }
};
var objValueCheckNumber = function (key, value) {
    if (utils.isNumber(value)) {
        return value;
    } else {
        throw new Error(key + " should be number type.");
    }
};
var objValueCheckNumToStr = function (key, value) {
    if (utils.isNumber(value)) {
        var tmpBig = new BigNumber(value);
        value = tmpBig.toString();
        return value;
    } else if (utils.isBigNumber(value)) {
        value = value.toString();
        return value;
    } else {
        throw new Error(key + " should be number type.");
    }
};
var objValueCheckObject = function (key, value) {
    if (utils.isObject(value)) {
        return value;
    } else {
        throw new Error(key + " should be object type.");
    }
};
var objValueCheckArray = function (key, value) {
    if (utils.isArray(value)) {
        return value;
    } else {
        throw new Error(key + " should be array type.")
    }
};
var objValueCheckStringNumber = function (key, value, type) {
    if (Number(value) >= 0) {
        return value
    } else {
        if (type === 7) {
            return "-1"
        }
        throw new Error(key + " should be a string in numeric form. (ex: '1000')")
    }
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
        if (string.length % 2) {
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
        if (string.length % 2) {
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
    if (utils.isBoolean(param)) {
        return param;
    } else {
        throw new Error(errStrMap.inputMustBool1);
    }
};
var inputMustBool2 = function (param) {
    if (utils.isBoolean(param)) {
        return param;
    } else {
        throw new Error(errStrMap.inputMustBool2);
    }
};
var inputMustObject1 = function (param) {
    if (utils.isObject(param)) {
        return param;
    } else {
        throw new Error(errStrMap.inputMustObject1);
    }
};
var inputSendTransaction1 = function (param) {
    // validCheck
    inputMustObject1(param);

    param.fee = objValueCheckStringNumber("Fee", param.fee);
    param.amount = objValueCheckStringNumber("Amount", param.amount);
    param.isSync = objValueCheckBool("IsSync", param.isSync);
    param.payloadType = objValueCheckNumber("PayloadType", param.payloadType);
    param.receiver = objValueCheckString("Receiver", param.receiver);
    param.sender = objValueCheckString("Sender", param.sender);
    param.targetChainId = objValueCheckString("TargetChainId", param.targetChainId);
    param.time = null;

    // viewObj("111", param);

    objValueCheckObject("PayloadBody", param.payloadBody);
    checkPayloadBody(param.payloadType, param.payloadBody);

    // viewObj("222", param);

    // payloadBody 변환 (Json -> base64 인코딩)
    var tmpPbody = param.payloadBody;
    var str = JSON.stringify(tmpPbody);
    var b64 = utils.encodeBase64(str);
    param.payloadBody = b64;

    // viewObj("after param", param);

    return param;
};

var inputMustAtxtype3 = function (param) {
    var str = inputMustString3(param);
    var atxType = utils.unitMapping(str);
    if (atxType == null) {
        throw new Error(errStrMap.inputMustAtxtype3);
    }
    return atxType;
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
    function parseObj(obj) {
        if (typeof obj === "object") {
            for (var k in obj) {
                var val = obj[k];
                if (typeof val === "object") {
                    parseObj(val);
                } else if (k === "payloadBody") {
                    var tmp = utils.decodeBase64(val);
                    obj[k] = JSON.parse(tmp);
                }
            }
        }
    }
    parseObj(res);

    if (res.payloadType === 10) {
        var forView = JSON.stringify(res, null, 3);
        console.log(forView);
        return null;
    } else {
        return res;
    }
};
var outputXChainInfoFormatter = function (res) {

    // var a = util.inspect(res, {depth:5});
    var forView = JSON.stringify(res, null, 3);
    console.log(forView);

    return null;
};
var outputExTxFormatter = function (res) {
    console.log("TxList\n" +
        "- ex.tx(1) = Show detail for commonTx example\n" +
        "- ex.tx(2) = Show fileTx example\n" +
        "- ex.tx(3) = Show bondTx example\n");

    return res;
};
var outputEx = function (res) {
    if (res.fee == "") {
        res.fee = "0";
    }
    if (res.amount == "") {
        res.amount = "0";
    }

    var tmpFee = new BigNumber(res.fee, 10);
    res.fee = tmpFee.toFormat();

    var tmpAmount = new BigNumber(res.amount, 10);
    res.amount = tmpAmount.toFormat();

    // res.fee = utils.fromXto(fee, "xto");
    return res;
};

function checkPayloadBody(pType, pBodyObj) {
    if (pType === 1) {
        objValueCheckString("payloadBody.input", pBodyObj.input);
    }
    else if (pType === 2) {
        objValueCheckNumber("payloadBody.op", pBodyObj.op);
        objValueCheckString("payloadBody.filePath", pBodyObj.filePath);
        objValueCheckString("payloadBody.info", pBodyObj.info);
        objValueCheckString("payloadBody.reserved", pBodyObj.reserved);

        objValueCheckArray("payloadBody.authors", pBodyObj.authors);
        for (var i=0; i<pBodyObj.authors.length; i++) {
            var val = pBodyObj.authors[i];
            objValueCheckHexString("payloadBody.authors["+i+"]", val);
        }
        // filePath -> dataHash
        pBodyObj["dataHash"] = pBodyObj.filePath;
        delete(pBodyObj.filePath);
    }
    else if (pType === 3 || pType === 4) {
        objValueCheckStringNumber("payloadBody.amount", pBodyObj.amount);
    }
    else if (pType === 5 || pType === 6) {
        objValueCheckStringNumber("payloadBody.amount", pBodyObj.amount);
        objValueCheckHexString("payloadBody.validatorAccountAddr", pBodyObj.validatorAccountAddr);
    }
    else if (pType === 7) {
        pBodyObj.rewardAmount = objValueCheckStringNumber("payloadBody.rewardAmount", pBodyObj.rewardAmount, pType);
        pBodyObj.validatorRewardRate = objValueCheckStringNumber("payloadBody.validatorRewardRate", pBodyObj.validatorRewardRate, pType);
        pBodyObj.delegatorRewardRate = objValueCheckStringNumber("payloadBody.delegatorRewardRate", pBodyObj.delegatorRewardRate, pType);

        pBodyObj.minCommonTxFee = objValueCheckStringNumber("payloadBody.minCommonTxFee", pBodyObj.minCommonTxFee, pType);
        pBodyObj.minBondingTxFee = objValueCheckStringNumber("payloadBody.minBondingTxFee", pBodyObj.minBondingTxFee, pType);
        pBodyObj.minGRProposalTxFee = objValueCheckStringNumber("payloadBody.minGRProposalTxFee", pBodyObj.minGRProposalTxFee, pType);
        pBodyObj.minGRVoteTxFee = objValueCheckStringNumber("payloadBody.minGRVoteTxFee", pBodyObj.minGRVoteTxFee, pType);
        pBodyObj.minXTxFee = objValueCheckStringNumber("payloadBody.minXTxFee", pBodyObj.minXTxFee, pType);

        pBodyObj.maxBlockNumsForVoting = objValueCheckStringNumber("payloadBody.maxBlockNumsForVoting", pBodyObj.maxBlockNumsForVoting, pType);
        pBodyObj.minBlockNumsToGRProposal = objValueCheckStringNumber("payloadBody.minBlockNumsToGRProposal", pBodyObj.minBlockNumsToGRProposal, pType);
        pBodyObj.minBlockNumsUtilReflection = objValueCheckStringNumber("payloadBody.minBlockNumsUtilReflection", pBodyObj.minBlockNumsUtilReflection, pType);
        pBodyObj.maxBlockNumsUtilReflection = objValueCheckStringNumber("payloadBody.maxBlockNumsUtilReflection", pBodyObj.maxBlockNumsUtilReflection, pType);

        pBodyObj.blockNumsFreezingValidator = objValueCheckStringNumber("payloadBody.blockNumsFreezingValidator", pBodyObj.blockNumsFreezingValidator, pType);
        pBodyObj.blockNumsUtilUnbonded = objValueCheckStringNumber("payloadBody.blockNumsUtilUnbonded", pBodyObj.blockNumsUtilUnbonded, pType);
        pBodyObj.maxDelegatableValidatorNums = objValueCheckStringNumber("payloadBody.maxDelegatableValidatorNums", pBodyObj.maxDelegatableValidatorNums, pType);
        pBodyObj.validatorNums = objValueCheckStringNumber("payloadBody.validatorNums", pBodyObj.validatorNums, pType);

        objValueCheckString("payloadBody.firstCompatibleVersion", pBodyObj.firstCompatibleVersion, pType);

        pBodyObj.currentReflection.blockNumsForVoting = objValueCheckStringNumber("payloadBody.currentReflection.blockNumsForVoting", pBodyObj.currentReflection.blockNumsForVoting, pType);
        pBodyObj.currentReflection.blockNumsUtilReflection = objValueCheckStringNumber("payloadBody.currentReflection.blockNumsUtilReflection", pBodyObj.currentReflection.blockNumsUtilReflection, pType);

    }
    else if (pType === 8) {
        objValueCheckBool("payloadBody.yesOrNo", pBodyObj.yesOrNo);
    }
    else if (pType === 9) {

    }
    else if (pType === 10) {
        objValueCheckStringNumber("payloadBody.depth", pBodyObj.depth);
        objValueCheckBool("payloadBody.hasAsset", pBodyObj.hasAsset);
        objValueCheckBool("payloadBody.enableSubAsset", pBodyObj.enableSubAsset);
        objValueCheckBool("payloadBody.nonExchangeChain", pBodyObj.nonExchangeChain);

        objValueCheckStringNumber("payloadBody.airdropRate", pBodyObj.airdropRate);

        for(var i=0; i<pBodyObj.assetHolders.length; i++){
            objValueCheckHexString("payloadBody.assetHolders["+i+"].accountAddr", pBodyObj.assetHolders[i].accountAddr);
            objValueCheckStringNumber("payloadBody.assetHolders["+i+"].amount", pBodyObj.assetHolders[i].amount);
        }
        for (var i=0; i<pBodyObj.seeds.length; i++){
            objValueCheckString("payloadBody.seeds["+i+"].ip", pBodyObj.seeds[i].ip);
            objValueCheckStringNumber("payloadBody.seeds["+i+"].port", pBodyObj.seeds[i].port);
        }
        for (var i=0; i<pBodyObj.validators.length; i++) {
            objValueCheckString("payloadBody.validators["+i+"].pub_key.type", pBodyObj.validators[i].pub_key.type);
            objValueCheckString("payloadBody.validators["+i+"].pub_key.value", pBodyObj.validators[i].pub_key.value);
            objValueCheckString("payloadBody.validators["+i+"].power", pBodyObj.validators[i].power);
        }

        objValueCheckString("payloadBody.customDesc", pBodyObj.customDesc)
    }
}


module.exports = {
    errStrMap: errStrMap,
    objValueCheckBool: objValueCheckBool,
    objValueCheckString: objValueCheckString,
    objValueCheckNumber: objValueCheckNumber,
    objValueCheckNumToStr: objValueCheckNumToStr,
    objValueCheckObject: objValueCheckObject,
    objValueCheckArray: objValueCheckArray,
    objValueCheckStringNumber: objValueCheckStringNumber,

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

    inputSendTransaction1: inputSendTransaction1,
    inputMustAtxtype3: inputMustAtxtype3,

    outputBlockResFormatter: outputBlockResFormatter,
    outputBondFormatter: outputBondFormatter,
    outputPayloadBodyFormatter: outputPayloadBodyFormatter,
    outputXChainInfoFormatter: outputXChainInfoFormatter,
    outputExTxFormatter: outputExTxFormatter,
    outputEx: outputEx
};

function viewObj(name, obj) {
    if (typeof obj == "object") {
        for (var k in obj) {
            var val = obj[k];
            console.log(name, "k=", k, "(", typeof k, ")", " val=", val, "(", typeof val, ")");
            if (typeof val === "object" && !utils.isBigNumber(val)) {
                viewObj(name, val);
            }
        }
    }
}
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}
function contains(r, s) {
    return r.indexOf(s) !== -1;
}


