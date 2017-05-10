const zip = document.querySelector('#zip-entry-field')
const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', () => {
  const output = document.querySelector('#output')
  output.innerText = zip.value
})

