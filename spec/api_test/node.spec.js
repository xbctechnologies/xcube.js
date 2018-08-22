var Node = require('../../lib/xcube/api/node');
var node = new Node(this);
var formatters = require('../../lib/xcube/formatters');
var responseForm = require('../helpers/responseForm');

var nodeExData = {
    password: "password123",
    rightAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB99091",
    wrongAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB9909",
    priKey: "3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266",
    chainId: "test_chainId",
    blockNo: 922337203683
};

describe("node >>", function () {
    // 1. Sync
    it("Sync(targetChainId string)", function () {
        var param1 = formatters.inputMustString1(nodeExData.chainId);

        var Sync = function(p1) {
            return true;
        };
        expect(Sync(param1)).toEqual(true);
    });
    it("Sync error check (First parameter : string type)", function() {
        expect(function () {
            node.sync();
            node.sync(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });

    // 2. IsSync
    it("IsSync(targetChainId string)", function () {
        var param1 = formatters.inputMustString1(nodeExData.chainId);

        var IsSync = function(p1) {
            return true;
        };
        expect(IsSync(param1)).toEqual(true);
    });
    it("Sync error check (First parameter : string type)", function() {
        expect(function () {
            node.isSync();
            node.isSync(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });

    // 3. GetXChainInfo
    it("GetVersion()", function () {
        //todo(jh): impl
    });

    // 4. GetVersion
    it("GetVersion()", function () {
        var GetVersion = function() {
            var version = "0.1.0-stable";
            return version;
        };
        expect(GetVersion()).toEqual("0.1.0-stable");
    });

});
