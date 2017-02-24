"use strict";

const chai = require('chai');
const expect = chai.expect;

// 2 green: implement just enough logic to get the test passing

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

describe('romanNumeral test', function() {

  it('Returns expected numeral output when number is passed into romanNumeral function', function() {
    expect(actual).to.eql(expected);
  });

});
