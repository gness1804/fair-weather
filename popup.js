const renderStatus = (statusText) => {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', () => {
  renderStatus('foobar');
});
