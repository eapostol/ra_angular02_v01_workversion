"use strict";
const sinon = require('sinon');
const mymodule_1 = require('../app/mymodule');
describe('My Module', () => {
    describe('#SayGoodbye', () => {
        it('should say goodbye', () => {
            let logSpy = sinon.spy();
            mymodule_1.SayGoodbye(logSpy);
            sinon.assert.calledWith(logSpy, 'Goodbye :(');
        });
    });
});
//# sourceMappingURL=mymodule.test.js.map