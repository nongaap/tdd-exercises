"use strict";

const chai = require('chai');
const expect = chai.expect;

// 3 red: expose the next missing functionality with a test

const actual = [];
const expected = [];

function timeString(string) {
	if(string === '00:01') {
		return '0:00:01';
	} else {
		return '0:00:02';
	}
}

function test (input, output) {
	actual.push(timeString(input));
	expected.push(output);
}

test('00:01', '0:00:01');
test('00:02', '0:00:02');
test('00:03', '0:00:03');

describe('timeString test', function() {

  it('Returns expected string output when string is passed into timeString function', function() {
    expect(actual).to.eql(expected);
  });

});