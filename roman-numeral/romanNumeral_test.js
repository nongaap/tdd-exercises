"use strict";

const chai = require('chai');
const expect = chai.expect;


const actual = [];
const expected = [];

function romanNumeral(n) {
	var output = [];
	var number = n;
	var numbers = [1000,900,500,400,100,90,50,40,10,9,8,7,6,5,4,3,2,1];
  	var numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","VIII","VII","VI","V","IV","III","II","I"];
	
	if (numbers.indexOf(n) > -1) {
		return numerals[numbers.indexOf(n)];
	}	

	for (var i = 0; i < numbers.length; i++) {
		if (number >= numbers[i]) {
			output.push(numerals[i]);
			number = number - numbers[i];
			i--;
		} else if (number === 0) {
			return output.join('');
		}
	}
}


function test (number, numeral) {
	actual.push(romanNumeral(number));
	expected.push(numeral);
}

test(1, "I");
test(2, "II");
test(3, "III");
test(4, "IV");
test(5, "V");
test(6, "VI");
test(7, "VII");
test(8, "VIII");
test(9, "IX");
test(10, "X");
test(11, "XI");
test(12, "XII");
test(13, "XIII");
test(14, "XIV");
test(15, "XV");
test(16, "XVI");
test(17, "XVII");
test(18, "XVIII");
test(19, "XIX");
test(20, "XX");
test(40, "XL");
test(50, "L");
test(90, "XC");
test(100, "C");
test(400, "CD");
test(500, "D");
test(900, "CM");
test(1000, "M");
test(3999, "MMMCMXCIX");

describe('romanNumeral test', function() {

  it('Returns expected numeral output when number is passed into romanNumeral function', function() {
    expect(actual).to.eql(expected);
  });

});
