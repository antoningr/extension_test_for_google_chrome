// Fonction pour tester une fonctionnalité
function testFeature() {
    console.log('Test de fonctionnalité effectué avec succès !');
  }
  
  // Écoute les messages envoyés depuis popup.js
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'test') {
      testFeature();
      sendResponse({ message: 'Fonctionnalité testée avec succès !' });
    }
  });
  