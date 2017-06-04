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
        // need icon here
        /* eslint-disable no-undef */
        populateTemp({
          temp,
          city,
          state,
          icon,
        });
        saveZipToLocalStorage(zipVal);
      } else {
        output.innerHTML = mainError;
      }
    } else {
      output.innerHTML = mainError;
      /* eslint-enable no-undef */
    }
  };
};

submitButton.addEventListener('click', () => {
  if (!zip.value) {
    /* eslint-disable no-undef */
    output.innerHTML = mainError;
    return;
  }
  if (!validateZip(zip.value)) {
    output.innerHTML = mainError;
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
    output.innerText = noSavedLocation;
    /* eslint-enable no-undef */
  }
}());
