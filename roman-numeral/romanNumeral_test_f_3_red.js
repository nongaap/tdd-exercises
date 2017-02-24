"use strict";

const chai = require('chai');
const expect = chai.expect;

// 3 red: expose the next missing functionality with a test

const actual = [];
const expected = [];

function romanNumeral(number) {
	if(number === 1) {
		return 'I';
	} else {
		return 'II';
	}
}

function test (number, numeral) {
	actual.push(romanNumeral(number));
	expected.push(numeral);
}

test(1, 'I');
test(2, "II");
test(3, "III");

describe('romanNumeral test', function() {

  it('Returns expected numeral output when number is passed into romanNumeral function', function() {
    expect(actual).to.eql(expected);
  });

});
