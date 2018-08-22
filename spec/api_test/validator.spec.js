var Validator = require('../../lib/xcube/api/validator');
var validator = new Validator(this);
var formatters = require('../../lib/xcube/formatters');
var responseForm = require('../helpers/responseForm');

var validatorExData = {
    password: "password123",
    rightAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB99091",
    rightAddress2: "9DE91697E8FA30A7424E229121782FC8CC62ABA0",
    wrongAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB9909",
    priKey: "3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266",
    chainId: "test_chainId",
    blockNo: 922337203683
};

describe("validator >>", function () {
    // 1. IsValidator
    it("IsValidator(targetChainId string)", function () {
        var param1 = formatters.inputMustString1(validatorExData.chainId);

        var isValidator = function(p1) {
            return true;
        };
        expect(isValidator(param1)).toEqual(true);
    });
    it("IsValidator error check (First parameter : string type)", function() {
        expect(function () {
            validator.isValidator();
            validator.isValidator(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });

    // 2. GetValidatorsOf
    it("GetValidatorsOf(targetChainId string, address accounts.Address)", function () {
        var param1 = formatters.inputMustString1(validatorExData.chainId);
        var param2 = formatters.inputMustHexString2(validatorExData.rightAddress);

        var getValidatorsOf = function(p1, p2) {
            return true;
        };
        expect(getValidatorsOf(param1, param2)).toEqual(true);
    });
    it("GetValidatorsOf error check (First parameter : string type)", function() {
        expect(function () {
            validator.getValidatorsOf();
            validator.getValidatorsOf(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetValidatorsOf error check (Second parameter : string type)", function() {
        expect(function () {
            validator.getValidatorsOf(validatorExData.chainId, 123);
        }).toThrowError(formatters.errStrMap.inputMustHexString2);
    });
    it("GetValidatorsOf error check (Second parameter : odd length)", function() {
        expect(function () {
            validator.getValidatorsOf(validatorExData.chainId, validatorExData.wrongAddress);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });

    // 3. GetValidatorSet
    it("GetValidatorSet(targetChainId string, blockNo int64)", function () {
        var param1 = formatters.inputMustString1(validatorExData.chainId);
        var param2 = formatters.inputMustNumber2(validatorExData.blockNo);

        var getValidatorSet = function(p1, p2) {
            var setOfBlockRes = {
                ValidatorSet: [
                    validatorExData.rightAddress,
                    validatorExData.rightAddress2
                ]
            };
            return setOfBlockRes;
        };
        expect(getValidatorSet(param1, param2)).toEqual(responseForm.setOfBlockRes);
    });
    it("GetValidatorSet error check (First parameter : string type)", function() {
        expect(function () {
            validator.getValidatorSet();
            validator.getValidatorSet(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetValidatorSet error check (Second parameter : number type)", function() {
        expect(function () {
            validator.getValidatorSet(validatorExData.chainId, "A");
        }).toThrowError(formatters.errStrMap.inputMustNumber2);
    });

});
