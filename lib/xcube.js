var BigNumber = require('bignumber.js');
var utils = require('./utils/util');

var RequestManager = require('./xcube/request/requestManager');
var XB = require('./xcube/api/xb');
var Block = require('./xcube/api/block');
var Validator = require('./xcube/api/validator');
var Tx = require('./xcube/api/tx');
var Account = require('./xcube/api/account');
var Network = require('./xcube/api/network');
var Node = require('./xcube/api/node');
var TxGuide = require('./xcube/api/txGuide');

function XCube(requestProvider) {
    this.currentRequestProvider = requestProvider;
    this.requestManager = new RequestManager(requestProvider);

    this.BigNumber = BigNumber;
    BigNumber.config({DECIMAL_PLACES: 30});
    BigNumber.config({EXPONENTIAL_AT: [-7, 30]});

    this.xb = new XB(this);
    this.block = new Block(this);
    this.validator = new Validator(this);
    this.tx = new Tx(this);
    this.account = new Account(this);
    this.network = new Network(this);
    this.node = new Node(this);
    this.txGuide = new TxGuide(this.xb['netMode'], this.tx['sendTransaction']);

    this.txCheckAll = txCheckAll;

    var commands = [
        {"xb": this.xb},
        {"tx": this.tx},
        {"block": this.block},
        {"account": this.account},
        {"validator": this.validator},
        {"network": this.network},
        {"node": this.node},
        {"txGuide": this.txGuide}
    ];
    this.help = function () {
        Object.keys(commands).forEach(function (i) {
            Object.keys(commands[i]).forEach(function (key) {
                console.log(key);
                const properties = Object.getOwnPropertyNames(commands[i][key]);
                Object.keys(properties).forEach(function (idx) {
                    const isFunc = typeof commands[i][key][properties[idx]] === 'function';
                    console.log("\t", properties[idx], isFunc == true ? "(function)" : "(variable)");
                });
            })
        });
        console.log()
        return "===================== End ====================="
    }
}

var txCheckAll = function () {
    for (var i = 1; i <= 10; i++) {
        console.log("Checking.... ", getTxName(i), " type.");
        var obj = this.txGuide.tx(i, true, true);
        this.tx.sendTransaction(obj);
    }
};

function getTxName(type) {
    switch (type) {
        case 1:
            return "CommonTx";
        case 2:
            return "FileTx";
        case 3:
            return "BondingTx";
        case 4:
            return "UnbondingTx";
        case 5:
            return "DelegatingTx";
        case 6:
            return "UndelegatingTx";
        case 7:
            return "GRProposalTx";
        case 8:
            return "GRVoteTx";
        case 9:
            return "RecoverValidatorTx";
        case 10:
            return "MakeXChainTx";

    }

}

module.exports = XCube;

