var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var blockApis = function () {
    var getBlockByHash = new API({
        name: 'getBlockByHash',
        call: 'block_getBlockByHash',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustString2],
        outputFormatter: formatters.outputBlockResFormatter
    });

    var getBlockByNumber = new API({
        name: 'getBlockByNumber',
        call: 'block_getBlockByNumber',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustNumber2],
        outputFormatter: formatters.outputBlockResFormatter
    });

    var getBlockTransactionCnt = new API({
        name: 'getBlockTransactionCnt',
        call: 'block_getBlockTransactionCnt',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustStrOrNum2],
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        getBlockByHash,
        getBlockByNumber,
        getBlockTransactionCnt
    ]
};

function Block(xCube) {
    var _this = this;

    blockApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Block;