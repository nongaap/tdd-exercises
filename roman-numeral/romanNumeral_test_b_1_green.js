"use strict";

const chai = require('chai');
const expect = chai.expect;

// 1 green: hard-code the correct answer

function romanNumeral(number) {
	return 'I';
}

describe('romanNumeral test', function() {

  it('Returns I when 1 is inputed', function() {
    expect(romanNumeral(1)).to.equal('I');
  });

});