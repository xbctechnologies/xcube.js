var BigNumber = require('bignumber.js');

var payloadBodyMap = {
    commonTx: "eyJpbnB1dCI6InR4Q29tbW9uUGF5bG9hZEJvZHkgdGVzdGluZyJ9",
    fileTx: "eyJmaWxlIjoiZEhoR2FXeGxVR0Y1Ykc5aFpFSnZaSGtnZEdWemRHbHVadz09In0=",
    bondingTx: "eyJhbW91bnQiOjMzM30=",
};

var TxRequest = function (pType, wannaSample) {
    BigNumber.config({ DECIMAL_PLACES: 30 });
    BigNumber.config({ EXPONENTIAL_AT: [-7, 30] });
    if (wannaSample === false) { // description
        var pBody = showDescription(pType);

        this.isSync =       "Whether to sync (true or false)";

        this.targetChainId= "Input TargetChainId";
        this.sender =       "Sender's address";
        this.receiver =     "Recipient's address";

        this.fee =          "Input fees";
        this.amount =       "Amount of aston to be transmitted";
        this.time =         "For signing on the server (Set users to null)";

        this.payloadType =  "Set payloadType (1~10)";
        this.payloadBody = pBody;
    }
    else { // sample
        var pBody = showSample(pType);
        var sender = "0xeba3f7d6983141ecbca0319aed800458d9a3f2d5";
        var receiver = "0xd52ff6084b6dec53b74b2ac9133fe3541709fa7f";
        var amount = '10';
        var fee = '1000000000000000000'; // 1, 000,000,000,000,000,000

        if (pType !== 1) {
            amount = '0';
            receiver = sender;
        }
        if (pType === 3) { // bonding
            fee = '10000000000000000000000'; // 10,000, 000,000,000,000,000,000
        } else if (pType === 7) {
            fee = '100000000000000000000'; // 100, 000,000,000,000,000,000
        } else if (pType === 8) {
            fee = '0';
        } else if (pType === 10){
            fee = '1000000000000000000000'; // 1,000, 000,000,000,000,000,000
        }

        this.isSync = false;

        this.targetChainId = "0T";
        this.sender = sender;
        this.receiver = receiver;

        this.fee = fee;
        this.amount = amount;
        this.time = null;

        this.payloadType = pType;
        this.payloadBody = pBody;
    }

};
var ValidatorType = function(pubType, value, power) {
    // PubKey.apply(this, arguments);
    this.pub_key = new PubKey(pubType, value);
    this.power = power;
};
var PubKey = function(pubType, value) {
    this.type = pubType;
    this.value = value;
};
var AssetHolder = function(accountAddr, amount) {
    this.accountAddr = accountAddr;
    this.amount = amount;
};
var CurrentReflection = function(blockNumsForVoting, blockNumsUtilReflection) {
    this.blockNumsForVoting = blockNumsForVoting;
    this.blockNumsUtilReflection = blockNumsUtilReflection;
};
var Seed = function(ip, port) {
    this.ip = ip;
    this.port = port;
};

