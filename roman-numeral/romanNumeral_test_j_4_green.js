"use strict";

const chai = require('chai');
const expect = chai.expect;

// 4 green: Implement just enough logic to get the test passing

const actual = [];
const expected = [];

function romanNumeral(number) {
	if(number < 4) {
		return repeatI(number);		
	} else {
		return 'IV';
	}

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
