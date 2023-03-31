// Récupération des éléments HTML
const toggleExtension = document.getElementById("toggleExtension");
const preferenceInput = document.getElementById("preferenceInput");
const savePreferenceButton = document.getElementById("savePreferenceButton");

// Activation/désactivation de l'extension
toggleExtension.addEventListener("change", () => {
  chrome.management.getSelf((info) => {
    if (toggleExtension.checked) {
      chrome.management.setEnabled(info.id, true);
    } else {
      chrome.management.setEnabled(info.id, false);
    }
  });
});

// Enregistrement des préférences
savePreferenceButton.addEventListener("click", () => {
  chrome.storage.sync.set({ preference: preferenceInput.value }, () => {
    console.log("Préférence enregistrée : ", preferenceInput.value);
  });
});
