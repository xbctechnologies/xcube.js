var BigNumber = require('bignumber.js');
var utf8 = require('utf8');
// var Buffer = require('buffer');

var unitMap = {
    'xto':      1,
    'kxto':     2,
    'Kxto':     2,
    'mxto':     3,
    'Mxto':     3,
    'gxto':     4,
    'Gxto':     4,
    'microatx': 5,
    'micro':    5,
    'milliatx': 6,
    'milli':    6,
    'atx':      7
};

const btoaUTF8 = function(str) { return Buffer.from(str, 'utf8').toString('base64'); };
const atobUTF8 = function(b64Encoded) {return Buffer.from(b64Encoded, 'base64').toString('utf8');};

var isFunction = function (object) {
    return typeof object === 'function';
};

var toHex = function (val) {
    /*jshint maxcomplexity: 8 */
    console.log("toHex() val=", val, typeof val);
    if (isBoolean(val))
        return fromDecimal(+val);

    if (isBigNumber(val))
        return fromDecimal(val);

    if (typeof val === 'object')
        return fromUtf8(JSON.stringify(val));

    // if its a negative number, pass it through fromDecimal
    if (isString(val)) {
        if (val.indexOf('-0x') === 0)
            return fromDecimal(val);
        else if (val.indexOf('0x') === 0)
            return val;
        else if (!isFinite(val))
            return fromUtf8(val, 1);
    }
    var res = fromDecimal(val);
    console.log("res=", res, typeof res);
    return res;
};

var toDecimal = function (value) {
    return toBigNumber(value).toNumber();
};

var fromDecimal = function (value) {
    console.log("fromDecimal() value=", value, typeof value);
    var number = toBigNumber(value);
    var result = number.toString(16);
    console.log("number.isLessThan(0)=", number.isLessThan(0));

    return number.isLessThan(0) ? '-0x' + result.substr(1) : '0x' + result;
};

var toUtf8 = function (hex) {
// Find termination
    var str = "";
    var i = 0, l = hex.length;
    if (hex.substring(0, 2) === '0x') {
        i = 2;
    }
    for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        if (code === 0)
            break;
        str += String.fromCharCode(code);
    }
    return utf8.decode(str);
};

var toAscii = function (hex) {
// Find termination
    var str = "";
    var i = 0, l = hex.length;
    if (hex.substring(0, 2) === '0x') {
        i = 2;
    }
    for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
    }
    return str;
};

/*var fromXto = function(number, unit) {
    var returnValue = toBigNumber(number).dividedBy(getValueOfUnit(unit));

    return isBigNumber(number) ? returnValue : returnValue.toString(10);
};
var getValueOfUnit = function (unit) {
    console.log("unit=", unit);
    unit = unit ? unit.toLowerCase() : 'aston';
    console.log("unit=", unit);
    var unitValue = unitMap[unit];
    console.log("unitValue=", unitValue);
    if (unitValue === undefined) {
        throw new Error('This unit doesn\'t exists, please use the one of the following units' + JSON.stringify(unitMap, null, 2));
    }
    return new BigNumber(unitValue, 10);
};*/

var fromUtf8 = function (str, allowZero) {
    console.log("fromUtf8() str=", str, " allowZero=", allowZero);
    str = utf8.encode(str);
    var hex = "";
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code === 0) {
            if (allowZero) {
                hex += '00';
            } else {
                break;
            }
        } else {
            var n = code.toString(16);
            hex += n.length < 2 ? '0' + n : n;
        }
    }
    return "0x" + hex;
};

var fromAscii = function (str, num) {
    var hex = "";
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        var n = code.toString(16);
        hex += n.length < 2 ? '0' + n : n;
    }

    return "0x" + hex.padEnd(num, '0');
};

var toBigNumber = function (number) {
    /*jshint maxcomplexity:5 */
    number = number || 0;
    if (isBigNumber(number)){
        return number;
    } else {
        return new BigNumber(number);
    }
};

var isBigNumber = function (object) {
    return object instanceof BigNumber ||
        (object && object.constructor && object.constructor.name === 'BigNumber');
};

var isString = function (object) {
    return typeof object === 'string' ||
        (object && object.constructor && object.constructor.name === 'String');
};
var isNumber = function (object) {
    return typeof object === 'number' ||
        (object && object.constructor && object.constructor.name === 'Number');
};

var isObject = function (object) {
    return object !== null && !(Array.isArray(object)) && typeof object === 'object';
};

var isBoolean = function (object) {
    return typeof object === 'boolean';
};

var isArray = function (object) {
    return Array.isArray(object);
};

var isJson = function (str) {
    try {
        return !!JSON.parse(str);
    } catch (e) {
        return false;
    }
};

var isBloom = function (bloom) {
    if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
        return false;
    } else if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
        return true;
    }
    return false;
};

var isTopic = function (topic) {
    if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
        return false;
    } else if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
        return true;
    }
    return false;
};

var isStrictAddress = function (address) {
    return /^0x[0-9a-f]{40}$/i.test(address);
};
var isAddress = function (address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
    } else {
        // Otherwise check each case
        return isChecksumAddress(address);
    }
};
var encodeBase64 = function (str) {
    // console.log("btoaUTF8(str)=", btoaUTF8(str));
    return btoaUTF8(str);
};
var decodeBase64 = function (b64Encoded) {
    // console.log("atobUTF8(b64Encoded)=", atobUTF8(b64Encoded));
    return atobUTF8(b64Encoded);
};
var unitMapping = function(str){
    for(var key in unitMap){
        if (key == str) {
            return unitMap[key];
        }
    }
    return null;
};
var negativeCheck = function(number){
    if (number < 0) {
        throw new Error("There is a negative number.");
    } else {
        return number;
    }
};

module.exports = {
    isFunction: isFunction,
    toHex: toHex,
    toDecimal: toDecimal,
    fromDecimal: fromDecimal,
    toUtf8: toUtf8,
    toAscii: toAscii,
    fromUtf8: fromUtf8,
    fromAscii: fromAscii,
    toBigNumber: toBigNumber,
    isBigNumber: isBigNumber,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isBoolean: isBoolean,
    isArray: isArray,
    isJson: isJson,
    isBloom: isBloom,
    isTopic: isTopic,
    isStrictAddress: isStrictAddress,
    isAddress: isAddress,
    encodeBase64: encodeBase64,
    decodeBase64: decodeBase64,
    unitMapping: unitMapping,
    negativeCheck: negativeCheck
};



