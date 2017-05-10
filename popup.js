// @flow

const renderStatus = (statusText: string): void => {
  document.getElementById('status').innerText = statusText;
}

document.addEventListener('DOMContentLoaded', (): void => {
  renderStatus('foobar');
})
