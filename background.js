// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  alert('hello')
});