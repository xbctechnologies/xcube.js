const API = require('../api');
const formatters = require('../formatters');
const utils = require('../../utils/util');

const blockApis = function () {
    const getBlock = new API({
        name: 'getBlock',
        call: 'block_getBlock',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputBlockResFormatter
    });

    const getBlockByNumber = new API({
        name: 'getBlockByNumber',
        call: 'block_getBlockByNumber',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustNumber2],
        outputFormatter: formatters.outputBlockResFormatter
    });

    const getBlockTxCount = new API({
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
    const _this = this;

    blockApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Block;
