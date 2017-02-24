"use strict";

const chai = require('chai');
const expect = chai.expect;

// 1 refactor: make it easier to add new tests

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

describe('romanNumeral test', function() {

  it('Returns expected numeral output when number is passed into romanNumeral function', function() {
    expect(actual).to.eql(expected);
  });

});