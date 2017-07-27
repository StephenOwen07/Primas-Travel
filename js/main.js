// Mobile Overlay Nav
var buttonOpen = document.querySelector('.nav--open');
var buttonClose = document.querySelector('.nav--close');

buttonOpen.addEventListener('click', function () {
  document.querySelector('.overlay').style.height = '100%';
});

buttonClose.addEventListener('click', function () {
  document.querySelector('.overlay').style.height = '0%';
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
        700
      );
    });
  });

});