var BigNumber = require('bignumber.js');

var payloadBodyMap = {
    commonTx: "eyJpbnB1dCI6InR4Q29tbW9uUGF5bG9hZEJvZHkgdGVzdGluZyJ9",
    fileTx: "eyJmaWxlIjoiZEhoR2FXeGxVR0Y1Ykc5aFpFSnZaSGtnZEdWemRHbHVadz09In0=",
    bondingTx: "eyJhbW91bnQiOjMzM30=",
};

var TxRequest = function (pType, wannaSample) {
    BigNumber.config({DECIMAL_PLACES: 30});
    BigNumber.config({EXPONENTIAL_AT: [-7, 30]});
    if (wannaSample === false) { // description
        var pBody = showDescription(pType);

        this.isSync = "Whether to sync (true or false)";

        this.targetChainId = "Input TargetChainId";
        this.sender = "Sender's address";
        this.receiver = "Recipient's address";

        this.fee = "Input fees";
        this.amount = "Amount of aston to be transmitted";
        this.time = "For signing on the server (Set users to null)";

        this.payloadType = "Set payloadType (1~10)";
        this.payloadBody = pBody;
    }
    else { // sample
        var pBody = showSample(pType);
        var sender = "0x9ac601f1a9c8385cb1fd794d030898168b0b617a";
        var receiver = "0x7826d36525a285072fd8fe7cbe1597013d8d9761";
        var validator = "0xd52ff6084b6dec53b74b2ac9133fe3541709fa7f";
        var amount = '1000000000000000000';
        var fee = '1000000000000000000'; // 1, 000,000,000,000,000,000

        switch (pType) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 6:
                break;
            default:
                amount = '0';
        }
        if (pType !== 1) {
            receiver = sender;
        }
        if (pType === 3) { // bonding
            fee = '10000000000000000000000'; // 10,000, 000,000,000,000,000,000
        } else if (pType === 5 || pType === 6) {
            receiver = validator;
        } else if (pType === 7) {
            sender = validator;
            receiver = validator;
            fee = '100000000000000000000'; // 100, 000,000,000,000,000,000
        } else if (pType === 8) {
            sender = validator;
            receiver = validator;
            fee = '0';
        } else if (pType === 9) {
            sender = validator;
            receiver = validator;
        } else if (pType === 10) {
            fee = '1000000000000000000000'; // 1,000, 000,000,000,000,000,000
        }

        this.isSync = false;

        this.targetChainId = "1T";
        this.sender = sender;
        this.receiver = receiver;

        this.fee = fee;
        this.amount = amount;
        this.time = null;

        this.payloadType = pType;
        this.payloadBody = pBody;
    }

};

var ValidatorType = function (pubType, value, power, companyName, companyDesc, companyUrl, companyLogoUrl, companyLat, companyLon) {
    // PubKey.apply(this, arguments);
    this.pub_key = new PubKey(pubType, value);
    this.power = power;

    this.companyName = companyName;
    this.companyDesc = companyDesc;
    this.companyUrl = companyUrl;
    this.companyLogoUrl = companyLogoUrl;
    this.companyLat = companyLat;
    this.companyLon = companyLon;
};
var PubKey = function (pubType, value) {
    this.type = pubType;
    this.value = value;
};
var AssetHolder = function (accountAddr, amount) {
    this.accountAddr = accountAddr;
    this.amount = amount;
};
var CurrentReflection = function (blockNumsForVoting, blockNumsUtilReflection) {
    this.blockNumsForVoting = blockNumsForVoting;
    this.blockNumsUtilReflection = blockNumsUtilReflection;
};
var Seed = function (id, ip, port) {
    this.id = id;
    this.ip = ip;
    this.port = port;
};

