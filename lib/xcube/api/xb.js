var Property = require('../property');
var formatters = require('../formatters');

var properties = function () {
    return [
        new Property({
            name: 'accounts',
            getter: 'account_getList'
        })
    ];
}

function XB(xCube) {
    var _this = this;

    properties().forEach(function (p) {
        p.attachToObject(_this);
        p.setRequestManager(xCube.requestManager);
    });
}

module.exports = XB;