var API = require('../api');
var Property = require('../property');
var formatters = require('../formatters');
var utils = require('../../utils/util');
var TxReq = require('../apireq/tx_req');
var Tx = require('./tx');
// var txObj = new Tx(this);
var xcube = require('../../xcube');

function TxGuide(netMode, sendTransaction) {
    this.netMode = netMode;
    this.info = this.info;
    this.tx = this.tx;
    TxGuide.prototype.sendTransaction = sendTransaction;
}

TxGuide.prototype.info = function () {
    const txList = [
        {txNo: 1, name: "CommonTx"},
        {txNo: 2, name: "FileTx"},
        {txNo: 3, name: "BondingTx"},
        {txNo: 4, name: "UnbondingTx"},
        {txNo: 5, name: "DelegatingTx"},
        {txNo: 6, name: "UndelegatingTx"},
        {txNo: 7, name: "GRProposalTx"},
        {txNo: 8, name: "GRVoteTxTxe"},
        {txNo: 9, name: "RecoverValidatorTx"},
        {txNo: 10, name: "MakeXChainTx"},
    ];
    console.log("Transaction example List");
    Object.keys(txList).forEach(function (i) {
        const tx = txList[i];
        console.log(`- txGuide.tx(${tx.txNo})`, "\t\t\t\t", `= Show ${tx.name} example.`);
        console.log(`- txGuide.tx(${tx.txNo}, true)`, "\t\t\t", `= Show ${tx.name} sample data.`);
        console.log(`- txGuide.tx(${tx.txNo}, true, true)`, "\t", `= Send transaction to ${tx.name} sample data.`);
    });
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
        return TxGuide.prototype.sendTransaction(txReq);
    } else {
        console.log(forView);
        return null;
    }
};

module.exports = TxGuide;