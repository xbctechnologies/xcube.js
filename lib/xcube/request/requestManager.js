var errors = require('../errors');
var JsonRpc = require('./jsonRpc');

var RequestManager = function (provider) {
    this.provider = provider;
    this.timeout = null;
};

RequestManager.prototype.send = function (data) {
    if (!this.provider) {
        console.error(errors.InvalidRequestProvider());
        return null;
    }

    var payload = JsonRpc.toPayload(data.method, data.params);
    var result = this.provider.send(payload);

    if (!JsonRpc.isValidResponse(result)) {
        throw errors.InvalidResponse(result);
    }

    return result.result;
};

module.exports = RequestManager;