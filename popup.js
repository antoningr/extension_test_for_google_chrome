document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var title = tab.title;
        alert(title);
      });
    });
  });
  