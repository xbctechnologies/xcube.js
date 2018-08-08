var BigNumber = require('bignumber.js');
var utils = require('./utils/util');

var XB = require('./xcube/api/xb');
var Block = require('./xcube/api/block');
var RequestManager = require('./xcube/request/requestManager');

function XCube(requestProvider) {
    this.currentRequestProvider = requestProvider;
    this.requestManager = new RequestManager(requestProvider);

    this.xb = new XB(this);
    this.block = new Block(this);
}

// XCube.prototype.BigNumber = BigNumber;
// XCube.prototype.toBigNumber = utils.toBigNumber;

module.exports = XCube;

