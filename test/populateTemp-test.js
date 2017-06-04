/* global it, expect, describe, assert */
const assert = require('chai').assert;
const { populateTemp, output } = require('../helpers/populateTemp');

describe('populateTemp', () => {
  it('should be a function', () => {
    assert.isFunction(populateTemp);
  });

  it('should contain an output object', () => {
    assert.isDefined(output);
  });
});
