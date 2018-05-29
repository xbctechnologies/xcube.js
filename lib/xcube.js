var BigNumber = require('bignumber.js');

var XB = require('./xcube/api/xb')
var RequestManager = require('./xcube/request/requestManager');

function XCube(requestProvider) {
    this.currentRequestProvider = requestProvider;
    this.requestManager = new RequestManager(requestProvider);

    this.xb = new XB(this);
}

module.exports = XCube;

