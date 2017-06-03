const zip = document.querySelector('#zip-entry-field');
const submitButton = document.querySelector('#submit-button');
const output = document.querySelector('#output');

const populateTemp = (zipVal, temp) => {
  output.innerText = `The weather in ${zipVal} is ${Math.floor(Math.round(temp))} degrees F.`;
};

const saveZipToLocalStorage = (zipVal) => {
  localStorage.setItem('zipVal', zipVal);
};

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
        populateTemp(zipVal, temp);
        saveZipToLocalStorage(zipVal);
      } else {
        alert('There was a problem with fetching your data. Please ensure that you have entered a five-digit US Zip code and try again.');
      }
    }
  };
};

submitButton.addEventListener('click', () => {
  makeMainAPICall();
});

(function getWeatherOnLoad() {
  const savedZip = localStorage.getItem('zipVal');
  if (savedZip) {
    makeMainAPICall(savedZip);
  }
}());
