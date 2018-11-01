const BigNumber = require('bignumber.js');
const utils = require('./utils/util');

const RequestManager = require('./xcube/request/requestManager');
const XB = require('./xcube/api/xb');
const TX = require('./xcube/api/tx');
const Block = require('./xcube/api/block');
const Account = require('./xcube/api/account');
const Data = require('./xcube/api/data');
const Network = require('./xcube/api/network');
const Node = require('./xcube/api/node');
const Validator = require('./xcube/api/validator');
const TxGuide = require('./xcube/api/txGuide');

function XCube(requestProvider) {
    this.currentRequestProvider = requestProvider;
    this.requestManager = new RequestManager(requestProvider);

    this.BigNumber = BigNumber;
    BigNumber.config({DECIMAL_PLACES: 30});
    BigNumber.config({EXPONENTIAL_AT: [-7, 30]});

    this.xb = new XB(this);
    this.tx = new TX(this);
    this.block = new Block(this);
    this.account = new Account(this);
    this.data = new Data(this);
    this.network = new Network(this);
    this.node = new Node(this);
    this.validator = new Validator(this);
    this.txGuide = new TxGuide(this.xb['netMode'], this.tx['sendTransaction']);

    this.txCheckAll = this.txCheckAll;

    const commands = [
        {"xb": this.xb},
        {"tx": this.tx},
        {"block": this.block},
        {"account": this.account},
        {"data": this.data},
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
        return;
    }
}

XCube.prototype.txCheckAll = function () {
    for (let i = 1; i <= 10; i++) {
        console.log("Checking.... ", getTxName(i), " type.");
        this.tx.sendTransaction(this.txGuide.tx(i, "obj"));
    }
}

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

