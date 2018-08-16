var BigNumber = require('bignumber.js');
var utils = require('./utils/util');

// var XB = require('./xcube/api/xb');
var RequestManager = require('./xcube/request/requestManager');
var Block = require('./xcube/api/block');
var Validator = require('./xcube/api/validator');
var Tx = require('./xcube/api/tx');
var Account = require('./xcube/api/account');
var Network = require('./xcube/api/network');
var Node = require('./xcube/api/node');

function XCube(requestProvider) {
    this.currentRequestProvider = requestProvider;
    this.requestManager = new RequestManager(requestProvider);

    // this.xb = new XB(this);
    this.block = new Block(this);
    this.validator = new Validator(this);
    this.tx = new Tx(this);
    this.account = new Account(this);
    this.network = new Network(this);
    this.node = new Node(this);
}

module.exports = XCube;

