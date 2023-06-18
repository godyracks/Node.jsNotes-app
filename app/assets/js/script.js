$("#add_note").submit(function(event){
  alert("Data Inserted Successfully!")
});

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = body.getAttribute('data-theme');

  if (currentTheme === 'light') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="material-icons">brightness_5</i>';
    body.classList.add('dark-theme');
  } else {
    body.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="material-icons">brightness_4</i>';
    body.classList.remove('dark-theme');
  }
}
  
  
  // Toggle Theme, script.js
  document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementById("icon");
  
    icon.addEventListener("click", function() {
      document.body.classList.toggle("dark-theme");
    });
  });

  //
  window.addEventListener("scroll", function() {
    var header = document.getElementById("app-header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  
