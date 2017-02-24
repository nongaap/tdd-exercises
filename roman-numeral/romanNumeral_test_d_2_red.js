"use strict";

const chai = require('chai');
const expect = chai.expect;

// 2 red: prove the hard-coded answer doesn't cut it by adding a second test

const actual = [];
const expected = [];

function romanNumeral(number) {
	return 'I';
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