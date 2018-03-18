'use strict';

const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'));

const expect = chai.expect;

describe('domain-me', () => {
    beforeEach(() => {
        this.robot = {
            respond: sinon.spy(),
            hear: sinon.spy()
        };
        return require('../src/domain-me')(this.robot);
    });

    return it('registers a respond listener', () => {
        return expect(this.robot.respond).to.have.been.calledWith(/domain(\s+me)?$/);
    });
});
