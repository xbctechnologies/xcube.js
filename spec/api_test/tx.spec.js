var Tx = require('../../lib/xcube/api/tx');
var tx = new Tx(this);
var formatters = require('../../lib/xcube/formatters');
var responseForm = require('../helpers/responseForm');
var utils = require('../../lib/utils/util');
var TxReq = require('../../lib/xcube/apireq/tx_req');
var Example = require('../../lib/xcube/api/example');

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
        }).toThrowError(formatters.errStrMap.inputFeeString);
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
            formatters.outputPayloadBodyFormatter(getTxRes);

            return getTxRes;
        };
        expect(getTransaction(param1, param2)).toEqual(responseForm.getTxRes);
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
            formatters.outputPayloadBodyFormatter(getTxReceiptRes);

            return getTxReceiptRes;
        };
        expect(getTransactionReceipt(param1, param2)).toEqual(responseForm.getTxReceiptRes);
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
        var ex = Example;
        // console.log(Example);

        var p = ex.tx(1, true);
        formatters.inputSendTransaction1(p);
        // ex.tx(1, false);
        // ex.info();

        // var txReq = new TxReq.TxRequest(10);
        //
        // var forView = JSON.stringify(txReq, null, 3);
        // console.log(forView);
    });

});
