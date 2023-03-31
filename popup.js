document.getElementById('testButton').addEventListener('click', () => {
    // Envoie un message à background.js pour tester une fonctionnalité
    chrome.runtime.sendMessage({ type: 'test' }, (response) => {
      console.log(response.message);
    });
  });
  