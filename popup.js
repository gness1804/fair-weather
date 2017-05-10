const renderStatus = (statusText) => {
  document.getElementById('status').innerText = statusText;
}

document.addEventListener('DOMContentLoaded', () => {
  renderStatus('foobar');
})
