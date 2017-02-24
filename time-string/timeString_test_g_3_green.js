"use strict";

const chai = require('chai');
const expect = chai.expect;

// 3 green:  implement just enough logic to get the test passing

const actual = [];
const expected = [];

function timeString(string) {
	if(string === '00:01') {
		return '0:00:01';
	} else if (string === '00:02') {
		return '0:00:02';
	} else {
		return '0:00:03';
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