var showDescription = function (type) {
    res = {};
    switch (type) {
        case 1: // CommonType
            res = {
                input: "Field for storing information to be stored in the transaction"
            };
            break;
        case 2: // FileType
            res = {
                op: "Type setting (1: RegisterType, 2: UpdateType)",
                filePath: "Data file path",
                reserved: "Constructor / modifier's digital signature for the data source (optional)",
                info: "More information about the current document (optional)",
                authors: "Address that has the right to update the data"
            };
            break;
        case 3: // BondingType
            res = {
                companyName: "This is a company name",
                companyDesc: "This is a company description",
                companyUrl: "This is a company url",
                companyLogoUrl: "This is a company logo url",
                companyLat: "This is a company latitude",
                companyLon: "This is a company longitude",
            };
            break;
        case 4: // UnbondingType
            res = {
                input: "Free description"
            };
            break;
        case 5: // DelegatingType
            res = {
                input: "Free description",
            };
            break;
        case 6: // UndelegatingType
            res = {
                input: "Free description",
            };
            break;
        case 7: // GRProposalType
            var cr = new CurrentReflection(
                "Specify the voting period for the current Governance Rule change proposal. Must be less than or equal to the value of MaxBlockNumsForVoting",
                "When the current Governance Rule change proposal is approved, designate the point at which the approved content should be reflected as the number of blocks. This value must be greater than or equal to MinBlockNumsUtilReflection and less than or equal to MaxBlockNumsUtilReflection"
            );
            res = {
                rewardAmount: "Total reward amount",
                validatorRewardRate: "Validator reward rate",
                delegatorRewardRate: "Delegator reward rate",

                minCommonTxFee: "Minimum common transaction fee",
                minBondingTxFee: "Minimum bonding transaction fee",
                minGRProposalTxFee: "Minimum GRProposal transaction fee",
                minGRVoteTxFee: "Minimum GRVote transaction fee",
                minXTxFee: "Minimum MakeXChain transaction fee",

                maxBlockNumsForVoting: "After the governance proposal, the maximum number of blocks for voting",
                minBlockNumsToGRProposal: "The minimum number of blocks for which the validator should participate in consecutive block agreements for the governance proposal",
                minBlockNumsUtilReflection: "The minimum number of blocks to which the passed proposal should be applied",
                maxBlockNumsUtilReflection: "The maximum number of blocks to which the passed proposal should be applied",

                blockNumsFreezingValidator: "The validator is excluded from the validator set when it is not connected for a certain period of time",
                blockNumsUtilUnbonded: "The number of blocks to freeze assets for a period of time after unbonding or undelegating",
                maxDelegatableValidatorNums: "Total number of validators that can be delegated",
                validatorNums: "The number of Validators to participate in the block agreement",

                firstCompatibleVersion: "Xnode version to be applied in XBlockchain system",
                currentReflection: cr
            };
            break;
        case 8: // GRVoteType
            res = {
                yesOrNo: "Pros and cons of the agenda (true or false)"
            };
            break;
        case 9: // RecoverValidatorType
            res = {
                input: "Free description",
            };
            break;
        case 10: // MakeXChainType
            var v1 = new ValidatorType("Elliptic curve type", "Public key", "Voting power");
            var s1 = new Seed("ID of seed", "IP", "Port");
            var a1 = new AssetHolder("assetHolder", "Amount of assets purchased by holders");
            res = {
                depth: "How far sub-chain can be set",
                hasAsset: "Whether this chain have assets (true / false)",
                enableSubAsset: "Whether sub-chain have assets (true / false)",
                nonExchangeChain: "Whether to exchange assets with other chains (if false, the chain can be exchanged) (true / false)",

                airdropRate: "airdrop rate",
                assetHolders: [a1],
                seeds: [s1],
                validators: [v1],
                customDesc: "Chain description",
                coinName: "Coin Name",
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
                filePath: "/etc/profile",
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
                companyName: "Xblocksystems",
                companyDesc: "Xblocksystems is specialized in the field of block chain and security certification.",
                companyUrl: "http://www.xblocksys.com",
                companyLogoUrl: "http://www.xblocksys.com/img/xbs_08.png",
                companyLat: "37.520958",
                companyLon: "127.029161",
            };
            break;
        case 4: // UnbondingType
            res = {
                input: "unbonding"
            };
            break;
        case 5: // DelegatingType
            res = {
                input: "delegating"
            };
            break;
        case 6: // UndelegatingType
            res = {
                input: "undelegating"
            };
            break;
        case 7: // GRProposalType
            var cr = new CurrentReflection('2', '3');
            res = {
                rewardAmount: '100', //1000ATX
                validatorRewardRate: '30',
                delegatorRewardRate: '70',

                minCommonTxFee: '1',
                minBondingTxFee: "10000",
                minGRProposalTxFee: '100',
                minGRVoteTxFee: '0',
                minXTxFee: '1000',

                maxBlockNumsForVoting: '49',//60 days (One blcok per 3 seconds)
                minBlockNumsToGRProposal: '20', //7 days
                minBlockNumsUtilReflection: '1',
                maxBlockNumsUtilReflection: '50',

                blockNumsFreezingValidator: '200',  //1 days
                blockNumsUtilUnbonded: '10', //7 days
                maxDelegatableValidatorNums: '30',
                validatorNums: '30',

                firstCompatibleVersion: "1.0",
                currentReflection: cr
            };
            break;
        case 8: // GRVoteType
            res = {
                yesOrNo: true
            };
            break;
        case 9: // RecoverValidatorType
            res = {
                input: "recover validator"
            };
            break;
        case 10: // MakeXChainType
            var v1 = new ValidatorType("xblock/PubKeySecp256k1", "Awld128lh6Vy8Qjb3yvMafU2xm+z+nPz/4mzUrtyWMYl", "1000000000000000000");
            var v2 = new ValidatorType("xblock/PubKeySecp256k1", "AsJZMJoMiAVndBO8sO1hrvd3Nn150sSgjHygM+0b3Oof", "2000000000000000000");
            var a1 = new AssetHolder("0x392531466fe4f4a4368fb48c33bf13dec2b518a9", '1000000000000000000');
            var a2 = new AssetHolder("0xeba3f7d6983141ecbca0319aed800458d9a3f2d5", '2000000000000000000');
            var seed1 = new Seed("seedId1", "192.168.0.1", '7979');
            var seed2 = new Seed("seedId2", "192.168.0.2", '8989');

            res = {
                depth: '10',
                hasAsset: true,
                enableSubAsset: false,
                nonExchangeChain: true,

                airdropRate: '20',
                assetHolders: [a1, a2],
                seeds: [seed1, seed2],
                validators: [v1, v2],

                customDesc: "desc",
                coinName: "ATX",
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