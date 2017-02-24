"use strict";

const chai = require('chai');
const expect = chai.expect;

// 5 green: Implement just enough logic to get the test passing

const actual = [];
const expected = [];

function timeString(string) {
	if(stringSplit(string).length > 1) {
		let minutes = [];
		let seconds = [];
		for(let i = 0; i < stringSplit(string).length; i++){
			minutes.push(timeSplit(stringSplit(string)[i])[0]);
			seconds.push(timeSplit(stringSplit(string)[i])[1]);
		}
		return '0:'.concat(stringSum(minutes)).concat(':').concat(stringSum(seconds));
	}

	let hours = ['0'];
	let other = string.split(':');

	if(other.length > 2) {
		return string;
	} else {
		return hours.concat(other).join(':');		
	}
}

function stringSplit(string) {
	return string.split(' ');
}

function timeSplit(string) {
	return string.split(':');
}

function stringSum(stringArr) {
	let sum = 0;
	for(let i = 0; i < stringArr.length; i++) {
		sum = sum + parseInt(stringArr[i], 10);
	}
	return sum.toString().length > 1 ? sum.toString() : '0'.concat(sum.toString());
}



function test (input, output) {
	actual.push(timeString(input));
	expected.push(output);
}

test('00:01', '0:00:01');
test('00:02', '0:00:02');
test('00:03', '0:00:03');
test('01:01', '0:01:01');
test('1:00:01', '1:00:01');
test('00:01 00:01', '0:00:02');
test('00:01 00:01 02:04', '0:02:06');

describe('timeString test', function() {

  it('Returns expected string output when string is passed into timeString function', function() {
    expect(actual).to.eql(expected);
  });

});