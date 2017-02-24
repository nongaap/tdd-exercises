"use strict";

const chai = require('chai');
const expect = chai.expect;

// 2 red: prove the hard-coded answer doesn't cut it by adding a second test

const actual = [];
const expected = [];

function timeString(string) {
	return '0:00:01';
}

function test (input, output) {
	actual.push(timeString(input));
	expected.push(output);
}

test('00:01', '0:00:01');
test('00:02', '0:00:02');

describe('timeString test', function() {

  it('Returns expected string output when string is passed into timeString function', function() {
    expect(actual).to.eql(expected);
  });

});