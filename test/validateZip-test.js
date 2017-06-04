/* global it, expect, describe, assert */
const assert = require('chai').assert;
const validateZip = require('../helpers/validateZip');

describe('validateZip', () => {
  it('should be a function', () => {
    assert.isFunction(validateZip);
  });
});
