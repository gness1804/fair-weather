let output;
if (typeof document === 'undefined') {
  output = {
    innerText: '',
  };
} else {
  output = document.querySelector('#output');
}

/* eslint-disable no-unused-vars */
const populateTemp = (temp, city, state) => {
  if (!temp || !city || !state) {
    /* eslint-disable no-undef */
    output.innerText = 'There was a problem fetching your data.';
    /* eslint-enable no-undef */
    return;
  }
  output.innerText = `
  Current temperature in ${city}, ${state}:

  ${Math.floor(Math.round(temp))}

  degrees F.
  `;
};
/* eslint-enable no-unused-vars */

if (typeof document === 'undefined') {
  module.exports = {
    populateTemp,
    output,
  };
}
