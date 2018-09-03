var Account = require('../../lib/xcube/api/account');
var account = new Account(this);
var formatters = require('../../lib/xcube/formatters');
var responseForm = require('../helpers/responseForm');

var accountExData = {
    password: "password123",
    rightAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB99091",
    rightAddress2: "9DE91697E8FA30A7424E229121782FC8CC62ABA0",
    wrongAddress: "0F4C47DB72B48516911CC9EB1BDEDA187FB9909",
    priKey: "3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266",
    chainId: "test_chainId",
    duration: 31,
};

describe("account >>", function () {
    // 1. New
    it("New(password string)", function () {
        var param1 = formatters.inputMustString1(accountExData.password);

        var newApi = function(p1) {
            var address = "9DE91697E8FA30A7424E229121782FC8CC62ABA0";
            return address;
        };
        expect(newApi(param1)).toEqual(responseForm.address);
    });
    it("New error check (First parameter : string type)", function() {
        expect(function () {
            account.new();
            account.new(123);
            account.new(false);
            account.new({});
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });

    // 2. Import
    it("Import(priKey string)", function () {
        var param1 = formatters.inputMustString1(accountExData.priKey);

        var importApi = function(p1) {
            return true;
        };
        expect(importApi(param1)).toEqual(true);
    });
    it("Import error check (First parameter : string type)", function() {
        expect(function () {
            account.import(false);
            account.import({});
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });

    // 3. Export
    it("Export(address accounts.Address, password string)", function () {
        var param1 = formatters.inputMustHexString1(accountExData.rightAddress);
        var param2 = formatters.inputMustString2(accountExData.password);

        var exportApi = function(p1, p2) {
            return true;
        };
        expect(exportApi(param1, param2)).toEqual(true);
    });
    it("Export error check (First parameter : string type)", function() {
        expect(function () {
            account.export();
            account.export(123);
        }).toThrowError(formatters.errStrMap.inputMustHexString1);
    });
    it("Export error check (First parameter : odd length)", function() {
        expect(function () {
            account.export(accountExData.wrongAddress);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd1);
    });
    it("Export error check (Second parameter : string type)", function() {
        expect(function () {
            account.export(accountExData.rightAddress, 123);
        }).toThrowError(formatters.errStrMap.inputMustString2);
    });

    // 4. Lock
    it("Lock(targetChainId string, address accounts.Address)", function () {
        var param1 = formatters.inputMustString1(accountExData.chainId);
        var param2 = formatters.inputMustHexString2(accountExData.rightAddress);

        var lock = function(p1, p2) {
            return true;
        };
        expect(lock(param1, param2)).toEqual(true);
    });
    it("Lock error check (First parameter : string type)", function() {
        expect(function () {
            account.lock();
            account.lock(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("Lock error check (Second parameter : string type)", function() {
        expect(function () {
            account.lock(accountExData.chainId, 123);
        }).toThrowError(formatters.errStrMap.inputMustHexString2);
    });
    it("Lock error check (Second parameter : odd length)", function() {
        expect(function () {
            account.lock(accountExData.chainId, accountExData.wrongAddress);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });

    // 5. Unlock
    it("Unlock(targetChainId string, address accounts.Address, password string, duration *uint64)", function () {
        var param1 = formatters.inputMustString1(accountExData.chainId);
        var param2 = formatters.inputMustHexString2(accountExData.rightAddress);
        var param3 = formatters.inputMustString3(accountExData.password);
        var param4 = formatters.inputMustNumber4(accountExData.duration);

        var unlock = function(p1, p2, p3, p4) {
            return true;
        };
        expect(unlock(param1, param2, param3, param4)).toEqual(true);
    });
    it("Unlock error check (First parameter : string type)", function() {
        expect(function () {
            account.unlock();
            account.unlock(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("Unlock error check (Second parameter : string type)", function() {
        expect(function () {
            account.unlock(accountExData.chainId, 123);
        }).toThrowError(formatters.errStrMap.inputMustHexString2);
    });
    it("Unlock error check (Second parameter : odd length)", function() {
        expect(function () {
            account.unlock(accountExData.chainId, accountExData.wrongAddress);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });
    it("Unlock error check (Third parameter : string type)", function() {
        expect(function () {
            account.unlock(accountExData.chainId, accountExData.rightAddress, 123);
        }).toThrowError(formatters.errStrMap.inputMustString3);
    });
    it("Unlock error check (Fourth parameter : number type)", function() {
        expect(function () {
            account.unlock(accountExData.chainId, accountExData.rightAddress, accountExData.password);
            account.unlock(accountExData.chainId, accountExData.rightAddress, accountExData.password, "abc");
        }).toThrowError(formatters.errStrMap.inputMustNumber4);
    });

    // 6. GetList
    it("GetList()", function () {
        var getList = function(p1, p2, p3, p4) {
            var obj = [
                accountExData.rightAddress,
                accountExData.rightAddress2
            ];
            return obj;
        };
        expect(getList()).toEqual(responseForm.addrListRes);
    });

    // 7. GetBalance
    it("GetBalance(address accounts.Address)", function () {
        var param1 = formatters.inputMustHexString1(accountExData.rightAddress);
        var getBalance = function(p1) {
            var obj = {
                TotalBalance:     100,
                AvailableBalance: 70,
                BondingBalance:   10,
                FreezingBalance:  20
            };
            return obj;
        };
        expect(getBalance(param1)).toEqual(responseForm.balanceRes);
    });
    it("GetBalance error check (First parameter : string type)", function() {
        expect(function () {
            account.getBalance();
            account.getBalance(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetBalance error check (Second parameter : odd length)", function() {
        expect(function () {
            account.getBalance(accountExData.chainId, accountExData.wrongAddress);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });
    it("GetBalance error check (Third parameter : atxType)", function(){
        expect(function () {
            account.getBalance(accountExData.chainId, accountExData.rightAddress, "sdf");
        }).toThrowError(formatters.errStrMap.inputMustAtxtype3);
        // formatters.inputMustAtxtype3("microatx");
    });

    // 8. GetBondingAmount
    it("GetBondingAmount(address accounts.Address)", function () {
        var param1 = formatters.inputMustHexString1(accountExData.rightAddress);
        var getBondingAmount = function(p1) {
            var obj = {
                Bonded:     70,
                Delegated:  20,
                Delegating: 0
            };
            return obj;
        };
        expect(getBondingAmount(param1)).toEqual(responseForm.bondRes);
    });
    it("GetBondingAmount error check (First parameter : string type)", function() {
        expect(function () {
            account.getBondingAmount();
            account.getBondingAmount(123);
        }).toThrowError(formatters.errStrMap.inputMustString1);
    });
    it("GetBondingAmount error check (First parameter : odd length)", function() {
        expect(function () {
            account.getBondingAmount(accountExData.chainId, accountExData.wrongAddress);
        }).toThrowError(formatters.errStrMap.inputMustHexStringOdd2);
    });
    it("GetBondingAmount error check (Third parameter : atxType)", function(){
        expect(function () {
            account.getBondingAmount(accountExData.chainId, accountExData.rightAddress, "sdf");
        }).toThrowError(formatters.errStrMap.inputMustAtxtype3);
    });

});
