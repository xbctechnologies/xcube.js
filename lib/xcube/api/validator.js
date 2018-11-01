const API = require('../api');
const formatters = require('../formatters');
const utils = require('../../utils/util');

const validatorApis = function () {
    const isValidator = new API({
        name: 'isValidator',
        call: 'validator_isValidator',
        params: 1,
        inputFormatter: [formatters.inputMustString1],
        // outputFormatter: formatters.outputBlockFormatter
    });

    const getValidatorsOf = new API({
        name: 'getValidatorsOf',
        call: 'validator_getValidatorsOf',
        params: 2,
        inputFormatter: [formatters.inputMustString1, formatters.inputMustHexString2],
        outputFormatter: formatters.outputBondFormatter
    });

    const getValidatorSet = new API({
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
    const _this = this;

    validatorApis().forEach(function (api) {
        api.attachToObject(_this);
        api.setRequestManager(xCube.requestManager);
    });
}

module.exports = Validator;