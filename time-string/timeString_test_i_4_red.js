"use strict";

const chai = require('chai');
const expect = chai.expect;

// 4 red: expose the next missing functionality with a test

const actual = [];
const expected = [];

function timeString(string) {
	let hours = ['0'];
	let other = string.split(':');
	return hours.concat(other).join(':');
}


function test (input, output) {
	actual.push(timeString(input));
	expected.push(output);
}

test('00:01', '0:00:01');
test('00:02', '0:00:02');
test('00:03', '0:00:03');
test('1:00:01', '1:00:01');

describe('timeString test', function() {

  it('Returns expected string output when string is passed into timeString function', function() {
    expect(actual).to.eql(expected);
  });

});