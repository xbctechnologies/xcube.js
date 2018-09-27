var API = require('../api');
var Property = require('../property');
var formatters = require('../formatters');
var utils = require('../../utils/util');
var TxReq = require('../apireq/tx_req');
var Tx = require('./tx');
// var txObj = new Tx(this);
var xcube = require('../../xcube');

var info = function () {
    console.log("Transaction example List");
    console.log("- txGuide.tx(1)         = Show CommonTx example.");
    console.log("- txGuide.tx(1, true)   = Show CommonTx sample data.");
    console.log("- txGuide.tx(2)         = Show FileTx example.");
    console.log("- txGuide.tx(2, true)   = Show FileTx sample data.");
    console.log("- txGuide.tx(3)         = Show BondingTx example.");
    console.log("- txGuide.tx(3, true)   = Show BondingTx sample data.");
    console.log("- txGuide.tx(4)         = Show UnbondingTx example.");
    console.log("- txGuide.tx(4, true)   = Show UnbondingTx sample data.");
    console.log("- txGuide.tx(5)         = Show DelegatingTx example.");
    console.log("- txGuide.tx(5, true)   = Show DelegatingTx sample data.");
    console.log("- txGuide.tx(6)         = Show UndelegatingTx example.");
    console.log("- txGuide.tx(6, true)   = Show UndelegatingTx sample data.");
    console.log("- txGuide.tx(7)         = Show GRProposalTx example.");
    console.log("- txGuide.tx(7, true)   = Show GRProposalTx sample data.");
    console.log("- txGuide.tx(8)         = Show GRVoteTxTxe example.");
    console.log("- txGuide.tx(8, true)   = Show GRVoteTxTxe sample data.");
    console.log("- txGuide.tx(9)         = Show RecoverValidatorTx example.");
    console.log("- txGuide.tx(9, true)   = Show RecoverValidatorTx sample data.");
    console.log("- txGuide.tx(10)        = Show MakeXChainTx example.");
    console.log("- txGuide.tx(10, true)  = Show MakeXChainTx sample data.");
    return null;
};

var tx = function (pType, wannaSample, isTest) {
    if (wannaSample === undefined || wannaSample === false) {
        if (isTest === undefined || isTest === false) {
            console.log(showDescription(pType, "example."));
        }
        wannaSample = false;
    } else {
        if (isTest === undefined || isTest === false) {
            console.log(showDescription(pType, "sameple data."));
        }
    }

    var txReq = new TxReq.TxRequest(pType, wannaSample);
    var forView = JSON.stringify(txReq, null, 3);

    if (isTest) {
        return txReq;
    } else {
        console.log(forView);
        return null;
    }
};

var showDescription = function (pType, t2) {
    var res = "";
    if (pType === 1) {
        res = "This is CommonTx " + t2;
    } else if (pType === 2) {
        res = "This is FileTx " + t2;
    } else if (pType === 3) {
        res = "This is BondingTx " + t2;
    } else if (pType === 4) {
        res = "This is UnbondingTx " + t2;
    } else if (pType === 5) {
        res = "This is DelegatingTx " + t2;
    } else if (pType === 6) {
        res = "This is UndelegatingTx " + t2;
    } else if (pType === 7) {
        res = "This is GRProposalTx " + t2;
    } else if (pType === 8) {
        res = "This is GRVoteTypeTx " + t2;
    } else if (pType === 9) {
        res = "This is RecoverValidatorTx " + t2;
    } else if (pType === 10) {
        res = "This is MakeXChainTx " + t2;
    }
    return res;
};

module.exports = {
    info: info,
    tx: tx
};

/*var test = function (options) {
    this.name = options.name;
};
test.prototype.attachToObject = function (obj) {
    var name = this.name;
    console.log("obj=", obj, " name=", name, " name[0]=", name[0]);
    name[0] = function () {
        console.log("in func..sdf")
    };
};

var exApis = function () {
    var info = new test({
        name: 'aaa'
    });
    var tx = new test({
        name: 'bbb'
    });

    return [
        info,
        tx
    ]
};

function Example() {
    var _this = this;
    exApis().forEach(function(api){
        api.attachToObject(_this);
    })
}
module.exports = Example;*/


// function replacer(key, value) {
//     if (typeof value !== "object") {
//         return value;
//     }
//     return value;
// }
