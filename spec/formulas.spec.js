var formulas = require('./formulas.js');
// var Jasmine = require('jasmine');
// var jasmine = new Jasmine();
// var jasmine = require('jasmine-ajax');
// var jasmine = require('jasmine-core');

/*describe('Formula test', function () {
    it('adds two numbers', function () {
        expect(formulas.sum(1, 2)).toBe(3);
    });
    it('multiplies two numbers', function () {
        expect(formulas.multiply(2, 3)).toBe(6);
    });

    it('param test', function () {
        // expect(mySpy).toHaveBeenCalledWith(formulas.myChecker('stuff'));
        expect({myState: 'things'}).toEqual(formulas.myChecker('things'));

        expect({
            parent: {
                myState: 'stuff'
            }
        }).toEqual({parent: formulas.myChecker('stuff')});
    });
});*/

/*describe("mocking ajax", function () {
    console.log("jasmin.ajax = ", jasmine.Ajax);
    if(typeof jasmine.Ajax === 'undefined'){
        require('jasmine-ajax');
        console.log("2. jasmin.ajax = ", jasmine.Ajax);
    }

    describe("suite wide usage", function () {
        beforeEach(function () {
            jasmine.Ajax.install();
        });
        afterEach(function () {
            jasmine.Ajax.uninstall();
        });
        it("specifying response when you need it", function () {
            var doneFn = jasmine.createSpy("success");
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState == this.DONE) {
                    doneFn(this.responseText);
                }
            };

            xhr.open("GET", "/some/cool/url");
            xhr.send();
            expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
            expect(doneFn).not.toHaveBeenCalled();
            jasmine.Ajax.requests.mostRecent().respondWith({
                "status": 200,
                "contentType": 'text/plain',
                "responseText": 'awesome response'
            });
            expect(doneFn).toHaveBeenCalledWith('awesome response');
        });
        it("allows responses to be setup ahead of time", function () {
            var doneFn = jasmine.createSpy("success");
            jasmine.Ajax.stubRequest('/another/url').andReturn({
                "responseText": 'immediate response'
            });
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState == this.DONE) {
                    doneFn(this.responseText);
                }
            };

            xhr.open("GET", "/another/url");
            xhr.send();

            expect(doneFn).toHaveBeenCalledWith('immediate response');
        });
    });
    it("allows use in a single spec", function () {
        var doneFn = jasmine.createSpy('success');
        jasmine.Ajax.withMock(function () {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState == this.DONE) {
                    doneFn(this.responseText);
                }
            };

            xhr.open("GET", "/some/cool/url");
            xhr.send();

            expect(doneFn).not.toHaveBeenCalled();

            jasmine.Ajax.requests.mostRecent().respondWith({
                "status": 200,
                "responseText": 'in spec response'
            });

            expect(doneFn).toHaveBeenCalledWith('in spec response');
        });
    });
});*/
