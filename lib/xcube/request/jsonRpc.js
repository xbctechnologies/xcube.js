var JsonRpc = {
    jsonRpcVersion: '1.0',
    messageId: 0
};


JsonRpc.toPayload = function (method, params) {
    if (!method)
        console.error('jsonrpc method should be specified!');

    // advance message ID
    JsonRpc.messageId++;

    return {
        jsonrpc: JsonRpc.jsonRpcVersion,
        id: JsonRpc.messageId,
        method: method,
        params: params || []
    };
};

JsonRpc.isValidResponse = function (response) {
    return Array.isArray(response) ? response.every(validateSingleMessage) : validateSingleMessage(response);

    function validateSingleMessage(message) {
        return !!message &&
            !message.error &&
            message.jsonrpc === JsonRpc.jsonRpcVersion &&
            typeof message.id === 'number' &&
            message.result !== undefined; // only undefined is not valid json object
    }
};

JsonRpc.toBatchPayload = function (messages) {
    return messages.map(function (message) {
        return JsonRpc.toPayload(message.method, message.params);
    });
};

module.exports = JsonRpc;
