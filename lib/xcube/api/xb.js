const Property = require('../property');
const formatters = require('../formatters');

const properties = function () {
    return [
        new Property({
            name: 'accounts',
            getter: 'account_getList'
        }),
        new Property({
            name: 'netMode',
            getter: 'network_getNetMode'
        })
    ];
}

function XB(xCube) {
    const _this = this;

    properties().forEach(function (p) {
        p.attachToObject(_this);
        p.setRequestManager(xCube.requestManager);
    });
}

module.exports = XB;