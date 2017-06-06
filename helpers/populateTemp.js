// @flow
let output;
let icon;
if (typeof document === 'undefined') {
  output = {
    innerHTML: '',
  };
  icon = {
    innerHTML: '',
  };
} else {
  output = document.querySelector('#output');
  icon = document.querySelector('#icon');
}

/* eslint-disable no-unused-vars */
const populateTemp = (options: Object): void => {
  if (!options.temp || !options.city || !options.state) {
    /* eslint-disable no-undef */
    output.innerHTML = 'There was a problem fetching your data.';
    /* eslint-enable no-undef */
    return;
  }
  let color;
  if (options.temp < 50) {
    color = 'cold';
  } else if (options.temp < 65) {
    color = 'chilly';
  } else if (options.temp < 80) {
    color = 'ideal';
  } else {
    color = 'hot';
  }
  output.innerHTML = `
  <div>
    <h3>Current temperature in ${options.city}, ${options.state}:</h3>

    <p class="figure ${color}">${Math.floor(Math.round(options.temp))}</p>

  </div>
  `;

  icon.innerHTML = `<img src="${options.icon}"/>`;
};
/* eslint-enable no-unused-vars */

if (typeof document === 'undefined') {
  module.exports = {
    populateTemp,
    output,
    icon,
  };
}
