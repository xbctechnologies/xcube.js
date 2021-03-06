var Tx = require('../../lib/xcube/api/tx');
var tx = new Tx(this);
var formatters = require('../../lib/xcube/formatters');
var responseForm = require('../helpers/responseForm');
var utils = require('../../lib/utils/util');
var TxReq = require('../../lib/xcube/apireq/tx_req');
var TxGuide = require('../../lib/xcube/api/txGuide');
var BigNumber = require('bignumber.js');

var txExData = {
    password: "password123",
    blockHash: "3D395FB9340AB345C2312ED2",
    wrongBlockHash: "3D395FB9340AB345C2312ED",
    rightAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB99091",
    wrongAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB9909",
    priKey: "3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266",
    chainId: "test_chainId",
    blockNo: 922337203683,
    txObj: {},
    filePath: ""
};

describe("tx >>", function () {
    // 1. SendTransaction
    it("SendTransaction(txReq apireq.TxRequest)", function () {
        var param1 = formatters.inputMustObject1(txExData.txObj);

        var sendTransaction = function(p1) {
            var txHash = "639F5F59C9D57892BA7932E1E2F5F689DDB1B2747AC2036E9E716DED92595DD2";
            return txHash;
        };
        expect(sendTransaction(param1)).toEqual(responseForm.txHash);
    });
    it("SendTransaction error check (First parameter : Object type)", function() {
        expect(function () {
            tx.sendTransaction(123);
        }).toThrowError(formatters.errStrMap.inputMustObject1);
    });

    // 2. Delegating
    it("Delegating(txReq apireq.TxRequest)", function () {
        var param1 = formatters.inputMustObject1(txExData.txObj);

        var delegating = function(p1) {
            var txHash = "639F5F59C9D57892BA7932E1E2F5F689DDB1B2747AC2036E9E716DED92595DD2";
            return txHash;
        };
        expect(delegating(param1)).toEqual(responseForm.txHash);
    });
    it("Delegating error check (First parameter : Object type)", function() {
        expect(function () {
            tx.delegating(123);
        }).toThrowError(formatters.errStrMap.inputMustObject1);
    });

    // 3. Undelegating
    it("Undelegating(txReq apireq.TxRequest)", function () {
        var param1 = formatters.inputMustObject1(txExData.txObj);

        var undelegating = function(p1) {
            var txHash = "639F5F59C9D57892BA7932E1E2F5F689DDB1B2747AC2036E9E716DED92595DD2";
            return txHash;
        };
        expect(undelegating(param1)).toEqual(responseForm.txHash);
    });
    it("Undelegating error check (First parameter : Object type)", function() {
        expect(function () {
            tx.undelegating(123);
        }).toThrowError(formatters.errStrMap.inputMustObject1);
    });

    // 4. Bonding
    it("Bonding(txReq apireq.TxRequest)", function () {
        var param1 = formatters.inputMustObject1(txExData.txObj);

        var bonding = function(p1) {
            var txHash = "639F5F59C9D57892BA7932E1E2F5F689DDB1B2747AC2036E9E716DED92595DD2";
            return txHash;
        };
        expect(bonding(param1)).toEqual(responseForm.txHash);
    });
    it("Bonding error check (First parameter : Object type)", function() {
        expect(function () {
            tx.bonding(123);
        }).toThrowError(formatters.errStrMap.inputMustObject1);
    });

    // 5. Unbonding
    it("Unbonding(txReq apireq.TxRequest)", function () {
        var param1 = formatters.inputMustObject1(txExData.txObj);

        var unbonding = function(p1) {
            var txHash = "639F5F59C9D57892BA7932E1E2F5F689DDB1B2747AC2036E9E716DED92595DD2";
            return txHash;
        };
        expect(unbonding(param1)).toEqual(responseForm.txHash);
    });
    it("Unbonding error check (First parameter : Object type)", function() {
        expect(function () {
            tx.unbonding(123);
        }).toThrowError(formatters.errStrMap.inputMustObject1);
    });

    // 6. SignTransaction
    it("SignTransaction(targetChainId string, address accounts.Address)", function () {
        var param1 = formatters.inputMustString1(txExData.chainId);
        var param2 = formatters.inputMustHexString2(txExData.rightAddress);

        var signTransaction = function(p1, p2) {
            var txSigRes = {
                V: "373524",
                R: "373525",
                S: "373526"
            };
            return txSigRes;
        };
        expect(signTransaction(param1)).toEqual(responseForm.transactionSigRes);
    });
    it("SignTransaction error check (First parameter : String type)", function() {
        expect(function () {
            tx.signTransaction();
            tx.signTransaction(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("SignTransaction error check (Second parameter : String type)", function() {
        expect(function () {
            tx.signTransaction(txExData.chainId, 123);
        }).toThrowError(formatters.errStrMap.inputMustHexString2);
    });
    it("SignTransaction error check (Second parameter : Odd length)", function() {
        expect(function () {
            tx.signTransaction(txExData.chainId, txExData.wrongAddress);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });

    // 7. GetTransaction
    it("GetTransaction(targetChainId string, txHash common.HexBytes)", function () {
        var param1 = formatters.inputMustString1(txExData.chainId);
        var param2 = formatters.inputMustHexString2(txExData.blockHash);

        var getTransaction = function(p1, p2) {
            var getTxRes = {
                amount: 333,
                blockHash: "",
                blockNumber: 3,
                payloadBody: "eyJhbW91bnQiOjEwfQ==",
                payloadType: 3,
                v: "",
                r: "",
                s: "",
                receiver: "0000000000000000000000000000000000000000",
                sender: "0000000000000000000000000000000000000000",
                txHash: "",
                txIndex: 0
            };
            // formatters.outputPayloadBodyFormatter(getTxRes);

            return getTxRes;
        };
        // expect(getTransaction(param1, param2)).toEqual(responseForm.getTxRes);
    });
    it("GetTransaction error check (First parameter : String type)", function() {
        expect(function () {
            tx.getTransaction();
            tx.getTransaction(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetTransaction error check (Second parameter : String type)", function() {
        expect(function () {
            tx.getTransaction(txExData.chainId, 123);
        }).toThrowError(formatters.errStrMap.inputMustHexString2);
    });
    it("GetTransaction error check (Second parameter : Odd length)", function() {
        expect(function () {
            tx.getTransaction(txExData.chainId, txExData.wrongBlockHash);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });

    // 8. GetTransactionReceipt
    it("GetTransactionReceipt(targetChainId string, txHash common.HexBytes)", function () {
        var param1 = formatters.inputMustString1(txExData.chainId);
        var param2 = formatters.inputMustHexString2(txExData.blockHash);

        var getTransactionReceipt = function(p1, p2) {
            var getTxReceiptRes = {
                amount: 222,
                blockHash: "",
                blockNumber: 2,
                payloadBody: "eyJmaWxlIjoiUHFBaEovUUIrNGlEeUhXMlByVFBycUNCVWFGTmtMeEh2Y2lPZFI3amN1RT0ifQ==",
                payloadType: 2,
                v: "",
                r: "",
                s: "",
                receiver: "0000000000000000000000000000000000000000",
                sender: "0000000000000000000000000000000000000000",
                txHash: "",
                status: 1,
                txIndex: 0
            };
            // formatters.outputPayloadBodyFormatter(getTxReceiptRes);

            return getTxReceiptRes;
        };
        // expect(getTransactionReceipt(param1, param2)).toEqual(responseForm.getTxReceiptRes);
    });
    it("GetTransactionReceipt error check (First parameter : String type)", function() {
        expect(function () {
            tx.getTransactionReceipt();
            tx.getTransactionReceipt(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetTransactionReceipt error check (Second parameter : String type)", function() {
        expect(function () {
            tx.getTransactionReceipt(txExData.chainId, 123);
        }).toThrowError(formatters.errStrMap.inputMustHexString2);
    });
    it("GetTransactionReceipt error check (Second parameter : Odd length)", function() {
        expect(function () {
            tx.getTransactionReceipt(txExData.chainId, txExData.wrongBlockHash);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });

    // 9. CheckOriginal
    it("CheckOriginal(targetChainId string, base64File string)", function () {
        var param1 = formatters.inputMustString1(txExData.chainId);
        var param2 = formatters.inputFilePath2(txExData.blockHash);

        var checkOriginal = function(p1, p2) {
            return true;
        };
        expect(checkOriginal(param1, param2)).toEqual(true);
    });
    it("CheckOriginal error check (First parameter : String type)", function() {
        expect(function () {
            tx.checkOriginal();
            tx.checkOriginal(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("CheckOriginal error check (Second parameter : String type)", function() {
        expect(function () {
            tx.checkOriginal(txExData.chainId, 123);
        }).toThrowError(formatters.errStrMap.inputFilePath2);
    });

    // test
    it("test", function () {
        /*var ex = Example;
        var p = ex.tx(3, true, true);
        p.payloadBody.amount = "10000000000000000000000";

        var tmpPbody = p.payloadBody;
        var str = JSON.stringify(tmpPbody);
        var b64 = utils.encodeBase64(str);
        console.log("str=", str, " \nb64=", b64);

        var d64 = utils.decodeBase64(b64);
        console.log("d64=", d64);
        d64Obj = JSON.parse(d64);
        console.log("d64=", d64, typeof d64Obj);
        console.log("d64Obj.amount=", d64Obj.amount);

        var bigAmount = new BigNumber(d64Obj.amount);
        console.log("string = ", bigAmount.toString());*/


        // d64.amount = new BigNumber(d64.amount);
        // console.log(typeof d64.amount);

        // console.log("p=", p)


        // formatters.inputSendTransaction1(p);
    });

});

describe("tx payloadBody >>", function () {
    it("payloadType1", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(1, true, true);

            sampleData.payloadBody.input = 1;
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.input should be string type.");
    });
    it("payloadType2", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(2, true, true);

            sampleData.payloadBody.op = "sdf";
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.op should be number type.");
    });
    it("payloadType3", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(3, true, true);
            sampleData.payloadBody.amount = "sdf";
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.amount should be a string in numeric form. (ex: '1000')");
    });
    it("payloadType4", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(4, true, true);
            sampleData.payloadBody.amount = "sdf";
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.amount should be a string in numeric form. (ex: '1000')");
    });

    //type 5
    it("payloadType5 (amount)", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(5, true, true);
            sampleData.payloadBody.amount = "sdf";
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.amount should be a string in numeric form. (ex: '1000')");
    });
    it("payloadType5 (validatorAccountAddr)", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData2 = ex.tx(5, true, true);
            sampleData2.payloadBody.validatorAccountAddr = txExData.wrongAddress;
            tx.sendTransaction(sampleData2);
        }).toThrowError("Fail decode: odd length hex string.\npayloadBody.validatorAccountAddr should be even length hex string.");
    });

    // type 6
    it("payloadType6 (amount)", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(6, true, true);
            sampleData.payloadBody.amount = "sdf";
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.amount should be a string in numeric form. (ex: '1000')");
    });
    it("payloadType6 (validatorAccountAddr)", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData2 = ex.tx(6, true, true);
            sampleData2.payloadBody.validatorAccountAddr = txExData.wrongAddress;
            tx.sendTransaction(sampleData2);
        }).toThrowError("Fail decode: odd length hex string.\npayloadBody.validatorAccountAddr should be even length hex string.");
    });

    // type 7
    it("payloadType7 ", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(7, true, true);
            sampleData.payloadBody.blockNumsFreezingValidator = "sdf";
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.blockNumsFreezingValidator should be a string in numeric form. (ex: '1000')");
    });
    it("payloadType7 ", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(7, true, true);
            sampleData.payloadBody.currentReflection.blockNumsForVoting = "sdf";
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.currentReflection.blockNumsForVoting should be a string in numeric form. (ex: '1000')");
    });

    // type 8
    it("payloadType8 ", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(8, true, true);
            sampleData.payloadBody.yesOrNo = 123;
            tx.sendTransaction(sampleData);
        }).toThrowError("payloadBody.yesOrNo should be boolean type. (true / false)");
    });

    // type 9
    it("payloadType9 ", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(9, true, true);
            sampleData.payloadBody = 123;
            tx.sendTransaction(sampleData);
        }).toThrowError("PayloadBody should be object type.");
    });

    // type 10
    it("payloadType10 ", function() {
        expect(function() {
            var ex = TxGuide;
            var sampleData = ex.tx(10, true, true);
            sampleData.payloadBody = 123;
            tx.sendTransaction(sampleData);
        }).toThrowError("PayloadBody should be object type.");
    });
});