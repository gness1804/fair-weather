const zip = document.querySelector('#zip-entry-field');
const submitButton = document.querySelector('#submit-button');

const makeMainAPICall = (savedZip) => {
  const zipVal = zip.value || savedZip;
  const hitAPI = new XMLHttpRequest();
  const url = `http://api.wunderground.com/api/47fe8304fc0c9639/conditions/q/${zipVal}.json`;
  hitAPI.open('GET', url, true);
  hitAPI.send();
  hitAPI.onreadystatechange = () => {
    if (hitAPI.readyState === XMLHttpRequest.DONE) {
      if (hitAPI.status === 200) {
        const temp = JSON.parse(hitAPI.responseText).current_observation.temp_f;
        const city = JSON.parse(hitAPI.responseText).current_observation.display_location.city;
        const state = JSON.parse(hitAPI.responseText).current_observation.display_location.state;
        /* eslint-disable no-undef */
        populateTemp(zipVal, temp, city, state);
        saveZipToLocalStorage(zipVal);
      } else {
        output.innerHTML = 'There was a problem with fetching your data. Please ensure that you have entered a five-digit US Zip code and try again.';
      }
    } else {
      output.innerHTML = 'There was a problem with fetching your data. Please ensure that you have entered a five-digit US Zip code and try again.';
      /* eslint-enable no-undef */
    }
  };
};

submitButton.addEventListener('click', () => {
  if (!zip.value) {
    /* eslint-disable no-undef */
    output.innerHTML = 'Error: You must enter a five-digit US zip code.';
    return;
  }
  if (!validateZip(zip.value)) {
    output.innerHTML = 'Please ensure that you have entered a valid five-digit US Zip code and try again.';
    return;
    /* eslint-enable no-undef */
  }
  makeMainAPICall();
});

(function getWeatherOnLoad() {
  const savedZip = localStorage.getItem('zipVal');
  if (savedZip) {
    makeMainAPICall(savedZip);
  } else {
    /* eslint-disable no-undef */
    output.innerText = 'You currently have no saved location. Please enter a five-digit US zip code and click submit.';
    /* eslint-enable no-undef */
  }
}());
