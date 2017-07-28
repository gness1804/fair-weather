/* eslint-disable no-unused-vars */
const createLink = (city, state) => {
  document.querySelector('#link').innerHTML = `<a href="https://gness1804.github.io/weather-app-redone/?city=${city}&state=${state}" target="_blank">Extended Forecast for ${city}, ${state}</a>`;
};
/* eslint-enable no-unused-vars */
