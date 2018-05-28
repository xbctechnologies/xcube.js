var API = require('../api');

var apis = function () {
    var getTransaction = new API({
        name: 'getTransaction',
        call: 'xb_getTransactionByHash',
        params: 1,
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        getTransaction
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