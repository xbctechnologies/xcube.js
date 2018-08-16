var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var networkApis = function () {
    var getPeerCnt = new API({
        name: 'getPeerCnt',
        call: 'network_getPeerCnt',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });

    var getPeers = new API({
        name: 'getPeers',
        call: 'network_getPeers',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });

    var addPeer = new API({
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
    var _this = this;

    networkApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Network;