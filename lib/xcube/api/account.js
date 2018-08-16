var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var accountApis = function () {
    var lock = new API({
        name: 'lock',
        call: 'account_lock',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    var unlock = new API({
        name: 'unlock',
        call: 'account_unlock',
        params: 4,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2, formatters.inputMustString3, formatters.inputMustNumber4],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    var getListAccount = new API({
        name: 'getListAccount',
        call: 'account_getListAccount',
        // params: 2,
        // inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    var getBalance = new API({
        name: 'getBalance',
        call: 'account_getBalance',
        params: 1,
        inputFormatter: [formatters.inputMustHexString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    var getBondInfo = new API({
        name: 'getBondInfo',
        call: 'account_getBondInfo',
        params: 1,
        inputFormatter: [formatters.inputMustHexString1],
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        lock,
        unlock,
        getListAccount,
        getBalance,
        getBondInfo
    ]
};

function Account(xCube) {
    var _this = this;

    accountApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Account;