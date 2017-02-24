"use strict";

const chai = require('chai');
const expect = chai.expect;

// 1 red: design what the function looks like in terms of how it is tested

function timeString(string) {
	return '?';
}

describe('timeString test', function() {

  it('Returns single output when string is inputed', function() {
    expect(timeString('00:01')).to.equal('0:00:01');
  });

});