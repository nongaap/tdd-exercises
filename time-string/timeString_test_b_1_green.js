"use strict";

const chai = require('chai');
const expect = chai.expect;

// 1 green: hard-code the correct answer

function timeString(string) {
	return '0:00:01';
}

describe('timeString test', function() {

  it('Returns single output when string is inputed', function() {
    expect(timeString('00:01')).to.equal('0:00:01');
  });

});