const API = require('../api');
const formatters = require('../formatters');
const utils = require('../../utils/util');

const dataApis = function () {
    const getDataAccount = new API({
        name: 'getDataAccount',
        call: 'data_getDataAccount',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputBlockResFormatter
    });

    const getAccount = new API({
        name: 'getAccount',
        call: 'data_getAccount',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2]
    });

    const getSimpleValidator = new API({
        name: 'getSimpleValidator',
        call: 'data_getSimpleValidator',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
    });

    const getSimpleValidators = new API({
        name: 'getSimpleValidators',
        call: 'data_getSimpleValidators',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
    });

    const getProgressGovernance = new API({
        name: 'getProgressGovernance',
        call: 'data_getProgressGovernance',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
    });

    const getCurrentGovernance = new API({
        name: 'getCurrentGovernance',
        call: 'data_getCurrentGovernance',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
    });

    return [
        getDataAccount,
        getAccount,
        getSimpleValidator,
        getSimpleValidators,
        getProgressGovernance,
        getCurrentGovernance,
    ]
};

function Data(xCube) {
    const _this = this;

    dataApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Data;