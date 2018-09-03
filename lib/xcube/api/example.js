var API = require('../api');
var Property = require('../property');
var formatters = require('../formatters');
var utils = require('../../utils/util');
var TxReq = require('../apireq/tx_req');

var info = function () {
    console.log("Transaction example List");
    console.log("- ex.tx(1)  = Show CommonTx example");
    console.log("- ex.tx(2)  = Show FileTx example");
    console.log("- ex.tx(3)  = Show BondingTx example");
    console.log("- ex.tx(4)  = Show UnbondingTx example");
    console.log("- ex.tx(5)  = Show DelegatingTx example");
    console.log("- ex.tx(6)  = Show UndelegatingTx example");
    console.log("- ex.tx(7)  = Show GRProposalTx example");
    console.log("- ex.tx(8)  = Show GRVoteTxTxe example");
    console.log("- ex.tx(9)  = Show RecoverValidatorTx example");
    console.log("- ex.tx(10) = Show MakeXChainTx example");
};

var tx = function (pType, wannaSample) {
    if (wannaSample === undefined || wannaSample === false){
        wannaSample = false;
        var txReq = new TxReq.TxRequest(pType, wannaSample);

        var forView = JSON.stringify(txReq, null, 3);
        console.log(forView);

        return showType(pType);
    } else {
        var txReq = new TxReq.TxRequest(pType, wannaSample);

        var forView = JSON.stringify(txReq, null, 3);
        console.log(forView);

        return showType(pType);
    }


    // var res = {
    //     "isSync": txReq.isSync,
    //
    //     "targetChainId": txReq.targetChainId,
    //     "sender": txReq.sender,
    //     "receiver": txReq.receiver,
    //
    //     "fee": txReq.fee,
    //     "amount": txReq.amount,
    //     "time": txReq.time,
    //
    //     "payloadType": txReq.payloadType,
    //     "payloadBody": txReq.payloadBody
    // };

    //return forView;
};

var showType = function(pType) {
    var res = "";
    if (pType === 1){
        res = "This is CommonTx example.";
    } else if (pType === 2) {
        res = "This is FileTx example.";
    } else if (pType === 3) {
        res = "This is BondingTx example.";
    } else if (pType === 4) {
        res = "This is UnbondingTx example.";
    } else if (pType === 5) {
        res = "This is DelegatingTx example.";
    } else if (pType === 6) {
        res = "This is UndelegatingTx example.";
    } else if (pType === 7) {
        res = "This is GRProposalTx example.";
    } else if (pType === 8) {
        res = "This is GRVoteTypeTx example.";
    } else if (pType === 9) {
        res = "This is RecoverValidatorTx example.";
    } else if (pType === 10) {
        res = "This is MakeXChainTx example.";
    }
    return res;
};

module.exports = {
    info: info,
    tx: tx,
};


// function replacer(key, value) {
//     if (typeof value !== "object") {
//         return value;
//     }
//     return value;
// }
