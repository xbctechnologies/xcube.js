var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var txApis = function () {
    var signTransaction = new API({
        name: 'signTransaction',
        call: 'tx_signTransaction',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        // outputFormatter: formatters.outputBlockFormatter
    });
    var getTransaction = new API({
        name: 'getTransaction',
        call: 'tx_getTransaction',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputPayloadBodyFormatter
    });
    var getTransactionReceipt = new API({
        name: 'getTransactionReceipt',
        call: 'tx_getTransactionReceipt',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputPayloadBodyFormatter
    });
    var checkOriginal = new API({
        name: 'checkOriginal',
        call: 'tx_checkOriginal',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputFilePath2],
        // outputFormatter: formatters.inputFilePath2
    });

    return [
        getTransaction,
        signTransaction,
        getTransactionReceipt,
        checkOriginal,
    ]
};

function Tx(xCube) {
    var _this = this;

    txApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Tx;