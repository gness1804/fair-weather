/* global it, expect, describe, assert */
const assert = require('chai').assert;
const validateZip = require('../helpers/validateZip');
const { validZip } = require('./helpers/test-data');

describe('validateZip', () => {
  it('should be a function', () => {
    assert.isFunction(validateZip);
  });

  it('should return true for a valid zip code', () => {
    assert.strictEqual(validateZip(validZip), true);
  });
});
