var blockRes = {
    blockHash: "3D395FB9340AB345C2312ED2",
    blockNo: 922337203683,
    chainID: "test_chainId",
    numTxs: 3,
    time: 1534905140558,
    transactionRoot: "616263",
    transactions: ["61", "62", "63"]
};
var address = "9DE91697E8FA30A7424E229121782FC8CC62ABA0";
var addrListRes = [
    "0F4C47DB72B48516911CC9EB1BDEDA187FB99091",
    "9DE91697E8FA30A7424E229121782FC8CC62ABA0"
];
var balanceRes = {
    TotalBalance:     100,
    AvailableBalance: 70,
    BondingBalance:   10,
    FreezingBalance:  20
};
var bondRes = {
    Bonded:     70,
    Delegated:  20,
    Delegating: 0
};
var peerInfoRes = [
    {PubKey: "0F4C47DB72B48516911CC9EB1BDEDA187FB99091"},
    {PubKey: "9DE91697E8FA30A7424E229121782FC8CC62ABA0"}
];
var txHash = "639F5F59C9D57892BA7932E1E2F5F689DDB1B2747AC2036E9E716DED92595DD2";
var transactionSigRes = {
    V: "373524",
    R: "373525",
    S: "373526",
};
var getTxRes = {
    amount: 333,
    blockHash: "",
    blockNumber: 3,
    payloadBody: {
        amount: 10
    },
    payloadType: 3,
    v: "",
    r: "",
    s: "",
    receiver: "0000000000000000000000000000000000000000",
    sender: "0000000000000000000000000000000000000000",
    txHash: "",
    txIndex: 0
};
var getTxReceiptRes = {
    amount: 222,
    blockHash: "",
    blockNumber: 2,
    payloadBody: {
        file: "PqAhJ/QB+4iDyHW2PrTPrqCBUaFNkLxHvciOdR7jcuE="
    },
    payloadType: 2,
    v: "",
    r: "",
    s: "",
    receiver: "0000000000000000000000000000000000000000",
    sender: "0000000000000000000000000000000000000000",
    txHash: "",
    status: 1,
    txIndex: 0
};
var setOfBlockRes = {
    ValidatorSet: [
        "0F4C47DB72B48516911CC9EB1BDEDA187FB99091",
        "9DE91697E8FA30A7424E229121782FC8CC62ABA0"
    ]
};

module.exports = {
    blockRes: blockRes,
    address: address,
    addrListRes: addrListRes,
    balanceRes: balanceRes,
    bondRes: bondRes,
    peerInfoRes: peerInfoRes,
    txHash: txHash,
    transactionSigRes: transactionSigRes,
    getTxRes: getTxRes,
    getTxReceiptRes: getTxReceiptRes,
    setOfBlockRes: setOfBlockRes
};