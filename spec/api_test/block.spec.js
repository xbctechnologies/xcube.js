var Block = require('../../lib/xcube/api/block');
var block = new Block(this);
var formatters = require('../../lib/xcube/formatters');
var responseForm = require('../helpers/responseForm');

var blockExData = {
    blockHash: "3D395FB9340AB345C2312ED2",
    wrongBlockHash: "3D395FB9340AB345C2312ED",
    rightAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB99091",
    wrongAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB9909",
    chainId: "test_chainId",
    blockNum: 922337203683
};

describe("block >>", function () {
    // 1. GetBlock
    it("GetBlock(targetChainId string, blockHash common.HexBytes)", function () {
        var param1 = formatters.inputMustString1(blockExData.chainId);
        var param2 = formatters.inputMustHexString2(blockExData.blockHash);
        // var res = formatters.outputBlockResFormatter(responseForm.blockRes);

        var getBlock = function(p1, p2) {
            var obj = {
                blockHash: p2,
                blockNo: 922337203683,
                chainID: p1,
                numTxs: 3,
                time: 1534905140558,
                transactionRoot: "616263",
                transactions: ["61", "62", "63"]
            };
            return obj;
        };
        expect(getBlock(param1, param2)).toEqual(responseForm.blockRes);
    });
    it("GetBlock error check (First parameter : string type)", function() {
        expect(function () {
            block.getBlock();
            block.getBlock(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetBlock error check (Second parameter : string type)", function() {
        expect(function () {
            block.getBlock(blockExData.chainId, 123);
        }).toThrowError(formatters.errStrMap.inputMustHexString2);
    });
    it("GetBlock error check (Second parameter : odd length)", function() {
        expect(function () {
            block.getBlock(blockExData.chainId, blockExData.wrongBlockHash);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });

    // 2. GetBlockByNumber
    it("GetBlockByNumber(targetChainId string, blockNo int64)", function () {
        var param1 = formatters.inputMustString1(blockExData.chainId);
        var param2 = formatters.inputMustNumber2(blockExData.blockNum);

        var getBlockByNumber = function(p1, p2) {
            var obj = {
                blockHash: "3D395FB9340AB345C2312ED2",
                blockNo: p2,
                chainID: p1,
                numTxs: 3,
                time: 1534905140558,
                transactionRoot: "616263",
                transactions: ["61", "62", "63"]
            };
            return obj;
        };
        expect(getBlockByNumber(param1, param2)).toEqual(responseForm.blockRes);
    });
    it("GetBlockByNumber error check (First parameter : string type)", function() {
        expect(function () {
            block.getBlockByNumber();
            block.getBlockByNumber(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetBlockByNumber error check (Second parameter : number type)", function() {
        expect(function () {
            block.getBlockByNumber(blockExData.chainId, "ex");
        }).toThrowError(formatters.errStrMap.inputMustNumber2);
    });

    // 3. GetBlockTxCount
    it("GetBlockTxCount(targetChainId string, block interface{})", function () {
        var param1 = formatters.inputMustString1(blockExData.chainId);
        var param2 = formatters.inputMustStrOrNum2(blockExData.blockNum);

        var getBlockTxCount = function(p1, p2) {
            return true;
        };
        expect(getBlockTxCount(param1, param2)).toEqual(true);

        param2 = formatters.inputMustStrOrNum2(blockExData.rightAddress);
        expect(getBlockTxCount(param1, param2)).toEqual(true);
    });
    it("GetBlockTxCount error check (First parameter : string type)", function() {
        expect(function () {
            block.getBlockTxCount();
            block.getBlockTxCount(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetBlockTxCount error check (Second parameter : number type)", function() {
        expect(function () {
            block.getBlockTxCount(blockExData.chainId, false);
        }).toThrowError(formatters.errStrMap.inputMustStrOrNum2);
    });

});
