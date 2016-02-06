// Navigation
var nav = document.getElementById('nav');

document.getElementById('nav-icon').addEventListener('click', function(e) {
  e.preventDefault();
  (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
});