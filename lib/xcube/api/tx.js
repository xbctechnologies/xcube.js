const API = require('../api');
const formatters = require('../formatters');
const utils = require('../../utils/util');

const txApis = function () {
    const sendTransaction = new API({
        name: 'sendTransaction',
        call: 'tx_sendTransaction',
        params: 1,
        inputFormatter: [formatters.inputSendTransaction1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    const delegating = new API({
        name: 'delegating',
        call: 'tx_delegating',
        params: 1,
        inputFormatter: [formatters.inputMustObject1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    const undelegating = new API({
        name: 'undelegating',
        call: 'tx_undelegating',
        params: 1,
        inputFormatter: [formatters.inputMustObject1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    const bonding = new API({
        name: 'bonding',
        call: 'tx_bonding',
        params: 1,
        inputFormatter: [formatters.inputMustObject1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    const unbonding = new API({
        name: 'unbonding',
        call: 'tx_unbonding',
        params: 1,
        inputFormatter: [formatters.inputMustObject1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    const signTransaction = new API({
        name: 'signTransaction',
        call: 'tx_signTransaction',
        params: 1,
        inputFormatter: [formatters.inputSendTransaction1],
        // outputFormatter: formatters.outputBlockFormatter
    });
    const getTransaction = new API({
        name: 'getTransaction',
        call: 'tx_getTransaction',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputPayloadBodyFormatter
    });
    const getTransactionReceipt = new API({
        name: 'getTransactionReceipt',
        call: 'tx_getTransactionReceipt',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputPayloadBodyFormatter
    });
    const checkOriginal = new API({
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
    const _this = this;

    txApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Tx;