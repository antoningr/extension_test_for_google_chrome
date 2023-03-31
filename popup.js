console.log("L'extension sans permissions fonctionne !");

document.addEventListener('DOMContentLoaded', function() {
  var message = document.getElementById('message');
  var saveButton = document.getElementById('save');
  var valueInput = document.getElementById('value');

  saveButton.addEventListener('click', function() {
    chrome.storage.sync.set({ 'value': valueInput.value }, function() {
      message.textContent = "La valeur " + valueInput.value + " a été enregistrée.";
    });
  });

  chrome.storage.sync.get(['value'], function(result) {
    if (result.value) {
      message.textContent = "La dernière valeur enregistrée était : " + result.value;
      valueInput.value = result.value;
    }
  });
});
