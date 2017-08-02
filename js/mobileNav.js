var buttonOpen = document.querySelector('.nav--open');
var buttonClose = document.querySelector('.nav--close');
var overlay = document.querySelector('.overlay');

// Mobile Overlay Nav
buttonOpen.addEventListener('click', function () {
  overlay.style.height = '100%';
  buttonOpen.style.display = 'none';
});

buttonClose.addEventListener('click', function () {
  overlay.style.height = '0%';
  buttonOpen.style.display = 'initial';
});


