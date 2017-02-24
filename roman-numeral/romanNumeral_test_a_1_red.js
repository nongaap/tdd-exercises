"use strict";

const chai = require('chai');
const expect = chai.expect;

// 1 red: design what the function looks like in terms of how it is tested

function romanNumeral(number) {
	return '?';
}

describe('romanNumeral test', function() {

  it('Returns I when 1 is inputed', function() {
    expect(romanNumeral(1)).to.equal('I');
  });

});