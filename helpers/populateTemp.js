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
  output.innerText = `The temperature in ${city}, ${state} is ${Math.floor(Math.round(temp))} degrees F.`;
};
/* eslint-enable no-unused-vars */

if (typeof document === 'undefined') {
  module.exports = {
    populateTemp,
    output,
  };
}
