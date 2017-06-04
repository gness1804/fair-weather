const output = document.querySelector('#output');

/* eslint-disable no-unused-vars */
const populateTemp = (zipVal, temp, city, state) => {
  output.innerText = `The temperature in ${city}, ${state} is ${Math.floor(Math.round(temp))} degrees F.`;
};
/* eslint-enable no-unused-vars */
