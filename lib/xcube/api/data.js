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
        getProgressGovernance,
        getCurrentGovernance
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