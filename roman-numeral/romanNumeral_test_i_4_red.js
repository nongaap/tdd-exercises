"use strict";

const chai = require('chai');
const expect = chai.expect;

// 4 red: expose the next missing functionality with a test

const actual = [];
const expected = [];

function romanNumeral(number) {
	return repeatI(number);
}

function repeatI(number) {
	var numeral = '';
	for(let i = 0; i < number; i++) {
		numeral = numeral.concat('I');
	}
	return numeral;
}

function test (number, numeral) {
	actual.push(romanNumeral(number));
	expected.push(numeral);
}

test(1, 'I');
test(2, "II");
test(3, "III");
test(4, "IV");

describe('romanNumeral test', function() {

  it('Returns expected numeral output when number is passed into romanNumeral function', function() {
    expect(actual).to.eql(expected);
  });

});
