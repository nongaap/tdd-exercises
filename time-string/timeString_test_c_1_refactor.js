"use strict";

const chai = require('chai');
const expect = chai.expect;

// 1 refactor: make it easier to add new tests

const actual = [];
const expected = [];

function timeString(string) {
	return '0:00:01';
}

function test (input, output) {
	actual.push(timeString(input));
	expected.push(output);
}

test('00:01', '0:00:01')

describe('timeString test', function() {

  it('Returns expected string output when string is passed into timeString function', function() {
    expect(actual).to.eql(expected);
  });

});