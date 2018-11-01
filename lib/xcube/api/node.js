const API = require('../api');
const formatters = require('../formatters');
const utils = require('../../utils/util');

const nodeApis = function () {
    const sync = new API({
        name: 'sync',
        call: 'node_sync',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    const isSync = new API({
        name: 'isSync',
        call: 'node_isSync',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });
    const getXChainInfo = new API({
        name: 'getXChainInfo',
        call: 'node_getXChainInfo',
        // params: 2,
        // inputFormatter: [formatters.inputMustString1, formatters.inputMustStrOrNum2],
        outputFormatter: formatters.outputXChainInfoFormatter
    });
    const getVersion = new API({
        name: 'getVersion',
        call: 'node_getVersion',
        // params: 2,
        // inputFormatter: [formatters.inputMustString1, formatters.inputMustStrOrNum2],
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        sync,
        isSync,
        getXChainInfo,
        getVersion
    ]
};

function Node(xCube) {
    const _this = this;

    nodeApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Node;