var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var blockApis = function () {
    var getBlock = new API({
        name: 'getBlock',
        call: 'block_getBlock',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputBlockResFormatter
    });

    var getBlockByNumber = new API({
        name: 'getBlockByNumber',
        call: 'block_getBlockByNumber',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustNumber2],
        outputFormatter: formatters.outputBlockResFormatter
    });

    var getBlockTxCount = new API({
        name: 'getBlockTxCount',
        call: 'block_getBlockTxCount',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustStrOrNum2],
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        getBlock,
        getBlockByNumber,
        getBlockTxCount
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
