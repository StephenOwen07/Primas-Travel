var preloader = document.getElementById('preload');

// Preloader 
$(window).on('load', function () { // makes sure the whole site is loaded 

  $('#spinner').fadeOut(); // will first fade out the loading animation 
  $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({
    'overflow': 'visible'
  });

});

// Mobile Overlay Nav
var buttonOpen = document.querySelector('.nav--open');
var buttonClose = document.querySelector('.nav--close');
var overlay = document.querySelector('.overlay');

buttonOpen.addEventListener('click', function () {
  overlay.style.height = '100%';
  buttonOpen.style.display = 'none';
});

buttonClose.addEventListener('click', function () {
  overlay.style.height = '0%';
  buttonOpen.style.display = 'initial';
});


$(document).ready(function () {

  // scroll top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".scroll-btn").fadeIn(300);
    } else {
      $(".scroll-btn").fadeOut(300);
    }
  });

  $(function () {
    $(".scroll-btn").click(function (e) {
      $("html, body").animate({
          scrollTop: "0px"
        },
        500
      );
    });
  });


});