var errors = require('../errors');
var JsonRpc = require('./jsonRpc');

var RequestManager = function (provider) {
    this.provider = provider;
    this.timeout = null;
};

RequestManager.prototype.send = function (data) {
    console.log("RequestManager.prototype.send data=", data);
    if (!this.provider) {
        console.error(errors.InvalidRequestProvider());
        return null;
    }

    var payload = JsonRpc.toPayload(data.method, data.params);
    var result = this.provider.send(payload);
    console.log("payload type=", typeof payload, " result type=", typeof result);
    viewObj("payload", payload);
    viewObj("result", result);


    if (!JsonRpc.isValidResponse(result)) {
        throw errors.InvalidResponse(result);
    }
    return result.result;
};

RequestManager.prototype.sendAsync = function (data, callback) {
    if (!this.provider) {
        return callback(errors.InvalidRequestProvider());
    }

    var payload = JsonRpc.toPayload(data.method, data.params);
    this.provider.sendAsync(payload, function (err, result) {
        if (err) {
            return callback(err);
        }

        if (!JsonRpc.isValidResponse(result)) {
            return callback(errors.InvalidResponse(result));
        }

        callback(null, result.result);
    });
};
function viewObj(name, obj) {
    if (typeof obj == "object") {
        for (var k in obj) {
            var val = obj[k];
            console.log(name, "k=", k, "(", typeof k, ")", " val=", val, "(", typeof val, ")");
            if (typeof val == "object") {
                viewObj(name, val);
            }
        }
    }
}

module.exports = RequestManager;