var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var txApis = function () {
    var sendTransaction = new API({
        name: 'sendTransaction',
        call: 'tx_sendTransaction',
        params: 1,
        inputFormatter: [formatters.inputSendTransaction1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    var delegating = new API({
        name: 'delegating',
        call: 'tx_delegating',
        params: 1,
        inputFormatter: [formatters.inputMustObject1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    var undelegating = new API({
        name: 'undelegating',
        call: 'tx_undelegating',
        params: 1,
        inputFormatter: [formatters.inputMustObject1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    var bonding = new API({
        name: 'bonding',
        call: 'tx_bonding',
        params: 1,
        inputFormatter: [formatters.inputMustObject1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    var unbonding = new API({
        name: 'unbonding',
        call: 'tx_unbonding',
        params: 1,
        inputFormatter: [formatters.inputMustObject1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    var signTransaction = new API({
        name: 'signTransaction',
        call: 'tx_signTransaction',
        params: 1,
        inputFormatter: [formatters.inputSendTransaction1],
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
        params: 3,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2, formatters.inputFilePath2],
        // outputFormatter: formatters.inputFilePath2
    });

    return [
        sendTransaction,
        delegating,
        undelegating,
        bonding,
        unbonding,
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