/* global it, expect, describe, assert */
const assert = require('chai').assert;
const validateZip = require('../helpers/validateZip');
const { validZip, invalidZipText, invalidZipLength } = require('./helpers/test-data');

describe('validateZip', () => {
  it('should be a function', () => {
    assert.isFunction(validateZip);
  });

  it('should return true for a valid zip code', () => {
    assert.strictEqual(validateZip(validZip), true);
  });

  it('should return false for an invalid zip code', () => {
    assert.strictEqual(validateZip(''), false);
    assert.strictEqual(validateZip(invalidZipText), false);
    assert.strictEqual(validateZip(invalidZipLength), false);
  });
});
