//      
const zip = document.querySelector('#zip-entry-field');
const submitButton = document.querySelector('#submit-button');
const sunriseButton = document.querySelector('#sunrise-sunset-container button');

const makeMainAPICall = (savedZip        )       => {
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
        const icon = JSON.parse(hitAPI.responseText).current_observation.icon_url;
        /* eslint-disable no-undef */
        populateTemp({
          temp,
          city,
          state,
          icon,
        });
        saveZipToLocalStorage(zipVal);
        createLink(city, state);
      } else {
        activateErrorState();
      }
    } else {
      activateErrorState();
      /* eslint-enable no-undef */
    }
  };
};

const getSunriseSunset = async ()       => {
  const zipVal = zip.value || await localStorage.getItem('zipVal');
  if (!validateZip(zipVal)) {
    activateErrorState();
    return;
  }
  document.querySelector('#sunrise-results').innerText = `Result: ${zipVal}`;
  // console.log('zipVal', zipVal)
  const hitAPI = new XMLHttpRequest();
  //need to put dynamic zipVal back in
  const url = `http://api.wunderground.com/api/47fe8304fc0c9639/astronomy/q/78745.json`;
  hitAPI.open('GET', url, true);
  hitAPI.send();
  hitAPI.onreadystatechange = () => {
    if (hitAPI.readyState === XMLHttpRequest.DONE) {
      if (hitAPI.status === 200) {
        //good response; get and show sunset and sunrise data
        const sunriseHour = JSON.parse(hitAPI.responseText.moon_phase.sunrise.hour);
        document.querySelector('#sunrise-results').innerText = `The sun will rise at ${sunriseHour}`;
      } else {
        // activateErrorState();
      }
    } else {
      // activateErrorState();
      /* eslint-enable no-undef */
    }
  };
};

submitButton.addEventListener('click', () => {
  if (!zip.value) {
    /* eslint-disable no-undef */
    activateErrorState();
    return;
  }
  if (!validateZip(zip.value)) {
    activateErrorState();
    return;
    /* eslint-enable no-undef */
  }
  makeMainAPICall('');
});

sunriseButton.addEventListener('click', () => {
  getSunriseSunset();
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
