var API = require('../api');
var formatters = require('../formatters');
var utils = require('../../utils/util');

var validatorApis = function () {
    var isValidator = new API({
        name: 'isValidator',
        call: 'validator_isValidator',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockFormatter
    });

    var getValidatorsOf = new API({
        name: 'getValidatorsOf',
        call: 'validator_getValidatorsOf',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputBondFormatter
    });

    var getValidatorSet = new API({
        name: 'getValidatorSet',
        call: 'validator_getValidatorSet',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustNumber2],
        // outputFormatter: formatters.outputTransactionFormatter
    });

    return [
        isValidator,
        getValidatorsOf,
        getValidatorSet
    ]
};

function Validator(xCube) {
    var _this = this;

    validatorApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Validator;