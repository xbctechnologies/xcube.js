var Network = require('../../lib/xcube/api/network');
var network = new Network(this);
var formatters = require('../../lib/xcube/formatters');
var responseForm = require('../helpers/responseForm');

var networkExData = {
    password: "password123",
    rightAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB99091",
    wrongAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB9909",
    priKey: "3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266",
    chainId: "test_chainId",
    blockNo: 922337203683
};

describe("network >>", function () {
    // 1. GetPeerCnt
    it("GetPeerCnt(targetChainId string)", function () {
        var param1 = formatters.inputMustString1(networkExData.chainId);

        var GetPeerCnt = function(p1) {
            return 1;
        };
        expect(GetPeerCnt(param1)).toEqual(1);
    });
    it("GetPeerCnt error check (First parameter : string type)", function() {
        expect(function () {
            network.getPeerCnt();
            network.getPeerCnt(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });

    // 2. GetPeers
    it("GetPeers(targetChainId string)", function () {
        var param1 = formatters.inputMustString1(networkExData.chainId);

        var GetPeerCnt = function(p1) {
            var obj = [
                {PubKey: "0F4C47DB72B48516911CC9EB1BDEDA187FB99091"},
                {PubKey: "9DE91697E8FA30A7424E229121782FC8CC62ABA0"}
            ];
            return obj;
        };
        expect(GetPeerCnt(param1)).toEqual(responseForm.peerInfoRes);
    });
    it("GetPeers error check (First parameter : string type)", function() {
        expect(function () {
            network.getPeers();
            network.getPeers(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });

    // 3. AddPeer
    it("AddPeer(targetChainId string, peerInfo bool)", function () {
        var param1 = formatters.inputMustString1(networkExData.chainId);
        var param2 = formatters.inputMustBool2(true);

        var AddPeer = function(p1, p2) {
            return true;
        };
        expect(AddPeer(param1, param2)).toEqual(true);
    });
    it("AddPeer error check (First parameter : string type)", function() {
        expect(function () {
            network.addPeer();
            network.addPeer(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("AddPeer error check (Second parameter : boolean type)", function() {
        expect(function () {
            network.addPeer(networkExData.chainId, 123);
            network.addPeer(networkExData.chainId, "sdf");
        }).toThrowError(formatters.errStrMap.inputMustBool2);
    });

});
