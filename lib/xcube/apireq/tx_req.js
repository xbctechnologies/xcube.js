var BigNumber = require('bignumber.js');

var payloadBodyMap = {
    commonTx: "eyJpbnB1dCI6InR4Q29tbW9uUGF5bG9hZEJvZHkgdGVzdGluZyJ9",
    fileTx: "eyJmaWxlIjoiZEhoR2FXeGxVR0Y1Ykc5aFpFSnZaSGtnZEdWemRHbHVadz09In0=",
    bondingTx: "eyJhbW91bnQiOjMzM30=",
};

var TxRequest = function (pType, wannaSample) {
    if (wannaSample === false) { // description
        var pBody = showDescription(pType);

        this.isSync =       "Whether to sync (true or false)";

        this.targetChainId= "Input TargetChainId (type: string)";
        this.sender =       "Sender's address (type: string)";
        this.receiver =     "Recipient's address (type: string)";

        this.fee =          "Input fees (type number)";
        this.amount =       "Amount of aston to be transmitted (type number)";
        this.time =         "For signing on the server (Set users to null)";

        this.payloadType =  "Set payloadType (1~10)";
        this.payloadBody = pBody;
    }
    else { // sample
        var pBody = showSample(pType);
        this.isSync = false;

        this.targetChainId = "0T";
        this.sender = "6C150EE39212D996C14FBAC90CCD854977AAA6FA";
        this.receiver = "0437A505746CA4498586A14DE9F600422F29C355";

        this.fee = "1000000000000000000";
        this.amount = "12345678";
        this.time = null;

        this.payloadType = 1;
        this.payloadBody = pBody;
    }

};
var ValidatorType = function(pubType, value, power) {
    // PubKey.apply(this, arguments);
    this.pub_key = new PubKey(pubType, value);
    this.power = power + " (type: string)";
};
var PubKey = function(pubType, value) {
    this.pubType = pubType + " (type: string)";
    this.value = value + " (type: string)";
};
// ValidatorType.prototype = Object.create(PubKey.prototype);
// ValidatorType.prototype.constructor = ValidatorType;

// function pBodySetting(pType, wannaSample) {
//     result = {};
//     if (wannaSample === false) { // description
//         result = showDescription(pType);
//     } else {                     // sample
//
//     }
//     return result;
// }

var showDescription = function(type) {
    res = {};
    switch (type) {
        case 1: // CommonType
            res = {
                input: "commonTx payloadBody (type: string)"
            };
            break;
        case 2: // FileType
            res = {
                file: "File []byte"
            };
            break;
        case 3: // BondingType
            res = {
                amount: "Quantity to bond (type: number)"
            };
            break;
        case 4: // UnbondingType
            res = {
                amount: "Quantity to unbond (type: number)"
            };
            break;
        case 5: // DelegatingType
            res = {
                validatorAccountAddr: "The validator address to delegate",
                amount: "Quantity to delegate (type: number)"
            };
            break;
        case 6: // UndelegatingType
            res = {
                validatorAccountAddr: "The validator address to undelegate",
                amount: "Quantity to undelegate (type: number)"
            };
            break;
        case 7: // GRProposalType
            res = {
                rewardAmount:       "RewardAmount (type: number)",
                validatorRewardRate:"ValidatorRewardRate (type: number)",
                delegatorRewardRate:"DelegatorRewardRate (type: number)",

                minCommonTxFee:     "MinCommonTxFee (type: number)",
                minBondingTxFee:    "MinBondingTxFee (type: number)",
                minGRProposalTxFee: "MinGRProposalTxFee (type: number)",
                minGRVoteTxFee:     "MinGRVoteTxFee (type: number)",
                minXTxFee:          "MinXTxFee (type: number)",

                maxBlockNumsForVoting:      "MaxBlockNumsForVoting (type: number)",
                minBlockNumsToGRProposal:   "MinBlockNumsToGRProposal (type: number)",
                blockNumsUtilReflection:    "BlockNumsUtilReflection (type: number)",

                blockNumsFreezingValidator: "BlockNumsFreezingValidator (type: number)",
                blockNumsUtilUnbonded:      "BlockNumsUtilUnbonded (type: number)",
                maxDelegatableValidatorNums:"MaxDelegatableValidatorNums (type: number)",
                validatorNums:              "ValidatorNums (type: number)",

                firstCompatibleVersion: "FirstCompatibleVersion (type: string)",
            };
            break;
        case 8: // GRVoteType
            res = {
                yesOrNo: "(true or false)"
            };
            break;
        case 9: // RecoverValidatorType
            res = {};
            break;
        case 10: // MakeXChainType
            var v1 = new ValidatorType("pub_key_type1", "value1", "power1");
            var v2 = new ValidatorType("pub_key_type2", "value2", "power2");
            res = {
                depth:            "depth (type: number)",
                hasAsset:         "hasAsset (true / false)",
                enableSubAsset:   "enableSubAsset (true / false)",
                nonExchangeChain: "nonExchangeChain (true / false)",

                airdropRate: "airdropRate (type number)",
                assetHolders: {
                    "assetHolder1": "asset (type number)",
                    "assetHolder2": "asset (type number)"
                },
                validators: [v1, v2]
            };
            break;
        default:
            throw new Error("Insert payloadType (1~10)");
    }
    return res;
};