var showDescription = function(type) {
    res = {};
    switch (type) {
        case 1: // CommonType
            res = {
                input: "Field for storing information to be stored in the transaction"
            };
            break;
        case 2: // FileType
            res = {
                op: "Type setting (1: RegisterType, 2: UpdateType, 3: VerificationType, 4: SearchType)",
                filePath: "Data file path",
                reserved: "Constructor / modifier's digital signature for the data source (optional)",
                info: "More information about the current document (optional)",
                authors: "Address that has the right to update the data"
            };
            break;
        case 3: // BondingType
            res = {
                amount: "Quantity to bond"
            };
            break;
        case 4: // UnbondingType
            res = {
                amount: "Quantity to unbond"
            };
            break;
        case 5: // DelegatingType
            res = {
                validatorAccountAddr: "The validator address to delegate",
                amount: "Quantity to delegate"
            };
            break;
        case 6: // UndelegatingType
            res = {
                validatorAccountAddr: "The validator address to undelegate",
                amount: "Quantity to undelegate"
            };
            break;
        case 7: // GRProposalType
            var cr = new CurrentReflection(
                "Specify the voting period for the current Governance Rule change proposal. Must be less than or equal to the value of MaxBlockNumsForVoting",
                "When the current Governance Rule change proposal is approved, designate the point at which the approved content should be reflected as the number of blocks. This value must be greater than or equal to MinBlockNumsUtilReflection and less than or equal to MaxBlockNumsUtilReflection"
            );
            res = {
                rewardAmount:       "Total reward amount",
                validatorRewardRate:"Validator reward rate",
                delegatorRewardRate:"Delegator reward rate",

                minCommonTxFee:     "Minimum common transaction fee",
                minBondingTxFee:    "Minimum bonding transaction fee",
                minGRProposalTxFee: "Minimum GRProposal transaction fee",
                minGRVoteTxFee:     "Minimum GRVote transaction fee",
                minXTxFee:          "Minimum MakeXChain transaction fee",

                maxBlockNumsForVoting:      "After the governance proposal, the maximum number of blocks for voting",
                minBlockNumsToGRProposal:   "The minimum number of blocks for which the validator should participate in consecutive block agreements for the governance proposal",
                minBlockNumsUtilReflection:    "The minimum number of blocks to which the passed proposal should be applied",
                maxBlockNumsUtilReflection:    "The maximum number of blocks to which the passed proposal should be applied",

                blockNumsFreezingValidator: "The validator is excluded from the validator set when it is not connected for a certain period of time",
                blockNumsUtilUnbonded:      "The number of blocks to freeze assets for a period of time after unbonding or undelegating",
                maxDelegatableValidatorNums:"Total number of validators that can be delegated",
                validatorNums:              "The number of Validators to participate in the block agreement",

                firstCompatibleVersion: "Xnode version to be applied in XBlockchain system",
                currentReflection:      cr
            };
            break;
        case 8: // GRVoteType
            res = {
                yesOrNo: "Pros and cons of the agenda (true or false)"
            };
            break;
        case 9: // RecoverValidatorType
            res = {};
            break;
        case 10: // MakeXChainType
            var v1 = new ValidatorType("Elliptic curve type", "Public key", "Voting power");
            var a1 = new AssetHolder("assetHolder", "Amount of assets purchased by holders");
            res = {
                depth:            "How far sub-chain can be set",
                hasAsset:         "Whether this chain have assets (true / false)",
                enableSubAsset:   "Whether sub-chain have assets (true / false)",
                nonExchangeChain: "Whether to exchange assets with other chains (if false, the chain can be exchanged) (true / false)",

                airdropRate: "airdrop rate",
                assetHolders: [a1],
                validators: [v1]
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
                input: "some information"
            };
            break;
        case 2: // FileType
            // var f = [72, 101, 108, 108, 111, 10, 100, 115, 10, 10, 100, 115, 102];   b64: SGVsbG8KZHMKCmRzZg==
            res = {
                op: 1,
                filePath: "/Users/junho/projects/xcube.js/lib/xcube/test.txt",
                reserved: "EC7C14196B64ABEA2E70D52002EF8E01748252B060D8E980",
                info: "optional information",
                authors: [
                    "0xd0e78ef69ec9dd628bc90b323887999e5d75cd20",
                    "0x905a76202edfb2530344ee7cb1f531d96d7da707"
                ]
            };
            break;
        case 3: // BondingType
            res = {
                amount: "9223372036854775808"
            };
            break;
        case 4: // UnbondingType
            res = {
                amount: "4000"
            };
            break;
        case 5: // DelegatingType
            res = {
                validatorAccountAddr: "0xeba3f7d6983141ecbca0319aed800458d9a3f2d5", //"9DE91697E8FA30A7424E229121782FC8CC62ABA0",
                amount: "9223372036854775809"
            };
            break;
        case 6: // UndelegatingType
            res = {
                validatorAccountAddr: "0xeba3f7d6983141ecbca0319aed800458d9a3f2d5", //"9DE91697E8FA30A7424E229121782FC8CC62ABA0",
                amount: "6000"
            };
            break;
        case 7: // GRProposalType
            var cr = new CurrentReflection('172800', '864000');
            res = {
                rewardAmount:       '1000', //1000ATX
                validatorRewardRate:'30',
                delegatorRewardRate:'70',

                minCommonTxFee:     '1',
                minBondingTxFee:    "10000",
                minGRProposalTxFee: '100',
                minGRVoteTxFee:     '0',
                minXTxFee:          '1000',

                maxBlockNumsForVoting:      '1728000',//60 days (One blcok per 3 seconds)
                minBlockNumsToGRProposal:   '201600', //7 days
                minBlockNumsUtilReflection: '201600',
                maxBlockNumsUtilReflection: '864000',

                blockNumsFreezingValidator: '28800',  //1 days
                blockNumsUtilUnbonded:      '201600', //7 days
                maxDelegatableValidatorNums:'50',
                validatorNums:              '50',

                firstCompatibleVersion: "0.1.0-stable",
                currentReflection:          cr
            };
            break;
        case 8: // GRVoteType
            res = {
                yesOrNo: true
            };
            break;
        case 9: // RecoverValidatorType
            res = {};
            break;
        case 10: // MakeXChainType
            var v1 = new ValidatorType("xblock/PubKeySecp256k1", "0380a3fea1666bc240b4fa1e589a175784edc6876f7850ed78223ae5b6dcebdc20", "1000000");
            var v2 = new ValidatorType("xblock/PubKeySecp256k1", "03fd1ce8753d65d793cfd6ddbb19a3f7aed94e1e7e4f42e11d323eb29841cfc363", "2000000");
            var a1 = new AssetHolder("0xd0e78ef69ec9dd628bc90b323887999e5d75cd20", '100');
            var a2 = new AssetHolder("0x905a76202edfb2530344ee7cb1f531d96d7da707", '200');
            var seed1 = new Seed("123.532.231.54", '1111');
            var seed2 = new Seed("192.168.10.123", '2222');

            res = {
                depth:            '10',
                hasAsset:         true,
                enableSubAsset:   false,
                nonExchangeChain: true,

                airdropRate: '20',
                assetHolders: [a1, a2],
                seeds: [seed1, seed2],
                validators: [v1, v2],

                customDesc: "desc"
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