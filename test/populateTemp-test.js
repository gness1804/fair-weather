/* global it, expect, describe, assert */
const assert = require('chai').assert;
const { populateTemp, output, icon } = require('../helpers/populateTemp');
const { fakeTemp, fakeCity, fakeState, fakeIcon } = require('./helpers/test-data');

describe('populateTemp', () => {
  it('should be a function', () => {
    assert.isFunction(populateTemp);
  });

  it('should contain an output object', () => {
    assert.isDefined(output);
  });

  it('should return expected data with a given input', () => {
    populateTemp({
      temp: fakeTemp,
      city: fakeCity,
      state: fakeState,
      icon: fakeIcon,
    });
    assert.strictEqual(output.innerText, '\n  Current temperature in Blacksburg, VA:\n\n  60\n\n  degrees F.\n  ');
    assert.strictEqual(icon.innerHTML, '<img src="http://s3-us-west-2.amazonaws.com/americankennelclub/Cairn-Terrier.jpg"/>');
  });

  it('should return an error message for bad inputs', () => {
    populateTemp({
      city: fakeCity,
      state: fakeState,
    });
    assert.strictEqual(output.innerText, 'There was a problem fetching your data.');
    populateTemp({
      temp: fakeTemp,
      city: fakeCity,
    });
    assert.strictEqual(output.innerText, 'There was a problem fetching your data.');
    populateTemp({
      temp: fakeTemp,
      state: fakeState,
    });
    assert.strictEqual(output.innerText, 'There was a problem fetching your data.');
  });
});
