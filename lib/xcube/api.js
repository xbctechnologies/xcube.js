var util = require('../utils/util');
var errors = require('./errors');

var API = function (options) {
    this.name = options.name;
    this.call = options.call;
    this.params = options.params || 0;
    this.inputFormatter = options.inputFormatter;
    this.outputFormatter = options.outputFormatter;
    this.requestManager = null;
};

API.prototype.setRequestManager = function (rm) {
    this.requestManager = rm;
};

API.prototype.attachToObject = function (obj) {
    var func = this.buildCall();
    func.call = this.call;
    var name = this.name.split('.');
    if (name.length > 1) {
        obj[name[0]] = obj[name[0]] || {};
        obj[name[0]][name[1]] = func;
    } else {
        obj[name[0]] = func;
    }
};

API.prototype.buildCall = function () {
    var api = this;
    var send = function () {
        var payload = api.toPayload(Array.prototype.slice.call(arguments));
        if (payload.callback) {
            return api.requestManager.sendAsync(payload, function (err, result) {
                payload.callback(err, api.formatOutput(result));
            });
        }
        return api.formatOutput(api.requestManager.send(payload));
    };
    send.request = this.request.bind(this);
    return send;
};

API.prototype.request = function () {
    var payload = this.toPayload(Array.prototype.slice.call(arguments));
    payload.format = this.formatOutput.bind(this);
    return payload;
}

API.prototype.toPayload = function (args) {
    var call = this.getCall(args);
    var callback = this.extractCallback(args);
    var params = this.formatInput(args);
    this.validateArgs(params);

    return {
        method: call,
        params: params,
        callback: callback
    };
};

API.prototype.formatOutput = function (result) {
    return this.outputFormatter && result ? this.outputFormatter(result) : result;
};

API.prototype.getCall = function (args) {
    return util.isFunction(this.call) ? this.call(args) : this.call;
};

API.prototype.extractCallback = function (args) {
    if (util.isFunction(args[args.length - 1])) {
        return args.pop(); // modify the args array!
    }
};

API.prototype.formatInput = function (args) {
    if (!this.inputFormatter) {
        return args;
    }

    return this.inputFormatter.map(function (formatter, index) {
        return formatter ? formatter(args[index]) : args[index];
    });
};

API.prototype.validateArgs = function (args) {
    if (args.length !== this.params) {
        throw errors.InvalidNumberOfRPCParams();
    }
};

module.exports = API;