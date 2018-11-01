var API = require('../api');
var Property = require('../property');
var formatters = require('../formatters');
var utils = require('../../utils/util');
var TxReq = require('../apireq/tx_req');
var Tx = require('./tx');
// var txObj = new Tx(this);
var xcube = require('../../xcube');

function TxGuide(netMode) {
    this.netMode = netMode;
    this.info = this.info;
    this.tx = this.tx;
}

TxGuide.prototype.info = function () {
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

TxGuide.prototype.tx = function (pType, wannaSample, isTest) {
    const showDescription = function (pType, t2) {
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
        switch (this.netMode) {
            case "main":
                return "Can't call on main network"
        }
        return txReq;
    } else {
        console.log(forView);
        return null;
    }
};

module.exports = TxGuide;