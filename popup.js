document.addEventListener("DOMContentLoaded", function(event) { 
    const button = document.getElementById("button");
    const output = document.getElementById("output");
    
    button.addEventListener("click", function() {
      output.innerHTML = "Le bouton a été cliqué!";
    });
  });
  