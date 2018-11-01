const API = require('../api');
const Property = require('../property');
const formatters = require('../formatters');
const utils = require('../../utils/util');
const TxReq = require('../apireq/tx_req');
const Tx = require('./tx');
// const txObj = new Tx(this);
const xcube = require('../../xcube');

function TxGuide(netMode, sendTransaction) {
    this.netMode = netMode;
    this.info = this.info;
    this.tx = this.tx;
    TxGuide.prototype.sendTransaction = sendTransaction;

    TxGuide.prototype.txList = [
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

    const _this = this;
    const txMap = {};
    Object.keys(_this.txList).forEach(function (i) {
        txMap[_this.txList[i].txNo] = _this.txList[i].name;
    });
    TxGuide.prototype.txMap = txMap
}

TxGuide.prototype.info = function () {
    console.log("Transaction example list");
    console.log("- Action types");
    console.log("\t", "- \"send\" : Send transaction using the sample data");
    console.log("\t", "- \"json\" : Show json string");
    console.log("\t", "- \"obj\" : Return transaction object");
    console.log("\t", "- \"\" : Provides a description of transaction.", "\n");

    const _this = this;
    Object.keys(_this.txList).forEach(function (i) {
        const tx = _this.txList[i];
        console.log(`- txGuide.tx(${tx.txNo}, actionType)`, "\t", `: ${tx.name}`);
    });
    return;
};

TxGuide.prototype.tx = function (pType, actionType) {
    if (this.txMap[pType] == undefined) {
        return `Not found transaction type (Transaction type is from 1 to ${Object.keys(this.txMap).length})`
    }

    const txReq = new TxReq.TxRequest(pType, actionType);
    switch (actionType) {
        case "send":
            return TxGuide.prototype.sendTransaction(txReq);
        case "json":
            console.log(JSON.stringify(txReq, null, 3));
            return;
        case "obj":
            return txReq;
        default:
            console.log(`This is description about ${this.txMap[pType]}`);
            console.log(JSON.stringify(txReq, null, 3));
            return;
    }
};

module.exports = TxGuide;