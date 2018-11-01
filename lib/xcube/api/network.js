const API = require('../api');
const formatters = require('../formatters');
const utils = require('../../utils/util');

const networkApis = function () {
    const getPeerCnt = new API({
        name: 'getPeerCnt',
        call: 'network_getPeerCnt',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });

    const getPeers = new API({
        name: 'getPeers',
        call: 'network_getPeers',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });

    const addPeer = new API({
        name: 'addPeer',
        call: 'network_addPeer',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustBool2],
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        getPeerCnt,
        getPeers,
        addPeer
    ]
};

function Network(xCube) {
    const _this = this;

    networkApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Network;