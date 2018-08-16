var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var nodeApis = function () {
    var sync = new API({
        name: 'sync',
        call: 'node_sync',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });

    var isSync = new API({
        name: 'isSync',
        call: 'node_isSync',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockResFormatter
    });

    var getVersion = new API({
        name: 'getVersion',
        call: 'node_getVersion',
        // params: 2,
        // inputFormatter: [formatters.inputMustString1, formatters.inputMustStrOrNum2],
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        sync,
        isSync,
        getVersion
    ]
};

function Node(xCube) {
    var _this = this;

    nodeApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Node;