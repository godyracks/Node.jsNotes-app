  // Toggle Theme, script.js
  document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementById("icon");
  
    icon.addEventListener("click", function() {
      document.body.classList.toggle("dark-theme");
    });
  });