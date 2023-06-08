window.addEventListener('DOMContentLoaded', function() {
    var themeToggle = document.getElementById('themeToggle');
  
    themeToggle.addEventListener('change', function() {
      var body = document.body;
      if (themeToggle.checked) {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
    });
  });
  