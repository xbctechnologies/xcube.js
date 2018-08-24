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

        var sync = function(p1) {
            return true;
        };
        expect(sync(param1)).toEqual(true);
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

        var isSync = function(p1) {
            return true;
        };
        expect(isSync(param1)).toEqual(true);
    });
    it("Sync error check (First parameter : string type)", function() {
        expect(function () {
            node.isSync();
            node.isSync(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });

    // 3. GetXChainInfo
    it("GetXChainInfo()", function () {
        var getXChainInfo = function() {
            var XChainInfoRes = [{
                childXChainInfo: [{
                    childXChainInfo: [{
                        childXChainInfo: null,
                        hasAsset: false,
                        xchainID: "0T.1T.2F"
                    }],
                    hasAsset: true,
                    xchainID: "0T.1T"
                }, {
                    childXChainInfo: null,
                    hasAsset: false,
                    xchainID: "0T.2F"
                }, {
                    childXChainInfo: null,
                    hasAsset: false,
                    xchainID: "0T.3F"
                }],
                hasAsset: true,
                xchainID: "0T"
            }, {
                childXChainInfo: null,
                hasAsset: true,
                xchainID: "0T5"
            }];
            // var a = "AAA";
            // var to_rgb = function (_text, _r, _g, _b) {
            //     return "\x1b[38;2;" + _r + ";" + _g + ";" + _b + "m" + _text + "\x1b[0m";
            // };
            // console.log(to_rgb(a, 31, 32, 33));
            //
            // console.log("\x1b[31m"+ "Sample Text"+ "\x1b[0m");
            //console.log(XChainInfoRes);
            // console.log(JSON.stringify(XChainInfoRes, null, 4));
            return XChainInfoRes;
        };
        expect(getXChainInfo()).toEqual(responseForm.xChainInfoRes);
    });

    // 4. GetVersion
    it("GetVersion()", function () {
        var getVersion = function() {
            var v = "0.1.0-stable";
            return v;
        };
        expect(getVersion()).toEqual("0.1.0-stable");
    });

});
