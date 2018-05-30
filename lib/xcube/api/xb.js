var API = require('../api');

var apis = function () {
    var putTransaction = new API({
        name: 'putTransaction',
        call: 'xb_putTransaction',
        params: 2,
        // outputFormatter: formatters.outputTransactionFormatter
    });

    var getTransaction = new API({
        name: 'getTransaction',
        call: 'xb_getTransactionByHash',
        params: 1,
        // outputFormatter: formatters.outputTransactionFormatter
    });

    var getVersion = new API({
        name: 'version',
        call: 'xb_clientVersion',
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        putTransaction,
        getTransaction,
        getVersion
    ]
}

function XB(xCube) {
    var _this = this;

    apis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = XB;