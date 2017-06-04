let output;
let icon;
if (typeof document === 'undefined') {
  output = {
    innerText: '',
  };
  icon = {
    innerHTML: '',
  };
} else {
  output = document.querySelector('#output');
  icon = document.querySelector('#icon');
}

/* eslint-disable no-unused-vars */
const populateTemp = (options) => {
  if (!options.temp || !options.city || !options.state) {
    /* eslint-disable no-undef */
    output.innerText = 'There was a problem fetching your data.';
    /* eslint-enable no-undef */
    return;
  }
  output.innerText = `
  Current temperature in ${options.city}, ${options.state}:

  ${Math.floor(Math.round(options.temp))}

  degrees F.
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
