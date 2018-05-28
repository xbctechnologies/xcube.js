module.exports = {
    InvalidRequestProvider: function () {
        return new Error('Provider not set or invalid');
    },
    InvalidNumberOfRPCParams: function () {
        return new Error('Invalid number of input parameters to RPC method');
    },
    InvalidResponse: function (result) {
        var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + JSON.stringify(result);
        return new Error(message);
    },
}