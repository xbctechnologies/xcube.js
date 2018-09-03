var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var accountApis = function () {
    var newApi = new API({
        name: 'new',
        call: 'account_new',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    var importApi = new API({
        name: 'import',
        call: 'account_import',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    var exportApi = new API({
        name: 'export',
        call: 'account_export',
        params: 2,
        inputFormatter: [formatters.inputMustHexString1, formatters.inputMustString2],
        // outputFormatter: formatters.outputBlockResFormatter
    });
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
    var getList = new API({
        name: 'getList',
        call: 'account_getList',
        // params: 2,
        // inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    var getBalance = new API({
        name: 'getBalance',
        call: 'account_getBalance',
        params: 3,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2, formatters.inputMustAtxtype3],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    var getBondingAmount = new API({
        name: 'getBondingAmount',
        call: 'account_getBondingAmount',
        params: 3,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2, formatters.inputMustAtxtype3],
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        newApi,
        importApi,
        exportApi,
        lock,
        unlock,
        getList,
        getBalance,
        getBondingAmount
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