var showSample = function (type) {
    res = {};
    switch (type) {
        case 1: // CommonType
            res = {
                input: "input sample"
            };
            break;
        case 2: // FileType
            // var f = new Uint8Array(13);
            // f[0]=72;f[1]=101;f[2]=108;f[3]=108;f[4]=111;f[5]=10;f[6]=100;f[7]=115;f[8]=10;f[9]=10;f[10]=100;f[11]=115;f[12]=102;
            var f = [72, 101, 108, 108, 111, 10, 100, 115, 10, 10, 100, 115, 102];

            console.log("f=", f);
            res = {
                file: f
            };
            break;
        case 3: // BondingType
            res = {
                amount: "Quantity to bond (type: number)"
            };
            break;
        case 4: // UnbondingType
            res = {
                amount: "Quantity to unbond (type: number)"
            };
            break;
        case 5: // DelegatingType
            res = {
                validatorAccountAddr: "The validator address to delegate",
                amount: "Quantity to delegate (type: number)"
            };
            break;
        case 6: // UndelegatingType
            res = {
                validatorAccountAddr: "The validator address to undelegate",
                amount: "Quantity to undelegate (type: number)"
            };
            break;
        case 7: // GRProposalType
            res = {
                rewardAmount:       "RewardAmount (type: number)",
                validatorRewardRate:"ValidatorRewardRate (type: number)",
                delegatorRewardRate:"DelegatorRewardRate (type: number)",

                minCommonTxFee:     "MinCommonTxFee (type: number)",
                minBondingTxFee:    "MinBondingTxFee (type: number)",
                minGRProposalTxFee: "MinGRProposalTxFee (type: number)",
                minGRVoteTxFee:     "MinGRVoteTxFee (type: number)",
                minXTxFee:          "MinXTxFee (type: number)",

                maxBlockNumsForVoting:      "MaxBlockNumsForVoting (type: number)",
                minBlockNumsToGRProposal:   "MinBlockNumsToGRProposal (type: number)",
                blockNumsUtilReflection:    "BlockNumsUtilReflection (type: number)",

                blockNumsFreezingValidator: "BlockNumsFreezingValidator (type: number)",
                blockNumsUtilUnbonded:      "BlockNumsUtilUnbonded (type: number)",
                maxDelegatableValidatorNums:"MaxDelegatableValidatorNums (type: number)",
                validatorNums:              "ValidatorNums (type: number)",

                firstCompatibleVersion: "FirstCompatibleVersion (type: string)",
            };
            break;
        case 8: // GRVoteType
            res = {
                yesOrNo: "(true or false)"
            };
            break;
        case 9: // RecoverValidatorType
            res = {};
            break;
        case 10: // MakeXChainType
            var v1 = new ValidatorType("pub_key_type1", "value1", "power1");
            var v2 = new ValidatorType("pub_key_type2", "value2", "power2");
            res = {
                depth:            "depth (type: number)",
                hasAsset:         "hasAsset (true / false)",
                enableSubAsset:   "enableSubAsset (true / false)",
                nonExchangeChain: "nonExchangeChain (true / false)",

                airdropRate: "airdropRate (type number)",
                assetHolders: {
                    "assetHolder1": "asset (type number)",
                    "assetHolder2": "asset (type number)"
                },
                validators: [v1, v2]
            };
            break;
        default:
            throw new Error("Insert payloadType (1~10)");
    }
    return res;
};

module.exports = {
    TxRequest: TxRequest,
};