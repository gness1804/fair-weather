/* global it, expect, describe, assert */
const assert = require('chai').assert;
const { populateTemp, output } = require('../helpers/populateTemp');
const { fakeTemp, fakeCity, fakeState } = require('./helpers/test-data');

describe('populateTemp', () => {
  it('should be a function', () => {
    assert.isFunction(populateTemp);
  });

  it('should contain an output object', () => {
    assert.isDefined(output);
  });

  it('should return expected data with a given input', () => {
    populateTemp(fakeTemp, fakeCity, fakeState);
    assert.strictEqual(output.innerText, 'The temperature in Blacksburg, VA is 60 degrees F.');
  });

  it('should return an error message for bad inputs', () => {
    populateTemp(fakeCity, fakeState);
    assert.strictEqual(output.innerText, 'There was a problem fetching your data.');
    populateTemp(fakeTemp, fakeCity);
    assert.strictEqual(output.innerText, 'There was a problem fetching your data.');
    populateTemp(fakeTemp, fakeState);
    assert.strictEqual(output.innerText, 'There was a problem fetching your data.');
  });
});
