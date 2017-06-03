const output = document.querySelector('#output');

/* eslint-disable no-unused-vars */
const populateTemp = (zipVal, temp) => {
  output.innerText = `The temperature in ${zipVal} is ${Math.floor(Math.round(temp))} degrees F.`;
};
/* eslint-enable no-unused-vars */
