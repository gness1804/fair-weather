/* eslint-disable no-unused-vars */
const createLink = (city, state) => {
  document.querySelector('#link').innerHTML = `<a href="https://www.wunderground.com/cgi-bin/findweather/getForecast?query=${city}%20${state}" target="_blank">Extended Forecast for ${city}, ${state}</a>`;
};
/* eslint-enable no-unused-vars */
